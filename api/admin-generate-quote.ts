export const config = {
  runtime: 'edge'
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS' } });
  }
  if (req.method !== 'POST') return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });

  try {
    const { text, markup = 1.6, customerName = "Valued Client" } = await req.json() as any;
    if (!text) return new Response(JSON.stringify({ error: 'No text provided' }), { status: 400 });

    const XAI_API_KEY = process.env.XAI_API_KEY
    if (!XAI_API_KEY) return new Response(JSON.stringify({ error: 'XAI API key missing' }), { status: 500 });

    const systemPrompt = `You are the lead sales director for Achieve Pack (a premium eco-packaging supplier based in HK).
The user will provide a raw, internal factory quotation (likely in Chinese RMB) meant for internal costs.
Your objective is to GENERATE A BEAUTIFUL, PROFESSIONAL CLIENT-FACING QUOTATION IN HTML FORMAT.

Rules to follow:
1. TRANSLATION: Translate ALL factory specs and terminology into professional English. 
   - e.g. "三边封" -> "3-Side Seal Pouch"
   - e.g. "数码印刷" -> "Digital Printing"
   - e.g. "高阻隔" -> "High Barrier"
2. CURRENCY & MARKUP: The raw prices are in RMB Cost. You MUST convert them to USD (divide RMB by 7.2) and THEN multiply by the requested markup multiplier (${markup}).
   - Formula: Final USD Price = (RMB_Cost / 7.2) * ${markup}
   - Round prices to 3 decimal places (e.g. $0.453).
   - Recalculate the Total Amount using the new USD Unit Price * Quantity.
3. OUTPUT FORMAT: Output ONLY clean, raw, valid HTML5 code. Do NOT wrap it in markdown ticks (\`\`\`html). 
   - Embed this logo at the top left: https://pouch.eco/imgs/logo-dark.png (height: 40px)
   - Add a Header: "Official Quotation" and the Date.
   - Add "Prepared for: ${customerName}"
   - Use clean, modern inline CSS (sans-serif fonts like 'Inter' or system-ui, minimal borders, subtle box shadows, professional table styling for the pricing tiers).
   - The table should clearly show: Quantity | Description/Specs | Unit Price (USD) | Total Amount (USD)
   - Add an elegant footer mentioning "Valid for 15 days. Express Shipping included. Payment: 100% upfront for digital prints."

DO NOT output anything other than HTML. Start with <!DOCTYPE html> and end with </html>.`;

    const xaiResponse = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${XAI_API_KEY}` },
      body: JSON.stringify({
        model: 'grok-3-mini-beta',
        messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: text.substring(0, 3000) }],
        max_tokens: 3000, 
        temperature: 0.1,
      })
    });
    
    const xaiData: any = await xaiResponse.json();
    let content = xaiData.choices?.[0]?.message?.content || '';
    
    // Strip markdown formatting if AI disobeyed
    content = content.replace(/^```(html)?/i, '').replace(/```$/g, '').trim();
    
    return new Response(JSON.stringify({ success: true, html: content }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: 'Quote Generation failed', details: err.message }), { status: 500 });
  }
}
