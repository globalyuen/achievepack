const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

const taobaoDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/taobao';
const foundUrls = [];

if (fs.existsSync(taobaoDir)) {
  walkDir(taobaoDir, (filePath) => {
    if (filePath.endsWith('.txt') || filePath.endsWith('.html') || filePath.endsWith('.htm')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const matches = content.match(/https?:\/\/[a-zA-Z0-9\-\.]*(taobao|tmall)\.com[^\s'"`]*/g);
        if (matches) {
          matches.forEach(url => {
            foundUrls.push({ file: filePath.replace(taobaoDir, ''), url });
          });
        }
      } catch (e) {}
    }
  });
}

console.log(`Found ${foundUrls.length} matches:`);
const uniqueMatches = Array.from(new Set(foundUrls.map(JSON.stringify))).map(JSON.parse);
console.log(uniqueMatches.slice(0, 50));
