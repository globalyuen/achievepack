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
    
    if (!subjectInfo && !bodyContent && !emailData.attachments?.length) {
      return res.status(200).json({ message: 'Empty email skipped' })
    }

    const fullContext = `From: ${senderInfo}\nSubject: ${subjectInfo}\nMessage: ${bodyContent}`
    
    let parsedFields = {
      customer: subjectInfo.substring(0,40),
      status: 'New',
      category: 'Enquiries',
      detail: bodyContent.substring(0, 500)
    }

    let aiStatus = "Skipped"

    const XAI_API_KEY = process.env.XAI_API_KEY
    if (XAI_API_KEY) {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 6000)

        const systemPrompt = `Analyze this email string. Extract the exact true "customer" (Company/Person name ONLY, ignore email addresses, e.g. "Rafaela Minatti"), "status" (New, Urgent, In Progress, Shipped, Pending, Scheduled), "category" (Quotes, Production, Shipping, Enquiries, Meetings), and a short summary "detail". Return RAW JSON.`

        const xaiResponse = await fetch('https://api.x.ai/v1/chat/completions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${XAI_API_KEY}` },
          body: JSON.stringify({
            model: 'grok-3-mini-beta',
            messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: fullContext }],
            max_tokens: 300, temperature: 0.1,
          }),
          signal: controller.signal
        })
        clearTimeout(timeoutId)

        if (xaiResponse.ok) {
          const xaiData: any = await xaiResponse.json()
          const responseText = xaiData.choices?.[0]?.message?.content || '{}'
          const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim()
          const parsed = JSON.parse(cleanJson)
          
          if (parsed.customer) parsedFields.customer = parsed.customer
          if (parsed.status) parsedFields.status = parsed.status
          if (parsed.category) parsedFields.category = parsed.category
          if (parsed.detail) parsedFields.detail = parsed.detail
          aiStatus = "Success"
        } else {
          aiStatus = "API Error"
        }
      } catch (aiErr) {
        aiStatus = "Timeout / AI Error"
        console.warn('AI Parsing skipped or timed out:', aiErr)
      }
    }

    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY
    if (!supabaseUrl || !supabaseKey) { return res.status(200).json({ error: 'Supabase configuration missing (Server)' }) }

    const supabase = createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } })
    
    // Process Attachments Upload
    let uploadedAttachments: any[] = []
    if (emailData.attachments && Array.isArray(emailData.attachments)) {
      for (const att of emailData.attachments) {
        if (!att.content || !att.filename) continue;
        
        let docCat = "Other"
        const lowerName = att.filename.toLowerCase()
        if (lowerName.includes('quote') || lowerName.includes('quotation') || lowerName.includes('pricing')) docCat = 'Quote'
        else if (lowerName.includes('invoice') || lowerName.includes('pi')) docCat = 'Invoice'
        else if (lowerName.includes('pack') || lowerName.includes('pl')) docCat = 'Packing List'
        else if (lowerName.includes('art') || lowerName.includes('design') || lowerName.includes('proof') || lowerName.includes('template')) docCat = 'Artwork'

        try {
          const base64Content = att.content.replace(/^data:([A-Za-z-+/]+);base64,/, '')
          const buffer = Buffer.from(base64Content, 'base64')
          const fileExt = att.filename.split('.').pop()
          const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
          const mimeType = att.contentType || 'application/octet-stream'

          const { data, error } = await supabase.storage.from('daily_reports_files').upload(fileName, buffer, { contentType: mimeType, upsert: true })
            
          if (!error && data) {
            const { data: { publicUrl } } = supabase.storage.from('daily_reports_files').getPublicUrl(fileName)
            uploadedAttachments.push({ name: att.filename, url: publicUrl, type: fileExt, docCategory: docCat })
          }
        } catch (e) {
          console.error("Failed to upload attachment", e)
        }
      }
    }

    // Check if customer already exists
    let existingRecord = null
    if (parsedFields.customer && parsedFields.customer !== 'No Subject') {
      const { data: records } = await supabase.from('daily_reports').select('*').ilike('customer', `%${parsedFields.customer}%`).order('created_at', { ascending: false }).limit(1)
      if (records && records.length > 0) existingRecord = records[0]
    }

    let actionTaken = ""
    let dbSuccess = false

    if (existingRecord) {
      // Append and update
      const combinedAttachments = [...(existingRecord.attachments || []), ...uploadedAttachments]
      const updatedDetail = existingRecord.detail + `\n\n[Email CC'd ${new Date().toISOString().split('T')[0]}] ${subjectInfo}: ` + parsedFields.detail

      const { error: dbError } = await supabase.from('daily_reports').update({
          detail: updatedDetail,
          attachments: combinedAttachments,
          status: parsedFields.status !== 'New' ? parsedFields.status : existingRecord.status
        }).eq('id', existingRecord.id)

      if (dbError) { actionTaken = `Update Error: ${dbError.message}`; } 
      else { actionTaken = `Updated Existing Project Details & Attachments`; dbSuccess = true; }
    } else {
      // Insert new
      const { error: dbError } = await supabase.from('daily_reports').insert([{
           customer: parsedFields.customer,
           status: parsedFields.status,
           category: parsedFields.category,
           detail: parsedFields.detail,
           attachments: uploadedAttachments,
           report_date: new Date().toISOString().split('T')[0]
        }])
      if (dbError) { actionTaken = `Insert Error: ${dbError.message}`; }
      else { actionTaken = `Created New Project Row`; dbSuccess = true; }
    }

    // LOG TO AUDIT TRACKER
    await supabase.from('webhook_logs').insert([{
      status: dbSuccess ? 'Success' : 'Error',
      source: senderInfo.includes('WhatsApp/OpenClaw User') ? 'OpenClaw / WhatsApp' : 'Inbound Email / Resend',
      message: actionTaken,
      raw_data: {
        ai_status: aiStatus,
        customer_matched: parsedFields.customer,
        sender: senderInfo,
        subject: subjectInfo,
        files_attached: uploadedAttachments.map(u => ({name: u.name, category: u.docCategory})),
        snippet: bodyContent.substring(0, 100)
      }
    }]);

    return res.status(200).json({ success: dbSuccess, message: actionTaken, customer: parsedFields.customer, attachments: uploadedAttachments })

  } catch (err: any) {
    return res.status(200).json({ error: 'Webhook Critical Fail', details: err.message })
  }
}
