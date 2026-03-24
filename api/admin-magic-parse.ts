import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'No text provided' })

  const XAI_API_KEY = process.env.XAI_API_KEY
  if (!XAI_API_KEY) return res.status(500).json({ error: 'XAI API key missing in Vercel' })

  try {
    const systemPrompt = `Analyze this chat/email conversation carefully. Identify the TRUE primary customer, person, or company involved. Also determine the "status" (New, Urgent, In Progress, Shipped, Pending), "category" (Quotes, Production, Sample Shipping, Production Shipping, Enquiries), and summarize the core instructions/actions into "detail". Return RAW JSON ONLY: { "customer": "Name", "status": "...", "category": "...", "detail": "..." }`

    const xaiResponse = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${XAI_API_KEY}` },
      body: JSON.stringify({
        model: 'grok-3-mini-beta',
        messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: text.substring(0, 3000) }],
        max_tokens: 400, temperature: 0.1,
      })
    })
    
    const xaiData: any = await xaiResponse.json()
    const content = xaiData.choices?.[0]?.message?.content || '{}'
    
    // Clean potential markdown ticks from the AI response
    const cleanJson = content.replace(/```json/g, '').replace(/```/g, '').trim()
    const parsed = JSON.parse(cleanJson)
    
    return res.status(200).json({ success: true, parsed })
  } catch (err: any) {
    console.error('Magic Parse Error:', err)
    return res.status(500).json({ error: 'Parse failed', details: err.message })
  }
}
