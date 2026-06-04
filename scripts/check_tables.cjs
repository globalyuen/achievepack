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

console.log('Supabase URL:', supabaseUrl)
console.log('Supabase Key exists:', !!supabaseKey)

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function check() {
  const tablesToCheck = [
    'kid_bookkeeping_transactions',
    'kid_bookkeeping_businesses',
    'kid_bookkeeping_categories',
    'bookkeeping_transactions',
    'bookkeeping_businesses',
    'bookkeeping_categories'
  ]

  for (const table of tablesToCheck) {
    try {
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .limit(1)
      if (error) {
        console.log(`❌ Table ${table} check failed: ${error.message}`)
      } else {
        console.log(`✅ Table ${table} exists! Data:`, data)
      }
    } catch (e) {
      console.log(`❌ Exception checking ${table}:`, e.message)
    }
  }
}

check()
