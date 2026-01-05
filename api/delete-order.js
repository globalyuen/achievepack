import { createClient } from '@supabase/supabase-js';
// Initialize Supabase with service key to bypass RLS
const getSupabase = () => {
    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) {
        throw new Error('Supabase configuration missing');
    }
    return createClient(supabaseUrl, supabaseKey);
};
export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    if (req.method !== 'POST' && req.method !== 'DELETE') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    try {
        const { orderId } = req.body;
        if (!orderId) {
            return res.status(400).json({ error: 'orderId is required' });
        }
        const supabase = getSupabase();
        const { error } = await supabase
            .from('orders')
            .delete()
            .eq('id', orderId);
        if (error) {
            console.error('Delete order error:', error);
            return res.status(500).json({ error: 'Failed to delete order', details: error.message });
        }
        console.log(`Order ${orderId} deleted`);
        res.status(200).json({ success: true });
    }
    catch (error) {
        console.error('Delete order error:', error);
        res.status(500).json({ error: error.message || 'Failed to delete order' });
    }
}
