const fs = require('fs');
const path = require('path');

const replacements = [
  ['着', 'ing'],
  ['编码', 'Code'],
  ['编', 'Edit'],
  ['缓', 'Slow'],
  ['绿', 'Green'],
  ['维', 'Dimension'],
  ['统', 'System'],
  ['终', 'End'],
  ['纺', 'Weave'],
  ['纹路', 'Texture'],
  ['纤维脱落', 'Fiber Shedding'],
  ['纤维', 'Fiber'],
  ['红烧牛', 'Braised Beef'],
  ['纖', 'Fiber'],
  ['繁忙', 'Busy'],
  ['綜', 'Comprehensive'],
  ['紧紧', 'Tightly'],
  ['紧急', 'Urgent'],
  ['紧凑', 'Compact'],
  ['紧', 'Tight'],
  ['約', 'About'],
  ['糧', 'Grain'],
  ['籽', 'Seed'],
  ['簡', 'Simple'],
  ['篡', 'Tamper'],
  ['筛选', 'Screen'],
  ['穿刺', 'Puncture'],
  ['穿', 'Pierce'],
  ['穋迷', 'Lost'],
  ['稀乾', 'Thin Dry'],
  ['移', 'Move'],
  ['科研', 'Research'],
  ['示', 'Show'],
  ['礙', 'Block'],
  ['磨', 'Grind'],
  ['確', 'Confirm'],
  ['硬', 'Hard'],
  ['础', 'Foundation'],
  ['破', 'Break'],
  ['短', 'Short'],
  ['真實', 'Real'],
  ['真', 'True'],
  ['申', 'Apply'],
  ['珠表明', 'Bead Shows'],
  ['率', 'Rate'],
  ['牺牲', 'Sacrifice'],
  ['牛', 'Cow'],
  ['熱', 'Heat'],
  ['熟', 'Cooked'],
  ['焊', 'Weld'],
  ['烧伤', 'Burn'],
  ['炊', 'Cook'],
  ['澈', 'Clear'],
  ['潘', 'Pan'],
  ['溢價', 'Premium'],
  ['溅', 'Splash'],
  ['游', 'Swim'],
  ['渠道', 'Channel'],
  ['減', 'Reduce'],
  ['涟漪', 'Ripple'],
  ['测', 'Test'],
  ['浆', 'Pulp'],
  ['法涵', 'Method Include'],
  ['法媲', 'Method Compare'],
  ['法', 'Law'],
  ['沟', 'Groove'],
  ['沉', 'Sink'],
  ['汤', 'Soup'],
  ['池', 'Pool'],
  ['氧', 'Oxygen'],
  ['氣閥', 'Gas Valve'],
  ['氣', 'Gas'],
  ['气', 'Air'],
  ['段', 'Section'],
  ['此', 'This'],
  ['歡迎', 'Welcome'],
  ['欧', 'Euro'],
  ['次', 'Times'],
  ['模', 'Model'],
  ['標籤', 'Label'],
  ['標', 'Standard'],
  ['日', 'Day'],
  ['扩', 'Expand'],
  ['應', 'Should'],
  ['命', 'Life'],
  ['参', 'Participate'],
  ['充', 'Charge'],
  ['代', 'Generation'],
  ['付', 'Pay'],
  ['今日', 'Today'],
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
