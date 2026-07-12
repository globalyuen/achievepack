const fs = require('fs');

const content = fs.readFileSync('src/store/productData.ts', 'utf-8');

// Find the start of FEATURED_PRODUCTS
const startIndex = content.indexOf('export const FEATURED_PRODUCTS');
if (startIndex === -1) {
  console.log("Could not find FEATURED_PRODUCTS");
  process.exit(1);
}

// Extract objects roughly matching { id: '...', name: '...' }
const regex = /id:\s*['"]([^'"]+)['"],\s*name:\s*['"]([^'"]+)['"]/g;
let match;
const products = [];
// Only search from startIndex onwards
const searchArea = content.substring(startIndex);

while ((match = regex.exec(searchArea)) !== null) {
  products.push({ id: match[1], name: match[2] });
}

console.log(JSON.stringify(products, null, 2));
