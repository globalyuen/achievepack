import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROUTE_MAPPING_PATH = path.join(__dirname, '../src/data/route-mapping.json');

function run() {
  const data = JSON.parse(fs.readFileSync(ROUTE_MAPPING_PATH, 'utf-8'));
  const pouch = new Set(data.pouch);
  const achieve = data.achieve;

  const missing = [];
  achieve.forEach(r => {
    if (!pouch.has(r)) {
      missing.push(r);
    }
  });

  console.log(`📊 Total B2B routes: ${achieve.length}`);
  console.log(`📊 Total B2C routes: ${data.pouch.length}`);
  console.log(`❌ B2B routes missing in B2C (${missing.length}):`);
  
  missing.forEach(r => {
    console.log(`- ${r}`);
  });
}

run();
