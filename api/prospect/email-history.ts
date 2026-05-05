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

        // 1. Get TOTAL count and GLOBAL stats from the entire database
        const { data: globalStats, error: statsError } = await supabase
            .from('prospect')
            .select('email_opened, email_clicked', { count: 'exact' })
            .eq('email_sent', true)

        if (statsError) throw statsError

        const totalSent = globalStats?.length || 0
        const totalOpened = globalStats?.filter(p => p.email_opened).length || 0
        const totalClicked = globalStats?.filter(p => p.email_clicked).length || 0

        // 2. Build paginated query for results
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

        // Get paginated results
        const { data: prospects, error: fetchError } = await query
            .range(offset, offset + limit - 1)

        if (fetchError) {
            console.error('Error fetching email history:', fetchError)
            return res.status(500).json({ success: false, error: fetchError.message })
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

        return res.status(200).json({
            success: true,
            results,
            total: totalSent,
            limit,
            offset,
            stats: {
                total_sent: totalSent,
                opened: totalOpened,
                clicked: totalClicked,
                open_rate: totalSent > 0 ? Math.round(totalOpened / totalSent * 1000) / 10 : 0,
                click_rate: totalSent > 0 ? Math.round(totalClicked / totalSent * 1000) / 10 : 0
            }
        })
    } catch (error: any) {
        console.error('Email history error:', error)
        return res.status(500).json({ success: false, error: error.message || 'Failed to fetch email history' })
    }
}
