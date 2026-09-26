import asyncio
from playwright.async_api import async_playwright

async def verify_everything():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # Desktop Context
        dctx = await browser.new_context(viewport={'width': 1440, 'height': 900})
        dpage = await dctx.new_page()

        # Mobile Context
        mctx = await browser.new_context(
            viewport={'width': 390, 'height': 844},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15"
        )
        mpage = await mctx.new_page()

        # 1. Index Page Desktop
        await dpage.goto("http://localhost:8080/index.html", wait_until="networkidle")
        await dpage.wait_for_timeout(800)
        await dpage.screenshot(path="final_index_desktop_header.png", clip={'x': 0, 'y': 0, 'width': 1440, 'height': 200})
        
        dfooter = dpage.locator('footer')
        await dfooter.scroll_into_view_if_needed()
        await dpage.wait_for_timeout(500)
        await dfooter.screenshot(path="final_index_desktop_footer.png")

        # 2. Index Page Mobile
        await mpage.goto("http://localhost:8080/index.html", wait_until="networkidle")
        await mpage.wait_for_timeout(800)
        await mpage.screenshot(path="final_index_mobile_header.png", clip={'x': 0, 'y': 0, 'width': 390, 'height': 220})

        # 3. Tour Page Desktop
        await dpage.goto("http://localhost:8080/tours/7-day-morocco-tour-from-casablanca.html", wait_until="networkidle")
        await dpage.wait_for_timeout(800)
        await dpage.screenshot(path="final_tour_desktop_header.png", clip={'x': 0, 'y': 0, 'width': 1440, 'height': 200})

        tour_footer = dpage.locator('footer')
        await tour_footer.scroll_into_view_if_needed()
        await dpage.wait_for_timeout(500)
        await tour_footer.screenshot(path="final_tour_desktop_footer.png")

        # 4. Tour Page Mobile
        await mpage.goto("http://localhost:8080/tours/7-day-morocco-tour-from-casablanca.html", wait_until="networkidle")
        await mpage.wait_for_timeout(800)
        await mpage.screenshot(path="final_tour_mobile_header.png", clip={'x': 0, 'y': 0, 'width': 390, 'height': 220})

        # 5. Category Page Desktop
        await dpage.goto("http://localhost:8080/desert-tours.html", wait_until="networkidle")
        await dpage.wait_for_timeout(800)
        await dpage.screenshot(path="final_category_desktop_header.png", clip={'x': 0, 'y': 0, 'width': 1440, 'height': 200})

        await browser.close()
        print("ALL VERIFICATION SCREENSHOTS SAVED SUCCESSFULLY!")

asyncio.run(verify_everything())
