const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LOCALES = ['en', 'fr', 'es', 'zh-TW'];
const BASE_COMMIT = '86632c95';

function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function deepMerge(target, source) {
  if (!isObject(target) || !isObject(source)) {
    return target !== undefined ? target : source;
  }
  const result = { ...source, ...target };
  for (const key of Object.keys(result)) {
    if (key in target && key in source) {
      if (isObject(target[key]) && isObject(source[key])) {
        result[key] = deepMerge(target[key], source[key]);
      } else {
        result[key] = target[key]; // target (new/current) takes precedence
      }
    }
  }
  return result;
}

function mergeLocale(locale) {
  const filePath = path.join(__dirname, '..', 'src', 'locales', `${locale}.json`);
  console.log(`\nProcessing ${locale}.json...`);
  
  if (!fs.existsSync(filePath)) {
    console.error(`Current file not found: ${filePath}`);
    return;
  }

  // 1. Read current content
  const currentContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // 2. Read base content from git commit 86632c95
  let baseContent;
  try {
    const gitOutput = execSync(`git show ${BASE_COMMIT}:src/locales/${locale}.json`, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
    baseContent = JSON.parse(gitOutput);
    console.log(`Successfully retrieved base content from commit ${BASE_COMMIT}`);
  } catch (err) {
    console.error(`Failed to retrieve base content for ${locale}:`, err.message);
    return;
  }

  // 3. Merge
  const mergedContent = deepMerge(currentContent, baseContent);

  // 4. Save merged content
  fs.writeFileSync(filePath, JSON.stringify(mergedContent, null, 2) + '\n', 'utf8');
  console.log(`✅ Saved merged ${locale}.json`);
}

LOCALES.forEach(mergeLocale);
console.log('\n🎉 Locales merge completed!');
