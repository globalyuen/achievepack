const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, '../src/locales/en.json');
try {
  const content = JSON.parse(fs.readFileSync(enPath, 'utf-8'));
  const petFood = content.seoPages?.pages?.petFood;
  if (petFood) {
    console.log('petFood keys in en.json:', Object.keys(petFood));
    console.log('petFood title:', petFood.title);
  } else {
    console.log('petFood not found in en.json');
  }
} catch (e) {
  console.error(e);
}
