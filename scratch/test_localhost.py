import os
from playwright.sync_api import sync_playwright

output_dir = r"C:\Users\el mahdi\.gemini\antigravity-ide\brain\78ff4a39-3a4e-4529-9a6b-a7d4cbd3864d"

def test_localhost():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1400, "height": 900})
        
        console_logs = []
        page.on("console", lambda msg: console_logs.append(f"[{msg.type.upper()}] {msg.text}"))
        
        failed_requests = []
        page.on("requestfailed", lambda req: failed_requests.append(f"FAILED: {req.url} - {req.failure}"))
        
        url = "http://localhost:4321/tours/13-days-casablanca-tour"
        print(f"Loading {url}...")
        try:
            res = page.goto(url, wait_until="networkidle", timeout=10000)
            print(f"Response status: {res.status}")
        except Exception as e:
            print(f"Goto error: {e}")
            
        page.wait_for_timeout(2000)
        
        print("\n=== CONSOLE LOGS ===")
        for log in console_logs:
            print(log)
            
        print("\n=== FAILED REQUESTS ===")
        for req in failed_requests:
            print(req)
            
        map_card = page.locator(".tour-map-card")
        print(f"\nMap card count: {map_card.count()}")
        if map_card.count() > 0:
            map_card.scroll_into_view_if_needed()
            page.wait_for_timeout(1000)
            map_card.screenshot(path=os.path.join(output_dir, "localhost_map_card.png"))
            print(f"[OK] Screenshot saved to localhost_map_card.png")
            
            panes = page.locator(".leaflet-pane")
            print(f"Leaflet panes: {panes.count()}")
            tiles = page.locator(".leaflet-tile")
            print(f"Leaflet tiles: {tiles.count()}")
            markers = page.locator(".luxury-marker-container")
            print(f"Markers: {markers.count()}")
            
        browser.close()

if __name__ == "__main__":
    test_localhost()
