const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = 'https://ofobzjpexljkrqsgdgua.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mb2J6anBleGxqa3Jxc2dkZ3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxODAwODcsImV4cCI6MjA4MDc1NjA4N30.n6RbN_1139TDXBoXQTvCRvucFgB1XNvKCkmKMedpKWs';

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrate() {
  const sql = fs.readFileSync('supabase/migrations/20250107_mini_sites_cms.sql', 'utf8');
  
  // Split into statements
  const statements = sql.split(';').filter(s => s.trim());
  
  console.log('Executing migration...');
  
  for (let i = 0; i < statements.length; i++) {
    const stmt = statements[i].trim();
    if (!stmt) continue;
    
    try {
      const { data, error } = await supabase.rpc('exec_sql', { sql_query: stmt + ';' });
      if (error) {
        console.log(`Statement ${i + 1}: ${error.message}`);
      } else {
        console.log(`Statement ${i + 1}: OK`);
      }
    } catch (e) {
      console.log(`Statement ${i + 1}: ${e.message}`);
    }
  }
}

migrate();
