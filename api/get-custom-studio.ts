import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { slug } = req.query;

    if (!slug || typeof slug !== 'string') {
      return res.status(400).json({ error: 'Missing slug parameter.' });
    }

    const cleanSlug = slug.trim().toLowerCase();

    const { data: record, error } = await supabase
      .from('custom_studios')
      .select('company_name, design_data, created_at')
      .eq('slug', cleanSlug)
      .maybeSingle();

    if (error) {
      return res.status(500).json({ error: 'Failed to retrieve custom design.', details: error.message });
    }

    if (!record) {
      return res.status(404).json({ error: 'Exclusive web link not found.' });
    }

    let rawData = record.design_data;
    if (typeof rawData === 'string') {
      try {
        rawData = JSON.parse(rawData);
      } catch (_) {
        // Fallback
      }
    }

    return res.status(200).json({
      success: true,
      companyName: record.company_name,
      designData: rawData,
      createdAt: record.created_at
    });

  } catch (err: any) {
    console.error('get-custom-studio error:', err.message);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
