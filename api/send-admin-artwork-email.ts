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
    adminEmail,
    fileName,
    fileUrl,
    fileType,
    fileSize,
    uploadedBy
  } = req.body

  const BREVO_API_KEY = process.env.BREVO_API_KEY
  const ARTWORK_EMAIL = 'artwork@achievepack.com'

  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY not configured')
    return res.status(500).json({ error: 'Email service not configured' })
  }

  // Format file size
  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  const getFileIcon = (name: string) => {
    const ext = name.split('.').pop()?.toLowerCase()
    if (['ai', 'eps', 'psd'].includes(ext || '')) return '🎨'
    if (['pdf'].includes(ext || '')) return '📄'
    if (['png', 'jpg', 'jpeg', 'tiff', 'tif'].includes(ext || '')) return '🖼️'
    if (['zip'].includes(ext || '')) return '📦'
    return '📁'
  }

  const fileIcon = getFileIcon(fileName)
  const formattedSize = formatSize(fileSize || 0)
  const isAdminUpload = uploadedBy === 'admin'

  try {
    // Email to Admin/Artwork Team
    const emailToAdmin: any = {
      sender: { name: 'AchievePack Artwork System', email: 'noreply@achievepack.com' },
      to: [{ email: ARTWORK_EMAIL, name: 'Artwork Team' }],
      subject: `${fileIcon} ${isAdminUpload ? '[Admin Upload]' : ''} Artwork for ${customerName}: ${fileName}`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; padding: 25px; border-radius: 12px 12px 0 0; }
            .content { background: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
            .field { margin-bottom: 16px; padding: 12px; background: #f9fafb; border-radius: 8px; }
            .label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; margin-bottom: 4px; }
            .value { font-size: 15px; color: #111827; }
            .badge { display: inline-block; background: #fef3c7; color: #92400e; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; }
            .file-preview { background: #f3e8ff; padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0; }
            .button { display: inline-block; background: #8b5cf6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-right: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin:0; font-size: 22px;">🎨 Artwork ${isAdminUpload ? 'Uploaded by Admin' : 'Received'}</h1>
              <p style="margin: 10px 0 0; opacity: 0.9; font-size: 14px;">For customer: ${customerName}</p>
            </div>
            <div class="content">
              ${isAdminUpload ? '<div style="margin-bottom: 15px;"><span class="badge">⬆️ Uploaded by Admin</span></div>' : ''}
              
              <div class="field">
                <div class="label">Customer</div>
                <div class="value">${customerName} (<a href="mailto:${customerEmail}">${customerEmail}</a>)</div>
              </div>
              
              <div class="file-preview">
                <div style="font-size: 48px; margin-bottom: 10px;">${fileIcon}</div>
                <div style="font-weight: 600; font-size: 16px; color: #5b21b6; word-break: break-all;">${fileName}</div>
                <div style="font-size: 13px; color: #6b7280; margin-top: 8px;">${fileType || 'Unknown'} • ${formattedSize}</div>
              </div>
              
              <div style="text-align: center; margin-top: 20px;">
                <a href="${fileUrl}" class="button" target="_blank">📥 Download</a>
                <a href="https://achievepack.com/ctrl-x9k7m/management?tab=artwork" class="button" style="background: #2563eb;">🎨 View All</a>
              </div>
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
      body: JSON.stringify(emailToAdmin)
    })

    // Email to Customer
    const emailToCustomer: any = {
      sender: { name: 'AchievePack', email: 'noreply@achievepack.com' },
      to: [{ email: customerEmail, name: customerName }],
      subject: `${isAdminUpload ? '📤 We\'ve uploaded artwork to your account' : '✅ Artwork Received'} - ${fileName}`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, ${isAdminUpload ? '#3b82f6, #2563eb' : '#10b981, #059669'}); color: white; padding: 25px; border-radius: 12px 12px 0 0; text-align: center; }
            .content { background: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
            .file-info { background: #f3e8ff; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center; }
            .button { display: inline-block; background: #8b5cf6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div style="font-size: 48px; margin-bottom: 10px;">${isAdminUpload ? '📤' : '✅'}</div>
              <h1 style="margin: 0; font-size: 22px;">${isAdminUpload ? 'Artwork Added to Your Account' : 'Artwork Received!'}</h1>
            </div>
            <div class="content">
              <p>Hi ${customerName || 'there'},</p>
              
              ${isAdminUpload ? `
                <p>Our team has uploaded an artwork file to your account. This may be a proof, revised design, or reference file for your order.</p>
              ` : `
                <p>We've successfully received your artwork file. Our prepress team will review it shortly.</p>
              `}
              
              <div class="file-info">
                <div style="font-size: 32px; margin-bottom: 8px;">${fileIcon}</div>
                <div style="font-weight: 600; color: #5b21b6;">${fileName}</div>
                <div style="font-size: 12px; color: #6b7280; margin-top: 5px;">${formattedSize}</div>
              </div>
              
              <div style="text-align: center; margin: 25px 0;">
                <a href="https://achievepack.com/customer-center" class="button">View in Customer Center</a>
              </div>
              
              <p>If you have any questions, feel free to reply to this email or contact us at <a href="mailto:artwork@achievepack.com">artwork@achievepack.com</a>.</p>
              
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
      body: JSON.stringify(emailToCustomer)
    })

    console.log('Admin artwork emails sent to:', ARTWORK_EMAIL, customerEmail)

    return res.status(200).json({ 
      success: true, 
      message: 'Emails sent successfully'
    })

  } catch (error: any) {
    console.error('Email send error:', error)
    return res.status(500).json({ error: 'Failed to send email', details: error.message })
  }
}
