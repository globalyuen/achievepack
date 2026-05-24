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
    .select('*')
    .limit(1);

  if (error) {
    console.error("Supabase Error:", error);
    return;
  }

  console.log("SUCCESS! Sample row from pouch_seo_blog:");
  console.log(JSON.stringify(data, null, 2));
}

run();
