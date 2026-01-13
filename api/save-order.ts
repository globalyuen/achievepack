import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase with service key to bypass RLS
const getSupabase = () => {
  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY
  
  console.log('Supabase config:', { 
    urlExists: !!supabaseUrl, 
    keyExists: !!supabaseKey,
    urlPrefix: supabaseUrl?.substring(0, 30)
  })
  
  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase config:', { supabaseUrl: !!supabaseUrl, supabaseKey: !!supabaseKey })
    throw new Error('Supabase configuration missing')
  }
  
  return createClient(supabaseUrl, supabaseKey)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('=== SAVE-ORDER API CALLED ===')
  console.log('Method:', req.method)
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    console.log('Request body:', JSON.stringify(req.body, null, 2))
    
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

    console.log('Parsed order:', { orderNumber, customerEmail, customerName, itemCount: items?.length, totalAmount })

    if (!orderNumber) {
      console.error('Missing order number')
      return res.status(400).json({ success: false, error: 'Order number is required' })
    }

    let supabase
    try {
      supabase = getSupabase()
      console.log('Supabase client created successfully')
    } catch (configError: any) {
      console.error('Supabase config error:', configError.message)
      return res.status(500).json({ success: false, error: 'Database configuration error: ' + configError.message })
    }

    // Insert order directly (simpler approach)
    const orderData = {
      order_number: orderNumber,
      user_id: userId || null,
      customer_email: customerEmail,
      customer_name: customerName,
      items: items || [],
      total_amount: totalAmount || 0,
      shipping_address: shippingAddress || {},
      status: status
    }

    console.log('Inserting order data:', JSON.stringify(orderData, null, 2))

    const { data, error } = await supabase
      .from('orders')
      .insert(orderData)
      .select()

    if (error) {
      console.error('Order insert error:', JSON.stringify(error, null, 2))
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to save order: ' + error.message,
        code: error.code,
        details: error.details
      })
    }

    console.log(`Order ${orderNumber} saved successfully:`, data?.[0]?.id)
    res.status(200).json({ success: true, order: data?.[0] })
  } catch (error: any) {
    console.error('Save order error:', error)
    res.status(500).json({ success: false, error: error.message || 'Failed to save order' })
  }
}
