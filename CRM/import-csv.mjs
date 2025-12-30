/**
 * CRM CSV Import Script
 * 
 * This script imports inquiry data from the CSV file into Supabase
 * 
 * Usage: node import-csv.mjs
 */

import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { createClient } from '@supabase/supabase-js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read .env file from parent directory
const envPath = path.join(__dirname, '..', '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const [key, ...valueParts] = line.split('=');
  if (key && valueParts.length) {
    envVars[key.trim()] = valueParts.join('=').trim();
  }
});

const SUPABASE_URL = envVars.VITE_SUPABASE_URL;
const SUPABASE_KEY = envVars.VITE_SUPABASE_ANON_KEY;
const CSV_FILE_PATH = path.join(__dirname, 'old', 'form-1-entries.csv');

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

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

// Run the import
console.log('Supabase URL:', SUPABASE_URL);
console.log('CSV Path:', CSV_FILE_PATH);
importCSV().catch(console.error);
