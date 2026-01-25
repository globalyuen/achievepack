import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

// Simulated search - in production, this would call SerpApi/Hunter
export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' })
    }

    try {
        const { query, sender = 'ryan' } = req.body

        if (!query) {
            return res.status(400).json({ success: false, error: 'Query is required' })
        }

        // Create search query record
        const { data: searchQuery, error: searchError } = await supabase
            .from('prospect_search_query')
            .insert({
                query,
                sender,
                status: 'completed',
                total_results: 0,
                emails_found: 0,
                emails_sent: 0
            })
            .select()
            .single()

        if (searchError) {
            console.error('Error creating search:', searchError)
            return res.status(500).json({ success: false, error: searchError.message })
        }

        // In production, you would call SerpApi here to get real businesses
        // For now, return the search ID so the frontend can proceed
        
        return res.status(200).json({
            success: true,
            search_id: searchQuery.id,
            message: 'Search created. Note: SerpApi integration pending.',
            redirect_url: `/results?search_id=${searchQuery.id}`
        })
    } catch (error) {
        console.error('Search error:', error)
        return res.status(500).json({ success: false, error: 'Failed to perform search' })
    }
}
