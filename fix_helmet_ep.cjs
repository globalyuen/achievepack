const fs = require('fs');
const path = require('path');

const dir = '../../pouch-eco-website/src/app/topics';

function processDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('page.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('<Helmet>')) {
        // Extract title and description from Helmet if possible
        let titleMatch = content.match(/<title>(.*?)<\/title>/);
        let descMatch = content.match(/<meta\s+name="description"\s+content="([^"]+)"/);
        
        let title = titleMatch ? titleMatch[1] : '';
        let desc = descMatch ? descMatch[1] : '';

        // Remove helmet import
        content = content.replace(/import { Helmet } from 'react-helmet-async';\n/, '');
        // Remove helmet usage block
        content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/, '');

        // Add Metadata
        const metadataStr = `\nimport type { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: ${JSON.stringify(title)},\n  description: ${JSON.stringify(desc)},\n};\n`;
        
        // Add metadata after the last import
        const lastImportIndex = content.lastIndexOf('import ');
        const endOfLastImport = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, endOfLastImport + 1) + metadataStr + content.slice(endOfLastImport + 1);

        fs.writeFileSync(fullPath, content);
        console.log(`Fixed Helmet in ${fullPath}`);
      }
    }
  }
}

processDir(dir);
