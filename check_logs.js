import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Missing config", SUPABASE_URL);
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function checkRows() {
  const { data, error } = await supabase
    .from('webhook_logs')
    .select('id, raw_data, status, message')
    .order('created_at', { ascending: false })
    .limit(5);

  if (error) {
    console.error("Error", error);
    return;
  }
  
  if (data) {
    data.forEach(row => {
      console.log(`ID: ${row.id}, Status: ${row.status}, Message: ${row.message}`);
      // parse raw_data
      let rawData = row.raw_data;
      if (typeof rawData === 'string') {
        try { rawData = JSON.parse(rawData); } catch(e) {}
      }
      console.log(`Has quoteHtml? ${!!rawData?.quoteHtml}`);
      if (rawData?.quoteHtml) {
        console.log(`quoteHtml length: ${rawData.quoteHtml.length}`);
      } else {
        console.log("Keys in rawData:", rawData ? Object.keys(rawData) : "none");
      }
      console.log("-----------------------");
    });
  }
}

checkRows();
