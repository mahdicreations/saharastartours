import puppeteer from 'file:///C:/Users/el%20mahdi/.gemini/antigravity-ide/brain/4181f645-c8bb-4890-ace8-adaf28d13ff2/scratch/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE_URL = "http://localhost:4321";

async function runQA() {
  console.log("=== STARTING RIGOROUS NAVIGATION & PDF QA ===");
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
    // ----------------------------------------------------
    // TEST 1: DESKTOP NAVIGATION & DROPDOWN
    // ----------------------------------------------------
    console.log("\n[Test 1] Testing Desktop Navigation...");
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });

    // Verify main nav links exist
    const mainNavLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('.navbar .nav-links > li > a, .navbar .nav-links > li > .nav-item-row > a'));
      return links.map(a => ({ text: a.textContent.trim(), href: a.getAttribute('href') }));
    });
    console.log("Found Desktop Main Nav Links:", mainNavLinks);

    // Verify stand-alone direct links have no dropdown
    const standaloneCheck = await page.evaluate(() => {
      const imperial = document.querySelector('a[href="/imperial-cities"]')?.closest('li')?.querySelector('.dropdown-menu, .tours-dropdown, .megamenu');
      const dayTrips = document.querySelector('a[href="/day-trips"]')?.closest('li')?.querySelector('.dropdown-menu, .tours-dropdown, .megamenu');
      const activities = document.querySelector('a[href="/activities"]')?.closest('li')?.querySelector('.dropdown-menu, .tours-dropdown, .megamenu');
      return {
        imperialHasSubmenu: !!imperial,
        dayTripsHasSubmenu: !!dayTrips,
        activitiesHasSubmenu: !!activities
      };
    });
    console.log("Standalone check (should all be false):", standaloneCheck);

    // Hover over Tours to open dropdown
    await page.hover('li.has-dropdown');
    await new Promise(r => setTimeout(r, 400));

    const dropdownInfo = await page.evaluate(() => {
      const dropdown = document.querySelector('.tours-dropdown');
      if (!dropdown) return null;
      const rect = dropdown.getBoundingClientRect();
      const style = window.getComputedStyle(dropdown);
      const items = Array.from(dropdown.querySelectorAll('a')).map(a => ({
        text: a.textContent.trim().replace(/\s+/g, ' '),
        href: a.getAttribute('href')
      }));
      return {
        width: rect.width,
        height: rect.height,
        opacity: style.opacity,
        items
      };
    });

    console.log("Tours Dropdown Dimensions & Items:", dropdownInfo);
    await page.screenshot({ path: 'scratch/desktop_dropdown_open.png' });
    console.log("📸 Saved desktop_dropdown_open.png");

    // ----------------------------------------------------
    // TEST 2: MOBILE NAVIGATION & DRAWER
    // ----------------------------------------------------
    console.log("\n[Test 2] Testing Mobile Navigation Drawer...");
    await page.setViewport({ width: 390, height: 844, isMobile: true });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });

    // Click mobile menu toggle
    await page.click('.mobile-nav-toggle');
    await new Promise(r => setTimeout(r, 400));

    // Verify drawer open
    const drawerOpen = await page.evaluate(() => {
      const drawer = document.querySelector('.nav-links');
      return drawer?.classList.contains('open');
    });
    console.log("Mobile drawer open:", drawerOpen);

    // Check standalone links in mobile
    const mobileStandaloneCheck = await page.evaluate(() => {
      const imperialBtn = document.querySelector('a[href="/imperial-cities"]')?.closest('li')?.querySelector('.mobile-submenu-toggle');
      const dayTripsBtn = document.querySelector('a[href="/day-trips"]')?.closest('li')?.querySelector('.mobile-submenu-toggle');
      const activitiesBtn = document.querySelector('a[href="/activities"]')?.closest('li')?.querySelector('.mobile-submenu-toggle');
      return {
        imperialHasToggle: !!imperialBtn,
        dayTripsHasToggle: !!dayTripsBtn,
        activitiesHasToggle: !!activitiesBtn
      };
    });
    console.log("Mobile Standalone Toggles (should all be false):", mobileStandaloneCheck);

    // Click Tours mobile toggle button
    await page.click('.mobile-submenu-toggle');
    await new Promise(r => setTimeout(r, 400));

    const mobileToursSubmenu = await page.evaluate(() => {
      const submenu = document.querySelector('.mobile-tours-submenu');
      const isOpen = submenu?.classList.contains('open');
      const items = Array.from(submenu ? submenu.querySelectorAll('a') : []).map(a => ({
        text: a.textContent.trim().replace(/\s+/g, ' '),
        href: a.getAttribute('href')
      }));
      return { isOpen, items };
    });
    console.log("Mobile Tours Submenu:", mobileToursSubmenu);

    await page.screenshot({ path: 'scratch/mobile_menu_open.png' });
    console.log("📸 Saved mobile_menu_open.png");

    // ----------------------------------------------------
    // TEST 3: TOUR DETAIL PAGE PDF BUTTON CHECK
    // ----------------------------------------------------
    console.log("\n[Test 3] Testing Tour Detail Page PDF Download Button...");
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(`${BASE_URL}/tours/6-days-desert-tour-from-casablanca`, { waitUntil: 'networkidle2' });

    const tourPagePDFCheck = await page.evaluate(() => {
      const bannerInAbout = document.querySelector('.tour-pdf-download-bar');
      const allPdfButtons = Array.from(document.querySelectorAll('a[href*=".pdf"]')).map(a => ({
        text: a.textContent.trim().replace(/\s+/g, ' '),
        href: a.getAttribute('href'),
        parentClasses: a.parentElement ? a.parentElement.className : ''
      }));
      return {
        bannerInAboutExists: !!bannerInAbout,
        totalPdfButtons: allPdfButtons.length,
        buttons: allPdfButtons
      };
    });
    console.log("Tour Detail Page PDF Button Verification:", tourPagePDFCheck);

    await page.screenshot({ path: 'scratch/tour_detail_pdf_button.png' });
    console.log("📸 Saved tour_detail_pdf_button.png");

  } finally {
    await browser.close();
  }

  console.log("\nConsole errors during browser tests:", consoleErrors.length === 0 ? "NONE (Clean!)" : consoleErrors);
  console.log("=== BROWSER QA FINISHED ===");
}

runQA();
