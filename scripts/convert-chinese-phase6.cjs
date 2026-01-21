const fs = require('fs');
const path = require('path');

const replacements = [
  ['具', 'Tool'],
  ['体', 'Body'],
  ['人', 'Person'],
  ['约', 'About'],
  ['渗漏', 'Leakage'],
  ['形', 'Form'],
  ['并', 'And'],
  ['增', 'Increase'],
  ['额', 'Extra'],
  ['部', 'Part'],
  ['轻', 'Light'],
  ['质', 'Quality'],
  ['蒸', 'Steam'],
  ['色', 'Color'],
  ['特定', 'Specific'],
  ['气味', 'Odor'],
  ['方', 'Side'],
  ['新', 'New'],
  ['捷', 'Quick'],
  ['按', 'Press'],
  ['少', 'Few'],
  ['学', 'Study'],
  ['加', 'Add'],
  ['制', 'Made'],
  ['全球', 'Global'],
  ['久', 'Long'],
  ['主流', 'Mainstream'],
  ['不', 'Not'],
  ['限', 'Limit'],
  ['针', 'Needle'],
  ['进', 'Into'],
  ['诱', 'Attract'],
  ['访问', 'Visit'],
  ['观察', 'Observe'],
  ['观', 'View'],
  ['行', 'Line'],
  ['精', 'Fine'],
  ['种', 'Type'],
  ['物', 'Material'],
  ['版', 'Edition'],
  ['消费者', 'Consumer'],
  ['流式细胞术', 'Flow Cytometry'],
  ['步', 'Step'],
  ['模切', 'Die Cut'],
  ['样', 'Style'],
  ['极', 'Extreme'],
  ['条', 'Strip'],
  ['是', 'Is'],
  ['易', 'Easy'],
  ['日常', 'Daily'],
  ['提升', 'Improve'],
  ['提', 'Raise'],
  ['换', 'Change'],
  ['捏', 'Pinch'],
  ['持久', 'Durable'],
  ['拒绝', 'Reject'],
  ['拍击', 'Slap'],
  ['抛投', 'Throw'],
  ['投放', 'Deploy'],
  ['底', 'Bottom'],
  ['库存', 'Inventory'],
  ['差异', 'Difference'],
  ['套', 'Set'],
  ['商', 'Business'],
  ['员', 'Staff'],
  ['后', 'After'],
  ['助', 'Assist'],
  ['利', 'Benefit'],
  ['全部', 'All'],
  ['储存', 'Store'],
  ['保证', 'Guarantee'],
  ['体验', 'Experience'],
  ['伽马', 'Gamma'],
  ['优', 'Excellent'],
  ['休闲', 'Casual'],
  ['享', 'Enjoy'],
  ['亚太地区', 'Asia Pacific'],
  ['云', 'Cloud'],
  ['了吗', '?'],
  ['了', 'Done'],
  ['不干胶', 'Adhesive'],
  ['下', 'Under'],
  ['上', 'Up'],
  ['麦片', 'Cereal'],
  ['预富集', 'Pre-Enrichment'],
  ['面积', 'Area'],
  ['集', 'Collection'],
  ['间焊', 'Weld'],
  ['长货架期', 'Long Shelf Life'],
  ['锁住', 'Lock In'],
  ['链接', 'Link'],
  ['铁罐', 'Tin Can'],
  ['铁丝', 'Iron Wire'],
  ['钓', 'Fish'],
  ['重封', 'Reseal'],
  ['重', 'Heavy'],
  ['释放', 'Release'],
  ['部门', 'Department'],
  ['遮光', 'Light Blocking'],
  ['途', 'Route'],
  ['载', 'Load'],
  ['购买', 'Purchase'],
  ['请', 'Please'],
  ['获取', 'Get'],
  ['获得', 'Obtain'],
  ['获', 'Get'],
  ['节省', 'Save'],
  ['艺', 'Art'],
  ['膜', 'Film'],
  ['耐温', 'Heat Resistant'],
  ['老化', 'Aging'],
  ['美国', 'USA'],
  ['网站', 'Website'],
  ['继续', 'Continue'],
  ['绝', 'Absolutely'],
  ['经济', 'Economy'],
  ['纯', 'Pure'],
  ['简化', 'Simplify'],
  ['立即', 'Immediately'],
  ['窗', 'Window'],
  ['空间', 'Space'],
  ['第', 'Number'],
  ['离', 'Leave'],
  ['磅', 'Pound'],
  ['示意图', 'Diagram'],
  ['礼', 'Gift'],
  ['确认', 'Confirm'],
  ['直接', 'Direct'],
  ['盛装', 'Hold'],
  ['盐水', 'Saltwater'],
  ['益', 'Benefit'],
  ['生', 'Raw'],
  ['理', 'Reason'],
  ['王者', 'King'],
  ['环', 'Ring'],
  ['独立', 'Independent'],
  ['狭窄', 'Narrow'],
  ['物料', 'Material'],
  ['牌', 'Brand'],
  ['片', 'Piece'],
  ['烹饪', 'Cooking'],
  ['烘焙', 'Baking'],
  ['点', 'Point'],
  ['激光', 'Laser'],
  ['滤', 'Filter'],
  ['溶', 'Dissolve'],
  ['源', 'Source'],
  ['深', 'Deep'],
  ['淡水', 'Freshwater'],
  ['海', 'Sea'],
  ['流程', 'Process'],
  ['波', 'Wave'],
  ['注册', 'Register'],
  ['油脂', 'Oil'],
  ['沿', 'Along'],
  ['汁', 'Juice'],
  ['永', 'Permanent'],
  ['毫升', 'ML'],
  ['正确', 'Correct'],
  ['正', 'Right'],
  ['款', 'Model'],
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
