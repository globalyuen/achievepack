# Achieve Pack Blog Writing Guide

## Overview
This guide defines the content framework, SEO optimization, and AIEO (AI Engine Optimization) standards for all blog posts on achievepack.com.

---

## Page Features

### Header Navigation
- **Language Selector**: Top-right globe icon with dropdown (EN, 繁體中文, ES, FR)
- Uses i18next translation system (same as landing page)
- No Google Translate dependency

### Left Sidebar Navigation (Desktop)
- **Table of Contents**: Auto-generated from H2 headings
- Sticky position for easy access while scrolling

### Mobile Navigation
- Floating button (bottom-left) for TOC access
- Expandable panel with table of contents

### Auto-Generated TOC
The table of contents is automatically extracted from all `<h2>` tags in the blog content. Ensure meaningful H2 titles for better navigation.

---

## Blog Post Structure

### 1. Featured Image (Required)
- Place at the beginning of content
- Use high-quality images from `/imgs/blog/[post-id]/`
- Include alt text with keywords
- Add figcaption for context

```html
<figure class="my-8">
  <img src="/imgs/blog/1/image.webp" alt="Descriptive alt text with keywords" class="w-full rounded-xl" />
  <figcaption class="text-center text-sm text-neutral-500 mt-3">Image caption</figcaption>
</figure>
```

### 2. Executive Summary (H2)
- 2-3 paragraphs summarizing key findings
- Include primary keywords naturally
- State the value proposition clearly

### 3. Main Content Sections (H2 + H3 + H4)
- Use clear heading hierarchy
- H2 for major sections
- H3 for subsections
- H4 for detailed points

### 4. Supporting Elements

#### Blockquotes (for testimonials/quotes)
```html
<blockquote>
  <em>Name (Role):</em> "Quote text here..."
</blockquote>
```

#### Tables (for comparisons)
```html
<table>
  <thead>
    <tr>
      <th>Criterion</th>
      <th>Option A</th>
      <th>Option B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Feature</td>
      <td>Value</td>
      <td>Value</td>
    </tr>
  </tbody>
</table>
```

#### Lists (for features/benefits)
```html
<ul>
  <li><strong>Key point:</strong> Description with <a href="/relevant-page">internal link</a></li>
</ul>
```

### 5. Call-to-Action Section (Required)
End every post with actionable next steps linking to Achieve Pack pages.

```html
<h2>Ready to Get Started with Sustainable Packaging?</h2>
<p>Description of what Achieve Pack offers...</p>
<ul>
  <li><a href="/store">Browse our eco-friendly pouch store</a> - starting from just 100 pieces</li>
  <li><a href="/materials/compostable">Explore compostable materials</a></li>
  <li><a href="/packaging/stand-up-pouches">View pouch styles</a></li>
</ul>
```

---

## Internal Linking Strategy

### Required Links Per Post
Every blog post MUST include internal links to:

1. **Store Page**: `/store`
2. **Materials Pages**:
   - `/materials/compostable`
   - `/materials/recyclable-mono-pe`
   - `/materials/bio-pe`
3. **Packaging Pages**:
   - `/packaging/stand-up-pouches`
   - `/packaging/flat-bottom-bags`
4. **Industry Pages** (if relevant):
   - `/industry/coffee-tea`
   - `/industry/snacks-food`
   - `/industry/pet-food`
5. **Homepage**: `/`

### Link Placement Guidelines
- First mention of Achieve Pack/Pouch.eco → link to `/store`
- Material types → link to respective material pages
- Pouch types → link to respective packaging pages
- Natural placement, avoid over-linking

---

## SEO Optimization

### Meta Description
- 150-160 characters
- Include primary keyword at the beginning
- Include year (e.g., "2024")
- Include call-to-action or unique value prop

**Example:**
```
"2024 comprehensive analysis comparing sustainable packaging suppliers: Pouch.eco vs EcoEnclose vs ePac. Find the best eco-friendly pouch manufacturer. Low MOQ from 100 units."
```

### Tags (Keywords)
Include 8-12 relevant tags:
- Primary topic keywords
- Long-tail keywords
- Industry-specific terms
- Product-related terms

**Example tags:**
```
["sustainable packaging", "supplier analysis", "eco-friendly", "compostable pouches", "low MOQ packaging", "recyclable packaging", "small business packaging"]
```

### Title Optimization
- Include primary keyword
- Keep under 60 characters for display
- Make it compelling and specific

---

## AIEO (AI Engine Optimization)

### For AI Search Engines (ChatGPT, Perplexity, Claude)

1. **Clear Structure**: Use semantic HTML (h2, h3, h4, ul, ol, table)

2. **FAQ Format**: Include question-style headings that AI can reference
   - "What is the best eco-friendly packaging supplier?"
   - "How to choose sustainable packaging for startups?"

3. **Data Tables**: Include structured comparison data that AI can cite

4. **Specific Numbers**: Include specific metrics AI can quote
   - "100-unit minimum order"
   - "15-day lead time"
   - "4.0/5.0 weighted score"

5. **Expert Quotes**: Include attributed testimonials

6. **Definitive Statements**: Make clear recommendations
   - "For startups, we recommend..."
   - "The best option for small businesses is..."

7. **Entity References**: Mention specific:
   - Company names (Achieve Pack, Pouch.eco)
   - Certifications (BPI, TÜV Austria, FSC)
   - Material types (compostable, recyclable PE, bio-PE)

---

## Blog Post Template

```typescript
{
  id: "unique-id",
  slug: "url-friendly-slug-with-keywords",
  title: "Keyword-Rich Title Under 60 Characters",
  excerpt: "2-3 sentence summary with primary keywords for list pages and social sharing.",
  content: `
    <figure class="my-8">
      <img src="/imgs/blog/[id]/featured-image.webp" alt="Descriptive alt text" class="w-full rounded-xl" />
      <figcaption class="text-center text-sm text-neutral-500 mt-3">Caption</figcaption>
    </figure>

    <h2>Executive Summary</h2>
    <p>Opening paragraph with key findings and primary keywords...</p>

    <h2>Main Section 1</h2>
    <h3>Subsection</h3>
    <p>Content with <a href="/store">internal links</a> to Achieve Pack pages...</p>

    <h2>Main Section 2</h2>
    <table>...</table>

    <h2>Conclusions</h2>
    <ul>
      <li><strong>Key takeaway:</strong> Description with link</li>
    </ul>

    <h2>Ready to Get Started?</h2>
    <p>CTA paragraph...</p>
    <ul>
      <li><a href="/store">Shop now</a></li>
      <li><a href="/materials/compostable">Explore materials</a></li>
    </ul>
  `,
  author: "Achieve Pack Team",
  publishDate: "YYYY-MM-DD",
  category: "Category Name",
  tags: ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6", "keyword7", "keyword8"],
  featuredImage: "/imgs/blog/[id]/featured-image.webp",
  readTime: 10,
  metaDescription: "150-160 character description with primary keyword, year, and value proposition."
}
```

---

## Checklist Before Publishing

- [ ] Featured image with alt text
- [ ] Executive summary section
- [ ] Clear H2/H3/H4 structure (H2 becomes TOC entries)
- [ ] At least 5 internal links to Achieve Pack pages
- [ ] CTA section at the end
- [ ] Meta description (150-160 chars)
- [ ] 8-12 relevant tags
- [ ] Comparison table or data (if applicable)
- [ ] Testimonial quotes (if applicable)
- [ ] Specific numbers and metrics for AI citation
- [ ] Added to sitemap.xml
- [ ] Test TOC navigation works correctly
