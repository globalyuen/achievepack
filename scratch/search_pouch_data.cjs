const fs = require('fs');
const path = require('path');

const productDataPath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/store/productData.ts';

if (fs.existsSync(productDataPath)) {
  const content = fs.readFileSync(productDataPath, 'utf8');
  
  // Find all product IDs
  const idRegex = /id:\s*['"]([^'"]+)['"]/g;
  let match;
  const ids = [];
  while ((match = idRegex.exec(content)) !== null) {
    ids.push(match[1]);
  }
  
  console.log('All product IDs in productData.ts:');
  console.log(ids);
  
  // Check if any product has an ID containing 'flat' or 'bottom' or 'recyclable' or 'zipper'
  const matchingIds = ids.filter(id => id.includes('flat') || id.includes('bottom') || id.includes('recyclable') || id.includes('zipper'));
  console.log('\nMatching IDs:');
  console.log(matchingIds);
} else {
  console.log('productData.ts not found');
}
