const fs = require('fs');
const path = require('path');

const topicsDir = path.join(__dirname, 'src/pages/topics');
const topics = fs.readdirSync(topicsDir);

for (const topic of topics) {
  if (topic.endsWith('.tsx')) {
    const pagePath = path.join(topicsDir, topic);
    let content = fs.readFileSync(pagePath, 'utf8');
    if (content.includes('${slug}') && !content.includes('const slug =')) {
      const match = content.match(/export default function[^{]+\{\s*/);
      if (match) {
        const slugValue = topic.replace('.tsx', '');
        const replacement = `${match[0]}\n  const slug = '${slugValue}';\n`;
        content = content.replace(match[0], replacement);
        fs.writeFileSync(pagePath, content, 'utf8');
        console.log(`Fixed ${topic}`);
      }
    }
  }
}
