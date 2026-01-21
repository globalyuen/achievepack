const fs = require('fs');
const path = require('path');

const replacements = [
  // Common fragments
  ['选择', 'Choose'],
  ['袋', 'Bag'],
  ['非常适', 'Ideal for'],
  ['碳中', 'Carbon Neutral'],
  ['方案', 'Solution'],
  ['我们的', 'Our'],
  ['认证', 'Certification'],
  ['材料', 'Material'],
  ['可选', 'Optional'],
  ['兼', 'Compatible'],
  ['标准', 'Standard'],
  ['括', 'Including'],
  ['食品', 'Food'],
  ['设计稿', 'Design Draft'],
  ['订单', 'Order'],
  ['环境', 'Environment'],
  ['数码', 'Digital'],
  ['年的软', 'Years of Flexible'],
  ['天然', 'Natural'],
  ['咖喱', 'Curry'],
  ['凹版', 'Gravure'],
  ['亲切切割', 'Die Cut'],
  ['产品', 'Product'],
  ['项目', 'Project'],
  ['零食', 'Snack'],
  ['适用于', 'Suitable for'],
  ['运动', 'Sports'],
  ['软', 'Flexible'],
  ['贴纸', 'Sticker'],
  ['质控', 'Quality Control'],
  ['自定义形状', 'Custom Shape'],
  ['耐热', 'Heat Resistant'],
  ['系统', 'System'],
  ['窗口', 'Window'],
  ['溶解', 'Dissolve'],
  ['欧洲', 'Europe'],
  ['方式', 'Method'],
  ['性', 'Property'],
  ['微生物样品制备', 'Microbial Sample Preparation'],
  ['小批量', 'Small Batch'],
  ['封口', 'Seal'],
  ['定制', 'Custom'],
  ['完整性', 'Integrity'],
  ['多种', 'Multiple'],
  ['多层', 'Multi-Layer'],
  ['单一', 'Single'],
  ['別', 'Type'],
  ['冷冻食品', 'Frozen Food'],
  ['鱼饵球', 'Bait Ball'],
  ['鱼钩', 'Fish Hook'],
  ['食品安全检测', 'Food Safety Testing'],
  ['预制菜分装', 'Pre-Made Meal Portioning'],
  ['项目配置', 'Project Configuration'],
  ['项目进行抵消', 'Project Offset'],
  ['需微调', 'Needs Adjustment'],
  ['開窗', 'With Window'],
  ['采用', 'Using'],
  ['配', 'With'],
  ['通过材料优化', 'Through Material Optimization'],
  ['通勤与旅行', 'Commute & Travel'],
  ['选项', 'Options'],
  ['选择阻隔等级与', 'Choose Barrier Level and'],
  ['选择袋型与', 'Choose Bag Type and'],
  ['选择环保负责任的材料', 'Choose Eco-Responsible Materials'],
  ['选择吸嘴', 'Choose Spout'],
  ['选择你的材料路径', 'Choose Your Material Path'],
  ['适配高温蒸煮杀菌', 'For High-Temperature Sterilization'],
  ['适用于对污染敏感的微生物检测', 'For Contamination-Sensitive Microbial Testing'],
  ['适用于产品标签', 'For Product Labels'],
  ['这种', 'This'],
  ['达', 'Reach'],
  ['農夫市集', 'Farmers Market'],
  ['足迹更低', 'Lower Footprint'],
  ['适', 'Suitable'],
  ['可', 'Can'],
  ['的', 'Of'],
  ['与', 'And'],
  ['在', 'In'],
  ['从', 'From'],
  ['需', 'Require'],
  
  // More phrases
  ['完整', 'Complete'],
  ['透光', 'Light Transmission'],
  ['密封', 'Sealed'],
  ['保护', 'Protection'],
  ['新鲜', 'Fresh'],
  ['高效', 'Efficient'],
  ['健身', 'Fitness'],
  ['儿童', 'Children'],
  ['户外', 'Outdoor'],
  ['便携', 'Portable'],
  ['即食', 'Ready-to-Eat'],
  ['早餐', 'Breakfast'],
  ['饮料', 'Beverage'],
  ['酱料', 'Sauce'],
  ['调味', 'Seasoning'],
  ['蜂蜜', 'Honey'],
  ['果汁', 'Juice'],
  ['水果', 'Fruit'],
  ['坚果', 'Nuts'],
  ['糖果', 'Candy'],
  ['巧克力', 'Chocolate'],
  ['宠物', 'Pet'],
  ['狗粮', 'Dog Food'],
  ['猫粮', 'Cat Food'],
  ['有机', 'Organic'],
  ['无添加', 'Additive-Free'],
  ['低糖', 'Low Sugar'],
  ['无糖', 'Sugar-Free'],
  ['高蛋白', 'High Protein'],
  ['维生素', 'Vitamin'],
  ['矿物质', 'Mineral'],
  ['膳食纤维', 'Dietary Fiber'],
  ['胶原蛋白', 'Collagen'],
  ['益生菌', 'Probiotics'],
  ['蛋白粉', 'Protein Powder'],
  ['能量棒', 'Energy Bar'],
  ['代餐', 'Meal Replacement'],
  ['减脂', 'Fat Loss'],
  ['增肌', 'Muscle Building'],
  ['运动补充', 'Sports Supplement'],
  ['咖啡豆', 'Coffee Beans'],
  ['挂耳咖啡', 'Drip Coffee'],
  ['茶叶', 'Tea Leaves'],
  ['花草茶', 'Herbal Tea'],
  ['绿茶', 'Green Tea'],
  ['红茶', 'Black Tea'],
  ['乌龙茶', 'Oolong Tea'],
  ['普洱茶', 'Pu-erh Tea'],
  ['大米', 'Rice'],
  ['面粉', 'Flour'],
  ['燕麦', 'Oats'],
  ['谷物', 'Grains'],
  ['干果', 'Dried Fruits'],
  ['蜜饯', 'Preserved Fruits'],
  ['肉干', 'Jerky'],
  ['腊肠', 'Sausage'],
  ['香肠', 'Sausage'],
  ['海鲜', 'Seafood'],
  ['鱼片', 'Fish Fillet'],
  ['虾仁', 'Shrimp'],
  ['贝类', 'Shellfish'],
  ['速冻', 'Quick Frozen'],
  ['冷藏', 'Refrigerated'],
  ['常温', 'Room Temperature'],
  ['保鲜', 'Fresh Keeping'],
  ['真空', 'Vacuum'],
  ['充氮', 'Nitrogen Filled'],
  ['防潮', 'Moisture Proof'],
  ['防氧化', 'Anti-Oxidation'],
  ['避光', 'Light Proof'],
  ['防虫', 'Insect Proof'],
  ['防霉', 'Mold Proof'],
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
