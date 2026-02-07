# pouch.eco WordPress to React Migration Guide

**Project:** Migrate pouch.eco from SiteGround WordPress to achievepack.com React Codebase  
**Strategy:** Dual-Domain SEO with Shared Codebase  
**Status:** 📋 In Progress  
**Last Updated:** 2026-01-30

---

## 📊 Migration Overview

### Current State
- **pouch.eco**: WordPress on SiteGround
- **achievepack.com**: React (Vite + TypeScript) on Vercel
- **Goal**: Merge pouch.eco into achievepack.com codebase while maintaining:
  - ✅ Independent SEO rankings
  - ✅ Brand differentiation (B2C vs B2B)
  - ✅ All existing URLs and traffic
  - ✅ 95%+ traffic retention

### Target Architecture
```
achievepack.com React Codebase (Vercel)
├── Domain Detection (hostname check)
├── Brand Config System
│   ├── achievepack.com (B2B)
│   └── pouch.eco (B2C)
├── Shared Components & Logic (70%)
└── Domain-Specific Content (30%+)
```

---

## 🎯 Migration Phases (10 Stages)

### ✅ Stage 1: Pre-Migration Preparation [CURRENT]
**Duration:** 2-3 days  
**Risk:** Low

#### 1.1 Export WordPress Content
```bash
# Via WordPress Admin Panel
1. Login to pouch.eco/wp-admin
2. Tools → Export → All content
3. Download XML file

# Via WP-CLI (if SSH access available)
wp export --dir=/tmp/pouch-export
```

#### 1.2 SEO Audit (Google Search Console)
```
1. Go to pouch.eco GSC property
2. Performance → Export → Last 3 months
3. Record top 20 pages by impressions:
   - Homepage
   - /gptk/ (Cello Kraft Triplex)
   - /ptn/ (Kraft Duplex)
   - /size/ (Size Guide)
   - /solutions/
   - /all-options/* pages
4. Record top 50 keywords by clicks
5. Note average position for each keyword
```

#### 1.3 Backup WordPress Database
```bash
# Via cPanel → phpMyAdmin → Export
# Or via WP-CLI
wp db export pouch_eco_backup.sql
```

#### 1.4 Download Media Files
```bash
# Create download script
cat > download_pouch_media.sh << 'EOF'
#!/bin/bash
mkdir -p public/imgs/pouch
cd public/imgs/pouch

# Download from pouch.eco/wp-content/uploads/
# List all image URLs from sitemap or pages
# Use curl or wget

curl -O https://pouch.eco/wp-content/uploads/2025/04/home-compost.png
# ... continue for all media files
EOF

chmod +x download_pouch_media.sh
./download_pouch_media.sh
```

#### 1.5 URL Inventory (Complete List)
**Priority 0 - Critical (4 pages):**
```
/ → Homepage
/solutions/ → Solutions page
/size/ → Size Guide
/gptk/ → Material: Cello Kraft Triplex
```

**Priority 1 - High Traffic (8 pages):**
```
/ptn/ → Material: Kraft Duplex
/stand-up-pouch-doypack/ → Shape: Stand Up Pouch
/all-options/surface-finish-options-for-eco-friendly-packaging-pouch/ → Surface Finish
/all-options/reclosure-options-for-eco-friendly-packaging-pouch/ → Reclosure Options
/all-options/barrier-options-for-eco-friendly-material/ → Barrier Overview
/testimonial/ → Testimonials
/unlimited-colors-digital-printing/ → Digital Printing
/ecommerce-exclusive-lightweight-eco-pouches-cut-shipping-and-emissions/ → Ecommerce Shipping
```

**Priority 2 - Medium Traffic (10 pages):**
```
/all-options/quad-seal-and-flat-bottom-pouches/ → Quad Seal
/all-options/3-side-sealed-and-center-sealed-pouch-shape/ → 3-Side Seal
/all-options/side-gusseted-box-bottom-pouch-shape/ → Side Gusset
/all-options/additional-feature-options-for-eco-friendly-packaging-pouch/ → Additional Features
/all-options/low-barrier-options-for-eco-friendly-material/ → Low Barrier
/all-options/medium-barrier-options-for-eco-friendly-material/ → Medium Barrier
/all-options/high-barrier-options-for-eco-friendly-material/ → High Barrier
/up-to-10-colors-plate-printing/ → Plate Printing
/lead-time/ → Lead Time
/workflow/ → Workflow
```

**Total:** 22 pages to migrate

---

### 🔧 Stage 2: Domain Detection & Brand Config
**Duration:** 1 day  
**Risk:** Low

#### 2.1 Create Domain Detection Utility
**File:** `src/utils/domain.ts`

```typescript
/**
 * Dual-Domain Detection & Brand Configuration System
 * Supports: achievepack.com (B2B) & pouch.eco (B2C)
 */

export type DomainType = 'pouch' | 'achievepack'

/**
 * Detect current domain based on hostname
 */
export const getDomain = (): DomainType => {
  if (typeof window === 'undefined') return 'achievepack' // SSR fallback
  const hostname = window.location.hostname
  return hostname.includes('pouch.eco') ? 'pouch' : 'achievepack'
}

export const isPouch = () => getDomain() === 'pouch'
export const isAchievePack = () => getDomain() === 'achievepack'

/**
 * Brand Configuration for Each Domain
 */
export interface BrandConfig {
  name: string
  domain: string
  email: string
  phone: string
  logoPath: string
  faviconPath: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  tone: 'friendly' | 'professional'
  targetAudience: 'B2C' | 'B2B'
  tagline: string
  description: string
  moqRange: string
  priceRange: string
  ctaButton: string
}

export const getBrandConfig = (): BrandConfig => {
  const configs: Record<DomainType, BrandConfig> = {
    pouch: {
      name: 'Pouch.eco',
      domain: 'pouch.eco',
      email: 'cs@pouch.eco',
      phone: '+1 (123) 456-7890',
      logoPath: '/eco-logo/ep-logo.svg',
      faviconPath: '/favicon-pouch.ico',
      primaryColor: '#10b981', // Green
      secondaryColor: '#059669',
      accentColor: '#D4FF00', // Neon Yellow (from Neo-Brutalist)
      tone: 'friendly',
      targetAudience: 'B2C',
      tagline: 'Eco Packaging for Startups',
      description: 'Beautiful compostable packaging from just 500 units. Perfect for small brands starting their sustainability journey.',
      moqRange: 'From 500 units',
      priceRange: '$0.50 - $1.50/bag',
      ctaButton: 'Shop Starter Kits'
    },
    achievepack: {
      name: 'Achieve Pack',
      domain: 'achievepack.com',
      email: 'ryan@achievepack.com',
      phone: '+1 (123) 456-7890',
      logoPath: '/ap-logo.svg',
      faviconPath: '/favicon.ico',
      primaryColor: '#8b5cf6', // Purple
      secondaryColor: '#7c3aed',
      accentColor: '#06b6d4', // Cyan
      tone: 'professional',
      targetAudience: 'B2B',
      tagline: 'Sustainable Packaging Solutions',
      description: 'Enterprise-grade compostable packaging for brands that scale. Custom solutions with volume pricing.',
      moqRange: 'Optimized for 10,000+ units',
      priceRange: 'Volume pricing available',
      ctaButton: 'Request Quote'
    }
  }
  
  return configs[getDomain()]
}

/**
 * Get domain-specific base URL
 */
export const getBaseUrl = (): string => {
  const domain = getDomain()
  return domain === 'pouch' ? 'https://pouch.eco' : 'https://achievepack.com'
}

/**
 * Get domain-specific contact email
 */
export const getContactEmail = (): string => {
  return getBrandConfig().email
}

/**
 * Check if current environment is production
 */
export const isProduction = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.location.hostname.includes('pouch.eco') || 
         window.location.hostname.includes('achievepack.com')
}
```

#### 2.2 Test Domain Detection
```bash
cd "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack"

# Create test file
cat > src/test-domain.ts << 'EOF'
import { getDomain, getBrandConfig, isPouch } from './utils/domain'

console.log('Current domain:', getDomain())
console.log('Is Pouch?:', isPouch())
console.log('Brand config:', getBrandConfig())
EOF

# Run test
npx tsx src/test-domain.ts
```

---

### 🎨 Stage 3: Dual-Domain SEO Head Component
**Duration:** 1 day  
**Risk:** Medium (Critical for SEO)

#### 3.1 Create DualDomainSEOHead Component
**File:** `src/components/DualDomainSEOHead.tsx`

```typescript
import { Helmet } from 'react-helmet-async'
import { useMemo } from 'react'
import { getDomain, getBrandConfig, getBaseUrl } from '../utils/domain'

interface DualDomainSEOHeadProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  schemaType?: 'Article' | 'Product' | 'WebPage' | 'FAQPage'
  customCanonical?: string // Override automatic canonical
}

export default function DualDomainSEOHead({
  title,
  description,
  keywords = [],
  ogImage,
  schemaType = 'WebPage',
  customCanonical
}: DualDomainSEOHeadProps) {
  const domain = getDomain()
  const brand = getBrandConfig()
  const baseUrl = getBaseUrl()
  
  // Generate canonical URL based on current domain
  const canonicalUrl = useMemo(() => {
    if (customCanonical) return customCanonical
    if (typeof window === 'undefined') return baseUrl
    const pathname = window.location.pathname
    return `${baseUrl}${pathname}`
  }, [baseUrl, customCanonical])
  
  // Domain-specific full title
  const fullTitle = `${title} | ${brand.name}`
  
  // OG Image with fallback
  const ogImageUrl = useMemo(() => {
    if (!ogImage) return `${baseUrl}/og-default.jpg`
    return ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`
  }, [ogImage, baseUrl])
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* CRITICAL: Independent Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={brand.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      
      {/* Favicon (domain-specific) */}
      <link rel="icon" href={brand.faviconPath} />
      
      {/* Prevent cross-domain canonical (CRITICAL) */}
      {/* NEVER add alternate hreflang tags between domains */}
    </Helmet>
  )
}
```

---

### ⚙️ Stage 4: Vercel Configuration (301 Redirects)
**Duration:** 2 hours  
**Risk:** High (Must preserve SEO)

#### 4.1 Update vercel.json
**File:** `vercel.json`

Add redirects section:

```json
{
  "regions": ["iad1"],
  "outputDirectory": "dist",
  "redirects": [
    // ========== pouch.eco WordPress → React 301 Redirects ==========
    
    // Material Pages
    {
      "source": "/gptk",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/materials/cello-kraft-triplex",
      "permanent": true
    },
    {
      "source": "/ptn",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/materials/kraft-duplex",
      "permanent": true
    },
    
    // Shape Pages
    {
      "source": "/stand-up-pouch-doypack",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/shapes/stand-up-pouch",
      "permanent": true
    },
    {
      "source": "/all-options/quad-seal-and-flat-bottom-pouches",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/shapes/quad-seal",
      "permanent": true
    },
    {
      "source": "/all-options/3-side-sealed-and-center-sealed-pouch-shape",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/shapes/3-side-seal",
      "permanent": true
    },
    {
      "source": "/all-options/side-gusseted-box-bottom-pouch-shape",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/shapes/side-gusset",
      "permanent": true
    },
    
    // Feature Options
    {
      "source": "/all-options/surface-finish-options-for-eco-friendly-packaging-pouch",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/options/surface-finish",
      "permanent": true
    },
    {
      "source": "/all-options/reclosure-options-for-eco-friendly-packaging-pouch",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/options/reclosure",
      "permanent": true
    },
    {
      "source": "/all-options/additional-feature-options-for-eco-friendly-packaging-pouch",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/options/features",
      "permanent": true
    },
    
    // Barrier Options
    {
      "source": "/all-options/barrier-options-for-eco-friendly-material",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/barriers/overview",
      "permanent": true
    },
    {
      "source": "/all-options/low-barrier-options-for-eco-friendly-material",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/barriers/low",
      "permanent": true
    },
    {
      "source": "/all-options/medium-barrier-options-for-eco-friendly-material",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/barriers/medium",
      "permanent": true
    },
    {
      "source": "/all-options/high-barrier-options-for-eco-friendly-material",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/barriers/high",
      "permanent": true
    },
    
    // Printing Pages
    {
      "source": "/unlimited-colors-digital-printing",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/printing/digital",
      "permanent": true
    },
    {
      "source": "/up-to-10-colors-plate-printing",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/printing/plate",
      "permanent": true
    },
    
    // Content Pages
    {
      "source": "/ecommerce-exclusive-lightweight-eco-pouches-cut-shipping-and-emissions",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/solutions/ecommerce-shipping",
      "permanent": true
    },
    
    // Process Pages
    {
      "source": "/lead-time",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/process/timeline",
      "permanent": true
    },
    {
      "source": "/workflow",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/process/workflow",
      "permanent": true
    },
    
    // General Pages (no redirect needed, already exist)
    // / → Homepage (domain detection handles)
    // /size → Size Guide (already exists)
    // /solutions → Solutions (already exists)
    // /testimonial → /testimonials (add redirect)
    {
      "source": "/testimonial",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/testimonials",
      "permanent": true
    }
  ],
  
  "rewrites": [
    // Sitemap routing (domain-specific)
    {
      "source": "/sitemap.xml",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/sitemap-pouch.xml"
    },
    {
      "source": "/sitemap.xml",
      "has": [{ "type": "host", "value": "achievepack.com" }],
      "destination": "/sitemap-achievepack.xml"
    },
    
    // robots.txt routing (dynamic via API)
    {
      "source": "/robots.txt",
      "destination": "/api/robots.txt"
    },
    
    // Existing API and SPA rewrites
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    },
    {
      "source": "/((?!assets|imgs|api|.*\\.).*)",
      "destination": "/index.html"
    }
  ]
}
```

---

### 📄 Stage 5: Sitemaps & robots.txt
**Duration:** 1 day  
**Risk:** Medium

#### 5.1 Create pouch.eco Sitemap
**File:** `public/sitemap-pouch.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Homepage -->
  <url>
    <loc>https://pouch.eco/</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Core Pages -->
  <url>
    <loc>https://pouch.eco/solutions</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://pouch.eco/size-guide</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://pouch.eco/testimonials</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Material Pages -->
  <url>
    <loc>https://pouch.eco/materials/cello-kraft-triplex</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://pouch.eco/materials/kraft-duplex</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Shape Pages -->
  <url>
    <loc>https://pouch.eco/shapes/stand-up-pouch</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://pouch.eco/shapes/quad-seal</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://pouch.eco/shapes/3-side-seal</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://pouch.eco/shapes/side-gusset</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Feature Options -->
  <url>
    <loc>https://pouch.eco/options/surface-finish</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://pouch.eco/options/reclosure</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://pouch.eco/options/features</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Barrier Options -->
  <url>
    <loc>https://pouch.eco/barriers/overview</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://pouch.eco/barriers/low</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://pouch.eco/barriers/medium</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://pouch.eco/barriers/high</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Printing Pages -->
  <url>
    <loc>https://pouch.eco/printing/digital</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://pouch.eco/printing/plate</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Content Pages -->
  <url>
    <loc>https://pouch.eco/solutions/ecommerce-shipping</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Process Pages -->
  <url>
    <loc>https://pouch.eco/process/timeline</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://pouch.eco/process/workflow</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
</urlset>
```

#### 5.2 Rename Existing Sitemap
```bash
# Rename current sitemap to achievepack-specific
mv public/sitemap.xml public/sitemap-achievepack.xml
```

#### 5.3 Create Dynamic robots.txt API
**File:** `api/robots.txt.ts`

```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const hostname = req.headers.host || 'achievepack.com'
  const isPouch = hostname.includes('pouch.eco')
  const domain = isPouch ? 'pouch.eco' : 'achievepack.com'
  
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Disallow admin and authentication pages
Disallow: /ctrl-x9k7m
Disallow: /ctrl-x9k7m/*
Disallow: /signin
Disallow: /forgot-password
Disallow: /reset-password
Disallow: /dashboard

# Disallow checkout and order confirmation pages (no SEO value)
Disallow: /store/checkout
Disallow: /store/order-confirmation
Disallow: /store/rfq-confirmation

# Allow all other pages
Allow: /store
Allow: /store/product/

# Sitemap
Sitemap: https://${domain}/sitemap.xml
Host: ${domain}
`
  
  res.setHeader('Content-Type', 'text/plain')
  res.status(200).send(robotsTxt)
}
```

---

## 📋 Next Steps Checklist

### ✅ Stage 1 Complete
- [ ] WordPress content exported
- [ ] GSC data exported (top pages, keywords)
- [ ] Database backup downloaded
- [ ] Media files downloaded
- [ ] URL inventory confirmed (22 pages)

### 🚧 Stage 2-5 (This Document)
- [ ] Create `src/utils/domain.ts`
- [ ] Create `src/components/DualDomainSEOHead.tsx`
- [ ] Update `vercel.json` with redirects
- [ ] Create `public/sitemap-pouch.xml`
- [ ] Rename to `public/sitemap-achievepack.xml`
- [ ] Create `api/robots.txt.ts`

### 📅 Stages 6-10 (Next Phase)
Will be covered in separate implementation guide:
- Stage 6: Migrate core pages
- Stage 7: Migrate material pages
- Stage 8: Migrate feature pages
- Stage 9: DNS configuration
- Stage 10: Testing & monitoring

---

## 🎯 Success Metrics

**Target Goals (Week 8):**
- ✅ 95%+ organic traffic maintained
- ✅ Zero duplicate content warnings in GSC
- ✅ All old URLs redirect correctly (301)
- ✅ Keyword rankings within ±3 positions
- ✅ Page load time < 2 seconds
- ✅ Core Web Vitals pass

**Expected Timeline:**
- Week 1-2: Traffic dip 10-20% (normal during migration)
- Week 3-4: Traffic recovery to 80-90%
- Week 5-8: Traffic back to 95-100%
- Week 9+: Traffic growth (better UX + faster React site)

---

## ⚠️ Critical Rules (DO NOT VIOLATE)

1. **❌ NEVER cross-domain canonical**
   ```html
   <!-- WRONG on pouch.eco -->
   <link rel="canonical" href="https://achievepack.com/..." />
   ```

2. **❌ NEVER use alternate hreflang**
   ```html
   <!-- WRONG - Don't link domains as language variants -->
   <link rel="alternate" hreflang="en" href="https://achievepack.com" />
   ```

3. **✅ ALWAYS 30%+ content differentiation**
   - Different headlines
   - Different CTAs
   - Different tone (B2C vs B2B)
   - Different MOQ/pricing messaging

4. **✅ ALWAYS independent sitemaps**
   - `sitemap-pouch.xml` for pouch.eco
   - `sitemap-achievepack.xml` for achievepack.com

5. **✅ ALWAYS separate GSC properties**
   - Never "Associate Properties" in Google Search Console

---

## 📞 Support

For questions about this migration:
- **Technical Lead**: Ryan
- **Email**: ryan@achievepack.com

---

**Last Updated:** 2026-01-30  
**Document Version:** 1.0
