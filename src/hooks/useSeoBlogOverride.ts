import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

const supabase = createClient(supabaseUrl, supabaseKey)

export function useSeoBlogOverride(slug: string) {
  const [override, setOverride] = useState<any>(null)

  useEffect(() => {
    async function fetchOverride() {
      if (!slug) return
      try {
        const { data, error } = await supabase
          .from('pouch_seo_blog')
          .select('*')
          .eq('slug', slug)
          .maybeSingle()
        
        if (error) {
          console.error(`Error checking override for ${slug}:`, error)
          return
        }
        
        if (data) {
          setOverride(data)
        }
      } catch (err) {
        console.error(`Error in useSeoBlogOverride for ${slug}:`, err)
      }
    }
    
    fetchOverride()
  }, [slug])

  return override
}
