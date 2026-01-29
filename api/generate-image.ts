import type { VercelRequest, VercelResponse } from '@vercel/node'

// Gemini API Key
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyDT-UPqJroRFexHQoOWLtHih3DRm8j1sME'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { prompt, size = '1024x1024', model = 'imagen-3.0-generate-001' } = req.body

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' })
    }

    console.log('Generating image with prompt:', prompt.substring(0, 100))

    // Parse size for aspect ratio
    const [width, height] = size.split('x').map(Number)
    let aspectRatio = '1:1'
    if (width > height) aspectRatio = '16:9'
    else if (height > width) aspectRatio = '9:16'

    // Call Gemini Imagen API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:predict?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          instances: [{ prompt }],
          parameters: {
            sampleCount: 1,
            aspectRatio,
            negativePrompt: 'blurry, low quality, distorted, ugly, bad anatomy, watermark, text'
          }
        })
      }
    )

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Gemini API error:', errorData)
      
      // If Imagen fails, try Gemini 2.0 Flash Image Generation
      console.log('Trying Gemini 2.0 Flash Image Generation...')
      
      const flashResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: `Generate an image: ${prompt}` }]
            }],
            generationConfig: {
              temperature: 1.0,
              maxOutputTokens: 8192
            }
          })
        }
      )

      if (!flashResponse.ok) {
        const flashError = await flashResponse.json().catch(() => ({})) as any
        console.error('Gemini Flash error:', flashError)
        return res.status(500).json({ 
          error: flashError.error?.message || 'Failed to generate image',
          details: 'Both Imagen and Flash models failed'
        })
      }

      const flashData = await flashResponse.json() as any
      
      // Extract image from Flash response
      if (flashData.candidates?.[0]?.content?.parts) {
        for (const part of flashData.candidates[0].content.parts) {
          if (part.inlineData) {
            return res.status(200).json({
              data: [{
                b64_json: part.inlineData.data,
                model: 'gemini-2.0-flash-exp-image-generation'
              }]
            })
          }
        }
      }

      return res.status(500).json({ error: 'No image in Flash response' })
    }

    const data = await response.json() as any

    if (data.predictions && data.predictions.length > 0) {
      const images = data.predictions.map((pred: any) => ({
        b64_json: pred.bytesBase64Encoded,
        model
      }))

      return res.status(200).json({ data: images })
    }

    return res.status(500).json({ error: 'No images generated' })

  } catch (error: any) {
    console.error('Image generation error:', error)
    return res.status(500).json({ 
      error: error.message || 'Internal server error',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    })
  }
}
