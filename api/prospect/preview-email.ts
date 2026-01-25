import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

// Email template with SEO content from achievepack.com
const EMAIL_TEMPLATES = {
    default: {
        subject: (name: string) => `Boost ${name} sales by 15-20% with eco-packaging`,
        body: (prospect: any, profile: any) => `Hi there,

I've checked out ${prospect.name} and see huge potential for your ${prospect.business_type || 'products'}.

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

Would you be open to a quick chat about how we could help ${prospect.name?.split(' ')[0] || 'your business'}?

Best regards,
${profile.signature}

---
Achieve Pack | Sustainable Packaging Solutions
https://achievepack.com

To unsubscribe from future emails: https://achievepack.com/unsubscribe?email=${encodeURIComponent(prospect.email || '')}`
    },
    coffee: {
        subject: (name: string) => `Premium eco-packaging for ${name} coffee`,
        body: (prospect: any, profile: any) => `Hi there,

I noticed ${prospect.name} offers specialty coffee - we'd love to help with your packaging needs.

Achieve Pack specializes in coffee packaging that keeps beans fresh while meeting your sustainability goals:

✓ What we offer for coffee brands:
• Kraft paper pouches with high-barrier lining
• Degassing valves and resealable zippers
• Compostable & recyclable options
• Custom printing with matte/gloss finish

✓ Case studies from coffee roasters:
https://achievepack.com/industry/coffee-tea

✓ Free services included:
• Design consultation
• 3D product mockups
• Sample program

📅 Book a free consultation:
https://calendly.com/30-min-free-packaging-consultancy

Would you like to see some samples for ${prospect.name?.split(' ')[0] || 'your roastery'}?

Best regards,
${profile.signature}

---
Achieve Pack | Sustainable Packaging Solutions
https://achievepack.com

To unsubscribe: https://achievepack.com/unsubscribe?email=${encodeURIComponent(prospect.email || '')}`
    },
    food: {
        subject: (name: string) => `Eco-friendly packaging solutions for ${name}`,
        body: (prospect: any, profile: any) => `Hi there,

I came across ${prospect.name} and was impressed by your food products. We specialize in sustainable packaging for food brands.

✓ Our food packaging solutions:
• FDA-approved food-safe materials
• Excellent barrier properties for freshness
• Compostable & recyclable options
• Stand-up pouches, flat bags, and custom formats

✓ Why food brands choose us:
• EN 13432 certified compostable packaging
• Low minimums (500 units)
• 2-week turnaround time
• Free design support

📦 Learn more:
• Food Industry Solutions: https://achievepack.com/industry/food-snacks
• Our Materials: https://achievepack.com/materials/compostable

📅 Free 30-min consultation:
https://calendly.com/30-min-free-packaging-consultancy

Would a quick chat make sense?

Best regards,
${profile.signature}

---
Achieve Pack | Sustainable Packaging Solutions
https://achievepack.com

To unsubscribe: https://achievepack.com/unsubscribe?email=${encodeURIComponent(prospect.email || '')}`
    }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, error: 'Method not allowed' })
    }

    try {
        const { id, template } = req.query
        
        if (!id) {
            return res.status(400).json({ success: false, error: 'Prospect ID required' })
        }

        const { data: prospect, error } = await supabase
            .from('prospect')
            .select('*, prospect_search_query(sender)')
            .eq('id', id)
            .single()

        if (error || !prospect) {
            return res.status(404).json({ success: false, error: 'Prospect not found' })
        }

        // Generate email preview
        const shortName = prospect.name?.split(' ')[0] || prospect.name || 'your business'
        const businessType = (prospect.business_type || '').toLowerCase()
        const sender = prospect.prospect_search_query?.sender || 'ryan'
        
        // Get sender profile
        const senderProfiles: Record<string, { name: string; email: string; signature: string }> = {
            ryan: { name: 'Ryan Wong', email: 'ryan@pouch.eco', signature: 'Ryan Wong\nBusiness Development\nPouch.eco | Sustainable Packaging Solutions\nryan@pouch.eco' },
            jericha: { name: 'Jericha K.', email: 'Jericha.k@pouch.eco', signature: 'Jericha K.\nClient Relations\nPouch.eco | Sustainable Packaging Solutions\nJericha.k@pouch.eco' },
            eric: { name: 'Eric Chan', email: 'eric@pouch.eco', signature: 'Eric Chan\nSales Manager\nPouch.eco | Sustainable Packaging Solutions\neric@pouch.eco' }
        }
        
        const profile = senderProfiles[sender] || senderProfiles.ryan
        
        // Select template based on business type or explicit template param
        let selectedTemplate = EMAIL_TEMPLATES.default
        const templateKey = (template as string) || businessType
        
        if (templateKey.includes('coffee') || templateKey.includes('roaster') || templateKey.includes('tea')) {
            selectedTemplate = EMAIL_TEMPLATES.coffee
        } else if (templateKey.includes('food') || templateKey.includes('snack') || templateKey.includes('bakery')) {
            selectedTemplate = EMAIL_TEMPLATES.food
        }
        
        const subject = selectedTemplate.subject(shortName)
        const body = selectedTemplate.body(prospect, profile)

        return res.status(200).json({
            success: true,
            subject,
            body,
            prospect: {
                id: prospect.id,
                name: prospect.name,
                email: prospect.email
            },
            templates: Object.keys(EMAIL_TEMPLATES)
        })
    } catch (error) {
        console.error('Preview email error:', error)
        return res.status(500).json({ success: false, error: 'Failed to generate preview' })
    }
}
