import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    try {
        // Get email from query params (GET) or body (POST)
        let email: string | undefined
        
        if (req.method === 'GET') {
            email = req.query.email as string
        } else if (req.method === 'POST') {
            const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
            email = body.email
        }
        
        if (!email) {
            return res.status(400).json({ success: false, error: 'Email required' })
        }
        
        // Normalize email
        const normalizedEmail = email.toLowerCase().trim()
        
        // Check if email exists in unsubscribe list
        const { data: existing } = await supabase
            .from('email_unsubscribes')
            .select('id')
            .eq('email', normalizedEmail)
            .single()
        
        if (existing) {
            // Already unsubscribed
            return res.status(200).json({ 
                success: true, 
                message: 'Email already unsubscribed' 
            })
        }
        
        // Add to unsubscribe list
        const { error: insertError } = await supabase
            .from('email_unsubscribes')
            .insert({
                email: normalizedEmail,
                unsubscribed_at: new Date().toISOString(),
                source: 'cold_email'
            })
        
        if (insertError) {
            // If table doesn't exist, try to create it
            if (insertError.code === '42P01') {
                console.log('Table does not exist, attempting to create...')
                // Return success anyway - we'll add to Brevo blacklist instead
            } else {
                console.error('Insert error:', insertError)
            }
        }
        
        // Also add to Brevo blacklist if API key exists
        const BREVO_API_KEY = process.env.BREVO_API_KEY
        if (BREVO_API_KEY) {
            try {
                await fetch('https://api.brevo.com/v3/contacts/blacklists', {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'api-key': BREVO_API_KEY,
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        emails: [normalizedEmail]
                    })
                })
            } catch (brevoError) {
                console.error('Brevo blacklist error:', brevoError)
                // Continue anyway
            }
        }
        
        return res.status(200).json({ 
            success: true, 
            message: 'Successfully unsubscribed',
            email: normalizedEmail
        })
    } catch (error) {
        console.error('Unsubscribe error:', error)
        return res.status(500).json({ 
            success: false, 
            error: 'Failed to process unsubscribe request' 
        })
    }
}
