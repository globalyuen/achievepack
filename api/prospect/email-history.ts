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
        const limit = parseInt(req.query.limit as string) || 100
        const offset = parseInt(req.query.offset as string) || 0
        const senderFilter = req.query.sender as string || ''

        // Build query
        let query = supabase
            .from('prospect')
            .select(`
                id,
                name,
                email,
                company,
                website,
                business_type,
                email_sent_at,
                email_opened,
                email_opened_at,
                email_clicked,
                email_clicked_at,
                sales_pitch,
                brevo_message_id,
                prospect_search_query!inner (
                    sender,
                    query
                )
            `)
            .eq('email_sent', true)
            .order('email_sent_at', { ascending: false })

        // Apply sender filter if specified
        if (senderFilter) {
            query = query.eq('prospect_search_query.sender', senderFilter)
        }

        // Get total count
        const { count } = await supabase
            .from('prospect')
            .select('*', { count: 'exact', head: true })
            .eq('email_sent', true)

        // Get paginated results
        const { data: prospects, error } = await query
            .range(offset, offset + limit - 1)

        if (error) {
            console.error('Error fetching email history:', error)
            return res.status(500).json({ success: false, error: error.message })
        }

        const results = (prospects || []).map((p: any) => ({
            id: p.id,
            name: p.name,
            email: p.email,
            company: p.company || p.name,
            website: p.website,
            business_type: p.business_type,
            sent_at: p.email_sent_at,
            sender: p.prospect_search_query?.sender || 'unknown',
            search_query: p.prospect_search_query?.query || null,
            email_opened: p.email_opened,
            email_opened_at: p.email_opened_at,
            email_clicked: p.email_clicked,
            email_clicked_at: p.email_clicked_at,
            sales_pitch: p.sales_pitch,
            brevo_message_id: p.brevo_message_id
        }))

        // Calculate stats
        const openedCount = results.filter((r: any) => r.email_opened).length
        const clickedCount = results.filter((r: any) => r.email_clicked).length

        return res.status(200).json({
            success: true,
            results,
            total: count || 0,
            limit,
            offset,
            stats: {
                total_sent: count || 0,
                opened: openedCount,
                clicked: clickedCount,
                open_rate: results.length > 0 ? Math.round(openedCount / results.length * 1000) / 10 : 0,
                click_rate: results.length > 0 ? Math.round(clickedCount / results.length * 1000) / 10 : 0
            }
        })
    } catch (error) {
        console.error('Email history error:', error)
        return res.status(500).json({ success: false, error: 'Failed to fetch email history' })
    }
}
