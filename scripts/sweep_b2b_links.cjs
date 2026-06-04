const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

// 1. Setup Supabase Client
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase URL or Key. Check your .env files.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// 2. Parser to find the end index of the `sections` array in TSX files
function findSectionsArrayEnd(content) {
  const match = content.match(/const\s+sections(\s*:\s*\w+\[\])?\s*=\s*\[/);
  if (!match) return -1;
  
  const startIndex = match.index + match[0].length - 1; // index of the opening '['
  let i = startIndex + 1;
  let bracketStack = ['['];
  let inSingleQuote = false;
  let inDoubleQuote = false;
  let inTemplateLiteral = false;
  let inLineComment = false;
  let inBlockComment = false;
  
  while (i < content.length) {
    const char = content[i];
    const nextChar = content[i+1];
    
    if (inLineComment) {
      if (char === '\n') {
        inLineComment = false;
      }
      i++;
      continue;
    }
    if (inBlockComment) {
      if (char === '*' && nextChar === '/') {
        inBlockComment = false;
        i += 2;
        continue;
      }
      i++;
      continue;
    }
    if (inSingleQuote) {
      if (char === "'" && content[i-1] !== '\\') {
        inSingleQuote = false;
      }
      i++;
      continue;
    }
    if (inDoubleQuote) {
      if (char === '"' && content[i-1] !== '\\') {
        inDoubleQuote = false;
      }
      i++;
      continue;
    }
    if (inTemplateLiteral) {
      if (char === '`' && content[i-1] !== '\\') {
        inTemplateLiteral = false;
      }
      i++;
      continue;
    }
    
    // Handle comments
    if (char === '/' && nextChar === '/') {
      inLineComment = true;
      i += 2;
      continue;
    }
    if (char === '/' && nextChar === '*') {
      inBlockComment = true;
      i += 2;
      continue;
    }
    
    // Handle string literals
    if (char === "'") {
      inSingleQuote = true;
      i++;
      continue;
    }
    if (char === '"') {
      inDoubleQuote = true;
      i++;
      continue;
    }
    if (char === '`') {
      inTemplateLiteral = true;
      i++;
      continue;
    }
    
    // Track brackets
    if (char === '[') {
      bracketStack.push('[');
    } else if (char === ']') {
      bracketStack.pop();
      if (bracketStack.length === 0) {
        return i; // Found the matching closing bracket
      }
    }
    i++;
  }
  return -1;
}

// 3. New section content for TSX files (using JSX)
const newTsxSection = `,
    {
      id: 'b2b-store-links',
      title: 'Contextual B2B Store Products',
      icon: <span className="text-xl">🛒</span>,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            For packaging buyers planning their next production run, we recommend starting with our <a href="https://achievepack.com/store/product/sample-assorted-eco" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">B2B Biodegradable Sample Kit</a> to evaluate material thickness and barrier performance. For high-speed form-fill-seal automated packaging lines, check out our <a href="https://achievepack.com/store/product/media__1780570697340.jpg" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">Custom Eco Rollstock Film</a>. If you are packaging confectionery or small items, our premium <a href="https://achievepack.com/store/product/transparent-colorful-cellophane-candy-wrapping-paper" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">Cellophane Candy Wrapper</a> offers excellent clarity and compostability.
          </p>
        </div>
      )
    }`;

// 4. New section object for database content (using standard JSON)
const newDbSection = {
  icon: "package",
  title: "Contextual B2B Store Products",
  paragraphs: [
    {
      text: "For packaging buyers planning their next production run, we recommend starting with our <a href=\"https://achievepack.com/store/product/sample-assorted-eco\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#10b981] font-bold hover:underline\">B2B Biodegradable Sample Kit</a> to evaluate material thickness and barrier performance. For high-speed form-fill-seal automated packaging lines, check out our <a href=\"https://achievepack.com/store/product/media__1780570697340.jpg\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#10b981] font-bold hover:underline\">Custom Eco Rollstock Film</a>. If you are packaging confectionery or small items, our premium <a href=\"https://achievepack.com/store/product/transparent-colorful-cellophane-candy-wrapping-paper\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#10b981] font-bold hover:underline\">Cellophane Candy Wrapper</a> offers excellent clarity and compostability.",
      image_prompt: "A professional product showcase layout displaying a biodegradable sample kit, a roll of custom eco film, and a cellophane wrapped product."
    }
  ],
  specs_table: null,
  key_takeaways: null
};

async function sweepStaticFiles() {
  console.log("\n==================================================");
  console.log("🔍 Sweeping Static TSX Blog Pages...");
  console.log("==================================================");
  
  const blogDir = path.join(__dirname, '../src/pages/pouch/blog');
  if (!fs.existsSync(blogDir)) {
    console.error(`❌ Blog directory not found: ${blogDir}`);
    return;
  }
  
  const files = fs.readdirSync(blogDir);
  let updatedCount = 0;
  let skippedCount = 0;
  
  for (const file of files) {
    if (!file.endsWith('.tsx') || file === 'PouchBlogArticlePage.tsx') {
      continue;
    }
    
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the links already exist in the file
    const hasSample = content.includes('/store/product/sample-assorted-eco');
    const hasRollstock = content.includes('/store/product/media__1780570697340.jpg');
    const hasCellophane = content.includes('/store/product/transparent-colorful-cellophane-candy-wrapping-paper');
    
    if (hasSample && hasRollstock && hasCellophane) {
      console.log(`✓ ${file}: Already contains B2B links.`);
      skippedCount++;
      continue;
    }
    
    // Find the end index of the sections array
    const closingBracketIndex = findSectionsArrayEnd(content);
    if (closingBracketIndex === -1) {
      console.warn(`⚠️ ${file}: Could not find sections array. Skipping.`);
      skippedCount++;
      continue;
    }
    
    // Insert the new section right before the closing bracket `]`
    const updatedContent = content.substring(0, closingBracketIndex) + newTsxSection + content.substring(closingBracketIndex);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`⚡ ${file}: Successfully updated with B2B store links.`);
    updatedCount++;
  }
  
  console.log(`\nStatic TSX Sweep Summary: ${updatedCount} updated, ${skippedCount} skipped.`);
}

async function sweepDatabaseRecords() {
  console.log("\n==================================================");
  console.log("🔍 Sweeping Supabase Blog Records...");
  console.log("==================================================");
  
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('id, slug, title, content');
    
  if (error) {
    console.error("❌ Error querying database:", error);
    return;
  }
  
  console.log(`Fetched ${posts.length} database blog records.`);
  let updatedCount = 0;
  let skippedCount = 0;
  
  for (const post of posts) {
    const contentObj = post.content || {};
    const sections = contentObj.sections || [];
    
    // Check if the links already exist in any text field within content
    const contentString = JSON.stringify(contentObj);
    const hasSample = contentString.includes('/store/product/sample-assorted-eco');
    const hasRollstock = contentString.includes('/store/product/media__1780570697340.jpg');
    const hasCellophane = contentString.includes('/store/product/transparent-colorful-cellophane-candy-wrapping-paper');
    
    if (hasSample && hasRollstock && hasCellophane) {
      console.log(`✓ ${post.slug}: Already contains B2B links.`);
      skippedCount++;
      continue;
    }
    
    // Append the new section to the sections array
    sections.push(newDbSection);
    
    // Build updated content object
    const updatedContentObj = {
      ...contentObj,
      sections: sections
    };
    
    const { error: updateError } = await supabase
      .from('pouch_seo_blog')
      .update({ content: updatedContentObj, updated_at: new Date().toISOString() })
      .eq('id', post.id);
      
    if (updateError) {
      console.error(`❌ Error updating post ${post.slug}:`, updateError);
    } else {
      console.log(`⚡ ${post.slug}: Successfully updated in database.`);
      updatedCount++;
    }
  }
  
  console.log(`\nDatabase Sweep Summary: ${updatedCount} updated, ${skippedCount} skipped.`);
}

async function run() {
  try {
    await sweepStaticFiles();
    await sweepDatabaseRecords();
    console.log("\n🎉 All sweeps completed successfully!");
  } catch (err) {
    console.error("❌ Unexpected error during sweep:", err);
  }
}

run();
