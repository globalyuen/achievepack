import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'
import https from 'https'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

const SENDER_PROFILES: Record<string, any> = {
    ryan: { name: 'Ryan Wong', email: 'ryan@pouch.eco' }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST' && req.method !== 'GET') {
        return res.status(405).json({ success: false, error: 'Method not allowed' })
    }

    const runLogs: string[] = []
    const addLog = (msg: string) => {
        const entry = `[${new Date().toISOString().substring(11, 19)}] ${msg}`
        runLogs.push(entry)
        console.log(entry)
    }

    try {
        addLog('🚀 Starting Follow-up Sequence Automation...')

        // 1. Find prospects eligible for next touch
        // Criteria: 
        // - email_sent is true
        // - touch_count < 5
        // - last_touch_at is at least X days ago
        // - NOT opened (for T2) or NOT replied (if we could track replies)
        // - NOT unsubscribed
        
        const { data: prospects, error: fetchErr } = await supabase
            .from('prospect')
            .select('*')
            .eq('email_sent', true)
            .lt('touch_count', 5)
            .is('email_clicked', false) // Use clicked as a proxy for high interest if we don't have reply tracking
            .order('last_touch_at', { ascending: true })
            .limit(10) // Small batches for safety

        if (fetchErr) throw fetchErr

        addLog(`📊 Found ${prospects?.length || 0} candidates for follow-up.`)

        let sentCount = 0
        for (const prospect of (prospects || [])) {
            // Check timing
            const lastTouch = new Date(prospect.last_touch_at || prospect.email_sent_at)
            const daysSince = (Date.now() - lastTouch.getTime()) / (1000 * 60 * 60 * 24)
            
            let shouldSend = false
            let nextTouch = (prospect.touch_count || 1) + 1
            
            if (nextTouch === 2 && daysSince >= 3) shouldSend = true
            else if (nextTouch === 3 && daysSince >= 5) shouldSend = true
            else if (nextTouch === 4 && daysSince >= 7) shouldSend = true
            else if (nextTouch === 5 && daysSince >= 10) shouldSend = true

            if (!shouldSend) {
                addLog(`⏭️ Skipping ${prospect.email}: Only ${Math.floor(daysSince)} days since touch ${prospect.touch_count}`)
                continue
            }

            // Generate content based on touch number
            const { subject, body } = getTemplate(nextTouch, prospect)
            
            addLog(`📨 Sending Touch ${nextTouch} to ${prospect.email}...`)
            
            try {
                const messageId = await sendBrevoEmail(prospect.email, subject, body, 'ryan', prospect.id)
                
                // Update prospect
                await supabase
                    .from('prospect')
                    .update({
                        touch_count: nextTouch,
                        last_touch_at: new Date().toISOString(),
                        brevo_message_id: messageId
                    })
                    .eq('id', prospect.id)
                
                sentCount++
                addLog(`✅ Touch ${nextTouch} sent to ${prospect.email}`)
            } catch (err: any) {
                addLog(`❌ Failed to send to ${prospect.email}: ${err.message}`)
            }
        }

        return res.status(200).json({
            success: true,
            sent: sentCount,
            logs: runLogs
        })

    } catch (error: any) {
        addLog(`❌ Critical error: ${error.message}`)
        return res.status(500).json({ success: false, error: error.message, logs: runLogs })
    }
}

function getTemplate(touch: number, prospect: any) {
    const firstName = prospect.name.split(' ')[0]
    const company = prospect.company || 'your company'
    
    const unsubscribeLink = `https://achievepack.com/api/prospect/unsubscribe?email=${encodeURIComponent(prospect.email)}`
    const footer = `\n\n---\nIf you'd rather not hear from me again, you can <a href="${unsubscribeLink}">unsubscribe here</a>.`

    switch (touch) {
        case 2:
            return {
                subject: `Re: Quick question regarding ${company} packaging`,
                body: `Hi ${firstName},\n\nI'm just following up on my previous email. I know things get busy, but I'd love to know if you've had a chance to think about eco-friendly packaging for ${company}?\n\nBest,\nRyan${footer}`
            }
        case 3:
            return {
                subject: `Thought you might find this useful, ${firstName}`,
                body: `Hi ${firstName},\n\nI was just looking at how we helped another brand in your space reduce their packaging costs while switching to 100% compostable pouches.\n\nWould you be open to a 5-minute chat next week to see if we can do the same for ${company}?\n\nBest,\nRyan${footer}`
            }
        case 4:
            return {
                subject: `Free samples for ${company}?`,
                body: `Hi ${firstName},\n\nI'd love to put my money where my mouth is. Would you like me to send over some free samples of our latest branded pouches so you can see the quality for yourself?\n\nJust reply with your address if you're interested!\n\nBest,\nRyan${footer}`
            }
        case 5:
            return {
                subject: `Moving on for now`,
                body: `Hi ${firstName},\n\nI haven't heard back from you, so I'll assume that packaging isn't a priority for ${company} at the moment.\n\nI'll take you off my list for now, but feel free to reach out if your needs change in the future!\n\nBest,\nRyan${footer}`
            }
        default:
            return { subject: 'Follow up', body: `Hi ${firstName}, following up.` }
    }
}

async function sendBrevoEmail(to: string, subject: string, body: string, senderKey: string, prospectId: number) {
    const apiKey = process.env.BREVO_API_KEY
    const sender = SENDER_PROFILES[senderKey]
    
    const htmlBody = body.replace(/\n/g, '<br>')
    
    const payload = {
        sender,
        to: [{ email: to }],
        subject,
        htmlContent: `<div style="font-family: sans-serif; line-height: 1.5; color: #333;">${htmlBody}</div>`,
        cc: [{ email: 'ryan@pouch.eco', name: 'Record' }] // CC as requested
    }

    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.brevo.com',
            path: '/v3/smtp/email',
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': apiKey,
                'content-type': 'application/json'
            }
        }
        
        const req = https.request(options, (res) => {
            let data = ''
            res.on('data', d => data += d)
            res.on('end', () => {
                const json = JSON.parse(data)
                if (res.statusCode && res.statusCode < 300) resolve(json.messageId)
                else reject(new Error(json.message || 'Brevo error'))
            })
        })
        req.on('error', reject)
        req.write(JSON.stringify(payload))
        req.end()
    })
}
