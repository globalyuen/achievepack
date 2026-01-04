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

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb'
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
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
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
      return res.status(400).json({ error: 'userId, fileData, and fileName are required' })
    }

    const supabase = getSupabase()

    // Decode base64 file data
    const base64Data = fileData.replace(/^data:[^;]+;base64,/, '')
    const buffer = Buffer.from(base64Data, 'base64')

    // Upload to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('artworks')
      .upload(fileName, buffer, {
        contentType: fileType || 'application/octet-stream',
        upsert: true
      })

    if (uploadError) {
      console.error('Storage upload error:', uploadError)
      return res.status(500).json({ error: 'Failed to upload file', details: uploadError.message })
    }

    // Get public URL
    const { data: urlData } = supabase.storage.from('artworks').getPublicUrl(fileName)

    // Insert artwork record
    const artworkData = {
      user_id: userId,
      order_id: orderId || null,
      order_number: orderNumber || null,
      name: originalName || fileName,
      file_url: urlData.publicUrl,
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
      return res.status(500).json({ error: 'Failed to save artwork record', details: error.message })
    }

    console.log(`Artwork ${originalName} uploaded for user ${userId}`)
    res.status(200).json({ 
      success: true, 
      artwork: data?.[0],
      fileUrl: urlData.publicUrl
    })
  } catch (error: any) {
    console.error('Upload artwork error:', error)
    res.status(500).json({ error: error.message || 'Failed to upload artwork' })
  }
}
