const fs = require('fs');

const dataFileContent = fs.readFileSync('/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/scratch/generated-pouch-data.ts', 'utf8');

// Parse sizeVariants from code string
const variantsMatch = dataFileContent.match(/sizeVariants:\s*(\[[\s\S]*?\]),/);
if (!variantsMatch) {
  console.log("Could not find sizeVariants in generated-pouch-data.ts");
  process.exit(1);
}

const sizeVariants = eval(variantsMatch[1]);
console.log(`Loaded ${sizeVariants.length} variants.`);

const ocrContent = fs.readFileSync('/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/scratch/ocr-results.txt', 'utf8');

const blocks = ocrContent.split('=== FILE: ');
const fileToOcr = {};
blocks.forEach(block => {
  if (!block.trim()) return;
  const lines = block.split('\n');
  const filename = lines[0].replace(' ===', '').trim();
  fileToOcr[filename] = block;
});

// For each variant, look up its hero image index from image array
const imageListMatch = dataFileContent.match(/images:\s*(\[[\s\S]*?\]),/);
const imageList = eval(imageListMatch[1]);

sizeVariants.forEach(v => {
  const imgPath = imageList[v.heroImageIndex];
  if (!imgPath) {
    console.log(`Variant ${v.id} (${v.label}) has no image at index ${v.heroImageIndex}`);
    return;
  }
  const imgName = imgPath.split('/').pop();
  const ocr = fileToOcr[imgName] || fileToOcr[imgName + '.webp'] || '';
  
  // Find "尺寸" and "容量" in OCR
  const ocrLines = ocr.split('\n').filter(l => l.includes('尺寸') || l.includes('容量') || l.includes('嘴内径') || l.includes('口径'));
  
  console.log(`\nID: ${v.id}`);
  console.log(`  Label:       ${v.label}`);
  console.log(`  Current Dim: ${v.dimensions}`);
  console.log(`  Hero Image:  ${imgName} (index ${v.heroImageIndex})`);
  console.log(`  OCR Text:    ${ocrLines.join(' | ') || 'None'}`);
});
