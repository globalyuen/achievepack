/**
 * CRM CSV Import Script
 * 
 * This script imports inquiry data from the CSV file into Supabase
 * 
 * Usage:
 * 1. Set your Supabase credentials below
 * 2. Run: node import-csv.mjs
 */

import fs from 'fs';
import { parse } from 'csv-parse/sync';
import { createClient } from '@supabase/supabase-js';

// ========== CONFIGURATION ==========
const SUPABASE_URL = process.env.SUPABASE_URL || 'YOUR_SUPABASE_URL';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY || 'YOUR_SUPABASE_SERVICE_KEY';
const CSV_FILE_PATH = './old/form-1-entries.csv';
// ===================================

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Spam detection patterns
const SPAM_PATTERNS = [
  'keyword targeted',
  'dominatingkeywords',
  'dominate-keywords',
  'SEO services',
  'PPC Bidding',
  'search engine results',
  'monthly visitors',
  'get more traffic'
];

function isSpam(message) {
  if (!message) return false;
  const lowerMessage = message.toLowerCase();
  return SPAM_PATTERNS.some(pattern => lowerMessage.includes(pattern.toLowerCase()));
}

function cleanHtmlEntities(text) {
  if (!text) return text;
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
}

async function importCSV() {
  console.log('Reading CSV file...');
  
  const fileContent = fs.readFileSync(CSV_FILE_PATH, 'utf-8');
  
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    relax_quotes: true,
    relax_column_count: true
  });
  
  console.log(`Found ${records.length} records in CSV`);
  
  const inquiries = [];
  const skippedSpam = [];
  const skippedNoEmail = [];
  
  for (const record of records) {
    const email = record['Email address']?.trim();
    const message = cleanHtmlEntities(record['How can we help?']);
    
    // Skip if no email
    if (!email) {
      skippedNoEmail.push(record);
      continue;
    }
    
    // Skip spam
    if (isSpam(message)) {
      skippedSpam.push(record);
      continue;
    }
    
    // Parse date
    let createdAt = record['Date Time'];
    if (createdAt) {
      try {
        createdAt = new Date(createdAt).toISOString();
      } catch {
        createdAt = new Date().toISOString();
      }
    } else {
      createdAt = new Date().toISOString();
    }
    
    inquiries.push({
      submission_id: record['Submission ID'] || null,
      name: record['Name']?.trim() || 'Unknown',
      email: email,
      phone: record['Phone']?.trim() || null,
      packaging_type: record['Packaging interested in']?.trim() || null,
      subject: cleanHtmlEntities(record['Subject']?.trim()) || null,
      message: message || null,
      photo_url: record['Upload product photo, artowrk or anything help to know more about your packaging project']?.trim() || null,
      source: 'import',
      status: 'new',
      priority: 'medium',
      created_at: createdAt,
      updated_at: new Date().toISOString()
    });
  }
  
  console.log(`\nProcessed records:`);
  console.log(`  Valid inquiries: ${inquiries.length}`);
  console.log(`  Skipped (no email): ${skippedNoEmail.length}`);
  console.log(`  Skipped (spam): ${skippedSpam.length}`);
  
  // Deduplicate by email + message (same inquiry sent multiple times)
  const seen = new Set();
  const uniqueInquiries = inquiries.filter(inq => {
    const key = `${inq.email}|${inq.message?.substring(0, 100)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  
  console.log(`  After deduplication: ${uniqueInquiries.length}`);
  
  // Insert in batches
  const BATCH_SIZE = 100;
  let inserted = 0;
  let errors = 0;
  
  console.log(`\nInserting into Supabase...`);
  
  for (let i = 0; i < uniqueInquiries.length; i += BATCH_SIZE) {
    const batch = uniqueInquiries.slice(i, i + BATCH_SIZE);
    
    const { data, error } = await supabase
      .from('crm_inquiries')
      .insert(batch);
    
    if (error) {
      console.error(`Error inserting batch ${i / BATCH_SIZE + 1}:`, error.message);
      errors += batch.length;
    } else {
      inserted += batch.length;
      process.stdout.write(`\r  Progress: ${inserted}/${uniqueInquiries.length}`);
    }
  }
  
  console.log(`\n\nImport complete!`);
  console.log(`  Successfully inserted: ${inserted}`);
  console.log(`  Errors: ${errors}`);
}

// Check if we have valid Supabase credentials
if (SUPABASE_URL === 'YOUR_SUPABASE_URL' || SUPABASE_SERVICE_KEY === 'YOUR_SUPABASE_SERVICE_KEY') {
  console.log(`
==================================================
CRM CSV Import Script
==================================================

Before running this script, you need to:

1. Create the crm_inquiries table in Supabase:

   CREATE TABLE crm_inquiries (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     submission_id TEXT,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     phone TEXT,
     company TEXT,
     packaging_type TEXT,
     subject TEXT,
     message TEXT,
     photo_url TEXT,
     source TEXT DEFAULT 'website',
     status TEXT DEFAULT 'new',
     priority TEXT DEFAULT 'medium',
     assigned_to TEXT,
     notes TEXT,
     follow_up_date TIMESTAMP,
     last_contacted TIMESTAMP,
     created_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP DEFAULT NOW()
   );

   CREATE TABLE crm_activities (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     inquiry_id UUID REFERENCES crm_inquiries(id) ON DELETE CASCADE,
     type TEXT NOT NULL,
     subject TEXT,
     content TEXT NOT NULL,
     created_by TEXT,
     created_at TIMESTAMP DEFAULT NOW()
   );

   CREATE INDEX idx_inquiries_email ON crm_inquiries(email);
   CREATE INDEX idx_inquiries_status ON crm_inquiries(status);
   CREATE INDEX idx_inquiries_created ON crm_inquiries(created_at DESC);

2. Set your Supabase credentials:

   export SUPABASE_URL="https://xxx.supabase.co"
   export SUPABASE_SERVICE_KEY="your-service-key"

3. Install dependencies and run:

   npm install csv-parse @supabase/supabase-js
   node import-csv.mjs

==================================================
`);
} else {
  importCSV().catch(console.error);
}
