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

const txtFiles = [];

const taobaoDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/taobao';

if (fs.existsSync(taobaoDir)) {
  walkDir(taobaoDir, (filePath) => {
    if (filePath.endsWith('.txt')) {
      txtFiles.push(filePath);
    }
  });
}

console.log(`Found ${txtFiles.length} .txt files in public/taobao:`);
txtFiles.forEach(f => {
  console.log(`- ${f.replace(taobaoDir, '')}`);
});
