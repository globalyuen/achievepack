import { createClient } from '@supabase/supabase-js';
// JSON response helpers - always return valid JSON
const jsonResponse = (res, data, status = 200) => {
    res.setHeader('Content-Type', 'application/json');
    return res.status(status).json(data);
};
const errorResponse = (res, error, status = 500, details) => {
    res.setHeader('Content-Type', 'application/json');
    return res.status(status).json({ success: false, error, details });
};
export default async function handler(req, res) {
    // CORS headers - set first
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');
    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    // Wrap EVERYTHING in try-catch
    try {
        if (req.method !== 'POST') {
            return errorResponse(res, 'Method not allowed', 405);
        }
        // Validate environment - return JSON error instead of throwing
        const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
        if (!supabaseUrl || !supabaseKey) {
            return errorResponse(res, 'Server configuration error', 500);
        }
        // Validate body exists
        if (!req.body) {
            return errorResponse(res, 'Empty request body', 400);
        }
        const { userId, orderId, orderNumber, name, fileUrl, fileType, fileSize } = req.body;
        if (!userId || !name || !fileUrl) {
            return errorResponse(res, 'Missing required fields: userId, name, fileUrl', 400);
        }
        // Create client and insert
        const supabase = createClient(supabaseUrl, supabaseKey);
        const { data, error } = await supabase
            .from('artwork_files')
            .insert({
            user_id: userId,
            order_id: orderId || null,
            order_number: orderNumber || null,
            name: name,
            file_url: fileUrl,
            file_type: fileType || 'unknown',
            file_size: fileSize || 0,
            status: 'pending_review'
        })
            .select();
        if (error) {
            console.error('DB insert error:', error);
            return errorResponse(res, 'Database insert failed', 500, error.message);
        }
        return jsonResponse(res, { success: true, artwork: data?.[0] });
    }
    catch (err) {
        // Catch-all: ANY error returns JSON
        console.error('Unexpected error:', err);
        return errorResponse(res, 'Internal server error', 500);
    }
}
