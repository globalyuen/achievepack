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
    
    const credentials = process.env.GOOGLE_CREDENTIALS_JSON
    const siteUrl = process.env.GSC_SITE_URL
    
    if (!credentials || !siteUrl) {
        return res.status(200).json({
            success: false,
            error: 'Search Console not configured. Set GOOGLE_CREDENTIALS_JSON and GSC_SITE_URL environment variables.'
        })
    }
    
    const days = parseInt(req.query.days as string) || 30
    const limit = parseInt(req.query.limit as string) || 200
    
    try {
        const { google } = await import('googleapis')
        
        const parsedCredentials = JSON.parse(credentials)
        const auth = new google.auth.GoogleAuth({
            credentials: parsedCredentials,
            scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
        })
        
        const searchConsole = google.searchconsole({ version: 'v1', auth })
        
        const endDate = new Date()
        const startDate = new Date()
        startDate.setDate(startDate.getDate() - days)
        
        // Query with both page and query dimensions to get keywords per page
        const response = await searchConsole.searchanalytics.query({
            siteUrl: siteUrl,
            requestBody: {
                startDate: startDate.toISOString().split('T')[0],
                endDate: endDate.toISOString().split('T')[0],
                dimensions: ['page', 'query'],
                rowLimit: 5000,  // Get more rows to aggregate
                aggregationType: 'byPage'
            }
        })
        
        // Group keywords by page
        const pageKeywords: Record<string, {
            url: string
            keywords: { query: string; clicks: number; impressions: number; position: number }[]
            totalClicks: number
            totalImpressions: number
        }> = {}
        
        for (const row of (response.data.rows || [])) {
            const url = row.keys?.[0] || ''
            const query = row.keys?.[1] || ''
            
            if (!pageKeywords[url]) {
                pageKeywords[url] = {
                    url,
                    keywords: [],
                    totalClicks: 0,
                    totalImpressions: 0
                }
            }
            
            pageKeywords[url].keywords.push({
                query,
                clicks: row.clicks || 0,
                impressions: row.impressions || 0,
                position: row.position || 0
            })
            pageKeywords[url].totalClicks += row.clicks || 0
            pageKeywords[url].totalImpressions += row.impressions || 0
        }
        
        // Sort keywords by clicks within each page, keep top 10 keywords per page
        const data = Object.values(pageKeywords)
            .map(page => ({
                url: page.url,
                totalClicks: page.totalClicks,
                totalImpressions: page.totalImpressions,
                keywords: page.keywords
                    .sort((a, b) => b.clicks - a.clicks)
                    .slice(0, 10)  // Top 10 keywords per page
            }))
            .sort((a, b) => b.totalClicks - a.totalClicks)  // Sort pages by total clicks
            .slice(0, limit)
        
        return res.status(200).json({
            success: true,
            data
        })
        
    } catch (error: any) {
        console.error('Search Console API error:', error)
        return res.status(200).json({
            success: false,
            error: error?.message || 'Failed to fetch keyword data'
        })
    }
}
