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
 * Convert relative image URLs to absolute URLs
 */
const convertToAbsoluteUrls = (html: string): string => {
  const baseUrl = 'https://achievepack.com'
  
  // Convert src="/... to src="https://achievepack.com/...
  return html
    .replace(/src="\//g, `src="${baseUrl}/`)
    .replace(/src='\//g, `src='${baseUrl}/`)
    .replace(/href="\//g, `href="${baseUrl}/`)
    .replace(/href='\//g, `href='${baseUrl}/`)
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
  // Convert relative URLs in content to absolute
  const absoluteContent = convertToAbsoluteUrls(content)
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Achieve Pack x Pouch.eco</title>
  <style>
    body { margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    .header { background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 24px 32px; }
    .header-logos { display: flex; align-items: center; justify-content: center; gap: 16px; }
    .header-logos img { height: 32px; }
    .header-divider { color: rgba(255,255,255,0.5); font-size: 24px; font-weight: 300; }
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
    .main-content img { max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0; }
    .cta-button { display: inline-block; padding: 16px 32px; background-color: #059669; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 24px 0; }
    .closing { margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb; white-space: pre-line; }
    .footer { background-color: #f9fafb; padding: 32px; text-align: center; }
    .footer-logos { display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 16px; }
    .footer-logos img { height: 24px; }
    .footer-text { font-size: 12px; color: #6b7280; margin: 0 0 8px; }
    .footer-links { font-size: 12px; }
    .footer-links a { color: #059669; text-decoration: none; margin: 0 8px; }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header with Co-Branding -->
    <div class="header">
      <div class="header-logos">
        <img src="https://achievepack.com/ap-logo-white.png" alt="Achieve Pack" style="height: 32px;" />
        <span class="header-divider">×</span>
        <img src="https://achievepack.com/eco-pouch-logo-white.png" alt="Pouch.eco" style="height: 32px;" />
      </div>
    </div>
    
    ${featuredImage ? `
    <!-- Hero Image -->
    <img src="${featuredImage}" alt="" class="hero-image" />
    ` : ''}
    
    <!-- Content -->
    <div class="content">
      <p class="greeting">${greeting.replace(/\{\{name\}\}/g, '{{name}}')},</p>
      
      <div class="main-content">
        ${absoluteContent}
      </div>
      
      ${ctaLink ? `
      <div style="text-align: center;">
        <a href="${ctaLink}" class="cta-button">${ctaText || 'Learn More'}</a>
      </div>
      ` : ''}
      
      <div class="closing">${closing}</div>
    </div>
    
    <!-- Footer with Co-Branding -->
    <div class="footer">
      <div class="footer-logos">
        <img src="https://achievepack.com/ap-logo.png" alt="Achieve Pack" style="height: 24px;" />
        <span style="color: #9ca3af;">×</span>
        <img src="https://achievepack.com/eco-pouch-logo.png" alt="Pouch.eco" style="height: 24px;" />
      </div>
      <p class="footer-text">Sustainable Packaging Solutions for Modern Brands</p>
      <p class="footer-text">© 2025 Achieve Pack × Pouch.eco. All rights reserved.</p>
      <p class="footer-text" style="font-size: 10px; color: #9ca3af; margin-top: 12px;">
        You're receiving this email because you previously inquired about sustainable packaging at achievepack.com or pouch.eco.
      </p>
      <p class="footer-links">
        <a href="https://achievepack.com">achievepack.com</a>
        <span>•</span>
        <a href="https://pouch.eco">pouch.eco</a>
        <span>•</span>
        <a href="https://achievepack.com/unsubscribe?email={{email_encoded}}">Unsubscribe</a>
      </p>
    </div>
  </div>
</body>
</html>
`
}
