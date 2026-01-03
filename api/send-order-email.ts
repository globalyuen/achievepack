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

  const { orderNumber, customerEmail, customerName, items, totalAmount, shippingAddress, paymentConfirmed } = req.body
  const BREVO_API_KEY = process.env.BREVO_API_KEY
  const ADMIN_EMAIL = 'checkout@achievepack.com'

  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY not configured')
    return res.status(500).json({ error: 'Email service not configured' })
  }

  // Format items for email
  const itemsList = items?.map((item: any) => 
    `• ${item.name} - ${item.variant?.shape || ''} ${item.variant?.size || ''} x ${item.quantity} = $${item.totalPrice?.toFixed(2) || '0.00'}`
  ).join('<br>') || 'No items'

  // Format shipping address
  const addressText = shippingAddress 
    ? `${shippingAddress.firstName} ${shippingAddress.lastName}<br>
       ${shippingAddress.address}<br>
       ${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.zipCode}<br>
       ${shippingAddress.country}`
    : 'Not provided'

  // Email to Admin
  const paymentStatus = paymentConfirmed ? '✅ PAID via Stripe' : '⏳ Payment Pending'
  const emailToAdmin = {
    sender: { name: 'AchievePack Store', email: 'noreply@achievepack.com' },
    to: [{ email: ADMIN_EMAIL, name: 'Checkout' }],
    replyTo: { email: customerEmail || 'checkout@achievepack.com' },
    subject: `🛒 New Order: ${orderNumber} - ${paymentConfirmed ? 'PAID' : 'Pending'}`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .section { margin-bottom: 20px; }
          .label { font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; }
          .value { font-size: 16px; margin-top: 4px; }
          .total { font-size: 24px; color: #2563eb; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin:0;">🛒 New Order Received!</h1>
            <p style="margin:10px 0 0 0;">${paymentStatus}</p>
          </div>
          <div class="content">
            <div class="section">
              <div class="label">Order Number</div>
              <div class="value">${orderNumber}</div>
            </div>
            <div class="section">
              <div class="label">Customer</div>
              <div class="value">${customerName || 'N/A'}<br>${customerEmail}</div>
            </div>
            <div class="section">
              <div class="label">Total Amount</div>
              <div class="total">$${totalAmount?.toFixed(2) || '0.00'}</div>
            </div>
            <div class="section">
              <div class="label">Items</div>
              <div class="value">${itemsList}</div>
            </div>
            <div class="section">
              <div class="label">Shipping Address</div>
              <div class="value">${addressText}</div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `
  }

  // Email to Customer
  const emailToCustomer = {
    sender: { name: 'AchievePack', email: 'noreply@achievepack.com' },
    to: [{ email: customerEmail, name: customerName || 'Customer' }],
    subject: `✅ Order Confirmation: ${orderNumber}`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
          .order-number { background: #f3f4f6; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0; }
          .items { background: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0; }
          .total { font-size: 24px; color: #2563eb; font-weight: bold; text-align: center; margin: 20px 0; }
          .button { display: inline-block; background: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
          .footer { text-align: center; color: #6b7280; font-size: 14px; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin:0;">Thank You for Your Order!</h1>
          </div>
          <div class="content">
            <p>Hi ${customerName || 'there'},</p>
            <p>We've received your order and are getting it ready!</p>
            
            <div class="order-number">
              <div style="font-size: 12px; color: #6b7280; text-transform: uppercase;">Order Number</div>
              <div style="font-size: 20px; font-weight: bold;">${orderNumber}</div>
            </div>
            
            <div class="items">
              <div style="font-weight: bold; margin-bottom: 10px;">Order Summary</div>
              ${itemsList}
            </div>
            
            <div class="total">Total: $${totalAmount?.toFixed(2) || '0.00'}</div>
            
            <p style="text-align: center;">
              <a href="https://achievepack.com/dashboard" class="button">Track Your Order</a>
            </p>
            
            <div class="footer">
              <p>Questions? Reply to this email or contact us at ryan@achievepack.com</p>
              <p>© ${new Date().getFullYear()} AchievePack. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `
  }

  try {
    const results = await Promise.all([
      fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json'
        },
        body: JSON.stringify(emailToAdmin)
      }),
      fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json'
        },
        body: JSON.stringify(emailToCustomer)
      })
    ])

    const responses = await Promise.all(results.map(r => r.json().catch(() => ({}))))
    console.log('Email responses:', responses)

    return res.status(200).json({ success: true, message: 'Emails sent successfully' })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
