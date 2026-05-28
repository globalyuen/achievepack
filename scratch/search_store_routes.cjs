const fs = require('fs');

const mainPath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/main.tsx';
const routesPath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/routes/index.tsx';

function checkFile(filePath) {
  if (fs.existsSync(filePath)) {
    console.log(`Checking ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      if (line.includes('product') || line.includes('store') || line.includes('/:')) {
        console.log(`  L${index + 1}: ${line.trim()}`);
      }
    });
  }
}

checkFile(mainPath);
checkFile(routesPath);
