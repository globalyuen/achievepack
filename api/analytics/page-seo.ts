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
    const siteUrl = process.env.GSC_SITE_URL // e.g., 'sc-domain:achievepack.com' or 'https://achievepack.com/'
    
    // Check if configured
    if (!credentials || !siteUrl) {
        return res.status(200).json({
            success: false,
            error: 'Search Console not configured. Set GOOGLE_CREDENTIALS_JSON and GSC_SITE_URL environment variables.'
        })
    }
    
    const days = parseInt(req.query.days as string) || 30
    const limit = parseInt(req.query.limit as string) || 20
    
    try {
        // Dynamic import to avoid serverless cold start issues
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
        
        const response = await searchConsole.searchanalytics.query({
            siteUrl: siteUrl,
            requestBody: {
                startDate: startDate.toISOString().split('T')[0],
                endDate: endDate.toISOString().split('T')[0],
                dimensions: ['page'],
                rowLimit: limit,
                aggregationType: 'byPage'
            }
        })
        
        const data = (response.data.rows || []).map((row: any) => ({
            url: row.keys?.[0] || '',
            clicks: row.clicks || 0,
            impressions: row.impressions || 0,
            ctr: row.ctr || 0,
            position: row.position || 0
        }))
        
        return res.status(200).json({
            success: true,
            data
        })
        
    } catch (error: any) {
        console.error('Search Console API error:', error)
        return res.status(200).json({
            success: false,
            error: error?.message || 'Failed to fetch SEO data'
        })
    }
}
