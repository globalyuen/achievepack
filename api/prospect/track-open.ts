import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    try {
        const id = parseInt(req.query.id as string)
        if (id && !isNaN(id)) {
            // Check if already marked as opened to avoid redundant updates
            const { data: prospect } = await supabase
                .from('prospect')
                .select('email_opened')
                .eq('id', id)
                .single()

            if (prospect && !prospect.email_opened) {
                await supabase
                    .from('prospect')
                    .update({ 
                        email_opened: true, 
                        email_opened_at: new Date().toISOString() 
                    })
                    .eq('id', id)
            }
        }
    } catch (error) {
        console.error('Track open error:', error)
    }

    // Always return a 1x1 transparent GIF
    const pixel = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64')
    
    res.setHeader('Content-Type', 'image/gif')
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
    res.setHeader('Pragma', 'no-cache')
    res.setHeader('Expires', '0')
    
    return res.status(200).send(pixel)
}
