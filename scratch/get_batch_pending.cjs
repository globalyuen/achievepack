const fs = require('fs');
const path = require('path');

const projectDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack';
const stateFilePath = path.join(projectDir, 'scratch/image_generation_state.json');
const batchOutPath = path.join(projectDir, 'scratch/batch4_pending.json');

const stateData = JSON.parse(fs.readFileSync(stateFilePath, 'utf8'));
const pending = stateData.filter(item => item.status === 'pending');

fs.writeFileSync(batchOutPath, JSON.stringify(pending.slice(0, 15), null, 2), 'utf8');
console.log(`Saved 15 pending items to ${batchOutPath}`);
