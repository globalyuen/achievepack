const fs = require('fs');
const path = require('path');

const imgDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/taobao/spouted-foil-pouch';
const metaDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/taobao/纯铝箔吸嘴袋富氢水液体分装袋加厚豆浆袋啤酒果汁汤袋外卖打包袋-tmall.com天猫';

const imgFiles = fs.readdirSync(imgDir).filter(f => !f.startsWith('.') && (f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.png')));
const metaFiles = fs.readdirSync(metaDir).filter(f => f.endsWith('.txt'));

console.log(`Found ${imgFiles.length} image files and ${metaFiles.length} metadata text files.`);

imgFiles.forEach(img => {
  // Extract base hash/name
  let hash = img;
  if (img.includes('--')) {
    hash = img.split('--')[0];
  } else if (img.includes('_--')) {
    hash = img.split('_--')[0];
  } else {
    hash = img.split('.')[0];
  }
  hash = hash.replace(/-livephoto-_/, '').replace(/_q50/, '').replace(/-jpg_$/, '').replace(/-jpg_q50-jpg_$/, '');

  const matches = [];
  metaFiles.forEach(meta => {
    const content = fs.readFileSync(path.join(metaDir, meta), 'utf8');
    if (content.toLowerCase().includes(hash.toLowerCase())) {
      matches.push(meta);
    }
  });

  if (matches.length > 0) {
    console.log(`Image: ${img} (Hash: ${hash}) found in:`, matches);
  }
});
