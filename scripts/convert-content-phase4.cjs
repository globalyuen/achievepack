const fs = require('fs');
const path = require('path');

// Phase 4 - Final cleanup
const contentReplacements = [
  // Remaining fragments
  ['如有', 'For'],
  ['選', 'choose'],
  ['散裝', 'Bulk'],
  ['山茶', 'Camellia tea'],
  ['大米', 'Rice'],
  ['麻', 'Hemp'],
  ['豆類大容量', 'Legumes bulk'],
  ['我們', 'Our'],
  ['側風琴袋加排氣閥', 'Side gusset bag with degassing valve'],
  ['新鮮烘焙咖啡', 'Freshly roasted coffee'],
  ['端', 'premium'],
  ['訂閱盒', 'Subscription boxes'],
  ['精品禮品', 'Premium gifts'],
  ['企業禮品', 'Corporate gifts'],
  ['婚慶喜糖', 'Wedding favors'],
  ['套裝', 'Sets'],
  ['金箔壓印', 'Gold foil stamping'],
  ['水產', 'Aquaculture'],
  ['鮮魚', 'Fresh fish'],
  ['燻鮭魚', 'Smoked salmon'],
  ['貝類', 'Shellfish'],
  ['冷凍', 'Frozen'],
  ['乳制品', 'Dairy products'],
  ['套口奶酪', 'Cheese blocks'],
  ['切片奶酪', 'Sliced cheese'],
  ['蟋白粉', 'Protein powder'],
  ['營養補充劑', 'Nutritional supplements'],
  ['嬰兒配方奶', 'Infant formula'],
  ['輔食', 'Baby food'],
  ['營養粉', 'Nutrition powder'],
  ['我們營養補充劑', 'Our nutritional supplements'],
  ['等類別', 'categories'],
  ['明顯', 'significant'],
  ['品', 'products'],
  ['選擇', 'selection'],
  ['時', 'when'],
  ['目標', 'target'],
  ['群和預算三維度考慮', 'segment and budget'],
  ['能有', 'have'],
  ['關鍵', 'key'],
  ['咖啡', 'coffee'],
  ['等需要精準氧氣和', 'etc. require precise oxygen and'],
  ['營養補充劑等需要', 'supplements etc. require'],
  ['阻隔保護活性成分', 'barrier to protect active ingredients'],
  ['嬰幼兒', 'Infant'],
  ['輔食等需要最', 'baby food etc. require maximum'],
  ['類型', 'types'],
  ['重封功能有', 'resealability'],
  ['壓合拉鏈幫助保持', 'Press-to-close zipper helps maintain'],
  ['和', 'and'],
  ['新鮮度', 'freshness'],
  ['嬰兒醬料', 'Baby purees'],
  ['嘴嘴壺設計適合嬰兒', 'Spout pouch design suitable for babies'],
  ['泥', 'puree'],
  ['寵物', 'Pet'],
  ['種子', 'Seeds'],
  ['乾果', 'Dried fruits'],
  ['達到了', 'achieved'],
  ['同時滿足了', 'while meeting'],
  ['雜糧', 'Grains'],
  ['草藥', 'Herbs'],
  ['草本茶', 'Herbal tea'],
  ['香料', 'Spices'],
  ['類型電商', 'e-commerce types'],
  ['有', 'have'],
  ['健康', 'Health'],
  ['等線上销售', 'online sales'],
  ['線上', 'Online'],
  ['等', 'etc.'],
  ['寵物電商', 'Pet e-commerce'],
  ['選擇正確方案', 'Choosing the right solution'],
  ['精品', 'Specialty'],
  ['特調咖啡', 'Specialty blends'],
  ['競賽', 'Competition'],
  ['公平貿易', 'Fair trade'],
  ['企業', 'Enterprise'],
  ['我們提供量身定制', 'We provide tailored'],
  ['集團', 'Group'],
  ['多', 'Multiple'],
  ['統一管理', 'Unified management'],
  ['支持', 'Support'],
  ['健康保健企業', 'Healthcare companies'],
  ['類型手工', 'artisan types'],
  ['手工', 'Artisan'],
  ['生產者', 'Producers'],
  ['巧克力', 'Chocolate'],
  ['果醬', 'Jam'],
  ['轉', 'switched'],
  ['在', 'in'],
  ['銷售', 'sales'],
  ['好感度', 'favorability'],
  ['比較', 'Compare'],
  ['特性', 'properties'],
  ['選擇最適合您', 'choose the best for your'],
  ['探索', 'Explore'],
  ['咨啡', 'coffee'],
  ['通路銷售', 'channel sales'],
  ['單位', 'unit'],
  ['端烘焙商', 'premium roasters'],
  ['深烘焙', 'deep roast'],
  ['知名薯片', 'well-known chip'],
  ['全面', 'fully'],
  ['為', 'to'],
  ['滿意度', 'satisfaction'],
  ['並', 'and'],
  ['進入更多重視', 'gaining access to more'],
  ['性', 'focused'],
  ['通路', 'channels'],
  ['透過我們', 'through our'],
  ['歐盟', 'EU'],
  ['美國三大', 'and US major'],
  ['塑料稅', 'plastic tax'],
  ['類型創業', 'startup types'],
  ['利', 'leverage'],
  ['低', 'low'],
  ['種', 'types'],
  ['設計', 'designs'],
  ['確定最佳方案', 'selecting the best option'],
  ['至', 'to'],
  ['件訂單', 'unit orders'],
  ['咖啡豆', 'coffee beans'],
];

// Files to process
const files = [
  'src/pages/packaging/FlatPouchesPage.tsx',
  'src/pages/packaging/SideGussetBagsPage.tsx',
  'src/pages/packaging/SpoutPouchesPage.tsx',
  'src/pages/packaging/StandUpPouchesPage.tsx',
  'src/pages/packaging/FlatBottomBagsPage.tsx',
  'src/pages/packaging/CustomBoxesPage.tsx',
  'src/pages/packaging/VacuumPouchesPage.tsx',
  'src/pages/materials/KraftHighBarrierPage.tsx',
  'src/pages/materials/IndustrialCompostablePage.tsx',
  'src/pages/materials/HomeCompostablePage.tsx',
  'src/pages/materials/KraftMediumBarrierPage.tsx',
  'src/pages/materials/RecyclableMonoPPPage.tsx',
  'src/pages/materials/RecyclableMonoPEPage.tsx',
  'src/pages/materials/PCRPage.tsx',
  'src/pages/materials/KraftLowBarrierPage.tsx',
  'src/pages/materials/CompostablePage.tsx',
  'src/pages/materials/BioPEPage.tsx',
  'src/pages/features/HighBarrierPage.tsx',
  'src/pages/features/SurfaceFinishPage.tsx',
  'src/pages/features/BarrierOptionsPage.tsx',
  'src/pages/features/ReclosureOptionsPage.tsx',
  'src/pages/features/MediumBarrierPage.tsx',
  'src/pages/features/LowBarrierPage.tsx',
  'src/pages/solutions/EcommerceBrandPage.tsx',
  'src/pages/solutions/StartupFounderPage.tsx',
  'src/pages/solutions/FoodManufacturerPage.tsx',
  'src/pages/solutions/CoffeeRoasterPage.tsx',
  'src/pages/solutions/CorporateSustainabilityPage.tsx',
  'src/pages/solutions/ArtisanProducerPage.tsx',
  'src/pages/solutions/ProductDeveloperPage.tsx',
  'src/pages/solutions/SnackBrandManagerPage.tsx',
  'src/pages/industry/SnacksFoodPage.tsx',
  'src/pages/industry/BabyFoodPage.tsx',
  'src/pages/industry/SupplementsPowdersPage.tsx',
  'src/pages/industry/CoffeeTeaPage.tsx',
  'src/pages/industry/SaucesCondimentsPage.tsx',
  'src/pages/industry/PetFoodPage.tsx',
  'src/pages/industry/FrozenFoodPage.tsx',
  'src/pages/topics/EcoFriendlyFoodPackagingPage.tsx',
  'src/pages/topics/CompostableBabyFoodBagsPage.tsx',
  'src/pages/topics/GreenCoffeeMaterialsPage.tsx',
  'src/pages/topics/RecyclableSnackPackagingPage.tsx',
  'src/pages/topics/CustomPrintedSustainablePouchesPage.tsx',
  'src/pages/topics/EcoPackagingRegulationsPage.tsx',
  'src/pages/topics/DigitalPrintingEcoPackagingPage.tsx',
  'src/pages/topics/CustomCompostablePouchSuppliersPage.tsx',
  'src/pages/topics/DTCSustainablePackagingPage.tsx',
  'src/pages/topics/LowMOQStartupPackagingPage.tsx',
];

let totalReplacements = 0;

files.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let fileReplacements = 0;
  
  contentReplacements.forEach(([chinese, english]) => {
    if (content.includes(chinese)) {
      content = content.split(chinese).join(english);
      fileReplacements++;
    }
  });
  
  if (fileReplacements > 0) {
    fs.writeFileSync(fullPath, content);
    totalReplacements += fileReplacements;
    console.log(`✓ ${filePath}: ${fileReplacements} replacements`);
  }
});

console.log(`\nPhase 4 total replacements: ${totalReplacements}`);

// Final check for remaining Chinese
console.log('\nFinal check for remaining Chinese...');
let remainingFiles = [];
files.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    const chineseMatch = content.match(/[\u4e00-\u9fff]+/g);
    if (chineseMatch) {
      remainingFiles.push({ file: filePath, count: chineseMatch.length, samples: [...new Set(chineseMatch)].slice(0, 8) });
    }
  }
});

if (remainingFiles.length > 0) {
  console.log('\nFiles still with Chinese:');
  remainingFiles.forEach(f => console.log(`  ${f.file}: ${f.count} - ${f.samples.join(', ')}`));
} else {
  console.log('All Chinese characters converted to English!');
}
