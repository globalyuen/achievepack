const fs = require('fs');
const path = require('path');

const productDataPath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/store/productData.ts';

if (fs.existsSync(productDataPath)) {
  const content = fs.readFileSync(productDataPath, 'utf8');
  const lines = content.split('\n');
  
  let startLine = -1;
  let bracesCount = 0;
  let inProduct = false;
  
  lines.forEach((line, index) => {
    if (line.includes("id: 'recyclable-flat-bottom-one-sided-zipper-pouch'")) {
      startLine = index;
      inProduct = true;
    }
  });

  if (startLine !== -1) {
    console.log(`Found product at line ${startLine + 1}`);
    // Print 100 lines around it to see the full product object
    const endLine = Math.min(startLine + 150, lines.length);
    for (let i = startLine - 5; i < endLine; i++) {
      console.log(`${i + 1}: ${lines[i]}`);
    }
  } else {
    console.log('Product not found');
  }
}
