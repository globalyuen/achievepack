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
    const site = req.query.site as string
    
    let targetSiteUrl = siteUrl;
    if (site === 'achievepack.com') {
        targetSiteUrl = 'sc-domain:achievepack.com'
    } else if (site === 'pouch.eco') {
        targetSiteUrl = 'sc-domain:pouch.eco'
    }
    
    try {
        const { google } = await import('googleapis')
        
        const parsedCredentials = JSON.parse(credentials)
        const auth = new google.auth.GoogleAuth({
            credentials: parsedCredentials,
            scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
        })
        
        google.options({ auth: auth as any })
        const searchConsole = google.searchconsole('v1')
        
        const endDate = new Date()
        const startDate = new Date()
        startDate.setDate(startDate.getDate() - days)
        
        const fetchGscKeywords = async (url: string) => {
            const response = await searchConsole.searchanalytics.query({
                siteUrl: url,
                requestBody: {
                    startDate: startDate.toISOString().split('T')[0],
                    endDate: endDate.toISOString().split('T')[0],
                    dimensions: ['page', 'query'],
                    rowLimit: 5000,
                    aggregationType: 'byPage'
                }
            })
            return response.data.rows || []
        }
        
        let allRows: any[] = [];
        if (site === 'all') {
            try {
                const achieveRows = await fetchGscKeywords('sc-domain:achievepack.com');
                const pouchRows = await fetchGscKeywords('sc-domain:pouch.eco');
                allRows = [...achieveRows, ...pouchRows];
            } catch (e) {
                allRows = await fetchGscKeywords(targetSiteUrl);
            }
        } else {
            allRows = await fetchGscKeywords(targetSiteUrl);
        }
        
        // Group keywords by page
        const pageKeywords: Record<string, {
            url: string
            keywords: { query: string; clicks: number; impressions: number; position: number }[]
            totalClicks: number
            totalImpressions: number
        }> = {}
        
        for (const row of allRows) {
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
