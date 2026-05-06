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
    // ========== COFFEE & TEA ==========
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
    'specialty coffee roaster Portland',
    'craft coffee brand Nashville',
    'independent coffee roaster Edinburgh',
    'artisan tea brand Dublin',
    'specialty tea company Zurich',
    'craft coffee Vienna',
    'boutique coffee Prague',
    'independent coffee roaster Warsaw',
    'specialty coffee brand Brussels',
    'artisan coffee Helsinki',
    'coffee brand Lisbon Portugal',
    'specialty tea brand Bangkok Thailand',
    'artisan coffee Kuala Lumpur',
    'craft tea company Jakarta',
    'premium coffee brand Manila',
    'specialty coffee Lagos Nigeria',
    'artisan coffee Nairobi Kenya',
    'craft tea brand Cape Town South Africa',
    'specialty coffee Bogota Colombia',
    'artisan coffee Lima Peru',
    'craft coffee Santiago Chile',
    
    // ========== SNACKS & CHIPS ==========
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
    'rice cake brand Seoul',
    'healthy chip company Austin',
    'organic cracker brand Seattle',
    'pretzels brand Philadelphia',
    'pork rind brand Dallas',
    'seaweed snack company Los Angeles',
    'kale chip brand San Francisco',
    'grain-free snack company Denver',
    'cassava chip brand Miami',
    'plantain chip company New York',
    'seed bar company London',
    'date bar brand Dubai',
    'dried mango company Philippines',
    'roasted chickpea brand Netherlands',
    'puffed grain snack Paris',
    'crispy lentil brand Stockholm',
    'mochi snack brand Vancouver',
    
    // ========== CHOCOLATE & CONFECTIONERY ==========
    'craft chocolate maker Brooklyn',
    'bean to bar chocolate San Francisco',
    'artisan chocolate London',
    'premium chocolate brand Paris',
    'organic chocolate company Amsterdam',
    'specialty chocolate Tokyo',
    'handmade candy company Toronto',
    'gourmet confectionery Sydney',
    'raw chocolate brand Melbourne',
    'vegan chocolate company Berlin',
    'single origin chocolate brand Copenhagen',
    'artisan truffle company New York',
    'premium fudge brand Edinburgh',
    'handcrafted caramel company Los Angeles',
    'gourmet lollipop brand Sydney',
    'specialty nougat company Brussels',
    
    // ========== BAKERY ==========
    'artisan bakery New York',
    'gluten free bakery Los Angeles',
    'organic bakery London',
    'sourdough bakery San Francisco',
    'vegan bakery Berlin',
    'premium bakery Toronto',
    'specialty bakery Sydney',
    'gluten free cookie brand Chicago',
    'paleo bread company Boulder',
    'keto bakery Miami',
    'vegan muffin brand Vancouver',
    'sourdough brand Helsinki',
    'gluten free bakery Oslo',
    'artisan bread company Lisbon',
    'organic pastry brand Madrid',
    
    // ========== BEVERAGES ==========
    'kombucha brewery California',
    'cold brew coffee brand New York',
    'functional beverage company Los Angeles',
    'energy drink brand London',
    'sparkling water brand Berlin',
    'juice company Toronto',
    'smoothie brand Sydney',
    'matcha brand Tokyo',
    'herbal drink company Singapore',
    'kefir drink brand Warsaw',
    'adaptogen drink company New York',
    'mushroom coffee brand San Francisco',
    'collagen drink brand London',
    'probiotic beverage company Berlin',
    'coconut water brand Miami',
    'turmeric latte brand Melbourne',
    'ceremonial cacao brand Amsterdam',
    'nootropic drink brand Austin',
    'electrolyte drink company Denver',
    'fermented drink brand Seoul',
    'jun tea company Portland',
    'water kefir brand Zurich',
    'beet juice brand Copenhagen',
    'ginger shot brand Stockholm',
    
    // ========== BABY & KIDS ==========
    'organic baby food brand California',
    'baby food company New York',
    'kids snacks brand London',
    'children food company Toronto',
    'baby nutrition brand Sydney',
    'toddler snack brand Amsterdam',
    'organic kids drink Berlin',
    'baby food pouch company Paris',
    'kids healthy snack Melbourne',
    'infant formula brand Singapore',
    
    // ========== PET FOOD ==========
    'premium pet food company California',
    'organic dog treats brand New York',
    'natural pet food London',
    'artisan pet treats Toronto',
    'pet nutrition company Sydney',
    'raw dog food brand Berlin',
    'grain free dog treat company Amsterdam',
    'freeze dried pet food brand Seattle',
    'organic cat food company Melbourne',
    'functional dog treat brand Austin',
    'premium cat treat brand Seoul',
    'holistic pet food company Vancouver',
    'natural dog chew brand Dublin',
    
    // ========== SAUCES, CONDIMENTS & SPICES ==========
    'hot sauce brand New York',
    'specialty sauce company California',
    'artisan condiment brand London',
    'gourmet sauce company Toronto',
    'organic dressing brand Sydney',
    'specialty spice company New York',
    'organic spice brand California',
    'gourmet seasoning London',
    'artisan spice blend Toronto',
    'fermented hot sauce brand Portland',
    'BBQ sauce brand Kansas City',
    'sriracha brand Los Angeles',
    'truffle sauce company Milan',
    'miso paste brand Tokyo',
    'tahini brand Tel Aviv',
    'harissa brand London',
    'chimichurri brand Buenos Aires',
    'za atar spice brand Amsterdam',
    'ras el hanout brand Paris',
    'everything bagel seasoning New York',
    
    // ========== HEALTH SUPPLEMENTS ==========
    'vitamin supplement brand California',
    'organic supplement company New York',
    'natural supplement brand London',
    'health supplement company Toronto',
    'wellness supplement Sydney',
    'herbal supplement brand Berlin',
    'protein powder brand California',
    'fitness supplement company New York',
    'sports nutrition brand London',
    'workout supplement Toronto',
    'muscle supplement Sydney',
    'superfood powder company California',
    'adaptogen brand New York',
    'mushroom supplement company London',
    'collagen powder brand Toronto',
    'greens powder company Sydney',
    'prebiotic supplement Berlin',
    'keto supplement brand California',
    'vegan protein company New York',
    'plant based nutrition London',
    'omega supplement brand Amsterdam',
    'magnesium supplement company Zurich',
    'ashwagandha brand Copenhagen',
    'lion mane supplement Melbourne',
    'sea moss supplement Miami',
    'spirulina brand San Francisco',
    'moringa supplement Austin',
    'berberine supplement Nashville',
    'NMN supplement brand Boston',
    'creatine brand Portland',
    
    // ========== SKINCARE & BEAUTY ==========
    'natural skincare brand California',
    'organic beauty company New York',
    'clean beauty brand London',
    'vegan skincare company Paris',
    'eco skincare brand Berlin',
    'natural cosmetics Toronto',
    'organic beauty Sydney',
    'K-beauty brand Seoul',
    'J-beauty company Tokyo',
    'natural soap company New York',
    'organic shampoo brand California',
    'eco personal care London',
    'natural body care Toronto',
    'organic deodorant brand Sydney',
    'zero waste beauty brand Amsterdam',
    'refillable skincare brand Paris',
    'solid shampoo bar company Berlin',
    'natural sunscreen brand Melbourne',
    'organic toner brand Seoul',
    'ayurvedic skincare company London',
    'clean makeup brand New York',
    'natural lip balm company Austin',
    'organic hair mask brand Vancouver',
    'vegan nail polish brand Amsterdam',
    'CBD skincare brand Denver',
    
    // ========== EUROPE - NEW CITIES ==========
    'food startup London UK',
    'organic food brand Amsterdam Netherlands',
    'healthy food company Berlin Germany',
    'specialty food Paris France',
    'artisan food brand Milan Italy',
    'health food company Barcelona Spain',
    'organic brand Stockholm Sweden',
    'natural food Copenhagen Denmark',
    'health food startup Zurich Switzerland',
    'organic brand Vienna Austria',
    'natural food brand Prague Czech Republic',
    'artisan food company Budapest Hungary',
    'organic snack brand Brussels Belgium',
    'healthy food brand Warsaw Poland',
    'artisan food Dublin Ireland',
    'specialty food Lisbon Portugal',
    'organic brand Oslo Norway',
    'healthy snack Helsinki Finland',
    'food startup Riga Latvia',
    'organic brand Tallinn Estonia',
    'health food Zagreb Croatia',
    'specialty food Athens Greece',
    'artisan food Bucharest Romania',
    
    // ========== ASIA PACIFIC - NEW CITIES ==========
    'food brand Tokyo Japan',
    'health food company Singapore',
    'organic food brand Seoul South Korea',
    'specialty food Sydney Australia',
    'healthy food Melbourne Australia',
    'artisan food Auckland New Zealand',
    'food company Taipei Taiwan',
    'organic brand Hong Kong',
    'health food brand Osaka Japan',
    'organic snack Busan South Korea',
    'specialty food Brisbane Australia',
    'artisan food Perth Australia',
    'healthy food brand Kuala Lumpur Malaysia',
    'organic food Bangkok Thailand',
    'specialty food Ho Chi Minh City Vietnam',
    'health food Jakarta Indonesia',
    'organic brand Manila Philippines',
    'specialty food Hanoi Vietnam',
    'artisan food Penang Malaysia',
    'natural food Chiang Mai Thailand',
    
    // ========== MIDDLE EAST & AFRICA ==========
    'health food company Dubai UAE',
    'organic food brand Tel Aviv Israel',
    'specialty food Riyadh Saudi Arabia',
    'healthy snack Abu Dhabi UAE',
    'organic brand Doha Qatar',
    'artisan food Beirut Lebanon',
    'health food Amman Jordan',
    'specialty food Kuwait City',
    'natural food brand Cairo Egypt',
    'organic snack Lagos Nigeria',
    'health food Nairobi Kenya',
    'specialty food Cape Town South Africa',
    'artisan food Johannesburg',
    'organic brand Accra Ghana',
    
    // ========== NORTH AMERICA - NEW CITIES ==========
    'food startup San Francisco',
    'health brand Boston',
    'organic company Seattle',
    'specialty food Miami',
    'artisan brand Denver',
    'healthy food Austin',
    'food company Vancouver Canada',
    'organic brand Montreal Canada',
    'health food Phoenix Arizona',
    'organic brand Minneapolis',
    'specialty food Atlanta Georgia',
    'artisan food Charlotte NC',
    'healthy snack Salt Lake City',
    'organic brand Pittsburgh',
    'specialty food Kansas City',
    'natural food brand Indianapolis',
    'artisan food Columbus Ohio',
    'health brand Raleigh NC',
    'organic snack Tampa Florida',
    'specialty food San Diego',
    'artisan brand Sacramento',
    'organic brand Calgary Canada',
    'health food Ottawa Canada',
    'natural food brand Winnipeg Canada',
    'artisan food Quebec City Canada',
    
    // ========== SOUTH AMERICA ==========
    'organic food brand Sao Paulo Brazil',
    'health food company Buenos Aires Argentina',
    'specialty food Mexico City',
    'artisan food brand Rio de Janeiro',
    'organic snack Monterrey Mexico',
    'healthy food Guadalajara Mexico',
    'natural food brand Santiago Chile',
    'organic brand Lima Peru',
    'specialty food Bogota Colombia',
    'health food Medellin Colombia',
    'artisan food brand Quito Ecuador',
    'organic snack Montevideo Uruguay',
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

// List of bad/invalid AI responses to reject
const INVALID_NAME_PATTERNS = [
    /^none$/i,
    /^n\/a$/i,
    /^unknown$/i,
    /^unclear$/i,
    /^no company/i,
    /^no specific/i,
    /^not (a|an|the)/i,
    /^this (is|refers|page|title|website)/i,
    /^the title/i,
    /^multiple/i,
    /^various/i,
    /cannot (be|determine)/i,
    /no (single|company|brand|specific)/i,
    /\(no /i,
    /\(not /i,
]

// Check if an AI-returned name is actually valid
function isValidCleanName(name: string): boolean {
    if (!name || name.trim().length < 2) return false
    if (name.length > 60) return false // Too long = probably an explanation
    const trimmed = name.trim()
    return !INVALID_NAME_PATTERNS.some(pattern => pattern.test(trimmed))
}

// Clean business name using AI (XAI/Grok)
async function cleanBusinessNameWithAI(rawName: string, domain?: string): Promise<string | null> {
    const XAI_API_KEY = process.env.XAI_API_KEY
    if (!XAI_API_KEY) {
        return fallbackCleanName(rawName, domain)
    }
    
    try {
        const response = await fetch('https://api.x.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${XAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'grok-3',
                messages: [{
                    role: 'user',
                    content: `You are extracting a company brand name from a webpage title.

Title: "${rawName}"
Domain: "${domain || ''}"

Return ONLY the brand/company name — nothing else. No explanations. No punctuation. No quotes.

Strict rules:
- Return 1–4 words that is the actual brand or company name
- If the title is generic (e.g. "Top 10 UK beauty brands"), derive the name from the domain instead
- NEVER return "None", "N/A", "Unknown", "No company", or any explanation
- NEVER include parentheses or qualifying text
- If truly impossible to determine a name, return just the domain name without the TLD

Examples:
- "Krave Beauty – Skincare for All" → "Krave Beauty"
- "Top 10 UK Beauty Brands | Cosmetify" → "Cosmetify"
- "About – Grind Coffee" → "Grind Coffee"
- domain: "bluebottlecoffee.com" → "Blue Bottle Coffee"`
                }],
                max_tokens: 20,
                temperature: 0
            })
        })
        
        if (response.ok) {
            const data = await response.json() as { choices?: { message?: { content?: string } }[] }
            const cleaned = data.choices?.[0]?.message?.content?.trim()?.replace(/["']/g, '')
            if (cleaned && isValidCleanName(cleaned)) {
                return cleaned
            }
        }
    } catch (error) {
        console.error('XAI name cleaning error:', error)
    }
    
    return fallbackCleanName(rawName, domain)
}

// Fallback name cleaning without AI — uses domain as last resort
function fallbackCleanName(rawName: string, domain?: string): string | null {
    // Try to extract from raw title first
    if (rawName) {
        let name = rawName
            .replace(/\s*[-|–—:]\s*.*/g, '')  // Remove everything after - | : etc
            .replace(/\([^)]*\)/g, '')          // Remove parentheses content
            .replace(/["']/g, '')               // Remove quotes
            .trim()
        
        const words = name.split(/\s+/)
        const cleanedWords: string[] = []
        
        for (const word of words) {
            const cleanWord = word.replace(/[.,!?;:]/g, '')
            const upperWord = cleanWord.toUpperCase()
            if (WORDS_TO_REMOVE.some(w => w.toUpperCase() === upperWord)) continue
            if (cleanWord.length > 1) cleanedWords.push(cleanWord)
            if (cleanedWords.length >= 4) break
        }
        
        if (cleanedWords.length >= 1) {
            const result = cleanedWords.join(' ')
            if (isValidCleanName(result)) return result
        }
    }
    
    // Fall back to domain name (e.g. "bluebottlecoffee" → "Bluebottlecoffee")
    if (domain) {
        const domainBase = domain
            .replace(/^www\./, '')
            .split('.')[0]            // take first segment
            .replace(/-/g, ' ')       // hyphens to spaces
            .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase to spaces
            .trim()
        if (domainBase && domainBase.length > 1) {
            // Capitalise each word
            return domainBase.replace(/\b\w/g, c => c.toUpperCase())
        }
    }
    
    return null // Signal: skip this prospect
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
async function sendBrevoEmail(to: string, subject: string, body: string, senderKey: string, prospectId?: number) {
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
    
    let styledHtml = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; font-size: 15px;">
        ${htmlBody}
    </div>`
    
    if (prospectId) {
        styledHtml += `<img src="https://achievepack.com/api/prospect/track-open?id=${prospectId}" width="1" height="1" style="display:none;" />`
        styledHtml = styledHtml.replace(/href="(https?:\/\/[^"]+)"/g, (match, url) => {
            if (url.includes('unsubscribe')) return match
            return `href="https://achievepack.com/api/prospect/track-click?id=${prospectId}&url=${encodeURIComponent(url)}"`
        })
    }
    
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

// Fallback: Google Custom Search Engine
async function searchWithGoogleCSE(query: string, addLog: (msg: string) => void): Promise<any[]> {
    const CSE_API_KEY = process.env.GOOGLE_CSE_API_KEY
    const CSE_ID = process.env.GOOGLE_CSE_ID
    
    if (!CSE_API_KEY || !CSE_ID) {
        addLog('⚠️ Google CSE not configured, returning empty results')
        return []
    }
    
    try {
        const url = `https://www.googleapis.com/customsearch/v1?key=${CSE_API_KEY}&cx=${CSE_ID}&q=${encodeURIComponent(query)}&num=10`
        const response = await fetch(url)
        const data = await response.json() as { items?: any[], error?: any }
        
        if (data.error) {
            addLog(`❌ Google CSE error: ${data.error.message || 'Unknown'}`)
            return []
        }

        return (data.items || []).map((item: any) => ({
            name: item.title?.replace(/ - .*$/, '').substring(0, 200) || 'Unknown',
            website: item.link,
            snippet: item.snippet
        }))
    } catch (error: any) {
        addLog(`❌ Google CSE fetch error: ${error.message || 'Unknown'}`)
        return []
    }
}

// Search for businesses using SerpAPI
async function searchBusinesses(query: string, addLog: (msg: string) => void): Promise<any[]> {
    const SERPAPI_KEY = process.env.SERPAPI_KEY
    if (!SERPAPI_KEY) {
        addLog('⚠️ SERPAPI_KEY not configured, using Google Custom Search fallback')
        return searchWithGoogleCSE(query, addLog)
    }
    
    try {
        const url = `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(query)}&api_key=${SERPAPI_KEY}&num=10`
        const response = await fetch(url)
        const data = await response.json() as { organic_results?: any[], error?: string }
        
        if (data.error) {
            addLog(`⚠️ SerpAPI returned an error: ${data.error}. Falling back to Google Custom Search...`)
            return searchWithGoogleCSE(query, addLog)
        }
        
        return (data.organic_results || []).map((result: any) => ({
            name: result.title?.replace(/ - .*$/, '').substring(0, 200) || 'Unknown',
            website: result.link,
            snippet: result.snippet
        }))
    } catch (error: any) {
        addLog(`❌ SerpAPI fetch error: ${error.message || 'Unknown'}. Falling back...`)
        return searchWithGoogleCSE(query, addLog)
    }
}

// Contact info from Hunter.io
interface ContactInfo {
    email: string | null
    phone: string | null
    firstName: string | null
    lastName: string | null
    position: string | null
    phoneSource?: string // Track where phone was found
}

interface PhoneLookupResult {
    phone: string | null
    source: string
    success: boolean
}

// Validate and normalize phone number format
function normalizePhone(phone: string | null | undefined): string | null {
    if (!phone) return null
    
    // Remove all non-digit characters except +
    let cleaned = phone.replace(/[^\d+]/g, '')
    
    // Must have at least 7 digits
    const digitCount = cleaned.replace(/\D/g, '').length
    if (digitCount < 7 || digitCount > 15) return null
    
    // Ensure starts with + for international format
    if (!cleaned.startsWith('+')) {
        // Assume US number if 10 digits
        if (digitCount === 10) {
            cleaned = '+1' + cleaned
        } else if (digitCount === 11 && cleaned.startsWith('1')) {
            cleaned = '+' + cleaned
        }
    }
    
    return cleaned
}

// ===== LAYER 1: Hunter.io =====
async function findPhoneViaHunter(domain: string): Promise<PhoneLookupResult> {
    const HUNTER_API_KEY = process.env.HUNTER_API_KEY
    if (!HUNTER_API_KEY) {
        return { phone: null, source: 'Hunter.io', success: false }
    }
    
    try {
        const url = `https://api.hunter.io/v2/domain-search?domain=${domain}&api_key=${HUNTER_API_KEY}`
        const response = await fetch(url)
        const data = await response.json() as { 
            data?: { 
                emails?: { phone_number?: string }[]
                phone_numbers?: string[]
            } 
        }
        
        // Check contact phone
        let phone = data.data?.emails?.[0]?.phone_number || null
        
        // Check organization phones
        if (!phone && data.data?.phone_numbers?.[0]) {
            phone = data.data.phone_numbers[0]
        }
        
        phone = normalizePhone(phone)
        return { phone, source: 'Hunter.io', success: !!phone }
    } catch (error) {
        console.error('Hunter.io phone lookup error:', error)
        return { phone: null, source: 'Hunter.io', success: false }
    }
}

// ===== LAYER 2: Apollo.io =====
async function findPhoneViaApollo(domain: string): Promise<PhoneLookupResult> {
    const APOLLO_API_KEY = process.env.APOLLO_API_KEY
    if (!APOLLO_API_KEY) {
        return { phone: null, source: 'Apollo.io', success: false }
    }
    
    try {
        // Apollo organization search
        const url = 'https://api.apollo.io/v1/organizations/enrich'
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'X-Api-Key': APOLLO_API_KEY
            },
            body: JSON.stringify({ domain })
        })
        
        const data = await response.json() as {
            organization?: {
                phone?: string
                primary_phone?: { number?: string }
            }
        }
        
        let phone = data.organization?.phone || 
                    data.organization?.primary_phone?.number || null
        
        phone = normalizePhone(phone)
        return { phone, source: 'Apollo.io', success: !!phone }
    } catch (error) {
        console.error('Apollo.io phone lookup error:', error)
        return { phone: null, source: 'Apollo.io', success: false }
    }
}

// ===== LAYER 3: Clearbit =====
async function findPhoneViaClearbit(domain: string): Promise<PhoneLookupResult> {
    const CLEARBIT_API_KEY = process.env.CLEARBIT_API_KEY
    if (!CLEARBIT_API_KEY) {
        return { phone: null, source: 'Clearbit', success: false }
    }
    
    try {
        const url = `https://company.clearbit.com/v2/companies/find?domain=${domain}`
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${CLEARBIT_API_KEY}`
            }
        })
        
        if (!response.ok) {
            return { phone: null, source: 'Clearbit', success: false }
        }
        
        const data = await response.json() as {
            phone?: string
        }
        
        const phone = normalizePhone(data.phone)
        return { phone, source: 'Clearbit', success: !!phone }
    } catch (error) {
        console.error('Clearbit phone lookup error:', error)
        return { phone: null, source: 'Clearbit', success: false }
    }
}

// ===== LAYER 4: SerpAPI Google Search =====
async function findPhoneViaSerpAPI(domain: string, companyName: string): Promise<PhoneLookupResult> {
    const SERPAPI_KEY = process.env.SERPAPI_KEY
    if (!SERPAPI_KEY) {
        return { phone: null, source: 'SerpAPI', success: false }
    }
    
    try {
        // Search for company contact info
        const query = `"${companyName}" contact phone number site:${domain}`
        const url = `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(query)}&api_key=${SERPAPI_KEY}&num=3`
        
        const response = await fetch(url)
        const data = await response.json() as {
            organic_results?: { snippet?: string }[]
            knowledge_graph?: { phone?: string }
        }
        
        // Check knowledge graph first
        if (data.knowledge_graph?.phone) {
            const phone = normalizePhone(data.knowledge_graph.phone)
            if (phone) return { phone, source: 'SerpAPI/KG', success: true }
        }
        
        // Extract phone from snippets using regex
        const phoneRegex = /(?:\+?1?[-.]?)?\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}/g
        
        for (const result of data.organic_results || []) {
            if (result.snippet) {
                const matches = result.snippet.match(phoneRegex)
                if (matches) {
                    const phone = normalizePhone(matches[0])
                    if (phone) return { phone, source: 'SerpAPI', success: true }
                }
            }
        }
        
        return { phone: null, source: 'SerpAPI', success: false }
    } catch (error) {
        console.error('SerpAPI phone lookup error:', error)
        return { phone: null, source: 'SerpAPI', success: false }
    }
}

// ===== LAYER 5: Website Scraping =====
async function findPhoneViaWebscrape(domain: string): Promise<PhoneLookupResult> {
    const contactPaths = ['/contact', '/contact-us', '/about', '/about-us', '/connect']
    const phoneRegex = /(?:\+?1?[-.]?)?\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}/g
    
    for (const path of contactPaths) {
        try {
            const url = `https://${domain}${path}`
            const controller = new AbortController()
            const timeoutId = setTimeout(() => controller.abort(), 5000) // 5s timeout
            
            const response = await fetch(url, {
                signal: controller.signal,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (compatible; AchievePackBot/1.0)'
                }
            })
            clearTimeout(timeoutId)
            
            if (!response.ok) continue
            
            const html = await response.text()
            
            // Extract phone numbers from HTML
            // Look for tel: links first (most reliable)
            const telMatch = html.match(/href="tel:([^"]+)"/i)
            if (telMatch) {
                const phone = normalizePhone(telMatch[1])
                if (phone) return { phone, source: `Scrape:${path}`, success: true }
            }
            
            // Look for phone patterns in text
            const matches = html.match(phoneRegex)
            if (matches) {
                // Filter out common false positives (zip codes, dates)
                for (const match of matches) {
                    const phone = normalizePhone(match)
                    if (phone && phone.length >= 10) {
                        return { phone, source: `Scrape:${path}`, success: true }
                    }
                }
            }
        } catch (error) {
            // Timeout or fetch error - continue to next path
            continue
        }
    }
    
    return { phone: null, source: 'Scrape', success: false }
}

// ===== MULTI-LAYER PHONE LOOKUP =====
async function findPhoneMultiLayer(
    domain: string, 
    companyName: string,
    addLog: (msg: string) => void
): Promise<{ phone: string | null, source: string }> {
    
    // Layer 1: Hunter.io (already called for email, reuse if available)
    addLog(`      📞 Layer 1: Checking Hunter.io...`)
    const hunterResult = await findPhoneViaHunter(domain)
    if (hunterResult.success && hunterResult.phone) {
        addLog(`      ✅ Phone found via Hunter.io: ${hunterResult.phone}`)
        return { phone: hunterResult.phone, source: 'Hunter.io' }
    }
    addLog(`      ❌ Hunter.io: No phone`)
    
    // Layer 2: Apollo.io
    if (process.env.APOLLO_API_KEY) {
        addLog(`      📞 Layer 2: Checking Apollo.io...`)
        const apolloResult = await findPhoneViaApollo(domain)
        if (apolloResult.success && apolloResult.phone) {
            addLog(`      ✅ Phone found via Apollo.io: ${apolloResult.phone}`)
            return { phone: apolloResult.phone, source: 'Apollo.io' }
        }
        addLog(`      ❌ Apollo.io: No phone`)
    } else {
        addLog(`      ⏭️ Layer 2: Apollo.io skipped (no API key)`)
    }
    
    // Layer 3: Clearbit
    if (process.env.CLEARBIT_API_KEY) {
        addLog(`      📞 Layer 3: Checking Clearbit...`)
        const clearbitResult = await findPhoneViaClearbit(domain)
        if (clearbitResult.success && clearbitResult.phone) {
            addLog(`      ✅ Phone found via Clearbit: ${clearbitResult.phone}`)
            return { phone: clearbitResult.phone, source: 'Clearbit' }
        }
        addLog(`      ❌ Clearbit: No phone`)
    } else {
        addLog(`      ⏭️ Layer 3: Clearbit skipped (no API key)`)
    }
    
    // Layer 4: SerpAPI Google Search
    if (process.env.SERPAPI_KEY) {
        addLog(`      📞 Layer 4: Searching via SerpAPI...`)
        const serpResult = await findPhoneViaSerpAPI(domain, companyName)
        if (serpResult.success && serpResult.phone) {
            addLog(`      ✅ Phone found via SerpAPI: ${serpResult.phone}`)
            return { phone: serpResult.phone, source: serpResult.source }
        }
        addLog(`      ❌ SerpAPI: No phone in search results`)
    } else {
        addLog(`      ⏭️ Layer 4: SerpAPI skipped (no API key)`)
    }
    
    // Layer 5: Website Scraping (last resort)
    addLog(`      📞 Layer 5: Scraping contact pages...`)
    const scrapeResult = await findPhoneViaWebscrape(domain)
    if (scrapeResult.success && scrapeResult.phone) {
        addLog(`      ✅ Phone found via ${scrapeResult.source}: ${scrapeResult.phone}`)
        return { phone: scrapeResult.phone, source: scrapeResult.source }
    }
    addLog(`      ❌ Scraping: No phone found on contact pages`)
    
    addLog(`      ⚠️ All 5 layers exhausted - no phone number available`)
    return { phone: null, source: 'none' }
}

// Find email and phone for a business using Hunter.io (email) + multi-layer phone
async function findContactInfo(
    domain: string, 
    companyName: string = '',
    addLog?: (msg: string) => void
): Promise<ContactInfo> {
    const HUNTER_API_KEY = process.env.HUNTER_API_KEY
    const result: ContactInfo = { 
        email: null, 
        phone: null, 
        firstName: null, 
        lastName: null, 
        position: null,
        phoneSource: undefined
    }
    
    const log = addLog || ((msg: string) => console.log(msg))
    
    if (!HUNTER_API_KEY) return result
    
    try {
        // Step 1: Get email from Hunter.io
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
            
            // Check Hunter.io phone first
            result.phone = normalizePhone(contact.phone_number)
            if (result.phone) {
                result.phoneSource = 'Hunter.io'
            }
        }
        
        // Also check organization phone numbers from Hunter
        if (!result.phone && data.data?.phone_numbers?.[0]) {
            result.phone = normalizePhone(data.data.phone_numbers[0])
            if (result.phone) {
                result.phoneSource = 'Hunter.io'
            }
        }
        
        // Step 2: If no phone from Hunter, use multi-layer lookup
        if (!result.phone && result.email) {
            log(`   📞 Starting multi-layer phone lookup...`)
            const phoneResult = await findPhoneMultiLayer(domain, companyName || domain, log)
            result.phone = phoneResult.phone
            result.phoneSource = phoneResult.source
        }
        
    } catch (error) {
        console.error('Contact info lookup error:', error)
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

// Check if already contacted within the last 90 days (allow re-contact after 90 days)
async function alreadyContacted(email: string): Promise<boolean> {
    const ninetyDaysAgo = new Date()
    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90)
    const { data } = await supabase
        .from('prospect')
        .select('id')
        .eq('email', email)
        .eq('email_sent', true)
        .gte('email_sent_at', ninetyDaysAgo.toISOString())
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

// Check if website domain should be skipped (social media, platforms, govt, etc.)
// This runs BEFORE Hunter.io API call to save API credits
function isBlockedWebsite(domain: string): boolean {
    const domainLower = domain.toLowerCase()
    
    // Blocked website patterns - social media, platforms, marketplaces, govt
    const blockedWebsitePatterns = [
        // Social Media
        'facebook.com', 'fb.com',
        'twitter.com', 'x.com',
        'instagram.com',
        'linkedin.com',
        'tiktok.com',
        'pinterest.com',
        'youtube.com',
        'snapchat.com',
        'reddit.com',
        
        // Review/Listing Platforms
        'yelp.com',
        'tripadvisor.com',
        'trustpilot.com',
        'g2.com',
        'capterra.com',
        'glassdoor.com',
        
        // E-commerce Marketplaces (not direct brands)
        'amazon.com', 'amazon.co', 'amazon.ca', 'amazon.co.uk',
        'ebay.com', 'ebay.co.uk',
        'etsy.com',
        'alibaba.com',
        'aliexpress.com',
        'walmart.com',
        'target.com',
        'costco.com',
        'shopify.com', // Platform, not store
        
        // Search Engines & Tech
        'google.com', 'google.co',
        'bing.com',
        'yahoo.com',
        'apple.com',
        'microsoft.com',
        
        // News & Media
        'medium.com',
        'wordpress.com',
        'blogspot.com',
        'tumblr.com',
        'substack.com',
        
        // Government & Education
        '.gov', '.gov.', '.edu',
        'wikipedia.org',
        
        // Generic/Hosting
        'wix.com',
        'squarespace.com',
        'weebly.com',
        'godaddy.com',
        'namecheap.com',
        
        // Packaging competitors (we don't want to email them)
        'packaging', 'pouches', 'bags', 'boxes',
        'supplier', 'wholesale', 'manufacturer',
        'printing', 'printshop'
    ]
    
    // Check if domain matches any blocked pattern
    if (blockedWebsitePatterns.some(pattern => domainLower.includes(pattern))) {
        return true
    }
    
    // Check blocked country TLDs (India, China)
    if (BLOCKED_COUNTRY_TLDS.some(tld => domainLower.endsWith(tld))) {
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
        addLog('🔎 Searching Google via SerpAPI or custom search...')
        const businesses = await searchBusinesses(searchQuery, addLog)
        addLog(`🔍 Found ${businesses.length} businesses from search`)
        
        let emailsSent = 0
        let emailsFound = 0
        let whatsappQueued = 0
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
                
                // EARLY domain filtering - skip social media, platforms, etc. BEFORE API calls
                if (isBlockedWebsite(domain)) {
                    addLog(`   🚫 SKIP: ${domain} (blocked website type)`)
                    continue
                }
                
                // Find contact info (email and phone with multi-layer lookup)
                addLog(`   🔍 Looking up contact info...`)
                const contactInfo = await findContactInfo(domain, business.name, addLog)
                if (!contactInfo.email) {
                    addLog(`   ❌ No email found for ${domain}`)
                    continue
                }
                
                const email = contactInfo.email
                emailsFound++
                addLog(`   ✅ Email found: ${email}`)
                if (contactInfo.phone) {
                    addLog(`   📞 Phone found: ${contactInfo.phone} (via ${contactInfo.phoneSource})`)
                } else {
                    addLog(`   ⚠️ No phone number found after all layers`)
                }
                
                // Check if email domain is blocked (India/China providers, etc.)
                if (isBlockedDomain(email)) {
                    addLog(`   🚫 BLOCKED: ${email} (blocked email domain)`)
                    continue
                }
                
                // Check if unsubscribed or already contacted
                const isUnsub = await isUnsubscribed(email)
                if (isUnsub) {
                    addLog(`   ⛔ SKIP: ${email} (unsubscribed)`)
                    continue
                }
                
                const contacted = await alreadyContacted(email)
                if (contacted) {
                    addLog(`   ⏭️ SKIP: ${email} (already contacted)`)
                    continue
                }
                
                addLog(`   ✅ Email passed all checks, preparing to send...`)
                
                // Clean business name using AI — pass domain as fallback source
                addLog(`   🤖 Cleaning business name with AI...`)
                const cleanName = await cleanBusinessNameWithAI(business.name, domain)
                addLog(`   📝 Name: "${business.name}" → "${cleanName}"`)
                
                // HARD SKIP: if we couldn't extract a real company name, do NOT send the email
                if (!cleanName) {
                    addLog(`   🚫 SKIP: Could not extract a valid company name from "${business.name}" / ${domain}`)
                    continue
                }
                
                // Generate email content
                addLog(`   📧 Generating email content...`)
                const prospectData = { clean_name: cleanName, name: cleanName, email }
                const { subject, body } = generateEmailContent(prospectData, sender, businessType)
                
                // Create prospect record
                addLog(`   💾 Saving prospect to database...`)
                const { data: prospect, error: prospectError } = await supabase
                    .from('prospect')
                    .insert({
                        search_query_id: searchRecord.id,
                        name: cleanName,
                        website: business.website,
                        email,
                        phone: contactInfo.phone || null,
                        contact_name: contactInfo.firstName && contactInfo.lastName 
                            ? `${contactInfo.firstName} ${contactInfo.lastName}` 
                            : contactInfo.firstName || null,
                        contact_position: contactInfo.position || null,
                        business_type: businessType,
                        sales_pitch: `Subject: ${subject}\n\n${body}`
                    })
                    .select()
                    .single()
                
                if (prospectError) {
                    addLog(`   ❌ Database error: ${prospectError.message || JSON.stringify(prospectError)}`)
                    console.error('Failed to create prospect:', prospectError)
                    continue
                }
                addLog(`   ✅ Prospect saved (ID: ${prospect.id})`)
                
                // Send email
                addLog(`   📨 Sending email via Brevo...`)
                try {
                    const messageId = await sendBrevoEmail(email, subject, body, sender, prospect.id)
                    addLog(`   ✅ Brevo response: ${messageId || 'sent'}`)
                    
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
                } catch (emailError: any) {
                    addLog(`   ❌ Email send error: ${emailError.message || 'Unknown'}`)
                    continue
                }
                
                // Add to WhatsApp queue if phone number available
                if (contactInfo.phone) {
                    await addToWhatsAppQueue(prospect.id, contactInfo.phone, cleanName, businessType)
                    whatsappQueued++
                    addLog(`   📱 WhatsApp QUEUED for ${contactInfo.phone}`)
                } else {
                    addLog(`   ⏭️ WhatsApp skipped (no phone number)`)
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
        addLog(`   📱 WhatsApp queued: ${whatsappQueued}`)
        addLog(`========================================`)
        
        return res.status(200).json({
            success: true,
            message: `${emailsSent} emails sent, ${whatsappQueued} WhatsApp queued`,
            query: searchQuery,
            sender,
            found: businesses.length,
            emailsFound,
            emailsSent,
            whatsappQueued,
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
