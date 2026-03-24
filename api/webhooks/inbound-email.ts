import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS & Preflight handling
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const payload = req.body

    // Early exit if this is a Resend webhook setup verification
    if (payload.type === 'webhook_verify') {
      return res.status(200).json({ success: true })
    }

    // 1. Extract email content securely
    // Support Resend Inbound structure: { data: { subject, text, from } } OR direct Zapier/Make shapes
    const emailData = payload.data || payload // Handle both wrapped and direct payloads
    const { subject, text, from, sender } = emailData

    // Provide a fallback if payload fields are missing
    const senderInfo = from || sender || 'Unknown Sender'
    const subjectInfo = subject || 'No Subject'
    const bodyContent = text || emailData.html || ''
    
    // Safety check - we need at least some text content
    if (!subjectInfo && !bodyContent) {
      console.warn('Inbound Email Webhook warning: Empty email received', payload)
      return res.status(200).json({ message: 'Empty email skipped' })
    }

    const fullContext = `From: ${senderInfo}\nSubject: ${subjectInfo}\nMessage: ${bodyContent}`

    // 2. Parse text using our XAI Grok model
    const XAI_API_KEY = process.env.XAI_API_KEY
    if (!XAI_API_KEY) throw new Error('XAI API key missing')

    const systemPrompt = `You are an AI assistant helping a packaging company manager log daily records from inbound emails sent to ai@achievepack.com. 
Extract the following fields from the email into a strictly valid JSON object:
- "customer": The name of the client, company, project, or email sender mentioned.
- "status": Must be exactly one of: "New", "Urgent", "In Progress", "Shipped", "Pending", "Scheduled". Default to "New" if unsure.
- "category": Must be exactly one of: "Quotes", "Production", "Shipping", "Enquiries", "Meetings". Guess the most appropriate.
- "detail": A concise summary of the email content or task.

Return ONLY the raw JSON object. Do not include markdown blocks.`

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
        max_tokens: 500,
        temperature: 0.1,
      }),
    })

    if (!xaiResponse.ok) {
      throw new Error(`XAI Error: ${xaiResponse.status} ${await xaiResponse.text()}`)
    }

    const xaiData: any = await xaiResponse.json()
    const responseText = xaiData.choices?.[0]?.message?.content || '{}'
    const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim()
    
    let parsedFields = {
      customer: `Email: ${senderInfo}`,
      status: 'New',
      category: 'Enquiries',
      detail: `Parse failure fallback: ${subjectInfo}`
    }

    try {
      const parsed = JSON.parse(cleanJson)
      // Safely merge
      parsedFields.customer = parsed.customer || parsedFields.customer
      parsedFields.status = parsed.status || parsedFields.status
      parsedFields.category = parsed.category || parsedFields.category
      parsedFields.detail = parsed.detail || parsedFields.detail
    } catch (parseErr) {
      console.error('Failed to parse AI response as JSON:', cleanJson)
      // Stick to fallback fields on error
    }

    // 3. Connect to Supabase to insert the record
    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase configuration missing')
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    
    const { error: dbError } = await supabase
      .from('daily_reports')
      .insert([{
         customer: parsedFields.customer,
         status: parsedFields.status,
         category: parsedFields.category,
         detail: parsedFields.detail,
         report_date: new Date().toISOString().split('T')[0]
      }])

    if (dbError) {
      throw new Error(`DB Insert Error: ${dbError.message}`)
    }

    return res.status(200).json({
      success: true,
      message: 'Email processed and saved to daily_reports',
      action: parsedFields
    })

  } catch (err: any) {
    console.error('Inbound Email Webhook Error:', err)
    // Return 200 so webhooks don't retry continuously for logic crashes, or 500 if critical
    // It's usually safer to return 200 if it parsed but errored during processing so the email server stops retrying
    return res.status(200).json({ error: 'Failed to process email', details: err.message })
  }
}
