const fs = require('fs');
const path = require('path');

const replacements = [
  ['裂', 'Split'],
  ['鲜艳', 'Bright'],
  ['预先焊', 'Pre-Weld'],
  ['旋', 'Rotate'],
  ['排', 'Row'],
  ['好', 'Good'],
  ['地', 'Ground'],
  ['减', 'Reduce'],
  ['避免', 'Avoid'],
  ['罐', 'Can'],
  ['紙', 'Paper'],
  ['管', 'Tube'],
  ['站', 'Stand'],
  ['窝', 'Nest'],
  ['瓶', 'Bottle'],
  ['特殊', 'Special'],
  ['特', 'Special'],
  ['湖', 'Lake'],
  ['活', 'Live'],
  ['洁', 'Clean'],
  ['河', 'River'],
  ['横', 'Horizontal'],
  ['棕牛', 'Brown Kraft'],
  ['星', 'Star'],
  ['数据', 'Data'],
  ['搭', 'Match'],
  ['搅拌', 'Stir'],
  ['挂', 'Hang'],
  ['截', 'Cut'],
  ['弛', 'Relax'],
  ['引', 'Lead'],
  ['应', 'Should'],
  ['干燥', 'Dry'],
  ['幅', 'Width'],
  ['常', 'Often'],
  ['布', 'Cloth'],
  ['属', 'Belong'],
  ['尾', 'End'],
  ['射', 'Inject'],
  ['实际减排取决', 'Actual Reduction Depends'],
  ['实', 'Real'],
  ['安', 'Safe'],
  ['孔', 'Hole'],
  ['奢华金属', 'Luxury Metal'],
  ['堆', 'Stack'],
  ['地区', 'Region'],
  ['圆角矩', 'Rounded Rectangle'],
  ['图标', 'Icon'],
  ['困难', 'Difficult'],
  ['团队', 'Team'],
  ['四', 'Four'],
  ['发展', 'Development'],
  ['友好', 'Friendly'],
  ['又省事', 'And Convenient'],
  ['原', 'Original'],
  ['历史', 'History'],
  ['卖', 'Sell'],
  ['匹', 'Match'],
  ['匀', 'Even'],
  ['势', 'Trend'],
  ['动', 'Move'],
  ['剩余排', 'Remaining Emission'],
  ['剂', 'Agent'],
  ['击', 'Hit'],
  ['出', 'Out'],
  ['再次', 'Again'],
  ['其他', 'Other'],
  ['其', 'Its'],
  ['关联', 'Associate'],
  ['关', 'Close'],
  ['六', 'Six'],
  ['充填', 'Fill'],
  ['允许', 'Allow'],
  ['備', 'Prepare'],
  ['做出剪', 'Make Cut'],
  ['倒', 'Pour'],
  ['信赖之选', 'Trusted Choice'],
  ['信赖', 'Trust'],
  ['信', 'Letter'],
  ['保存', 'Save'],
  ['八', 'Eight'],
  ['入门', 'Beginner'],
  ['假', 'False'],
  ['停', 'Stop'],
  ['健康', 'Health'],
  ['借', 'Borrow'],
  ['修', 'Repair'],
  ['克', 'Gram'],
  ['先', 'First'],
  ['光泽', 'Gloss'],
  ['免', 'Free'],
  ['值', 'Value'],
  ['候', 'Wait'],
  ['倍', 'Times'],
  ['俱', 'Club'],
  ['依', 'Depend'],
  ['供', 'Supply'],
  ['侧焊', 'Side Weld'],
  ['例', 'Example'],
  ['伺', 'Serve'],
  ['众', 'Crowd'],
  ['传', 'Transfer'],
  ['企', 'Enterprise'],
  ['价', 'Price'],
  ['仓', 'Warehouse'],
  ['亿', 'Billion'],
  ['亮', 'Bright'],
  ['五', 'Five'],
  ['二', 'Two'],
  ['争', 'Compete'],
  ['予', 'Give'],
  ['书', 'Book'],
  ['九', 'Nine'],
  ['乐', 'Joy'],
  ['主', 'Main'],
  ['串', 'String'],
  ['丝', 'Silk'],
  ['两', 'Two'],
  ['七', 'Seven'],
  ['丁', 'D'],
  ['万', 'Ten Thousand'],
  ['符合', 'Comply'],
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
