const fs = require('fs');
const html = fs.readFileSync('dist/tours/13-days-casablanca-tour/index.html', 'utf8');
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
console.log('Total scripts found:', scripts.length);
scripts.forEach((s, i) => {
  const opening = s.match(/<script[^>]*>/i)[0];
  console.log('Script ' + (i + 1) + ': ' + opening + ' (length: ' + s.length + ')');
  console.log(s.slice(0, 200).replace(/\s+/g, ' '));
  console.log('---');
});
