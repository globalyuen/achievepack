const fs = require('fs');
const content = fs.readFileSync('src/store/productData.ts', 'utf8');

// We want to parse the products array
// Let's search for matches of id: and find the text inside that product block
const regex = /id:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const id = match[1];
  const sub = content.substring(match.index, match.index + 2000);
  if (sub.toLowerCase().includes('bio') || sub.toLowerCase().includes('sugarcane') || sub.toLowerCase().includes('plant')) {
    const nameMatch = sub.match(/name:\s*['"]([^'"]+)['"]/);
    const name = nameMatch ? nameMatch[1] : 'Unknown';
    console.log(`ID: ${id} | Name: ${name}`);
  }
}
