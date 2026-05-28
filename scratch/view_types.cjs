const fs = require('fs');

const path = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/store/productData.ts';

if (fs.existsSync(path)) {
  const content = fs.readFileSync(path, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    if (line.includes('interface ') || line.includes('type ') || line.includes('export interface') || line.includes('export type')) {
      console.log(`L${index + 1}: ${line.trim()}`);
    }
  });
}
