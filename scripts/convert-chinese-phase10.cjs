const fs = require('fs');
const path = require('path');

const replacements = [
  ['剪', 'Cut'],
  ['作', 'Work'],
  ['鱼', 'Fish'],
  ['颜', 'Color'],
  ['际', 'Boundary'],
  ['锁定', 'Lock'],
  ['试', 'Try'],
  ['良', 'Good'],
  ['至', 'To'],
  ['联', 'Connect'],
  ['缘', 'Edge'],
  ['粘', 'Stick'],
  ['时', 'Time'],
  ['握', 'Grip'],
  ['拉', 'Pull'],
  ['抛', 'Throw'],
  ['奢华金', 'Luxury Gold'],
  ['味', 'Taste'],
  ['吸睛', 'Eye-Catching'],
  ['吸', 'Absorb'],
  ['取决', 'Depends'],
  ['反', 'Reverse'],
  ['友', 'Friend'],
  ['又', 'And'],
  ['区', 'Area'],
  ['剩余', 'Remaining'],
  ['做', 'Do'],
  ['保', 'Protect'],
  ['促销', 'Promotion'],
  ['伙伴', 'Partner'],
  ['份', 'Portion'],
  ['什么', 'What'],
  ['交询', 'Inquiry'],
  ['严苛', 'Rigorous'],
  ['严格', 'Strict'],
  ['齐', 'Complete'],
  ['鸡', 'Chicken'],
  ['驗證', 'Verify'],
  ['首', 'First'],
  ['饮', 'Drink'],
  ['食', 'Food'],
  ['风琴', 'Accordion'],
  ['预', 'Pre'],
  ['顾', 'Customer'],
  ['顺', 'Smooth'],
  ['顯著', 'Significant'],
  ['預', 'Pre'],
  ['非', 'Non'],
  ['青', 'Green'],
  ['零', 'Zero'],
  ['难', 'Difficult'],
  ['隐藏', 'Hidden'],
  ['随身携', 'Carry Along'],
  ['随时间', 'Over Time'],
  ['随时取', 'Take Anytime'],
  ['随时', 'Anytime'],
  ['階段', 'Stage'],
  ['除', 'Remove'],
  ['陈列', 'Display'],
  ['阻止幼童', 'Child-Resistant'],
  ['阶段', 'Stage'],
  ['队列', 'Queue'],
  ['间隙调', 'Gap Adjust'],
  ['间', 'Between'],
  ['開始', 'Start'],
  ['閉', 'Close'],
  ['长期', 'Long Term'],
  ['长时间', 'Long Time'],
  ['长', 'Long'],
  ['键', 'Key'],
  ['铺', 'Shop'],
  ['钮', 'Button'],
  ['钟', 'Clock'],
  ['鐐條', 'Chain'],
  ['銷', 'Sell'],
  ['金', 'Gold'],
  ['酱', 'Sauce'],
  ['酥脆', 'Crispy'],
  ['酒', 'Wine'],
  ['遵循严格', 'Follow Strict'],
  ['遮挡', 'Block'],
  ['運輸破損', 'Shipping Damage'],
  ['通勤', 'Commute'],
  ['通', 'Connect'],
  ['逐渐', 'Gradually'],
  ['连', 'Connect'],
  ['远', 'Far'],
  ['这', 'This'],
  ['返', 'Return'],
  ['辨率', 'Resolution'],
  ['辣酱', 'Hot Sauce'],
  ['辣椒', 'Pepper'],
  ['输', 'Transport'],
  ['轨道', 'Track'],
  ['輕', 'Light'],
  ['跟踪', 'Track'],
  ['跟', 'Follow'],
  ['跃', 'Jump'],
  ['足跡減', 'Footprint Reduce'],
  ['足跡', 'Footprint'],
  ['赖', 'Rely'],
  ['贵', 'Expensive'],
  ['贯', 'Through'],
  ['质保', 'Warranty'],
  ['账', 'Account'],
  ['谁', 'Who'],
  ['调', 'Adjust'],
  ['诞', 'Birth'],
  ['词', 'Word'],
  ['评', 'Review'],
  ['证', 'Prove'],
  ['设', 'Set'],
  ['议', 'Discuss'],
  ['讯', 'Message'],
  ['讨', 'Discuss'],
  ['计', 'Count'],
  ['觉', 'Feel'],
  ['角', 'Angle'],
  ['西', 'West'],
  ['被动', 'Passive'],
  ['裹', 'Wrap'],
  ['装卸', 'Load'],
  ['袋子', 'Bag'],
  ['袋', 'Bag'],
  ['术', 'Art'],
  ['行列', 'Ranks'],
  ['蛋白', 'Protein'],
  ['蒙', 'Cover'],
  ['营', 'Camp'],
  ['荐', 'Recommend'],
  ['草', 'Grass'],
  ['若', 'If'],
  ['英', 'English'],
  ['苗', 'Seedling'],
  ['芒', 'Awn'],
  ['艳', 'Bright'],
  ['船', 'Ship'],
  ['舒适', 'Comfortable'],
  ['舍', 'Give Up'],
  ['舌', 'Tongue'],
  ['腔', 'Cavity'],
  ['脚', 'Foot'],
  ['脆', 'Crisp'],
  ['脂', 'Fat'],
  ['胀', 'Swell'],
  ['背', 'Back'],
];

const pagesDir = path.join(__dirname, '..', 'src', 'pages');

function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = getAllTsxFiles(pagesDir);
let totalReplacements = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let fileReplacements = 0;
  
  replacements.forEach(([chinese, english]) => {
    const count = (content.split(chinese).length - 1);
    if (count > 0) {
      content = content.split(chinese).join(english);
      fileReplacements += count;
    }
  });
  
  if (fileReplacements > 0) {
    fs.writeFileSync(filePath, content);
    console.log(`${path.basename(filePath)}: ${fileReplacements} replacements`);
    totalReplacements += fileReplacements;
  }
});

console.log(`\nTotal replacements: ${totalReplacements}`);
