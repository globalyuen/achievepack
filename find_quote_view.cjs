const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  try {
    const { data: recent, error: err2 } = await supabase
      .from('webhook_logs')
      .select('id, source, raw_data, created_at')
      .order('created_at', { ascending: false })
      .limit(2000);
      
    if (err2) {
      console.error('Error fetching recent:', err2);
    } else {
      const match = recent.find(r => r.id && String(r.id).startsWith('0503fe01'));
      if (match) {
        console.log('Found matching ID in recent logs:', JSON.stringify(match, null, 2));
      } else {
        const match2 = recent.find(r => r.raw_data && r.raw_data.quoteId && String(r.raw_data.quoteId).startsWith('0503fe01'));
        if(match2) {
            console.log('Found matching quoteId in raw_data in recent logs:', JSON.stringify(match2, null, 2));
        } else {
            console.log('No matches found in recent logs.');
        }
      }
    }
  } catch (e) {
    console.error(e);
  } finally {
    process.exit(0);
  }
}
run();
