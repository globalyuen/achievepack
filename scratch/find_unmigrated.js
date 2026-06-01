import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MAIN_TSX_PATH = path.join(__dirname, '../src/main.tsx');
const PAGES_DIR = path.join(__dirname, '../src/pages');

// Find all tsx files in a directory recursively
function getFilesRecursively(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFilesRecursively(name, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(name);
    }
  }
  return fileList;
}

function analyze() {
  console.log('🔄 Reading src/main.tsx routing configuration...');
  const mainContent = fs.readFileSync(MAIN_TSX_PATH, 'utf-8');

  // Slice the B2C routing block
  const divisionIndex = mainContent.indexOf("if (getDomain() === 'pouch')");
  const elseIndex = mainContent.indexOf("} else {", divisionIndex);
  
  if (divisionIndex === -1 || elseIndex === -1) {
    console.error('❌ Separator blocks not found in main.tsx');
    process.exit(1);
  }
  
  const b2cSection = mainContent.slice(divisionIndex, elseIndex);
  const b2bSection = mainContent.slice(elseIndex);

  // Scan all page directories
  const targetDirs = [
    'spec', 'materials', 'packaging', 'industry', 'composting', 'blog', 'solutions', 'features', 'usa', 'function'
  ];

  console.log('🔄 Scanning page component directories...');
  const allPageFiles = [];
  targetDirs.forEach(sub => {
    const dirPath = path.join(PAGES_DIR, sub);
    const files = getFilesRecursively(dirPath);
    allPageFiles.push(...files);
  });

  console.log(`📊 Found ${allPageFiles.length} page components across subdirectories.`);

  const unmigrated = [];
  const unmigratedB2B = [];

  allPageFiles.forEach(filePath => {
    const relativePath = path.relative(PAGES_DIR, filePath);
    const baseName = path.basename(filePath, '.tsx');
    
    // Check if the component name is imported/used in B2C section
    const inB2C = b2cSection.includes(baseName);
    const inB2B = b2bSection.includes(baseName);

    if (!inB2C) {
      unmigrated.push({ file: relativePath, component: baseName, inB2B });
    }
    if (!inB2B) {
      unmigratedB2B.push({ file: relativePath, component: baseName });
    }
  });

  console.log('\n❌ Page components NOT registered in B2C (Pouch.eco):');
  if (unmigrated.length === 0) {
    console.log('✅ 100% of page components are registered in B2C!');
  } else {
    unmigrated.forEach(item => {
      console.log(`- Component: ${item.component} (${item.file}) | Active in B2B? ${item.inB2B ? 'Yes' : 'No'}`);
    });
  }

  console.log('\n❌ Page components NOT registered in B2B (AchievePack):');
  if (unmigratedB2B.length === 0) {
    console.log('✅ 100% of page components are registered in B2B!');
  } else {
    unmigratedB2B.forEach(item => {
      console.log(`- Component: ${item.component} (${item.file})`);
    });
  }
}

analyze();
