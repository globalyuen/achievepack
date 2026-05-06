import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Missing config", { SUPABASE_URL, hasKey: !!SUPABASE_KEY });
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function checkEmails() {
  console.log("Checking last 5 prospect search queries...");
  const { data: queries, error: queryError } = await supabase
    .from('prospect_search_query')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5);

  if (queryError) {
    console.error("Query Error", queryError);
  } else {
    queries.forEach(q => {
      console.log(`Query: "${q.query}", Status: ${q.status}, Sent: ${q.emails_sent}/${q.emails_found}, Created: ${q.created_at}`);
    });
  }

  console.log("\nChecking last 10 prospects...");
  const { data: prospects, error: prospectError } = await supabase
    .from('prospect')
    .select('id, name, email, email_sent, email_sent_at, follow_up_sent, created_at')
    .order('created_at', { ascending: false })
    .limit(10);

  if (prospectError) {
    console.error("Prospect Error", prospectError);
  } else {
    prospects.forEach(p => {
      console.log(`ID: ${p.id}, Name: ${p.name}, Email: ${p.email}, Sent: ${p.email_sent} (${p.email_sent_at || 'N/A'}), FollowUp: ${p.follow_up_sent}, Created: ${p.created_at}`);
    });
  }

  console.log("\nChecking automation status...");
  const { data: automation, error: autoError } = await supabase
    .from('prospect_automation')
    .select('*')
    .eq('id', 1)
    .single();

  if (autoError) {
    console.error("Automation Error", autoError);
  } else {
    console.log(`Automation running: ${automation.is_running}, Last run: ${automation.last_run_at}`);
  }
}

checkEmails();
