import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env variables
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
  const slug = 'sourcing-compostable-coffee-bags';
  console.log(`🔍 Fetching post "${slug}"...`);
  
  const { data: post, error: fetchError } = await supabase
    .from('pouch_seo_blog')
    .select('*')
    .eq('slug', slug)
    .single();

  if (fetchError) {
    console.error('Error fetching:', fetchError);
    process.exit(1);
  }

  console.log('Current image_url:', post.image_url);
  console.log('Current content metadata keys:', Object.keys(post.content || {}));

  // Clean up content flags
  const updatedContent = { ...post.content };
  delete updatedContent.hide_media;
  delete updatedContent.no_video_and_image;
  if (updatedContent.pouch) {
    delete updatedContent.pouch.hide_media;
    delete updatedContent.pouch.no_video_and_image;
  }
  if (updatedContent.achievepack) {
    delete updatedContent.achievepack.hide_media;
    delete updatedContent.achievepack.no_video_and_image;
  }

  const newImageUrl = '/imgs/blog/heros/sourcing-compostable-coffee-bags-hero.webp';

  const { error: updateError } = await supabase
    .from('pouch_seo_blog')
    .update({
      image_url: newImageUrl,
      content: updatedContent
    })
    .eq('slug', slug);

  if (updateError) {
    console.error('❌ Error updating:', updateError.message);
  } else {
    console.log('✅ Successfully restored image_url and removed hide_media flags!');
  }
  process.exit(0);
}

run();
