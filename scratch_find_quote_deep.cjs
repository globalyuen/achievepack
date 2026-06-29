const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const quoteId = '0f9739d6-438c-4adc-b031-10964cdc94c3';
  console.log('Deep searching for quote ID:', quoteId);

  // Let's do pagination on webhook_logs, fetching 200 at a time, up to 1000 rows
  let offset = 0;
  let limit = 200;
  let found = false;

  for (let i = 0; i < 5; i++) {
    console.log(`Fetching rows ${offset} to ${offset + limit}...`);
    const { data: logs, error } = await supabase
      .from('webhook_logs')
      .select('id, raw_data, status, message, created_at')
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      console.error('Error fetching logs:', error.message);
      break;
    }

    if (!logs || logs.length === 0) {
      console.log('No more logs found.');
      break;
    }

    for (const log of logs) {
      const logStr = JSON.stringify(log);
      if (logStr.includes(quoteId)) {
        console.log('FOUND matching log!');
        console.log('Log ID:', log.id);
        console.log('Created At:', log.created_at);
        console.log('Status:', log.status);
        console.log('Message:', log.message);
        
        let raw = log.raw_data;
        if (typeof raw === 'string') {
          try { raw = JSON.parse(raw); } catch (e) {}
        }
        
        // Print key information or write raw data to a scratch file
        const fs = require('fs');
        fs.writeFileSync('scratch_quote.json', JSON.stringify(raw, null, 2));
        console.log('Saved raw data to scratch_quote.json');
        
        // Try to inspect quote fields if we can see them
        if (raw.quoteHtml) {
          console.log('Contains quoteHtml, length:', raw.quoteHtml.length);
          // Let's write the quoteHtml to a text file for inspection
          fs.writeFileSync('scratch_quote_html.html', raw.quoteHtml);
          console.log('Saved quoteHtml to scratch_quote_html.html');
        }
        
        found = true;
        break;
      }
    }

    if (found) break;
    offset += limit;
  }

  if (!found) {
    console.log('Quote ID not found in the recent 1000 webhook_logs. Let\'s check quotes table.');
    // Let's try searching all columns of quotes table
    const { data: quotes, error: qErr } = await supabase.from('quotes').select('*').limit(100);
    if (quotes) {
      for (const q of quotes) {
        if (JSON.stringify(q).includes(quoteId)) {
          console.log('Found quote in quotes table:', JSON.stringify(q, null, 2));
          found = true;
          break;
        }
      }
    }
  }

  if (!found) {
    console.log('Not found anywhere in database.');
  }
}

run();
