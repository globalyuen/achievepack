import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { quoteId, customerName } = req.body || {};

    if (!quoteId) {
      return res.status(400).json({ error: 'Missing quoteId' });
    }

    const country = (req.headers['x-vercel-ip-country'] as string) || 'Unknown';
    const city = (req.headers['x-vercel-ip-city'] as string) || 'Unknown';
    const ip = (req.headers['x-real-ip'] as string) || (req.headers['x-forwarded-for'] as string) || 'Unknown';
    const userAgent = (req.headers['user-agent'] as string) || 'Unknown';

    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    
    const { error } = await supabase
      .from('webhook_logs')
      .insert({
        source: 'Quote Tracking',
        status: 'View',
        message: `Quote viewed by customer from ${country}`,
        raw_data: {
          quoteId,
          customerName: customerName || 'Unknown',
          country,
          city,
          ip,
          userAgent,
          viewedAt: new Date().toISOString()
        }
      });

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ error: 'Failed to log view' });
    }

    return res.status(200).json({ success: true });

  } catch (err: any) {
    console.error("Track Quote View API Error:", err.message);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
