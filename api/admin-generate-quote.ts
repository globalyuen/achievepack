import { createClient } from '@supabase/supabase-js';

export const config = {
  runtime: 'edge'
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS' } });
  }
  if (req.method !== 'POST') return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });

  try {
    const { logId, markup = 1.6 } = await req.json() as any;
    if (!logId) return new Response(JSON.stringify({ error: 'No DB tunnel logId provided' }), { status: 400 });

    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    if (!SUPABASE_URL || !SUPABASE_KEY) return new Response(JSON.stringify({ error: 'Supabase keys missing' }), { status: 500 });

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { data: logRow, error: logError } = await supabase.from('webhook_logs').select('raw_data').eq('id', logId).single();
    if (logError || !logRow) return new Response(JSON.stringify({ error: 'Failed to retrieve tunnel payload' }), { status: 400 });

    const text = logRow.raw_data?.text;
    const customerName = logRow.raw_data?.customer || 'Valued Client';
    if (!text) return new Response(JSON.stringify({ error: 'DB row empty' }), { status: 400 });

    const XAI_API_KEY = process.env.XAI_API_KEY;
    if (!XAI_API_KEY) return new Response(JSON.stringify({ error: 'XAI API key missing' }), { status: 500 });

    // FAST PROMPT: Only ask AI to translate/extract into compact JSON - NOT generate HTML (avoids timeout!)
    const systemPrompt = `You are a packaging product specialist. Analyze this factory quote (in Chinese) and extract the key fields.
Return ONLY a raw JSON object with these exact fields, no markdown, no explanation:
{
  "product_name": "English product name (e.g. 3-Side Seal Pouch, Stand Up Pouch with Zipper)",
  "material": "English material description",
  "size": "Dimensions in mm",
  "features": "Key features in English (zipper, barrier, printing, etc.)",
  "notes": "Any important notes or warnings in English",
  "pricing": [
    { "qty": <number>, "unit_rmb": <number>, "weight_kg": <number> }
  ]
}
Extract all pricing tiers. If 款数 (designs) is mentioned, multiply qty by 款数.`;

    const xaiResponse = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${XAI_API_KEY}` },
      body: JSON.stringify({
        model: 'grok-3-mini-beta',
        messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: text.substring(0, 2000) }],
        max_tokens: 600,
        temperature: 0.1,
      })
    });

    const xaiData: any = await xaiResponse.json();
    let content = xaiData.choices?.[0]?.message?.content || '{}';
    content = content.replace(/^```(json)?/i, '').replace(/```$/g, '').trim();
    const extracted = JSON.parse(content);

    return new Response(JSON.stringify({
      success: true,
      extracted,
      customerName,
      markup: parseFloat(markup)
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (err: any) {
    return new Response(JSON.stringify({ error: 'Quote generation failed', details: err.message }), { status: 500 });
  }
}
