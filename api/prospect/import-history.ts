import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

// Import History API - Import email history from Replit export

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

interface HistoryRecord {
    name: string
    email: string
    website?: string
    business_type?: string
    sender: string
    email_sent_at: string
    sales_pitch?: string
    brevo_message_id?: string
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    // GET - Return import stats
    if (req.method === 'GET') {
        try {
            const { count: totalProspects } = await supabase
                .from('prospect')
                .select('*', { count: 'exact', head: true })
            
            const { count: sentEmails } = await supabase
                .from('prospect')
                .select('*', { count: 'exact', head: true })
                .eq('email_sent', true)
            
            const { count: totalSearches } = await supabase
                .from('prospect_search_query')
                .select('*', { count: 'exact', head: true })
            
            return res.status(200).json({
                success: true,
                stats: {
                    total_prospects: totalProspects || 0,
                    emails_sent: sentEmails || 0,
                    total_searches: totalSearches || 0
                }
            })
        } catch (error) {
            return res.status(500).json({ success: false, error: 'Failed to get stats' })
        }
    }

    // POST - Import history data
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' })
    }

    try {
        // Check authorization
        const authHeader = req.headers['authorization']
        const expectedSecret = process.env.IMPORT_SECRET || 'import-history-2024'
        
        if (authHeader !== `Bearer ${expectedSecret}`) {
            return res.status(401).json({ success: false, error: 'Unauthorized' })
        }

        const { records } = req.body as { records: HistoryRecord[] }
        
        if (!records || !Array.isArray(records)) {
            return res.status(400).json({ success: false, error: 'records array required' })
        }

        let imported = 0
        let skipped = 0
        let errors = 0

        // Process in batches of 100
        const batchSize = 100
        for (let i = 0; i < records.length; i += batchSize) {
            const batch = records.slice(i, i + batchSize)
            
            for (const record of batch) {
                try {
                    // Check if already exists
                    const { data: existing } = await supabase
                        .from('prospect')
                        .select('id')
                        .eq('email', record.email)
                        .single()
                    
                    if (existing) {
                        skipped++
                        continue
                    }

                    // Create search query record
                    const { data: searchQuery, error: searchError } = await supabase
                        .from('prospect_search_query')
                        .insert({
                            query: `Imported: ${record.business_type || 'Unknown'}`,
                            sender: record.sender || 'ryan',
                            status: 'imported',
                            created_at: record.email_sent_at || new Date().toISOString()
                        })
                        .select()
                        .single()
                    
                    if (searchError) {
                        console.error('Search query error:', searchError)
                        errors++
                        continue
                    }

                    // Create prospect record
                    const { error: prospectError } = await supabase
                        .from('prospect')
                        .insert({
                            search_query_id: searchQuery.id,
                            name: record.name,
                            email: record.email,
                            website: record.website || '',
                            business_type: record.business_type || 'Unknown',
                            email_sent: true,
                            email_sent_at: record.email_sent_at || new Date().toISOString(),
                            sales_pitch: record.sales_pitch || '',
                            brevo_message_id: record.brevo_message_id || ''
                        })
                    
                    if (prospectError) {
                        console.error('Prospect error:', prospectError)
                        errors++
                        continue
                    }

                    imported++
                } catch (err) {
                    console.error('Record error:', err)
                    errors++
                }
            }
        }

        return res.status(200).json({
            success: true,
            message: `Import complete`,
            imported,
            skipped,
            errors,
            total: records.length
        })

    } catch (error) {
        console.error('Import error:', error)
        return res.status(500).json({ 
            success: false, 
            error: error instanceof Error ? error.message : 'Import failed' 
        })
    }
}
