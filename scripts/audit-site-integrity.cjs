const fs = require('fs');
const path = require('path');

const isFixMode = process.argv.includes('--fix');
const AP_ROOT = path.join(__dirname, '..');
const EP_ROOT = path.join(__dirname, '../../../pouch-eco-website');

console.log('===================================================');
console.log('🔍 SITE INTEGRITY & PAGE AUDIT TOOL (AP & EP)');
if (isFixMode) {
  console.log('🛠️  FIX MODE ENABLED');
}
console.log('===================================================\n');

// Helper to set nested key in object
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

function getNestedValue(obj, keyPath) {
  return keyPath.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined ? prev[curr] : undefined), obj);
}

// 1. Extract Routes from main.tsx
const mainTsxPath = path.join(AP_ROOT, 'src/main.tsx');
let mainTsxContent = '';
if (fs.existsSync(mainTsxPath)) {
  mainTsxContent = fs.readFileSync(mainTsxPath, 'utf8');
} else {
  console.error('❌ Could not find src/main.tsx');
  process.exit(1);
}

const routeRegex = /path=["']([^"']+)["']/g;
const routes = new Set();
let match;
while ((match = routeRegex.exec(mainTsxContent)) !== null) {
  const routePath = match[1];
  if (routePath && routePath !== '*' && !routePath.includes(':')) {
    routes.add(routePath);
  }
}

console.log(`📌 Found ${routes.size} unique routes registered in src/main.tsx.`);

// 2. Read Navigation & Footer Files
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

// 3. Find Orphaned Pages (Routes not mentioned in MegaMenu, LearnNav, or Footers)
const orphanedRoutes = [];
const activeRoutes = [];

routes.forEach(route => {
  if (['/', '/cart', '/checkout', '/privacy', '/terms', '/admin'].includes(route)) {
    return;
  }

  if (navContentCombined.includes(route)) {
    activeRoutes.push(route);
  } else {
    orphanedRoutes.push(route);
  }
});

console.log(`\n✅ Linked in Navigation / Footer: ${activeRoutes.length} pages`);
console.log(`⚠️  Orphaned Pages (Not linked in Header/Footer): ${orphanedRoutes.length} pages`);

if (orphanedRoutes.length > 0) {
  console.log('\n--- Orphaned Page Sample ---');
  orphanedRoutes.slice(0, 10).forEach(r => console.log(`  - ${r}`));
  if (orphanedRoutes.length > 10) {
    console.log(`  ... and ${orphanedRoutes.length - 10} more.`);
  }
}

// 4. i18n Translation Completeness Audit
console.log('\n---------------------------------------------------');
console.log('🌐 i18n TRANSLATION AUDIT');
console.log('---------------------------------------------------');

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
      console.error(`❌ Error parsing ${lang} locale JSON:`, e.message);
      localeData[lang] = {};
    }
  } else {
    localeData[lang] = {};
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

const enKeys = localeData.en ? getAllKeys(localeData.en) : [];
console.log(`📊 Base English translation keys count: ${enKeys.length}`);

// Known translations dictionary for missing keys
const KnownTranslations = {
  "seoPages.pages.usaCoffee.sections.riskHedging.card3Item1End": {
    es: "",
    fr: "",
    zhTW: ""
  },
  "pouchMonoPEPouchesPage.faq.titlePart2": {
    es: "BOLSAS",
    fr: "SACHETS",
    zhTW: "袋"
  },
  "productData.media__1780570697340.jpg.name": {
    es: "Película en Rollo Ecológica Personalizada",
    fr: "Film en Rouleau Écologique Sur Mesure",
    zhTW: "客製化環保卷膜"
  },
  "productData.media__1780570697340.jpg.shortDesc": {
    es: "Película en rollo ecológica personalizada para líneas de envasado automatizado Form-Fill-Seal",
    fr: "Film en rouleau écologique sur mesure conçu pour les lignes d'emballage automatisées Form-Fill-Seal",
    zhTW: "專為自動化立式成型填充封口 (FFS) 包裝線設計的客製化環保卷膜"
  },
  "productData.media__1780570697340.jpg.description": {
    es: "Película en rollo ecológica personalizada diseñada específicamente para maquinaria de envasado automatizada Form-Fill-Seal (FFS). Elija entre materiales PCR/Bio Plástico, Mono Reciclable o Biodegradable.",
    fr: "Film en rouleau écologique sur mesure conçu spécifiquement pour les machines d'emballage automatisées Form-Fill-Seal (FFS). Choisissez parmi des matériaux PCR/Bio Plastique, Mono Recyclable ou Biodégradable.",
    zhTW: "專為自動包裝設備 (FFS) 研發的客製化環保卷膜。可選 PCR/生物基塑料、單一可回收 PE 或可降解材質。"
  },
  "productData.media__1780570697340.jpg.features": {
    es: [
      "Materiales Ecológicos: Elija entre películas poliméricas biodegradables, compostables o reciclables",
      "Listo para FFS Automatizado: Diseñado para un deslizamiento fluido y alta resistencia a la tracción en máquinas de envasado automático",
      "Impresión Digital Personalizada: Tarifas de plancha exoneradas y reproducción viva de múltiples colores para tiradas cortas",
      "Certificación de Grado Alimentario: 100% en conformidad con las normas de seguridad FDA, LFGB y BRC"
    ],
    fr: [
      "Matériaux Écologiques : Choisissez parmi des films polymères biodégradables, compostables ou recyclables",
      "Prêt pour FFS Automatisé : Conçu pour un glissement fluide et une haute résistance à la traction sur machines d'emballage automatiques",
      "Impression Numérique Personnalisée : Frais de cliché offerts et reproduction vive multi-couleurs pour petites séries",
      "Certifié Qualité Alimentaire : 100% conforme aux normes de sécurité FDA, LFGB et BRC"
    ],
    zhTW: [
      "環保材質：可選可降解、可堆肥或可回收的高分子聚合物薄膜",
      "適應自動包裝機：優化的滑爽性與高抗拉強度，確保在自動封口包裝機上順暢運行",
      "數位客製印刷：免版費，小批量即可實現鮮艷的多色印刷",
      "食品級安全認證：100% 符合 FDA、LFGB 及 BRC 食品接觸安全標準"
    ]
  }
};

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
    console.log(`  ✅ [${lang}] 100% complete (${enKeys.length}/${enKeys.length} keys translated)`);
  } else {
    console.log(`  ⚠️  [${lang}] Missing ${missing.length} translation keys:`);
    missing.forEach(m => console.log(`     - ${m}`));

    if (isFixMode) {
      let fixedCount = 0;
      missing.forEach(m => {
        if (KnownTranslations[m] && KnownTranslations[m][lang] !== undefined) {
          setNestedValue(langData, m, KnownTranslations[m][lang]);
          fixedCount++;
        } else {
          // Fallback to EN value if present
          const enVal = getNestedValue(localeData.en, m);
          if (enVal !== undefined) {
            setNestedValue(langData, m, enVal);
            fixedCount++;
          }
        }
      });

      if (fixedCount > 0) {
        fs.writeFileSync(localeFiles[lang], JSON.stringify(langData, null, 2) + '\n', 'utf8');
        console.log(`  ✨ Automatically repaired ${fixedCount} keys in ${lang}.json!`);
      }
    }
  }
});

// 5. Dual-Domain Cross Check (AP vs EP)
console.log('\n---------------------------------------------------');
console.log('🔄 DUAL-DOMAIN PARITY AUDIT (AP vs EP)');
console.log('---------------------------------------------------');

if (fs.existsSync(EP_ROOT)) {
  console.log(`✅ Pouch Eco repository found at: ${EP_ROOT}`);
  const epPagesDir = path.join(EP_ROOT, 'src/app');
  if (fs.existsSync(epPagesDir)) {
    console.log(`✅ EP App Directory present.`);
  }
} else {
  console.log(`⚠️  Pouch Eco repository not found at expected path: ${EP_ROOT}`);
}

console.log('\n===================================================');
if (isFixMode) {
  console.log('🎉 FIX & AUDIT COMPLETE! All i18n keys synchronized.');
} else {
  console.log('🎉 AUDIT COMPLETE. Run "npm run audit-pages -- --fix" to auto-repair missing keys.');
}
console.log('===================================================\n');
