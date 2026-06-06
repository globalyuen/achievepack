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
const herosDir = path.resolve(__dirname, '../public/imgs/blog/heros');

async function run() {
  console.log('Fetching all posts from Supabase...');
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('*');

  if (error) {
    console.error('Error fetching posts:', error);
    process.exit(1);
  }

  console.log(`Fetched ${posts.length} posts. Scanning and updating...`);
  
  let updateCount = 0;
  
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const isApproved = post.content?.approved !== false;
    
    if (!isApproved) {
      console.log(`Skipping unapproved post: ${post.slug}`);
      continue;
    }

    // Determine the hero image filename
    let heroPath = null;
    const extensions = ['.png', '.webp', '.jpg', '.jpeg'];
    for (const ext of extensions) {
      const filename = `${post.slug}-hero${ext}`;
      const filePath = path.join(herosDir, filename);
      if (fs.existsSync(filePath)) {
        heroPath = `/imgs/blog/heros/${filename}`;
        break;
      }
    }
    
    if (!heroPath) {
      // Check if there's a legacy or alternative name without "-hero"
      for (const ext of extensions) {
        const filename = `${post.slug}${ext}`;
        const filePath = path.join(herosDir, filename);
        if (fs.existsSync(filePath)) {
          heroPath = `/imgs/blog/heros/${filename}`;
          break;
        }
      }
    }

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

    // If heroPath is found, let's update. Otherwise, we can use a default image or keep null but enable infographics.
    const newImageUrl = heroPath || post.image_url || '/imgs/blog/default.jpg';
    
    console.log(`Updating [${i+1}/${posts.length}] ${post.slug}: image_url -> ${newImageUrl}`);
    
    const { error: updateError } = await supabase
      .from('pouch_seo_blog')
      .update({
        image_url: newImageUrl,
        content: updatedContent
      })
      .eq('slug', post.slug);
      
    if (updateError) {
      console.error(`  ❌ Error updating ${post.slug}:`, updateError.message);
    } else {
      updateCount++;
    }
  }

  console.log(`\n✅ Successfully updated ${updateCount} posts in the database!`);
  process.exit(0);
}

run();
