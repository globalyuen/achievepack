import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { strings } = req.body;
  if (!strings || !Array.isArray(strings)) {
    return res.status(400).json({ error: 'Missing strings array in request body' });
  }

  if (strings.length === 0) {
    return res.status(200).json({ success: true, translatedStrings: [] });
  }

  try {
    const grokApiKey = process.env.GROK_API_KEY;
    if (!grokApiKey) throw new Error('GROK_API_KEY not configured');

    const systemPrompt = `You are a professional translator for a B2B packaging company. 
You will receive a JSON array of strings extracted from an Excel file (mostly Chinese).
Translate every string into professional English.

CRITICAL INSTRUCTIONS: 
- Return ONLY a valid JSON array of strings. 
- The returned array MUST have the exact same length and order as the input array.
- Do NOT wrap the response in markdown blocks like \`\`\`json. Output raw JSON only.
- If a string is already in English, consists only of numbers/symbols, or is empty, leave it exactly as is.
- Preserve all formatting (e.g., newlines) inside the strings.`;

    const userPrompt = JSON.stringify(strings);

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${grokApiKey}`,
      },
      body: JSON.stringify({
        model: 'grok-beta',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.1,
      }),
    });

    const data = await response.json() as any;
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to communicate with AI API');
    }

    let content = data.choices[0].message.content.trim();
    
    // Clean potential markdown blocks
    if (content.startsWith('```')) {
      content = content.replace(/^```json/i, '').replace(/^```/, '');
      content = content.replace(/```$/, '');
      content = content.trim();
    }

    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch (e) {
      throw new Error(`AI returned invalid JSON. Raw response: ${content.substring(0, 100)}...`);
    }

    if (!Array.isArray(parsed) || parsed.length !== strings.length) {
       throw new Error(`Mismatch: Sent ${strings.length} items, but AI returned ${Array.isArray(parsed) ? parsed.length : 'non-array'}.`);
    }

    res.status(200).json({ success: true, translatedStrings: parsed });
  } catch (error: any) {
    console.error('Translation error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
