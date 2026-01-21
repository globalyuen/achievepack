const fs = require('fs');
const path = require('path');

// Additional content replacements - Phase 2
const contentReplacements = [
  // Surface Finish Page
  ['不同行業對表面處理有不同需求', 'Different industries have different surface finish requirements'],
  ['選擇正確的塗層是品牌差異化的關鍵', 'Choosing the right coating is key to brand differentiation'],
  ['端食品品牌', 'Premium Food Brands'],
  ['軟觸感塗層', 'Soft-touch coating'],
  ['燙金工藝提升品牌價値感', 'Hot foil stamping elevates brand perceived value'],
  ['有機天然品牌', 'Organic Natural Brands'],
  ['啞光處理', 'Matte finish'],
  ['牌紙外觀傳達自然環保理念', 'Kraft paper look conveys natural eco-friendly values'],
  ['零售食品', 'Retail Foods'],
  ['光面處理', 'Gloss finish'],
  ['鮮豔色彩增強貨架吸引力', 'Vibrant colors enhance shelf appeal'],
  ['從普通光面升級到軟觸感', 'After upgrading from standard gloss to soft-touch'],
  ['後', 'After'],
  ['我們的產品零售價提升了', 'our product retail price increased by'],
  ['客戶評價', 'Customer feedback'],
  ['度賛賞包裝質感', 'highly praised the packaging texture'],
  ['精品堅果品牌創辦人', 'Premium nut brand founder'],
  ['端表面處理市場持續增長', 'Premium surface finish market continues to grow'],
  ['消費者對包裝質感的要求越來越', 'Consumer demands for packaging texture are increasingly'],
  ['消費者重視包裝觸感', 'of consumers value packaging texture'],
  ['增長', 'growth'],
  ['全球包裝印刷加工市場', 'Global packaging print finishing market'],
  ['年增長', 'annual growth'],
  ['品牌重視包裝差異化', 'of brands prioritize packaging differentiation'],
  ['穩定', 'stable'],
  ['軟觸感塗層增長', 'Soft-touch coating growth'],
  ['快速增長', 'rapid growth'],
  ['軟觸感塗層因其獨特的觸感體驗成為', 'Soft-touch coating has become popular among'],
  ['端品牌新寵', 'premium brands for its unique tactile experience'],
  ['尤其在咖啡', 'Especially in coffee'],
  ['堅果', 'nuts'],
  ['寵物食品等類別增長明顯', 'and pet food categories with significant growth'],
  ['預計到', 'Expected by'],
  ['年市場份額將達剀', 'market share will reach'],
  ['不同表面處理的效果對比', 'Comparison of different surface finish effects'],
  ['幫助您選擇最適合的解決方案', 'to help you choose the best solution'],
  ['表面處理', 'Surface Finish'],
  ['視覺效果', 'Visual Effect'],
  ['觸感體驗', 'Tactile Experience'],
  ['適用品牌', 'Suitable Brands'],
  ['影響', 'Cost Impact'],
  ['光面', 'Gloss'],
  ['鮮豔', 'Vibrant'],
  ['光澤', 'Shiny'],
  ['平滑', 'Smooth'],
  ['飲料', 'Beverages'],
  ['基準價', 'Baseline'],
  ['啞光', 'Matte'],
  ['優雅', 'Elegant'],
  ['精緻', 'Sophisticated'],
  ['端品牌', 'Premium brands'],
  ['有機', 'Organic'],
  ['軟觸感', 'Soft-touch'],
  ['級', 'Premium'],
  ['奠重', 'Luxurious'],
  ['絲絨', 'Velvet'],
  ['濡滑', 'Silky'],
  ['奢華品牌', 'Luxury brands'],
  ['美妆', 'Beauty'],
  ['局部', 'Spot UV'],
  ['對比', 'Contrast'],
  ['突出', 'Highlight'],
  ['紋理', 'Textured'],
  ['品牌強調', 'Brand emphasis'],
  ['個', ''],
  ['金屬', 'Metallic'],
  ['奢華', 'Luxurious'],
  ['光滑', 'Smooth'],
  ['端奢華品', 'Premium luxury'],
  ['選型建議', 'Selection Guide'],
  ['選擇表面處理時', 'When choosing surface finish'],
  ['建議從品牌定位', 'consider brand positioning'],
  ['目標客戶群和預算三個維度考慮', 'target customer segment and budget'],
  ['多種處理組合可以提升包裝層次感', 'Combining multiple finishes can enhance packaging sophistication'],
  ['例如啞光', 'for example matte'],
  ['組合', 'combination'],
  
  // Additional common patterns
  ['佔比', 'Share:'],
  ['場景', 'Scenario'],
  ['數據', 'Data'],
  ['市場', 'Market'],
  ['趨勢', 'Trend'],
  ['分析', 'Analysis'],
  ['洞察', 'Insights'],
  ['建議', 'Recommendation'],
  ['案例', 'Case'],
  ['成功', 'Success'],
  ['故事', 'Story'],
  ['客戶', 'Customer'],
  ['解決方案', 'Solution'],
  ['需求', 'Requirements'],
  ['價格', 'Price'],
  ['成本', 'Cost'],
  ['品質', 'Quality'],
  ['認證', 'Certification'],
  ['環保', 'Eco-friendly'],
  ['可持續', 'Sustainable'],
  ['包裝', 'Packaging'],
  ['材料', 'Material'],
  ['產品', 'Product'],
  ['品牌', 'Brand'],
  ['消費者', 'Consumers'],
  ['行業', 'Industry'],
  ['應用', 'Applications'],
  ['規模', 'Size'],
  ['年份', 'Year'],
  
  // High barrier page
  ['高阻隔', 'High Barrier'],
  ['中阻隔', 'Medium Barrier'],
  ['低阻隔', 'Low Barrier'],
  
  // Vacuum pouches
  ['真空包裝', 'Vacuum Packaging'],
  ['保鮮', 'Freshness'],
  ['密封', 'Sealing'],
  
  // Boxes
  ['紙盒', 'Paper Boxes'],
  ['展示盒', 'Display Boxes'],
  ['禮盒', 'Gift Boxes'],
  
  // Side gusset
  ['側邊風琴', 'Side Gusset'],
  ['咖啡袋', 'Coffee Bags'],
  
  // Solutions pages
  ['電商品牌', 'E-commerce Brands'],
  ['創業者', 'Startup Founders'],
  ['食品製造商', 'Food Manufacturers'],
  ['咖啡烘焙商', 'Coffee Roasters'],
  ['企業可持續發展', 'Corporate Sustainability'],
  ['手工生產者', 'Artisan Producers'],
  ['產品開發者', 'Product Developers'],
  ['零食品牌經理', 'Snack Brand Managers'],
  
  // Industry pages
  ['零食食品', 'Snacks & Food'],
  ['嬰兒食品', 'Baby Food'],
  ['營養補充品', 'Supplements & Powders'],
  ['咖啡茶葉', 'Coffee & Tea'],
  ['調味醬料', 'Sauces & Condiments'],
  ['寵物食品', 'Pet Food'],
  ['冷凍食品', 'Frozen Food'],
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

console.log(`\nPhase 2 total replacements: ${totalReplacements}`);

// Final check for remaining Chinese
console.log('\nFinal check for remaining Chinese...');
let remainingFiles = [];
files.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    const chineseMatch = content.match(/[\u4e00-\u9fff]+/g);
    if (chineseMatch) {
      remainingFiles.push({ file: filePath, count: chineseMatch.length, samples: [...new Set(chineseMatch)].slice(0, 5) });
    }
  }
});

if (remainingFiles.length > 0) {
  console.log('\nFiles still with Chinese:');
  remainingFiles.forEach(f => console.log(`  ${f.file}: ${f.count} Chinese strings. Examples: ${f.samples.join(', ')}`));
} else {
  console.log('All Chinese characters converted to English!');
}
