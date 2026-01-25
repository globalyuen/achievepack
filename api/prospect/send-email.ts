import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

// Sender profiles
const SENDER_PROFILES: Record<string, { name: string; email: string }> = {
    ryan: { name: 'Ryan Wong', email: 'ryan@pouch.eco' },
    jericha: { name: 'Jericha K.', email: 'Jericha.k@pouch.eco' },
    eric: { name: 'Eric Chan', email: 'eric@pouch.eco' }
}

async function sendBrevoEmail(to: string, subject: string, body: string, senderKey: string) {
    const BREVO_API_KEY = process.env.BREVO_API_KEY
    
    if (!BREVO_API_KEY) {
        throw new Error('BREVO_API_KEY not configured')
    }
    
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
            subject,
            htmlContent: body.replace(/\n/g, '<br>'),
            textContent: body
        })
    })
    
    if (!response.ok) {
        const error = await response.text()
        throw new Error(`Brevo API error: ${error}`)
    }
    
    const result = await response.json() as { messageId?: string }
    return { success: true, messageId: result.messageId }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' })
    }

    try {
        const { id } = req.query
        
        if (!id) {
            return res.status(400).json({ success: false, error: 'Prospect ID required' })
        }

        // Get prospect with search query for sender info
        const { data: prospect, error: fetchError } = await supabase
            .from('prospect')
            .select('*, prospect_search_query(sender)')
            .eq('id', id)
            .single()

        if (fetchError || !prospect) {
            return res.status(404).json({ success: false, error: 'Prospect not found' })
        }

        if (!prospect.email || prospect.email === 'N/A') {
            return res.status(400).json({ success: false, error: 'No email address available' })
        }

        if (prospect.email_sent) {
            return res.status(400).json({ success: false, error: 'Email already sent to this prospect' })
        }

        // Generate email content
        const shortName = prospect.name?.split(' ')[0] || prospect.name || 'your business'
        const businessType = prospect.business_type || 'products'
        const sender = prospect.prospect_search_query?.sender || 'ryan'
        const senderProfile = SENDER_PROFILES[sender] || SENDER_PROFILES.ryan
        
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

        // Send email via Brevo
        const emailResult = await sendBrevoEmail(prospect.email, subject, body, sender)

        // Update prospect record
        const { error: updateError } = await supabase
            .from('prospect')
            .update({
                email_sent: true,
                email_sent_at: new Date().toISOString(),
                brevo_message_id: emailResult.messageId || null,
                sales_pitch: `Subject: ${subject}\n\n${body}`
            })
            .eq('id', id)

        if (updateError) {
            console.error('Error updating prospect:', updateError)
        }

        // Update search query stats
        if (prospect.search_query_id) {
            await supabase.rpc('increment_emails_sent', { search_id: prospect.search_query_id })
        }

        return res.status(200).json({
            success: true,
            message: `Email sent successfully from ${senderProfile.email}!`
        })
    } catch (error) {
        console.error('Send email error:', error)
        return res.status(500).json({ 
            success: false, 
            error: error instanceof Error ? error.message : 'Failed to send email' 
        })
    }
}
