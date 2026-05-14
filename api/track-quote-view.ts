import { createClient } from '@supabase/supabase-js';

export const config = {
  runtime: 'edge'
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
};

export default async function handler(req: Request): Promise<Response> {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: CORS_HEADERS });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: CORS_HEADERS });
  }

  try {
    const body = await req.json() as any;
    const { quoteId, customerName } = body;

    if (!quoteId) {
      return new Response(JSON.stringify({ error: 'Missing quoteId' }), { status: 400, headers: CORS_HEADERS });
    }

    const country = req.headers.get('x-vercel-ip-country') || 'Unknown';
    const city = req.headers.get('x-vercel-ip-city') || 'Unknown';
    const ip = req.headers.get('x-real-ip') || req.headers.get('x-forwarded-for') || 'Unknown';
    const userAgent = req.headers.get('user-agent') || 'Unknown';

    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      return new Response(JSON.stringify({ error: 'Server configuration error' }), { status: 500, headers: CORS_HEADERS });
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
      return new Response(JSON.stringify({ error: 'Failed to log view' }), { status: 500, headers: CORS_HEADERS });
    }

    return new Response(JSON.stringify({ success: true }), { 
      status: 200, 
      headers: CORS_HEADERS
    });

  } catch (err: any) {
    console.error("Track Quote View API Error:", err.message);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: CORS_HEADERS });
  }
}
