import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

// Load tours directly from TypeScript data file
const { tours } = await import('../src/data/tours.ts');

const OUTPUT_DIR = path.resolve('public/pdfs/tours');
const LOGO_PATH = path.resolve('public/assets/logo.png');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Generate a luxury branded PDF for a single tour
 */
function generateTourPDF(tour) {
  return new Promise((resolve, reject) => {
    const outPath = path.join(OUTPUT_DIR, `${tour.slug}.pdf`);
    const writeStream = fs.createWriteStream(outPath);

    const doc = new PDFDocument({
      size: 'A4',
      margin: 40,
      bufferPages: true,
      userPassword: '', // user needs no password to open/view/print
      ownerPassword: 'SST_SECURE_BUILD_KEY_2026', // restricts editing & copying
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
        Title: `${tour.shortTitle || tour.title} - Itinerary`,
        Author: 'Sahara Star Tours',
        Subject: `Detailed Itinerary for ${tour.title}`,
        Keywords: `Morocco, Sahara Star Tours, ${tour.departureCity}, ${tour.duration}`
      }
    });

    doc.pipe(writeStream);

    const pageWidth = 595.28;
    const pageHeight = 841.89;
    const margin = 40;
    const contentWidth = pageWidth - (margin * 2);

    // BRAND PALETTE
    const COLOR_GOLD = '#C8924B';
    const COLOR_NAVY = '#0A0F1D';
    const COLOR_DARK = '#16213E';
    const COLOR_TEXT = '#222222';
    const COLOR_MUTED = '#555555';
    const COLOR_BORDER = '#E5DFD5';
    const COLOR_BG_LIGHT = '#F9F6F0';

    // 1. BRAND HEADER
    const headerTop = 35;
    if (fs.existsSync(LOGO_PATH)) {
      doc.image(LOGO_PATH, margin, headerTop, { width: 50 });
    }

    doc.fontSize(16).fillColor(COLOR_NAVY).font('Helvetica-Bold')
       .text('SAHARA STAR TOURS', margin + 60, headerTop + 5);
    doc.fontSize(9).fillColor(COLOR_GOLD).font('Helvetica')
       .text('PRIVATE MOROCCO EXPEDITIONS & BESPOKE TRAVEL', margin + 60, headerTop + 24);
    doc.fontSize(8).fillColor(COLOR_MUTED)
       .text('www.saharastartours.com  •  contact@saharastartours.com  •  +212 678-317015', margin + 60, headerTop + 37);

    // Decorative divider line
    doc.moveTo(margin, headerTop + 58).lineTo(margin + contentWidth, headerTop + 58)
       .strokeColor(COLOR_GOLD).lineWidth(1.5).stroke();

    doc.y = headerTop + 70;

    // 2. TOUR TITLE & META BANNER
    // Category pill
    const catLabel = tour.productType === 'day-trip' ? 'Day Excursion' : 
                     tour.productType === 'activity' ? 'Desert Experience' : 
                     'Private Multi-Day Tour';
    
    doc.rect(margin, doc.y, 110, 16).fillColor(COLOR_GOLD).fill();
    doc.fontSize(8).fillColor('#FFFFFF').font('Helvetica-Bold')
       .text(catLabel.toUpperCase(), margin + 6, doc.y - 13, { width: 100, align: 'center' });

    doc.moveDown(0.6);
    doc.fontSize(17).fillColor(COLOR_DARK).font('Helvetica-Bold')
       .text(tour.title, margin, doc.y, { width: contentWidth });

    doc.moveDown(0.4);

    // Meta box
    const metaY = doc.y;
    doc.rect(margin, metaY, contentWidth, 34).fillColor(COLOR_BG_LIGHT).fill();
    doc.rect(margin, metaY, contentWidth, 34).strokeColor(COLOR_BORDER).lineWidth(0.8).stroke();

    const colW = contentWidth / 4;
    const printMetaItem = (label, val, x) => {
      doc.fontSize(7.5).fillColor(COLOR_MUTED).font('Helvetica')
         .text(label.toUpperCase(), x, metaY + 6, { width: colW - 10, align: 'center' });
      doc.fontSize(8.5).fillColor(COLOR_NAVY).font('Helvetica-Bold')
         .text(val, x, metaY + 18, { width: colW - 10, align: 'center' });
    };

    printMetaItem('Duration', tour.duration, margin);
    printMetaItem('Departure', tour.startingFrom || tour.departureCity, margin + colW);
    printMetaItem('Tour Style', '100% Private', margin + colW * 2);
    const priceDisplay = tour.price.replace(/^From\s*/i, '').trim();
    printMetaItem('Starting Price', priceDisplay, margin + colW * 3);

    doc.y = metaY + 44;

    // Helper: Section Title
    const printSectionHeader = (title) => {
      if (doc.y > pageHeight - 120) doc.addPage();
      doc.moveDown(0.5);
      const titleY = doc.y;
      doc.rect(margin, titleY, 4, 15).fillColor(COLOR_GOLD).fill();
      doc.fontSize(12).fillColor(COLOR_DARK).font('Helvetica-Bold')
         .text(title, margin + 10, titleY + 1);
      doc.moveDown(0.4);
    };

    // 3. OVERVIEW
    printSectionHeader('Tour Overview');
    const overviewText = cleanText(tour.description);
    doc.fontSize(9.5).fillColor(COLOR_TEXT).font('Helvetica')
       .text(overviewText, margin, doc.y, { width: contentWidth, lineGap: 3 });

    // 4. HIGHLIGHTS
    if (tour.highlights && tour.highlights.length > 0) {
      printSectionHeader('Key Highlights');
      tour.highlights.forEach(h => {
        if (doc.y > pageHeight - 60) doc.addPage();
        const bulletY = doc.y;
        doc.circle(margin + 4, bulletY + 5, 2.5).fillColor(COLOR_GOLD).fill();
        doc.fontSize(9).fillColor(COLOR_TEXT).font('Helvetica')
           .text(cleanText(h), margin + 14, bulletY, { width: contentWidth - 14, lineGap: 2 });
        doc.moveDown(0.2);
      });
    }

    // 5. DAY-BY-DAY ITINERARY
    if (tour.itinerary && tour.itinerary.length > 0) {
      printSectionHeader('Detailed Day-by-Day Itinerary');

      tour.itinerary.forEach((item) => {
        if (doc.y > pageHeight - 110) doc.addPage();
        
        doc.moveDown(0.4);
        const dayBoxY = doc.y;
        
        // Day Header Box
        doc.rect(margin, dayBoxY, contentWidth, 18).fillColor(COLOR_BG_LIGHT).fill();
        doc.rect(margin, dayBoxY, contentWidth, 18).strokeColor(COLOR_BORDER).lineWidth(0.5).stroke();

        doc.fontSize(8.5).fillColor(COLOR_GOLD).font('Helvetica-Bold')
           .text(item.day.toUpperCase(), margin + 8, dayBoxY + 4);
        
        const dayTitleX = margin + 65;
        doc.fontSize(8.5).fillColor(COLOR_NAVY).font('Helvetica-Bold')
           .text(cleanText(item.title), dayTitleX, dayBoxY + 4, { width: contentWidth - 75 });

        doc.y = dayBoxY + 24;

        // Day Content
        const content = cleanText(item.content);
        doc.fontSize(9).fillColor(COLOR_TEXT).font('Helvetica')
           .text(content, margin + 6, doc.y, { width: contentWidth - 12, lineGap: 2.5 });

        doc.moveDown(0.3);
      });
    }

    // 6. INCLUSIONS & EXCLUSIONS
    if (doc.y > pageHeight - 150) doc.addPage();
    printSectionHeader('Inclusions & Trip Details');

    const halfW = (contentWidth - 16) / 2;
    const incStartY = doc.y;

    // What's Included (Left Column)
    doc.fontSize(10).fillColor(COLOR_DARK).font('Helvetica-Bold')
       .text("What's Included", margin, incStartY);
    doc.moveDown(0.3);

    if (tour.inclusions && tour.inclusions.length > 0) {
      tour.inclusions.forEach(inc => {
        if (doc.y > pageHeight - 50) doc.addPage();
        doc.fontSize(8.5).fillColor(COLOR_GOLD).font('Helvetica-Bold').text('✓ ', margin, doc.y, { continued: true });
        doc.fillColor(COLOR_TEXT).font('Helvetica').text(cleanText(inc), { width: halfW - 12, lineGap: 2 });
        doc.moveDown(0.15);
      });
    }

    const incEndY = doc.y;

    // Not Included (Right Column)
    const rightColX = margin + halfW + 16;
    doc.y = incStartY;
    doc.fontSize(10).fillColor(COLOR_DARK).font('Helvetica-Bold')
       .text('Not Included', rightColX, incStartY);
    doc.moveDown(0.3);

    if (tour.exclusions && tour.exclusions.length > 0) {
      tour.exclusions.forEach(exc => {
        if (doc.y > pageHeight - 50) doc.addPage();
        doc.fontSize(8.5).fillColor('#A24936').font('Helvetica-Bold').text('✗ ', rightColX, doc.y, { continued: true });
        doc.fillColor(COLOR_TEXT).font('Helvetica').text(cleanText(exc), { width: halfW - 12, lineGap: 2 });
        doc.moveDown(0.15);
      });
    }

    const excEndY = doc.y;
    doc.y = Math.max(incEndY, excEndY) + 10;

    // 7. IMPORTANT INFORMATION & PACKING
    if (doc.y > pageHeight - 140) doc.addPage();
    printSectionHeader('Important Travel Information');
    const infoPoints = [
      'Transport: Luxury air-conditioned 4x4 or minivan with experienced English/French/Spanish-speaking professional driver.',
      'Accommodation: Hand-selected traditional boutique riads and deluxe Sahara desert camp with private en-suite tent.',
      'Luggage: We recommend medium soft bags or duffels for easier transport in desert vehicles.',
      'Customization: 100% tailor-made. Timing, stops, and accommodations can be adjusted to your exact preferences.'
    ];
    infoPoints.forEach(pt => {
      if (doc.y > pageHeight - 40) doc.addPage();
      doc.fontSize(8.5).fillColor(COLOR_TEXT).font('Helvetica')
         .text(`• ${pt}`, margin + 6, doc.y, { width: contentWidth - 12, lineGap: 2 });
      doc.moveDown(0.2);
    });

    // 8. CONTACT & RESERVATION BOX
    if (doc.y > pageHeight - 100) doc.addPage();
    doc.moveDown(0.6);
    const contactBoxY = doc.y;
    doc.rect(margin, contactBoxY, contentWidth, 52).fillColor(COLOR_NAVY).fill();
    doc.rect(margin, contactBoxY, contentWidth, 52).strokeColor(COLOR_GOLD).lineWidth(1).stroke();

    doc.fontSize(10).fillColor(COLOR_GOLD).font('Helvetica-Bold')
       .text('RESERVATIONS & TAILOR-MADE INQUIRIES', margin + 12, contactBoxY + 8);
    doc.fontSize(8.5).fillColor('#FFFFFF').font('Helvetica')
       .text('To book or customize this tour, contact our Marrakech travel designers directly:', margin + 12, contactBoxY + 22);
    doc.fontSize(8.5).fillColor(COLOR_GOLD).font('Helvetica-Bold')
       .text('WhatsApp: +212 678-317015  |  Email: contact@saharastartours.com  |  Web: www.saharastartours.com', margin + 12, contactBoxY + 35);

    // ==========================================
    // TWO-PASS: RUNNING HEADERS, FOOTERS & WATERMARK
    // ==========================================
    const range = doc.bufferedPageRange();
    for (let i = range.start; i < range.start + range.count; i++) {
      doc.switchToPage(i);

      // A. SUBTLE VISUAL WATERMARK (EVERY PAGE)
      doc.save();
      doc.fontSize(38);
      doc.fillColor(COLOR_GOLD);
      doc.opacity(0.10);
      doc.rotate(-35, { origin: [pageWidth / 2, pageHeight / 2] });
      doc.text('SAHARA STAR TOURS\nwww.saharastartours.com', 50, (pageHeight / 2) - 40, {
        align: 'center',
        lineGap: 8
      });
      doc.restore();

      // B. RUNNING HEADER (PAGES 2+)
      if (i > 0) {
        doc.save();
        doc.fontSize(7.5).fillColor(COLOR_MUTED).font('Helvetica');
        doc.text(`Sahara Star Tours  |  ${tour.shortTitle || tour.title}`, margin, 18, { width: contentWidth - 100 });
        doc.text(tour.duration, margin + contentWidth - 90, 18, { width: 90, align: 'right' });
        doc.moveTo(margin, 28).lineTo(margin + contentWidth, 28)
           .strokeColor(COLOR_BORDER).lineWidth(0.5).stroke();
        doc.restore();
      }

      // C. RUNNING FOOTER (EVERY PAGE)
      doc.save();
      const footerY = pageHeight - 30;
      doc.moveTo(margin, footerY - 5).lineTo(margin + contentWidth, footerY - 5)
         .strokeColor(COLOR_BORDER).lineWidth(0.5).stroke();
      doc.fontSize(7.5).fillColor(COLOR_MUTED).font('Helvetica');
      doc.text('© Sahara Star Tours — Private Itinerary | For Personal Use Only | www.saharastartours.com', margin, footerY, { width: contentWidth - 80 });
      doc.text(`Page ${i + 1} of ${range.count}`, margin + contentWidth - 70, footerY, { width: 70, align: 'right' });
      doc.restore();
    }

    doc.end();

    writeStream.on('finish', () => resolve(outPath));
    writeStream.on('error', reject);
  });
}

async function run() {
  console.log(`Generating PDFs for ${tours.length} tours...`);
  const startTime = Date.now();
  let generated = 0;

  for (const tour of tours) {
    try {
      await generateTourPDF(tour);
      generated++;
    } catch (err) {
      console.error(`Failed to generate PDF for ${tour.slug}:`, err);
    }
  }

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`✅ Successfully generated ${generated}/${tours.length} PDFs in ${durationSec}s!`);
}

run();
