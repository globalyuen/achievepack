export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    const { email, fullName, company, userId, registeredAt } = req.body;
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const ADMIN_EMAIL = 'ryan@achievepack.com';
    if (!BREVO_API_KEY) {
        console.error('BREVO_API_KEY not configured');
        return res.status(500).json({ error: 'Email service not configured' });
    }
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }
    // Format registration time
    const formattedTime = new Date(registeredAt || Date.now()).toLocaleString('en-HK', {
        timeZone: 'Asia/Hong_Kong',
        dateStyle: 'full',
        timeStyle: 'medium'
    });
    // Email to Admin
    const emailToAdmin = {
        sender: { name: 'AchievePack Customer Center', email: 'noreply@achievepack.com' },
        to: [{ email: ADMIN_EMAIL, name: 'Ryan' }],
        replyTo: { email: email, name: fullName || email },
        subject: `🎉 New Customer Registration: ${fullName || email}`,
        htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 25px; border-radius: 12px 12px 0 0; text-align: center; }
          .content { background: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
          .field { margin-bottom: 16px; padding: 12px; background: #f9fafb; border-radius: 8px; }
          .label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; margin-bottom: 4px; }
          .value { font-size: 15px; color: #111827; }
          .quick-actions { margin-top: 20px; padding: 15px; background: #ecfdf5; border-radius: 8px; }
          .button { display: inline-block; background: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-right: 10px; }
          .stats { display: flex; gap: 15px; margin-top: 20px; }
          .stat-box { flex: 1; background: #f0fdf4; padding: 15px; border-radius: 8px; text-align: center; }
          .stat-number { font-size: 24px; font-weight: bold; color: #059669; }
          .stat-label { font-size: 12px; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin:0; font-size: 24px;">🎉 New Customer Registration!</h1>
            <p style="margin: 10px 0 0; opacity: 0.9;">A new customer has signed up for the Customer Center</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Customer Email</div>
              <div class="value"><a href="mailto:${email}" style="color: #059669;">${email}</a></div>
            </div>
            ${fullName ? `
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${fullName}</div>
            </div>
            ` : ''}
            ${company ? `
            <div class="field">
              <div class="label">Company</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">User ID</div>
              <div class="value" style="font-family: monospace; font-size: 13px;">${userId || 'N/A'}</div>
            </div>
            <div class="field">
              <div class="label">Registered At</div>
              <div class="value">${formattedTime} (HKT)</div>
            </div>
            
            <div class="quick-actions">
              <div class="label" style="margin-bottom: 10px;">Quick Actions</div>
              <a href="https://achievepack.com/ctrl-x9k7m?tab=customers" class="button">View in Admin</a>
              <a href="mailto:${email}?subject=Welcome to Achieve Pack!&body=Hi ${fullName || 'there'},%0D%0A%0D%0AThank you for signing up to our Customer Center!%0D%0A%0D%0ABest regards,%0D%0ARyan" class="button" style="background: #2563eb;">Send Welcome Email</a>
            </div>
            
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px; text-align: center;">
              This is an automated notification from AchievePack Customer Center
            </p>
          </div>
        </div>
      </body>
      </html>
    `
    };
    try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': BREVO_API_KEY,
                'content-type': 'application/json'
            },
            body: JSON.stringify(emailToAdmin)
        });
        const result = await response.json();
        console.log('Registration notification sent:', result);
        if (!response.ok) {
            console.error('Failed to send notification:', result);
            return res.status(500).json({ error: 'Failed to send notification' });
        }
        return res.status(200).json({
            success: true,
            message: 'Registration notification sent'
        });
    }
    catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({ error: 'Failed to send notification' });
    }
}
