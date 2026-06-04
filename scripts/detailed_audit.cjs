const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
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

const publicInfographicsDir = path.join(__dirname, '..', 'public', 'imgs', 'infographics');

async function audit() {
  console.log("=== AUDITING DYNAMIC SUPABASE BLOG POSTS ===");
  const missingDynamic = [];
  const existingDynamicCount = 0;

  for (const slug of targetSlugs) {
    const { data, error } = await supabase
      .from('pouch_seo_blog')
      .select('title, slug, content')
      .eq('slug', slug)
      .single();
    
    if (error) {
      console.error(`Error loading slug ${slug}:`, error.message);
      continue;
    }

    const sections = data.content?.sections || [];
    console.log(`Auditing slug: ${slug} (${sections.length} sections)`);

    sections.forEach((sec, idx) => {
      const paragraphs = sec.paragraphs || [];
      paragraphs.forEach((p, pIdx) => {
        const imageIndex = idx * 2 + pIdx;
        const filename = imageIndex === 0 
          ? `${slug}-infographic.png` 
          : `${slug}-infographic-${imageIndex + 1}.png`;
        
        const fullPath = path.join(publicInfographicsDir, filename);
        const exists = fs.existsSync(fullPath);
        
        console.log(`  - Section ${idx}, Paragraph ${pIdx} (Image index: ${imageIndex}): filename: ${filename}, exists: ${exists}`);
        
        if (!exists) {
          missingDynamic.push({
            slug,
            title: data.title,
            imageIndex,
            filename,
            prompt: p.image_prompt,
            sectionTitle: sec.title
          });
        }
      });
    });
  }

  console.log("\n=== AUDITING STATIC BLOG FILES ===");
  // Let's scan src/pages/pouch/blog/ directory for static page components
  const blogDir = path.join(__dirname, '..', 'src', 'pages', 'pouch', 'blog');
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.tsx') && f !== 'PouchBlogArticlePage.tsx');
  const missingStatic = [];

  for (const file of files) {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Check if the file imports BlogArticleTemplate and overrides useSeoBlogOverride
    // Let's parse files that might have sections defining paragraphs with image_prompt
    // We can evaluate if they define dynamic sections locally
    // For simplicity, let's look for pattern: paragraphs: [ ... ]
    if (content.includes('paragraphs: [')) {
      console.log(`File ${file} has static paragraphs definition. Auditing...`);
      // We can also infer the slug by looking at the useSeoBlogOverride('slug')
      const slugMatch = content.match(/useSeoBlogOverride\(['"]([^'"]+)['"]\)/);
      if (slugMatch) {
        const slug = slugMatch[1];
        console.log(`  Resolved slug: ${slug}`);
        // Let's inspect sections in this file
        // To be safe, let's write a simple pattern match or parse the file sections if they are exported/defined
      }
    }
  }

  console.log(`\nAudit finished! Found ${missingDynamic.length} missing dynamic images.`);
  fs.writeFileSync(path.join(__dirname, 'audit_report.json'), JSON.stringify({ missingDynamic, missingStatic }, null, 2));
}

audit();
