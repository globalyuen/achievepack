const fs = require('fs');
const path = require('path');

const enJsonPath = path.join(__dirname, '../src/locales/en.json');
let enJson = JSON.parse(fs.readFileSync(enJsonPath, 'utf8'));

const files = [
  'src/pages/products/CustomCorrugatedBoxesPage.tsx',
  'src/pages/products/CustomTuckBoxesPage.tsx',
  'src/pages/products/CottonPaperFoilPouchPage.tsx'
];

function ensurePath(obj, pathParts) {
  let current = obj;
  for (let i = 0; i < pathParts.length - 1; i++) {
    const part = pathParts[i];
    if (!current[part]) current[part] = {};
    current = current[part];
  }
  return current;
}

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match t(`seoPages.pages.customCorrugatedBoxes.xyz`, 'Default text')
  const regex = /t\(\s*`\$\{p\}\.([^`]+)`\s*,\s*['"]([^'"]+)['"]\s*\)/g;
  let match;
  
  // Extract namespace var `const p = 'seoPages.pages.customCorrugatedBoxes'`
  const nsMatch = content.match(/const p = ['"]([^'"]+)['"]/);
  if (!nsMatch) return;
  const namespace = nsMatch[1];
  
  while ((match = regex.exec(content)) !== null) {
    const subPath = match[1];
    const defaultText = match[2];
    
    const fullPath = `${namespace}.${subPath}`;
    const parts = fullPath.split('.');
    
    const objPath = ensurePath(enJson, parts);
    objPath[parts[parts.length - 1]] = defaultText;
  }
});

fs.writeFileSync(enJsonPath, JSON.stringify(enJson, null, 2));
console.log('en.json updated with new keys');
