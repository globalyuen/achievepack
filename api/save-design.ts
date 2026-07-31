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

    // Send email notification to ryan@achievepack.com
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (BREVO_API_KEY) {
      try {
        const domainName = (req.headers.host && req.headers.host.includes('pouch.eco')) ? 'pouch.eco' : 'achievepack.com';
        const shareUrl = `https://${domainName}/studio?code=${code}`;
        const widthMm = unit === 'inch' ? (width || 6.7) * 25.4 : (width || 170);
        const heightMm = unit === 'inch' ? (height || 8.25) * 25.4 : (height || 210);
        const depthMm = unit === 'inch' ? (depth || 1.43) * 25.4 : (depth || 36.4);

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
            subject: `📦 3D Studio Link Generated: Code [${code}]`,
            htmlContent: `
              <!DOCTYPE html>
              <html>
              <head>
                <style>
                  body { font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif; line-height: 1.6; color: #111827; background: #f3f4f6; padding: 20px; }
                  .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
                  .btn { display: inline-block; background: #2563eb; color: #ffffff !important; font-weight: 600; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin-top: 14px; }
                  .field { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin-bottom: 10px; }
                  .label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700; }
                  .val { font-size: 15px; font-weight: 600; color: #0f172a; }
                  .img-preview { width: 100%; max-width: 500px; border-radius: 8px; border: 1px solid #cbd5e1; margin-top: 10px; }
                </style>
              </head>
              <body>
                <div class="card">
                  <h2 style="margin-top:0; color:#0f172a;">📦 New 3D Studio Link Generated</h2>
                  <p style="color:#475569;">A customer or user generated a shareable 3D design link.</p>
                  
                  <div style="text-align: center; margin: 20px 0;">
                    <div style="font-size: 20px; font-weight: 800; letter-spacing: 2px; color: #2563eb;">CODE: ${code}</div>
                    <a href="${shareUrl}" class="btn" target="_blank">🚀 View 3D Studio Design</a>
                    <div style="font-size: 12px; color: #94a3b8; margin-top: 6px;">${shareUrl}</div>
                  </div>

                  ${req.body?.screenshot ? `<div style="text-align:center;"><img src="${req.body.screenshot}" class="img-preview" alt="3D Screenshot"/></div>` : ''}

                  <div class="field">
                    <div class="label">Shape Model</div>
                    <div class="val">${shapeId || 'Standard Pouch'}</div>
                  </div>

                  <div class="field">
                    <div class="label">Dimensions</div>
                    <div class="val">${(widthMm/25.4).toFixed(2)}" x ${(heightMm/25.4).toFixed(2)}" x ${(depthMm/25.4).toFixed(2)}" (${Math.round(widthMm)}mm x ${Math.round(heightMm)}mm x ${Math.round(depthMm)}mm)</div>
                  </div>

                  <div class="field">
                    <div class="label">Artwork Layers Count</div>
                    <div class="val">${Array.isArray(layers) ? layers.length : 1} layer(s)</div>
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
        console.error('Failed to trigger Brevo email notification:', emailErr?.message);
      }
    }

    return res.status(200).json({ success: true, code });

  } catch (err: any) {
    console.error('save-design error:', err.message);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
