/**
 * CRM Calendly Import Script
 * 
 * This script imports Calendly events data from CSV file into Supabase CRM
 * 
 * Usage: node import-calendly.mjs
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
const CSV_FILE_PATH = path.join(__dirname, 'calendly', 'events-export 2.csv');

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
    .replace(/&nbsp;/g, ' ')
    .trim();
}

// Extract phone number from various fields
function extractPhone(record) {
  // Check common phone field names
  const phoneFields = [
    'Phone Number to call',
    'Text Reminder Number',
    'Response 1'
  ];
  
  for (const field of phoneFields) {
    const value = record[field];
    if (value && value.match(/^\+?[\d\s\-\(\)]+$/)) {
      return value.trim();
    }
  }
  
  return null;
}

// Extract timezone to country mapping
function getCountryFromTimezone(timezone) {
  if (!timezone) return null;
  const tz = timezone.toLowerCase();
  
  const timezoneCountries = {
    'australia': 'Australia',
    'sydney': 'Australia',
    'melbourne': 'Australia',
    'brisbane': 'Australia',
    'perth': 'Australia',
    'adelaide': 'Australia',
    'new zealand': 'New Zealand',
    'auckland': 'New Zealand',
    'uk': 'United Kingdom',
    'ireland': 'United Kingdom',
    'lisbon': 'Portugal',
    'eastern time': 'USA',
    'pacific time': 'USA',
    'central time': 'USA',
    'mountain time': 'USA',
    'atlantic': 'Canada',
    'singapore': 'Singapore',
    'malaysia': 'Malaysia',
    'hong kong': 'Hong Kong',
    'china': 'China',
    'japan': 'Japan',
    'korea': 'South Korea',
    'india': 'India',
    'dubai': 'UAE',
    'central european': 'Europe',
    'europe': 'Europe',
    'canada': 'Canada',
    'caracas': 'Venezuela',
    'santiago': 'Chile',
    'brazil': 'Brazil',
    'mexico': 'Mexico',
    'south africa': 'South Africa',
    'pakistan': 'Pakistan',
    'taiwan': 'Taiwan',
    'taipei': 'Taiwan'
  };
  
  for (const [key, country] of Object.entries(timezoneCountries)) {
    if (tz.includes(key)) return country;
  }
  
  return null;
}

async function importCalendlyCSV() {
  console.log('Reading Calendly CSV file...');
  console.log('CSV Path:', CSV_FILE_PATH);
  
  if (!fs.existsSync(CSV_FILE_PATH)) {
    console.error('CSV file not found:', CSV_FILE_PATH);
    process.exit(1);
  }
  
  const fileContent = fs.readFileSync(CSV_FILE_PATH, 'utf-8');
  
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    relax_quotes: true,
    relax_column_count: true
  });
  
  console.log(`Found ${records.length} records in Calendly CSV`);
  
  const inquiries = [];
  const skippedCanceled = [];
  const skippedNoEmail = [];
  const skippedSpam = [];
  
  for (const record of records) {
    const email = record['Invitee Email']?.trim();
    const message = cleanHtmlEntities(record['Response 1'] || record['Response 2'] || '');
    
    // Skip if no email
    if (!email) {
      skippedNoEmail.push(record);
      continue;
    }
    
    // Skip canceled events
    if (record['Canceled']?.toLowerCase() === 'true') {
      skippedCanceled.push(record);
      continue;
    }
    
    // Skip spam
    if (isSpam(message)) {
      skippedSpam.push(record);
      continue;
    }
    
    // Parse date
    let createdAt = record['Event Created Date & Time'];
    if (createdAt) {
      try {
        createdAt = new Date(createdAt).toISOString();
      } catch {
        createdAt = new Date().toISOString();
      }
    } else {
      createdAt = new Date().toISOString();
    }
    
    // Build full name
    const firstName = record['Invitee First Name']?.trim() || '';
    const lastName = record['Invitee Last Name']?.trim() || '';
    const inviteeName = record['Invitee Name']?.trim() || '';
    const fullName = inviteeName || `${firstName} ${lastName}`.trim() || 'Unknown';
    
    // Get phone
    const phone = extractPhone(record);
    
    // Get country from timezone
    const country = getCountryFromTimezone(record['Invitee Time Zone']);
    
    // Build note from meeting info
    const eventType = record['Event Type Name'] || '';
    const startDateTime = record['Start Date & Time'] || '';
    const question1 = record['Question 1'] || '';
    const question2 = record['Question 2'] || '';
    const response2 = record['Response 2'] || '';
    
    let noteLines = [];
    if (eventType) noteLines.push(`Meeting Type: ${eventType}`);
    if (startDateTime) noteLines.push(`Meeting Time: ${startDateTime}`);
    if (question1 && record['Response 1']) {
      noteLines.push(`${question1}: ${cleanHtmlEntities(record['Response 1'])}`);
    }
    if (question2 && response2) {
      noteLines.push(`${question2}: ${cleanHtmlEntities(response2)}`);
    }
    
    const notes = noteLines.join('\n');
    
    inquiries.push({
      name: fullName,
      email: email,
      phone: phone,
      country: country,
      message: message || notes || `Calendly meeting: ${eventType}`,
      source: 'calendly',
      status: 'new',
      priority: 'medium',
      created_at: createdAt,
      updated_at: new Date().toISOString(),
      // Store additional info in metadata
      notes: notes || null
    });
  }
  
  console.log(`\nProcessed records:`);
  console.log(`  Valid inquiries: ${inquiries.length}`);
  console.log(`  Skipped (no email): ${skippedNoEmail.length}`);
  console.log(`  Skipped (canceled): ${skippedCanceled.length}`);
  console.log(`  Skipped (spam): ${skippedSpam.length}`);
  
  // Deduplicate by email (keep latest meeting)
  const emailMap = new Map();
  for (const inq of inquiries) {
    const existing = emailMap.get(inq.email);
    if (!existing || new Date(inq.created_at) > new Date(existing.created_at)) {
      emailMap.set(inq.email, inq);
    }
  }
  
  const uniqueInquiries = Array.from(emailMap.values());
  
  console.log(`  After deduplication: ${uniqueInquiries.length}`);
  
  // Check for existing emails in database to avoid duplicates
  console.log('\nChecking for existing contacts...');
  const existingEmails = new Set();
  
  const { data: existingInquiries } = await supabase
    .from('crm_inquiries')
    .select('email')
    .in('email', uniqueInquiries.map(i => i.email));
  
  if (existingInquiries) {
    existingInquiries.forEach(i => existingEmails.add(i.email.toLowerCase()));
  }
  
  const newInquiries = uniqueInquiries.filter(i => !existingEmails.has(i.email.toLowerCase()));
  
  console.log(`  Found ${existingEmails.size} existing contacts`);
  console.log(`  New contacts to import: ${newInquiries.length}`);
  
  if (newInquiries.length === 0) {
    console.log('\nNo new contacts to import. All contacts already exist in CRM.');
    return;
  }
  
  // Insert in batches
  const BATCH_SIZE = 100;
  let inserted = 0;
  let errors = 0;
  
  console.log(`\nInserting into Supabase...`);
  
  for (let i = 0; i < newInquiries.length; i += BATCH_SIZE) {
    const batch = newInquiries.slice(i, i + BATCH_SIZE);
    
    const { data, error } = await supabase
      .from('crm_inquiries')
      .insert(batch);
    
    if (error) {
      console.error(`Error inserting batch ${i / BATCH_SIZE + 1}:`, error.message);
      errors += batch.length;
    } else {
      inserted += batch.length;
      process.stdout.write(`\r  Progress: ${inserted}/${newInquiries.length}`);
    }
  }
  
  console.log(`\n\nImport complete!`);
  console.log(`  Successfully inserted: ${inserted}`);
  console.log(`  Errors: ${errors}`);
  console.log(`  Skipped (already exists): ${uniqueInquiries.length - newInquiries.length}`);
}

// Run the import
console.log('Supabase URL:', SUPABASE_URL);
importCalendlyCSV().catch(console.error);
