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
    const propertyId = process.env.GA4_PROPERTY_ID
    
    // Check if configured
    if (!credentials || !propertyId) {
        return res.status(200).json({
            success: false,
            error: 'Google Analytics not configured. Set GOOGLE_CREDENTIALS_JSON and GA4_PROPERTY_ID environment variables.'
        })
    }
    
    const days = parseInt(req.query.days as string) || 30
    const limit = parseInt(req.query.limit as string) || 20
    
    try {
        // Dynamic import to avoid serverless cold start issues
        const { BetaAnalyticsDataClient } = await import('@google-analytics/data')
        
        const parsedCredentials = JSON.parse(credentials)
        const client = new BetaAnalyticsDataClient({
            credentials: parsedCredentials
        })
        
        const [response] = await client.runReport({
            property: `properties/${propertyId}`,
            dimensions: [
                { name: 'pagePath' },
                { name: 'pageTitle' }
            ],
            metrics: [
                { name: 'screenPageViews' },
                { name: 'activeUsers' }
            ],
            dateRanges: [
                { startDate: `${days}daysAgo`, endDate: 'today' }
            ],
            orderBys: [
                {
                    metric: { metricName: 'screenPageViews' },
                    desc: true
                }
            ],
            limit: limit
        })
        
        const data = (response.rows || []).map((row: any) => ({
            path: row.dimensionValues?.[0]?.value || '',
            title: row.dimensionValues?.[1]?.value || '',
            views: parseInt(row.metricValues?.[0]?.value || '0'),
            users: parseInt(row.metricValues?.[1]?.value || '0')
        }))
        
        return res.status(200).json({
            success: true,
            data
        })
        
    } catch (error: any) {
        console.error('GA4 API error:', error)
        return res.status(200).json({
            success: false,
            error: error?.message || 'Failed to fetch analytics data'
        })
    }
}
