const fs = require('fs');
const path = require('path');

// Common title replacements
const titleReplacements = {
  '行業應用場景 Industry Applications': 'Industry Applications',
  '市場數據 Market Intelligence': 'Market Data & Intelligence',
  '材料對比 Material Comparison': 'Material Comparison',
};

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

let modifiedCount = 0;

files.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let modified = false;
  
  // Replace titles
  for (const [chinese, english] of Object.entries(titleReplacements)) {
    if (content.includes(chinese)) {
      content = content.replace(new RegExp(chinese, 'g'), english);
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(fullPath, content);
    modifiedCount++;
    console.log(`✓ Updated titles in: ${filePath}`);
  }
});

console.log(`\nModified ${modifiedCount} files with title replacements.`);
console.log('\nNow run the content replacement script...');
