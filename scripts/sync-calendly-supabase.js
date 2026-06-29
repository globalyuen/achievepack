import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load local environment variables
dotenv.config({ path: path.join(__dirname, '../.env.local') });
dotenv.config({ path: path.join(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false
  }
});

const JSON_FILE_PATH = path.join(__dirname, '../src/data/calendly_inquiries.json');

async function syncToSupabase() {
  if (!fs.existsSync(JSON_FILE_PATH)) {
    console.error(`Parsed inquiries JSON not found at: ${JSON_FILE_PATH}`);
    process.exit(1);
  }

  const rawData = fs.readFileSync(JSON_FILE_PATH, 'utf-8');
  const inquiries = JSON.parse(rawData);

  console.log(`Loaded ${inquiries.length} inquiries from JSON.`);

  // Upload in batches of 50 to prevent size limits
  const batchSize = 50;
  let successCount = 0;

  for (let i = 0; i < inquiries.length; i += batchSize) {
    const batch = inquiries.slice(i, i + batchSize).map(item => ({
      id: item.id,
      name: item.name,
      email: item.email || null,
      phone: item.phone || null,
      meeting_time: item.meeting_time || null,
      duration: item.duration || null,
      inquiry: item.inquiry || null,
      raw_date: item.raw_date || null,
      source_file: item.source_file || null,
      // Default tracking states (will be ignored if record already exists and ignoreDuplicates is handled)
      status: '未跟進',
      notes: ''
    }));

    // Perform upsert with select to verify
    // Using Supabase client with SERVICE KEY allows us to bypass RLS and perform upserts
    const { error } = await supabase
      .from('calendly_inquiries')
      .upsert(batch, { onConflict: 'id', ignoreDuplicates: true }); // ignoreDuplicates: true preserves existing user edits!

    if (error) {
      console.error(`Error uploading batch starting at index ${i}:`, error.message);
    } else {
      successCount += batch.length;
      console.log(`Synced batch of ${batch.length} inquiries (${successCount}/${inquiries.length})...`);
    }
  }

  console.log(`Sync complete! Total inquiries processed: ${successCount}`);
}

syncToSupabase().catch(err => {
  console.error('Fatal sync error:', err);
});
