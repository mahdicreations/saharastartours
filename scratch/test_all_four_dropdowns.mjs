import puppeteer from 'file:///C:/Users/el%20mahdi/.gemini/antigravity-ide/brain/4181f645-c8bb-4890-ace8-adaf28d13ff2/scratch/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE_URL = "http://localhost:4321";

async function runTests() {
  console.log('🚀 Launching automated browser tests for all 4 compact dropdowns...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  try {
    // -------------------------------------------------------------
    // TEST 1: DESKTOP NAVIGATION
    // -------------------------------------------------------------
    console.log('\n--- 1. DESKTOP NAVIGATION TESTS (1280x800) ---');
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });

    // Verify main nav links structure
    const navItems = await page.evaluate(() => {
      const lis = Array.from(document.querySelectorAll('#nav-links > li:not(.mobile-drawer-header):not(.mobile-cta-li)'));
      return lis.map(li => {
        const text = li.innerText.trim().split('\n')[0];
        const isHasDropdown = li.classList.contains('has-dropdown');
        const href = li.querySelector('a')?.getAttribute('href');
        return { text, isHasDropdown, href };
      });
    });
    console.log('Main nav structure (Desktop items):', JSON.stringify(navItems, null, 2));

    // Test 1a: Hover on Tours (Item 1 in filtered list: index 2 in all lis)
    console.log('\n[Desktop] Testing Tours dropdown...');
    const allLis = await page.$$('#nav-links > li');
    // allLis[0] = drawer header
    // allLis[1] = Home
    // allLis[2] = Tours
    // allLis[3] = Imperial Cities
    // allLis[4] = Day Trips
    // allLis[5] = Activities
    // allLis[6] = About Us
    // allLis[7] = Contact Us

    await allLis[2].hover();
    await new Promise(r => setTimeout(r, 400));
    const toursInfo = await page.evaluate(() => {
      const dd = document.querySelector('#nav-links > li:nth-child(3) .compact-dropdown');
      const rect = dd?.getBoundingClientRect();
      const items = Array.from(dd?.querySelectorAll('.dropdown-item') || []).map(a => ({
        text: a.innerText.trim(),
        href: a.getAttribute('href')
      }));
      return { width: rect?.width, items };
    });
    console.log('Tours Dropdown Items:', toursInfo);
    await page.screenshot({ path: 'scratch/desktop_tours_dropdown.png' });

    // Test 1b: Hover on Imperial Cities
    console.log('\n[Desktop] Testing Imperial Cities dropdown...');
    await allLis[3].hover();
    await new Promise(r => setTimeout(r, 400));
    const imperialInfo = await page.evaluate(() => {
      const dd = document.querySelector('#nav-links > li:nth-child(4) .compact-dropdown');
      const rect = dd?.getBoundingClientRect();
      const items = Array.from(dd?.querySelectorAll('.dropdown-item') || []).map(a => ({
        text: a.innerText.trim(),
        href: a.getAttribute('href')
      }));
      return { width: rect?.width, items };
    });
    console.log('Imperial Cities Dropdown Items:', imperialInfo);
    await page.screenshot({ path: 'scratch/desktop_imperial_dropdown.png' });

    // Test 1c: Hover on Day Trips
    console.log('\n[Desktop] Testing Day Trips dropdown...');
    await allLis[4].hover();
    await new Promise(r => setTimeout(r, 400));
    const dayTripsInfo = await page.evaluate(() => {
      const dd = document.querySelector('#nav-links > li:nth-child(5) .compact-dropdown');
      const rect = dd?.getBoundingClientRect();
      const items = Array.from(dd?.querySelectorAll('.dropdown-item') || []).map(a => ({
        text: a.innerText.trim(),
        href: a.getAttribute('href')
      }));
      return { width: rect?.width, items };
    });
    console.log('Day Trips Dropdown Items:', dayTripsInfo);
    await page.screenshot({ path: 'scratch/desktop_daytrips_dropdown.png' });

    // Test 1d: Hover on Activities
    console.log('\n[Desktop] Testing Activities dropdown...');
    await allLis[5].hover();
    await new Promise(r => setTimeout(r, 400));
    const activitiesInfo = await page.evaluate(() => {
      const dd = document.querySelector('#nav-links > li:nth-child(6) .compact-dropdown');
      const rect = dd?.getBoundingClientRect();
      const items = Array.from(dd?.querySelectorAll('.dropdown-item') || []).map(a => ({
        text: a.innerText.trim(),
        href: a.getAttribute('href')
      }));
      return { width: rect?.width, items };
    });
    console.log('Activities Dropdown Items:', activitiesInfo);
    await page.screenshot({ path: 'scratch/desktop_activities_dropdown.png' });

    // -------------------------------------------------------------
    // TEST 2: MOBILE NAVIGATION ACCORDIONS
    // -------------------------------------------------------------
    console.log('\n--- 2. MOBILE NAVIGATION TESTS (390x844) ---');
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });

    console.log('Opening mobile hamburger...');
    await page.click('#mobile-toggle');
    await new Promise(r => setTimeout(r, 400));

    // Verify drawer open & no horizontal overflow
    const overflowCheck = await page.evaluate(() => {
      const docWidth = document.documentElement.offsetWidth;
      const scrollWidth = document.documentElement.scrollWidth;
      return { docWidth, scrollWidth, hasOverflow: scrollWidth > docWidth };
    });
    console.log('Mobile overflow check:', overflowCheck);

    // Toggle each accordion using page.evaluate to prevent scroll lock
    const togglesCount = await page.evaluate(() => {
      const toggles = document.querySelectorAll('.mobile-submenu-toggle');
      toggles.forEach(btn => btn.click());
      return toggles.length;
    });
    console.log(`Toggled all ${togglesCount} mobile submenu accordions.`);
    await new Promise(r => setTimeout(r, 400));

    // Capture mobile open screenshot
    await page.screenshot({ path: 'scratch/mobile_all_accordions_open.png' });

    const mobileCheck = await page.evaluate(() => {
      const submenus = Array.from(document.querySelectorAll('.mobile-submenu'));
      return submenus.map((sm, idx) => ({
        index: idx,
        isOpen: sm.classList.contains('open'),
        items: Array.from(sm.querySelectorAll('.mobile-sub-link')).map(a => a.innerText.trim())
      }));
    });
    console.log('Mobile submenus structure:', JSON.stringify(mobileCheck, null, 2));

    // -------------------------------------------------------------
    // TEST 3: VERIFY ALL SUBMENU LINKS (BROKEN LINK CHECK)
    // -------------------------------------------------------------
    console.log('\n--- 3. VERIFY ALL INTERNAL LINKS RESOLVE ---');
    const allLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('.compact-dropdown .dropdown-item'));
      return Array.from(new Set(links.map(a => a.getAttribute('href')).filter(Boolean)));
    });
    console.log(`Verifying ${allLinks.length} distinct links in compact dropdowns...`);

    let brokenCount = 0;
    for (const link of allLinks) {
      try {
        const response = await fetch(`${BASE_URL}${link}`);
        if (response.status !== 200) {
          console.error(`❌ BROKEN LINK: ${link} returned status ${response.status}`);
          brokenCount++;
        }
      } catch (e) {
        console.error(`❌ FETCH ERROR: ${link}: ${e.message}`);
        brokenCount++;
      }
    }
    if (brokenCount === 0) {
      console.log(`✅ All ${allLinks.length} dropdown links returned HTTP 200 OK!`);
    }

    console.log('\n--- SUMMARY ---');
    console.log('Console Errors caught:', consoleErrors.length);
    if (consoleErrors.length > 0) {
      console.log('Errors:', consoleErrors);
    }
    console.log('✅ TEST SUITE COMPLETED SUCCESSFULLY.');

  } catch (err) {
    console.error('Test error:', err);
  } finally {
    await browser.close();
  }
}

runTests();
