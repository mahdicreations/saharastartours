import os
from playwright.sync_api import sync_playwright

output_dir = r"C:\Users\el mahdi\.gemini\antigravity-ide\brain\78ff4a39-3a4e-4529-9a6b-a7d4cbd3864d"

def run_visual_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # Test 1: 15-day tour (Desktop)
        page = browser.new_page(viewport={"width": 1280, "height": 900})
        furl = f"file:///{os.path.abspath('tours/15-days-tour-from-casablanca.html').replace(os.sep, '/')}"
        page.goto(furl, wait_until="networkidle")
        page.wait_for_timeout(1000)
        
        # Screenshot map card
        map_el = page.locator(".route-map-card").first
        if map_el.count() > 0:
            map_el.scroll_into_view_if_needed()
            page.wait_for_timeout(500)
            map_el.screenshot(path=os.path.join(output_dir, "verify_15day_map_desktop.png"))
            print("[OK] verify_15day_map_desktop.png captured")
            
        # Screenshot timeline card (with justified text & Moroccan pattern)
        tl_el = page.locator(".timeline-card").last
        if tl_el.count() > 0:
            tl_el.scroll_into_view_if_needed()
            page.wait_for_timeout(500)
            tl_el.screenshot(path=os.path.join(output_dir, "verify_15day_timeline_desktop.png"))
            print("[OK] verify_15day_timeline_desktop.png captured")

        # Screenshot booking form with travel style selector
        form_el = page.locator(".booking-sidebar-card").first
        if form_el.count() > 0:
            form_el.scroll_into_view_if_needed()
            page.wait_for_timeout(500)
            form_el.screenshot(path=os.path.join(output_dir, "verify_15day_form_desktop.png"))
            print("[OK] verify_15day_form_desktop.png captured")
            
        page.close()

        # Test 2: 3-day desert tour (Mobile Viewport)
        mob_context = browser.new_context(viewport={"width": 390, "height": 844}, is_mobile=True, user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1")
        mob_page = mob_context.new_page()
        furl2 = f"file:///{os.path.abspath('tours/3-days-desert-tour-from-marrakech-to-fes.html').replace(os.sep, '/')}"
        mob_page.goto(furl2, wait_until="networkidle")
        mob_page.wait_for_timeout(1000)
        
        # Capture mobile viewport showing sticky floating action bar
        mob_page.screenshot(path=os.path.join(output_dir, "verify_3day_mobile_floating_bar.png"))
        print("[OK] verify_3day_mobile_floating_bar.png captured")
        
        # Click "Book Now ↓" on mobile bar and verify smooth scroll to booking form
        mob_btn = mob_page.locator("#mobile-booking-bar .mf-btn")
        if mob_btn.count() > 0:
            mob_btn.click()
            mob_page.wait_for_timeout(1000)
            mob_page.screenshot(path=os.path.join(output_dir, "verify_3day_mobile_scrolled_to_form.png"))
            print("[OK] verify_3day_mobile_scrolled_to_form.png captured")
            
        # Test 3: Ouzoud Waterfalls Day Trip (Desktop Map card)
        page3 = browser.new_page(viewport={"width": 1280, "height": 900})
        furl3 = f"file:///{os.path.abspath('tours/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-.html').replace(os.sep, '/')}"
        page3.goto(furl3, wait_until="networkidle")
        page3.wait_for_timeout(1000)
        map3_el = page3.locator(".route-map-card")
        if map3_el.count() > 0:
            map3_el.scroll_into_view_if_needed()
            page3.wait_for_timeout(500)
            map3_el.screenshot(path=os.path.join(output_dir, "verify_ouzoud_map_desktop.png"))
            print("[OK] verify_ouzoud_map_desktop.png captured")
        page3.close()

        browser.close()
        print("\nAll verification screenshots captured successfully!")

if __name__ == "__main__":
    run_visual_verification()
