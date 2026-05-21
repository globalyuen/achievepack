const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/scratch/ocr-results-flat-bottom.txt', 'utf8');
const blocks = content.split('=== FILE: ');

const targetSizes = [
  // 1. Vertical
  '10x20+6cm', '12x22+6cm', '14x24+6cm', '16x26+8cm', '18x28+8cm', '20x30+8cm',
  // 2. Wide
  '24x17+8cm', '26x19+8cm', '28x21+8cm', '30x23+8cm',
  // 3. Handle
  '12x23+6cm', '14x25+6cm', '16x27+8cm', '18x29+8cm', '20x31+8cm'
];

const fileToSize = {};
const sizeToFiles = {};

blocks.forEach(block => {
  if (!block.trim()) return;
  const lines = block.split('\n');
  const filename = lines[0].replace(' ===', '').trim();
  const rest = lines.slice(1).join('\n');
  
  targetSizes.forEach(size => {
    // Replace x with *, check if it contains the size
    const altSize = size.replace('x', '*');
    if (rest.includes(size) || rest.includes(altSize)) {
      if (!sizeToFiles[size]) sizeToFiles[size] = [];
      sizeToFiles[size].push(filename);
    }
  });
});

console.log(JSON.stringify(sizeToFiles, null, 2));
