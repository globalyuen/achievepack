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
  })
}

const supabaseUrl = envConfig['URL'] || ''
const supabaseKey = envConfig['SERVICE_KEY'] || ''

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function testRpc() {
  const rpcs = ['exec_sql', 'run_sql', 'execute_sql', 'sql']
  for (const rpc of rpcs) {
    try {
      const { data, error } = await supabase.rpc(rpc, { 
        query: 'SELECT 1;', 
        sql: 'SELECT 1;',
        sql_query: 'SELECT 1;'
      })
      if (error) {
        console.log(`❌ RPC ${rpc} failed: ${error.message} (code: ${error.code})`)
      } else {
        console.log(`✅ RPC ${rpc} works! Data:`, data)
        return
      }
    } catch (e) {
      console.log(`❌ Exception with RPC ${rpc}:`, e.message)
    }
  }
}

testRpc()
