import fs from 'node:fs';
import path from 'node:path';
import { tours } from '../src/data/tours.ts';

const locales = ['es', 'it'];
let totalFileErrors = 0;
let missingTours = 0;

for (const lang of locales) {
  const dir = path.resolve(`src/data/locales/${lang}/tours`);
  console.log(`\n=== Validating ${lang.toUpperCase()} Tour Translations (${dir}) ===`);
  
  if (!fs.existsSync(dir)) {
    console.error(`Directory missing: ${dir}`);
    process.exit(1);
  }

  let validCount = 0;

  for (const baseTour of tours) {
    const filePath = path.join(dir, `${baseTour.slug}.json`);
    if (!fs.existsSync(filePath)) {
      missingTours++;
      continue;
    }

    let data;
    try {
      data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } catch (err) {
      console.error(`[INVALID JSON] ${filePath}: ${err.message}`);
      totalFileErrors++;
      continue;
    }

    const errors = [];

    // Check required string fields
    const stringFields = ['slug', 'title', 'shortTitle', 'description', 'aboutHtml', 'duration', 'startingFrom', 'price'];
    for (const f of stringFields) {
      if (!data[f] || typeof data[f] !== 'string' || data[f].trim() === '') {
        errors.push(`Field '${f}' is missing or empty`);
      }
    }

    // Check highlights
    if (!Array.isArray(data.highlights) || data.highlights.length !== (baseTour.highlights || []).length) {
      errors.push(`Highlights count mismatch: expected ${baseTour.highlights?.length || 0}, got ${data.highlights?.length}`);
    } else {
      data.highlights.forEach((h, idx) => {
        if (!h || typeof h !== 'string' || h.trim() === '') errors.push(`Empty highlight at index ${idx}`);
      });
    }

    // Check inclusions
    if (!Array.isArray(data.inclusions) || data.inclusions.length !== (baseTour.inclusions || []).length) {
      errors.push(`Inclusions count mismatch: expected ${baseTour.inclusions?.length || 0}, got ${data.inclusions?.length}`);
    } else {
      data.inclusions.forEach((inc, idx) => {
        if (!inc || typeof inc !== 'string' || inc.trim() === '') errors.push(`Empty inclusion at index ${idx}`);
      });
    }

    // Check exclusions
    if (!Array.isArray(data.exclusions) || data.exclusions.length !== (baseTour.exclusions || []).length) {
      errors.push(`Exclusions count mismatch: expected ${baseTour.exclusions?.length || 0}, got ${data.exclusions?.length}`);
    } else {
      data.exclusions.forEach((exc, idx) => {
        if (!exc || typeof exc !== 'string' || exc.trim() === '') errors.push(`Empty exclusion at index ${idx}`);
      });
    }

    // Check itinerary
    const baseItin = baseTour.itinerary || [];
    if (!Array.isArray(data.itinerary) || data.itinerary.length !== baseItin.length) {
      errors.push(`Itinerary count mismatch: expected ${baseItin.length}, got ${data.itinerary?.length}`);
    } else {
      data.itinerary.forEach((item, idx) => {
        if (!item.day || item.day.trim() === '') errors.push(`Itinerary item ${idx} missing day`);
        if (!item.title || item.title.trim() === '') errors.push(`Itinerary item ${idx} missing title`);
        if (!item.content || item.content.trim() === '') errors.push(`Itinerary item ${idx} missing content`);
      });
    }

    // Check mapDestinations
    const baseMap = baseTour.mapDestinations || [];
    if (!Array.isArray(data.mapDestinations) || data.mapDestinations.length !== baseMap.length) {
      errors.push(`mapDestinations count mismatch: expected ${baseMap.length}, got ${data.mapDestinations?.length}`);
    } else {
      data.mapDestinations.forEach((item, idx) => {
        if (!item.name || item.name.trim() === '') errors.push(`Map stop ${idx} missing name`);
        if (!item.day || item.day.trim() === '') errors.push(`Map stop ${idx} missing day`);
        if (!item.subtitle || item.subtitle.trim() === '') errors.push(`Map stop ${idx} missing subtitle`);
        if (!item.desc || item.desc.trim() === '') errors.push(`Map stop ${idx} missing desc`);
      });
    }

    // Check galleryImages
    const baseGallery = baseTour.galleryImages || [];
    if (!Array.isArray(data.galleryImages) || data.galleryImages.length !== baseGallery.length) {
      errors.push(`galleryImages count mismatch: expected ${baseGallery.length}, got ${data.galleryImages?.length}`);
    } else {
      data.galleryImages.forEach((item, idx) => {
        if (item.src !== baseGallery[idx].src) errors.push(`Gallery image ${idx} src mismatch`);
        if (!item.cap || item.cap.trim() === '') errors.push(`Gallery image ${idx} missing cap`);
        if (!item.alt || item.alt.trim() === '') errors.push(`Gallery image ${idx} missing alt`);
      });
    }

    // Check faqs if base has faqs
    if (baseTour.faqs && baseTour.faqs.length > 0) {
      if (!Array.isArray(data.faqs) || data.faqs.length !== baseTour.faqs.length) {
        errors.push(`FAQs count mismatch: expected ${baseTour.faqs.length}, got ${data.faqs?.length}`);
      } else {
        data.faqs.forEach((item, idx) => {
          if (!item.question || item.question.trim() === '') errors.push(`FAQ ${idx} missing question`);
          if (!item.answer || item.answer.trim() === '') errors.push(`FAQ ${idx} missing answer`);
        });
      }
    }

    if (errors.length > 0) {
      console.error(`❌ Errors in ${lang}/tours/${baseTour.slug}.json:`);
      errors.forEach(e => console.error(`   - ${e}`));
      totalFileErrors += errors.length;
    } else {
      validCount++;
    }
  }

  console.log(`Summary for ${lang.toUpperCase()}: ${validCount} existing tour files are 100% valid. (Pending: ${tours.length - validCount})`);
}

console.log(`\nValidation complete: ${totalFileErrors} file errors, ${missingTours} pending tour translations across both languages.`);
if (totalFileErrors > 0) process.exit(1);
