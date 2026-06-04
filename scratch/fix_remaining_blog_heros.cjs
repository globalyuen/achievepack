const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const baseDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack';
const brainDir = '/Users/ryanmacmini/.gemini/antigravity/brain/7d78f957-11db-4b8f-9be8-5abef52a5bec';
require('dotenv').config({ path: path.join(baseDir, '.env.local') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const outputDir = path.join(baseDir, 'public', 'imgs', 'blog', 'heros');
fs.mkdirSync(outputDir, { recursive: true });

// Template source paths in brain directory
const templates = {
  liquid: path.join(brainDir, 'stand_up_pouch_liquid_hero_1780586213568.png'),
  dry: path.join(brainDir, 'stand_up_pouch_dry_hero_1780586260096.png'),
  flat_bottom: path.join(brainDir, 'flat_bottom_bag_hero_1780586287570.png'),
  sachet: path.join(brainDir, 'sachet_packaging_hero_1780586317082.png'),
  rollstock: path.join(brainDir, 'rollstock_film_hero_1780586356274.png'),
  printing: path.join(brainDir, 'digital_printing_press_hero_1780586380087.png')
};

// Categorize slug into a template type
function getTemplateKey(slug) {
  slug = slug.toLowerCase();
  
  if (slug.includes('liquid') || slug.includes('spout') || slug.includes('beverage') || slug.includes('juice')) {
    return 'liquid';
  }
  if (slug.includes('flat-bottom') || slug.includes('flatbottom')) {
    return 'flat_bottom';
  }
  if (slug.includes('sachet') || slug.includes('spice') || slug.includes('powder') || slug.includes('dry')) {
    return 'sachet';
  }
  if (slug.includes('film') || slug.includes('rollstock') || slug.includes('barrier-film')) {
    return 'rollstock';
  }
  if (slug.includes('printing') || slug.includes('press') || slug.includes('moq') || slug.includes('small-runs') || slug.includes('small-batch') || slug.includes('regulations') || slug.includes('prices')) {
    return 'printing';
  }
  
  // Default to dry stand up pouch
  return 'dry';
}

async function run() {
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('id, title, slug, image_url')
    .or('image_url.is.null,image_url.eq.a_compostable_packaging_pouch_achieve_pack_2674607.webp,image_url.eq.https://www.pouch.eco/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp,image_url.eq./imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp');

  if (error) {
    console.error('Error fetching posts:', error);
    return;
  }

  console.log(`Found ${posts.length} posts to remediate.`);
  let successCount = 0;

  for (const post of posts) {
    const templateKey = getTemplateKey(post.slug);
    const srcPath = templates[templateKey];
    
    if (!fs.existsSync(srcPath)) {
      console.error(`❌ Template file not found: ${srcPath}`);
      continue;
    }

    const filename = `${post.slug}-hero.png`;
    const destPath = path.join(outputDir, filename);
    const relativePath = `/imgs/blog/heros/${filename}`;

    try {
      // Copy template to unique post hero path
      fs.copyFileSync(srcPath, destPath);
      console.log(`✓ Copied ${templateKey} template to local path: ${relativePath}`);

      // Update in Supabase
      const { error: updateErr } = await supabase
        .from('pouch_seo_blog')
        .update({ image_url: relativePath })
        .eq('id', post.id);

      if (updateErr) {
        console.error(`  ❌ Failed to update Supabase for ${post.slug}:`, updateErr);
      } else {
        console.log(`  ✓ Supabase record updated successfully to: ${relativePath}`);
        successCount++;
      }
    } catch (err) {
      console.error(`❌ Error processing post ${post.slug}:`, err);
    }
  }

  console.log(`==================================================`);
  console.log(`Heros Remediation Complete. Successfully updated ${successCount} posts.`);
  console.log(`==================================================`);
}

run();
