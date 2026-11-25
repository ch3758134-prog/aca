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
FILES = (
    "coverage.js", "people-extra2.js", "organizations-extra2.js", "roles-extra.js",
    "relations-extra.js", "processes-01.js", "processes-02.js",
    "processes-03.js", "processes-04.js", "events-extra.js",
)
SCRIPT = re.compile(r"(<script(?:\s[^>]*)?>)([\s\S]*?)(</script>)", re.I)
PUSH = re.compile(r"window\.HIST\.(\w+)\.push\(\.\.\.(\[[^\n]*\])\);")


def data_records(text):
    found = []
    for match in PUSH.finditer(text):
        found.append((match.group(1), json.loads(match.group(2))))
    return found


def identity(bucket, first):
    if "id" in first:
        return (bucket, first["id"])
    if bucket == "roles":
        return (bucket, first.get("date"), first.get("person"),
                first.get("organization"), first.get("role"))
    if bucket == "relations":
        return (bucket, first.get("from"), first.get("to"),
                first.get("type"), first.get("period"))
    raise ValueError("Unrecognized entity identity: " + bucket)


def sync():
    page = PAGE.read_text(encoding="utf-8")
    for filename in FILES:
        content = (HERE / "data" / filename).read_text(encoding="utf-8").strip()
        parsed = data_records(content)
        if len(parsed) != 1 or not parsed[0][1]:
            raise ValueError("Unsupported data format: " + filename)
        target = identity(parsed[0][0], parsed[0][1][0])
        matches = []
        for match in SCRIPT.finditer(page):
            for bucket, rows in data_records(match.group(2)):
                if rows and identity(bucket, rows[0]) == target:
                    matches.append(match)
        if len(matches) != 1:
            raise ValueError(f"Expected one compact HTML script for {filename}, got {len(matches)}")
        found = matches[0]
        replacement = found.group(1) + "\n" + content.replace("</script", "<\\/script") + "\n" + found.group(3)
        page = page[:found.start()] + replacement + page[found.end():]
    if '<script src="' in page:
        raise ValueError("Compact HTML unexpectedly depends on external scripts")
    original = PAGE.read_text(encoding="utf-8")
    if page != original:
        PAGE.write_text(page, encoding="utf-8", newline="\n")
    print("Synchronized compact HTML from " + str(len(FILES)) + " entity/relationship datasets")


if __name__ == "__main__":
    sync()
