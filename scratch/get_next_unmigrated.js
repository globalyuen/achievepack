import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.VITE_SUPABASE_URL;
const KEY = process.env.VITE_SUPABASE_ANON_KEY;

if (!URL || !KEY) {
  console.error(JSON.stringify({ error: "Missing config URL/KEY" }));
  process.exit(1);
}

const productDataPath = path.resolve('/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/store/productData.ts');

function generateSlug(name, material, size) {
  let raw = `${name}-${material}-${size}`.toLowerCase();
  raw = raw.replace(/[^a-z0-9]+/g, '-');
  raw = raw.replace(/(^-|-$)/g, '');
  if (raw.length > 60) {
    raw = raw.substring(0, 60).replace(/-$/, '');
  }
  return raw;
}

function detectShape(name) {
  const n = name.toLowerCase();
  if (n.includes('three-side') || n.includes('3-side') || n.includes('3 side')) return 'Three-Side Seal Bag';
  if (n.includes('flat bottom') || n.includes('eight-side')) return 'Flat Bottom Pouch';
  if (n.includes('spout')) return 'Spout Pouch';
  if (n.includes('gusset') || n.includes('side seal bag')) return 'Side Gusset Pouch';
  return 'Stand Up Pouch';
}

async function run() {
  const queryUrl = `${URL}/rest/v1/webhook_logs?source=eq.Quote%20Generator&status=eq.Success&select=id,created_at,raw_data&order=created_at.desc`;
  const res = await fetch(queryUrl, {
    headers: {
      'apikey': KEY,
      'Authorization': `Bearer ${KEY}`
    }
  });
  
  if (!res.ok) {
    console.error(JSON.stringify({ error: `Supabase fetch failed: ${res.status}` }));
    process.exit(1);
  }
  
  const logs = await res.json();
  const productDataText = fs.readFileSync(productDataPath, 'utf8');
  
  const candidates = [];
  logs.forEach(log => {
    let raw = log.raw_data;
    if (typeof raw === 'string') {
      try { raw = JSON.parse(raw); } catch(e) {}
    }
    let pricingData = raw?.pricingData;
    if (typeof pricingData === 'string') {
      try { pricingData = JSON.parse(pricingData); } catch(e) {}
    }
    if (pricingData) {
      const items = Array.isArray(pricingData) ? pricingData : Object.values(pricingData);
      items.forEach(item => {
        const rawName = item.product_name || item.productName || 'N/A';
        const material = item.material || 'N/A';
        const size = item.size || 'N/A';
        const features = item.features || 'N/A';
        const pricing = item.pricing || [];
        
        if (rawName === 'N/A' || pricing.length === 0) return;
        
        const shape = detectShape(rawName);
        let name = `${size} ${rawName}`;
        if (!rawName.includes('(') && !rawName.includes(')')) {
          let matClean = material.split(',')[0].trim();
          matClean = matClean.replace(/thickness.*$/gi, '').trim();
          matClean = matClean.split('/')[0].trim(); // Get outer layer / primary coating
          matClean = matClean.replace(/\s*\/+\s*$/g, '').trim();
          name = `${size} ${shape} ( ${matClean} )`;
        }

        const slug = generateSlug(rawName, material, size);
        candidates.push({
          slug,
          name,
          material,
          size,
          features,
          pricing,
          logId: log.id,
          viewQuoteLink: `/view-quote/${log.id}`
        });
      });
    }
  });
  
  let targetProduct = null;
  for (const p of candidates) {
    const hasSlug = productDataText.includes(`id: '${p.slug}'`) || productDataText.includes(`id: "${p.slug}"`);
    const hasQuoteId = productDataText.includes(p.logId);
    if (!hasSlug && !hasQuoteId) {
      targetProduct = p;
      break;
    }
  }
  
  if (!targetProduct) {
    console.log(JSON.stringify({ status: "ALL_MIGRATED", message: "All unique B2B quotes have already been successfully migrated!" }));
    process.exit(0);
  }
  
  const isEco = targetProduct.material.toLowerCase().includes('compostable') || 
                targetProduct.material.toLowerCase().includes('kraft') ||
                targetProduct.material.toLowerCase().includes('pla') ||
                targetProduct.material.toLowerCase().includes('pbat') ||
                targetProduct.material.toLowerCase().includes('biodegradable');
  
  const themeAccent = isEco ? "dark green organic botanical forest" : "premium commercial minimalist B2B packaging showcase";
  const badgeLabel = isEco ? "🌱 100% Compostable" : "♻️ Recyclable High Barrier";
  
  const prompt = `A professional Amazon-quality B2B e-commerce product mockup of ${targetProduct.name} standing upright, featuring its exact material details (${targetProduct.material}) and size specifications (${targetProduct.size}). Studio lighting, modern premium setup, ${themeAccent} themed backdrop, elegant e-shop presentation, clean aesthetic, achievepack.com branding, sharp details`;
  
  const usdPricingTiers = targetProduct.pricing.map(tier => {
    const qty = parseInt(tier.qty || tier.quantity);
    const unitRmb = parseFloat(tier.unit_rmb || tier.unitPrice);
    const unitPrice = parseFloat((unitRmb / 6.8).toFixed(3));
    const totalPrice = parseFloat((unitPrice * qty).toFixed(2));
    return { quantity: qty, unitPrice, totalPrice };
  });
  usdPricingTiers.sort((a, b) => a.quantity - b.quantity);
  
  const baseTier = usdPricingTiers[0];
  const shape = detectShape(targetProduct.name);
  const category = isEco ? 'eco-stock' : 'conventional-stock';
  
  const formattedFeatures = [
    `${shape} Design: Perfectly shaped B2B commercial packaging optimized for professional branding.`,
    `Premium Material Structure: Engineered using high-performance ${targetProduct.material} layers.`,
    `Wholesale Value Tiers: Low MOQ starting from ${baseTier.quantity.toLocaleString()} pieces with custom discounts.`,
    `Secure Closure System: Built-in reliable seals to preserve freshness and block moisture.`
  ];
  if (targetProduct.features && targetProduct.features !== 'N/A') {
    formattedFeatures.unshift(`Advanced B2B Specs: ${targetProduct.features}`);
  }
  
  const result = {
    status: "FOUND",
    slug: targetProduct.slug,
    name: targetProduct.name,
    material: targetProduct.material,
    size: targetProduct.size,
    category,
    shape,
    badgeLabel,
    isEco,
    prompt,
    basePrice: baseTier.totalPrice,
    pricePerPiece: baseTier.unitPrice,
    minQuantity: baseTier.quantity,
    sizeInfo: targetProduct.size,
    usdPricingTiers,
    formattedFeatures,
    logId: targetProduct.logId,
    viewQuoteLink: targetProduct.viewQuoteLink
  };
  
  console.log(JSON.stringify(result, null, 2));
}

run().catch(err => {
  console.error(JSON.stringify({ error: err.message }));
  process.exit(1);
});
