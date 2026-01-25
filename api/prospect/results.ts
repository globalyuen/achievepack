import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, error: 'Method not allowed' })
    }

    try {
        const { id } = req.query
        
        if (!id) {
            return res.status(400).json({ success: false, error: 'Search ID required' })
        }

        const { data: prospects, error } = await supabase
            .from('prospect')
            .select('*')
            .eq('search_query_id', id)
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error fetching results:', error)
            return res.status(500).json({ success: false, error: error.message })
        }

        return res.status(200).json({
            success: true,
            results: prospects || []
        })
    } catch (error) {
        console.error('Results fetch error:', error)
        return res.status(500).json({ success: false, error: 'Failed to fetch results' })
    }
}
