const fs = require('fs');
const path = require('path');
const glob = require('glob');

const projectRoot = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack';
const publicDir = path.join(projectRoot, 'public');

const files = glob.sync('src/pages/{topics,pouch/topics}/**/*.tsx', { cwd: projectRoot });

let brokenImages = [];

files.forEach(file => {
  const absoluteFile = path.join(projectRoot, file);
  const content = fs.readFileSync(absoluteFile, 'utf8');
  // Match strings like "/imgs/..." or '/imgs/...'
  const imgRegex = /["'](\/imgs\/[^"']+)["']/g;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const imgPath = match[1];
    const absolutePath = path.join(publicDir, imgPath);
    if (!fs.existsSync(absolutePath)) {
      brokenImages.push({
        file: file,
        imgPath: imgPath
      });
    }
  }
});

if (brokenImages.length > 0) {
  console.log(JSON.stringify(brokenImages, null, 2));
} else {
  console.log('[]');
}
