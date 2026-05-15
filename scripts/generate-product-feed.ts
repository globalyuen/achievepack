import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { FEATURED_PRODUCTS } from '../src/store/productData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_PATH = path.join(__dirname, '../public/google-merchant-feed.xml');
const BASE_URL = 'https://achievepack.com';

function generateFeed() {
  console.log('🔄 Starting Google Merchant Feed generation...');

  const items = FEATURED_PRODUCTS.map((product) => {
    // Only include purchasable/real products (can filter out categories if needed)
    // We'll include all of them for now
    
    const id = product.id;
    const title = product.name.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const description = product.description.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const link = `${BASE_URL}/store/product/${id}`;
    
    // Ensure the image URL is absolute
    let imageUrl = product.images[0] || '';
    if (imageUrl && !imageUrl.startsWith('http')) {
      imageUrl = `${BASE_URL}${imageUrl}`;
    }

    // Default base price
    let price = product.basePrice || 0;
    // Format price properly: "100.00 USD"
    const priceStr = `${price.toFixed(2)} USD`;
    
    const inStock = product.inStock !== false ? 'in_stock' : 'out_of_stock';
    
    // Determine Google Product Category if needed (optional but recommended)
    // 6848 = Business & Industrial > Packaging & Shipping > Packaging Materials
    
    return `    <item>
      <g:id>${id}</g:id>
      <g:title>${title}</g:title>
      <g:description>${description}</g:description>
      <g:link>${link}</g:link>
      <g:image_link>${imageUrl}</g:image_link>
      <g:condition>new</g:condition>
      <g:availability>${inStock}</g:availability>
      <g:price>${priceStr}</g:price>
      <g:google_product_category>6848</g:google_product_category>
    </item>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Achieve Pack</title>
    <link>${BASE_URL}</link>
    <description>Sustainable and Custom Packaging Solutions</description>
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
