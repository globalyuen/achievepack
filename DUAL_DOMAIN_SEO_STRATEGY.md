# Dual Domain SEO Strategy Guide

**Project:** achievepack.com + pouch.eco  
**Strategy:** Independent SEO with Shared Codebase  
**Last Updated:** 2025-01-30

---

## 🎯 Core Principle

> **Two Independent Websites in One Codebase**
> 
> While sharing the same code repository, achievepack.com and pouch.eco MUST maintain completely independent SEO profiles to avoid ranking drops and duplicate content penalties.

---

## 📋 Critical Rules (MUST FOLLOW)

### 1. ✅ Independent Canonical URLs

**Rule:** Each domain MUST have its own canonical URL pointing to itself.

```typescript
// ✅ CORRECT
// When user visits pouch.eco/compostable-bags
<link rel="canonical" href="https://pouch.eco/compostable-bags" />

// When user visits achievepack.com/compostable-bags
<link rel="canonical" href="https://achievepack.com/compostable-bags" />
```

```typescript
// ❌ WRONG - Never cross-reference
<link rel="canonical" href="https://achievepack.com/..." /> // on pouch.eco
```

**Implementation:**
```typescript
// src/components/SEOHead.tsx
const canonicalUrl = useMemo(() => {
  if (typeof window === 'undefined') return ''
  const hostname = window.location.hostname
  const isPouch = hostname.includes('pouch.eco')
  const domain = isPouch ? 'https://pouch.eco' : 'https://achievepack.com'
  return `${domain}${window.location.pathname}`
}, [])
```

---

### 2. ✅ Independent Sitemaps

**Rule:** Generate separate sitemaps for each domain.

**Files Required:**
- `public/sitemap-pouch.xml` (for pouch.eco)
- `public/sitemap-achievepack.xml` (for achievepack.com)

**Vercel Configuration:**
```json
// vercel.json
{
  "rewrites": [
    {
      "source": "/sitemap.xml",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/sitemap-pouch.xml"
    },
    {
      "source": "/sitemap.xml",
      "has": [{ "type": "host", "value": "achievepack.com" }],
      "destination": "/sitemap-achievepack.xml"
    }
  ]
}
```

---

### 3. ✅ Independent robots.txt

**Rule:** Dynamically generate robots.txt based on domain.

```typescript
// pages/api/robots.txt.ts
export default function handler(req, res) {
  const hostname = req.headers.host
  const isPouch = hostname?.includes('pouch.eco')
  const domain = isPouch ? 'pouch.eco' : 'achievepack.com'
  
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: https://${domain}/sitemap.xml
Host: ${domain}
  `.trim()
  
  res.setHeader('Content-Type', 'text/plain')
  res.status(200).send(robotsTxt)
}
```

---

### 4. ✅ Content Differentiation (Minimum 30%)

**Rule:** Each domain MUST have at least 30% unique content to avoid duplicate content penalties.

**Shared Content (70%):**
- Product specifications
- Material descriptions
- Technical certifications
- FAQ answers (adjusted tone)

**Unique Content (30%):**
- Headlines and taglines
- Call-to-action buttons
- Benefit descriptions
- Tone of voice
- Target audience messaging

**Implementation:**
```typescript
// src/utils/content.ts
export const getPageContent = (page: string) => {
  const domain = getDomain() // 'pouch' | 'achievepack'
  
  const content = {
    pouch: {
      headline: "Start Your Eco Brand with Just 500 Bags",
      cta: "Shop Starter Kits",
      tone: "friendly",
      target: "B2C"
    },
    achievepack: {
      headline: "Enterprise Sustainable Packaging Solutions",
      cta: "Request Quote",
      tone: "professional",
      target: "B2B"
    }
  }
  
  return content[domain]
}
```

---

### 5. ✅ Independent Meta Tags

**Rule:** All SEO meta tags must be domain-specific.

```typescript
// ✅ CORRECT Implementation
const seoConfig = {
  pouch: {
    title: "Pouch.eco - Eco Packaging for Startups",
    description: "Low MOQ compostable packaging for small businesses",
    keywords: "startup packaging, low moq, eco pouches"
  },
  achievepack: {
    title: "Achieve Pack - Enterprise Sustainable Packaging",
    description: "Custom bulk packaging solutions for established brands",
    keywords: "wholesale packaging, bulk orders, enterprise solutions"
  }
}
```

---

### 6. ❌ FORBIDDEN Actions

**Never Do These:**

1. **❌ Cross-Domain Canonical**
   ```html
   <!-- NEVER do this on pouch.eco -->
   <link rel="canonical" href="https://achievepack.com/page" />
   ```

2. **❌ Alternate Hreflang Links**
   ```html
   <!-- NEVER link domains as language variants -->
   <link rel="alternate" hreflang="en" href="https://achievepack.com" />
   ```

3. **❌ Same Content Word-for-Word**
   - Always differentiate at least 30% of the content

4. **❌ Linking Domains in GSC**
   - Never use "Associate Property" in Google Search Console

5. **❌ Same Google Analytics ID**
   - Use separate GA4 properties

---

## 🛠️ Domain Detection Utility

**Required File:** `src/utils/domain.ts`

```typescript
// src/utils/domain.ts
export const getDomain = (): 'pouch' | 'achievepack' => {
  if (typeof window === 'undefined') return 'achievepack'
  const hostname = window.location.hostname
  return hostname.includes('pouch.eco') ? 'pouch' : 'achievepack'
}

export const isPouch = () => getDomain() === 'pouch'
export const isAchievePack = () => getDomain() === 'achievepack'

export const getBrandConfig = () => {
  const configs = {
    pouch: {
      name: 'Pouch.eco',
      domain: 'pouch.eco',
      email: 'cs@pouch.eco',
      logoPath: '/pouch-logo.svg',
      primaryColor: '#10b981',
      tone: 'friendly',
      targetAudience: 'B2C',
      tagline: 'Eco Packaging for Startups'
    },
    achievepack: {
      name: 'Achieve Pack',
      domain: 'achievepack.com',
      email: 'ryan@achievepack.com',
      logoPath: '/ap-logo.svg',
      primaryColor: '#8b5cf6',
      tone: 'professional',
      targetAudience: 'B2B',
      tagline: 'Sustainable Packaging Solutions'
    }
  }
  
  return configs[getDomain()]
}
```

---

## 📊 Google Search Console Setup

**Rule:** Maintain completely separate GSC properties.

### pouch.eco GSC:
1. Create property: `sc-domain:pouch.eco`
2. Submit sitemap: `https://pouch.eco/sitemap.xml`
3. Track B2C keywords
4. Monitor B2C search performance

### achievepack.com GSC:
1. Create property: `sc-domain:achievepack.com`
2. Submit sitemap: `https://achievepack.com/sitemap.xml`
3. Track B2B keywords
4. Monitor B2B search performance

**❌ Do NOT:**
- Link these properties
- Use "International Targeting"
- Share any configuration between them

---

## 🎨 Component Guidelines

### Header Component
```typescript
// src/components/Header.tsx
import { getBrandConfig } from '../utils/domain'

export default function Header() {
  const brand = getBrandConfig()
  
  return (
    <header>
      <img src={brand.logoPath} alt={brand.name} />
      <span>{brand.tagline}</span>
      {/* Menu items based on target audience */}
    </header>
  )
}
```

### Footer Component
```typescript
// src/components/Footer.tsx
import { getBrandConfig } from '../utils/domain'

export default function Footer() {
  const brand = getBrandConfig()
  
  return (
    <footer>
      <p>© 2025 {brand.name}</p>
      <a href={`mailto:${brand.email}`}>{brand.email}</a>
    </footer>
  )
}
```

---

## 🚀 Page-Level Implementation

### Home Page Example
```typescript
// src/pages/HomePage.tsx
import { getDomain, getBrandConfig } from '../utils/domain'

export default function HomePage() {
  const domain = getDomain()
  const brand = getBrandConfig()
  
  const content = {
    pouch: {
      hero: {
        title: "Start Your Eco Brand Today",
        subtitle: "Beautiful compostable packaging from just 500 units",
        cta: "Shop Starter Kits"
      }
    },
    achievepack: {
      hero: {
        title: "Enterprise Sustainable Packaging",
        subtitle: "Custom solutions for brands that scale",
        cta: "Request Quote"
      }
    }
  }
  
  const pageContent = content[domain]
  
  return (
    <>
      <SEOHead 
        title={`${pageContent.hero.title} | ${brand.name}`}
        description={pageContent.hero.subtitle}
      />
      <Hero {...pageContent.hero} />
    </>
  )
}
```

---

## 📈 Monitoring Checklist

### Weekly Tasks:
- [ ] Check GSC for duplicate content warnings
- [ ] Verify canonical URLs are correct
- [ ] Monitor rankings for both domains separately
- [ ] Check that sitemaps are being crawled

### Monthly Tasks:
- [ ] Compare traffic trends for both domains
- [ ] Review keyword rankings (B2C vs B2B)
- [ ] Analyze conversion rates by domain
- [ ] Update content differentiation if needed

---

## 🎯 Keyword Strategy

### pouch.eco (B2C Keywords):
- "startup packaging"
- "low moq compostable bags"
- "eco packaging for small business"
- "affordable sustainable pouches"
- "beginner friendly packaging"

### achievepack.com (B2B Keywords):
- "wholesale compostable packaging"
- "custom branded pouches"
- "bulk sustainable packaging"
- "enterprise packaging solutions"
- "bpi certified suppliers"

**Rule:** Keywords MUST target different search intents and user personas.

---

## 🔧 Development Workflow

### When Adding New Pages:

1. **Create page component with domain detection**
   ```typescript
   const domain = getDomain()
   ```

2. **Define content for both domains**
   ```typescript
   const content = { pouch: {...}, achievepack: {...} }
   ```

3. **Implement SEO meta tags**
   ```typescript
   <SEOHead domain={domain} />
   ```

4. **Update both sitemaps**
   - Add to `sitemap-pouch.xml`
   - Add to `sitemap-achievepack.xml`

5. **Test on both domains**
   - Test: `http://localhost:3000` (as achievepack)
   - Test with hosts file: `127.0.0.1 pouch.eco`

---

## 🧪 Testing Checklist

### Before Deployment:

- [ ] Canonical URLs point to correct domain
- [ ] Meta tags are domain-specific
- [ ] Sitemaps are updated
- [ ] Content is at least 30% different
- [ ] Brand config (logo, email, colors) switches correctly
- [ ] No cross-domain canonical tags
- [ ] No alternate hreflang tags
- [ ] robots.txt responds correctly for each domain

### After Deployment:

- [ ] Verify both domains are accessible
- [ ] Check canonical URLs in browser
- [ ] Validate sitemaps in GSC
- [ ] Confirm no duplicate content warnings
- [ ] Monitor initial ranking stability

---

## 📚 Reference Files

Key files to maintain this strategy:

1. **`src/utils/domain.ts`** - Domain detection & brand config
2. **`src/components/SEOHead.tsx`** - SEO meta tags
3. **`vercel.json`** - Sitemap routing
4. **`pages/api/robots.txt.ts`** - Dynamic robots.txt
5. **`public/sitemap-pouch.xml`** - Pouch.eco sitemap
6. **`public/sitemap-achievepack.xml`** - AchievePack sitemap

---

## ⚠️ Common Mistakes to Avoid

1. **Forgetting to update sitemaps** when adding new pages
2. **Using same meta description** for both domains
3. **Not testing canonical URLs** after deployment
4. **Copying content word-for-word** between domains
5. **Linking GSC properties** together
6. **Using cross-domain redirects** for SEO

---

## 🆘 Troubleshooting

### If pouch.eco ranking drops:

1. Check canonical URLs are pointing to pouch.eco
2. Verify content is differentiated (30%+)
3. Check GSC for duplicate content warnings
4. Ensure sitemap is being crawled
5. Verify no cross-domain canonical tags exist

### If Google shows wrong domain in results:

1. Check canonical URL implementation
2. Verify sitemap submitted to correct GSC property
3. Check no alternate hreflang tags exist
4. Wait 2-4 weeks for Google to re-index

---

## 📞 Contact

For questions about this strategy, contact:
- Development Lead: [Your Name]
- SEO Consultant: [SEO Contact]

---

---

## 🔄 WordPress to React Migration Guide (pouch.eco)

**Current Status:** pouch.eco is running on WordPress  
**Target:** Migrate to achievepack.com React codebase while maintaining SEO

---

### Step 1: Pre-Migration SEO Audit

**Export from Google Search Console:**
1. Go to pouch.eco GSC property
2. Performance → Export → Last 3 months
3. Record top 20 pages by impressions
4. Record top 50 keywords by clicks
5. Note average position for each keyword

**Backup WordPress Content:**
```bash
# Export WordPress content via admin panel
Tools → Export → All content
```

---

### Step 2: URL Mapping (WordPress → React)

**pouch.eco URL Inventory (Found via site:pouch.eco):**

#### Priority 1 - High Traffic Pages (MUST migrate):
```
✅ Homepage
   WordPress: https://pouch.eco/
   React: / (with domain detection)

✅ Solutions/Categories
   WordPress: https://pouch.eco/solutions/
   React: /solutions (domain-aware content)

✅ Material Pages
   WordPress: https://pouch.eco/gptk/ (Cello Kraft Triplex)
   WordPress: https://pouch.eco/ptn/ (Kraft Duplex)
   React: /materials/cello-kraft-triplex
   React: /materials/kraft-duplex

✅ Size Guide
   WordPress: https://pouch.eco/size/
   React: /size-guide

✅ Testimonials
   WordPress: https://pouch.eco/testimonial/
   React: /testimonials
```

#### Priority 2 - Feature Pages:
```
✅ Surface Finishes
   WordPress: https://pouch.eco/all-options/surface-finish-options-for-eco-friendly-packaging-pouch/
   React: /options/surface-finish

✅ Reclosure Options
   WordPress: https://pouch.eco/all-options/reclosure-options-for-eco-friendly-packaging-pouch/
   React: /options/reclosure

✅ Pouch Shapes
   WordPress: https://pouch.eco/stand-up-pouch-doypack/
   WordPress: https://pouch.eco/all-options/quad-seal-and-flat-bottom-pouches/
   WordPress: https://pouch.eco/all-options/3-side-sealed-and-center-sealed-pouch-shape/
   WordPress: https://pouch.eco/all-options/side-gusseted-box-bottom-pouch-shape/
   React: /shapes/stand-up-pouch
   React: /shapes/quad-seal
   React: /shapes/3-side-seal
   React: /shapes/side-gusset

✅ Additional Features
   WordPress: https://pouch.eco/all-options/additional-feature-options-for-eco-friendly-packaging-pouch/
   React: /options/features
```

#### Priority 3 - Barrier & Material Options:
```
✅ Barrier Options
   WordPress: https://pouch.eco/all-options/barrier-options-for-eco-friendly-material/
   WordPress: https://pouch.eco/all-options/low-barrier-options-for-eco-friendly-material/
   WordPress: https://pouch.eco/all-options/medium-barrier-options-for-eco-friendly-material/
   WordPress: https://pouch.eco/all-options/high-barrier-options-for-eco-friendly-material/
   React: /barriers/overview
   React: /barriers/low
   React: /barriers/medium
   React: /barriers/high
```

#### Priority 4 - Content/Blog Pages:
```
✅ Printing Options
   WordPress: https://pouch.eco/unlimited-colors-digital-printing/
   WordPress: https://pouch.eco/up-to-10-colors-plate-printing/
   React: /printing/digital
   React: /printing/plate

✅ Shipping & DTC
   WordPress: https://pouch.eco/ecommerce-exclusive-lightweight-eco-pouches-cut-shipping-and-emissions/
   React: /solutions/ecommerce-shipping

✅ Process Pages
   WordPress: https://pouch.eco/lead-time/
   WordPress: https://pouch.eco/workflow/
   React: /process/timeline
   React: /process/workflow
```

#### Priority 5 - Resource Pages:
```
✅ Downloads
   WordPress: https://ecopouch.gumroad.com/ (external)
   React: /resources/dielines (with external link)
```

---

### Step 3: Content Migration Strategy

**For Each WordPress Page:**

1. **Extract Content:**
   ```bash
   # Use WordPress REST API
   curl https://pouch.eco/wp-json/wp/v2/pages
   ```

2. **Differentiate Content (30% rule):**
   ```typescript
   // Example: Material page
   const content = {
     shared: {
       // 70% shared technical content
       specifications: "...",
       certifications: "...",
       applications: "..."
     },
     pouch: {
       // 30% B2C content
       headline: "Perfect Compostable Material for Small Batches",
       moq: "From 500 units",
       pricing: "Transparent pricing from $0.50/bag",
       cta: "Shop Now"
     },
     achievepack: {
       // 30% B2B content
       headline: "Enterprise-Grade Compostable Material",
       moq: "Optimized for 10,000+ units",
       pricing: "Volume pricing available",
       cta: "Request Quote"
     }
   }
   ```

3. **Create React Components:**
   ```typescript
   // src/pages/materials/CelloKraftTriplexPage.tsx
   import { getDomain, getBrandConfig } from '@/utils/domain'
   
   export default function CelloKraftTriplexPage() {
     const domain = getDomain()
     const brand = getBrandConfig()
     const content = getMaterialContent('cello-kraft-triplex', domain)
     
     return (
       <>
         <SEOHead 
           title={content.headline}
           description={content.description}
           canonical={`https://${brand.domain}/materials/cello-kraft-triplex`}
         />
         <MaterialLayout content={content} />
       </>
     )
   }
   ```

---

### Step 4: 301 Redirects Setup

**Create redirect mapping in Vercel:**

```json
// vercel.json
{
  "redirects": [
    // Material pages
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
    
    // Feature pages
    {
      "source": "/all-options/surface-finish-options-for-eco-friendly-packaging-pouch",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/options/surface-finish",
      "permanent": true
    },
    
    // Shape pages
    {
      "source": "/stand-up-pouch-doypack",
      "has": [{ "type": "host", "value": "pouch.eco" }],
      "destination": "/shapes/stand-up-pouch",
      "permanent": true
    },
    
    // Add all other mappings...
  ]
}
```

---

### Step 5: WordPress Content Extraction

**Key Content to Extract:**

1. **Homepage Hero:**
   - "10 Reasons Emerging Food Brands Are Switching..."
   - "$18K–$42K annual shipping savings"
   - "100-piece MOQ"
   - Premium finishes messaging

2. **Product Features:**
   - 8 premium surface finishes
   - Reclosure options
   - Shape flexibility
   - Barrier types (Low to Maximum)

3. **Comparison Tables:**
   - Rigid Jars vs Flexible Pouches table
   - Cost savings data
   - Environmental impact metrics

4. **Testimonials & Social Proof:**
   - Customer quotes
   - Data points from FPA 2024

---

### Step 6: Implementation Checklist

**Week 1: Foundation**
- [ ] Create `src/utils/domain.ts`
- [ ] Update `src/components/SEOHead.tsx`
- [ ] Create `src/content/pouchContent.ts`
- [ ] Setup Vercel redirects in `vercel.json`

**Week 2: Core Pages**
- [ ] Migrate homepage with domain detection
- [ ] Migrate Solutions page
- [ ] Migrate Size Guide
- [ ] Migrate Testimonials page

**Week 3: Feature Pages**
- [ ] Migrate all /options/* pages
- [ ] Migrate all /shapes/* pages
- [ ] Migrate all /barriers/* pages
- [ ] Extract and adapt WordPress content

**Week 4: Material Pages**
- [ ] Migrate material pages (GPTK, PTN, etc.)
- [ ] Create material detail templates
- [ ] Implement comparison tables

**Week 5: Content Pages**
- [ ] Migrate printing pages
- [ ] Migrate process pages
- [ ] Migrate blog/content pages

**Week 6: Testing & Launch**
- [ ] Test all URLs with domain detection
- [ ] Verify 301 redirects work
- [ ] Test canonical URLs
- [ ] Generate both sitemaps
- [ ] Add pouch.eco domain to Vercel
- [ ] Configure DNS
- [ ] Submit new sitemap to GSC
- [ ] Monitor for 2 weeks

---

### Step 7: DNS Configuration

**At Domain Registrar (for pouch.eco):**

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 300

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 300
```

**Verify DNS propagation:**
```bash
dig pouch.eco
dig www.pouch.eco
```

---

### Step 8: Vercel Domain Setup

1. Go to Vercel Dashboard
2. Select achievepack.com project
3. Settings → Domains
4. Click "Add Domain"
5. Enter: `pouch.eco`
6. Click "Add Domain"
7. Enter: `www.pouch.eco`
8. Wait for SSL certificate (5-10 minutes)
9. Test: `https://pouch.eco`

---

### Step 9: Post-Migration Monitoring

**Week 1-2: Critical Period**
- [ ] Daily: Check GSC for indexing errors
- [ ] Daily: Verify canonical URLs in browser
- [ ] Daily: Test random URLs from old sitemap
- [ ] Monitor traffic in GA4

**Week 3-4: Stabilization**
- [ ] Check for duplicate content warnings
- [ ] Monitor keyword rankings
- [ ] Compare traffic: Before vs After
- [ ] Fix any 404 errors in GSC

**Week 5-8: Optimization**
- [ ] Fine-tune content differentiation
- [ ] Optimize meta descriptions
- [ ] Add structured data
- [ ] Monitor conversion rates

---

### Step 10: WordPress Decommission

**After 4 weeks of stable traffic:**

1. **Keep WordPress redirects active for 6 months**
   - Don't delete WordPress immediately
   - Setup redirects at WordPress level too

2. **Update external backlinks:**
   - Contact sites linking to pouch.eco
   - Ask to update to new URLs
   - Preserve link equity

3. **Final WordPress shutdown (after 6 months):**
   - Export final backup
   - Cancel WordPress hosting
   - Keep domain pointing to Vercel

---

## 📋 Complete URL Migration Mapping

### pouch.eco URL Inventory (Complete List)

```yaml
# Homepage & Main Pages
/:
  priority: P0
  traffic: High
  react_path: /
  content_diff: 40%

/solutions/:
  priority: P0
  traffic: High
  react_path: /solutions
  content_diff: 35%

/size/:
  priority: P0
  traffic: Medium
  react_path: /size-guide
  content_diff: 30%

/testimonial/:
  priority: P1
  traffic: Medium
  react_path: /testimonials
  content_diff: 40%

# Material Pages
/gptk/:
  priority: P0
  traffic: High
  react_path: /materials/cello-kraft-triplex
  content_diff: 30%

/ptn/:
  priority: P0
  traffic: High
  react_path: /materials/kraft-duplex
  content_diff: 30%

# Shape Pages
/stand-up-pouch-doypack/:
  priority: P1
  traffic: Medium
  react_path: /shapes/stand-up-pouch
  content_diff: 30%

/all-options/quad-seal-and-flat-bottom-pouches/:
  priority: P1
  traffic: Medium
  react_path: /shapes/quad-seal
  content_diff: 30%

/all-options/3-side-sealed-and-center-sealed-pouch-shape/:
  priority: P2
  traffic: Low
  react_path: /shapes/3-side-seal
  content_diff: 30%

/all-options/side-gusseted-box-bottom-pouch-shape/:
  priority: P2
  traffic: Low
  react_path: /shapes/side-gusset
  content_diff: 30%

# Feature Options
/all-options/surface-finish-options-for-eco-friendly-packaging-pouch/:
  priority: P1
  traffic: Medium
  react_path: /options/surface-finish
  content_diff: 30%

/all-options/reclosure-options-for-eco-friendly-packaging-pouch/:
  priority: P1
  traffic: Medium
  react_path: /options/reclosure
  content_diff: 30%

/all-options/additional-feature-options-for-eco-friendly-packaging-pouch/:
  priority: P2
  traffic: Low
  react_path: /options/features
  content_diff: 30%

# Barrier Options
/all-options/barrier-options-for-eco-friendly-material/:
  priority: P1
  traffic: Medium
  react_path: /barriers/overview
  content_diff: 30%

/all-options/low-barrier-options-for-eco-friendly-material/:
  priority: P2
  traffic: Low
  react_path: /barriers/low
  content_diff: 30%

/all-options/medium-barrier-options-for-eco-friendly-material/:
  priority: P2
  traffic: Low
  react_path: /barriers/medium
  content_diff: 30%

/all-options/high-barrier-options-for-eco-friendly-material/:
  priority: P2
  traffic: Low
  react_path: /barriers/high
  content_diff: 30%

# Printing Pages
/unlimited-colors-digital-printing/:
  priority: P1
  traffic: Medium
  react_path: /printing/digital
  content_diff: 35%

/up-to-10-colors-plate-printing/:
  priority: P2
  traffic: Low
  react_path: /printing/plate
  content_diff: 35%

# Content/Blog Pages
/ecommerce-exclusive-lightweight-eco-pouches-cut-shipping-and-emissions/:
  priority: P1
  traffic: Medium
  react_path: /solutions/ecommerce-shipping
  content_diff: 40%

# Process Pages
/lead-time/:
  priority: P2
  traffic: Low
  react_path: /process/timeline
  content_diff: 30%

/workflow/:
  priority: P2
  traffic: Low
  react_path: /process/workflow
  content_diff: 30%

# Total Pages: 22
# P0 (Critical): 4 pages
# P1 (High): 8 pages
# P2 (Medium): 10 pages
```

---

## 🎯 Migration Success Metrics

**Target Goals (Week 8):**
- ✅ 95%+ of organic traffic maintained
- ✅ Zero duplicate content warnings in GSC
- ✅ All old URLs redirect correctly (301)
- ✅ Keyword rankings within ±3 positions
- ✅ Page load time < 2 seconds
- ✅ Core Web Vitals pass

**Expected Timeline:**
- Week 1-2: Traffic dip 10-20% (normal)
- Week 3-4: Traffic recovery to 80-90%
- Week 5-8: Traffic back to 95-100%
- Week 9+: Traffic growth (better UX + faster site)

---

## 📝 Changelog

- **2025-01-30**: Initial documentation created
- **2025-01-30**: Added WordPress migration guide + pouch.eco URL inventory
- Future updates will be logged here

---

**Remember:** The success of this dual-domain strategy depends on treating these as two completely independent websites from Google's perspective, while efficiently sharing code behind the scenes.
