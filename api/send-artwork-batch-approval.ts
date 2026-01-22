import type { VercelRequest, VercelResponse } from '@vercel/node'

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
    batchName,
    batchId,
    approvalType, // 'approve_as_is' | 'approve_with_changes' | 'not_approved'
    approverName,
    approverCompany,
    comment,
    totalItems,
    approvedCount,
    rejectedCount,
    items // Array of { name, status, comment }
  } = req.body

  if (!batchName || !batchId || !approvalType) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // Determine status
  const isApproved = approvalType !== 'not_approved'
  const statusEmoji = isApproved ? '✅' : '❌'
  const statusText = approvalType === 'approve_as_is' 
    ? 'Approved as is' 
    : approvalType === 'approve_with_changes'
    ? 'Approved with changes'
    : 'Not Approved - Revision Needed'

  const statusColor = isApproved ? '#059669' : '#dc2626'
  const statusBgColor = isApproved ? '#d1fae5' : '#fee2e2'

  // Format items list
  const itemsList = items?.map((item: { name: string; status: string; comment?: string }) => `
    <tr>
      <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">${item.name}</td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">
        <span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 12px; font-weight: 500; background: ${item.status === 'approved' ? '#d1fae5' : '#fee2e2'}; color: ${item.status === 'approved' ? '#059669' : '#dc2626'};">
          ${item.status === 'approved' ? 'Approved' : 'Revision Needed'}
        </span>
      </td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb; font-size: 13px; color: #6b7280;">${item.comment || '-'}</td>
    </tr>
  `).join('') || ''

  try {
    const emailData = {
      sender: { name: 'AchievePack Artwork System', email: 'noreply@achievepack.com' },
      to: [{ email: ADMIN_EMAIL, name: 'Ryan' }],
      subject: `${statusEmoji} Artwork Batch "${batchName}" - ${statusText}`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 640px; margin: 0 auto; }
            .header { background: ${statusBgColor}; color: ${statusColor}; padding: 24px; border-radius: 12px 12px 0 0; text-align: center; }
            .header h1 { margin: 0; font-size: 22px; }
            .content { background: #ffffff; padding: 24px; border: 1px solid #e5e7eb; border-top: none; }
            .status-badge { display: inline-block; padding: 8px 16px; border-radius: 8px; font-weight: 600; font-size: 14px; background: ${statusBgColor}; color: ${statusColor}; }
            .info-row { display: flex; margin-bottom: 12px; }
            .info-label { font-weight: 600; color: #6b7280; width: 140px; }
            .info-value { color: #111827; }
            .comment-box { background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 16px 0; border-left: 4px solid ${statusColor}; }
            .footer { background: #f9fafb; padding: 16px; border-radius: 0 0 12px 12px; text-align: center; border: 1px solid #e5e7eb; border-top: none; }
            .button { display: inline-block; background: #8b5cf6; color: white !important; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; }
            table { width: 100%; border-collapse: collapse; margin: 16px 0; }
            th { text-align: left; padding: 8px 12px; background: #f9fafb; font-size: 12px; text-transform: uppercase; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${statusEmoji} Artwork Batch Review Submitted</h1>
            </div>
            
            <div class="content">
              <div style="text-align: center; margin-bottom: 20px;">
                <span class="status-badge">${statusText}</span>
              </div>
              
              <div style="margin-bottom: 20px;">
                <div class="info-row">
                  <span class="info-label">Batch Name:</span>
                  <span class="info-value"><strong>${batchName}</strong></span>
                </div>
                <div class="info-row">
                  <span class="info-label">Reviewer:</span>
                  <span class="info-value">${approverName || 'Not provided'}${approverCompany ? ` (${approverCompany})` : ''}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Total Artworks:</span>
                  <span class="info-value">${totalItems || items?.length || 0}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Approved:</span>
                  <span class="info-value" style="color: #059669;">${approvedCount || 0}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Revision Needed:</span>
                  <span class="info-value" style="color: #dc2626;">${rejectedCount || 0}</span>
                </div>
              </div>
              
              ${comment ? `
                <div class="comment-box">
                  <strong>Customer Comments:</strong>
                  <p style="margin: 8px 0 0 0;">${comment}</p>
                </div>
              ` : ''}
              
              ${items && items.length > 0 ? `
                <h3 style="margin-top: 24px; margin-bottom: 12px;">Artwork Details</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Artwork</th>
                      <th>Status</th>
                      <th>Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${itemsList}
                  </tbody>
                </table>
              ` : ''}
            </div>
            
            <div class="footer">
              <a href="https://achievepack.com/ctrl-x9k7m/artwork-batches" class="button">View in Admin Panel</a>
              <p style="margin-top: 16px; font-size: 12px; color: #6b7280;">
                Submitted at ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} (PST)
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify(emailData)
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Brevo API error:', error)
      return res.status(500).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ success: true, message: 'Notification sent' })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ error: 'Failed to send notification' })
  }
}
