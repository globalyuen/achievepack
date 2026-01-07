import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = 'https://ofobzjpexljkrqsgdgua.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mb2J6anBleGxqa3Jxc2dkZ3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxODAwODcsImV4cCI6MjA4MDc1NjA4N30.n6RbN_1139TDXBoXQTvCRvucFgB1XNvKCkmKMedpKWs';

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrate() {
  const sql = fs.readFileSync('supabase/migrations/20250107_mini_sites_cms.sql', 'utf8');
  console.log('Attempting to execute migration via RPC...');
  
  const { data, error } = await supabase.rpc('exec_sql', { sql_query: sql });
  
  if (error) {
    console.log('RPC not available (expected). Need to use Supabase Dashboard SQL Editor.');
    console.log('Error:', error.message);
    console.log('\n--- SQL to execute manually ---');
    console.log('Open: https://supabase.com/dashboard/project/ofobzjpexljkrqsgdgua/sql');
    console.log('Then paste the migration SQL from supabase/migrations/20250107_mini_sites_cms.sql');
  } else {
    console.log('Migration executed successfully!');
  }
}

migrate();
