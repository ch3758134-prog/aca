#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Real Chromium smoke test for the complete offline encyclopedia.
Run in repository with Playwright installed and Chrome available.
Does not connect to any external sources and does not modify evidence.
"""
from pathlib import Path
import re
import sys
from playwright.sync_api import sync_playwright

HOME = Path(__file__).resolve().parent
FULL = HOME / "standalone-full.html"
CHECKS = []

def check(name, test):
    if not test:
        raise AssertionError(f"FAIL: {name}")
    CHECKS.append(name)
    print(f"PASS: {name}", flush=True)

def main():
    check("complete HTML artifact exists", FULL.is_file() and FULL.stat().st_size > 3_500_000)
    with sync_playwright() as p:
        browser = p.chromium.launch(channel="chrome", headless=True, args=["--no-sandbox"])
        try:
            page = browser.new_page(viewport={"width": 1440, "height": 900}, locale="zh-CN")
            errors = []
            page.on("pageerror", lambda err: errors.append(str(err)))
            page.goto(FULL.as_uri(), wait_until="load", timeout=45_000)
            page.locator("#counts").wait_for()
            text = page.locator("#counts").inner_text()
            check("entire claims loaded", bool(re.search(r"\d+条事实", text)) and int(re.search(r"(\d+)条事实", text).group(1)) >= 2907)
            check("complete source ledger loaded", bool(re.search(r"\d+条来源", text)) and int(re.search(r"(\d+)条来源", text).group(1)) >= 1533)
            check("continuous history rendered", page.locator("#main .process-body").count() > 0)
            check("nonempty 82-process reader", page.locator("button.process-tab").count() >= 82)

            page.locator("nav.menu button[data-view='people']").click()
            check("people section opens", page.locator("#main").inner_text().count("人物") > 0)
            page.locator("#q").fill("塞马温")
            page.locator("#q").press("Enter")
            check("person search returns matching content", "塞马温" in page.locator("#main").inner_text())
            page.goto(FULL.as_uri()+"#people/person-semaun", wait_until="load")
            check("deep-linked person opens", "塞马温" in page.locator("#main h2").inner_text())

            page.goto(FULL.as_uri()+"#read/pr-010b", wait_until="load")
            check("new independent labor process opens", "铁路公司" in page.locator("#main").inner_text())
            page.goto(FULL.as_uri()+"#events/event-1923-vstp-railway-strike", wait_until="load")
            check("standalone event linked", "1923年" in page.locator("#main").inner_text())
            page.goto(FULL.as_uri()+"#sources/S913", wait_until="load")
            check("source lookup in full edition", "Ingleson" in page.locator("#main").inner_text())
            page.goto(FULL.as_uri()+"#sources/S028", wait_until="load")
            shared = page.locator("#main").inner_text()
            check("same-document registry cards identified", "共享来源网址" in shared and "S135" in shared and "S1360" in shared)


            page.locator("nav.menu button[data-view='chrono']").click()
            page.locator("#from").fill("1965")
            page.locator("#from").press("Tab")
            check("year-filtered claims render", page.locator("#main .fact").count() > 0)

            page.set_viewport_size({"width": 390, "height": 844})
            page.locator("nav.menu button[data-view='events']").click()
            check("mobile narrow viewport still shows content", page.locator("#main").is_visible())
            check("mobile has no page-level horizontal overflow", page.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 2"))
            page.goto(FULL.as_uri()+"#read/pr-037b", wait_until="load")
            check("1996 PRD process has authoritative C2933 citation", "C2933" in page.locator("#main").inner_text())
            page.goto(FULL.as_uri()+"#events/event-1996-prd-crackdown", wait_until="load")
            check("1996 PRD event opens after data sync", "1996" in page.locator("#main").inner_text())
            page.goto(FULL.as_uri()+"#sources/S1542", wait_until="load")
            check("new contemporaneous primary reporting linked", "Human Rights Watch" in page.locator("#main").inner_text())

            check("no unhandled JavaScript errors", not errors)
        finally:
            browser.close()
    print(f"CHROMIUM_OFFLINE_SMOKE: PASS {len(CHECKS)} checks", flush=True)

if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"CHROMIUM_OFFLINE_SMOKE: FAIL {exc}", file=sys.stderr)
        raise
