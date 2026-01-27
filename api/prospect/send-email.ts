import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

// Sender profiles
const SENDER_PROFILES: Record<string, { name: string; email: string; signature: string }> = {
    ryan: { name: 'Ryan Wong', email: 'ryan@pouch.eco', signature: 'Ryan Wong\nBusiness Development\nPouch.eco | Sustainable Packaging Solutions\nryan@pouch.eco' },
    jericha: { name: 'Jericha K.', email: 'Jericha.k@pouch.eco', signature: 'Jericha K.\nClient Relations\nPouch.eco | Sustainable Packaging Solutions\nJericha.k@pouch.eco' },
    eric: { name: 'Eric Chan', email: 'eric@pouch.eco', signature: 'Eric Chan\nSales Manager\nPouch.eco | Sustainable Packaging Solutions\neric@pouch.eco' }
}

async function sendBrevoEmail(to: string, subject: string, body: string, senderKey: string) {
    const BREVO_API_KEY = process.env.BREVO_API_KEY
    
    if (!BREVO_API_KEY) {
        throw new Error('BREVO_API_KEY not configured')
    }
    
    const sender = SENDER_PROFILES[senderKey] || SENDER_PROFILES.ryan
    
    // Convert plain text to HTML with proper formatting
    const htmlBody = body
        .replace(/\n/g, '<br>')
        .replace(/•/g, '&bull;')
        .replace(/✓/g, '&#10003;')
        .replace(/📦/g, '📦')
        .replace(/📅/g, '📅')
        .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" style="color: #059669;">$1</a>')
    
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
            cc: [{ email: 'no-reply@achievepack.com', name: 'Achieve Pack' }],
            subject,
            htmlContent: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">${htmlBody}</div>`,
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

// Generate default email content if not provided
function generateDefaultEmail(prospect: any, senderKey: string) {
    const shortName = prospect.name?.split(' ')[0] || prospect.name || 'your business'
    const businessType = prospect.business_type || 'products'
    const profile = SENDER_PROFILES[senderKey] || SENDER_PROFILES.ryan
    
    const subject = `Boost ${shortName} sales by 15-20% with eco-packaging`
    const body = `Hi there,

I've checked out ${prospect.name} and see huge potential for your ${businessType}.

We help businesses like yours boost sales by 15-20% with premium eco-friendly packaging that customers love.

✓ Quick wins we can deliver:
• Custom branded pouches that stand out on shelves
• Sustainable materials that appeal to eco-conscious buyers  
• Fast 2-week turnaround with low minimums (500 MOQ)
• Free design consultation and 3D mockups

✓ Why brands choose Achieve Pack:
• EN 13432 & ASTM D6400 certified compostable materials
• GRS certified recycled content options
• 500+ brands helped across US & EU markets
• 5.0 star rating from verified customers

📦 Explore our solutions:
• Compostable Packaging: https://achievepack.com/materials/compostable
• Stand Up Pouches: https://achievepack.com/packaging/stand-up-pouches
• Free Services: https://achievepack.com/free-service

📅 Book a free 30-min consultation:
https://calendly.com/30-min-free-packaging-consultancy

Would you be open to a quick chat about how we could help ${shortName}?

Best regards,
${profile.signature}

---
Achieve Pack | Sustainable Packaging Solutions
https://achievepack.com

To unsubscribe from future emails: https://achievepack.com/unsubscribe?email=${encodeURIComponent(prospect.email || '')}`
    
    return { subject, body }
}

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
        const { id } = req.query
        
        // Get custom subject and body from request body (if editing before send)
        let customSubject: string | undefined
        let customBody: string | undefined
        
        if (req.body) {
            const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
            customSubject = body.subject
            customBody = body.body
        }
        
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

        const sender = prospect.prospect_search_query?.sender || 'ryan'
        const senderProfile = SENDER_PROFILES[sender] || SENDER_PROFILES.ryan
        
        // Use custom content if provided, otherwise generate default
        let subject: string
        let body: string
        
        if (customSubject && customBody) {
            subject = customSubject
            body = customBody
        } else {
            const defaultEmail = generateDefaultEmail(prospect, sender)
            subject = defaultEmail.subject
            body = defaultEmail.body
        }

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
