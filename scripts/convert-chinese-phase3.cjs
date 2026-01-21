const fs = require('fs');
const path = require('path');

const replacements = [
  ['重复', 'Repeated'],
  ['无', 'No'],
  ['蒸煮', 'Steaming'],
  ['安全', 'Safe'],
  ['提供', 'Provide'],
  ['标签', 'Label'],
  ['子', 'Child'],
  ['能', 'Can'],
  ['系列', 'Series'],
  ['确保', 'Ensure'],
  ['您', 'You'],
  ['品牌', 'Brand'],
  ['餐', 'Meal'],
  ['设计', 'Design'],
  ['求', 'Demand'],
  ['均质', 'Homogenizer'],
  ['中', 'In'],
  ['靠', 'Reliable'],
  ['一起设计你', 'Design Together Your'],
  ['阻隔等级', 'Barrier Level'],
  ['防开启拉链', 'Child-Resistant Zipper'],
  ['防开启', 'Child-Resistant'],
  ['见', 'See'],
  ['要', 'Need'],
  ['线', 'Line'],
  ['等', 'Etc'],
  ['无菌', 'Sterile'],
  ['高端', 'Premium'],
  ['让', 'Let'],
  ['解决', 'Solve'],
  ['规格', 'Specification'],
  ['置', 'Set'],
  ['效果', 'Effect'],
  ['支持', 'Support'],
  ['持续', 'Continuous'],
  ['拉链', 'Zipper'],
  ['技术', 'Technology'],
  ['实验室均质', 'Lab Homogenizer'],
  ['型', 'Type'],
  ['吸嘴', 'Spout'],
  ['同时', 'Meanwhile'],
  ['冷冻', 'Frozen'],
  ['侧边滤膜', 'Side Filter'],
  ['高', 'High'],
  ['通过', 'Through'],
  ['管理', 'Management'],
  ['白色', 'White'],
  ['理想', 'Ideal'],
  ['现有', 'Existing'],
  ['水溶', 'Water Soluble'],
  ['无菌实验室均质', 'Sterile Lab Homogenizer'],
  ['无菌均质', 'Sterile Homogenizer'],
  ['所有', 'All'],
  ['微波蒸煮', 'Microwave Steaming'],
  ['形状', 'Shape'],
  ['应用', 'Application'],
  ['工厂级', 'Factory Grade'],
  ['小', 'Small'],
  ['实验室', 'Laboratory'],
  ['实现', 'Achieve'],
  ['婴儿', 'Baby'],
  ['处理', 'Processing'],
  ['四种', 'Four Types'],
  ['器', 'Device'],
  ['品质', 'Quality'],
  ['咖啡', 'Coffee'],
  ['剪裁单张', 'Die-Cut Sheets'],
  ['内', 'Inside'],
  ['侧褶', 'Side Gusset'],
  ['位置', 'Position'],
  ['传统', 'Traditional'],
  ['以', 'With'],
  ['为', 'For'],
  ['高品质', 'High Quality'],
  ['降解', 'Degradable'],
  ['进入', 'Enter'],
  ['这些', 'These'],
  ['超级', 'Super'],
  ['质量控制', 'Quality Control'],
  ['表面工艺', 'Surface Finish'],
  ['能力', 'Capability'],
  ['结', 'Knot'],
  ['组', 'Group'],
  ['线拉链', 'Line Zipper'],
  ['纤维纹理', 'Fiber Texture'],
  ['类型', 'Type'],
  ['相比', 'Compared'],
  ['盒子', 'Box'],
  ['用', 'Use'],
  ['环保吸嘴', 'Eco Spout'],
  ['环保', 'Eco-Friendly'],
  ['热封', 'Heat Seal'],
  ['灭菌', 'Sterilization'],
  ['混', 'Mix'],
  ['活动', 'Activity'],
  ['款式', 'Style'],
  ['样本', 'Sample'],
  ['查看所有', 'View All'],
  ['查看', 'View'],
  ['服务', 'Service'],
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
