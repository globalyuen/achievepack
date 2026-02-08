/**
 * Dual-Domain Detection & Brand Configuration System
 * Supports: achievepack.com (B2B) & pouch.eco (B2C)
 * 
 * CRITICAL: This file enables independent SEO for two domains in one codebase
 */

export type DomainType = 'pouch' | 'achievepack'

/**
 * Detect current domain based on hostname
 * Returns 'pouch' for pouch.eco, 'achievepack' for achievepack.com
 */
export const getDomain = (): DomainType => {
  if (typeof window === 'undefined') return 'achievepack' // SSR fallback
  const hostname = window.location.hostname
  
  // Check for pouch.eco (including www.pouch.eco and localhost testing)
  if (hostname.includes('pouch.eco') || hostname.includes('pouch-eco')) {
    return 'pouch'
  }
  
  return 'achievepack'
}

/**
 * Helper functions for domain checks
 */
export const isPouch = (): boolean => getDomain() === 'pouch'
export const isAchievePack = (): boolean => getDomain() === 'achievepack'

/**
 * Brand Configuration Interface
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
  ctaButtonSecondary: string
  whatsapp: string
}

/**
 * Get brand configuration for current domain
 */
export const getBrandConfig = (): BrandConfig => {
  const configs: Record<DomainType, BrandConfig> = {
    pouch: {
      name: 'Pouch.eco',
      domain: 'pouch.eco',
      email: 'cs@pouch.eco',
      phone: '+1 (626) 476-0958',
      logoPath: '/eco-logo/ep-logo.svg',
      faviconPath: '/pouch-eco-favicon.svg',
      primaryColor: '#10b981', // Green (eco-friendly)
      secondaryColor: '#059669', // Darker green
      accentColor: '#D4FF00', // Neon Yellow (from Neo-Brutalist design)
      tone: 'friendly',
      targetAudience: 'B2C',
      tagline: 'Eco Packaging for Startups',
      description: 'Beautiful compostable packaging from just 500 units. Perfect for small brands starting their sustainability journey.',
      moqRange: 'From 500 units',
      priceRange: '$0.50 - $1.50/bag',
      ctaButton: 'Shop Starter Kits',
      ctaButtonSecondary: 'Get Free Sample',
      whatsapp: 'https://wa.me/16264760958'
    },
    achievepack: {
      name: 'Achieve Pack',
      domain: 'achievepack.com',
      email: 'ryan@achievepack.com',
      phone: '+1 (626) 476-0958',
      logoPath: '/ap-logo.svg',
      faviconPath: '/favicon.ico',
      primaryColor: '#8b5cf6', // Purple (professional)
      secondaryColor: '#7c3aed', // Darker purple
      accentColor: '#06b6d4', // Cyan
      tone: 'professional',
      targetAudience: 'B2B',
      tagline: 'Sustainable Packaging Solutions',
      description: 'Enterprise-grade compostable packaging for brands that scale. Custom solutions with volume pricing.',
      moqRange: 'Optimized for 10,000+ units',
      priceRange: 'Volume pricing available',
      ctaButton: 'Request Quote',
      ctaButtonSecondary: 'Book Consultation',
      whatsapp: 'https://wa.me/16264760958'
    }
  }
  
  return configs[getDomain()]
}

/**
 * Get domain-specific base URL (for canonical URLs and SEO)
 */
export const getBaseUrl = (): string => {
  const domain = getDomain()
  
  // In development, use localhost
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return window.location.origin
  }
  
  return domain === 'pouch' ? 'https://pouch.eco' : 'https://achievepack.com'
}

/**
 * Get contact email for current domain
 */
export const getContactEmail = (): string => {
  return getBrandConfig().email
}

/**
 * Get contact phone for current domain
 */
export const getContactPhone = (): string => {
  return getBrandConfig().phone
}

/**
 * Get WhatsApp link for current domain
 */
export const getWhatsAppLink = (): string => {
  return getBrandConfig().whatsapp
}

/**
 * Check if current environment is production
 */
export const isProduction = (): boolean => {
  if (typeof window === 'undefined') return false
  const hostname = window.location.hostname
  return hostname.includes('pouch.eco') || hostname.includes('achievepack.com')
}

/**
 * Get domain-specific content with 30%+ differentiation
 * 
 * This function helps create content that is 70% shared, 30% unique
 * to avoid duplicate content penalties from Google
 */
export interface DomainContent {
  headline: string
  subheadline: string
  cta: string
  moq: string
  pricing: string
  tone: string
}

export const getDomainContent = (contentKey: string): DomainContent => {
  const domain = getDomain()
  const brand = getBrandConfig()
  
  // Default content structure (can be customized per page)
  const content: Record<DomainType, DomainContent> = {
    pouch: {
      headline: 'Start Your Eco Brand with Just 500 Bags',
      subheadline: 'Perfect for small batches and product testing',
      cta: brand.ctaButton,
      moq: brand.moqRange,
      pricing: brand.priceRange,
      tone: 'Let\'s make your brand stand out!'
    },
    achievepack: {
      headline: 'Enterprise Sustainable Packaging Solutions',
      subheadline: 'Custom solutions for brands that scale',
      cta: brand.ctaButton,
      moq: brand.moqRange,
      pricing: brand.priceRange,
      tone: 'Partner with us for your packaging needs'
    }
  }
  
  return content[domain]
}

/**
 * Get Calendly link (domain-specific if needed)
 */
export const getCalendlyLink = (): string => {
  // Both domains use same Calendly for now
  return 'https://calendly.com/30-min-free-packaging-consultancy'
}

/**
 * Get Store link (domain-specific)
 */
export const getStoreLink = (): string => {
  return '/store'
}

/**
 * Get domain-specific navigation structure
 */
export interface NavItem {
  label: string
  href: string
}

export const getNavigation = (): NavItem[] => {
  const domain = getDomain()
  
  // Common navigation items (can be customized)
  const nav = {
    pouch: [
      { label: 'Shop', href: '/store' },
      { label: 'Materials', href: '/materials' },
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Contact', href: '/contact' }
    ],
    achievepack: [
      { label: 'Store', href: '/store' },
      { label: 'Learn', href: '/learn' },
      { label: 'Blog', href: '/blog' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ]
  }
  
  return nav[domain]
}
