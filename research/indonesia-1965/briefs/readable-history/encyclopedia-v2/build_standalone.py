#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Reproducibly build a FULL, self-contained HTML edition of Indonesia V2.
This edition contains the complete generated claim and source records, not
merely the references visible in the main narrative. Only external evidence
links require internet when the reader clicks them.

Usage (repository root or any cwd):
  python research/indonesia-1965/briefs/readable-history/encyclopedia-v2/build_standalone.py
  python research/indonesia-1965/briefs/readable-history/encyclopedia-v2/build_standalone.py --check
No third-party packages. No external requests. Never edits canonical CSV.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
INDEX = HERE / "index.html"
CSS = HERE / "style.css"
OUTPUT = HERE / "standalone-full.html"

LINK_PATTERN = re.compile(r'<link\s+rel="stylesheet"\s+href="style\.css"\s*/?>', re.I)
SCRIPT_PATTERN = re.compile(r'<script\s+src="([^"]+)"\s*>\s*</script>', re.I)
HTML_END_SCRIPT = re.compile(r"</script", re.I)


def safe_js_inline(code: str) -> str:
    # Prevent any literal </script from prematurely closing an HTML script tag.
    return HTML_END_SCRIPT.sub(r"<\\/script", code)


def build() -> tuple[str, int]:
    html = INDEX.read_text(encoding="utf-8")
    css = CSS.read_text(encoding="utf-8")
    found = list(LINK_PATTERN.finditer(html))
    if len(found) != 1:
        raise ValueError(f"Expected one local style.css link, got {len(found)}")
    html = LINK_PATTERN.sub(lambda m: "<style>\n" + css + "\n</style>", html)
    count = 0

    def inline_script(match: re.Match) -> str:
        nonlocal count
        rel = match.group(1)
        path = (HERE / rel).resolve()
        if not path.is_relative_to(HERE.resolve()) or not path.is_file():
            raise ValueError(f"Missing or nonlocal script: {rel}")
        data = path.read_text(encoding="utf-8").rstrip("\n")
        count += 1
        return "<script>\n" + safe_js_inline(data) + "\n</script>"

    html = SCRIPT_PATTERN.sub(inline_script, html)
    if count == 0 or SCRIPT_PATTERN.search(html):
        raise ValueError("Scripts were not all converted to embedded local data")
    prefix = "<!-- Generated from index.html, style.css and data/; do not edit standalone-full.html manually. -->\n"
    if html.lower().startswith("<!doctype html>"):
        idx = html.find("\n")
        html = html[:idx+1] + prefix + html[idx+1:]
    else:
        html = prefix + html
    return html, count


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true",
                        help="Compare generated edition to current standalone; do not write")
    args = parser.parse_args()
    content, count = build()
    encoded = content.encode("utf-8")
    if args.check:
        if not OUTPUT.is_file() or OUTPUT.read_bytes() != encoded:
            print("FAIL: standalone-full.html is stale; run build_standalone.py to regenerate")
            return 1
        print(f"PASS: standalone.html matches index/assets, {count} embedded scripts, {len(encoded)} bytes")
        return 0
    with OUTPUT.open("w", encoding="utf-8", newline="\n") as fh:
        fh.write(content)
    print(f"Built {OUTPUT.name}: {count} embedded scripts, {len(encoded)} bytes")
    print("All claims and all sources are present; refer to validate_v2.py for ID/citation checks.")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (OSError, ValueError) as err:
        print(f"FAIL: {err}", file=sys.stderr)
        sys.exit(1)
