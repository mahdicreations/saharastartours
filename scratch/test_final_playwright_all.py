import os
from playwright.sync_api import sync_playwright

output_dir = r"C:\Users\el mahdi\.gemini\antigravity-ide\brain\78ff4a39-3a4e-4529-9a6b-a7d4cbd3864d"

def final_visual_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # 1. 15-Days Grand Tour Desktop
        page = browser.new_page(viewport={"width": 1400, "height": 900})
        furl = f"file:///{os.path.abspath('tours/15-days-tour-from-casablanca.html').replace(os.sep, '/')}"
        page.goto(furl, wait_until="networkidle")
        page.wait_for_timeout(2000)
        
        # Check horizontal overflow
        scroll_w = page.evaluate("() => document.documentElement.scrollWidth")
        client_w = page.evaluate("() => document.documentElement.clientWidth")
        print(f"15-Day Desktop: scrollWidth={scroll_w}, clientWidth={client_w}, overflow={scroll_w > client_w}")
        
        map_el = page.locator("#tour-route-map-card")
        map_el.scroll_into_view_if_needed()
        page.wait_for_timeout(1000)
        map_el.screenshot(path=os.path.join(output_dir, "final_15day_leaflet_map.png"))
        print("[OK] final_15day_leaflet_map.png captured")
        page.close()

        # 2. 3-Days Marrakech to Fes Desktop
        page2 = browser.new_page(viewport={"width": 1400, "height": 900})
        furl2 = f"file:///{os.path.abspath('tours/3-days-desert-tour-from-marrakech-to-fes.html').replace(os.sep, '/')}"
        page2.goto(furl2, wait_until="networkidle")
        page2.wait_for_timeout(2000)
        
        map_el2 = page2.locator("#tour-route-map-card")
        map_el2.scroll_into_view_if_needed()
        page2.wait_for_timeout(1000)
        map_el2.screenshot(path=os.path.join(output_dir, "final_3day_leaflet_map.png"))
        print("[OK] final_3day_leaflet_map.png captured")
        page2.close()

        # 3. Mobile Viewport (390x844) Check 0 Horizontal Overflow
        mob_context = browser.new_context(viewport={"width": 390, "height": 844}, is_mobile=True)
        mob_page = mob_context.new_page()
        mob_page.goto(furl2, wait_until="networkidle")
        mob_page.wait_for_timeout(2000)
        
        mob_scroll_w = mob_page.evaluate("() => document.documentElement.scrollWidth")
        mob_client_w = mob_page.evaluate("() => document.documentElement.clientWidth")
        print(f"Mobile Viewport: scrollWidth={mob_scroll_w}, clientWidth={mob_client_w}, overflow={mob_scroll_w > mob_client_w}")
        
        mob_page.screenshot(path=os.path.join(output_dir, "final_tour_mobile_scroll_test.png"))
        print("[OK] final_tour_mobile_scroll_test.png captured")
        mob_page.close()

        browser.close()
        print("\nAll final tests verified!")

if __name__ == "__main__":
    final_visual_verification()
