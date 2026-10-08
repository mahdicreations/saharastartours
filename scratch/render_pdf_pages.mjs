import puppeteer from 'file:///C:/Users/el%20mahdi/.gemini/antigravity-ide/brain/4181f645-c8bb-4890-ace8-adaf28d13ff2/scratch/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';

async function renderPdfSamples() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const samples = [
    { name: 'casablanca', slug: '6-days-desert-tour-from-casablanca' },
    { name: 'marrakech', slug: '3-day-morocco-desert-tour-from-marrakech' },
    { name: 'fes', slug: '4-day-morocco-desert-tour-from-fes-to-marrakech' },
    { name: 'tangier', slug: '7-days-morocco-tour-itinerary-from-tangier-one-week' },
    { name: 'ouarzazate', slug: 'morocco-3-day-desert-tour-ouarzazate-marrakech' },
    { name: 'imperial', slug: '10-days-imperial-cities-tour' },
    { name: 'daytrip', slug: 'ourika-valley-nature-tour' },
    { name: 'activity', slug: 'quad-biking-marrakech' }
  ];

  for (const sample of samples) {
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 1.5 });
      await page.goto(`http://localhost:4321/pdfs/tours/${sample.slug}.pdf`, { waitUntil: 'networkidle0' });
      await new Promise(r => setTimeout(r, 1200));
      await page.screenshot({ path: `scratch/pdf_sample_${sample.name}.png` });
      console.log(`Rendered scratch/pdf_sample_${sample.name}.png`);
      await page.close();
    } catch (e) {
      console.error(`Failed ${sample.name}:`, e.message);
    }
  }

  await browser.close();
  console.log('Done rendering samples!');
}

renderPdfSamples();
