const fs = require('fs');
const path = require('path');

const replacements = [
  // Common phrases - 最常见的
  ['点击放大', 'Click to enlarge'],
  ['辐照灭菌', 'Irradiation Sterilization'],
  ['洁净室生产', 'Cleanroom Production'],
  ['洁净室生产环境', 'Cleanroom Production Environment'],
  ['可回收', 'Recyclable'],
  ['食品级', 'Food Grade'],
  ['食品级材料', 'Food Grade Materials'],
  ['碳补偿', 'Carbon Offset'],
  ['生物基', 'Bio-Based'],
  ['水溶诱饵袋', 'Water Soluble Bait Bags'],
  ['预拉链卷膜', 'Pre-Zipper Roll Film'],
  ['预拉链卷膜如何工作', 'How Pre-Zipper Roll Film Works'],
  ['金属丝封口', 'Wire Tie Closure'],
  ['金属丝封口无菌均质袋', 'Wire Tie Sterile Homogenizer Bags'],
  ['环境检测', 'Environmental Testing'],
  ['保留日常便利', 'Retain Daily Convenience'],
  ['侧边滤膜均质袋', 'Side Filter Membrane Homogenizer Bags'],
  ['订单工作流说明', 'Order Workflow Instructions'],
  ['高质量纸张不干胶标签', 'High Quality Paper Adhesive Labels'],
  ['高端表面工艺', 'Premium Surface Finishing'],
  ['高效生产与印刷', 'Efficient Production & Printing'],
  ['面向成年消费者的定制异形袋', 'Custom Shaped Bags for Adult Consumers'],
  ['铁丝封口袋', 'Wire Tie Closure Bags'],
  ['通过认证的儿童防开启结构', 'Certified Child-Resistant Structure'],
  ['通过结构设计', 'Through Structural Design'],
  ['面向大麻', 'For Cannabis'],
  ['随拿随喝', 'Ready to Drink'],
  ['高阻隔保护', 'High Barrier Protection'],
  ['高透明度', 'High Transparency'],
  ['每托盘可装更多餐食', 'More Meals Per Pallet'],
  ['更优防漏密封', 'Better Leak-Proof Seal'],
  ['安全微波蒸煮', 'Safe Microwave Steaming'],
  ['保鲜与加热的一体袋', 'All-in-One Storage & Heating Bag'],
  ['在水中完全溶解', 'Completely Dissolves in Water'],
  ['可堆肥包装', 'Compostable Packaging'],
  ['减少碳排放', 'Reduce Carbon Emissions'],
  ['三个简单步骤', 'Three Simple Steps'],
  ['环保材料', 'Eco-Friendly Materials'],
  ['复合结构', 'Composite Structure'],
  ['定制异形', 'Custom Shapes'],
  
  // Materials
  ['铝箔', 'Aluminum Foil'],
  ['尼龙', 'Nylon'],
  ['薄膜', 'Film'],
  ['米纸', 'Rice Paper'],
  ['白牛皮纸', 'White Kraft Paper'],
  ['牛皮纸', 'Kraft Paper'],
  ['牍紙', 'Paperboard'],
  ['金箔', 'Gold Foil'],
  ['紙appearance', 'Paper Appearance'],
  ['長Freshness期coffee', 'Extended Freshness Period Coffee'],
  
  // Shapes
  ['椭圆', 'Oval'],
  ['方形', 'Square'],
  ['圆形', 'Round'],
  ['平底袋', 'Flat Bottom Bags'],
  ['自立袋', 'Stand-Up Pouches'],
  ['卷装', 'Roll Form'],
  
  // Finishes
  ['亮光', 'Gloss'],
  ['哑光', 'Matte'],
  ['透明', 'Transparent'],
  
  // Categories
  ['药品', 'Pharmaceuticals'],
  ['化妆品', 'Cosmetics'],
  ['食品检测', 'Food Testing'],
  ['制药', 'Pharmaceutical'],
  
  // Simple words
  ['優先', 'Priority'],
  ['步骤', 'Steps'],
  ['容量', 'Capacity'],
  ['材質', 'Materials'],
  ['材质', 'Material'],
  ['起訂', 'Order'],
  ['状态', 'Status'],
  ['特點', 'Features'],
  ['待处理', 'Pending'],
  ['尺寸', 'Dimensions'],
  ['靈活', 'Flexible'],
  ['結構', 'Structure'],
  ['结构', 'Structure'],
  ['紙張式', 'Paper Style'],
  ['纸张式', 'Paper Style'],
  ['生产', 'Production'],
  ['混配', 'Blending'],
  ['每箱', 'Per Carton'],
  ['展示', 'Display'],
  ['壁厚', 'Wall Thickness'],
  ['印刷', 'Printing'],
  ['包装', 'Packaging'],
  ['包', 'Pack'],
  ['使用', 'Use'],
  ['追求', 'Pursue'],
  ['堆肥', 'Compostable'],
  ['容', 'Capacity'],
  ['合', 'Suitable'],
  ['如', 'If'],
  ['凭借超过', 'With Over'],
  ['已为北美', 'Already Served North America'],
  ['射线灭菌', 'Radiation Sterilization'],
  ['完全', 'Complete'],
  ['只', 'Only'],
  ['到', 'To'],
  ['再生', 'Recycled'],
  ['佳', 'Best'],
  ['和', 'And'],
  ['類', 'Category'],
  ['或', 'Or'],
  ['運輸保護', 'Shipping Protection'],
  
  // CustomLabelsPage specific
  ['定制纸张不干胶标签总览', 'Custom Paper Adhesive Labels Overview'],
  ['品牌与产品总览', 'Brand & Product Overview'],
  ['标签应用于自立袋', 'Labels Applied to Stand-Up Pouches'],
  ['便捷的贴标流程', 'Easy Labeling Process'],
  ['多种材质可选', 'Multiple Material Options'],
  ['强力永久胶粘性', 'Strong Permanent Adhesive'],
  ['多设计优惠', 'Multi-Design Discounts'],
  ['简洁定制流程', 'Simple Custom Process'],
  ['专业定制标签，无最低起订量 — 高质量纸张不干胶标签，适用于产品标签、活动标签、个人定制和小批量生产。设计确认后 2-3 个工作日内印刷发货。', 
   'Professional custom labels with no minimum order quantity — high-quality paper adhesive labels for product labels, event labels, personal customization, and small batch production. Printed and shipped within 2-3 business days after design confirmation.'],
  ['广泛应用场景', 'Wide Application Scenarios'],
  ['从产品标签、活动贴纸到个人项目和小型企业品牌——我们的定制纸张标签适用于任何场景。无论您需要 10 张还是 10,000 张，我们始终如一地提供高品质产品。',
   'From product labels, event stickers to personal projects and small business branding — our custom paper labels are suitable for any scenario. Whether you need 10 or 10,000 labels, we consistently deliver high-quality products.'],
  ['完美融合包装', 'Perfect Packaging Integration'],
  ['可无缝应用于自立袋、罐子、瓶子和盒子。我们的标签设计与 Achieve Pack 的软包装解决方案完美配合，为您的整个产品线打造统一的品牌体验。',
   'Seamlessly applicable to stand-up pouches, jars, bottles, and boxes. Our labels are designed to work perfectly with Achieve Pack\'s flexible packaging solutions, creating a unified brand experience for your entire product line.'],
  ['无起订量限制，少量也可印刷', 'No minimum order quantity, small batches welcome'],
  ['设计确认后 2-3 个工作日发货', 'Ships within 2-3 business days after design confirmation'],
  ['专业设计审核与建议', 'Professional design review and suggestions'],
  ['简便应用，专业效果', 'Easy Application, Professional Results'],
  ['我们的纸张标签设计便于撕下即贴。高分辨率印刷确保色彩鲜艳、边缘清晰，为您的产品带来专业、高端的外观。',
   'Our paper labels are designed for peel-and-stick convenience. High-resolution printing ensures vibrant colors and sharp edges, giving your products a professional, premium look.'],
  ['多种形状与尺寸选择', 'Multiple shapes and sizes available'],
  ['高品质印刷效果', 'High quality printing results'],
  ['丰富材质选择', 'Rich Material Selection'],
  ['提供多种材质以匹配您的应用场景：日常使用的白色哑光、适合潮湿环境的防水材质、食品和化妆品专用的耐油材质，以及持久耐用的防刮材质。',
   'Multiple materials to match your application: white matte for everyday use, waterproof for humid environments, oil-resistant for food and cosmetics, and scratch-resistant for lasting durability.'],
  ['白色哑光纸', 'White Matte Paper'],
  ['防水材质', 'Waterproof Material'],
  ['耐油材质', 'Oil-Resistant Material'],
  
  // More complex phrases
  ['瓦楞紙郵寄boxes', 'Corrugated Mailer Boxes'],
  ['紙卡折boxes', 'Cardboard Folding Boxes'],
  ['rigidPaper Boxes + 金箔', 'Rigid Paper Boxes + Gold Foil'],
  ['FSCCertification材質', 'FSC Certified Materials'],
  ['retail展示', 'Retail Display'],
  ['Chocolate棒、茶units', 'Chocolate Bars, Tea Units'],
  ['Premium chocolates、禮products', 'Premium Chocolates, Gift Products'],
  ['🌱 Eco-friendly優先', '🌱 Eco-friendly Priority'],
  ['Paper BoxesPackagingsuitable合HighpremiumLuxuriouspositioningProduct', 
   'Paper boxes packaging suitable for high-premium luxurious positioning products'],
  ['需運輸保護choose瓦楞紙', 'For shipping protection choose corrugated cardboard'],
  ['追求ultra致Luxurious感choose金箔Embossing', 'For ultra luxurious feel choose gold foil embossing'],
  ['Eco-friendly優先chooseFSCCertification材質', 'For eco-friendly priority choose FSC certified materials'],
  
  // VacuumPouchesPage specific
  ['Sous VidefreshnessMarket', 'Sous Vide Freshness Market'],
  ['can煮vacuumbagsRequirementsyeargrowth18%', 'Cookable vacuum bags requirements yearly growth 18%'],
  ['耐溶focused', 'Heat Resistant'],
  ['PA/PE 尼龍', 'PA/PE Nylon'],
  ['Fresh meat類、Seafood', 'Fresh Meat, Seafood'],
  ['PA/PE can煮', 'PA/PE Cookable'],
  ['Sous Vide烹飪', 'Sous Vide Cooking'],
  ['殺菌bags Retort', 'Sterilization Retort Bags'],
  ['常溫即food', 'Ready-to-Eat Food'],
  ['Eco-friendly優先Product', 'Eco-friendly Priority Products'],
  ['vacuumbagsrequireHighbarrierMaterial', 'Vacuum bags require high barrier materials'],
  ['Fresh meat類choosePA/PE尼龍材質', 'For fresh meat choose PA/PE nylon materials'],
  ['Sous Videchoose耐煮type', 'For Sous Vide choose cookable type'],
  ['如Eco-friendly優先canchooseMono PERecyclable版本', 'If eco-friendly priority, can choose Mono PE recyclable version'],
  
  // SideGussetBagsPage specific
  ['Side gussetbagsiscoffeeClassicPackagingFormat', 'Side gusset bags are the classic coffee packaging format'],
  ['需maximum佳FreshnesseffectchooseAluminum Foil Laminate', 'For maximum freshness effect choose aluminum foil laminate'],
  ['追求Eco-friendlyimagecanchooseMono PERecyclable材質', 'For eco-friendly image can choose Mono PE recyclable material'],
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
