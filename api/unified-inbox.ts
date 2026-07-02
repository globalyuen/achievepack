import type { VercelRequest, VercelResponse } from '@vercel/node'
import * as fs from 'fs'
import * as path from 'path'
import * as crypto from 'crypto'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
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
    // 1. Sync Calendly
    if (fs.existsSync(path.join(VAULT_ROOT, '00-Inbox'))) {
      const files = getAllMarkdownFiles(path.join(VAULT_ROOT, '00-Inbox'))
      const meetings = new Map()

      for (const file of files) {
        const fileName = path.basename(file)
        const fileLower = fileName.toLowerCase()
        
        if (fileLower.includes('new-event') || fileLower.includes('new event') || fileLower.includes('event-date')) {
          const content = fs.readFileSync(file, 'utf-8')
          const parsed = parseCalendlyContent(content, fileName)
          if (parsed && parsed.name) {
            const key = `${parsed.email || ''}|${parsed.meeting_time || ''}`
            if (!meetings.has(key)) {
              meetings.set(key, parsed)
            } else {
              const existing = meetings.get(key)
              if (parsed.inquiry.length > existing.inquiry.length) {
                meetings.set(key, parsed)
              }
            }
          }
        }
      }

      const uniqueInquiries = Array.from(meetings.values())
      
      const batchSize = 50
      for (let i = 0; i < uniqueInquiries.length; i += batchSize) {
        const batch = uniqueInquiries.slice(i, i + batchSize).map(item => ({
          id: item.id,
          name: item.name,
          email: item.email || null,
          phone: item.phone ? formatPhone(item.phone) : null,
          meeting_time: item.meeting_time || null,
          duration: item.duration || null,
          inquiry: item.inquiry || null,
          raw_date: item.raw_date || null,
          source_file: item.source_file || null,
          status: '未跟進',
          notes: ''
        }))

        await supabase.from('calendly_inquiries').upsert(batch, { onConflict: 'id', ignoreDuplicates: true })
      }
    }

    // 2. Sync WhatsApp
    if (fs.existsSync(path.join(VAULT_ROOT, '02-WhatsApp'))) {
      const files = getAllMarkdownFiles(path.join(VAULT_ROOT, '02-WhatsApp'))
      const wapp = new Map()

      for (const file of files) {
        const fileName = path.basename(file)
        const content = fs.readFileSync(file, 'utf-8')
        const parsed = parseWhatsAppContent(content, fileName)
        
        if (parsed && parsed.phone) {
          wapp.set(parsed.phone, parsed)
        }
      }

      const uniqueWapp = Array.from(wapp.values())
      
      const batchSize = 50
      for (let i = 0; i < uniqueWapp.length; i += batchSize) {
        const batch = uniqueWapp.slice(i, i + batchSize).map(item => ({
          id: getDeterministicUUID(item.id),
          name: item.name,
          phone: item.phone,
          chat_history: item.chat_history || null,
          raw_date: item.raw_date || null,
          source_file: item.source_file || null,
          status: 'New',
          notes: ''
        }))

        await supabase.from('whatsapp_inquiries').upsert(batch, { onConflict: 'id', ignoreDuplicates: true })
      }
    }

    // 3. Fetch from DB and Merge
    const [{ data: calData, error: calErr }, { data: wapData, error: wapErr }] = await Promise.all([
      supabase.from('calendly_inquiries').select('*').order('raw_date', { ascending: false }),
      supabase.from('whatsapp_inquiries').select('*').order('raw_date', { ascending: false })
    ])

    if (calErr) throw calErr
    if (wapErr) throw wapErr

    const calendlyList = calData || []
    const whatsappList = wapData || []

    const unifiedMap = new Map()

    // Add WhatsApp first
    whatsappList.forEach(w => {
      const formattedPhone = formatPhone(w.phone)
      unifiedMap.set(formattedPhone, {
        id: w.id,
        name: w.name,
        phone: formattedPhone,
        hasWhatsApp: true,
        whatsappData: w,
        hasEmail: false,
        emailData: null,
        raw_date: w.raw_date,
        status: w.status
      })
    })

    // Add Calendly, merge if phone matches
    calendlyList.forEach(c => {
      const formattedPhone = c.phone ? formatPhone(c.phone) : ''
      let matchedKey = ''
      
      if (formattedPhone) {
        for (const [key, value] of unifiedMap.entries()) {
          if (phoneMatches(value.phone, formattedPhone)) {
            matchedKey = key
            break
          }
        }
      }

      if (matchedKey) {
        const existing = unifiedMap.get(matchedKey)
        existing.hasEmail = true
        existing.emailData = c
        // Prefer Calendly name if available
        existing.name = c.name || existing.name
      } else {
        unifiedMap.set(c.id, {
          id: c.id,
          name: c.name,
          phone: formattedPhone,
          hasWhatsApp: false,
          whatsappData: null,
          hasEmail: true,
          emailData: c,
          raw_date: c.raw_date,
          status: c.status
        })
      }
    })

    const result = Array.from(unifiedMap.values()).sort((a, b) => {
      const dateA = new Date(a.raw_date || 0).getTime()
      const dateB = new Date(b.raw_date || 0).getTime()
      return dateB - dateA
    })

    return res.status(200).json(result)

  } catch (error: any) {
    console.error('Error in unified inbox handler:', error)
    return res.status(500).json({ error: error.message })
  }
}

function formatPhone(phone: string): string {
  if (!phone) return ''
  return phone.replace(/[\s\-\(\)]/g, '')
}

function phoneMatches(p1: string, p2: string): boolean {
  if (!p1 || !p2) return false
  const d1 = p1.replace(/\D/g, '')
  const d2 = p2.replace(/\D/g, '')
  if (!d1 || !d2) return false
  if (d1 === d2) return true
  const len = Math.min(d1.length, d2.length)
  if (len >= 7) {
    return d1.endsWith(d2) || d2.endsWith(d1)
  }
  return false
}

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

function parseCalendlyContent(text: string, filename: string) {
  const titleMatch = text.match(/title:\s*"?New Event:\s*(.+?)"?\s*\n/) || text.match(/title:\s*"?(.+?)"?\s*\n/)
  const dateMatch  = text.match(/date:\s*(.+)/)
  const name        = titleMatch ? titleMatch[1].stripAndClean() : filename.replace('.md', '')
  const raw_date    = dateMatch ? dateMatch[1].trim() : ""

  let cleanName = name
    .replace(/^(?:Re:\s*|Fwd:\s*|RE:\s*|FWD:\s*|Re-New-Event-|New-Event-|Hi New Event:\s*|New Event:\s*)+/gi, '')
    .replace(/---.*/g, '')
    .replace(/\s\d{1,2}:\d{2}\s*(?:am|pm|AM|PM).*/, '') 
    .replace(/-/g, ' ')
    .trim()

  let invitee_email = ""
  const inviteeEmailMatch = text.match(/\*\*Invitee Email:\*\*\s*(?:\n|\s)*\[?(mailto:)?([^\]\)\s]+)/i) || text.match(/Invitee Email:\s*(?:\n|\s)*\[?(mailto:)?([^\]\)\s]+)/i)
  if (inviteeEmailMatch) {
    invitee_email = inviteeEmailMatch[2].replace(/mailto:/i, '').trim().toLowerCase()
  }

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

function parseWhatsAppContent(text: string, filename: string) {
  let name = filename.replace('.md', '')
  let phone = ""
  let raw_date = ""

  const nameMatch = text.match(/Name:\s*(.+)/i)
  if (nameMatch) name = nameMatch[1].trim()

  const phoneMatch = text.match(/Phone:\s*(.+)/i)
  if (phoneMatch) phone = formatPhone(phoneMatch[1].trim())

  const dateMatch = text.match(/Date:\s*(.+)/i)
  if (dateMatch) raw_date = dateMatch[1].trim()

  let chat_history = text
  if (text.startsWith('---')) {
    const parts = text.split('---')
    if (parts.length >= 3) {
      chat_history = parts.slice(2).join('---').trim()
    }
  }

  return {
    id: filename.replace('.md', ''),
    name,
    phone,
    chat_history,
    raw_date,
    source_file: filename
  }
}

declare global {
  interface String {
    stripAndClean(): string;
  }
}
String.prototype.stripAndClean = function() {
  return this.replace(/---.*/, '').trim()
}

function getDeterministicUUID(name: string): string {
  const hash = crypto.createHash('md5').update(name).digest('hex')
  return [
    hash.substring(0, 8),
    hash.substring(8, 12),
    '3' + hash.substring(13, 16),
    (parseInt(hash.substring(16, 17), 16) & 0x3 | 0x8).toString(16) + hash.substring(17, 20),
    hash.substring(20, 32)
  ].join('-')
}
