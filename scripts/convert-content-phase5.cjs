const fs = require('fs');
const path = require('path');

// Phase 5 - Final cleanup of remaining fragments
const contentReplacements = [
  // Side Gusset remaining
  ['可正常釋放', 'can release normally'],
  ['同', 'while'],
  ['保持', 'maintaining'],
  ['美觀', 'aesthetics'],
  ['精', 'Specialty'],
  ['袋', 'bags'],
  ['全球側風琴袋', 'Global side gusset bag'],
  ['最大', 'largest'],
  
  // Custom Boxes remaining
  ['壓紋', 'Embossing'],
  ['盒', 'boxes'],
  ['售價', 'retail price'],
  ['聹予率', 'conversion rate'],
  ['差異化重要優勢', 'differentiation advantage'],
  ['銀售額', 'sales'],
  ['全球', 'Global'],
  ['看重', 'value'],
  
  // Vacuum Pouches remaining
  ['黃油', 'Butter'],
  ['奶酥', 'Cream cheese'],
  ['廠', 'factory'],
  ['真空袋', 'vacuum bags'],
  ['從', 'from'],
  ['天延長', 'days extended'],
  ['天', 'days'],
  ['滿足了跨地區配送', 'meeting cross-regional distribution'],
  
  // High Barrier remaining
  ['延長', 'extended'],
  ['減少了', 'reduced'],
  ['商', 'merchant'],
  ['損耗', 'waste'],
  ['大幅', 'significantly'],
  ['了', ''],
  
  // Surface Finish remaining
  ['擇', 'choose'],
  ['例如', 'for example'],
  
  // Barrier Options remaining
  ['需要', 'require'],
  ['需要最', 'require maximum'],
  ['別安全阻隔保護', 'safety barrier protection'],
  ['升', 'increased'],
  ['到', 'to'],
  ['阻隔', 'barrier'],
  ['貨架期從', 'shelf life from'],
  
  // Reclosure Options remaining
  ['重封功', 'reseal function'],
  ['嘴嘴壺', 'Spout pouch'],
  ['適合嘴兒', 'suitable for babies'],
  ['醬料', 'purees'],
  ['流體', 'liquid'],
  ['控制倎出', 'controlled dispensing'],
  ['大', 'large'],
  ['醫藥', 'Pharmaceutical'],
  
  // Medium Barrier remaining
  ['豆', 'beans'],
  ['滿足了', 'meeting'],
  ['反饋非常正面', 'feedback was very positive'],
  ['額', 'amount'],
  ['阻隔標準', 'barrier standard'],
  
  // Low Barrier remaining
  ['形象大幅', 'image significantly'],
  ['認可度', 'approval rating'],
  ['佔', 'share'],
  ['率', 'rate'],
  ['全球可堆肥', 'Global compostable'],
  
  // E-commerce remaining
  ['電商', 'e-commerce'],
  ['销售', 'sales'],
  ['從硬盒', 'from rigid boxes'],
  ['到軟袋', 'to flexible bags'],
  ['運費', 'shipping costs'],
  ['而且', 'and'],
  ['上晒單率提', 'unboxing rate improved'],
  
  // Coffee Roaster remaining
  ['擇正確方案', 'choosing the right solution'],
  ['特調', 'specialty blends'],
  ['雨林聯盟', 'Rainforest Alliance'],
  ['訂閱模式', 'subscription model'],
  ['到可堆肥', 'to compostable'],
  
  // Corporate Sustainability remaining
  ['提供量身定制', 'provide tailored'],
  ['保健', 'healthcare'],
  ['綠色', 'green'],
  ['消費', 'consumer'],
  ['滿足監管', 'meeting regulatory'],
  ['形象', 'image'],
  ['整合全', 'integrating all'],
  ['塑料使', 'plastic use'],
  
  // Artisan Producers remaining
  ['精制', 'refined'],
  ['農夫市集攻商', 'farmers market vendors'],
  ['農市', 'farmers market'],
  ['地特產', 'local specialties'],
  ['小批量', 'small batch'],
  ['限量版', 'limited edition'],
  ['季節', 'seasonal'],
  
  // Eco Friendly Food remaining
  ['首先考慮', 'first consider'],
  ['其次評估', 'then evaluate'],
  ['回收基礎設施', 'recycling infrastructure'],
  ['法規', 'regulations'],
  ['擇最適合您', 'choose the best for your'],
  
  // Green Coffee remaining
  ['烘焙商', 'roasters'],
  ['啡豆', 'coffee beans'],
  ['須綜合考慮烘焙程度', 'must consider roast level'],
  ['週期', 'cycle'],
  ['定位', 'positioning'],
  ['烘焙商可', 'roasters can'],
  
  // Recyclable Snack remaining
  ['進入更', 'gaining access to more'],
  ['重視', 'focused on'],
  ['傳統', 'traditional'],
  ['與', 'with'],
  ['單一', 'mono-material'],
  ['差異', 'difference'],
  ['能', 'performance'],
  ['不', 'not'],
  
  // Eco Packaging Regulations remaining
  ['透過', 'through'],
  
  // Low MOQ Startup remaining
  ['創業', 'Startup'],
  ['餘庫存', 'excess inventory'],
  ['與優勢', 'and benefits'],
  ['擇最適合創業階段方案', 'choose the best for your startup stage'],
  ['創業初期', 'Early stage startups'],
  ['從數位印刷開始', 'start with digital printing'],
  ['小訂單驗證', 'validate with small orders'],
  ['反應', 'response'],
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

console.log(`\nPhase 5 total replacements: ${totalReplacements}`);

// Final check for remaining Chinese
console.log('\nFinal check for remaining Chinese...');
let remainingFiles = [];
files.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    const chineseMatch = content.match(/[\u4e00-\u9fff]+/g);
    if (chineseMatch) {
      remainingFiles.push({ file: filePath, count: chineseMatch.length, samples: [...new Set(chineseMatch)].slice(0, 10) });
    }
  }
});

if (remainingFiles.length > 0) {
  console.log('\nFiles still with Chinese:');
  remainingFiles.forEach(f => console.log(`  ${f.file}: ${f.count} - ${f.samples.join(', ')}`));
} else {
  console.log('All Chinese characters converted to English!');
}
