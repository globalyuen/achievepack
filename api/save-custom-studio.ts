import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

// List of reserved routes that cannot be used as custom slugs
const RESERVED_SLUGS = new Set([
  'store', 'studio', 'checkout', 'about', 'contact', 'dashboard', 'login', 'register',
  'terms', 'app', 'free-service', 'api', 'blog', 'products', 'materials', 'printing',
  'options', 'pouch', 'spec', 'privacy', 'shipping', 'faq', 'faqs', 'lead-time',
  'case-studies', 'knowledge', 'legal', 'admin', 'auth', '404'
]);

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
    const { slug, companyName, designData } = req.body || {};

    if (!slug || typeof slug !== 'string') {
      return res.status(400).json({ error: 'Missing slug parameter.' });
    }

    // Clean and validate slug
    const cleanSlug = slug.trim().toLowerCase();
    
    // Check slug format: lowercase alphanumeric and hyphens, no spaces, length 2 to 50
    const slugRegex = /^[a-z0-9-_]{2,50}$/;
    if (!slugRegex.test(cleanSlug)) {
      return res.status(400).json({ 
        error: 'Invalid web link format. Use 2-50 characters, letters, numbers, hyphens, or underscores only.' 
      });
    }

    // Check reserved routes
    if (RESERVED_SLUGS.has(cleanSlug)) {
      return res.status(400).json({ 
        error: 'This web link is reserved for system use. Please choose another one.' 
      });
    }

    if (!designData) {
      return res.status(400).json({ error: 'Missing design data.' });
    }

    // Check if slug is already taken
    const { data: existing, error: checkError } = await supabase
      .from('custom_studios')
      .select('id')
      .eq('slug', cleanSlug)
      .maybeSingle();

    if (checkError) {
      return res.status(500).json({ error: 'Database check failed.', details: checkError.message });
    }

    if (existing) {
      return res.status(409).json({ 
        error: 'This web link is already taken. Please try another one.' 
      });
    }

    // Insert the custom studio link
    const { error: insertError } = await supabase
      .from('custom_studios')
      .insert({
        slug: cleanSlug,
        company_name: companyName || null,
        design_data: designData,
      });

    if (insertError) {
      return res.status(500).json({ error: 'Failed to create exclusive web link.', details: insertError.message });
    }

    return res.status(200).json({ success: true, slug: cleanSlug });

  } catch (err: any) {
    console.error('save-custom-studio error:', err.message);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
