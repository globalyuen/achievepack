const fs = require('fs');
const content = fs.readFileSync('src/store/productData.ts', 'utf8');

// Find all occurrences of viewQuoteLink
const regex = /id:\s*['"]([^'"]+)['"][\s\S]*?name:\s*['"]([^'"]+)['"][\s\S]*?viewQuoteLink:\s*['"]([^'"]+)['"]/g;
let match;
console.log('Products with viewQuoteLink:');
while ((match = regex.exec(content)) !== null) {
  console.log(`ID: ${match[1]}\nName: ${match[2]}\nLink: ${match[3]}\n----------------`);
}

// Let's also do a simpler regex search for "viewQuoteLink"
const matches = content.match(/viewQuoteLink:\s*['"][^'"]+['"]/g);
console.log('All viewQuoteLink lines:', matches);
