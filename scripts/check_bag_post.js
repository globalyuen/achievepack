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

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

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
    console.log('--- BLOG POST DETAILS ---');
    console.log('Title:', data.title);
    console.log('Slug:', data.slug);
    console.log('Image URL:', data.image_url);
    console.log('Video URL:', data.video_url);
    console.log('Content Keys:', Object.keys(data.content || {}));
    console.log('Content Video URL:', data.content?.video_url);
    console.log('Content Image URL:', data.content?.image_url);
    console.log('Content Hero Image:', data.content?.hero_image);
    console.log('Sections:');
    if (data.content && data.content.sections) {
      data.content.sections.forEach((sec, idx) => {
        console.log(`- Section ${idx + 1}:`, sec.heading);
        if (sec.paragraphs) {
          sec.paragraphs.forEach((p, pIdx) => {
            if (p.includes('<img') || p.includes('<video') || p.includes('video') || p.includes('img')) {
              console.log(`  Paragraph ${pIdx + 1} contains media/tags:`, p.substring(0, 100));
            }
          });
        }
      });
    }
  }
}

check();
