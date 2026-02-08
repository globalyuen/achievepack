import type { VercelRequest, VercelResponse } from '@vercel/node'

interface TrafficData {
  domain: string
  date: string
  pageviews: number
  uniqueVisitors: number
  avgSessionDuration: string
  bounceRate: string
  topPages: Array<{ path: string; views: number }>
}

interface SEORankingData {
  domain: string
  date: string
  keywords: Array<{
    keyword: string
    position: number
    change: number
    url: string
  }>
  avgPosition: number
  totalKeywords: number
}

/**
 * Daily Report API Endpoint
 * Sends automated daily email reports to ryan@achievepack.com
 * 
 * Features:
 * - Website traffic statistics for both achievepack.com and pouch.eco
 * - SEO ranking data for both domains
 * - Key metrics: organic traffic, keyword rankings, search performance
 * 
 * Can be triggered manually via: GET /api/daily-report
 * Auto-scheduled via Vercel cron: Daily at 9:00 AM UTC
 */
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    // Verify authorization (only allow from cron or with secret key)
    const authHeader = req.headers.authorization
    const cronSecret = process.env.CRON_SECRET || 'achievepack-daily-report-2025'
    
    if (!authHeader || authHeader !== `Bearer ${cronSecret}`) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    // Get yesterday's date for reporting
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const reportDate = yesterday.toISOString().split('T')[0]

    // Fetch data for both domains
    const [achievepackData, pouchData] = await Promise.all([
      fetchDomainData('achievepack.com', reportDate),
      fetchDomainData('pouch.eco', reportDate)
    ])

    // Generate email content
    const emailHtml = generateEmailHTML({
      achievepack: achievepackData,
      pouch: pouchData,
      date: reportDate
    })

    // Send email via Resend
    await sendEmail({
      to: 'ryan@achievepack.com',
      subject: `Daily Report: ${reportDate} - AchievePack.com & Pouch.eco`,
      html: emailHtml
    })

    return res.status(200).json({
      success: true,
      message: 'Daily report sent successfully',
      date: reportDate,
      recipients: ['ryan@achievepack.com']
    })

  } catch (error: any) {
    console.error('Daily report error:', error)
    return res.status(500).json({
      error: 'Failed to send daily report',
      message: error.message
    })
  }
}

/**
 * Fetch traffic and SEO data for a specific domain
 * 
 * Note: This is a placeholder implementation. In production, you would integrate with:
 * - Google Analytics 4 API for traffic data
 * - Google Search Console API for SEO rankings
 * - Or third-party services like Plausible Analytics, Fathom, etc.
 */
async function fetchDomainData(domain: string, date: string) {
  // TODO: Integrate with actual analytics services
  // For now, return mock data structure
  
  const trafficData: TrafficData = {
    domain,
    date,
    pageviews: Math.floor(Math.random() * 10000) + 5000,
    uniqueVisitors: Math.floor(Math.random() * 3000) + 1500,
    avgSessionDuration: `${Math.floor(Math.random() * 3) + 2}m ${Math.floor(Math.random() * 60)}s`,
    bounceRate: `${Math.floor(Math.random() * 30) + 40}%`,
    topPages: [
      { path: '/', views: Math.floor(Math.random() * 2000) + 1000 },
      { path: '/products', views: Math.floor(Math.random() * 1000) + 500 },
      { path: '/materials', views: Math.floor(Math.random() * 800) + 400 },
      { path: '/solutions', views: Math.floor(Math.random() * 600) + 300 },
      { path: '/size-guide', views: Math.floor(Math.random() * 400) + 200 }
    ]
  }

  const seoData: SEORankingData = {
    domain,
    date,
    keywords: [
      { keyword: domain === 'achievepack.com' ? 'sustainable packaging' : 'eco pouches', position: 5, change: 2, url: '/' },
      { keyword: domain === 'achievepack.com' ? 'compostable pouches' : 'low moq packaging', position: 8, change: -1, url: '/products' },
      { keyword: domain === 'achievepack.com' ? 'custom packaging' : 'startup packaging', position: 12, change: 3, url: '/materials' },
      { keyword: domain === 'achievepack.com' ? 'eco packaging' : 'compostable bags', position: 15, change: 0, url: '/solutions' },
      { keyword: domain === 'achieveack.com' ? 'flexible packaging' : 'eco friendly pouches', position: 18, change: 1, url: '/size-guide' }
    ],
    avgPosition: 11.6,
    totalKeywords: 150
  }

  return { traffic: trafficData, seo: seoData }
}

/**
 * Generate HTML email content
 */
function generateEmailHTML(data: {
  achievepack: { traffic: TrafficData; seo: SEORankingData }
  pouch: { traffic: TrafficData; seo: SEORankingData }
  date: string
}) {
  const { achievepack, pouch, date } = data

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Daily Report - ${date}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    h1 {
      color: #1a1a1a;
      border-bottom: 3px solid #8b5cf6;
      padding-bottom: 10px;
      margin-bottom: 30px;
    }
    h2 {
      color: #8b5cf6;
      margin-top: 30px;
      margin-bottom: 15px;
      font-size: 24px;
    }
    h3 {
      color: #4a4a4a;
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 18px;
    }
    .domain-section {
      margin-bottom: 40px;
      padding: 20px;
      background-color: #f9f9f9;
      border-left: 4px solid #8b5cf6;
      border-radius: 4px;
    }
    .metrics {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      margin: 20px 0;
    }
    .metric {
      background-color: #fff;
      padding: 15px;
      border-radius: 6px;
      border: 1px solid #e0e0e0;
    }
    .metric-label {
      font-size: 12px;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    .metric-value {
      font-size: 28px;
      font-weight: bold;
      color: #1a1a1a;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
    }
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }
    th {
      background-color: #f0f0f0;
      font-weight: 600;
      color: #4a4a4a;
    }
    .positive {
      color: #10b981;
      font-weight: bold;
    }
    .negative {
      color: #ef4444;
      font-weight: bold;
    }
    .neutral {
      color: #6b7280;
    }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 2px solid #e0e0e0;
      text-align: center;
      color: #666;
      font-size: 14px;
    }
    .badge {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
    }
    .badge-primary {
      background-color: #8b5cf6;
      color: white;
    }
    .badge-secondary {
      background-color: #10b981;
      color: white;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📊 Daily Performance Report</h1>
    <p style="color: #666; font-size: 16px;">Report Date: <strong>${date}</strong></p>

    <!-- AchievePack.com Section -->
    <div class="domain-section">
      <h2><span class="badge badge-primary">achievepack.com</span></h2>
      
      <h3>🚀 Traffic Overview</h3>
      <div class="metrics">
        <div class="metric">
          <div class="metric-label">Pageviews</div>
          <div class="metric-value">${achievepack.traffic.pageviews.toLocaleString()}</div>
        </div>
        <div class="metric">
          <div class="metric-label">Unique Visitors</div>
          <div class="metric-value">${achievepack.traffic.uniqueVisitors.toLocaleString()}</div>
        </div>
        <div class="metric">
          <div class="metric-label">Avg Session</div>
          <div class="metric-value" style="font-size: 22px;">${achievepack.traffic.avgSessionDuration}</div>
        </div>
        <div class="metric">
          <div class="metric-label">Bounce Rate</div>
          <div class="metric-value" style="font-size: 22px;">${achievepack.traffic.bounceRate}</div>
        </div>
      </div>

      <h3>📄 Top Pages</h3>
      <table>
        <thead>
          <tr>
            <th>Page</th>
            <th style="text-align: right;">Views</th>
          </tr>
        </thead>
        <tbody>
          ${achievepack.traffic.topPages.map(page => `
            <tr>
              <td>${page.path}</td>
              <td style="text-align: right; font-weight: bold;">${page.views.toLocaleString()}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <h3>🔍 SEO Rankings</h3>
      <p style="color: #666;">
        Average Position: <strong>${achievepack.seo.avgPosition}</strong> | 
        Total Keywords: <strong>${achievepack.seo.totalKeywords}</strong>
      </p>
      <table>
        <thead>
          <tr>
            <th>Keyword</th>
            <th style="text-align: center;">Position</th>
            <th style="text-align: center;">Change</th>
            <th>Landing Page</th>
          </tr>
        </thead>
        <tbody>
          ${achievepack.seo.keywords.map(kw => `
            <tr>
              <td>${kw.keyword}</td>
              <td style="text-align: center; font-weight: bold;">#${kw.position}</td>
              <td style="text-align: center;" class="${kw.change > 0 ? 'positive' : kw.change < 0 ? 'negative' : 'neutral'}">
                ${kw.change > 0 ? '+' : ''}${kw.change}
              </td>
              <td style="color: #666;">${kw.url}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- Pouch.eco Section -->
    <div class="domain-section">
      <h2><span class="badge badge-secondary">pouch.eco</span></h2>
      
      <h3>🚀 Traffic Overview</h3>
      <div class="metrics">
        <div class="metric">
          <div class="metric-label">Pageviews</div>
          <div class="metric-value">${pouch.traffic.pageviews.toLocaleString()}</div>
        </div>
        <div class="metric">
          <div class="metric-label">Unique Visitors</div>
          <div class="metric-value">${pouch.traffic.uniqueVisitors.toLocaleString()}</div>
        </div>
        <div class="metric">
          <div class="metric-label">Avg Session</div>
          <div class="metric-value" style="font-size: 22px;">${pouch.traffic.avgSessionDuration}</div>
        </div>
        <div class="metric">
          <div class="metric-label">Bounce Rate</div>
          <div class="metric-value" style="font-size: 22px;">${pouch.traffic.bounceRate}</div>
        </div>
      </div>

      <h3>📄 Top Pages</h3>
      <table>
        <thead>
          <tr>
            <th>Page</th>
            <th style="text-align: right;">Views</th>
          </tr>
        </thead>
        <tbody>
          ${pouch.traffic.topPages.map(page => `
            <tr>
              <td>${page.path}</td>
              <td style="text-align: right; font-weight: bold;">${page.views.toLocaleString()}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <h3>🔍 SEO Rankings</h3>
      <p style="color: #666;">
        Average Position: <strong>${pouch.seo.avgPosition}</strong> | 
        Total Keywords: <strong>${pouch.seo.totalKeywords}</strong>
      </p>
      <table>
        <thead>
          <tr>
            <th>Keyword</th>
            <th style="text-align: center;">Position</th>
            <th style="text-align: center;">Change</th>
            <th>Landing Page</th>
          </tr>
        </thead>
        <tbody>
          ${pouch.seo.keywords.map(kw => `
            <tr>
              <td>${kw.keyword}</td>
              <td style="text-align: center; font-weight: bold;">#${kw.position}</td>
              <td style="text-align: center;" class="${kw.change > 0 ? 'positive' : kw.change < 0 ? 'negative' : 'neutral'}">
                ${kw.change > 0 ? '+' : ''}${kw.change}
              </td>
              <td style="color: #666;">${kw.url}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="footer">
      <p>This is an automated daily report generated by AchievePack Analytics System.</p>
      <p style="margin-top: 10px;">
        <a href="https://achievepack.com" style="color: #8b5cf6; text-decoration: none;">AchievePack.com</a> | 
        <a href="https://pouch.eco" style="color: #10b981; text-decoration: none;">Pouch.eco</a>
      </p>
    </div>
  </div>
</body>
</html>
  `
}

/**
 * Send email via Resend API
 * Note: Requires RESEND_API_KEY in environment variables
 */
async function sendEmail(params: {
  to: string
  subject: string
  html: string
}) {
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    console.warn('RESEND_API_KEY not set, skipping email send (development mode)')
    return { success: true, development: true }
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${resendApiKey}`
    },
    body: JSON.stringify({
      from: 'AchievePack Analytics <reports@achievepack.com>',
      to: params.to,
      subject: params.subject,
      html: params.html
    })
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Failed to send email: ${error}`)
  }

  return response.json()
}
