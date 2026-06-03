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

async function test() {
  const { data, error } = await supabase
    .from('pouch_seo_blog')
    .select('title, slug, content')
  
  if (error) {
    console.error('Error:', error)
    return
  }

  console.log(`Found ${data.length} articles in pouch_seo_blog:`)
  data.forEach(d => {
    const hasTakeaways = JSON.stringify(d.content).includes('Key Sourcing Takeaways')
    const hasTable = JSON.stringify(d.content).includes('Technical-to-Purchasing') || JSON.stringify(d.content).includes('<table')
    const hasInfographic = JSON.stringify(d.content).includes('infographics') || JSON.stringify(d.content).includes('infographic')
    console.log(`- ${d.title} (${d.slug}): hasTakeaways=${hasTakeaways}, hasTable=${hasTable}, hasInfographic=${hasInfographic}`)
  })
}

test()
