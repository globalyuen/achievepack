import fs from 'fs';

const dictWork = JSON.parse(fs.readFileSync('scratch/dict_work.json', 'utf8'));
const dictKnowHow = JSON.parse(fs.readFileSync('scratch/dict_knowhow.json', 'utf8'));

const locales = ['es', 'fr', 'zh-TW'];
const codeMap = { 'es': 'es', 'fr': 'fr', 'zh-TW': 'zh' };

locales.forEach(loc => {
  const file = JSON.parse(fs.readFileSync(`src/locales/${loc}.json`, 'utf8'));
  const code = codeMap[loc];
  
  if (!file.carouselData) file.carouselData = {};

  for (const [key, value] of Object.entries(dictWork)) {
    file.carouselData[key] = value[code];
  }
  for (const [key, value] of Object.entries(dictKnowHow)) {
    file.carouselData[key] = value[code];
  }

  fs.writeFileSync(`src/locales/${loc}.json`, JSON.stringify(file, null, 2));
});

console.log('Injected translations into es, fr, zh-TW');
