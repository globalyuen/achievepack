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
    const id = product.id;
    const title = product.name.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const description = product.description.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const link = `${BASE_URL}/store/product/${id}`;
    
    // Ensure image URLs are absolute
    const imageUrls = product.images.map(img => img.startsWith('http') ? img : `${BASE_URL}${img}`);
    const primaryImage = imageUrls[0] || '';
    const additionalImages = imageUrls.slice(1, 11); // Up to 10 extra images
    
    // Default base price
    let price = product.basePrice || 0;
    const priceStr = `${price.toFixed(2)} USD`;
    const inStock = product.inStock !== false ? 'in_stock' : 'out_of_stock';
    
    // Google Product Category: 6848 = Business & Industrial > Packaging & Shipping > Packaging Materials
    const googleCategory = '6848';
    const productType = product.category.replace(/-/g, ' ');

    let itemXml = `    <item>
      <g:id>${id}</g:id>
      <g:title>${title}</g:title>
      <g:description>${description}</g:description>
      <g:link>${link}</g:link>
      <g:image_link>${primaryImage}</g:image_link>`;

    additionalImages.forEach(img => {
      itemXml += `\n      <g:additional_image_link>${img}</g:additional_image_link>`;
    });

    itemXml += `
      <g:condition>new</g:condition>
      <g:availability>${inStock}</g:availability>
      <g:price>${priceStr}</g:price>
      <g:brand>Achieve Pack</g:brand>
      <g:google_product_category>${googleCategory}</g:google_product_category>
      <g:product_type>${productType}</g:product_type>
      <g:identifier_exists>no</g:identifier_exists>
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
