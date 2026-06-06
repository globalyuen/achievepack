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

const infographicsDir = path.resolve(__dirname, '../public/imgs/infographics');
const herosDir = path.resolve(__dirname, '../public/imgs/blog/heros');

async function run() {
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('slug, title, image_url, content');

  if (error) {
    console.error(error);
    process.exit(1);
  }

  let missingHeros = 0;
  let missingInfographics = 0;
  const missingInfographicsList = [];

  posts.forEach(post => {
    if (post.content?.approved === false) return; // skip unapproved

    // 1. Check Hero Image
    if (post.image_url) {
      const heroPath = path.join(path.resolve(__dirname, '..'), 'public', post.image_url);
      if (!fs.existsSync(heroPath)) {
        console.log(`Missing Hero: ${post.slug} -> ${post.image_url}`);
        missingHeros++;
      }
    } else {
      console.log(`No Hero Defined: ${post.slug}`);
      missingHeros++;
    }

    // 2. Check Infographics
    if (post.content && post.content.sections) {
      post.content.sections.forEach((sec, sIdx) => {
        if (sec.paragraphs) {
          sec.paragraphs.forEach((p, pIdx) => {
            const globalIdx = sIdx * 2 + pIdx;
            const filename = globalIdx === 0
              ? `${post.slug}-infographic.png`
              : `${post.slug}-infographic-${globalIdx + 1}.png`;
            const filePath = path.join(infographicsDir, filename);

            if (!fs.existsSync(filePath)) {
              console.log(`Missing Infographic: ${post.slug} -> ${filename}`);
              missingInfographics++;
              missingInfographicsList.push({
                slug: post.slug,
                imgIndex: globalIdx,
                filename: filename,
                relPath: `/imgs/infographics/${filename}`,
                imageName: `${post.slug.replace(/-/g, '_')}_infographic${globalIdx > 0 ? '_' + (globalIdx + 1) : ''}`,
                enhancedPrompt: p.image_prompt || ''
              });
            }
          });
        }
      });
    }
  });

  console.log(`\nAudit Complete:`);
  console.log(`Missing Hero Images on Disk: ${missingHeros}`);
  console.log(`Missing Infographic Images on Disk: ${missingInfographics}`);
  
  // Write missing list to scratch for generation if any
  if (missingInfographicsList.length > 0) {
    fs.writeFileSync(
      path.resolve(__dirname, '../scratch/actual_missing_infographics.json'),
      JSON.stringify(missingInfographicsList, null, 2)
    );
    console.log('Saved missing list to scratch/actual_missing_infographics.json');
  }
  
  process.exit(0);
}

run();
