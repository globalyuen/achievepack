import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

// Minimal save-artwork API - only validates and inserts
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.json({ success: false, error: 'POST only' })

  // Validate env
  const url = process.env.VITE_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_KEY
  if (!url || !key) {
    return res.json({ success: false, error: 'Config missing' })
  }

  // Validate body
  const { userId, name, fileUrl, orderId, orderNumber, fileType, fileSize } = req.body || {}
  if (!userId || !name || !fileUrl) {
    return res.json({ success: false, error: 'Missing fields' })
  }

  // Insert
  const supabase = createClient(url, key)
  const { data, error } = await supabase
    .from('artwork_files')
    .insert({
      user_id: userId,
      order_id: orderId || null,
      order_number: orderNumber || null,
      name,
      file_url: fileUrl,
      file_type: fileType || 'unknown',
      file_size: fileSize || 0,
      status: 'pending_review'
    })
    .select()

  if (error) {
    return res.json({ success: false, error: error.message })
  }

  return res.json({ success: true, artwork: data?.[0] })
}
