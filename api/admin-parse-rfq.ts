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
    const { text } = await req.json() as { text: string };
    if (!text) return new Response(JSON.stringify({ error: 'No text provided' }), { status: 400 });

    const XAI_API_KEY = process.env.XAI_API_KEY
    if (!XAI_API_KEY) return new Response(JSON.stringify({ error: 'XAI key missing' }), { status: 500 });

    const systemPrompt = `You are an expert procurement assistant for Achieve Pack.
    Your task is to parse raw, unformatted text (from emails, WhatsApp, or documents) into a structured RFQ (Request for Quotation) format.
    
    Extract the following details for each SKU/product mentioned:
    - product_name (Professional English)
    - style (e.g., Quad-seal, Stand-up Pouch, Flat Bottom)
    - dimensions (e.g., 16" x 31" x 6")
    - material_spec (e.g., 6.0 mil mLLDPE, Matte BOPP/VMPET/PE)
    - print_type (e.g., Gravure, Flexographic)
    - target_quantities (A list of numbers, e.g., [10000, 25000, 50000])
    
    Also determine a "batch_name" for this RFQ based on the content (e.g., "Pet Food Packaging RFQ").
    
    RETURN RAW JSON ONLY in this format:
    {
      "batch_name": "...",
      "items": [
        {
          "product_name": "...",
          "style": "...",
          "dimensions": "...",
          "material_spec": "...",
          "print_type": "...",
          "target_quantities": [10000, 25000, 50000]
        }
      ]
    }
    
    Rules:
    1. If a detail is missing, provide a reasonable default or leave as empty string.
    2. Convert all measurements to a consistent format.
    3. Translate any Chinese terms to professional packaging English.
    4. Return ONLY JSON. No explanations.`;

    const xaiResponse = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${XAI_API_KEY}` },
      body: JSON.stringify({
        model: 'grok-3-beta',
        messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: text.substring(0, 5000) }],
        max_tokens: 2000,
        temperature: 0,
      })
    });
    
    const xaiData: any = await xaiResponse.json();
    const content = xaiData.choices?.[0]?.message?.content || '{}';
    const cleanJson = content.replace(/```json/g, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(cleanJson);
    
    return new Response(JSON.stringify({ success: true, parsed }), { 
      status: 200, 
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      } 
    });
  } catch (err: any) {
    console.error('RFQ Parse error:', err);
    return new Response(JSON.stringify({ error: 'Parse failed', details: err.message }), { status: 500 });
  }
}
