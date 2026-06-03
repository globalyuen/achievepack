import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { runAutopilotWritingPipeline } from './autopilot-agent-pipeline.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const posts = [
  {
    slug: 'bpi-certified-guide',
    keyword: 'BPI Certified Compostable Pouches',
    infographicTemplate: 'plastic-free-compostable-barrier-pouch-infographic.png'
  },
  {
    slug: 'coffee-degassing-valve-guide',
    keyword: 'Coffee Bags with Degassing Valve',
    infographicTemplate: 'curbside-recyclable-coffee-bag-infographic.png'
  },
  {
    slug: 'coffee-packaging-guide',
    keyword: 'Sustainable Coffee Packaging',
    infographicTemplate: 'curbside-recyclable-coffee-bag-infographic.png'
  },
  {
    slug: 'compostable-baby-food-packaging-guide',
    keyword: 'Compostable Baby Food Packaging',
    infographicTemplate: 'compostable-spouted-baby-puree-bag-infographic.png'
  },
  {
    slug: 'compostable-humidity-control-guide',
    keyword: 'Compostable Humidity Control Packaging',
    infographicTemplate: 'plastic-free-compostable-barrier-pouch-infographic.png'
  },
  {
    slug: 'compostable-stand-up-pouches-guide',
    keyword: 'Compostable Stand Up Pouches',
    infographicTemplate: 'kraft-paper-zipper-doypack-infographic.png'
  },
  {
    slug: 'custom-compostable-pouch-suppliers-guide',
    keyword: 'Custom Compostable Pouch Suppliers',
    infographicTemplate: 'plastic-free-compostable-barrier-pouch-infographic.png'
  },
  {
    slug: 'custom-printed-materials-guide',
    keyword: 'Custom Printed Packaging Materials',
    infographicTemplate: 'kraft-paper-zipper-doypack-infographic.png'
  },
  {
    slug: 'dtc-sustainable-packaging-guide',
    keyword: 'DTC Sustainable Packaging',
    infographicTemplate: 'tuv-backyard-compostable-packaging-infographic.png'
  },
  {
    slug: 'digital-printing-eco-packaging-guide',
    keyword: 'Digital Printing Eco Friendly Packaging',
    infographicTemplate: 'tuv-backyard-compostable-packaging-infographic.png'
  },
  {
    slug: 'eco-friendly-food-packaging-guide',
    keyword: 'Eco Friendly Food Packaging',
    infographicTemplate: 'mono-pe-recyclable-food-packaging-infographic.png'
  },
  {
    slug: 'eco-packaging-regulations-guide',
    keyword: 'Eco Friendly Packaging Regulations',
    infographicTemplate: 'plastic-free-compostable-barrier-pouch-infographic.png'
  },
  {
    slug: 'green-coffee-materials-guide',
    keyword: 'Green Coffee Packaging Materials',
    infographicTemplate: 'curbside-recyclable-coffee-bag-infographic.png'
  },
  {
    slug: 'home-compostable-guide',
    keyword: 'Home Compostable Packaging',
    infographicTemplate: 'kraft-paper-zipper-doypack-infographic.png'
  },
  {
    slug: 'industrial-compostable-guide',
    keyword: 'Industrial Compostable Packaging',
    infographicTemplate: 'plastic-free-compostable-barrier-pouch-infographic.png'
  },
  {
    slug: 'low-moq-packaging-guide',
    keyword: 'Low MOQ Custom Printed Packaging',
    infographicTemplate: 'tuv-backyard-compostable-packaging-infographic.png'
  },
  {
    slug: 'low-moq-startup-packaging-guide',
    keyword: 'Low MOQ Packaging for Startups',
    infographicTemplate: 'tuv-backyard-compostable-packaging-infographic.png'
  },
  {
    slug: 'organic-compliance-support-guide',
    keyword: 'Organic Packaging Compliance Support',
    infographicTemplate: 'plastic-free-compostable-barrier-pouch-infographic.png'
  },
  {
    slug: 'stamp-foil-recyclability',
    keyword: 'Writable Stampable Recyclable Pouches',
    infographicTemplate: 'kraft-paper-zipper-doypack-infographic.png'
  },
  {
    slug: 'recyclable-snack-packaging-guide',
    keyword: 'Recyclable Snack Food Packaging',
    infographicTemplate: 'mono-pe-recyclable-food-packaging-infographic.png'
  },
  {
    slug: 'usa-coffee-packaging',
    keyword: 'USA Custom Coffee Packaging',
    infographicTemplate: 'curbside-recyclable-coffee-bag-infographic.png'
  },
  {
    slug: 'usa-compostable-packaging-guide',
    keyword: 'USA Certified Compostable Packaging',
    infographicTemplate: 'plastic-free-compostable-barrier-pouch-infographic.png'
  },
  {
    slug: 'usa-labeling-guide',
    keyword: 'USA Packaging Labeling Guide',
    infographicTemplate: 'tuv-backyard-compostable-packaging-infographic.png'
  },
  {
    slug: 'usa-snacks-packaging-guide',
    keyword: 'USA Custom Snack Packaging',
    infographicTemplate: 'mono-pe-recyclable-food-packaging-infographic.png'
  }
];

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log(`🚀 Starting generation for ${posts.length} blog posts sequentially...`);
  
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    console.log(`\n==================================================`);
    console.log(`📝 Processing post [${i + 1}/${posts.length}]: ${post.slug}`);
    console.log(`==================================================`);
    
    // Copy the infographic first
    const srcPath = path.join(__dirname, `../public/imgs/infographics/${post.infographicTemplate}`);
    const destPath = path.join(__dirname, `../public/imgs/infographics/${post.slug}-infographic.png`);
    
    try {
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`✅ Infographic copied successfully to: ${post.slug}-infographic.png`);
      } else {
        console.warn(`⚠️ Warning: Infographic template not found at ${srcPath}`);
      }
    } catch (err) {
      console.error(`❌ Failed to copy infographic for ${post.slug}:`, err.message);
    }
    
    // Execute autopilot pipeline
    try {
      await runAutopilotWritingPipeline('pouch.eco', post.keyword, true, post.slug);
      console.log(`🎉 Successfully generated and published: /blog/${post.slug}`);
      console.log(`🔗 B2B Link: https://achievepack.com/blog/${post.slug}`);
      console.log(`🔗 B2C Link: https://pouch.eco/blog/${post.slug}`);
    } catch (err) {
      console.error(`❌ Error generating content for ${post.slug}:`, err.message);
    }
    
    // Sleep for 3 seconds before next request to prevent rapid rate limiting
    console.log(`⏳ Sleeping for 3 seconds...`);
    await sleep(3000);
  }
  
  console.log('\n🏁 Sequenced blog post migration complete!');
}

run().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
