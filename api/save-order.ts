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
      orderNumber,
      userId,
      customerEmail,
      customerName,
      items,
      totalAmount,
      shippingAddress,
      status = 'pending_payment'
    } = req.body

    if (!orderNumber) {
      return res.status(400).json({ error: 'Order number is required' })
    }

    const supabase = getSupabase()

    // Insert or update order
    const orderData = {
      order_number: orderNumber,
      user_id: userId || null,
      customer_email: customerEmail,
      customer_name: customerName,
      items: items || [],
      total_amount: totalAmount || 0,
      shipping_address: shippingAddress || {},
      status: status,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    // Try to upsert (insert or update if exists)
    const { data, error } = await supabase
      .from('orders')
      .upsert(orderData, { 
        onConflict: 'order_number',
        ignoreDuplicates: false
      })
      .select()

    if (error) {
      console.error('Order save error:', error)
      // Try insert without upsert
      const { data: insertData, error: insertError } = await supabase
        .from('orders')
        .insert(orderData)
        .select()
      
      if (insertError) {
        console.error('Order insert error:', insertError)
        return res.status(500).json({ error: 'Failed to save order', details: insertError.message })
      }
      
      console.log(`Order ${orderNumber} created successfully`)
      return res.status(200).json({ success: true, order: insertData?.[0] })
    }

    console.log(`Order ${orderNumber} saved successfully`)
    res.status(200).json({ success: true, order: data?.[0] })
  } catch (error: any) {
    console.error('Save order error:', error)
    res.status(500).json({ error: error.message || 'Failed to save order' })
  }
}
