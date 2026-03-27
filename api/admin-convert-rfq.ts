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
    const { logId } = await req.json() as any;
    if (!logId) return new Response(JSON.stringify({ error: 'No DB tunnel logId provided' }), { status: 400 });

    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    if (!SUPABASE_URL || !SUPABASE_KEY) return new Response(JSON.stringify({ error: 'Supabase keys missing' }), { status: 500 });

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { data: logRow, error: logError } = await supabase.from('webhook_logs').select('raw_data').eq('id', logId).single();
    if (logError || !logRow) return new Response(JSON.stringify({ error: 'Failed to retrieve tunnel payload' }), { status: 400 });

    const text = logRow.raw_data?.text;
    if (!text) return new Response(JSON.stringify({ error: 'DB row empty' }), { status: 400 });

    const XAI_API_KEY = process.env.XAI_API_KEY;
    if (!XAI_API_KEY) return new Response(JSON.stringify({ error: 'XAI API key missing' }), { status: 500 });

    // Professional RFQ conversion prompt based on user's sample
    const systemPrompt = `You are an expert procurement specialist for Achieve Pack.
Your task: Convert the customer's English RFQ inquiry into a professional Chinese RFQ that can be sent directly to Chinese packaging vendors.

FORMAT REQUIREMENTS:
1. Use professional business Chinese
2. Follow this exact structure:
   - 开头问候语（您好，请按下述要求报价）
   - 1）袋型与结构（type, material, dimensions, thickness, seal width）
   - 2）功能与细节（features: notches, rounded corners, zipper, food-grade etc）
   - 3）印刷（printing: sides, colors, designs）
   - 4）数量（request pricing for typical quantities like 100k/300k/500k）
   - 5）报价内容（unit price, plate fee, sample cost, lead time, trade terms, shipping to France）
   - 结尾礼貌请求和技术建议邀请

STYLE:
- Concise, professional, factory-friendly
- Use industry standard terminology
- Include all technical specs from customer's request
- Add request for optimization suggestions if applicable
- NO markdown formatting
- Output ONLY the Chinese RFQ text, no explanations

EXAMPLE STRUCTURE (adapt based on actual input):
您好，
请按下述要求报价：
1）袋型与结构...
2）功能与细节...
3）印刷...
4）数量...
5）报价内容（请分别列明）...
如对材料结构或厚度有优化建议，请同时提供技术意见及对应报价。谢谢！`;

    const xaiResponse = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${XAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'grok-beta',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Convert this customer RFQ to professional Chinese vendor RFQ:\n\n${text}` }
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    if (!xaiResponse.ok) {
      const errorText = await xaiResponse.text();
      console.error('XAI API error:', errorText);
      throw new Error(`XAI API failed: ${xaiResponse.status} ${errorText.substring(0, 100)}`);
    }

    const xaiData = await xaiResponse.json() as any;
    const chineseRFQ = xaiData.choices?.[0]?.message?.content?.trim();

    if (!chineseRFQ) {
      throw new Error('AI returned empty response');
    }

    // Update the log with success
    await supabase.from('webhook_logs').update({
      status: 'Success',
      message: 'RFQ converted successfully'
    }).eq('id', logId);

    return new Response(JSON.stringify({ 
      success: true, 
      chineseRFQ,
      rfq: chineseRFQ // fallback field name
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });

  } catch (e: any) {
    console.error('RFQ conversion error:', e);
    
    // Try to update log if we have logId
    try {
      const { logId: errLogId } = await req.json() as any;
      if (errLogId) {
        const supabase = createClient(
          process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
          process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY || ''
        );
        await supabase.from('webhook_logs').update({
          status: 'Error',
          message: e.message || 'Unknown error'
        }).eq('id', errLogId);
      }
    } catch {}

    return new Response(JSON.stringify({ error: e.message || 'Server error' }), { status: 500 });
  }
}
