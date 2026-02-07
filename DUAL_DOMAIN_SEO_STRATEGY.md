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

## 📝 Changelog

- **2025-01-30**: Initial documentation created
- Future updates will be logged here

---

**Remember:** The success of this dual-domain strategy depends on treating these as two completely independent websites from Google's perspective, while efficiently sharing code behind the scenes.
