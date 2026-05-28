const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.git' && f !== '.vercel' && f !== 'dist') {
        walkDir(dirPath, callback);
      }
    } else {
      callback(dirPath);
    }
  });
}

const matches = [];

walkDir('/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src', (filePath) => {
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('source') || content.includes('taobao') || content.includes('supplier')) {
        matches.push(filePath);
      }
    } catch (e) {}
  }
});

console.log(`Found ${matches.length} files:`);
matches.forEach(f => {
  console.log(`- ${f}`);
});
