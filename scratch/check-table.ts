import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
)

async function checkTable() {
  const { data, error } = await supabase
    .from('pouch_seo_blog')
    .select('id')
    .limit(1)

  if (error) {
    console.error('❌ Table error:', error.message)
    
    console.log('Attempting to create table...')
    const { error: createError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS pouch_seo_blog (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          slug TEXT UNIQUE NOT NULL,
          title TEXT NOT NULL,
          excerpt TEXT,
          content JSONB NOT NULL,
          category TEXT DEFAULT 'Packaging Guide',
          image_url TEXT,
          meta_title TEXT,
          meta_description TEXT,
          source_url TEXT,
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW()
        );
      `
    })
    if (createError) console.error('❌ Failed to create table:', createError.message)
    else console.log('✅ Table created (or already exists).')
  } else {
    console.log('✅ Table exists and is accessible.')
  }
}

checkTable()
