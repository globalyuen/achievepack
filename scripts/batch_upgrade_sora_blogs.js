import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env variables
const envPath = path.resolve(__dirname, '../.env.local');
let envConfig = {};
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const parts = line.split('=');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join('=').trim().replace(/['"]/g, '');
      if (key === 'VITE_SUPABASE_URL') envConfig['URL'] = val;
      if (key === 'SUPABASE_SERVICE_KEY') envConfig['SERVICE_KEY'] = val;
    }
  });
}

const supabaseUrl = envConfig['URL'] || '';
const supabaseKey = envConfig['SERVICE_KEY'] || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// SEEDS
const BRAND_SEEDS = [
  "Roastwood Coffee", "GreenLeaf Tea", "PureNature Superfoods", "BarkBites", "SnackSentry",
  "CleanCycle Cosmetics", "VitaBlend Nutrition", "BloomBrews", "SpiceRoute Co", "DailyGrind Roasters",
  "NurturePure", "SeaSalt & Co", "CocoaCrafters", "HerbVitality", "ZenPowder", "HappyPaws",
  "CrunchTime", "AlpineBrews", "NutriFlow", "FreshPress", "TerraSnacks", "PodPerfection",
  "OrchardNectar", "PureProtein", "PawfectBites", "BotanicaBlend", "RoastCraft", "GreenLife Organics",
  "HoneyHarvest", "CleanBite"
];

const COUNTRY_SEEDS = [
  "Germany", "USA", "Canada", "United Kingdom", "Australia", "France", "Netherlands", "Switzerland",
  "Sweden", "New Zealand", "Japan", "Singapore", "Norway", "Denmark", "Ireland", "Austria",
  "Italy", "Spain", "Belgium", "Finland"
];

const SHAPE_SEEDS = [
  "Stand up pouch", "Flat bottom pouch", "Gusset pouch", "Sachet", "Center sealed bag", "Quad seal pouch"
];

const CLOSURE_SEEDS = {
  "Stand up pouch": ["regular zipper", "one sided zipper", "tin tie", "sticker"],
  "Flat bottom pouch": ["regular zipper", "one sided zipper", "tin tie", "sticker"],
  "Quad seal pouch": ["regular zipper", "one sided zipper", "tin tie", "sticker"],
  "Gusset pouch": ["sticker", "tin tie", "stitch"],
  "Sachet": ["sticker", "stitch"],
  "Center sealed bag": ["sticker", "tin tie", "stitch"]
};

const COMPOSTABLE_MATERIALS = [
  {
    name: "Bio Cello Duplex Clear",
    structure: "Cellulose / PLA / PBAT",
    specLink: "/spec/bio-cello-duplex-clear",
    description: "Transparent cellulose-based biopolymer duplex laminate offering high clarity and good moisture/oxygen barrier protection."
  },
  {
    name: "Bio Cellulose Triplex Highest Barrier",
    structure: "High Barrier Cellulose / Metalised Cellulose / PBAT",
    specLink: "/spec/bio-cello-triplex-highest",
    description: "Maximum barrier compostable structure approaching conventional film performance with OTR <1 and WVTR <3."
  },
  {
    name: "Bio Cellulose Triplex Metalised",
    structure: "Cellulose / Metalised Cellulose / PLA",
    specLink: "/spec/bio-cello-triplex-metalised",
    description: "High barrier metallized compostable structure with excellent oxygen barrier and sleek metallic inner appearance."
  },
  {
    name: "Bio Kraft PBAT Low Barrier",
    structure: "Kraft Paper / PBAT / PLA",
    specLink: "/spec/bio-kraft-pbat-low",
    description: "Natural brown kraft paper exterior laminated to biodegradable PBAT and PLA sealing layers for an organic look."
  },
  {
    name: "Bio Kraft VM Cello",
    structure: "Kraft Paper / Metalised Cellulose / PLA",
    specLink: "/spec/bio-kraft-vm-cello",
    description: "Medium-to-high barrier structure combining natural kraft paper with vacuum-metallized cellulose film."
  }
];

const PRODUCT_SEEDS = [
  "specialty roasted coffee beans", "organic matcha green tea powder", "raw vegan superfood protein powder", "freeze-dried organic snacks", "premium natural pet treats", "biodegradable laundry detergent pods", "all-natural herbal tea blends", "organic dried fruit snacks", "cold-pressed spice extracts", "gluten-free cereal grains"
];

const INFOGRAPHIC_TEMPLATES = [
  "coffee-packaging-guide",
  "compostable-baby-food-packaging-guide",
  "compostable-stand-up-pouches-for-snacks",
  "compostable-stand-up-pouches-guide",
  "custom-digital-printed-sachets",
  "custom-printed-materials-guide",
  "custom-shape-die-cut-pouch",
  "digital-printing-eco-packaging-guide",
  "eco-friendly-food-packaging-guide",
  "eco-packaging-regulations-guide",
  "grease-proof-pet-treat-packaging",
  "home-compostable-guide",
  "industrial-compostable-guide",
  "low-moq-packaging-guide",
  "low-moq-startup-packaging-guide",
  "mylar-vs-compostable-packaging",
  "plastic-free-compostable-barrier-pouch",
  "powder-proof-zipper-pouch",
  "recyclable-high-barrier-nuts-pouch",
  "tuv-backyard-compostable-packaging"
];

function generateContentForDomain(slug, keyword, brand, country, shape, closure, material, product, domain) {
  const isPouch = domain === 'pouch.eco';
  const titleWord = keyword.replace(/\b\w/g, c => c.toUpperCase());

  const title = isPouch
    ? `How ${brand} (${country}) Sourced Certified Compostable ${titleWord}`
    : `B2B Procurement Blueprint: Sourcing Custom ${titleWord} for ${brand} (${country})`;

  const excerpt = isPouch
    ? `Discover how ${brand} transition to zero-waste custom ${shape} packaging in ${country} using certified compostable ${material.name}.`
    : `Technical lamination and mechanical validation report on ${brand}'s transition to custom high-barrier ${shape} packaging.`;

  const meta_description = `${excerpt.substring(0, 150)}... Sourcing guide for custom ${keyword} by Ryan Wong.`;

  const keyTakeaways = isPouch
    ? [
        `Switching to ${material.name} helped ${brand} achieve 100% plastic-free packaging alignment.`,
        `Low MOQs (starting at 100 pcs) allowed testing sizes for the ${country} market without inventory risk.`,
        `The custom integrated ${closure} ensures robust closure while maintaining standard commercial compostability.`
      ]
    : [
        `Mechanical run rate validation for ${brand}'s automatic packaging line using ${material.name}.`,
        `Achieving Water Vapor Transmission Rate (WVTR) <2.0 to protect ${product} freshness.`,
        `Procurement optimization tiers for high-volume orders (10,000+ units) satisfying ${country} environmental regulations.`
      ];

  const specTable = [
    { "specification": "Material Structure", "parameter": `${material.name} (${material.structure})`, "value": "100% certified compostable, satisfies EN 13432 standards" },
    { "specification": "Pouch Dimension", "parameter": `Custom OEM ${shape} size`, "value": `Tailored to ${brand}'s specific fill weight of ${product}` },
    { "specification": "Closure System", "parameter": `Compostable ${closure}`, "value": `Preserves freshness, certified food contact compliant` },
    { "specification": "Barrier Integrity", "parameter": "High barrier lamination layers", "value": "Protects against oxidation, aroma loss, and moisture ingress" },
    { "specification": "Regulatory Compliance", "parameter": "BPI, TÜV Austria Compostable", "value": `Approved for disposal in commercial composting systems in ${country}` }
  ];

  // alternating paragraphs
  const paragraph1 = isPouch
    ? `When ${brand} in ${country} set out to find the perfect custom printed ${keyword}, they faced a classic startup dilemma: balancing high shelf-appeal with zero-waste principles. As a passionate brand, they wanted to ensure their premium ${product} stayed fresh without contributing to plastic pollution. By choosing a custom compostable ${shape} made from ${material.name}, they secured an ultra-clean barrier structure of ${material.structure} that completely replaces legacy plastics while fitting their brand values.`
    : `In B2B packaging procurement, transitioning to high-barrier ${keyword} requires rigorous validation. For ${brand} in ${country}, sourcing custom compostable ${shape} packaging for their high-speed filling lines meant resolving core barrier performance constraints. By selecting ${material.name} (${material.structure}), their supply chain team successfully matched conventional shelf-life performance while aligning with the strict new packaging waste laws (PPWR) emerging across the continent.`;

  const paragraph2 = isPouch
    ? `Beyond the beautiful layout design, the mechanical performance of the bags was a key factor in their success. Sourcing their pouches with a compostable ${closure} allowed them to provide consumer convenience while keeping the packaging 100% organic-waste compatible. Their brand manager commented that the tactile matte finish and the bold print quality from HP Indigo presses instantly stood out on the shelves, driving customer loyalty and positive social reviews in ${country}.`
    : `From a materials engineering perspective, the lamination of ${material.name} provides a robust heat-sealing window on automated VFFS lines. Achieving consistent seal strength prevents leaks during logistics transit. The integration of a high-performance compostable ${closure} ensures that the package retains its gas-barrier properties. Procurement teams can leverage low minimum runs to validate barrier performance under real-world transit stress before committing to larger production runs.`;

  const paragraph3 = isPouch
    ? `For eco-conscious consumers, certifications are the only defense against greenwashing. By choosing materials certified by BPI (ASTM D6400) and TÜV Austria, ${brand} ensures that their packaging safely degrades into nutrient-rich soil. This transparency has built immense trust with their target audience, attracting repeat business and booking direct consultations for custom orders. Switching to sustainable packaging has proven that small startups can achieve massive environmental impact with the right packaging partner.`
    : `From a regulatory audit standpoint, having verifiable BPI and TÜV certifications shields ${brand} from compliance liabilities in ${country}. Commercial retailers increasingly demand third-party validation of compostability before allocating shelf space. By providing full technical test reports and certificate maps, Achieve Pack supports B2B partners in validating their supply chain sustainability claims, making them fully audit-compliant and ready for commercial retail distribution.`;

  const sections = [
    {
      "title": `Sourcing Custom ${titleWord} for ${brand}`,
      "icon": "info",
      "key_takeaways": keyTakeaways,
      "paragraphs": [
        {
          "text": paragraph1,
          "image_prompt": `Clean studio product photography of a custom compostable ${shape} for ${brand} showing natural texture and design, off-white background.`
        }
      ]
    },
    {
      "title": "Technical Blueprint & Material Engineering",
      "icon": "package",
      "specs_table": specTable,
      "paragraphs": [
        {
          "text": paragraph2,
          "image_prompt": `Infographic illustrating the multi-layer film barrier structure of ${material.name} showing layers: Cellulose, PLA, PBAT.`
        }
      ]
    },
    {
      "title": "Compliance, Certifications & Retail Launch",
      "icon": "check",
      "paragraphs": [
        {
          "text": paragraph3,
          "image_prompt": `Diagram displaying the certification flow from raw material to TÜV Austria OK Compost and BPI ASTM D6400 approvals.`
        }
      ]
    }
  ];

  const faqs = isPouch
    ? [
        {
          "q": `How does the compostable ${closure} decompose?`,
          "a": `The custom ${closure} is made from a certified compostable biopolymer resin that breaks down entirely in commercial composting environments, leaving no plastic residues.`
        },
        {
          "q": `What is the minimum order quantity (MOQ) for custom printed ${shape}s?`,
          "a": `Through our digital print line, we support MOQs starting at just 100 pieces, perfect for startup test batches and quick product launches.`
        },
        {
          "q": "Are these compostable bags food-safe?",
          "a": "Yes! All layers, including the inks and adhesives, are fully compliant with FDA and EU food contact regulations, ensuring total product safety."
        },
        {
          "q": `Can I get a custom sized sample pack for ${brand}?`,
          "a": "Yes, we provide sample packs of various sizes and barrier levels so you can test size compatibility and drop-test performance before committing."
        },
        {
          "q": "How long do these bags take to compost?",
          "a": "In commercial composting facilities (under heat, moisture, and microbes), the pouches fully degrade within 90 to 180 days according to ASTM D6400 standards."
        },
        {
          "q": "What happens if there are no industrial composting facilities near me?",
          "a": "Our kraft paper and cellulose-based structures (like Bio Kraft PBAT) are designed with a high degree of home-compostability, safely breaking down in home compost bins over a slightly longer timeframe."
        }
      ]
    : [
        {
          "q": `Is the compostable ${closure} compatible with automatic pouch-filling machinery?`,
          "a": `Yes, our compostable ${closure} is specifically engineered to run smoothly on automatic pouch packaging lines without jamming or slowing down cycles.`
        },
        {
          "q": `What are the bulk volume pricing tiers for ${brand}?`,
          "a": "We offer structured volume discounts for runs of 10,000+ units, with maximum cost-efficiency achieved at runs of 50,000 and 100,000 units."
        },
        {
          "q": `What are the barrier parameters of ${material.name}?`,
          "a": `The ${material.name} structure achieves excellent barrier protection: Water Vapor Transmission Rate (WVTR) <2.0 g/m²/24h and Oxygen Transmission Rate (OTR) <5.0 cc/m²/24h.`
        },
        {
          "q": "Do you provide full compliance test reports?",
          "a": "Yes, we supply full technical data sheets (TDS), certificates of compostability (BPI, TÜV Austria), and heavy metal compliance reports for your compliance audit."
        },
        {
          "q": `Can we run ${material.name} on standard heat-sealing jaws?`,
          "a": "Yes! The film is designed to run on standard sealing bars with minor adjustments to temperature dwell times, which our technical team will help you calibrate."
        },
        {
          "q": "What quality assurance checks are executed on production runs?",
          "a": "We run vacuum chamber leak tests, seal tensile strength tests, slip coefficient testing for VFFS lines, and standard drop verification tests."
        }
      ];

  const cta = isPouch
    ? {
        "title": `Order Custom ${titleWord} Sample Kit`,
        "description": `Get plain and printed premium pouch samples delivered straight to your factory door for ${brand}. Fully credited back on your first custom order.`
      }
    : {
        "title": `Request a B2B Bulk Sourcing Quote`,
        "description": `Send us your packaging specifications and estimated annual volume to receive a detailed B2B price quote for ${brand} within 24 hours.`
      };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return {
    title,
    excerpt,
    meta_description,
    sections,
    faqs,
    cta,
    jsonLd
  };
}

async function run() {
  console.log('📡 Fetching all blog posts from pouch_seo_blog...');
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('*');

  if (error) {
    console.error('❌ Error querying Supabase:', error.message);
    process.exit(1);
  }

  console.log(`Fetched ${posts.length} posts.`);

  let upgradedCount = 0;

  for (const post of posts) {
    const slug = post.slug;
    const title = post.title || '';
    const keyword = post.slug.replace(/-/g, ' ');

    // Filter to only compostable-related or generic blogs
    const targetKeywords = ['compostable', 'sustainable', 'biodegradable', 'kraft', 'eco', 'recyclable', 'pouch', 'sachet', 'bag', 'retort', 'valve', 'barrier', 'doypack', 'sizing', 'guide', 'mylar', 'pe', 'pp', 'flat'];
    const isTarget = targetKeywords.some(tk => slug.toLowerCase().includes(tk));

    if (!isTarget) {
      console.log(`Skipping non-target slug: ${slug}`);
      continue;
    }

    // Seeds hashing based on slug
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
      hash = slug.charCodeAt(i) + ((hash << 5) - hash);
    }
    hash = Math.abs(hash);

    const brand = BRAND_SEEDS[hash % BRAND_SEEDS.length];
    const country = COUNTRY_SEEDS[(hash + 3) % COUNTRY_SEEDS.length];
    const shape = SHAPE_SEEDS[(hash + 7) % SHAPE_SEEDS.length];
    const closures = CLOSURE_SEEDS[shape] || ["regular zipper"];
    const closure = closures[(hash + 11) % closures.length];
    const material = COMPOSTABLE_MATERIALS[(hash + 17) % COMPOSTABLE_MATERIALS.length];
    const product = PRODUCT_SEEDS[(hash + 23) % PRODUCT_SEEDS.length];

    console.log(`\n⚙️ Upgrading slug: "${slug}"`);
    console.log(`   - Random Config: Brand="${brand}", Country="${country}", Shape="${shape}", Closure="${closure}", Material="${material.name}"`);

    // Generate pouch and achievepack domain-specific content versions
    const pouchVersion = generateContentForDomain(slug, keyword, brand, country, shape, closure, material, product, 'pouch.eco');
    const achievepackVersion = generateContentForDomain(slug, keyword, brand, country, shape, closure, material, product, 'achievepack.com');

    // Infographic template mapping
    const templateName = INFOGRAPHIC_TEMPLATES[hash % INFOGRAPHIC_TEMPLATES.length];
    console.log(`   - Mapping Infographic template: "${templateName}"`);

    // Copy infographic templates to actual post slug infographics if not existing
    for (let i = 1; i <= 6; i++) {
      const srcName = i === 1 
        ? `${templateName}-infographic.png` 
        : `${templateName}-infographic-${i}.png`;
      const destName = i === 1 
        ? `${slug}-infographic.png` 
        : `${slug}-infographic-${i}.png`;

      const srcPath = path.resolve(__dirname, `../public/imgs/infographics/${srcName}`);
      const destPath = path.resolve(__dirname, `../public/imgs/infographics/${destName}`);

      if (fs.existsSync(srcPath)) {
        if (!fs.existsSync(destPath)) {
          fs.copyFileSync(srcPath, destPath);
          // console.log(`     * Copied infographic ${srcName} -> ${destName}`);
        }
      }
    }

    // Hero image mapping (verify extension: default to png, check webp)
    let heroImagePath = `/imgs/blog/heros/${slug}-hero.png`;
    const localWebpHero = path.resolve(__dirname, `../public/imgs/blog/heros/${slug}-hero.webp`);
    if (fs.existsSync(localWebpHero)) {
      heroImagePath = `/imgs/blog/heros/${slug}-hero.webp`;
    }

    // Combined JSONB content
    const combinedContent = {
      approved: false, // Keep as draft first so Ryan can preview and approve individually
      pouch: pouchVersion,
      achievepack: achievepackVersion,
      // Default fallback values at root of content JSONB
      ...pouchVersion
    };

    // Update database row
    const { error: updateError } = await supabase
      .from('pouch_seo_blog')
      .update({
        title: pouchVersion.title,
        excerpt: pouchVersion.excerpt,
        meta_title: pouchVersion.title,
        meta_description: pouchVersion.meta_description,
        image_url: heroImagePath,
        content: combinedContent,
        category: 'Sustainability',
        source_url: `https://pouch.eco/blog/${slug}`
      })
      .eq('slug', slug);

    if (updateError) {
      console.error(`   ❌ Failed to update slug: ${slug}:`, updateError.message);
    } else {
      console.log(`   ✅ Successfully upgraded slug: "${slug}"`);
      upgradedCount++;
    }
  }

  console.log(`\n🎉 Batch upgrade completed! Total upgraded posts: ${upgradedCount}`);
  process.exit(0);
}

run();
