import type { VercelRequest, VercelResponse } from '@vercel/node'

// Search term categories for variety
const SEARCH_CATEGORIES = [
    'premium coffee roasters',
    'organic food stores',
    'gourmet chocolate shops',
    'artisan bakeries',
    'craft beer breweries',
    'specialty tea shops',
    'luxury skincare brands',
    'boutique wine stores',
    'organic juice bars',
    'handmade soap shops',
    'farm-to-table restaurants',
    'natural pet treats',
    'vegan snack brands',
    'health food stores',
    'sustainable fashion brands',
    'eco-friendly home goods',
    'artisan cheese shops',
    'specialty honey producers',
    'organic baby food brands',
    'premium nut butter makers'
]

const LOCATIONS = [
    'Seattle', 'Portland', 'San Francisco', 'Los Angeles', 'New York',
    'Boston', 'Denver', 'Austin', 'Chicago', 'Miami',
    'Hong Kong', 'Singapore', 'London', 'Vancouver', 'Toronto'
]

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' })
    }

    try {
        const XAI_API_KEY = process.env.XAI_API_KEY

        // If XAI API key is available, use AI to generate
        if (XAI_API_KEY) {
            try {
                const response = await fetch('https://api.x.ai/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${XAI_API_KEY}`
                    },
                    body: JSON.stringify({
                        model: 'grok-beta',
                        messages: [{
                            role: 'system',
                            content: 'Generate a unique Google search term to find small businesses that could benefit from eco-friendly packaging. Focus on food, beverage, cosmetics, or specialty product businesses. Format: "[business type] in [city]". Do NOT include packaging companies. Return only the search phrase, nothing else.'
                        }, {
                            role: 'user',
                            content: 'Generate a search phrase for finding potential packaging customers.'
                        }],
                        temperature: 0.9,
                        max_tokens: 50
                    })
                })

                if (response.ok) {
                    const data = await response.json() as { choices?: { message?: { content?: string } }[] }
                    const phrase = data.choices?.[0]?.message?.content?.trim()
                    
                    if (phrase && !phrase.toLowerCase().includes('packaging')) {
                        return res.status(200).json({
                            success: true,
                            phrase,
                            source: 'ai'
                        })
                    }
                }
            } catch (aiError) {
                console.error('AI generation failed, using fallback:', aiError)
            }
        }

        // Fallback: Generate random combination
        const category = SEARCH_CATEGORIES[Math.floor(Math.random() * SEARCH_CATEGORIES.length)]
        const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)]
        const phrase = `${category} in ${location}`

        return res.status(200).json({
            success: true,
            phrase,
            source: 'fallback'
        })
    } catch (error) {
        console.error('Generate phrase error:', error)
        return res.status(500).json({ success: false, error: 'Failed to generate phrase' })
    }
}
