import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb'
    }
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
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  // Log environment check
  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY
  
  console.log('Environment check:', { 
    hasUrl: !!supabaseUrl, 
    hasKey: !!supabaseKey,
    urlPrefix: supabaseUrl?.substring(0, 20)
  })

  if (!supabaseUrl || !supabaseKey) {
    return res.status(500).json({ 
      success: false, 
      error: 'Database configuration missing',
      debug: { hasUrl: !!supabaseUrl, hasKey: !!supabaseKey }
    })
  }

  try {
    const body = req.body
    if (!body) {
      return res.status(400).json({ success: false, error: 'Empty request body' })
    }

    const { userId, orderId, orderNumber, fileName, fileData, fileType, fileSize, originalName } = body

    if (!userId || !fileData || !fileName) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields',
        debug: { hasUserId: !!userId, hasFileData: !!fileData, hasFileName: !!fileName }
      })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Decode base64
    const base64Data = fileData.replace(/^data:[^;]+;base64,/, '')
    const buffer = Buffer.from(base64Data, 'base64')
    console.log('File decoded, size:', buffer.length)

    // Try storage upload
    let fileUrl = ''
    try {
      const { error: uploadError } = await supabase.storage
        .from('artworks')
        .upload(fileName, buffer, {
          contentType: fileType || 'application/octet-stream',
          upsert: true
        })

      if (uploadError) {
        console.log('Storage upload failed:', uploadError.message)
      } else {
        const { data: urlData } = supabase.storage.from('artworks').getPublicUrl(fileName)
        fileUrl = urlData.publicUrl
        console.log('Storage upload success:', fileUrl)
      }
    } catch (storageErr: any) {
      console.log('Storage error:', storageErr.message)
    }

    // Insert record
    const { data, error } = await supabase
      .from('artwork_files')
      .insert({
        user_id: userId,
        order_id: orderId || null,
        order_number: orderNumber || null,
        name: originalName || fileName,
        file_url: fileUrl || `pending:${fileName}`,
        file_type: fileType || 'unknown',
        file_size: fileSize || buffer.length,
        status: 'pending_review'
      })
      .select()

    if (error) {
      console.error('DB insert error:', error)
      return res.status(500).json({ success: false, error: 'Database error', details: error.message })
    }

    console.log('Artwork saved:', data?.[0]?.id)
    return res.status(200).json({ success: true, artwork: data?.[0], fileUrl })

  } catch (error: any) {
    console.error('Handler error:', error)
    return res.status(500).json({ success: false, error: error.message || 'Unknown error' })
  }
}
