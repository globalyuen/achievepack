import { createClient } from '@supabase/supabase-js'
import en from '../src/locales/en.json'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: '.env.local' })

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
)

async function migrate() {
  console.log('🚀 Starting manual migration...')
  
  const seoPages = (en as any).seoPages?.pages || {}
  const pageKeys = Object.keys(seoPages)
  
  console.log(`Found ${pageKeys.length} pages to migrate.`)

  let migratedCount = 0
  let errorCount = 0

  for (const key of pageKeys) {
    try {
      const page = seoPages[key]
      const slug = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      
      const b2cTitle = page.heroTitle || page.title || ''
      const b2cExcerpt = page.heroSubtitle || page.introSummary || ''
      
      const rawSections = page.sections || {}
      const transformedSections = Array.isArray(rawSections) 
        ? rawSections.map((s: any) => ({
            title: s.title || '',
            content: s.content || s.description || '',
            icon: s.icon || 'Package'
          }))
        : Object.keys(rawSections).map(sKey => {
            const s = rawSections[sKey]
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
          image_url: page.heroImage || null,
          meta_title: page.title || b2cTitle,
          meta_description: page.description || b2cExcerpt,
          source_url: `https://achievepack.com/${slug}`
        }, { onConflict: 'slug' })

      if (error) throw error
      migratedCount++
      if (migratedCount % 10 === 0) console.log(`Migrated ${migratedCount} pages...`)
    } catch (err: any) {
      errorCount++
      console.error(`Error migrating ${key}: ${err.message}`)
    }
  }

  console.log(`✅ Finished! Migrated: ${migratedCount}, Errors: ${errorCount}`)
}

migrate()
