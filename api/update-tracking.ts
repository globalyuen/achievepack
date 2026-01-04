import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase with service key to bypass RLS
const getSupabase = () => {
  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY
  
  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase configuration missing')
  }
  
  return createClient(supabaseUrl, supabaseKey)
}

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
      orderId,
      trackingNumber,
      carrier,
      trackingUrl,
      status = 'shipped'
    } = req.body

    if (!orderId) {
      return res.status(400).json({ error: 'orderId is required' })
    }

    const supabase = getSupabase()

    // First, check if carrier column exists by trying to get the order
    const { data: existingOrder, error: fetchError } = await supabase
      .from('orders')
      .select('*')
      .eq('id', orderId)
      .single()

    if (fetchError) {
      console.error('Fetch order error:', fetchError)
      return res.status(500).json({ error: 'Failed to fetch order', details: fetchError.message })
    }

    // Build update object based on what columns exist
    const updateData: Record<string, any> = {
      tracking_number: trackingNumber || null,
      tracking_url: trackingUrl || null,
      status: status,
      updated_at: new Date().toISOString()
    }

    // Only add carrier if the column exists in the existing order or if it's a new field
    // We'll try to update and handle any column errors
    if (carrier !== undefined) {
      updateData.carrier = carrier
    }

    const { data, error } = await supabase
      .from('orders')
      .update(updateData)
      .eq('id', orderId)
      .select()

    if (error) {
      // If carrier column doesn't exist, try without it
      if (error.message?.includes('carrier')) {
        console.log('Carrier column not found, updating without it')
        delete updateData.carrier
        
        const { data: retryData, error: retryError } = await supabase
          .from('orders')
          .update(updateData)
          .eq('id', orderId)
          .select()
        
        if (retryError) {
          console.error('Update tracking error (retry):', retryError)
          return res.status(500).json({ error: 'Failed to update tracking', details: retryError.message })
        }
        
        console.log(`Tracking updated for order ${orderId} (without carrier)`)
        return res.status(200).json({ success: true, order: retryData?.[0] })
      }
      
      console.error('Update tracking error:', error)
      return res.status(500).json({ error: 'Failed to update tracking', details: error.message })
    }

    console.log(`Tracking updated for order ${orderId}`)
    res.status(200).json({ success: true, order: data?.[0] })
  } catch (error: any) {
    console.error('Update tracking error:', error)
    res.status(500).json({ error: error.message || 'Failed to update tracking' })
  }
}
