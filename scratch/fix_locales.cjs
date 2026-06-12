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

// Check if a value is a placeholder
function isPlaceholder(value, keyPath) {
  if (typeof value !== 'string') return false;
  const val = value.trim();
  if (val === keyPath) return true;
  if (val.startsWith('seoPages.pages.') && !val.includes(' ') && !val.includes('<') && !val.includes('>') && val.split('.').length > 2) {
    return true;
  }
  return false;
}

// Main execution
function run() {
  const data = {};
  
  // 1. Load files
  files.forEach(file => {
    const filePath = path.join(localesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    data[file] = JSON.parse(content);
  });

  // 2. Collect all keys and their values
  // We want to map: keyPath -> { [file]: value }
  const allValues = {};
  
  function collect(obj, currentPath, file) {
    for (const key in obj) {
      const value = obj[key];
      const pathStr = currentPath ? `${currentPath}.${key}` : key;
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        collect(value, pathStr, file);
      } else {
        if (!allValues[pathStr]) allValues[pathStr] = {};
        allValues[pathStr][file] = value;
      }
    }
  }

  files.forEach(file => {
    collect(data[file], '', file);
  });

  // 3. Resolve placeholders
  // We do up to 3 passes to resolve references
  for (let pass = 0; pass < 3; pass++) {
    let resolvedCount = 0;
    for (const keyPath in allValues) {
      const fileVals = allValues[keyPath];
      
      files.forEach(file => {
        const val = fileVals[file];
        if (val !== undefined && isPlaceholder(val, keyPath)) {
          // It's a placeholder! Let's find a resolution.
          // Is the placeholder value pointing to another key?
          const targetKey = val.trim();
          let resolvedVal = null;
          
          if (targetKey !== keyPath && allValues[targetKey]) {
            // It points to another key! Check if we have a non-placeholder value for the target key in the same file or in other files.
            // First check the same file:
            const targetValSameFile = allValues[targetKey][file];
            if (targetValSameFile !== undefined && !isPlaceholder(targetValSameFile, targetKey)) {
              resolvedVal = targetValSameFile;
            } else {
              // Check other files for the target key:
              for (const f of files) {
                const targetValOtherFile = allValues[targetKey][f];
                if (targetValOtherFile !== undefined && !isPlaceholder(targetValOtherFile, targetKey)) {
                  resolvedVal = targetValOtherFile;
                  break;
                }
              }
            }
          }
          
          // If we couldn't resolve via reference, check if other files have a non-placeholder value for the CURRENT keyPath:
          if (!resolvedVal) {
            for (const f of files) {
              const otherVal = allValues[keyPath][f];
              if (otherVal !== undefined && !isPlaceholder(otherVal, keyPath)) {
                resolvedVal = otherVal;
                break;
              }
            }
          }
          
          if (resolvedVal) {
            console.log(`Pass ${pass + 1}: Resolved "${keyPath}" in ${file} from "${val}" to "${resolvedVal}"`);
            allValues[keyPath][file] = resolvedVal;
            setNestedKey(data[file], keyPath, resolvedVal);
            resolvedCount++;
          }
        }
      });
    }
    if (resolvedCount === 0) break;
  }

  // 4. Split HTML segments for the overview pairs
  const overviewPairs = [
    { page: 'flatBottomBags', k1: 'sections.overview.intro', k2: 'sections.overview.desc' },
    { page: 'spoutPouches', k1: 'sections.overview.intro', k2: 'sections.overview.desc' },
    { page: 'flatPouches', k1: 'sections.overview.intro', k2: 'sections.overview.desc' },
    { page: 'sideGussetBags', k1: 'sections.overview.intro', k2: 'sections.overview.desc' },
    { page: 'vacuumPouches', k1: 'sections.overview.descStrong', k2: 'sections.overview.descText' },
    { page: 'spoutPouches', k1: 'sections.ecoMaterials.kraftIntro', k2: 'sections.ecoMaterials.kraftDesc' }
  ];

  files.forEach(file => {
    overviewPairs.forEach(({ page, k1, k2 }) => {
      const kp1 = `seoPages.pages.${page}.${k1}`;
      const kp2 = `seoPages.pages.${page}.${k2}`;
      
      const v1 = getNestedKey(data[file], kp1);
      const v2 = getNestedKey(data[file], kp2);
      
      const combined = (typeof v1 === 'string' && v1.includes('</strong>')) ? v1 :
                       (typeof v2 === 'string' && v2.includes('</strong>')) ? v2 : null;
                       
      if (combined) {
        const parts = combined.split('</strong>');
        const part1 = parts[0].trim();
        const part2 = parts.slice(1).join('</strong>').trim();
        
        console.log(`Splitting Overview key in ${file}: ${kp1} / ${kp2}`);
        setNestedKey(data[file], kp1, part1);
        setNestedKey(data[file], kp2, part2);
        
        allValues[kp1][file] = part1;
        allValues[kp2][file] = part2;
      }
    });

    // Specifications label/val splits
    const spoutSpecs = 'seoPages.pages.spoutPouches.sections.specifications';
    for (let i = 1; i <= 6; i++) {
      const kp1 = `${spoutSpecs}.label${i}`;
      const kp2 = `${spoutSpecs}.val${i}`;
      const v1 = getNestedKey(data[file], kp1);
      const v2 = getNestedKey(data[file], kp2);
      
      const combined = (typeof v1 === 'string' && v1.includes('</strong>')) ? v1 :
                       (typeof v2 === 'string' && v2.includes('</strong>')) ? v2 : null;
                       
      if (combined) {
        const parts = combined.split('</strong>');
        const part1 = parts[0].trim();
        const part2 = parts.slice(1).join('</strong>').trim();
        
        console.log(`Splitting Spout Spec key in ${file}: ${kp1} / ${kp2}`);
        setNestedKey(data[file], kp1, part1);
        setNestedKey(data[file], kp2, part2);
        
        allValues[kp1][file] = part1;
        allValues[kp2][file] = part2;
      }
    }

    // Vacuum specifications itemTitle/itemDesc splits
    const vacuumSpecs = 'seoPages.pages.vacuumPouches.sections.specifications';
    for (let i = 1; i <= 6; i++) {
      const kp1 = `${vacuumSpecs}.item${i}Title`;
      const kp2 = `${vacuumSpecs}.item${i}Desc`;
      const v1 = getNestedKey(data[file], kp1);
      const v2 = getNestedKey(data[file], kp2);
      
      const combined = (typeof v1 === 'string' && v1.includes('</strong>')) ? v1 :
                       (typeof v2 === 'string' && v2.includes('</strong>')) ? v2 : null;
                       
      if (combined) {
        const parts = combined.split('</strong>');
        let part1 = parts[0].trim();
        if (part1.endsWith(':')) part1 = part1.slice(0, -1).trim();
        const part2 = parts.slice(1).join('</strong>').trim();
        
        console.log(`Splitting Vacuum Spec key in ${file}: ${kp1} / ${kp2}`);
        setNestedKey(data[file], kp1, part1);
        setNestedKey(data[file], kp2, part2);
        
        allValues[kp1][file] = part1;
        allValues[kp2][file] = part2;
      }
    }

    // AI Search bullets splits
    const spoutAi = 'seoPages.pages.spoutPouches.sections.aiSearch';
    for (let i of [3, 4]) {
      const kp1 = `${spoutAi}.bullet${i}Title`;
      const kp2 = `${spoutAi}.bullet${i}Link`;
      const v1 = getNestedKey(data[file], kp1);
      const v2 = getNestedKey(data[file], kp2);
      
      const combined = (typeof v1 === 'string' && v1.includes('</strong>')) ? v1 :
                       (typeof v2 === 'string' && v2.includes('</strong>')) ? v2 : null;
                       
      if (combined) {
        const parts = combined.split('</strong>');
        const part1 = parts[0].trim();
        const rest = parts.slice(1).join('</strong>').trim();
        const linkMatch = rest.match(/<(?:Link|a|button)[^>]*>(.*?)$/i);
        const part2 = linkMatch ? linkMatch[1].trim() : rest;
        
        console.log(`Splitting Spout AI key in ${file}: ${kp1} / ${kp2}`);
        setNestedKey(data[file], kp1, part1);
        setNestedKey(data[file], kp2, part2);
        
        allValues[kp1][file] = part1;
        allValues[kp2][file] = part2;
      }
    }

    // Custom boxes AI search
    const boxAi = 'seoPages.pages.customBoxes.sections.aiSearch';
    const kpBox1 = `${boxAi}.listItem4Title`;
    const kpBox2 = `${boxAi}.listItem4Button`;
    const vBox1 = getNestedKey(data[file], kpBox1);
    const vBox2 = getNestedKey(data[file], kpBox2);
    const combinedBox = (typeof vBox1 === 'string' && vBox1.includes('</strong>')) ? vBox1 :
                         (typeof vBox2 === 'string' && vBox2.includes('</strong>')) ? vBox2 : null;
    if (combinedBox) {
      const parts = combinedBox.split('</strong>');
      const part1 = parts[0].trim();
      const rest = parts.slice(1).join('</strong>').trim();
      const linkMatch = rest.match(/<(?:Link|a|button)[^>]*>(.*?)$/i);
      const part2 = linkMatch ? linkMatch[1].trim() : rest;
      
      console.log(`Splitting Custom Box AI key in ${file}: ${kpBox1} / ${kpBox2}`);
      setNestedKey(data[file], kpBox1, part1);
      setNestedKey(data[file], kpBox2, part2);
      
      allValues[kpBox1][file] = part1;
      allValues[kpBox2][file] = part2;
    }

    // Custom boxes shipping parameters split
    const boxShipping = 'seoPages.pages.customBoxes.sections.pricing';
    const kps = [
      `${boxShipping}.shippingTitle`,
      `${boxShipping}.shippingDescPre`,
      `${boxShipping}.shippingLinkText`,
      `${boxShipping}.shippingDescPost`
    ];
    let combinedShip = null;
    for (let kp of kps) {
      const val = getNestedKey(data[file], kp);
      if (typeof val === 'string' && val.includes('</strong>')) {
        combinedShip = val;
        break;
      }
    }
    if (combinedShip) {
      const titleMatch = combinedShip.match(/^(.*?)<\/strong>/i);
      const title = titleMatch ? titleMatch[1].trim() : '';
      const rest = combinedShip.substring(combinedShip.indexOf('</strong>') + 9).trim();
      const buttonMatch = rest.match(/^(.*?)<(?:button|Link|a)[^>]*>(.*?)<\/(?:button|Link|a)>(.*)$/i);
      
      if (buttonMatch) {
        const pre = buttonMatch[1].trim();
        const link = buttonMatch[2].trim();
        const post = buttonMatch[3].trim();
        
        console.log(`Splitting Custom Box Shipping key in ${file}`);
        setNestedKey(data[file], kps[0], title);
        setNestedKey(data[file], kps[1], pre);
        setNestedKey(data[file], kps[2], link);
        setNestedKey(data[file], kps[3], post);
        
        allValues[kps[0]][file] = title;
        allValues[kps[1]][file] = pre;
        allValues[kps[2]][file] = link;
        allValues[kps[3]][file] = post;
      }
    }

    // Fix standUpPouches.b2b.sections.specifications.row3Col3
    const row3Col3 = 'seoPages.pages.standUpPouches.b2b.sections.specifications.row3Col3';
    let rVal = getNestedKey(data[file], row3Col3);
    if (typeof rVal === 'string') {
      let changed = false;
      if (rVal.startsWith('>')) {
        rVal = rVal.slice(1).trim();
        changed = true;
      }
      if (rVal.endsWith('</td')) {
        rVal = rVal.slice(0, -4).trim();
        changed = true;
      }
      if (changed) {
        console.log(`Cleaned up row3Col3 in ${file}: "${rVal}"`);
        setNestedKey(data[file], row3Col3, rVal);
        allValues[row3Col3][file] = rVal;
      }
    }
  });

  // 5. Write back to files
  files.forEach(file => {
    const filePath = path.join(localesDir, file);
    fs.writeFileSync(filePath, JSON.stringify(data[file], null, 4) + '\n', 'utf8');
    console.log(`Saved ${file}`);
  });
}

run();
