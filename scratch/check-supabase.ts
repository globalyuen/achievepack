import * as dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'

dotenv.config({ path: '.env.local' })

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.VITE_SUPABASE_ANON_KEY || ''
)

async function checkData() {
  const { data, error } = await supabase
    .from('pouch_seo_blog')
    .select('slug, title')

  if (error) {
    console.error('Error fetching from Supabase:', error.message)
    return
  }

  console.log(`Found ${data.length} records in pouch_seo_blog`)
  console.log(data)
}

checkData()
