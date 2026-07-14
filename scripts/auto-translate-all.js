import fs from 'fs';
import path from 'path';
import { translate } from 'google-translate-api-x';

const localesDirAP = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/locales/';
const localesDirEP = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/pouch-eco-website/src/locales/';
const targetLangs = ['es', 'fr', 'zh-TW'];

// Fallback if imported incorrectly
const translateFn = typeof translate === 'function' ? translate : translate.translate;

async function translateText(text, targetLang) {
    if (!text || text.trim() === '') return text;
    try {
        const res = await translateFn(text, { to: targetLang });
        return res.text;
    } catch (e) {
        console.error(`Failed to translate: ${text} to ${targetLang}`, e.message);
        return text;
    }
}

async function processObject(enObj, targetObj, targetLang) {
    let updated = false;
    for (const key in enObj) {
        if (Array.isArray(enObj[key])) {
            if (!targetObj[key] || !Array.isArray(targetObj[key])) {
                targetObj[key] = [];
            }
            // For simplicity, assuming array of strings or simple structures. 
            // If it's an array, we match lengths.
            for (let i = 0; i < enObj[key].length; i++) {
                if (typeof enObj[key][i] === 'object' && enObj[key][i] !== null) {
                    if (!targetObj[key][i] || typeof targetObj[key][i] !== 'object') {
                        targetObj[key][i] = {};
                    }
                    const nestedUpdated = await processObject(enObj[key][i], targetObj[key][i], targetLang);
                    if (nestedUpdated) updated = true;
                } else if (typeof enObj[key][i] === 'string') {
                    if (targetObj[key][i] === undefined || targetObj[key][i] === '') {
                        console.log(`Translating [${targetLang}] key: ${key}[${i}]`);
                        targetObj[key][i] = await translateText(enObj[key][i], targetLang);
                        updated = true;
                    }
                }
            }
        } else if (typeof enObj[key] === 'object' && enObj[key] !== null) {
            if (!targetObj[key] || typeof targetObj[key] !== 'object') {
                targetObj[key] = {};
            }
            const nestedUpdated = await processObject(enObj[key], targetObj[key], targetLang);
            if (nestedUpdated) updated = true;
        } else if (typeof enObj[key] === 'string') {
            if (targetObj[key] === undefined || targetObj[key] === '') {
                console.log(`Translating [${targetLang}] key: ${key}`);
                targetObj[key] = await translateText(enObj[key], targetLang);
                updated = true;
            }
        } else {
            // Numbers, booleans
            if (targetObj[key] === undefined) {
                targetObj[key] = enObj[key];
                updated = true;
            }
        }
    }
    return updated;
}

async function run() {
    const enPath = path.join(localesDirAP, 'en.json');
    if (!fs.existsSync(enPath)) {
        console.error("en.json not found in AP!");
        return;
    }
    const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
    
    for (const lang of targetLangs) {
        const targetPath = path.join(localesDirAP, `${lang}.json`);
        let targetData = {};
        if (fs.existsSync(targetPath)) {
            targetData = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
        }
        
        console.log(`\nProcessing language: ${lang}`);
        const isUpdated = await processObject(enData, targetData, lang);
        
        if (isUpdated) {
            fs.writeFileSync(targetPath, JSON.stringify(targetData, null, 2), 'utf8');
            console.log(`Updated ${lang}.json in AP`);
        } else {
            console.log(`No missing keys for ${lang}`);
        }
    }
    
    // Copy to EP
    console.log("\nCopying locales to EP...");
    if (!fs.existsSync(localesDirEP)) {
        fs.mkdirSync(localesDirEP, { recursive: true });
    }
    ['en', 'es', 'fr', 'zh-TW'].forEach(lang => {
        const apFile = path.join(localesDirAP, `${lang}.json`);
        const epFile = path.join(localesDirEP, `${lang}.json`);
        if (fs.existsSync(apFile)) {
            fs.copyFileSync(apFile, epFile);
            console.log(`Copied ${lang}.json to EP`);
        }
    });
    console.log("Done.");
}

run().catch(console.error);
