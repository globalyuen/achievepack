const fs = require('fs');

const path = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/ProductPage.tsx';

if (fs.existsSync(path)) {
  const content = fs.readFileSync(path, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    if (line.includes('certification') || line.includes('shelfLife') || line.includes('sizeInfo')) {
      console.log(`L${index + 1}: ${line.trim()}`);
    }
  });
}
