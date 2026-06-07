const fs = require('fs');
const path = require('path');

const LOCALES_PATH = path.join(__dirname, '../src/locales');
const FILES = ['zh-TW.json', 'es.json', 'fr.json'];

function cleanArrays(enObj, targetObj, currentPath = []) {
  if (enObj === null || enObj === undefined || targetObj === null || targetObj === undefined) {
    return;
  }

  // If the source is an array
  if (Array.isArray(enObj)) {
    // If the target is not an array (e.g. it is an object like {"0": "...", "1": "..."})
    if (!Array.isArray(targetObj) && typeof targetObj === 'object') {
      console.log(`Converting object to array at path: ${currentPath.join('.')}`);
      const arr = [];
      const keys = Object.keys(targetObj).sort((a, b) => parseInt(a) - parseInt(b));
      for (const k of keys) {
        arr.push(targetObj[k]);
      }
      return arr;
    }
    // If target is already an array, clean its elements
    if (Array.isArray(targetObj)) {
      for (let i = 0; i < enObj.length; i++) {
        const res = cleanArrays(enObj[i], targetObj[i], [...currentPath, i]);
        if (res !== undefined) {
          targetObj[i] = res;
        }
      }
    }
    return;
  }

  // If the source is an object
  if (typeof enObj === 'object') {
    for (const key of Object.keys(enObj)) {
      if (targetObj[key] !== undefined) {
        const res = cleanArrays(enObj[key], targetObj[key], [...currentPath, key]);
        if (res !== undefined) {
          targetObj[key] = res;
        }
      }
    }
  }
}

function main() {
  const enPath = path.join(LOCALES_PATH, 'en.json');
  if (!fs.existsSync(enPath)) {
    console.error('en.json not found!');
    process.exit(1);
  }
  const enContent = JSON.parse(fs.readFileSync(enPath, 'utf-8'));

  for (const filename of FILES) {
    const filePath = path.join(LOCALES_PATH, filename);
    if (!fs.existsSync(filePath)) {
      console.log(`Skipping ${filename} (not found)`);
      continue;
    }

    console.log(`\nProcessing ${filename}...`);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    cleanArrays(enContent.seoPages, content.seoPages, ['seoPages']);
    
    fs.writeFileSync(filePath, JSON.stringify(content, null, 4) + '\n', 'utf-8');
    console.log(`Saved cleaned ${filename}`);
  }
}

main();
