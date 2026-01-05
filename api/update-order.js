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
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    try {
        const { orderNumber, sessionId, status = 'confirmed', paymentStatus = 'paid' } = req.body;
        if (!orderNumber) {
            return res.status(400).json({ error: 'Order number is required' });
        }
        const supabase = getSupabase();
        // Update order status
        const { data, error } = await supabase
            .from('orders')
            .update({
            status: status,
            payment_status: paymentStatus,
            stripe_session_id: sessionId || null,
            updated_at: new Date().toISOString()
        })
            .eq('order_number', orderNumber)
            .select();
        if (error) {
            console.error('Order update error:', error);
            return res.status(500).json({ error: 'Failed to update order', details: error.message });
        }
        if (!data || data.length === 0) {
            console.log(`Order ${orderNumber} not found for update`);
            return res.status(404).json({ error: 'Order not found' });
        }
        console.log(`Order ${orderNumber} updated to ${status}`);
        res.status(200).json({ success: true, order: data[0] });
    }
    catch (error) {
        console.error('Update order error:', error);
        res.status(500).json({ error: error.message || 'Failed to update order' });
    }
}
