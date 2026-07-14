const fs = require('fs');
const path = require('path');

const dir = './src/pages/knowledge';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Fix keywords="a, b" -> keywords={["a", "b"]}
  if (content.match(/keywords="([^"]+)"/)) {
    content = content.replace(/keywords="([^"]+)"/, (match, p1) => {
      const arr = p1.split(',').map(s => `"${s.trim()}"`).join(', ');
      return `keywords={[${arr}]}`;
    });
    changed = true;
  }
  
  // Also check if keywords={'a, b'} which might be an error too
  if (content.match(/keywords=\{'([^']+)'\}/)) {
    content = content.replace(/keywords=\{'([^']+)'\}/, (match, p1) => {
      const arr = p1.split(',').map(s => `"${s.trim()}"`).join(', ');
      return `keywords={[${arr}]}`;
    });
    changed = true;
  }

  // Find DualDomainSEOHead props to use them
  const titleMatch = content.match(/title="([^"]+)"/);
  const descMatch = content.match(/description="([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : "Guide";
  const desc = descMatch ? descMatch[1] : "Description";
  const heroImageMatch = content.match(/ogImage="([^"]+)"/);
  const heroImage = heroImageMatch ? heroImageMatch[1] : "/imgs/knowledge/placeholder.jpg";
  const canonicalUrlMatch = content.match(/canonicalUrl="([^"]+)"/);
  let canonicalUrl = canonicalUrlMatch ? canonicalUrlMatch[1] : "https://pouch.eco";
  canonicalUrl = canonicalUrl.replace('achievepack.com', 'pouch.eco'); // for pouch

  if (content.includes('<BlogArticleTemplate>')) {
    content = content.replace('<BlogArticleTemplate>', 
      `<BlogArticleTemplate
          title="${title}"
          metaDescription="${desc}"
          canonicalUrl="${canonicalUrl}"
          heroTitle="${title}"
          heroSubtitle="${desc}"
          heroImage="${heroImage}"
          author="Ryan Wong"
          publishDate="2024-03-20"
        >`);
    changed = true;
  }

  if (content.includes('<SEOPageLayout>')) {
    content = content.replace('<SEOPageLayout>', 
      `<SEOPageLayout
          title="${title}"
          description="${desc}"
        >`);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed', file);
  }
}
