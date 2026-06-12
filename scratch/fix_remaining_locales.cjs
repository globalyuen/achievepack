const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../src/locales');
const files = ['en.json', 'es.json', 'fr.json', 'zh-TW.json'];

// Helper to set nested key in object
function setNestedKey(obj, keyPath, value) {
  const parts = keyPath.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]]) current[parts[i]] = {};
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] = value;
}

// Helper to get nested key in object
function getNestedKey(obj, keyPath) {
  const parts = keyPath.split('.');
  let current = obj;
  for (let i = 0; i < parts.length; i++) {
    if (current === undefined || current === null) return undefined;
    current = current[parts[i]];
  }
  return current;
}

function cleanDescriptionText(text) {
  let cleaned = text.trim();
  // Remove leading dashes, colons, spaces, and Chinese colons
  if (cleaned.startsWith('–') || cleaned.startsWith('-') || cleaned.startsWith('—') || cleaned.startsWith(':') || cleaned.startsWith('：')) {
    cleaned = cleaned.substring(1).trim();
  }
  return cleaned;
}

function run() {
  const data = {};
  files.forEach(file => {
    const filePath = path.join(localesDir, file);
    data[file] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  });

  files.forEach(file => {
    // 1. Fix spoutPouches ecoMaterials clarificationIntro
    const kpClarification = 'seoPages.pages.spoutPouches.sections.ecoMaterials.clarificationIntro';
    let valClar = getNestedKey(data[file], kpClarification);
    if (typeof valClar === 'string') {
      if (!valClar.startsWith('<strong>') && valClar.includes('</strong>')) {
        valClar = '<strong>' + valClar;
        console.log(`Prepended <strong> to clarificationIntro in ${file}`);
        setNestedKey(data[file], kpClarification, valClar);
      }
    }

    // 2. Fix customBoxes.sections.overview.intro starting with strong>
    const kpBoxIntro = 'seoPages.pages.customBoxes.sections.overview.intro';
    let valBoxIntro = getNestedKey(data[file], kpBoxIntro);
    if (typeof valBoxIntro === 'string') {
      if (valBoxIntro.startsWith('strong>')) {
        valBoxIntro = '<' + valBoxIntro;
        console.log(`Fixed customBoxes overview intro in ${file}`);
        setNestedKey(data[file], kpBoxIntro, valBoxIntro);
      }
    }

    // 3. Fix kraftIntro in zh-TW.json missing closing tag
    if (file === 'zh-TW.json') {
      const kpKraft = 'seoPages.pages.spoutPouches.sections.ecoMaterials.kraftIntro';
      let valKraft = getNestedKey(data[file], kpKraft);
      if (typeof valKraft === 'string' && valKraft.includes('<strong>100% 防水') && !valKraft.includes('<strong>100% 防水</strong>')) {
        valKraft = valKraft.replace('<strong>100% 防水', '<strong>100% 防水</strong>');
        console.log(`Fixed kraftIntro in zh-TW.json`);
        setNestedKey(data[file], kpKraft, valKraft);
      }
    }

    // 4. Split spoutPouches bullet1 & bullet2
    const spoutAi = 'seoPages.pages.spoutPouches.sections.aiSearch';
    for (let i of [1, 2]) {
      const kp1 = `${spoutAi}.bullet${i}Title`;
      const kp2 = `${spoutAi}.bullet${i}Text`;
      const v1 = getNestedKey(data[file], kp1);
      const v2 = getNestedKey(data[file], kp2);
      const combined = (typeof v1 === 'string' && v1.includes('</strong>')) ? v1 :
                       (typeof v2 === 'string' && v2.includes('</strong>')) ? v2 : null;
      if (combined) {
        const parts = combined.split('</strong>');
        const title = parts[0].trim();
        const text = cleanDescriptionText(parts.slice(1).join('</strong>'));
        console.log(`Splitting Spout AI bullet ${i} in ${file}: "${title}" / "${text}"`);
        setNestedKey(data[file], kp1, title);
        setNestedKey(data[file], kp2, text);
      }
    }

    // 5. Split flatPouches trend1 & trend2
    const flatMarket = 'seoPages.pages.flatPouches.sections.marketData';
    for (let i of [1, 2]) {
      const kp1 = `${flatMarket}.trend${i}Bold`;
      const kp2 = `${flatMarket}.trend${i}Text`;
      const v1 = getNestedKey(data[file], kp1);
      const v2 = getNestedKey(data[file], kp2);
      const combined = (typeof v1 === 'string' && v1.includes('</strong>')) ? v1 :
                       (typeof v2 === 'string' && v2.includes('</strong>')) ? v2 : null;
      if (combined) {
        const parts = combined.split('</strong>');
        const bold = parts[0].trim();
        const text = cleanDescriptionText(parts.slice(1).join('</strong>'));
        console.log(`Splitting Flat Pouches trend ${i} in ${file}: "${bold}" / "${text}"`);
        setNestedKey(data[file], kp1, bold);
        setNestedKey(data[file], kp2, text);
      }
    }

    // 6. Split sideGussetBags trend1 & trend2
    const gussetMarket = 'seoPages.pages.sideGussetBags.sections.marketData';
    for (let i of [1, 2]) {
      const kp1 = `${gussetMarket}.trend${i}Bold`;
      const kp2 = `${gussetMarket}.trend${i}Text`;
      const v1 = getNestedKey(data[file], kp1);
      const v2 = getNestedKey(data[file], kp2);
      const combined = (typeof v1 === 'string' && v1.includes('</strong>')) ? v1 :
                       (typeof v2 === 'string' && v2.includes('</strong>')) ? v2 : null;
      if (combined) {
        const parts = combined.split('</strong>');
        const bold = parts[0].trim();
        const text = cleanDescriptionText(parts.slice(1).join('</strong>'));
        console.log(`Splitting Side Gusset Bags trend ${i} in ${file}: "${bold}" / "${text}"`);
        setNestedKey(data[file], kp1, bold);
        setNestedKey(data[file], kp2, text);
      }
    }
  });

  // Save locales
  files.forEach(file => {
    const filePath = path.join(localesDir, file);
    fs.writeFileSync(filePath, JSON.stringify(data[file], null, 4) + '\n', 'utf8');
    console.log(`Saved ${file}`);
  });

  // Modify SpoutPouchesPage.tsx for clarificationIntro dangerouslySetInnerHTML
  const pagePath = path.join(__dirname, '../src/pages/packaging/SpoutPouchesPage.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Original block:
    // <p className="text-blue-900 mb-4">
    //   <strong>{t(`${p}.sections.ecoMaterials.clarificationIntro`)}</strong>
    // </p>
    const originalBlock = `<p className="text-blue-900 mb-4">\n              <strong>{t(\`\${p}.sections.ecoMaterials.clarificationIntro\`)}</strong>\n            </p>`;
    const replacedBlock = `<p className="text-blue-900 mb-4" dangerouslySetInnerHTML={{ __html: t(\`\${p}.sections.ecoMaterials.clarificationIntro\`) }} />`;

    if (content.includes('<strong>{t(`${p}.sections.ecoMaterials.clarificationIntro`)}</strong>')) {
      content = content.replace(originalBlock, replacedBlock);
      content = content.replace('<strong>{t(`${p}.sections.ecoMaterials.clarificationIntro`)}</strong>', '{t(`${p}.sections.ecoMaterials.clarificationIntro`)}');
      fs.writeFileSync(pagePath, content, 'utf8');
      console.log('Modified SpoutPouchesPage.tsx clarificationIntro');
    }
  }
}

run();
