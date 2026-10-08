import fs from 'fs';
import path from 'path';

const { tours } = await import('../src/data/tours.ts');

console.log('Auditing PDF links and PDF file existence across all 57 tours...');

let missingPdfs = [];
let missingHtmlButtons = [];

for (const tour of tours) {
  const pdfPath = path.resolve(`dist/pdfs/tours/${tour.slug}.pdf`);
  if (!fs.existsSync(pdfPath)) {
    missingPdfs.push(tour.slug);
  }

  const htmlPath = path.resolve(`dist/tours/${tour.slug}/index.html`);
  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const expectedPdfUrl = `/pdfs/tours/${tour.slug}.pdf`;
    if (!html.includes(expectedPdfUrl)) {
      missingHtmlButtons.push(tour.slug);
    }
  } else {
    missingHtmlButtons.push(`${tour.slug} (HTML missing)`);
  }
}

console.log('Missing PDFs count:', missingPdfs.length);
if (missingPdfs.length > 0) console.log('Missing PDFs:', missingPdfs);

console.log('Missing HTML Buttons count:', missingHtmlButtons.length);
if (missingHtmlButtons.length > 0) console.log('Missing HTML Buttons:', missingHtmlButtons);

if (missingPdfs.length === 0 && missingHtmlButtons.length === 0) {
  console.log('🎉 100% SUCCESS: All 57 tours have verified PDF files on disk and verified download buttons in their HTML pages!');
}
