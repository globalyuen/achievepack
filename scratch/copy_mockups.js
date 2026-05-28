import fs from 'fs';
import path from 'path';

const productsDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/imgs/store/products';

const copies = [
  {
    src: 'compostable-oval-doypack-premium.png',
    dest: 'rice-paper-zipper-bags.png'
  },
  {
    src: 'pe-flat-bottom-premium.png',
    dest: 'flat-bottom-pouches.png'
  },
  {
    src: 'compostable-kraft-premium.png',
    dest: 'compostable-stand-up-pouches.png'
  }
];

copies.forEach(c => {
  const srcPath = path.join(productsDir, c.src);
  const destPath = path.join(productsDir, c.dest);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${c.src} -> ${c.dest}`);
  } else {
    console.error(`Source not found: ${srcPath}`);
  }
});
