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
  console.log('Testing insert to webhook_logs...');
  const { data: insData, error: insError } = await supabase
    .from('webhook_logs')
    .insert([{
      source: 'soro_autopilot_config',
      status: 'Config',
      message: 'Test insert from script',
      raw_data: { test: true }
    }])
    .select();
  
  if (insError) {
    console.error('Insert failed:', insError);
  } else {
    console.log('Insert succeeded! Inserted row:', insData);
  }

  const { data, error } = await supabase
    .from('webhook_logs')
    .select('*')
    .eq('source', 'soro_autopilot_config')
    .order('created_at', { ascending: false })
    .limit(5)
  
  if (error) {
    console.error('Error fetching webhook_logs:', error)
  } else {
    console.log('webhook_logs count:', data ? data.length : 0)
    if (data && data.length > 0) {
      console.log('Latest log keywordBank:', data[0].raw_data.keywordBank)
    }
  }
}

test()
