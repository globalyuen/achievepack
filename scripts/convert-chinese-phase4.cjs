const fs = require('fs');
const path = require('path');

const replacements = [
  ['菌', 'Bacteria'],
  ['你', 'You'],
  ['专', 'Professional'],
  ['塑料', 'Plastic'],
  ['一起', 'Together'],
  ['我们', 'We'],
  ['场景', 'Scenario'],
  ['力', 'Power'],
  ['保持', 'Maintain'],
  ['于', 'At'],
  ['类', 'Category'],
  ['满足', 'Meet'],
  ['多', 'Multiple'],
  ['侧边', 'Side'],
  ['微波', 'Microwave'],
  ['加强', 'Strengthen'],
  ['过程', 'Process'],
  ['赛璐玢', 'Cellophane'],
  ['贴标', 'Labeling'],
  ['设备', 'Equipment'],
  ['营养补剂', 'Nutritional Supplements'],
  ['细节', 'Details'],
  ['纺滤膜', 'Filter Membrane'],
  ['温', 'Temperature'],
  ['法规', 'Regulations'],
  ['水', 'Water'],
  ['检测', 'Testing'],
  ['杀菌', 'Sterilization'],
  ['最', 'Most'],
  ['微波炉', 'Microwave Oven'],
  ['对污染敏感', 'Contamination-Sensitive'],
  ['客户', 'Customer'],
  ['化', 'ization'],
  ['制备', 'Preparation'],
  ['使', 'Enable'],
  ['低碳', 'Low Carbon'],
  ['位', 'Position'],
  ['也', 'Also'],
  ['钩', 'Hook'],
  ['钓鱼', 'Fishing'],
  ['运输', 'Transportation'],
  ['营销', 'Marketing'],
  ['自立底', 'Stand-Up Bottom'],
  ['耐', 'Resistant'],
  ['缝', 'Seam'],
  ['纸张', 'Paper'],
  ['碳足迹', 'Carbon Footprint'],
  ['牢固', 'Sturdy'],
  ['污染', 'Contamination'],
  ['支付', 'Payment'],
  ['微生物检测', 'Microbial Testing'],
  ['幫助', 'Help'],
  ['帮助', 'Help'],
  ['层', 'Layer'],
  ['大', 'Large'],
  ['基材', 'Base Material'],
  ['图案', 'Pattern'],
  ['即', 'Immediately'],
  ['功', 'Function'],
  ['优质', 'Premium'],
  ['什么是', 'What Is'],
  ['一次', 'Once'],
  ['颗粒滤液', 'Particle Filtrate'],
  ['颗粒', 'Particle'],
  ['阻隔', 'Barrier'],
  ['防漏', 'Leak-Proof'],
  ['长度', 'Length'],
  ['量', 'Volume'],
  ['都', 'All'],
  ['表面', 'Surface'],
  ['蔬菜', 'Vegetables'],
  ['粉饵', 'Bait Powder'],
  ['符', 'Match'],
  ['看', 'View'],
  ['盒', 'Box'],
  ['灌装', 'Filling'],
  ['清洁剂', 'Detergent'],
  ['添加', 'Add'],
  ['液体', 'Liquid'],
  ['测试', 'Test'],
  ['首先', 'First'],
  ['然后', 'Then'],
  ['最后', 'Finally'],
  ['下一步', 'Next Step'],
  ['个', 'Unit'],
  ['工作日', 'Business Days'],
  ['免费', 'Free'],
  ['低', 'Low'],
  ['样品', 'Sample'],
  ['证书', 'Certificate'],
  ['印刷机', 'Printer'],
  ['宽度', 'Width'],
  ['厚度', 'Thickness'],
  ['数量', 'Quantity'],
  ['价格', 'Price'],
  ['付款', 'Payment'],
  ['发货', 'Shipping'],
  ['交货', 'Delivery'],
  ['生产周期', 'Lead Time'],
  ['起订量', 'MOQ'],
  ['报价', 'Quote'],
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
