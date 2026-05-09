import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
)

async function listTables() {
  const { data, error } = await supabase.rpc('get_tables_info') // Try a likely RPC
  if (error) {
    console.log('RPC get_tables_info failed, trying manual query...')
    const { data: data2, error: error2 } = await supabase
      .from('pouch_seo_blog')
      .select('count')
      .limit(1)
    
    if (error2) console.error('Table pouch_seo_blog still not found:', error2.message)
    else console.log('Table pouch_seo_blog found!')
  } else {
    console.log('Tables:', data)
  }
}

listTables()
