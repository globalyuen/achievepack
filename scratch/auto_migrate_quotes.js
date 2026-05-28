import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.VITE_SUPABASE_URL;
const KEY = process.env.VITE_SUPABASE_ANON_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyDT-UPqJroRFexHQoOWLtHih3DRm8j1sME';

if (!URL || !KEY) {
  console.error("Missing config URL/KEY");
  process.exit(1);
}

const productDataPath = path.resolve('/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/store/productData.ts');
const imageDir = path.resolve('/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/imgs/store/products');

if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

// Generate URL slug from name/specs
function generateSlug(name, material, size) {
  let raw = `${name}-${material}-${size}`.toLowerCase();
  // clean up special characters
  raw = raw.replace(/[^a-z0-9]+/g, '-');
  raw = raw.replace(/(^-|-$)/g, '');
  // shorten if too long
  if (raw.length > 60) {
    raw = raw.substring(0, 60).replace(/-$/, '');
  }
  return raw;
}

// Clean and categorize shape
function detectShape(name) {
  const n = name.toLowerCase();
  if (n.includes('flat bottom') || n.includes('eight-side')) return 'Flat Bottom Pouch';
  if (n.includes('spout')) return 'Spout Pouch';
  if (n.includes('gusset') || n.includes('side seal bag')) return 'Side Gusset Pouch';
  if (n.includes('three-side') || n.includes('3-side') || n.includes('3 side')) return 'Three-Side Seal Bag';
  return 'Stand Up Pouch'; // default fallback
}

// Generate professional B2B mockup using Gemini API (Imagen 3.0 / Flash fallback)
async function generateMockup(prompt, filename) {
  const outputPath = path.join(imageDir, filename);
  console.log(`Generating mockup image for ${filename}...`);
  
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${GEMINI_API_KEY}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        instances: [{ prompt }],
        parameters: {
          sampleCount: 1,
          aspectRatio: '1:1',
          negativePrompt: 'blurry, low quality, distorted, ugly, bad anatomy, watermark, text'
        }
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data.predictions && data.predictions.length > 0) {
        const base64Bytes = data.predictions[0].bytesBase64Encoded;
        const buffer = Buffer.from(base64Bytes, 'base64');
        fs.writeFileSync(outputPath, buffer);
        console.log(`Successfully saved mockup using Imagen 3.0`);
        return true;
      }
    }
    
    // Fallback: Gemini 2.0 Flash
    console.log(`Imagen failed, trying Gemini 2.0 Flash Image Generation...`);
    const flashUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${GEMINI_API_KEY}`;
    const flashResponse = await fetch(flashUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Generate an image: ${prompt}` }] }],
        generationConfig: { temperature: 1.0, maxOutputTokens: 8192 }
      })
    });
    
    if (flashResponse.ok) {
      const flashData = await flashResponse.json();
      if (flashData.candidates?.[0]?.content?.parts) {
        for (const part of flashData.candidates[0].content.parts) {
          if (part.inlineData) {
            const buffer = Buffer.from(part.inlineData.data, 'base64');
            fs.writeFileSync(outputPath, buffer);
            console.log(`Successfully saved mockup using Gemini 2.0 Flash`);
            return true;
          }
        }
      }
    }
    console.error(`Failed to generate image for ${filename}. Status: ${response.status}`);
  } catch (error) {
    console.error(`Error generating mockup:`, error);
  }
  return false;
}

async function run() {
  console.log("Starting auto migration check...");
  
  // 1. Fetch B2B client quotes from Supabase
  const queryUrl = `${URL}/rest/v1/webhook_logs?source=eq.Quote%20Generator&status=eq.Success&select=id,created_at,raw_data&order=created_at.desc`;
  const res = await fetch(queryUrl, {
    headers: {
      'apikey': KEY,
      'Authorization': `Bearer ${KEY}`
    }
  });
  
  if (!res.ok) {
    console.error(`Supabase fetch failed: ${res.status}`);
    process.exit(1);
  }
  
  const logs = await res.json();
  console.log(`Fetched ${logs.length} quote logs from database.`);
  
  // 2. Load existing productData.ts
  let productDataText = fs.readFileSync(productDataPath, 'utf8');
  
  // 3. Extract unique products from logs
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
          logId: log.id
        });
      });
    }
  });
  
  // 4. Find the first unmigrated unique product
  let targetProduct = null;
  for (const p of candidates) {
    // Check if productData.ts already has this slug/id or quote ID
    const hasSlug = productDataText.includes(`id: '${p.slug}'`) || productDataText.includes(`id: "${p.slug}"`);
    const hasQuoteId = productDataText.includes(p.logId);
    if (!hasSlug && !hasQuoteId) {
      targetProduct = p;
      break;
    }
  }
  
  if (!targetProduct) {
    console.log("All unique B2B quotes have already been successfully migrated!");
    process.exit(0);
  }
  
  console.log(`\nFound new unmigrated quote product:`);
  console.log(`Name: ${targetProduct.name}`);
  console.log(`Material: ${targetProduct.material}`);
  console.log(`Size: ${targetProduct.size}`);
  console.log(`Slug: ${targetProduct.slug}`);
  console.log(`Log ID: ${targetProduct.logId}`);
  
  // 5. Generate high-quality marketing mockup image
  const shape = detectShape(targetProduct.name);
  const imageFilename = `${targetProduct.slug}.png`;
  const isEco = targetProduct.material.toLowerCase().includes('compostable') || 
                targetProduct.material.toLowerCase().includes('kraft') ||
                targetProduct.material.toLowerCase().includes('pla') ||
                targetProduct.material.toLowerCase().includes('pbat') ||
                targetProduct.material.toLowerCase().includes('biodegradable');
  
  const themeAccent = isEco ? "dark green organic botanical forest" : "premium commercial minimalist B2B packaging showcase";
  const badgeLabel = isEco ? "🌱 100% Compostable" : "♻️ Recyclable High Barrier";
  
  const prompt = `A professional Amazon-quality B2B e-commerce product mockup of ${targetProduct.name} standing upright, featuring its exact material details (${targetProduct.material}) and size specifications (${targetProduct.size}). Studio lighting, modern premium setup, ${themeAccent} themed backdrop, elegant e-shop presentation, clean aesthetic, achievepack.com branding, sharp details`;
  
  let imageGenerated = await generateMockup(prompt, imageFilename);
  if (!imageGenerated) {
    console.log("Mockup generation failed. Utilizing high-quality e-shop template fallback...");
    let fallbackSrc = "conven-sup-met-zip-premium.png"; // default conventional
    if (isEco) {
      fallbackSrc = "compostable-oval-doypack-premium.png";
      if (targetProduct.material.toLowerCase().includes("kraft")) {
        fallbackSrc = "compostable-kraft-premium.png";
      }
    } else {
      if (shape.includes("Flat Bottom")) {
        fallbackSrc = "pe-flat-bottom-premium.png";
      } else if (shape.includes("Gusset")) {
        fallbackSrc = "pe-oval-doypack-premium.png";
      } else {
        fallbackSrc = targetProduct.material.toLowerCase().includes("transparent") ? "conven-sup-clear-zip-premium.png" : "conven-sup-met-zip-premium.png";
      }
    }
    const srcPath = path.join(imageDir, fallbackSrc);
    const destPath = path.join(imageDir, imageFilename);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Successfully copied fallback mockup template: ${fallbackSrc} -> ${imageFilename}`);
      imageGenerated = true;
    } else {
      console.error(`Fallback template not found at ${srcPath}. Aborting.`);
      process.exit(1);
    }
  }
  
  // 6. Convert pricing tiers to USD (rmb / 6.8)
  const usdPricingTiers = targetProduct.pricing.map(tier => {
    const qty = parseInt(tier.qty || tier.quantity);
    const unitRmb = parseFloat(tier.unit_rmb || tier.unitPrice);
    const unitPrice = parseFloat((unitRmb / 6.8).toFixed(3));
    const totalPrice = parseFloat((unitPrice * qty).toFixed(2));
    return {
      quantity: qty,
      unitPrice,
      totalPrice
    };
  });
  
  // Sort tiers ascending by quantity
  usdPricingTiers.sort((a, b) => a.quantity - b.quantity);
  
  const baseTier = usdPricingTiers[0];
  const category = isEco ? 'eco-stock' : 'conventional-stock';
  
  // Create features array
  const formattedFeatures = [
    `${shape} Design: Perfectly shaped B2B commercial packaging optimized for professional branding.`,
    `Premium Material Structure: Engineered using high-performance ${targetProduct.material} layers.`,
    `Wholesale Value Tiers: Low MOQ starting from ${baseTier.quantity.toLocaleString()} pieces with custom discounts.`,
    `Secure Closure System: Built-in reliable seals to preserve freshness and block moisture.`
  ];
  if (targetProduct.features && targetProduct.features !== 'N/A') {
    formattedFeatures.unshift(`Advanced B2B Specs: ${targetProduct.features}`);
  }
  
  // 7. Format the new StoreProduct object literal
  const productObjectString = `
  {
    id: '${targetProduct.slug}',
    name: '${targetProduct.name}',
    category: '${category}',
    description: 'A premium, custom-spec wholesale B2B packaging solution engineered to meet the highest commercial standards. Incorporating a heavy-duty ${targetProduct.material} multi-layer structure, this product ensures maximum barrier defense against humidity, light, and oxidation. Formulated specifically to retain flavor and structural integrity for retail display, it provides exceptional shelf-life preservation for coffee, specialty foods, organic treats, or industrial supplies. Features convenient tear notches and robust seal lines.',
    shortDesc: 'Premium custom-quoted B2B ${shape.toLowerCase()} made of ${targetProduct.material.split(',')[0]}',
    features: ${JSON.stringify(formattedFeatures, null, 6)},
    images: [
      '/imgs/store/products/${imageFilename}'
    ],
    badge: '${badgeLabel}',
    rating: 4.9,
    reviews: 14,
    inStock: true,
    turnaround: '15-20 days',
    minOrder: ${baseTier.quantity},
    shape: '${shape}',
    material: '${targetProduct.material}',
    basePrice: ${baseTier.totalPrice},
    pricePerPiece: ${baseTier.unitPrice},
    minQuantity: ${baseTier.quantity},
    quantityStep: ${baseTier.quantity},
    sizeInfo: '${targetProduct.size}',
    viewQuoteLink: '/view-quote/${targetProduct.logId}',
    sizeWithQuantities: [
      {
        id: '${targetProduct.slug}-size-default',
        label: '${targetProduct.size}',
        dimensions: '${targetProduct.size} • ${targetProduct.material.split('/')[0]} • Industrial Grade',
        quantityOptions: ${JSON.stringify(usdPricingTiers, null, 10)}
      }
    ],
    customPrintNote: 'Custom full-color print versions available from ${baseTier.quantity}+ pieces. Please consult our team.'
  },`;

  // 8. Inject productObjectString right after the correct array declaration:
  const targetArrayKey = category === 'eco-stock' 
    ? "const ECO_STOCK_PRODUCTS: EcoStockProduct[] = [" 
    : "const CONVENTIONAL_STOCK_PRODUCTS: EcoStockProduct[] = [";
  const index = productDataText.indexOf(targetArrayKey);
  if (index === -1) {
    console.error(`Could not find ${targetArrayKey} array inside productData.ts`);
    process.exit(1);
  }
  
  const insertionPoint = index + targetArrayKey.length;
  const updatedProductDataText = 
    productDataText.slice(0, insertionPoint) + 
    productObjectString + 
    productDataText.slice(insertionPoint);
    
  fs.writeFileSync(productDataPath, updatedProductDataText, 'utf8');
  console.log(`\nSuccessfully injected new B2B product [${targetProduct.slug}] into productData.ts under [${category}]!`);
  
  console.log("Migration complete!");
}

run().catch(err => {
  console.error("Critical migration error:", err);
  process.exit(1);
});
