import type { VercelRequest, VercelResponse } from '@vercel/node'

/**
 * Dynamic robots.txt API
 * 
 * This API generates domain-specific robots.txt files:
 * - pouch.eco → points to sitemap-pouch.xml
 * - achievepack.com → points to sitemap-achievepack.xml
 * 
 * This ensures independent SEO for both domains
 */

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
