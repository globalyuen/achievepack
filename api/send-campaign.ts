import type { VercelRequest, VercelResponse } from '@vercel/node'

interface EmailRecipient {
  email: string
  name?: string
}

interface SendCampaignRequest {
  recipients: EmailRecipient[]
  subject: string
  htmlContent: string
  testEmail?: string // If provided, only send to this email
  cc?: EmailRecipient[] // CC recipients
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY

  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY not configured')
    return res.status(500).json({ error: 'Email service not configured' })
  }

  try {
    const { recipients, subject, htmlContent, testEmail, cc } = req.body as SendCampaignRequest

    console.log('📧 Campaign request received:', {
      testEmail: testEmail || 'none',
      subject: subject?.substring(0, 50),
      recipientCount: recipients?.length || 0,
      hasContent: !!htmlContent
    })

    if (!subject || !htmlContent) {
      console.error('❌ Missing subject or content')
      return res.status(400).json({ error: 'Missing subject or content' })
    }

    const results = {
      success: 0,
      failed: 0,
      errors: [] as string[],
      messageIds: [] as string[]
    }

    // If test email, only send to that address
    const targetRecipients = testEmail
      ? [{ email: testEmail, name: 'Ryan' }]
      : recipients

    if (!targetRecipients || targetRecipients.length === 0) {
      console.error('❌ No recipients provided')
      return res.status(400).json({ error: 'No recipients provided' })
    }

    console.log(`📤 Sending to ${targetRecipients.length} recipient(s):`, targetRecipients.map(r => r.email))

    // Send emails
    for (const recipient of targetRecipients) {
      try {
        // Personalize content - replace name and email placeholders
        const encodedEmail = Buffer.from(recipient.email).toString('base64')
        const recipientName = recipient.name || 'there'
        const personalizedHtml = htmlContent
          .replace(/\{\{name\}\}/g, recipientName)
          .replace(/\{\{email_encoded\}\}/g, encodedEmail)

        // Personalize subject line with recipient name
        const personalizedSubject = subject.replace(/\{\{name\}\}/g, recipientName)

        const emailPayload: Record<string, unknown> = {
          sender: {
            email: 'hello@achievepack.com',
            name: 'Achieve Pack'
          },
          to: [{ email: recipient.email, name: recipient.name || recipientName }],
          cc: cc || [{ email: 'ryan@achievepack.com', name: 'Ryan' }],
          subject: personalizedSubject,
          htmlContent: personalizedHtml,
          replyTo: {
            email: 'ryan@achievepack.com',
            name: 'Ryan Wong'
          }
        }

        console.log(`📨 Sending email to ${recipient.email}...`)

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'api-key': BREVO_API_KEY,
            'content-type': 'application/json'
          },
          body: JSON.stringify(emailPayload)
        })

        const responseText = await response.text()
        console.log(`📬 Brevo response for ${recipient.email}:`, response.status, responseText)

        if (response.ok) {
          try {
            const data = JSON.parse(responseText)
            results.success++
            if (data.messageId) {
              results.messageIds.push(data.messageId)
              console.log(`✅ Email sent successfully to ${recipient.email}, messageId: ${data.messageId}`)
            }
          } catch {
            results.success++
            console.log(`✅ Email sent to ${recipient.email} (no messageId in response)`)
          }
        } else {
          let errorMessage = 'Unknown error'
          try {
            const errorData = JSON.parse(responseText)
            errorMessage = errorData.message || errorData.error || JSON.stringify(errorData)
          } catch {
            errorMessage = responseText || `HTTP ${response.status}`
          }
          results.failed++
          results.errors.push(`${recipient.email}: ${errorMessage}`)
          console.error(`❌ Failed to send to ${recipient.email}:`, errorMessage)
        }
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error'
        results.failed++
        results.errors.push(`${recipient.email}: ${errorMsg}`)
        console.error(`❌ Exception sending to ${recipient.email}:`, errorMsg)
      }

      // Small delay between emails to respect rate limits
      if (targetRecipients.length > 1) {
        await new Promise(resolve => setTimeout(resolve, 100))
      }
    }

    console.log(`📊 Campaign complete: ${results.success} sent, ${results.failed} failed`)

    return res.status(200).json({
      success: results.success > 0,
      sent: results.success,
      failed: results.failed,
      errors: results.errors.slice(0, 10),
      messageId: results.messageIds[0] // For test email
    })

  } catch (error) {
    console.error('❌ Campaign send error:', error)
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Failed to send campaign'
    })
  }
}
