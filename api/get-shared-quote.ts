import { createClient } from '@supabase/supabase-js';

export const config = {
  runtime: 'edge'
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store, no-cache, must-revalidate',
};

export default async function handler(req: Request): Promise<Response> {
  // Handle CORS for OPTIONS
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: CORS_HEADERS });
  }

  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: CORS_HEADERS });
  }

  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return new Response(JSON.stringify({ error: 'No quote ID provided' }), { status: 400, headers: CORS_HEADERS });
    }

    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      return new Response(JSON.stringify({ error: 'Server configuration error' }), { status: 500, headers: CORS_HEADERS });
    }

    // Use service key to bypass RLS since this is a public link
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    
    // Fetch only the needed fields from webhook_logs
    const { data: logRow, error: logError } = await supabase
      .from('webhook_logs')
      .select('raw_data')
      .eq('id', id)
      .single();

    if (logError || !logRow) {
      return new Response(JSON.stringify({ error: 'Quote not found or link has expired.' }), { status: 404, headers: CORS_HEADERS });
    }

    let rawData = logRow.raw_data;
    if (typeof rawData === 'string') {
      try {
        rawData = JSON.parse(rawData);
      } catch (e) {
        console.error("Failed to parse raw_data:", e);
      }
    }

    const quoteHtml = rawData?.quoteHtml;

    if (!quoteHtml) {
      return new Response(JSON.stringify({ error: 'Quote content is missing.' }), { status: 404, headers: CORS_HEADERS });
    }

    return new Response(JSON.stringify({ 
      success: true, 
      quoteHtml,
      pricingData: rawData?.pricingData,
      profitMultiplier: rawData?.profitMultiplier,
      shippingMultiplier: rawData?.shippingMultiplier,
      customer: rawData?.customer
    }), { 
      status: 200, 
      headers: CORS_HEADERS
    });

  } catch (err: any) {
    console.error("Get Shared Quote API Error:", err.message);
    return new Response(JSON.stringify({ 
      success: false,
      error: 'Failed to access quote', 
      details: err.message 
    }), { status: 500, headers: CORS_HEADERS });
  }
}
