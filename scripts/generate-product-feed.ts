import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { FEATURED_PRODUCTS } from '../src/store/productData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_PATH = path.join(__dirname, '../public/google-merchant-feed.xml');
const BASE_URL = 'https://achievepack.com';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateFeed() {
  console.log('🔄 Starting high-fidelity Google Merchant Feed generation...');

  const items = FEATURED_PRODUCTS.map((product) => {
    const id = product.id;
    const gmcId = id.length > 50 ? id.substring(0, 50) : id;
    const title = escapeXml(product.name);
    const link = `${BASE_URL}/store/product/${id}`;
    
    // Ensure image URLs are absolute
    const imageUrls = product.images.map(img => img.startsWith('http') ? img : `${BASE_URL}${img}`);
    const primaryImage = imageUrls[0] || '';
    const additionalImages = imageUrls.slice(1, 11); // Up to 10 extra images
    
    // Default base price
    const price = product.basePrice || 0;
    const priceStr = `${price.toFixed(2)} USD`;
    const inStock = product.inStock !== false ? 'in_stock' : 'out_of_stock';
    
    // Google Product Category: 6848 = Business & Industrial > Packaging & Shipping > Packaging Materials
    const googleCategory = '6848';
    const productType = escapeXml(product.category.replace(/-/g, ' '));

    // Compile content for material/color extraction
    const content = [
      product.name,
      product.description,
      ('material' in product ? product.material : '') || '',
      ...(product.features || [])
    ].join(' ').toLowerCase();

    // 1. Extract Material
    let material = '';
    if (content.includes('recyclable pe') || content.includes('mono recyclable') || content.includes('recyclable plastic')) {
      material = 'Recyclable PE';
    } else if (content.includes('compostable pla') || content.includes('pla') || content.includes('biodegradable pla') || content.includes('pbat') || content.includes('corn fiber')) {
      material = 'Compostable PLA';
    } else if (content.includes('kraft paper') || content.includes('natural kraft') || content.includes('kraft') || content.includes('grayboard') || content.includes('rice paper')) {
      material = 'Kraft Paper';
    } else if (content.includes('tuck cardboard') || content.includes('cardboard') || content.includes('paperboard')) {
      material = 'Tuck Cardboard';
    } else if ('material' in product && product.material) {
      material = product.material;
    }

    // 2. Extract Color
    let color = '';
    if (content.includes('milky clear')) {
      color = 'Milky Clear';
    } else if (content.includes('natural kraft') || content.includes('kraft')) {
      color = 'Natural Kraft';
    } else if (content.includes('clear')) {
      color = 'Clear';
    } else if (content.includes('brown')) {
      color = 'Brown';
    } else if (content.includes('black')) {
      color = 'Black';
    } else if (content.includes('white')) {
      color = 'White';
    } else if (content.includes('silver')) {
      color = 'Silver';
    } else if (content.includes('gold')) {
      color = 'Gold';
    }

    // 3. Extract Size
    let size = '';
    if ('sizeInfo' in product && product.sizeInfo) {
      size = product.sizeInfo;
    } else if ('insideDimensions' in product && product.insideDimensions) {
      size = product.insideDimensions;
    } else if ('sizeVariants' in product && product.sizeVariants && product.sizeVariants.length > 0) {
      size = product.sizeVariants[0].dimensions || product.sizeVariants[0].label;
    } else if ('sizeWithQuantities' in product && product.sizeWithQuantities && product.sizeWithQuantities.length > 0) {
      size = product.sizeWithQuantities[0].dimensions || product.sizeWithQuantities[0].label;
    } else {
      const sizeMatch = product.name.match(/\b\d+\s*x\s*\d+\s*(?:mm|inch|cm)?\b/i);
      if (sizeMatch) {
        size = sizeMatch[0];
      } else {
        size = 'Standard';
      }
    }

    // 4. Shipping weight
    let shippingWeight = '2.0 lb';
    if (product.category === 'sample') {
      shippingWeight = '0.5 lb';
    } else if (product.category === 'boxes') {
      shippingWeight = '12.0 lb';
    } else if (product.category === 'conventional-digital' || product.category === 'eco-digital') {
      shippingWeight = product.minOrder >= 1000 ? '8.0 lb' : '1.5 lb';
    } else if (product.minOrder >= 1000) {
      shippingWeight = '6.0 lb';
    }

    // 5. Custom shipping cost extraction
    const shippingCost = ('shippingCost' in product ? product.shippingCost : 0) || 0;
    const shippingCostStr = `${shippingCost.toFixed(2)} USD`;

    // 6. Dynamic long keyword-rich description
    let richDescription = product.description;
    if (product.features && product.features.length > 0) {
      richDescription += `\n\nKey Features &amp; Specifications:\n` + product.features.map(f => `• ${f}`).join('\n');
    }
    richDescription += `\n\nProduct Information:`;
    if (material) richDescription += `\n• Material composition: ${material}`;
    if (color) richDescription += `\n• Color finish: ${color}`;
    if (size) richDescription += `\n• Available Sizing: ${size}`;
    if (product.turnaround) richDescription += `\n• Production Turnaround: ${product.turnaround}`;
    if (product.minOrder) richDescription += `\n• Minimum Order Quantity (MOQ): ${product.minOrder} units`;
    richDescription += `\n\nAchieve Pack specializes in high-quality, professional B2B and B2C custom packaging solutions. Our products are engineered for maximum durability, shelf appeal, and sustainable performance. Perfect for startups, retail brands, and industrial suppliers seeking customizable pouches, sustainable bags, and branded mailer packaging. Fully compliant with modern environmental standards. Order your custom printed packaging sample packs or retail collections today!`;

    const descriptionEscaped = escapeXml(richDescription);

    let itemXml = `    <item>
      <g:id>${gmcId}</g:id>
      <g:title>${title}</g:title>
      <g:description>${descriptionEscaped}</g:description>
      <g:link>${link}</g:link>
      <g:image_link>${primaryImage}</g:image_link>`;

    additionalImages.forEach(img => {
      itemXml += `\n      <g:additional_image_link>${escapeXml(img)}</g:additional_image_link>`;
    });

    itemXml += `
      <g:condition>new</g:condition>
      <g:availability>${inStock}</g:availability>
      <g:price>${priceStr}</g:price>
      <g:brand>Achieve Pack</g:brand>
      <g:google_product_category>${googleCategory}</g:google_product_category>
      <g:product_type>${productType}</g:product_type>
      <g:identifier_exists>no</g:identifier_exists>`;

    if (material) {
      itemXml += `\n      <g:material>${escapeXml(material)}</g:material>`;
    }
    if (color) {
      itemXml += `\n      <g:color>${escapeXml(color)}</g:color>`;
    }
    if (size) {
      itemXml += `\n      <g:size>${escapeXml(size)}</g:size>`;
    }
    if (shippingWeight) {
      itemXml += `\n      <g:shipping_weight>${escapeXml(shippingWeight)}</g:shipping_weight>`;
    }

    // Always include US shipping details to prevent 'missing shipping info' disapprovals
    itemXml += `
      <g:shipping>
        <g:country>US</g:country>
        <g:service>Standard</g:service>
        <g:price>${shippingCostStr}</g:price>
      </g:shipping>
    </item>`;

    return itemXml;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Achieve Pack Product Feed</title>
    <link>${BASE_URL}</link>
    <description>Sustainable and Custom Packaging Solutions - Automated Feed</description>
${items.join('\n')}
  </channel>
</rss>`;

  fs.writeFileSync(OUTPUT_PATH, xml, 'utf-8');
  console.log(`✅ Google Merchant Feed generated successfully!`);
  console.log(`📝 Generated ${items.length} products`);
  console.log(`📍 Saved to: ${OUTPUT_PATH}`);
}

try {
  generateFeed();
} catch (error: any) {
  console.error('❌ Error generating product feed:', error.message);
  process.exit(1);
}
