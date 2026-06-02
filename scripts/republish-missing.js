#!/usr/bin/env node

/**
 * 🛠️ Soro-Inspired Republication Sync Utility
 * 
 * Verifies that all keywords marked as 'Published' or 'Staged' in autopilot_state.json
 * actually exist in the Supabase 'pouch_seo_blog' table.
 * If any are missing, it triggers the Multi-Agent Writing Pipeline to re-generate
 * and upload them to the shared B2B/B2C database.
 */

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

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Supabase configuration missing from environment variables.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function syncMissing() {
  console.log('🔄 Checking database for missing Soro Autopilot posts...');

  // 1. Read local state
  if (!fs.existsSync(AUTOPILOT_STATE_PATH)) {
    console.error(`❌ Autopilot state file not found at: ${AUTOPILOT_STATE_PATH}`);
    process.exit(1);
  }

  let state;
  try {
    state = JSON.parse(fs.readFileSync(AUTOPILOT_STATE_PATH, 'utf-8'));
  } catch (err) {
    console.error('❌ Failed to parse autopilot_state.json:', err.message);
    process.exit(1);
  }

  const keywordBank = state.keywordBank || [];
  if (keywordBank.length === 0) {
    console.log('ℹ️ Keyword bank is empty. Nothing to check.');
    return;
  }

  // 2. Fetch all current slugs from Supabase
  const { data: dbPosts, error } = await supabase
    .from('pouch_seo_blog')
    .select('slug, title');

  if (error) {
    console.error('❌ Error fetching posts from Supabase:', error.message);
    process.exit(1);
  }

  const dbSlugs = new Set((dbPosts || []).map(p => p.slug.toLowerCase()));
  console.log(`📡 Found ${dbSlugs.size} posts in 'pouch_seo_blog' table.`);

  // 3. Compare and find missing ones
  const missingKeywords = [];
  for (const item of keywordBank) {
    // We expect both 'Published' and 'Staged' posts to be in the database
    if (item.status === 'Published' || item.status === 'Staged') {
      const expectedSlug = item.slug || item.keyword
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

      if (!dbSlugs.has(expectedSlug)) {
        missingKeywords.push({
          keyword: item.keyword,
          status: item.status,
          slug: expectedSlug
        });
      }
    }
  }

  if (missingKeywords.length === 0) {
    console.log('✅ All published/staged Soro keywords exist in the database! No missing pages.');
    return;
  }

  console.log(`⚠️ Found ${missingKeywords.length} missing posts in the database:`);
  for (const kw of missingKeywords) {
    console.log(`  - "${kw.keyword}" (Expected Slug: /blog/${kw.slug}, Status: ${kw.status})`);
  }

  // 4. Republish missing keywords
  console.log('\n🚀 Starting republication of missing pages...');
  for (const kw of missingKeywords) {
    console.log(`\n📝 Generating & publishing: "${kw.keyword}"`);
    try {
      // Run the pipeline to write/upload to database directly
      const result = await runAutopilotWritingPipeline('pouch.eco', kw.keyword, true);
      
      // Update local state if the slug changed or wasn't set
      const bankItem = keywordBank.find(k => k.keyword === kw.keyword);
      if (bankItem) {
        bankItem.slug = result.slug;
        bankItem.status = 'Published'; // Force status to Published since it is in DB now
      }
      
      console.log(`✅ Successfully published "${kw.keyword}" -> /blog/${result.slug}`);
    } catch (err) {
      console.error(`❌ Failed to publish keyword "${kw.keyword}":`, err.message);
    }
  }

  // Save the synchronized state back to autopilot_state.json
  fs.writeFileSync(AUTOPILOT_STATE_PATH, JSON.stringify(state, null, 2), 'utf-8');
  console.log('\n💾 Updated local autopilot_state.json with synchronized slugs and statuses.');
}

syncMissing().catch(err => {
  console.error('💥 Crash in syncMissing:', err);
});
