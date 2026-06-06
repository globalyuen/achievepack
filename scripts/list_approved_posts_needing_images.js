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
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('slug, title, image_url, content');

  if (error) {
    console.error('Error fetching posts:', error);
    process.exit(1);
  }

  const approvedNeedingImages = [];
  posts.forEach(post => {
    const isApproved = post.content?.approved !== false;
    const hasNullImage = post.image_url === null;
    const hideMedia = post.content?.hide_media === true;
    const noVideoImage = post.content?.no_video_and_image === true;

    if (isApproved && (hasNullImage || hideMedia || noVideoImage)) {
      approvedNeedingImages.push(post);
    }
  });

  console.log(`Total posts in DB: ${posts.length}`);
  console.log(`Approved posts: ${posts.filter(p => p.content?.approved !== false).length}`);
  console.log(`Approved posts needing images: ${approvedNeedingImages.length}`);
  
  // Write to a temporary file for analysis
  fs.writeFileSync(
    path.resolve(__dirname, '../scratch/approved_needing_images.json'), 
    JSON.stringify(approvedNeedingImages, null, 2)
  );
  
  console.log('Saved list to scratch/approved_needing_images.json');
  process.exit(0);
}

run();
