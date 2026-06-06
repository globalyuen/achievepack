const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://nvkkqskcdglobalyuens.supabase.co'; // Fallback if env not loaded yet
// Let's read VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY from .env
let anonKey = '';
let sbUrl = '';

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
  console.error('Missing Supabase configuration in .env!');
  process.exit(1);
}

const supabase = createClient(sbUrl, anonKey);

async function extract() {
  console.log('Fetching all approved posts from Supabase...');
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('*');

  if (error) {
    console.error('Error fetching posts:', error);
    process.exit(1);
  }

  const approvedPosts = posts.filter(p => p.content && p.content.approved === true);
  console.log(`Fetched ${posts.length} posts, ${approvedPosts.length} are approved.`);

  const infographics = [];

  for (const post of approvedPosts) {
    const slug = post.slug;
    // We resolve active content similarly to BlogPostPage.tsx
    // Since pouch.eco is the primary target, we prefer pouch content if exists
    const content = post.content.pouch || post.content;
    const hideMedia = !!content.hide_media || !!content.no_video_and_image;
    if (hideMedia) {
      continue;
    }

    const sections = content.sections || [];
    sections.forEach((sec, sIdx) => {
      const paragraphs = sec.paragraphs || [];
      paragraphs.forEach((p, pIdx) => {
        if (!p.image_prompt) return;

        const globalIdx = sIdx * 2 + pIdx;
        const filename = globalIdx === 0 
          ? `${slug}-infographic.png` 
          : `${slug}-infographic-${globalIdx + 1}.png`;

        infographics.push({
          slug,
          filename,
          originalPrompt: p.image_prompt,
          imageName: `${slug.replace(/-/g, '_')}_infographic_${globalIdx === 0 ? '' : globalIdx + 1}`.replace(/__+/g, '_').replace(/_$/, '')
        });
      });
    });
  }

  console.log(`Extracted ${infographics.length} infographic requirements from database.`);
  
  // Filter list to keep only the ones that exist in the git commits (meaning they are the xAI ones we want to replace)
  const xaiFilesPath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/scratch/xai_generated_to_replace.json';
  
  // Actually, let's just generate for ALL of them that we can map, or specifically target the 248 unique files
  // Let's get the list of the 248 unique files from identify_xai_infographics.py output
  const uniqueXaiFiles = new Set();
  const commits = ["28f7ba72", "56c28f62", "8b1d18d0"];
  const cp = require('child_process');
  for (const c of commits) {
    try {
      const res = cp.execSync(`git show --name-only ${c}`).toString();
      res.split('\n').forEach(line => {
        line = line.strip ? line.strip() : line.trim();
        if (line.startsWith('public/imgs/infographics/') && line.endswith ? line.endswith('.png') : line.endsWith('.png')) {
          uniqueXaiFiles.add(path.basename(line));
        }
      });
    } catch (e) {}
  }
  
  console.log(`Git commits contain ${uniqueXaiFiles.size} unique infographic png files.`);

  const finalReplacementList = infographics.filter(info => uniqueXaiFiles.has(info.filename));
  console.log(`Matched ${finalReplacementList.length} database infographics with the xAI generated files on disk.`);

  const outputPath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/scratch/infographics_to_generate_google.json';
  fs.writeFileSync(outputPath, JSON.stringify(finalReplacementList, null, 2), 'utf8');
  console.log(`Saved final mapping of ${finalReplacementList.length} items to ${outputPath}`);
}

extract();
