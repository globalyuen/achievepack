const fs = require('fs');
const path = require('path');

const topicsDir = path.join(__dirname, '../../pouch-eco-website/src/app/topics');
const topics = fs.readdirSync(topicsDir);

for (const topic of topics) {
  const pagePath = path.join(topicsDir, topic, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    if (content.includes('useTranslation()')) {
      content = content.replace(/const { i18n } = useTranslation\(\);\s*const currentLang = i18n\.language \|\| 'en';\s*const tLocal = localTranslations\[currentLang as keyof typeof localTranslations\] \|\| localTranslations\.en;\s*const isPouchDomain = getDomain\(\) === 'pouch';/g, 
        `const tLocal = localTranslations.en;\n  const isPouchDomain = true;`);
      
      content = content.replace(/import \{ useTranslation \} from 'react-i18next';\n/g, '');
      content = content.replace(/import \{ getDomain \} from '\.\.\/\.\.\/utils\/domain';\n/g, '');

      fs.writeFileSync(pagePath, content, 'utf8');
      console.log(`Fixed ${topic}`);
    }
  }
}
