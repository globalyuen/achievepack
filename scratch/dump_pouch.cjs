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

  if (post) {
    const postStr = JSON.stringify(post.content)
    let pos = 0
    while (true) {
      pos = postStr.indexOf('text-[#10b981]', pos)
      if (pos === -1) break
      console.log('--- Match ---')
      console.log(postStr.slice(Math.max(0, pos - 150), pos + 150))
      pos += 14
    }
  } else {
    console.log('Post not found.')
  }
}

run()
