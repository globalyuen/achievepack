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

    const suggestions = [
        {
            "trend": {"topic": "PFAS-Free Food Packaging", "country": "USA & EU", "growth": "+145%", "search_volume": "High"},
            "suggested_title": "PFAS-Free Food Packaging - Global Manufacturing Supplier",
            "suggested_url": "https://www.pouch.eco/topics/pfas-free-food-packaging",
            "rationale": "High search volume in USA & EU with +145% growth. Perfect for pouch.eco authority building.",
            "action": "Create Page"
        },
        {
            "trend": {"topic": "Home Compostable Coffee Bags", "country": "Australia & UK", "growth": "+89%", "search_volume": "Medium"},
            "suggested_title": "Home Compostable Coffee Bags - Global Manufacturing Supplier",
            "suggested_url": "https://www.pouch.eco/topics/home-compostable-coffee-bags",
            "rationale": "High search volume in Australia & UK with +89% growth. Perfect for pouch.eco authority building.",
            "action": "Create Page"
        },
        {
            "trend": {"topic": "Mono-Material PE Pouches", "country": "Germany & EU", "growth": "+210%", "search_volume": "High"},
            "suggested_title": "Mono-Material PE Pouches - Global Manufacturing Supplier",
            "suggested_url": "https://www.pouch.eco/topics/mono-material-pe-pouches",
            "rationale": "High search volume in Germany & EU with +210% growth. Perfect for pouch.eco authority building.",
            "action": "Create Page"
        },
        {
            "trend": {"topic": "Child-Resistant Mylar Bags", "country": "USA (States with Legal Cannabis)", "growth": "+65%", "search_volume": "Medium"},
            "suggested_title": "Child-Resistant Mylar Bags - Global Manufacturing Supplier",
            "suggested_url": "https://www.pouch.eco/topics/child-resistant-mylar-bags",
            "rationale": "High search volume in USA (States with Legal Cannabis) with +65% growth. Perfect for pouch.eco authority building.",
            "action": "Create Page"
        },
        {
            "trend": {"topic": "Recycled Ocean Plastic Packaging", "country": "Global", "growth": "+120%", "search_volume": "High"},
            "suggested_title": "Recycled Ocean Plastic Packaging - Global Manufacturing Supplier",
            "suggested_url": "https://www.pouch.eco/topics/recycled-ocean-plastic-packaging",
            "rationale": "High search volume in Global with +120% growth. Perfect for pouch.eco authority building.",
            "action": "Create Page"
        },
        {
            "trend": {"topic": "Minimalist D2C Packaging", "country": "USA & UK", "growth": "+78%", "search_volume": "High"},
            "suggested_title": "Minimalist D2C Packaging - Global Manufacturing Supplier",
            "suggested_url": "https://www.pouch.eco/topics/minimalist-d2c-packaging",
            "rationale": "High search volume in USA & UK with +78% growth. Perfect for pouch.eco authority building.",
            "action": "Create Page"
        }
    ];

    return res.status(200).json({
        success: true,
        ai_suggestions: suggestions
    })
}
