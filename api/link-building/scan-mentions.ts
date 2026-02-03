import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY || ''
)

// Google Custom Search API (free tier: 100 queries/day)
const GOOGLE_SEARCH_API_KEY = process.env.GOOGLE_SEARCH_API_KEY || ''
const GOOGLE_SEARCH_CX = process.env.GOOGLE_SEARCH_CX || ''

// Our website domains to check for backlinks
const OUR_DOMAINS = ['achievepack.com', 'pouch.eco', 'www.achievepack.com', 'www.pouch.eco']

interface SearchResult {
    title: string
    link: string
    displayLink: string
    snippet: string
    hasBacklink?: boolean
}

async function searchGoogle(query: string): Promise<SearchResult[]> {
    if (!GOOGLE_SEARCH_API_KEY || !GOOGLE_SEARCH_CX) {
        console.log('Google Search API not configured, using mock data')
        return []
    }
    
    try {
        const url = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_SEARCH_API_KEY}&cx=${GOOGLE_SEARCH_CX}&q=${encodeURIComponent(query)}&num=10`
        const response = await fetch(url)
        const data = await response.json()
        
        if (data.error) {
            console.error('Google Search API error:', data.error)
            return []
        }
        
        return (data.items || []).map((item: any) => ({
            title: item.title,
            link: item.link,
            displayLink: item.displayLink,
            snippet: item.snippet || '',
            hasBacklink: false
        }))
    } catch (error) {
        console.error('Google Search error:', error)
        return []
    }
}

async function checkForBacklink(url: string): Promise<boolean> {
    try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000)
        
        const response = await fetch(url, {
            signal: controller.signal,
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)'
            }
        })
        clearTimeout(timeoutId)
        
        const html = await response.text()
        const lowerHtml = html.toLowerCase()
        
        // Check if page contains links to our domains
        for (const domain of OUR_DOMAINS) {
            if (lowerHtml.includes(domain)) {
                return true
            }
        }
        
        return false
    } catch (error) {
        console.log(`Could not check ${url}:`, error)
        return false
    }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }
    
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' })
    }
    
    try {
        const keyword = (req.query.keyword as string) || 'achievepack'
        console.log(`Scanning for brand mentions: "${keyword}"`)
        
        // Search Google for mentions
        const results = await searchGoogle(keyword)
        
        if (results.length === 0) {
            // Return mock data if no API configured
            return res.status(200).json({
                success: true,
                message: 'Google Search API not configured. Add GOOGLE_SEARCH_API_KEY and GOOGLE_SEARCH_CX to environment variables.',
                results: [],
                keyword
            })
        }
        
        // Filter out our own domains
        const filteredResults = results.filter(r => 
            !OUR_DOMAINS.some(d => r.displayLink.includes(d))
        )
        
        // Check each result for backlinks (limit to first 5 for speed)
        const checkedResults = []
        for (const result of filteredResults.slice(0, 5)) {
            const hasBacklink = await checkForBacklink(result.link)
            checkedResults.push({ ...result, hasBacklink })
            
            // Save to database if it's a new mention
            try {
                const domain = new URL(result.link).hostname.replace('www.', '')
                
                // Check if already exists
                const { data: existing } = await supabase
                    .from('brand_mentions')
                    .select('id')
                    .eq('found_url', result.link)
                    .single()
                
                if (!existing) {
                    await supabase.from('brand_mentions').insert({
                        keyword,
                        found_url: result.link,
                        found_domain: domain,
                        snippet: result.snippet,
                        has_backlink: hasBacklink,
                        status: 'new'
                    })
                }
            } catch (dbError) {
                console.log('DB insert error (might be duplicate):', dbError)
            }
        }
        
        // Add remaining results without backlink check
        for (const result of filteredResults.slice(5)) {
            checkedResults.push({ ...result, hasBacklink: false })
        }
        
        return res.status(200).json({
            success: true,
            results: checkedResults,
            keyword,
            total: checkedResults.length
        })
        
    } catch (error: any) {
        console.error('Scan error:', error)
        return res.status(500).json({
            success: false,
            error: error.message || 'Scan failed'
        })
    }
}
