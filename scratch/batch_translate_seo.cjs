const fs = require('fs');
const path = require('path');
const translate = require('google-translate-api-x');

const LOCALES_PATH = path.join(__dirname, '../src/locales');
const LANGUAGES = {
  'fr': { code: 'fr', name: 'French (Français)' },
  'es': { code: 'es', name: 'Spanish (Español)' },
  'zh-TW': { code: 'zh-TW', name: 'Traditional Chinese (繁體中文)' }
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function getDeep(obj, path) {
  let current = obj;
  for (const part of path) {
    if (current === undefined || current === null) return undefined;
    current = current[part];
  }
  return current;
}

function setDeep(obj, path, value) {
  let current = obj;
  for (let i = 0; i < path.length - 1; i++) {
    const part = path[i];
    const nextPart = path[i + 1];
    if (current[part] === undefined) {
      current[part] = typeof nextPart === 'number' ? [] : {};
    }
    current = current[part];
  }
  current[path[path.length - 1]] = value;
}

// Recursively find all strings in enContent.seoPages
function collectStrings(obj, pathList = [], result = []) {
  if (typeof obj === 'string') {
    result.push({ path: pathList, text: obj });
    return result;
  }
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      collectStrings(obj[i], [...pathList, i], result);
    }
    return result;
  }
  if (typeof obj === 'object' && obj !== null) {
    for (const key of Object.keys(obj)) {
      collectStrings(obj[key], [...pathList, key], result);
    }
    return result;
  }
  return result;
}

async function translateToLanguage(enContent, langCode, langInfo) {
  console.log(`\n==================================================`);
  console.log(`🌐 Translating to ${langInfo.name} (${langCode})...`);
  
  const langPath = path.join(LOCALES_PATH, `${langCode}.json`);
  let langContent = {};
  if (fs.existsSync(langPath)) {
    langContent = JSON.parse(fs.readFileSync(langPath, 'utf-8'));
    console.log(`✓ Loaded existing ${langCode}.json`);
  }

  if (!langContent.seoPages) {
    langContent.seoPages = {};
  }

  // Collect all strings from enContent.seoPages
  const enStrings = collectStrings(enContent.seoPages, ['seoPages']);
  console.log(`Total strings in en.json: ${enStrings.length}`);

  // Filter out strings that are already translated
  const toTranslate = [];
  for (const item of enStrings) {
    const existingVal = getDeep(langContent, item.path);
    if (existingVal === undefined || existingVal === null || (typeof existingVal === 'string' && !existingVal.trim())) {
      toTranslate.push(item);
    } else {
      // Preserve existing translation by putting it back to ensure structure matches
      setDeep(langContent, item.path, existingVal);
    }
  }

  console.log(`Strings needing translation: ${toTranslate.length}`);
  if (toTranslate.length === 0) {
    console.log(`No translations needed for ${langCode}.json`);
    // Write back anyway to ensure formatting matches
    fs.writeFileSync(langPath, JSON.stringify(langContent, null, 4), 'utf-8');
    return;
  }

  // Batch translate in chunks of 50
  const CHUNK_SIZE = 50;
  for (let i = 0; i < toTranslate.length; i += CHUNK_SIZE) {
    const chunk = toTranslate.slice(i, i + CHUNK_SIZE);
    console.log(`Translating batch ${Math.floor(i/CHUNK_SIZE) + 1}/${Math.ceil(toTranslate.length/CHUNK_SIZE)} (${chunk.length} items)...`);
    
    try {
      const texts = chunk.map(item => item.text);
      const translatedRes = await translate(texts, { to: langCode, rejectOnPartialFail: false });
      
      for (let j = 0; j < chunk.length; j++) {
        const item = chunk[j];
        // If translation is null/undefined or has error, fall back to the original text
        const transText = (translatedRes && translatedRes[j] && translatedRes[j].text) ? translatedRes[j].text : item.text;
        setDeep(langContent, item.path, transText);
      }
      
      // Save progress to file
      fs.writeFileSync(langPath, JSON.stringify(langContent, null, 4), 'utf-8');
      console.log(`✓ Batch saved.`);
      
      // Delay to avoid hitting rate limits
      await delay(500);
    } catch (e) {
      console.error(`❌ Error translating batch:`, e.message);
      // Fall back to original English texts for this entire batch in case of a fatal call error
      for (let j = 0; j < chunk.length; j++) {
        const item = chunk[j];
        setDeep(langContent, item.path, item.text);
      }
      fs.writeFileSync(langPath, JSON.stringify(langContent, null, 4), 'utf-8');
      console.log(`⚠️ Batch failed, fell back to English and saved.`);
      await delay(2000);
    }
  }

  console.log(`🎉 Finished translation for ${langCode}.json`);
}

async function main() {
  const enPath = path.join(LOCALES_PATH, 'en.json');
  if (!fs.existsSync(enPath)) {
    console.error('❌ en.json not found!');
    process.exit(1);
  }
  const enContent = JSON.parse(fs.readFileSync(enPath, 'utf-8'));
  
  const selectedLang = process.argv[2];
  if (selectedLang && LANGUAGES[selectedLang]) {
    await translateToLanguage(enContent, selectedLang, LANGUAGES[selectedLang]);
  } else {
    for (const [langCode, langInfo] of Object.entries(LANGUAGES)) {
      await translateToLanguage(enContent, langCode, langInfo);
    }
  }
  console.log('\n🌟 All translations completed successfully!');
}

main().catch(e => {
  console.error('Fatal error:', e);
});
