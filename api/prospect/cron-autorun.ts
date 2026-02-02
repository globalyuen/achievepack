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

// Blocked country TLDs - exclude India and China
const BLOCKED_COUNTRY_TLDS = [
    '.cn',      // China
    '.com.cn',  // China
    '.net.cn',  // China
    '.org.cn',  // China
    '.in',      // India
    '.co.in',   // India
    '.net.in',  // India
    '.org.in'   // India
]

// Blocked email patterns (India/China specific providers)
const BLOCKED_EMAIL_PATTERNS = [
    '@qq.com',
    '@163.com',
    '@126.com',
    '@sina.com',
    '@sohu.com',
    '@aliyun.com',
    '@foxmail.com',
    '@rediffmail.com',
    '@yahoo.in',
    '@hotmail.in'
]

// Search queries targeting businesses that USE packaging (not packaging suppliers)
// Focus: Food & Beverage, FMCG, Healthcare/Supplements
// Regions: Major international cities, excluding India and China
const SEARCH_QUERIES = [
    // ========== FOOD & BEVERAGE ==========
    
    // Coffee Roasters & Tea Brands
    'specialty coffee roaster New York',
    'artisan coffee company Los Angeles',
    'small batch coffee roaster London',
    'craft coffee brand Berlin',
    'specialty coffee roaster Tokyo',
    'artisan tea company Singapore',
    'loose leaf tea brand Sydney',
    'premium tea company Toronto',
    'organic coffee roaster Amsterdam',
    'specialty coffee Paris',
    'craft coffee Melbourne',
    'boutique coffee roaster Seoul',
    'third wave coffee brand Dubai',
    
    // Snack Food Brands
    'healthy snack brand New York',
    'organic snack company California',
    'protein bar manufacturer London',
    'granola brand Los Angeles',
    'nut butter company Toronto',
    'dried fruit brand Sydney',
    'trail mix company Berlin',
    'jerky brand Texas',
    'popcorn company Chicago',
    'chips brand Amsterdam',
    'crackers company Tokyo',
    'cookie brand Singapore',
    'biscuit company London',
    
    // Chocolate & Confectionery
    'craft chocolate maker Brooklyn',
    'bean to bar chocolate San Francisco',
    'artisan chocolate London',
    'premium chocolate brand Paris',
    'organic chocolate company Amsterdam',
    'specialty chocolate Tokyo',
    'handmade candy company Toronto',
    'gourmet confectionery Sydney',
    
    // Bakery & Baked Goods
    'artisan bakery New York',
    'gluten free bakery Los Angeles',
    'organic bakery London',
    'sourdough bakery San Francisco',
    'vegan bakery Berlin',
    'premium bakery Toronto',
    'specialty bakery Sydney',
    
    // Beverages
    'kombucha brewery California',
    'cold brew coffee brand New York',
    'functional beverage company Los Angeles',
    'energy drink brand London',
    'sparkling water brand Berlin',
    'juice company Toronto',
    'smoothie brand Sydney',
    'matcha brand Tokyo',
    'herbal drink company Singapore',
    
    // Baby & Kids Food
    'organic baby food brand California',
    'baby food company New York',
    'kids snacks brand London',
    'children food company Toronto',
    'baby nutrition brand Sydney',
    
    // Pet Food
    'premium pet food company California',
    'organic dog treats brand New York',
    'natural pet food London',
    'artisan pet treats Toronto',
    'pet nutrition company Sydney',
    
    // Sauces & Condiments
    'hot sauce brand New York',
    'specialty sauce company California',
    'artisan condiment brand London',
    'gourmet sauce company Toronto',
    'organic dressing brand Sydney',
    
    // Spices & Seasonings
    'specialty spice company New York',
    'organic spice brand California',
    'gourmet seasoning London',
    'artisan spice blend Toronto',
    
    // ========== FMCG (Fast-Moving Consumer Goods) ==========
    
    // Skincare & Beauty
    'natural skincare brand California',
    'organic beauty company New York',
    'clean beauty brand London',
    'vegan skincare company Paris',
    'eco skincare brand Berlin',
    'natural cosmetics Toronto',
    'organic beauty Sydney',
    'K-beauty brand Seoul',
    'J-beauty company Tokyo',
    
    // Personal Care
    'natural soap company New York',
    'organic shampoo brand California',
    'eco personal care London',
    'natural body care Toronto',
    'organic deodorant brand Sydney',
    
    // ========== HEALTHCARE & SUPPLEMENTS ==========
    
    // Vitamins & Supplements
    'vitamin supplement brand California',
    'organic supplement company New York',
    'natural supplement brand London',
    'health supplement company Toronto',
    'wellness supplement Sydney',
    'herbal supplement brand Berlin',
    
    // Protein & Fitness
    'protein powder brand California',
    'fitness supplement company New York',
    'sports nutrition brand London',
    'workout supplement Toronto',
    'muscle supplement Sydney',
    
    // Superfood & Functional
    'superfood powder company California',
    'adaptogen brand New York',
    'mushroom supplement company London',
    'collagen powder brand Toronto',
    'greens powder company Sydney',
    'prebiotic supplement Berlin',
    
    // Specialty Diet
    'keto supplement brand California',
    'vegan protein company New York',
    'plant based nutrition London',
    'paleo supplement Toronto',
    'whole food supplement Sydney',
    
    // ========== INTERNATIONAL MARKETS ==========
    
    // Europe
    'food startup London UK',
    'organic food brand Amsterdam Netherlands',
    'healthy food company Berlin Germany',
    'specialty food Paris France',
    'artisan food brand Milan Italy',
    'health food company Barcelona Spain',
    'organic brand Stockholm Sweden',
    'natural food Copenhagen Denmark',
    
    // Asia Pacific (excluding China/India)
    'food brand Tokyo Japan',
    'health food company Singapore',
    'organic food brand Seoul South Korea',
    'specialty food Sydney Australia',
    'healthy food Melbourne Australia',
    'artisan food Auckland New Zealand',
    'food company Taipei Taiwan',
    'organic brand Hong Kong',
    
    // Middle East
    'health food company Dubai UAE',
    'organic food brand Tel Aviv Israel',
    'specialty food Riyadh Saudi Arabia',
    
    // North America
    'food startup San Francisco',
    'health brand Boston',
    'organic company Seattle',
    'specialty food Miami',
    'artisan brand Denver',
    'healthy food Austin',
    'food company Vancouver Canada',
    'organic brand Montreal Canada',
    
    // South America
    'organic food brand Sao Paulo Brazil',
    'health food company Buenos Aires Argentina',
    'specialty food Mexico City'
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
        // Food & Beverage
        'coffee': 'coffee products',
        'tea': 'tea products',
        'bakery': 'baked goods',
        'snack': 'snack products',
        'food': 'food products',
        'chocolate': 'chocolate products',
        'cookie': 'baked goods',
        'biscuit': 'baked goods',
        'candy': 'confectionery',
        'confectionery': 'confectionery',
        'granola': 'granola products',
        'nut butter': 'nut butter products',
        'dried fruit': 'dried fruit products',
        'popcorn': 'gourmet snacks',
        'jerky': 'jerky products',
        'chips': 'snack products',
        'crackers': 'snack products',
        'trail mix': 'trail mix products',
        
        // Beverages
        'kombucha': 'beverages',
        'matcha': 'matcha products',
        'beverage': 'beverages',
        'juice': 'juice products',
        'smoothie': 'beverages',
        'cold brew': 'coffee beverages',
        'energy drink': 'beverages',
        'sparkling': 'beverages',
        
        // Health & Diet
        'vegan': 'vegan products',
        'gluten': 'gluten-free products',
        'keto': 'keto-friendly products',
        'paleo': 'paleo products',
        'plant based': 'plant-based products',
        'allergen free': 'allergen-free products',
        
        // Supplements & Wellness
        'protein': 'protein products',
        'superfood': 'superfood products',
        'supplement': 'wellness supplements',
        'vitamin': 'vitamin supplements',
        'collagen': 'beauty supplements',
        'mushroom': 'functional products',
        'adaptogen': 'wellness products',
        'prebiotic': 'digestive health products',
        'greens': 'superfood products',
        'fitness': 'fitness nutrition',
        'sports nutrition': 'sports supplements',
        'workout': 'fitness supplements',
        
        // Baby & Pet
        'baby food': 'baby food products',
        'kids': 'kids snacks',
        'pet food': 'pet food products',
        'dog treat': 'pet treats',
        'cat food': 'pet nutrition products',
        'pet nutrition': 'pet nutrition products',
        
        // Sauces & Spices
        'spice': 'spice products',
        'seasoning': 'seasonings',
        'sauce': 'sauce products',
        'hot sauce': 'hot sauce products',
        'condiment': 'condiments',
        'dressing': 'food products',
        
        // Other Foods
        'soup': 'soup products',
        'meal kit': 'meal kit products',
        'freeze dried': 'freeze-dried products',
        
        // Beauty & Personal Care (FMCG)
        'skincare': 'skincare products',
        'beauty': 'beauty products',
        'cosmetics': 'cosmetic products',
        'K-beauty': 'Korean beauty products',
        'J-beauty': 'Japanese beauty products',
        'soap': 'personal care products',
        'shampoo': 'hair care products',
        'body care': 'body care products',
        'deodorant': 'personal care products',
        'personal care': 'personal care products'
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
            cc: [{ email: 'ryan@achievepack.com', name: 'Ryan Wong' }],
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

// Contact info from Hunter.io
interface ContactInfo {
    email: string | null
    phone: string | null
    firstName: string | null
    lastName: string | null
    position: string | null
}

// Find email and phone for a business using Hunter.io
async function findContactInfo(domain: string): Promise<ContactInfo> {
    const HUNTER_API_KEY = process.env.HUNTER_API_KEY
    const result: ContactInfo = { email: null, phone: null, firstName: null, lastName: null, position: null }
    
    if (!HUNTER_API_KEY) return result
    
    try {
        const url = `https://api.hunter.io/v2/domain-search?domain=${domain}&api_key=${HUNTER_API_KEY}`
        const response = await fetch(url)
        const data = await response.json() as { 
            data?: { 
                emails?: { 
                    value: string
                    first_name?: string
                    last_name?: string
                    position?: string
                    phone_number?: string
                }[]
                organization?: string
                phone_numbers?: string[]
            } 
        }
        
        if (data.data?.emails?.[0]) {
            const contact = data.data.emails[0]
            result.email = contact.value || null
            result.firstName = contact.first_name || null
            result.lastName = contact.last_name || null
            result.position = contact.position || null
            result.phone = contact.phone_number || null
        }
        
        // Also check organization phone numbers
        if (!result.phone && data.data?.phone_numbers?.[0]) {
            result.phone = data.data.phone_numbers[0]
        }
    } catch (error) {
        console.error('Hunter.io error:', error)
    }
    return result
}

// Legacy function for backward compatibility
async function findEmail(domain: string): Promise<string | null> {
    const info = await findContactInfo(domain)
    return info.email
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
    const emailLower = email.toLowerCase()
    const domain = emailLower.split('@')[1]
    if (!domain) return true // Invalid email
    
    // Check blocked platforms (Reddit, Yelp, etc.)
    if (BLOCKED_DOMAINS.some(blocked => domain.includes(blocked))) {
        return true
    }
    
    // Check blocked country TLDs (India, China)
    if (BLOCKED_COUNTRY_TLDS.some(tld => domain.endsWith(tld))) {
        return true
    }
    
    // Check blocked email patterns (China/India email providers)
    if (BLOCKED_EMAIL_PATTERNS.some(pattern => emailLower.includes(pattern))) {
        return true
    }
    
    return false
}

// Generate WhatsApp message content
function generateWhatsAppMessage(companyName: string, businessType: string): string {
    return `Hi ${companyName} Team! 👋

I just sent you an email about eco-friendly packaging for your ${businessType}.

Quick highlights:
• Custom branded pouches with stunning prints
• Certified compostable materials (EN 13432)
• Low MOQ starting 500 units
• FREE design consultation

Would love to connect! Reply here or check your inbox.

Best,
Ryan
Achieve Pack™
🌐 achievepack.com
📅 Book a call: calendly.com/30-min-free-packaging-consultancy`
}

// Add WhatsApp message to queue for local processing
async function addToWhatsAppQueue(
    prospectId: number, 
    phone: string, 
    companyName: string, 
    businessType: string
): Promise<void> {
    if (!phone) {
        console.log(`⏭️ No phone number for ${companyName}, skipping WhatsApp queue`)
        return
    }
    
    const message = generateWhatsAppMessage(companyName, businessType)
    
    try {
        const { error } = await supabase
            .from('prospect_whatsapp_queue')
            .insert({
                prospect_id: prospectId,
                phone: phone,
                company_name: companyName,
                message: message,
                status: 'pending'
            })
        
        if (error) {
            console.error(`❌ Failed to queue WhatsApp for ${companyName}:`, error)
        } else {
            console.log(`📱 WhatsApp queued for ${companyName} (${phone})`)
        }
    } catch (e) {
        console.error(`❌ WhatsApp queue error:`, e)
    }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Verify cron secret to prevent unauthorized access
    const cronSecret = req.headers['authorization']
    if (cronSecret !== `Bearer ${process.env.CRON_SECRET}`) {
        // Allow without secret for testing, but log it
        console.log('Cron job called without valid secret')
    }
    
    // Collect detailed logs
    const runLogs: string[] = []
    const addLog = (msg: string) => {
        const timestamp = new Date().toISOString().substring(11, 19)
        const logEntry = `[${timestamp}] ${msg}`
        runLogs.push(logEntry)
        console.log(logEntry)
    }
    
    try {
        addLog('🚀 Auto Run: Starting automation cycle...')
        
        // Check if automation is enabled
        const { data: automation } = await supabase
            .from('prospect_automation')
            .select('is_running')
            .eq('id', 1)
            .single()
        
        if (!automation?.is_running) {
            addLog('⏸️ Automation is disabled - skipping')
            return res.status(200).json({ 
                success: true, 
                message: 'Automation is disabled',
                skipped: true,
                logs: runLogs
            })
        }
        
        addLog('✅ Automation is enabled')
        
        // Pick a random search query
        const randomIndex = Math.floor(Math.random() * SEARCH_QUERIES.length)
        const searchQuery = SEARCH_QUERIES[randomIndex]
        const sender = 'ryan' // Always use Ryan for auto run
        
        addLog(`📍 Search Query: "${searchQuery}"`)
        addLog(`👤 Sender: ${sender}`)
        
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
        addLog('🔎 Searching Google via SerpAPI...')
        const businesses = await searchBusinesses(searchQuery)
        addLog(`🔍 Found ${businesses.length} businesses from search`)
        
        let emailsSent = 0
        let emailsFound = 0
        const businessType = extractBusinessType(searchQuery)
        
        addLog(`📋 Processing top 5 businesses...`)
        
        for (const business of businesses.slice(0, 5)) { // Limit to 5 per run
            try {
                // Extract domain from website
                if (!business.website) {
                    addLog(`⏭️ Skipping: No website`)
                    continue
                }
                const domain = new URL(business.website).hostname.replace('www.', '')
                addLog(`\n🏢 Processing: ${domain}`)
                
                // Find contact info (email and phone)
                addLog(`   🔍 Looking up email via Hunter.io...`)
                const contactInfo = await findContactInfo(domain)
                if (!contactInfo.email) {
                    addLog(`   ❌ No email found for ${domain}`)
                    continue
                }
                
                const email = contactInfo.email
                emailsFound++
                addLog(`   ✅ Email found: ${email}`)
                if (contactInfo.phone) {
                    addLog(`   📞 Phone found: ${contactInfo.phone}`)
                }
                
                // Check if domain is blocked (Reddit, Yelp, Instagram, etc.)
                if (isBlockedDomain(email)) {
                    addLog(`   🚫 BLOCKED: ${email} (blocked domain)`)
                    continue
                }
                
                // Check if unsubscribed or already contacted
                if (await isUnsubscribed(email)) {
                    addLog(`   ⛔ SKIP: ${email} (unsubscribed)`)
                    continue
                }
                
                if (await alreadyContacted(email)) {
                    addLog(`   ⏭️ SKIP: ${email} (already contacted)`)
                    continue
                }
                
                // Clean business name using AI
                addLog(`   🤖 Cleaning business name with AI...`)
                const cleanName = await cleanBusinessNameWithAI(business.name)
                addLog(`   📝 Name: "${business.name}" → "${cleanName}"`)
                
                // Generate email content
                const prospectData = { clean_name: cleanName, name: cleanName, email }
                const { subject, body } = generateEmailContent(prospectData, sender, businessType)
                
                // Create prospect record with phone number
                const { data: prospect, error: prospectError } = await supabase
                    .from('prospect')
                    .insert({
                        search_query_id: searchRecord.id,
                        name: cleanName,
                        website: business.website,
                        email,
                        phone: contactInfo.phone,
                        contact_name: contactInfo.firstName && contactInfo.lastName 
                            ? `${contactInfo.firstName} ${contactInfo.lastName}` 
                            : contactInfo.firstName || null,
                        contact_position: contactInfo.position,
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
                addLog(`   ✉️ EMAIL SENT to ${cleanName} (${email})`)
                
                // Add to WhatsApp queue if phone number available
                if (contactInfo.phone) {
                    await addToWhatsAppQueue(prospect.id, contactInfo.phone, cleanName, businessType)
                    addLog(`   📱 Added to WhatsApp queue`)
                }
                
                // Rate limiting
                addLog(`   ⏳ Rate limit delay (2s)...`)
                await new Promise(resolve => setTimeout(resolve, 2000))
                
            } catch (error: any) {
                addLog(`   ❌ Error: ${error.message || 'Unknown error'}`)
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
        
        addLog(`\n========================================`)
        addLog(`✅ AUTO RUN COMPLETE`)
        addLog(`   📊 Businesses found: ${businesses.length}`)
        addLog(`   📧 Emails found: ${emailsFound}`)
        addLog(`   ✉️ Emails sent: ${emailsSent}`)
        addLog(`========================================`)
        
        return res.status(200).json({
            success: true,
            message: `${emailsSent} emails sent`,
            query: searchQuery,
            sender,
            found: businesses.length,
            emailsFound,
            emailsSent,
            logs: runLogs
        })
        
    } catch (error: any) {
        addLog(`\n❌ AUTOMATION ERROR: ${error.message || 'Unknown error'}`)
        console.error('Automation error:', error)
        return res.status(500).json({ 
            success: false, 
            error: error instanceof Error ? error.message : 'Automation failed',
            logs: runLogs
        })
    }
}
