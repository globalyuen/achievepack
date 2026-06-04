const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

// Paths
const baseDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack';
require('dotenv').config({ path: path.join(baseDir, '.env.local') });
require('dotenv').config({ path: path.join(baseDir, '.env') });

const outputDir = path.join(baseDir, 'public', 'imgs', 'blog', 'heros');
fs.mkdirSync(outputDir, { recursive: true });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
const xaiApiKey = process.env.XAI_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Error: Missing Supabase URL or Key.");
  process.exit(1);
}
if (!xaiApiKey) {
  console.error("❌ Error: Missing XAI_API_KEY.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

function buildPrompt(title, excerpt, slug) {
  let materialType = "premium sustainable stand-up packaging pouch";
  if (slug.includes('sachet') || slug.includes('stick-pack')) {
    materialType = "premium high-barrier packaging sachet";
  } else if (slug.includes('coffee') || slug.includes('tea')) {
    materialType = "specialty high-barrier coffee bag with degassing valve";
  } else if (slug.includes('retort')) {
    materialType = "high-barrier retort packaging pouch";
  } else if (slug.includes('flat-bottom')) {
    materialType = "flat-bottom box pouch";
  } else if (slug.includes('rollstock')) {
    materialType = "custom printed packaging film rollstock roll";
  }

  const prompt = `A premium, professional, and visually stunning B2B product photography of a ${materialType} for: "${title}". It should depict: ${excerpt}. Studio product photography layout, clean and soft natural light, minimal and neutral background (soft off-white/light grey), achievepack.com brand color tones and aesthetic, realistic paper or plastic texture, photorealistic, 8k resolution. Avoid generic icons, avoid text, avoid human hands, make it look like a real physical product mockup.`;
  
  return prompt;
}

async function run() {
  console.log("🔍 Fetching posts with wrong hero images from Supabase...");
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('id, slug, title, excerpt, image_url');

  if (error) {
    console.error("❌ Supabase Error:", error);
    return;
  }

  const WRONG_IMAGE = 'a_compostable_packaging_pouch_achieve_pack_2674607.webp';
  const targets = posts.filter(p => p.image_url && p.image_url.includes(WRONG_IMAGE));

  console.log(`Found ${targets.length} target posts requiring new dynamic hero images.`);

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < targets.length; i++) {
    const post = targets[i];
    const filename = `${post.slug}-hero.png`;
    const targetFilePath = path.join(outputDir, filename);
    const relativePath = `/imgs/blog/heros/${filename}`;

    console.log(`[${i + 1}/${targets.length}] Generating hero for slug: ${post.slug}...`);

    // Check if file already exists locally
    if (fs.existsSync(targetFilePath) && fs.statSync(targetFilePath).size > 0) {
      console.log(`✓ Image already exists locally for ${post.slug}. Updating database record only.`);
      
      const { error: updateErr } = await supabase
        .from('pouch_seo_blog')
        .update({ image_url: relativePath })
        .eq('id', post.id);

      if (updateErr) {
        console.error(`❌ Failed to update Supabase for ${post.slug}:`, updateErr);
        failCount++;
      } else {
        console.log(`✓ Database record updated successfully to: ${relativePath}`);
        successCount++;
      }
      continue;
    }

    const prompt = buildPrompt(post.title, post.excerpt || '', post.slug);
    console.log(`  Prompt: "${prompt}"`);

    const payload = {
      model: "grok-imagine-image",
      prompt: prompt,
      response_format: "b64_json"
    };

    let retries = 3;
    let success = false;

    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch("https://api.x.ai/v1/images/generations", {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${xaiApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload),
          timeout: 60000
        });

        if (response.ok) {
          const resJson = await response.json();
          if (resJson.data && resJson.data.length > 0) {
            const b64Data = resJson.data[0].b64_json;
            const imgBuffer = Buffer.from(b64Data, 'base64');
            fs.writeFileSync(targetFilePath, imgBuffer);
            console.log(`  ✓ Image saved locally: ${filename}`);

            // Update database record
            const { error: updateErr } = await supabase
              .from('pouch_seo_blog')
              .update({ image_url: relativePath })
              .eq('id', post.id);

            if (updateErr) {
              console.error(`  ❌ Failed to update Supabase:`, updateErr);
            } else {
              console.log(`  ✓ Supabase record updated successfully to: ${relativePath}`);
              successCount++;
              success = true;
            }
            break;
          } else {
            console.warn(`  ⚠️ Response data empty on attempt ${attempt}:`, resJson);
          }
        } else if (response.status === 429) {
          console.warn(`  ⚠️ Rate limited (429) on attempt ${attempt}. Waiting 30s...`);
          await new Promise(r => setTimeout(r, 30000));
        } else {
          const text = await response.text();
          console.warn(`  ⚠️ Error ${response.status} on attempt ${attempt}: ${text}`);
        }
      } catch (e) {
        console.warn(`  ⚠️ Exception on attempt ${attempt}:`, e);
      }

      await new Promise(r => setTimeout(r, 3000));
    }

    if (!success) {
      console.error(`❌ Failed to generate hero image for ${post.slug} after ${retries} attempts.`);
      failCount++;
    }

    // Cooldown sleep
    await new Promise(r => setTimeout(r, 2000));
  }

  console.log(`==================================================`);
  console.log(`Finished generation. Success: ${successCount}, Failed: ${failCount}`);
  console.log(`==================================================`);
}

run();
