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

    // Mode B: Search messages sent to/from email address
    const searchUrl = `https://mail.zoho.${config.zoho_region}/api/accounts/${accountId}/messages/search`
    
    // Search sent emails
    let sentMessages: any[] = []
    try {
      const sentResp = await fetch(`${searchUrl}?searchKey=to:${email}`, { headers })
      const sentData = await sentResp.json() as any
      sentMessages = sentData.data || []
    } catch (e) {
      console.warn(`Sent search failed for ${email}:`, e)
    }

    // Search received emails
    let receivedMessages: any[] = []
    try {
      const receivedResp = await fetch(`${searchUrl}?searchKey=from:${email}`, { headers })
      const receivedData = await receivedResp.json() as any
      receivedMessages = receivedData.data || []
    } catch (e) {
      console.warn(`Received search failed for ${email}:`, e)
    }

    // Combine and deduplicate
    const combined = [...sentMessages, ...receivedMessages]
    const seenIds = new Set<string>()
    const uniqueMessages = combined.filter(msg => {
      if (!msg.messageId || seenIds.has(msg.messageId)) {
        return false
      }
      seenIds.add(msg.messageId)
      return true
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
