const fs = require('fs');
const path = require('path');

const LOCALES_PATH = path.join(__dirname, '../src/locales');
const FILES = ['en.json', 'zh-TW.json', 'es.json', 'fr.json'];

function parseStringifiedArray(str) {
  const inner = str.trim().slice(1, -1);
  const parts = [];
  let current = "";
  let inQuote = false;
  let quoteChar = "";
  for (let i = 0; i < inner.length; i++) {
    const char = inner[i];
    if ((char === "'" || char === '"' || char === '「' || char === '」') && !inQuote) {
      inQuote = true;
      quoteChar = char;
    } else if ((char === quoteChar || (quoteChar === '「' && char === '」')) && inQuote) {
      inQuote = false;
      quoteChar = "";
    } else if ((char === ',' || char === '、') && !inQuote) {
      parts.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  if (current) {
    parts.push(current.trim());
  }
  return parts.map(p => {
    let clean = p.trim();
    if (clean.startsWith("'") || clean.startsWith('"') || clean.startsWith('「')) clean = clean.slice(1);
    if (clean.endsWith("'") || clean.endsWith('"') || clean.endsWith('」')) clean = clean.slice(0, -1);
    return clean.trim();
  }).filter(Boolean);
}

function main() {
  for (const filename of FILES) {
    const filePath = path.join(LOCALES_PATH, filename);
    if (!fs.existsSync(filePath)) {
      console.log(`Skipping ${filename} (not found)`);
      continue;
    }

    console.log(`\nProcessing ${filename}...`);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    if (content.seoPages && content.seoPages.pages && content.seoPages.pages.flatBottomBags) {
      const fbb = content.seoPages.pages.flatBottomBags;
      if (fbb.sections && fbb.sections.applications && fbb.sections.applications.items) {
        const items = fbb.sections.applications.items;
        // In case it was already converted but incorrectly (like in the previous step where it has 1 element with delimiters)
        if (Array.isArray(items) && items.length === 1 && (items[0].includes('、') || items[0].includes(','))) {
          console.log(`Found single-element array with separators for flatBottomBags items in ${filename}`);
          const arr = parseStringifiedArray('[' + items[0] + ']');
          console.log('Parsed array:', arr);
          fbb.sections.applications.items = arr;
        } else if (typeof items === 'string') {
          console.log(`Found stringified array for flatBottomBags items in ${filename}`);
          const arr = parseStringifiedArray(items);
          console.log('Parsed array:', arr);
          fbb.sections.applications.items = arr;
        } else {
          console.log(`flatBottomBags items is already of type: ${typeof items} and length ${items.length}`);
        }
      }
    }
    
    fs.writeFileSync(filePath, JSON.stringify(content, null, 4) + '\n', 'utf-8');
    console.log(`Saved cleaned ${filename}`);
  }
}

main();
