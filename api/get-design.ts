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
    if (!SUPABASE_URL || !SUPABASE_KEY) return res.status(500).json({ error: 'Server configuration error' });

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { code } = req.query;

    if (!code || typeof code !== 'string') {
      return res.status(400).json({ error: 'Missing code parameter.' });
    }

    const { data: log, error } = await supabase
      .from('webhook_logs')
      .select('raw_data')
      .eq('source', '3d_design')
      .eq('message', code)
      .maybeSingle();

    if (error) {
      return res.status(500).json({ error: 'Failed to retrieve design.', details: error.message });
    }

    if (!log) {
      return res.status(404).json({ error: 'Design not found.' });
    }

    let rawData = log.raw_data;
    if (typeof rawData === 'string') {
      try {
        rawData = JSON.parse(rawData);
      } catch (_) {
        // Fallback
      }
    }

    return res.status(200).json({ success: true, design: rawData });

  } catch (err: any) {
    console.error('get-design error:', err.message);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
