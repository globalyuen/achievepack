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
    
    // 1. Explicitly prioritize pure plain text from Resend (safest!)
    let rawBody = emailData.text;
    
    // 2. If no plain text exists, carefully strip the HTML body without destroying normal text
    if (!rawBody || typeof rawBody !== 'string' || rawBody.trim() === '') {
      let htmlBody = emailData.html || emailData.raw_body || emailData.body || '';
      if (typeof htmlBody === 'string' && htmlBody.trim() !== '') {
        // Safe Regex: ONLY matches proper <tags> that close with >. Replaces them with spaces.
        const cleanHTML = htmlBody.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/gm, ' ');
        rawBody = cleanHTML.replace(/\s\s+/g, ' ').trim();
      }
    }
    
    // 3. THE ULTIMATE FALLBACK: If absolutely nothing was extracted, dump the JSON keys / payload
    if (!rawBody || rawBody.trim() === '') {
      try {
        const payloadFields = Object.keys(emailData).join(', ');
        rawBody = "RAW_PAYLOAD_DUMP (Fields detected: " + payloadFields + ")\n" + JSON.stringify(emailData).substring(0, 3000);
      } catch(e) {
        rawBody = "Unparseable Empty Email";
      }
    }

    const bodyContent = rawBody;

    if (!subjectInfo && !bodyContent && !emailData.attachments?.length) {
      return res.status(200).json({ message: 'Empty email skipped' })
    }

    // Strip "Re:", "Fwd:" to find the core thread topic for matching old records
    const cleanSubject = subjectInfo.replace(/^(Fwd:\s*|Re:\s*|FW:\s*|Fw:\s*|AW:\s*)+/ig, '').trim();

    const fullContext = `From: ${senderInfo}\nSubject: ${subjectInfo}\nMessage: ${bodyContent}`
    
    let parsedFields = {
      customer: cleanSubject || subjectInfo.substring(0, 50),
      status: 'New',
      category: 'Enquiries',
      detail: bodyContent.substring(0, 600) || "No message body found"
    }

    let aiStatus = "Skipped"
    let aiCustomerExtracted = ""

    const XAI_API_KEY = process.env.XAI_API_KEY
    if (XAI_API_KEY) {
      try {
        const controller = new AbortController()
        // Raised timeout to 8.5s to give Grok more time to read huge email threads!
        const timeoutId = setTimeout(() => controller.abort(), 8500)

        const systemPrompt = `Analyze this email thread carefully. Identify the TRUE primary customer, person, or company involved (e.g. "Justine Heaphy", "Brand XYZ"). Exclude email addresses or generic terms. Also determine the "status" (New, Urgent, In Progress, Shipped, Pending), "category" (Quotes, Production, Sample Shipping, Production Shipping, Enquiries), and summarize the "detail". Return RAW JSON: { "customer": "Name", "status": "...", "category": "...", "detail": "..." }`

        const xaiResponse = await fetch('https://api.x.ai/v1/chat/completions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${XAI_API_KEY}` },
          body: JSON.stringify({
            model: 'grok-3-mini-beta',
            messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: fullContext.substring(0, 3000) }],
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
          
          if (parsed.customer && parsed.customer.length > 2) {
            parsedFields.customer = parsed.customer
            aiCustomerExtracted = parsed.customer
          }
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
    
    // Process Attachments...
    let uploadedAttachments: any[] = []
    if (emailData.attachments && Array.isArray(emailData.attachments)) {
      for (const att of emailData.attachments) {
        if (!att.content || !att.filename) continue;
        
        let docCat = "Other"
        const lowerName = att.filename.toLowerCase()
        if (lowerName.includes('quote') || lowerName.includes('quotation') || lowerName.includes('pricing')) docCat = 'Quote'
        else if (lowerName.includes('invoice') || lowerName.includes('pi') || lowerName.includes('bill')) docCat = 'Invoice'
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

    // --- AGGRESSIVE SUPABASE THREAD MATCHING ---
    let existingRecord = null
    
    // Safe escaping for ilike
    const safeAiCustomer = aiCustomerExtracted.replace(/['"%]/g, '')
    const safeCleanSubject = cleanSubject.replace(/['"%]/g, '')

    // If we have any safe terms to search for, query the database dynamically
    let queryBuilder = supabase.from('daily_reports').select('*')
    let orConditions = []
    
    // 1. If AI confidently found a customer name, check if any project has that customer
    if (safeAiCustomer.length > 3) {
      orConditions.push(`customer.ilike.%${safeAiCustomer}%`)
    }
    // 2. Regardless, explicitly search if the 'Cleaned Email Subject' perfectly matches inside ANY old active project 'detail' or 'customer' field
    if (safeCleanSubject.length > 6) {
      orConditions.push(`customer.ilike.%${safeCleanSubject}%`)
      orConditions.push(`detail.ilike.%${safeCleanSubject}%`)
    }

    if (orConditions.length > 0) {
      const compiledOrQuery = orConditions.join(',')
      const { data: records } = await queryBuilder.or(compiledOrQuery).order('created_at', { ascending: false }).limit(1)
      if (records && records.length > 0) {
        existingRecord = records[0]
      }
    }

    let actionTaken = ""
    let dbSuccess = false

    if (existingRecord) {
      // Append and update
      const combinedAttachments = [...(existingRecord.attachments || []), ...uploadedAttachments]
      const updatedDetail = existingRecord.detail + `\n\n[Email Thread Update ${new Date().toISOString().split('T')[0]}]\nSubject: ${cleanSubject}\nNotes: ` + parsedFields.detail

      const { error: dbError } = await supabase.from('daily_reports').update({
          detail: updatedDetail,
          attachments: combinedAttachments,
          status: parsedFields.status !== 'New' ? parsedFields.status : existingRecord.status
        }).eq('id', existingRecord.id)

      if (dbError) { actionTaken = `Update Error: ${dbError.message}`; } 
      else { actionTaken = `Appended Thread into Existing Project: ${existingRecord.customer}`; dbSuccess = true; }
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
        customer_matched: existingRecord ? existingRecord.customer : parsedFields.customer,
        sender: senderInfo,
        subject: cleanSubject,
        smart_match_triggered: !!existingRecord,
        files_attached: uploadedAttachments.map(u => ({name: u.name, category: u.docCategory})),
        snippet: bodyContent.substring(0, 100)
      }
    }]);

    return res.status(200).json({ success: dbSuccess, message: actionTaken, customer: parsedFields.customer, attachments: uploadedAttachments })

  } catch (err: any) {
    return res.status(200).json({ error: 'Webhook Critical Fail', details: err.message })
  }
}
