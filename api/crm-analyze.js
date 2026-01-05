// Call XAI to analyze inquiry
async function analyzeWithAI(inquiries) {
    const XAI_API_KEY = process.env.XAI_API_KEY;
    if (!XAI_API_KEY) {
        throw new Error('XAI API key not configured');
    }
    const systemPrompt = `You are a CRM data analyst for a packaging company. Analyze customer inquiries and extract:

1. **Industry** - Classify into one of these categories:
   - Coffee & Tea
   - Food & Snacks
   - Pet Food
   - Cannabis/CBD
   - Supplements
   - Cosmetics
   - Baby Products
   - Sauce & Condiments
   - Frozen Food
   - Agriculture
   - Beverage
   - Pharmaceutical
   - E-commerce
   - Retail
   - Manufacturing
   - Other

2. **Country** - Determine the likely country from:
   - Email domain TLD (.com.au = Australia, .co.uk = UK, etc.)
   - Phone number country code
   - Company name hints (Inc = USA, Ltd = UK/AU, Pty = AU, GmbH = Germany)
   - Message content mentions of locations
   - Name patterns if recognizable

3. **Keywords** - Extract 3-5 key product/industry keywords

4. **Suggested Products** - Based on industry, suggest:
   - Stand Up Pouches
   - Flat Bottom Bags
   - 3 Side Seal Pouches
   - Side Gusset Bags
   - Spout Pouches
   - Quad Seal Bags

Return JSON array with analysis for each inquiry.`;
    const inquiryText = inquiries.map((inq, i) => `
--- Inquiry ${i + 1} ---
Name: ${inq.name || 'N/A'}
Email: ${inq.email || 'N/A'}
Phone: ${inq.phone || 'N/A'}
Company: ${inq.company || 'N/A'}
Subject: ${inq.subject || 'N/A'}
Packaging Type: ${inq.packaging_type || 'N/A'}
Message: ${inq.message || 'N/A'}
`).join('\n');
    try {
        const response = await fetch('https://api.x.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${XAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'grok-3-mini-beta',
                messages: [
                    { role: 'system', content: systemPrompt },
                    {
                        role: 'user',
                        content: `Analyze these ${inquiries.length} inquiries and return a JSON array with analysis for each:

${inquiryText}

Return ONLY valid JSON array like:
[
  {
    "industry": "Coffee & Tea",
    "country": "Australia",
    "confidence": { "industry": 0.9, "country": 0.8 },
    "keywords": ["coffee", "roaster", "organic"],
    "suggestedProducts": ["Stand Up Pouches", "Flat Bottom Bags"]
  },
  ...
]`
                    },
                ],
                max_tokens: 2000,
                temperature: 0.3,
            }),
        });
        if (!response.ok) {
            console.error('xAI API error:', response.status);
            throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        const content = data.choices?.[0]?.message?.content || '[]';
        // Extract JSON from response
        const jsonMatch = content.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
        return [];
    }
    catch (error) {
        console.error('AI Analysis Error:', error);
        throw error;
    }
}
// Generate AI insight for analytics data
async function generateAnalyticsInsight(data) {
    const XAI_API_KEY = process.env.XAI_API_KEY;
    if (!XAI_API_KEY) {
        throw new Error('XAI API key not configured');
    }
    const systemPrompt = `You are a business analytics expert for a packaging company. Analyze the CRM and sales data provided and give actionable insights. Be concise and practical. Focus on:
1. Revenue trends and patterns
2. Customer behavior insights
3. Market opportunities
4. Recommendations for growth
Keep response under 200 words.`;
    try {
        const response = await fetch('https://api.x.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${XAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'grok-3-mini-beta',
                messages: [
                    { role: 'system', content: systemPrompt },
                    {
                        role: 'user',
                        content: `Analyze this CRM data and provide business insights:

Date Range: ${data.dateRange}
Total Transactions: ${data.totalTransactions}
Total Revenue: $${data.totalRevenue?.toLocaleString() || 0}

Top Countries: ${JSON.stringify(data.topCountries)}
Top Industries: ${JSON.stringify(data.topIndustries)}
Revenue by Source: ${JSON.stringify(data.bySource)}
Monthly Trend: ${JSON.stringify(data.byMonth)}
Day of Week Pattern: ${JSON.stringify(data.byDayOfWeek)}
Customer Types: ${JSON.stringify(data.customerTypes)}

Provide 3-4 key insights and recommendations.`
                    },
                ],
                max_tokens: 500,
                temperature: 0.5,
            }),
        });
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        const result = await response.json();
        return result.choices?.[0]?.message?.content || 'Unable to generate insight';
    }
    catch (error) {
        console.error('Analytics Insight Error:', error);
        throw error;
    }
}
export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    try {
        const { inquiries, type, data } = req.body;
        // Handle analytics insight request
        if (type === 'analytics_insight' && data) {
            const insight = await generateAnalyticsInsight(data);
            return res.status(200).json({ success: true, insight });
        }
        if (!inquiries || !Array.isArray(inquiries)) {
            return res.status(400).json({ error: 'Invalid inquiries data' });
        }
        // Limit batch size to 20 for API efficiency
        const batch = inquiries.slice(0, 20);
        const results = await analyzeWithAI(batch);
        return res.status(200).json({
            success: true,
            results,
            analyzed: batch.length
        });
    }
    catch (error) {
        console.error('CRM Analyze Error:', error);
        return res.status(500).json({
            error: 'Analysis failed',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}
