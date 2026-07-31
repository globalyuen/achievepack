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

    // Send email notification to ryan@achievepack.com
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (BREVO_API_KEY) {
      try {
        const domainName = (req.headers.host && req.headers.host.includes('pouch.eco')) ? 'pouch.eco' : 'achievepack.com';
        const shareUrl = `https://${domainName}/${cleanSlug}`;
        const shapeId = designData?.shapeId || 'Custom Studio Pouch';
        const widthMm = designData?.unit === 'inch' ? (designData?.width || 6.7) * 25.4 : (designData?.width || 170);
        const heightMm = designData?.unit === 'inch' ? (designData?.height || 8.25) * 25.4 : (designData?.height || 210);
        const depthMm = designData?.unit === 'inch' ? (designData?.depth || 1.43) * 25.4 : (designData?.depth || 36.4);

        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'api-key': BREVO_API_KEY
          },
          body: JSON.stringify({
            sender: { name: 'AchievePack 3D Studio', email: 'noreply@achievepack.com' },
            to: [
              { email: 'ryan@achievepack.com', name: 'Ryan' },
              { email: 'info@achievepack.com', name: 'AchievePack Admin' }
            ],
            subject: `📦 Exclusive Custom Studio Link Created: ${companyName ? `${companyName} (${cleanSlug})` : cleanSlug}`,
            htmlContent: `
              <!DOCTYPE html>
              <html>
              <head>
                <style>
                  body { font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif; line-height: 1.6; color: #111827; background: #f3f4f6; padding: 20px; }
                  .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
                  .btn { display: inline-block; background: #059669; color: #ffffff !important; font-weight: 600; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin-top: 14px; }
                  .field { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin-bottom: 10px; }
                  .label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700; }
                  .val { font-size: 15px; font-weight: 600; color: #0f172a; }
                  .img-preview { width: 100%; max-width: 500px; border-radius: 8px; border: 1px solid #cbd5e1; margin-top: 10px; }
                </style>
              </head>
              <body>
                <div class="card">
                  <h2 style="margin-top:0; color:#0f172a;">✨ Exclusive 3D Studio Web Link Created</h2>
                  <p style="color:#475569;">A custom branded 3D studio link has been generated.</p>
                  
                  <div style="text-align: center; margin: 20px 0;">
                    <div style="font-size: 18px; font-weight: 800; color: #059669;">SLUG: /${cleanSlug}</div>
                    <a href="${shareUrl}" class="btn" target="_blank">🚀 Open Custom 3D Studio Link</a>
                    <div style="font-size: 12px; color: #94a3b8; margin-top: 6px;">${shareUrl}</div>
                  </div>

                  ${req.body?.screenshot ? `<div style="text-align:center;"><img src="${req.body.screenshot}" class="img-preview" alt="3D Screenshot"/></div>` : ''}

                  ${companyName ? `
                  <div class="field" style="background:#ecfdf5; border-color:#a7f3d0;">
                    <div class="label" style="color:#047857;">Company / Brand Name</div>
                    <div class="val" style="color:#065f46;">${companyName}</div>
                  </div>
                  ` : ''}

                  <div class="field">
                    <div class="label">Shape Model</div>
                    <div class="val">${shapeId}</div>
                  </div>

                  <div class="field">
                    <div class="label">Dimensions</div>
                    <div class="val">${(widthMm/25.4).toFixed(2)}" x ${(heightMm/25.4).toFixed(2)}" x ${(depthMm/25.4).toFixed(2)}" (${Math.round(widthMm)}mm x ${Math.round(heightMm)}mm x ${Math.round(depthMm)}mm)</div>
                  </div>

                  <div class="field">
                    <div class="label">Artwork Layers Count</div>
                    <div class="val">${Array.isArray(designData?.layers) ? designData.layers.length : 1} layer(s)</div>
                  </div>

                  <div class="field">
                    <div class="label">Domain & Time</div>
                    <div class="val">${domainName} • ${new Date().toLocaleString()}</div>
                  </div>
                </div>
              </body>
              </html>
            `
          })
        });
      } catch (emailErr: any) {
        console.error('Failed to trigger Brevo email notification for custom studio:', emailErr?.message);
      }
    }

    return res.status(200).json({ success: true, slug: cleanSlug });

  } catch (err: any) {
    console.error('save-custom-studio error:', err.message);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
