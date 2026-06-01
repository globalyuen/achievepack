import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Read .env.local and .env
function getEnv() {
  const env = {};
  const paths = ['.env.local', '.env'];
  for (const p of paths) {
    if (fs.existsSync(p)) {
      const content = fs.readFileSync(p, 'utf8');
      const lines = content.split('\n');
      for (const line of lines) {
        const match = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/);
        if (match) {
          let val = match[2] || '';
          if (val.startsWith('"') && val.endsWith('"')) {
            val = val.substring(1, val.length - 1);
          }
          if (val.startsWith("'") && val.endsWith("'")) {
            val = val.substring(1, val.length - 1);
          }
          env[match[1]] = val;
        }
      }
    }
  }
  return env;
}

const env = getEnv();
const supabaseUrl = env.VITE_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.VITE_SUPABASE_ANON_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env or .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  try {
    console.log("Connecting to Supabase at:", supabaseUrl);
    
    // Select everything from the table to see columns and rows
    const { data: dbData, error: dbError } = await supabase
      .from('pouch_seo_blog')
      .select('*');
    
    let dbCount = 0;
    let dbSlugs = [];

    if (dbError) {
      console.error("Supabase Error on select all:", dbError);
    } else {
      dbCount = dbData.length;
      console.log(`Database (Supabase) count: ${dbCount}`);
      if (dbCount > 0) {
        console.log("Columns found in first row:", Object.keys(dbData[0]));
        console.log("Database entries (up to 20):");
        dbData.slice(0, 20).forEach(p => {
          console.log(` - /blog/${p.slug} (title: ${p.title || p.meta_title || 'N/A'}, updated: ${p.updated_at})`);
          if (p.slug) dbSlugs.push(p.slug);
        });
      }
    }

    const mapping = JSON.parse(fs.readFileSync('./src/data/route-mapping.json', 'utf8'));
    console.log("\nRoute Mapping JSON Counts:");
    console.log("Pouch (B2C) Routes:", mapping.pouch.length);
    console.log("Achieve (B2B) Routes:", mapping.achieve.length);
    console.log("Synced Routes (Codebase):", mapping.synced.length);
    console.log("Pending Routes (Codebase):", mapping.pending.length);

    // Calculate actual migration progress:
    // A page is counted as migrated if it's in synced or in Supabase database
    const migratedPages = new Set(mapping.synced);
    
    if (dbData) {
      dbData.forEach(p => {
        // Find which achieve route this matches
        const route = mapping.achieve.find(r => r.endsWith(p.slug) || r.includes(`/${p.slug}`));
        if (route) {
          migratedPages.add(route);
        } else if (p.slug) {
          migratedPages.add(`/blog/${p.slug}`);
        }
      });
    }

    console.log(`\nCombined unique migrated/synced pages count: ${migratedPages.size}`);
    const percentage = ((migratedPages.size / mapping.achieve.length) * 100).toFixed(2);
    console.log(`Migration completion rate: ${percentage}% (${migratedPages.size} / ${mapping.achieve.length} B2B routes migrated to pouch.eco)`);

  } catch (err) {
    console.error("Error running script:", err);
  }
}

run();
