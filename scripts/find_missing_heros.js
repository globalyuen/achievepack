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
const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const { data: posts, error } = await supabase.from('pouch_seo_blog').select('slug, image_url, title');
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  console.log(`Checking ${posts.length} posts...`);
  const missing = [];

  for (const post of posts) {
    if (!post.image_url) {
      console.log(`Post [${post.slug}] has no image_url`);
      continue;
    }
    const localPath = path.resolve(__dirname, `../public${post.image_url}`);
    if (!fs.existsSync(localPath)) {
      console.log(`❌ Missing: public${post.image_url} (Slug: ${post.slug})`);
      missing.push(post);
    }
  }

  console.log(`Total missing: ${missing.length}`);
  process.exit(0);
}

run();
