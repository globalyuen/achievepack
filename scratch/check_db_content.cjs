const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

let sbUrl = '';
let anonKey = '';

try {
  const envContent = fs.readFileSync('.env', 'utf8');
  envContent.split('\n').forEach(line => {
    if (line.startsWith('VITE_SUPABASE_URL=')) {
      sbUrl = line.split('=')[1].trim().replace(/['"]/g, '');
    }
    if (line.startsWith('VITE_SUPABASE_ANON_KEY=')) {
      anonKey = line.split('=')[1].trim().replace(/['"]/g, '');
    }
  });
} catch (e) {
  console.error('Could not read .env file:', e);
}

if (!sbUrl || !anonKey) {
  console.error('Missing Supabase config!');
  process.exit(1);
}

const supabase = createClient(sbUrl, anonKey);

async function check() {
  const { data, error } = await supabase.from('pouch_seo_blog').select('slug, content');
  if (error) {
    console.error(error);
    return;
  }
  console.log(`Total rows in pouch_seo_blog: ${data.length}`);
  data.slice(0, 10).forEach(row => {
    const keys = row.content ? Object.keys(row.content) : [];
    console.log(`Slug: ${row.slug}, Content keys:`, keys);
  });
}
check();
