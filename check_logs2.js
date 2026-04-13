import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.VITE_SUPABASE_URL;
const KEY = process.env.VITE_SUPABASE_ANON_KEY;

fetch(`${URL}/rest/v1/webhook_logs?select=id,status,message,raw_data&order=created_at.desc&limit=5`, {
  headers: {
    'apikey': KEY,
    'Authorization': `Bearer ${KEY}`
  }
}).then(r => r.json()).then(data => {
  data.forEach(row => {
    console.log(`ID: ${row.id}, Status: ${row.status}, Message: ${row.message}`);
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
});
