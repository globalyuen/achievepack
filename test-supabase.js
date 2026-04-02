const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if(!supabaseUrl) {
  console.log("no url"); process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const { data, error } = await supabase.from('webhook_logs').select('source, status').order('created_at', { ascending: false }).limit(200);
  if(error) { console.log(error); return; }
  console.log("Total logs fetched:", data.length);
  const sources = data.reduce((acc, l) => {
    const key = l.source + '|' + l.status;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  console.log(sources);
}
run();
