import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, '../.env.local');
let envConfig = {};
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const parts = line.split('=');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join('=').trim().replace(/['"]/g, '');
      if (key === 'VITE_SUPABASE_URL') envConfig['URL'] = val;
      if (key === 'SUPABASE_SERVICE_KEY') envConfig['SERVICE_KEY'] = val;
    }
  });
}

const supabaseUrl = envConfig['URL'] || '';
const supabaseKey = envConfig['SERVICE_KEY'] || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkStatus() {
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('id, slug, title, content');

  if (error) {
    console.error('Error fetching blogs:', error);
    process.exit(1);
  }

  console.log(`Total blogs in database: ${posts.length}`);

  let upgradedCount = 0;
  let nonUpgradedCount = 0;
  let approvedCount = 0;
  let draftCount = 0;
  let hasLinksCount = 0;

  posts.forEach(p => {
    const content = p.content || {};
    const isUpgraded = content.pouch && content.achievepack;
    if (isUpgraded) {
      upgradedCount++;
    } else {
      nonUpgradedCount++;
    }

    if (content.approved === true || p.approved === true) {
      approvedCount++;
    } else {
      draftCount++;
    }

    // Check if the content (or pouch content) has links to store products or specs
    const contentStr = JSON.stringify(content);
    if (contentStr.includes('/products/') || contentStr.includes('/spec/') || contentStr.includes('/quotes/')) {
      hasLinksCount++;
    }
  });

  console.log(`Upgraded (has domain-specific versions): ${upgradedCount}`);
  console.log(`Non-upgraded (legacy format): ${nonUpgradedCount}`);
  console.log(`Approved (Live): ${approvedCount}`);
  console.log(`Draft (Staged): ${draftCount}`);
  console.log(`Has internal links (store/specs/quotes): ${hasLinksCount}`);
  
  if (nonUpgradedCount > 0) {
    console.log('\nSample non-upgraded blogs:');
    posts.filter(p => !(p.content?.pouch && p.content?.achievepack)).slice(0, 5).forEach(p => {
      console.log(`- ${p.slug} (Title: ${p.title})`);
    });
  }
}

checkStatus();
