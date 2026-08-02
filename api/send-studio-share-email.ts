import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    const {
      shareUrl,
      shareCode,
      customSlug,
      companyName,
      shapeId,
      dimensions,
      layersCount,
      screenshot, // Base64 data URL string (optional)
      domain = 'achievepack.com'
    } = req.body || {};

    const RECIPIENTS = [
      { email: 'ryan@achievepack.com', name: 'Ryan' },
      { email: 'info@achievepack.com', name: 'AchievePack Admin' }
    ];

    const linkType = customSlug ? `Custom Web Link (${customSlug})` : `Share Code (${shareCode || 'Direct'})`;
    const targetUrl = shareUrl || (customSlug ? `https://pouch.eco/${customSlug}` : `https://achievepack.com/studio?code=${shareCode}`);

    // Format dimensions
    const widthMm = dimensions?.width || 170;
    const heightMm = dimensions?.height || 210;
    const depthMm = dimensions?.depth || 36.4;
    const widthInch = (widthMm / 25.4).toFixed(2);
    const heightInch = (heightMm / 25.4).toFixed(2);
    const depthInch = (depthMm / 25.4).toFixed(2);

    const formattedDate = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Hong_Kong',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    const emailPayload: any = {
      sender: { name: 'AchievePack 3D Studio', email: 'noreply@achievepack.com' },
      to: RECIPIENTS,
      subject: `📦 3D Studio Link Generated: ${companyName ? `${companyName} (${customSlug})` : (shareCode || 'New Design')}`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111827; background-color: #f3f4f6; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); }
            .header { background: linear-gradient(135deg, #0f172a, #1e293b); color: #ffffff; padding: 28px 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 700; tracking-tight: true; }
            .header p { margin: 6px 0 0; opacity: 0.8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; }
            .content { padding: 24px; }
            .hero-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px; text-align: center; margin-bottom: 20px; }
            .btn { display: inline-block; background: #2563eb; color: #ffffff !important; font-weight: 600; font-size: 15px; padding: 12px 28px; text-decoration: none; border-radius: 8px; margin-top: 12px; box-shadow: 0 2px 6px rgba(37,99,235,0.3); }
            .grid { display: table; width: 100%; margin-bottom: 16px; }
            .row { display: table-row; }
            .cell { display: table-cell; padding: 10px; background: #f9fafb; border-radius: 6px; margin-bottom: 8px; font-size: 14px; border: 1px solid #f3f4f6; }
            .label { font-size: 11px; text-transform: uppercase; color: #6b7280; font-weight: 700; margin-bottom: 4px; }
            .value { font-weight: 600; color: #0f172a; }
            .preview-img { width: 100%; max-width: 520px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 12px; }
            .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📦 3D Studio Link Generated</h1>
              <p>AchievePack & Pouch Eco Studio Tracker</p>
            </div>
            
            <div class="content">
              <div class="hero-card">
                <div style="font-size: 13px; color: #64748b;">Direct Access Link Generated</div>
                <div style="font-size: 18px; font-weight: 700; color: #0f172a; margin: 4px 0 10px;">${linkType}</div>
                <a href="${targetUrl}" target="_blank" class="btn">🚀 Open 3D Design Studio</a>
                <div style="font-size: 11px; color: #94a3b8; margin-top: 8px; word-break: break-all;">${targetUrl}</div>
              </div>

              ${screenshot ? `
                <div style="margin-bottom: 20px; text-align: center;">
                  <div class="label" style="text-align: left;">3D Studio Canvas Snapshot</div>
                  <img src="${screenshot}" alt="3D Model Preview" class="preview-img" />
                </div>
              ` : ''}

              <div style="font-size: 14px; font-weight: 700; margin-bottom: 10px; color: #334155;">Packaging Specifications</div>

              <div style="margin-bottom: 8px;">
                <div class="cell">
                  <div class="label">Shape Model ID</div>
                  <div class="value">${shapeId || 'Standard Pouch'}</div>
                </div>
              </div>

              ${companyName ? `
                <div style="margin-bottom: 8px;">
                  <div class="cell" style="background: #eff6ff; border-color: #bfdbfe;">
                    <div class="label" style="color: #1d4ed8;">Company / Brand Name</div>
                    <div class="value" style="color: #1e40af;">${companyName}</div>
                  </div>
                </div>
              ` : ''}

              <div style="margin-bottom: 8px;">
                <div class="cell">
                  <div class="label">Dimensions (Inches)</div>
                  <div class="value">${widthInch}" W x ${heightInch}" H x ${depthInch}" D</div>
                </div>
              </div>

              <div style="margin-bottom: 8px;">
                <div class="cell">
                  <div class="label">Dimensions (Millimeters)</div>
                  <div class="value">${widthMm}mm W x ${heightMm}mm H x ${depthMm}mm D</div>
                </div>
              </div>

              <div style="margin-bottom: 8px;">
                <div class="cell">
                  <div class="label">Artwork Layers</div>
                  <div class="value">${layersCount ?? 1} layer(s) configured</div>
                </div>
              </div>

              <div style="margin-bottom: 8px;">
                <div class="cell">
                  <div class="label">Domain Source & Timestamp</div>
                  <div class="value">${domain} • ${formattedDate}</div>
                </div>
              </div>
            </div>

            <div class="footer">
              AchievePack / Pouch Eco 3D Packaging Studio System Notification
            </div>
          </div>
        </body>
        </html>
      `
    };

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify(emailPayload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API error in send-studio-share-email:', errorData);
      return res.status(500).json({ error: 'Failed to send studio email notification', details: errorData });
    }

    console.log('3D Studio share notification email sent to ryan@achievepack.com successfully.');
    return res.status(200).json({ success: true, message: 'Notification email sent.' });

  } catch (err: any) {
    console.error('send-studio-share-email error:', err.message);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
