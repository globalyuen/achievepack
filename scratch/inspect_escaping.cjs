const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

// Load env variables from .env.local
const envPath = path.resolve(__dirname, '../.env.local')
let envConfig = {}
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8')
  envContent.split('\n').forEach(line => {
    if (line.includes('VITE_SUPABASE_URL')) {
      envConfig['URL'] = line.split('=')[1].trim().replace(/['"]/g, '')
    }
    if (line.includes('VITE_SUPABASE_ANON_KEY')) {
      envConfig['ANON_KEY'] = line.split('=')[1].trim().replace(/['"]/g, '')
    }
  })
}

const supabaseUrl = envConfig['URL'] || ''
const supabaseKey = envConfig['ANON_KEY'] || ''

const supabase = createClient(supabaseUrl, supabaseKey)

async function run() {
  const slug = 'recyclable-high-barrier-nuts-pouch'
  const { data: post } = await supabase
    .from('pouch_seo_blog')
    .select('*')
    .eq('slug', slug)
    .single()

  if (post && post.content && post.content.sections) {
    const rawContent = post.content.sections[0].content
    console.log('Raw content characters:')
    console.log(rawContent.slice(rawContent.indexOf('curbside-recyclable'), rawContent.indexOf('curbside-recyclable') + 200))
  } else {
    console.log('Post or sections not found.')
  }
}

run()
