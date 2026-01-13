import type { VercelRequest, VercelResponse } from '@vercel/node'

// Use native fetch to call Supabase REST API (no external dependencies)
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
    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY

    console.log('Supabase config:', { 
      urlExists: !!supabaseUrl, 
      keyExists: !!supabaseKey
    })

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase config')
      return res.status(500).json({ success: false, error: 'Database configuration missing' })
    }

    console.log('Request body:', JSON.stringify(req.body, null, 2))
    
    const { 
      orderNumber,
      userId,
      customerEmail,
      customerName,
      items,
      totalAmount,
      shippingAddress,
      status = 'pending'
    } = req.body

    console.log('Parsed order:', { orderNumber, customerEmail, customerName, itemCount: items?.length, totalAmount })

    if (!orderNumber) {
      console.error('Missing order number')
      return res.status(400).json({ success: false, error: 'Order number is required' })
    }

    // Prepare order data
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

    console.log('Inserting order via REST API...')

    // Call Supabase REST API directly using fetch
    const response = await fetch(`${supabaseUrl}/rest/v1/orders`, {
      method: 'POST',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(orderData)
    })

    const responseText = await response.text()
    console.log('Supabase response status:', response.status)
    console.log('Supabase response:', responseText)

    if (!response.ok) {
      console.error('Order insert error:', responseText)
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to save order',
        details: responseText
      })
    }

    const data = responseText ? JSON.parse(responseText) : null
    console.log(`Order ${orderNumber} saved successfully:`, data?.[0]?.id)
    
    res.status(200).json({ success: true, order: data?.[0] })
  } catch (error: any) {
    console.error('Save order error:', error)
    res.status(500).json({ success: false, error: error.message || 'Failed to save order' })
  }
}
