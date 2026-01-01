import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Get email from query params (GET) or body (POST)
  const email = req.method === 'GET' 
    ? req.query.email as string 
    : req.body?.email

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  // Decode email if it's base64 encoded
  let decodedEmail = email
  try {
    // Check if it looks like base64
    if (/^[A-Za-z0-9+/=]+$/.test(email) && email.length > 20) {
      decodedEmail = Buffer.from(email, 'base64').toString('utf-8')
    }
  } catch {
    decodedEmail = email
  }

  const normalizedEmail = decodedEmail.toLowerCase().trim()

  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase not configured')
    return res.status(500).json({ error: 'Database not configured' })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    // Update CRM inquiries - mark as unsubscribed
    const { data: inquiryData, error: inquiryError } = await supabase
      .from('crm_inquiries')
      .update({ 
        status: 'unsubscribed',
        updated_at: new Date().toISOString()
      })
      .eq('email', normalizedEmail)
      .select()

    // Also update newsletter subscribers if exists
    const { error: newsletterError } = await supabase
      .from('newsletter_subscribers')
      .update({ 
        subscribed: false,
        updated_at: new Date().toISOString()
      })
      .eq('email', normalizedEmail)

    // Log the unsubscribe action
    console.log(`Unsubscribed: ${normalizedEmail}`, {
      inquiriesUpdated: inquiryData?.length || 0,
      inquiryError: inquiryError?.message,
      newsletterError: newsletterError?.message
    })

    // Add activity record for CRM
    if (inquiryData && inquiryData.length > 0) {
      await supabase.from('crm_activities').insert({
        inquiry_id: inquiryData[0].id,
        type: 'note',
        subject: 'Email Unsubscribed',
        content: `Contact unsubscribed from email marketing on ${new Date().toLocaleDateString()}`,
        created_by: 'system'
      })
    }

    // For GET requests, redirect to unsubscribe confirmation page
    if (req.method === 'GET') {
      const confirmationUrl = `https://achievepack.com/unsubscribe?status=success&email=${encodeURIComponent(normalizedEmail)}`
      return res.redirect(302, confirmationUrl)
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully unsubscribed from email marketing',
      email: normalizedEmail
    })

  } catch (error) {
    console.error('Unsubscribe error:', error)
    
    // For GET requests, redirect to error page
    if (req.method === 'GET') {
      const errorUrl = `https://achievepack.com/unsubscribe?status=error`
      return res.redirect(302, errorUrl)
    }

    return res.status(500).json({ 
      error: error instanceof Error ? error.message : 'Failed to unsubscribe' 
    })
  }
}
