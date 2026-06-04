const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const baseDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack';
require('dotenv').config({ path: path.join(baseDir, '.env.local') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('id, title, slug, image_url')
    .or('image_url.is.null,image_url.eq.a_compostable_packaging_pouch_achieve_pack_2674607.webp,image_url.eq.https://www.pouch.eco/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp,image_url.eq./imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp');

  if (error) {
    console.error('Error fetching posts:', error);
    return;
  }

  console.log(`Found ${posts.length} posts with wrong/null hero images:`);
  posts.forEach((p, i) => {
    console.log(`${i+1}. [${p.slug}] - ${p.title} (current image_url: ${p.image_url})`);
  });
}

run();
