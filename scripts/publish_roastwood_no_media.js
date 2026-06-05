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
  const jsonPath = path.resolve(__dirname, 'sourcing-compostable-coffee-bags.json');
  if (!fs.existsSync(jsonPath)) {
    console.error('JSON file not found at:', jsonPath);
    process.exit(1);
  }

  const rawJson = fs.readFileSync(jsonPath, 'utf8');
  const postData = JSON.parse(rawJson);

  // Set no video and image flags
  postData.image_url = null;
  postData.content = {
    ...postData.content,
    approved: true,
    video_url: null,
    hide_media: true,
    no_video_and_image: true
  };

  console.log('Publishing Roastwood Coffee blog post with no video and image...');
  const { data, error } = await supabase
    .from('pouch_seo_blog')
    .upsert({
      slug: postData.slug,
      title: postData.title,
      excerpt: postData.excerpt,
      content: postData.content,
      category: postData.category,
      image_url: postData.image_url,
      meta_title: postData.meta_title,
      meta_description: postData.meta_description,
      source_url: postData.source_url,
      published_at: postData.published_at || new Date().toISOString(),
      updated_at: new Date().toISOString()
    }, { onConflict: 'slug' })
    .select();

  if (error) {
    console.error('Error upserting post:', error);
    process.exit(1);
  }

  console.log('✅ Blog post successfully published to Supabase with no video/image!');
  console.log('Slug:', data[0].slug);
  console.log('Title:', data[0].title);
  console.log('Image URL:', data[0].image_url);
  console.log('Content no_video_and_image:', data[0].content?.no_video_and_image);
  console.log('Content hide_media:', data[0].content?.hide_media);
}

run();
