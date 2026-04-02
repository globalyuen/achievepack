import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { text } = req.body

  if (!text) {
    return res.status(400).json({ error: 'No text provided' })
  }

  const XAI_API_KEY = process.env.XAI_API_KEY

  if (!XAI_API_KEY) {
    return res.status(500).json({ error: 'XAI API key not configured on server' })
  }

  const systemPrompt = `You are an AI assistant helping a packaging company manager log daily records. 
Extract the following fields from the user's text into a strictly valid JSON object:
- "customer": The name of the client, company, or project mentioned.
- "status": Must be exactly one of: "Urgent", "In Progress", "Shipped", "Pending", "New", "Scheduled". Guess the most appropriate.
- "category": Must be exactly one of: "Quotes", "Production", "Shipping", "Enquiries", "Meetings". Guess the most appropriate.
- "detail": A concise summary of the task, shipment tracking number, or notes extracted from the text.

If multiple designs (款數) are mentioned with a total quantity, clearly state it in "detail" as "X designs x Y pcs each (Total Z pcs)".

Example input: "New inquiry from Sarah at EcoBrands. She needs 500 flat pouches quoted."
Example output:
{
  "customer": "Sarah - EcoBrands",
  "status": "New",
  "category": "Quotes",
  "detail": "Needs 500 flat pouches quoted"
}

Return ONLY the raw JSON object. Do not include markdown code blocks or any other commentary.`

  try {
    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${XAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'grok-3-mini-beta',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: text }
        ],
        max_tokens: 500,
        temperature: 0.1,
      }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data: any = await response.json()
    const content = data.choices?.[0]?.message?.content || '{}'

    // Clean up markdown markers if any sneak in
    const cleanJson = content.replace(/```json/g, '').replace(/```/g, '').trim()

    let parsed = {}
    try {
      parsed = JSON.parse(cleanJson)
    } catch (e) {
      throw new Error('Failed to parse AI response as JSON')
    }

    return res.status(200).json({
      success: true,
      data: parsed
    })
  } catch (error) {
    console.error('AI Parse Error:', error)
    return res.status(500).json({
      error: 'AI Analysis failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
