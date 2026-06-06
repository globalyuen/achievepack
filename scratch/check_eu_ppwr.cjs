const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.production.local' });
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  console.log("No Supabase URL found in env.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log("Querying pouch_seo_blog for slug 'coffee-packaging-guide'...");
  const { data, error } = await supabase
    .from('pouch_seo_blog')
    .select('*')
    .eq('slug', 'coffee-packaging-guide')
    .single();

  if (error) {
    console.error("Error querying:", error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
}

run();
