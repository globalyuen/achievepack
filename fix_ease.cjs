const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let changed = 0;
walkDir('src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    if (content.includes('transition: {') && content.includes('ease: "easeInOut" }')) {
      let newContent = content.replace(/ease:\s*"easeInOut"\s*\}/g, 'ease: "easeInOut" as const }');
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        changed++;
        console.log('Fixed', filePath);
      }
    }
  }
});
console.log(`Updated ${changed} files.`);
