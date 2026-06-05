import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const herosDir = path.resolve(__dirname, '../public/imgs/blog/heros');

const fallbackMap = {
  coffee: 'usa-coffee-packaging-hero.png',
  sachet: 'custom-printed-sachet-packaging-wholesale-hero.png',
  kraft: 'home-compostable-guide-hero.png',
  paper: 'home-compostable-guide-hero.png',
  baby: 'compostable-pouch-with-spout-for-beverages-hero.png',
  food: 'compostable-pouch-with-spout-for-beverages-hero.png',
  nuts: 'wholesale-prices-for-compostable-pouches-hero.png',
  flat: 'compostable-flat-bottom-bags-hero.png',
  default: 'custom-compostable-pouch-suppliers-guide-hero.png'
};

const missingSlugs = [
  'kraft-paper-zipper-doypack',
  'compostable-spouted-baby-puree-bag',
  'curbside-recyclable-coffee-bag',
  'recyclable-high-barrier-nuts-pouch',
  'coffee-packaging-guide',
  'compostable-baby-food-packaging-guide',
  'coffee-degassing-valve-guide',
  'mono-pe-recyclable-food-packaging',
  'eco-friendly-food-packaging-guide',
  'green-coffee-materials-guide',
  'usa-snacks-packaging-guide',
  'recyclable-snack-packaging-guide',
  'biodegradable-barrier-bags-for-coffee',
  'usa-labeling-guide',
  'kraft-stand-up-pouches-with-window',
  'sustainable-packaging-for-pet-food-pouches',
  'coffee-degassing-valve-packaging',
  'recyclable-barrier-sachets-for-coffee',
  'compostable-stand-up-pouches-for-snacks',
  'mono-pe-compostable-sachet-options',
  'compostable-barrier-packaging-for-nuts',
  'compostable-barrier-film-for-snacks',
  'eco-friendly-flat-bottom-pouches-for-pet-food',
  'compostable-retort-pouches-for-baby-food',
  'kraft-paper-stand-up-pouches-custom',
  'compostable-pouch-sourcing-for-snacks',
  'high-barrier-compostable-film-for-nuts'
];

for (const slug of missingSlugs) {
  const destPath = path.join(herosDir, `${slug}-hero.png`);
  if (fs.existsSync(destPath)) {
    console.log(`Skipping existing: ${slug}`);
    continue;
  }
  
  let key = 'default';
  if (slug.includes('coffee')) key = 'coffee';
  else if (slug.includes('sachet')) key = 'sachet';
  else if (slug.includes('kraft') || slug.includes('paper')) key = 'kraft';
  else if (slug.includes('baby') || slug.includes('puree') || slug.includes('food')) key = 'baby';
  else if (slug.includes('nuts')) key = 'nuts';
  else if (slug.includes('flat')) key = 'flat';
  
  const srcFile = fallbackMap[key];
  const srcPath = path.join(herosDir, srcFile);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ Copied fallback [${srcFile}] for [${slug}]`);
  } else {
    console.error(`❌ Source fallback not found: ${srcPath}`);
  }
}
