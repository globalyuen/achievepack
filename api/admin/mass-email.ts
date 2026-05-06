import { VercelRequest, VercelResponse } from '@vercel/node';

const BREVO_API_KEY = process.env.BREVO_API_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { subject, body, recipients } = req.body;

  if (!subject || !body || !recipients || !Array.isArray(recipients)) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!BREVO_API_KEY) {
    return res.status(500).json({ error: 'BREVO_API_KEY not configured' });
  }

  const results = {
    sent: 0,
    failed: 0,
    errors: [] as string[]
  };

  // Process in batches of 10 to avoid Vercel timeout (Hobby limit is 10s)
  // If there are more, we'll suggest the user to split the CSV or we'd need a background job
  const batch = recipients.slice(0, 50); // Limit to 50 for safety in one request

  for (const recipient of batch) {
    const personalizedBody = body
      .replace(/{{name}}/g, recipient.name || 'Customer')
      .replace(/{{company}}/g, recipient.company || 'Your Company')
      .replace(/{{email}}/g, recipient.email);

    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          sender: { name: 'Ryan Wong', email: 'ryan@achievepack.com' },
          to: [{ email: recipient.email, name: recipient.name }],
          subject: subject,
          htmlContent: personalizedBody
        })
      });

      if (response.ok) {
        results.sent++;
      } else {
        const errorData = await response.json();
        results.failed++;
        results.errors.push(`Failed for ${recipient.email}: ${JSON.stringify(errorData)}`);
      }
    } catch (e: any) {
      results.failed++;
      results.errors.push(`Error for ${recipient.email}: ${e.message}`);
    }
  }

  return res.status(200).json({
    success: true,
    sentCount: results.sent,
    failedCount: results.failed,
    errors: results.errors,
    batchId: Date.now().toString()
  });
}
