// 自动翻译SEO页面内容到多语言
// Usage: node scripts/translate-seo-pages.js all

const fs = require('fs');
const path = require('path');

let translate;
try {
  translate = require('google-translate-api-x');
} catch (e) {
  console.error('❌ Please install: npm install google-translate-api-x');
  process.exit(1);
}

const LOCALES_PATH = path.join(__dirname, '../src/locales');

const LANGUAGES = {
  'fr': { code: 'fr', name: 'French (Français)' },
  'es': { code: 'es', name: 'Spanish (Español)' },
  'zh-TW': { code: 'zh-TW', name: 'Traditional Chinese (繁體中文)' }
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let stats = { translated: 0, errors: 0, skipped: 0 };

async function translateText(text, targetLang) {
  if (!text || typeof text !== 'string' || !text.trim()) {
    stats.skipped++;
    return text;
  }
  
  try {
    const result = await translate(text, { to: targetLang });
    stats.translated++;
    return result.text;
  } catch (error) {
    stats.errors++;
    return text;
  }
}

async function translateObject(obj, targetLang, depth = 0) {
  if (typeof obj === 'string') {
    const result = await translateText(obj, targetLang);
    if (stats.translated % 20 === 0 && stats.translated > 0) {
      process.stdout.write(`\r    Progress: ${stats.translated} strings translated...`);
    }
    await delay(120);
    return result;
  }

  if (Array.isArray(obj)) {
    const result = [];
    for (const item of obj) {
      result.push(await translateObject(item, targetLang, depth + 1));
    }
    return result;
  }

  if (typeof obj === 'object' && obj !== null) {
    const result = {};
    for (const key of Object.keys(obj)) {
      result[key] = await translateObject(obj[key], targetLang, depth + 1);
    }
    return result;
  }

  return obj;
}

async function translateToLanguage(content, langCode, langInfo) {
  console.log(`\n📝 Translating to ${langInfo.name}...`);
  
  stats = { translated: 0, errors: 0, skipped: 0 };
  
  const langPath = path.join(LOCALES_PATH, `${langCode}.json`);
  let langContent = {};

  if (fs.existsSync(langPath)) {
    langContent = JSON.parse(fs.readFileSync(langPath, 'utf-8'));
    console.log(`    ✓ Found existing ${langCode}.json`);
  }

  console.log(`    Translating seoPages...`);
  const translatedSeoPages = await translateObject(content.seoPages, langInfo.code);
  
  langContent.seoPages = translatedSeoPages;

  fs.writeFileSync(langPath, JSON.stringify(langContent, null, 4), 'utf-8');
  
  console.log(`\n    ✅ Saved ${langCode}.json`);
  console.log(`       - Translated: ${stats.translated}`);
  console.log(`       - Errors: ${stats.errors}`);
  console.log(`       - Skipped: ${stats.skipped}`);
}

async function main() {
  console.log('\n╔══════════════════════════════════════════════════╗');
  console.log('║    🌐 SEO Pages Translation Script               ║');
  console.log('╚══════════════════════════════════════════════════╝\n');

  const enPath = path.join(LOCALES_PATH, 'en.json');
  
  if (!fs.existsSync(enPath)) {
    console.error('❌ en.json not found!');
    process.exit(1);
  }

  const enContent = JSON.parse(fs.readFileSync(enPath, 'utf-8'));

  if (!enContent.seoPages) {
    console.error('❌ No seoPages found in en.json');
    process.exit(1);
  }

  const pageCount = Object.keys(enContent.seoPages.pages || {}).length;
  console.log(`📄 Found ${pageCount} SEO pages to translate\n`);

  const selectedLang = process.argv[2];
  
  if (selectedLang && LANGUAGES[selectedLang]) {
    await translateToLanguage(enContent, selectedLang, LANGUAGES[selectedLang]);
  } else if (selectedLang === 'all' || !selectedLang) {
    console.log('🔄 Translating to all languages...');
    for (const [langCode, langInfo] of Object.entries(LANGUAGES)) {
      await translateToLanguage(enContent, langCode, langInfo);
    }
  } else {
    console.log('\n❌ Invalid language. Usage:');
    console.log('   node translate-seo-pages.js all     # All languages');
    console.log('   node translate-seo-pages.js fr      # French only');
    console.log('   node translate-seo-pages.js es      # Spanish only');
    console.log('   node translate-seo-pages.js zh-TW   # Chinese only');
    process.exit(1);
  }

  console.log('\n╔══════════════════════════════════════════════════╗');
  console.log('║    🎉 Translation Complete!                      ║');
  console.log('╚══════════════════════════════════════════════════╝\n');
}

main().catch(error => {
  console.error('\n❌ Fatal error:', error.message);
  process.exit(1);
});
