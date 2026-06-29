const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function run() {
  const quoteId = 'eee7be70-5997-4caa-a558-121e691194e6';
  const { data, error } = await supabase.from('webhook_logs').select('raw_data').eq('id', quoteId);
  if (data && data[0]) {
    const raw = typeof data[0].raw_data === 'string' ? JSON.parse(data[0].raw_data) : data[0].raw_data;
    console.log('Quote data in DB:', JSON.stringify(raw.pricingData || raw, null, 2));
  }
}
run();
