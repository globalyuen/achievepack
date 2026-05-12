import type { VercelRequest, VercelResponse } from '@vercel/node';

const PADDLEOCR_URL = "https://03m2c9z0s2tdx7n9.aistudio-app.com/layout-parsing";
const PADDLEOCR_TOKEN = "28d8a2796a7a9ec9011772749c8b961f1339bdc0";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { text, imageBase64, context } = req.body;
  if (!text && !imageBase64) {
    return res.status(400).json({ error: 'Missing content to parse (text or imageBase64)' });
  }

  const XAI_API_KEY = process.env.XAI_API_KEY;
  if (!XAI_API_KEY) return res.status(500).json({ error: 'XAI API Key is missing on the server' });

  try {
    let extractedText = text || '';
    let usedVisionFallback = false;

    // 1. IF IMAGE: Try PaddleOCR first
    if (imageBase64 && !extractedText) {
      try {
        const base64Clean = imageBase64.replace(/^data:image\/\w+;base64,/, '');
        const pResponse = await fetch(PADDLEOCR_URL, {
          method: 'POST',
          headers: {
            'Authorization': `token ${PADDLEOCR_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ file: base64Clean, fileType: 1 })
        });
        
        if (pResponse.ok) {
          const pData: any = await pResponse.json();
          if (pData.result?.layoutParsingResults) {
            extractedText = pData.result.layoutParsingResults.map((p: any) => p.markdown?.text || '').join('\n\n');
          }
        }
      } catch (ocrErr) {
        console.error("PaddleOCR failed, will fallback to vision", ocrErr);
      }
      
      if (!extractedText) {
        usedVisionFallback = true;
      }
    }

    const contextStr = context ? `
MATCHING CONTEXT:
The user is comparing this quote against these specific items and quantities:
${JSON.stringify(context.items, null, 2)}
` : '';

    const systemPrompt = `You are an expert procurement analyst for Achieve Pack.
You will be given raw text or an image of a factory vendor quote (報價單).
Your job is to extract the pricing tiers into a structured JSON object.

${contextStr}

REQUIRED OUTPUT JSON FORMAT:
{
  "supplier_name": "Extracted supplier name",
  "prices": {
    "ITEM_ID": {
      "QUANTITY": 1.23,
      "QUANTITY_2": 1.10
    }
  },
  "raw_extraction": {
    "product_name": "English name",
    "size": "W x H + G mm",
    "material": "PET/VMPET/PE",
    "plate_fee_rmb": 500
  }
}

RULES:
1. If MATCHING CONTEXT is provided, try to map the extracted prices to the provided ITEM_IDs and QUANTITIES.
2. If a quantity in the quote doesn't exactly match the context, use the closest one or extract as-is.
3. If no context is provided, return a generic list of prices.
4. Return ONLY raw JSON. No markdown blocks.`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000); 
    
    let xaiResponse;

    if (usedVisionFallback) {
      xaiResponse = await fetch('https://api.x.ai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${XAI_API_KEY}` },
        body: JSON.stringify({
           model: 'grok-vision-beta',
           messages: [
             { role: 'system', content: systemPrompt },
             { role: 'user', content: [
               { type: 'text', text: 'Extract this vendor quote into JSON:' },
               { type: 'image_url', image_url: { url: imageBase64 } }
             ]}
           ],
           max_tokens: 2000,
           temperature: 0.1
        }),
        signal: controller.signal
      });
    } else {
      xaiResponse = await fetch('https://api.x.ai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${XAI_API_KEY}` },
        body: JSON.stringify({
           model: 'grok-3-beta', 
           messages: [
             { role: 'system', content: systemPrompt },
             { role: 'user', content: extractedText.substring(0, 10000) }
           ],
           max_tokens: 2000,
           temperature: 0.1
        }),
        signal: controller.signal
      });
    }
    
    clearTimeout(timeoutId);

    if (!xaiResponse.ok) {
      const errText = await xaiResponse.text();
      return res.status(500).json({ error: 'XAI API Error: ' + errText });
    }

    const data: any = await xaiResponse.json();
    const responseText = data.choices?.[0]?.message?.content || '{}';
    const cleanJson = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
    
    try {
      const parsedData = JSON.parse(cleanJson);
      return res.status(200).json({ success: true, extracted: parsedData });
    } catch (parseErr: any) {
      return res.status(500).json({ error: 'Failed to parse AI JSON', raw: cleanJson });
    }
  } catch (err: any) {
    if (err.name === 'AbortError') {
      return res.status(504).json({ error: 'Request timed out' });
    }
    return res.status(500).json({ error: 'Server error: ' + err.message });
  }
}
