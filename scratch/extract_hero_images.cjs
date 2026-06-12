const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../src/locales');
const enLocale = JSON.parse(fs.readFileSync(path.join(localesDir, 'en.json'), 'utf8'));

// Helper to get nested value from JSON object by dot path
function getNestedValue(obj, dotPath) {
  const keys = dotPath.split('.');
  let current = obj;
  for (const key of keys) {
    if (current === undefined || current === null) return null;
    current = current[key];
  }
  return typeof current === 'string' ? current : null;
}

const pagesDir = path.join(__dirname, '../src/pages');
const results = {};

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.tsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Look for heroImage
      // 1. Literal heroImage="/path/to/image.webp"
      let match = content.match(/heroImage\s*=\s*"([^"]+)"/);
      if (match) {
        results[filePath] = match[1];
        continue;
      }
      
      // 2. Literal heroImage={'/path/to/image.webp'}
      match = content.match(/heroImage\s*=\s*\{'([^']+)'\}/);
      if (match) {
        results[filePath] = match[1];
        continue;
      }

      // 3. Translated heroImage={t('path.to.key')}
      match = content.match(/heroImage\s*=\s*\{t\(`([^`]+)`\)\}/) || content.match(/heroImage\s*=\s*\{t\("([^"]+)"\)\}/) || content.match(/heroImage\s*=\s*\{t\('([^']+)'\)\}/);
      if (match) {
        let keyPath = match[1];
        // Resolve prefix if any (e.g. `${p}.heroImage`)
        if (keyPath.includes('${p}')) {
          // Find const p = '...' in the file
          const pMatch = content.match(/const\s+p\s*=\s*'([^']+)'/) || content.match(/const\s+p\s*=\s*"([^"]+)"/);
          if (pMatch) {
            keyPath = keyPath.replace('${p}', pMatch[1]);
          }
        }
        
        const value = getNestedValue(enLocale, keyPath);
        if (value) {
          results[filePath] = value;
        } else {
          results[filePath] = `[MISSING KEY: ${keyPath}]`;
        }
      }
    }
  }
}

walkDir(pagesDir);

fs.writeFileSync(path.join(__dirname, 'hero_images_map.json'), JSON.stringify(results, null, 2));
console.log('Done! Output saved to scratch/hero_images_map.json');
