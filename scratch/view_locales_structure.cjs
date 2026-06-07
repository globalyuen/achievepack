const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, '../src/locales/en.json');
try {
  const content = JSON.parse(fs.readFileSync(enPath, 'utf-8'));
  console.log('Top-level keys:', Object.keys(content));
  if (content.seoPages) {
    console.log('seoPages keys:', Object.keys(content.seoPages));
    if (content.seoPages.pages) {
      console.log('seoPages.pages count:', Object.keys(content.seoPages.pages).length);
      console.log('seoPages.pages list:', Object.keys(content.seoPages.pages));
    }
  }
} catch (e) {
  console.error(e);
}
