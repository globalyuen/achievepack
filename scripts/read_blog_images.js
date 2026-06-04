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

const targetSlugs = [
  'kraft-paper-zipper-doypack',
  'compostable-spouted-baby-puree-bag',
  'recyclable-high-barrier-nuts-pouch',
  'curbside-recyclable-coffee-bag',
  'tuv-backyard-compostable-packaging',
  'high-barrier-retort-pouch',
  'plastic-free-compostable-barrier-pouch',
  'custom-shape-die-cut-pouch',
  'mono-pe-recyclable-food-packaging',
  'compostable-stand-up-pouches-for-snacks',
  'custom-digital-printed-sachets'
];

async function check() {
  const imageReport = [];
  for (const slug of targetSlugs) {
    const { data, error } = await supabase
      .from('pouch_seo_blog')
      .select('title, slug, content')
      .eq('slug', slug)
      .single();
      
    if (error) {
      console.log(`❌ ${slug}: Not found`);
      continue;
    }
    
    const sections = data.content?.sections || [];
    let idx = 0;
    sections.forEach((sec, sIdx) => {
      const paragraphs = sec.paragraphs || [];
      paragraphs.forEach((p, pIdx) => {
        const imgPath = pIdx === 0 
          ? `/imgs/infographics/${slug}-infographic.png` 
          : `/imgs/infographics/${slug}-infographic-${pIdx + 1}.png`;
        const prompt = p.image_prompt || '';
        imageReport.push({
          slug,
          paragraphIndex: pIdx,
          sectionIndex: sIdx,
          path: imgPath,
          prompt
        });
      });
    });
  }
  
  console.log(JSON.stringify(imageReport, null, 2));
}

check();
