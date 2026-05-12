
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function listBatches() {
  const { data, error } = await supabase
    .from('rfq_batches')
    .select('id, name, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('--- RECENT RFQ BATCHES ---');
  data.forEach(b => {
    console.log(`Name: ${b.name}`);
    console.log(`ID: ${b.id}`);
    console.log(`Created: ${b.created_at}`);
    console.log(`Link: https://achievepack.com/hub/${b.id}`);
    console.log(`Admin Comparison: https://achievepack.com/ctrl-x9k7m/rfq/${b.id}/comparison`);
    console.log('---------------------------');
  });
}

listBatches();
