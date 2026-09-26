import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # 1. Desktop index.html
        context = await browser.new_context(viewport={'width': 1440, 'height': 900})
        page = await context.new_page()
        await page.goto("http://localhost:8080/index.html", wait_until="networkidle")
        await page.wait_for_timeout(1000)

        # Desktop Header Screenshot
        await page.screenshot(path="verify_desktop_header.png", clip={'x': 0, 'y': 0, 'width': 1440, 'height': 420})

        # Desktop Footer Screenshot
        footer = page.locator('footer')
        await footer.scroll_into_view_if_needed()
        await page.wait_for_timeout(500)
        await footer.screenshot(path="verify_desktop_footer.png")

        # 2. Mobile index.html
        mobile_ctx = await browser.new_context(
            viewport={'width': 390, 'height': 844},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1"
        )
        mpage = await mobile_ctx.new_page()
        await mpage.goto("http://localhost:8080/index.html", wait_until="networkidle")
        await mpage.wait_for_timeout(1000)

        # Mobile Header Screenshot
        await mpage.screenshot(path="verify_mobile_header.png", clip={'x': 0, 'y': 0, 'width': 390, 'height': 380})

        # Open Mobile Menu
        await mpage.locator('#mobile-toggle').click()
        await mpage.wait_for_timeout(500)
        await mpage.screenshot(path="verify_mobile_menu_open.png", clip={'x': 0, 'y': 0, 'width': 390, 'height': 600})

        # Mobile Footer Screenshot
        mfooter = mpage.locator('footer')
        await mfooter.scroll_into_view_if_needed()
        await mpage.wait_for_timeout(500)
        await mfooter.screenshot(path="verify_mobile_footer.png")

        # 3. Tour page desktop & mobile
        await page.goto("http://localhost:8080/tours/7-day-morocco-tour-from-casablanca.html", wait_until="networkidle")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="verify_tour_desktop_header.png", clip={'x': 0, 'y': 0, 'width': 1440, 'height': 350})

        # Tour page mobile
        await mpage.goto("http://localhost:8080/tours/7-day-morocco-tour-from-casablanca.html", wait_until="networkidle")
        await mpage.wait_for_timeout(1000)
        await mpage.screenshot(path="verify_tour_mobile_header.png", clip={'x': 0, 'y': 0, 'width': 390, 'height': 320})

        # Open mobile menu on tour page
        await mpage.locator('#mobile-toggle').click()
        await mpage.wait_for_timeout(500)
        await mpage.screenshot(path="verify_tour_mobile_menu_open.png", clip={'x': 0, 'y': 0, 'width': 390, 'height': 500})

        await browser.close()
        print("Verification screenshots captured successfully!")

asyncio.run(verify())
