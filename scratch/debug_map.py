import os
from playwright.sync_api import sync_playwright

output_dir = r"C:\Users\el mahdi\.gemini\antigravity-ide\brain\78ff4a39-3a4e-4529-9a6b-a7d4cbd3864d"

def debug_map():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1400, "height": 900})
        
        console_logs = []
        page.on("console", lambda msg: console_logs.append(f"[{msg.type.upper()}] {msg.text}"))
        
        failed_requests = []
        page.on("requestfailed", lambda req: failed_requests.append(f"FAILED: {req.url} - {req.failure}"))
        
        # Test the dist file
        html_path = os.path.abspath("sahara-star-astro/dist/tours/13-days-casablanca-tour/index.html")
        furl = f"file:///{html_path.replace(os.sep, '/')}"
        print(f"Loading URL: {furl}")
        
        page.goto(furl, wait_until="load")
        page.wait_for_timeout(3000)
        
        print("\n=== CONSOLE LOGS ===")
        for log in console_logs:
            print(log)
            
        print("\n=== FAILED REQUESTS ===")
        for req in failed_requests:
            print(req)
            
        map_card = page.locator(".tour-map-card")
        if map_card.count() > 0:
            map_card.scroll_into_view_if_needed()
            page.wait_for_timeout(1000)
            map_card.screenshot(path=os.path.join(output_dir, "debug_map_card.png"))
            print(f"\n[OK] Screenshot saved to debug_map_card.png")
            
            # Check Leaflet element
            leaflet_pane = page.locator(".leaflet-pane")
            print(f"Leaflet panes count: {leaflet_pane.count()}")
            
            tiles = page.locator(".leaflet-tile")
            print(f"Leaflet tiles count: {tiles.count()}")
            
            markers = page.locator(".luxury-marker-container")
            print(f"Luxury markers count: {markers.count()}")
        else:
            print("No .tour-map-card found!")
            
        browser.close()

if __name__ == "__main__":
    debug_map()
