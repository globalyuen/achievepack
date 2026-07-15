const fs = require('fs');
const path = require('path');

const topicsDir = path.join(__dirname, '../../pouch-eco-website/src/app/topics');
const topics = fs.readdirSync(topicsDir);

for (const topic of topics) {
  const pagePath = path.join(topicsDir, topic, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    if (content.includes(' t(') && !content.includes('const t = (')) {
      // Find export default function ...() {
      const match = content.match(/export default function[^{]+\{\s*/);
      if (match) {
        const replacement = `${match[0]}\n  const t = (key: any, fallback: any) => fallback;\n`;
        content = content.replace(match[0], replacement);
        fs.writeFileSync(pagePath, content, 'utf8');
        console.log(`Fixed ${topic}`);
      }
    }
  }
}
