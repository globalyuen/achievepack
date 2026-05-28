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

const searchStr = 'recyclable_fb';

// Search in project dir
const projectDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack';
walkDir(projectDir, (filePath) => {
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx') || filePath.endsWith('.json') || filePath.endsWith('.js') || filePath.endsWith('.cjs') || filePath.endsWith('.md')) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes(searchStr)) {
        matches.push({ file: filePath, source: 'project' });
      }
    } catch (e) {}
  }
});

// Search in brain dir
const brainDir = '/Users/ryanmacmini/.gemini/antigravity/brain/6b9d92ab-5fa3-4d49-af71-56cdfdc46ed2';
if (fs.existsSync(brainDir)) {
  walkDir(brainDir, (filePath) => {
    if (filePath.endsWith('.ts') || filePath.endsWith('.tsx') || filePath.endsWith('.json') || filePath.endsWith('.js') || filePath.endsWith('.cjs') || filePath.endsWith('.md')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes(searchStr)) {
          matches.push({ file: filePath, source: 'brain' });
        }
      } catch (e) {}
    }
  });
}

console.log(`Found ${matches.length} matches:`);
matches.forEach(m => {
  console.log(`- [${m.source}] ${m.file}`);
});
