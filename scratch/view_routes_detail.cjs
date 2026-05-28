const fs = require('fs');
const path = require('path');

const mainPath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/main.tsx';

if (fs.existsSync(mainPath)) {
  const content = fs.readFileSync(mainPath, 'utf8');
  const lines = content.split('\n');
  
  const routes = [
    '/function/carbon-neutral-bags',
    '/function/spout-pouches-juice',
    '/function/rice-paper-bags',
    '/function/pva-water-soluble-bags',
    '/function/pre-zippered-rollstock',
    '/materials/recyclable-mono-pp'
  ];

  routes.forEach(r => {
    console.log(`\n=== SEARCHING FOR ${r} ===`);
    lines.forEach((line, index) => {
      if (line.includes(r)) {
        console.log(`L${index + 1}: ${line.trim()}`);
        // print next 5 lines
        for (let i = 1; i <= 5; i++) {
          if (lines[index + i]) {
            console.log(`  +${i}: ${lines[index + i].trim()}`);
          }
        }
      }
    });
  });
}
