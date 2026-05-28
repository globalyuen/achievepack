const fs = require('fs');
const path = require('path');

const paths = [
  '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/ProductPage.tsx',
  '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/store/ProductPage.tsx',
  '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/store/product/ProductPage.tsx'
];

paths.forEach(p => {
  if (fs.existsSync(p)) {
    console.log(`FOUND FILE: ${p}`);
    const content = fs.readFileSync(p, 'utf8');
    const lines = content.split('\n');
    console.log('Total lines:', lines.length);
    console.log('First 100 lines:');
    for (let i = 0; i < Math.min(100, lines.length); i++) {
      console.log(`${i + 1}: ${lines[i]}`);
    }
  }
});
