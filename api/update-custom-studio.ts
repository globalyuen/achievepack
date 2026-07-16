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
    const { slug, password, companyName, designData } = req.body || {};

    if (!slug || typeof slug !== 'string') {
      return res.status(400).json({ error: 'Missing slug parameter.' });
    }

    // Clean slug
    const cleanSlug = slug.trim().toLowerCase();

    // Check password matches 8888 + 4 digits
    const passwordRegex = /^8888\d{4}$/;
    if (!password || !passwordRegex.test(password)) {
      return res.status(401).json({ error: 'Unauthorized: Invalid admin password.' });
    }

    if (!designData) {
      return res.status(400).json({ error: 'Missing design data.' });
    }

    // Update the custom studio link
    const { error: updateError } = await supabase
      .from('custom_studios')
      .update({
        company_name: companyName || null,
        design_data: designData,
      })
      .eq('slug', cleanSlug);

    if (updateError) {
      return res.status(500).json({ error: 'Failed to update custom design.', details: updateError.message });
    }

    return res.status(200).json({ success: true, slug: cleanSlug });

  } catch (err: any) {
    console.error('update-custom-studio error:', err.message);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
