import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    // POST - Toggle automation status
    if (req.method === 'POST') {
        try {
            const { running } = req.body || {}
            
            if (typeof running !== 'boolean') {
                return res.status(400).json({ success: false, error: 'running must be boolean' })
            }
            
            // Upsert automation record
            const { error } = await supabase
                .from('prospect_automation')
                .upsert({ id: 1, is_running: running }, { onConflict: 'id' })
            
            if (error) {
                console.error('Error updating automation status:', error)
                return res.status(500).json({ success: false, error: error.message })
            }
            
            return res.status(200).json({ success: true, running })
        } catch (error) {
            console.error('Automation toggle error:', error)
            return res.status(500).json({ success: false, error: 'Failed to update automation' })
        }
    }

    // GET - Fetch automation status
    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, error: 'Method not allowed' })
    }

    try {
        const { data, error } = await supabase
            .from('prospect_automation')
            .select('is_running, last_run_at')
            .eq('id', 1)
            .single()

        if (error) {
            console.error('Error fetching automation status:', error)
            return res.status(200).json({ running: false, last_run: null })
        }

        return res.status(200).json({
            running: data?.is_running || false,
            last_run: data?.last_run_at || null
        })
    } catch (error) {
        console.error('Automation status error:', error)
        return res.status(200).json({ running: false, last_run: null })
    }
}
