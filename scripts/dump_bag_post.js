import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, '../.env.local');
let envConfig = {};
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const parts = line.split('=');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join('=').trim().replace(/['"]/g, '');
      if (key === 'VITE_SUPABASE_URL') envConfig['URL'] = val;
      if (key === 'SUPABASE_SERVICE_KEY') envConfig['SERVICE_KEY'] = val;
    }
  });
}

const supabaseUrl = envConfig['URL'] || '';
const supabaseKey = envConfig['SERVICE_KEY'] || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  const { data, error } = await supabase
    .from('pouch_seo_blog')
    .select('*')
    .eq('slug', 'sourcing-compostable-coffee-bags')
    .single();

  if (error) {
    console.error('Error fetching blog post:', error);
  } else {
    fs.writeFileSync(
      path.resolve(__dirname, 'sourcing-compostable-coffee-bags.json'),
      JSON.stringify(data, null, 2),
      'utf8'
    );
    console.log('Successfully wrote post data to sourcing-compostable-coffee-bags.json');
  }
}

check();
