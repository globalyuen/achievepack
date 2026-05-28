const fs = require('fs');
const path = require('path');

const productDataPath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/store/productData.ts';

if (fs.existsSync(productDataPath)) {
  const content = fs.readFileSync(productDataPath, 'utf8');
  console.log('Successfully read productData.ts');

  // Let's find all occurrences of Taobao links
  const taobaoRegex = /https?:\/\/[a-zA-Z0-9\-\.]*taobao\.com[^\s'"`]*/g;
  const matches = content.match(taobaoRegex);

  console.log(`Found ${matches ? matches.length : 0} Taobao links in productData.ts:`);
  if (matches) {
    const uniqueMatches = Array.from(new Set(matches));
    console.log(uniqueMatches);
  }

  // Let's also check for "八边封" or "flat bottom" in productData.ts
  const lines = content.split('\n');
  const matchingLines = [];
  lines.forEach((line, index) => {
    if (line.includes('八边封') || line.includes('flat-bottom') || line.includes('flat bottom') || line.includes('recyclable') || line.includes('可回收')) {
      matchingLines.push({ index: index + 1, line: line.trim() });
    }
  });
  console.log(`Found ${matchingLines.length} lines with matching keywords:`);
  console.log(matchingLines.slice(0, 30));
} else {
  console.log('productData.ts does not exist');
}
