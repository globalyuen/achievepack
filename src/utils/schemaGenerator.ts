/**
 * JSON-LD Schema Generator for SEO Pages
 * Generates structured data for better search engine understanding
 */

import { organizationEntity } from '../data/schemaEntities'

export interface PageMetadata {
  title: string
  description: string
  url: string
  image?: string
  type?: 'article' | 'webpage' | 'product' | 'faq'
  author?: string
  datePublished?: string
  dateModified?: string
  keywords?: string[]
  category?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface BreadcrumbItem {
  name: string
  url: string
}

/**
 * Generate WebPage Schema
 */
export function generateWebPageSchema(metadata: PageMetadata) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: metadata.title,
    description: metadata.description,
    url: metadata.url,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://achievepack.com/#website',
      url: 'https://achievepack.com',
      name: 'AchievePack',
      publisher: {
        '@id': 'https://achievepack.com/#organization'
      }
    },
    about: {
      '@type': 'Thing',
      name: metadata.category || 'Sustainable Packaging'
    },
    publisher: {
      '@id': 'https://achievepack.com/#organization'
    }
  }

  if (metadata.image) {
    schema.primaryImageOfPage = {
      '@type': 'ImageObject',
      url: metadata.image,
      width: 1200,
      height: 630
    }
  }

  if (metadata.datePublished) {
    schema.datePublished = metadata.datePublished
  }

  if (metadata.dateModified) {
    schema.dateModified = metadata.dateModified
  }

  if (metadata.keywords && metadata.keywords.length > 0) {
    schema.keywords = metadata.keywords.join(', ')
  }

  return schema
}

/**
 * Generate Article Schema (for blog posts and detailed content pages)
 */
export function generateArticleSchema(metadata: PageMetadata) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    description: metadata.description,
    url: metadata.url,
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: metadata.author || 'Ryan Wong',
      url: 'https://achievepack.com/team/ryan-wong',
      jobTitle: 'Sustainable Packaging Expert'
    },
    publisher: organizationEntity,
    datePublished: metadata.datePublished || new Date().toISOString(),
    dateModified: metadata.dateModified || new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': metadata.url
    }
  }

  if (metadata.image) {
    schema.image = {
      '@type': 'ImageObject',
      url: metadata.image,
      width: 1200,
      height: 630
    }
  }

  if (metadata.keywords && metadata.keywords.length > 0) {
    schema.keywords = metadata.keywords.join(', ')
  }

  return schema
}

/**
 * Generate FAQ Schema
 */
export function generateFAQSchema(faqs: FAQItem[], pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

/**
 * Generate Breadcrumb Schema
 */
export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

/**
 * Generate Product Schema (for material/packaging pages)
 */
export function generateProductSchema(product: {
  name: string
  description: string
  image?: string
  url: string
  brand?: string
  category?: string
  features?: string[]
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: product.url,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'AchievePack'
    },
    manufacturer: organizationEntity
  }

  if (product.image) {
    schema.image = product.image
  }

  if (product.category) {
    schema.category = product.category
  }

  if (product.features && product.features.length > 0) {
    schema.additionalProperty = product.features.map(feature => ({
      '@type': 'PropertyValue',
      name: 'Feature',
      value: feature
    }))
  }

  return schema
}

/**
 * Generate HowTo Schema (for knowledge base articles)
 */
export function generateHowToSchema(howto: {
  name: string
  description: string
  url: string
  image?: string
  totalTime?: string
  steps: Array<{
    name: string
    text: string
    image?: string
  }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howto.name,
    description: howto.description,
    url: howto.url,
    image: howto.image,
    totalTime: howto.totalTime,
    step: howto.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image
    }))
  }
}

/**
 * Generate complete schema bundle for a page
 */
export function generatePageSchemaBundle(options: {
  pageMetadata: PageMetadata
  breadcrumbs?: BreadcrumbItem[]
  faqs?: FAQItem[]
  product?: any
  howto?: any
}) {
  const schemas: any[] = []

  // Always include organization
  schemas.push(organizationEntity)

  // Add page schema
  if (options.pageMetadata.type === 'article') {
    schemas.push(generateArticleSchema(options.pageMetadata))
  } else {
    schemas.push(generateWebPageSchema(options.pageMetadata))
  }

  // Add breadcrumbs
  if (options.breadcrumbs && options.breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(options.breadcrumbs))
  }

  // Add FAQs
  if (options.faqs && options.faqs.length > 0) {
    schemas.push(generateFAQSchema(options.faqs, options.pageMetadata.url))
  }

  // Add product
  if (options.product) {
    schemas.push(generateProductSchema(options.product))
  }

  // Add how-to
  if (options.howto) {
    schemas.push(generateHowToSchema(options.howto))
  }

  return schemas
}

/**
 * Convert schema to JSON-LD script tag content
 */
export function schemaToJsonLd(schema: any): string {
  return JSON.stringify(schema, null, 0)
}

/**
 * Generate all schemas for a page and return as array of script tag contents
 */
export function generateAllSchemas(options: {
  pageMetadata: PageMetadata
  breadcrumbs?: BreadcrumbItem[]
  faqs?: FAQItem[]
  product?: any
  howto?: any
}): string[] {
  const schemas = generatePageSchemaBundle(options)
  return schemas.map(schema => schemaToJsonLd(schema))
}
