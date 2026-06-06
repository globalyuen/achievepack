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
  console.log("Querying pouch_seo_blog for slug 'eu-ppwr-compliance-guide'...");
  const { data, error } = await supabase
    .from('pouch_seo_blog')
    .select('id, slug, title, created_at, updated_at')
    .eq('slug', 'eu-ppwr-compliance-guide');

  if (error) {
    console.error("Error querying without .single():", error);
  } else {
    console.log("Results found:", data.length);
    console.log(JSON.stringify(data, null, 2));
  }

  // Also query with .single() to see the exact error
  const singleResult = await supabase
    .from('pouch_seo_blog')
    .select('id, slug, title')
    .eq('slug', 'eu-ppwr-compliance-guide')
    .single();

  console.log("\nQuerying with .single():");
  if (singleResult.error) {
    console.error("Error with .single():", singleResult.error);
  } else {
    console.log("Result with .single():", singleResult.data);
  }
}

run();
