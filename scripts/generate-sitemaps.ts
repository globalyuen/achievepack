import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { FEATURED_PRODUCTS } from '../src/store/productData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROUTE_MAPPING_PATH = path.join(__dirname, '../src/data/route-mapping.json');
const SITEMAP_POUCH_PATH = path.join(__dirname, '../public/sitemap-pouch.xml');
const SITEMAP_ACHIEVE_PATH = path.join(__dirname, '../public/sitemap-achievepack.xml');
const SITEMAP_COMBINED_PATH = path.join(__dirname, '../public/sitemap.xml');

// Helper to format date
function getTodayDateString() {
  return new Date().toISOString().split('T')[0];
}

// Helper to determine sitemap parameters dynamically
function getSitemapParams(route: string) {
  if (route === '/' || route === '') {
    return { changefreq: 'daily', priority: '1.0' };
  }
  
  const segments = route.split('/').filter(Boolean);
  const firstSegment = segments[0];

  // Core hubs
  if (segments.length === 1 && ['blog', 'store', 'shop', 'products', 'materials', 'solutions', 'packaging', 'industry'].includes(firstSegment)) {
    return { changefreq: 'weekly', priority: '0.9' };
  }
  
  // Product detail pages
  if (firstSegment === 'shop' || (firstSegment === 'store' && segments[1] === 'product')) {
    return { changefreq: 'weekly', priority: '0.8' };
  }
  
  // Blog articles and persona solutions
  if (firstSegment === 'blog' || firstSegment === 'solutions' || firstSegment === 'topics') {
    return { changefreq: 'monthly', priority: '0.8' };
  }
  
  // Technical specs
  if (firstSegment === 'spec' || firstSegment === 'biope' || firstSegment === 'pcr' || firstSegment === 'recyclable') {
    return { changefreq: 'monthly', priority: '0.7' };
  }
  
  // Custom dashboard / control centers (should be excluded)
  if (firstSegment === 'ctrl-x9k7m' || firstSegment === 'dashboard') {
    return { changefreq: 'monthly', priority: '0.3' };
  }
  
  return { changefreq: 'monthly', priority: '0.6' };
}

// Helper to get alternate language links for a route
function getAlternateLinks(domain: string, route: string) {
  const cleanRoute = route === '/' ? '' : (route.startsWith('/') ? route : '/' + route);
  return [
    { lang: 'x-default', href: `${domain}${cleanRoute}` },
    { lang: 'en', href: `${domain}${cleanRoute}` },
    { lang: 'fr', href: `${domain}/fr${cleanRoute}` },
    { lang: 'es', href: `${domain}/es${cleanRoute}` },
    { lang: 'zh-TW', href: `${domain}/zh-tw${cleanRoute}` }
  ];
}

// Generate sitemap content
function buildSitemapXml(domain: string, routes: string[]) {
  const today = getTodayDateString();
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n`;
  xml += `        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n`;
  xml += `        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n`;
  xml += `        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n`;

  // Filter out duplicate trailing slash / root duplicates
  const uniqueRoutes = Array.from(new Set(routes.map(r => r === '/' ? '' : r))).sort();
  
  // Ensure homepage is first
  if (!uniqueRoutes.includes('')) {
    uniqueRoutes.unshift('');
  } else {
    const index = uniqueRoutes.indexOf('');
    if (index > -1) {
      uniqueRoutes.splice(index, 1);
      uniqueRoutes.unshift('');
    }
  }

  uniqueRoutes.forEach(route => {
    // Skip admin, dashboard, and secret routes entirely
    if (route.includes('ctrl-x9k7m') || route.includes('dashboard')) {
      return;
    }
    
    const cleanRoute = route === '/' ? '' : (route.startsWith('/') ? route : '/' + route);
    const { changefreq, priority } = getSitemapParams(route);

    // Languages to output
    const langs = [
      { code: 'en', prefix: '' },
      { code: 'fr', prefix: '/fr' },
      { code: 'es', prefix: '/es' },
      { code: 'zh-tw', prefix: '/zh-tw' }
    ];

    const alternates = getAlternateLinks(domain, route);

    langs.forEach(lang => {
      const url = `${domain}${lang.prefix}${cleanRoute}`;
      
      xml += `  <url>\n`;
      xml += `    <loc>${url}</loc>\n`;
      alternates.forEach(alt => {
        xml += `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />\n`;
      });
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      xml += `  </url>\n`;
    });
  });

  xml += `</urlset>\n`;
  return xml;
}

function generate() {
  console.log('🔄 Loading route mapping data...');
  if (!fs.existsSync(ROUTE_MAPPING_PATH)) {
    console.error('❌ Route mapping file not found at:', ROUTE_MAPPING_PATH);
    process.exit(1);
  }

  const rawData = fs.readFileSync(ROUTE_MAPPING_PATH, 'utf-8');
  const mapping = JSON.parse(rawData);

  // Dynamic published Soro articles
  const autopilotStatePath = path.join(__dirname, '../src/data/autopilot_state.json');
  let dynamicBlogRoutes: string[] = [];
  if (fs.existsSync(autopilotStatePath)) {
    try {
      const apState = JSON.parse(fs.readFileSync(autopilotStatePath, 'utf-8'));
      if (apState && apState.keywordBank) {
        dynamicBlogRoutes = apState.keywordBank
          .filter((k: any) => k.status === 'Published' && k.slug)
          .map((k: any) => `/blog/${k.slug}`);
        console.log(`📡 Loaded ${dynamicBlogRoutes.length} dynamic blog routes from autopilot_state.json`);
      }
    } catch (e: any) {
      console.warn('⚠️ Could not load dynamic blog routes from autopilot_state.json:', e.message);
    }
  }

  // Dynamic products sitemap injection
  const productB2CRoutes = FEATURED_PRODUCTS.map(p => `/shop/${p.id}`);
  const productB2BRoutes = FEATURED_PRODUCTS.map(p => `/store/product/${p.id}`);
  console.log(`🛍️ Found ${FEATURED_PRODUCTS.length} products to inject into sitemaps.`);

  // Dynamic packaging shapes injection
  const modelsDbPath = path.join(__dirname, '../public/models_database.json');
  let shapeRoutes: string[] = [];
  if (fs.existsSync(modelsDbPath)) {
    try {
      const shapes = JSON.parse(fs.readFileSync(modelsDbPath, 'utf-8'));
      if (Array.isArray(shapes)) {
        shapeRoutes = shapes.map((s: any) => `/solutions/shapes/${s.slug || s.id}`);
        console.log(`📦 Loaded ${shapeRoutes.length} dynamic packaging shape routes for sitemaps.`);
      }
    } catch (e: any) {
      console.warn('⚠️ Could not load packaging shapes from models_database.json:', e.message);
    }
  }

  // Merge lists and include core shop route
  const basePouchRoutes = mapping.pouch || [];
  if (!basePouchRoutes.includes('/shop')) {
    basePouchRoutes.push('/shop');
  }

  const pouchRoutes = [...basePouchRoutes, ...dynamicBlogRoutes, ...productB2CRoutes, ...shapeRoutes];
  const achieveRoutes = [...(mapping.achieve || []), ...dynamicBlogRoutes, ...productB2BRoutes, ...shapeRoutes];

  console.log(`📊 Loaded ${pouchRoutes.length} B2C (pouch.eco) and ${achieveRoutes.length} B2B (achievepack) routes.`);

  // 1. Generate pouch.eco B2C sitemap
  console.log('✍️ Generating sitemap-pouch.xml...');
  const pouchXml = buildSitemapXml('https://pouch.eco', pouchRoutes);
  fs.writeFileSync(SITEMAP_POUCH_PATH, pouchXml, 'utf-8');
  console.log(`✅ Created ${SITEMAP_POUCH_PATH} (${pouchRoutes.length} entries)`);

  // 2. Generate achievepack.com B2B sitemap
  console.log('✍️ Generating sitemap-achievepack.xml...');
  const achieveXml = buildSitemapXml('https://achievepack.com', achieveRoutes);
  fs.writeFileSync(SITEMAP_ACHIEVE_PATH, achieveXml, 'utf-8');
  console.log(`✅ Created ${SITEMAP_ACHIEVE_PATH} (${achieveRoutes.length} entries)`);

  // 3. Generate combined sitemap.xml
  console.log('✍️ Generating combined sitemap.xml...');
  const today = getTodayDateString();
  let combinedXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  combinedXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  combinedXml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n`;
  combinedXml += `        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n`;
  combinedXml += `        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n`;
  combinedXml += `        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n`;

  // Add Pouch routes
  pouchRoutes.forEach(route => {
    if (route.includes('ctrl-x9k7m') || route.includes('dashboard')) {
      return;
    }
    const cleanRoute = route === '/' ? '' : (route.startsWith('/') ? route : '/' + route);
    const { changefreq, priority } = getSitemapParams(route);

    const langs = [
      { code: 'en', prefix: '' },
      { code: 'fr', prefix: '/fr' },
      { code: 'es', prefix: '/es' },
      { code: 'zh-tw', prefix: '/zh-tw' }
    ];

    const alternates = getAlternateLinks('https://pouch.eco', route);

    langs.forEach(lang => {
      const url = `https://pouch.eco${lang.prefix}${cleanRoute}`;
      combinedXml += `  <url>\n`;
      combinedXml += `    <loc>${url}</loc>\n`;
      alternates.forEach(alt => {
        combinedXml += `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />\n`;
      });
      combinedXml += `    <lastmod>${today}</lastmod>\n`;
      combinedXml += `    <changefreq>${changefreq}</changefreq>\n`;
      combinedXml += `    <priority>${priority}</priority>\n`;
      combinedXml += `  </url>\n`;
    });
  });

  // Add Achieve routes
  achieveRoutes.forEach(route => {
    if (route.includes('ctrl-x9k7m') || route.includes('dashboard')) {
      return;
    }
    const cleanRoute = route === '/' ? '' : (route.startsWith('/') ? route : '/' + route);
    const { changefreq, priority } = getSitemapParams(route);

    const langs = [
      { code: 'en', prefix: '' },
      { code: 'fr', prefix: '/fr' },
      { code: 'es', prefix: '/es' },
      { code: 'zh-tw', prefix: '/zh-tw' }
    ];

    const alternates = getAlternateLinks('https://achievepack.com', route);

    langs.forEach(lang => {
      const url = `https://achievepack.com${lang.prefix}${cleanRoute}`;
      combinedXml += `  <url>\n`;
      combinedXml += `    <loc>${url}</loc>\n`;
      alternates.forEach(alt => {
        combinedXml += `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />\n`;
      });
      combinedXml += `    <lastmod>${today}</lastmod>\n`;
      combinedXml += `    <changefreq>${changefreq}</changefreq>\n`;
      combinedXml += `    <priority>${priority}</priority>\n`;
      combinedXml += `  </url>\n`;
    });
  });

  combinedXml += `</urlset>\n`;
  fs.writeFileSync(SITEMAP_COMBINED_PATH, combinedXml, 'utf-8');
  console.log(`✅ Created ${SITEMAP_COMBINED_PATH}`);

  console.log('🎉 Sitemaps generation completed successfully!');
}

generate();
