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

const progressFilePath = path.join(__dirname, 'rewrite_progress.json');
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

// Call xAI to simplify text
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
          max_tokens: 1500,
          temperature: 0.1,
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
        model = 'grok-2'; // Fallback to grok-2
      } else {
        retries--;
      }
      await sleep(2000);
    }
  }
  throw new Error("Grok API call failed completely after retries.");
}

const paragraphPrompt = `You are a professional editor. Rewrite the following B2B flexible packaging paragraph to be simpler, clearer, and much easier to understand for B2B buyers. Remove overly complex jargon and long-winded sentences. Make it engaging, concise, and direct.
CRITICAL: Keep all technical specifications (such as ASTM D6400, OTR, WVTR, micron thicknesses, certifications, etc.) 100% accurate and present.
CRITICAL: Keep all HTML tags and links (e.g. <a href="...">link text</a>) completely intact and unaltered.
Return ONLY the rewritten paragraph text. Do not include any markdown styling, backticks, preamble, commentary, or conversational explanations.`;

const htmlPrompt = `You are a professional editor. Rewrite the following B2B flexible packaging HTML content to make the text simpler, clearer, and easier to understand for B2B buyers. Remove overly complex jargon and make sentences direct.
CRITICAL: Keep all technical specifications (such as ASTM D6400, OTR, WVTR, micron thicknesses, certifications, etc.) 100% accurate and present.
CRITICAL: Keep all HTML tags (like <div>, <p>, <a>, <strong>, <table>, etc.) and links exactly as they are.
Return ONLY the rewritten HTML code. Do not wrap in markdown backticks. Do not include any preamble, commentary, or conversational explanations.`;

async function processPost(post) {
  console.log(`\n--------------------------------------------`);
  console.log(`Processing: ${post.slug}`);
  
  let content = post.content || {};
  let pouchContent = content.pouch;
  let achieveContent = content.achievepack;
  
  // If the post is flat, split it first
  if (!pouchContent && !achieveContent) {
    console.log("Post is flat. Initializing B2C 'pouch' and B2B 'achievepack' structures.");
    pouchContent = JSON.parse(JSON.stringify(content));
    // Remove potential circular/nested properties to be clean
    delete pouchContent.pouch;
    delete pouchContent.achievepack;
    
    achieveContent = JSON.parse(JSON.stringify(pouchContent));
  } else if (!achieveContent && pouchContent) {
    console.log("Post has pouch content but is missing achievepack. Copying pouch content to achievepack.");
    achieveContent = JSON.parse(JSON.stringify(pouchContent));
  } else if (!pouchContent && achieveContent) {
    console.log("Post has achievepack content but is missing pouch. Copying achievepack content to pouch.");
    pouchContent = JSON.parse(JSON.stringify(achieveContent));
  }
  
  // Let's copy sections for rewriting
  let sections = achieveContent.sections || [];
  
  // We will collect all rewrite tasks
  const rewriteTasks = [];
  
  sections.forEach((sec, sIdx) => {
    if (sec.paragraphs && Array.isArray(sec.paragraphs)) {
      sec.paragraphs.forEach((p, pIdx) => {
        if (p.text && p.text.trim()) {
          rewriteTasks.push({
            type: 'paragraph',
            sectionIndex: sIdx,
            paragraphIndex: pIdx,
            originalText: p.text
          });
        }
      });
    }
    if (sec.content && sec.content.trim()) {
      rewriteTasks.push({
        type: 'content',
        sectionIndex: sIdx,
        originalText: sec.content
      });
    }
  });
  
  if (rewriteTasks.length > 0) {
    console.log(`  Found ${rewriteTasks.length} text blocks. Rewriting in parallel...`);
    
    // Execute all rewrites in parallel
    const results = await Promise.all(
      rewriteTasks.map(async (task) => {
        try {
          const prompt = task.type === 'paragraph' ? paragraphPrompt : htmlPrompt;
          const rewritten = await callGrok(prompt, task.originalText);
          return { ...task, rewritten, success: true };
        } catch (e) {
          console.error(`  Error rewriting block (${task.type} in section ${task.sectionIndex + 1}):`, e.message);
          return { ...task, rewritten: task.originalText, success: false };
        }
      })
    );
    
    // Apply the results back to the sections
    let updatedSections = JSON.parse(JSON.stringify(sections));
    results.forEach(res => {
      if (res.type === 'paragraph') {
        updatedSections[res.sectionIndex].paragraphs[res.paragraphIndex].text = res.rewritten;
      } else if (res.type === 'content') {
        updatedSections[res.sectionIndex].content = res.rewritten;
      }
    });
    
    achieveContent.sections = updatedSections;
  } else {
    console.log("  No text blocks to rewrite.");
  }
  
  // Package back to database content structure
  const updatedContent = {
    ...content,
    pouch: pouchContent,
    achievepack: achieveContent
  };
  
  if (isDryRun) {
    console.log("\n[DRY RUN] Would update Supabase content. Diffs for first section:");
    const originalSec = sections[0] || {};
    const newSec = updatedSections[0] || {};
    console.log("Original Section 1 title:", originalSec.title);
    if (originalSec.paragraphs && originalSec.paragraphs[0]) {
      console.log("Original Paragraph 1:", originalSec.paragraphs[0].text);
      console.log("Rewritten Paragraph 1:", newSec.paragraphs[0].text);
    } else if (originalSec.content) {
      console.log("Original Content:", originalSec.content);
      console.log("Rewritten Content:", newSec.content);
    }
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
  console.log("Starting Supabase blog rewrite process...");
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
    
    // Filter approved posts and filter out completed ones if not targeting single slug or dry-run
    let toProcess = posts.filter(p => p.content && p.content.approved !== false);
    if (!targetSlug && !isDryRun) {
      toProcess = toProcess.filter(p => !progress.completed.includes(p.slug));
    }
    
    console.log(`Approved posts to process: ${toProcess.length}`);
    
    const processLimit = limit || toProcess.length;
    const batch = toProcess.slice(0, processLimit);
    console.log(`Processing batch of ${batch.length} posts...`);
    
    for (let i = 0; i < batch.length; i++) {
      const post = batch[i];
      console.log(`\n[${i + 1}/${batch.length}] Processing...`);
      await processPost(post);
      await sleep(1000); // Gap between posts
    }
    
    console.log("\nFinished processing batch!");
  } catch (err) {
    console.error("Global process error:", err);
  }
}

main();
