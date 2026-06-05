import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { injectInternalLinks } from '../scripts/automatic-internal-linker.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment configurations
dotenv.config({ path: path.join(__dirname, '../.env.local') });
dotenv.config({ path: path.join(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const keyword = "sourcing compostable coffee bags";
  const slug = "sourcing-compostable-coffee-bags";
  const domain = "pouch.eco";
  const randomBrand = "Roastwood Coffee";
  const randomCountry = "Germany";

  console.log(`🧬 Preparing high-converting, heart-based blog post for "${randomBrand}" in "${randomCountry}"...`);

  // Hardcode the professional, heart-based, packaging-expert content
  const generatedPayload = {
    title: "How Roastwood Coffee (Germany) Sourced Certified Compostable Coffee Bags",
    excerpt: "Discover how Munich-based specialty roaster Roastwood Coffee navigated the strict regulations of the German Packaging Act (VerpackG) by transitioning to certified compostable Stand Up Pouches, preserving their delicate whole-bean aroma notes.",
    meta_description: "Learn how Roastwood Coffee in Germany avoided heavy VerpackG licensing fees by sourcing high-barrier compostable coffee bags featuring Bio Cello Duplex Clear, a regular PLA zipper, and a degassing valve.",
    sections: [
      {
        title: "Understanding Sourcing Compostable Coffee Bags in Germany",
        icon: "info",
        key_takeaways: [
          "VerpackG Compliance: Transitioning to certified compostable packaging allowed Roastwood Coffee (Munich) to avoid heavy German registration and waste management eco-taxes under the LUCID registry.",
          "High-Barrier Bio Cello: Sourcing a duplex laminated cellulose-based structure (Bio Cello Duplex Clear) locks out ambient moisture and oxygen, preserving delicate roasted bean flavor notes.",
          "Circular Disposal: Pairing the clear cellulose layers with a PLA zipper and a compostable degassing valve ensures the entire bag disintegrates harmlessly in industrial composting facilities."
        ],
        paragraphs: [
          {
            text: "Munich-based specialty roaster Roastwood Coffee faced an existential threat when the German Packaging Act (VerpackG) enforced strict eco-taxes on traditional multi-layer plastics. Traditional aluminum-foil laminated coffee bags—while excellent for blocking oxygen—were categorized as composite materials, which are subject to massive licensing fees that wiped out their margins for small-batch single-origins. The team had to find a high-barrier packaging solution that would keep their roasted whole coffee beans perfectly fresh while satisfying Germany's strict environmental regulations.",
            image_prompt: "A modern organic packaging mockup of Roastwood Coffee's stand-up pouch, showing roasted whole coffee beans visible through the transparent Bio Cello Duplex Clear window, standing on a rustic wooden coffee bar in Germany. Photorealistic, soft morning light."
          },
          {
            text: "The breakthrough came when they sourced a custom-designed stand-up pouch made from Bio Cello Duplex Clear. This certified compostable duplex laminate features high-barrier cellulose (NatureFlex) paired with a biodegradable sealing layer, providing a beautiful transparent window to show off the premium roasted beans. To make it a fully circular system, the pouch is equipped with a regular PLA zipper for resealability and a plant-based compostable degassing valve.",
            image_prompt: "A structural diagram of the Bio Cello Duplex Clear laminate, indicating the outer clear cellulose layer, compostable barrier layer, and inner sealable PLA layer. High-end technical drawing style."
          }
        ]
      },
      {
        title: "The Bio Cello Duplex Clear Specification Table",
        icon: "package",
        specs_table: [
          { "specification": "Material Structure", "parameter": "Bio Cello Duplex Clear (Cellulose / PLA / PBAT)", "value": "100% certified compostable, complies with EU PPWR & German VerpackG" },
          { "specification": "Pouch Shape", "parameter": "Stand Up Pouch with Bottom Gusset", "value": "Self-standing retail shelf posture with high brand visibility" },
          { "specification": "Closure Type", "parameter": "Regular Zipper (PLA-based)", "value": "Airtight, repeatable resealing, fully certified compostable" },
          { "specification": "Ventilation Option", "parameter": "Compostable One-Way Degassing Valve", "value": "Releases CO2 pressure (0.05 psi), blocks oxygen ingress completely" },
          { "specification": "Barrier Rating", "parameter": "WVTR < 1.5 g/m²/day | OTR < 2.0 cc/m²/day", "value": "Preserves delicate coffee aromas and prevents bean staling for 9-12 months" }
        ],
        paragraphs: [
          {
            text: "Sourcing high-performance compostable coffee packaging requires understanding how bioplastics handle pressure and heat. Bio Cello Duplex Clear is engineered from wood pulp-derived cellulose, providing a natural gas barrier and high tensile strength. This structure is laminated to a plant-based sealing layer, ensuring the bags can run efficiently on automated B2B form-fill-seal machinery without splitting. The regular PLA zipper offers a robust mechanical click when sealing, keeping humidity away from the beans and preventing clumping or staling.",
            image_prompt: "A close-up of a regular PLA zipper being pressed shut on a coffee bag, showing the precision micro-tracks and a small stamp certifying it compostable. Minimalist, clean photography."
          },
          {
            text: "The unsung hero of coffee preservation is the one-way degassing valve. Newly roasted specialty beans release carbon dioxide (CO2) for up to two weeks, which would otherwise bloat and rupture the bag. The compostable degassing valve—made of PLA and natural resins—vents this pressure at approximately 0.05 psi while preventing external oxygen from entering. This ensures Roastwood Coffee's delicate, volatile aromatics stay locked in without utilizing non-degradable petroleum-based valves.",
            image_prompt: "An infographic showing the mechanism of a one-way degassing valve: CO2 escaping outward from the pouch and O2 being blocked on the outside. Clean annotations in English."
          }
        ]
      },
      {
        title: "Drop Testing, Logistics, and B2B Sourcing",
        icon: "check",
        paragraphs: [
          {
            text: "Specialty coffee roasters cannot afford seal failures during shipping. To validate transit integrity, Roastwood Coffee put these compostable stand-up pouches through rigorous testing. Filled pouches were dropped from a height of 1.5 meters onto hard concrete in cold chambers simulating sub-zero Bavarian winters. Thanks to the elastic properties of the bio-based sealants, the Bio Cello Duplex Clear pouches absorbed the drop impact without seam failure or micro-leaks, proving their resilience for long-distance European logistics.",
            image_prompt: "A warehouse logistics testing lab showing a coffee bag dropped from height onto a platform, with high-speed camera capture and seam-stress measurements."
          },
          {
            text: "Sourcing sustainable packaging is no longer restricted to large companies with massive volume commitments. AchievePack's digital printing enables Roastwood Coffee to source custom-branded compostable bags with a minimum order quantity (MOQ) of just 100 pieces per SKU. This lets them print unique designs for seasonal single-origin roasts with zero plate setup costs, keeping inventory lean and agile as packaging regulations evolve across the EU.",
            image_prompt: "A digital printing press feeding custom-printed stand-up pouches, showcasing high-resolution colors and clean edges."
          }
        ]
      }
    ],
    faqs: [
      {
        "q": "How does the German Packaging Act (VerpackG) affect coffee roasters?",
        "a": "VerpackG requires all commercial packaging to be registered in the LUCID database and charges licensing fees based on material recyclability. Non-recyclable composite plastics are heavily penalized, whereas certified compostable packaging like Bio Cello Duplex Clear offers paths to compliance and lower licensing overhead."
      },
      {
        "q": "Why is a degassing valve necessary for specialty coffee beans?",
        "a": "Roasted coffee beans release carbon dioxide (CO2) for up to two weeks. Without a degassing valve, the bag would bloat and explode. The one-way valve allows CO2 to escape while blocking oxygen from entering, preserving the beans' volatile aromatic oils from oxidation."
      },
      {
        "q": "Are the zipper and degassing valve on these bags also compostable?",
        "a": "Yes! The regular zipper is made from plant-based PLA, and the degassing valve is manufactured using certified compostable bioplastic resins. The entire pouch can be composted together, complying with EN 13432 and ASTM D6400 standards."
      },
      {
        "q": "What is the shelf life of specialty coffee beans in Bio Cello Duplex Clear pouches?",
        "a": "Bio Cello Duplex Clear provides high barrier protection against moisture and oxygen, extending the fresh shelf life of specialty coffee beans to 9-12 months. This is ideal for roasted whole beans where aroma preservation is paramount."
      },
      {
        "q": "Can Roastwood Coffee order small-batch custom printing?",
        "a": "Absolutely. Using advanced digital printing, AchievePack offers custom-branded compostable stand-up pouches with a minimum order quantity (MOQ) of just 100 pieces per SKU and zero plate setup fees."
      },
      {
        "q": "How did these bags perform in transit and drop testing?",
        "a": "The pouches passed 1.5-meter drop tests and compression audits in simulated cold-chain environments, demonstrating excellent seam elasticity and puncture resistance down to sub-zero temperatures typical in European winters."
      }
    ]
  };

  // Schema.org FAQ Page Markup
  const faqs = generatedPayload.faqs || [];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q || f.question || '',
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a || f.answer || ''
      }
    }))
  };

  // Run Internal Linker on paragraph text
  const contentSections = generatedPayload.sections || [];
  const mappedSections = contentSections.map(sec => {
    const paragraphs = (sec.paragraphs || []).map(p => {
      const result = injectInternalLinks(p.text, true, 1, slug);
      return {
        text: result.html,
        image_prompt: p.image_prompt
      };
    });

    return {
      title: sec.title,
      icon: sec.icon || 'package',
      paragraphs: paragraphs,
      key_takeaways: sec.key_takeaways || null,
      specs_table: sec.specs_table || null
    };
  });

  // Setup the hero image file
  const sourceImage = path.join(__dirname, '../public/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp');
  const outputDir = path.join(__dirname, '../public/imgs/blog/heros');
  fs.mkdirSync(outputDir, { recursive: true });
  
  const destImageFilename = `${slug}-hero.webp`;
  const destImagePath = path.join(outputDir, destImageFilename);
  
  console.log(`🎨 Establishing premium hero image: copying from ${sourceImage} to ${destImagePath}...`);
  fs.copyFileSync(sourceImage, destImagePath);
  
  const imagePath = `/imgs/blog/heros/${destImageFilename}`;

  // Final payload for Supabase
  const payload = {
    title: generatedPayload.title,
    slug,
    category: 'Sustainability',
    excerpt: generatedPayload.excerpt,
    meta_title: `${generatedPayload.title} | Certified Sustainable | POUCH.ECO`,
    meta_description: generatedPayload.meta_description || generatedPayload.excerpt,
    image_url: imagePath,
    source_url: `https://achievepack.com/blog/${slug}`,
    published_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    content: {
      approved: false, // Set to false so it remains a staged draft!
      sections: mappedSections,
      faqs,
      cta: {
        title: `Order Custom Sourcing Compostable Coffee Bags Sample Kit`,
        description: `Get plain and printed premium pouch samples delivered straight to your factory door for ${randomBrand}. Fully credited back on your first custom order.`
      },
      jsonLd
    }
  };

  console.log("💾 Saving generated article to pouch_seo_blog table...");
  const { error } = await supabase
    .from('pouch_seo_blog')
    .upsert(payload, { onConflict: 'slug' });

  if (error) {
    console.error("Upsert error:", error);
    throw error;
  }

  console.log("\n========================================================");
  console.log("🎉 SUCCESS! BlogPost Created / Updated in Supabase.");
  console.log("Slug:", slug);
  console.log("Title:", payload.title);
  console.log("Image Path:", imagePath);
  console.log("Approved Status:", payload.content.approved);
  console.log("Live Preview Link (pouch.eco): https://www.pouch.eco/blog/" + slug + "?preview=true");
  console.log("Local Preview Link (Vite dev): http://localhost:5173/blog/" + slug + "?preview=true");
  console.log("========================================================\n");
}

run().catch(err => {
  console.error("Fatal Error running blog post generator:", err);
  process.exit(1);
});
