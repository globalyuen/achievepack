const fs = require('fs');
const content = fs.readFileSync('src/store/productData.ts', 'utf8');

// Parse the array entries of ECO_STOCK_PRODUCTS
const start = content.indexOf('const ECO_STOCK_PRODUCTS: EcoStockProduct[] = [');
if (start !== -1) {
  const sub = content.substring(start);
  // Find products by splitting by product boundaries, or by regex on blocks
  // Since each product has id: '...' we can extract each block until the next id: '...' or the end of the array
  const regex = /id:\s*['"]([^'"]+)['"]/g;
  let match;
  const blocks = [];
  while ((match = regex.exec(sub)) !== null) {
    blocks.push({ id: match[1], index: match.index });
  }

  console.log('ECO_STOCK_PRODUCTS quote links:');
  for (let i = 0; i < blocks.length; i++) {
    const current = blocks[i];
    const next = blocks[i + 1];
    const blockText = sub.substring(current.index, next ? next.index : sub.length);
    
    if (blockText.includes('viewQuoteLink')) {
      const nameMatch = blockText.match(/name:\s*['"]([^'"]+)['"]/);
      const linkMatch = blockText.match(/viewQuoteLink:\s*['"]([^'"]+)['"]/);
      const materialMatch = blockText.match(/material:\s*['"]([^'"]+)['"]/);
      
      console.log(`ID: ${current.id}`);
      console.log(`  Name: ${nameMatch ? nameMatch[1] : 'Unknown'}`);
      console.log(`  Material: ${materialMatch ? materialMatch[1] : 'Unknown'}`);
      console.log(`  Link: ${linkMatch ? linkMatch[1] : 'None'}`);
      console.log('----------------');
    }
    
    if (blockText.includes('BOXES_PRODUCTS') || blockText.includes('FEATURED_PRODUCTS')) {
      break;
    }
  }
} else {
  console.log('ECO_STOCK_PRODUCTS array not found.');
}
