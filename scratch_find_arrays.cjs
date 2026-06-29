const fs = require('fs');
const content = fs.readFileSync('src/store/productData.ts', 'utf8');

// Find all export const arrays and their line numbers
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('const ') && line.includes('Product[]') || line.includes('const ') && line.includes('Products =') || line.includes('const ') && line.includes('PRODUCTS')) {
    console.log(`Line ${idx + 1}: ${line}`);
  }
});
