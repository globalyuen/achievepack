import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

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
        const { data: batch } = req.body // Array of { email, openedAt }
        if (!Array.isArray(batch) || batch.length === 0) {
            return res.status(400).json({ success: false, error: 'Invalid batch data' })
        }

        const emails = batch.map(item => item.email)
        console.log(`[Import] Processing ${emails.length} opened emails with custom dates...`)
        
        const { data: searchQuery } = await supabase
            .from('prospect_search_query')
            .select('id')
            .eq('status', 'csv_import')
            .maybeSingle()
            
        let searchId = searchQuery?.id
        if (!searchId) {
            const { data: newQuery } = await supabase
                .from('prospect_search_query')
                .insert({ query: 'CSV Opened Import', sender: 'system', status: 'csv_import' })
                .select().single()
            searchId = newQuery?.id
        }

        // Check which emails already exist
        const { data: existing } = await supabase
            .from('prospect')
            .select('id, email')
            .in('email', emails)
        
        const existingMap = new Map(existing?.map(p => [p.email, p.id]) || [])
        let imported = 0
        
        // 1. Update existing prospects (One by one in the batch to handle individual dates)
        // Optimization: Use a single query if all dates were the same, but here they differ
        await Promise.all(batch.filter(item => existingMap.has(item.email)).map(item => 
            supabase
                .from('prospect')
                .update({ 
                    email_opened: true, 
                    email_opened_at: item.openedAt || new Date().toISOString(),
                    // Also update sent_at to match opened_at if it's missing or after
                    email_sent_at: item.openedAt || new Date().toISOString()
                })
                .eq('id', existingMap.get(item.email))
        ))
        imported += existingMap.size

        // 2. Insert new prospects
        const newItems = batch.filter(item => !existingMap.has(item.email))
        if (newItems.length > 0) {
            const toInsert = newItems.map(item => ({
                search_query_id: searchId,
                name: item.email.split('@')[0],
                company: item.email.split('@')[1]?.split('.')[0] || 'Unknown',
                email: item.email,
                email_sent: true,
                email_sent_at: item.openedAt || new Date().toISOString(),
                email_opened: true,
                email_opened_at: item.openedAt || new Date().toISOString(),
                business_type: 'Warm Lead (Imported)'
            }))

            const { error: insErr } = await supabase.from('prospect').insert(toInsert)
            if (!insErr) imported += toInsert.length
        }

        return res.status(200).json({
            success: true,
            imported,
            total_processed: emails.length
        })

    } catch (error: any) {
        console.error('[Import] CSV Import error:', error)
        return res.status(500).json({ success: false, error: error.message })
    }
}
