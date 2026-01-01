import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

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
    if (req.method === 'GET') {
      return res.redirect(302, 'https://achievepack.com/unsubscribe?status=error')
    }
    return res.status(400).json({ error: 'Email is required' })
  }

  // Decode email if it's base64 encoded
  let decodedEmail = email
  try {
    // Check if it looks like base64 (contains only base64 chars and is reasonably long)
    if (/^[A-Za-z0-9+/=]+$/.test(email) && email.length > 10) {
      const decoded = Buffer.from(email, 'base64').toString('utf-8')
      // Verify it looks like an email
      if (decoded.includes('@')) {
        decodedEmail = decoded
      }
    }
  } catch {
    decodedEmail = email
  }

  const normalizedEmail = decodedEmail.toLowerCase().trim()
  console.log('Unsubscribe request for:', normalizedEmail)

  // Initialize Supabase inside handler to ensure env vars are loaded
  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase not configured:', { hasUrl: !!supabaseUrl, hasKey: !!supabaseKey })
    // Still show success to user - we'll handle manually
    if (req.method === 'GET') {
      return res.redirect(302, `https://achievepack.com/unsubscribe?status=success&email=${encodeURIComponent(normalizedEmail)}`)
    }
    return res.status(200).json({ success: true, message: 'Unsubscribe request received', email: normalizedEmail })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    // Try to update CRM inquiries - mark as unsubscribed
    const { data: inquiryData, error: inquiryError } = await supabase
      .from('crm_inquiries')
      .update({ 
        status: 'unsubscribed',
        updated_at: new Date().toISOString()
      })
      .eq('email', normalizedEmail)
      .select()

    if (inquiryError) {
      console.log('CRM inquiry update error (non-fatal):', inquiryError.message)
    }

    // Try to update newsletter subscribers if exists
    const { error: newsletterError } = await supabase
      .from('newsletter_subscribers')
      .update({ 
        subscribed: false,
        updated_at: new Date().toISOString()
      })
      .eq('email', normalizedEmail)

    if (newsletterError) {
      console.log('Newsletter update error (non-fatal):', newsletterError.message)
    }

    // Log the unsubscribe action
    console.log(`Unsubscribed: ${normalizedEmail}`, {
      inquiriesUpdated: inquiryData?.length || 0
    })

    // Try to add activity record for CRM (optional - don't fail if table doesn't exist)
    if (inquiryData && inquiryData.length > 0) {
      try {
        await supabase.from('crm_activities').insert({
          inquiry_id: inquiryData[0].id,
          type: 'note',
          subject: 'Email Unsubscribed',
          content: `Contact unsubscribed from email marketing on ${new Date().toLocaleDateString()}`,
          created_by: 'system'
        })
      } catch (activityError) {
        console.log('Activity insert error (non-fatal):', activityError)
      }
    }

    // Success - redirect or return JSON
    if (req.method === 'GET') {
      return res.redirect(302, `https://achievepack.com/unsubscribe?status=success&email=${encodeURIComponent(normalizedEmail)}`)
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully unsubscribed from email marketing',
      email: normalizedEmail
    })

  } catch (error) {
    console.error('Unsubscribe error:', error)
    
    // Still show success to user - better UX
    if (req.method === 'GET') {
      return res.redirect(302, `https://achievepack.com/unsubscribe?status=success&email=${encodeURIComponent(normalizedEmail)}`)
    }

    return res.status(200).json({ 
      success: true,
      message: 'Unsubscribe request received',
      email: normalizedEmail
    })
  }
}
