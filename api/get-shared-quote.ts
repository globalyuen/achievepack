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
      console.error(
        'Missing Supabase env vars.',
        'VITE_SUPABASE_URL:', !!process.env.VITE_SUPABASE_URL,
        'SUPABASE_URL:', !!process.env.SUPABASE_URL,
        'SUPABASE_SERVICE_KEY:', !!process.env.SUPABASE_SERVICE_KEY,
        'VITE_SUPABASE_ANON_KEY:', !!process.env.VITE_SUPABASE_ANON_KEY
      );
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Use service key to bypass RLS since this is a public link.
    // Wrap fetch with a 20s AbortController timeout so we never silently hang
    // past Vercel's function window (causing 504).
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
      global: {
        fetch: (url, options) => {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 20000);
          return fetch(url, { ...options, signal: controller.signal }).finally(() =>
            clearTimeout(timeout)
          );
        },
      },
    });
    
    // Fetch only the needed fields from webhook_logs
    const { data: logRow, error: logError } = await supabase
      .from('webhook_logs')
      .select('raw_data')
      .eq('id', id)
      .single();

    if (logError || !logRow) {
      console.error('Supabase error:', logError?.message, '| row found:', !!logRow);
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
    const isTimeout = err.name === 'AbortError' || err.message?.includes('abort');
    console.error("Get Shared Quote API Error:", err.name, err.message);
    return res.status(isTimeout ? 504 : 500).json({ 
      success: false,
      error: isTimeout
        ? 'Database connection timed out — please try again in a moment.'
        : 'Failed to access quote', 
      details: err.message 
    });
  }
}
