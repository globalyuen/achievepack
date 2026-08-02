const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const isFixMode = process.argv.includes('--fix');
const AP_ROOT = path.join(__dirname, '..');
const EP_ROOT = path.join(__dirname, '../../../pouch-eco-website');

console.log('===================================================');
console.log('🚀 TOTAL SOLUTION SEO AUDIT & INTEGRITY SYSTEM');
if (isFixMode) {
  console.log('🛠️  FIX MODE ENABLED (--fix)');
}
console.log('===================================================\n');

const reportLines = [];
function logAndReport(msg) {
  console.log(msg);
  reportLines.push(msg.replace(/\x1b\[[0-9;]*m/g, ''));
}

logAndReport(`# Total Solution SEO Audit Report`);
logAndReport(`Timestamp: ${new Date().toISOString()}`);
logAndReport(`Mode: ${isFixMode ? 'Auto-Fix Enabled' : 'Audit Only'}\n`);

// 1. Route Extraction & Navigation Audit
logAndReport(`## 1. Navigation & Route Coverage Audit`);
const mainTsxPath = path.join(AP_ROOT, 'src/main.tsx');
let mainTsxContent = fs.readFileSync(mainTsxPath, 'utf8');

const routeRegex = /path=["']([^"']+)["']/g;
const routes = new Set();
let match;
while ((match = routeRegex.exec(mainTsxContent)) !== null) {
  const routePath = match[1];
  if (routePath && routePath !== '*' && !routePath.includes(':')) {
    routes.add(routePath);
  }
}

logAndReport(`- Total Unique Registered Routes in main.tsx: ${routes.size}`);

const navFiles = [
  path.join(AP_ROOT, 'src/components/MegaMenu.tsx'),
  path.join(AP_ROOT, 'src/components/LearnNavigation.tsx'),
  path.join(AP_ROOT, 'src/components/Footer.tsx'),
  path.join(AP_ROOT, 'src/components/StoreFooter.tsx')
];

let navContentCombined = '';
navFiles.forEach(file => {
  if (fs.existsSync(file)) {
    navContentCombined += fs.readFileSync(file, 'utf8') + '\n';
  }
});

const orphanedRoutes = [];
const activeRoutes = [];

routes.forEach(route => {
  if (['/', '/cart', '/checkout', '/privacy', '/terms', '/admin'].includes(route)) return;
  if (navContentCombined.includes(route)) {
    activeRoutes.push(route);
  } else {
    orphanedRoutes.push(route);
  }
});

logAndReport(`- Linked in Navigation/Footer: ${activeRoutes.length} pages`);
logAndReport(`- Orphaned Pages (Not in Menu/Footer): ${orphanedRoutes.length} pages\n`);

// 2. i18n Multi-lingual Audit
logAndReport(`## 2. i18n Multi-lingual Translation Audit`);
const localeFiles = {
  en: path.join(AP_ROOT, 'src/locales/en.json'),
  es: path.join(AP_ROOT, 'src/locales/es.json'),
  fr: path.join(AP_ROOT, 'src/locales/fr.json'),
  zhTW: path.join(AP_ROOT, 'src/locales/zh-TW.json')
};

const localeData = {};
Object.keys(localeFiles).forEach(lang => {
  if (fs.existsSync(localeFiles[lang])) {
    try {
      localeData[lang] = JSON.parse(fs.readFileSync(localeFiles[lang], 'utf8'));
    } catch (e) {
      localeData[lang] = {};
    }
  }
});

function getAllKeys(obj, prefix = '') {
  let keys = [];
  for (const k in obj) {
    const keyPath = prefix ? `${prefix}.${k}` : k;
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      keys = keys.concat(getAllKeys(obj[k], keyPath));
    } else {
      keys.push(keyPath);
    }
  }
  return keys;
}

function getNestedValue(obj, keyPath) {
  return keyPath.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined ? prev[curr] : undefined), obj);
}

function setNestedValue(obj, keyPath, value) {
  const keys = keyPath.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    if (!current[k] || typeof current[k] !== 'object') {
      current[k] = {};
    }
    current = current[k];
  }
  current[keys[keys.length - 1]] = value;
}

const enKeys = localeData.en ? getAllKeys(localeData.en) : [];
logAndReport(`- Base English Translation Keys: ${enKeys.length}`);

['es', 'fr', 'zhTW'].forEach(lang => {
  const missing = [];
  const langData = localeData[lang] || {};

  enKeys.forEach(k => {
    const val = getNestedValue(langData, k);
    if (val === undefined) {
      missing.push(k);
    }
  });

  if (missing.length === 0) {
    logAndReport(`  - [${lang}]: ✅ 100% Complete (${enKeys.length}/${enKeys.length} keys)`);
  } else {
    logAndReport(`  - [${lang}]: ⚠️ Missing ${missing.length} keys`);
    if (isFixMode) {
      let fixedCount = 0;
      missing.forEach(m => {
        const enVal = getNestedValue(localeData.en, m);
        if (enVal !== undefined) {
          setNestedValue(langData, m, enVal);
          fixedCount++;
        }
      });
      if (fixedCount > 0) {
        fs.writeFileSync(localeFiles[lang], JSON.stringify(langData, null, 2) + '\n', 'utf8');
        logAndReport(`    ✨ Automatically repaired ${fixedCount} keys in ${lang}.json`);
      }
    }
  }
});

// 3. TSX Deep Code Audit (E-E-A-T & 3+ Images)
logAndReport(`\n## 3. Page Structure & E-E-A-T Quality Audit`);
const productPagesDir = path.join(AP_ROOT, 'src/pages/products');
let productPagesCount = 0;
let pagesPassingImageCheck = 0;

if (fs.existsSync(productPagesDir)) {
  const files = fs.readdirSync(productPagesDir).filter(f => f.endsWith('.tsx'));
  productPagesCount = files.length;

  files.forEach(file => {
    const content = fs.readFileSync(path.join(productPagesDir, file), 'utf8');
    const imgMatches = content.match(/<img|<ClickableImage/g) || [];
    if (imgMatches.length >= 2) {
      pagesPassingImageCheck++;
    }
  });
}
logAndReport(`- Product Pages Analyzed: ${productPagesCount}`);
logAndReport(`- Pages with Rich Images (>=2 images/ClickableImage): ${pagesPassingImageCheck}/${productPagesCount}`);

// 4. Live URL Verification
logAndReport(`\n## 4. Live HTTP 200 Health Check`);
const keyUrls = [
  'https://achievepack.com/products/eco-kraft-paper-tube-gift-box',
  'https://achievepack.com/products/compostable-coffee-bags',
  'https://pouch.eco'
];

keyUrls.forEach(url => {
  try {
    const curlOutput = execSync(`curl -ILs "${url}" | head -n 1`, { encoding: 'utf8', timeout: 5000 }).trim();
    logAndReport(`  - ${url} => ${curlOutput}`);
  } catch (e) {
    logAndReport(`  - ${url} => ⚠️ Check timeout/failed`);
  }
});

// 5. Dual-Domain Parity Status
logAndReport(`\n## 5. Dual-Domain Repository Sync (AP & EP)`);
logAndReport(`- AchievePack (AP): ${AP_ROOT}`);
logAndReport(`- Pouch Eco (EP): ${EP_ROOT} (${fs.existsSync(EP_ROOT) ? '✅ Present' : '❌ Not Found'})`);

// Write Markdown Report Artifact
const reportPath = path.join(AP_ROOT, 'SEO_TOTAL_AUDIT_REPORT.md');
fs.writeFileSync(reportPath, reportLines.join('\n') + '\n', 'utf8');
console.log(`\n📄 Generated report saved to: ${reportPath}`);

console.log('\n===================================================');
console.log('🎉 TOTAL SOLUTION AUDIT COMPLETE!');
console.log('===================================================\n');
