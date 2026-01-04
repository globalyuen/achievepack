import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  try {
    if (req.method !== 'POST') {
      return res.status(200).json({ success: false, error: 'POST only' })
    }

    const url = process.env.VITE_SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_KEY
    
    if (!url || !key) {
      return res.status(200).json({ success: false, error: 'Server config missing' })
    }

    const body = req.body || {}
    const { userId, name, fileUrl, orderId, orderNumber, fileType, fileSize } = body
    
    if (!userId || !name || !fileUrl) {
      return res.status(200).json({ success: false, error: 'Missing required fields' })
    }

    const supabase = createClient(url, key)
    
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
    console.error('save-artwork error:', err)
    return res.status(200).json({ 
      success: false, 
      error: err?.message || 'Unknown error'
    })
  }
}
