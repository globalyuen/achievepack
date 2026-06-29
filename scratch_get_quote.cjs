const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const quoteId = '0f9739d6-438c-4adc-b031-10964cdc94c3';
  console.log('Searching for quote ID:', quoteId);
  
  // Try table: quotes
  const { data: quote, error: err } = await supabase.from('quotes').select('*').eq('id', quoteId);
  if (err) {
    console.log('Error table quotes:', err.message);
  } else if (quote && quote.length > 0) {
    console.log('Found in quotes:', JSON.stringify(quote[0], null, 2));
    process.exit(0);
  }

  // Let's search webhook_logs
  const { data: logs, error: errL } = await supabase.from('webhook_logs').select('*').ilike('id', `%${quoteId}%`);
  if (logs && logs.length > 0) {
    console.log('Found in webhook_logs:', JSON.stringify(logs[0], null, 2));
    process.exit(0);
  }
  
  const { data: logs2, error: errL2 } = await supabase.from('webhook_logs').select('*').limit(100);
  console.log('Sample webhook logs length:', logs2 ? logs2.length : 0);
  if (logs2) {
    for (const log of logs2) {
      if (JSON.stringify(log).includes(quoteId)) {
        console.log('Found quote ID inside a webhook log:', JSON.stringify(log, null, 2));
        process.exit(0);
      }
    }
  }

  console.log('Not found via simple checks. End.');
}
run();
