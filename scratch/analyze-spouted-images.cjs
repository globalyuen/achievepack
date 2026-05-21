const fs = require('fs');
const path = require('path');

const dir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/taobao/spouted-foil-pouch';
const files = fs.readdirSync(dir);

const uniqueHashes = new Set();
const images = [];

files.forEach(f => {
  if (f.startsWith('.')) return;
  const ext = path.extname(f);
  if (ext !== '.webp' && ext !== '.jpg' && ext !== '.png') return;
  
  // Extract hash (part before first '--' or '_--' or '.')
  let hash = f;
  if (f.includes('--')) {
    hash = f.split('--')[0];
  } else if (f.includes('_--')) {
    hash = f.split('_--')[0];
  } else {
    hash = f.split('.')[0];
  }
  
  // Clean hash further if it has q50 or rate_li or rating
  hash = hash.replace(/-livephoto-_/, '').replace(/_q50/, '').replace(/-jpg_$/, '').replace(/-jpg_q50-jpg_$/, '');
  
  uniqueHashes.add(hash);
  images.push({ file: f, hash, ext, size: fs.statSync(path.join(dir, f)).size });
});

console.log("Total unique hashes:", uniqueHashes.size);
console.log("Unique hashes list:");
Array.from(uniqueHashes).forEach((h, idx) => {
  console.log(`${idx + 1}: ${h}`);
});
