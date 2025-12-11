/**
 * 17Track API Service
 * Documentation: https://api.17track.net/en/doc
 */

const API_BASE_URL = 'https://api.17track.net/track/v2.2'
const API_KEY = import.meta.env.VITE_17TRACK_API_KEY

export interface TrackingInfo {
  trackingNumber: string
  carrier?: string
  status?: string
  location?: string
  lastUpdate?: string
  events?: TrackingEvent[]
}

export interface TrackingEvent {
  time: string
  location: string
  status: string
  description: string
}

interface Track17Response {
  code: number
  data: {
    accepted: Array<{
      number: string
      track: {
        b: string  // Carrier code
        z0?: {     // Latest tracking info
          a: string  // Status
          c: string  // Location
          z: string  // Time
        }
        z1?: Array<{  // Tracking events
          a: string  // Status
          c: string  // Location  
          z: string  // Time
          d: string  // Description
        }>
      }
    }>
    rejected: any[]
  }
}

/**
 * Register a tracking number with 17Track
 */
export async function registerTracking(
  trackingNumber: string,
  carrierCode?: string
): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        '17token': API_KEY || ''
      },
      body: JSON.stringify([
        {
          number: trackingNumber,
          carrier: carrierCode || 0, // 0 = auto-detect
          auto_detection: !carrierCode
        }
      ])
    })

    const data = await response.json()
    return data.code === 0 && data.data.accepted.length > 0
  } catch (error) {
    console.error('Error registering tracking:', error)
    return false
  }
}

/**
 * Get tracking information for a tracking number
 */
export async function getTrackingInfo(
  trackingNumber: string
): Promise<TrackingInfo | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/gettrackinfo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        '17token': API_KEY || ''
      },
      body: JSON.stringify([
        {
          number: trackingNumber
        }
      ])
    })

    const data: Track17Response = await response.json()
    
    if (data.code === 0 && data.data.accepted.length > 0) {
      const trackData = data.data.accepted[0].track
      
      return {
        trackingNumber,
        carrier: getCarrierName(trackData.b),
        status: getStatusText(trackData.z0?.a),
        location: trackData.z0?.c,
        lastUpdate: trackData.z0?.z,
        events: trackData.z1?.map(event => ({
          time: event.z,
          location: event.c,
          status: getStatusText(event.a),
          description: event.d
        })) || []
      }
    }

    return null
  } catch (error) {
    console.error('Error getting tracking info:', error)
    return null
  }
}

/**
 * Get carrier name from carrier code
 */
function getCarrierName(code: string): string {
  const carriers: Record<string, string> = {
    '10039': 'DHL',
    '10062': 'FedEx',
    '10103': 'UPS',
    '10130': 'China Post',
    '11043': 'SF Express',
    '10001': 'USPS',
    // Add more carrier codes as needed
  }
  return carriers[code] || 'Unknown Carrier'
}

/**
 * Get human-readable status text
 */
function getStatusText(code?: string): string {
  if (!code) return 'Unknown'
  
  const statuses: Record<string, string> = {
    '0': 'Not Found',
    '10': 'In Transit',
    '20': 'Expired',
    '30': 'Pick Up',
    '35': 'Undelivered',
    '40': 'Delivered',
    '50': 'Alert'
  }
  return statuses[code] || 'Unknown'
}

/**
 * Get tracking URL for a carrier
 */
export function getTrackingUrl(trackingNumber: string, carrier?: string): string {
  const urls: Record<string, string> = {
    'DHL': `https://www.dhl.com/en/express/tracking.html?AWB=${trackingNumber}`,
    'FedEx': `https://www.fedex.com/fedextrack/?trknbr=${trackingNumber}`,
    'UPS': `https://www.ups.com/track?tracknum=${trackingNumber}`,
    'SF Express': `https://www.sf-express.com/cn/en/dynamic_function/waybill/#search/bill-number/${trackingNumber}`,
    'China Post': `http://www.ems.com.cn/mailtracking/you_jian_cha_xun.html?mailNum=${trackingNumber}`,
    'USPS': `https://tools.usps.com/go/TrackConfirmAction?tLabels=${trackingNumber}`
  }
  
  if (carrier && urls[carrier]) {
    return urls[carrier]
  }
  
  // Default to 17Track universal tracking
  return `https://t.17track.net/en#nums=${trackingNumber}`
}

/**
 * Auto-detect carrier and register tracking
 */
export async function autoTrackPackage(trackingNumber: string): Promise<TrackingInfo | null> {
  // First, register the tracking number
  await registerTracking(trackingNumber)
  
  // Wait a bit for 17Track to process
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Then get the tracking info
  return await getTrackingInfo(trackingNumber)
}
