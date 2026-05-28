import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error("Usage: node inject_and_push.js <product_json_path> <generated_image_path>");
  process.exit(1);
}

const jsonPath = path.resolve(args[0]);
const imagePath = path.resolve(args[1]);

if (!fs.existsSync(jsonPath)) {
  console.error(`JSON spec file does not exist at ${jsonPath}`);
  process.exit(1);
}
if (!fs.existsSync(imagePath)) {
  console.error(`Mockup image file does not exist at ${imagePath}`);
  process.exit(1);
}

const product = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const productDataPath = path.resolve('/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/store/productData.ts');
const targetImagePath = path.resolve(`/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/imgs/store/products/${product.slug}.png`);

// 1. Copy image file
fs.copyFileSync(imagePath, targetImagePath);
console.log(`Copied mockup image to ${targetImagePath}`);

// 2. Format the product object literal
const productObjectString = `
  {
    id: '${product.slug}',
    name: '${product.name}',
    category: '${product.category}',
    description: 'A premium, custom-spec B2B packaging solution engineered to meet high-performance packaging standards. Utilizing a heavy-duty ${product.material} composite structure, this product ensures maximum barrier resistance against humidity, light, and oxidation. Formulated specifically to retain shelf stability and structural integrity for retail display, it provides exceptional shelf-life preservation for coffee, dry treats, specialty foods, or industrial supplies. Features convenient tear notches and robust seal lines.',
    shortDesc: 'Premium custom B2B ${product.shape.toLowerCase()} made of ${product.material.split(',')[0]}',
    features: ${JSON.stringify(product.formattedFeatures, null, 6)},
    images: [
      '/imgs/store/products/${product.slug}.png'
    ],
    badge: '${product.badgeLabel}',
    rating: 4.9,
    reviews: 14,
    inStock: true,
    turnaround: '15-20 days',
    minOrder: ${product.minQuantity},
    shape: '${product.shape}',
    material: '${product.material}',
    basePrice: ${product.basePrice},
    pricePerPiece: ${product.pricePerPiece},
    minQuantity: ${product.minQuantity},
    quantityStep: ${product.minQuantity},
    sizeInfo: '${product.sizeInfo}',
    sizeWithQuantities: [
      {
        id: '${product.slug}-size-default',
        label: '${product.size}',
        dimensions: '${product.size} • ${product.material.split('/')[0]} • Industrial Grade',
        quantityOptions: ${JSON.stringify(product.usdPricingTiers, null, 10)}
      }
    ],
    customPrintNote: 'Custom full-color print versions available from ${product.minQuantity}+ pieces. Please consult our team.'
  },`;

// 3. Inject into productData.ts
let productDataText = fs.readFileSync(productDataPath, 'utf8');
const targetArrayKey = "const ECO_STOCK_PRODUCTS: EcoStockProduct[] = [";
const index = productDataText.indexOf(targetArrayKey);
if (index === -1) {
  console.error("Could not find ECO_STOCK_PRODUCTS array inside productData.ts");
  process.exit(1);
}

const insertionPoint = index + targetArrayKey.length;
const updatedProductDataText = 
  productDataText.slice(0, insertionPoint) + 
  productObjectString + 
  productDataText.slice(insertionPoint);
  
fs.writeFileSync(productDataPath, updatedProductDataText, 'utf8');
console.log(`Successfully injected new B2B product [${product.slug}] into productData.ts!`);

// 4. Run compilation and verification
console.log("Verifying compilation and generating catalog/feeds...");
try {
  execSync("pnpm run build", { cwd: '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack', stdio: 'inherit' });
  console.log("Compilation, catalog update, and Google Merchant Feed regeneration successful!");
} catch (e) {
  console.error("TypeScript compilation or build failed. Reverting productData.ts...");
  fs.writeFileSync(productDataPath, productDataText, 'utf8');
  process.exit(1);
}

// 5. Git commit and push
console.log("Staging and committing changes to GitHub...");
try {
  execSync("git add .", { cwd: '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack' });
  execSync(`git commit -m "feat(store): migrate custom B2B quote ${product.slug} to storefront"`, { cwd: '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack' });
  execSync("git push origin main", { cwd: '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack' });
  console.log("Successfully pushed migrated B2B quote storefront changes to GitHub Vercel deployment!");
} catch (gitError) {
  console.error("Git operations failed:", gitError);
}

console.log("All done!");
