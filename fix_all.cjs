const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let changed = false;
    
    // Fix ease: 'easeOut'
    if (content.match(/ease:\s*['"]easeOut['"]/g)) {
        content = content.replace(/ease:\s*['"]easeOut['"]/g, 'ease: "easeOut" as const');
        changed = true;
    }
    
    // Fix ease: 'easeIn'
    if (content.match(/ease:\s*['"]easeIn['"]/g)) {
        content = content.replace(/ease:\s*['"]easeIn['"]/g, 'ease: "easeIn" as const');
        changed = true;
    }
    
    // Fix type: 'spring'
    if (content.match(/type:\s*['"]spring['"]/g)) {
        content = content.replace(/type:\s*['"]spring['"]/g, 'type: "spring" as const');
        changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed', filePath);
    }
  }
});
