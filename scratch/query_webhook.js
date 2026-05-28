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
  console.log(`Found ${data.length} successful Quote Generator logs.`);
  data.forEach((row, i) => {
    let rawData = row.raw_data;
    if (typeof rawData === 'string') {
      try { rawData = JSON.parse(rawData); } catch(e) {}
    }
    if (rawData && rawData.pricingData) {
      console.log(`\n============================`);
      console.log(`Record #${i+1} - ID: ${row.id}`);
      console.log(`Customer: ${rawData.customer || 'Unknown'}`);
      console.log(`pricingData schema fields:`, Object.keys(rawData.pricingData));
      
      // Let's print products or pricing configurations inside pricingData
      // pricingData usually has products array or something. Let's see what is inside:
      if (Array.isArray(rawData.pricingData.products)) {
        console.log(`Products (${rawData.pricingData.products.length}):`);
        rawData.pricingData.products.forEach((p, pi) => {
          console.log(`  Product ${pi+1}:`);
          console.log(`    Name/Bag Type: ${p.bagType || p.name}`);
          console.log(`    Materials: ${p.materials || p.material}`);
          console.log(`    Dimensions: ${p.dimensions}`);
          console.log(`    Pricing Tiers structure:`, p.pricingTiers ? Object.keys(p.pricingTiers) : 'none');
          console.log(`    Pricing Tiers (first 2):`, JSON.stringify(p.pricingTiers).substring(0, 300));
        });
      } else {
        console.log(`pricingData (not array of products):`, JSON.stringify(rawData.pricingData).substring(0, 500));
      }
    }
  });
})
.catch(err => {
  console.error("Error executing fetch:", err);
});
