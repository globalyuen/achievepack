import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

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
        const { id } = req.query
        
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
        const businessType = prospect.business_type || 'products'
        const sender = prospect.prospect_search_query?.sender || 'ryan'
        
        // Get sender profile
        const senderProfiles: Record<string, { name: string; signature: string }> = {
            ryan: { name: 'Ryan Wong', signature: 'Ryan Wong\nBusiness Development\nPouch.eco | Sustainable Packaging Solutions' },
            jericha: { name: 'Jericha K.', signature: 'Jericha K.\nClient Relations\nPouch.eco | Sustainable Packaging Solutions' },
            eric: { name: 'Eric Chan', signature: 'Eric Chan\nSales Manager\nPouch.eco | Sustainable Packaging Solutions' }
        }
        
        const profile = senderProfiles[sender] || senderProfiles.ryan
        
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
${profile.signature}`

        return res.status(200).json({
            success: true,
            subject,
            body,
            prospect: {
                id: prospect.id,
                name: prospect.name,
                email: prospect.email
            }
        })
    } catch (error) {
        console.error('Preview email error:', error)
        return res.status(500).json({ success: false, error: 'Failed to generate preview' })
    }
}
