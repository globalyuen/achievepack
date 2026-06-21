import fs from 'fs';

const locales = ['en', 'es', 'fr', 'zh-TW'];

locales.forEach(loc => {
  const filePath = `src/locales/${loc}.json`;
  if (!fs.existsSync(filePath)) return;
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (data.seoPages && data.seoPages.pages && data.seoPages.pages.pouchHomePage) {
    data.pouchHomePage = data.seoPages.pages.pouchHomePage;
    // Optional: delete data.seoPages.pages.pouchHomePage;
    // Let's leave the old one just in case, but pouchHomePage is now at the root!
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Updated ${loc}.json`);
});
