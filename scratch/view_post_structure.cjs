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
  const { data, error } = await supabase
    .from('pouch_seo_blog')
    .select('slug, content');

  if (error) {
    console.error(error);
    return;
  }
  
  console.log(`Total rows: ${data.length}`);
  let countPouch = 0;
  let countAP = 0;
  let both = 0;
  let neither = 0;
  
  data.forEach(row => {
    const hasPouch = !!(row.content && row.content.pouch);
    const hasAP = !!(row.content && row.content.achievepack);
    if (hasPouch) countPouch++;
    if (hasAP) countAP++;
    if (hasPouch && hasAP) both++;
    if (!hasPouch && !hasAP) neither++;
  });
  
  console.log(`Rows with content.pouch: ${countPouch}`);
  console.log(`Rows with content.achievepack: ${countAP}`);
  console.log(`Rows with both: ${both}`);
  console.log(`Rows with neither: ${neither}`);
  
  console.log("\nSample slugs of rows with neither pouch nor achievepack:");
  data.filter(row => !(row.content && row.content.pouch) && !(row.content && row.content.achievepack)).slice(0, 10).forEach(row => {
    console.log(` - ${row.slug}`);
  });
}
check();
