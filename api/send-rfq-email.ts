import type { VercelRequest, VercelResponse } from '@vercel/node'

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

  const { 
    customerName, 
    customerEmail, 
    message, 
    websiteLink, 
    photoUrls,
    quoteNumber 
  } = req.body

  const BREVO_API_KEY = process.env.BREVO_API_KEY
  const RFQ_EMAIL = 'rfq@achievepack.com'

  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY not configured')
    return res.status(500).json({ error: 'Email service not configured' })
  }

  // Build photo links HTML
  let photosHtml = ''
  if (photoUrls && photoUrls.length > 0) {
    photosHtml = `
      <div class="field">
        <div class="label">Attached Photos (${photoUrls.length})</div>
        <div class="value">
          ${photoUrls.map((url: string, idx: number) => `
            <a href="${url}" target="_blank" style="display: inline-block; margin: 5px 5px 5px 0;">
              <img src="${url}" alt="Photo ${idx + 1}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px; border: 2px solid #e5e7eb;" />
            </a>
          `).join('')}
        </div>
      </div>
    `
  }

  // Email to RFQ Team
  const emailToRfq: any = {
    sender: { name: 'AchievePack RFQ System', email: 'noreply@achievepack.com' },
    to: [{ email: RFQ_EMAIL, name: 'RFQ Team' }],
    replyTo: { email: customerEmail, name: customerName },
    subject: `📦 New RFQ Request: ${quoteNumber} from ${customerName}`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 25px; border-radius: 12px 12px 0 0; }
          .content { background: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
          .field { margin-bottom: 16px; padding: 12px; background: #f9fafb; border-radius: 8px; }
          .label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; margin-bottom: 4px; }
          .value { font-size: 15px; color: #111827; }
          .message-box { background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-top: 15px; white-space: pre-wrap; }
          .quick-actions { margin-top: 20px; padding: 15px; background: #ecfdf5; border-radius: 8px; }
          .button { display: inline-block; background: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-right: 10px; }
          .quote-badge { display: inline-block; background: #fef3c7; color: #92400e; padding: 6px 14px; border-radius: 20px; font-size: 14px; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin:0; font-size: 22px;">📦 New RFQ Request</h1>
            <p style="margin: 10px 0 0; opacity: 0.9; font-size: 14px;">Custom Packaging Quote Request</p>
          </div>
          <div class="content">
            <div style="margin-bottom: 20px;">
              <span class="quote-badge">${quoteNumber}</span>
            </div>
            
            <div class="field">
              <div class="label">Customer Name</div>
              <div class="value">${customerName || 'Not provided'}</div>
            </div>
            
            <div class="field">
              <div class="label">Customer Email</div>
              <div class="value"><a href="mailto:${customerEmail}">${customerEmail}</a></div>
            </div>
            
            ${websiteLink ? `
              <div class="field">
                <div class="label">Reference Website</div>
                <div class="value"><a href="${websiteLink}" target="_blank">${websiteLink}</a></div>
              </div>
            ` : ''}
            
            ${photosHtml}
            
            <div class="message-box">
              <div class="label" style="margin-bottom: 8px;">Request Details</div>
              ${message}
            </div>
            
            <div class="quick-actions">
              <p style="margin: 0 0 10px; font-weight: 600; color: #065f46;">Quick Actions:</p>
              <a href="mailto:${customerEmail}?subject=Re: Your RFQ Request ${quoteNumber}" class="button">📧 Reply to Customer</a>
              <a href="https://achievepack.com/ctrl-x9k7m/management?tab=quotes" class="button" style="background: #2563eb;">📋 View in Admin</a>
            </div>
            
            <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">
              Submitted: ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </p>
          </div>
        </div>
      </body>
      </html>
    `
  }

  try {
    // Send email via Brevo
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify(emailToRfq)
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Brevo API error:', errorData)
      return res.status(500).json({ error: 'Failed to send email', details: errorData })
    }

    console.log('RFQ email sent to:', RFQ_EMAIL)

    // Also send confirmation to customer
    const customerConfirmation: any = {
      sender: { name: 'AchievePack', email: 'noreply@achievepack.com' },
      to: [{ email: customerEmail, name: customerName }],
      subject: `✅ RFQ Request Received - ${quoteNumber}`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 25px; border-radius: 12px 12px 0 0; text-align: center; }
            .content { background: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
            .check-icon { font-size: 48px; }
            .steps { background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .step { display: flex; align-items: flex-start; margin-bottom: 12px; }
            .step-number { background: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; margin-right: 12px; flex-shrink: 0; }
            .step-text { font-size: 14px; color: #374151; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="check-icon">✅</div>
              <h1 style="margin: 10px 0 0; font-size: 22px;">Request Received!</h1>
              <p style="margin: 10px 0 0; opacity: 0.9; font-size: 14px;">Reference: ${quoteNumber}</p>
            </div>
            <div class="content">
              <p>Hi ${customerName || 'there'},</p>
              <p>Thank you for your custom packaging request! We've received your inquiry and our team is reviewing it now.</p>
              
              <div class="steps">
                <h3 style="margin: 0 0 15px; font-size: 16px; color: #111827;">What happens next:</h3>
                <div class="step">
                  <div class="step-number">1</div>
                  <div class="step-text">Our packaging specialists will review your requirements</div>
                </div>
                <div class="step">
                  <div class="step-number">2</div>
                  <div class="step-text">We'll prepare a detailed quote tailored to your needs</div>
                </div>
                <div class="step">
                  <div class="step-number">3</div>
                  <div class="step-text">You'll receive your quote within 24 business hours</div>
                </div>
              </div>
              
              <p>If you have any questions in the meantime, feel free to reply to this email or contact us at <a href="mailto:rfq@achievepack.com">rfq@achievepack.com</a>.</p>
              
              <p style="margin-top: 25px;">Best regards,<br><strong>The AchievePack Team</strong></p>
              
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 25px 0;" />
              <p style="font-size: 12px; color: #6b7280; text-align: center;">
                🌿 Eco-Friendly Packaging Solutions<br>
                <a href="https://achievepack.com" style="color: #10b981;">achievepack.com</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    }

    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify(customerConfirmation)
    })

    return res.status(200).json({ 
      success: true, 
      message: 'RFQ email sent successfully',
      quoteNumber 
    })

  } catch (error: any) {
    console.error('Email send error:', error)
    return res.status(500).json({ error: 'Failed to send email', details: error.message })
  }
}
