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
    const systemPrompt = `You are an expert logistics extractor for Achieve Pack.
Analyze the factory quote and return ONLY a raw JSON array. SPEED IS CRITICAL.
Target < 8s response. Extract all SKU/product pricing.
IMPORTANT: Translate ALL Chinese text into professional English (including product_name, material, thickness, features, notes, size, and plate_details). Do not include ANY Chinese characters in the output.
[
  {
    "product_name": "Product category (in English)",
    "print_type": "Digital Print or Cylinder Print",
    "plate_details": "If cylinder, detail limit per size/color/design and if flat bottom gusset has separate plate (in English)",
    "material": "Material spec and thickness (in English)",
    "size": "mm dims",
    "features": "Concise key info (in English)",
    "notes": "Short warning (in English)",
    "plate_fee_rmb": <number>,
    "designs_count": <number | null>,
    "pricing": [{ "qty": <number>, "unit_rmb": <number>, "weight_kg": <number> }]
  }
]
Exhaustive items, but MINIMAL text tokens. No markdown. If multiple designs (款數) are mentioned (e.g. 款數4), capture it in designs_count. Total qty should still be in pricing.qty. Identify if it's Digital (數碼) or Cylinder Print (凹版/制版). If cylinder, capture plate cost details per color/design and note if flat bottom gusset requires separate plates. The output must be completely translated to professional English.`;

    const xaiResponse = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${XAI_API_KEY}` },
      body: JSON.stringify({
        model: 'grok-3-beta', // Using grok-3-beta for consistency with working modules
        messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: text.substring(0, 4000) }],
        max_tokens: 1500,
        temperature: 0,
      })
    });

    const xaiData: any = await xaiResponse.json();
    
    if (!xaiResponse.ok) {
      const errMsg = xaiData.error?.message || xaiData.error || 'Unknown X.AI Error';
      throw new Error(`X.AI API Error: ${errMsg}`);
    }

    let content = xaiData.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error("AI returned an empty response. Please try again.");
    }

    // Clean markdown if present
    content = content.replace(/^```(json)?/i, '').replace(/```$/g, '').trim();
    
    let extracted;
    try {
      extracted = JSON.parse(content);
    } catch (e) {
      console.error("Failed to parse AI JSON:", content);
      throw new Error("AI returned invalid data format. Please try again with clearer text.");
    }

    return new Response(JSON.stringify({
      success: true,
      extracted,
      customerName,
      markup: parseFloat(markup)
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (err: any) {
    console.error("Quote API Error:", err.message);
    return new Response(JSON.stringify({ 
      success: false,
      error: 'Quote generation failed', 
      details: err.message 
    }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
