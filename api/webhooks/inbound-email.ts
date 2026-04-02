import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const payload = req.body
    if (payload?.type === 'webhook_verify') return res.status(200).json({ success: true })

    // Disabled per user request
    return res.status(200).json({ success: true, message: 'Email processing disabled by user' })
  } catch (err: any) {
    return res.status(200).json({ error: 'Webhook fail', details: err.message })
  }
}
