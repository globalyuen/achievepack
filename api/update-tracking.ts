import type { VercelRequest, VercelResponse } from '@vercel/node'

// Use native fetch to call Supabase REST API (no external dependencies)
export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('=== UPDATE-TRACKING API CALLED ===')
  
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

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase config')
      return res.status(500).json({ success: false, error: 'Database configuration missing' })
    }

    const { 
      orderId,
      trackingNumber,
      carrier,
      trackingUrl,
      status = 'shipped'
    } = req.body

    console.log('Updating tracking for order:', orderId)

    if (!orderId) {
      return res.status(400).json({ success: false, error: 'orderId is required' })
    }

    // Build update data
    const updateData: Record<string, any> = {
      tracking_number: trackingNumber || null,
      tracking_url: trackingUrl || null,
      status: status,
      updated_at: new Date().toISOString()
    }

    if (carrier !== undefined) {
      updateData.carrier = carrier
    }

    console.log('Update data:', JSON.stringify(updateData))

    // Call Supabase REST API to update order
    const response = await fetch(`${supabaseUrl}/rest/v1/orders?id=eq.${orderId}`, {
      method: 'PATCH',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(updateData)
    })

    const responseText = await response.text()
    console.log('Supabase response status:', response.status)
    console.log('Supabase response:', responseText)

    if (!response.ok) {
      // If carrier column doesn't exist, try without it
      if (responseText.includes('carrier')) {
        console.log('Carrier column not found, retrying without it')
        delete updateData.carrier

        const retryResponse = await fetch(`${supabaseUrl}/rest/v1/orders?id=eq.${orderId}`, {
          method: 'PATCH',
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
          },
          body: JSON.stringify(updateData)
        })

        const retryText = await retryResponse.text()
        if (!retryResponse.ok) {
          console.error('Update tracking error (retry):', retryText)
          return res.status(500).json({ success: false, error: 'Failed to update tracking', details: retryText })
        }

        const retryData = retryText ? JSON.parse(retryText) : null
        console.log(`Tracking updated for order ${orderId} (without carrier)`)
        return res.status(200).json({ success: true, order: retryData?.[0] })
      }

      console.error('Update tracking error:', responseText)
      return res.status(500).json({ success: false, error: 'Failed to update tracking', details: responseText })
    }

    const data = responseText ? JSON.parse(responseText) : null
    console.log(`Tracking updated for order ${orderId}`)
    res.status(200).json({ success: true, order: data?.[0] })
  } catch (error: any) {
    console.error('Update tracking error:', error)
    res.status(500).json({ success: false, error: error.message || 'Failed to update tracking' })
  }
}
