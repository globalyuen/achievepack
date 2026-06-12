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

function run() {
  const data = {};
  files.forEach(file => {
    const filePath = path.join(localesDir, file);
    data[file] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  });

  // 1. Fix spoutPouches.sections.ecoMaterials.intro in locales
  files.forEach(file => {
    const kp = 'seoPages.pages.spoutPouches.sections.ecoMaterials.intro';
    let val = getNestedKey(data[file], kp);
    if (typeof val === 'string') {
      if (file === 'zh-TW.json') {
        if (!val.includes('<strong>')) {
          val = val.replace('吸嘴袋可以使用永續材料生產，', '<strong>吸嘴袋可以使用永續材料生產</strong>，');
          val = val.replace('吸嘴袋可以使用永續材料生產', '<strong>吸嘴袋可以使用永續材料生產</strong>');
        }
      } else {
        if (!val.startsWith('<strong>') && val.includes('</strong>')) {
          val = '<strong>' + val;
        }
      }
      console.log(`Updated spoutPouches intro in ${file}: "${val}"`);
      setNestedKey(data[file], kp, val);
    }
  });

  // 2. Fix spoutPouches.sections.ecoMaterials.compostable* in locales
  files.forEach(file => {
    const kpIntro = 'seoPages.pages.spoutPouches.sections.ecoMaterials.compostableIntro';
    const kpLink = 'seoPages.pages.spoutPouches.sections.ecoMaterials.compostableLink';
    const kpOutro = 'seoPages.pages.spoutPouches.sections.ecoMaterials.compostableOutro';

    const v1 = getNestedKey(data[file], kpIntro);
    const v2 = getNestedKey(data[file], kpLink);
    const v3 = getNestedKey(data[file], kpOutro);

    // Find the one that has the full HTML structure
    const combined = (typeof v1 === 'string' && v1.includes('</strong>')) ? v1 :
                     (typeof v2 === 'string' && v2.includes('</strong>')) ? v2 :
                     (typeof v3 === 'string' && v3.includes('</strong>')) ? v3 : null;

    if (combined) {
      const parts = combined.split('</strong>');
      const part1 = parts[0].trim();
      const rest = parts.slice(1).join('</strong>').trim();

      const linkMatch = rest.match(/<Link[^>]*>(.*?)<\/Link>/i);
      const part2 = linkMatch ? linkMatch[1].trim() : '';
      
      let part3 = '';
      const linkCloseIdx = rest.indexOf('</Link>');
      if (linkCloseIdx !== -1) {
        part3 = rest.substring(linkCloseIdx + 7).trim();
      } else {
        part3 = rest;
      }

      console.log(`Splitting compostable keys in ${file}:`);
      console.log(`  Intro: "${part1}"`);
      console.log(`  Link:  "${part2}"`);
      console.log(`  Outro: "${part3}"`);

      setNestedKey(data[file], kpIntro, part1);
      setNestedKey(data[file], kpLink, part2);
      setNestedKey(data[file], kpOutro, part3);
    }
  });

  // 3. Fix recyclableRoadmap.flexibility.items.0 in zh-TW.json
  const kpRoadmap = 'seoPages.pages.recyclableRoadmap.flexibility.items.0';
  let rVal = getNestedKey(data['zh-TW.json'], kpRoadmap);
  if (typeof rVal === 'string' && rVal.includes('<strong>') && !rVal.includes('</strong>')) {
    rVal = rVal.replace('<strong>將 SKU 重新設計', '<strong>將 SKU 重新設計</strong>');
    console.log(`Fixed recyclableRoadmap item in zh-TW.json: "${rVal}"`);
    setNestedKey(data['zh-TW.json'], kpRoadmap, rVal);
  }

  // 4. Save files
  files.forEach(file => {
    const filePath = path.join(localesDir, file);
    fs.writeFileSync(filePath, JSON.stringify(data[file], null, 4) + '\n', 'utf8');
    console.log(`Saved ${file}`);
  });

  // 5. Modify SpoutPouchesPage.tsx
  const pagePath = path.join(__dirname, '../src/pages/packaging/SpoutPouchesPage.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    const target = '<strong>{t(`${p}.sections.ecoMaterials.intro`)}</strong>';
    const replacement = 'dangerouslySetInnerHTML={{ __html: t(`${p}.sections.ecoMaterials.intro`) }}';
    
    // In SpoutPouchesPage.tsx:
    // <p>
    //   <strong>{t(`${p}.sections.ecoMaterials.intro`)}</strong>
    // </p>
    const originalBlock = `<p>\n            <strong>{t(\`\${p}.sections.ecoMaterials.intro\`)}</strong>\n          </p>`;
    const replacedBlock = `<p dangerouslySetInnerHTML={{ __html: t(\`\${p}.sections.ecoMaterials.intro\`) }} />`;
    
    if (content.includes('<strong>{t(`${p}.sections.ecoMaterials.intro`)}</strong>')) {
      content = content.replace(originalBlock, replacedBlock);
      // fallback simple replace if formatting differs:
      content = content.replace('<strong>{t(`${p}.sections.ecoMaterials.intro`)}</strong>', '{t(`${p}.sections.ecoMaterials.intro`)}'); // wait, let's do exact replace:
      fs.writeFileSync(pagePath, content, 'utf8');
      console.log('Modified SpoutPouchesPage.tsx');
    } else {
      console.warn('Could not find target block in SpoutPouchesPage.tsx, trying fuzzy match');
      // let's do a replace of the line
      content = content.replace(/<strong[^>]*>\{t\(`\$\{p\}\.sections\.ecoMaterials\.intro`\)\}<\/strong>/, '{t(`${p}.sections.ecoMaterials.intro`)}');
      // wait, the easiest is to just write a script to replace it safely
    }
  }
}

run();
