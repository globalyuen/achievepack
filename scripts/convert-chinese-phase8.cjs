const fs = require('fs');
const path = require('path');

const replacements = [
  ['带', 'With'],
  ['邮', 'Mail'],
  ['打', 'Strike'],
  ['准', 'Standard'],
  ['瞬时', 'Instantaneous'],
  ['烫金', 'Hot Stamping'],
  ['将', 'Will'],
  ['升', 'Rise'],
  ['边', 'Edge'],
  ['起', 'Start'],
  ['积', 'Area'],
  ['直', 'Straight'],
  ['清晰', 'Clear'],
  ['未', 'Not'],
  ['敏', 'Sensitive'],
  ['撕', 'Tear'],
  ['把', 'Handle'],
  ['扭转', 'Twist'],
  ['彩', 'Color'],
  ['开', 'Open'],
  ['庭', 'Family'],
  ['完', 'Complete'],
  ['向', 'Toward'],
  ['变', 'Change'],
  ['冷萃', 'Cold Brew'],
  ['典', 'Classic'],
  ['公司', 'Company'],
  ['倾倒', 'Pour'],
  ['侧', 'Side'],
  ['何', 'What'],
  ['页', 'Page'],
  ['通知', 'Notification'],
  ['连续', 'Continuous'],
  ['超', 'Ultra'],
  ['触', 'Touch'],
  ['表现', 'Performance'],
  ['美', 'Beauty'],
  ['细', 'Fine'],
  ['維', 'Dimension'],
  ['粉末', 'Powder'],
  ['突破', 'Break Through'],
  ['移动', 'Mobile'],
  ['社交', 'Social'],
  ['研究机构', 'Research Institution'],
  ['研究', 'Research'],
  ['眼', 'Eye'],
  ['相关碳排', 'Related Carbon Emission'],
  ['相', 'Related'],
  ['盖', 'Cover'],
  ['监控', 'Monitor'],
  ['瓶罐', 'Bottles and Jars'],
  ['现代', 'Modern'],
  ['爆', 'Burst'],
  ['然', 'Natural'],
  ['烈', 'Strong'],
  ['灵活', 'Flexible'],
  ['潮湿', 'Humid'],
  ['滑动', 'Slide'],
  ['準', 'Standard'],
  ['液', 'Liquid'],
  ['浪', 'Wave'],
  ['浓缩', 'Concentrate'],
  ['注', 'Note'],
  ['泄漏', 'Leak'],
  ['油墨', 'Ink'],
  ['油', 'Oil'],
  ['比', 'Ratio'],
  ['残渣', 'Residue'],
  ['横向预先焊接', 'Pre-Welded Horizontally'],
  ['植', 'Plant'],
  ['根據', 'According To'],
  ['标识', 'Identification'],
  ['枕', 'Pillow'],
  ['析', 'Analyze'],
  ['材', 'Material'],
  ['机构', 'Institution'],
  ['机', 'Machine'],
  ['本', 'Book'],
  ['星爆', 'Starburst'],
  ['旋盖', 'Screw Cap'],
  ['斷', 'Break'],
  ['数字', 'Digital'],
  ['搞定', 'Done'],
  ['搜索', 'Search'],
  ['推薦', 'Recommend'],
  ['控洁净室', 'Controlled Cleanroom'],
  ['接', 'Connect'],
  ['挺', 'Stand'],
  ['振动', 'Vibration'],
  ['挂孔', 'Hang Hole'],
  ['抵消', 'Offset'],
  ['报告', 'Report'],
  ['抗穿刺', 'Puncture Resistant'],
  ['抗冲击', 'Impact Resistant'],
  ['扁', 'Flat'],
  ['意', 'Intent'],
  ['总览', 'Overview'],
  ['念', 'Concept'],
  ['待', 'Wait'],
  ['彩鲜艳', 'Vivid Colors'],
  ['给', 'Give'],
  ['纯正', 'Pure'],
  ['素', 'Element'],
  ['糊', 'Paste'],
  ['精准', 'Precise'],
  ['等待', 'Wait'],
  ['答', 'Answer'],
  ['简单', 'Simple'],
  ['算', 'Calculate'],
  ['端', 'End'],
  ['章', 'Chapter'],
  ['竞', 'Compete'],
  ['立', 'Stand'],
  ['空气', 'Air'],
  ['稳', 'Steady'],
  ['程', 'Process'],
  ['离心', 'Centrifuge'],
  ['磁', 'Magnetic'],
  ['碳', 'Carbon'],
  ['确', 'Exact'],
  ['看来', 'Seems'],
  ['监', 'Supervise'],
  ['盐', 'Salt'],
  ['皮', 'Skin'],
  ['白', 'White'],
  ['男', 'Male'],
  ['甜', 'Sweet'],
  ['电', 'Electric'],
  ['由', 'By'],
  ['田', 'Field'],
  ['百', 'Hundred'],
  ['番', 'Time'],
  ['留', 'Stay'],
  ['界', 'World'],
  ['略', 'Strategy'],
  ['画', 'Draw'],
  ['电子', 'Electronic'],
  ['瓶子', 'Bottle'],
  ['瓦楞', 'Corrugated'],
  ['球', 'Ball'],
  ['现', 'Present'],
  ['玉', 'Jade'],
  ['猪', 'Pig'],
  ['狗', 'Dog'],
  ['独', 'Unique'],
  ['状', 'State'],
  ['片状', 'Flake'],
  ['爱', 'Love'],
  ['熟食', 'Deli'],
  ['热', 'Heat'],
  ['烤', 'Roast'],
  ['烘', 'Bake'],
  ['点击', 'Click'],
  ['灌', 'Fill'],
  ['火', 'Fire'],
  ['激', 'Intense'],
  ['清', 'Clear'],
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
