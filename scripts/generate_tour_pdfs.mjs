import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Load tours directly from TypeScript data file (Single Source of Truth)
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
    if (!heroPath) return null;
    const clean = heroPath.startsWith('/') ? heroPath.slice(1) : heroPath;
    const fullPath = path.resolve('public', clean);
    if (!fs.existsSync(fullPath)) return null;

    return await sharp(fullPath)
      .resize({ width: 1040, height: 500, fit: 'cover', position: 'center' })
      .jpeg({ quality: 86, progressive: true })
      .toBuffer();
  } catch (err) {
    console.warn(`[PDF Warning] Could not process image ${heroPath}:`, err.message);
    return null;
  }
}

/**
 * Generate a luxury editorial PDF travel brochure for a single tour
 */
async function generateTourPDF(tour) {
  const imageBuffer = await getHeroImageBuffer(tour.heroImage);

  return new Promise((resolve, reject) => {
    const outPath = path.join(OUTPUT_DIR, `${tour.slug}.pdf`);
    const writeStream = fs.createWriteStream(outPath);

    const doc = new PDFDocument({
      size: 'A4',
      margin: 44,
      bufferPages: true,
      userPassword: '', // Visitors open normally without entering a password
      ownerPassword: 'SST_SECURE_BUILD_KEY_2026', // Prevents modifying & unauthorized copying
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
    const margin = 44;
    const contentWidth = pageWidth - (margin * 2);

    // MOROCCAN LUXURY PALETTE (Editorial, Printable, Elegant)
    const COLOR_GOLD = '#B8863A';
    const COLOR_NAVY = '#0E131F';
    const COLOR_TEXT = '#22262F';
    const COLOR_MUTED = '#636A79';
    const COLOR_BORDER = '#E5DFD5';
    const COLOR_BG_LIGHT = '#F9F7F2';
    const COLOR_CHECK = '#2A7048';
    const COLOR_CROSS = '#A03B32';

    // Taxonomy badge label
    const catLabel = tour.productType === 'day-trip' ? 'PRIVATE DAY EXCURSION' : 
                     tour.productType === 'activity' ? 'DESERT ADVENTURE EXPERIENCE' : 
                     (tour.themes && tour.themes.includes('imperial-cities')) ? 'IMPERIAL CITIES CIRCUIT' :
                     'PRIVATE MULTI-DAY ITINERARY';

    const tourStyle = tour.productType === 'activity' ? 'Guided Experience' :
                      tour.productType === 'day-trip' ? 'Private Day Trip' : 
                      '100% Private Tour';

    // ==========================================
    // PAGE 1: EDITORIAL COVER
    // ==========================================
    const topY = 40;
    if (fs.existsSync(LOGO_PATH)) {
      doc.image(LOGO_PATH, margin, topY, { width: 42 });
    }

    doc.fontSize(13.5).fillColor(COLOR_NAVY).font('Helvetica-Bold')
       .text('SAHARA STAR TOURS', margin + 50, topY + 3, { characterSpacing: 1.2 });
    doc.fontSize(7.5).fillColor(COLOR_GOLD).font('Helvetica-Bold')
       .text('PRIVATE MOROCCO EXPEDITIONS & BESPOKE TRAVEL', margin + 50, topY + 19, { characterSpacing: 0.8 });
    doc.fontSize(7).fillColor(COLOR_MUTED).font('Helvetica')
       .text('MARRAKECH • CASABLANCA • SAHARA DESERT • FES • TANGIER', margin + 50, topY + 30, { characterSpacing: 0.5 });

    doc.moveTo(margin, topY + 46).lineTo(margin + contentWidth, topY + 46)
       .strokeColor(COLOR_BORDER).lineWidth(0.8).stroke();

    // Cover Hero Image
    const heroY = topY + 56;
    const heroHeight = 225;

    if (imageBuffer) {
      doc.save();
      doc.roundedRect(margin, heroY, contentWidth, heroHeight, 4).clip();
      doc.image(imageBuffer, margin, heroY, { width: contentWidth, height: heroHeight });
      doc.restore();
      doc.roundedRect(margin, heroY, contentWidth, heroHeight, 4)
         .strokeColor(COLOR_BORDER).lineWidth(0.8).stroke();
    }

    doc.y = heroY + heroHeight + 16;

    // Display Title without redundant branding suffix
    const displayTitle = (tour.shortTitle || tour.title)
      .replace(/\s*[|\-–—]\s*Sahara Star Tours.*$/i, '')
      .trim();

    // Tour Product Category Badge
    doc.fontSize(8).fillColor(COLOR_GOLD).font('Helvetica-Bold')
       .text(catLabel, margin, doc.y, { characterSpacing: 1.5 });
    doc.moveDown(0.3);

    // Tour Title
    doc.fontSize(18).fillColor(COLOR_NAVY).font('Helvetica-Bold')
       .text(displayTitle, margin, doc.y, { width: contentWidth, lineGap: 3 });
    doc.moveDown(0.4);

    // Quick Facts Box
    const factsY = doc.y;
    const factsHeight = 42;
    doc.roundedRect(margin, factsY, contentWidth, factsHeight, 3)
       .fillColor(COLOR_BG_LIGHT).fill();
    doc.roundedRect(margin, factsY, contentWidth, factsHeight, 3)
       .strokeColor(COLOR_BORDER).lineWidth(0.8).stroke();

    const colWidth = contentWidth / 4;
    const printFact = (idx, label, value) => {
      const colX = margin + (idx * colWidth);
      doc.fontSize(6.8).fillColor(COLOR_MUTED).font('Helvetica')
         .text(label.toUpperCase(), colX, factsY + 7, { width: colWidth, align: 'center', characterSpacing: 0.8 });
      doc.fontSize(9).fillColor(COLOR_NAVY).font('Helvetica-Bold')
         .text(value, colX, factsY + 20, { width: colWidth, align: 'center' });
    };

    printFact(0, 'Duration', tour.duration);
    printFact(1, 'Departure', tour.startingFrom || tour.departureCity || 'Marrakech');
    printFact(2, 'Finish', tour.arrivalCity || 'Marrakech');
    printFact(3, 'Tour Style', tourStyle);

    doc.y = factsY + factsHeight + 14;

    // Introduction / Overview
    doc.fontSize(8).fillColor(COLOR_GOLD).font('Helvetica-Bold')
       .text('ABOUT THIS JOURNEY', margin, doc.y, { characterSpacing: 1.2 });
    doc.moveDown(0.25);

    const descText = cleanText(tour.description);
    doc.fontSize(9).fillColor(COLOR_TEXT).font('Helvetica')
       .text(descText, margin, doc.y, { width: contentWidth, lineGap: 3.2, maxLines: 5, ellipsis: true });

    // Cover Page Footer Block (Prevent auto page break)
    doc.page.margins.bottom = 0;
    const coverFooterY = pageHeight - 55;
    doc.moveTo(margin, coverFooterY).lineTo(margin + contentWidth, coverFooterY)
       .strokeColor(COLOR_BORDER).lineWidth(0.8).stroke();

    doc.fontSize(7.5).fillColor(COLOR_NAVY).font('Helvetica-Bold')
       .text('Sahara Star Tours — Fully Licensed Moroccan Tour Operator', margin, coverFooterY + 6, { lineBreak: false });
    doc.fontSize(7).fillColor(COLOR_MUTED).font('Helvetica')
       .text('www.saharastartours.com  •  WhatsApp: +212 678-317015  •  contact@saharastartours.com', margin, coverFooterY + 18, { lineBreak: false });
    doc.page.margins.bottom = margin;

    // ==========================================
    // PAGE 2+: TOUR INFORMATION & ITINERARY
    // ==========================================
    doc.addPage();

    const printSectionHeader = (title, subtitle = '') => {
      if (doc.y > pageHeight - 80) doc.addPage();
      doc.moveDown(0.5);
      const headerY = doc.y;

      doc.rect(margin, headerY + 1, 3, 13).fillColor(COLOR_GOLD).fill();
      doc.fontSize(11).fillColor(COLOR_NAVY).font('Helvetica-Bold')
         .text(title.toUpperCase(), margin + 9, headerY + 1, { characterSpacing: 1.1 });

      if (subtitle) {
        doc.fontSize(8).fillColor(COLOR_MUTED).font('Helvetica')
           .text(subtitle, margin + 9, headerY + 16);
        doc.y = headerY + 26;
      } else {
        doc.y = headerY + 18;
      }
    };

    // Page 2 Top: Quick Facts Recap Strip
    const p2FactsY = doc.y;
    doc.roundedRect(margin, p2FactsY, contentWidth, 30, 2).fillColor(COLOR_BG_LIGHT).fill();
    doc.roundedRect(margin, p2FactsY, contentWidth, 30, 2).strokeColor(COLOR_BORDER).lineWidth(0.6).stroke();

    const p2ColW = contentWidth / 4;
    const printP2Fact = (idx, label, val) => {
      const colX = margin + (idx * p2ColW);
      doc.fontSize(6.5).fillColor(COLOR_MUTED).font('Helvetica')
         .text(label.toUpperCase(), colX, p2FactsY + 5, { width: p2ColW, align: 'center' });
      doc.fontSize(8.2).fillColor(COLOR_NAVY).font('Helvetica-Bold')
         .text(val, colX, p2FactsY + 15, { width: p2ColW, align: 'center' });
    };

    printP2Fact(0, 'Duration', tour.duration);
    printP2Fact(1, 'Departure', tour.startingFrom || tour.departureCity || 'Marrakech');
    printP2Fact(2, 'Finish', tour.arrivalCity || 'Marrakech');
    printP2Fact(3, 'Tour Style', tourStyle);

    doc.y = p2FactsY + 36;

    // 1. HIGHLIGHTS
    if (tour.highlights && tour.highlights.length > 0) {
      printSectionHeader('Key Highlights');
      doc.moveDown(0.25);

      tour.highlights.forEach(h => {
        if (doc.y > pageHeight - 50) doc.addPage();
        const bulletY = doc.y;
        doc.circle(margin + 5, bulletY + 5, 2).fillColor(COLOR_GOLD).fill();
        doc.fontSize(8.8).fillColor(COLOR_TEXT).font('Helvetica')
           .text(cleanText(h), margin + 15, bulletY, { width: contentWidth - 15, lineGap: 2 });
        doc.moveDown(0.18);
      });
      doc.moveDown(0.4);
    }

    // 2. DAY-BY-DAY ITINERARY
    if (tour.itinerary && tour.itinerary.length > 0) {
      printSectionHeader('Detailed Program Itinerary');
      doc.moveDown(0.3);

      tour.itinerary.forEach((item) => {
        const itemContent = cleanText(item.content);
        const itemTitle = cleanText(item.title);

        const dayTagHeight = 16;
        const titleHeight = doc.heightOfString(itemTitle, { width: contentWidth - 72, font: 'Helvetica-Bold', size: 9.5 });
        const contentHeight = doc.heightOfString(itemContent, { width: contentWidth - 16, font: 'Helvetica', size: 8.8, lineGap: 3 });
        const totalBlockHeight = Math.max(dayTagHeight, titleHeight) + contentHeight + 20;

        if (doc.y + Math.min(totalBlockHeight, 120) > pageHeight - 55) {
          doc.addPage();
        }

        const startY = doc.y;

        // Day Number Pill
        const dayLabel = item.day.toUpperCase();
        doc.roundedRect(margin, startY, 52, 15, 2).fillColor(COLOR_BG_LIGHT).fill();
        doc.roundedRect(margin, startY, 52, 15, 2).strokeColor(COLOR_BORDER).lineWidth(0.5).stroke();
        doc.fontSize(7.8).fillColor(COLOR_GOLD).font('Helvetica-Bold')
           .text(dayLabel, margin, startY + 3.5, { width: 52, align: 'center', characterSpacing: 0.8 });

        // Day Title
        const titleX = margin + 60;
        doc.fontSize(9.5).fillColor(COLOR_NAVY).font('Helvetica-Bold')
           .text(itemTitle, titleX, startY + 2.5, { width: contentWidth - 64, lineGap: 2 });

        doc.y = Math.max(startY + 20, doc.y + 4);

        // Day Description
        const descStartY = doc.y;
        doc.fontSize(8.8).fillColor(COLOR_TEXT).font('Helvetica')
           .text(itemContent, margin + 12, descStartY, { width: contentWidth - 12, lineGap: 3 });

        const descEndY = doc.y;
        doc.moveTo(margin + 4, descStartY - 2).lineTo(margin + 4, descEndY)
           .strokeColor(COLOR_BORDER).lineWidth(0.8).stroke();

        doc.y = descEndY + 10;
      });
    }

    // ==========================================
    // FINAL SECTION: INCLUSIONS & BOOKING
    // ==========================================
    if (doc.y > pageHeight - 200) {
      doc.addPage();
    }

    printSectionHeader('Inclusions & Trip Details');
    doc.moveDown(0.25);

    const halfW = (contentWidth - 16) / 2;
    const startTableY = doc.y;

    // What's Included (Left Column)
    doc.fontSize(9).fillColor(COLOR_CHECK).font('Helvetica-Bold')
       .text("What's Included", margin, startTableY);
    doc.moveDown(0.25);

    if (tour.inclusions && tour.inclusions.length > 0) {
      tour.inclusions.forEach(inc => {
        if (doc.y > pageHeight - 50) doc.addPage();
        const bulletY = doc.y;
        doc.circle(margin + 4, bulletY + 4.5, 2).fillColor(COLOR_CHECK).fill();
        doc.fontSize(8.4).fillColor(COLOR_TEXT).font('Helvetica')
           .text(cleanText(inc), margin + 12, bulletY, { width: halfW - 14, lineGap: 2 });
        doc.moveDown(0.18);
      });
    }
    const incEndY = doc.y;

    // What's Not Included (Right Column)
    const rightColX = margin + halfW + 16;
    doc.y = startTableY;
    doc.fontSize(9).fillColor(COLOR_CROSS).font('Helvetica-Bold')
       .text('Not Included', rightColX, startTableY);
    doc.moveDown(0.25);

    if (tour.exclusions && tour.exclusions.length > 0) {
      tour.exclusions.forEach(exc => {
        if (doc.y > pageHeight - 50) doc.addPage();
        const bulletY = doc.y;
        doc.circle(rightColX + 4, bulletY + 4.5, 2).fillColor(COLOR_CROSS).fill();
        doc.fontSize(8.4).fillColor(COLOR_TEXT).font('Helvetica')
           .text(cleanText(exc), rightColX + 12, bulletY, { width: halfW - 14, lineGap: 2 });
        doc.moveDown(0.18);
      });
    }
    const excEndY = doc.y;

    doc.y = Math.max(incEndY, excEndY) + 12;

    // Important Travel Information
    if (doc.y > pageHeight - 120) doc.addPage();
    doc.fontSize(8.2).fillColor(COLOR_NAVY).font('Helvetica-Bold')
       .text('IMPORTANT TRAVEL INFORMATION', margin, doc.y, { characterSpacing: 0.8 });
    doc.moveDown(0.25);

    const notes = [
      'Transport: Private air-conditioned luxury 4x4 or Mercedes minivan with experienced licensed chauffeur.',
      'Accommodation: Handpicked authentic boutique riads and deluxe Sahara desert camp with private en-suite tent.',
      'Tailor-Made Flexibility: 100% customizable. Timing, stops, and accommodations can be modified to your exact preferences.'
    ];
    notes.forEach(note => {
      doc.fontSize(7.8).fillColor(COLOR_MUTED).font('Helvetica')
         .text(`•  ${note}`, margin + 6, doc.y, { width: contentWidth - 6, lineGap: 1.8 });
      doc.moveDown(0.15);
    });

    // Booking & Direct Contact Card
    if (doc.y > pageHeight - 95) doc.addPage();
    doc.moveDown(0.4);

    const contactY = doc.y;
    const contactHeight = 52;
    doc.roundedRect(margin, contactY, contentWidth, contactHeight, 3)
       .fillColor(COLOR_BG_LIGHT).fill();
    doc.rect(margin, contactY, 4, contactHeight).fillColor(COLOR_GOLD).fill();
    doc.roundedRect(margin, contactY, contentWidth, contactHeight, 3)
       .strokeColor(COLOR_BORDER).lineWidth(0.8).stroke();

    doc.fontSize(9).fillColor(COLOR_NAVY).font('Helvetica-Bold')
       .text('READY TO BOOK OR CUSTOMIZE THIS EXPEDITION?', margin + 12, contactY + 8, { characterSpacing: 0.6 });
    doc.fontSize(7.8).fillColor(COLOR_MUTED).font('Helvetica')
       .text('Contact our Marrakech travel designers directly for instant assistance, route customizations, or booking inquiries:', margin + 12, contactY + 21);
    doc.fontSize(8.2).fillColor(COLOR_GOLD).font('Helvetica-Bold')
       .text('WhatsApp: +212 678-317015   •   Email: contact@saharastartours.com   •   Web: www.saharastartours.com', margin + 12, contactY + 34);

    // ==========================================
    // TWO-PASS: RUNNING HEADERS, FOOTERS & WATERMARK
    // ==========================================
    const range = doc.bufferedPageRange();
    for (let i = range.start; i < range.start + range.count; i++) {
      doc.switchToPage(i);
      // Temporarily disable margins to completely prevent accidental page creation in second pass
      doc.page.margins.bottom = 0;
      doc.page.margins.top = 0;

      // A. SUBTLE ANTI-COPY WATERMARK (EVERY PAGE)
      doc.save();
      doc.fontSize(34);
      doc.fillColor(COLOR_GOLD);
      doc.opacity(0.08); // Subtle anti-copy deterrent, elegant and does not obstruct text
      doc.rotate(-35, { origin: [pageWidth / 2, pageHeight / 2] });
      doc.text('SAHARA STAR TOURS\nwww.saharastartours.com', 50, (pageHeight / 2) - 40, {
        align: 'center',
        lineGap: 10,
        lineBreak: false
      });
      doc.restore();

      // B. RUNNING HEADER (PAGES 2+)
      if (i > 0) {
        doc.save();
        const headerY = 22;
        doc.fontSize(7.2).fillColor(COLOR_NAVY).font('Helvetica-Bold')
           .text('SAHARA STAR TOURS', margin, headerY, { lineBreak: false });
        doc.fontSize(7.2).fillColor(COLOR_MUTED).font('Helvetica')
           .text(displayTitle, margin + 105, headerY, { width: contentWidth - 185, ellipsis: true, lineBreak: false });
        doc.fontSize(7.2).fillColor(COLOR_GOLD).font('Helvetica-Bold')
           .text(tour.duration, margin + contentWidth - 80, headerY, { width: 80, align: 'right', lineBreak: false });

        doc.moveTo(margin, headerY + 11).lineTo(margin + contentWidth, headerY + 11)
           .strokeColor(COLOR_BORDER).lineWidth(0.5).stroke();
        doc.restore();
      }

      // C. RUNNING FOOTER (EVERY PAGE)
      doc.save();
      const footerY = pageHeight - 30;
      doc.moveTo(margin, footerY - 4).lineTo(margin + contentWidth, footerY - 4)
         .strokeColor(COLOR_BORDER).lineWidth(0.5).stroke();

      doc.fontSize(7).fillColor(COLOR_MUTED).font('Helvetica')
         .text('© Sahara Star Tours • Private Tailor-Made Morocco Expeditions • www.saharastartours.com', margin, footerY, { lineBreak: false });
      doc.fontSize(7.2).fillColor(COLOR_MUTED).font('Helvetica')
         .text(`Page ${i + 1} of ${range.count}`, margin + contentWidth - 60, footerY, { width: 60, align: 'right', lineBreak: false });
      doc.restore();

      doc.page.margins.bottom = margin;
      doc.page.margins.top = margin;
    }

    doc.end();

    writeStream.on('finish', () => resolve(outPath));
    writeStream.on('error', reject);
  });
}

async function run() {
  console.log(`Generating luxury PDFs for ${tours.length} products...`);
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
