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
    fileName,
    fileUrl,
    fileType,
    fileSize
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

  // Get file icon based on type
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

  // Email to Artwork Team
  const emailToArtwork: any = {
    sender: { name: 'AchievePack Artwork System', email: 'noreply@achievepack.com' },
    to: [{ email: ARTWORK_EMAIL, name: 'Artwork Team' }],
    replyTo: { email: customerEmail, name: customerName },
    subject: `${fileIcon} New Artwork Upload from ${customerName}: ${fileName}`,
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
          .file-preview { background: #f3e8ff; padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0; border: 2px dashed #a78bfa; }
          .file-icon { font-size: 48px; margin-bottom: 10px; }
          .quick-actions { margin-top: 20px; padding: 15px; background: #ecfdf5; border-radius: 8px; }
          .button { display: inline-block; background: #8b5cf6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-right: 10px; }
          .button-secondary { background: #10b981; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin:0; font-size: 22px;">🎨 New Artwork Upload</h1>
            <p style="margin: 10px 0 0; opacity: 0.9; font-size: 14px;">Customer file submission</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Customer Name</div>
              <div class="value">${customerName || 'Not provided'}</div>
            </div>
            
            <div class="field">
              <div class="label">Customer Email</div>
              <div class="value"><a href="mailto:${customerEmail}">${customerEmail}</a></div>
            </div>
            
            <div class="file-preview">
              <div class="file-icon">${fileIcon}</div>
              <div style="font-weight: 600; font-size: 16px; color: #5b21b6; word-break: break-all;">${fileName}</div>
              <div style="font-size: 13px; color: #6b7280; margin-top: 8px;">
                ${fileType || 'Unknown type'} • ${formattedSize}
              </div>
            </div>
            
            <div class="quick-actions">
              <p style="margin: 0 0 10px; font-weight: 600; color: #065f46;">Quick Actions:</p>
              <a href="${fileUrl}" class="button button-secondary" target="_blank">📥 Download File</a>
              <a href="https://achievepack.com/ctrl-x9k7m/management?tab=artwork" class="button">🎨 View in Admin</a>
              <a href="mailto:${customerEmail}?subject=Re: Your Artwork Upload - ${fileName}" class="button" style="background: #2563eb; margin-top: 10px;">📧 Reply to Customer</a>
            </div>
            
            <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">
              Uploaded: ${new Date().toLocaleString('en-US', { 
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
      body: JSON.stringify(emailToArtwork)
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Brevo API error:', errorData)
      return res.status(500).json({ error: 'Failed to send email', details: errorData })
    }

    console.log('Artwork email sent to:', ARTWORK_EMAIL)

    // Also send confirmation to customer
    const customerConfirmation: any = {
      sender: { name: 'AchievePack', email: 'noreply@achievepack.com' },
      to: [{ email: customerEmail, name: customerName }],
      subject: `✅ Artwork Received - ${fileName}`,
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
            .file-info { background: #f3e8ff; padding: 15px; border-radius: 8px; margin: 20px 0; }
            .steps { background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .step { display: flex; align-items: flex-start; margin-bottom: 12px; }
            .step-number { background: #8b5cf6; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; margin-right: 12px; flex-shrink: 0; }
            .step-text { font-size: 14px; color: #374151; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="check-icon">✅</div>
              <h1 style="margin: 10px 0 0; font-size: 22px;">Artwork Received!</h1>
            </div>
            <div class="content">
              <p>Hi ${customerName || 'there'},</p>
              <p>We've successfully received your artwork file. Our prepress team will review it shortly.</p>
              
              <div class="file-info">
                <div style="font-size: 14px; color: #6b7280;">File uploaded:</div>
                <div style="font-weight: 600; color: #5b21b6; margin-top: 5px;">${fileIcon} ${fileName}</div>
                <div style="font-size: 12px; color: #6b7280; margin-top: 3px;">${formattedSize}</div>
              </div>
              
              <div class="steps">
                <h3 style="margin: 0 0 15px; font-size: 16px; color: #111827;">What happens next:</h3>
                <div class="step">
                  <div class="step-number">1</div>
                  <div class="step-text">Our prepress team reviews your artwork</div>
                </div>
                <div class="step">
                  <div class="step-number">2</div>
                  <div class="step-text">We'll contact you if any adjustments are needed</div>
                </div>
                <div class="step">
                  <div class="step-number">3</div>
                  <div class="step-text">You'll receive a digital proof for approval</div>
                </div>
              </div>
              
              <p>You can view and manage your artwork files anytime in your <a href="https://achievepack.com/customer-center" style="color: #8b5cf6; font-weight: 600;">Customer Center</a>.</p>
              
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
      body: JSON.stringify(customerConfirmation)
    })

    return res.status(200).json({ 
      success: true, 
      message: 'Artwork email sent successfully'
    })

  } catch (error: any) {
    console.error('Email send error:', error)
    return res.status(500).json({ error: 'Failed to send email', details: error.message })
  }
}
