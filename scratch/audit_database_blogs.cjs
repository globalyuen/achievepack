const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase URL or Key. Check your .env files.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('id, slug, title, content');

  if (error) {
    console.error("Supabase Error:", error);
    return;
  }

  console.log(`Auditing ${posts.length} database blog posts:`);
  posts.forEach(post => {
    const contentObj = post.content || {};
    const sections = contentObj.sections || [];
    let textContent = '';
    sections.forEach(sec => {
      textContent += ' ' + (sec.content || '');
    });
    
    // strip tags to count words
    const stripped = textContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = stripped.split(' ').filter(w => w.length > 1).length;
    
    console.log(`- Slug: ${post.slug} | Title: "${post.title}" | Word Count: ${wordCount} | Sections: ${sections.length}`);
  });
}

run();
