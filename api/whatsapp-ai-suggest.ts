import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const XAI_API_KEY = process.env.XAI_API_KEY
  if (!XAI_API_KEY) {
    return res.status(500).json({ error: 'XAI API key not configured' })
  }

  const { name, phone, chatHistory } = req.body

  if (!name && !phone) {
    return res.status(400).json({ error: 'Missing customer name or phone' })
  }

  const systemPrompt = `You are a professional CRM assistant for Achieve Pack & Pouch.eco. Your job is to analyze WhatsApp chat histories to suggest follow-up actions and draft WhatsApp replies for Ryan Wong.

We sell flexible packaging, spouted stand up pouches, coffee bags, biodegradable packaging, etc.

Analyze:
1. **Interaction Status**: Check the current state of the conversation. Summarize what has happened recently.
2. **Next Steps**: Suggest what concrete actions Ryan should take.
3. **WhatsApp Draft**: Draft a professional, friendly, and concise WhatsApp reply. WhatsApp messages should be shorter than emails, well-spaced, and may use a few emojis.

Return your response ONLY in JSON format:
{
  "statusSummary": "Brief summary of current interaction status in Traditional Chinese (HK) (e.g. 客戶查詢了站立袋報價 / 正在等待我們回覆 / 已發送樣辦等)",
  "nextAction": "Actionable next steps in Traditional Chinese (HK) (e.g., 確認報價並發送給客戶 / 詢問是否收到樣辦)",
  "whatsappDraft": "The WhatsApp draft to send to the customer (professional, concise, friendly, with placeholders like [Ryan] or [Customer Name])"
}`

  const userPrompt = `Customer Details:
Name: ${name || 'N/A'}
Phone: ${phone || 'N/A'}

WhatsApp Chat History:
${chatHistory || 'No chat history provided.'}

Analyze this customer contact and return the suggested actions and WhatsApp draft in the specified JSON format.`

  try {
    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${XAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'grok-beta', // stable fallback model
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.3,
        response_format: { type: 'json_object' }
      })
    })

    if (!response.ok) {
      console.error('xAI API error:', response.status)
      throw new Error(`xAI returned status ${response.status}`)
    }

    const resData: any = await response.json()
    const content = resData.choices?.[0]?.message?.content || '{}'
    
    let result = JSON.parse(content)
    return res.status(200).json(result)

  } catch (error: any) {
    console.error('AI Suggestion Error:', error)
    // Fallback to simple rules if AI fails
    const fallback = {
      statusSummary: 'AI分析失敗，請直接查看對話紀錄。',
      nextAction: '根據最新訊息回覆客戶',
      whatsappDraft: `Hi ${name || 'there'},\n\nThis is Ryan from Achieve Pack. I noticed your recent inquiry. How can I help you with your packaging needs today?`
    }
    return res.status(200).json(fallback)
  }
}
