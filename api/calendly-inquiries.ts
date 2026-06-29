import type { VercelRequest, VercelResponse } from '@vercel/node'
import * as fs from 'fs'
import * as path from 'path'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const VAULT_INBOX = path.join(
    '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack',
    'ob vault - ap ctr follow up/00-Inbox'
  )

  try {
    if (!fs.existsSync(VAULT_INBOX)) {
      return res.status(200).json([])
    }

    const files = fs.readdirSync(VAULT_INBOX)
      .filter(f => f.includes('New-Event-') && !f.includes('Re-New-Event') && f.endsWith('.md'))
      .sort()
      .reverse() // most recent first

    const inquiries = []

    for (const file of files) {
      const content = fs.readFileSync(path.join(VAULT_INBOX, file), 'utf-8')

      // Extract name from title frontmatter
      const titleMatch = content.match(/title:\s*"?New Event:\s*(.+?)"?\s*\n/)
      const dateMatch  = content.match(/date:\s*(.+)/)
      const emailMatch = content.match(/\[.*?mailto:(.*?)\]/)
      const phoneMatch = content.match(/\*\*Phone Number[^*]*\*\*\s*\n+([^\n*]+)/)
      const timeMatch  = content.match(/\*\*Event Date\/Time:\*\*\s*([^\n]+)/)

      // Inquiry: text after "Please share anything..."
      const inquiryMatch = content.match(
        /Please share anything[\s\S]*?\n([\s\S]+?)(?:\[View event|\-{3}|$)/
      )

      let inquiry = ''
      if (inquiryMatch) {
        inquiry = inquiryMatch[1]
          .replace(/\*\*/g, '')
          .replace(/\[.*?\]/g, '')
          .replace(/\n/g, ' ')
          .trim()
      }

      let phone = ''
      if (phoneMatch) {
        phone = phoneMatch[1]
          .replace(/\*\*/g, '')
          .replace(/Please share.*/i, '')
          .replace(/\s{2,}/g, ' ')
          .trim()
      }

      let meetingTime = ''
      if (timeMatch) {
        meetingTime = timeMatch[1]
          .replace(/\*\*/g, '')
          .replace(/\(China.*?\)/, '')
          .replace(/\s+Description.*/, '')
          .trim()
      }

      const durMatch = content.match(/(\d+)\s*Minute Meeting/)
      const duration = durMatch ? `${durMatch[1]} min` : '15 min'

      if (titleMatch) {
        inquiries.push({
          id: file.replace('.md', ''),
          name: titleMatch[1].replace(/---.*/, '').trim(),
          email: emailMatch ? emailMatch[1] : '',
          phone: phone,
          meeting_time: meetingTime,
          duration,
          inquiry,
          raw_date: dateMatch ? dateMatch[1].trim() : '',
          source_file: file
        })
      }
    }

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    return res.status(200).json(inquiries)

  } catch (error: any) {
    console.error('Error fetching Calendly inquiries:', error)
    return res.status(500).json({ error: error.message })
  }
}
