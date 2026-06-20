import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
  if (!SUPABASE_URL || !SUPABASE_KEY) return res.status(500).json({ error: 'Server configuration error' });

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  try {
    // --- DELETE a packing link ---
    if (req.method === 'DELETE') {
      const deleteId = req.query.id as string;
      if (!deleteId) return res.status(400).json({ error: 'No ID provided' });

      const { error: delErr } = await supabase
        .from('webhook_logs')
        .delete()
        .eq('id', deleteId)
        .eq('source', 'packing_link');

      if (delErr) return res.status(500).json({ error: 'Failed to delete', details: delErr.message });
      return res.status(200).json({ success: true });
    }

    // --- LIST all packing links ---
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

    const { data: rows, error: listErr } = await supabase
      .from('webhook_logs')
      .select('id, raw_data, created_at')
      .eq('source', 'packing_link')
      .order('created_at', { ascending: false })
      .limit(50);

    if (listErr) return res.status(500).json({ error: 'Failed to list packing links', details: listErr.message });

    const links = (rows || []).map((row: any) => {
      let rd = row.raw_data;
      if (typeof rd === 'string') { try { rd = JSON.parse(rd); } catch (_) { rd = {}; } }
      return {
        id: row.id,
        invoiceNo: rd?.invoiceNo || '',
        supplierName: rd?.supplierName || '',
        supplierSubmitted: rd?.supplierSubmitted || false,
        supplierSubmittedAt: rd?.supplierSubmittedAt || null,
        createdAt: row.created_at,
        itemCount: Array.isArray(rd?.items) ? rd.items.length : 0,
      };
    });

    return res.status(200).json({ success: true, links });

  } catch (err: any) {
    console.error('list-packing-links error:', err.message);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
