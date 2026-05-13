import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const body = req.body || {};
    const { logId } = body;
    if (!logId) return res.status(400).json({ error: 'No logId provided' });

    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY
    if (!SUPABASE_URL || !SUPABASE_KEY) return res.status(500).json({ error: 'Supabase keys missing' });
    
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
    const { data: logRow, error: logError } = await supabase.from('webhook_logs').select('raw_data').eq('id', logId).single()
    if (logError || !logRow) return res.status(400).json({ error: 'Failed to retrieve tunnel payload' });

    let rawText = logRow.raw_data?.text;
    if (!rawText && logRow.raw_data?.text_base64) {
      rawText = decodeURIComponent(Buffer.from(logRow.raw_data.text_base64, 'base64').toString('utf-8'));
    }
    if (!rawText) return res.status(400).json({ error: 'DB row empty' });

    const XAI_API_KEY = process.env.XAI_API_KEY
    if (!XAI_API_KEY) return res.status(500).json({ error: 'XAI key missing' });

    const systemPrompt = `Analyze this chat/email conversation carefully. Identify the TRUE primary customer, person, or company involved. Also determine the "status" (New, Urgent, In Progress, Shipped, Pending), "category" (Quotes, Production, Sample Shipping, Production Shipping, Enquiries), and summarize the core instructions/actions into "detail". 

    NOTE: If the user mentions designs vs quantity (e.g. "4 designs, 400pcs total"), clearly state it as "4 designs x 100pcs each (Total 400pcs)" in the detail summary.
    
    Return RAW JSON ONLY: { "customer": "Name", "status": "...", "category": "...", "detail": "..." }`;

    const xaiResponse = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${XAI_API_KEY}` },
      body: JSON.stringify({
        model: 'grok-3',
        messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: rawText.substring(0, 3000) }],
        max_tokens: 400, temperature: 0,
      })
    });
    
    const xaiData: any = await xaiResponse.json();
    const content = xaiData.choices?.[0]?.message?.content || '{}';
    const cleanJson = content.replace(/```json/g, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(cleanJson);
    
    return res.status(200).json({ success: true, parsed });
  } catch (err: any) {
    return res.status(500).json({ error: 'Parse failed', details: err.message });
  }
}
