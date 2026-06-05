const fs = require('fs');
const path = require('path');

const projectDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack';
const brainDir = '/Users/ryanmacmini/.gemini/antigravity/brain/7d78f957-11db-4b8f-9be8-5abef52a5bec';
const stateFilePath = path.join(projectDir, 'scratch/image_generation_state.json');
const publicHerosDir = path.join(projectDir, 'public/imgs/blog/heros');
const resultsMdPath = path.join(brainDir, 'image_gen_results.md');

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node process_new_image.cjs <slug> <temp_image_path>');
  process.exit(1);
}

const slug = args[0];
const tempImgPath = args[1];

if (!fs.existsSync(tempImgPath)) {
  console.error(`Generated image not found at: ${tempImgPath}`);
  process.exit(1);
}

// 1. Copy image to public directory
const destPublicPath = path.join(publicHerosDir, `${slug}-hero.png`);
fs.copyFileSync(tempImgPath, destPublicPath);
console.log(`Copied image to public: ${destPublicPath}`);

// 2. Copy image to brain directory
const destBrainPath = path.join(brainDir, `${slug}-hero.png`);
fs.copyFileSync(tempImgPath, destBrainPath);
console.log(`Copied image to brain: ${destBrainPath}`);

// 3. Read state JSON to find out completed count
const stateData = JSON.parse(fs.readFileSync(stateFilePath, 'utf8'));
const completedCountBefore = stateData.filter(i => i.status === 'completed').length;

// Determine Batch details
let batchNumber = 4;
let batchRange = '46–60';
if (completedCountBefore >= 60 && completedCountBefore < 75) {
  batchNumber = 5;
  batchRange = '61–75';
} else if (completedCountBefore >= 75 && completedCountBefore < 90) {
  batchNumber = 6;
  batchRange = '76–90';
} else if (completedCountBefore >= 90) {
  batchNumber = 7;
  batchRange = '91–93';
}

const batchHeader = `## Batch ${batchNumber} Results (Images ${batchRange})`;

// Update item status
const item = stateData.find(i => i.slug === slug);
if (item) {
  item.status = 'completed';
  item.processedAt = new Date().toISOString();
  fs.writeFileSync(stateFilePath, JSON.stringify(stateData, null, 2), 'utf8');
  console.log(`Updated state file status for slug: ${slug} (Batch ${batchNumber})`);
} else {
  console.error(`Warning: Slug not found in state file: ${slug}`);
}

// 4. Update image_gen_results.md
let resultsMd = fs.readFileSync(resultsMdPath, 'utf8');

if (!resultsMd.includes(batchHeader)) {
  // If the batch header doesn't exist, append it to the end of the file
  resultsMd += `\n\n${batchHeader}\nRandomized mix of sustainable barrier mockups, retail displays, and technical cutaways:\n\n`;
}

// Check if slug is already in the markdown, if not append it
const slugHeader = `### ${slug}`;
if (!resultsMd.includes(slugHeader)) {
  const imageMarkdown = `\n${slugHeader}\n![${slug}](/Users/ryanmacmini/.gemini/antigravity/brain/7d78f957-11db-4b8f-9be8-5abef52a5bec/${slug}-hero.png)\n`;
  
  // Find where Batch header is and insert right after it
  const index = resultsMd.indexOf(batchHeader);
  if (index !== -1) {
    const splitIndex = index + batchHeader.length;
    resultsMd = resultsMd.slice(0, splitIndex) + `\n${imageMarkdown}` + resultsMd.slice(splitIndex);
  } else {
    resultsMd += imageMarkdown;
  }
  
  fs.writeFileSync(resultsMdPath, resultsMd, 'utf8');
  console.log(`Updated image_gen_results.md with entry for ${slug} under Batch ${batchNumber}`);
} else {
  console.log(`Entry for ${slug} already exists in image_gen_results.md`);
}

console.log('Done!');
