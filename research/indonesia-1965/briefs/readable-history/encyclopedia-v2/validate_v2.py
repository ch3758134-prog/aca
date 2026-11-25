#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Deterministic integrity review for canonical Indonesian-history research and V2.
Run from any directory: python research/indonesia-1965/briefs/readable-history/encyclopedia-v2/validate_v2.py
Uses the Python standard library. It does not modify data, run CI or validate historical truth.
"""
from __future__ import annotations
import csv
import json
import re
import sys
from collections import Counter
from pathlib import Path

HERE = Path(__file__).resolve().parent
RECORDS = HERE.parents[2] / "archive" / "records"
JS_PUSH = re.compile(r"window\.HIST\.(\w+)\.push\(\.\.\.(\[[^\n]*\])\);")
SOURCE_ID = re.compile(r"S\d{3,5}")
errors: list[str] = []
warnings: list[str] = []


def read_json_arrays(file: Path) -> dict[str, list]:
    text = file.read_text(encoding="utf-8")
    result: dict[str, list] = {}
    for match in JS_PUSH.finditer(text):
        try:
            arr = json.loads(match.group(2))
        except json.JSONDecodeError as exc:
            errors.append(f"{file}: malformed JSON: {exc}")
            continue
        result.setdefault(match.group(1), []).extend(arr)
    return result


def merge(*files: str) -> dict[str, list]:
    result: dict[str, list] = {}
    for name in files:
        path = HERE / "data" / name
        if not path.is_file():
            errors.append(f"Missing data file: {name}")
            continue
        for key, rows in read_json_arrays(path).items():
            result.setdefault(key, []).extend(rows)
    return result


def check_unique(records: list[dict], label: str) -> set[str]:
    ids = [str(x.get("id", "")) for x in records]
    duplicate = [k for k, n in Counter(ids).items() if n > 1]
    if duplicate:
        errors.append(f"Duplicate {label} IDs: {duplicate[:12]}")
    if not all(ids):
        errors.append(f"Unidentified records in {label}")
    return set(ids)


def official_rows(name: str, key: str) -> dict[str, dict]:
    path = RECORDS / name
    with path.open(encoding="utf-8-sig", newline="") as fh:
        rows = list(csv.DictReader(fh))
    result = {row[key]: row for row in rows}
    if len(result) != len(rows):
        errors.append(f"Duplicate canonical CSV IDs in {name}")
    return result


def validate() -> tuple[dict, dict]:
    data = merge(
        "claims-01.js", "claims-02.js", "claims-03.js",
        "sources.js", "coverage.js", "people.js",
        "people-extra.js", "people-extra2.js",
        "events.js", "events-extra.js", "organizations.js", "organizations-extra.js",
        "organizations-extra2.js", "roles.js", "roles-extra.js",
        "relations.js", "relations-extra.js",
        "processes-01.js", "processes-02.js",
        "processes-03.js", "processes-04.js",
    )
    for k in ("claims", "sources", "coverage", "people", "events",
              "organizations", "roles", "relations", "processes"):
        data.setdefault(k, [])
    ids = {k: check_unique(data[k], k) for k in
           ("claims", "sources", "coverage", "people", "events",
            "organizations", "processes")}
    ids["roles"] = set()
    ids["relations"] = set()

    for r in data["claims"]:
        for sid in r.get("source_ids", []):
            if sid not in ids["sources"]:
                errors.append(f"{r['id']} cites missing source {sid}")
    for event in data["events"]:
        if event.get("process_id") and event["process_id"] not in ids["processes"]:
            errors.append(f"Event {event['id']} orphan process {event['process_id']}")
        for k, target in (("people", "people"), ("orgs", "organizations"),
                          ("claims", "claims")):
            for ref in event.get(k, []):
                if ref not in ids[target]:
                    errors.append(f"Event {event['id']} orphan {k}: {ref}")
    for r in data["roles"]:
        if r.get("organization") not in ids["organizations"]:
            errors.append(f"Orphan role organization {r.get('organization')}")
        if r.get("person_id") and r["person_id"] not in ids["people"]:
            errors.append(f"Orphan role person {r['person_id']}")
        if not r.get("person_id"):
            warnings.append(f"Role person needs disambiguation: {r.get('person')}")
    for r in data["relations"]:
        for field in ("from", "to"):
            if r.get(field) not in ids["organizations"]:
                errors.append(f"Relation orphan {field}: {r.get(field)}")
    for r in data["processes"]:
        for field, target in (("orgs", "organizations"), ("people", "people")):
            for ref in r.get(field, []):
                if ref not in ids[target]:
                    errors.append(f"{r.get('id')} orphan {field}: {ref}")
        if not r.get("claims") and not r.get("evidence_urls"):
            warnings.append(f"Process lacks directly linked proof: {r.get('id')}")
    for r in data["roles"] + data["relations"] + data["processes"]:
        for claim in r.get("claims", []):
            if claim not in ids["claims"]:
                errors.append(f"Missing referenced claim {claim}")

    canonical_claims = official_rows("claim-ledger.csv", "claim_id")
    canonical_sources = official_rows("source-register.csv", "source_id")
    if ids["claims"] != set(canonical_claims):
        errors.append(f"Generated claims do not match canonical CSV "
                      f"(extra={len(ids['claims']-set(canonical_claims))}, "
                      f"missing={len(set(canonical_claims)-ids['claims'])})")
    if ids["sources"] != set(canonical_sources):
        errors.append("Generated sources do not match canonical source CSV")
    for x in data["claims"]:
        r = canonical_claims.get(x["id"])
        if not r:
            continue
        check = {"text": r["atomic_claim_or_observation"],
                 "period": r["period"], "type": r["claim_type"],
                 "confidence": r["confidence"],
                 "basis": r["basis_and_limitations"],
                 "next": r["next_verification"]}
        for key, expected in check.items():
            if x.get(key, "") != expected:
                errors.append(f"{x['id']} generated {key} differs from canonical CSV")
        if x.get("source_ids", []) != SOURCE_ID.findall(r["source_ids"]):
            errors.append(f"{x['id']} generated sources differ from canonical CSV")
    for x in data["sources"]:
        r = canonical_sources.get(x["id"])
        if r and (x.get("title") != r["title"] or x.get("url") != r["url"]):
            errors.append(f"{x['id']} source title/url differs from canonical")

    portable_path = HERE / "standalone.html"
    portable = read_json_arrays(portable_path)
    for kind in ("claims", "sources", "people", "organizations",
                 "roles", "relations", "processes", "coverage", "events"):
        portable.setdefault(kind, [])
    for kind in ("people", "organizations", "roles", "relations",
                 "processes", "coverage", "events"):
        if portable[kind] != data[kind]:
            errors.append(f"Portable HTML {kind} differs from multi-file edition")
    pc = {x["id"]: x for x in portable["claims"]}
    ps = {x["id"]: x for x in portable["sources"]}
    cc = {x["id"]: x for x in data["claims"]}
    ss = {x["id"]: x for x in data["sources"]}
    for name, subset, full in (("claim", pc, cc), ("source", ps, ss)):
        for k, v in subset.items():
            if k not in full or v != full[k]:
                errors.append(f"Portable {name} {k} is stale or noncanonical")
    required = set()
    for item in data["roles"] + data["relations"] + data["processes"]:
        required.update(item.get("claims", []))
    for cid in required:
        if cid not in pc:
            errors.append(f"Portable file lacks referenced claim {cid}")
    for c in pc.values():
        for sid in c.get("source_ids", []):
            if sid not in ps:
                errors.append(f"Portable file lacks source {sid} for {c['id']}")
    index = (HERE / "index.html").read_text(encoding="utf-8")
    for f in re.findall(r'<script\s+src="([^"]+)"\s*>\s*</script>', index):
        if not (HERE / f).is_file():
            errors.append(f"index.html references missing script {f}")

    summary = {k: len(v) for k, v in data.items()}
    portable_summary = {k: len(v) for k, v in portable.items()}
    return summary, portable_summary


if __name__ == "__main__":
    try:
        full_counts, offline_counts = validate()
    except (OSError, KeyError, ValueError) as exc:
        errors.append(f"Validation could not complete: {exc}")
        full_counts, offline_counts = {}, {}
    print("Canonical / multi-file:", json.dumps(full_counts, ensure_ascii=False))
    print("Portable:", json.dumps(offline_counts, ensure_ascii=False))
    print("Unresolved evidence/identity warnings:", len(warnings))
    for message in warnings[:15]:
        print("WARN:", message)
    for message in errors[:35]:
        print("ERROR:", message)
    print("INTEGRITY:", "PASS" if not errors else "FAIL")
    sys.exit(1 if errors else 0)
