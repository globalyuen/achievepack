import type { VercelRequest, VercelResponse } from '@vercel/node'

// Verify Cloudflare Turnstile token
async function verifyTurnstile(token: string, remoteIp: string): Promise<boolean> {
  const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY
  
  if (!TURNSTILE_SECRET) {
    console.error('TURNSTILE_SECRET_KEY not configured')
    return false
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: TURNSTILE_SECRET,
        response: token,
        remoteip: remoteIp
      })
    })

    const result = await response.json()
    console.log('Turnstile verification result:', result)
    return result.success === true
  } catch (error) {
    console.error('Turnstile verification error:', error)
    return false
  }
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

  const { name, email, company, phone, subject, message, inquiryType, turnstileToken, attachments } = req.body
  
  // Get client IP
  const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || 
                   req.headers['x-real-ip'] as string || 
                   'unknown'

  // Verify Turnstile token
  const isHuman = await verifyTurnstile(turnstileToken || '', clientIp)
  if (!isHuman) {
    console.log('Turnstile verification failed for IP:', clientIp)
    return res.status(403).json({ error: 'Verification failed' })
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY
  const ADMIN_EMAIL = 'ryan@achievepack.com'

  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY not configured')
    return res.status(500).json({ error: 'Email service not configured' })
  }

  const inquiryTypeLabels: Record<string, string> = {
    quote: '📦 Quote Request',
    sample: '🎁 Sample Request',
    support: '🛠️ Support',
    other: '💬 General Inquiry'
  }

  const inquiryLabel = inquiryTypeLabels[inquiryType] || inquiryTypeLabels.other

  // Email to Admin (Ryan)
  const emailToAdmin: any = {
    sender: { name: 'AchievePack Contact Form', email: 'noreply@achievepack.com' },
    to: [{ email: ADMIN_EMAIL, name: 'Ryan' }],
    replyTo: { email: email, name: name },
    subject: `${inquiryLabel}: ${subject || 'New Contact Message'} - ${name}${attachments?.length ? ` [📎 ${attachments.length} files]` : ''}`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 25px; border-radius: 12px 12px 0 0; }
          .content { background: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
          .field { margin-bottom: 16px; padding: 12px; background: #f9fafb; border-radius: 8px; }
          .label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; margin-bottom: 4px; }
          .value { font-size: 15px; color: #111827; }
          .message-box { background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-top: 15px; }
          .quick-actions { margin-top: 20px; padding: 15px; background: #ecfdf5; border-radius: 8px; }
          .button { display: inline-block; background: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-right: 10px; }
          .button-secondary { background: #2563eb; }
          .type-badge { display: inline-block; background: #dbeafe; color: #1d4ed8; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin:0; font-size: 22px;">📬 New Contact Message</h1>
            <p style="margin: 10px 0 0; opacity: 0.9; font-size: 14px;">${inquiryLabel}</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Customer Name</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></div>
            </div>
            ${phone ? `
              <div class="field">
                <div class="label">Phone</div>
                <div class="value"><a href="tel:${phone}" style="color: #2563eb;">${phone}</a></div>
              </div>
            ` : ''}
            ${company ? `
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${company}</div>
              </div>
            ` : ''}
            ${subject ? `
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${subject}</div>
              </div>
            ` : ''}
            <div class="message-box">
              <div class="label">Message</div>
              <div class="value" style="white-space: pre-wrap;">${message}</div>
            </div>
            ${attachments?.length ? `
            <div class="field" style="margin-top: 15px;">
              <div class="label">📎 Attachments (${attachments.length} files)</div>
              <div class="value" style="font-size: 13px; color: #059669;">Files attached to this email</div>
            </div>
            ` : ''}
            <div class="quick-actions">
              <div class="label" style="margin-bottom: 10px;">Quick Actions</div>
              <a href="mailto:${email}?subject=Re: ${subject || 'Your Inquiry'}" class="button button-secondary">📧 Reply via Email</a>
              ${phone ? `<a href="tel:${phone}" class="button" style="background: #6366f1;">📞 Call</a>` : ''}
            </div>
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px; text-align: center;">
              Submitted at ${new Date().toLocaleString('en-HK', { timeZone: 'Asia/Hong_Kong' })} HKT
            </p>
          </div>
        </div>
      </body>
      </html>
    `
  }

  // Add attachments if provided
  if (attachments && attachments.length > 0) {
    emailToAdmin.attachment = attachments.map((att: { name: string; content: string }) => ({
      name: att.name,
      content: att.content
    }))
  }

  // Auto-reply to Customer
  const emailToCustomer = {
    sender: { name: 'AchievePack', email: 'noreply@achievepack.com' },
    to: [{ email: email, name: name }],
    replyTo: { email: ADMIN_EMAIL, name: 'Ryan at AchievePack' },
    subject: `✅ We've received your message - ${subject || 'Thank you for contacting us'}`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 35px; border-radius: 12px 12px 0 0; text-align: center; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
          .summary { background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .contact-options { display: flex; flex-wrap: wrap; gap: 10px; margin: 25px 0; }
          .button { display: inline-block; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; text-align: center; }
          .button-primary { background: #2563eb; color: white; }
          .button-whatsapp { background: #25D366; color: white; }
          .button-calendar { background: #6366f1; color: white; }
          .footer { text-align: center; color: #6b7280; font-size: 14px; padding: 20px; border-top: 1px solid #e5e7eb; }
          .highlight { background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin:0; font-size: 26px;">Thank You, ${name}!</h1>
            <p style="margin: 15px 0 0; font-size: 16px; opacity: 0.9;">We've received your message</p>
          </div>
          <div class="content">
            <p style="font-size: 16px;">Hi ${name},</p>
            <p>Thank you for reaching out to Achieve Pack! We appreciate your interest in our sustainable packaging solutions.</p>
            
            <div class="highlight">
              <strong>⏰ What happens next?</strong><br>
              Our team will review your message and get back to you within <strong>24 hours</strong>.
            </div>
            
            <div class="summary">
              <h3 style="margin-top: 0; color: #2563eb;">Your Message</h3>
              ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
              <p style="white-space: pre-wrap; color: #4b5563;">${message}</p>
            </div>
            
            <p><strong>Need faster response?</strong> Connect with us directly:</p>
            
            <div class="contact-options">
              <a href="https://wa.me/85269704411" class="button button-whatsapp">💬 WhatsApp Chat</a>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" class="button button-calendar">📅 Book a Call</a>
            </div>
            
            <p style="margin-top: 30px;">Looking forward to connecting with you!</p>
            <p><strong>Ryan</strong><br>
            AchievePack<br>
            <a href="mailto:ryan@achievepack.com" style="color: #2563eb;">ryan@achievepack.com</a></p>
          </div>
          <div class="footer">
            <p>🌱 Sustainable packaging for a greener future</p>
            <p>© ${new Date().getFullYear()} AchievePack. All rights reserved.</p>
            <p style="font-size: 12px; color: #9ca3af;">
              <a href="https://achievepack.com" style="color: #6b7280;">achievepack.com</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `
  }

  try {
    // Send both emails
    const results = await Promise.all([
      fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json'
        },
        body: JSON.stringify(emailToAdmin)
      }),
      fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json'
        },
        body: JSON.stringify(emailToCustomer)
      })
    ])

    const responses = await Promise.all(results.map(r => r.json().catch(() => ({}))))
    console.log('Contact email responses:', responses)

    // Check if admin email was sent successfully
    if (!results[0].ok) {
      console.error('Failed to send admin email:', responses[0])
      return res.status(500).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
