const fs = require('fs');
const path = require('path');

const projectRoot = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack';
const publicDir = path.join(projectRoot, 'public');

// Load productData.ts content
const productDataPath = path.join(projectRoot, 'src/store/productData.ts');
const productData = fs.readFileSync(productDataPath, 'utf8');

// Extract the images array for spouted-foil-pouch
// Find the block starting with id: 'spouted-foil-pouch'
const startIdx = productData.indexOf("id: 'spouted-foil-pouch'");
if (startIdx === -1) {
  console.error("Could not find 'spouted-foil-pouch' block in productData.ts");
  process.exit(1);
}

// Find images array block inside
const imagesStartIdx = productData.indexOf("images: [", startIdx);
const imagesEndIdx = productData.indexOf("]", imagesStartIdx);
const imagesBlock = productData.substring(imagesStartIdx, imagesEndIdx + 1);

// Extract the string matches
const matches = imagesBlock.match(/\/taobao\/spouted-foil-pouch\/[^"']+/g) || [];
console.log(`Found ${matches.length} images referenced for spouted-foil-pouch:`);

let missingCount = 0;
matches.forEach((img, idx) => {
  const absPath = path.join(publicDir, img);
  const exists = fs.existsSync(absPath);
  console.log(`[${idx}] ${img} -> ${exists ? '✅ EXISTS' : '❌ MISSING'}`);
  if (!exists) {
    missingCount++;
  }
});

if (missingCount === 0) {
  console.log("\n🎉 Verification Success! All referenced images exist in the public directory!");
} else {
  console.error(`\n❌ Verification Failed! ${missingCount} images are missing!`);
}
