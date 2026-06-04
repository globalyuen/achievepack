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

const newTsxSection = `,
    {
      id: 'b2b-store-links',
      title: 'Contextual B2B Store Products',
      icon: <span className="text-xl">🛒</span>,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            For packaging buyers planning their next production run, we recommend starting with our <a href="https://achievepack.com/store/product/sample-assorted-eco" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">B2B Biodegradable Sample Kit</a> to evaluate material thickness and barrier performance. For high-speed form-fill-seal automated packaging lines, check out our <a href="https://achievepack.com/store/product/media__1780570697340.jpg" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">Custom Eco Rollstock Film</a>. If you are packaging confectionery or small items, our premium <a href="https://achievepack.com/store/product/transparent-colorful-cellophane-candy-wrapping-paper" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">Cellophane Candy Wrapper</a> offers excellent clarity and compostability.
          </p>
        </div>
      )
    }`;

const blogDir = path.join(__dirname, '../src/pages/pouch/blog');
const files = fs.readdirSync(blogDir);
let updatedCount = 0;
let skippedCount = 0;

console.log("Starting static TSX sweep with simple parser...");

for (const file of files) {
  if (!file.endsWith('.tsx') || file === 'PouchBlogArticlePage.tsx' || file === 'PouchStampFoilRecyclabilityPage.tsx') {
    continue;
  }
  
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if B2B links already exist
  const hasSample = content.includes('/store/product/sample-assorted-eco');
  const hasRollstock = content.includes('/store/product/media__1780570697340.jpg');
  const hasCellophane = content.includes('/store/product/transparent-colorful-cellophane-candy-wrapping-paper');
  
  if (hasSample && hasRollstock && hasCellophane) {
    console.log(`✓ ${file}: Already contains B2B links.`);
    skippedCount++;
    continue;
  }
  
  const closingBracketIndex = findSectionsArrayEndSimple(content);
  if (closingBracketIndex === -1) {
    console.warn(`⚠️ ${file}: Could not find sections array. Skipping.`);
    skippedCount++;
    continue;
  }
  
  const updatedContent = content.substring(0, closingBracketIndex) + newTsxSection + content.substring(closingBracketIndex);
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log(`⚡ ${file}: Successfully updated with B2B store links.`);
  updatedCount++;
}

console.log(`\nStatic TSX Sweep (Fixed) Summary: ${updatedCount} updated, ${skippedCount} skipped.`);
