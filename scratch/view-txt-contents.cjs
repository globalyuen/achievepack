const fs = require('fs');
const path = require('path');

const metaDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/taobao/纯铝箔吸嘴袋富氢水液体分装袋加厚豆浆袋啤酒果汁汤袋外卖打包袋-tmall.com天猫';
const metaFiles = fs.readdirSync(metaDir).filter(f => f.endsWith('.txt'));

metaFiles.forEach(meta => {
  const content = fs.readFileSync(path.join(metaDir, meta), 'utf8');
  if (content.includes('O1CN')) {
    console.log(`Found O1CN in: ${meta}`);
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('O1CN')) {
        console.log(`  Line ${idx + 1}: ${line.substring(0, 200)}`);
      }
    });
  }
});
