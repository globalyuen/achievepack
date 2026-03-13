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

    const { id, url } = req.query
    const prospectId = parseInt(id as string)
    const targetUrl = typeof url === 'string' && url ? decodeURIComponent(url) : 'https://pouch.eco'

    try {
        if (prospectId && !isNaN(prospectId)) {
            const { data: prospect } = await supabase
                .from('prospect')
                .select('email_clicked')
                .eq('id', prospectId)
                .single()

            if (prospect && !prospect.email_clicked) {
                await supabase
                    .from('prospect')
                    .update({ 
                        email_clicked: true, 
                        email_clicked_at: new Date().toISOString() 
                    })
                    .eq('id', prospectId)
            }
        }
    } catch (error) {
        console.error('Track click error:', error)
    }

    // Redirect to the target URL
    return res.redirect(302, targetUrl)
}
