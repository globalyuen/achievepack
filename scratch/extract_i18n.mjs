import fs from 'fs';

function extractTranslations(filePath, prefix) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match t('key', 'default string') or t("key", "default string")
  const regex = /t\(\s*['"]([^'"]+)['"]\s*,\s*(['"])(.*?)(?<!\\)\2\s*\)/g;
  let match;
  const translations = {};

  while ((match = regex.exec(content)) !== null) {
    const keyPath = match[1];
    const defaultText = match[3].replace(/\\'/g, "'").replace(/\\"/g, '"');
    
    if (keyPath.startsWith(prefix)) {
      const parts = keyPath.split('.');
      let current = translations;
      for (let i = 0; i < parts.length - 1; i++) {
        if (!current[parts[i]]) current[parts[i]] = {};
        current = current[parts[i]];
      }
      current[parts[parts.length - 1]] = defaultText;
    }
  }
  return translations;
}

const argFile = process.argv[2];
const argPrefix = process.argv[3];
const appData = extractTranslations(argFile, argPrefix);
console.log(JSON.stringify(appData, null, 2));
