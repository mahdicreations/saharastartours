import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outPath = path.resolve('scratch_multipage.pdf');
const doc = new PDFDocument({
  size: 'A4',
  margin: 40,
  bufferPages: true, // enables two-pass editing for page numbers and watermarks
  userPassword: '',
  ownerPassword: 'SST_SECURE_BUILD_KEY_2026',
  permissions: {
    modifying: false,
    copying: false,
    annotating: false,
    fillingForms: false,
    contentAccessibility: false,
    documentAssembly: false,
    printing: 'highResolution'
  },
  info: {
    Title: 'Multi-Page Test Tour Itinerary',
    Author: 'Sahara Star Tours',
    Subject: 'Private Morocco Tour Itinerary'
  }
});

const writeStream = fs.createWriteStream(outPath);
doc.pipe(writeStream);

// Page 1 Content
doc.fontSize(20).fillColor('#1a1a1a').text('Page 1: Tour Overview');
doc.moveDown();
doc.fontSize(11).fillColor('#444444').text('This is the overview of the tour with high quality formatting.');

// Add Page 2
doc.addPage();
doc.fontSize(20).fillColor('#1a1a1a').text('Page 2: Itinerary Days');
doc.moveDown();
doc.fontSize(11).fillColor('#444444').text('Day 1, Day 2, Day 3 itinerary content.');

// Two-pass: Watermark & Running Footer/Header on every page
const range = doc.bufferedPageRange();
for (let i = range.start; i < range.start + range.count; i++) {
  doc.switchToPage(i);

  // 1. Watermark
  doc.save();
  doc.fontSize(38);
  doc.fillColor('#c8924b');
  doc.opacity(0.12);
  doc.rotate(-35, { origin: [297, 421] });
  doc.text('SAHARA STAR TOURS\nwww.saharastartours.com', 70, 370, {
    align: 'center',
    lineGap: 8
  });
  doc.restore();

  // 2. Running Header (on pages > 1)
  if (i > 0) {
    doc.save();
    doc.fontSize(8).fillColor('#888888').opacity(0.8);
    doc.text('Sahara Star Tours | Private Morocco Expeditions', 40, 20, { align: 'left' });
    doc.moveTo(40, 32).lineTo(555, 32).strokeColor('#e5e5e5').stroke();
    doc.restore();
  }

  // 3. Running Footer (on all pages)
  doc.save();
  doc.moveTo(40, 805).lineTo(555, 805).strokeColor('#e5e5e5').stroke();
  doc.fontSize(8).fillColor('#888888').opacity(0.9);
  doc.text('© Sahara Star Tours — Private Itinerary | www.saharastartours.com', 40, 812, { align: 'left' });
  doc.text(`Page ${i + 1} of ${range.count}`, 450, 812, { align: 'right' });
  doc.restore();
}

doc.end();

writeStream.on('finish', () => {
  console.log('Multi-page PDF generated successfully, size:', fs.statSync(outPath).size);
});
