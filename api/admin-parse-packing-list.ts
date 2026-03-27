import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { text, imageBase64 } = req.body;
  if (!text && !imageBase64) {
    return res.status(400).json({ error: 'Missing content to parse (text or imageBase64)' });
  }

  const XAI_API_KEY = process.env.XAI_API_KEY;
  if (!XAI_API_KEY) return res.status(500).json({ error: 'XAI API Key is missing on the server' });

  try {
    const systemPrompt = `You are an expert logistics data extractor for Achieve Pack.
You will be given raw text or an image of a Chinese supplier's packing list.
Your job is to EXHAUSTIVELY extract every distinct line item into a standardized JSON array format.

RULES:
1. DO NOT aggressive group or skip items. If the vendor lists items line-by-line, extract them line-by-line.
2. Ensure every SKU (款号) or Description (描述) mentioned is captured.
3. If multiple rows exist for the same item name but different cartons/quantities, keep them as separate objects.
4. Output MUST be RAW JSON, exactly an array of objects:
[
  {
    "name": "[ Item Name / Category ]",
    "details": "SKUs: 8-1, 8-2\\nQuantity: X pcs (Y pcs/ctn)\\nSingle package size: W x H x L\\nGross Weight: Z kg/ctn",
    "ctn": 3,
    "kgCtn": 15.80
  }
]
Do not output markdown \`\`\`json blocks. Return ONLY the raw array.`;

    let extractedText = text || '';

    const messages: any[] = [
      { role: 'system', content: systemPrompt }
    ];

    let modelToUse = 'grok-3-mini-beta';

    if (imageBase64) {
      // Use vision model if image is provided
      modelToUse = 'grok-2-vision-1212';
      messages.push({
        role: 'user',
        content: [
          { type: 'text', text: 'Extract this packing list image into the requested JSON array:' },
          { type: 'image_url', image_url: { url: imageBase64 } }
        ]
      });
    } else {
      // purely text base model for Excel CSVs and PDFs
      messages.push({
        role: 'user',
        content: extractedText.substring(0, 10000)
      });
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s timeout for heavy vision/PDFs
    
    const xaiResponse = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${XAI_API_KEY}` },
      body: JSON.stringify({
         model: modelToUse,
         messages,
         max_tokens: 2500,
         temperature: 0.1
      }),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    if (!xaiResponse.ok) {
      const errText = await xaiResponse.text();
      return res.status(500).json({ error: 'XAI API Error: ' + errText });
    }

    const data: any = await xaiResponse.json();
    const responseText = data.choices?.[0]?.message?.content || '[]';
    const cleanJson = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
    
    try {
      const parsedItems = JSON.parse(cleanJson);
      return res.status(200).json({ success: true, items: parsedItems });
    } catch (parseErr: any) {
      return res.status(500).json({ error: 'Failed to parse AI JSON', raw: cleanJson });
    }
  } catch (err: any) {
    if (err.name === 'AbortError') {
      return res.status(504).json({ error: 'AI request timed out due to heavy parsing' });
    }
    return res.status(500).json({ error: 'Server error: ' + err.message });
  }
}
