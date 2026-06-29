import type { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';
import { FEATURED_PRODUCTS } from '../src/store/productData.js';

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { productId } = req.query;
    const id = Array.isArray(productId) ? productId[0] : productId;

    // Read the built file or fallback to local index.html
    let htmlPath = path.join(process.cwd(), 'dist/index.html');
    if (!fs.existsSync(htmlPath)) {
      htmlPath = path.join(process.cwd(), 'index.html');
    }

    if (!fs.existsSync(htmlPath)) {
      return res.status(444).send('Error: Template index.html not found.');
    }

    let html = fs.readFileSync(htmlPath, 'utf-8');

    // If no productId, just return the base HTML
    if (!id) {
      return res.status(200).send(html);
    }

    const product = FEATURED_PRODUCTS.find((p) => p.id === id);

    // If product not found, return original HTML unchanged
    if (!product) {
      return res.status(200).send(html);
    }

    // Dynamic SEO data preparation
    const host = req.headers.host || '';
    const isPouch = host.includes('pouch.eco');
    
    const brandName = isPouch ? 'Pouch.eco' : 'Achieve Pack';
    const siteUrl = isPouch ? 'https://www.pouch.eco' : 'https://achievepack.com';
    const productPath = isPouch ? `/shop/${product.id}` : `/store/product/${product.id}`;
    
    const titleText = `${product.name} | ${brandName}`;
    const descText = product.shortDesc || product.description.substring(0, 160);
    const keywordsText = `${product.name.toLowerCase()}, eco-friendly packaging, sustainable packaging, custom printed pouches, ${product.category.replace(/-/g, ' ')}`;
    const productUrl = `${siteUrl}${productPath}`;
    const primaryImage = product.images[0]?.startsWith('http') ? product.images[0] : `${siteUrl}${product.images[0]}`;
    
    // Extract optional details for rich metadata
    let materialVal = 'Recyclable PE';
    const content = [
      product.name,
      product.description,
      ('material' in product ? product.material : '') || '',
      ...(product.features || [])
    ].join(' ').toLowerCase();

    if (content.includes('recyclable pe') || content.includes('mono recyclable') || content.includes('recyclable plastic')) {
      materialVal = 'Recyclable PE';
    } else if (content.includes('compostable pla') || content.includes('pla') || content.includes('biodegradable pla')) {
      materialVal = 'Compostable PLA';
    } else if (content.includes('kraft paper') || content.includes('natural kraft') || content.includes('kraft')) {
      materialVal = 'Kraft Paper';
    } else if (content.includes('tuck cardboard') || content.includes('cardboard') || content.includes('paperboard')) {
      materialVal = 'Tuck Cardboard';
    } else if ('material' in product && product.material) {
      materialVal = product.material;
    }

    // Clean up original tags that we are overriding to avoid duplicates
    html = html.replace(/<title>[^<]*<\/title>/gi, '');
    html = html.replace(/<meta\s+name="keywords"\s+content="[^"]*"\s*\/?\>/gi, '');
    html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?\>/gi, '');
    html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?\>/gi, '');
    html = html.replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?\>/gi, '');
    html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?\>/gi, '');
    html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?\>/gi, '');
    html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?\>/gi, '');
    html = html.replace(/<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?\>/gi, '');
    html = html.replace(/<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?\>/gi, '');
    html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?\>/gi, '');

    const price = product.basePrice || 0;
    const shippingCost = ('shippingCost' in product ? product.shippingCost : 0) || 0;
    const imageUrls = product.images.map((img: string) => img.startsWith('http') ? img : `${siteUrl}${img}`);

    // Create JSON-LD Product Schema
    const jsonLd = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": product.name,
      "image": imageUrls,
      "description": product.description,
      "sku": product.id,
      "mpn": product.id,
      "brand": {
        "@type": "Brand",
        "name": brandName
      },
      "offers": {
        "@type": "Offer",
        "url": productUrl,
        "priceCurrency": "USD",
        "price": price.toFixed(2),
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": product.inStock !== false ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        "seller": {
          "@type": "Organization",
          "name": brandName
        },
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": shippingCost.toFixed(2),
            "currency": "USD"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "US"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 3,
              "unitCode": "DAY"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 3,
              "maxValue": 7,
              "unitCode": "DAY"
            }
          }
        }
      }
    };

    // Construct the metadata and JSON-LD tags
    const seoTags = `
  <title>${escapeHtml(titleText)}</title>
  <meta name="description" content="${escapeHtml(descText)}" />
  <meta name="keywords" content="${escapeHtml(keywordsText)}" />
  <link rel="canonical" href="${productUrl}" />
  
  <meta property="og:type" content="product" />
  <meta property="og:title" content="${escapeHtml(titleText)}" />
  <meta property="og:description" content="${escapeHtml(descText)}" />
  <meta property="og:image" content="${primaryImage}" />
  <meta property="og:url" content="${productUrl}" />
  <meta property="og:site_name" content="${brandName}" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(titleText)}" />
  <meta name="twitter:description" content="${escapeHtml(descText)}" />
  <meta name="twitter:image" content="${primaryImage}" />
  <meta name="twitter:url" content="${productUrl}" />
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>
`;

    // Inject SEO tags right before </head>
    html = html.replace('</head>', `${seoTags}\n</head>`);

    // Return the dynamically enriched HTML page
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(html);
  } catch (error: any) {
    console.error('Error serving dynamic product page:', error);
    // On error, try to return basic HTML as safe fallback
    try {
      let fallbackPath = path.join(process.cwd(), 'index.html');
      if (fs.existsSync(fallbackPath)) {
        return res.status(200).send(fs.readFileSync(fallbackPath, 'utf-8'));
      }
    } catch (_) {}
    return res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}
