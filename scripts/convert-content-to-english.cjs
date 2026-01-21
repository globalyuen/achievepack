const fs = require('fs');
const path = require('path');

// Content replacement patterns - Chinese to English
const contentReplacements = [
  // Common industry-scenarios content
  ['探索各行業如何運用', 'Explore how different industries leverage'],
  ['了解不同', 'Learn how different'],
  ['如何運用', 'leverage'],
  ['提升品牌價值', 'enhance brand value'],
  ['提升市場競爭力', 'gain competitive advantage'],
  ['成功上市', 'successfully launch'],
  ['達成可持續目標', 'achieve sustainability goals'],
  ['應對環保包裝法規變化', 'navigate eco-packaging regulations'],
  
  // Industry cards headers
  ['有機健康食品', 'Organic Health Foods'],
  ['有機食品品牌', 'Organic Food Brands'],
  ['連鎖超市通路', 'Retail Supermarket Chains'],
  ['大型零售商', 'Large Retailers'],
  ['高端精品食品', 'Premium Specialty Foods'],
  ['出口品牌', 'Export Brands'],
  ['精品單品烘焙商', 'Specialty Coffee Roasters'],
  ['商業咨啡烘焙廠', 'Commercial Coffee Roasters'],
  ['B Corp認證品牌', 'B Corp Certified Brands'],
  ['健康零食品牌', 'Health Snack Brands'],
  ['大型零食廠商', 'Large Snack Manufacturers'],
  ['有機零食品牌', 'Organic Snack Brands'],
  ['Kickstarter專案', 'Kickstarter Projects'],
  ['DTC電商品牌', 'DTC E-commerce Brands'],
  ['農夫市集賣家', 'Farmers Market Sellers'],
  ['食品調味料 Food & Condiments', 'Food & Condiments'],
  ['美容樣品 Cosmetic Samples', 'Cosmetic Samples'],
  ['醫藥保健 Pharmaceutical', 'Pharmaceutical & Health'],
  
  // Industry descriptions
  ['有機品牌使用可堆肥包裝強化天然定位，消費者認同度提升40%', 'Organic brands use compostable packaging to reinforce natural positioning, increasing consumer approval by 40%'],
  ['大型零售商要求可回收包裝，符合EPR法規並減少塑料稅負擔', 'Major retailers require recyclable packaging to comply with EPR regulations and reduce plastic tax burden'],
  ['精品食品品牌採用生物基材料展現ESG承諾，吸引環保意識消費者', 'Premium food brands adopt bio-based materials to demonstrate ESG commitment, attracting eco-conscious consumers'],
  ['有機品牌採用TUV認證可堆肥包裝，符合歐美及澳洲的有機認證要求', 'Organic brands use TUV-certified compostable packaging to meet organic certification requirements in EU, US, and Australia'],
  ['零售巨頭要求供應商提供EPR合規証明，可回收包裝成為上架必要條件', 'Retail giants require suppliers to provide EPR compliance documentation, making recyclable packaging essential for shelf placement'],
  ['出口歐美的品牌需要同時滿足多國法規，我們提供全面合規支持', 'Brands exporting to EU and US must meet multi-country regulations; we provide comprehensive compliance support'],
  ['精品咨啡品牌採用家庭可堆肥包裝，強化工匠定位，吸引環保意識消費者', 'Specialty coffee brands use home-compostable packaging to reinforce artisan positioning and attract eco-conscious consumers'],
  ['大型烘焙廠使用可回收Mono-PE包裝，平衡成本與市場需求，滿足零售通路要求', 'Large roasters use recyclable Mono-PE packaging, balancing cost with market demands and retail channel requirements'],
  ['B Corp品牌採用甘蔗基Bio-PE，展現碳中和承諾，強化ESG報告數據', 'B Corp brands use sugarcane-based Bio-PE to demonstrate carbon-neutral commitment and strengthen ESG reporting'],
  ['健康零食品牌採用Mono-PE可回收包裝，強化健康與環保的品牌理念', 'Health snack brands use recyclable Mono-PE packaging to reinforce healthy and eco-friendly brand values'],
  ['大型製造商切換到單一材料包裝，滿足零售商的可持續包裝要求', 'Large manufacturers switch to mono-material packaging to meet retailer sustainability requirements'],
  ['有機品牌使用単一材料包裝配合清晰的回收標誌，提升消費者信任', 'Organic brands use mono-material packaging with clear recycling labels to increase consumer trust'],
  ['眾籌專案使用100件起訂的專業包裝，提升專案可信度，平均募資額增加40%', 'Crowdfunding projects use professional packaging with 100-unit MOQ, boosting credibility and increasing average funding by 40%'],
  ['新創電商品牌先用小訂單測試市場，用數據驗證後再擴大生產規模', 'New e-commerce brands start with small test orders, validating with data before scaling production'],
  ['小批量生產商用低MOQ包裝打造專業形象，增加新鮮食品的陳列吸引力', 'Small-batch producers use low MOQ packaging to build professional image and enhance fresh food display appeal'],
  ['醬料包、糖包、調味包、香料包', 'Sauce packets, sugar packets, seasoning sachets, spice packs'],
  ['面膜精華、乳液樣品、洗護試用', 'Face mask serums, lotion samples, skincare trials'],
  ['藥品分裝、保健品試用、營養補充劑', 'Pharmaceutical portions, supplement trials, nutrition packs'],
  
  // Percentage labels
  ['佔比 45%', '45% market share'],
  ['佔比 30%', '30% market share'],
  ['佔比 25%', '25% market share'],
  
  // Success story section
  ['客戶成功案例 Success Story', 'Customer Success Story'],
  ['客戶成功案例', 'Customer Success Story'],
  ['成功案例：', 'Success Story: '],
  ['案例分享：', 'Case Study: '],
  
  // Success story quotes
  ['「我們的醬料品牌轉用三邊封小包裝後，單位成本降低35%，且完美適配餐飲渠道的即用需求，大幅提升了市場覆蓋率。」', '"After switching to 3-side seal sachets, our condiment brand reduced unit costs by 35% while perfectly meeting food service single-use needs, significantly expanding market coverage."'],
  ['— 調味品生產商，月出貨量 200萬包', '— Condiment manufacturer, 2M+ units/month'],
  
  // Market data section
  ['環保食品包裝市場持續高速成長', 'The eco-friendly food packaging market continues rapid growth.'],
  ['環保咨啡包裝市場持續擴大，消費者需求強勁', 'The eco-friendly coffee packaging market continues to expand with strong consumer demand.'],
  ['零食行業可回收包裝市場快速增長', 'The recyclable snack packaging market is growing rapidly.'],
  ['全球包裝法規正快速變化，採取行動刻不容緩', 'Global packaging regulations are evolving rapidly; action is urgent.'],
  ['創業包裝市場數據證明低MOQ的價值', 'Startup packaging market data proves the value of low MOQ.'],
  
  // Market stats labels
  ['消費者願為環保包裝支付溢價', 'of consumers willing to pay premium for eco packaging'],
  ['可持續包裝市場年複合增長率', 'sustainable packaging market CAGR'],
  ['零售商已設定包裝可持續目標', 'of retailers have set packaging sustainability goals'],
  ['歐盟全面包裝法規生效年份', 'EU comprehensive packaging regulation effective'],
  ['全球小包裝市場規模', 'global sachet market size'],
  ['年複合增長率', 'CAGR'],
  ['餐飲市場佔比', 'food service market share'],
  ['最大終端應用', 'largest end-use sector'],
  ['亞太年消費量', 'Asia-Pacific annual consumption'],
  ['全球最大市場', 'world\'s largest market'],
  ['咨啡消費者重視包裝可持續性', 'of coffee consumers value packaging sustainability'],
  ['全球咨啡市場規模(2025)', 'global coffee market size (2025)'],
  ['可持續咨啡包裝年增長率', 'sustainable coffee packaging annual growth'],
  ['精品咨啡店已轉用環保包裝', 'of specialty coffee shops use eco-packaging'],
  ['消費者希望零食包裝可回收', 'of consumers want recyclable snack packaging'],
  ['北美軟塑料回收點', 'North American soft plastic drop-off locations'],
  ['多數零售商可回收目標年', 'target year for most retailer recyclability goals'],
  ['個月可回收包裝保質期', 'months recyclable packaging shelf life'],
  ['英國塑料稅/噸（未達30%PCR）', 'UK plastic tax/tonne (under 30% PCR)'],
  ['EU PPWR新包裝法規生效年', 'EU PPWR new packaging regulation effective'],
  ['美國已推行EPR法案的州', 'US states with EPR legislation'],
  ['英國免塑料稅最低PCR比例', 'UK minimum PCR for plastic tax exemption'],
  ['傳統供應商常見MOQ', 'typical traditional supplier MOQ'],
  ['我們的數位印刷MOQ', 'our digital printing MOQ'],
  ['創業公司測試後援大訂單', 'of startups scale up after testing'],
  ['數位印刷製版費用', 'digital printing plate fees'],
  
  // Trend analysis section
  ['市場趨勢分析', 'Market Trend Analysis'],
  ['市場趨勢洞察', 'Market Trend Insights'],
  ['法規趨勢預測', 'Regulatory Trend Forecast'],
  ['創業成功統計', 'Startup Success Statistics'],
  ['食品行業正經歷包裝革命。消費者對greenwashing越來越敏感，要求第三方認證背書。擁有明確環保包裝策略的品牌在市場中獲得明顯競爭優勢。', 'The food industry is undergoing a packaging revolution. Consumers are increasingly sensitive to greenwashing and demand third-party certification. Brands with clear eco-packaging strategies gain significant competitive advantage.'],
  ['咨啡行業是環保包裝採用的先驅者。消費者對塑料咨啡袋的負面印象日益加深，轉用可堆肥或可回收包裝已成為品牌差異化的重要策略。', 'The coffee industry leads in eco-packaging adoption. Consumer sentiment against plastic coffee bags is growing, and switching to compostable or recyclable packaging has become a key brand differentiation strategy.'],
  ['零食包裝是最難實現可回收的包裝類別之一，但單一材料技術的突破讓這成為現實。提前採用的品牌將在市場中享有競爭優勢。', 'Snack packaging is one of the hardest categories to make recyclable, but mono-material technology breakthroughs have made it possible. Early adopters will gain competitive advantage in the market.'],
  ['歐盟、英國、美國各州正在加速推動包裝法規。預計2027年後，所有主要市場都將有強制性的可持續包裝要求。提前佈局的品牌將獲得先發優勢。', 'EU, UK, and US states are accelerating packaging regulations. By 2027, all major markets will have mandatory sustainable packaging requirements. Brands that prepare early will gain first-mover advantage.'],
  ['研究顯示，使用專業包裝的創業品牌在客戶第一印象評分上平均高出35%。低MOQ讓新創公司可以在有限資金下享有專業包裝的優勢。', 'Research shows startup brands with professional packaging score 35% higher on customer first impressions. Low MOQ enables startups to enjoy professional packaging benefits with limited capital.'],
  ['單次用量市場', 'Single-serve market'],
  ['便利性需求推動小包裝持續增長', 'Convenience demand drives continued sachet growth'],
  ['可堆肥材料', 'Compostable materials'],
  ['PLA等環保材料需求年增25%', 'Demand for PLA and eco-materials growing 25% annually'],
  
  // Material comparison table headers
  ['材料類型', 'Material Type'],
  ['阻隔性', 'Barrier'],
  ['保質期', 'Shelf Life'],
  ['最適食品', 'Best For'],
  ['價格區間', 'Price Range'],
  ['成本', 'Cost'],
  ['環保性', 'Eco-Friendly'],
  ['推薦應用', 'Recommended Use'],
  ['咨啡保鮮期', 'Coffee Freshness'],
  ['最適咨啡類型', 'Best Coffee Type'],
  ['套用對象', 'Target Brands'],
  ['單位成本', 'Unit Cost'],
  ['歐盟EU', 'EU'],
  ['英國UK', 'UK'],
  ['美國US', 'US'],
  ['澳洲AU', 'AU'],
  ['可回收性', 'Recyclability'],
  ['阻隔性能', 'Barrier Performance'],
  ['回收方式', 'Recycling Method'],
  ['包裝方案', 'Packaging Option'],
  ['MOQ', 'MOQ'],
  ['生產時間', 'Lead Time'],
  ['製版費', 'Plate Fee'],
  ['最適階段', 'Best Stage'],
  ['包裝類型', 'Packaging Type'],
  
  // Material types
  ['可堆肥材料', 'Compostable'],
  ['可回收Mono-PE', 'Recyclable Mono-PE'],
  ['生物基PE', 'Bio-Based PE'],
  ['PCR再生塑料', 'PCR Recycled Plastic'],
  ['TUV家庭可堆肥', 'TUV Home Compostable'],
  ['高阻隔可堆肥', 'High-Barrier Compostable'],
  ['甘蔗基Bio-PE', 'Sugarcane Bio-PE'],
  ['Kraft+PLA內襯', 'Kraft + PLA Liner'],
  ['可回收材料', 'Recyclable'],
  ['PCR內容', 'PCR Content'],
  ['食品安全', 'Food Safety'],
  ['PET/PE 透明', 'PET/PE Clear'],
  ['鋁箔複合', 'Aluminum Foil Laminate'],
  ['牛皮紙複合', 'Kraft Paper Laminate'],
  ['PLA 可堆肥', 'PLA Compostable'],
  ['傳統多層包裝', 'Traditional Multi-Layer'],
  ['Mono-PE包裝', 'Mono-PE Packaging'],
  ['Mono-PP包裝', 'Mono-PP Packaging'],
  ['高阻隔Mono-PE', 'High-Barrier Mono-PE'],
  ['數位印刷訂製', 'Digital Print Custom'],
  ['現貨+標籤', 'Stock + Labels'],
  ['柔版印刷', 'Flexographic Printing'],
  ['凹版印刷', 'Gravure Printing'],
  
  // Barrier levels
  ['中高', 'Medium-High'],
  ['高', 'High'],
  ['極高', 'Ultra-High'],
  ['中', 'Medium'],
  
  // Shelf life
  ['12-18個月', '12-18 months'],
  ['18-24個月', '18-24 months'],
  ['6-12個月', '6-12 months'],
  ['6-9個月', '6-9 months'],
  ['24+個月', '24+ months'],
  ['個月', ' months'],
  
  // Best applications
  ['有機零食、天然食品', 'Organic snacks, natural foods'],
  ['薯片、堅果、餅乾', 'Chips, nuts, crackers'],
  ['主流食品品牌', 'Mainstream food brands'],
  ['大眾市場食品', 'Mass market foods'],
  ['精品單品、限量版', 'Specialty single-origin, limited editions'],
  ['中深烘焙、啡豆', 'Medium-dark roast, whole beans'],
  ['商業拼配、大包裝', 'Commercial blends, bulk packaging'],
  ['各種咨啡類型', 'All coffee types'],
  ['淡烘焙、有機咨啡', 'Light roast, organic coffee'],
  ['高端烘焙商', 'Premium roasters'],
  ['專業烘焙廠', 'Professional roasteries'],
  ['零售通路品牌', 'Retail channel brands'],
  ['B Corp/ESG品牌', 'B Corp/ESG brands'],
  ['自然風格品牌', 'Natural-style brands'],
  ['糖包、乾燥食品', 'Sugar packets, dry foods'],
  ['醬料、藥品', 'Sauces, pharmaceuticals'],
  ['茶包、香料', 'Tea bags, spices'],
  ['有機食品、樣品', 'Organic foods, samples'],
  
  // Recyclability
  ['可回收', 'Recyclable'],
  ['不可回收', 'Not Recyclable'],
  ['部分可回收', 'Partially Recyclable'],
  ['天然外觀', 'Natural look'],
  ['難回收', 'Hard to recycle'],
  ['🌱 可堆肥', '🌱 Compostable'],
  
  // Recycling methods
  ['垃圾填埋', 'Landfill'],
  ['Store Drop-Off', 'Store Drop-Off'],
  ['檢查當地設施', 'Check local facilities'],
  
  // Expert recommendations
  ['專家建議', 'Expert Recommendation'],
  ['選材建議', 'Material Selection Guide'],
  ['選擇環保食品包裝時，首先考慮產品的阻隔需求和保質期要求，其次評估目標市場的回收基礎設施和法規要求，最後平衡成本與品牌定位。', 'When choosing eco-friendly food packaging, first consider product barrier needs and shelf life requirements, then evaluate target market recycling infrastructure and regulations, and finally balance cost with brand positioning.'],
  ['選擇咨啡包裝材料時，須綜合考慮烘焙程度、銷售週期、目標通路和品牌定位。精品烘焙商可選擇可堆肥材料，商業品牌可優先考慮可回收方案。', 'When choosing coffee packaging materials, consider roast level, sales cycle, target channels, and brand positioning. Specialty roasters can choose compostable materials, while commercial brands may prioritize recyclable options.'],
  ['對於大多數零食產品，Mono-PE是最佳可回收選擇，因為北美和歐洲都有廣泛的PE薄膜回收基礎設施。配合How2Recycle認證標籤可有效提升實際回收率。', 'For most snack products, Mono-PE is the best recyclable option as both North America and Europe have extensive PE film recycling infrastructure. Pairing with How2Recycle certified labels effectively improves actual recycling rates.'],
  ['出口多個市場的品牌應選擇可同時滿足多國法規的材料。我們提供完整的合規文件包支持客戶通過各市場審核。', 'Brands exporting to multiple markets should choose materials that meet multi-country regulations. We provide complete compliance documentation packages to help clients pass market audits.'],
  ['創業初期建議從數位印刷開始，用小訂單驗證市場反應和設計效果。當月銷量穩定超過3000件時，切換到柔版印刷可節省約30%成本。', 'For startups, we recommend starting with digital printing and validating market response with small orders. When monthly sales stabilize above 3,000 units, switching to flexo printing can save about 30% on costs.'],
  ['三邊封袋適合對成本敏感的單次使用場景。如需液體包裝選鋁箔材質；如有環保要求選PLA可堆肥材料。', '3-side seal sachets are ideal for cost-sensitive single-use applications. For liquid packaging, choose aluminum foil laminate; for eco requirements, choose PLA compostable materials.'],
  
  // Startup packaging table content
  ['100件', '100 units'],
  ['1件', '1 unit'],
  ['3000件', '3,000 units'],
  ['10000件', '10,000 units'],
  ['10-15天', '10-15 days'],
  ['3-5天', '3-5 days'],
  ['20-25天', '20-25 days'],
  ['25-35天', '25-35 days'],
  ['產品測試/創業初期', 'Product testing / Early stage'],
  ['極早期/結構測試', 'Very early / Structure testing'],
  ['成長期/量產', 'Growth / Volume production'],
  ['大規模生產', 'Large-scale production'],
  
  // Regulation table content
  ['PPWR要求', 'PPWR Required'],
  ['≥30%免稅', '≥30% Tax-free'],
  ['州別規定', 'State-specific'],
  ['自願目標', 'Voluntary targets'],
  
  // Generic phrases that appear in many files
  ['探索各行業如何運用環保食品包裝提升品牌價值。', 'Explore how different industries leverage eco-friendly food packaging to enhance brand value.'],
  ['根據咨啡類型和品牌定位選擇最合適的環保材料。', 'Select the most suitable eco-friendly materials based on coffee type and brand positioning.'],
  ['比較不同環保材料特性，選擇最適合您食品的包裝方案。', 'Compare different eco-material properties to choose the best packaging solution for your food products.'],
  ['比較傳統包裝與可回收單一材料包裝的差異。', 'Compare traditional packaging with recyclable mono-material packaging.'],
  ['比較不同材料的法規合規性，選擇最佳方案。', 'Compare regulatory compliance of different materials to choose the best solution.'],
  ['比較不同包裝方案的成本與優勢，選擇最適合創業階段的方案。', 'Compare costs and benefits of different packaging options to choose the best solution for your startup stage.'],
  
  // More success stories
  ['某有機零食品牌轉用TUV認證可堆肥包裝後，在Whole Foods的銷售增長35%，品牌好感度提升28%。', 'An organic snack brand switched to TUV-certified compostable packaging and saw 35% sales growth at Whole Foods with 28% improvement in brand favorability.'],
  ['某精品咨啡品牌將包裝全面轉換為家庭可堆肥材料後，品牌認同度提升32%，在高端零售通路銷售增長45%。', 'A specialty coffee brand fully converted to home-compostable packaging, increasing brand recognition by 32% and premium retail sales by 45%.'],
  ['某知名薯片品牌將包裝全面轉換為How2Recycle認證的Mono-PE包裝後，消費者滿意度提升22%，並成功進入更多重視可持續性的零售通路。', 'A leading chip brand converted to How2Recycle certified Mono-PE packaging, improving consumer satisfaction by 22% and gaining access to more sustainability-focused retail channels.'],
  ['某食品品牌透過我們的合規支持，成功獲得英國、歐盟、美國三大市場的包裝認證，節省10%塑料稅成本。', 'A food brand achieved packaging certifications in UK, EU, and US markets through our compliance support, saving 10% in plastic tax costs.'],
  ['某新創健康零食品牌用200件起訂測試3種不同設計，確定最佳方案後擴大至5000件訂單，節省$15,000多餘庫存成本。', 'A health snack startup tested 3 designs with 200-unit orders, selected the best, then scaled to 5,000 units, saving $15,000 in excess inventory costs.'],
  
  // Remaining text-heavy content
  ['2024年估值', '2024 value'],
  ['2024-2030', '2024-2030'],
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
    console.log(`File not found: ${filePath}`);
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

console.log(`\nTotal replacements: ${totalReplacements}`);

// Check for remaining Chinese characters
console.log('\nChecking for remaining Chinese...');
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
  console.log('\nFiles with remaining Chinese:');
  remainingFiles.forEach(f => console.log(`  ${f.file}: ${f.count} Chinese strings`));
} else {
  console.log('No remaining Chinese characters found!');
}
