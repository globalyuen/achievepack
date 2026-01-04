import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers first
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(200).json({ success: false, error: 'Method not allowed' })
  }

  // Wrap everything in try-catch
  try {
    // Check environment variables first
    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY

    if (!supabaseUrl || !supabaseKey) {
      return res.status(200).json({ 
        success: false, 
        error: 'Server configuration error',
        debug: { hasUrl: !!supabaseUrl, hasServiceKey: !!supabaseKey }
      })
    }

    // Check request body
    if (!req.body) {
      return res.status(200).json({ success: false, error: 'Empty request body' })
    }

    const { userId, orderId, orderNumber, name, fileUrl, fileType, fileSize } = req.body

    if (!userId || !name || !fileUrl) {
      return res.status(200).json({ 
        success: false, 
        error: 'Missing required fields',
        received: { hasUserId: !!userId, hasName: !!name, hasFileUrl: !!fileUrl }
      })
    }

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Insert record
    const { data, error } = await supabase
      .from('artwork_files')
      .insert({
        user_id: userId,
        order_id: orderId || null,
        order_number: orderNumber || null,
        name: name,
        file_url: fileUrl,
        file_type: fileType || 'unknown',
        file_size: fileSize || 0,
        status: 'pending_review'
      })
      .select()

    if (error) {
      return res.status(200).json({ success: false, error: error.message })
    }

    return res.status(200).json({ success: true, artwork: data?.[0] })

  } catch (err: any) {
    console.error('API Error:', err)
    return res.status(200).json({ 
      success: false, 
      error: err?.message || 'Unknown error'
    })
  }
}
