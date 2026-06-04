const fs = require('fs');
const path = require('path');

const projectDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack';
const brainDir = '/Users/ryanmacmini/.gemini/antigravity/brain/7d78f957-11db-4b8f-9be8-5abef52a5bec';
const publicHerosDir = path.join(projectDir, 'public/imgs/blog/heros');
const resultsMdPath = path.join(brainDir, 'image_gen_results.md');

const batch3Slugs = [
  'custom-sachet-filling-and-sealing',
  'compostable-flat-bottom-bags',
  'high-barrier-compostable-films',
  'compostable-stand-up-pouches-with-spout',
  'custom-printed-sachet-packaging-wholesale',
  'stand-up-pouch-dimensions-for-6-oz',
  'compostable-high-barrier-film-suppliers',
  'sustainable-flat-bottom-pouch-sizes',
  'stand-up-pouch-2-oz-size-chart',
  'eco-friendly-digital-print-bags',
  'powder-proof-zipper-pouch',
  'custom-shape-pouches-for-liquids',
  'industrial-compostable-guide',
  'freezer-safe-vacuum-packaging',
  'stand-up-pouch-4-oz-dimensions'
];

let addedCount = 0;

// 1. Copy images
batch3Slugs.forEach(slug => {
  const src = path.join(publicHerosDir, `${slug}-hero.png`);
  const dest = path.join(brainDir, `${slug}-hero.png`);
  if (fs.existsSync(src)) {
    // Only copy if file is modified today
    const stats = fs.statSync(src);
    const cutoffTime = new Date('2026-06-05T00:00:00+08:00');
    if (stats.mtime >= cutoffTime) {
      fs.copyFileSync(src, dest);
      console.log(`Copied new ${slug}-hero.png to brain directory.`);
      addedCount++;
    }
  }
});

// 2. Append to image_gen_results.md if we copied new files
if (addedCount > 0) {
  let resultsMd = fs.readFileSync(resultsMdPath, 'utf8');
  
  if (!resultsMd.includes('## Batch 3 Results')) {
    let batch3Content = '\n\n## Batch 3 Results (Images 31–45)\nRandomized mix of sustainable barrier mockups, retail displays, and technical cutaways:\n\n';
    
    batch3Slugs.forEach(slug => {
      const dest = path.join(brainDir, `${slug}-hero.png`);
      if (fs.existsSync(dest)) {
        batch3Content += `### ${slug}\n![${slug}](/Users/ryanmacmini/.gemini/antigravity/brain/7d78f957-11db-4b8f-9be8-5abef52a5bec/${slug}-hero.png)\n\n`;
      }
    });
    
    fs.writeFileSync(resultsMdPath, resultsMd + batch3Content, 'utf8');
    console.log('Updated image_gen_results.md with Batch 3 images.');
  } else {
    // Replace Batch 3 section to update any newly added images
    let parts = resultsMd.split('## Batch 3 Results (Images 31–45)');
    let batch3Content = '\nMore randomized mix of sustainable barrier mockups, retail displays, and technical cutaways:\n\n';
    
    batch3Slugs.forEach(slug => {
      const dest = path.join(brainDir, `${slug}-hero.png`);
      if (fs.existsSync(dest)) {
        batch3Content += `### ${slug}\n![${slug}](/Users/ryanmacmini/.gemini/antigravity/brain/7d78f957-11db-4b8f-9be8-5abef52a5bec/${slug}-hero.png)\n\n`;
      }
    });
    
    fs.writeFileSync(resultsMdPath, parts[0] + '## Batch 3 Results (Images 31–45)' + batch3Content, 'utf8');
    console.log('Refreshed Batch 3 images in image_gen_results.md.');
  }
}
