import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.VITE_SUPABASE_URL;
const KEY = process.env.VITE_SUPABASE_ANON_KEY;

const queryUrl = `${URL}/rest/v1/webhook_logs?source=eq.Quote%20Generator&status=eq.Success&created_at=gt.2026-05-18T00:00:00&select=id,created_at,message,raw_data`;

fetch(queryUrl, {
  headers: {
    'apikey': KEY,
    'Authorization': `Bearer ${KEY}`
  }
})
.then(r => r.json())
.then(data => {
  console.log(`Found ${data.length} logs since May 18, 2026.`);
  
  data.forEach((row, i) => {
    let rawData = row.raw_data;
    if (typeof rawData === 'string') {
      try { rawData = JSON.parse(rawData); } catch(e) {}
    }
    
    console.log(`\n===========================================`);
    console.log(`Record #${i} | ID: ${row.id} | Created: ${row.created_at}`);
    console.log(`Message: ${row.message}`);
    console.log(`Customer: ${rawData.customer}`);
    
    let pricingData = rawData.pricingData;
    if (typeof pricingData === 'string') {
      try { pricingData = JSON.parse(pricingData); } catch(e) {}
    }
    
    if (pricingData) {
      const items = Array.isArray(pricingData) ? pricingData : Object.values(pricingData);
      items.forEach((item, idx) => {
        console.log(`  Item ${idx+1}:`);
        console.log(`    Product Name: ${item.productName || item.product_name || 'N/A'}`);
        console.log(`    Material: ${item.material || 'N/A'}`);
        console.log(`    Size: ${item.size || 'N/A'}`);
        console.log(`    Features: ${item.features || 'N/A'}`);
        console.log(`    Pricing tiers:`, JSON.stringify(item.pricing));
      });
    }
  });
})
.catch(err => {
  console.error("Error executing fetch:", err);
});
