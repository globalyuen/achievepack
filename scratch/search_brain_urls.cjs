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

const foundUrls = [];

const brainDir = '/Users/ryanmacmini/.gemini/antigravity/brain/6b9d92ab-5fa3-4d49-af71-56cdfdc46ed2';
if (fs.existsSync(brainDir)) {
  walkDir(brainDir, (filePath) => {
    if (filePath.endsWith('.json') || filePath.endsWith('.md')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const matches = content.match(/https?:\/\/[a-zA-Z0-9\-\.]*(taobao|tmall)\.com[^\s'"`]*/g);
        if (matches) {
          matches.forEach(url => {
            foundUrls.push({ file: filePath.replace(brainDir, ''), url });
          });
        }
      } catch (e) {}
    }
  });
}

console.log(`Found ${foundUrls.length} matches:`);
const uniqueMatches = Array.from(new Set(foundUrls.map(JSON.stringify))).map(JSON.parse);
uniqueMatches.forEach(m => {
  console.log(`- [${m.file}]: ${m.url}`);
});
