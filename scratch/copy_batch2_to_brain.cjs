const fs = require('fs');
const path = require('path');

const projectDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack';
const brainDir = '/Users/ryanmacmini/.gemini/antigravity/brain/7d78f957-11db-4b8f-9be8-5abef52a5bec';
const publicHerosDir = path.join(projectDir, 'public/imgs/blog/heros');
const resultsMdPath = path.join(brainDir, 'image_gen_results.md');

const batch2Slugs = [
  'custom-compostable-pouch-suppliers-guide',
  'custom-printed-materials-guide',
  'usa-compostable-packaging-guide',
  'low-moq-packaging-guide',
  'organic-compliance-support-guide',
  'low-moq-startup-packaging-guide',
  'stamp-foil-recyclability',
  'eco-friendly-pouch-sizes-chart',
  'sustainable-sachet-packaging-solutions',
  'recyclable-stand-up-pouch-with-spout',
  'small-batch-custom-pouch-printing',
  'custom-digital-printed-sachets',
  'barrier-film-flexible-packaging-wholesale',
  'mono-material-recyclable-pouches',
  'pouch-packaging-for-liquids-compostable'
];

// 1. Copy images
batch2Slugs.forEach(slug => {
  const src = path.join(publicHerosDir, `${slug}-hero.png`);
  const dest = path.join(brainDir, `${slug}-hero.png`);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${slug}-hero.png to brain directory.`);
  } else {
    console.error(`Source file not found: ${src}`);
  }
});

// 2. Append to image_gen_results.md
let resultsMd = fs.readFileSync(resultsMdPath, 'utf8');

// If Batch 2 section is already there, don't duplicate
if (!resultsMd.includes('## Batch 2 Results')) {
  let batch2Content = '\n\n## Batch 2 Results (Images 16–30)\nMore premium mockups, supermarket shelf use cases, and structural infographics:\n\n';
  
  batch2Slugs.forEach(slug => {
    batch2Content += `### ${slug}\n![${slug}](/Users/ryanmacmini/.gemini/antigravity/brain/7d78f957-11db-4b8f-9be8-5abef52a5bec/${slug}-hero.png)\n\n`;
  });
  
  fs.writeFileSync(resultsMdPath, resultsMd + batch2Content, 'utf8');
  console.log('Updated image_gen_results.md with Batch 2 images.');
} else {
  console.log('Batch 2 already exists in image_gen_results.md.');
}
