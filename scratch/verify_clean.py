import asyncio
from playwright.async_api import async_playwright

async def verify_index():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # Desktop
        ctx = await browser.new_context(viewport={'width': 1440, 'height': 900})
        page = await ctx.new_page()
        await page.goto("http://localhost:8080/index.html", wait_until="networkidle")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="verify_clean_desktop_header.png", clip={'x': 0, 'y': 0, 'width': 1440, 'height': 200})

        # Footer Desktop
        footer = page.locator('footer')
        await footer.scroll_into_view_if_needed()
        await page.wait_for_timeout(500)
        await footer.screenshot(path="verify_clean_desktop_footer.png")

        # Mobile
        mctx = await browser.new_context(
            viewport={'width': 390, 'height': 844},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15"
        )
        mpage = await mctx.new_page()
        await mpage.goto("http://localhost:8080/index.html", wait_until="networkidle")
        await mpage.wait_for_timeout(1000)
        await mpage.screenshot(path="verify_clean_mobile_header.png", clip={'x': 0, 'y': 0, 'width': 390, 'height': 200})

        # Open mobile drawer
        await mpage.locator('#mobile-toggle').click()
        await mpage.wait_for_timeout(500)
        await mpage.screenshot(path="verify_clean_mobile_menu.png", clip={'x': 0, 'y': 0, 'width': 390, 'height': 500})

        await browser.close()
        print("Captured clean verification screenshots!")

asyncio.run(verify_index())
