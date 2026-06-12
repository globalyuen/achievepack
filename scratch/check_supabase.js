import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  try {
    const { data: posts, error } = await supabase
      .from('pouch_seo_blog')
      .select('*');

    if (error) throw error;

    const approved = posts.filter(p => p.content?.approved !== false);
    console.log(`Approved posts: ${approved.length}`);

    let nullExcerpt = 0;
    let nullCategory = 0;
    let nullImageUrl = 0;

    approved.forEach(p => {
      if (!p.excerpt) nullExcerpt++;
      if (!p.category) nullCategory++;
      if (!p.image_url) nullImageUrl++;
    });

    console.log(`Root Null Excerpts: ${nullExcerpt}`);
    console.log(`Root Null Categories: ${nullCategory}`);
    console.log(`Root Null ImageUrls: ${nullImageUrl}`);

    if (approved.length > 0) {
      console.log('\nSample Approved Post root values:');
      console.log({
        title: approved[0].title,
        slug: approved[0].slug,
        excerpt: approved[0].excerpt,
        category: approved[0].category,
        image_url: approved[0].image_url,
      });

      console.log('\nSample Approved Post content.pouch values:');
      console.log({
        title: approved[0].content?.pouch?.title,
        excerpt: approved[0].content?.pouch?.excerpt,
        image_url: approved[0].content?.pouch?.image_url,
      });
    }

  } catch (err) {
    console.error('Error:', err);
  }
}

run();
