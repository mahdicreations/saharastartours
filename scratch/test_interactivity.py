import os
from playwright.sync_api import sync_playwright

output_dir = r"C:\Users\el mahdi\.gemini\antigravity-ide\brain\78ff4a39-3a4e-4529-9a6b-a7d4cbd3864d"

def test_interactivity():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1400, "height": 900})
        
        url = "http://localhost:4321/tours/13-days-casablanca-tour"
        page.goto(url, wait_until="networkidle")
        page.wait_for_timeout(1500)
        
        map_card = page.locator(".tour-map-card")
        map_card.scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        
        # Test 1: Click Merzouga stop button
        print("Clicking Merzouga stop button...")
        merzouga_btn = page.locator(".map-stop-btn:has-text('Merzouga')")
        if merzouga_btn.count() > 0:
            merzouga_btn.first.click()
            page.wait_for_timeout(1200)
            map_card.screenshot(path=os.path.join(output_dir, "test_popup_merzouga.png"))
            print("[OK] test_popup_merzouga.png saved")
            
        # Test 2: Click Mode Sombre toggle
        print("Clicking Mode Sombre toggle...")
        theme_toggle = page.locator("[data-map-theme-toggle]")
        if theme_toggle.count() > 0:
            theme_toggle.first.click()
            page.wait_for_timeout(800)
            map_card.screenshot(path=os.path.join(output_dir, "test_mode_sombre.png"))
            print("[OK] test_mode_sombre.png saved")
            
        # Test 3: Click Reset View
        print("Clicking Reset View...")
        reset_btn = page.locator("[data-map-reset]")
        if reset_btn.count() > 0:
            reset_btn.first.click()
            page.wait_for_timeout(800)
            map_card.screenshot(path=os.path.join(output_dir, "test_reset_view.png"))
            print("[OK] test_reset_view.png saved")
            
        browser.close()

if __name__ == "__main__":
    test_interactivity()
