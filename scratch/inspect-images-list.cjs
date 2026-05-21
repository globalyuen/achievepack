const fs = require('fs');
const path = require('path');

const imgDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/taobao/spouted-foil-pouch';
const files = fs.readdirSync(imgDir).filter(f => !f.startsWith('.') && f.endsWith('.webp'));

console.log(`Total WebP files: ${files.length}`);
files.forEach((f, idx) => {
  console.log(`${idx + 1}: ${f} (${fs.statSync(path.join(imgDir, f)).size} bytes)`);
});
