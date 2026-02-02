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

// Blocked email domains - do NOT send to these platforms
const BLOCKED_DOMAINS = [
    'reddit.com',
    'yelp.com', 
    'instagram.com',
    'facebook.com',
    'twitter.com',
    'x.com',
    'tiktok.com',
    'linkedin.com',
    'pinterest.com',
    'youtube.com',
    'google.com',
    'amazon.com',
    'ebay.com',
    'etsy.com',
    'alibaba.com',
    'aliexpress.com'
]

// Search queries to rotate through - USA, Canada, Australia
const SEARCH_QUERIES = [
    'organic coffee roasters USA',
    'artisan bakery United States',
    'specialty tea brand Canada',
    'healthy snack company Australia',
    'organic food brand California',
    'craft chocolate maker Toronto',
    'natural skincare brand Vancouver',
    'vegan food company Sydney',
    'gluten free bakery Melbourne',
    'kombucha brewery New York',
    'matcha brand Los Angeles',
    'granola company Montreal',
    'nut butter brand Brisbane',
    'dried fruit company Texas',
    'protein bar brand Chicago',
    'coffee roasters Seattle',
    'organic snacks Boston',
    'tea company San Francisco',
    'healthy food brand Denver',
    'eco food company Portland'
]

// Words to remove from business names
const WORDS_TO_REMOVE = [
    'LLC', 'Inc', 'Corp', 'Corporation', 'Company', 'Co', 'Ltd', 'Limited',
    'Group', 'Associates', 'Partners', 'Solutions', 'Services', 'International',
    'Global', 'Worldwide', 'Enterprise', 'Enterprises', 'Business', 'Consulting',
    'Home', 'Shop', 'Store', 'Buy', 'Online', 'Official', 'Website', 'Site',
    'Best', 'Top', 'Our', 'Your', 'The', 'A', 'An', 'In', 'Of', 'For', 'And',
    'Welcome', 'About', 'Contact', 'Products', 'Services', 'FAQ', 'Blog'
]

// Clean business name using AI (XAI/Grok)
async function cleanBusinessNameWithAI(rawName: string): Promise<string> {
    const XAI_API_KEY = process.env.XAI_API_KEY
    if (!XAI_API_KEY) {
        return fallbackCleanName(rawName)
    }
    
    try {
        const response = await fetch('https://api.x.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${XAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'grok-2-1212',
                messages: [{
                    role: 'user',
                    content: `Extract the actual business/company name from this website title. Return ONLY the company name (2-4 words max), nothing else.

Title: "${rawName}"

Rules:
- Extract only the company/brand name
- Remove descriptive text like "Shop", "Buy", "Official", "Best", etc.
- Remove location info if not part of brand name
- If unclear, return the most brand-like portion
- Maximum 4 words`
                }],
                max_tokens: 30,
                temperature: 0.1
            })
        })
        
        if (response.ok) {
            const data = await response.json() as { choices?: { message?: { content?: string } }[] }
            const cleaned = data.choices?.[0]?.message?.content?.trim()
            if (cleaned && cleaned.length > 1 && cleaned.length < 100) {
                return cleaned.replace(/["']/g, '')
            }
        }
    } catch (error) {
        console.error('XAI name cleaning error:', error)
    }
    
    return fallbackCleanName(rawName)
}

// Fallback name cleaning without AI
function fallbackCleanName(rawName: string): string {
    if (!rawName) return 'Your Business'
    
    // Remove common patterns
    let name = rawName
        .replace(/\s*[-|–—:]\s*.*/g, '')  // Remove everything after - | : etc
        .replace(/\([^)]*\)/g, '')         // Remove parentheses content
        .replace(/["']/g, '')              // Remove quotes
        .trim()
    
    // Split into words and filter
    const words = name.split(/\s+/)
    const cleanedWords: string[] = []
    
    for (const word of words) {
        const cleanWord = word.replace(/[.,!?;:]/g, '')
        const upperWord = cleanWord.toUpperCase()
        
        // Skip if in removal list
        if (WORDS_TO_REMOVE.some(w => w.toUpperCase() === upperWord)) {
            continue
        }
        
        // Keep the word
        if (cleanWord.length > 1) {
            cleanedWords.push(cleanWord)
        }
        
        // Max 4 words
        if (cleanedWords.length >= 4) break
    }
    
    return cleanedWords.length > 0 ? cleanedWords.join(' ') : rawName.split(' ').slice(0, 3).join(' ')
}

// Extract business type from search query
function extractBusinessType(searchQuery: string): string {
    const types: Record<string, string> = {
        'coffee': 'coffee products',
        'bakery': 'baked goods',
        'tea': 'tea products',
        'snack': 'snack products',
        'food': 'food products',
        'chocolate': 'chocolate products',
        'skincare': 'skincare products',
        'vegan': 'vegan products',
        'gluten': 'gluten-free products',
        'kombucha': 'beverages',
        'matcha': 'matcha products',
        'granola': 'granola products',
        'nut butter': 'nut butter products',
        'dried fruit': 'dried fruit products',
        'protein': 'protein products'
    }
    
    const lowerQuery = searchQuery.toLowerCase()
    for (const [key, value] of Object.entries(types)) {
        if (lowerQuery.includes(key)) return value
    }
    
    return 'products'
}

// Generate email content - professional format with clear paragraphs
function generateEmailContent(prospect: any, senderKey: string, businessType: string) {
    const companyName = prospect.clean_name || prospect.name || 'your business'
    const profile = SENDER_PROFILES[senderKey] || SENDER_PROFILES.ryan
    
    const subject = `${companyName} - Boost Sales 15-20% with Eco-Friendly Packaging`
    
    const body = `Hello ${companyName} Team,

I hope this email finds you well!

I recently came across ${companyName} and was truly impressed by your ${businessType}. I believe there's an exciting opportunity to help elevate your brand even further with premium eco-friendly packaging.


**Why Eco-Friendly Packaging Matters:**

Today's consumers increasingly prefer brands that demonstrate environmental responsibility. Studies show that 73% of consumers are willing to pay more for sustainable packaging. This is where Achieve Pack can help you stand out.


**What We Offer:**

• Custom branded pouches with stunning print quality
• EN 13432 & ASTM D6400 certified compostable materials
• Low minimum orders starting at just 500 units
• Fast 2-week turnaround time
• FREE design consultation and 3D mockups


**Explore Our Solutions:**

→ Compostable Packaging: https://achievepack.com/materials/compostable
→ Stand Up Pouches: https://achievepack.com/packaging/stand-up-pouches
→ Free Services: https://achievepack.com/free-service


**Let's Connect:**

I'd love to show you how we can help ${companyName} attract more eco-conscious customers and boost your sales. Would you be open to a quick 15-minute call?

📅 Book a free consultation: https://calendly.com/30-min-free-packaging-consultancy

Looking forward to hearing from you!


Warm regards,

${profile.name}
Packaging Development Representative

Achieve Pack™
🌐 www.achievepack.com
📧 ${profile.email}
📱 WhatsApp: +852 69704411

---
Achieve Pack | Sustainable Packaging Solutions
Helping 500+ brands succeed with eco-friendly packaging

To unsubscribe: https://achievepack.com/unsubscribe?email=${encodeURIComponent(prospect.email || '')}`
    
    return { subject, body }
}

// Send email via Brevo with proper HTML formatting
async function sendBrevoEmail(to: string, subject: string, body: string, senderKey: string) {
    const BREVO_API_KEY = process.env.BREVO_API_KEY
    if (!BREVO_API_KEY) throw new Error('BREVO_API_KEY not configured')
    
    const sender = SENDER_PROFILES[senderKey] || SENDER_PROFILES.ryan
    
    // Convert plain text to well-formatted HTML
    const htmlBody = body
        .split('\n\n').map(paragraph => {
            // Handle section headers with **text**
            let p = paragraph.replace(/\*\*([^*]+)\*\*/g, '<strong style="color: #059669;">$1</strong>')
            // Handle bullet points
            if (p.includes('\n•') || p.includes('\n→')) {
                const lines = p.split('\n')
                const intro = lines[0]
                const items = lines.slice(1).filter(l => l.trim())
                if (items.length > 0) {
                    p = intro + '<ul style="margin: 10px 0; padding-left: 20px;">' + 
                        items.map(item => `<li style="margin: 5px 0;">${item.replace(/^[•→]\s*/, '')}</li>`).join('') + 
                        '</ul>'
                }
            }
            // Convert URLs to links
            p = p.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" style="color: #059669; text-decoration: none;">$1</a>')
            // Convert newlines to breaks within paragraphs
            p = p.replace(/\n/g, '<br>')
            return `<p style="margin: 0 0 16px 0; line-height: 1.6;">${p}</p>`
        }).join('')
    
    const styledHtml = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; font-size: 15px;">
        ${htmlBody}
    </div>`
    
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
            htmlContent: styledHtml,
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

// Check if email domain is blocked
function isBlockedDomain(email: string): boolean {
    const domain = email.toLowerCase().split('@')[1]
    if (!domain) return true // Invalid email
    return BLOCKED_DOMAINS.some(blocked => domain.includes(blocked))
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
        const sender = 'ryan' // Always use Ryan for auto run
        
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
        const businessType = extractBusinessType(searchQuery)
        
        for (const business of businesses.slice(0, 5)) { // Limit to 5 per run
            try {
                // Extract domain from website
                if (!business.website) continue
                const domain = new URL(business.website).hostname.replace('www.', '')
                
                // Find email
                const email = await findEmail(domain)
                if (!email) continue
                
                emailsFound++
                
                // Check if domain is blocked (Reddit, Yelp, Instagram, etc.)
                if (isBlockedDomain(email)) {
                    console.log(`Skip ${email} - blocked domain`)
                    continue
                }
                
                // Check if unsubscribed or already contacted
                if (await isUnsubscribed(email)) {
                    console.log(`Skip ${email} - unsubscribed`)
                    continue
                }
                
                if (await alreadyContacted(email)) {
                    console.log(`Skip ${email} - already contacted`)
                    continue
                }
                
                // Clean business name using AI
                const cleanName = await cleanBusinessNameWithAI(business.name)
                console.log(`Cleaned name: "${business.name}" -> "${cleanName}"`)
                
                // Generate email content
                const prospectData = { clean_name: cleanName, name: cleanName, email }
                const { subject, body } = generateEmailContent(prospectData, sender, businessType)
                
                // Create prospect record
                const { data: prospect, error: prospectError } = await supabase
                    .from('prospect')
                    .insert({
                        search_query_id: searchRecord.id,
                        name: cleanName,
                        website: business.website,
                        email,
                        business_type: businessType,
                        sales_pitch: `Subject: ${subject}\n\n${body}`
                    })
                    .select()
                    .single()
                
                if (prospectError) {
                    console.error('Failed to create prospect:', prospectError)
                    continue
                }
                
                // Send email
                const messageId = await sendBrevoEmail(email, subject, body, sender)
                
                // Update prospect with sent status
                await supabase
                    .from('prospect')
                    .update({
                        email_sent: true,
                        email_sent_at: new Date().toISOString(),
                        brevo_message_id: messageId
                    })
                    .eq('id', prospect.id)
                
                emailsSent++
                console.log(`Email sent to ${cleanName} (${email})`)
                
                // Rate limiting
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
        
        console.log(`Auto Run complete: ${emailsSent} emails sent`)
        
        return res.status(200).json({
            success: true,
            message: `${emailsSent} emails sent`,
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
