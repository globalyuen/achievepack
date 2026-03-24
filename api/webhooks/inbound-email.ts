import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const payload = req.body
    if (payload?.type === 'webhook_verify') return res.status(200).json({ success: true })

    const emailData = payload?.data || payload || {}
    const senderInfo = emailData.from || emailData.sender || 'Unknown Sender'
    const subjectInfo = emailData.subject || 'No Subject'
    const bodyContent = emailData.text || emailData.html || ''
    
    if (!subjectInfo && !bodyContent) {
      return res.status(200).json({ message: 'Empty email skipped' })
    }

    const fullContext = `From: ${senderInfo}\nSubject: ${subjectInfo}\nMessage: ${bodyContent}`
    
    let parsedFields = {
      customer: `Email: ${senderInfo} - ${subjectInfo.substring(0,30)}`,
      status: 'New',
      category: 'Enquiries',
      detail: bodyContent.substring(0, 500)
    }

    const XAI_API_KEY = process.env.XAI_API_KEY
    if (XAI_API_KEY) {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 6000) // 6 second strict timeout for AI

        const systemPrompt = `Extract "customer", "status" (New, Urgent, In Progress, Shipped, Pending, Scheduled), "category" (Quotes, Production, Shipping, Enquiries, Meetings), and "detail" from this email into a raw valid JSON object.`

        const xaiResponse = await fetch('https://api.x.ai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${XAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'grok-3-mini-beta',
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: fullContext }
            ],
            max_tokens: 300,
            temperature: 0.1,
          }),
          signal: controller.signal
        })

        clearTimeout(timeoutId)

        if (xaiResponse.ok) {
          const xaiData: any = await xaiResponse.json()
          const responseText = xaiData.choices?.[0]?.message?.content || '{}'
          const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim()
          const parsed = JSON.parse(cleanJson)
          
          parsedFields.customer = parsed.customer || parsedFields.customer
          parsedFields.status = parsed.status || parsedFields.status
          parsedFields.category = parsed.category || parsedFields.category
          parsedFields.detail = parsed.detail || parsedFields.detail
        }
      } catch (aiErr) {
        console.warn('AI Parsing skipped or timed out:', aiErr)
        // Fall back to raw email insertion
      }
    }

    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY
    
    if (!supabaseUrl || !supabaseKey) {
      return res.status(200).json({ error: 'Supabase configuration missing (Server)' })
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false }
    })
    
    // Fast Insert
    const { error: dbError } = await supabase
      .from('daily_reports')
      .insert([{
         customer: parsedFields.customer,
         status: parsedFields.status,
         category: parsedFields.category,
         detail: parsedFields.detail,
         report_date: new Date().toISOString().split('T')[0]
      }])

    if (dbError) throw new Error(`DB Insert Error: ${dbError.message}`)

    return res.status(200).json({ success: true, message: 'Email recorded', parsedFields })

  } catch (err: any) {
    return res.status(200).json({ error: 'Webhook fail', details: err.message })
  }
}
