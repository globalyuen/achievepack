/**
 * xAI Vision Analysis Utility for Artwork Files
 * Analyzes images using xAI's grok-2-vision model
 */

import { supabase } from './supabase'

export interface ArtworkAIAnalysis {
  title?: string
  description?: string
  alt?: string
  keywords?: string[]
  category?: string
  type?: string
  colors?: string[]
  content_detected?: string[]
  quality_score?: string
  recommendations?: string[]
  analyzed_at?: string
}

/**
 * Analyze artwork image with xAI Vision API
 * @param imageUrl - Public URL of the image to analyze
 * @param artworkId - ID of the artwork record to update
 * @returns Analysis result or null if failed
 */
export async function analyzeArtworkWithXAI(
  imageUrl: string,
  artworkId: string
): Promise<ArtworkAIAnalysis | null> {
  const apiKey = import.meta.env.VITE_XAI_API_KEY
  
  if (!apiKey) {
    console.warn('xAI API Key not configured. Skipping artwork analysis.')
    return null
  }
  
  // Only analyze image files
  const isImage = /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(imageUrl)
  if (!isImage) {
    console.log('Skipping non-image file:', imageUrl)
    return null
  }
  
  try {
    // Fetch and convert image to base64
    const imageResponse = await fetch(imageUrl)
    if (!imageResponse.ok) {
      console.error('Failed to fetch image:', imageUrl)
      return null
    }
    
    const blob = await imageResponse.blob()
    const base64 = await new Promise<string>((resolve) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result as string)
      reader.readAsDataURL(blob)
    })
    
    console.log('Analyzing artwork with xAI:', artworkId)
    
    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'grok-2-vision-1212',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: { url: base64 }
              },
              {
                type: 'text',
                text: `Analyze this artwork/design file and provide a JSON response with the following structure:
{
  "title": "Short descriptive title of the design (max 60 chars)",
  "description": "Detailed description of the artwork content, design elements, and intended use (100-200 words)",
  "alt": "SEO-friendly alt text for accessibility (max 125 chars)",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "category": "one of: logo, packaging_design, label, illustration, photo, product_mockup, branding, typography, pattern, other",
  "type": "one of: vector, raster, mixed, photo",
  "colors": ["primary color", "secondary color", "accent color"],
  "content_detected": ["list of main elements detected: text, logo, barcode, image, illustration, etc"],
  "quality_score": "high, medium, or low - based on resolution and clarity",
  "recommendations": ["any suggestions for improvement or notes for the design team"]
}

This is for a packaging company reviewing customer artwork. Focus on identifying:
- Design elements (logos, text, barcodes, images)
- Color palette
- Print-readiness indicators
- Any potential issues

Respond ONLY with valid JSON, no other text.`
              }
            ]
          }
        ],
        max_tokens: 1000
      })
    })
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error('xAI API error:', response.status, errorText)
      return null
    }
    
    const data = await response.json()
    const content = data.choices?.[0]?.message?.content
    
    if (!content) {
      console.error('No content in xAI response')
      return null
    }
    
    // Parse JSON response
    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      console.error('No valid JSON in response:', content)
      return null
    }
    
    const analysis: ArtworkAIAnalysis = JSON.parse(jsonMatch[0])
    analysis.analyzed_at = new Date().toISOString()
    
    console.log('xAI Analysis result:', analysis)
    
    // Save to database - try artwork_batch_items first (for batch system), then artwork_files
    const { error: batchError } = await supabase
      .from('artwork_batch_items')
      .update({
        ai_analysis: analysis,
        updated_at: new Date().toISOString()
      })
      .eq('id', artworkId)
    
    if (batchError) {
      // Try artwork_files table as fallback
      const { error: filesError } = await supabase
        .from('artwork_files')
        .update({
          ai_analysis: analysis,
          updated_at: new Date().toISOString()
        })
        .eq('id', artworkId)
      
      if (filesError) {
        console.error('Failed to save AI analysis to database:', filesError)
      } else {
        console.log('AI analysis saved to artwork_files for:', artworkId)
      }
    } else {
      console.log('AI analysis saved to artwork_batch_items for:', artworkId)
    }
    
    return analysis
    
  } catch (error) {
    console.error('xAI analysis failed:', error)
    return null
  }
}

/**
 * Check if artwork has been analyzed
 */
export function hasAIAnalysis(artwork: { ai_analysis?: ArtworkAIAnalysis | null }): boolean {
  return !!(artwork.ai_analysis && artwork.ai_analysis.analyzed_at)
}

/**
 * Get searchable text from AI analysis for filtering
 */
export function getAISearchableText(analysis: ArtworkAIAnalysis | null | undefined): string {
  if (!analysis) return ''
  
  const parts: string[] = []
  
  if (analysis.title) parts.push(analysis.title)
  if (analysis.description) parts.push(analysis.description)
  if (analysis.alt) parts.push(analysis.alt)
  if (analysis.category) parts.push(analysis.category)
  if (analysis.type) parts.push(analysis.type)
  if (analysis.keywords) parts.push(...analysis.keywords)
  if (analysis.colors) parts.push(...analysis.colors)
  if (analysis.content_detected) parts.push(...analysis.content_detected)
  if (analysis.quality_score) parts.push(analysis.quality_score)
  
  return parts.join(' ').toLowerCase()
}
