import fs from 'fs';
import path from 'path';

// Paths
const rootDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack';
const blogDir = path.join(rootDir, 'src/pages/pouch/blog');
const blogDataPath = path.join(rootDir, 'src/data/blogData.ts');
const routeMappingPath = path.join(rootDir, 'src/data/route-mapping.json');

// 12 Target articles
const targetArticles = [
  { file: 'BPICertifiedGuide.tsx', slug: 'bpi-certified-guide' },
  { file: 'CoffeeDegassingValveGuide.tsx', slug: 'coffee-degassing-valve-guide' },
  { file: 'CoffeePackagingGuide.tsx', slug: 'coffee-packaging-guide' },
  { file: 'CompostableBabyFoodPackagingGuide.tsx', slug: 'compostable-baby-food-packaging-guide' },
  { file: 'CompostableHumidityControlGuide.tsx', slug: 'compostable-humidity-control-guide' },
  { file: 'CompostableStandUpPouchesGuide.tsx', slug: 'compostable-stand-up-pouches-guide' },
  { file: 'CustomCompostablePouchSuppliersGuide.tsx', slug: 'custom-compostable-pouch-suppliers-guide' },
  { file: 'CustomPrintedMaterialsGuide.tsx', slug: 'custom-printed-materials-guide' },
  { file: 'DTCSustainablePackagingGuide.tsx', slug: 'dtc-sustainable-packaging-guide' },
  { file: 'DigitalPrintingEcoPackagingGuide.tsx', slug: 'digital-printing-eco-packaging-guide' },
  { file: 'EcoFriendlyFoodPackagingGuide.tsx', slug: 'eco-friendly-food-packaging-guide' },
  { file: 'EcoPackagingRegulationsGuide.tsx', slug: 'eco-packaging-regulations-guide' }
];

function cleanJSX(jsx: string): string {
  let html = jsx;
  
  // 1. Remove comments {/* ... */}
  html = html.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  
  // 2. Remove className attributes
  html = html.replace(/className="[^"]*"/g, '');
  
  // 3. Remove custom icon tags like <Award ... />, <Briefcase ... />
  html = html.replace(/<Award[^>]*\/>/g, '🏆');
  html = html.replace(/<FileCheck[^>]*\/>/g, '📋');
  html = html.replace(/<DollarSign[^>]*\/>/g, '💵');
  html = html.replace(/<Target[^>]*\/>/g, '🎯');
  html = html.replace(/<Briefcase[^>]*\/>/g, '💼');
  html = html.replace(/<FileText[^>]*\/>/g, '📄');
  html = html.replace(/<HelpCircle[^>]*\/>/g, '❓');
  html = html.replace(/<Droplets[^>]*\/>/g, '💧');
  html = html.replace(/<AlertTriangle[^>]*\/>/g, '⚠️');
  html = html.replace(/<Shield[^>]*\/>/g, '🛡️');
  html = html.replace(/<CheckCircle[^>]*\/>/g, '✅');
  html = html.replace(/<Lightbulb[^>]*\/>/g, '💡');
  html = html.replace(/<ExternalLink[^>]*\/>/g, '🔗');
  html = html.replace(/<Calendar[^>]*\/>/g, '📅');
  html = html.replace(/<Clock[^>]*\/>/g, '⏱️');
  html = html.replace(/<ArrowRight[^>]*\/>/g, '➡️');
  html = html.replace(/<Building2[^>]*\/>/g, '🏢');
  html = html.replace(/<ChevronDown[^>]*\/>/g, '🔽');
  
  // 4. Convert <Link to="..."> to <a href="...">
  html = html.replace(/<Link\s+to="([^"]*)"[^>]*>([\s\S]*?)<\/Link>/g, '<a href="$1">$2</a>');
  
  // 5. Replace **text** with <strong>text</strong>
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  
  // 6. Clean up simple react braces like {' '} or similar
  html = html.replace(/\{' '\}/g, ' ');
  html = html.replace(/\{" "\}/g, ' ');
  
  // 7. Strip inline styles if they are React objects style={{...}}
  html = html.replace(/style=\{\{\s*[^}]+\s*\}\}/g, '');

  // 8. Clean up React fragments like <> and </>
  html = html.replace(/<\s*>/g, '').replace(/<\s*\/\s*>/g, '');

  // 9. Clean up trailing spaces before > inside opening tags
  html = html.replace(/<(\w+)\s+>/g, '<$1>');

  // 10. Convert special symbols
  html = html.replace(/&amp;/g, '&');
  html = html.replace(/&lt;/g, '<');
  html = html.replace(/&gt;/g, '>');
  html = html.replace(/&quot;/g, '"');
  html = html.replace(/&#39;/g, "'");

  return html.trim();
}

function parseTSXFile(fileText: string) {
  // Extract top-level props
  const titleMatch = fileText.match(/title="([^"]+)"/);
  const metaDescriptionMatch = fileText.match(/metaDescription="([\s\S]*?)"/);
  const canonicalUrlMatch = fileText.match(/canonicalUrl="([^"]+)"/);
  const authorMatch = fileText.match(/author="([^"]+)"/);
  const publishedDateMatch = fileText.match(/publishedDate="([^"]+)"/);
  const readTimeMatch = fileText.match(/readTime="([^"]+)"/);
  const heroImageMatch = fileText.match(/heroImage="([^"]+)"/);
  
  // Handlers for multiline or complex heroSubtitle / excerpts
  const heroSubtitleMatch = fileText.match(/heroSubtitle="([\s\S]*?)"/) || fileText.match(/heroSubtitle=\{`([\s\S]*?)`\}/);
  const categoryTagMatch = fileText.match(/categoryTag="([^"]+)"/);

  // Extract keywords array
  const keywordsMatch = fileText.match(/keywords=\{\s*(\[[^\]]+\])\s*\}/);
  let keywords: string[] = [];
  if (keywordsMatch) {
    try {
      keywords = eval(keywordsMatch[1]);
    } catch (e) {
      // fallback
      const kws = keywordsMatch[1].replace(/[\[\]']/g, '').split(',').map(s => s.trim());
      keywords = kws.filter(Boolean);
    }
  }

  // Extract sections
  const sections: { id: string; title: string; content: string }[] = [];
  
  // Locate sections array
  const sectionsBlockMatch = fileText.match(/const sections(?:[\s\S]*?)=\s*\[([\s\S]+?)\]\s*(?:const relatedArticles|\r?\n\s*const relatedArticles|\r?\n\s*const faqSections)/);
  if (sectionsBlockMatch) {
    const block = sectionsBlockMatch[1];
    const sectionRegex = /\{\s*id:\s*'([^']+)'(?:[\s\S]*?)title:\s*'([^']+)'(?:[\s\S]*?)content:\s*\(([\s\S]+?)\)\s*\}/g;
    let match;
    while ((match = sectionRegex.exec(block)) !== null) {
      sections.push({
        id: match[1],
        title: match[2],
        content: cleanJSX(match[3])
      });
    }
  }

  // Extract FAQ Sections if any
  const faqSections: { q: string; a: string }[] = [];
  const faqBlockMatch = fileText.match(/const faqSections\s*=\s*\[([\s\S]+?)\]/);
  if (faqBlockMatch) {
    const block = faqBlockMatch[1];
    const faqRegex = /\{\s*q:\s*"([^"]+)"(?:[\s\S]*?)a:\s*"([^"]+)"\s*\}/g;
    let match;
    while ((match = faqRegex.exec(block)) !== null) {
      faqSections.push({
        q: match[1],
        a: match[2]
      });
    }
  }

  return {
    title: titleMatch ? titleMatch[1] : '',
    metaDescription: metaDescriptionMatch ? metaDescriptionMatch[1] : '',
    canonicalUrl: canonicalUrlMatch ? canonicalUrlMatch[1] : '',
    author: authorMatch ? authorMatch[1] : 'Ryan Wong',
    publishedDate: publishedDateMatch ? publishedDateMatch[1] : '2026-05-30',
    readTime: readTimeMatch ? readTimeMatch[1] : '10 min',
    heroImage: heroImageMatch ? heroImageMatch[1] : '',
    heroSubtitle: heroSubtitleMatch ? heroSubtitleMatch[1].trim() : '',
    categoryTag: categoryTagMatch ? categoryTagMatch[1] : 'Guides',
    keywords,
    sections,
    faqSections
  };
}

function assembleContentHTML(parsed: any): string {
  let html = '';
  
  // Add Sections
  parsed.sections.forEach((sec: any) => {
    html += `<h2>${sec.title}</h2>\n<div>\n${sec.content}\n</div>\n\n`;
  });
  
  // Add FAQs if present
  if (parsed.faqSections && parsed.faqSections.length > 0) {
    html += `<h2>Frequently Asked Questions (FAQ)</h2>\n<div class="faq-section">\n`;
    parsed.faqSections.forEach((faq: any) => {
      html += `  <h3>${faq.q}</h3>\n  <p>${faq.a}</p>\n`;
    });
    html += `</div>\n\n`;
  }
  
  // Append B2B standard CTA
  html += `<h2>Ready to Upgrade Your Packaging?</h2>
<p>Whether you're a startup packaging your very first batch or an enterprise brand aiming to optimize your supply chain, AchievePack delivers sustainable, high-barrier custom printed pouches with zero plate fees and low minimum order quantities starting from just 100 pieces.</p>
<ul>
  <li><a href="/store">Browse our eco-friendly pouch store</a> - starting from 100 units</li>
  <li><a href="/materials/compostable">Explore certified compostable structures</a></li>
  <li><a href="/materials/recyclable-mono-pe">Check out curbside recyclable Mono-PE options</a></li>
</ul>`;

  return html;
}

function main() {
  console.log("🚀 Beginning parsing B2C blog components...");
  
  const newBlogPosts: any[] = [];
  
  targetArticles.forEach(({ file, slug }) => {
    const filePath = path.join(blogDir, file);
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Target file not found: ${filePath}`);
      process.exit(1);
    }
    
    console.log(`📖 Parsing ${file}...`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const parsed = parseTSXFile(fileContent);
    const htmlContent = assembleContentHTML(parsed);
    
    const readTimeMinutes = parseInt(parsed.readTime) || 8;
    const cleanDate = parsed.publishedDate.substring(0, 10);
    
    const blogPost = {
      id: slug,
      slug: slug,
      title: parsed.title.replace(/ \| pouch\.eco.*/gi, '').replace(/ \| China.*/gi, '').trim(),
      excerpt: parsed.heroSubtitle || parsed.metaDescription,
      content: htmlContent,
      author: parsed.author,
      publishDate: cleanDate,
      category: parsed.categoryTag === 'TIPS' || parsed.categoryTag === 'Tips' ? 'Guides' : parsed.categoryTag,
      tags: parsed.keywords,
      featuredImage: parsed.heroImage || '/imgs/blog/pouch_sizing_density_guide.png',
      readTime: readTimeMinutes,
      metaDescription: parsed.metaDescription
    };
    
    newBlogPosts.push(blogPost);
    console.log(`✅ Extracted: "${blogPost.title}" (${slug})`);
  });
  
  // 2. Append to src/data/blogData.ts
  console.log(`📝 Appending ${newBlogPosts.length} entries to ${blogDataPath}...`);
  let blogDataContent = fs.readFileSync(blogDataPath, 'utf-8');
  
  // Check which blog posts are already in the array to avoid duplication
  const existingSlugsMatches = blogDataContent.match(/slug:\s*"([^"]+)"/g) || [];
  const existingSlugs = existingSlugsMatches.map(m => m.match(/"([^"]+)"/)?.[1]).filter(Boolean);
  
  const postsToInject = newBlogPosts.filter(p => !existingSlugs.includes(p.slug));
  
  if (postsToInject.length === 0) {
    console.log("⚠️ All blog posts already exist in blogData.ts. Skipping database write.");
  } else {
    // Find the end of the blogPosts array
    // It ends right before export const blogCategories = [ or the semicolon and closing bracket
    const arrayEndIndex = blogDataContent.lastIndexOf('];\n\nexport const blogCategories');
    if (arrayEndIndex === -1) {
      console.error("❌ Could not find end of blogPosts array in blogData.ts!");
      process.exit(1);
    }
    
    let entriesString = '';
    postsToInject.forEach(post => {
      entriesString += `,\n  {\n`;
      entriesString += `    id: "${post.id}",\n`;
      entriesString += `    slug: "${post.slug}",\n`;
      entriesString += `    title: ${JSON.stringify(post.title)},\n`;
      entriesString += `    excerpt: ${JSON.stringify(post.excerpt)},\n`;
      entriesString += `    content: \`${post.content.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`,\n`;
      entriesString += `    author: "${post.author}",\n`;
      entriesString += `    publishDate: "${post.publishDate}",\n`;
      entriesString += `    category: "${post.category}",\n`;
      entriesString += `    tags: ${JSON.stringify(post.tags)},\n`;
      entriesString += `    featuredImage: "${post.featuredImage}",\n`;
      entriesString += `    readTime: ${post.readTime},\n`;
      entriesString += `    metaDescription: ${JSON.stringify(post.metaDescription)}\n`;
      entriesString += `  }`;
    });
    
    const updatedBlogDataContent = 
      blogDataContent.substring(0, arrayEndIndex) + 
      entriesString + 
      blogDataContent.substring(arrayEndIndex);
      
    fs.writeFileSync(blogDataPath, updatedBlogDataContent, 'utf-8');
    console.log(`🎉 Injected ${postsToInject.length} new blog posts into blogData.ts!`);
  }

  // 3. Sync route-mapping.json
  console.log(`🌐 Updating route mappings in ${routeMappingPath}...`);
  const routeMapping = JSON.parse(fs.readFileSync(routeMappingPath, 'utf-8'));
  
  let mapUpdated = false;
  targetArticles.forEach(({ slug }) => {
    const routePath = `/blog/${slug}`;
    
    // Add to achieve if missing
    if (!routeMapping.achieve.includes(routePath)) {
      routeMapping.achieve.push(routePath);
      mapUpdated = true;
    }
    
    // Add to synced if missing
    if (!routeMapping.synced.includes(routePath)) {
      routeMapping.synced.push(routePath);
      mapUpdated = true;
    }
    
    // Add to pouch if missing (just to be safe)
    if (!routeMapping.pouch.includes(routePath)) {
      routeMapping.pouch.push(routePath);
      mapUpdated = true;
    }
  });
  
  if (mapUpdated) {
    // Sort array elements logically to maintain neat JSON ordering
    routeMapping.pouch.sort();
    routeMapping.achieve.sort();
    routeMapping.synced.sort();
    
    fs.writeFileSync(routeMappingPath, JSON.stringify(routeMapping, null, 2), 'utf-8');
    console.log("🎉 Synchronized all route mappings in route-mapping.json!");
  } else {
    console.log("⚠️ Route mappings are already up to date.");
  }
  
  console.log("🏁 Migration completed successfully!");
}

main();
