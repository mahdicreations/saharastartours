import puppeteer from 'file:///C:/Users/el%20mahdi/.gemini/antigravity-ide/brain/4181f645-c8bb-4890-ace8-adaf28d13ff2/scratch/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true
});
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 1200 });
await page.goto('http://localhost:4321/tours/6-days-desert-tour-from-casablanca', { waitUntil: 'networkidle2' });

const cards = await page.$$('.booking-sidebar-card');
if (cards.length > 1) {
  await cards[1].screenshot({ path: 'scratch/quick_info_card_element.png' });
  console.log('Saved quick_info_card_element.png');
} else {
  console.log('Cards count:', cards.length);
}
await browser.close();
