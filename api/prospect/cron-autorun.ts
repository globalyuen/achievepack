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

// Search queries to rotate through
const SEARCH_QUERIES = [
    'organic coffee roasters Hong Kong',
    'artisan bakery Hong Kong',
    'specialty tea brand Hong Kong',
    'healthy snack company Hong Kong',
    'organic food brand Hong Kong',
    'craft chocolate maker Hong Kong',
    'natural skincare brand Hong Kong',
    'vegan food company Hong Kong',
    'gluten free bakery Hong Kong',
    'kombucha brewery Hong Kong',
    'matcha brand Hong Kong',
    'granola company Hong Kong',
    'nut butter brand Hong Kong',
    'dried fruit company Hong Kong',
    'protein bar brand Hong Kong'
]

// Generate email content
function generateEmailContent(prospect: any, senderKey: string) {
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

// Send email via Brevo
async function sendBrevoEmail(to: string, subject: string, body: string, senderKey: string) {
    const BREVO_API_KEY = process.env.BREVO_API_KEY
    if (!BREVO_API_KEY) throw new Error('BREVO_API_KEY not configured')
    
    const sender = SENDER_PROFILES[senderKey] || SENDER_PROFILES.ryan
    
    const htmlBody = body
        .replace(/\n/g, '<br>')
        .replace(/•/g, '&bull;')
        .replace(/✓/g, '&#10003;')
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
    return result.messageId
}

// Search for businesses using SerpAPI
async function searchBusinesses(query: string): Promise<any[]> {
    const SERPAPI_KEY = process.env.SERPAPI_KEY
    if (!SERPAPI_KEY) {
        console.log('SERPAPI_KEY not configured, using mock data')
        return []
    }
    
    try {
        const url = `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(query)}&api_key=${SERPAPI_KEY}&num=10`
        const response = await fetch(url)
        const data = await response.json() as { organic_results?: any[] }
        
        return (data.organic_results || []).map((result: any) => ({
            name: result.title?.replace(/ - .*$/, '').substring(0, 200) || 'Unknown',
            website: result.link,
            snippet: result.snippet
        }))
    } catch (error) {
        console.error('SerpAPI error:', error)
        return []
    }
}

// Find email for a business using Hunter.io
async function findEmail(domain: string): Promise<string | null> {
    const HUNTER_API_KEY = process.env.HUNTER_API_KEY
    if (!HUNTER_API_KEY) return null
    
    try {
        const url = `https://api.hunter.io/v2/domain-search?domain=${domain}&api_key=${HUNTER_API_KEY}`
        const response = await fetch(url)
        const data = await response.json() as { data?: { emails?: { value: string }[] } }
        
        if (data.data?.emails?.[0]?.value) {
            return data.data.emails[0].value
        }
    } catch (error) {
        console.error('Hunter.io error:', error)
    }
    return null
}

// Check if email is unsubscribed
async function isUnsubscribed(email: string): Promise<boolean> {
    const { data } = await supabase
        .from('email_unsubscribes')
        .select('id')
        .eq('email', email.toLowerCase())
        .single()
    return !!data
}

// Check if already contacted
async function alreadyContacted(email: string): Promise<boolean> {
    const { data } = await supabase
        .from('prospect')
        .select('id')
        .eq('email', email)
        .eq('email_sent', true)
        .single()
    return !!data
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Verify cron secret to prevent unauthorized access
    const cronSecret = req.headers['authorization']
    if (cronSecret !== `Bearer ${process.env.CRON_SECRET}`) {
        // Allow without secret for testing, but log it
        console.log('Cron job called without valid secret')
    }
    
    try {
        // Check if automation is enabled
        const { data: automation } = await supabase
            .from('prospect_automation')
            .select('is_running')
            .eq('id', 1)
            .single()
        
        if (!automation?.is_running) {
            return res.status(200).json({ 
                success: true, 
                message: 'Automation is disabled',
                skipped: true 
            })
        }
        
        console.log('🚀 Auto Run: Starting automation cycle...')
        
        // Pick a random search query
        const randomIndex = Math.floor(Math.random() * SEARCH_QUERIES.length)
        const searchQuery = SEARCH_QUERIES[randomIndex]
        const senderKeys = ['ryan', 'jericha', 'eric']
        const sender = senderKeys[Math.floor(Math.random() * senderKeys.length)]
        
        console.log(`📍 Searching: "${searchQuery}" as ${sender}`)
        
        // Create search record
        const { data: searchRecord, error: searchError } = await supabase
            .from('prospect_search_query')
            .insert({
                query: searchQuery,
                sender,
                status: 'processing'
            })
            .select()
            .single()
        
        if (searchError) {
            console.error('Failed to create search record:', searchError)
            throw searchError
        }
        
        // Search for businesses
        const businesses = await searchBusinesses(searchQuery)
        console.log(`🔍 Found ${businesses.length} businesses`)
        
        let emailsSent = 0
        let emailsFound = 0
        
        for (const business of businesses.slice(0, 5)) { // Limit to 5 per run
            try {
                // Extract domain from website
                if (!business.website) continue
                const domain = new URL(business.website).hostname.replace('www.', '')
                
                // Find email
                const email = await findEmail(domain)
                if (!email) continue
                
                emailsFound++
                
                // Check if unsubscribed or already contacted
                if (await isUnsubscribed(email)) {
                    console.log(`⏭️ Skipping ${email} - unsubscribed`)
                    continue
                }
                
                if (await alreadyContacted(email)) {
                    console.log(`⏭️ Skipping ${email} - already contacted`)
                    continue
                }
                
                // Create prospect record
                const { data: prospect, error: prospectError } = await supabase
                    .from('prospect')
                    .insert({
                        search_query_id: searchRecord.id,
                        name: business.name,
                        website: business.website,
                        email,
                        business_type: searchQuery.split(' ')[0] // e.g., "organic", "artisan"
                    })
                    .select()
                    .single()
                
                if (prospectError) {
                    console.error('Failed to create prospect:', prospectError)
                    continue
                }
                
                // Generate and send email
                const { subject, body } = generateEmailContent(prospect, sender)
                const messageId = await sendBrevoEmail(email, subject, body, sender)
                
                // Update prospect with sent status
                await supabase
                    .from('prospect')
                    .update({
                        email_sent: true,
                        email_sent_at: new Date().toISOString(),
                        brevo_message_id: messageId,
                        sales_pitch: `Subject: ${subject}\n\n${body}`
                    })
                    .eq('id', prospect.id)
                
                emailsSent++
                console.log(`✅ Email sent to ${email}`)
                
                // Rate limiting - wait 2 seconds between emails
                await new Promise(resolve => setTimeout(resolve, 2000))
                
            } catch (error) {
                console.error('Error processing business:', error)
            }
        }
        
        // Update search record
        await supabase
            .from('prospect_search_query')
            .update({
                status: 'completed',
                total_results: businesses.length,
                emails_found: emailsFound,
                emails_sent: emailsSent
            })
            .eq('id', searchRecord.id)
        
        // Update last run time
        await supabase
            .from('prospect_automation')
            .update({ last_run_at: new Date().toISOString() })
            .eq('id', 1)
        
        console.log(`🎉 Auto Run complete: ${emailsSent} emails sent`)
        
        return res.status(200).json({
            success: true,
            message: `Automation cycle complete`,
            query: searchQuery,
            sender,
            found: businesses.length,
            emailsFound,
            emailsSent
        })
        
    } catch (error) {
        console.error('Automation error:', error)
        return res.status(500).json({ 
            success: false, 
            error: error instanceof Error ? error.message : 'Automation failed' 
        })
    }
}
