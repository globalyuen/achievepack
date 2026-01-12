import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    // Check environment variables
    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase config:', { hasUrl: !!supabaseUrl, hasKey: !!supabaseKey })
      return res.status(500).json({ success: false, error: 'Server configuration error' })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    const { orderId, permanent } = req.body || {}

    if (!orderId) {
      return res.status(400).json({ success: false, error: 'orderId is required' })
    }

    console.log('Delete order request:', { orderId, permanent })

    if (permanent) {
      // Permanent delete (from bin)
      const { error } = await supabase
        .from('orders')
        .delete()
        .eq('id', orderId)

      if (error) {
        console.error('Permanent delete error:', error)
        return res.status(500).json({ 
          success: false, 
          error: 'Failed to permanently delete order', 
          details: error.message 
        })
      }
      
      console.log(`Order ${orderId} permanently deleted`)
      return res.status(200).json({ success: true, action: 'permanently_deleted' })
    } else {
      // Soft delete - mark status as 'deleted'
      const { data, error } = await supabase
        .from('orders')
        .update({ 
          status: 'deleted',
          updated_at: new Date().toISOString()
        })
        .eq('id', orderId)
        .select('order_number')

      if (error) {
        console.error('Soft delete error:', error)
        return res.status(500).json({ 
          success: false, 
          error: 'Failed to delete order', 
          details: error.message 
        })
      }

      console.log(`Order ${orderId} marked as deleted`)
      return res.status(200).json({ 
        success: true, 
        action: 'moved_to_bin',
        orderNumber: data?.[0]?.order_number
      })
    }
  } catch (error: any) {
    console.error('Delete order error:', error)
    return res.status(500).json({ 
      success: false, 
      error: error?.message || 'Failed to delete order' 
    })
  }
}
