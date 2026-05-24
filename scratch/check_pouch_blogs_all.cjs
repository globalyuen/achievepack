const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase URL or Key. Check your .env files.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const { data, error } = await supabase
    .from('pouch_seo_blog')
    .select('slug, title, image_url, published_at');

  if (error) {
    console.error("Supabase Error:", error);
    return;
  }

  console.log(`SUCCESS! Found ${data.length} blogs in pouch_seo_blog:`);
  data.forEach((row, i) => {
    console.log(`${i+1}. [${row.slug}] -> Image URL: ${row.image_url} | Title: "${row.title}"`);
  });
}

run();
