#!/usr/bin/env node

/**
 * 🔗 Soro-Inspired Automatic Internal Linker Engine
 * 
 * Functions:
 * 1. Establishes a comprehensive anchor dictionary for both domains (ap & ep).
 * 2. Parses article content safely (protects <a>, headings, and images).
 * 3. Recursively inserts optimized context links without corrupting layout markup.
 * 4. Can be executed on demand or as a library during Autopilot generation.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env.local') });
dotenv.config({ path: path.join(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase = null;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

// B2C (pouch.eco) Blog Keywords & Product Dictionary
export const B2C_LINK_DICTIONARY = [
  { term: 'compostable stand up pouches', slug: '/products/compostable-stand-up-pouches' },
  { term: 'compostable coffee bags', slug: '/products/compostable-coffee-bags' },
  { term: 'custom stickers', slug: '/products/custom-stickers' },
  { term: 'custom labels', slug: '/products/custom-labels' },
  { term: 'low MOQ packaging', slug: '/products/low-moq-packaging' },
  { term: 'recyclable pouches', slug: '/products/recyclable-mono-material-pouches' },
  { term: 'compostable materials', slug: '/materials/compostable' },
  { term: 'home compostable packaging', slug: '/materials/home-compostable' },
  { term: 'industrial compostable', slug: '/materials/industrial-compostable' },
  
  { term: 'degassing valve', slug: '/blog/coffee-degassing-valve-guide' },
  { term: 'one-way degassing valve', slug: '/blog/coffee-degassing-valve-guide' },
  { term: 'BPI certification', slug: '/blog/bpi-certified-guide' },
  { term: 'BPI certified', slug: '/blog/bpi-certified-guide' },
  { term: 'compostable humidity control', slug: '/blog/compostable-humidity-control-guide' },
  { term: 'humidity cracking', slug: '/blog/compostable-humidity-control-guide' },
  { term: 'industrial compostable guide', slug: '/blog/industrial-compostable-guide' },
  { term: 'home compostable guide', slug: '/blog/home-compostable-guide' },
  { term: 'low MOQ', slug: '/blog/low-moq-packaging-guide' },
  { term: 'minimum order quantity', slug: '/blog/low-moq-packaging-guide' },
  { term: 'Mono-PE', slug: '/blog/mono-pe-vs-mono-pp' },
  { term: 'Mono-PP', slug: '/blog/mono-pe-vs-mono-pp' },
  { term: 'lipid migration', slug: '/blog/grease-proof-pet-treat-packaging' },
  { term: 'grease-proof', slug: '/blog/grease-proof-pet-treat-packaging' },
  { term: 'hot-fill spout pouches', slug: '/blog/hot-fill-spout-pouches' },
  { term: 'pasteurization', slug: '/blog/hot-fill-spout-pouches' },
  { term: 'Mylar vs compostable', slug: '/blog/mylar-vs-compostable-packaging' },
  { term: 'green coffee packaging', slug: '/blog/green-coffee-materials-guide' },
  { term: 'digital printing', slug: '/blog/digital-printing-eco-packaging-guide' },
  { term: 'compostable baby food', slug: '/blog/compostable-baby-food-packaging-guide' },
  { term: 'compostable pouch suppliers', slug: '/blog/custom-compostable-pouch-suppliers-guide' },
  { term: 'custom printed materials', slug: '/blog/custom-printed-materials-guide' },
  { term: 'DTC sustainable packaging', slug: '/blog/dtc-sustainable-packaging-guide' },
  { term: 'recyclable snack packaging', slug: '/blog/recyclable-snack-packaging-guide' },
  { term: 'labeling compliance', slug: '/blog/usa-labeling-guide' },
  { term: 'SB 343', slug: '/blog/usa-labeling-guide' }
];

// B2B (achievepack.com) Store, Specs & Quote Form Dictionary
export const B2B_LINK_DICTIONARY = [
  { term: 'compostable pouches', slug: '/materials/compostable' },
  { term: 'certified compostable', slug: '/materials/compostable' },
  { term: 'Mono-PE', slug: '/materials/recyclable-mono-pe' },
  { term: 'recyclable pouches', slug: '/materials/recyclable-mono-pe' },
  { term: 'degassing valve', slug: '/products/coffee-bags-degassing-valve' },
  { term: 'one-way valve', slug: '/products/coffee-bags-degassing-valve' },
  { term: 'low MOQ', slug: '/products/low-moq-packaging' },
  { term: 'minimum order quantity', slug: '/products/low-moq-packaging' },
  { term: 'matte finish', slug: '/options/surface-finish' },
  { term: 'soft-touch', slug: '/options/surface-finish' },
  { term: 'reclosure options', slug: '/options/reclosure' },
  { term: 'zippers', slug: '/options/reclosure' },
  
  { term: 'Bio-Kraft VM-Cello', slug: '/spec/bio-kraft-vm-cello' },
  { term: 'Bio Cello Duplex Clear', slug: '/spec/bio-cello-duplex-clear' },
  { term: 'Bio Cellulose Triplex', slug: '/spec/bio-cello-triplex-highest' },
  { term: 'Bio Kraft PBAT', slug: '/spec/bio-kraft-pbat-low' },
  
  { term: 'stand up pouch', slug: '/quotes/stand-up-pouch' },
  { term: 'flat bottom pouch', slug: '/quotes/flat-bottom' },
  { term: 'gusset pouch', slug: '/packaging/side-gusset-bags' },
  { term: 'sachet', slug: '/quotes/three-side-seal' },
  { term: 'spout pouch', slug: '/quotes/spouted-pouch' },
  { term: 'spouted pouch', slug: '/quotes/spouted-pouch' },
  { term: 'three side seal', slug: '/quotes/three-side-seal' },
  { term: 'custom boxes', slug: '/packaging/custom-boxes' },
  { term: 'vacuum pouches', slug: '/packaging/vacuum-pouches' }
];

/**
 * Safely inserts internal links into text/HTML content, protecting existing tags.
 * 
 * @param {string} html Raw input content HTML 
 * @param {boolean} isB2C True if ep (pouch.eco), false if ap (achievepack.com)
 * @param {number} maxLinks Limit the number of links inserted per section
 * @param {string} currentSlug Path to avoid self-linking
 * @returns {{ html: string, linksInjected: number }} Refactored HTML & counts
 */
export function injectInternalLinks(html, isB2C = true, maxLinks = 3, currentSlug = '') {
  if (!html) return { html: '', linksInjected: 0 };
  
  const dict = isB2C ? B2C_LINK_DICTIONARY : B2B_LINK_DICTIONARY;
  
  // Protect block tags (headings, anchors, images, code)
  const protectedBlocks = [];
  let placeholderIndex = 0;
  
  let processedHtml = html;
  
  // 1. Protect <a> tags
  processedHtml = processedHtml.replace(/<a[\s\S]*?<\/a>/gi, (match) => {
    const placeholder = `___PROTECTED_LINK_${placeholderIndex++}___`;
    protectedBlocks.push({ placeholder, original: match });
    return placeholder;
  });
  
  // 2. Protect heading tags <h1> - <h6>
  processedHtml = processedHtml.replace(/<h[1-6][\s\S]*?<\/h[1-6]>/gi, (match) => {
    const placeholder = `___PROTECTED_HEADER_${placeholderIndex++}___`;
    protectedBlocks.push({ placeholder, original: match });
    return placeholder;
  });
  
  // 3. Protect <img> tags
  processedHtml = processedHtml.replace(/<img[\s\S]*?>/gi, (match) => {
    const placeholder = `___PROTECTED_IMG_${placeholderIndex++}___`;
    protectedBlocks.push({ placeholder, original: match });
    return placeholder;
  });

  // 4. Protect <pre> and <code> blocks
  processedHtml = processedHtml.replace(/<pre[\s\S]*?<\/pre>/gi, (match) => {
    const placeholder = `___PROTECTED_PRE_${placeholderIndex++}___`;
    protectedBlocks.push({ placeholder, original: match });
    return placeholder;
  });
  processedHtml = processedHtml.replace(/<code[\s\S]*?<\/code>/gi, (match) => {
    const placeholder = `___PROTECTED_CODE_${placeholderIndex++}___`;
    protectedBlocks.push({ placeholder, original: match });
    return placeholder;
  });

  // Inject keywords
  let linksInjected = 0;
  // Sort by term length descending to match longer terms first
  const sortedDict = [...dict].sort((a, b) => b.term.length - a.term.length);
  
  for (const item of sortedDict) {
    if (linksInjected >= maxLinks) break;
    
    // Avoid self-linking
    if (currentSlug && (item.slug.includes(currentSlug) || currentSlug.includes(item.slug.replace('/blog/', '')))) {
      continue;
    }
    
    const escapedTerm = item.term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    // Boundary match case-insensitive
    const regex = new RegExp(`\\b(${escapedTerm})\\b`, 'i');
    
    if (regex.test(processedHtml)) {
      processedHtml = processedHtml.replace(regex, (match) => {
        linksInjected++;
        const linkClass = isB2C 
          ? "underline text-emerald-600 hover:text-emerald-700 font-bold" 
          : "underline text-[#10b981] hover:text-[#0d9488] font-bold";
        return `<a href="${item.slug}" class="${linkClass}">${match}</a>`;
      });
    }
  }
  
  // Restore all protected blocks in reverse order
  for (let i = protectedBlocks.length - 1; i >= 0; i--) {
    const block = protectedBlocks[i];
    processedHtml = processedHtml.replace(block.placeholder, block.original);
  }
  
  return { html: processedHtml, linksInjected };
}

/**
 * Sweeps all pouch_seo_blog rows in Supabase and injects internal link anchors recursively!
 */
export async function runGlobalDatabaseLinkerSweep() {
  if (!supabase) {
    console.log('[LINKER] ⚠️ Supabase credentials missing. Local test only.');
    return;
  }

  console.log('[LINKER] Starting recursive internal linking database sweep...');
  
  try {
    const { data: posts, error } = await supabase
      .from('pouch_seo_blog')
      .select('id, slug, title, content');
      
    if (error) throw error;
    if (!posts || posts.length === 0) {
      console.log('[LINKER] No dynamic blog articles found to index.');
      return;
    }
    
    let totalInjections = 0;
    
    for (const post of posts) {
      const content = post.content || {};
      let postInjections = 0;
      let hasChanges = false;

      // Processing function helper
      const processVersion = (version, isB2C) => {
        if (!version || !version.sections || !Array.isArray(version.sections)) {
          return { version, injections: 0, changed: false };
        }
        
        let injections = 0;
        let changed = false;
        
        const updatedSections = version.sections.map(sec => {
          let secChanged = false;
          let updatedSec = { ...sec };
          
          // A. Process content HTML field
          if (sec.content) {
            const result = injectInternalLinks(sec.content, isB2C, 2, post.slug);
            if (result.linksInjected > 0) {
              injections += result.linksInjected;
              updatedSec.content = result.html;
              secChanged = true;
            }
          }
          
          // B. Process paragraphs array
          if (sec.paragraphs && Array.isArray(sec.paragraphs)) {
            const updatedParagraphs = sec.paragraphs.map(p => {
              if (p.text) {
                const result = injectInternalLinks(p.text, isB2C, 1, post.slug);
                if (result.linksInjected > 0) {
                  injections += result.linksInjected;
                  secChanged = true;
                  return {
                    ...p,
                    text: result.html
                  };
                }
              }
              return p;
            });
            
            if (secChanged) {
              updatedSec.paragraphs = updatedParagraphs;
            }
          }
          
          if (secChanged) {
            changed = true;
          }
          return updatedSec;
        });

        if (changed) {
          return {
            version: {
              ...version,
              sections: updatedSections
            },
            injections,
            changed: true
          };
        }
        
        return { version, injections: 0, changed: false };
      };

      // 1. Process root content (defaults to pouch/B2C fallback)
      const rootResult = processVersion(content, true);
      let updatedContent = rootResult.version;
      if (rootResult.changed) {
        postInjections += rootResult.injections;
        hasChanges = true;
      }

      // 2. Process content.pouch (B2C)
      if (content.pouch) {
        const pouchResult = processVersion(content.pouch, true);
        if (pouchResult.changed) {
          postInjections += pouchResult.injections;
          updatedContent.pouch = pouchResult.version;
          hasChanges = true;
        }
      }

      // 3. Process content.achievepack (B2B)
      if (content.achievepack) {
        const apResult = processVersion(content.achievepack, false);
        if (apResult.changed) {
          postInjections += apResult.injections;
          updatedContent.achievepack = apResult.version;
          hasChanges = true;
        }
      }
      
      if (hasChanges && postInjections > 0) {
        totalInjections += postInjections;
        console.log(`[LINKER] Injected ${postInjections} link(s) inside post: /blog/${post.slug}`);
        
        const { error: updateErr } = await supabase
          .from('pouch_seo_blog')
          .update({ content: updatedContent, updated_at: new Date().toISOString() })
          .eq('id', post.id);
          
        if (updateErr) console.error(`[LINKER] Failed to update post ${post.slug}:`, updateErr);
      }
    }
    
    console.log(`[LINKER] Global sweep completed! Total anchors recursively linked: ${totalInjections}`);
    return totalInjections;
  } catch (err) {
    console.error('[LINKER] Database sweep failed:', err);
  }
}

// Direct Execution Hook
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runGlobalDatabaseLinkerSweep();
}
