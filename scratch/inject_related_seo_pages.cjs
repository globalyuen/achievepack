const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
const env = dotenv.parse(fs.readFileSync('.env.local'));
const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseKey = env.SUPABASE_SERVICE_KEY || env.VITE_SUPABASE_ANON_KEY;
const xaiApiKey = env.XAI_API_KEY || env.VITE_XAI_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase configuration.");
  process.exit(1);
}
if (!xaiApiKey) {
  console.error("Missing xAI API key.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Parse arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const limitArgIdx = args.indexOf('--limit');
const limit = limitArgIdx !== -1 ? parseInt(args[limitArgIdx + 1], 10) : null;
const slugArgIdx = args.indexOf('--slug');
const targetSlug = slugArgIdx !== -1 ? args[slugArgIdx + 1] : null;

// Load SEO Pages config
const seoPagesConfigPath = path.join(__dirname, 'seo_pages_config.json');
if (!fs.existsSync(seoPagesConfigPath)) {
  console.error("Missing seo_pages_config.json");
  process.exit(1);
}
const seoPages = JSON.parse(fs.readFileSync(seoPagesConfigPath, 'utf8'));

const progressFilePath = path.join(__dirname, 'inject_progress.json');
let progress = { completed: [] };
if (fs.existsSync(progressFilePath)) {
  try {
    progress = JSON.parse(fs.readFileSync(progressFilePath, 'utf8'));
  } catch (e) {
    console.error("Could not parse progress file, starting fresh.");
  }
}

function saveProgress() {
  fs.writeFileSync(progressFilePath, JSON.stringify(progress, null, 2), 'utf8');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Call xAI Grok
async function callGrok(prompt, text) {
  let model = 'grok-3';
  let retries = 2;
  
  while (retries >= 0) {
    try {
      const res = await fetch('https://api.x.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${xaiApiKey}`
        },
        body: JSON.stringify({
          model: model,
          messages: [
            { role: 'system', content: prompt },
            { role: 'user', content: text }
          ],
          max_tokens: 500,
          temperature: 0.2,
        })
      });
      
      const data = await res.json();
      if (data.choices && data.choices[0] && data.choices[0].message) {
        return data.choices[0].message.content.trim();
      } else {
        throw new Error(JSON.stringify(data));
      }
    } catch (err) {
      console.warn(`Grok call failed using model ${model}, retrying... Error:`, err.message);
      if (model === 'grok-3') {
        model = 'grok-2';
      } else {
        retries--;
      }
      await sleep(2000);
    }
  }
  throw new Error("Grok API call failed completely after retries.");
}

const b2cPrompt = (seoTitle, seoUrl, postTitle) => `You are a friendly, engaging B2C copywriter for POUCH.ECO, a certified compostable packaging brand.
Write a friendly, highly engaging paragraph (under 80 words) introducing the following eco-friendly packaging solution page: "${seoTitle}" (${seoUrl}).
Explain how this solution relates to the blog post topic: "${postTitle}".
CRITICAL: You MUST include a natural, organic HTML link to the page: <a href="${seoUrl}">link text</a> (where "link text" is a natural, contextual keyword phrase like "compostable coffee bags", "stand-up pouches", or "low-MOQ packaging").
Return ONLY the paragraph text. Do not include markdown, backticks, preamble, or explanations.`;

const b2bPrompt = (seoTitle, seoUrl, postTitle) => `You are a professional B2B editor for AchievePack.
Write a clear, simplified, and direct paragraph (under 80 words) introducing the following packaging solution/sourcing page: "${seoTitle}" (${seoUrl}).
Explain how this solution helps B2B buyers in the context of the blog post topic: "${postTitle}".
CRITICAL: You MUST include a natural, organic HTML link to the page: <a href="${seoUrl}">link text</a> (where "link text" is a natural, B2B keyword phrase like "mono-PE recyclable pouches", "low MOQ startup packaging", or "degassing valve solutions").
Return ONLY the paragraph text. Do not include markdown, backticks, preamble, or explanations.`;

const stopWords = new Set(["vs", "the", "a", "and", "or", "in", "of", "to", "for", "with", "on", "by", "an", "is", "are", "it", "at", "from"]);

// Calculate relevance score
function getRelevanceScore(post, seoPage) {
  if (post.slug === seoPage.slug) return -100; // Skip matching itself
  
  let score = 0;
  
  // If the SEO page slug is inside the post slug
  if (post.slug.includes(seoPage.slug)) {
    score += 15;
  }
  
  const postTokens = (post.slug + " " + post.title + " " + (post.category || ""))
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(t => t && !stopWords.has(t));
    
  const seoTokens = (seoPage.slug + " " + seoPage.title + " " + seoPage.keywords.join(" "))
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(t => t && !stopWords.has(t));
    
  // Check overlap
  const postSet = new Set(postTokens);
  seoTokens.forEach(token => {
    if (postSet.has(token)) {
      score += 2;
    }
  });
  
  return score;
}

// Select 3 related SEO pages
function selectRelatedPages(post) {
  const scored = seoPages.map(page => ({
    page,
    score: getRelevanceScore(post, page)
  }));
  
  // Sort descending
  scored.sort((a, b) => b.score - a.score);
  
  // Let's filter out negative/self scores
  const candidates = scored.filter(c => c.score > -50);
  
  // We want to select 3. If we have ties in the top 5, we can select randomly among the top group to satisfy the "randomly 3" constraint while ensuring high relevance.
  // Take top 6 candidates
  const pool = candidates.slice(0, 6);
  if (pool.length < 3) {
    // Return first 3 fallback from all seoPages
    return seoPages.slice(0, 3);
  }
  
  // Randomly select 3 unique ones from the pool
  const selected = [];
  const indices = new Set();
  while (selected.length < 3 && selected.length < pool.length) {
    const idx = Math.floor(Math.random() * pool.length);
    if (!indices.has(idx)) {
      indices.add(idx);
      selected.push(pool[idx].page);
    }
  }
  return selected;
}

async function processPost(post) {
  console.log(`\n--------------------------------------------`);
  console.log(`Processing: ${post.slug}`);
  
  const selected = selectRelatedPages(post);
  console.log("Selected SEO pages for internal linking:");
  selected.forEach((p, idx) => console.log(`  ${idx + 1}. ${p.title} (${p.url})`));
  
  let content = post.content || {};
  let pouchContent = content.pouch || {};
  let achieveContent = content.achievepack || {};
  
  // Build paragraphs in parallel
  const b2cTasks = selected.map(async (seoPage) => {
    try {
      const text = await callGrok(b2cPrompt(seoPage.title, seoPage.url, post.title), `Blog post title: ${post.title}`);
      return {
        text,
        image_prompt: seoPage.imagePrompt,
        image_url: `/imgs/seo-pages/${seoPage.slug}-seo-infographic.png`
      };
    } catch (e) {
      console.error(`  B2C generation error for ${seoPage.slug}:`, e.message);
      return {
        text: `Explore our premium <a href="${seoPage.url}">${seoPage.title}</a> solutions to elevate your brand packaging.`,
        image_prompt: seoPage.imagePrompt,
        image_url: `/imgs/seo-pages/${seoPage.slug}-seo-infographic.png`
      };
    }
  });
  
  const b2bTasks = selected.map(async (seoPage) => {
    try {
      const text = await callGrok(b2bPrompt(seoPage.title, seoPage.url, post.title), `Blog post title: ${post.title}`);
      return {
        text,
        image_prompt: seoPage.imagePrompt,
        image_url: `/imgs/seo-pages/${seoPage.slug}-seo-infographic.png`
      };
    } catch (e) {
      console.error(`  B2B generation error for ${seoPage.slug}:`, e.message);
      return {
        text: `Optimize your B2B supply chain with our certified <a href="${seoPage.url}">${seoPage.title}</a> specifications.`,
        image_prompt: seoPage.imagePrompt,
        image_url: `/imgs/seo-pages/${seoPage.slug}-seo-infographic.png`
      };
    }
  });
  
  const [b2cParagraphs, b2bParagraphs] = await Promise.all([
    Promise.all(b2cTasks),
    Promise.all(b2bTasks)
  ]);
  
  // B2C Injection
  let pouchSections = pouchContent.sections || [];
  // Clean up any existing related sections to avoid duplicates
  pouchSections = pouchSections.filter(s => s.id !== 'related-seo-solutions');
  pouchSections.push({
    id: 'related-seo-solutions',
    title: 'Explore Related Sustainable Packaging Options',
    paragraphs: b2cParagraphs
  });
  pouchContent.sections = pouchSections;
  
  // B2B Injection
  let achieveSections = achieveContent.sections || [];
  achieveSections = achieveSections.filter(s => s.id !== 'related-seo-solutions');
  achieveSections.push({
    id: 'related-seo-solutions',
    title: 'Related Sourcing Blueprints & Packaging Specifications',
    paragraphs: b2bParagraphs
  });
  achieveContent.sections = achieveSections;
  
  const updatedContent = {
    ...content,
    pouch: pouchContent,
    achievepack: achieveContent
  };
  
  if (isDryRun) {
    console.log("\n[DRY RUN] Injected section preview for B2B:");
    console.log("Section Title:", achieveSections[achieveSections.length - 1].title);
    achieveSections[achieveSections.length - 1].paragraphs.forEach((p, idx) => {
      console.log(`  Paragraph ${idx + 1}:`);
      console.log(`    Text: ${p.text}`);
      console.log(`    Image Path: ${p.image_url}`);
    });
  } else {
    console.log("Updating Supabase record...");
    const { error } = await supabase
      .from('pouch_seo_blog')
      .update({ content: updatedContent })
      .eq('slug', post.slug);
      
    if (error) {
      console.error(`Failed to update post ${post.slug}:`, error);
      throw error;
    }
    console.log(`Successfully updated post: ${post.slug}`);
    
    // Record progress
    if (!progress.completed.includes(post.slug)) {
      progress.completed.push(post.slug);
      saveProgress();
    }
  }
}

async function main() {
  console.log("Starting SEO page injection process...");
  console.log(`Dry run mode: ${isDryRun}`);
  if (targetSlug) console.log(`Targeting single slug: ${targetSlug}`);
  if (limit) console.log(`Limit: ${limit} posts`);
  
  try {
    let query = supabase.from('pouch_seo_blog').select('*');
    if (targetSlug) {
      query = query.eq('slug', targetSlug);
    }
    
    const { data: posts, error } = await query;
    if (error) throw error;
    
    console.log(`Fetched ${posts.length} posts from Supabase.`);
    
    // Filter approved posts and filter out completed ones if not dry-run/single slug
    let toProcess = posts.filter(p => p.content && p.content.approved !== false);
    if (!targetSlug && !isDryRun) {
      toProcess = toProcess.filter(p => !progress.completed.includes(p.slug));
    }
    
    console.log(`Approved posts to process: ${toProcess.length}`);
    
    const processLimit = limit || toProcess.length;
    const batch = toProcess.slice(0, processLimit);
    console.log(`Processing batch of ${batch.length} posts...`);
    
    const concurrency = 3;
    for (let i = 0; i < batch.length; i += concurrency) {
      const chunk = batch.slice(i, i + concurrency);
      console.log(`\nProcessing chunk [${i + 1} to ${Math.min(i + concurrency, batch.length)} of ${batch.length}]...`);
      await Promise.all(chunk.map(post => processPost(post)));
      await sleep(1000);
    }
    
    console.log("\nFinished processing batch!");
  } catch (err) {
    console.error("Global process error:", err);
  }
}

main();
