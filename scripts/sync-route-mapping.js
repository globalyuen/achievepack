import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MAIN_TSX_PATH = path.join(__dirname, '../src/main.tsx');
const ROUTE_MAPPING_PATH = path.join(__dirname, '../src/data/route-mapping.json');

function extractPaths(sectionText) {
  const paths = [];
  // Match path="[PATH]" or path='[PATH]'
  const regex = /path=["']([^"']+)["']/g;
  let match;
  while ((match = regex.exec(sectionText)) !== null) {
    const p = match[1];
    // Filter out dynamic routes (containing :) or wildcard (*)
    if (!p.includes(':') && !p.includes('*')) {
      paths.push(p === '/' ? '/' : p);
    }
  }
  // Return unique sorted list
  return Array.from(new Set(paths)).sort();
}

function sync() {
  console.log('🔄 Reading src/main.tsx...');
  if (!fs.existsSync(MAIN_TSX_PATH)) {
    console.error('❌ src/main.tsx not found at:', MAIN_TSX_PATH);
    process.exit(1);
  }

  const content = fs.readFileSync(MAIN_TSX_PATH, 'utf-8');

  // Find the division between getDomain() === 'pouch' and the else block
  const divisionIndex = content.indexOf("if (getDomain() === 'pouch')");
  const elseIndex = content.indexOf("} else {", divisionIndex);

  if (divisionIndex === -1 || elseIndex === -1) {
    console.error('❌ Could not find B2C/B2B separation blocks in main.tsx');
    process.exit(1);
  }

  // Slice B2C and B2B blocks
  const b2cSection = content.slice(divisionIndex, elseIndex);
  const b2bSection = content.slice(elseIndex);

  console.log('🔍 Extracting paths from B2C (pouch.eco) block...');
  const pouchPaths = extractPaths(b2cSection);

  console.log('🔍 Extracting paths from B2B (achievepack.com) block...');
  const achievePaths = extractPaths(b2bSection);

  // Compute intersection (synced)
  const pouchSet = new Set(pouchPaths);
  const syncedPaths = achievePaths.filter(p => pouchSet.has(p)).sort();

  console.log(`📊 Extracted Route Mapping:`);
  console.log(`- Pouch (B2C): ${pouchPaths.length} routes`);
  console.log(`- Achieve (B2B): ${achievePaths.length} routes`);
  console.log(`- Synced (Both): ${syncedPaths.length} routes`);

  const updatedMapping = {
    pouch: pouchPaths,
    achieve: achievePaths,
    synced: syncedPaths,
    pending: []
  };

  console.log('✍️ Writing updated mapping to route-mapping.json...');
  fs.writeFileSync(ROUTE_MAPPING_PATH, JSON.stringify(updatedMapping, null, 2), 'utf-8');
  console.log('✅ Master route-mapping.json successfully updated!');
}

try {
  sync();
} catch (error) {
  console.error('❌ Error during synchronization:', error);
  process.exit(1);
}
