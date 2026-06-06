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

  console.log(`Fetched ${posts.length} posts from Supabase.`);
  let count = 0;
  posts.forEach(post => {
    const hasNullImage = post.image_url === null;
    const hideMedia = post.content?.hide_media === true;
    const noVideoImage = post.content?.no_video_and_image === true;
    const pouchHideMedia = post.content?.pouch?.hide_media === true;
    const pouchNoVideoImage = post.content?.pouch?.no_video_and_image === true;

    if (hasNullImage || hideMedia || noVideoImage || pouchHideMedia || pouchNoVideoImage) {
      console.log(`-----------------------------------`);
      console.log(`Slug: ${post.slug}`);
      console.log(`Title: ${post.title}`);
      console.log(`image_url: ${post.image_url}`);
      console.log(`content.hide_media: ${post.content?.hide_media}`);
      console.log(`content.no_video_and_image: ${post.content?.no_video_and_image}`);
      console.log(`content.pouch.hide_media: ${post.content?.pouch?.hide_media}`);
      console.log(`content.pouch.no_video_and_image: ${post.content?.pouch?.no_video_and_image}`);
      count++;
    }
  });

  console.log(`\nTotal posts with missing/hidden media flags: ${count}`);
  process.exit(0);
}

run();
