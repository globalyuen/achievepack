const fs = require('fs');
const path = require('path');

const blogDataPath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/data/blogData.ts';

// Read blogData.ts as text
const fileContent = fs.readFileSync(blogDataPath, 'utf8');

// Find all matches for slug or id
const regex = /slug:\s*["']([^"']+)["']/g;
let match;
const slugs = [];
while ((match = regex.exec(fileContent)) !== null) {
  slugs.push(match[1]);
}

console.log(`Found ${slugs.length} blog posts. Slugs:`);
console.log(slugs);
