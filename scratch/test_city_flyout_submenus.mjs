import puppeteer from 'file:///C:/Users/el%20mahdi/.gemini/antigravity-ide/brain/4181f645-c8bb-4890-ace8-adaf28d13ff2/scratch/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE_URL = "http://localhost:4321";

async function runFlyoutQA() {
  console.log("=== STARTING RIGOROUS SECOND-LEVEL CITY FLYOUT SUBMENU QA ===");
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  try {
    // -------------------------------------------------------------
    // TEST 1: DESKTOP CITY FLYOUTS
    // -------------------------------------------------------------
    console.log("\n[Test 1] Testing Desktop City Flyout Submenus (1280x800)...");
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });

    // Hover Tours main nav
    const allLis = await page.$$('#nav-links > li');
    // allLis[2] is Tours
    await allLis[2].hover();
    await new Promise(r => setTimeout(r, 400));

    // Verify 5 city items have chevrons
    const cityItemsData = await page.evaluate(() => {
      const flyoutLis = Array.from(document.querySelectorAll('.tours-dropdown > li.has-flyout'));
      return flyoutLis.map(li => {
        const link = li.querySelector('.dropdown-item-has-flyout');
        const arrow = li.querySelector('.flyout-arrow');
        const flyout = li.querySelector('.dropdown-flyout');
        const tours = Array.from(flyout?.querySelectorAll('.dropdown-item') || []).map(a => ({
          title: a.innerText.trim(),
          href: a.getAttribute('href')
        }));
        return {
          city: link?.innerText.trim().replace(/\s+/g, ' '),
          cityHref: link?.getAttribute('href'),
          hasArrow: Boolean(arrow),
          toursCount: tours.length,
          sampleTours: tours.slice(0, 3)
        };
      });
    });

    console.log("City items in Tours dropdown:", JSON.stringify(cityItemsData, null, 2));

    // Hover over Marrakech city item
    console.log("\nHovering over Marrakech city item...");
    const flyoutLis = await page.$$('.tours-dropdown > li.has-flyout');
    await flyoutLis[0].hover();
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: 'scratch/desktop_marrakech_flyout.png' });

    // Check flyout visibility and positioning
    const marrakechFlyoutCheck = await page.evaluate(() => {
      const flyout = document.querySelectorAll('.tours-dropdown > li.has-flyout')[0].querySelector('.dropdown-flyout');
      const rect = flyout?.getBoundingClientRect();
      const style = window.getComputedStyle(flyout);
      return {
        opacity: style.opacity,
        left: rect?.left,
        top: rect?.top,
        width: rect?.width,
        height: rect?.height
      };
    });
    console.log("Marrakech Flyout rect & visibility:", marrakechFlyoutCheck);

    // Hover over Casablanca city item
    console.log("\nHovering over Casablanca city item...");
    await flyoutLis[1].hover();
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: 'scratch/desktop_casablanca_flyout.png' });

    // -------------------------------------------------------------
    // TEST 2: MOBILE NESTED CITY ACCORDIONS
    // -------------------------------------------------------------
    console.log("\n[Test 2] Testing Mobile City Accordions (390x844)...");
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });

    // Open hamburger
    await page.click('#mobile-toggle');
    await new Promise(r => setTimeout(r, 400));

    // Open Tours accordion
    const toggles = await page.$$('.mobile-submenu-toggle');
    await toggles[0].click();
    await new Promise(r => setTimeout(r, 300));

    // Check mobile overflow before expanding cities
    let overflow = await page.evaluate(() => {
      return { docWidth: document.documentElement.offsetWidth, scrollWidth: document.documentElement.scrollWidth };
    });
    console.log("Mobile overflow before city expand:", overflow);

    // Toggle Marrakech city accordion
    const cityToggles = await page.$$('.mobile-city-toggle');
    console.log(`Found ${cityToggles.length} mobile city toggles.`);

    // Click Marrakech toggle
    await cityToggles[0].click();
    await new Promise(r => setTimeout(r, 300));

    // Click Casablanca toggle
    await cityToggles[1].click();
    await new Promise(r => setTimeout(r, 300));

    overflow = await page.evaluate(() => {
      return { docWidth: document.documentElement.offsetWidth, scrollWidth: document.documentElement.scrollWidth };
    });
    console.log("Mobile overflow after city expand:", overflow);

    await page.screenshot({ path: 'scratch/mobile_city_accordions_open.png' });

    const mobileCityData = await page.evaluate(() => {
      const groups = Array.from(document.querySelectorAll('.mobile-city-group'));
      return groups.map(g => {
        const link = g.querySelector('.mobile-city-link');
        const toursWrap = g.querySelector('.mobile-city-tours');
        const tourLinks = Array.from(toursWrap?.querySelectorAll('.mobile-tour-item-link') || []);
        return {
          cityName: link?.innerText.trim(),
          isOpen: toursWrap?.classList.contains('open'),
          toursCount: tourLinks.length,
          sampleTour: tourLinks[0]?.innerText.trim()
        };
      });
    });
    console.log("Mobile City Accordion Status:", JSON.stringify(mobileCityData, null, 2));

    // -------------------------------------------------------------
    // TEST 3: VERIFY ALL SUBMENU URLS RESOLVE
    // -------------------------------------------------------------
    console.log("\n[Test 3] Verifying All City Submenu Tour URLs...");
    const allFlyoutHrefs = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('.dropdown-flyout a.dropdown-item'));
      return Array.from(new Set(links.map(a => a.getAttribute('href')).filter(Boolean)));
    });
    console.log(`Checking ${allFlyoutHrefs.length} multi-day tour links from flyout submenus...`);

    let brokenCount = 0;
    for (const href of allFlyoutHrefs) {
      try {
        const res = await fetch(`${BASE_URL}${href}`);
        if (res.status !== 200) {
          console.error(`❌ Broken link: ${href} (HTTP ${res.status})`);
          brokenCount++;
        }
      } catch (err) {
        console.error(`❌ Fetch error: ${href}: ${err.message}`);
        brokenCount++;
      }
    }

    if (brokenCount === 0) {
      console.log(`✅ All ${allFlyoutHrefs.length} tour links returned HTTP 200 OK!`);
    }

    console.log("\n--- SUMMARY ---");
    console.log("Console Errors caught:", consoleErrors.length);
    if (consoleErrors.length > 0) {
      console.log("Errors:", consoleErrors);
    }
    console.log("✅ SECOND-LEVEL FLYOUT QA COMPLETE.");

  } catch (err) {
    console.error("QA error:", err);
  } finally {
    await browser.close();
  }
}

runFlyoutQA();
