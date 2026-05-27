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
    const { query, domain } = req.body || {};

    if (!query || !query.trim()) {
      return res.status(400).json({ error: 'Missing search query' });
    }

    if (!domain) {
      return res.status(400).json({ error: 'Missing domain context' });
    }

    // Capture telemetry headers from Vercel edge
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
      .from('search_analytics')
      .insert({
        query: query.trim(),
        domain,
        ip_address: ip,
        user_agent: userAgent,
        country,
        city
      });

    if (error) {
      console.error("Supabase search analytics log error:", error);
      return res.status(500).json({ error: 'Failed to log search term', details: error.message });
    }

    return res.status(200).json({ success: true });

  } catch (err: any) {
    console.error("Search Telemetry API Error:", err.message);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
