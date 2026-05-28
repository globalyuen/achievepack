const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.git' && f !== '.vercel' && f !== 'dist' && f !== '.agents') {
        walkDir(dirPath, callback);
      }
    } else {
      callback(dirPath);
    }
  });
}

const matches = [];

const keywords = ['八边封', '可回收', 'taobao', '592756875', 'Huitai', '徽太'];

const brainDir = '/Users/ryanmacmini/.gemini/antigravity/brain/6b9d92ab-5fa3-4d49-af71-56cdfdc46ed2';
if (fs.existsSync(brainDir)) {
  walkDir(brainDir, (filePath) => {
    if (filePath.endsWith('.json') || filePath.endsWith('.md')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        keywords.forEach(kw => {
          if (content.includes(kw)) {
            matches.push({ file: filePath, keyword: kw });
          }
        });
      } catch (e) {}
    }
  });
}

console.log(`Found ${matches.length} matches in brain:`);
const uniqueMatches = Array.from(new Set(matches.map(m => m.file)));
uniqueMatches.forEach(f => {
  const kws = matches.filter(m => m.file === f).map(m => m.keyword);
  console.log(`- ${f.replace(brainDir, '')} (Keywords: ${kws.join(', ')})`);
});
