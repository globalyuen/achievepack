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

async function run() {
  console.log('Fetching all blog posts from Supabase...');
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('*');

  if (error) {
    console.error('Error fetching blogs:', error);
    process.exit(1);
  }

  console.log(`Fetched ${posts.length} posts. Applying media removal...`);

  let updatedCount = 0;

  for (const post of posts) {
    let content = post.content || {};

    // 1. Update root of content
    content.no_video_and_image = true;
    content.hide_media = true;
    content.video_url = null;
    content.image_url = null;
    content.approved = true; // Make sure all are approved

    // 2. Update nested pouch content if exists
    if (content.pouch) {
      content.pouch.no_video_and_image = true;
      content.pouch.hide_media = true;
      content.pouch.video_url = null;
      content.pouch.image_url = null;
      content.pouch.approved = true;
    }

    // 3. Update nested achievepack content if exists
    if (content.achievepack) {
      content.achievepack.no_video_and_image = true;
      content.achievepack.hide_media = true;
      content.achievepack.video_url = null;
      content.achievepack.image_url = null;
      content.achievepack.approved = true;
    }

    // Update the row
    const { error: updateError } = await supabase
      .from('pouch_seo_blog')
      .update({
        content: content,
        image_url: null, // Nullify row image_url
        updated_at: new Date().toISOString()
      })
      .eq('slug', post.slug);

    if (updateError) {
      console.error(`❌ Failed to update slug ${post.slug}:`, updateError.message);
    } else {
      updatedCount++;
    }
  }

  console.log(`\n🎉 Media removal complete! Updated ${updatedCount}/${posts.length} blog posts in database.`);
  process.exit(0);
}

run();
