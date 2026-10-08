import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

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
 * Pre-process and optimize hero image for PDF cover
 */
async function getHeroImageBuffer(heroPath) {
  try {
    const clean = heroPath.startsWith('/') ? heroPath.slice(1) : heroPath;
    const fullPath = path.resolve('public', clean);
    if (!fs.existsSync(fullPath)) return null;

    // Convert WebP/PNG to high-quality JPEG buffer sized for A4 cover
    return await sharp(fullPath)
      .resize({ width: 1040, height: 560, fit: 'cover', position: 'center' })
      .jpeg({ quality: 86, progressive: true })
      .toBuffer();
  } catch (err) {
    console.warn('Failed to process image buffer:', err.message);
    return null;
  }
}

/**
 * Generate a luxury editorial PDF for a single tour
 */
async function generateTourPDF(tour) {
  const imageBuffer = await getHeroImageBuffer(tour.heroImage);

  return new Promise((resolve, reject) => {
    const outPath = path.join(OUTPUT_DIR, `${tour.slug}.pdf`);
    const writeStream = fs.createWriteStream(outPath);

    const doc = new PDFDocument({
      size: 'A4',
      margin: 48,
      bufferPages: true,
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
        Title: `${tour.shortTitle || tour.title} — Sahara Star Tours`,
        Author: 'Sahara Star Tours',
        Subject: `Private Morocco Travel Itinerary: ${tour.title}`,
        Keywords: `Morocco, Desert Tour, Sahara Star Tours, ${tour.departureCity}, ${tour.duration}`
      }
    });

    doc.pipe(writeStream);

    const pageWidth = 595.28;
    const pageHeight = 841.89;
    const margin = 48;
    const contentWidth = pageWidth - (margin * 2); // 499.28 pt

    // LUXURY BRAND PALETTE
    const COLOR_GOLD = '#B8863A';
    const COLOR_NAVY = '#0E131F';
    const COLOR_TEXT = '#22262F';
    const COLOR_MUTED = '#636A79';
    const COLOR_BORDER = '#E5DFD5';
    const COLOR_BG_LIGHT = '#F9F7F2';
    const COLOR_CHECK = '#2A7048';
    const COLOR_CROSS = '#A03B32';

    // ==========================================
    // PAGE 1: EDITORIAL COVER
    // ==========================================

    // Top Header: Logo + Agency Brand Typography
    const topY = 44;
    if (fs.existsSync(LOGO_PATH)) {
      doc.image(LOGO_PATH, margin, topY, { width: 44 });
    }

    doc.fontSize(14).fillColor(COLOR_NAVY).font('Helvetica-Bold')
       .text('SAHARA STAR TOURS', margin + 54, topY + 4, { characterSpacing: 1.2 });
    doc.fontSize(7.5).fillColor(COLOR_GOLD).font('Helvetica-Bold')
       .text('PRIVATE MOROCCO EXPEDITIONS & BESPOKE TRAVEL', margin + 54, topY + 21, { characterSpacing: 0.8 });
    doc.fontSize(7).fillColor(COLOR_MUTED).font('Helvetica')
       .text('MARRAKECH • CASABLANCA • SAHARA DESERT • FES', margin + 54, topY + 33, { characterSpacing: 0.5 });

    // Hairline divider
    doc.moveTo(margin, topY + 50).lineTo(margin + contentWidth, topY + 50)
       .strokeColor(COLOR_BORDER).lineWidth(0.8).stroke();

    // Cover Hero Image
    const heroY = topY + 62;
    const heroHeight = 250;

    if (imageBuffer) {
      doc.save();
      // Draw rounded rectangle clip or clean rect
      doc.roundedRect(margin, heroY, contentWidth, heroHeight, 4).clip();
      doc.image(imageBuffer, margin, heroY, { width: contentWidth, height: heroHeight });
      doc.restore();
      // Subtle framing border
      doc.roundedRect(margin, heroY, contentWidth, heroHeight, 4)
         .strokeColor(COLOR_BORDER).lineWidth(0.8).stroke();
    }

    doc.y = heroY + heroHeight + 18;

    // Tour Product Category Badge
    const catLabel = tour.productType === 'day-trip' ? 'PRIVATE DAY EXCURSION' : 
                     tour.productType === 'activity' ? 'DESERT ADVENTURE EXPERIENCE' : 
                     'PRIVATE MULTI-DAY ITINERARY';

    doc.fontSize(8).fillColor(COLOR_GOLD).font('Helvetica-Bold')
       .text(catLabel, margin, doc.y, { characterSpacing: 1.5 });
    doc.moveDown(0.35);

    // Tour Title (Editorial headline)
    doc.fontSize(19).fillColor(COLOR_NAVY).font('Helvetica-Bold')
       .text(tour.title, margin, doc.y, { width: contentWidth, lineGap: 3 });
    doc.moveDown(0.5);

    // Quick Facts Box (4 equal columns)
    const factsY = doc.y;
    const factsHeight = 44;
    doc.roundedRect(margin, factsY, contentWidth, factsHeight, 3)
       .fillColor(COLOR_BG_LIGHT).fill();
    doc.roundedRect(margin, factsY, contentWidth, factsHeight, 3)
       .strokeColor(COLOR_BORDER).lineWidth(0.8).stroke();

    const colWidth = contentWidth / 4;
    const printFact = (idx, label, value) => {
      const colX = margin + (idx * colWidth);
      doc.fontSize(7).fillColor(COLOR_MUTED).font('Helvetica')
         .text(label.toUpperCase(), colX, factsY + 8, { width: colWidth, align: 'center', characterSpacing: 0.8 });
      doc.fontSize(9.5).fillColor(COLOR_NAVY).font('Helvetica-Bold')
         .text(value, colX, factsY + 22, { width: colWidth, align: 'center' });
    };

    printFact(0, 'Duration', tour.duration);
    printFact(1, 'Departure', tour.startingFrom || tour.departureCity);
    printFact(2, 'Finish', tour.arrivalCity || 'Marrakech');
    printFact(3, 'Tour Style', '100% Private');

    doc.y = factsY + factsHeight + 16;

    // Introduction / Overview (One clean editorial paragraph)
    doc.fontSize(8).fillColor(COLOR_GOLD).font('Helvetica-Bold')
       .text('ABOUT THIS JOURNEY', margin, doc.y, { characterSpacing: 1.2 });
    doc.moveDown(0.3);

    const descText = cleanText(tour.description);
    doc.fontSize(9.2).fillColor(COLOR_TEXT).font('Helvetica')
       .text(descText, margin, doc.y, { width: contentWidth, lineGap: 3.5, maxLines: 6, ellipsis: true });

    // Cover Page Footer Block (Fixed at bottom of Page 1)
    const coverFooterY = pageHeight - 65;
    doc.moveTo(margin, coverFooterY).lineTo(margin + contentWidth, coverFooterY)
       .strokeColor(COLOR_BORDER).lineWidth(0.8).stroke();

    doc.fontSize(7.5).fillColor(COLOR_NAVY).font('Helvetica-Bold')
       .text('Sahara Star Tours — Fully Licensed Moroccan Tour Operator', margin, coverFooterY + 8);
    doc.fontSize(7.2).fillColor(COLOR_MUTED).font('Helvetica')
       .text('www.saharastartours.com  •  WhatsApp: +212 678-317015  •  contact@saharastartours.com', margin, coverFooterY + 20);

    // ==========================================
    // PAGE 2+: HIGHLIGHTS & ITINERARY
    // ==========================================
    doc.addPage();

    // Helper: Section Title
    const printSectionHeader = (title, subtitle = '') => {
      if (doc.y > pageHeight - 90) doc.addPage();
      doc.moveDown(0.6);
      const headerY = doc.y;

      // Small gold vertical marker
      doc.rect(margin, headerY + 1, 3, 14).fillColor(COLOR_GOLD).fill();
      doc.fontSize(11.5).fillColor(COLOR_NAVY).font('Helvetica-Bold')
         .text(title.toUpperCase(), margin + 10, headerY + 1, { characterSpacing: 1.1 });

      if (subtitle) {
        doc.fontSize(8).fillColor(COLOR_MUTED).font('Helvetica')
           .text(subtitle, margin + 10, headerY + 17);
        doc.y = headerY + 28;
      } else {
        doc.y = headerY + 20;
      }
    };

    // 1. HIGHLIGHTS
    if (tour.highlights && tour.highlights.length > 0) {
      printSectionHeader('Key Journey Highlights');
      doc.moveDown(0.3);

      tour.highlights.forEach(h => {
        if (doc.y > pageHeight - 50) doc.addPage();
        const bulletY = doc.y;
        doc.circle(margin + 5, bulletY + 5, 2.2).fillColor(COLOR_GOLD).fill();
        doc.fontSize(9).fillColor(COLOR_TEXT).font('Helvetica')
           .text(cleanText(h), margin + 16, bulletY, { width: contentWidth - 16, lineGap: 2.5 });
        doc.moveDown(0.2);
      });
      doc.moveDown(0.5);
    }

    // 2. DAY-BY-DAY ITINERARY
    if (tour.itinerary && tour.itinerary.length > 0) {
      printSectionHeader('Day-by-Day Program Itinerary');
      doc.moveDown(0.4);

      tour.itinerary.forEach((item, idx) => {
        const itemContent = cleanText(item.content);
        const itemTitle = cleanText(item.title);

        // Pre-calculate block height to avoid splitting day header and content
        const dayTagHeight = 16;
        const titleHeight = doc.heightOfString(itemTitle, { width: contentWidth - 75, font: 'Helvetica-Bold', size: 10 });
        const contentHeight = doc.heightOfString(itemContent, { width: contentWidth - 18, font: 'Helvetica', size: 9, lineGap: 3 });
        const totalBlockHeight = Math.max(dayTagHeight, titleHeight) + contentHeight + 24;

        // Smart page break: if remaining space is insufficient for the day block, push to new page
        if (doc.y + Math.min(totalBlockHeight, 130) > pageHeight - 55) {
          doc.addPage();
        }

        const startY = doc.y;

        // Day Number Pill (Gold accent badge)
        const dayLabel = item.day.toUpperCase();
        doc.roundedRect(margin, startY, 56, 16, 2).fillColor(COLOR_BG_LIGHT).fill();
        doc.roundedRect(margin, startY, 56, 16, 2).strokeColor(COLOR_BORDER).lineWidth(0.6).stroke();
        doc.fontSize(8).fillColor(COLOR_GOLD).font('Helvetica-Bold')
           .text(dayLabel, margin, startY + 4, { width: 56, align: 'center', characterSpacing: 0.8 });

        // Day Title
        const titleX = margin + 66;
        doc.fontSize(10).fillColor(COLOR_NAVY).font('Helvetica-Bold')
           .text(itemTitle, titleX, startY + 3, { width: contentWidth - 70, lineGap: 2 });

        doc.y = Math.max(startY + 22, doc.y + 4);

        // Day Description with elegant left subtle border
        const descStartY = doc.y;
        doc.fontSize(9).fillColor(COLOR_TEXT).font('Helvetica')
           .text(itemContent, margin + 14, descStartY, { width: contentWidth - 14, lineGap: 3.2 });

        const descEndY = doc.y;
        // Left accent bar
        doc.moveTo(margin + 4, descStartY - 2).lineTo(margin + 4, descEndY)
           .strokeColor(COLOR_BORDER).lineWidth(1).stroke();

        doc.y = descEndY + 12;
      });
    }

    // ==========================================
    // FINAL SECTION: INCLUSIONS & BOOKING
    // ==========================================
    // If not enough space for inclusions table, add page
    if (doc.y > pageHeight - 220) {
      doc.addPage();
    }

    printSectionHeader('Inclusions & Trip Conditions');
    doc.moveDown(0.3);

    const halfW = (contentWidth - 18) / 2;
    const startTableY = doc.y;

    // What's Included (Left Column)
    doc.fontSize(9.5).fillColor(COLOR_CHECK).font('Helvetica-Bold')
       .text("✓  What's Included", margin, startTableY);
    doc.moveDown(0.3);

    if (tour.inclusions && tour.inclusions.length > 0) {
      tour.inclusions.forEach(inc => {
        if (doc.y > pageHeight - 50) doc.addPage();
        doc.fontSize(8.5).fillColor(COLOR_CHECK).font('Helvetica-Bold').text('• ', margin + 2, doc.y, { continued: true });
        doc.fillColor(COLOR_TEXT).font('Helvetica').text(cleanText(inc), { width: halfW - 14, lineGap: 2.2 });
        doc.moveDown(0.2);
      });
    }
    const incEndY = doc.y;

    // What's Not Included (Right Column)
    const rightColX = margin + halfW + 18;
    doc.y = startTableY;
    doc.fontSize(9.5).fillColor(COLOR_CROSS).font('Helvetica-Bold')
       .text('✗  Not Included', rightColX, startTableY);
    doc.moveDown(0.3);

    if (tour.exclusions && tour.exclusions.length > 0) {
      tour.exclusions.forEach(exc => {
        if (doc.y > pageHeight - 50) doc.addPage();
        doc.fontSize(8.5).fillColor(COLOR_CROSS).font('Helvetica-Bold').text('• ', rightColX + 2, doc.y, { continued: true });
        doc.fillColor(COLOR_TEXT).font('Helvetica').text(cleanText(exc), { width: halfW - 14, lineGap: 2.2 });
        doc.moveDown(0.2);
      });
    }
    const excEndY = doc.y;

    doc.y = Math.max(incEndY, excEndY) + 14;

    // Essential Trip Notes
    if (doc.y > pageHeight - 140) doc.addPage();
    doc.fontSize(8.5).fillColor(COLOR_NAVY).font('Helvetica-Bold')
       .text('IMPORTANT TRAVEL NOTES', margin, doc.y, { characterSpacing: 0.8 });
    doc.moveDown(0.3);

    const notes = [
      'Transport: Private air-conditioned luxury 4x4 or Mercedes minivan with experienced licensed chauffeur.',
      'Accommodation: Handpicked authentic boutique riads and deluxe Sahara desert camp with private en-suite tent.',
      'Customization: 100% tailor-made. Timing, pace, stops, and accommodations can be modified to your exact preferences.'
    ];
    notes.forEach(note => {
      doc.fontSize(8).fillColor(COLOR_MUTED).font('Helvetica')
         .text(`•  ${note}`, margin + 6, doc.y, { width: contentWidth - 6, lineGap: 2 });
      doc.moveDown(0.2);
    });

    // Booking & Direct Contact Card
    if (doc.y > pageHeight - 110) doc.addPage();
    doc.moveDown(0.5);

    const contactY = doc.y;
    const contactHeight = 56;
    doc.roundedRect(margin, contactY, contentWidth, contactHeight, 3)
       .fillColor(COLOR_BG_LIGHT).fill();
    // Left decorative gold border
    doc.rect(margin, contactY, 4, contactHeight).fillColor(COLOR_GOLD).fill();
    doc.roundedRect(margin, contactY, contentWidth, contactHeight, 3)
       .strokeColor(COLOR_BORDER).lineWidth(0.8).stroke();

    doc.fontSize(9.5).fillColor(COLOR_NAVY).font('Helvetica-Bold')
       .text('READY TO BOOK OR CUSTOMIZE THIS EXPEDITION?', margin + 14, contactY + 9, { characterSpacing: 0.6 });
    doc.fontSize(8).fillColor(COLOR_MUTED).font('Helvetica')
       .text('Contact our Marrakech travel designers directly for instant assistance, route customizations, or booking inquiries:', margin + 14, contactY + 23);
    doc.fontSize(8.5).fillColor(COLOR_GOLD).font('Helvetica-Bold')
       .text('WhatsApp: +212 678-317015   •   Email: contact@saharastartours.com   •   Web: www.saharastartours.com', margin + 14, contactY + 38);

    // ==========================================
    // TWO-PASS: RUNNING HEADERS, FOOTERS & WATERMARK
    // ==========================================
    const range = doc.bufferedPageRange();
    for (let i = range.start; i < range.start + range.count; i++) {
      doc.switchToPage(i);

      // A. SUBTLE ANTI-COPY WATERMARK (EVERY PAGE)
      doc.save();
      doc.fontSize(34);
      doc.fillColor(COLOR_GOLD);
      doc.opacity(0.08); // visible deterrent without interfering with reading
      doc.rotate(-35, { origin: [pageWidth / 2, pageHeight / 2] });
      doc.text('SAHARA STAR TOURS\nwww.saharastartours.com', 50, (pageHeight / 2) - 40, {
        align: 'center',
        lineGap: 10
      });
      doc.restore();

      // B. RUNNING HEADER (PAGES 2+)
      if (i > 0) {
        doc.save();
        const headerY = 24;
        doc.fontSize(7.5).fillColor(COLOR_NAVY).font('Helvetica-Bold')
           .text('SAHARA STAR TOURS', margin, headerY);
        doc.fontSize(7.5).fillColor(COLOR_MUTED).font('Helvetica')
           .text(tour.shortTitle || tour.title, margin + 110, headerY, { width: contentWidth - 190, ellipsis: true });
        doc.fontSize(7.5).fillColor(COLOR_GOLD).font('Helvetica-Bold')
           .text(tour.duration, margin + contentWidth - 80, headerY, { width: 80, align: 'right' });

        doc.moveTo(margin, headerY + 12).lineTo(margin + contentWidth, headerY + 12)
           .strokeColor(COLOR_BORDER).lineWidth(0.5).stroke();
        doc.restore();
      }

      // C. RUNNING FOOTER (EVERY PAGE)
      doc.save();
      const footerY = pageHeight - 34;
      doc.moveTo(margin, footerY - 4).lineTo(margin + contentWidth, footerY - 4)
         .strokeColor(COLOR_BORDER).lineWidth(0.5).stroke();

      doc.fontSize(7).fillColor(COLOR_MUTED).font('Helvetica')
         .text('© Sahara Star Tours • Private Tailor-Made Morocco Expeditions • www.saharastartours.com', margin, footerY);
      doc.fontSize(7.5).fillColor(COLOR_MUTED).font('Helvetica')
         .text(`Page ${i + 1} of ${range.count}`, margin + contentWidth - 60, footerY, { width: 60, align: 'right' });
      doc.restore();
    }

    doc.end();

    writeStream.on('finish', () => resolve(outPath));
    writeStream.on('error', reject);
  });
}

// Test run on 1 tour
const sample = tours[0];
console.log('Generating test PDF for:', sample.slug);
const resultPath = await generateTourPDF(sample);
console.log('Test PDF successfully created at:', resultPath);
