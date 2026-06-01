import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MAIN_TSX_PATH = path.join(__dirname, '../src/main.tsx');
const PAGES_DIR = path.join(__dirname, '../src/pages');

// Find all tsx files recursively
function getFilesRecursively(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFilesRecursively(name, fileList);
    } else if (file.endsWith('.tsx') && !file.endsWith('.bak')) {
      fileList.push(name);
    }
  }
  return fileList;
}

function analyze() {
  console.log('🔄 Reading src/main.tsx routing configuration...');
  const mainContent = fs.readFileSync(MAIN_TSX_PATH, 'utf-8');

  // Slice B2C and B2B routing blocks
  const divisionIndex = mainContent.indexOf("if (getDomain() === 'pouch')");
  const elseIndex = mainContent.indexOf("} else {", divisionIndex);
  
  if (divisionIndex === -1 || elseIndex === -1) {
    console.error('❌ Separator blocks not found in main.tsx');
    process.exit(1);
  }
  
  const b2cSection = mainContent.slice(divisionIndex, elseIndex);
  const b2bSection = mainContent.slice(elseIndex);

  console.log('🔄 Scanning ALL page component directories...');
  const allPageFiles = getFilesRecursively(PAGES_DIR);
  console.log(`📊 Found ${allPageFiles.length} total page components.`);

  const unmigrated = [];
  const notInB2B = [];

  allPageFiles.forEach(filePath => {
    const relativePath = path.relative(PAGES_DIR, filePath);
    
    // Skip general or admin folders
    if (relativePath.startsWith('admin' + path.sep) || 
        relativePath.startsWith('legal' + path.sep) ||
        relativePath.startsWith('pouch' + path.sep) ||
        relativePath.startsWith('rfq' + path.sep)) {
      return;
    }

    const baseName = path.basename(filePath, '.tsx');
    
    // Check B2C and B2B references
    const inB2C = b2cSection.includes(baseName);
    const inB2B = b2bSection.includes(baseName);

    if (!inB2C) {
      unmigrated.push({ file: relativePath, component: baseName, inB2B });
    }
    if (!inB2B) {
      notInB2B.push({ file: relativePath, component: baseName });
    }
  });

  console.log(`\n❌ Found ${unmigrated.length} page components NOT registered in B2C (Pouch.eco):`);
  unmigrated.forEach(item => {
    console.log(`- Component: ${item.component}`);
    console.log(`  Path: src/pages/${item.file}`);
    console.log(`  Active in B2B? ${item.inB2B ? 'Yes 🟢' : 'No 🔴'}`);
  });

  console.log(`\n❌ Found ${notInB2B.length} page components NOT registered in B2B (AchievePack):`);
  notInB2B.forEach(item => {
    console.log(`- Component: ${item.component} (src/pages/${item.file})`);
  });
}

analyze();
