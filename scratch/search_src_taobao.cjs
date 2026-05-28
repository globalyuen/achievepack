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

const taobaoUrls = [];

walkDir('/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack', (filePath) => {
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx') || filePath.endsWith('.json') || filePath.endsWith('.js') || filePath.endsWith('.cjs') || filePath.endsWith('.md')) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const matches = content.match(/https?:\/\/[a-zA-Z0-9\-\.]*(taobao|tmall)\.com[^\s'"`]*/g);
      if (matches) {
        matches.forEach(url => {
          taobaoUrls.push({ file: path.basename(filePath), url });
        });
      }
    } catch (e) {}
  }
});

console.log(`Found ${taobaoUrls.length} matches:`);
taobaoUrls.forEach(m => {
  console.log(`- [${m.file}]: ${m.url}`);
});
