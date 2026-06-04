import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { runAutopilotWritingPipeline } from './autopilot-agent-pipeline.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env.local') });
dotenv.config({ path: path.join(__dirname, '../.env') });

const PROGRESS_PATH = path.join(__dirname, 'migration-progress.json');

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Supabase credentials missing.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const userTargets = [
  { slug: 'kraft-paper-zipper-doypack', keyword: 'kraft paper zipper doypack' },
  { slug: 'compostable-spouted-baby-puree-bag', keyword: 'compostable spouted baby puree bag' },
  { slug: 'recyclable-high-barrier-nuts-pouch', keyword: 'recyclable high-barrier nuts pouch' },
  { slug: 'high-barrier-retort-pouch', keyword: 'high-barrier retort pouch' },
  { slug: 'plastic-free-compostable-barrier-pouch', keyword: 'plastic-free compostable barrier pouch' },
  { slug: 'compostable-stand-up-pouches-for-snacks', keyword: 'compostable stand up pouches for snacks' },
  { slug: 'custom-digital-printed-sachets', keyword: 'custom digital printed sachets' }
];

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log('🏁 Starting Specific User Targets Migration...');

  // Load progress
  let progress = { completed: {} };
  if (fs.existsSync(PROGRESS_PATH)) {
    try {
      progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf-8'));
    } catch (err) {
      console.warn('⚠️ Warning: Failed to parse migration-progress.json');
    }
  }

  for (let i = 0; i < userTargets.length; i++) {
    const target = userTargets[i];
    const { slug, keyword } = target;

    console.log(`\n==================================================`);
    console.log(`📝 Migrating user target [${i + 1}/${userTargets.length}]: ${slug}`);
    console.log(`🔑 Keyword: "${keyword}"`);
    console.log(`==================================================`);

    try {
      // Run pipeline
      await runAutopilotWritingPipeline('pouch.eco', keyword, true, slug);

      // Update progress
      progress.completed[slug] = {
        keyword,
        migratedAt: new Date().toISOString(),
        status: 'Published'
      };
      fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf-8');

      console.log(`✅ Successfully completed post: /blog/${slug}`);
    } catch (err) {
      console.error(`❌ Failed to migrate ${slug}:`, err.message);
      // Wait longer on failure before next
      await sleep(10000);
    }

    console.log('⏳ Pausing 5 seconds...');
    await sleep(5000);
  }

  console.log('\n🏁 User Specific Targets Soro Overhaul Complete!');
}

run().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
