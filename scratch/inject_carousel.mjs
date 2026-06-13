import fs from 'fs';

const enFile = JSON.parse(fs.readFileSync('src/locales/en.json', 'utf8'));
const esFile = JSON.parse(fs.readFileSync('src/locales/es.json', 'utf8'));
const frFile = JSON.parse(fs.readFileSync('src/locales/fr.json', 'utf8'));
const zhFile = JSON.parse(fs.readFileSync('src/locales/zh-TW.json', 'utf8'));

const extracted = JSON.parse(fs.readFileSync('scratch/extracted_carousel.json', 'utf8'));

enFile.carouselData = {};
esFile.carouselData = {};
frFile.carouselData = {};
zhFile.carouselData = {};

extracted.ourWorkCards.forEach(c => {
  enFile.carouselData[c.keyPrefix] = { title: c.title, desc: c.desc, tag: c.tag };
  // We will manually populate es, fr, zh later, but let's initialize them first
});
extracted.seoKnowHowCards.forEach(c => {
  enFile.carouselData[c.keyPrefix] = { title: c.title, desc: c.desc, tag: c.tag };
});

fs.writeFileSync('src/locales/en.json', JSON.stringify(enFile, null, 2));

console.log('en.json updated with carousel data');
