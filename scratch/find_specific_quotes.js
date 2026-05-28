import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.VITE_SUPABASE_URL;
const KEY = process.env.VITE_SUPABASE_ANON_KEY;

const queryUrl = `${URL}/rest/v1/webhook_logs?source=eq.Quote%20Generator&status=eq.Success&select=id,created_at,raw_data`;

fetch(queryUrl, {
  headers: {
    'apikey': KEY,
    'Authorization': `Bearer ${KEY}`
  }
})
.then(r => r.json())
.then(data => {
  console.log(`Found ${data.length} logs.`);
  
  const keywords = ['rice paper', 'flat bottom', 'compostable stand up', 'compostable'];
  
  data.forEach((row, i) => {
    let rawData = row.raw_data;
    if (typeof rawData === 'string') {
      try { rawData = JSON.parse(rawData); } catch(e) {}
    }
    
    const textToSearch = (row.message + ' ' + (rawData.text || '') + ' ' + JSON.stringify(rawData)).toLowerCase();
    
    const matches = keywords.filter(kw => textToSearch.includes(kw));
    if (matches.length > 0) {
      console.log(`\n===========================================`);
      console.log(`Record #${i} | ID: ${row.id} | Created: ${row.created_at}`);
      console.log(`Matched Keywords: ${matches.join(', ')}`);
      console.log(`Message: ${row.message}`);
      console.log(`Customer: ${rawData.customer}`);
      
      // Let's print the specific products and sizes under this record
      let pricingData = rawData.pricingData;
      if (typeof pricingData === 'string') {
        try { pricingData = JSON.parse(pricingData); } catch(e) {}
      }
      
      if (pricingData) {
        const items = Array.isArray(pricingData) ? pricingData : Object.values(pricingData);
        items.forEach((item, idx) => {
          console.log(`  Item ${idx+1}:`);
          console.log(`    Product Name: ${item.product_name || item.productName || 'N/A'}`);
          console.log(`    Material: ${item.material || 'N/A'}`);
          console.log(`    Size: ${item.size || 'N/A'}`);
          console.log(`    Features: ${item.features || 'N/A'}`);
          console.log(`    Pricing count: ${item.pricing ? item.pricing.length : 0}`);
          console.log(`    Pricing details:`, JSON.stringify(item.pricing));
        });
      }
    }
  });
})
.catch(err => {
  console.error("Error executing fetch:", err);
});
