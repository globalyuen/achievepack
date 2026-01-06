import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const getSupabase = () => {
  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) return null
  return createClient(supabaseUrl, supabaseKey)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const BREVO_API_KEY = process.env.BREVO_API_KEY
  const ADMIN_EMAIL = 'ryan@achievepack.com'

  if (!BREVO_API_KEY) {
    return res.status(500).json({ error: 'Email service not configured' })
  }

  const { 
    type,  // 'status_update' | 'new_message' | 'new_file'
    artworkId,
    artworkName,
    artworkCode,
    customerEmail,
    customerName,
    status,
    message,
    isAdmin,
    fileUrl,
    fileName
  } = req.body

  if (!artworkId || !type) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const supabase = getSupabase()

  // Log activity to CRM
  if (supabase && customerEmail) {
    try {
      await supabase.from('crm_activities').insert({
        inquiry_id: null,
        activity_type: 'artwork_notification',
        description: type === 'status_update' 
          ? `Artwork "${artworkName}" status changed to ${status}`
          : type === 'new_message'
          ? `New message on artwork "${artworkName}": ${message?.slice(0, 100)}...`
          : `New file uploaded to artwork "${artworkName}": ${fileName}`,
        created_at: new Date().toISOString()
      })
    } catch (e) {
      console.error('Activity log error:', e)
    }
  }

  const emails: any[] = []
  const baseUrl = 'https://achievepack.com'

  // Email template styles
  const styles = `
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { background: linear-gradient(135deg, #8b5cf6, #6366f1); color: white; padding: 25px; border-radius: 12px 12px 0 0; text-align: center; }
    .content { background: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
    .status-badge { display: inline-block; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 14px; }
    .status-pending { background: #fef3c7; color: #92400e; }
    .status-proof_ready { background: #dbeafe; color: #1e40af; }
    .status-approved { background: #d1fae5; color: #065f46; }
    .status-revision { background: #fee2e2; color: #991b1b; }
    .status-production { background: #d1fae5; color: #065f46; }
    .message-box { background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #8b5cf6; }
    .button { display: inline-block; background: #8b5cf6; color: white !important; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 15px; }
    .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
    .file-link { background: #ede9fe; padding: 10px 15px; border-radius: 8px; display: inline-block; margin: 10px 0; }
    .file-link a { color: #6366f1; text-decoration: none; font-weight: 600; }
  `

  const getStatusClass = (s: string) => {
    if (s?.includes('pending')) return 'status-pending'
    if (s?.includes('proof')) return 'status-proof_ready'
    if (s?.includes('approved')) return 'status-approved'
    if (s?.includes('revision')) return 'status-revision'
    if (s?.includes('production')) return 'status-production'
    return 'status-pending'
  }

  const formatStatus = (s: string) => s?.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Unknown'

  // Email to Admin
  if (type === 'status_update') {
    // Status update - notify customer
    if (customerEmail) {
      emails.push({
        sender: { name: 'AchievePack Artwork', email: 'noreply@achievepack.com' },
        to: [{ email: customerEmail, name: customerName || 'Customer' }],
        replyTo: { email: ADMIN_EMAIL, name: 'Ryan at AchievePack' },
        subject: `🎨 Artwork Update: ${artworkCode || artworkName} - ${formatStatus(status)}`,
        htmlContent: `
          <!DOCTYPE html>
          <html>
          <head><style>${styles}</style></head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin:0; font-size: 22px;">🎨 Artwork Status Update</h1>
                <p style="margin: 10px 0 0; opacity: 0.9;">${artworkCode || ''}</p>
              </div>
              <div class="content">
                <p>Hi ${customerName || 'there'},</p>
                <p>Your artwork <strong>"${artworkName}"</strong> has been updated:</p>
                
                <div style="text-align: center; margin: 25px 0;">
                  <span class="status-badge ${getStatusClass(status)}">${formatStatus(status)}</span>
                </div>
                
                ${status === 'proof_ready' ? `
                <div class="message-box">
                  <strong>🎉 Great news!</strong> Your proof is ready for review. Please check and approve it in your dashboard.
                </div>
                ` : status === 'revision_needed' ? `
                <div class="message-box">
                  <strong>📝 Action Required:</strong> We need some revisions on this artwork. Please check the feedback and upload a new version.
                </div>
                ` : status === 'in_production' ? `
                <div class="message-box">
                  <strong>🏭 Production Started!</strong> Your artwork has been approved and is now in production.
                </div>
                ` : ''}
                
                <div style="text-align: center;">
                  <a href="${baseUrl}/dashboard" class="button">View in Dashboard</a>
                </div>
                
                <p style="margin-top: 30px;">If you have any questions, please reply to this email or contact us directly.</p>
                <p>Best regards,<br><strong>AchievePack Team</strong></p>
              </div>
              <div class="footer">
                <p>🌱 Sustainable Packaging Solutions</p>
                <p>© ${new Date().getFullYear()} AchievePack</p>
              </div>
            </div>
          </body>
          </html>
        `
      })
    }
  } else if (type === 'new_message' || type === 'new_file') {
    // New message or file - notify the other party
    const isFromAdmin = isAdmin === true

    // Notify customer if admin sent message
    if (isFromAdmin && customerEmail) {
      emails.push({
        sender: { name: 'AchievePack Artwork', email: 'noreply@achievepack.com' },
        to: [{ email: customerEmail, name: customerName || 'Customer' }],
        replyTo: { email: ADMIN_EMAIL, name: 'Ryan at AchievePack' },
        subject: `💬 New ${type === 'new_file' ? 'File' : 'Message'} on Artwork: ${artworkCode || artworkName}`,
        htmlContent: `
          <!DOCTYPE html>
          <html>
          <head><style>${styles}</style></head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin:0; font-size: 22px;">💬 New ${type === 'new_file' ? 'File Uploaded' : 'Message'}</h1>
                <p style="margin: 10px 0 0; opacity: 0.9;">Artwork: ${artworkCode || artworkName}</p>
              </div>
              <div class="content">
                <p>Hi ${customerName || 'there'},</p>
                <p>Our team has ${type === 'new_file' ? 'uploaded a new file' : 'sent a message'} regarding your artwork:</p>
                
                ${type === 'new_file' && fileUrl ? `
                <div class="file-link">
                  📎 <a href="${fileUrl}" target="_blank">${fileName || 'Download File'}</a>
                </div>
                ` : ''}
                
                ${message ? `
                <div class="message-box">
                  <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
                ` : ''}
                
                <div style="text-align: center;">
                  <a href="${baseUrl}/dashboard" class="button">View & Reply</a>
                </div>
                
                <p style="margin-top: 30px;">Best regards,<br><strong>AchievePack Team</strong></p>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} AchievePack</p>
              </div>
            </div>
          </body>
          </html>
        `
      })
    }

    // Notify admin if customer sent message
    if (!isFromAdmin) {
      emails.push({
        sender: { name: 'AchievePack Artwork', email: 'noreply@achievepack.com' },
        to: [{ email: ADMIN_EMAIL, name: 'Ryan' }],
        replyTo: customerEmail ? { email: customerEmail, name: customerName || 'Customer' } : undefined,
        subject: `🔔 Customer ${type === 'new_file' ? 'Uploaded File' : 'Message'}: ${artworkCode || artworkName}`,
        htmlContent: `
          <!DOCTYPE html>
          <html>
          <head><style>${styles}</style></head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin:0; font-size: 22px;">🔔 Customer ${type === 'new_file' ? 'File Upload' : 'Message'}</h1>
                <p style="margin: 10px 0 0; opacity: 0.9;">Artwork: ${artworkCode || artworkName}</p>
              </div>
              <div class="content">
                <p><strong>Customer:</strong> ${customerName || 'Unknown'} (${customerEmail || 'No email'})</p>
                <p><strong>Artwork:</strong> ${artworkName}</p>
                
                ${type === 'new_file' && fileUrl ? `
                <div class="file-link">
                  📎 <a href="${fileUrl}" target="_blank">${fileName || 'Download File'}</a>
                </div>
                ` : ''}
                
                ${message ? `
                <div class="message-box">
                  <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
                ` : ''}
                
                <div style="text-align: center;">
                  <a href="${baseUrl}/ctrl-x9k7m/management?tab=artwork" class="button">Review in Admin</a>
                </div>
              </div>
              <div class="footer">
                <p>Received at ${new Date().toLocaleString('en-HK', { timeZone: 'Asia/Hong_Kong' })} HKT</p>
              </div>
            </div>
          </body>
          </html>
        `
      })
    }
  }

  if (emails.length === 0) {
    return res.status(200).json({ success: true, message: 'No emails to send' })
  }

  try {
    const results = await Promise.all(
      emails.map(email =>
        fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'api-key': BREVO_API_KEY,
            'content-type': 'application/json'
          },
          body: JSON.stringify(email)
        })
      )
    )

    const responses = await Promise.all(results.map(r => r.json().catch(() => ({}))))
    console.log('Artwork notification emails sent:', responses)

    return res.status(200).json({
      success: true,
      sent: emails.length,
      message: 'Notifications sent successfully'
    })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ error: 'Failed to send notifications' })
  }
}
