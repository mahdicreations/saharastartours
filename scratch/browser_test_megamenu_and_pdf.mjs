import puppeteer from 'file:///C:/Users/el%20mahdi/.gemini/antigravity-ide/brain/4181f645-c8bb-4890-ace8-adaf28d13ff2/scratch/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE_URL = "http://localhost:4322";

async function testMegamenuAndPdf() {
  console.log("🚀 Testing Mega Menu and PDF Download in Browser...");
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const consoleErrors = [];
  const networkErrors = [];

  const page = await browser.newPage();
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('response', resp => {
    if (resp.status() >= 400) networkErrors.push({ url: resp.url(), status: resp.status() });
  });

  try {
    // 1. DESKTOP TEST (1280x800)
    await page.setViewport({ width: 1280, height: 800 });
    console.log("\n--- 1. Testing Desktop Mega Menu ---");
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });

    // Hover on Tours
    const toursNavItem = await page.$('.has-megamenu');
    console.log("Found .has-megamenu li:", !!toursNavItem);

    await page.hover('.has-megamenu');
    await new Promise(r => setTimeout(r, 400));

    const isMegamenuVisible = await page.$eval('.tours-megamenu', el => {
      const style = window.getComputedStyle(el);
      return style.opacity === '1' && style.pointerEvents !== 'none';
    });
    console.log("Mega menu visible on hover:", isMegamenuVisible);

    const megamenuColumns = await page.$$eval('.megamenu-col', cols => cols.length);
    console.log("Mega menu departure columns:", megamenuColumns, "(Expected: 5)");

    const thematicCards = await page.$$eval('.megamenu-thematic-card', cards => cards.length);
    console.log("Mega menu thematic category cards:", thematicCards, "(Expected: 3)");

    const allToursCta = await page.$eval('.megamenu-all-cta a', el => el.href);
    console.log("Mega menu All Tours CTA link:", allToursCta);

    // 2. TOUR DETAIL PAGE & PDF BUTTON TEST
    console.log("\n--- 2. Testing Tour Page PDF Download Elements ---");
    const testTourSlug = "10-days-morocco-grand-tour-from-marrakech";
    await page.goto(`${BASE_URL}/tours/${testTourSlug}`, { waitUntil: 'networkidle0' });

    const pdfBarInOverview = await page.$eval('.tour-pdf-download-bar', el => {
      const link = el.querySelector('a');
      return {
        exists: !!el,
        text: el.innerText.trim(),
        href: link ? link.getAttribute('href') : null,
        downloadAttr: link ? link.getAttribute('download') : null
      };
    });
    console.log("PDF Download Bar in Overview:", pdfBarInOverview);

    const pdfSidebarBtn = await page.$eval('aside .booking-sidebar-card a[href*=".pdf"]', el => {
      return {
        exists: !!el,
        text: el.innerText.trim(),
        href: el.getAttribute('href')
      };
    });
    console.log("PDF Download Button in Sidebar:", pdfSidebarBtn);

    // Test downloading / fetching the PDF directly
    const pdfResponse = await page.goto(`${BASE_URL}/pdfs/tours/${testTourSlug}.pdf`);
    console.log("Direct PDF request status:", pdfResponse.status(), "(Expected: 200)");
    console.log("Direct PDF content-type:", pdfResponse.headers()['content-type'] || 'application/pdf');

    // 3. MOBILE MENU ACCORDION TEST (375x812)
    console.log("\n--- 3. Testing Mobile Nested Drawer Menu ---");
    await page.setViewport({ width: 375, height: 812 });
    await page.goto(`${BASE_URL}/tours`, { waitUntil: 'networkidle0' });

    // Check horizontal overflow
    const overflowStatus = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    console.log("Mobile page horizontal overflow:", overflowStatus, "(Should be false)");

    // Open mobile hamburger menu
    await page.click('#mobile-toggle');
    await new Promise(r => setTimeout(r, 400));

    // Tap Tours toggle button to open Tours accordion
    const toursToggle = await page.$('.mobile-submenu-toggle');
    if (toursToggle) {
      await toursToggle.click();
      await new Promise(r => setTimeout(r, 400));
    }

    const toursAccordionOpen = await page.$eval('.mobile-tours-accordion', el => el.classList.contains('open'));
    console.log("Mobile Tours main accordion opened:", toursAccordionOpen);

    // Tap Marrakech sub-group header
    await page.evaluate(() => {
      const headers = Array.from(document.querySelectorAll('.mobile-sub-header'));
      const mHeader = headers.find(h => h.innerText.includes('Marrakech'));
      if (mHeader) mHeader.click();
    });
    await new Promise(r => setTimeout(r, 400));

    const marrakechSubOpen = await page.evaluate(() => {
      const body = document.querySelector('.mobile-sub-group .mobile-sub-body');
      return body ? body.classList.contains('open') : false;
    });
    console.log("Mobile Marrakech sub-accordion opened:", marrakechSubOpen);

  } catch (err) {
    console.error("Test failed:", err);
  } finally {
    await browser.close();
  }

  console.log("\n=== AUDIT RESULTS ===");
  console.log("Console Errors Count:", consoleErrors.length);
  if (consoleErrors.length > 0) console.log("Errors:", consoleErrors);
  console.log("Network Errors Count:", networkErrors.length);
  if (networkErrors.length > 0) console.log("Network Errors:", networkErrors);
}

testMegamenuAndPdf();
