import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { randomUUID } from 'crypto';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    if (!SUPABASE_URL || !SUPABASE_KEY) return res.status(500).json({ error: 'Server configuration error' });

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { id, invoiceNo, supplierName, billTo, shipTo, incoterm, invoiceDate, items } = req.body || {};

    // --- UPDATE existing record (supplier submission or admin refresh) ---
    if (id) {
      const { data: existing, error: fetchErr } = await supabase
        .from('webhook_logs')
        .select('raw_data')
        .eq('id', id)
        .single();

      if (fetchErr || !existing) return res.status(404).json({ error: 'Packing link not found.' });

      let rawData = existing.raw_data || {};
      if (typeof rawData === 'string') { try { rawData = JSON.parse(rawData); } catch (_) { rawData = {}; } }

      const updatedRawData = {
        ...rawData,
        items: items || rawData.items || [],
        supplierSubmitted: true,
        supplierSubmittedAt: new Date().toISOString(),
      };

      const { error: updateErr } = await supabase
        .from('webhook_logs')
        .update({ raw_data: updatedRawData, status: 'Success', message: `Packing filled by supplier for ${rawData.invoiceNo || ''}` })
        .eq('id', id);

      if (updateErr) return res.status(500).json({ error: 'Failed to update.', details: updateErr.message });
      return res.status(200).json({ success: true });
    }

    // --- CREATE new record ---
    const newId = randomUUID();
    const rawData = {
      type: 'packing_link',
      invoiceNo: invoiceNo || 'PL-NEW',
      supplierName: supplierName || '',
      billTo: billTo || '',
      shipTo: shipTo || '',
      incoterm: incoterm || 'FOB China',
      invoiceDate: invoiceDate || new Date().toLocaleDateString('en-GB'),
      items: (items || []).map((item: any) => ({
        id: item.id,
        name: item.name || '',
        details: item.details || '',
        ctn: item.ctn || 0,
        kgCtn: item.kgCtn || 0,
        cbm: item.cbm || 0,
      })),
      supplierSubmitted: false,
      createdAt: new Date().toISOString(),
    };

    const { error: insertErr } = await supabase
      .from('webhook_logs')
      .insert({
        id: newId,
        source: 'packing_link',
        status: 'Pending',
        message: `Packing link created for Invoice ${invoiceNo}`,
        raw_data: rawData,
      });

    if (insertErr) return res.status(500).json({ error: 'Failed to create packing link.', details: insertErr.message });
    return res.status(200).json({ success: true, id: newId });

  } catch (err: any) {
    console.error('save-packing-link error:', err.message);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
