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
  console.log('🧬 [Agent 1: Brand DNA] Extracting tone guidelines and technical packaging parameters...');
  const tone = domain === 'pouch.eco' 
    ? 'Eco-vibrant, startup-friendly, retro-brutalist layouts, low MOQ (100 pieces), rapid prototype testing.' 
    : 'Enterprise B2B technical, supply-chain optimization, VFFS compatibility, high-volume discounts, cleanroom certifications.';
  
  // --- AGENT 2 & 3: Outline & Grok-3 Writer ---
  console.log('✍️ [Agent 2/3: Grok-3 Writer] Invoking xAI Grok-3 for high-fidelity 800+ words SEO page content...');
  
  const systemPrompt = `You are a professional packaging engineering AI copywriter working for AchievePack (B2B) and Pouch.eco (B2C/DTC).
Your task is to write a highly detailed, comprehensive, premium-grade B2B/B2C sourcing guide for the keyword: "${keyword}".
The target domain layout style is "${domain}".

You must output exactly a JSON object, with NO markdown formatting wrapper or commentary. The JSON object must match this schema:
{
  "title": "A professional capitalized title, e.g. 'Curbside Recyclable Coffee Bag Sourcing Guide'",
  "excerpt": "A high-converting 2-3 sentence summary of the sourcing guide.",
  "sections": [
    {
      "title": "Understanding [Keyword] in Modern Sourcing",
      "icon": "info",
      "content": "At least 300 words. You MUST start the content with a beautifully styled Key Takeaways box using inline CSS: <div style=\"background: #e6f4ea; border-left: 6px solid #137333; padding: 20px; border-radius: 8px; margin-bottom: 24px;\"><h4 style=\"color: #137333; font-weight: bold; margin-top: 0; margin-bottom: 12px; font-size: 1.1rem;\">🔑 Key Sourcing Takeaways:</h4><ul style=\"margin: 0; padding-left: 20px; font-size: 0.95rem; line-height: 1.6; color: #202124;\"><li><strong>Takeaway 1</strong>: ...</li><li><strong>Takeaway 2</strong>: ...</li><li><strong>Takeaway 3</strong>: ...</li></ul></div>. Followed by a direct, punchy conclusion/hook. Analyze specific B2B sourcing challenges, search intent, and structural characteristics (e.g. moisture barrier, puncture resistance). Include concrete scenario metrics or case studies (e.g. running 10,000 pouches through VFFS machinery at 65 bags/min with zero rupture)."
    },
    {
      "title": "Technical Specifications & Procurement Specs",
      "icon": "package",
      "content": "At least 300 words. You MUST start the content with an infographic image wrapper pointing to our generated asset using inline CSS: <div style=\"margin: 28px 0; text-align: center; border: 4px solid black; box-shadow: 6px 6px 0px 0px rgba(0,0,0,1); border-radius: 12px; overflow: hidden; background: #f8fafc;\"><img src=\"/imgs/infographics/${slug}-infographic.png\" alt=\"${keyword} Sourcing Infographic Diagram\" style=\"width: 100%; height: auto; display: block;\" /><div style=\"padding: 12px; background: black; color: #D4FF00; font-size: 12px; font-weight: bold; border-top: 4px solid black;\">📊 INFOGRAPHIC: ${keyword.toUpperCase()} LAYER STRUCTURE & VALUE ROADMAP</div></div>. Next, it must contain a styled, highly readable HTML table inside a Neobrutalist card container summarizing the Technical-to-Purchasing Value Specs. The table must translate the following specs into direct procurement utility:
      - Material Structure (e.g. Mono-PE with EVOH barrier, or plant cellulose biopolymers, pass FDA compliance, OTR/WVTR rate metrics).
      - Size / Dimensions (custom OEM volume capacity matching blueprints).
      - Surface Finish (matte anti-scratch lamination, resisting shipping/shelf wear).
      - Packaging / Delivery (triple-layer export cartons with protective polybags preventing moisture/transit damage).
      Include at least two paragraphs of deep material science context around these choices."
    },
    {
      "title": "Certifications & B2B Application Scenarios",
      "icon": "check",
      "content": "At least 250 words. Focus on specific B2B application scenarios (e.g. specialty coffee, snacks, organic baby food). Explain certifications like BPI ASTM D6400 compliance, TÜV Austria Industrial/Home Compostable, GRS Recycled PCR content, or FSC paper sourcing. Detail how these satisfy compliance audits."
    }
  ],
  "faqs": [
    {
      "q": "What is the minimum order quantity (MOQ) for custom printed [Keyword]?",
      "a": "Detailed answer explaining digital print MOQ (starts at 100 pcs) vs high-volume gravure printing (starting at 10,000 pcs)."
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
1. Total word count in all sections combined MUST exceed 800 words (aim for 900-1100 words of copy).
2. The HTML table must be styled with inline CSS style attributes. Example styling:
<div style="margin: 20px 0; overflow: auto; border: 4px solid black; box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);">
  <table style="width:100%; border-collapse:collapse; background:white; font-family:sans-serif; text-align:left;">
    <thead>
      <tr style="background:black; color:#D4FF00; font-weight:bold; font-size:12px; text-transform:uppercase;">
        <th style="padding:12px; border-bottom:2px solid black;">Specification</th>
        <th style="padding:12px; border-bottom:2px solid black;">Technical Parameter</th>
        <th style="padding:12px; border-bottom:2px solid black;">B2B Sourcing Value & Meaning</th>
      </tr>
    </thead>
    <tbody style="font-size:12px; font-weight:bold;">
      <tr>
        <td style="padding:10px; border-bottom:1px solid #ddd;">...</td>
        <td style="padding:10px; border-bottom:1px solid #ddd;">...</td>
        <td style="padding:10px; border-bottom:1px solid #ddd;">...</td>
      </tr>
    </tbody>
  </table>
</div>
3. Tone must be professional, authoritative, and reflect Ryan Wong's expert packaging background (14+ years in flexible packaging).
4. No markdown like '##' or '*' inside 'content' field. Use clean HTML tags: '<p>', '<strong>', '<ul>', '<li>', '<table>' etc.
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
    const result = injectInternalLinks(sec.content, isB2C, 2, slug);
    if (result.linksInjected > 0) {
      console.log(`   * Injected ${result.linksInjected} links inside section: "${sec.title}"`);
    }
    return {
      title: sec.title,
      icon: sec.icon || 'package',
      content: result.html
    };
  });

  const excerpt = generatedPayload.excerpt || `Professional guide to sourcing custom printed ${keyword} with certified high-barrier protections, low minimum orders starting from 100 pieces, and complete green certifications.`;
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
      sections: mappedSections,
      faqs,
      cta: {
        title: `Order Custom ${keyword} Sample Kit`,
        description: 'Get plain and printed premium pouch samples delivered straight to your factory door. Fully credited back on your first custom order.'
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
