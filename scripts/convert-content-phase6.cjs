const fs = require('fs');
const path = require('path');

// Phase 6 - More cleanup
const contentReplacements = [
  // Remaining fragments from various files
  ['側風琴', 'Side gusset'],
  ['領域', 'sector'],
  ['增速', 'growth rate'],
  ['推動', 'driving'],
  ['回歸', 'return'],
  ['偶好', 'preference'],
  ['外觀', 'appearance'],
  ['排氣閥標配', 'degassing valve standard'],
  ['配備單向排氣閥', 'equipped with one-way degassing valve'],
  ['牛皮紙', 'Kraft paper'],
  
  ['購買決策', 'purchase decisions'],
  ['願', 'willing'],
  ['付溫價', 'pay premium'],
  ['意識', 'awareness'],
  ['開箱體驗', 'unboxing experience'],
  ['第一印象', 'first impression'],
  ['標配', 'standard'],
  ['型', 'type'],
  ['結構強度', 'structural strength'],
  ['適', 'suitable'],
  
  ['真空', 'vacuum'],
  ['也', 'also'],
  ['出貨', 'shipment'],
  ['相', 'compared'],
  ['普通', 'standard'],
  ['肌寵', 'muscle care'],
  ['砲舖新', 'freshness'],
  ['可煮真空', 'boil-in-bag vacuum'],
  ['增', 'growth'],
  
  ['潤空間', 'margin'],
  ['標準', 'standard'],
  ['極', 'ultra'],
  ['氧氣', 'oxygen'],
  ['結構', 'structure'],
  ['持續上', 'continued'],
  ['單件', 'per unit'],
  ['粉', 'powder'],
  ['鋁箔', 'aluminum foil'],
  
  ['最', 'maximum'],
  ['貨架期', 'shelf life'],
  ['創辦人', 'Founder'],
  ['持續', 'continued'],
  ['解', 'solution'],
  ['幫助您做出更好', 'help you make better'],
  ['考慮', 'considerations'],
  ['結構因其', 'structure for its'],
  ['新寵', 'favorite'],
  ['份', 'portion'],
  
  ['兒童安全鎖', 'Child-resistant lock'],
  ['強制', 'mandatory'],
  ['回購', 'repurchase'],
  ['反映很喜歡單手就', 'feedback loves single-hand'],
  ['操作', 'operation'],
  ['經理', 'Manager'],
  ['重封', 'reseal'],
  ['便', 'convenient'],
  ['越來越', 'increasingly'],
  
  ['滿足', 'meet'],
  ['領先', 'leading'],
  ['材質結構成主流', 'material structure becoming mainstream'],
  ['甘蔗', 'sugarcane'],
  ['碳負', 'carbon negative'],
  ['回收塑料', 'recycled plastic'],
  ['循環經濟', 'circular economy'],
  
  ['偏好', 'preference'],
  ['愿付溫價', 'willing to pay premium'],
  ['家庭可堆肥成主流', 'home compostable becoming mainstream'],
  ['達', 'reaching'],
  
  ['電', 'e-commerce'],
  ['硬', 'rigid'],
  ['軟', 'flexible'],
  ['上晒單', 'unboxing share'],
  ['提', 'improved'],
  ['倍', 'times'],
  ['體驗', 'experience'],
  ['核心關注點', 'core focus'],
  ['潛力', 'potential'],
  
  ['正確方案', 'right solution'],
  ['訂閱', 'subscription'],
  ['戶', 'customer'],
  ['很', 'very'],
  ['說這', 'said this'],
  ['他們', 'they'],
  ['重要原因', 'key reason'],
  
  ['量', 'volume'],
  ['度', 'degree'],
  ['非常亮眼', 'very impressive'],
  ['異展總監', 'Business Director'],
  ['投資者', 'investors'],
  ['都越來越', 'increasingly'],
  ['表現', 'performance'],
  ['塑料減量', 'plastic reduction'],
  ['文件', 'documents'],
  ['完整', 'complete'],
  
  ['正確', 'correct'],
  ['制', 'production'],
  ['農夫市集攻', 'farmers market vendor'],
  ['新', 'new'],
  ['測試', 'test'],
  ['起訂讓我可以測試', 'MOQ lets me test'],
  ['無需擔心庫存壓力', 'without inventory pressure'],
  ['現', 'now'],
  ['我', 'I'],
  ['農夫市集非常受歡迎', 'very popular at farmers markets'],
  
  ['最適合您', 'best for your'],
  ['平衡', 'balance'],
  ['烘焙', 'roasting'],
  ['啡', 'coffee'],
  ['可', 'can'],
  ['業', 'commercial'],
  ['可優先考慮', 'can prioritize'],
  ['方案', 'solution'],
  
  ['部分', 'partial'],
  ['於', 'in'],
  ['數', 'number'],
  ['最佳', 'best'],
  ['因', 'because'],
  ['北美', 'North America'],
  ['歐洲都', 'Europe both'],
  ['廣泛', 'extensive'],
  ['薄膜', 'film'],
  
  ['優勢', 'advantages'],
  ['階段方案', 'stage solution'],
  ['初期', 'early stage'],
  ['數位印刷開始', 'digital printing start'],
  ['效果', 'effect'],
  ['當', 'when'],
  ['銷量', 'sales volume'],
  ['超過', 'exceeds'],
  ['切換', 'switch'],
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

console.log(`\nPhase 6 total replacements: ${totalReplacements}`);

// Final check for remaining Chinese
console.log('\nFinal check for remaining Chinese...');
let remainingFiles = [];
files.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    const chineseMatch = content.match(/[\u4e00-\u9fff]+/g);
    if (chineseMatch) {
      remainingFiles.push({ file: filePath, count: chineseMatch.length });
    }
  }
});

if (remainingFiles.length > 0) {
  console.log('\nFiles still with Chinese (count only):');
  remainingFiles.forEach(f => console.log(`  ${f.file}: ${f.count}`));
  console.log(`\nTotal files with remaining Chinese: ${remainingFiles.length}`);
} else {
  console.log('All Chinese characters converted to English!');
}
