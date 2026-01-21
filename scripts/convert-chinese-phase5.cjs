const fs = require('fs');
const path = require('path');

const replacements = [
  ['起订', 'Minimum Order'],
  ['便', 'Convenient'],
  ['微生物', 'Microbial'],
  ['业', 'Industry'],
  ['杀', 'Kill'],
  ['加热', 'Heating'],
  ['减少', 'Reduce'],
  ['入', 'Enter'],
  ['仅', 'Only'],
  ['上传', 'Upload'],
  ['炉', 'Oven'],
  ['更', 'More'],
  ['各种', 'Various'],
  ['口味', 'Flavor'],
  ['一', 'One'],
  ['麻', 'Hemp'],
  ['风险', 'Risk'],
  ['降', 'Reduce'],
  ['防止', 'Prevent'],
  ['金属丝', 'Wire'],
  ['简', 'Simple'],
  ['涂', 'Coating'],
  ['汽', 'Steam'],
  ['普通', 'Regular'],
  ['整', 'Whole'],
  ['接触', 'Contact'],
  ['批', 'Batch'],
  ['快速', 'Fast'],
  ['强', 'Strong'],
  ['已', 'Already'],
  ['对', 'For'],
  ['及', 'And'],
  ['压', 'Pressure'],
  ['加上', 'Plus'],
  ['分', 'Divide'],
  ['全程', 'Whole Process'],
  ['任何', 'Any'],
  ['一体', 'Integrated'],
  ['饵料', 'Bait Material'],
  ['饵', 'Bait'],
  ['饮品', 'Beverage'],
  ['限制', 'Limit'],
  ['防', 'Anti'],
  ['进行优', 'Optimize'],
  ['说明', 'Instructions'],
  ['视', 'View'],
  ['覆盖', 'Cover'],
  ['致', 'Ultimate'],
  ['纹理', 'Texture'],
  ['稳定', 'Stable'],
  ['目标', 'Target'],
  ['特写', 'Close-Up'],
  ['滤膜', 'Filter Membrane'],
  ['氧气', 'Oxygen'],
  ['气密', 'Airtight'],
  ['每种', 'Each Type'],
  ['每', 'Each'],
  ['残留', 'Residue'],
  ['柔', 'Soft'],
  ['极致', 'Ultimate'],
  ['有', 'Have'],
  ['替代', 'Alternative'],
  ['更新', 'Update'],
  ['操作', 'Operation'],
  ['排气阀', 'Degassing Valve'],
  ['折叠', 'Fold'],
  ['承受', 'Withstand'],
  ['打开', 'Open'],
  ['扎带', 'Cable Tie'],
  ['成本', 'Cost'],
  ['成', 'Form'],
  ['微生物学', 'Microbiology'],
  ['张', 'Sheet'],
  ['开始', 'Start'],
  ['度', 'Degree'],
  ['平', 'Flat'],
  ['干货', 'Dry Goods'],
  ['工厂', 'Factory'],
  ['宽口', 'Wide Opening'],
  ['家庭份', 'Family Portion'],
  ['审核', 'Review'],
  ['定义', 'Define'],
  ['存储', 'Storage'],
  ['外', 'Outside'],
  ['复', 'Compound'],
  ['填充', 'Fill'],
  ['品', 'Product'],
  ['呈现', 'Present'],
  ['同', 'Same'],
  ['各', 'Each'],
  ['受', 'Receive'],
  ['反馈', 'Feedback'],
  ['卷膜上', 'On Roll Film'],
  ['卓越', 'Excellent'],
  ['区域', 'Area'],
  ['加入', 'Add'],
  ['前', 'Before'],
  ['制成', 'Made From'],
  ['出色', 'Outstanding'],
  ['冰箱', 'Refrigerator'],
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
