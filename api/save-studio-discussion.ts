import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

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
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { slug, discussion } = req.body || {};

    if (!slug || typeof slug !== 'string') {
      return res.status(400).json({ error: 'Missing slug parameter.' });
    }

    if (!Array.isArray(discussion)) {
      return res.status(400).json({ error: 'Missing or invalid discussion parameter.' });
    }

    const cleanSlug = slug.trim().toLowerCase();

    // 1. Fetch current design data
    const { data: record, error: fetchError } = await supabase
      .from('custom_studios')
      .select('design_data')
      .eq('slug', cleanSlug)
      .maybeSingle();

    if (fetchError || !record) {
      return res.status(404).json({ error: 'Studio design not found.' });
    }

    let designData = record.design_data;
    if (typeof designData === 'string') {
      try {
        designData = JSON.parse(designData);
      } catch (_) {
        designData = {};
      }
    }

    // 2. Update only the discussion array
    designData.discussion = discussion;

    // 3. Update the record
    const { error: updateError } = await supabase
      .from('custom_studios')
      .update({ design_data: designData })
      .eq('slug', cleanSlug);

    if (updateError) {
      return res.status(500).json({ error: 'Failed to update discussion.', details: updateError.message });
    }

    return res.status(200).json({ success: true, slug: cleanSlug });

  } catch (err: any) {
    console.error('save-studio-discussion error:', err.message);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
