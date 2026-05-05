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
        const { emails } = req.body
        if (!Array.isArray(emails) || emails.length === 0) {
            return res.status(400).json({ success: false, error: 'Invalid emails list' })
        }

        console.log(`[Import] Processing ${emails.length} opened emails...`)
        
        // Find or create the sync query record for tracking imports
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
        
        const existingEmails = new Set(existing?.map(p => p.email) || [])
        const existingIds = existing?.map(p => p.id) || []

        let imported = 0
        
        // 1. Update existing prospects as "Opened"
        if (existingIds.length > 0) {
            const { error: updErr } = await supabase
                .from('prospect')
                .update({ email_opened: true, email_opened_at: new Date().toISOString() })
                .in('id', existingIds)
            
            if (!updErr) imported += existingIds.length
        }

        // 2. Insert new prospects for emails not in database
        const newEmails = emails.filter(e => !existingEmails.has(e))
        if (newEmails.length > 0) {
            const toInsert = newEmails.map(email => ({
                search_query_id: searchId,
                name: email.split('@')[0],
                company: email.split('@')[1]?.split('.')[0] || 'Unknown',
                email: email,
                email_sent: true,
                email_sent_at: new Date(Date.now() - 86400000).toISOString(), // Assume sent yesterday
                email_opened: true,
                email_opened_at: new Date().toISOString(),
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
