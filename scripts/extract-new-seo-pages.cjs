const fs = require('fs');
const path = require('path');

// Extract t() default values from a TSX file for a given prefix
function extractDefaults(fileContent, prefix) {
  const result = {};
  // Match t(`${p}.some.key`, 'default value') or t(`${p}.some.key`, "default value")
  const re = /t\(`\$\{p\}\.([^`]+)`,\s*['"]([^'"]+)['"]\)/g;
  let m;
  while ((m = re.exec(fileContent)) !== null) {
    const keyPath = m[1];
    const value = m[2];
    setNestedKey(result, keyPath.split('.'), value);
  }
  return result;
}

function setNestedKey(obj, keys, value) {
  let curr = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!curr[keys[i]]) curr[keys[i]] = {};
    curr = curr[keys[i]];
  }
  curr[keys[keys.length - 1]] = value;
}

const pages = [
  { file: 'CustomCorrugatedBoxesPage.tsx', pageKey: 'customCorrugatedBoxes' },
  { file: 'CustomTuckBoxesPage.tsx', pageKey: 'customTuckBoxes' },
  { file: 'CottonPaperFoilPouchPage.tsx', pageKey: 'cottonPaperFoilPouch' },
];

const pagesDir = path.join(__dirname, '../src/pages/products');
const enPath = path.join(__dirname, '../src/locales/en.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

if (!en.seoPages) en.seoPages = {};
if (!en.seoPages.pages) en.seoPages.pages = {};

for (const { file, pageKey } of pages) {
  const filePath = path.join(pagesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const extracted = extractDefaults(content, pageKey);
  en.seoPages.pages[pageKey] = extracted;
  console.log(`✅ Extracted ${Object.keys(extracted).length} top-level keys for ${pageKey}`);
}

fs.writeFileSync(enPath, JSON.stringify(en, null, 2), 'utf8');
console.log('\n✅ en.json updated with 3 new page keys.');
