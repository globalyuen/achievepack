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
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
        console.error('BREVO_API_KEY not configured');
        return res.status(500).json({ error: 'Email service not configured' });
    }
    try {
        const { recipients, subject, htmlContent, testEmail } = req.body;
        if (!subject || !htmlContent) {
            return res.status(400).json({ error: 'Missing subject or content' });
        }
        const results = {
            success: 0,
            failed: 0,
            errors: [],
            messageIds: []
        };
        // If test email, only send to that address
        const targetRecipients = testEmail
            ? [{ email: testEmail, name: 'Test' }]
            : recipients;
        if (!targetRecipients || targetRecipients.length === 0) {
            return res.status(400).json({ error: 'No recipients provided' });
        }
        // Send emails
        for (const recipient of targetRecipients) {
            try {
                // Personalize content - replace name and email placeholders
                const encodedEmail = Buffer.from(recipient.email).toString('base64');
                const recipientName = recipient.name || 'there';
                const personalizedHtml = htmlContent
                    .replace(/\{\{name\}\}/g, recipientName)
                    .replace(/\{\{email_encoded\}\}/g, encodedEmail);
                // Personalize subject line with recipient name
                const personalizedSubject = subject.replace(/\{\{name\}\}/g, recipientName);
                const response = await fetch('https://api.brevo.com/v3/smtp/email', {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'api-key': BREVO_API_KEY,
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        sender: {
                            email: 'hello@achievepack.com',
                            name: 'Achieve Pack'
                        },
                        to: [{ email: recipient.email, name: recipient.name }],
                        subject: personalizedSubject,
                        htmlContent: personalizedHtml,
                        replyTo: {
                            email: 'ryan@achievepack.com',
                            name: 'Ryan Wong'
                        }
                    })
                });
                if (response.ok) {
                    const data = await response.json();
                    results.success++;
                    if (data.messageId) {
                        results.messageIds.push(data.messageId);
                    }
                }
                else {
                    const errorData = await response.json();
                    results.failed++;
                    results.errors.push(`${recipient.email}: ${errorData.message || 'Unknown error'}`);
                }
            }
            catch (error) {
                results.failed++;
                results.errors.push(`${recipient.email}: ${error instanceof Error ? error.message : 'Unknown error'}`);
            }
            // Small delay between emails to respect rate limits
            if (targetRecipients.length > 1) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }
        return res.status(200).json({
            success: true,
            sent: results.success,
            failed: results.failed,
            errors: results.errors.slice(0, 10),
            messageId: results.messageIds[0] // For test email
        });
    }
    catch (error) {
        console.error('Campaign send error:', error);
        return res.status(500).json({
            error: error instanceof Error ? error.message : 'Failed to send campaign'
        });
    }
}
