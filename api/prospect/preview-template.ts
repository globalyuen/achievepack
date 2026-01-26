import type { VercelRequest, VercelResponse } from '@vercel/node'

// Sender profiles
const SENDER_PROFILES: Record<string, { name: string; email: string }> = {
    ryan: { name: 'Ryan Wong', email: 'ryan@pouch.eco' },
    jericha: { name: 'Jericha K.', email: 'Jericha.k@pouch.eco' },
    eric: { name: 'Eric Chan', email: 'eric@pouch.eco' }
}

// Generate email content - same as cron-autorun.ts
function generateEmailContent(companyName: string, businessType: string, senderKey: string) {
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

To unsubscribe: https://achievepack.com/unsubscribe?email=[recipient_email]`
    
    return { subject, body }
}

// Convert to HTML for preview
function toHtml(body: string): string {
    return body
        .split('\n\n').map(paragraph => {
            let p = paragraph.replace(/\*\*([^*]+)\*\*/g, '<strong style="color: #059669;">$1</strong>')
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
            p = p.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" style="color: #059669;">$1</a>')
            p = p.replace(/\n/g, '<br>')
            return `<p style="margin: 0 0 16px 0; line-height: 1.6;">${p}</p>`
        }).join('')
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

    // Sample data for preview
    const sampleCompany = (req.query.company as string) || 'Organic Coffee Co.'
    const sampleBusinessType = (req.query.type as string) || 'coffee products'
    const sender = (req.query.sender as string) || 'ryan'
    
    const { subject, body } = generateEmailContent(sampleCompany, sampleBusinessType, sender)
    const htmlBody = toHtml(body)
    
    return res.status(200).json({
        success: true,
        preview: {
            subject,
            body,
            html: `<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; font-size: 15px;">${htmlBody}</div>`,
            sender: SENDER_PROFILES[sender] || SENDER_PROFILES.ryan
        },
        note: 'This is a preview of the email template. The [company name] and [business type] will be replaced with actual data during Auto Run.'
    })
}
