import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outPath = path.resolve('scratch_test.pdf');
const doc = new PDFDocument({
  size: 'A4',
  margin: 40,
  userPassword: '', // user needs no password to view
  ownerPassword: 'SST_SECURE_BUILD_KEY_2026', // restricts editing/copying
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
    Title: 'Test Tour PDF',
    Author: 'Sahara Star Tours',
    Subject: 'Private Tour Itinerary',
    Keywords: 'Morocco, Sahara, Tour'
  }
});

const writeStream = fs.createWriteStream(outPath);
doc.pipe(writeStream);

doc.fontSize(22).text('Sahara Star Tours - Test Tour', { align: 'center' });
doc.moveDown();
doc.fontSize(12).text('This is a test itinerary with watermark and security permissions.');

// Add watermark
const drawWatermark = (d) => {
  d.save();
  d.fontSize(45);
  d.fillColor('#e0d5c1');
  d.opacity(0.18);
  d.rotate(-35, { origin: [297, 421] });
  d.text('SAHARA STAR TOURS\nwww.saharastartours.com', 80, 360, {
    align: 'center',
    lineGap: 10
  });
  d.restore();
};

drawWatermark(doc);

doc.end();

writeStream.on('finish', () => {
  console.log('PDF written successfully, size:', fs.statSync(outPath).size);
});
