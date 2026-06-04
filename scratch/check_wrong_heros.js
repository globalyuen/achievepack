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

const WRONG_IMAGE = 'a_compostable_packaging_pouch_achieve_pack_2674607.webp';

async function check() {
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('id, slug, title, image_url, content');
    
  if (error) {
    console.error(error);
    return;
  }
  
  console.log(`Fetched ${posts.length} database posts.`);
  const wrongHeros = [];
  posts.forEach(p => {
    if (p.image_url && p.image_url.includes(WRONG_IMAGE)) {
      wrongHeros.push({
        id: p.id,
        slug: p.slug,
        title: p.title,
        image_url: p.image_url
      });
    }
  });
  
  console.log(`Found ${wrongHeros.length} database posts with the wrong hero image:`);
  console.log(JSON.stringify(wrongHeros, null, 2));
}

check();
