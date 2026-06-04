const fs = require('fs');
const path = require('path');

function findSectionsArrayEndSimple(content) {
  const match = content.match(/const\s+sections(\s*:\s*\w+\[\])?\s*=\s*\[/);
  if (!match) return -1;
  
  const startIndex = match.index + match[0].length - 1; // index of the opening '['
  let i = startIndex + 1;
  let bracketStack = ['['];
  while (i < content.length) {
    const char = content[i];
    if (char === '[') {
      bracketStack.push('[');
    } else if (char === ']') {
      bracketStack.pop();
      if (bracketStack.length === 0) {
        return i;
      }
    }
    i++;
  }
  return -1;
}

const blogDir = path.join(__dirname, '../src/pages/pouch/blog');
const files = fs.readdirSync(blogDir);

console.log("Testing simple parser on static TSX files...");
for (const file of files) {
  if (!file.endsWith('.tsx') || file === 'PouchBlogArticlePage.tsx' || file === 'PouchStampFoilRecyclabilityPage.tsx') {
    continue;
  }
  
  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const index = findSectionsArrayEndSimple(content);
  if (index === -1) {
    console.log(`❌ ${file}: FAILED to find end index`);
  } else {
    // Print the character at the index and a few characters before/after
    const snippet = content.substring(index - 10, index + 10).replace(/\n/g, '\\n');
    console.log(`✓ ${file}: Found closing bracket at index ${index}. Snippet: "${snippet}"`);
  }
}
