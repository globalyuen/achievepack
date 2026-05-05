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

    const BREVO_API_KEY = process.env.BREVO_API_KEY
    if (!BREVO_API_KEY) {
        return res.status(500).json({ success: false, error: 'BREVO_API_KEY not configured' })
    }

    try {
        const { limit = 100, offset = 0 } = req.body
        
        console.log(`Syncing Brevo emails: limit=${limit}, offset=${offset}`)
        
        // Fetch transactional emails from Brevo
        const response = await fetch(`https://api.brevo.com/v3/smtp/emails?limit=${limit}&offset=${offset}&sort=desc`, {
            headers: {
                'accept': 'application/json',
                'api-key': BREVO_API_KEY
            }
        })
        
        if (!response.ok) {
            const errorText = await response.text()
            throw new Error(`Brevo API error: ${errorText}`)
        }
        
        const data = await response.json() as { transactionalEmails?: any[], count?: number }
        const emails = data.transactionalEmails || []
        
        let imported = 0
        let skipped = 0
        
        // Create a generic search query for imported emails if it doesn't exist
        const { data: searchQuery } = await supabase
            .from('prospect_search_query')
            .select('id')
            .eq('status', 'brevo_sync')
            .limit(1)
            .single()
            
        let searchId = searchQuery?.id
        
        if (!searchId) {
            const { data: newQuery, error: queryError } = await supabase
                .from('prospect_search_query')
                .insert({
                    query: 'Brevo Sync History',
                    sender: 'system',
                    status: 'brevo_sync',
                    total_results: data.count || 0
                })
                .select()
                .single()
            
            if (queryError) throw queryError
            searchId = newQuery.id
        }

        // Process each email
        for (const email of emails) {
            const toEmail = email.email
            if (!toEmail) continue

            // Check if prospect exists
            const { data: existing } = await supabase
                .from('prospect')
                .select('id')
                .eq('email', toEmail)
                .limit(1)
                .single()
            
            if (existing) {
                // Update existing record if it doesn't have email_sent = true
                await supabase
                    .from('prospect')
                    .update({
                        email_sent: true,
                        email_sent_at: email.createdAt,
                        brevo_message_id: email.uuid
                    })
                    .eq('id', existing.id)
                skipped++
                continue
            }

            // Insert new prospect
            const { error: insertError } = await supabase
                .from('prospect')
                .insert({
                    search_query_id: searchId,
                    name: 'Imported Prospect',
                    email: toEmail,
                    email_sent: true,
                    email_sent_at: email.createdAt,
                    brevo_message_id: email.uuid,
                    business_type: 'Imported'
                })
            
            if (insertError) {
                console.error('Error inserting prospect:', insertError)
                continue
            }
            
            imported++
        }

        return res.status(200).json({
            success: true,
            imported,
            skipped,
            total_in_batch: emails.length,
            total_brevo_count: data.count || 0
        })

    } catch (error: any) {
        console.error('Sync error:', error)
        return res.status(500).json({ success: false, error: error.message })
    }
}
