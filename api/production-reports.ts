import type { VercelRequest, VercelResponse } from '@vercel/node'

// The secure personal data (production reports)
const SECURE_REPORTS = [
  // Urgent
  { id: '1', customer: 'Rafaela Minatti - EcoPackables', date: '2026-03-24', status: 'Urgent', category: 'Quotes', detail: 'Product: Flat Bottom Pouch (Unfurl version)\nSample: 10 bags to Vista, CA | Bulk: 5,000 bags to Bristol, CT\nStatus: Customer in a hurry - Need reply TODAY\nAction: Re-quote for Unfurl version' },
  // Production
  { id: '2', customer: 'Nadine Likkle More Chocolate', date: '2026-03-16', status: 'In Progress', category: 'Production', detail: 'Day 8 - Daily email reminder active' },
  { id: '3', customer: 'Mark Powell', date: '2026-03-17', status: 'In Progress', category: 'Production', detail: 'Day 7 - Daily email reminder active' },
  { id: '4', customer: 'Jesus Shipping Arrangement', date: '2026-03-18', status: 'In Progress', category: 'Production', detail: 'Day 6 - At Shenzhen freight forwarder' },
  { id: '5', customer: 'Plastic Free Lab Test', date: '2026-03-19', status: 'In Progress', category: 'Production', detail: 'Day 5 - Daily email reminder active' },
  // Shipping
  { id: '6', customer: 'Kostaman', date: '2026-03-16', status: 'Shipped', category: 'Shipping', detail: 'SF1539401797884' },
  { id: '7', customer: 'Icelynne', date: '2026-03-19', status: 'Shipped', category: 'Shipping', detail: 'In transit' },
  { id: '8', customer: 'Patrick', date: '2026-03-20', status: 'Shipped', category: 'Shipping', detail: 'In transit' },
  { id: '9', customer: 'Krissee', date: '2026-03-19', status: 'Shipped', category: 'Shipping', detail: 'Order shipped - follow up' },
  // Pending Quotes
  { id: '10', customer: 'Mikaela', date: '2026-03-03', status: 'Pending', category: 'Quotes', detail: 'Price enquiry - needs follow-up ⚠️ (21 Days)' },
  { id: '11', customer: 'UELAV8 (Justine Heaphy)', date: '2026-03-22', status: 'Pending', category: 'Quotes', detail: 'Stand Up Pouch PET/VMPET/PE, 100-500 qty - Awaiting supplier quote' },
  { id: '12', customer: 'Mike', date: '2026-03-19', status: 'Pending', category: 'Quotes', detail: 'Stone Ground Grits Packaging (2lb, 5lb, 25lb) - Quote sent' },
  { id: '13', customer: 'Katie', date: '2026-03-22', status: 'Pending', category: 'Quotes', detail: 'Display Box - Box 1 quoted, Box 2 awaiting vendor calc' },
  // New Enquiries
  { id: '14', customer: 'Sebastien Ojaperv', date: '2026-03-24', status: 'New', category: 'Enquiries', detail: 'Stick Packs/Sachets for Daily Vitamin Pack (Helpy) ~6x7cm, 360 packs' },
  // Meetings
  { id: '15', customer: 'Palina & Kenny Meeting', date: '2026-04-08', status: 'Scheduled', category: 'Meetings', detail: 'Meeting preparation needed' },
  { id: '16', customer: 'Jaspreet Visit', date: '2026-04-20', status: 'Scheduled', category: 'Meetings', detail: 'HK & Shenzhen Arriving Apr 20, Leaving Apr 24' },
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests for checking PIN
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { pin } = req.body

  // Check the PIN - hardcoded here as fallback or checking Vercel env variable in the future
  const adminPin = process.env.REPORTS_PIN || '8888' // Default temporary PIN if env missing

  if (pin !== adminPin) {
    return res.status(401).json({ error: 'Invalid PIN code' })
  }

  // If secure PIN matches, return the personal data
  return res.status(200).json({
    success: true,
    data: SECURE_REPORTS
  })
}
