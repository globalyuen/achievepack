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

// Cutoff time: Jun 5, 2026 at 00:00:00 local time
const cutoffTime = new Date('2026-06-05T00:00:00+08:00');

stateData.forEach(item => {
  const imagePath = path.join(herosDir, `${item.slug}-hero.png`);
  let isNew = false;
  let fileTime = null;

  if (fs.existsSync(imagePath)) {
    const stats = fs.statSync(imagePath);
    fileTime = stats.mtime;
    if (stats.size > 1000 && fileTime >= cutoffTime) {
      isNew = true;
    }
  }

  if (isNew) {
    completedCount++;
    if (item.status !== 'completed') {
      item.status = 'completed';
      item.processedAt = fileTime.toISOString();
      updatedCount++;
    }
  } else {
    pendingCount++;
    if (item.status !== 'pending') {
      item.status = 'pending';
      item.processedAt = null;
      updatedCount++;
    }
  }
});

fs.writeFileSync(stateFilePath, JSON.stringify(stateData, null, 2), 'utf8');
console.log(`Sync completed based on mtime cutoff (${cutoffTime.toISOString()}).`);
console.log(`State file updated for ${updatedCount} items.`);
console.log(`Current Status:`);
console.log(`- Completed (Imagen 3): ${completedCount}`);
console.log(`- Pending (Old/Missing): ${pendingCount}`);
console.log(`- Total: ${stateData.length}`);
