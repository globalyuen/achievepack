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
    const { id, quoteHtml, customer, detailText, pricingData, profitMultiplier, shippingMultiplier } = req.body || {};

    if (!id || !quoteHtml) {
      return res.status(400).json({ error: 'Missing id or quoteHtml' });
    }

    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    // 1. Fetch current row to get existing raw_data and preserve other fields (like raw text, etc.)
    const { data: existingRow, error: fetchError } = await supabase
      .from('webhook_logs')
      .select('raw_data')
      .eq('id', id)
      .single();

    if (fetchError) {
      console.error("Error fetching existing quote row:", fetchError);
      return res.status(404).json({ error: 'Quote row not found in database.' });
    }

    let existingRawData = existingRow?.raw_data || {};
    if (typeof existingRawData === 'string') {
      try {
        existingRawData = JSON.parse(existingRawData);
      } catch (e) {
        console.error("Failed to parse existing raw_data JSON string:", e);
        existingRawData = {};
      }
    }

    // 2. Merge existing raw_data with the updated properties
    const updatedRawData = {
      ...existingRawData,
      customer: customer || existingRawData.customer || 'Valued Client',
      quoteHtml: quoteHtml,
      pricingData: pricingData || existingRawData.pricingData || null,
      profitMultiplier: profitMultiplier !== undefined ? profitMultiplier : (existingRawData.profitMultiplier || 1.6),
      shippingMultiplier: shippingMultiplier !== undefined ? shippingMultiplier : (existingRawData.shippingMultiplier || 1.0),
      generatedAt: new Date().toISOString()
    };

    // If detailText is explicitly passed, update it, otherwise preserve the existing text/detailText field
    if (detailText !== undefined) {
      updatedRawData.text = detailText;
    }

    // 3. Update the record in Supabase
    const { data: updated, error: updateError } = await supabase
      .from('webhook_logs')
      .update({
        status: 'Success',
        message: `Quote shared for ${customer || 'Client'}`,
        raw_data: updatedRawData
      })
      .eq('id', id)
      .select();

    if (updateError) {
      console.error("Supabase update error:", updateError);
      return res.status(500).json({ error: 'Failed to update quote in database.', details: updateError.message });
    }

    return res.status(200).json({ success: true, updated: updated?.[0] });

  } catch (err: any) {
    console.error("Save Shared Quote API Error:", err.message);
    return res.status(500).json({ success: false, error: 'Internal Server Error', details: err.message });
  }
}
