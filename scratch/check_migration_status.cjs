const fs = require('fs');
const path = require('path');

const mainPath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/main.tsx';

if (fs.existsSync(mainPath)) {
  const content = fs.readFileSync(mainPath, 'utf8');
  console.log('Read main.tsx');
  
  const routes = [
    '/function/carbon-neutral-bags',
    '/function/spout-pouches-juice',
    '/function/rice-paper-bags',
    '/function/pva-water-soluble-bags',
    '/function/pre-zippered-rollstock',
    '/materials/recyclable-mono-pp'
  ];

  routes.forEach(r => {
    const cleanRoute = r.replace('/', '');
    const exists = content.includes(r) || content.includes(cleanRoute);
    console.log(`Route ${r}: ${exists ? 'EXISTS' : 'MISSING'}`);
  });
} else {
  console.log('main.tsx not found');
}
