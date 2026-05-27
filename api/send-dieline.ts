import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client with service key for server-side operations
const getSupabase = () => {
  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return null
  }

  return createClient(supabaseUrl, supabaseKey)
}

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

    const result: any = await response.json()
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

  const {
    email,
    dielineFilename,
    dielineUrl,
    dielineDisplayName,
    turnstileToken,
    shape,
    width,
    height,
    gusset,
    unit,
    capacity
  } = req.body

  if (!email || !dielineFilename || !dielineUrl) {
    return res.status(400).json({ error: 'Missing required parameters' })
  }

  // Get client IP
  const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
    req.headers['x-real-ip'] as string ||
    'unknown'

  // Verify Turnstile token to prevent automated spam/DDoS
  const isHuman = await verifyTurnstile(turnstileToken || '', clientIp)
  if (!isHuman) {
    console.log('Turnstile verification failed for IP:', clientIp)
    return res.status(403).json({ error: 'Verification failed. Please complete the CAPTCHA.' })
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY
  const ADMIN_EMAIL = 'ryan@achievepack.com'

  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY not configured')
    return res.status(500).json({ error: 'Email service not configured' })
  }

  // Log download activity inside Supabase CRM database
  let inquiryId: string | null = null
  const supabase = getSupabase()

  if (supabase) {
    try {
      const dimensions = `${width || ''} × ${height || ''}${gusset ? ` + ${gusset}` : ''} ${unit || 'mm'}`
      const { data: inquiryData, error: inquiryError } = await supabase
        .from('crm_inquiries')
        .insert({
          name: 'Dieline Downloader',
          email,
          message: `User requested and downloaded a vector layout dieline template.\n\nTemplate: ${dielineDisplayName || dielineFilename}\nShape Category: ${shape || 'Standard'}\nDimensions: ${dimensions}\nTarget Capacity: ${capacity || 'Custom'}\nFile Name: ${dielineFilename}`,
          source: 'dieline_request',
          status: 'new',
          packaging_type: 'Dieline Download',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select('id')
        .single()

      if (inquiryData) {
        inquiryId = inquiryData.id
        console.log('Dieline download saved to CRM:', inquiryId)
      }
      if (inquiryError) {
        console.error('CRM logging error:', inquiryError)
      }
    } catch (dbError) {
      console.error('Database connection error:', dbError)
    }
  }

  // absolute URL for PDF template
  const absoluteDownloadUrl = dielineUrl.startsWith('http') 
    ? dielineUrl 
    : `https://achievepack.com${dielineUrl}`

  // Customer Transactional Email
  const emailToCustomer = {
    sender: { name: 'AchievePack Dielines', email: 'noreply@achievepack.com' },
    to: [{ email: email }],
    replyTo: { email: ADMIN_EMAIL, name: 'Ryan at AchievePack' },
    subject: `🎨 Your Print-Ready Pouch Dieline Template - ${dielineDisplayName || 'AchievePack'}`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
          .specs-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 20px 0; }
          .spec-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f3f4f6; }
          .spec-row:last-child { border-bottom: none; }
          .spec-label { font-weight: bold; color: #6b7280; }
          .spec-value { font-weight: bold; color: #111827; }
          .cta-area { text-align: center; margin: 30px 0; }
          .button { display: inline-block; background: #10b981; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 6px rgba(16, 185, 129, 0.2); }
          .guidelines { background: #fffbeb; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 4px; font-size: 14px; margin-top: 25px; }
          .footer { text-align: center; color: #6b7280; font-size: 13px; padding-top: 25px; border-top: 1px solid #e5e7eb; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin:0; font-size: 24px;">🎨 Your Vector Dieline is Ready</h1>
            <p style="margin: 10px 0 0; opacity: 0.9; font-size: 15px;">Print-Ready Layout Blueprint Template</p>
          </div>
          <div class="content">
            <p>Hi there,</p>
            <p>Thank you for requesting vector layout dieline templates from AchievePack. Below are the specifications and direct download links for your packaging design team:</p>
            
            <div class="specs-box">
              <h3 style="margin-top: 0; color: #10b981; font-size: 16px; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Structure Details</h3>
              <div class="spec-row">
                <span class="spec-label">Template Name:</span>
                <span class="spec-value">${dielineDisplayName || 'Standard Pouch'}</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Pouch Shape:</span>
                <span class="spec-value" style="text-transform: uppercase;">${shape || 'Stand Up Pouch'}</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Dimensions:</span>
                <span class="spec-value">${width || ''} × ${height || ''}${gusset ? ` + ${gusset}` : ''} ${unit || 'mm'}</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Volume Capacity:</span>
                <span class="spec-value">${capacity || 'Custom'}</span>
              </div>
            </div>
            
            <div class="cta-area">
              <a href="${absoluteDownloadUrl}" download class="button">📥 Download Vector Dieline (.PDF)</a>
              <p style="font-size: 11px; color: #6b7280; margin-top: 8px;">Compatible with Adobe Illustrator, CorelDRAW, and Figma.</p>
            </div>
            
            <div class="guidelines">
              <strong style="color: #d97706; display: flex; items-center; gap: 4px; margin-bottom: 6px;">⚠️ Prepress Checklist Guidelines</strong>
              <ul style="margin: 0; padding-left: 20px; space-y: 6px;">
                <li><strong>Red Lines (Cut):</strong> Represents the physical edge where your pouch will be cut. Keep vital design features inside the Safe Margin.</li>
                <li><strong>Blue Lines (Fold Creases):</strong> Shows gussets and heat seals.</li>
                <li><strong>Green Lines (Bleed):</strong> Extend background graphics exactly 3mm beyond the red cut line to prevent white margins.</li>
                <li><strong>Color Profiles:</strong> Design exclusively in CMYK color space. Convert all text fonts to outlines before saving.</li>
              </ul>
            </div>
            
            <p style="margin-top: 25px;"><strong>Ready to get a custom printed quote?</strong> Browse our active pricing selector or upload your custom print layers directly into our dieline check portal:</p>
            <div style="text-align: center; margin: 15px 0;">
              <a href="https://achievepack.com/pricing" style="color: #10b981; font-weight: bold; text-decoration: none; margin-right: 20px;">💰 B2B Pricing Calculator</a>
              <a href="https://achievepack.com/dieline-finder" style="color: #4f46e5; font-weight: bold; text-decoration: none;">🔍 Prepress Preflight Check</a>
            </div>

            <p style="margin-top: 30px;">Best regards,</p>
            <p><strong>Ryan Wong</strong><br>
            AchievePack Operations<br>
            <a href="mailto:ryan@achievepack.com" style="color: #10b981;">ryan@achievepack.com</a></p>
          </div>
          <div class="footer">
            <p>🌱 Sustainable packaging for a circular economy</p>
            <p>© ${new Date().getFullYear()} AchievePack. All rights reserved.</p>
            <p style="font-size: 11px; color: #9ca3af;">🔒 We value privacy. Your email is strictly used to deliver custom dielines. We do not spam.</p>
          </div>
        </div>
      </body>
      </html>
    `
  }

  // Admin Notification Email to Ryan Wong
  const emailToAdmin = {
    sender: { name: 'AchievePack System', email: 'noreply@achievepack.com' },
    to: [{ email: ADMIN_EMAIL, name: 'Ryan Wong' }],
    replyTo: { email: email, name: 'Dieline Downloader' },
    subject: `🚨 Dieline Template Sent - ${email} - ${dielineDisplayName || dielineFilename}`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #111827; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
          .data-field { margin-bottom: 12px; padding: 10px; background: #f9fafb; border-radius: 6px; }
          .label { font-size: 11px; font-weight: bold; color: #6b7280; text-transform: uppercase; }
          .value { font-size: 14px; color: #111827; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin:0; font-size: 18px;">📥 Dieline Downloaded & Sent</h2>
            <p style="margin: 5px 0 0; font-size: 12px; opacity: 0.8;">Automated System Notification</p>
          </div>
          <div class="content">
            <p>Hi Ryan,</p>
            <p>A user has successfully resolved Cloudflare challenges and requested a packaging dieline template. The email containing the vector link has been auto-delivered:</p>
            
            <div class="data-field">
              <div class="label">User/Lead Email</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="data-field">
              <div class="label">Requested Dieline</div>
              <div class="value">${dielineDisplayName || 'Standard'}</div>
            </div>
            <div class="data-field">
              <div class="label">Pouch Shape</div>
              <div class="value">${shape || 'Unknown'}</div>
            </div>
            <div class="data-field">
              <div class="label">Dimensions</div>
              <div class="value">${width || ''} × ${height || ''}${gusset ? ` + ${gusset}` : ''} ${unit || 'mm'}</div>
            </div>
            <div class="data-field">
              <div class="label">Est. Capacity</div>
              <div class="value">${capacity || 'Custom'}</div>
            </div>
            <div class="data-field">
              <div class="label">Dieline Filename</div>
              <div class="value" style="font-family: monospace; font-size: 12px;">${dielineFilename}</div>
            </div>
            
            ${inquiryId ? `
            <div class="data-field" style="background: #e0e7ff; border-left: 4px solid #4f46e5;">
              <div class="label">CRM Integration</div>
              <div class="value"><a href="https://achievepack.com/ctrl-x9k7m?tab=crm" target="_blank" style="color: #4f46e5;">Open CRM lead record</a></div>
            </div>
            ` : ''}
            
            <p style="margin-top: 25px; text-align: center;">
              <a href="mailto:${email}?subject=Follow up: Pouch Dieline for your Brand" style="display: inline-block; background: #4f46e5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 13px;">📧 Quick Reply / Follow-up</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `
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
        body: JSON.stringify(emailToCustomer)
      }),
      fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json'
        },
        body: JSON.stringify(emailToAdmin)
      })
    ])

    const responses = await Promise.all(results.map(r => r.json().catch(() => ({}))))
    console.log('Dieline email dispatch responses:', responses)

    if (!results[0].ok) {
      console.error('Failed to send email to customer:', responses[0])
      return res.status(500).json({ error: 'Failed to send dieline email' })
    }

    return res.status(200).json({
      success: true,
      message: 'Vector dieline has been successfully emailed to ' + email
    })
  } catch (emailError) {
    console.error('Dieline email system crash:', emailError)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
