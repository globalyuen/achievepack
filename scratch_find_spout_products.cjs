const fs = require('fs');
const content = fs.readFileSync('src/store/productData.ts', 'utf8');

// Let's parse productData.ts to find the products arrays and inspect their properties
// Since productData.ts is too large, let's write a quick script that looks for elements with 'spout' or 'bio'
// and prints their info
const regex = /id:\s*['"]([^'"]+)['"]/g;
let match;
const ids = [];
while ((match = regex.exec(content)) !== null) {
  ids.push(match[1]);
}

console.log('Total product-like IDs:', ids.length);
const spoutIds = ids.filter(id => id.toLowerCase().includes('spout'));
console.log('Spout IDs:', spoutIds);

// Let's print the actual code blocks for spouted-foil-pouch
const idx = content.indexOf("id: 'spouted-foil-pouch'");
if (idx !== -1) {
  console.log('spouted-foil-pouch block start:');
  console.log(content.substring(idx, idx + 2000));
}
