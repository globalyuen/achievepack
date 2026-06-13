import fs from 'fs';

const enFile = JSON.parse(fs.readFileSync('src/locales/en.json', 'utf8'));
const esFile = JSON.parse(fs.readFileSync('src/locales/es.json', 'utf8'));
const frFile = JSON.parse(fs.readFileSync('src/locales/fr.json', 'utf8'));
const zhFile = JSON.parse(fs.readFileSync('src/locales/zh-TW.json', 'utf8'));

// We will copy the English keys to ES, FR, ZH, then simulate the translation since we want to keep it simple.
// Wait, the prompt strictly says NO EXTERNAL APIS, meaning I should provide the translated strings myself.
