/**
 * Core Schema.org Entities for E-E-A-T Optimization
 * 用於建立完整的實體圖譜，提升Google對專業度、權威性、可信度的識別
 */

// Organization Entity - 全站共用的公司實體
export const organizationEntity = {
  "@type": "Organization",
  "@id": "https://achievepack.com/#organization",
  "name": "Achieve Pack",
  "legalName": "Achieve Pack Manufacturing Co., Ltd.",
  "url": "https://achievepack.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://achievepack.com/achieve-pack-logo.png",
    "width": 250,
    "height": 60
  },
  "description": "Leading sustainable flexible packaging manufacturer specializing in compostable, recyclable, and bio-based pouches. ISO 9001, BRC certified with FDA and EU food-safe compliance.",
  "foundingDate": "2015",
  "slogan": "Eco-Friendly Packaging Solutions for Modern Brands",
  "sameAs": [
    "https://www.linkedin.com/company/achieve-pack",
    "https://www.facebook.com/achievepack",
    "https://www.instagram.com/achievepack"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "telephone": "+86-755-2344-5678",
      "email": "sales@achievepack.com",
      "availableLanguage": ["en", "zh", "es", "fr"]
    },
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@achievepack.com",
      "availableLanguage": ["en", "zh"]
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Building 3, Industrial Park",
    "addressLocality": "Shenzhen",
    "addressRegion": "Guangdong",
    "postalCode": "518000",
    "addressCountry": "CN"
  },
  "areaServed": [
    "US", "CA", "GB", "AU", "NZ", "SG", "HK", "EU", "UAE"
  ],
  "knowsAbout": [
    "Compostable packaging",
    "Recyclable mono-material",
    "Bio-based plastics",
    "Flexible packaging manufacturing",
    "EN 13432 certification",
    "FDA food-safe packaging",
    "Sustainable packaging solutions"
  ]
}

// Author Entities - 專家作者實體
export const authorEntities = {
  "founder-ryan": {
    "@type": "Person",
    "@id": "https://achievepack.com/team/ryan-wong#person",
    "name": "Ryan Wong",
    "jobTitle": "Founder & Sustainable Packaging Expert",
    "description": "Eco packaging specialist helping DTC coffee, chocolate and tea startups switch from plastic to certified compostable and recyclable pouches with low MOQ. 10+ years in sustainable flexible packaging and B2B e-commerce.",
    "worksFor": { "@id": "https://achievepack.com/#organization" },
    "knowsAbout": [
      {
        "@type": "Thing",
        "name": "Sustainable packaging",
        "sameAs": ["https://en.wikipedia.org/wiki/Sustainable_packaging"]
      },
      {
        "@type": "Thing",
        "name": "Flexible packaging",
        "sameAs": ["https://en.wikipedia.org/wiki/Flexible_packaging"]
      },
      {
        "@type": "Thing",
        "name": "Coffee packaging",
        "sameAs": ["https://en.wikipedia.org/wiki/Coffee_packaging"]
      },
      {
        "@type": "Thing",
        "name": "Biodegradable plastic",
        "sameAs": ["https://en.wikipedia.org/wiki/Biodegradable_plastic"]
      },
      {
        "@type": "Thing",
        "name": "Food packaging",
        "sameAs": ["https://en.wikipedia.org/wiki/Food_packaging"]
      },
      "compostable coffee pouches for DTC brands",
      "compostable packaging for chocolate and confectionery",
      "tea packaging using compostable and recyclable films",
      "transition from plastic to compostable packaging for startups",
      "flexible pouch design for e-commerce and subscription boxes",
      "EU and US compostable packaging standards",
      "food-contact safe compostable films",
      "EN 13432 certified packaging",
      "ASTM D6400 compostable standards",
      "BPI certification for compostable packaging",
      "low MOQ sustainable packaging solutions"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/ryanwwc/",
      "https://achievepack.com/team/ryan-wong"
    ]
  },
  "packaging-engineer": {
    "@type": "Person",
    "@id": "https://achievepack.com/team/packaging-engineer#person",
    "name": "Sarah Chen",
    "jobTitle": "Senior Packaging Engineer",
    "description": "15+ years experience in sustainable flexible packaging design and material science. Specialized in compostable and recyclable structures for food-safe applications.",
    "worksFor": { "@id": "https://achievepack.com/#organization" },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Zhejiang University"
    },
    "knowsAbout": [
      "Compostable packaging design",
      "EN 13432 certification",
      "Food-safe flexible packaging",
      "Barrier layer engineering",
      "Biodegradable materials"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/sarah-chen-packaging"
    ]
  },
  "quality-director": {
    "@type": "Person",
    "@id": "https://achievepack.com/team/quality-director#person",
    "name": "Michael Wong",
    "jobTitle": "Quality Assurance Director",
    "description": "12+ years in quality control and compliance for flexible packaging. Expert in FDA, EU, and international food safety regulations.",
    "worksFor": { "@id": "https://achievepack.com/#organization" },
    "knowsAbout": [
      "FDA food contact regulations",
      "EU PPWR compliance",
      "BRC certification",
      "Quality management systems",
      "Material safety testing"
    ]
  },
  "sustainability-specialist": {
    "@type": "Person",
    "@id": "https://achievepack.com/team/sustainability-specialist#person",
    "name": "Emma Rodriguez",
    "jobTitle": "Sustainability Specialist",
    "description": "10+ years consulting brands on sustainable packaging transitions. Expert in lifecycle assessment and circular economy solutions.",
    "worksFor": { "@id": "https://achievepack.com/#organization" },
    "knowsAbout": [
      "Sustainable packaging strategy",
      "Lifecycle assessment",
      "Circular economy",
      "Carbon footprint reduction",
      "EU Green Deal compliance"
    ]
  }
}

// 根據內容類型選擇最適合的作者
export const getAuthorByContentType = (contentType: string) => {
  const authorMap: Record<string, typeof authorEntities[keyof typeof authorEntities]> = {
    'founder': authorEntities['founder-ryan'],
    'ryan': authorEntities['founder-ryan'],
    'dtc': authorEntities['founder-ryan'],
    'coffee': authorEntities['founder-ryan'],
    'chocolate': authorEntities['founder-ryan'],
    'tea': authorEntities['founder-ryan'],
    'compostable': authorEntities['founder-ryan'],
    'bio-pe': authorEntities['packaging-engineer'],
    'recyclable': authorEntities['sustainability-specialist'],
    'mono-pe': authorEntities['sustainability-specialist'],
    'mono-pp': authorEntities['sustainability-specialist'],
    'pcr': authorEntities['sustainability-specialist'],
    'quality': authorEntities['quality-director'],
    'certification': authorEntities['quality-director'],
    'fda': authorEntities['quality-director'],
    'default': authorEntities['founder-ryan']
  }

  // 匹配關鍵字
  for (const [key, author] of Object.entries(authorMap)) {
    if (contentType.toLowerCase().includes(key)) {
      return author
    }
  }

  return authorMap.default
}

// BreadcrumbList Entity Generator
export const generateBreadcrumb = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

// Review Entity for Case Studies
export const generateReviewEntity = (params: {
  itemReviewed: string
  reviewBody: string
  reviewRating: number
  author: string
  datePublished: string
}) => ({
  "@type": "Review",
  "itemReviewed": {
    "@type": "Service",
    "name": params.itemReviewed
  },
  "reviewBody": params.reviewBody,
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": params.reviewRating,
    "bestRating": 5
  },
  "author": {
    "@type": "Organization",
    "name": params.author
  },
  "datePublished": params.datePublished
})
