const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../src/locales');
const files = ['en.json', 'es.json', 'fr.json', 'zh-TW.json'];

function checkObject(obj, currentPath, file) {
  for (const key in obj) {
    const value = obj[key];
    const pathStr = currentPath ? `${currentPath}.${key}` : key;
    
    if (typeof value === 'object' && value !== null) {
      checkObject(value, pathStr, file);
    } else if (typeof value === 'string') {
      // Check 1: Key path as literal value
      if (value.startsWith('seoPages.pages.') || value.includes('seoPages.pages.')) {
        console.log(`[Literal Key Path] ${file}: "${pathStr}": "${value}"`);
      }
      
      // Check 2: Unbalanced </strong>
      const strongOpen = (value.match(/<strong/g) || []).length;
      const strongClose = (value.match(/<\/strong>/g) || []).length;
      if (strongOpen !== strongClose) {
        console.log(`[Unbalanced <strong>] ${file}: "${pathStr}" has ${strongOpen} <strong and ${strongClose} </strong>: "${value}"`);
      }

      // Check 3: Stray /td or other weird HTML tags
      if (value.includes('</td') && !value.includes('<td')) {
        console.log(`[Stray </td] ${file}: "${pathStr}": "${value}"`);
      }
      if (value.includes('</Link>') && !value.includes('<Link')) {
        console.log(`[Stray </Link>] ${file}: "${pathStr}": "${value}"`);
      }
      if (value.includes('</a') && !value.includes('<a') && !value.includes('<Link')) { // if it has </a> but no <a> or <Link>
        console.log(`[Stray </a>] ${file}: "${pathStr}": "${value}"`);
      }
    } else if (Array.isArray(value)) {
      value.forEach((item, idx) => {
        if (typeof item === 'string') {
          // Check 2: Unbalanced </strong> inside arrays
          const strongOpen = (item.match(/<strong/g) || []).length;
          const strongClose = (item.match(/<\/strong>/g) || []).length;
          if (strongOpen !== strongClose) {
            console.log(`[Unbalanced <strong>] ${file}: "${pathStr}[${idx}]" has ${strongOpen} <strong and ${strongClose} </strong>: "${item}"`);
          }
        }
      });
    }
  }
}

files.forEach(file => {
  const filePath = path.join(localesDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    try {
      const obj = JSON.parse(content);
      checkObject(obj, '', file);
    } catch (e) {
      console.error(`Error parsing ${file}:`, e);
    }
  } else {
    console.warn(`File not found: ${filePath}`);
  }
});
