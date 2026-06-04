const fs = require('fs');
const path = require('path');

const projectDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack';
const stateFilePath = path.join(projectDir, 'scratch/image_generation_state.json');
const herosDir = path.join(projectDir, 'public/imgs/blog/heros');

if (!fs.existsSync(stateFilePath)) {
  console.error(`State file not found at: ${stateFilePath}`);
  process.exit(1);
}

const stateData = JSON.parse(fs.readFileSync(stateFilePath, 'utf8'));
let updatedCount = 0;
let completedCount = 0;
let pendingCount = 0;

stateData.forEach(item => {
  const imagePath = path.join(herosDir, `${item.slug}-hero.png`);
  if (fs.existsSync(imagePath)) {
    const stats = fs.statSync(imagePath);
    if (stats.size > 1000) {
      completedCount++;
      if (item.status !== 'completed') {
        item.status = 'completed';
        item.processedAt = stats.mtime.toISOString();
        updatedCount++;
      }
    } else {
      pendingCount++;
      if (item.status === 'completed') {
        item.status = 'pending';
        item.processedAt = null;
        updatedCount++;
      }
    }
  } else {
    pendingCount++;
    if (item.status === 'completed') {
      item.status = 'pending';
      item.processedAt = null;
      updatedCount++;
    }
  }
});

if (updatedCount > 0) {
  fs.writeFileSync(stateFilePath, JSON.stringify(stateData, null, 2), 'utf8');
  console.log(`Sync complete. State file updated. Changed ${updatedCount} items.`);
} else {
  console.log('Sync complete. No state file updates needed.');
}

console.log(`Current Status:`);
console.log(`- Completed/Exists: ${completedCount}`);
console.log(`- Pending/Missing: ${pendingCount}`);
console.log(`- Total: ${stateData.length}`);
