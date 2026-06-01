const fs = require('fs');
const path = require('path');

const projectRoot = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack';
const blogDir = path.join(projectRoot, 'src/pages/pouch/blog');
const publicDir = path.join(projectRoot, 'public');

const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.tsx') && f !== 'PouchBlogArticlePage.tsx');

console.log(`Auditing ${files.length} pouch blog pages...`);

const results = [];

files.forEach(filename => {
  const filepath = path.join(blogDir, filename);
  const content = fs.readFileSync(filepath, 'utf8');

  // 1. Image Audit
  // Find all image references like "/imgs/..." or "/img-..."
  const imgRegex = /["'](\/(?:imgs|img-)[^"']+\.(?:webp|svg|png|jpg|jpeg))["']/g;
  const images = [];
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const imgPath = match[1];
    if (!images.includes(imgPath)) {
      images.push(imgPath);
    }
  }

  const brokenImages = [];
  images.forEach(img => {
    const absPath = path.join(publicDir, img);
    if (!fs.existsSync(absPath)) {
      brokenImages.push(img);
    }
  });

  // 2. Word Count (approximate text in content)
  // Stripping jsx elements and imports to count actual keywords
  const textContent = content
    .replace(/import\s+[\s\S]*?from\s+['"].*?['"]/g, '') // remove imports
    .replace(/<[^>]+>/g, ' ') // remove HTML tags
    .replace(/\{[\s\S]*?\}/g, ' ') // remove JS curly blocks
    .replace(/\s+/g, ' ') // normalize whitespace
    .trim();
  const wordCount = textContent.split(' ').filter(w => w.length > 1).length;

  // 3. 6-pillar FAQ check
  const hasFAQs = content.includes('faqSections={') || content.includes('faqSections =');

  // 4. Achieve Pack Link check
  const hasAchieveLink = content.includes('achievePackLink=') || content.includes('achievePackLink:');

  // 5. Spec translation table check
  const hasSpecTable = content.includes('procurement') || content.includes('Procurement') || content.includes('specification') || content.includes('Specifications') || content.includes('OTR') || content.includes('WVTR');

  // Calculate Score (Simple 10-step SEO scorecard out of 100)
  // - 20 points: Word Count (> 1000 words)
  // - 20 points: Image compliance (referenced images exist and > 1 image)
  // - 20 points: B2B FAQ (has interactive FAQ accordion)
  // - 20 points: Spec Translation (has procurement translation)
  // - 20 points: SIO/AEO (has field report / real user data / cross linking)
  let score = 0;
  if (wordCount > 1000) score += 20;
  else if (wordCount > 500) score += 10;

  if (images.length > 0 && brokenImages.length === 0) score += 20;
  else if (images.length > 0) score += 10 - Math.min(10, brokenImages.length * 2);

  if (hasFAQs) score += 20;
  if (hasSpecTable) score += 20;
  if (hasAchieveLink) score += 20;

  results.push({
    filename,
    wordCount,
    imageCount: images.length,
    images,
    brokenImages,
    hasFAQs,
    hasAchieveLink,
    hasSpecTable,
    score
  });
});

fs.writeFileSync(
  path.join(projectRoot, 'scratch/blog_audit_results.json'),
  JSON.stringify(results, null, 2)
);

console.log('Audit complete. Results saved in scratch/blog_audit_results.json.');
results.forEach(r => {
  console.log(`- ${r.filename}: Score ${r.score}/100 | Words: ${r.wordCount} | Images: ${r.imageCount} (Broken: ${r.brokenImages.length}) | FAQ: ${r.hasFAQs ? '✅' : '❌'} | AchieveLink: ${r.hasAchieveLink ? '✅' : '❌'} | Specs: ${r.hasSpecTable ? '✅' : '❌'}`);
});
