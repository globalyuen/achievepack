import type { VercelRequest, VercelResponse } from '@vercel/node'
import * as fs from 'fs'
import * as path from 'path'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
// Use service key if available to bypass RLS, fallback to anon key
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl || '', supabaseKey || '', {
  auth: { persistSession: false }
})

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')

  const VAULT_ROOT = path.join(
    '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack',
    'ob vault - ap ctr follow up'
  )

  try {
    // 1. If running locally and the Obsidian vault exists, scan, parse, and sync to Supabase!
    if (fs.existsSync(VAULT_ROOT)) {
      const files = getAllMarkdownFiles(path.join(VAULT_ROOT, '00-Inbox'))
      const meetings = new Map()

      for (const file of files) {
        const fileName = path.basename(file)
        const fileLower = fileName.toLowerCase()
        
        if (fileLower.includes('new-event') || fileLower.includes('new event') || fileLower.includes('event-date')) {
          const content = fs.readFileSync(file, 'utf-8')
          const parsed = parseInquiryContent(content, fileName)
          if (parsed && parsed.name) {
            const key = `${parsed.email || ''}|${parsed.meeting_time || ''}`
            if (!meetings.has(key)) {
              meetings.set(key, parsed)
            } else {
              // Prefer the one with longer inquiry text
              const existing = meetings.get(key)
              if (parsed.inquiry.length > existing.inquiry.length) {
                meetings.set(key, parsed)
              }
            }
          }
        }
      }

      const uniqueInquiries = Array.from(meetings.values())
      console.log(`Parsed ${uniqueInquiries.length} local unique inquiries. Syncing to Supabase...`)

      // Sync to Supabase in batches of 50
      const batchSize = 50
      for (let i = 0; i < uniqueInquiries.length; i += batchSize) {
        const batch = uniqueInquiries.slice(i, i + batchSize).map(item => ({
          id: item.id,
          name: item.name,
          email: item.email || null,
          phone: item.phone || null,
          meeting_time: item.meeting_time || null,
          duration: item.duration || null,
          inquiry: item.inquiry || null,
          raw_date: item.raw_date || null,
          source_file: item.source_file || null,
          status: '未跟進',
          notes: ''
        }))

        // Upsert batch, preserving existing statuses and notes
        const { error } = await supabase
          .from('calendly_inquiries')
          .upsert(batch, { onConflict: 'id', ignoreDuplicates: true })

        if (error) {
          console.error('Error syncing batch to Supabase:', error.message)
        }
      }
    }

    // 2. Fetch all inquiries (both synced and existing edits) from Supabase to return to the UI
    const { data: dbData, error: dbError } = await supabase
      .from('calendly_inquiries')
      .select('*')
      .order('raw_date', { ascending: false })

    if (dbError) throw dbError

    return res.status(200).json(dbData || [])

  } catch (error: any) {
    console.error('Error in Calendly inquiries handler:', error)
    return res.status(500).json({ error: error.message })
  }
}

// Helper to recursively find all markdown files
function getAllMarkdownFiles(dirPath: string): string[] {
  let results: string[] = []
  if (!fs.existsSync(dirPath)) return results
  const list = fs.readdirSync(dirPath)
  list.forEach(file => {
    const fullPath = path.join(dirPath, file)
    const stat = fs.statSync(fullPath)
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(fullPath))
    } else if (file.endsWith('.md')) {
      results.push(fullPath)
    }
  })
  return results
}

// Parser logic for Calendly email contents
function parseInquiryContent(text: string, filename: string) {
  const titleMatch = text.match(/title:\s*"?New Event:\s*(.+?)"?\s*\n/) || text.match(/title:\s*"?(.+?)"?\s*\n/)
  const dateMatch  = text.match(/date:\s*(.+)/)
  const name        = titleMatch ? titleMatch[1].stripAndClean() : filename.replace('.md', '')
  const raw_date    = dateMatch ? dateMatch[1].trim() : ""

  // Clean title
  let cleanName = name
    .replace(/^(?:Re:\s*|Fwd:\s*|RE:\s*|FWD:\s*|Re-New-Event-|New-Event-|Hi New Event:\s*|New Event:\s*)+/gi, '')
    .replace(/---.*/g, '')
    .replace(/\s\d{1,2}:\d{2}\s*(?:am|pm|AM|PM).*/, '') // Strip time like 10:45pm Tue...
    .replace(/-/g, ' ')
    .trim()

  let invitee_email = ""
  // 1. Try targeting "Invitee Email:" explicitly
  const inviteeEmailMatch = text.match(/\*\*Invitee Email:\*\*\s*(?:\n|\s)*\[?(mailto:)?([^\]\)\s]+)/i) || text.match(/Invitee Email:\s*(?:\n|\s)*\[?(mailto:)?([^\]\)\s]+)/i)
  if (inviteeEmailMatch) {
    invitee_email = inviteeEmailMatch[2].replace(/mailto:/i, '').trim().toLowerCase()
  }

  // 2. Fallback: extract all emails and filter out system/internal ones
  if (!invitee_email || invitee_email.includes('calendly') || invitee_email.includes('achievepack') || invitee_email.includes('pouch.eco')) {
    const allEmails = text.match(/[\w\.-]+@[\w\.-]+\.\w+/g) || []
    const filtered = allEmails.map(e => e.trim().toLowerCase()).filter(e => {
      return !e.includes('calendly') && 
             !e.includes('achievepack') && 
             !e.includes('pouch.eco')
    })
    if (filtered.length > 0) {
      invitee_email = filtered[0]
    }
  }

  let meeting_time = ""
  let duration = "15 min"
  const mt = text.match(/\*\*Event Date\/Time:\*\*\s*(.+?)(?:\((.+?)\))?(?:\n|$)/i)
  if (mt) {
    meeting_time = mt[1].trim()
  } else {
    const mt_fallback = text.match(/Date\/Time:\s*([^\n]+)/i)
    if (mt_fallback) {
      meeting_time = mt_fallback[1].trim()
    }
  }
  meeting_time = meeting_time.replace(/\*\*/g, '').replace('(China, Singapore, Perth)', '').trim()

  const durMatch = text.match(/(\d+)\s*Minute Meeting/i)
  if (durMatch) {
    duration = `${durMatch[1]} min`
  }

  let phone = ""
  const ph = text.match(/\*\*Phone Number[^*]*\*\*\s*\n+([^\n*]+)/i)
  if (ph) {
    phone = ph[1].trim()
  } else {
    const ph_fallback = text.match(/Phone Number:\s*([^\n]+)/i)
    if (ph_fallback) {
      phone = ph_fallback[1].trim()
    }
  }
  phone = phone.replace(/\*\*/g, '').replace('Please share anything...', '').trim()

  let inquiry = ""
  const inq = text.match(/Please share anything[\s\S]*?\n([\s\S]+?)(?:\[View event|\-{3}|\Z)/i)
  if (inq) {
    inquiry = inq[1].trim()
  } else {
    const inq_fallback = text.match(/prepare for our meeting\.\*\*\s*\n+([\s\S]+?)(?:\[View event|\-{3}|\Z)/i)
    if (inq_fallback) {
      inquiry = inq_fallback[1].trim()
    }
  }
  inquiry = inquiry.replace(/\*\*/g, '').replace(/\n/g, ' ').replace(/\s{2,}/g, ' ').trim()

  return {
    id: filename.replace('.md', ''),
    name: cleanName,
    email: invitee_email,
    meeting_time,
    duration,
    phone,
    inquiry: inquiry.substring(0, 500),
    raw_date,
    source_file: filename
  }
}

// Extend string prototype-like behavior helper
declare global {
  interface String {
    stripAndClean(): string;
  }
}
String.prototype.stripAndClean = function() {
  return this.replace(/---.*/, '').trim()
}
