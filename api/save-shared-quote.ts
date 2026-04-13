import { createClient } from '@supabase/supabase-js';

export const config = {
  runtime: 'edge'
}

export default async function handler(req: Request): Promise<Response> {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS' } });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    const { id, quoteHtml, customer, detailText } = await req.json();

    if (!id || !quoteHtml) {
      return new Response(JSON.stringify({ error: 'Missing id or quoteHtml' }), { status: 400 });
    }

    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      return new Response(JSON.stringify({ error: 'Server configuration error' }), { status: 500 });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    
    const { data: updated, error: updateError } = await supabase
      .from('webhook_logs')
      .update({
        status: 'Success',
        message: `Quote shared for ${customer}`,
        raw_data: { 
          text: detailText || '', 
          customer: customer || 'Valued Client',
          quoteHtml: quoteHtml,
          generatedAt: new Date().toISOString()
        }
      })
      .eq('id', id)
      .select()
      .single();

    if (updateError) {
      console.error("Supabase update error:", updateError);
      return new Response(JSON.stringify({ error: 'Failed to update quote in database.' }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, updated }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });

  } catch (err: any) {
    console.error("Save Shared Quote API Error:", err.message);
    return new Response(JSON.stringify({ success: false, error: 'Internal Server Error' }), { status: 500 });
  }
}
