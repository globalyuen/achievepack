import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase with service key to bypass RLS
const getSupabase = () => {
  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY
  
  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase config missing:', { url: !!supabaseUrl, key: !!supabaseKey })
    throw new Error('Supabase configuration missing')
  }
  
  return createClient(supabaseUrl, supabaseKey)
}

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

  try {
    // Check if body exists
    if (!req.body) {
      return res.status(400).json({ success: false, error: 'Request body is empty' })
    }

    const { 
      userId,
      orderId,
      orderNumber,
      fileName,
      fileData, // base64 encoded file data
      fileType,
      fileSize,
      originalName
    } = req.body

    if (!userId || !fileData || !fileName) {
      return res.status(400).json({ success: false, error: 'userId, fileData, and fileName are required' })
    }

    let supabase
    try {
      supabase = getSupabase()
    } catch (configError: any) {
      console.error('Supabase init error:', configError)
      return res.status(500).json({ success: false, error: 'Database configuration error' })
    }

    // Decode base64 file data
    let buffer: Buffer
    try {
      const base64Data = fileData.replace(/^data:[^;]+;base64,/, '')
      buffer = Buffer.from(base64Data, 'base64')
    } catch (decodeError: any) {
      console.error('Base64 decode error:', decodeError)
      return res.status(400).json({ success: false, error: 'Invalid file data format' })
    }

    let fileUrl = ''
    
    // Try to upload to Supabase Storage (but don't fail if bucket doesn't exist)
    try {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('artworks')
        .upload(fileName, buffer, {
          contentType: fileType || 'application/octet-stream',
          upsert: true
        })

      if (uploadError) {
        console.warn('Storage upload warning:', uploadError.message)
        // If bucket doesn't exist, continue without storage
        if (!uploadError.message.includes('Bucket not found')) {
          // For other errors, still try to continue
          console.error('Storage upload error (non-fatal):', uploadError)
        }
      } else {
        // Get public URL only if upload succeeded
        const { data: urlData } = supabase.storage.from('artworks').getPublicUrl(fileName)
        fileUrl = urlData.publicUrl
      }
    } catch (storageError: any) {
      console.warn('Storage error (non-fatal):', storageError.message)
      // Continue without storage URL
    }

    // Insert artwork record
    const artworkData = {
      user_id: userId,
      order_id: orderId || null,
      order_number: orderNumber || null,
      name: originalName || fileName,
      file_url: fileUrl || `pending-upload:${fileName}`,
      file_type: fileType || 'unknown',
      file_size: fileSize || buffer.length,
      status: 'pending_review',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    const { data, error } = await supabase
      .from('artwork_files')
      .insert(artworkData)
      .select()

    if (error) {
      console.error('Artwork record save error:', error)
      return res.status(500).json({ success: false, error: 'Failed to save artwork record', details: error.message })
    }

    console.log(`Artwork ${originalName} uploaded for user ${userId}`)
    return res.status(200).json({ 
      success: true, 
      artwork: data?.[0],
      fileUrl: fileUrl || null
    })
  } catch (error: any) {
    console.error('Upload artwork error:', error)
    return res.status(500).json({ success: false, error: error.message || 'Failed to upload artwork' })
  }
}
