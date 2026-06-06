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

async function run() {
  const fileContent = fs.readFileSync('src/pages/pouch/PouchBlogPage.tsx', 'utf8');
  
  // Extract links like `/blog/slug`
  const regex = /link:\s*['"]\/blog\/([^'"]+)['"]/g;
  const slugs = [];
  let match;
  while ((match = regex.exec(fileContent)) !== null) {
    if (!slugs.includes(match[1])) {
      slugs.push(match[1]);
    }
  }

  // Also check product/option page links like `/products/compostable-stand-up-pouches`
  const linkRegex = /link:\s*['"](\/(?:products|options)\/[^'"]+)['"]/g;
  const otherLinks = [];
  while ((match = linkRegex.exec(fileContent)) !== null) {
    otherLinks.push(match[1]);
  }

  console.log("Hardcoded blog slugs from PouchBlogPage.tsx:", slugs);
  console.log("Other links from PouchBlogPage.tsx:", otherLinks);

  // Check if each exists in Supabase
  const { data: dbPosts, error } = await supabase
    .from('pouch_seo_blog')
    .select('slug');

  if (error) {
    console.error(error);
    return;
  }

  const dbSlugs = new Set(dbPosts.map(p => p.slug));
  console.log("Slugs in DB containing 'organic' or 'compliance':");
  dbPosts.map(p => p.slug).filter(s => s.includes('organic') || s.includes('compliance')).forEach(s => {
    console.log(` - ${s}`);
  });
}

run();
