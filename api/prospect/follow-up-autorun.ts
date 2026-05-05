import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'
import https from 'https'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_KEY || ''
)

const SENDER = { name: 'Ryan Wong', email: 'ryan@pouch.eco' }
const CC_EMAIL = 'ryan@pouch.eco'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    if (req.method === 'OPTIONS') return res.status(200).end()
    if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' })

    const runLogs: string[] = []
    const log = (msg: string) => { runLogs.push(msg); console.log(msg) }

    try {
        log('🚀 Starting Follow-up Sequence...')

        // Get offset from DB to paginate through all 15k contacts over time
        let currentOffset = 0
        try {
            const { data: auto } = await supabase
                .from('prospect_automation')
                .select('follow_up_offset')
                .eq('id', 1)
                .single()
            currentOffset = (auto as any)?.follow_up_offset ?? 0
        } catch (_) { /* ignore if column missing */ }

        log(`📌 Processing from offset: ${currentOffset}`)

        // Fetch eligible prospects without depending on touch_count column
        const { data: prospects, error: fetchErr } = await supabase
            .from('prospect')
            .select('id, name, company, email, email_sent_at, email_opened')
            .eq('email_sent', true)
            .not('email', 'is', null)
            .order('email_sent_at', { ascending: true })
            .range(currentOffset, currentOffset + 499) // Process 500 at a time

        if (fetchErr) {
            log(`❌ Fetch error: ${fetchErr.message}`)
            return res.status(500).json({ success: false, error: fetchErr.message, logs: runLogs })
        }

        log(`📊 Found ${prospects?.length || 0} candidates to evaluate.`)

        let sentCount = 0
        const skipped: string[] = []

        for (const prospect of (prospects || [])) {
            // Default touch_count to 1 if column doesn't exist yet
            const touchCount = (prospect as any).touch_count ?? 1
            const lastTouchAt = (prospect as any).last_touch_at

            // Skip completed sequences
            if (touchCount >= 5) {
                skipped.push(`${prospect.email} (completed)`)
                continue
            }

            const nextTouch = touchCount + 1
            const lastTouchDate = new Date(lastTouchAt || prospect.email_sent_at || Date.now())
            const daysSince = (Date.now() - lastTouchDate.getTime()) / (1000 * 60 * 60 * 24)

            const minDays: Record<number, number> = { 2: 3, 3: 5, 4: 7, 5: 10 }
            const required = minDays[nextTouch] || 3

            if (daysSince < required) {
                skipped.push(`${prospect.email} (only ${Math.floor(daysSince)}d since last touch, need ${required}d)`)
                continue
            }

            const { subject, body } = getTemplate(nextTouch, prospect)
            log(`📨 Sending Touch ${nextTouch} to ${prospect.email}...`)

            try {
                await sendBrevoEmail(prospect.email, subject, body)

                // Update touch count — gracefully handle if columns don't exist yet
                const { error: upErr } = await supabase
                    .from('prospect')
                    .update({ touch_count: nextTouch, last_touch_at: new Date().toISOString() } as any)
                    .eq('id', prospect.id)

                if (upErr) {
                    log(`⚠️ Sent but DB update failed for ${prospect.email}: ${upErr.message}`)
                }
                log(`✅ Touch ${nextTouch} sent to ${prospect.email}`)
                sentCount++
            } catch (err: any) {
                log(`❌ Failed to send to ${prospect.email}: ${err.message}`)
            }
        }

        // Advance offset for next run (wraps around at 15000)
        const nextOffset = sentCount + currentOffset >= 14500 ? 0 : currentOffset + 500
        try {
            await supabase
                .from('prospect_automation')
                .update({ follow_up_offset: nextOffset } as any)
                .eq('id', 1)
            log(`📌 Next run will start from offset: ${nextOffset}`)
        } catch (_) { /* ignore if column missing */ }

        log(`🏁 Done. Sent: ${sentCount}, Skipped: ${skipped.length}`)
        return res.status(200).json({ success: true, sent: sentCount, skipped: skipped.length, logs: runLogs })

    } catch (error: any) {
        log(`❌ Critical error: ${error.message}`)
        return res.status(500).json({ success: false, error: error.message, logs: runLogs })
    }
}

function getTemplate(touch: number, prospect: any) {
    const firstName = (prospect.name || 'there').split(' ')[0]
    const company = prospect.company || 'your company'
    const unsubLink = `https://achievepack.com/api/prospect/unsubscribe?email=${encodeURIComponent(prospect.email)}`
    const footer = `\n\n<br><br><hr style="border:none;border-top:1px solid #eee;margin:20px 0"><p style="font-size:11px;color:#999">You're receiving this because you were previously contacted about eco-friendly packaging. <a href="${unsubLink}">Unsubscribe</a></p>`

    switch (touch) {
        case 2:
            return {
                subject: `Re: Eco packaging for ${company}`,
                body: `Hi ${firstName},<br><br>Just following up on my last note about sustainable packaging for <strong>${company}</strong>. I know things get busy.<br><br>We help brands cut packaging costs while going 100% compostable — would love to show you how.<br><br>Worth a quick chat this week?<br><br>Best,<br>Ryan${footer}`
            }
        case 3:
            return {
                subject: `How another brand like ${company} saved 20%`,
                body: `Hi ${firstName},<br><br>I thought this might be relevant — we recently helped a food brand similar to ${company} switch to compostable stand-up pouches and they <strong>saved 20% on packaging costs</strong> in the first year.<br><br>Happy to send you the full case study if you're curious.<br><br>Best,<br>Ryan${footer}`
            }
        case 4:
            return {
                subject: `Free samples for ${company}?`,
                body: `Hi ${firstName},<br><br>Rather than just talk about it — how about I send ${company} some <strong>free samples</strong> of our latest compostable branded pouches?<br><br>Just reply with your address and I'll ship some out!<br><br>Best,<br>Ryan${footer}`
            }
        case 5:
            return {
                subject: `Last email from me`,
                body: `Hi ${firstName},<br><br>I've reached out a few times and haven't heard back — I'll assume eco-packaging isn't a priority for ${company} right now, so I'll take you off my list.<br><br>If that ever changes, you can always reach me at ryan@pouch.eco.<br><br>Wishing you all the best!<br><br>Ryan${footer}`
            }
        default:
            return { subject: 'Following up', body: `Hi ${firstName}, just checking in.${footer}` }
    }
}

async function sendBrevoEmail(to: string, subject: string, htmlBody: string) {
    const apiKey = process.env.BREVO_API_KEY
    if (!apiKey) throw new Error('BREVO_API_KEY not set')

    const payload = {
        sender: SENDER,
        to: [{ email: to }],
        cc: [{ email: CC_EMAIL, name: 'Ryan Record' }],
        subject,
        htmlContent: `<div style="font-family:sans-serif;line-height:1.6;color:#333;max-width:600px">${htmlBody}</div>`
    }

    return new Promise<void>((resolve, reject) => {
        const body = JSON.stringify(payload)
        const options = {
            hostname: 'api.brevo.com',
            path: '/v3/smtp/email',
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': apiKey,
                'content-type': 'application/json',
                'content-length': Buffer.byteLength(body)
            }
        }

        const r = https.request(options, (response) => {
            let data = ''
            response.on('data', d => data += d)
            response.on('end', () => {
                if (response.statusCode && response.statusCode < 300) resolve()
                else {
                    try { reject(new Error(JSON.parse(data).message || `HTTP ${response.statusCode}`)) }
                    catch { reject(new Error(`HTTP ${response.statusCode}: ${data}`)) }
                }
            })
        })
        r.on('error', reject)
        r.write(body)
        r.end()
    })
}
