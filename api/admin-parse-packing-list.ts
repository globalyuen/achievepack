import type { VercelRequest, VercelResponse } from '@vercel/node';

const PADDLEOCR_URL = "https://03m2c9z0s2tdx7n9.aistudio-app.com/layout-parsing";
const PADDLEOCR_TOKEN = "28d8a2796a7a9ec9011772749c8b961f1339bdc0";

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
    let extractedText = text || '';
    let usedVisionFallback = false;

    // 1. IF IMAGE: Try PaddleOCR first for high-quality table extraction
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
      
      // 2. Fallback to Grok Vision if OCR failed or returned nothing
      if (!extractedText) {
        usedVisionFallback = true;
      }
    }

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

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000); // 25s limit
    
    let xaiResponse;

    if (usedVisionFallback) {
      // Direct Vision Call (grok-vision-beta)
      xaiResponse = await fetch('https://api.x.ai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${XAI_API_KEY}` },
        body: JSON.stringify({
           model: 'grok-vision-beta',
           messages: [
             { role: 'system', content: systemPrompt },
             { role: 'user', content: [
               { type: 'text', text: 'Extract this packing list image into the requested JSON array:' },
               { type: 'image_url', image_url: { url: imageBase64 } }
             ]}
           ],
           max_tokens: 2000,
           temperature: 0.1
        }),
        signal: controller.signal
      });
    } else {
      // Standard Text Call (grok-3-beta)
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
      return res.status(504).json({ error: 'Request timed out' });
    }
    return res.status(500).json({ error: 'Server error: ' + err.message });
  }
}
