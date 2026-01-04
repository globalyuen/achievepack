import type { VercelRequest, VercelResponse } from '@vercel/node'
// import { createClient } from '@supabase/supabase-js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')

  if (req.method === 'OPTIONS') return res.status(200).end()

  try {
    // 1. Test Env Vars
    const hasUrl = !!process.env.VITE_SUPABASE_URL || !!process.env.SUPABASE_URL
    const hasKey = !!process.env.SUPABASE_SERVICE_KEY

    // 2. Test Supabase Client Creation
    let clientStatus = 'not_attempted'
    try {
      const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || ''
      const key = process.env.SUPABASE_SERVICE_KEY || ''
      if (url && key) {
        // createClient(url, key)
        clientStatus = 'skipped_for_test'
      } else {
        clientStatus = 'missing_credentials'
      }
    } catch (e: any) {
      clientStatus = `failed: ${e.message}`
    }

    // 3. Return Debug Info immediately (bypass actual DB save for now)
    return res.status(200).json({
      status: 'debug_mode',
      env: { hasUrl, hasKey },
      supabaseClient: clientStatus,
      receivedBody: req.body ? 'yes' : 'no'
    })

  } catch (error: any) {
    return res.status(200).json({
      error: 'Top level catch',
      message: error.message
    })
  }
}
