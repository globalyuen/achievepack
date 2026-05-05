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
                        reject(new Error(`Failed to parse Brevo response`))
                    }
                })
            })
            
            request.on('error', (e) => reject(e))
            request.end()
        })

        const events = brevoData.events || []
        if (events.length === 0) {
            return res.status(200).json({ success: true, imported: 0, skipped: 0, total_in_batch: 0 })
        }

        // Get all emails in this batch to check existence in one go
        const batchEmails = events.map((e: any) => e.email).filter(Boolean)
        const { data: existingProspects } = await supabase
            .from('prospect')
            .select('email, email_sent')
            .in('email', batchEmails)
        
        const existingMap = new Map(existingProspects?.map(p => [p.email, p]) || [])

        // Find or create the sync query record
        const { data: searchQuery } = await supabase
            .from('prospect_search_query')
            .select('id')
            .eq('status', 'brevo_sync')
            .maybeSingle()
            
        let searchId = searchQuery?.id
        if (!searchId) {
            const { data: newQuery } = await supabase
                .from('prospect_search_query')
                .insert({ query: 'Brevo Sync History', sender: 'system', status: 'brevo_sync' })
                .select().single()
            searchId = newQuery?.id
        }

        let imported = 0
        let skipped = 0
        const toInsert = []
        const toUpdate = []
        
        for (const event of events) {
            const email = event.email
            if (!email) continue

            const existing = existingMap.get(email)
            if (existing) {
                if (!existing.email_sent) {
                    toUpdate.push({
                        email,
                        email_sent: true,
                        email_sent_at: event.date,
                        brevo_message_id: event.messageId
                    })
                } else {
                    skipped++
                }
            } else {
                toInsert.push({
                    search_query_id: searchId,
                    name: email.split('@')[0],
                    email: email,
                    email_sent: true,
                    email_sent_at: event.date,
                    brevo_message_id: event.messageId,
                    business_type: 'Imported',
                    sales_pitch: `Subject: ${event.subject}`
                })
            }
        }

        // Perform bulk updates/inserts
        if (toInsert.length > 0) {
            const { error: insErr } = await supabase.from('prospect').insert(toInsert)
            if (!insErr) imported += toInsert.length
        }
        
        // Supabase doesn't have a bulk update by email easily without an extension, 
        // but we can do them in a few parallel calls if small batch
        if (toUpdate.length > 0) {
            await Promise.all(toUpdate.map(u => 
                supabase.from('prospect').update({
                    email_sent: u.email_sent,
                    email_sent_at: u.email_sent_at,
                    brevo_message_id: u.brevo_message_id
                }).eq('email', u.email)
            ))
            imported += toUpdate.length
        }

        return res.status(200).json({
            success: true,
            imported,
            skipped,
            total_in_batch: events.length
        })

    } catch (error: any) {
        console.error('[Sync] Sync error:', error)
        return res.status(500).json({ success: false, error: error.message })
    }
}
