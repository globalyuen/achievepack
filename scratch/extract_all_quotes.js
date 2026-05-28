import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.VITE_SUPABASE_URL;
const KEY = process.env.VITE_SUPABASE_ANON_KEY;

if (!URL || !KEY) {
  console.error("Missing config URL/KEY");
  process.exit(1);
}

const queryUrl = `${URL}/rest/v1/webhook_logs?source=eq.Quote%20Generator&status=eq.Success&select=id,created_at,raw_data&order=created_at.desc`;

fetch(queryUrl, {
  headers: {
    'apikey': KEY,
    'Authorization': `Bearer ${KEY}`
  }
})
.then(r => r.json())
.then(data => {
  console.log(`Found ${data.length} successful B2B client quotes.`);
  const products = [];
  data.forEach((row) => {
    let rawData = row.raw_data;
    if (typeof rawData === 'string') {
      try { rawData = JSON.parse(rawData); } catch(e) {}
    }
    
    let pricingData = rawData?.pricingData;
    if (typeof pricingData === 'string') {
      try { pricingData = JSON.parse(pricingData); } catch(e) {}
    }
    
    if (pricingData) {
      const items = Array.isArray(pricingData) ? pricingData : Object.values(pricingData);
      items.forEach((item) => {
        const name = item.product_name || item.productName || 'N/A';
        const material = item.material || 'N/A';
        const size = item.size || 'N/A';
        const features = item.features || 'N/A';
        
        products.push({
          id: row.id,
          date: row.created_at,
          name,
          material,
          size,
          features,
          pricing: item.pricing || []
        });
      });
    }
  });
  
  console.log("Unique product specs extracted:");
  const uniqueSpecs = {};
  products.forEach(p => {
    const key = `${p.name} | ${p.material} | ${p.size}`.toLowerCase();
    if (!uniqueSpecs[key]) {
      uniqueSpecs[key] = {
        name: p.name,
        material: p.material,
        size: p.size,
        features: p.features,
        pricing: p.pricing,
        dates: [p.date],
        ids: [p.id]
      };
    } else {
      uniqueSpecs[key].dates.push(p.date);
      uniqueSpecs[key].ids.push(p.id);
    }
  });
  
  Object.keys(uniqueSpecs).forEach((key, idx) => {
    const spec = uniqueSpecs[key];
    console.log(`\n--- Unique Product ${idx + 1} ---`);
    console.log(`Name: ${spec.name}`);
    console.log(`Material: ${spec.material}`);
    console.log(`Size: ${spec.size}`);
    console.log(`Features: ${spec.features}`);
    console.log(`Pricing Tiers Count: ${spec.pricing.length}`);
    console.log(`Pricing sample:`, JSON.stringify(spec.pricing));
    console.log(`Appeared: ${spec.ids.length} times (IDs: ${spec.ids.join(', ')})`);
  });
})
.catch(err => {
  console.error("Error fetching quotes:", err);
});
