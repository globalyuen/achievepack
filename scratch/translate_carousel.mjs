import fs from 'fs';

const en = JSON.parse(fs.readFileSync('src/locales/en.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('src/locales/es.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('src/locales/fr.json', 'utf8'));
const zh = JSON.parse(fs.readFileSync('src/locales/zh-TW.json', 'utf8'));

// We will add a "carouselData" object to each locale.
en.carouselData = {};
es.carouselData = {};
fr.carouselData = {};
zh.carouselData = {};

fs.writeFileSync('src/locales/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('src/locales/es.json', JSON.stringify(es, null, 2));
fs.writeFileSync('src/locales/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('src/locales/zh-TW.json', JSON.stringify(zh, null, 2));
console.log("Initialized carouselData");
