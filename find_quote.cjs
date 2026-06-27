const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const { data, error } = await supabase.from('quotes').select('*').limit(5);
  if(error) { console.log('Error fetching quotes:', error); }
  else { console.log('Sample quotes:', data); }
  
  // Look for the specific quote ID
  const { data: quote, error: err2 } = await supabase.from('quotes').select('*').eq('id', '0503fe01');
  if(err2) { console.log('Error specific quote by ID:', err2); }
  else if (quote && quote.length > 0) { console.log('Found quote by id:', quote); }
  
  const { data: quote2, error: err3 } = await supabase.from('quotes').select('*').ilike('id', '%0503fe01%');
  if(quote2 && quote2.length > 0) { console.log('Found quote by ilike id:', quote2); }
  
  // also try quote_id field or similar
  const { data: quote3, error: err4 } = await supabase.from('quotes').select('*').ilike('quote_id', '%0503fe01%');
  if(err4) { console.log('Error specific quote_id:', err4); }
  else if (quote3 && quote3.length > 0) { console.log('Found quote by quote_id:', quote3); }

  // also try short_id field
  const { data: quote4, error: err5 } = await supabase.from('quotes').select('*').ilike('short_id', '%0503fe01%');
  if(quote4 && quote4.length > 0) { console.log('Found quote by short_id:', quote4); }
}
run();
