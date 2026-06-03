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
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('id, slug, title')
    .eq('slug', slug)

  if (error) {
    console.error(error)
  } else {
    console.log(`Found ${posts.length} rows for slug "${slug}":`)
    console.log(posts)
  }
}

run()
