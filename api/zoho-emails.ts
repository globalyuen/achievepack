import type { VercelRequest, VercelResponse } from '@vercel/node'
import * as fs from 'fs'

const CONFIG_FILE_PATH = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/zoho_to_obsidian/zoho_config.json'

interface ZohoConfig {
  client_id: string
  client_secret: string
  refresh_token: string
  zoho_region: string
}

function loadZohoConfig(): ZohoConfig | null {
  // 1. Try environment variables
  if (process.env.ZOHO_CLIENT_ID && process.env.ZOHO_CLIENT_SECRET && process.env.ZOHO_REFRESH_TOKEN) {
    return {
      client_id: process.env.ZOHO_CLIENT_ID,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      refresh_token: process.env.ZOHO_REFRESH_TOKEN,
      zoho_region: process.env.ZOHO_REGION || 'com'
    }
  }

  // 2. Fallback to local config file
  if (fs.existsSync(CONFIG_FILE_PATH)) {
    try {
      const raw = fs.readFileSync(CONFIG_FILE_PATH, 'utf-8')
      return JSON.parse(raw) as ZohoConfig
    } catch (e) {
      console.error('Error parsing local zoho_config.json:', e)
    }
  }

  return null
}

async function getAccessToken(config: ZohoConfig): Promise<string> {
  const url = `https://accounts.zoho.${config.zoho_region}/oauth/v2/token?refresh_token=${config.refresh_token}&client_id=${config.client_id}&client_secret=${config.client_secret}&grant_type=refresh_token`
  
  const resp = await fetch(url, { method: 'POST' })
  const data = await resp.json() as any
  
  if (data && data.access_token) {
    return data.access_token
  }
  throw new Error(`Token refresh failed: ${JSON.stringify(data)}`)
}

// Simple helper to strip HTML tags and decode basic entities
function stripHtml(html: string): string {
  if (!html) return ''
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '') // remove style tags content
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '') // remove script tags content
    .replace(/<[^>]+>/g, ' ') // replace html tags with spaces
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ') // collapse duplicate whitespaces
    .trim()
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')

  const { email, messageId, folderId } = req.query

  if (!email && !messageId) {
    return res.status(400).json({ error: 'Missing required parameter "email" or "messageId"' })
  }

  const config = loadZohoConfig()
  if (!config) {
    return res.status(500).json({ error: 'Zoho configuration not found. Please set ZOHO_ environment variables or configure zoho_config.json.' })
  }

  try {
    const accessToken = await getAccessToken(config)
    const headers = {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json'
    }

    // Get account details
    const accountsResp = await fetch(`https://mail.zoho.${config.zoho_region}/api/accounts`, { headers })
    const accountsData = await accountsResp.json() as any
    const accounts = accountsData.data || []
    if (accounts.length === 0) {
      throw new Error('No Zoho Mail accounts found for this token.')
    }
    const accountId = accounts[0].accountId

    // Mode A: Fetch individual message body
    if (messageId) {
      const fId = folderId || '1' // default folder or generic endpoint
      const endpoints = [
        `https://mail.zoho.${config.zoho_region}/api/accounts/${accountId}/folders/${fId}/messages/${messageId}/content`,
        `https://mail.zoho.${config.zoho_region}/api/accounts/${accountId}/messages/${messageId}/content`
      ]

      let messageBody = ''
      for (const endpoint of endpoints) {
        try {
          const contentResp = await fetch(endpoint, { headers })
          if (contentResp.status === 200) {
            const contentData = await contentResp.json() as any
            const data = contentData.data
            const msgObj = Array.isArray(data) ? data[0] : data
            const html = msgObj.htmlBody || msgObj.content || msgObj.body || ''
            const text = msgObj.textBody || msgObj.summary || ''
            
            if (html) {
              messageBody = stripHtml(html)
            } else {
              messageBody = text
            }
            break
          }
        } catch (e: any) {
          // continue to try generic endpoint
        }
      }

      return res.status(200).json({ body: messageBody })
    }

    // Mode B: Search messages
    const targetEmail = (email as string || '').toLowerCase().trim()
    const targetName = (req.query.name as string || '').toLowerCase().trim()
    
    // Safety check to avoid returning all emails if input is empty
    if (!targetEmail && !targetName) {
      return res.status(200).json([])
    }

    const isGenericEmail = targetEmail === 'notifications@calendly.com' || targetEmail.includes('achievepack.com') || targetEmail.includes('pouch.eco') || targetEmail.length < 5
    const actualSearchEmail = isGenericEmail ? '' : targetEmail
    
    // Build Zoho Search Key
    let searchKey = ''
    if (actualSearchEmail && targetName) {
      searchKey = `(to:${actualSearchEmail} OR subject:${targetName} OR from:${actualSearchEmail} OR content:${targetName})`
    } else if (actualSearchEmail) {
      searchKey = `(to:${actualSearchEmail} OR from:${actualSearchEmail})`
    } else if (targetName && targetName.length > 2) {
      // If we don't have a valid email, search by name
      searchKey = `${targetName}`
    } else {
      return res.status(200).json([])
    }

    const searchUrl = `https://mail.zoho.${config.zoho_region}/api/accounts/${accountId}/messages/search`
    
    // Perform search
    let messages: any[] = []
    try {
      const resp = await fetch(`${searchUrl}?searchKey=${encodeURIComponent(searchKey)}&limit=30`, { headers })
      const data = await resp.json() as any
      messages = data.data || []
    } catch (e) {
      console.warn(`Search failed for ${searchKey}:`, e)
    }

    // Deduplicate and filter strictly
    const seenIds = new Set<string>()
    const uniqueMessages = messages.filter(msg => {
      if (!msg.messageId || seenIds.has(msg.messageId)) {
        return false
      }
      
      const from = (msg.fromAddress || '').toLowerCase()
      const to = (msg.toAddress || '').toLowerCase()
      const subject = (msg.subject || '').toLowerCase()
      const summary = (msg.summary || '').toLowerCase()
      
      let matched = false
      if (actualSearchEmail) {
        if (from.includes(actualSearchEmail) || to.includes(actualSearchEmail)) {
          matched = true
        }
      } else if (targetName && targetName.length > 2) {
        if (from.includes(targetName) || to.includes(targetName) || subject.includes(targetName) || summary.includes(targetName)) {
          matched = true
        }
      }

      if (matched) {
        seenIds.add(msg.messageId)
        return true
      }
      return false
    })

    // Sort by date descending
    uniqueMessages.sort((a, b) => {
      const tA = parseInt(a.sentDateInGMT || '0')
      const tB = parseInt(b.sentDateInGMT || '0')
      return tB - tA
    })

    return res.status(200).json(uniqueMessages)

  } catch (error: any) {
    console.error('Error in Zoho emails handler:', error.message)
    return res.status(500).json({ error: error.message })
  }
}

// Extend string helper
declare global {
  interface String {
    strip(): string;
  }
}
if (!String.prototype.strip) {
  String.prototype.strip = function() {
    return this.trim()
  }
}
