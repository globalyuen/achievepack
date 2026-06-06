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
  const slug = 'sourcing-compostable-coffee-bags';
  const { data, error } = await supabase
    .from('pouch_seo_blog')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(error);
    return;
  }
  
  if (data) {
    if (data.content.pouch) {
      console.log("--- POUCH CONTENT ---");
      console.log("Title:", data.content.pouch.title);
      console.log("Excerpt:", data.content.pouch.excerpt);
      console.log("Sections:");
      data.content.pouch.sections.forEach((s, i) => {
        console.log(`\nSection ${i+1}: ${s.title}`);
        if (s.paragraphs) {
          s.paragraphs.forEach(p => console.log(`  Paragraph: ${p.text}`));
        }
      });
    } else {
      console.log("--- FLAT POUCH CONTENT ---");
      console.log("Sections:");
      data.content.sections.forEach((s, i) => {
        console.log(`\nSection ${i+1}: ${s.title}`);
        if (s.paragraphs) {
          s.paragraphs.forEach(p => console.log(`  Paragraph: ${p.text}`));
        }
      });
    }

    if (data.content.achievepack) {
      console.log("\n\n--- ACHIEVEPACK CONTENT ---");
      console.log("Title:", data.content.achievepack.title);
      console.log("Excerpt:", data.content.achievepack.excerpt);
      console.log("Sections:");
      data.content.achievepack.sections.forEach((s, i) => {
        console.log(`\nSection ${i+1}: ${s.title}`);
        if (s.paragraphs) {
          s.paragraphs.forEach(p => console.log(`  Paragraph: ${p.text}`));
        }
      });
    } else {
      console.log("\n\n--- NO ACHIEVEPACK CONTENT (using flat content) ---");
    }
  }
}
check();
