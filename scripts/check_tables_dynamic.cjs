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
    if (line.includes('SUPABASE_SERVICE_KEY')) {
      envConfig['SERVICE_KEY'] = line.split('=')[1].trim().replace(/['"]/g, '')
    }
    if (line.includes('VITE_SUPABASE_ANON_KEY') && !envConfig['SERVICE_KEY']) {
      envConfig['SERVICE_KEY'] = line.split('=')[1].trim().replace(/['"]/g, '')
    }
  })
}

const supabaseUrl = envConfig['URL'] || ''
const supabaseKey = envConfig['SERVICE_KEY'] || ''

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function check() {
  const tables = ['pouch_seo_blog', 'achievepack_seo_blog', 'achieve_pack_blog']
  for (const t of tables) {
    const { error } = await supabase.from(t).select('id').limit(1)
    console.log(`Table "${t}":`, error ? `Not found (${error.message})` : 'Exists!')
  }
}

check()
