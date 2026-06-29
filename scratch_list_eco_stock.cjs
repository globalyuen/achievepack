const fs = require('fs');
const content = fs.readFileSync('src/store/productData.ts', 'utf8');

// Let's locate ECO_STOCK_PRODUCTS start and end
const start = content.indexOf('const ECO_STOCK_PRODUCTS: EcoStockProduct[] = [');
if (start !== -1) {
  // Let's parse all ids inside this array
  const sub = content.substring(start);
  const regex = /id:\s*['"]([^'"]+)['"]/g;
  let match;
  let count = 0;
  console.log('ECO_STOCK_PRODUCTS entries:');
  while ((match = regex.exec(sub)) !== null) {
    const id = match[1];
    // Find name
    const itemSub = sub.substring(match.index, match.index + 500);
    const nameMatch = itemSub.match(/name:\s*['"]([^'"]+)['"]/);
    const name = nameMatch ? nameMatch[1] : 'Unknown';
    console.log(`${++count}. ID: ${id} | Name: ${name}`);
    if (itemSub.includes('BOXES_PRODUCTS') || itemSub.includes('FEATURED_PRODUCTS')) {
      // stop when we cross into the next array
      break;
    }
  }
} else {
  console.log('ECO_STOCK_PRODUCTS not found');
}
