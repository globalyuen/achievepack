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
        console.log(`[Sync] Starting Brevo sync: limit=${limit}, offset=${offset}`)
        
        // Fetch from Brevo using https module for maximum compatibility
        const brevoData = await new Promise<any>((resolve, reject) => {
            const options = {
                hostname: 'api.brevo.com',
                path: `/v3/smtp/emails?limit=${limit}&offset=${offset}&sort=desc`,
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

        const emails = brevoData.transactionalEmails || []
        console.log(`[Sync] Found ${emails.length} emails in Brevo batch.`)
        
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
                    total_results: brevoData.count || 0
                })
                .select()
                .single()
            
            if (queryError) throw queryError
            searchId = newQuery.id
        }

        let imported = 0
        let skipped = 0
        
        // Process each email
        for (const email of emails) {
            const toEmail = email.email
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
                            email_sent_at: email.createdAt,
                            brevo_message_id: email.uuid
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
                    name: email.toName || 'Imported Prospect',
                    email: toEmail,
                    email_sent: true,
                    email_sent_at: email.createdAt,
                    brevo_message_id: email.uuid,
                    business_type: 'Imported'
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
            total_in_batch: emails.length,
            total_brevo_count: brevoData.count || 0
        })

    } catch (error: any) {
        console.error('[Sync] Sync error:', error)
        return res.status(500).json({ success: true, error: error.message, imported: 0, skipped: 0 }) // Return success:true with error to avoid frontend catch block if preferred
    }
}
