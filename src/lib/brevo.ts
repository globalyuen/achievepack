// Brevo (formerly Sendinblue) Email API Integration

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'

// Get API key from environment variable
const getApiKey = (): string => {
  return import.meta.env.VITE_BREVO_API_KEY || ''
}

export interface EmailRecipient {
  email: string
  name?: string
}

export interface EmailAttachment {
  url?: string
  content?: string // base64 encoded
  name: string
}

export interface SendEmailParams {
  sender: {
    email: string
    name: string
  }
  to: EmailRecipient[]
  cc?: EmailRecipient[]
  bcc?: EmailRecipient[]
  subject: string
  htmlContent: string
  textContent?: string
  replyTo?: {
    email: string
    name?: string
  }
  attachments?: EmailAttachment[]
  tags?: string[]
  params?: Record<string, any> // For template variables
}

export interface SendEmailResponse {
  success: boolean
  messageId?: string
  error?: string
}

/**
 * Send a transactional email via Brevo API
 */
export const sendEmail = async (params: SendEmailParams): Promise<SendEmailResponse> => {
  const apiKey = getApiKey()
  
  if (!apiKey) {
    return {
      success: false,
      error: 'Brevo API key not configured. Please add VITE_BREVO_API_KEY to your environment variables.'
    }
  }

  try {
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify(params)
    })

    if (!response.ok) {
      const errorData = await response.json()
      return {
        success: false,
        error: errorData.message || `API Error: ${response.status}`
      }
    }

    const data = await response.json()
    return {
      success: true,
      messageId: data.messageId
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }
  }
}

/**
 * Send email to multiple recipients (batch)
 */
export const sendBulkEmails = async (
  recipients: EmailRecipient[],
  subject: string,
  htmlContent: string,
  senderEmail: string = 'hello@achievepack.com',
  senderName: string = 'Achieve Pack'
): Promise<{ success: number; failed: number; errors: string[] }> => {
  const results = {
    success: 0,
    failed: 0,
    errors: [] as string[]
  }

  // Send emails in batches of 50 to avoid rate limits
  const batchSize = 50
  for (let i = 0; i < recipients.length; i += batchSize) {
    const batch = recipients.slice(i, i + batchSize)
    
    // Personalize content for each recipient
    const promises = batch.map(async (recipient) => {
      const personalizedContent = htmlContent.replace(/\{\{name\}\}/g, recipient.name || 'there')
      
      const result = await sendEmail({
        sender: { email: senderEmail, name: senderName },
        to: [recipient],
        subject,
        htmlContent: personalizedContent
      })

      if (result.success) {
        results.success++
      } else {
        results.failed++
        results.errors.push(`${recipient.email}: ${result.error}`)
      }
    })

    await Promise.all(promises)
    
    // Add small delay between batches to respect rate limits
    if (i + batchSize < recipients.length) {
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }

  return results
}

/**
 * Send a test email
 */
export const sendTestEmail = async (
  testEmail: string,
  subject: string,
  htmlContent: string,
  greeting: string = 'Hi Ryan',
  closing: string = 'Best regards,\nAchieve Pack Team'
): Promise<SendEmailResponse> => {
  // Build complete email HTML
  const fullHtmlContent = generateEmailTemplate(htmlContent, greeting, closing)
  
  return sendEmail({
    sender: {
      email: 'hello@achievepack.com',
      name: 'Achieve Pack'
    },
    to: [{
      email: testEmail,
      name: 'Ryan'
    }],
    subject,
    htmlContent: fullHtmlContent,
    replyTo: {
      email: 'ryan@achievepack.com',
      name: 'Ryan Wong'
    },
    tags: ['test-email']
  })
}

/**
 * Generate beautiful email HTML template
 */
export const generateEmailTemplate = (
  content: string,
  greeting: string,
  closing: string,
  featuredImage?: string,
  ctaLink?: string,
  ctaText?: string
): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Achieve Pack</title>
  <style>
    body { margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    .header { background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 24px 32px; }
    .header img { height: 32px; }
    .hero-image { width: 100%; height: auto; display: block; }
    .content { padding: 32px; color: #374151; line-height: 1.6; }
    .greeting { font-size: 18px; margin-bottom: 24px; }
    .main-content { font-size: 16px; }
    .main-content h2 { color: #111827; font-size: 22px; margin: 24px 0 12px; }
    .main-content p { margin: 0 0 16px; }
    .main-content ul { margin: 0 0 16px; padding-left: 24px; }
    .main-content li { margin-bottom: 8px; }
    .main-content blockquote { border-left: 4px solid #059669; padding-left: 16px; margin: 16px 0; font-style: italic; color: #6b7280; }
    .main-content a { color: #059669; text-decoration: underline; }
    .cta-button { display: inline-block; padding: 16px 32px; background-color: #059669; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 24px 0; }
    .closing { margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb; white-space: pre-line; }
    .footer { background-color: #f9fafb; padding: 32px; text-align: center; }
    .footer-logo { height: 24px; margin-bottom: 16px; }
    .footer-text { font-size: 12px; color: #6b7280; margin: 0 0 8px; }
    .footer-links { font-size: 12px; }
    .footer-links a { color: #059669; text-decoration: none; margin: 0 8px; }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <img src="https://achievepack.com/ap-logo-white.png" alt="Achieve Pack" />
    </div>
    
    ${featuredImage ? `
    <!-- Hero Image -->
    <img src="${featuredImage}" alt="" class="hero-image" />
    ` : ''}
    
    <!-- Content -->
    <div class="content">
      <p class="greeting">${greeting.replace(/\{\{name\}\}/g, '{{name}}')},</p>
      
      <div class="main-content">
        ${content}
      </div>
      
      ${ctaLink ? `
      <div style="text-align: center;">
        <a href="${ctaLink}" class="cta-button">${ctaText || 'Learn More'}</a>
      </div>
      ` : ''}
      
      <div class="closing">${closing}</div>
    </div>
    
    <!-- Footer -->
    <div class="footer">
      <img src="https://achievepack.com/ap-logo.png" alt="Achieve Pack" class="footer-logo" />
      <p class="footer-text">Sustainable Packaging Solutions for Modern Brands</p>
      <p class="footer-text">© 2025 Achieve Pack. All rights reserved.</p>
      <p class="footer-links">
        <a href="https://achievepack.com">Website</a>
        <span>•</span>
        <a href="{{unsubscribe_url}}">Unsubscribe</a>
      </p>
    </div>
  </div>
</body>
</html>
`
}
