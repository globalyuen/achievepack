import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' })
    }

    try {
        console.log('[Cleanup] Starting deduplication...')
        
        // Find duplicate emails
        const { data: duplicates } = await supabase
            .rpc('get_duplicate_prospects') // If we had an RPC, but we can do it manually
            
        // Manual approach: Get all emails and counts
        const { data: all } = await supabase
            .from('prospect')
            .select('id, email, created_at')
            .order('email', { ascending: true })
            .order('created_at', { ascending: false })

        if (!all) return res.status(200).json({ success: true, removed: 0 })

        const seen = new Set()
        const idsToDelete: any[] = []

        for (const p of all) {
            if (!p.email) continue
            if (seen.has(p.email)) {
                idsToDelete.push(p.id)
            } else {
                seen.add(p.email)
            }
        }

        let removed = 0
        if (idsToDelete.length > 0) {
            // Delete in batches of 100
            for (let i = 0; i < idsToDelete.length; i += 100) {
                const batch = idsToDelete.slice(i, i + 100)
                const { error } = await supabase
                    .from('prospect')
                    .delete()
                    .in('id', batch)
                
                if (!error) removed += batch.length
            }
        }

        return res.status(200).json({
            success: true,
            removed
        })

    } catch (error: any) {
        console.error('[Cleanup] Error:', error)
        return res.status(500).json({ success: false, error: error.message })
    }
}
