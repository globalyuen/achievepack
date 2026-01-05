export default function handler(req, res) {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        env: {
            hasSupabaseUrl: !!process.env.VITE_SUPABASE_URL || !!process.env.SUPABASE_URL,
            hasSupabaseKey: !!process.env.SUPABASE_SERVICE_KEY,
        }
    });
}
