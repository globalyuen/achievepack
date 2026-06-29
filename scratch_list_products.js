const fs = require('fs');
const content = fs.readFileSync('src/store/productData.ts', 'utf8');

// A simple regex to find products
// A product usually starts with id: and contains name:, sizes:, etc.
// Let's find all product objects by looking for lines like id: '...' or id: "..."
const matches = [];
const regex = /id:\s*['"]([^'"]+)['"],\s*\n\s*name:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = regex.exec(content)) !== null) {
  matches.push({ id: match[1], name: match[2], index: match.index });
}

console.log('Found products:');
matches.forEach((p, idx) => {
  console.log(`${idx + 1}. ID: ${p.id} | Name: ${p.name}`);
});
