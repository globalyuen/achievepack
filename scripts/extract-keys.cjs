const fs = require('fs');
const path = require('path');

const files = [
  'EcoStandUpPouchGuidePage.tsx',
  'EcoStandUpCoffeePouchPage.tsx',
  'EcoVsConventionalPouchPage.tsx',
  'EcoSideGussetGuidePage.tsx',
  'SideGussetCoffeeBagPage.tsx',
  'RecyclableSideGussetPage.tsx',
  'EcoBoxBottomPouchPage.tsx',
  'EcoFlatBottomPouchPage.tsx',
  'PremiumEcoPackagingComparisonPage.tsx'
];

const localesPath = path.join(__dirname, '../src/locales/en.json');
const enJson = JSON.parse(fs.readFileSync(localesPath, 'utf8'));

if (!enJson.seoPages) enJson.seoPages = {};
if (!enJson.seoPages.pages) enJson.seoPages.pages = {};

for (const file of files) {
  const filePath = path.join(__dirname, '../src/pages/products', file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  
  const pMatch = content.match(/const p = ['"]([^'"]+)['"]/);
  if (!pMatch) {
    console.log(`Could not find 'p' in ${file}`);
    continue;
  }
  const p = pMatch[1];
  const pageKey = p.split('.').pop();
  
  if (!enJson.seoPages.pages[pageKey]) {
    enJson.seoPages.pages[pageKey] = {};
  }
  
  // Match t(`${p}.key`, 'Value') with any quote type
  const regex = /t\(\s*`\$\{p\}\.([^`]+)`\s*,\s*(['"`])([\s\S]*?)(?<!\\)\2\s*\)/g;
  
  let match;
  let count = 0;
  while ((match = regex.exec(content)) !== null) {
    const keyPath = match[1];
    let defaultValue = match[3];
    
    defaultValue = defaultValue.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\`/g, '`');
    
    const keys = keyPath.split('.');
    let current = enJson.seoPages.pages[pageKey];
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {};
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = defaultValue;
    count++;
  }
  console.log(`Extracted ${count} keys for ${file} (${pageKey})`);
}

fs.writeFileSync(localesPath, JSON.stringify(enJson, null, 2));
console.log('Done extracting.');
