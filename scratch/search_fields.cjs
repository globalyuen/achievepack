const fs = require('fs');

const content = fs.readFileSync('/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/store/productData.ts', 'utf8');

// Find all unique keys used inside the objects in productData.ts
const keyRegex = /([a-zA-Z0-9_]+)\s*:/g;
let match;
const keys = new Set();
while ((match = keyRegex.exec(content)) !== null) {
  keys.add(match[1]);
}

console.log('All keys used in productData.ts objects:');
console.log(Array.from(keys));
