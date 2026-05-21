const fs = require('fs');
const content = fs.readFileSync('/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/scratch/ocr-results.txt', 'utf8');

const blocks = content.split('=== FILE: ');
blocks.forEach(block => {
  if (!block.trim()) return;
  const lines = block.split('\n');
  const filename = lines[0].replace(' ===', '').trim();
  
  // Find interesting lines
  const interesting = lines.filter(line => 
    line.includes('尺寸') || 
    line.includes('容量') || 
    line.includes('ml') || 
    line.includes('ML') || 
    line.includes('l') || 
    line.includes('L') || 
    line.includes('口径') || 
    line.includes('提手') ||
    line.includes('g') || 
    line.includes('G') ||
    line.includes('cm') || 
    line.includes('CM')
  );
  
  if (interesting.length > 0) {
    console.log(`\n--- ${filename} ---`);
    interesting.forEach(line => console.log(`  ${line}`));
  }
});
