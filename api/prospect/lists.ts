import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

// Blocked domains list (hardcoded, same as cron-autorun.ts)
const BLOCKED_DOMAINS = [
    'reddit.com', 'yelp.com', 'instagram.com', 'facebook.com',
    'twitter.com', 'x.com', 'tiktok.com', 'linkedin.com',
    'pinterest.com', 'youtube.com', 'google.com', 'amazon.com',
    'ebay.com', 'etsy.com', 'alibaba.com', 'aliexpress.com'
]

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    try {
        // GET - Fetch unsubscribed emails and blocked domains
        if (req.method === 'GET') {
            let unsubscribes: any[] = []
            
            try {
                const { data, error } = await supabase
                    .from('email_unsubscribes')
                    .select('*')
                    .order('created_at', { ascending: false })

                if (!error && data) {
                    unsubscribes = data
                }
            } catch (e) {
                // Table might not exist yet, return empty array
                console.log('email_unsubscribes table may not exist:', e)
            }

            return res.status(200).json({
                success: true,
                unsubscribes: unsubscribes,
                blocked_domains: BLOCKED_DOMAINS
            })
        }

        // POST - Add email to unsubscribe list
        if (req.method === 'POST') {
            const { email, reason } = req.body

            if (!email) {
                return res.status(400).json({ success: false, error: 'Email is required' })
            }

            const { data, error } = await supabase
                .from('email_unsubscribes')
                .insert({
                    email: email.toLowerCase().trim(),
                    reason: reason || 'Manual Admin Add'
                })
                .select()
                .single()

            if (error) {
                if (error.code === '23505') {
                    return res.status(400).json({ success: false, error: 'Email already exists' })
                }
                throw error
            }

            return res.status(200).json({ success: true, data })
        }

        // DELETE - Remove email from unsubscribe list
        if (req.method === 'DELETE') {
            const { id } = req.query

            if (!id) {
                return res.status(400).json({ success: false, error: 'ID is required' })
            }

            const { error } = await supabase
                .from('email_unsubscribes')
                .delete()
                .eq('id', id)

            if (error) throw error

            return res.status(200).json({ success: true })
        }

        return res.status(405).json({ success: false, error: 'Method not allowed' })

    } catch (error) {
        console.error('Lists API error:', error)
        return res.status(500).json({
            success: false,
            error: error instanceof Error ? error.message : 'Internal server error'
        })
    }
}
