const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const { data: post, error } = await supabase
    .from('pouch_seo_blog')
    .select('*')
    .eq('slug', 'kraft-paper-zipper-doypack')
    .single();

  if (error) {
    console.error(error);
    return;
  }

  console.log("TITLE:", post.title);
  console.log("EXCERPT:", post.excerpt);
  console.log("\nSECTIONS:");
  post.content.sections.forEach((sec, i) => {
    console.log(`\nSection ${i+1}: ${sec.title}`);
    console.log(sec.content);
  });
  console.log("\nFAQS:");
  post.content.faqs.forEach((faq, i) => {
    console.log(`Q: ${faq.q}`);
    console.log(`A: ${faq.a}`);
  });
}
run();
