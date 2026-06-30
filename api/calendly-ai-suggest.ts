import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY
  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'GEMINI_API_KEY not configured' })
  }

  const { name, email, inquiry, history } = req.body

  if (!name) {
    return res.status(400).json({ error: 'Missing customer name' })
  }

  // Format email history for prompt
  let historyText = '沒有找到與此客戶的 Zoho Mail 郵件往來記錄。'
  if (Array.isArray(history) && history.length > 0) {
    historyText = history.map((msg, i) => {
      const date = msg.sentDateInGMT 
        ? new Date(parseInt(msg.sentDateInGMT)).toUTCString()
        : 'Unknown Date'
      const isSent = msg.fromAddress?.includes('achievepack') || msg.fromAddress?.includes('pouch.eco')
      return `[Email ${i + 1}]
日期: ${date}
方向: ${isSent ? '寄出 (由 Ryan/我們寄送)' : '收到 (客戶寄來)'}
主題: ${msg.subject || ''}
摘要: ${msg.summary || ''}
`
    }).join('\n')
  }

  const systemPrompt = `You are "Antigravity", a professional CRM AI assistant for Achieve Pack & Pouch.eco. Your job is to analyze Calendly bookings and Zoho Mail histories to suggest follow-up actions and draft emails for Ryan Wong.

We sell flexible packaging, spouted stand up pouches, coffee bags, biodegradable packaging, etc.

Analyze:
1. **Interaction Status**: Check if Ryan has already replied to the customer based on Zoho history. Summarize what has happened.
2. **Next Steps**: Suggest what concrete actions Ryan should take.
3. **Email Draft**: Draft a highly professional, contextual follow-up email in English. Include the customer's original inquiry and any previous email context if applicable.

Return your response ONLY in JSON format without markdown wrapping, exactly like this:
{
  "statusSummary": "Brief summary of current interaction status in Traditional Chinese (HK) (e.g. 已回信要求運費 / 尚未回覆 / 客戶已付款等)",
  "nextAction": "Actionable next steps in Traditional Chinese (HK) (e.g., 寄出樣辦，並分享快遞單號 / 檢查客戶提供的 AI 設計圖檔)",
  "emailDraft": "The email draft to send to the customer (in English, professional, friendly, with placeholders like [Ryan Wong] or [Customer Name])"
}`

  const userPrompt = `Customer Details:
Name: ${name}
Email: ${email || 'N/A'}
Inquiry Details: ${inquiry || 'No inquiry text left.'}

Zoho Mail Interaction History:
${historyText}

Please analyze this customer contact and return the suggested actions and email draft in the specified JSON format.`

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          { role: 'user', parts: [{ text: systemPrompt + '\n\n' + userPrompt }] }
        ],
        generationConfig: {
          temperature: 0.3,
          responseMimeType: 'application/json'
        }
      })
    })

    if (!response.ok) {
      console.error('Gemini API error:', response.status)
      const errText = await response.text()
      throw new Error(`Gemini returned status ${response.status}: ${errText}`)
    }

    const resData: any = await response.json()
    const content = resData.candidates?.[0]?.content?.parts?.[0]?.text || '{}'
    
    let result = JSON.parse(content)
    return res.status(200).json(result)

  } catch (error: any) {
    console.error('AI Suggestion Error:', error)
    // Fallback to simple rules if AI fails
    const hasHistory = Array.isArray(history) && history.length > 0
    const fallback = {
      statusSummary: hasHistory ? '已有郵件記錄（AI分析失敗）' : '尚未回覆',
      nextAction: hasHistory ? '檢查最新收到的信件內容' : '發送首封跟進郵件',
      emailDraft: `Hi ${name},\n\nThank you for booking a meeting with us. I would love to follow up on your packaging inquiries regarding stand-up pouches.\n\nPlease let me know your specifications.\n\nBest Regards,\nRyan Wong`
    }
    return res.status(200).json(fallback)
  }
}
