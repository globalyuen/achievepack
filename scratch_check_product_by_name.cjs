const fs = require('fs');
const content = fs.readFileSync('src/store/productData.ts', 'utf8');

// Parse the file to get the array elements
// Since it's typescript, we can search for blocks containing "spout" or "bio"
// Let's write a simple parser to print the id and name of any product containing "spout" or "bio" or "pe" in the ID
const regex = /id:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const id = match[1];
  if (id.toLowerCase().includes('spout') || id.toLowerCase().includes('bio')) {
    // Find the name
    const sub = content.substring(match.index, match.index + 500);
    const nameMatch = sub.match(/name:\s*['"]([^'"]+)['"]/);
    const name = nameMatch ? nameMatch[1] : 'Unknown';
    console.log(`ID: ${id} | Name: ${name}`);
  }
}
