const fs = require('fs');
const path = require('path');

const imgDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/taobao/spouted-foil-pouch';
const metaPath = '/Users/ryanmacmini/.gemini/antigravity/brain/8cd76c48-d262-4032-a405-d8c6e80ad5f9/.system_generated/steps/54/output.txt';

// 1. Get files in imgDir
const files = fs.readdirSync(imgDir).filter(f => !f.startsWith('.'));

// Helper to find exact file for a hash
function findImageFile(hash) {
  // First search for webp
  const webpFile = files.find(f => f.startsWith(hash) && f.endsWith('.webp') && !f.includes('q50'));
  if (webpFile) return webpFile;
  // Then search for any match
  const anyFile = files.find(f => f.startsWith(hash) && !f.includes('q50'));
  return anyFile;
}

// 2. Parse the subagent's Tmall metadata output
const metaContent = fs.readFileSync(metaPath, 'utf8');
const jsonMatch = metaContent.match(/```json\n([\s\S]+?)\n```/);
if (!jsonMatch) {
  console.log("Could not find JSON in output.txt");
  process.exit(1);
}

const data = JSON.parse(jsonMatch[1]);
const values = data.props[0].values;

console.log(`Parsed ${values.length} SKU values from metadata.`);

// 3. Build image list
// We want hero first, then video thumbnail, then SKU images
const heroImage = "O1CN01AwQEko2DvNFl3p6FD_--0-item_pic-jpg_.webp";
const videoThumb = "O1CN01IYiAkC22YVREOdMQL_--6000000007132-0-tbvideo.jpg";

const imageList = [];
imageList.push(`/taobao/spouted-foil-pouch/${heroImage}`);

// We will add all other illustrations that were in the original productData.ts so we don't lose them!
const originalIllustrations = [
  '/imgs/pouch-shape/ads/a_achieve_pack_spout_pouch_closeup_5874382.webp',
  '/imgs/illustrated/a_achievepack_spout_pouches_1062736.webp',
  '/imgs/function/spout/a_detail_spout_cap_2155787.webp',
  '/imgs/store/closure/spout.webp'
];

// Add SKU images and record their indices
const skuToImageFile = {};
const skuToImageIndex = {};

values.forEach(v => {
  const alicdnUrl = v.image;
  // Extract hash, e.g. "O1CN01xoNpZp2DvN4a4POXK" from "https://gw.alicdn.com/bao/uploaded/i4/2211902278671/O1CN01xoNpZp2DvN4a4POXK_!!2211902278671.jpg"
  const urlParts = alicdnUrl.split('/');
  const fileNameWithStamp = urlParts[urlParts.length - 1];
  const hash = fileNameWithStamp.split('_!!')[0].split('_--')[0];
  
  const localFile = findImageFile(hash);
  if (localFile) {
    skuToImageFile[v.name] = localFile;
    const pathInPublic = `/taobao/spouted-foil-pouch/${localFile}`;
    
    let idx = imageList.indexOf(pathInPublic);
    if (idx === -1) {
      imageList.push(pathInPublic);
      idx = imageList.length - 1;
    }
    skuToImageIndex[v.name] = idx;
  } else {
    console.log(`Warning: could not find local image for hash ${hash} (SKU: ${v.name})`);
    skuToImageIndex[v.name] = 0; // fallback to hero
  }
});

// Append original illustrations at the end
originalIllustrations.forEach(ill => {
  if (!imageList.includes(ill)) {
    imageList.push(ill);
  }
});

console.log("Images list count:", imageList.length);

// 4. Build Size Variants with converted USD prices
// Tmall 100-pack discount price or original price
// We will convert RMB discount price to realistic USD price (approx 7.0 exchange rate with markups)
const nameMap = {
  "50ml【斜嘴】": { label: "Foil - 50ml Slanted Spout (70×110+20mm)", dim: "70 × 110 + 20 mm", price: 0.32 },
  "100ml【小嘴】": { label: "Foil - 100ml Small Spout (80×130+25mm)", dim: "80 × 130 + 25 mm", price: 0.35 },
  "150ml【小嘴】": { label: "Foil - 150ml Small Spout (90×140+25mm)", dim: "90 × 140 + 25 mm", price: 0.38 },
  "200ml【小嘴】": { label: "Foil - 200ml Small Spout (100×150+30mm)", dim: "100 × 150 + 30 mm", price: 0.40 },
  "200ml【大嘴】": { label: "Foil - 200ml Large Spout (100×150+30mm)", dim: "100 × 150 + 30 mm", price: 0.42 },
  "250ml【小嘴】": { label: "Foil - 250ml Small Spout (100×160+30mm)", dim: "100 × 160 + 30 mm", price: 0.42 },
  "250ml【大嘴】": { label: "Foil - 250ml Large Spout (100×160+30mm)", dim: "100 × 160 + 30 mm", price: 0.45 },
  "300ml【小嘴】": { label: "Foil - 300ml Small Spout (110×170+30mm)", dim: "110 × 170 + 30 mm", price: 0.45 },
  "300ml【大嘴】": { label: "Foil - 300ml Large Spout (110×170+30mm)", dim: "110 × 170 + 30 mm", price: 0.48 },
  "380ml【小嘴】": { label: "Foil - 380ml Small Spout (120×180+35mm)", dim: "120 × 180 + 35 mm", price: 0.48 },
  "380ml【大嘴】": { label: "Foil - 380ml Large Spout (120×180+35mm)", dim: "120 × 180 + 35 mm", price: 0.52 },
  "500ml【小嘴】": { label: "Foil - 500ml Small Spout (130×200+40mm)", dim: "130 × 200 + 40 mm", price: 0.52 },
  "500ml【中嘴】": { label: "Foil - 500ml Medium Spout (130×200+40mm)", dim: "130 × 200 + 40 mm", price: 0.55 },
  "500ml【斜嘴】": { label: "Foil - 500ml Slanted Spout (130×200+40mm)", dim: "130 × 200 + 40 mm", price: 0.58 },
  "1000ml【斜嘴】": { label: "Foil - 1L Slanted Spout (160×250+45mm)", dim: "160 × 250 + 45 mm", price: 0.72 },
  "1500ml【斜嘴】": { label: "Foil - 1.5L Slanted Spout (180×280+50mm)", dim: "180 × 280 + 50 mm", price: 0.85 },
  "2000ml【斜嘴】": { label: "Foil - 2L Slanted Spout (200×300+50mm)", dim: "200 × 300 + 50 mm", price: 0.98 },
  "加厚1L【斜嘴1.6口】带提手": { label: "Foil Heavy-Duty - 1L Slanted Spout with Handle (1.6cm spout)", dim: "160 × 260 + 45 mm", price: 1.19 },
  "加厚1L【斜嘴2.2口】带提手": { label: "Foil Heavy-Duty - 1L Slanted Spout with Handle (2.2cm spout)", dim: "160 × 260 + 45 mm", price: 1.32 },
  "加厚1.5L【斜嘴】带提手3斤": { label: "Foil Heavy-Duty - 1.5L Slanted Spout with Handle", dim: "180 × 300 + 50 mm", price: 1.40 },
  "加厚2.5L【小嘴】带提手5斤": { label: "Foil Heavy-Duty - 2.5L Small Spout with Handle", dim: "220 × 320 + 60 mm", price: 1.74 },
  "加厚2.5L【大嘴】带提手5斤": { label: "Foil Heavy-Duty - 2.5L Large Spout with Handle", dim: "220 × 320 + 60 mm", price: 1.95 },
  "加厚5L【小嘴】带提手10斤": { label: "Foil Heavy-Duty - 5L Small Spout with Handle", dim: "300 × 400 + 80 mm", price: 2.83 },
  "加厚5L【大嘴】带提手10斤": { label: "Foil Heavy-Duty - 5L Large Spout with Handle", dim: "300 × 400 + 80 mm", price: 3.00 },
  "加厚10L【大嘴】带提手20斤": { label: "Foil Heavy-Duty - 10L Large Spout with Handle", dim: "400 × 500 + 100 mm", price: 4.13 },
  "加厚富氢水5L【小嘴】带提手10斤": { label: "Hydrogen Water - 5L Small Spout & Handle (Pure Aluminum)", dim: "300 × 400 + 80 mm", price: 3.17 },
  "加厚富氢水5L【无嘴带水龙头】10斤": { label: "Hydrogen Water - 5L with Spigot/Faucet (Pure Aluminum)", dim: "300 × 400 + 80 mm", price: 5.23 },
  "加厚富氢水5L【小嘴】【带水龙头】10斤": { label: "Hydrogen Water - 5L Small Spout & Spigot & Handle", dim: "300 × 400 + 80 mm", price: 5.57 },
  "铝箔汤袋（500ml）1.6口径": { label: "Foil - 500ml Soup Bag (1.6cm Caliber)", dim: "130 × 200 + 40 mm", price: 0.55 },
  "乳白汤袋（500ml）1.6口径": { label: "Milky White - 500ml Soup Bag (1.6cm Caliber)", dim: "130 × 200 + 40 mm", price: 0.45 },
  "定制拍此": { label: "Custom Spouted Foil Pouch Sample / Setup", dim: "Custom Size", price: 1.00 }
};

const sizeVariants = [];
Object.keys(nameMap).forEach((metaName) => {
  const conf = nameMap[metaName];
  const imgIdx = skuToImageIndex[metaName] !== undefined ? skuToImageIndex[metaName] : 0;
  
  // Create safe ID, e.g. "foil-50ml-slanted" or similar
  const safeId = metaName
    .replace(/[【】]/g, '-')
    .replace(/（/g, '-')
    .replace(/）/g, '')
    .replace(/【|】|（|）/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9.-]/g, ''); // We can customize this or map manually

  // Let's use a nice short safe ID mapping
  let id = 'foil-';
  if (metaName.startsWith('50ml')) id += '50ml-slanted';
  else if (metaName.startsWith('100ml')) id += '100ml';
  else if (metaName.startsWith('150ml')) id += '150ml';
  else if (metaName.startsWith('200ml【小嘴】')) id += '200ml-small-spout';
  else if (metaName.startsWith('200ml【大嘴】')) id += '200ml-large-spout';
  else if (metaName.startsWith('250ml【小嘴】')) id += '250ml-small-spout';
  else if (metaName.startsWith('250ml【大嘴】')) id += '250ml-large-spout';
  else if (metaName.startsWith('300ml【小嘴】')) id += '300ml-small-spout';
  else if (metaName.startsWith('300ml【大嘴】')) id += '300ml-large-spout';
  else if (metaName.startsWith('380ml【小嘴】')) id += '380ml-small-spout';
  else if (metaName.startsWith('380ml【大嘴】')) id += '380ml-large-spout';
  else if (metaName.startsWith('500ml【小嘴】')) id += '500ml-small-spout';
  else if (metaName.startsWith('500ml【中嘴】')) id += '500ml-medium-spout';
  else if (metaName.startsWith('500ml【斜嘴】')) id += '500ml-slanted-spout';
  else if (metaName.startsWith('1000ml')) id += '1000ml-slanted-spout';
  else if (metaName.startsWith('1500ml')) id += '1500ml-slanted-spout';
  else if (metaName.startsWith('2000ml')) id += '2000ml-slanted-spout';
  else if (metaName.includes('加厚1L【斜嘴1.6口】')) id += 'heavy-1l-slanted-1.6';
  else if (metaName.includes('加厚1L【斜嘴2.2口】')) id += 'heavy-1l-slanted-2.2';
  else if (metaName.includes('加厚1.5L')) id += 'heavy-1.5l-slanted';
  else if (metaName.includes('加厚2.5L【小嘴】')) id += 'heavy-2.5l-small';
  else if (metaName.includes('加厚2.5L【大嘴】')) id += 'heavy-2.5l-large';
  else if (metaName.includes('加厚5L【小嘴】')) id += 'heavy-5l-small';
  else if (metaName.includes('加厚5L【大嘴】')) id += 'heavy-5l-large';
  else if (metaName.includes('加厚10L')) id += 'heavy-10l-large';
  else if (metaName.includes('富氢水5L【小嘴】带提手')) id += 'hydrogen-5l-small';
  else if (metaName.includes('富氢水5L【无嘴带水龙头】')) id += 'hydrogen-5l-spigot';
  else if (metaName.includes('富氢水5L【小嘴】【带水龙头】')) id += 'hydrogen-5l-small-spigot';
  else if (metaName.includes('铝箔汤袋（500ml）')) id += 'soup-500ml-foil';
  else if (metaName.includes('乳白汤袋（500ml）')) id += 'soup-500ml-milky';
  else id += 'custom-bespoke';

  sizeVariants.push({
    id,
    label: conf.label,
    dimensions: conf.dim,
    hasHole: false,
    quantity: 100,
    totalPrice: parseFloat((conf.price * 100).toFixed(2)),
    unitPrice: conf.price,
    heroImageIndex: imgIdx
  });
});

console.log("Size Variants Count:", sizeVariants.length);

// Write code output to a file so we can view/use it directly
const codeOutput = `
// IMAGES ARRAY FOR spouted-foil-pouch
images: ${JSON.stringify(imageList, null, 2)},

// SIZE VARIANTS ARRAY FOR spouted-foil-pouch
sizeVariants: ${JSON.stringify(sizeVariants, null, 2)},
`;

fs.writeFileSync(path.join(__dirname, 'generated-pouch-data.ts'), codeOutput);
console.log("Successfully generated generated-pouch-data.ts");
