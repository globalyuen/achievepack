const fs = require('fs');

const sizes = [
  { code: 's', label: 'Size S (1/4 lb)', dim: 'W160 × H170 + G60 mm', cap: 'Holds ~120g coffee beans / ~50g loose tea', prices: { 100: 28.00, 200: 50.40, 500: 112.00 } },
  { code: 'm', label: 'Size M (1/2 lb)', dim: 'W190 × H200 + G70 mm', cap: 'Holds ~250g coffee beans / ~100g loose tea', prices: { 100: 34.00, 200: 61.20, 500: 136.00 } },
  { code: 'l', label: 'Size L (1 lb)', dim: 'W230 × H260 + G80 mm', cap: 'Holds ~500g coffee beans / ~200g loose tea', prices: { 100: 42.00, 200: 75.60, 500: 168.00 } }
];

const patterns = [
  { id: 'natural-linen', name: 'Natural Linen', imgIndex: 0 },
  { id: 'natural-cork', name: 'Natural Cork', imgIndex: 1 },
  { id: 'charcoal-linen', name: 'Charcoal Linen', imgIndex: 2 },
  { id: 'white-linen', name: 'White Linen', imgIndex: 3 }
];

const quantities = [100, 200, 500];

const variants = [];
for (const s of sizes) {
  for (const p of patterns) {
    for (const q of quantities) {
      const totalPrice = s.prices[q];
      const unitPrice = totalPrice / q;
      variants.push({
        id: `coffee-valve-pouch-${s.code}-${p.id}-${q}pcs`,
        label: `${s.label} (${s.dim.split(' ')[0]}) - ${p.name} (${q} Pcs)`,
        dimensions: `${s.dim} • ${s.cap} • ${p.name}`,
        hasHole: false,
        quantity: q,
        totalPrice: totalPrice,
        unitPrice: unitPrice,
        heroImageIndex: p.imgIndex
      });
    }
  }
}

const formatVariant = (v) => {
  return `      {
        id: '${v.id}',
        label: '${v.label}',
        dimensions: '${v.dimensions}',
        hasHole: false,
        quantity: ${v.quantity},
        totalPrice: ${v.totalPrice.toFixed(2)},
        unitPrice: ${v.unitPrice.toFixed(4)},
        heroImageIndex: ${v.heroImageIndex}
      }`;
};

const productStr = `  // Textured Burlap & Cork Pattern Stand Up Pouch with Valve
  {
    id: 'textured-burlap-cork-pattern-coffee-pouch-with-valve',
    name: 'Textured Burlap & Cork Pattern Stand Up Pouch with Valve',
    category: 'conventional-stock',
    description: 'An ultra-premium, eco-responsible stand up packaging solution featuring distinct burlap linen and natural cork patterns. Engineered from high-barrier mono-material PE, this metal-free and aluminum-free pouch is fully recyclable in standard plastic streams. Equipped with a premium one-way degassing valve that features an integrated micro-filter mesh to prevent fine coffee grounds or powder from clogging the valve. Perfect for specialty whole bean coffees, artisanal ground coffees, loose leaf teas, and high-end organic powders.',
    shortDesc: 'Premium metal-free recyclable stand up pouch with anti-clogging degassing valve and organic burlap/cork textures',
    features: [
      'Natural Textured Aesthetics: Burlap Linen and Real Cork prints for an organic brand look',
      'Single-Stream Recyclable: 100% Mono-PE composite film, completely aluminum-free and metal-free',
      'Anti-Clogging Valve: Single-way degassing valve with integrated filter mesh keeps oxygen out and prevents powder blockage',
      'Built-In Freshness Zipper: Strong resealable zipper with easy-tear notches for convenient daily reuse',
      'High puncture and tear resistance with food-grade FDA & LFGB compliance'
    ],
    images: [
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN018LiXF92IpwK0XyOZr_--4218319336-jpg_.webp',
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN01ekJ6892IpwJtNUR5W_--4218319336-jpg_.webp',
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN01iFQEb82IpwJiRTg4L_--4218319336-jpg_.webp',
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN01ww7aYt2IpwJdlzLH2_--4218319336-jpg_.webp',
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN01DxTsUD2IpwRWXt67s_--4218319336.jpg',
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN01Hp0i0D2IpwRckiH8L_--4218319336.jpg',
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN01Ivgety2IpwRckkUQ6_--4218319336.jpg',
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN01LV7AcH2IpwRR9OWpo_--4218319336.jpg',
      '/taobao/digital-printed-pattern-coffee-pouch-with-valve/O1CN01epxZw62IpwRW2g0vL_--4218319336.jpg'
    ],
    badge: '♻️ Aluminum-Free Recyclable',
    rating: 4.9,
    reviews: 58,
    inStock: true,
    turnaround: '3-5 days',
    minOrder: 100,
    shape: 'Stand Up Pouch',
    material: 'Mono-PE High-Barrier Recyclable Lamination (Aluminum-Free / Metal-Free)',
    basePrice: 28.00,
    pricePerPiece: 0.280,
    minQuantity: 100,
    quantityStep: 100,
    sizeInfo: '1/4 lb (160×170+60mm) / 1/2 lb (190×200+70mm) / 1 lb (230×260+80mm)',
    shelfLife: '+24 months',
    certification: 'FDA Food-Grade & Recyclable Mono-PE Certified',
    customPrintNote: 'Custom multi-color digital prints and sizing options available from 500+ pieces. Please consult our team.',
    sizeVariants: [
${variants.map(formatVariant).join(',\n')}
    ]
  },`;

const filePath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/store/productData.ts';
let content = fs.readFileSync(filePath, 'utf8');

const insertMarker = 'const CONVENTIONAL_STOCK_PRODUCTS: EcoStockProduct[] = [\n';
if (!content.includes(insertMarker)) {
  console.error("Could not find insertion marker in productData.ts!");
  process.exit(1);
}

if (content.includes("id: 'textured-burlap-cork-pattern-coffee-pouch-with-valve'")) {
  console.log("Coffee valve pouch already injected. Skipping injection.");
} else {
  const index = content.indexOf(insertMarker) + insertMarker.length;
  content = content.substring(0, index) + productStr + '\n' + content.substring(index);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully injected Textured Burlap & Cork Stand Up Coffee Pouch with Valve!');
}
