import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' })
    }

    try {
        const { error } = await supabase
            .from('prospect_automation')
            .update({ is_running: false, updated_at: new Date().toISOString() })
            .eq('id', 1)

        if (error) {
            console.error('Error stopping automation:', error)
            return res.status(500).json({ success: false, error: error.message })
        }

        return res.status(200).json({
            success: true,
            message: 'Automation stopped'
        })
    } catch (error) {
        console.error('Stop automation error:', error)
        return res.status(500).json({ success: false, error: 'Failed to stop automation' })
    }
}
