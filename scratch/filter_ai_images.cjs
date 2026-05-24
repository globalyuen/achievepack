const fs = require('fs');
const path = require('path');

const projectRoot = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack';
const aiDir = path.join(projectRoot, 'public/imgs/store/products-ai');
const productDataPath = path.join(projectRoot, 'src/store/productData.ts');

const targetPrefixes = [
  '100-recyclable-pe-wire-cut-zipper-bag',
  '40ml-foil-capsule-and-packing-machine',
  'bottle-shape-sachet-bag',
  'clear-matte-zipper-stand-up-pouch',
  'coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip',
  'eco-custom-label',
  'eco-friendly-kraft-honeycomb-packing-paper-wrap',
  'eco-pla-sealing-sticker',
  'flat-bottom-pouch-tin-tie',
  'flat-bottom-pouch-with-card-insert',
  'flat-bottom-zipper-pouch',
  'retro-horizontal-kraft-food-handle-bag',
  'spouted-foil-pouch',
  'textured-burlap-cork-pattern-coffee-pouch-with-valve',
  'unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch'
];

// Get all generated AI images
const aiFiles = fs.readdirSync(aiDir);
const aiFilesSet = new Set(aiFiles);

// Read productData.ts
let productData = fs.readFileSync(productDataPath, 'utf-8');

const lines = productData.split('\n');
let modified = false;

const newLines = lines.map(line => {
  // Look for image strings like '/imgs/store/products/filename.jpg'
  const match = line.match(/'\/imgs\/store\/products\/([^']+)'/);
  if (match) {
    const filename = match[1];
    
    // Check if it belongs to our target products
    const isTargetProduct = targetPrefixes.some(prefix => filename.startsWith(prefix));
    
    if (isTargetProduct) {
      // If it's a target product, it MUST be in products-ai to be kept
      if (!aiFilesSet.has(filename)) {
        // Comment out this line so it won't show in the store
        modified = true;
        return `// ${line}`;
      }
    }
  }
  return line;
});

if (modified) {
  fs.writeFileSync(productDataPath, newLines.join('\n'));
  console.log('Successfully filtered out old Taobao images from productData.ts!');
} else {
  console.log('No old Taobao images found to filter.');
}
