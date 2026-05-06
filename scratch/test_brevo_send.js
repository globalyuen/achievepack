import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function sendBrevoEmail(to, subject, body, senderName, senderEmail) {
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) throw new Error('BREVO_API_KEY not configured');
    
    console.log(`Sending email to ${to} from ${senderEmail}...`);
    
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'api-key': BREVO_API_KEY,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            sender: { name: senderName, email: senderEmail },
            to: [{ email: to }],
            cc: [{ email: 'ryan@achievepack.com', name: 'Ryan Wong' }],
            subject,
            htmlContent: `<p>${body.replace(/\n/g, '<br>')}</p>`,
            textContent: body
        })
    });
    
    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Brevo API error: ${error}`);
    }
    
    return await response.json();
}

async function run() {
    try {
        const result = await sendBrevoEmail(
            'ryan@achievepack.com', // Send to self as test
            'Test Email from Antigravity',
            'This is a test email to verify Brevo connectivity and sender authorization.',
            'Ryan Wong',
            'ryan@pouch.eco'
        );
        console.log('Success:', result);
    } catch (err) {
        console.error('Error:', err.message);
    }
}

run();
