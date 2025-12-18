# SEO Page Writing Guide for Achieve Pack

## Overview
This guide defines the content framework, AI GEO (Generative Engine Optimization) standards, internal linking strategy, and best practices for all SEO pages on achievepack.com.

**Goal**: Make product/material/packaging pages highly discoverable by both traditional search engines AND AI search engines (Gemini, ChatGPT, Perplexity).

---

## AI GEO (Generative Engine Optimization) Strategy

### What is GEO?
GEO optimizes content so AI search engines (Google AI Mode, Gemini, ChatGPT) can:
- Understand and cite your content as authoritative
- Recommend your products when buyers ask questions
- Extract key facts, data, and solutions from your pages

### Core GEO Principles

1. **Buyer-Centric Content**
   - Write from the buyer's perspective (not just features)
   - Address pain points: MOQ concerns, quality risks, certification doubts
   - Use problem-based titles: "How to Avoid 3 Eco-Packaging Traps"

2. **Answer-First Structure**
   - Lead with a direct answer/summary in the first paragraph
   - AI extracts the first clear answer it finds
   - Example: "Stand-up pouches reduce material usage by 75% vs rigid containers..."

3. **Data & Evidence**
   - Include specific numbers AI can quote
   - Example: "MOQ from 100 pieces", "Lead time: 6-8 weeks", "30-50% PCR content"
   - Reference certifications: FSC, OEKO-TEX, GRS, TUV, BPI

4. **AI-Friendly FAQ**
   - Write questions as buyers would ask Gemini/ChatGPT
   - Example: "What is the best eco-friendly pouch for coffee beans?"
   - Include 8-15 FAQs per product page

5. **E-E-A-T Signals**
   - Experience: Include case studies, customer quotes
   - Expertise: Technical specifications, material science
   - Authority: Certifications, years in business, factory info
   - Trust: Contact info, physical address, real photos

---

## Content Structure (SEOPageLayout)

### Required Sections

```typescript
{
  // SEO Meta
  title: string,           // Under 60 chars, include primary keyword
  description: string,     // 150-160 chars, compelling + keyword-rich
  keywords: string[],      // 10-15 keywords including long-tail
  canonicalUrl: string,    // Full URL
  
  // Hero
  heroTitle: string,       // H1, problem-based or benefit-focused
  heroSubtitle: string,    // Support statement
  heroImage: string,       // Product hero image
  
  // Intro Summary (Answer-First)
  introSummary: string,    // 2-3 sentences directly answering "what is this"
  
  // Main Sections
  sections: [
    { id: 'overview', title: 'What is [Product]?', content: ... },
    { id: 'benefits', title: 'Key Benefits', content: ... },
    { id: 'materials', title: 'Material Options', content: ... },
    { id: 'applications', title: 'Industry Applications', content: ... },
    { id: 'specifications', title: 'Technical Specifications', content: ... },
    { id: 'process', title: 'How to Order / Our Process', content: ... }
  ],
  
  // FAQ (Critical for GEO)
  faqs: [
    { question: "...", answer: "..." }
  ],
  
  // Related Links (Internal Linking)
  relatedLinks: [
    { title: "...", url: "/...", description: "..." }
  ],
  
  // CTA
  ctaTitle: string,
  ctaDescription: string,
  ctaButtonText: string,
  ctaButtonUrl: string
}
```

---

## Internal Linking Strategy

### Mandatory Links Per Page

Every SEO page MUST include links to:

1. **Store Page**: `/store` - "Shop now" or "Browse products"
2. **Related Materials**:
   - `/materials/compostable`
   - `/materials/recyclable-mono-pe`
   - `/materials/bio-pe`
   - `/materials/pcr`
3. **Related Packaging**:
   - `/packaging/stand-up-pouches`
   - `/packaging/flat-bottom-bags`
   - `/packaging/spout-pouches`
4. **Related Industries** (if applicable):
   - `/industry/coffee-tea`
   - `/industry/snacks-food`
   - `/industry/pet-food`
5. **Blog Posts** (if relevant):
   - `/blog/sustainable-packaging-supplier-analysis`
   - `/blog/recyclable-cosmetic-packaging-pouches-guide`
6. **Homepage**: `/`

### Link Placement Rules

1. **First mention of product type** → link to that packaging page
2. **Material mentions** → link to material pages
3. **Industry mentions** → link to industry pages
4. **"Learn more"** → link to relevant blog post
5. **CTA buttons** → link to store or contact

### Example Link Patterns

```jsx
// In content sections:
<p>Our <Link to="/materials/compostable">compostable materials</Link> are TUV certified...</p>

<p>Perfect for <Link to="/industry/coffee-tea">coffee and tea brands</Link>...</p>

<p>Explore our full range of <Link to="/packaging/stand-up-pouches">stand-up pouches</Link>...</p>

// In related links section:
relatedLinks={[
  { title: "Compostable Materials", url: "/materials/compostable", description: "TUV certified home compostable options" },
  { title: "Coffee & Tea Packaging", url: "/industry/coffee-tea", description: "Specialized solutions for coffee roasters" },
  { title: "Shop Stand-Up Pouches", url: "/store", description: "MOQ from 100 pieces" }
]}
```

---

## FAQ Writing Guide (GEO Optimized)

### FAQ Categories

1. **Product Definition Questions**
   - "What is [product]?"
   - "What is the difference between [A] and [B]?"

2. **Buyer Pain Point Questions**
   - "What are common quality issues with [product]?"
   - "How do I verify a supplier is reliable?"
   - "What certifications should [product] have?"

3. **Specification Questions**
   - "What sizes are available for [product]?"
   - "What is the MOQ for custom [product]?"
   - "How long is the lead time for [product]?"

4. **Comparison Questions**
   - "Which is better: [A] or [B] for [use case]?"
   - "Is [product] more sustainable than [alternative]?"

5. **How-To Questions**
   - "How do I choose the right [product] for my brand?"
   - "How do I recycle [product]?"

### FAQ Answer Format

- Start with a direct answer (1 sentence)
- Add supporting details (2-3 sentences)
- Include specific data when possible
- End with a soft CTA or link

**Example:**
```
Q: What is the minimum order quantity for custom stand-up pouches?
A: Our MOQ for custom printed stand-up pouches is 100 pieces - one of the lowest in the industry. This allows small brands to test packaging designs without large inventory commitments. For plain/stock pouches, we offer even lower quantities. Contact our team for a custom quote based on your specific requirements.
```

---

## AI Query Optimization

### Include "AI Query Examples" Section

Add a section showing how buyers might ask AI about your product:

```jsx
<div className="bg-blue-50 p-4 rounded-lg">
  <h4 className="font-semibold">If you're using Gemini or AI search, try asking:</h4>
  <ul className="mt-2 space-y-1 text-sm">
    <li>• "What is the best eco-friendly pouch supplier with low MOQ?"</li>
    <li>• "Compare compostable vs recyclable coffee pouches"</li>
    <li>• "Which supplier offers custom stand-up pouches from 100 pieces?"</li>
  </ul>
</div>
```

---

## Schema Markup (Already in SEOPageLayout)

The SEOPageLayout automatically generates:
- **WebPage/Product Schema**
- **FAQPage Schema** (when FAQs provided)
- **Organization Schema**

### Additional Schema for Products

When creating product pages, ensure these data points are included:
- Product name
- Description
- Price range (if applicable)
- Availability
- Certifications
- MOQ

---

## E-E-A-T Checklist

Before publishing any SEO page, verify:

- [ ] **Experience**: Real case studies or customer testimonials included
- [ ] **Expertise**: Technical specifications and material science details
- [ ] **Authority**: Certifications listed with verification numbers
- [ ] **Trust**: Contact information, factory address, real photos
- [ ] Factory tour link or video
- [ ] Author/company info visible
- [ ] Updated date shown
- [ ] Clear return/warranty policy linked

---

## Content Quality Checklist

- [ ] Problem-based or benefit-focused H1 title
- [ ] Answer-first intro paragraph (50-100 words)
- [ ] 5+ content sections with clear H2/H3 structure
- [ ] 8-15 AI-friendly FAQ questions
- [ ] Specific data/numbers AI can quote
- [ ] 5+ internal links to related pages
- [ ] Links to store for purchase
- [ ] Links to relevant blog posts
- [ ] CTA section at bottom
- [ ] All images have alt text with keywords
- [ ] Schema markup verified
- [ ] Mobile-friendly layout tested

---

## Page Update Workflow

When updating any SEO page:

1. **Review this guide** before making changes
2. **Check internal links** are still valid
3. **Add new relevant blog links** if new posts exist
4. **Update FAQ** if buyer questions have changed
5. **Verify Schema** still renders correctly
6. **Test on mobile** and desktop
7. **Update sitemap** if URLs changed

---

## Quick Reference: Link Map

### From Packaging Pages, Link To:
| Page | Link To |
|------|---------|
| Stand-Up Pouches | /materials/compostable, /industry/coffee-tea, /store, /blog/sustainable-packaging-supplier-analysis |
| Flat Bottom Bags | /materials/recyclable-mono-pe, /industry/coffee-tea, /store |
| Spout Pouches | /materials/compostable, /industry/baby-food, /store |
| Side Gusset Bags | /materials/recyclable-mono-pe, /industry/pet-food, /store |
| Vacuum Pouches | /materials/bio-pe, /industry/frozen-food, /store |

### From Material Pages, Link To:
| Page | Link To |
|------|---------|
| Compostable | /packaging/stand-up-pouches, /industry/coffee-tea, /blog/recyclable-cosmetic-packaging-pouches-guide |
| Mono-PE | /packaging/flat-bottom-bags, /industry/snacks-food, /store |
| Bio-PE | /packaging/stand-up-pouches, /blog/recyclable-cosmetic-packaging-pouches-guide, /store |
| PCR | /packaging/stand-up-pouches, /blog/recyclable-cosmetic-packaging-pouches-guide, /store |

### From Industry Pages, Link To:
| Page | Link To |
|------|---------|
| Coffee & Tea | /packaging/stand-up-pouches, /materials/compostable, /store |
| Snacks & Food | /packaging/flat-bottom-bags, /materials/recyclable-mono-pe, /store |
| Pet Food | /packaging/side-gusset-bags, /materials/recyclable-mono-pe, /store |
| Cosmetics | /blog/recyclable-cosmetic-packaging-pouches-guide, /materials/bio-pe, /store |

---

## Example: GEO-Optimized Page Structure

```
H1: How to Choose the Right Stand-Up Pouch for Your Brand (Problem-Based)

[Intro Summary - Answer First]
Stand-up pouches are the most popular flexible packaging format, reducing material usage by 75% compared to rigid containers. With MOQ from just 100 pieces at Achieve Pack, small brands can access professional packaging without massive inventory investments.

[Section: What is a Stand-Up Pouch?]
Content with links to /materials/compostable, data points...

[Section: Types of Stand-Up Pouches]
Grid of options with links to /store...

[Section: Sustainable Material Options]
Links to /materials/compostable, /materials/recyclable-mono-pe, /materials/bio-pe...

[Section: Industry Applications]
Links to /industry/coffee-tea, /industry/snacks-food, /industry/pet-food...

[Section: How to Order]
Links to /store, contact info...

[AI Query Examples Box]
"Best eco-friendly pouch supplier low MOQ", "Custom stand-up pouches 100 pieces"...

[FAQ Section - 10+ Questions]
GEO-optimized questions with answers...

[Related Reading]
Links to /blog/sustainable-packaging-supplier-analysis, /blog/recyclable-cosmetic-packaging-pouches-guide...

[CTA Section]
"Ready to get started? Shop now at Achieve Pack - MOQ from 100 pieces"
Link to /store
```

---

## Appendix: Buyer Pain Points to Address

Based on GEO research, address these concerns in content:

### Quality Concerns
- Material not truly eco-friendly
- Color mismatch between proof and production
- Zipper quality issues
- Print fading/peeling
- Weak seals

### Business Concerns
- MOQ too high for small brands
- Long lead times
- Hidden costs
- Communication issues
- No sample available

### Compliance Concerns
- Lack of certifications (FSC, OEKO-TEX, GRS)
- Can't verify supplier claims
- No factory audit available
- Unclear material composition

Address each concern with specific evidence and solutions in your content.
