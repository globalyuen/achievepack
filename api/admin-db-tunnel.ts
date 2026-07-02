import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void | VercelResponse> {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { payload } = req.body;
    if (!payload) return res.status(400).json({ error: 'No payload provided' });

    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    if (!SUPABASE_URL || !SUPABASE_KEY) return res.status(500).json({ error: 'Supabase keys missing' });

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    
    // Service role key bypasses RLS
    const { data, error } = await supabase.from('webhook_logs').insert([payload]).select().single();
    
    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    console.error("Admin DB Tunnel Error:", err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
}
