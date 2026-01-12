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

// Send order confirmation emails
async function sendOrderEmails(order: any) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://achievepack.com'
  
  try {
    console.log('Sending order emails for:', order.order_number)
    const response = await fetch(`${baseUrl}/api/send-order-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderNumber: order.order_number,
        customerEmail: order.customer_email,
        customerName: order.customer_name,
        items: order.items || [],
        totalAmount: order.total_amount,
        shippingAddress: order.shipping_address,
        paymentConfirmed: true
      })
    })
    
    const result = await response.json().catch(() => ({}))
    console.log('Email API response:', response.status, result)
    return response.ok
  } catch (error) {
    console.error('Failed to send order emails:', error)
    return false
  }
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
      sessionId,
      status = 'confirmed',
      paymentStatus = 'paid'
    } = req.body

    if (!orderNumber) {
      return res.status(400).json({ error: 'Order number is required' })
    }

    const supabase = getSupabase()

    // Update order status
    const { data, error } = await supabase
      .from('orders')
      .update({ 
        status: status,
        payment_status: paymentStatus,
        stripe_session_id: sessionId || null,
        updated_at: new Date().toISOString()
      })
      .eq('order_number', orderNumber)
      .select()

    if (error) {
      console.error('Order update error:', error)
      return res.status(500).json({ error: 'Failed to update order', details: error.message })
    }

    if (!data || data.length === 0) {
      console.log(`Order ${orderNumber} not found for update`)
      return res.status(404).json({ error: 'Order not found' })
    }

    console.log(`Order ${orderNumber} updated to ${status}`)
    
    // Send confirmation emails when payment is confirmed
    if (paymentStatus === 'paid' && data[0]) {
      console.log('Payment confirmed, sending order emails...')
      await sendOrderEmails(data[0])
    }
    
    res.status(200).json({ success: true, order: data[0] })
  } catch (error: any) {
    console.error('Update order error:', error)
    res.status(500).json({ error: error.message || 'Failed to update order' })
  }
}
