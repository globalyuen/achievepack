const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

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

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function run() {
  const { data, error } = await supabase
    .from('pouch_seo_blog')
    .select('slug, title, image_url, content')
  
  if (error) {
    console.error(error)
    process.exit(1)
  }

  console.log(`Total blogs: ${data.length}`)
  const grokBlogs = data.filter(b => {
    // Autopilot posts have content.jsonLd or typical structure, or we can regenerate images for all of them
    // Let's filter by image_url pointing to heros/
    return b.image_url && b.image_url.includes('/imgs/blog/heros/')
  })

  console.log(`Blogs with hero images in /imgs/blog/heros/: ${grokBlogs.length}`)
  grokBlogs.forEach(b => {
    console.log(`- Slug: ${b.slug} | Image: ${b.image_url}`)
  })
}

run()
