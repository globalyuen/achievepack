import { runAutopilotWritingPipeline } from '../scripts/autopilot-agent-pipeline.js';
import { runGlobalDatabaseLinkerSweep } from '../scripts/automatic-internal-linker.js';

const keywords = [
  { keyword: 'Recyclable High-Barrier Nuts Pouch', domain: 'pouch.eco' },
  { keyword: 'Curbside Recyclable Coffee Bag', domain: 'pouch.eco' },
  { keyword: 'Kraft Paper Zipper Doypack', domain: 'pouch.eco' },
  { keyword: 'Compostable Spouted Baby Puree Bag', domain: 'pouch.eco' }
];

async function main() {
  console.log('🚀 Starting regeneration of all 4 thin dynamic articles...');
  
  for (const item of keywords) {
    try {
      console.log(`\n---------------------------------------------------------`);
      console.log(`Generating content for keyword: "${item.keyword}"...`);
      await runAutopilotWritingPipeline(item.domain, item.keyword, true);
      console.log(`Successfully regenerated /blog/${item.keyword.toLowerCase().replace(/\s+/g, '-')}`);
    } catch (err) {
      console.error(`❌ Failed to regenerate "${item.keyword}":`, err);
    }
  }
  
  console.log('\n🔗 Running global internal linker sweep to propagate anchors across new contents...');
  try {
    const totalLinks = await runGlobalDatabaseLinkerSweep();
    console.log(`✅ Global database linker sweep complete! Total anchors linked: ${totalLinks}`);
  } catch (err) {
    console.error('❌ Global linker sweep failed:', err);
  }
  
  console.log('\n🎉 ALL THIN ARTICLES SUCCESSFULLY REGENERATED!');
}

main();
