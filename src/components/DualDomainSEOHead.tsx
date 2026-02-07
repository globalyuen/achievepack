import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { getDomain, getBrandConfig, getBaseUrl } from '../utils/domain'

/**
 * Dual-Domain SEO Head Component
 * 
 * CRITICAL: This component ensures independent SEO for pouch.eco and achievepack.com
 * 
 * Key Features:
 * - Independent canonical URLs (NEVER cross-reference domains)
 * - Domain-specific meta tags
 * - Automatic brand name in title
 * - Domain-specific OG images
 * - No alternate hreflang tags (to avoid confusing Google)
 */

interface DualDomainSEOHeadProps {
  /** Page title (will be appended with brand name) */
  title: string
  
  /** Meta description (max 160 characters recommended) */
  description: string
  
  /** Keywords for meta keywords tag */
  keywords?: string[]
  
  /** OG Image URL (can be relative or absolute) */
  ogImage?: string
  
  /** Schema.org type */
  schemaType?: 'Article' | 'Product' | 'WebPage' | 'FAQPage' | 'Service'
  
  /** Custom canonical URL (overrides automatic generation) */
  customCanonical?: string
  
  /** Additional schema data */
  additionalSchema?: any
}

export default function DualDomainSEOHead({
  title,
  description,
  keywords = [],
  ogImage,
  schemaType = 'WebPage',
  customCanonical,
  additionalSchema
}: DualDomainSEOHeadProps) {
  const domain = getDomain()
  const brand = getBrandConfig()
  const baseUrl = getBaseUrl()
  
  // Generate canonical URL based on current domain
  // CRITICAL: This ensures each domain points to itself, NOT to the other domain
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
    if (!ogImage) {
      // Use domain-specific default OG image
      return domain === 'pouch' 
        ? `${baseUrl}/imgs/eco-pouch-og.webp`
        : `${baseUrl}/imgs/achieve-pack-og.webp`
    }
    return ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`
  }, [ogImage, baseUrl, domain])
  
  // Generate basic schema.org data
  const basicSchema = useMemo(() => {
    const schema: any = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      'name': title,
      'description': description,
      'url': canonicalUrl
    }
    
    if (schemaType === 'Article') {
      schema.headline = title
      schema.author = {
        '@type': 'Organization',
        'name': brand.name
      }
      schema.publisher = {
        '@type': 'Organization',
        'name': brand.name,
        'logo': {
          '@type': 'ImageObject',
          'url': `${baseUrl}${brand.logoPath}`
        }
      }
      schema.datePublished = new Date().toISOString()
      schema.dateModified = new Date().toISOString()
    }
    
    if (schemaType === 'Product') {
      schema.brand = {
        '@type': 'Brand',
        'name': brand.name
      }
      schema.offers = {
        '@type': 'Offer',
        'availability': 'https://schema.org/InStock',
        'priceCurrency': 'USD'
      }
    }
    
    // Merge additional schema data
    if (additionalSchema) {
      Object.assign(schema, additionalSchema)
    }
    
    return schema
  }, [title, description, canonicalUrl, schemaType, brand, baseUrl, additionalSchema])
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* CRITICAL: Independent Canonical URL - NEVER cross-reference domains */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* DO NOT add alternate hreflang tags between pouch.eco and achievepack.com */}
      {/* This would signal to Google that they are the same content in different languages */}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={brand.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      
      {/* Domain-specific favicon */}
      <link rel="icon" href={brand.faviconPath} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(basicSchema)}
      </script>
      
      {/* Prevent indexing of duplicate content (if needed) */}
      {/* <meta name="robots" content="index, follow" /> */}
    </Helmet>
  )
}

/**
 * Hook to get current domain info (for use in components)
 */
export const useDomainInfo = () => {
  const domain = getDomain()
  const brand = getBrandConfig()
  const baseUrl = getBaseUrl()
  
  return {
    domain,
    brand,
    baseUrl,
    isPouch: domain === 'pouch',
    isAchievePack: domain === 'achievepack'
  }
}
