const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabase = createClient(
  'https://vvxkwjkxlnegsxjexgrm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2eGt3amt4bG5lZ3N4amV4Z3JtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNzUyMTQyMywiZXhwIjoyMDUzMDk3NDIzfQ.SaeCqk0AeFnIl5_lYPB-RmkQqbhdOd-2wX_G3aW3-eI',
  { auth: { persistSession: false } }
);

const delay = ms => new Promise(r => setTimeout(r, ms));

async function retry(fn, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      if (i === retries - 1) throw e;
      await delay(1000 * (i + 1));
    }
  }
}

async function importHistory() {
  const jsonPath = '../../prospect/history_import.json';
  console.log('Reading:', jsonPath);
  
  const records = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  console.log(`Total records: ${records.length}`);
  
  // Get existing emails
  console.log('Fetching existing emails...');
  const existingEmails = new Set();
  let page = 0;
  while (true) {
    const { data, error } = await supabase
      .from('prospect')
      .select('email')
      .range(page * 1000, (page + 1) * 1000 - 1);
    if (error || !data || data.length === 0) break;
    data.forEach(r => { if (r.email) existingEmails.add(r.email.toLowerCase()); });
    page++;
    if (data.length < 1000) break;
  }
  console.log(`Existing emails: ${existingEmails.size}`);
  
  let imported = 0, skipped = 0, errors = 0;
  const batchSize = 20;
  
  for (let i = 0; i < records.length; i += batchSize) {
    const batch = records.slice(i, i + batchSize);
    
    for (const r of batch) {
      if (!r.email || existingEmails.has(r.email.toLowerCase())) {
        skipped++;
        continue;
      }
      
      try {
        const sender = (r.sender || 'ryan').toLowerCase();
        const validSender = ['ryan', 'jericha', 'eric'].includes(sender) ? sender : 'ryan';
        
        const { data: sq, error: sqErr } = await retry(() => supabase
          .from('prospect_search_query')
          .insert({
            query: `Imported: ${r.business_type || 'Unknown'}`,
            sender: validSender,
            status: 'imported',
            created_at: r.date_sent || new Date().toISOString()
          })
          .select()
          .single());
        
        if (sqErr || !sq) { errors++; continue; }
        
        const { error: pErr } = await retry(() => supabase
          .from('prospect')
          .insert({
            search_query_id: sq.id,
            name: (r.name || 'Unknown').substring(0, 500),
            email: r.email,
            website: (r.website || '').substring(0, 500),
            business_type: (r.business_type || 'Unknown').substring(0, 100),
            email_sent: true,
            email_sent_at: r.date_sent || new Date().toISOString(),
            sales_pitch: r.search_query || ''
          }));
        
        if (pErr) { errors++; } 
        else { imported++; existingEmails.add(r.email.toLowerCase()); }
        
        await delay(50); // Rate limit
      } catch (e) { errors++; }
    }
    
    if (i % 500 === 0) {
      console.log(`Progress: ${i}/${records.length} | Imported: ${imported} | Skipped: ${skipped} | Errors: ${errors}`);
    }
  }
  
  console.log(`\n=== COMPLETE ===`);
  console.log(`Imported: ${imported}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Errors: ${errors}`);
}

importHistory().catch(console.error);
