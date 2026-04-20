import { createClient } from '@supabase/supabase-js'

export const config = {
  runtime: 'edge'
}

export default async function handler(req: Request): Promise<Response> {
  // Handle CORS Preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS' } });
  }
  if (req.method !== 'POST') return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });

  try {
    const body = await req.json() as any;
    const { logId } = body;
    if (!logId) return new Response(JSON.stringify({ error: 'No logId provided' }), { status: 400 });

    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY
    if (!SUPABASE_URL || !SUPABASE_KEY) return new Response(JSON.stringify({ error: 'Supabase keys missing' }), { status: 500 });
    
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
    const { data: logRow, error: logError } = await supabase.from('webhook_logs').select('raw_data').eq('id', logId).single()
    if (logError || !logRow) return new Response(JSON.stringify({ error: 'Failed to retrieve tunnel payload' }), { status: 400 });

    const rawText = logRow.raw_data?.text;
    if (!rawText) return new Response(JSON.stringify({ error: 'DB row empty' }), { status: 400 });

    const XAI_API_KEY = process.env.XAI_API_KEY
    if (!XAI_API_KEY) return new Response(JSON.stringify({ error: 'XAI key missing' }), { status: 500 });

    const systemPrompt = `Analyze this chat/email conversation carefully. Identify the TRUE primary customer, person, or company involved. Also determine the "status" (New, Urgent, In Progress, Shipped, Pending), "category" (Quotes, Production, Sample Shipping, Production Shipping, Enquiries), and summarize the core instructions/actions into "detail". 

    NOTE: If the user mentions designs vs quantity (e.g. "4 designs, 400pcs total"), clearly state it as "4 designs x 100pcs each (Total 400pcs)" in the detail summary.
    
    Return RAW JSON ONLY: { "customer": "Name", "status": "...", "category": "...", "detail": "..." }`;

    const xaiResponse = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${XAI_API_KEY}` },
      body: JSON.stringify({
        model: 'grok-3-beta',
        messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: rawText.substring(0, 3000) }],
        max_tokens: 400, temperature: 0,
      })
    });
    
    const xaiData: any = await xaiResponse.json();
    const content = xaiData.choices?.[0]?.message?.content || '{}';
    const cleanJson = content.replace(/```json/g, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(cleanJson);
    
    return new Response(JSON.stringify({ success: true, parsed }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: 'Parse failed', details: err.message }), { status: 500 });
  }
}
