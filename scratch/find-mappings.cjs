const fs = require('fs');
const path = require('path');

const imgDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/taobao/spouted-foil-pouch';
const metaDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/taobao/纯铝箔吸嘴袋富氢水液体分装袋加厚豆浆袋啤酒果汁汤袋外卖打包袋-tmall.com天猫';

// 1. Get unique hashes
const files = fs.readdirSync(imgDir);
const hashes = new Set();
files.forEach(f => {
  if (f.startsWith('.')) return;
  const ext = path.extname(f);
  if (ext !== '.webp' && ext !== '.jpg' && ext !== '.png') return;
  
  let hash = f;
  if (f.includes('--')) {
    hash = f.split('--')[0];
  } else if (f.includes('_--')) {
    hash = f.split('_--')[0];
  } else {
    hash = f.split('.')[0];
  }
  hash = hash.replace(/-livephoto-_/, '').replace(/_q50/, '').replace(/-jpg_$/, '').replace(/-jpg_q50-jpg_$/, '');
  hashes.add(hash);
});

console.log(`Found ${hashes.size} unique hashes.`);

// 2. Read all text files in metaDir and search for these hashes
const metaFiles = fs.readdirSync(metaDir);
const mappings = {};

metaFiles.forEach(f => {
  if (!f.endsWith('.txt')) return;
  const filePath = path.join(metaDir, f);
  const content = fs.readFileSync(filePath, 'utf8');
  
  hashes.forEach(hash => {
    if (content.includes(hash)) {
      if (!mappings[hash]) mappings[hash] = [];
      mappings[hash].push({
        file: f,
        indexOf: content.indexOf(hash)
      });
    }
  });
});

console.log('Mapping occurrences:');
console.log(JSON.stringify(mappings, null, 2));

// Let's also look for SKU names near the hashes in files if we can find a structured JSON or HTML pattern.
hashes.forEach(hash => {
  if (mappings[hash]) {
    const firstOccur = mappings[hash][0];
    const content = fs.readFileSync(path.join(metaDir, firstOccur.file), 'utf8');
    const idx = firstOccur.indexOf;
    const start = Math.max(0, idx - 300);
    const end = Math.min(content.length, idx + 300);
    console.log(`\n========================================`);
    console.log(`Hash: ${hash} in ${firstOccur.file}`);
    console.log(`Context: ${content.substring(start, end).replace(/\s+/g, ' ')}`);
  }
});
