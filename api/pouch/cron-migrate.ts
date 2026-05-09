import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'
import en from '../../src/locales/en.json'

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow Vercel Cron to trigger this in production
  const authHeader = req.headers.authorization
  if (process.env.NODE_ENV === 'production' && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY
  const ADMIN_EMAIL = 'ryan@achievepack.com'

  const seoPages = (en as any).seoPages?.pages || {}
  const pageKeys = Object.keys(seoPages)
  
  let migratedCount = 0
  let errorCount = 0
  const logs: string[] = []

  for (const key of pageKeys) {
    try {
      const page = seoPages[key]
      const slug = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      
      // Transform B2B to B2C
      const b2cTitle = page.heroTitle || page.title || ''
      const b2cExcerpt = page.heroSubtitle || page.introSummary || ''
      
      // Basic section mapping (handles both array and object from en.json)
      const rawSections = page.sections || {}
      const transformedSections = Array.isArray(rawSections) 
        ? rawSections.map((s: any) => ({
            title: s.title || '',
            content: s.content || s.description || '',
            icon: s.icon || 'Package'
          }))
        : Object.keys(rawSections).map(sKey => {
            const s = rawSections[sKey]
            // Merge multiple paragraphs if they exist (p1, p2, etc.)
            const combinedContent = Object.keys(s)
              .filter(k => k.startsWith('p'))
              .map(k => s[k])
              .join('\n\n') || s.desc || s.description || s.content || ''
              
            return {
              title: s.title || sKey.replace(/([A-Z])/g, ' $1').trim(),
              content: combinedContent,
              icon: s.icon || 'Package'
            }
          })

      const { error } = await supabase
        .from('pouch_seo_blog')
        .upsert({
          slug,
          title: b2cTitle,
          excerpt: b2cExcerpt,
          content: {
            sections: transformedSections,
            faqs: page.faqs || [],
            cta: page.cta || {}
          },
          category: page.category || 'Packaging Guide',
          published_at: new Date().toISOString(),
          image_url: page.heroImage || null,
          meta_title: page.title || b2cTitle,
          meta_description: page.description || b2cExcerpt,
          source_url: `https://achievepack.com/${slug}`
        }, { onConflict: 'slug' })

      if (error) throw error
      migratedCount++
    } catch (err: any) {
      errorCount++
      logs.push(`Error migrating ${key}: ${err.message}`)
    }
  }

  const report = {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    pagesProcessed: pageKeys.length,
    migratedCount,
    errorCount,
    status: errorCount === 0 ? 'SUCCESS' : 'PARTIAL_FAILURE',
    slugs: pageKeys.map(k => k.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()),
    logs
  }

  const emailContent = {
    sender: { name: 'Pouch Migration Bot', email: 'bot@pouch.eco' },
    to: [{ email: ADMIN_EMAIL, name: 'Admin' }],
    subject: `🚀 Hourly SEO Migration Report: ${report.date} ${report.time}`,
    htmlContent: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 4px solid black; padding: 20px;">
        <h1 style="text-transform: uppercase; font-weight: 900;">Migration Status: ${report.status}</h1>
        <hr style="border: 2px solid black;"/>
        <p><strong>Run Time:</strong> ${report.date} ${report.time}</p>
        <p><strong>Total Pages Processed:</strong> ${report.pagesProcessed}</p>
        <p><strong>Successfully Migrated/Updated:</strong> ${report.migratedCount}</p>
        <p><strong>Errors:</strong> ${report.errorCount}</p>
        
        <div style="background: #f3f4f6; padding: 15px; border: 2px solid black; margin-top: 20px;">
          <h3 style="margin:0;">PAGES CREATED/UPDATED:</h3>
          <p style="font-size: 11px; color: #444;">${report.slugs.join(', ')}</p>
        </div>

        ${report.logs.length > 0 ? `
          <div style="background: #fee2e2; padding: 15px; border: 2px solid #ef4444; margin-top: 20px;">
            <h3 style="margin:0; color: #b91c1c;">ERRORS:</h3>
            <ul style="font-size: 12px;">
              ${report.logs.map(log => `<li>${log}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <div style="background: #D4FF00; padding: 15px; border: 2px solid black; margin-top: 20px;">
          <h3 style="margin:0;">PREVIEW:</h3>
          <p>Check the live articles at <a href="https://pouch.eco/blog">pouch.eco/blog</a></p>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #666;">This job now runs EVERY HOUR to ensure content parity.</p>
      </div>
    `
  }

  try {
    if (BREVO_API_KEY) {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json'
        },
        body: JSON.stringify(emailContent)
      })
    }
    return res.status(200).json({ success: true, report })
  } catch (error: any) {
    return res.status(500).json({ error: error.message, report })
  }
}
