#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rebuild the encyclopedia's generated JS indexes from existing canonical assets.
Requires only Python 3 standard library. Does NOT mutate the source ledger or the
hand-curated role, organization, or relationship files.
"""
from __future__ import annotations
import csv
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
PROJECT = HERE.parents[2]
RECORDS = PROJECT / "archive" / "records"
HISTORY = HERE.parent
OUT = HERE / "data"

RE_YEAR = re.compile(r"(?:1[6789]\d{2}|20\d{2})")
RE_ID = re.compile(r"S\d{3,5}")


def load_csv(path: Path) -> list[dict]:
    with path.open("r", encoding="utf-8-sig", newline="") as fh:
        return list(csv.DictReader(fh))


def write_js(filename: str, bucket: str, values: list[dict]) -> None:
    payload = json.dumps(values, ensure_ascii=False, separators=(",", ":"))
    text = (
        "window.HIST=window.HIST||{claims:[],sources:[],coverage:[],"
        "people:[],events:[],organizations:[],roles:[],chapters:[]};\n"
        f"window.HIST.{bucket}.push(...{payload});\n"
    )
    (OUT / filename).write_text(text, encoding="utf-8")


def parse_legacy_entries(html: str) -> tuple[list[dict], list[dict]]:
    people, events = [], []
    pat = re.compile(
        r'<article class="entry" id="(person|event)-([^"]+)">'
        r"([\s\S]*?)</article>"
    )
    def plain(s: str) -> str:
        s = re.sub(r"<[^>]*>", " ", s)
        s = s.replace("&amp;", "&").replace("&nbsp;", " ")
        return re.sub(r"\s+", " ", s).strip()

    for kind, suffix, body in pat.findall(html):
        title_match = re.search(r"<h3[^>]*>([\s\S]*?)</h3>", body)
        title = plain(title_match.group(1) if title_match else "")
        para = re.findall(r"<p(?![^>]*entry-nav)[^>]*>([\s\S]*?)</p>", body)
        entry = {
            "id": kind + "-" + suffix,
            "title": title,
            "description": "\n".join(plain(p) for p in para),
            "legacy_url": "../people-events-reference-1830-2026.html#"
                          + kind + "-" + suffix,
        }
        (people if kind == "person" else events).append(entry)
    return people, events


def parse_chapters(html: str) -> list[dict]:
    chapters = []
    pat = re.compile(r'<section class="chapter"[^>]*>([\s\S]*?)</section>')
    for index, body in enumerate(pat.findall(html), 1):
        head = re.search(r"<h2[^>]*>([\s\S]*?)</h2>", body)
        title = re.sub(r"<[^>]*>", "", head.group(1)).strip() if head else f"第{index}章"
        body = re.sub(
            r'href="(?!https?:|mailto:|#|/)([^"]+)"',
            r'href="../\1"', body
        )
        body = re.sub(
            r'href="#(n\d+)"',
            r'href="../indonesia-left-history-continuous-1830-2026.html#\1"',
            body,
        )
        dates = [int(y) for y in RE_YEAR.findall(title)]
        chapters.append({
            "id": f"chapter-{index:02d}", "title": title, "html": body,
            "years": [dates[0], dates[-1]] if dates else [None, None],
        })
    return chapters


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    claim_rows = load_csv(RECORDS / "claim-ledger.csv")
    claims = []
    for r in claim_rows:
        cid = (r.get("claim_id") or "").strip()
        if not re.fullmatch(r"C\d+", cid):
            continue
        period = r.get("period") or ""
        y = RE_YEAR.search(period)
        claims.append({
            "id": cid,
            "text": r.get("atomic_claim_or_observation") or "",
            "period": period,
            "type": r.get("claim_type") or "",
            "source_ids": RE_ID.findall(r.get("source_ids") or ""),
            "confidence": r.get("confidence") or "",
            "basis": r.get("basis_and_limitations") or "",
            "next": r.get("next_verification") or "",
            "year": int(y.group()) if y else None,
        })
    sources = []
    for r in load_csv(RECORDS / "source-register.csv"):
        sid = (r.get("source_id") or "").strip()
        if not re.fullmatch(r"S\d+", sid):
            continue
        sources.append({
            "id": sid, "title": r.get("title") or "",
            "creator": r.get("creator_or_institution") or "",
            "date": r.get("date") or "", "url": r.get("url") or "",
            "kind": r.get("source_type") or "",
            "access": r.get("access_status") or "",
            "note": r.get("limitations_or_use_note") or "",
        })
    coverage = []
    for r in load_csv(RECORDS / "coverage-matrix.csv"):
        cid = (r.get("coverage_id") or "").strip()
        if not re.fullmatch(r"CV\d+", cid):
            continue
        coverage.append({
            "id": cid, "period": r.get("period") or "",
            "topic": r.get("topic") or "", "status": r.get("status") or "",
            "note": r.get("scope_note") or "",
            "path": r.get("priority_sources_or_search_path") or "",
            "priority": r.get("priority") or "",
        })
    seen_sources = {s["id"] for s in sources}
    missing = [(c["id"], sid) for c in claims for sid in c["source_ids"]
               if sid not in seen_sources]
    assert not missing, f"Missing cited sources: {missing[:15]}"
    assert len({c["id"] for c in claims}) == len(claims), "Duplicate claim ID"
    assert len(seen_sources) == len(sources), "Duplicate source ID"
    for i in range(0, len(claims), 1000):
        write_js(f"claims-{i // 1000 + 1:02d}.js", "claims",
                 claims[i:i+1000])
    write_js("sources.js", "sources", sources)
    write_js("coverage.js", "coverage", coverage)
    raw = (HISTORY / "people-events-reference-1830-2026.html").read_text(encoding="utf-8")
    people, events = parse_legacy_entries(raw)
    write_js("people.js", "people", people)
    write_js("events.js", "events", events)
    original = (HISTORY / "indonesia-left-history-continuous-1830-2026.html").read_text(encoding="utf-8")
    chapters = parse_chapters(original)
    write_js("chapters.js", "chapters", chapters)
    print("Rebuilt:",len(claims),"claims;",len(sources),"sources;",
          len(coverage),"coverage;",len(people),"legacy people;",
          len(events),"events;",len(chapters),"reading chapters")
    print("Curated additions retained separately: people-extra.js, "
          "organizations.js, organizations-extra.js, roles.js, relations.js")


if __name__ == "__main__":
    main()
