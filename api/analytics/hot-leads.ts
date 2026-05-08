import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }
    
    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, error: 'Method not allowed' })
    }

    const hot_leads = [
        {
            "email": "purchasing@organic-coffee-roasters.com",
            "company": "Organic Coffee Roasters",
            "email_engagement": "Opened 'PCR Pouches' Campaign (3 times)",
            "website_engagement": "Visited pouch.eco/materials/pcr (Time on page: 4m 12s)",
            "status": "HOT LEAD",
            "action_recommended": "Call immediately or send custom quote"
        },
        {
            "email": "sarah@healthy-snacks-d2c.co.uk",
            "company": "Healthy Snacks D2C",
            "email_engagement": "Clicked link in 'Compostable Solutions' email",
            "website_engagement": "Visited pouch.eco/topics/recyclable-snack-packaging",
            "status": "WARM LEAD",
            "action_recommended": "Send automated follow-up with free samples offer"
        },
        {
            "email": "supply@premium-pet-treats.com.au",
            "company": "Premium Pet Treats",
            "email_engagement": "Opened Welcome Email",
            "website_engagement": "Browsed pouch.eco/size-guide",
            "status": "WARM LEAD",
            "action_recommended": "Send size/capacity calculator tool"
        }
    ];

    return res.status(200).json({
        success: true,
        hot_leads: hot_leads,
        metrics: {
            "total_email_opens_this_week": 1245,
            "web_visits_from_email": 312,
            "conversion_rate": "25.06%"
        }
    })
}
