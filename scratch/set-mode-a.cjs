const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase URL or Key");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log("📡 Syncing remote configuration to Mode A (Manual Approval)...");
  
  // 1. Fetch latest config
  const { data: dbData, error: dbError } = await supabase
    .from('webhook_logs')
    .select('*')
    .eq('source', 'soro_autopilot_config')
    .order('created_at', { ascending: false })
    .limit(1);

  if (dbError) {
    console.error("❌ Error fetching latest config:", dbError);
    process.exit(1);
  }

  let config = { autopilotMode: 'A', keywordBank: [], logs: [] };
  if (dbData && dbData.length > 0 && dbData[0].raw_data) {
    config = dbData[0].raw_data;
  }

  // Update mode to A
  config.autopilotMode = 'A';
  
  // Update keywordBank structure if empty or keep it synced from local state
  const localStatePath = path.join(__dirname, '../src/data/autopilot_state.json');
  if (fs.existsSync(localStatePath)) {
    const localState = JSON.parse(fs.readFileSync(localStatePath, 'utf-8'));
    if (localState && localState.keywordBank) {
      config.keywordBank = localState.keywordBank;
    }
  }

  // Insert updated configuration
  const { error: insertError } = await supabase.from('webhook_logs').insert([{
    source: 'soro_autopilot_config',
    status: 'Config',
    message: 'Syncing Autopilot to Manual Mode A via CLI script',
    raw_data: config
  }]);

  if (insertError) {
    console.error("❌ Error inserting config:", insertError);
    process.exit(1);
  }

  console.log("✅ Remote Soro config successfully set to Mode A in Supabase!");
}

run();
