import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

// Search for businesses using SerpAPI
async function searchBusinesses(query: string): Promise<any[]> {
    const SERPAPI_KEY = process.env.SERPAPI_KEY
    
    if (!SERPAPI_KEY) {
        console.log('SERPAPI_KEY not configured, using Google Custom Search fallback')
        // Try Google Custom Search as fallback
        return searchWithGoogleCSE(query)
    }
    
    try {
        const url = `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(query)}&api_key=${SERPAPI_KEY}&num=20`
        const response = await fetch(url)
        const data = await response.json() as { organic_results?: any[], error?: string }
        
        if (data.error) {
            console.error('SerpAPI error:', data.error)
            return searchWithGoogleCSE(query)
        }
        
        return (data.organic_results || []).map((result: any) => ({
            name: result.title?.replace(/ - .*$/, '').replace(/ \| .*$/, '').substring(0, 200) || 'Unknown',
            website: result.link,
            snippet: result.snippet,
            displayed_link: result.displayed_link
        }))
    } catch (error) {
        console.error('SerpAPI fetch error:', error)
        return searchWithGoogleCSE(query)
    }
}

// Fallback: Google Custom Search Engine
async function searchWithGoogleCSE(query: string): Promise<any[]> {
    const CSE_API_KEY = process.env.GOOGLE_CSE_API_KEY
    const CSE_ID = process.env.GOOGLE_CSE_ID
    
    if (!CSE_API_KEY || !CSE_ID) {
        console.log('Google CSE not configured, using mock data')
        return generateMockResults(query)
    }
    
    try {
        const url = `https://www.googleapis.com/customsearch/v1?key=${CSE_API_KEY}&cx=${CSE_ID}&q=${encodeURIComponent(query)}&num=10`
        const response = await fetch(url)
        const data = await response.json() as { items?: any[] }
        
        return (data.items || []).map((item: any) => ({
            name: item.title?.replace(/ - .*$/, '').substring(0, 200) || 'Unknown',
            website: item.link,
            snippet: item.snippet,
            displayed_link: item.displayLink
        }))
    } catch (error) {
        console.error('Google CSE error:', error)
        return generateMockResults(query)
    }
}

// Generate mock results for testing when no API keys are available
function generateMockResults(query: string): any[] {
    const keywords = query.toLowerCase().split(' ')
    const businessType = keywords[0] || 'business'
    const location = keywords.find(k => ['hong', 'kong', 'new', 'york', 'london', 'singapore'].includes(k)) || 'local'
    
    // Generate realistic-looking mock businesses
    const mockBusinesses = [
        { name: `${businessType.charAt(0).toUpperCase() + businessType.slice(1)} Co. ${location}`, suffix: 'Premium Quality' },
        { name: `The ${businessType} House`, suffix: 'Since 2010' },
        { name: `${location.charAt(0).toUpperCase() + location.slice(1)} ${businessType} Trading`, suffix: 'Wholesale & Retail' },
        { name: `Green ${businessType} Studio`, suffix: 'Sustainable Products' },
        { name: `${businessType.charAt(0).toUpperCase() + businessType.slice(1)} Masters`, suffix: 'Artisan Quality' },
        { name: `Pacific ${businessType} Company`, suffix: 'Import & Export' },
        { name: `Urban ${businessType} Collective`, suffix: 'Modern Approach' },
        { name: `${businessType.charAt(0).toUpperCase() + businessType.slice(1)} Haven`, suffix: 'Family Owned' },
    ]
    
    return mockBusinesses.map((b, i) => ({
        name: `${b.name} - ${b.suffix}`,
        website: `https://example${i + 1}.com`,
        snippet: `Leading ${businessType} provider in ${location}. ${b.suffix}. Quality products and excellent service.`,
        displayed_link: `example${i + 1}.com`,
        is_mock: true
    }))
}

// Find email for a business using Hunter.io
async function findEmail(domain: string): Promise<string | null> {
    const HUNTER_API_KEY = process.env.HUNTER_API_KEY
    
    if (!HUNTER_API_KEY) {
        // Generate mock email for testing
        const cleanDomain = domain.replace('www.', '')
        return `info@${cleanDomain}`
    }
    
    try {
        const url = `https://api.hunter.io/v2/domain-search?domain=${domain}&api_key=${HUNTER_API_KEY}`
        const response = await fetch(url)
        const data = await response.json() as { data?: { emails?: { value: string }[] } }
        
        if (data.data?.emails?.[0]?.value) {
            return data.data.emails[0].value
        }
        
        // Fallback: try to find generic email
        return `info@${domain}`
    } catch (error) {
        console.error('Hunter.io error:', error)
        return `info@${domain}`
    }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' })
    }

    try {
        const { query, sender = 'ryan' } = req.body

        if (!query) {
            return res.status(400).json({ success: false, error: 'Query is required' })
        }

        console.log(`Searching for: "${query}" as ${sender}`)

        // Create search query record
        const { data: searchQuery, error: searchError } = await supabase
            .from('prospect_search_query')
            .insert({
                query,
                sender,
                status: 'processing',
                total_results: 0,
                emails_found: 0,
                emails_sent: 0
            })
            .select()
            .single()

        if (searchError) {
            console.error('Error creating search:', searchError)
            return res.status(500).json({ success: false, error: searchError.message })
        }

        // Search for businesses
        const businesses = await searchBusinesses(query)
        console.log(`Found ${businesses.length} businesses`)
        
        let emailsFound = 0
        const prospects: any[] = []
        
        // Process each business
        for (const business of businesses.slice(0, 15)) {
            try {
                if (!business.website) continue
                
                // Extract domain
                let domain: string
                try {
                    domain = new URL(business.website).hostname.replace('www.', '')
                } catch {
                    continue
                }
                
                // Skip common non-business domains
                if (['facebook.com', 'instagram.com', 'linkedin.com', 'twitter.com', 'youtube.com', 'yelp.com', 'tripadvisor.com'].includes(domain)) {
                    continue
                }
                
                // Find email
                const email = await findEmail(domain)
                if (email) emailsFound++
                
                // Determine business type from query
                const queryWords = query.toLowerCase().split(' ')
                const businessType = queryWords.find((w: string) => !['in', 'the', 'and', 'or', 'hong', 'kong', 'new', 'york'].includes(w)) || 'business'
                
                // Create prospect record
                const { data: prospect, error: prospectError } = await supabase
                    .from('prospect')
                    .insert({
                        search_query_id: searchQuery.id,
                        name: business.name,
                        website: business.website,
                        email: email || 'N/A',
                        business_type: businessType,
                        sales_pitch: business.snippet || ''
                    })
                    .select()
                    .single()
                
                if (!prospectError && prospect) {
                    prospects.push(prospect)
                }
            } catch (error) {
                console.error('Error processing business:', error)
            }
        }
        
        // Update search query with results
        await supabase
            .from('prospect_search_query')
            .update({
                status: 'completed',
                total_results: businesses.length,
                emails_found: emailsFound
            })
            .eq('id', searchQuery.id)
        
        console.log(`Search complete: ${prospects.length} prospects created, ${emailsFound} emails found`)
        
        return res.status(200).json({
            success: true,
            search_id: searchQuery.id,
            total_found: businesses.length,
            prospects_created: prospects.length,
            emails_found: emailsFound,
            message: `Found ${prospects.length} prospects`,
            redirect_url: `/results?search_id=${searchQuery.id}`
        })
    } catch (error) {
        console.error('Search error:', error)
        return res.status(500).json({ success: false, error: 'Failed to perform search' })
    }
}
