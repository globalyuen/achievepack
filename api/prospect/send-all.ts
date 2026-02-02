import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

const SENDER_PROFILES: Record<string, { name: string; email: string }> = {
    ryan: { name: 'Ryan Wong', email: 'ryan@pouch.eco' },
    jericha: { name: 'Jericha K.', email: 'Jericha.k@pouch.eco' },
    eric: { name: 'Eric Chan', email: 'eric@pouch.eco' }
}

async function sendBrevoEmail(to: string, subject: string, body: string, senderKey: string) {
    const BREVO_API_KEY = process.env.BREVO_API_KEY
    if (!BREVO_API_KEY) throw new Error('BREVO_API_KEY not configured')
    
    const sender = SENDER_PROFILES[senderKey] || SENDER_PROFILES.ryan
    
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'api-key': BREVO_API_KEY,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            sender: { name: sender.name, email: sender.email },
            to: [{ email: to }],
            // CC removed - notifications will be sent via WhatsApp instead
            subject,
            htmlContent: body.replace(/\n/g, '<br>'),
            textContent: body
        })
    })
    
    if (!response.ok) {
        const error = await response.text()
        throw new Error(`Brevo API error: ${error}`)
    }
    
    return await response.json() as { messageId?: string }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    
    if (req.method === 'OPTIONS') return res.status(200).end()
    if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' })

    try {
        const { searchId } = req.query
        if (!searchId) return res.status(400).json({ success: false, error: 'Search ID required' })

        // Get search query for sender
        const { data: searchQuery, error: searchError } = await supabase
            .from('prospect_search_query')
            .select('sender')
            .eq('id', searchId)
            .single()

        if (searchError) {
            return res.status(404).json({ success: false, error: 'Search not found' })
        }

        const sender = searchQuery?.sender || 'ryan'
        const senderProfile = SENDER_PROFILES[sender] || SENDER_PROFILES.ryan

        // Get pending prospects
        const { data: prospects, error: fetchError } = await supabase
            .from('prospect')
            .select('*')
            .eq('search_query_id', searchId)
            .eq('email_sent', false)
            .not('email', 'is', null)
            .neq('email', 'N/A')

        if (fetchError) {
            return res.status(500).json({ success: false, error: fetchError.message })
        }

        if (!prospects || prospects.length === 0) {
            return res.status(200).json({ success: true, message: 'No pending emails to send', sent: 0 })
        }

        let sentCount = 0
        const errors: string[] = []

        for (const prospect of prospects) {
            try {
                const shortName = prospect.name?.split(' ')[0] || 'your business'
                const businessType = prospect.business_type || 'products'
                
                const subject = `Boost ${shortName} sales by 15-20% with eco-packaging`
                const body = `Hi there,

I've checked out ${prospect.name} and see huge potential for your ${businessType}.

We help businesses like yours boost sales by 15-20% with premium eco-friendly packaging that customers love.

Quick wins we can deliver:
• Custom branded pouches that stand out on shelves
• Sustainable materials that appeal to eco-conscious buyers
• Fast 2-week turnaround with low minimums

Would you be open to a quick chat about how we could help ${shortName}?

Best regards,
${senderProfile.name}
Business Development
Pouch.eco | Sustainable Packaging Solutions`

                const result = await sendBrevoEmail(prospect.email, subject, body, sender)

                await supabase
                    .from('prospect')
                    .update({
                        email_sent: true,
                        email_sent_at: new Date().toISOString(),
                        brevo_message_id: result.messageId || null,
                        sales_pitch: `Subject: ${subject}\n\n${body}`
                    })
                    .eq('id', prospect.id)

                sentCount++
            } catch (err) {
                errors.push(`${prospect.name}: ${err instanceof Error ? err.message : 'Unknown error'}`)
            }
        }

        // Update search query stats
        await supabase
            .from('prospect_search_query')
            .update({ emails_sent: sentCount })
            .eq('id', searchId)

        return res.status(200).json({
            success: true,
            message: `Sent ${sentCount} emails successfully`,
            sent: sentCount,
            errors: errors.length > 0 ? errors : undefined
        })
    } catch (error) {
        console.error('Send all error:', error)
        return res.status(500).json({ success: false, error: 'Failed to send emails' })
    }
}
