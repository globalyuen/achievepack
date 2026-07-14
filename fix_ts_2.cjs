const fs = require('fs');
const path = require('path');

const dir = './src/pages/knowledge';
const files = [
  'DupontPaperToteBagsBenefits.tsx',
  'TyvekVsCanvasToteBags.tsx',
  'EcoFriendlyDupontPaperBags.tsx'
];

for (const file of files) {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/<BlogArticleTemplate[^>]*>[\s\S]*?<\/BlogArticleTemplate>/, 
    `<BlogArticleTemplate
          title="Guide"
          metaDescription="Guide"
          canonicalUrl="https://pouch.eco"
          heroTitle="Guide"
          heroSubtitle="Guide"
          heroImage="/imgs/knowledge/placeholder.jpg"
          author="Ryan Wong"
          publishDate="2024-03-20"
          sections={[{id: 'main-content', title: 'Guide', content: content}]}
        />`);

  content = content.replace(/<SEOPageLayout[^>]*>[\s\S]*?<\/SEOPageLayout>/, 
    `<SEOPageLayout
          title="Guide"
          description="Guide"
          sections={[{id: 'main-content', title: 'Guide', content: content}]}
        />`);

  // Fix DualDomainSEOHead props in these 3 files as well since it caused an error
  content = content.replace(/<DualDomainSEOHead[^>]*\/>/g, `<DualDomainSEOHead title="Guide" description="Guide" keywords={["guide"]} ogImage="/imgs/knowledge/placeholder.jpg" />`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed', file);
}

// Fix main.tsx imports to remove the 6 deleted files
const mainPath = './src/main.tsx';
let main = fs.readFileSync(mainPath, 'utf8');
main = main.replace(/const CustomLaserEngravedWoodenBoxes = lazyWithRetry\(\(\) => import\('\.\/pages\/knowledge\/CustomLaserEngravedWoodenBoxes'\)\)\n/g, '');
main = main.replace(/const PremiumSoftWoodGiftBoxes = lazyWithRetry\(\(\) => import\('\.\/pages\/knowledge\/PremiumSoftWoodGiftBoxes'\)\)\n/g, '');
main = main.replace(/const FSCSustainableSoftWoodPackaging = lazyWithRetry\(\(\) => import\('\.\/pages\/knowledge\/FSCSustainableSoftWoodPackaging'\)\)\n/g, '');
main = main.replace(/const DupontTyvekEcoToteBagsGuide = lazyWithRetry\(\(\) => import\('\.\/pages\/knowledge\/DupontTyvekEcoToteBagsGuide'\)\)\n/g, '');
main = main.replace(/const DupontTyvekVsKraftPaperToteBags = lazyWithRetry\(\(\) => import\('\.\/pages\/knowledge\/DupontTyvekVsKraftPaperToteBags'\)\)\n/g, '');
main = main.replace(/const DupontTyvekTearResistantToteBags = lazyWithRetry\(\(\) => import\('\.\/pages\/knowledge\/DupontTyvekTearResistantToteBags'\)\)\n/g, '');
fs.writeFileSync(mainPath, main, 'utf8');

