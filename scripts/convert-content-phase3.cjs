const fs = require('fs');
const path = require('path');

// Phase 3 - More specific replacements
const contentReplacements = [
  // Flat Pouches
  ['億', 'billion'],
  ['三邊封袋適合對', '3-side seal sachets are ideal for'],
  ['敏感的單次使用', 'cost-sensitive single-use'],
  ['如需液體', 'For liquid packaging'],
  ['選鋁箔材質', 'choose aluminum foil laminate'],
  
  // Side Gusset
  ['咖啡烘焙', 'Coffee Roasting'],
  ['精品咖啡豆', 'Specialty coffee beans'],
  ['單品豆', 'Single origin beans'],
  ['經典', 'Classic'],
  ['格式', 'Format'],
  ['商業拼配', 'Commercial blends'],
  ['茶葉', 'Tea'],
  ['散茶', 'Loose leaf tea'],
  ['花果茶', 'Fruit tea'],
  ['傳統茶', 'Traditional tea'],
  ['乾果堅果', 'Dried Fruits & Nuts'],
  ['綜合堅果', 'Mixed nuts'],
  ['乾燥水果', 'Dried fruits'],
  ['禮品裝', 'Gift packaging'],
  
  // Custom Boxes
  ['巧克力糖果', 'Chocolate & Confectionery'],
  ['精品巧克力', 'Premium chocolates'],
  ['手工糖果', 'Artisan candies'],
  ['節日', 'Holiday'],
  ['精品咖啡', 'Specialty coffee'],
  ['茶葉禮盒', 'Tea gift boxes'],
  ['健康食品', 'Health foods'],
  ['化妝品', 'Cosmetics'],
  ['護膚品', 'Skincare'],
  ['香水', 'Perfume'],
  
  // Vacuum Pouches
  ['肉類加工', 'Meat Processing'],
  ['生鮮肉', 'Fresh meat'],
  ['加工肉', 'Processed meat'],
  ['熟食', 'Deli meats'],
  ['冷凍肉品', 'Frozen meats'],
  ['海鮮', 'Seafood'],
  ['生鮮海鮮', 'Fresh seafood'],
  ['冷凍海鮮', 'Frozen seafood'],
  ['煙燻海鮮', 'Smoked seafood'],
  ['預製餐', 'Meal Prep'],
  ['即食餐', 'Ready meals'],
  ['湯底', 'Soup bases'],
  ['調理包', 'Meal kits'],
  
  // High Barrier Features
  ['接價咖啡粉', 'Ground coffee'],
  ['端茶葉', 'Premium tea'],
  ['保健品', 'Health supplements'],
  ['維生素', 'Vitamins'],
  ['蛋白粉', 'Protein powder'],
  ['藥品', 'Pharmaceuticals'],
  
  // Surface Finish
  ['燙金', 'Hot foil stamping'],
  ['年', 'year'],
  ['快速', 'rapid'],
  ['因其獨特的', 'for its unique'],
  ['成為', 'becoming'],
  ['觸感體驗成為', 'tactile experience has become popular among'],
  
  // Barrier Options
  ['不同', 'Different'],
  ['對', 'for'],
  ['能有不同', 'have different'],
  ['選擇正確的阻隔', 'Choosing the right barrier'],
  ['別是', 'particularly'],
  ['阻隔性能', 'barrier performance'],
  ['氧氣阻隔', 'Oxygen barrier'],
  ['水分阻隔', 'Moisture barrier'],
  ['香味保留', 'Aroma retention'],
  ['紫外線防護', 'UV protection'],
  
  // Reclosure Options
  ['類型對重封功能有不同', 'types have different resealability'],
  ['選擇正確的閉合方式是提升消費體驗的關鍵', 'Choosing the right closure type is key to enhancing consumer experience'],
  ['零食', 'Snacks'],
  ['滑塊拉鏈', 'Slider zipper'],
  ['按壓拉鏈', 'Press-to-close zipper'],
  ['普通拉鏈', 'Standard zipper'],
  ['撕拉條', 'Tear strip'],
  ['易撕口', 'Easy-tear notch'],
  
  // Medium Barrier
  ['烘焙咖啡豆', 'Roasted coffee beans'],
  ['單品咖啡', 'Single origin coffee'],
  ['狗糧', 'Dog food'],
  ['貓糧', 'Cat food'],
  ['寵物零食', 'Pet treats'],
  
  // Low Barrier
  ['烘焙食品', 'Baked Goods'],
  ['餅乾', 'Cookies'],
  ['曲奇', 'Crackers'],
  ['麺包', 'Bread'],
  ['糕點', 'Pastries'],
  ['穀物', 'Cereals'],
  ['麥片', 'Oatmeal'],
  ['堅果', 'Nuts'],
  
  // E-commerce Brands
  ['不同類型的電商', 'Different types of e-commerce'],
  ['有不同', 'have different'],
  ['選擇正確的方案是提升', 'Choosing the right solution is key to improving'],
  ['體驗的關鍵', 'experience'],
  ['訂閱服務', 'Subscription services'],
  ['禮品盒', 'Gift boxes'],
  ['散裝銷售', 'Bulk sales'],
  
  // Coffee Roaster
  ['的', ''],
  ['選擇正確的方案是', 'Choosing the right solution is'],
  ['小型烘焙坊', 'Small roasteries'],
  ['中型烘焙廠', 'Medium roasteries'],
  ['大型烘焙企業', 'Large roasting companies'],
  
  // Corporate Sustainability
  ['的企業對', 'companies have'],
  ['我們提供量身定制的', 'We provide tailored'],
  ['食品', 'food'],
  ['飲料', 'beverage'],
  ['零售', 'retail'],
  ['企業碳足跡', 'Corporate carbon footprint'],
  ['ESG報告', 'ESG reporting'],
  
  // Artisan Producers
  ['不同類型的手工', 'Different types of artisan'],
  ['選擇正確的', 'Choosing the right'],
  ['是', 'is'],
  ['手工烘焙', 'Artisan roasters'],
  ['手工果醬', 'Artisan jams'],
  ['手工巧克力', 'Artisan chocolates'],
  
  // Topics pages
  ['探索不同咨啡', 'Explore how different coffee'],
  ['某精品咨啡', 'A specialty coffee'],
  ['將', 'converted'],
  ['全面轉換為家庭', 'fully to home'],
  ['認同度提升', 'increased brand recognition'],
  ['採用', 'adoption'],
  ['強化健康與', 'reinforcing healthy and'],
  ['理念', 'values'],
  ['了解各', 'Learn how different'],
  ['如何', 'how'],
  ['某食品', 'A food'],
  ['透過我們的合規支持', 'through our compliance support'],
  ['獲得英國', 'gained UK'],
  ['類型的創業', 'types of startup'],
  ['如何利用低', 'how to leverage low'],
  ['某新創', 'A new startup'],
  ['用', 'used'],
  ['件起訂測試', 'unit MOQ to test'],
  ['符合', 'meets'],
  ['法規並減少塑料稅負擔', 'regulations and reduces plastic tax burden'],
  ['某', 'A'],
  ['要求', 'requirements'],
  
  // Additional common patterns
  ['如有環保要求選', 'for eco requirements choose'],
  ['可堆肥材料', 'compostable materials'],
  ['評價', 'reviews'],
  ['統計', 'statistics'],
  ['預測', 'forecast'],
  ['合規', 'compliance'],
  ['證明', 'documentation'],
  ['審核', 'audits'],
  ['節省', 'saving'],
  ['轉換', 'conversion'],
  ['升級', 'upgrade'],
  ['增加', 'increase'],
  ['提升', 'improve'],
  ['降低', 'reduce'],
  ['擴大', 'expand'],
  ['覆蓋', 'coverage'],
  ['月', 'month'],
  ['萬', '0,000'],
  ['包', 'units'],
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

console.log(`\nPhase 3 total replacements: ${totalReplacements}`);

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
  remainingFiles.forEach(f => console.log(`  ${f.file}: ${f.count} Chinese strings. Examples: ${f.samples.join(', ')}`));
} else {
  console.log('All Chinese characters converted to English!');
}
