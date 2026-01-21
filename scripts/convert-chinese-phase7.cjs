const fs = require('fs');
const path = require('path');

const replacements = [
  ['感', 'Feel'],
  ['运', 'Ship'],
  ['过', 'Through'],
  ['松', 'Loose'],
  ['店', 'Store'],
  ['回', 'Return'],
  ['全', 'Full'],
  ['三', 'Three'],
  ['还', 'Also'],
  ['照', 'Photo'],
  ['效率', 'Efficiency'],
  ['放', 'Place'],
  ['开启', 'Open'],
  ['就', 'Then'],
  ['封', 'Seal'],
  ['基', 'Base'],
  ['固', 'Solid'],
  ['周围', 'Around'],
  ['口', 'Opening'],
  ['卷', 'Roll'],
  ['单', 'Single'],
  ['件', 'Piece'],
  ['验', 'Test'],
  ['顶', 'Top'],
  ['造', 'Make'],
  ['速', 'Speed'],
  ['货架', 'Shelf'],
  ['详情', 'Details'],
  ['论', 'Theory'],
  ['订购', 'Order'],
  ['被', 'Be'],
  ['而', 'And'],
  ['纸', 'Paper'],
  ['级', 'Grade'],
  ['瞬间', 'Instant'],
  ['玻璃', 'Glass'],
  ['消除', 'Eliminate'],
  ['流', 'Flow'],
  ['既', 'Both'],
  ['效', 'Effect'],
  ['持', 'Hold'],
  ['投资', 'Investment'],
  ['扭紧', 'Tighten'],
  ['惠', 'Discount'],
  ['式', 'Style'],
  ['干胶', 'Adhesive'],
  ['干净', 'Clean'],
  ['市场', 'Market'],
  ['工作', 'Work'],
  ['工', 'Worker'],
  ['宽', 'Wide'],
  ['备注', 'Notes'],
  ['备', 'Prepare'],
  ['均', 'Even'],
  ['发送', 'Send'],
  ['厨房', 'Kitchen'],
  ['升级', 'Upgrade'],
  ['产', 'Produce'],
  ['且', 'And'],
  ['鲶鱼', 'Catfish'],
  ['鲤鱼', 'Carp'],
  ['风味', 'Flavor'],
  ['面', 'Face'],
  ['门', 'Door'],
  ['长故事', 'Long Story'],
  ['邮件', 'Email'],
  ['造经验', 'Making Experience'],
  ['送', 'Deliver'],
  ['追踪', 'Track'],
  ['轮廓', 'Contour'],
  ['路径', 'Path'],
  ['跑', 'Run'],
  ['足迹', 'Footprint'],
  ['费', 'Fee'],
  ['负责任', 'Responsible'],
  ['解', 'Solve'],
  ['规信息', 'Spec Info'],
  ['规', 'Specification'],
  ['装', 'Install'],
  ['衬', 'Liner'],
  ['衡', 'Balance'],
  ['薄', 'Thin'],
  ['落地', 'Land'],
  ['菜', 'Vegetable'],
  ['茶', 'Tea'],
  ['范围', 'Range'],
  ['花', 'Flower'],
  ['自立', 'Stand-Up'],
  ['自', 'Self'],
  ['胶', 'Glue'],
  ['聚乙烯醇', 'Polyvinyl Alcohol'],
  ['罐瓶', 'Jars and Bottles'],
  ['经验', 'Experience'],
  ['经过', 'After'],
  ['经', 'Through'],
  ['纺布', 'Woven Fabric'],
  ['纸基', 'Paper-Based'],
  ['紧密', 'Tight'],
  ['系', 'System'],
  ['粮', 'Grain'],
  ['来', 'Come'],
  ['文件', 'File'],
  ['文', 'Text'],
  ['收到', 'Receive'],
  ['收', 'Collect'],
  ['改', 'Change'],
  ['支', 'Support'],
  ['挤压', 'Squeeze'],
  ['挤', 'Squeeze'],
  ['指', 'Point'],
  ['拆', 'Disassemble'],
  ['扫', 'Scan'],
  ['手', 'Hand'],
  ['截止', 'Deadline'],
  ['戶', 'Customer'],
  ['患', 'Suffer'],
  ['恢', 'Restore'],
  ['息', 'Info'],
  ['怕', 'Afraid'],
  ['心', 'Heart'],
  ['徽', 'Badge'],
  ['很', 'Very'],
  ['影响', 'Impact'],
  ['影', 'Shadow'],
  ['当', 'When'],
  ['异', 'Different'],
  ['建议', 'Suggest'],
  ['建', 'Build'],
  ['延', 'Extend'],
  ['年', 'Year'],
  ['左右', 'Around'],
  ['左', 'Left'],
  ['右', 'Right'],
  ['巴', 'Bar'],
  ['已完', 'Completed'],
  ['己', 'Self'],
  ['市', 'City'],
  ['川', 'River'],
  ['岛', 'Island'],
  ['密', 'Dense'],
  ['导', 'Guide'],
  ['寸', 'Inch'],
  ['容器', 'Container'],
  ['家', 'Home'],
  ['宜', 'Suitable'],
  ['委托', 'Commission'],
  ['奶', 'Milk'],
  ['头', 'Head'],
  ['天', 'Day'],
  ['够', 'Enough'],
  ['声', 'Sound'],
  ['壳', 'Shell'],
  ['增加', 'Increase'],
  ['境', 'Boundary'],
  ['塞', 'Plug'],
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
