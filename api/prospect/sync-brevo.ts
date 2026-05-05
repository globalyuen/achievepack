import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'
import https from 'https'

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
        console.log(`[Sync] Starting Brevo events sync: limit=${limit}, offset=${offset}`)
        
        // Fetch from Brevo Events API (event=delivered)
        const brevoData = await new Promise<any>((resolve, reject) => {
            const options = {
                hostname: 'api.brevo.com',
                path: `/v3/smtp/statistics/events?limit=${limit}&offset=${offset}&event=delivered`,
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'api-key': BREVO_API_KEY
                }
            }
            
            const request = https.request(options, (response) => {
                let data = ''
                response.on('data', (chunk) => { data += chunk })
                response.on('end', () => {
                    try {
                        resolve(JSON.parse(data))
                    } catch (e) {
                        reject(new Error(`Failed to parse Brevo response: ${data.substring(0, 100)}`))
                    }
                })
            })
            
            request.on('error', (e) => reject(e))
            request.end()
        })

        const events = brevoData.events || []
        console.log(`[Sync] Found ${events.length} delivered events in Brevo batch.`)
        
        // Create a generic search query for imported emails if it doesn't exist
        const { data: searchQuery } = await supabase
            .from('prospect_search_query')
            .select('id')
            .eq('status', 'brevo_sync')
            .limit(1)
            .maybeSingle()
            
        let searchId = searchQuery?.id
        
        if (!searchId) {
            const { data: newQuery, error: queryError } = await supabase
                .from('prospect_search_query')
                .insert({
                    query: 'Brevo Sync History',
                    sender: 'system',
                    status: 'brevo_sync',
                    total_results: events.length // approximation
                })
                .select()
                .single()
            
            if (queryError) throw queryError
            searchId = newQuery.id
        }

        let imported = 0
        let skipped = 0
        
        // Process each email
        for (const event of events) {
            const toEmail = event.email
            if (!toEmail) continue

            // Check if prospect exists
            const { data: existing } = await supabase
                .from('prospect')
                .select('id, email_sent')
                .eq('email', toEmail)
                .maybeSingle()
            
            if (existing) {
                if (!existing.email_sent) {
                    await supabase
                        .from('prospect')
                        .update({
                            email_sent: true,
                            email_sent_at: event.date,
                            brevo_message_id: event.messageId
                        })
                        .eq('id', existing.id)
                    imported++
                } else {
                    skipped++
                }
                continue
            }

            // Insert new prospect
            const { error: insertError } = await supabase
                .from('prospect')
                .insert({
                    search_query_id: searchId,
                    name: toEmail.split('@')[0], // Fallback name
                    email: toEmail,
                    email_sent: true,
                    email_sent_at: event.date,
                    brevo_message_id: event.messageId,
                    business_type: 'Imported',
                    sales_pitch: `Subject: ${event.subject}`
                })
            
            if (insertError) {
                console.error('[Sync] Error inserting prospect:', insertError)
                continue
            }
            
            imported++
        }

        return res.status(200).json({
            success: true,
            imported,
            skipped,
            total_in_batch: events.length
        })

    } catch (error: any) {
        console.error('[Sync] Sync error:', error)
        return res.status(500).json({ success: false, error: error.message, imported: 0, skipped: 0 })
    }
}
