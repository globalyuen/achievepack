import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const {
      userId,
      orderId,
      orderNumber,
      name,
      fileUrl,
      fileType,
      fileSize,
      status = 'pending_review'
    } = req.body

    if (!userId || !name || !fileUrl) {
      return res.status(400).json({ error: 'userId, name, and fileUrl are required' })
    }

    // Initialize Supabase inside try block
    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY

    // Debug log (will appear in Vercel logs)
    console.log('Init Supabase:', { hasUrl: !!supabaseUrl, hasKey: !!supabaseKey })

    if (!supabaseUrl || !supabaseKey) {
      throw new Error(`Supabase config missing. URL: ${!!supabaseUrl}, Key: ${!!supabaseKey}`)
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Insert artwork record
    const artworkData = {
      user_id: userId,
      order_id: orderId || null,
      order_number: orderNumber || null,
      name: name,
      file_url: fileUrl,
      file_type: fileType || 'unknown',
      file_size: fileSize || 0,
      status: status,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    const { data, error } = await supabase
      .from('artwork_files')
      .insert(artworkData)
      .select()

    if (error) {
      console.error('Artwork save error:', error)
      return res.status(200).json({
        success: false,
        error: error.message,
        details: error
      })
    }

    console.log(`Artwork ${name} saved for user ${userId}`)
    res.status(200).json({ success: true, artwork: data?.[0] })

  } catch (error: any) {
    console.error('Save artwork FATAL error:', error)
    // Return 200 with JSON to prevent 500 HTML response
    res.status(200).json({
      success: false,
      error: error.message || 'Failed to save artwork',
      stack: error.stack,
      envDebug: {
        hasUrl: !!(process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL),
        hasKey: !!(process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY)
      }
    })
  }
}
