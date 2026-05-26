import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const id = req.query.id as string;

    if (!id) {
      return res.status(400).json({ error: 'No quote ID provided' });
    }

    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      return res.status(500).json({ error: 'Server configuration error' });
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
      return res.status(404).json({ error: 'Quote not found or link has expired.' });
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
      return res.status(404).json({ error: 'Quote content is missing.' });
    }

    return res.status(200).json({ 
      success: true, 
      quoteHtml,
      pricingData: rawData?.pricingData,
      profitMultiplier: rawData?.profitMultiplier,
      shippingMultiplier: rawData?.shippingMultiplier,
      customer: rawData?.customer
    });

  } catch (err: any) {
    console.error("Get Shared Quote API Error:", err.message);
    return res.status(500).json({ 
      success: false,
      error: 'Failed to access quote', 
      details: err.message 
    });
  }
}
