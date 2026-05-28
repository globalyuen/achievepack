const fs = require('fs');
const path = require('path');

const baseDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src';

const pages = [
  'pages/function/CarbonNeutralBagsPage.tsx',
  'pages/function/SpoutPouchesJuicePage.tsx',
  'pages/function/RicePaperBagsPage.tsx',
  'pages/function/PVAWaterSolubleBagsPage.tsx',
  'pages/function/PreZipperedRollstockPage.tsx',
  'pages/materials/RecyclableMonoPPPage.tsx'
];

pages.forEach(p => {
  const filePath = path.join(baseDir, p);
  const exists = fs.existsSync(filePath);
  console.log(`Page ${p}: ${exists ? 'EXISTS' : 'MISSING'}`);
  if (exists) {
    const stat = fs.statSync(filePath);
    console.log(`  Size: ${stat.size} bytes`);
  }
});
