// Brevo Email API - Uses server-side API endpoint

const API_ENDPOINT = '/api/send-campaign'

export interface EmailRecipient {
  email: string
  name?: string
}

export interface SendEmailResponse {
  success: boolean
  messageId?: string
  error?: string
  sent?: number
  failed?: number
  errors?: string[]
}

/**
 * Send a test email via server API
 */
export const sendTestEmail = async (
  testEmail: string,
  subject: string,
  htmlContent: string,
  greeting: string = 'Hi Ryan',
  closing: string = 'Best regards,\nAchieve Pack Team'
): Promise<SendEmailResponse> => {
  const fullHtmlContent = generateEmailTemplate(htmlContent, greeting, closing)
  
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject,
        htmlContent: fullHtmlContent,
        testEmail
      })
    })
    
    const data = await response.json()
    
    if (data.success) {
      return { success: true, messageId: data.messageId }
    } else {
      return { success: false, error: data.error }
    }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

/**
 * Send bulk emails via server API
 */
export const sendBulkEmails = async (
  recipients: EmailRecipient[],
  subject: string,
  htmlContent: string
): Promise<{ success: number; failed: number; errors: string[] }> => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        recipients,
        subject,
        htmlContent
      })
    })
    
    const data = await response.json()
    
    return {
      success: data.sent || 0,
      failed: data.failed || 0,
      errors: data.errors || []
    }
  } catch (error) {
    return {
      success: 0,
      failed: recipients.length,
      errors: [error instanceof Error ? error.message : 'Unknown error']
    }
  }
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
