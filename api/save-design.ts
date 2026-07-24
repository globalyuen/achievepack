import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { randomUUID } from 'crypto';

function generateCode(): string {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    if (!SUPABASE_URL || !SUPABASE_KEY) return res.status(500).json({ error: 'Server configuration error' });

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { shapeId, width, height, depth, unit, layers, backdrop, customProps } = req.body || {};

    // Generate unique 8-character code
    let code = generateCode();
    let unique = false;
    let attempts = 0;

    while (!unique && attempts < 5) {
      const { data: existing } = await supabase
        .from('webhook_logs')
        .select('id')
        .eq('source', '3d_design')
        .eq('message', code)
        .maybeSingle();

      if (!existing) {
        unique = true;
      } else {
        code = generateCode();
        attempts++;
      }
    }

    const newId = randomUUID();
    const rawData = {
      shapeId: shapeId || '',
      width: width || 170,
      height: height || 210,
      depth: depth || 36.4,
      unit: unit || 'mm',
      layers: layers || [],
      backdrop: backdrop || 'studio',
      customProps: customProps || [],
      createdAt: new Date().toISOString()
    };

    const { error: insertErr } = await supabase
      .from('webhook_logs')
      .insert({
        id: newId,
        source: '3d_design',
        status: 'Success',
        message: code,
        raw_data: rawData,
      });

    if (insertErr) {
      return res.status(500).json({ error: 'Failed to save design.', details: insertErr.message });
    }

    return res.status(200).json({ success: true, code });

  } catch (err: any) {
    console.error('save-design error:', err.message);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
