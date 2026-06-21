import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const id = req.query.id as string;
    if (!id) return res.status(400).json({ error: 'No packing link ID provided' });

    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    if (!SUPABASE_URL || !SUPABASE_KEY) return res.status(500).json({ error: 'Server configuration error' });

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    const { data: logRow, error: logError } = await supabase
      .from('webhook_logs')
      .select('raw_data')
      .eq('id', id)
      .single();

    if (logError || !logRow) return res.status(404).json({ error: 'Packing link not found or expired.' });

    let rawData = logRow.raw_data;
    if (typeof rawData === 'string') { try { rawData = JSON.parse(rawData); } catch (_) {} }

    if (rawData?.type !== 'packing_link') {
      return res.status(404).json({ error: 'This link is not a packing list.' });
    }

    return res.status(200).json({
      success: true,
      invoiceNo: rawData.invoiceNo,
      billTo: rawData.billTo,
      shipTo: rawData.shipTo,
      incoterm: rawData.incoterm,
      invoiceDate: rawData.invoiceDate,
      items: rawData.items || [],
      supplierPassword: rawData.supplierPassword || '1234',
      customerPassword: rawData.customerPassword || '4321',
      supplierSubmitted: rawData.supplierSubmitted || false,
      supplierSubmittedAt: rawData.supplierSubmittedAt || null,
    });

  } catch (err: any) {
    console.error('get-packing-link error:', err.message);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
