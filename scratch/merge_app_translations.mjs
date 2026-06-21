import fs from 'fs';

const locales = ['en', 'es', 'fr', 'zh-TW'];

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && key in target) {
      Object.assign(source[key], deepMerge(target[key], source[key]));
    }
  }
  Object.assign(target || {}, source);
  return target;
}

locales.forEach(loc => {
  const targetPath = `src/locales/${loc}.json`;
  const sourcePath = loc === 'en' ? 'scratch/app_en.json' : `scratch/app_${loc}.json`;
  
  if (fs.existsSync(targetPath) && fs.existsSync(sourcePath)) {
    const targetData = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
    const sourceData = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
    
    // Merge sourceData into targetData
    deepMerge(targetData, sourceData);
    
    fs.writeFileSync(targetPath, JSON.stringify(targetData, null, 2));
    console.log(`Merged ${loc} successfully.`);
  } else {
    console.log(`Missing files for ${loc}`);
  }
});
