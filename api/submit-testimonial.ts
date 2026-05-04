import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const getSupabase = () => {
  // @ts-ignore
  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
  // @ts-ignore
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) return null
  return createClient(supabaseUrl, supabaseKey)
}

// Verify Cloudflare Turnstile token
async function verifyTurnstile(token: string, remoteIp: string): Promise<boolean> {
  const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY
  if (!TURNSTILE_SECRET) return false

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

    const result: any = await response.json()
    return result.success === true
  } catch (error) {
    return false
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, company, role, quote, turnstileToken, attachments } = req.body

  const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
    req.headers['x-real-ip'] as string ||
    'unknown'

  if (turnstileToken) {
    const isHuman = await verifyTurnstile(turnstileToken, clientIp)
    if (!isHuman) {
      return res.status(403).json({ error: 'Verification failed' })
    }
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY
  const ADMIN_EMAIL = 'ryan@achievepack.com'

  if (!BREVO_API_KEY) {
    return res.status(500).json({ error: 'Email service not configured' })
  }

  let attachmentUrls: { name: string; url: string; size?: number; type: string }[] = []
  const supabase = getSupabase()

  if (attachments && attachments.length > 0 && supabase) {
    try {
      for (const att of attachments) {
        const buffer = Buffer.from(att.content, 'base64')
        const fileName = `${Date.now()}_${att.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`

        const { data, error } = await supabase.storage
          .from('contact-attachments') // using the existing bucket
          .upload(fileName, buffer, {
            contentType: att.contentType || 'application/octet-stream',
            upsert: false
          })

        if (!error && data) {
          const { data: urlData } = supabase.storage
            .from('contact-attachments')
            .getPublicUrl(fileName)

          attachmentUrls.push({
            name: att.name,
            url: urlData.publicUrl,
            size: buffer.length,
            type: att.contentType || 'file'
          })
        }
      }
    } catch (error) {
      console.error('Attachment upload error:', error)
    }
  }

  const emailToAdmin: any = {
    sender: { name: 'AchievePack Testimonials', email: 'noreply@achievepack.com' },
    to: [{ email: ADMIN_EMAIL, name: 'Ryan' }],
    replyTo: { email: email, name: name },
    subject: `🌟 New Customer Testimonial: ${name} from ${company || 'Customer'}`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 25px; border-radius: 12px 12px 0 0; }
          .content { background: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
          .field { margin-bottom: 16px; padding: 12px; background: #f9fafb; border-radius: 8px; }
          .label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; margin-bottom: 4px; }
          .value { font-size: 15px; color: #111827; }
          .message-box { background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin-top: 15px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin:0; font-size: 22px;">🌟 New Customer Testimonial</h1>
            <p style="margin: 10px 0 0; opacity: 0.9; font-size: 14px;">Review and approval required</p>
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
            ${company ? \`
              <div class="field">
                <div class="label">Company</div>
                <div class="value">\${company}</div>
              </div>
            \` : ''}
            ${role ? \`
              <div class="field">
                <div class="label">Role</div>
                <div class="value">\${role}</div>
              </div>
            \` : ''}
            <div class="message-box">
              <div class="label">Testimonial Quote</div>
              <div class="value" style="white-space: pre-wrap; font-style: italic;">"\${quote}"</div>
            </div>
            ${attachmentUrls.length > 0 ? `
            <div class="field" style="margin-top: 15px;">
              <div class="label">📎 Media Attached (${attachmentUrls.length} files)</div>
              <div class="value">
                ${attachmentUrls.map(f => `<a href="${f.url}" target="_blank" style="display: block; color: #2563eb; margin: 4px 0;">${f.type.startsWith('image') ? '📷' : f.type.startsWith('video') ? '🎥' : '📄'} ${f.name}</a>`).join('')}
              </div>
            </div>
            ` : ''}
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px; text-align: center;">
              Submitted at ${new Date().toLocaleString('en-HK', { timeZone: 'Asia/Hong_Kong' })} HKT
            </p>
          </div>
        </div>
      </body>
      </html>
    `
  }

  const emailToCustomer = {
    sender: { name: 'AchievePack', email: 'noreply@achievepack.com' },
    to: [{ email: email, name: name }],
    replyTo: { email: ADMIN_EMAIL, name: 'Ryan at AchievePack' },
    subject: \`Thank you for your review, \${name}!\`,
    htmlContent: \`
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 35px; border-radius: 12px 12px 0 0; text-align: center; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
          .footer { text-align: center; color: #6b7280; font-size: 14px; padding: 20px; border-top: 1px solid #e5e7eb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin:0; font-size: 26px;">Thank You, \${name}!</h1>
            <p style="margin: 15px 0 0; font-size: 16px; opacity: 0.9;">We've received your testimonial</p>
          </div>
          <div class="content">
            <p style="font-size: 16px;">Hi \${name},</p>
            <p>Thank you so much for taking the time to share your experience with Achieve Pack!</p>
            <p>We'll review your testimonial and let you know when it's live on our website.</p>
            <p style="margin-top: 30px;">Best regards,</p>
            <p><strong>Ryan</strong><br>
            AchievePack<br>
            <a href="mailto:ryan@achievepack.com" style="color: #2563eb;">ryan@achievepack.com</a></p>
          </div>
          <div class="footer">
            <p>🌱 Sustainable packaging for a greener future</p>
            <p>© \${new Date().getFullYear()} AchievePack. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    \`
  }

  try {
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

    if (!results[0].ok) {
      return res.status(500).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ success: true, message: 'Testimonial submitted successfully' })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
