#!/usr/bin/env node

/**
 * 🤖 Soro Multi-Agent SEO/AEO Generation Pipeline - Grok-3 Edition
 * 
 * Agents:
 * 1. Brand DNA Technology (Voice extraction & high-barrier jargon vectors)
 * 2. Outline Agent (Competitor headers planner & PAA intent compiler)
 * 3. The Writing Agent Pipeline (Deep materials-centric Grok-3 technical writer)
 * 4. SEO & AEO Auditing Agent (FAQ schemas, spec tables, and JSON-LD builders)
 * 5. Automatic Internal Linking Agent (Dynamic cross-reference injector)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { injectInternalLinks } from './automatic-internal-linker.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment configurations
dotenv.config({ path: path.join(__dirname, '../.env.local') });
dotenv.config({ path: path.join(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase = null;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

/**
 * Executes the full Soro-inspired 5-Agent Writing Pipeline using xAI Grok-3.
 * 
 * @param {string} domain 'pouch.eco' or 'achievepack.com'
 * @param {string} keyword Main target keyword
 * @param {boolean} publishDirectly If true, publishes to Supabase; otherwise saves as staged draft
 * @returns {Promise<any>} Deployed/staged article details
 */
export async function runAutopilotWritingPipeline(domain = 'pouch.eco', keyword = '', publishDirectly = true, customSlug = null) {
  console.log(`\n🤖 [PILOT-ENGINE] Initializing Multi-Agent Grok-3 Pipeline for keyword: "${keyword}" (Domain: ${domain}, CustomSlug: ${customSlug})...`);
  
  if (!keyword) {
    throw new Error('Keyword is mandatory for Soro Autopilot Generation.');
  }

  const apiKey = process.env.XAI_API_KEY || process.env.VITE_XAI_API_KEY;
  if (!apiKey) {
    throw new Error('Missing XAI_API_KEY for content generation. Please check .env.local');
  }

  const slug = customSlug || keyword
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  // --- AGENT 1: Brand DNA Technology ---
  console.log('🧬 [Agent 1: Brand DNA] Selecting random brand and country seed...');
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

  const randomBrand = BRAND_SEEDS[Math.floor(Math.random() * BRAND_SEEDS.length)];
  const randomCountry = COUNTRY_SEEDS[Math.floor(Math.random() * COUNTRY_SEEDS.length)];
  console.log(`🧬 Seed Context Chosen: "${randomBrand}" operating in "${randomCountry}"`);

  const tone = domain === 'pouch.eco' 
    ? `Eco-vibrant, startup-friendly, retro-brutalist layouts, low MOQ (100 pieces), rapid prototype testing, optimized for ${randomBrand} in ${randomCountry}.` 
    : `Enterprise B2B technical, supply-chain optimization, VFFS compatibility, high-volume discounts, cleanroom certifications, optimized for ${randomBrand} in ${randomCountry}.`;
  
  // --- AGENT 2 & 3: Outline & Grok-3 Writer ---
  console.log('✍️ [Agent 2/3: Grok-3 Writer] Invoking xAI Grok-3 for structured B2B/B2C content...');
  
  const systemPrompt = `You are a professional packaging engineering AI copywriter working for AchievePack (B2B) and Pouch.eco (B2C/DTC).
Your task is to write a highly detailed, comprehensive, premium-grade sourcing guide for the keyword: "${keyword}".
The target domain layout style is "${domain}".

To avoid duplicate content patterns and write highly targeted content that ranks well on Google, you MUST write the guide from the perspective of a real-world B2B buyer scenario.
Specifically, write the article with a seed focus context: Sourcing custom packaging for the brand "${randomBrand}" located/operating in "${randomCountry}".

Explain how "${randomBrand}" in "${randomCountry}" researches, validates, and sources this packaging. Include specific local requirements (e.g. PPWR and sorting schemes in Europe/Germany, local FDA or California EPR regulations in the US, local retail market requirements, shipping times, customs, and factory inspections).

You must output exactly a JSON object, with NO markdown formatting wrapper or commentary. The JSON object must match this schema:
{
  "title": "A professional capitalized title including the brand and country context (e.g., 'How ${randomBrand} (${randomCountry}) Sourced ${keyword}')",
  "excerpt": "A high-converting 2-3 sentence summary of the sourcing guide.",
  "meta_description": "A search-optimized meta description containing the keyword, brand context, and target country.",
  "sections": [
    {
      "title": "Understanding [Keyword] in Modern Sourcing",
      "icon": "info",
      "key_takeaways": [
        "Takeaway 1: Explain a key sourcing takeaway related to ${randomBrand}'s context...",
        "Takeaway 2: Explain another key sourcing takeaway...",
        "Takeaway 3: Explain a technical takeaway..."
      ],
      "paragraphs": [
        {
          "text": "A detailed sourcing analysis paragraph (3-4 sentences). Discuss why standard packaging failed for this brand, what their specific search intent was, and how they identified this material spec.",
          "image_prompt": "Minimalist clean infographic illustrating ${keyword} sourcing challenge for ${randomBrand} in ${randomCountry}. Show a package outline, shipping container route from factory, and local compliance certification icons. Nature green and black color palette."
        },
        {
          "text": "Another detailed procurement paragraph (3-4 sentences) outlining the material performance (moisture/oxygen barriers, drop tests) and local supply chain logistics (lead times, bulk pricing tiers).",
          "image_prompt": "Diagram illustrating material barrier layers. Clean annotations in English: 'Oxygen Barrier', 'Moisture Guard', '${randomBrand} Logo'."
        }
      ]
    },
    {
      "title": "Technical Specifications & Sourcing Blueprint",
      "icon": "package",
      "specs_table": [
        { "specification": "Material Structure", "parameter": "Specify the structure (e.g. Mono-PE with EVOH or PLA/PBAT)", "value": "100% recyclable/compostable, satisfies ${randomCountry} packaging laws" },
        { "specification": "Size / Dimensions", "parameter": "Custom OEM pouch dimensions", "value": "Fitted exactly to ${randomBrand}'s production line specifications" },
        { "specification": "Surface Finish", "parameter": "Premium finish choice (matte, glossy, or tactile)", "value": "Protects graphic branding during transit and retail display" },
        { "specification": "Packaging / Delivery", "parameter": "Master export cartons with polybags", "value": "Double-lined moisture-proof protection preventing transit damage" }
      ],
      "paragraphs": [
        {
          "text": "Detailed material science context (3-4 sentences) explaining why these material choices (such as Mono-PE EVOH gas locks, compostable biopolymers like PLA/PBAT) are critical for ${randomBrand}'s products and local compliance.",
          "image_prompt": "Layer structure infographic showing a 3D cutaway of the multi-layer pouch structure with annotations of each layer and polymer type."
        },
        {
          "text": "Discussion of logistics, VFFS high-speed run compatibility, sealing temperature windows, and quality control tests (such as vacuum leak chambers and drop tests) in the context of ${randomBrand}.",
          "image_prompt": "Machinery run diagram showing VFFS roll stock feeding into a form-fill-seal line with annotations of seal jaw temperatures and line speeds."
        }
      ]
    },
    {
      "title": "Certifications & B2B Application Scenarios",
      "icon": "check",
      "paragraphs": [
        {
          "text": "Analysis of certificates (BPI ASTM D6400, TÜV Austria Industrial/Home Compostable, GRS, FSC) and how they protect ${randomBrand} from greenwashing claims, satisfy local environmental audits in ${randomCountry}, and qualify them for eco-tax reductions.",
          "image_prompt": "Certificate compliance map showing the validation steps from raw material supplier testing to final BPI or TÜV certificate issuance."
        },
        {
          "text": "Details on the phased transition approach for ${randomBrand}: starting with a low-MOQ test run (100 pieces) on a single SKU, scaling to high-volume gravure printing once shelf-life and shipping integrity are verified.",
          "image_prompt": "A step-by-step roadmap timeline illustrating the transition phases from design blueprints to retail shelf launch."
        }
      ]
    }
  ],
  "faqs": [
    {
      "q": "What is the minimum order quantity (MOQ) for custom printed [Keyword]?",
      "a": "Detailed answer explaining digital print MOQ (starts at 100 pcs) vs high-volume gravure printing (starting at 10,000 pcs) suitable for ${randomBrand}'s budget."
    },
    {
      "q": "Can I get a free sample kit of your packaging structures?",
      "a": "Detailed answer explaining how to request sample kits (usually containing 10 plain/printed pouches) for sizing and barrier validation."
    },
    {
      "q": "Do you support custom sizes, blueprints, and digital colors?",
      "a": "Detailed answer confirming support for custom dimensions, cylinder or HP Indigo digital color matching, and vector blueprint overlays."
    },
    {
      "q": "What is the average lead time for manufacturing and delivery?",
      "a": "Detailed answer outlining digital print turnaround (10-14 days) vs gravure print wholesale shipping (25-35 days) including peak season guidelines."
    },
    {
      "q": "What certifications do these packaging materials carry?",
      "a": "Detailed answer listing verifiable certificates: BPI compostable (ASTM D6400), TÜV Austria, FSC, and GRS certification paths."
    },
    {
      "q": "What details are required to get an accurate price quote?",
      "a": "Detailed answer explaining quote requirements: bag style/dimensions, material structure/thickness, color layers, design artwork file, and quantity."
    }
  ]
}

Strict Formatting Rules:
1. Keep each paragraph in the 'paragraphs' array concise (under 80 words, 3-4 sentences max).
2. Ensure the content mentions the brand '${randomBrand}' and country '${randomCountry}' naturally, explaining their specific supply chain challenges, retail demands, and regulatory environment.
3. Tone must be professional, authoritative, and reflect Ryan Wong's expert packaging background (14+ years in flexible packaging).
4. No HTML tags inside 'text' or 'image_prompt'. Use clean, unformatted raw text. Do not use markdown like '##' or '**'.
5. Return ONLY the raw JSON object. No other text.`;

  const response = await fetch('https://api.x.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'grok-3',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Please generate the sourcing guide payload for keyword: "${keyword}" and domain: "${domain}". Tone setting: ${tone}` }
      ],
      temperature: 0.3
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`X.AI API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  let rawText = data.choices[0].message.content.trim();
  
  // Safe JSON extraction from markdown wrappers if present
  if (rawText.startsWith('```')) {
    rawText = rawText.replace(/^```[a-zA-Z]*\n/, '').replace(/\n```$/, '').trim();
  }

  let generatedPayload;
  try {
    generatedPayload = JSON.parse(rawText);
  } catch (e) {
    console.error('Failed to parse generated JSON content:', rawText);
    throw new Error(`Content generation failed to return valid JSON: ${e.message}`);
  }

  // --- AGENT 4: SEO & AEO Auditing Agent ---
  console.log('📊 [Agent 4: AEO & SEO Auditor] Injecting structured schemas and verification details...');
  
  const faqs = generatedPayload.faqs || [];
  
  // AEO JSON-LD Schema
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

  // --- AGENT 5: Automatic Internal Linking Agent ---
  console.log('🔗 [Agent 5: Internal Linker] Propagating recursive link-juice through article content...');
  const contentSections = generatedPayload.sections || [];
  const mappedSections = contentSections.map(sec => {
    const isB2C = domain === 'pouch.eco';
    
    const paragraphs = (sec.paragraphs || []).map(p => {
      const result = injectInternalLinks(p.text, isB2C, 1, slug);
      return {
        text: result.html,
        image_prompt: p.image_prompt
      };
    });

    if (paragraphs.length > 0) {
      console.log(`   * Processed ${paragraphs.length} paragraphs for section: "${sec.title}"`);
    }

    return {
      title: sec.title,
      icon: sec.icon || 'package',
      paragraphs: paragraphs,
      key_takeaways: sec.key_takeaways || null,
      specs_table: sec.specs_table || null
    };
  });

  const excerpt = generatedPayload.excerpt || `Professional guide to sourcing custom printed ${keyword} for brands like ${randomBrand} in ${randomCountry} with certified high-barrier protections.`;
  const lowerKeyword = keyword.toLowerCase();
  
  let selectedImage = '/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp';
  if (lowerKeyword.includes('coffee')) {
    selectedImage = '/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp';
  } else if (lowerKeyword.includes('nuts') || lowerKeyword.includes('snack') || lowerKeyword.includes('chips')) {
    selectedImage = '/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp';
  } else if (lowerKeyword.includes('baby') || lowerKeyword.includes('puree') || lowerKeyword.includes('food')) {
    selectedImage = '/imgs/seo-photos/organic/organic_dried_mango_pouch.webp';
  } else if (lowerKeyword.includes('label')) {
    selectedImage = '/imgs/seo-photos/usa/label/a_digital_labeling_strategy_0282148.webp';
  } else if (lowerKeyword.includes('paper') || lowerKeyword.includes('kraft')) {
    selectedImage = '/imgs/seo-photos/a_achievepack_home_compostable_balcony_9883994.webp';
  } else if (domain !== 'pouch.eco') {
    selectedImage = '/imgs/blog/pouch_sizing_density_guide.png';
  }

  // Payload formatting matching pouch_seo_blog schema
  const payload = {
    title: generatedPayload.title || `${keyword.replace(/\b\w/g, c => c.toUpperCase())} Sourcing Guide`,
    slug,
    category: domain === 'pouch.eco' ? 'Sustainability' : 'Materials',
    excerpt,
    meta_description: generatedPayload.meta_description || excerpt,
    image_url: selectedImage,
    source_url: domain === 'pouch.eco' ? `https://achievepack.com/blog/${slug}` : `https://pouch.eco/blog/${slug}`,
    published_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    content: {
      approved: publishDirectly,
      sections: mappedSections,
      faqs,
      cta: {
        title: `Order Custom ${keyword} Sample Kit`,
        description: `Get plain and printed premium pouch samples delivered straight to your factory door for ${randomBrand}. Fully credited back on your first custom order.`
      },
      jsonLd
    }
  };

  if (!supabase) {
    console.log('[PILOT-ENGINE] ⚠️ Supabase missing. Autopilot pipeline completed dry-run locally.');
    return payload;
  }

  // Save/Upsert directly to Supabase pouch_seo_blog
  console.log(`💾 [PILOT-ENGINE] Saving generated article to dynamic database: /blog/${slug}...`);
  
  const { error } = await supabase
    .from('pouch_seo_blog')
    .upsert(payload, { onConflict: 'slug' });

  if (error) {
    console.error('[PILOT-ENGINE] Upsert error:', error);
    throw error;
  }

  console.log(`✅ [PILOT-ENGINE] Article successfully published! Available live at: https://www.pouch.eco/blog/${slug}`);
  return payload;
}

// Shell run test handler
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const testKeyword = process.argv[2] || 'bio-based Barrier Pouches';
  runAutopilotWritingPipeline('pouch.eco', testKeyword, true);
}
