import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
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

const VAULT_ROOT = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/ob vault - ap ctr follow up/00-Inbox';

// Helper to recursively find all markdown files
function getAllMarkdownFiles(dirPath) {
  let results = [];
  if (!fs.existsSync(dirPath)) return results;
  const list = fs.readdirSync(dirPath);
  list.forEach(file => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(fullPath));
    } else if (file.endsWith('.md')) {
      results.push(fullPath);
    }
  });
  return results;
}

// Parser logic for Calendly email contents
function parseInquiryContent(text, filename) {
  const titleMatch = text.match(/title:\s*"?New Event:\s*(.+?)"?\s*\n/) || text.match(/title:\s*"?(.+?)"?\s*\n/);
  const dateMatch  = text.match(/date:\s*(.+)/);
  const name        = titleMatch ? titleMatch[1].replace(/---.*/, '').trim() : filename.replace('.md', '');
  const raw_date    = dateMatch ? dateMatch[1].trim() : "";

  // Clean title
  let cleanName = name
    .replace(/^(?:Re:\s*|Fwd:\s*|RE:\s*|FWD:\s*|Re-New-Event-|New-Event-)+/gi, '')
    .replace(/---.*/g, '')
    .replace(/-/g, ' ')
    .trim();

  let invitee_email = "";
  // 1. Try targeting "Invitee Email:" explicitly
  const inviteeEmailMatch = text.match(/\*\*Invitee Email:\*\*\s*(?:\n|\s)*\[?(mailto:)?([^\]\)\s]+)/i) || text.match(/Invitee Email:\s*(?:\n|\s)*\[?(mailto:)?([^\]\)\s]+)/i);
  if (inviteeEmailMatch) {
    invitee_email = inviteeEmailMatch[2].replace(/mailto:/i, '').trim().toLowerCase();
  }

  // 2. Fallback: extract all emails and filter out system/internal ones
  if (!invitee_email || invitee_email.includes('calendly') || invitee_email.includes('achievepack') || invitee_email.includes('pouch.eco')) {
    const allEmails = text.match(/[\w\.-]+@[\w\.-]+\.\w+/g) || [];
    const filtered = allEmails.map(e => e.trim().toLowerCase()).filter(e => {
      return !e.includes('calendly') && 
             !e.includes('achievepack') && 
             !e.includes('pouch.eco');
    });
    if (filtered.length > 0) {
      invitee_email = filtered[0];
    }
  }

  let meeting_time = "";
  let duration = "15 min";
  const mt = text.match(/\*\*Event Date\/Time:\*\*\s*(.+?)(?:\((.+?)\))?(?:\n|$)/i);
  if (mt) {
    meeting_time = mt[1].trim();
  } else {
    const mt_fallback = text.match(/Date\/Time:\s*([^\n]+)/i);
    if (mt_fallback) {
      meeting_time = mt_fallback[1].trim();
    }
  }
  meeting_time = meeting_time.replace(/\*\*/g, '').replace('(China, Singapore, Perth)', '').trim();

  const durMatch = text.match(/(\d+)\s*Minute Meeting/i);
  if (durMatch) {
    duration = `${durMatch[1]} min`;
  }

  let phone = "";
  const ph = text.match(/\*\*Phone Number[^*]*\*\*\s*\n+([^\n*]+)/i);
  if (ph) {
    phone = ph[1].trim();
  } else {
    const ph_fallback = text.match(/Phone Number:\s*([^\n]+)/i);
    if (ph_fallback) {
      phone = ph_fallback[1].trim();
    }
  }
  phone = phone.replace(/\*\*/g, '').replace('Please share anything...', '').trim();

  let inquiry = "";
  const inq = text.match(/Please share anything[\s\S]*?\n([\s\S]+?)(?:\[View event|\-{3}|\Z)/i);
  if (inq) {
    inquiry = inq[1].trim();
  } else {
    const inq_fallback = text.match(/prepare for our meeting\.\*\*\s*\n+([\s\S]+?)(?:\[View event|\-{3}|\Z)/i);
    if (inq_fallback) {
      inquiry = inq_fallback[1].trim();
    }
  }
  inquiry = inquiry.replace(/\*\*/g, '').replace(/\n/g, ' ').replace(/\s{2,}/g, ' ').trim();

  return {
    id: filename.replace('.md', ''),
    name: cleanName,
    email: invitee_email,
    meeting_time,
    duration,
    phone,
    inquiry: inquiry.substring(0, 500),
    raw_date,
    source_file: filename
  };
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function uploadBatchWithRetries(batch, batchIndex, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const { error } = await supabase
        .from('calendly_inquiries')
        .upsert(batch, { onConflict: 'id' }); // NOTE: we removed ignoreDuplicates: true here so we force update the emails in the database!

      if (error) {
        throw error;
      }
      return true; // Success
    } catch (error) {
      console.warn(`[Attempt ${attempt}/${retries}] Batch starting at index ${batchIndex} failed: ${error.message}`);
      if (attempt < retries) {
        const backoff = attempt * 1500;
        console.log(`Waiting ${backoff}ms before retry...`);
        await delay(backoff);
      } else {
        console.error(`Batch starting at index ${batchIndex} failed after all retries.`);
        return false;
      }
    }
  }
}

async function syncToSupabase() {
  if (!fs.existsSync(VAULT_ROOT)) {
    console.error(`Obsidian Vault Inbox path does not exist: ${VAULT_ROOT}`);
    process.exit(1);
  }

  console.log(`Scanning local files in: ${VAULT_ROOT}`);
  const files = getAllMarkdownFiles(VAULT_ROOT);
  const meetings = new Map();

  for (const file of files) {
    const fileName = path.basename(file);
    const fileLower = fileName.toLowerCase();
    
    if (fileLower.includes('new-event') || fileLower.includes('new event') || fileLower.includes('event-date')) {
      const content = fs.readFileSync(file, 'utf-8');
      const parsed = parseInquiryContent(content, fileName);
      if (parsed && parsed.name) {
        const key = `${parsed.email || ''}|${parsed.meeting_time || ''}`;
        if (!meetings.has(key)) {
          meetings.set(key, parsed);
        } else {
          const existing = meetings.get(key);
          if (parsed.inquiry.length > existing.inquiry.length) {
            meetings.set(key, parsed);
          }
        }
      }
    }
  }

  const inquiries = Array.from(meetings.values());
  console.log(`Parsed ${inquiries.length} unique Calendly inquiries from files.`);

  // First, fetch existing status/notes from Supabase so we don't wipe out Ryan's custom entries on upsert!
  console.log('Fetching existing inquiries status/notes from Supabase to preserve them...');
  const { data: existingData, error: fetchErr } = await supabase
    .from('calendly_inquiries')
    .select('id, status, notes');

  const existingMap = new Map();
  if (!fetchErr && existingData) {
    existingData.forEach(item => {
      existingMap.set(item.id, { status: item.status, notes: item.notes });
    });
    console.log(`Loaded ${existingMap.size} existing items to preserve notes/status.`);
  }

  const batchSize = 50;
  let successCount = 0;

  for (let i = 0; i < inquiries.length; i += batchSize) {
    const batch = inquiries.slice(i, i + batchSize).map(item => {
      const saved = existingMap.get(item.id) || { status: '未跟進', notes: '' };
      return {
        id: item.id,
        name: item.name,
        email: item.email || null,
        phone: item.phone || null,
        meeting_time: item.meeting_time || null,
        duration: item.duration || null,
        inquiry: item.inquiry || null,
        raw_date: item.raw_date || null,
        source_file: item.source_file || null,
        status: saved.status,
        notes: saved.notes
      };
    });

    const ok = await uploadBatchWithRetries(batch, i);
    if (ok) {
      successCount += batch.length;
      console.log(`Synced batch of ${batch.length} inquiries (${successCount}/${inquiries.length})...`);
    }
    await delay(300);
  }

  console.log(`Sync complete! Total inquiries processed: ${successCount}`);
}

syncToSupabase().catch(err => {
  console.error('Fatal sync error:', err);
});
