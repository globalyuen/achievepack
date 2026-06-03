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

const AUTOPILOT_STATE_PATH = path.join(__dirname, '../src/data/autopilot_state.json');
const PROGRESS_PATH = path.join(__dirname, 'migration-progress.json');

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Supabase credentials missing.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Static fallback mapping for slugs not present in autopilot_state.json
const FALLBACK_KEYWORDS = {
  'bpi-certified-guide': 'BPI Certified Compostable Pouches',
  'coffee-degassing-valve-guide': 'Coffee Bags with Degassing Valve',
  'coffee-packaging-guide': 'Sustainable Coffee Packaging',
  'compostable-baby-food-packaging-guide': 'Compostable Baby Food Packaging',
  'compostable-humidity-control-guide': 'Compostable Humidity Control Packaging',
  'compostable-stand-up-pouches-guide': 'Compostable Stand Up Pouches',
  'custom-compostable-pouch-suppliers-guide': 'Custom Compostable Pouch Suppliers',
  'custom-printed-materials-guide': 'Custom Printed Packaging Materials',
  'dtc-sustainable-packaging-guide': 'DTC Sustainable Packaging',
  'digital-printing-eco-packaging-guide': 'Digital Printing Eco Friendly Packaging',
  'eco-friendly-food-packaging-guide': 'Eco Friendly Food Packaging',
  'eco-packaging-regulations-guide': 'Eco Friendly Packaging Regulations',
  'green-coffee-materials-guide': 'Green Coffee Packaging Materials',
  'home-compostable-guide': 'Home Compostable Packaging',
  'industrial-compostable-guide': 'Industrial Compostable Packaging',
  'low-moq-packaging-guide': 'Low MOQ Custom Printed Packaging',
  'low-moq-startup-packaging-guide': 'Low MOQ Packaging for Startups',
  'organic-compliance-support-guide': 'Organic Packaging Compliance Support',
  'stamp-foil-recyclability': 'Writable Stampable Recyclable Pouches',
  'recyclable-snack-packaging-guide': 'Recyclable Snack Food Packaging',
  'usa-coffee-packaging': 'USA Custom Coffee Packaging',
  'usa-compostable-packaging-guide': 'USA Certified Compostable Packaging',
  'usa-labeling-guide': 'USA Packaging Labeling Guide',
  'usa-snacks-packaging-guide': 'USA Custom Snack Packaging'
};

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log('🏁 Starting Soro SEO Content Overhaul Migration...');

  // 1. Load Autopilot State keywords
  let keywordMap = {};
  if (fs.existsSync(AUTOPILOT_STATE_PATH)) {
    try {
      const state = JSON.parse(fs.readFileSync(AUTOPILOT_STATE_PATH, 'utf-8'));
      const bank = state.keywordBank || [];
      bank.forEach(item => {
        if (item.slug && item.keyword) {
          keywordMap[item.slug] = item.keyword;
        }
      });
      console.log(`✅ Loaded ${Object.keys(keywordMap).length} keywords from autopilot_state.json`);
    } catch (err) {
      console.warn('⚠️ Warning: Failed to parse autopilot_state.json:', err.message);
    }
  }

  // 2. Fetch all posts from Supabase
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('title, slug, content');

  if (error) {
    console.error('❌ Failed to fetch articles from Supabase:', error.message);
    process.exit(1);
  }

  console.log(`📋 Found ${posts.length} articles in pouch_seo_blog to migrate.`);

  // 3. Load or initialize progress
  let progress = { completed: {} };
  if (fs.existsSync(PROGRESS_PATH)) {
    try {
      progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf-8'));
      console.log(`🔄 Resuming migration. Already completed: ${Object.keys(progress.completed).length}/${posts.length}`);
    } catch (err) {
      console.warn('⚠️ Warning: Failed to parse migration-progress.json, restarting...');
    }
  }

  // 4. Iterate and rewrite each article
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const slug = post.slug;

    if (progress.completed[slug]) {
      console.log(`[${i + 1}/${posts.length}] Skipping already completed post: ${slug}`);
      continue;
    }

    // Determine target keyword
    let keyword = keywordMap[slug] || FALLBACK_KEYWORDS[slug];
    if (!keyword) {
      // Fallback: derive from slug
      keyword = slug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
      console.log(`⚠️ Derived keyword from slug: "${slug}" -> "${keyword}"`);
    }

    const approvedStatus = post.content?.approved !== false; // Default to true unless explicitly false

    console.log(`\n==================================================`);
    console.log(`📝 Migrating article [${i + 1}/${posts.length}]: ${slug}`);
    console.log(`🔑 Target Keyword: "${keyword}"`);
    console.log(`🟢 Status: approved=${approvedStatus}`);
    console.log(`==================================================`);

    try {
      // Execute Grok-3 pipeline writing rewrite
      await runAutopilotWritingPipeline('pouch.eco', keyword, approvedStatus, slug);
      
      // Update progress
      progress.completed[slug] = {
        keyword,
        migratedAt: new Date().toISOString(),
        status: approvedStatus ? 'Published' : 'Draft'
      };
      fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf-8');
      
      console.log(`✅ Finished rewriting post: /blog/${slug}`);
    } catch (err) {
      console.error(`❌ Failed to rewrite post ${slug}:`, err.message);
      // Wait longer on error before retrying or moving on
      await sleep(10000);
    }

    console.log(`⏳ Pausing 5 seconds...`);
    await sleep(5000);
  }

  console.log('\n🏁 Content Overhaul Sourcing Migration Complete!');
}

run().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
