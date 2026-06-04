const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase configuration");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  try {
    console.log("Querying pouch_seo_blog table...");
    const { data, error } = await supabase
      .from('pouch_seo_blog')
      .select('*');
    
    if (error) {
      console.error("Error querying table:", error);
      return;
    }
    
    console.log(`Successfully fetched ${data.length} records from pouch_seo_blog.`);
    if (data.length > 0) {
      console.log("Columns in table:", Object.keys(data[0]));
      console.log("First record slug:", data[0].slug);
      console.log("All slugs:", data.map(d => d.slug));
    }
  } catch (err) {
    console.error("Caught error:", err);
  }
}

run();
