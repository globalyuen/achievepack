const fs = require('fs');
const content = fs.readFileSync('src/store/productData.ts', 'utf8');

// Find product block containing viewQuoteLink: '/view-quote/e5b6b437-9120-4f78-9b5a-eb1e8bcc2253'
const id = 'stand-up-spout-pouch-10mm-pet12-al7-ny15-pe80-102x152-4-28-5';
const idx = content.indexOf(`id: '${id}'`);
if (idx !== -1) {
  console.log('=== stand-up-spout-pouch Block ===');
  console.log(content.substring(idx, idx + 1800));
}

// Find another product block containing viewQuoteLink
const idx2 = content.indexOf("viewQuoteLink: '/view-quote/eee7be70-5997-4caa-a558-121e691194e6'");
if (idx2 !== -1) {
  // Let's find the start of this product block by searching backwards for "id: '"
  const blockStart = content.lastIndexOf("id: '", idx2);
  if (blockStart !== -1) {
    console.log('=== Another Block ===');
    console.log(content.substring(blockStart, blockStart + 1800));
  }
}
