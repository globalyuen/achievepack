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
  console.log('Fetching current post...');
  const { data: post, error: fetchError } = await supabase
    .from('pouch_seo_blog')
    .select('*')
    .eq('slug', 'sourcing-compostable-coffee-bags')
    .single();

  if (fetchError) {
    console.error('Error fetching post:', fetchError);
    process.exit(1);
  }

  const updatedContent = {
    ...post.content,
    approved: true
  };
  delete updatedContent.video_url;

  // Clean up any media hiding flags
  delete updatedContent.hide_media;
  delete updatedContent.no_video_and_image;

  console.log('Publishing post and restoring media in Supabase...');
  const { data, error } = await supabase
    .from('pouch_seo_blog')
    .update({
      image_url: '/imgs/blog/heros/sourcing-compostable-coffee-bags-hero.webp',
      content: updatedContent
    })
    .eq('slug', 'sourcing-compostable-coffee-bags')
    .select();

  if (error) {
    console.error('Error updating post:', error);
    process.exit(1);
  }

  console.log('✅ Blog post successfully published and media restored!');
  console.log('Updated Title:', data[0].title);
  console.log('Updated Image URL:', data[0].image_url);
  console.log('Updated Content video_url:', data[0].content?.video_url);
  console.log('Updated Content approved status:', data[0].content?.approved);
}

run();
