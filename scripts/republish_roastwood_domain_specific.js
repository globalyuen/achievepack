import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const jsonPath = path.resolve(__dirname, 'sourcing-compostable-coffee-bags.json');
  if (!fs.existsSync(jsonPath)) {
    console.error('JSON file not found at:', jsonPath);
    process.exit(1);
  }

  const rawJson = fs.readFileSync(jsonPath, 'utf8');
  const postData = JSON.parse(rawJson);

  // Define B2C Pouch.eco version
  const pouchVersion = {
    title: "How Roastwood Coffee Sourced Certified Compostable Coffee Bags in Germany",
    excerpt: "Discover how Munich-based specialty roaster Roastwood Coffee navigated the strict regulations of the German Packaging Act (VerpackG) by transitioning to certified compostable Stand Up Pouches, preserving their delicate whole-bean aroma notes.",
    meta_description: "Learn how Roastwood Coffee in Germany avoided heavy VerpackG licensing fees by sourcing high-barrier compostable coffee bags featuring Bio Cello Duplex Clear, a regular PLA zipper, and a degassing valve.",
    hide_media: true,
    no_video_and_image: true,
    sections: [
      {
        icon: "info",
        title: "Understanding Sourcing Compostable Coffee Bags in Germany",
        paragraphs: [
          {
            text: "Munich-based specialty roaster Roastwood Coffee faced a critical challenge when the German Packaging Act (VerpackG) enforced strict eco-taxes on traditional multi-layer plastics. Traditional aluminum-foil laminated coffee bags—while excellent for blocking oxygen—were categorized as composite materials, which are subject to massive licensing fees that wiped out their margins for small-batch single-origins. The team had to find a high-barrier packaging solution that would keep their roasted whole coffee beans perfectly fresh while satisfying Germany's strict environmental regulations."
          },
          {
            text: "The breakthrough came when they sourced a custom-designed stand-up pouch made from Bio Cello Duplex Clear. This certified compostable duplex laminate features high-barrier cellulose (NatureFlex) paired with a biodegradable sealing layer, providing a beautiful transparent window to show off the premium roasted beans. To make it a fully circular system, the pouch is equipped with a regular PLA zipper for resealability and a plant-based compostable <a href=\"/blog/coffee-degassing-valve-guide\" class=\"underline text-emerald-600 hover:text-emerald-700 font-bold\">degassing valve</a>. For more information, explore our catalog of <a href=\"/products/compostable-coffee-bags\" class=\"underline text-emerald-600 hover:text-emerald-700 font-bold\">compostable coffee bags</a>."
          }
        ],
        key_takeaways: [
          "VerpackG Compliance: Transitioning to certified compostable packaging allowed Roastwood Coffee (Munich) to avoid heavy German registration and waste management eco-taxes under the LUCID registry.",
          "High-Barrier Bio Cello: Sourcing a duplex laminated cellulose-based structure (Bio Cello Duplex Clear) locks out ambient moisture and oxygen, preserving delicate roasted bean flavor notes.",
          "Circular Disposal: Pairing the clear cellulose layers with a PLA zipper and a compostable degassing valve ensures the entire bag disintegrates harmlessly in industrial composting facilities."
        ]
      },
      {
        icon: "package",
        title: "The Bio Cello Duplex Clear Specification Table",
        paragraphs: [
          {
            text: "Sourcing high-performance compostable coffee packaging requires understanding how bioplastics handle pressure and heat. Bio Cello Duplex Clear is engineered from wood pulp-derived cellulose, providing a natural gas barrier and high tensile strength. This structure is laminated to a plant-based sealing layer, ensuring the bags can run efficiently on automated packaging machinery without splitting. The regular PLA zipper offers a robust mechanical click when sealing, keeping humidity away from the beans and preventing clumping or staling."
          },
          {
            text: "The unsung hero of coffee preservation is the <a href=\"/blog/coffee-degassing-valve-guide\" class=\"underline text-emerald-600 hover:text-emerald-700 font-bold\">one-way degassing valve</a>. Newly roasted specialty beans release carbon dioxide (CO2) for up to two weeks, which would otherwise bloat and rupture the bag. The compostable degassing valve—made of PLA and natural resins—vents this pressure at approximately 0.05 psi while preventing external oxygen from entering. This ensures Roastwood Coffee's delicate, volatile aromatics stay locked in without utilizing non-degradable petroleum-based valves. You can easily request a <a href=\"/quotes/stand-up-pouch\" class=\"underline text-emerald-600 hover:text-emerald-700 font-bold\">custom stand up pouch quote</a> to evaluate your specific sizes."
          }
        ],
        specs_table: [
          {
            value: "100% certified compostable, complies with EU PPWR & German VerpackG",
            parameter: "Bio Cello Duplex Clear (Cellulose / PLA / PBAT)",
            specification: "Material Structure"
          },
          {
            value: "Self-standing retail shelf posture with high brand visibility",
            parameter: "Stand Up Pouch with Bottom Gusset",
            specification: "Pouch Shape"
          },
          {
            value: "Airtight, repeatable resealing, fully certified compostable",
            parameter: "Regular Zipper (PLA-based)",
            specification: "Closure Type"
          },
          {
            value: "Releases CO2 pressure (0.05 psi), blocks oxygen ingress completely",
            parameter: "Compostable One-Way Degassing Valve",
            specification: "Ventilation Option"
          },
          {
            value: "Preserves delicate coffee aromas and prevents bean staling for 9-12 months",
            parameter: "WVTR < 1.5 g/m²/day | OTR < 2.0 cc/m²/day",
            specification: "Barrier Rating"
          }
        ]
      },
      {
        icon: "check",
        title: "Drop Testing, Logistics, and B2B Sourcing",
        paragraphs: [
          {
            text: "Specialty coffee roasters cannot afford seal failures during shipping. To validate transit integrity, Roastwood Coffee put these compostable stand-up pouches through rigorous testing. Filled pouches were dropped from a height of 1.5 meters onto hard concrete in cold chambers simulating sub-zero Bavarian winters. Thanks to the elastic properties of the bio-based sealants, the Bio Cello Duplex Clear pouches absorbed the drop impact without seam failure or micro-leaks, proving their resilience for long-distance European logistics."
          },
          {
            text: "Sourcing sustainable packaging is no longer restricted to large companies with massive volume commitments. AchievePack's digital printing enables Roastwood Coffee to source custom-branded compostable bags with a <a href=\"/blog/low-moq-packaging-guide\" class=\"underline text-emerald-600 hover:text-emerald-700 font-bold\">minimum order quantity</a> (MOQ) of just 100 pieces per SKU. This lets them print unique designs for seasonal single-origin roasts with zero plate setup costs, keeping inventory lean and agile as packaging regulations evolve across the EU."
          }
        ]
      }
    ],
    faqs: postData.content.faqs,
    cta: postData.content.cta
  };

  // Define B2B Achievepack version
  const achievepackVersion = {
    title: "Roastwood Coffee Germany: Sourcing High-Barrier Compostable Coffee Bags",
    excerpt: "An in-depth packaging case study on how Munich's Roastwood Coffee transitioned to high-barrier certified compostable Bio Cello Stand Up Pouches, maintaining 12-month whole-bean freshness while meeting VerpackG compliance.",
    meta_description: "Case Study: Learn how German coffee brand Roastwood Coffee sourced certified compostable high-barrier packaging to satisfy EU PPWR and VerpackG rules with low MOQ digital printing.",
    hide_media: true,
    no_video_and_image: true,
    sections: [
      {
        icon: "info",
        title: "B2B Procurement & Sourcing Compostable Coffee Bags in Germany",
        paragraphs: [
          {
            text: "For packaging procurement managers in the EU, transitioning to eco-friendly laminates requires solving strict operational and barrier constraints. In Germany, Roastwood Coffee (Munich) was faced with escalating eco-fees under the VerpackG Packaging Act due to their use of traditional metalized fossil-plastic laminates. Because multi-layer aluminum packaging is heavily taxed, the procurement team sought to evaluate factory-direct <a href=\"/materials/compostable\" style=\"color: #10b981; font-weight: bold; text-decoration: underline;\">certified compostable packaging</a> that would meet barrier requirements while lowering their regulatory compliance costs."
          },
          {
            text: "Roastwood partnered with AchievePack to develop a customized high-barrier stand-up bag utilizing a Bio Cello Duplex Clear structure. This plant-derived cellulose laminate meets ASTM D6400 (USA) and EN 13432 (EU) composting standards. The laminate structure features high-barrier cellulose (NatureFlex) for oxygen and vapor protection, combined with a bio-based sealant layer that runs smoothly on high-speed vertical form-fill-seal (VFFS) machinery. To learn more about standard laminate specifications, view the <a href=\"/spec/bio-cello-duplex-clear\" style=\"color: #10b981; font-weight: bold; text-decoration: underline;\">Bio Cello Duplex Clear Spec Sheet</a>."
          }
        ],
        key_takeaways: [
          "Regulatory Avoidance: Swapping to certified compostable structures exempted Roastwood Coffee from plastic packaging taxes and reduced VerpackG recycling fee overhead.",
          "High Barrier Integrity: The Bio Cello Duplex Clear laminate maintains moisture vapor transmission rates (WVTR) below 1.5 g/m²/day, preventing coffee oil oxidation.",
          "VFFS Optimization: The sealing layer is engineered with a wide heat-seal window, preventing shrink deformation on automated packaging lines."
        ]
      },
      {
        icon: "package",
        title: "Lamination Specs, PLA Zippers, and Degassing Valves",
        paragraphs: [
          {
            text: "Coffee freshness depends on two key elements: an oxygen barrier and a reliable seal. The lamination consists of wood pulp cellulose film that provides high gas resistance. This layer is laminated to a biodegradable PLA sealant. The regular PLA-based zipper closure ensures Roastwood Coffee's consumers can securely close the bag, shielding the roasted coffee beans from moisture. Discover more about compatible zippers in our <a href=\"/options/reclosure\" style=\"color: #10b981; font-weight: bold; text-decoration: underline;\">reclosure options catalog</a>."
          },
          {
            text: "Because roasted whole beans degas CO2, adding a one-way valve is essential to prevent bag expansion and bursting. AchievePack integrated a plant-based <a href=\"/products/coffee-bags-degassing-valve\" style=\"color: #10b981; font-weight: bold; text-decoration: underline;\">degassing valve</a> that vents carbon dioxide at 0.05 psi while sealing out oxygen. To get a detailed quote for custom pouch structures, you can submit a request on our <a href=\"/quotes/flat-bottom\" style=\"color: #10b981; font-weight: bold; text-decoration: underline;\">flat bottom pouch quote page</a>."
          }
        ],
        specs_table: [
          {
            value: "100% certified compostable, complies with EU PPWR & German VerpackG",
            parameter: "Bio Cello Duplex Clear (Cellulose / PLA / PBAT)",
            specification: "Material Structure"
          },
          {
            value: "Self-standing retail shelf posture with high brand visibility",
            parameter: "Stand Up Pouch with Bottom Gusset",
            specification: "Pouch Shape"
          },
          {
            value: "Airtight, repeatable resealing, fully certified compostable",
            parameter: "Regular Zipper (PLA-based)",
            specification: "Closure Type"
          },
          {
            value: "Releases CO2 pressure (0.05 psi), blocks oxygen ingress completely",
            parameter: "Compostable One-Way Degassing Valve",
            specification: "Ventilation Option"
          },
          {
            value: "Preserves delicate coffee aromas and prevents bean staling for 9-12 months",
            parameter: "WVTR < 1.5 g/m²/day | OTR < 2.0 cc/m²/day",
            specification: "Barrier Rating"
          }
        ]
      },
      {
        icon: "check",
        title: "Logistics Verification, Drop Testing, and Low MOQ Runs",
        paragraphs: [
          {
            text: "To ensure the compostable film stood up to harsh courier logistics, AchievePack conducted a series of 1.5-meter drop tests onto solid concrete surfaces. The test was done under cold Bavarian winter climates (sub-zero temperatures) to verify seam elasticity. The bio-sealants absorbed the physical impact without seal rupture or cracking, confirming the bags are robust enough for transit across Europe."
          },
          {
            text: "AchievePack also solved inventory overhead constraints by utilizing advanced digital printing. This allowed Roastwood to run custom-branded packaging orders with a <a href=\"/products/low-moq-packaging\" style=\"color: #10b981; font-weight: bold; text-decoration: underline;\">minimum order quantity</a> (MOQ) of just 100 pieces per SKU. The digital workflow eliminates plate fees, allowing the brand to launch seasonal roasts with low risk."
          }
        ]
      }
    ],
    faqs: postData.content.faqs,
    cta: postData.content.cta
  };

  const combinedContent = {
    ...postData.content,
    approved: true,
    video_url: null,
    hide_media: true,
    no_video_and_image: true,
    pouch: pouchVersion,
    achievepack: achievepackVersion
  };

  console.log('Publishing Roastwood Coffee blog post with dual-domain versions and no video/image...');
  const { data, error } = await supabase
    .from('pouch_seo_blog')
    .upsert({
      slug: postData.slug,
      title: postData.title,
      excerpt: postData.excerpt,
      content: combinedContent,
      category: postData.category,
      image_url: null, // Keep image_url null
      meta_title: postData.meta_title,
      meta_description: postData.meta_description,
      source_url: postData.source_url,
      published_at: postData.published_at || new Date().toISOString(),
      updated_at: new Date().toISOString()
    }, { onConflict: 'slug' })
    .select();

  if (error) {
    console.error('Error upserting post:', error);
    process.exit(1);
  }

  console.log('✅ Roastwood blog post successfully republished to Supabase with dual-domain routing & no video/image!');
  console.log('Slug:', data[0].slug);
}

run();
