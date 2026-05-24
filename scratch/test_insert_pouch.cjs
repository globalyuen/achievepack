const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const { data, error } = await supabase
    .from('pouch_seo_blog')
    .upsert({
      slug: "test-slug-schema",
      title: "Test Schema Sizing",
      excerpt: "Checking columns...",
      content: { sections: [], faqs: [], cta: {} },
      category: "Test",
      image_url: null,
      published_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      meta_title: "Test",
      meta_description: "Test",
      source_url: "https://achievepack.com"
    }, { onConflict: 'slug' });

  if (error) {
    console.error("UPSERT ERROR:", error.message);
  } else {
    console.log("UPSERT SUCCESS! Columns exist.");
  }
}

run();
