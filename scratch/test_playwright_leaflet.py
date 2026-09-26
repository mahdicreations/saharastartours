import os
from playwright.sync_api import sync_playwright

output_dir = r"C:\Users\el mahdi\.gemini\antigravity-ide\brain\78ff4a39-3a4e-4529-9a6b-a7d4cbd3864d"

def test_7day_leaflet():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1400, "height": 900})
        
        furl = f"file:///{os.path.abspath('tours/7-day-morocco-tour-from-casablanca.html').replace(os.sep, '/')}"
        page.goto(furl, wait_until="networkidle")
        page.wait_for_timeout(2500)
        
        # 1. Capture Layout overview
        cont_el = page.locator(".tour-container")
        box = cont_el.bounding_box()
        main_el = page.locator(".tour-main")
        main_box = main_el.bounding_box()
        sidebar_el = page.locator(".tour-sidebar")
        sb_box = sidebar_el.bounding_box()
        print(f"Container width: {box['width']:.1f}px | Main width: {main_box['width']:.1f}px | Sidebar width: {sb_box['width']:.1f}px")

        # 2. Capture Leaflet Tour Map Card
        map_card = page.locator("#tour-route-map-card")
        map_card.scroll_into_view_if_needed()
        page.wait_for_timeout(1000)
        map_card.screenshot(path=os.path.join(output_dir, "check_7day_leaflet_map.png"))
        print("[OK] check_7day_leaflet_map.png captured")

        # 3. Test clicking a waypoint button (e.g. Merzouga Sahara)
        stops = page.locator(".map-stop-btn")
        print(f"Found {stops.count()} waypoint buttons")
        for i in range(stops.count()):
            txt = stops.nth(i).text_content()
            if "Merzouga" in txt:
                stops.nth(i).click()
                print(f"Clicked {txt}")
                page.wait_for_timeout(1200)
                break
                
        map_card.screenshot(path=os.path.join(output_dir, "check_7day_leaflet_popup_open.png"))
        print("[OK] check_7day_leaflet_popup_open.png captured")

        # 4. Test clicking Mode Sombre toggle
        toggle_btn = page.locator("#map-theme-toggle-btn")
        if toggle_btn.count() > 0:
            toggle_btn.click()
            page.wait_for_timeout(500)
            map_card.screenshot(path=os.path.join(output_dir, "check_7day_leaflet_dark_mode.png"))
            print("[OK] check_7day_leaflet_dark_mode.png captured")

        browser.close()

if __name__ == "__main__":
    test_7day_leaflet()
