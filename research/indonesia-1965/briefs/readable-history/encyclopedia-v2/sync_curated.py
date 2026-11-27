#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Synchronize hand-edited V2 entity records into the compact offline edition.
Preserves intentional small claim/source selection; synchronizes people/org/event
and their relationship/role/process arrays without altering canonical records.
"""
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
PAGE = HERE / "standalone.html"
GROUPS = {
    "coverage": ("coverage.js",),
    "people": ("people.js", "people-extra.js", "people-extra2.js"),
    "events": ("events.js", "events-extra.js"),
    "organizations": ("organizations.js", "organizations-extra.js", "organizations-extra2.js"),
    "roles": ("roles.js", "roles-extra.js"),
    "relations": ("relations.js", "relations-extra.js"),
    "processes": ("processes-01.js", "processes-02.js", "processes-03.js", "processes-04.js"),
}
SCRIPT = re.compile(r"(<script(?:\s[^>]*)?>)([\s\S]*?)(</script>)", re.I)
PUSH = re.compile(r"window\.HIST\.(\w+)\.push\(\.\.\.(\[[^\n]*\])\);")


def data_records(text):
    found = []
    for match in PUSH.finditer(text):
        found.append((match.group(1), json.loads(match.group(2))))
    return found


def replace_bucket(page, bucket, rows):
    """Replace all pushes for this bucket with canonical ordered data.
    Existing script initialization and order are retained. Later pushes
    become empty, so changing the first entity ID cannot break sync.
    """
    matches = [m for m in PUSH.finditer(page) if m.group(1) == bucket]
    if not matches:
        raise ValueError("Missing inline bucket: " + bucket)
    for i, match in reversed(list(enumerate(matches))):
        payload = json.dumps(rows if i == 0 else [], ensure_ascii=False,
                             separators=(",", ":")).replace("</script", "<\\/script")
        page = page[:match.start(2)] + payload + page[match.end(2):]
    return page


def append_referenced_claims(page):
    """Include all directly cited formal C/S in compact reading, no duplicates."""
    needed = set()
    for filename in ("roles.js", "roles-extra.js", "relations.js",
                     "relations-extra.js", "processes-01.js", "processes-02.js",
                     "processes-03.js", "processes-04.js", "events-extra.js", "events.js"):
        data = (HERE / "data" / filename).read_text(encoding="utf-8")
        for _, rows in data_records(data):
            for row in rows:
                needed.update(row.get("claims", []))

    def all_records(files, bucket):
        records = {}
        for filename in files:
            text = (HERE / "data" / filename).read_text(encoding="utf-8")
            for name, rows in data_records(text):
                if name == bucket:
                    for row in rows:
                        records[row["id"]] = row
        return records

    full_claims = all_records(("claims-01.js","claims-02.js","claims-03.js"), "claims")
    full_sources = all_records(("sources.js",), "sources")
    portable = data_records(page)
    def existing(bucket):
        return {row["id"]:row for name,rows in portable if name==bucket for row in rows}
    selected = set(existing("claims")) | needed
    if selected - full_claims.keys():
        raise ValueError("Missing canonical claims: " + str(sorted(selected - full_claims.keys())))
    compact_claims = {cid: full_claims[cid] for cid in full_claims if cid in selected}
    selected_sources = set(existing("sources"))
    for record in compact_claims.values():
        selected_sources.update(record.get("source_ids", []))
    if selected_sources - full_sources.keys():
        raise ValueError("Missing canonical sources: " + str(sorted(selected_sources - full_sources.keys())))
    compact_sources = {sid: full_sources[sid] for sid in full_sources if sid in selected_sources}
    for bucket, records in (("claims", compact_claims), ("sources", compact_sources)):
        page = replace_bucket(page, bucket, list(records.values()))
    print(f"Compact provenance selection: {len(compact_claims)} C / {len(compact_sources)} S")
    return page


def sync():
    page = PAGE.read_text(encoding="utf-8")
    for bucket, filenames in GROUPS.items():
        rows = []
        for filename in filenames:
            content = (HERE / "data" / filename).read_text(encoding="utf-8")
            parsed = data_records(content)
            if len(parsed) != 1 or parsed[0][0] != bucket:
                raise ValueError("Unexpected data format: " + filename)
            rows.extend(parsed[0][1])
        page = replace_bucket(page, bucket, rows)
    page = append_referenced_claims(page)
    if '<script src="' in page:
        raise ValueError("Compact HTML unexpectedly depends on external scripts")
    original = PAGE.read_text(encoding="utf-8")
    if page != original:
        PAGE.write_text(page, encoding="utf-8", newline="\n")
    print("Synchronized compact HTML from " + str(sum(len(files) for files in GROUPS.values())) + " entity/relationship datasets")


if __name__ == "__main__":
    sync()
