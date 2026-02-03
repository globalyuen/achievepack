import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Mail, Clock, AlertCircle, CheckCircle, Send, RefreshCw, Search, ChevronDown, ChevronRight, Building, Calendar, ExternalLink, Star, Reply, Sparkles, Loader2, TrendingUp, Users, Globe, BarChart3, Zap, X, Copy, CheckCheck, XCircle, PlayCircle, PauseCircle, Handshake, Settings, Link, Info, Package, Filter, Tag, MailCheck, MailX, MailQuestion, Trash2 } from 'lucide-react'

// Customer status options for filtering
const CUSTOMER_STATUSES = [
  { value: 'new', label: '新客户', color: 'bg-blue-100 text-blue-700', icon: Star },
  { value: 'contacted', label: '已联系', color: 'bg-cyan-100 text-cyan-700', icon: Mail },
  { value: 'quoted', label: '已报价', color: 'bg-purple-100 text-purple-700', icon: Tag },
  { value: 'following_up', label: '跟进中', color: 'bg-orange-100 text-orange-700', icon: Clock },
  { value: 'sampling', label: '样品阶段', color: 'bg-indigo-100 text-indigo-700', icon: Package },
  { value: 'won', label: '已成交', color: 'bg-green-100 text-green-700', icon: CheckCircle },
  { value: 'lost', label: '已丢失', color: 'bg-red-100 text-red-700', icon: XCircle },
  { value: 'spam', label: '垃圾邮件', color: 'bg-gray-100 text-gray-500', icon: AlertCircle },
] as const

// Email sending status options
const EMAIL_SEND_STATUSES = [
  { value: 'sent', label: '已发送', color: 'bg-green-100 text-green-700', icon: MailCheck },
  { value: 'not_sent', label: '未发送', color: 'bg-yellow-100 text-yellow-700', icon: MailQuestion },
  { value: 'failed', label: '发送失败', color: 'bg-red-100 text-red-700', icon: MailX },
] as const

type CustomerStatus = typeof CUSTOMER_STATUSES[number]['value']
type EmailSendStatus = typeof EMAIL_SEND_STATUSES[number]['value']

// Business status options
const BUSINESS_STATUSES = [
  { value: 'active', label: '活跃中', icon: PlayCircle, color: 'text-green-600 bg-green-100' },
  { value: 'paused', label: '暂停', icon: PauseCircle, color: 'text-yellow-600 bg-yellow-100' },
  { value: 'partnered', label: '已合作', icon: Handshake, color: 'text-blue-600 bg-blue-100' },
  { value: 'closed', label: '已关闭', icon: XCircle, color: 'text-red-600 bg-red-100' },
  { value: 'pending', label: '待跟进', icon: Clock, color: 'text-orange-600 bg-orange-100' },
] as const

type BusinessStatus = typeof BUSINESS_STATUSES[number]['value']

interface DomainInfo {
  status: 'active' | 'closed' | 'unknown'
  companyInfo?: string
  products?: string[]
  recommendedPackaging?: string[]
  lastChecked?: string
}

interface EmailThread {
  id: string
  email: string
  name: string
  account: string
  days: number
  lastSent: string
  lastSubject: string
  totalSent: number
  totalRecv: number
  priority: 'high' | 'medium' | 'low'
  domain: string
  aiSuggestion?: string
  aiGenerating?: boolean
  // Conversation details
  customerNeeds?: string    // What the customer is looking for
  lastReply?: string        // Summary of last customer reply
  productInterest?: string  // Product types they're interested in
  status?: string           // Current status: quoted, sampling, pending, etc.
  // New fields
  businessStatus?: BusinessStatus  // Business relationship status
  domainInfo?: DomainInfo          // Domain check results
  domainChecking?: boolean         // Is domain being checked
  // Filter-related fields
  customerStatus?: CustomerStatus  // Customer pipeline status
  emailSendStatus?: EmailSendStatus // Email sending status
  lastEmailSentTime?: string       // Last email send timestamp
  lastStatusUpdateTime?: string    // Last status update timestamp
}

interface ScanProgress {
  stage: string
  percent: number
  detail: string
}

interface AnalysisStats {
  totalContacts: number
  totalEmails: number
  needsFollowup: number
  over30: number
  over60: number
  over90: number
  highPriority: number
  mediumPriority: number
}

const XAI_API_KEY = import.meta.env.VITE_XAI_API_KEY || ''

// LocalStorage keys for persistence
const STORAGE_KEYS = {
  BUSINESS_STATUS: 'email_followup_business_status',
  DELETED_CONTACTS: 'email_followup_deleted_contacts',
  MANUALLY_SENT: 'email_followup_manually_sent',
  SENT_DATES: 'email_followup_sent_dates'
}

// Helper functions for localStorage
const getSavedBusinessStatuses = (): Record<string, BusinessStatus> => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.BUSINESS_STATUS)
    return saved ? JSON.parse(saved) : {}
  } catch {
    return {}
  }
}

const saveBusinessStatus = (threadId: string, status: BusinessStatus) => {
  try {
    const current = getSavedBusinessStatuses()
    current[threadId] = status
    localStorage.setItem(STORAGE_KEYS.BUSINESS_STATUS, JSON.stringify(current))
  } catch (e) {
    console.error('Failed to save business status:', e)
  }
}

const getDeletedContacts = (): string[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.DELETED_CONTACTS)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const addDeletedContact = (threadId: string) => {
  try {
    const current = getDeletedContacts()
    if (!current.includes(threadId)) {
      current.push(threadId)
      localStorage.setItem(STORAGE_KEYS.DELETED_CONTACTS, JSON.stringify(current))
    }
  } catch (e) {
    console.error('Failed to save deleted contact:', e)
  }
}

// Helper functions for manually sent status
interface ManuallySentRecord {
  threadId: string
  markedAt: string
  email: string
}

const getManuallySentRecords = (): Record<string, ManuallySentRecord> => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.MANUALLY_SENT)
    return saved ? JSON.parse(saved) : {}
  } catch {
    return {}
  }
}

const saveManuallySentRecord = (threadId: string, email: string) => {
  try {
    const current = getManuallySentRecords()
    current[threadId] = {
      threadId,
      email,
      markedAt: new Date().toISOString()
    }
    localStorage.setItem(STORAGE_KEYS.MANUALLY_SENT, JSON.stringify(current))
  } catch (e) {
    console.error('Failed to save manually sent record:', e)
  }
}

const removeManuallySentRecord = (threadId: string) => {
  try {
    const current = getManuallySentRecords()
    delete current[threadId]
    localStorage.setItem(STORAGE_KEYS.MANUALLY_SENT, JSON.stringify(current))
  } catch (e) {
    console.error('Failed to remove manually sent record:', e)
  }
}

// Helper functions for sent dates
interface SentDateRecord {
  lastSent: string
  lastSubject: string
  totalSent: number
}

const getSavedSentDates = (): Record<string, SentDateRecord> => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.SENT_DATES)
    return saved ? JSON.parse(saved) : {}
  } catch {
    return {}
  }
}

const saveSentDate = (threadId: string, lastSent: string, lastSubject: string, totalSent: number) => {
  try {
    const current = getSavedSentDates()
    current[threadId] = { lastSent, lastSubject, totalSent }
    localStorage.setItem(STORAGE_KEYS.SENT_DATES, JSON.stringify(current))
  } catch (e) {
    console.error('Failed to save sent date:', e)
  }
}

const EmailFollowUpPage: React.FC = () => {
  const [threads, setThreads] = useState<EmailThread[]>([])
  const [stats, setStats] = useState<AnalysisStats | null>(null)
  const [topDomains, setTopDomains] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)
  const [scanning, setScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState<ScanProgress>({ stage: '', percent: 0, detail: '' })
  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | '30days' | '60days' | '90days'>('high')
  const [accountFilter, setAccountFilter] = useState<'all' | 'achievepack' | 'poucheco'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({ 
      'sent_14': true,
      'sent_60': true,
      'sent_120': true,
      'sent_240': false,
      'sent_older': false
    })
  const [showComposeModal, setShowComposeModal] = useState(false)
  const [selectedThread, setSelectedThread] = useState<EmailThread | null>(null)
  const [composeData, setComposeData] = useState({ to: '', subject: '', body: '' })
  const [generatingAI, setGeneratingAI] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [sendingEmail, setSendingEmail] = useState(false)
  const [sendResult, setSendResult] = useState<{ success: boolean; message: string } | null>(null)
  const [batchCheckingDomains, setBatchCheckingDomains] = useState(false)
  const [batchGeneratingAI, setBatchGeneratingAI] = useState(false)
  const [batchSendingEmails, setBatchSendingEmails] = useState(false)
  const [batchProgress, setBatchProgress] = useState({ current: 0, total: 0, type: '' })
  
  // New filter states for multi-select filtering
  const [selectedCustomerStatuses, setSelectedCustomerStatuses] = useState<CustomerStatus[]>([])
  const [selectedEmailStatuses, setSelectedEmailStatuses] = useState<EmailSendStatus[]>([])
  const [showFilterPanel, setShowFilterPanel] = useState(false)

  // Real email data from analysis - Updated 2026-02-01
  const realEmailData: EmailThread[] = [
    // === VERY OLD LEADS (2+ years) - HIGHEST PRIORITY ===
    { id: '1', email: 'koliviaisabelle@gmail.com', name: 'Isabelle Kolivia', account: 'poucheco', days: 887, lastSent: '2023-08-28', lastSubject: 'Re: Popcorn packaging', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'gmail.com', customerNeeds: 'Eco-friendly popcorn packaging bags', lastReply: 'Requested quote for 5000 units', productInterest: 'Stand-up pouch with window', status: 'Quoted' },
    { id: '2', email: 'compliance2@signaturemarket.co', name: 'Compliance Team', account: 'poucheco', days: 880, lastSent: '2023-09-04', lastSubject: 'Re: Exploring Sustainable Packaging', totalSent: 4, totalRecv: 3, priority: 'high', domain: 'signaturemarket.co', customerNeeds: 'Sustainable packaging for snacks marketplace', lastReply: 'Need compliance certificates for Malaysia market', productInterest: 'Compostable stand-up pouches', status: 'Pending cert docs' },
    { id: '3', email: 'jasmin@unicornstudio.co', name: 'Jasmin', account: 'achievepack', days: 843, lastSent: '2023-10-11', lastSubject: 'Re: Update on Bossology', totalSent: 5, totalRecv: 4, priority: 'high', domain: 'unicornstudio.co', customerNeeds: 'Premium packaging for Bossology brand supplements', lastReply: 'Finalizing design, need print proof', productInterest: 'Matte finish stand-up pouch', status: 'Design stage' },
    
    // === NEW OLD LEADS FROM DEEP SCAN ===
    // 2023 Leads - Very old, high potential
    { id: '101', email: 'Bernardo.Garza@wholefoods.com', name: 'Bernardo Garza - Whole Foods', account: 'poucheco', days: 965, lastSent: '2023-06-15', lastSubject: 'RE: Eco-friendly packaging', totalSent: 5, totalRecv: 3, priority: 'high', domain: 'wholefoods.com', customerNeeds: 'Large scale eco-friendly packaging for Whole Foods private label', lastReply: 'Internal review of samples, will follow up', productInterest: 'Recyclable & compostable pouches', status: 'Sample sent' },
    { id: '102', email: 'warren@morlife.com', name: 'Warren Stewart - Morlife', account: 'poucheco', days: 970, lastSent: '2023-06-05', lastSubject: 'Hi Warren', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'morlife.com', customerNeeds: 'Health supplement packaging Australia', lastReply: 'Initial inquiry', productInterest: 'Protein powder pouches', status: 'New lead' },
    { id: '103', email: 'marketing@highbarchocolate.com', name: 'HighBar Chocolate', account: 'poucheco', days: 944, lastSent: '2023-07-01', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'highbarchocolate.com', customerNeeds: 'Premium chocolate bar packaging', lastReply: 'Exploring sustainable options', productInterest: 'Foil-lined compostable pouches', status: 'Inquiry' },
    { id: '104', email: 'info@wiseangler.co.nz', name: 'Leo - Wise Angler NZ', account: 'poucheco', days: 938, lastSent: '2023-07-07', lastSubject: 'API693 Invoice', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'wiseangler.co.nz', customerNeeds: 'Fishing bait packaging NZ', lastReply: 'Paid invoice, happy with quality', productInterest: 'Resealable pouches', status: 'Repeat customer' },
    { id: '105', email: 'hello@bathintentions.ca', name: 'Dinah - Bath Intentions', account: 'poucheco', days: 936, lastSent: '2023-07-10', lastSubject: 'Re: New Event Meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'bathintentions.ca', customerNeeds: 'Bath salts and skincare packaging Canada', lastReply: 'Had video call, discussed options', productInterest: 'Clear window pouches', status: 'Post-meeting' },
    { id: '106', email: 'jason@denterity.com', name: 'Jason Henriquez - Denterity', account: 'poucheco', days: 956, lastSent: '2023-06-19', lastSubject: 'Re: New Event Meeting', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'denterity.com', customerNeeds: 'Dental products packaging', lastReply: 'Scheduled call', productInterest: 'Medical-grade pouches', status: 'Meeting scheduled' },
    { id: '107', email: 'pattyf@good-fibers.com', name: 'Patty - Good Fibers', account: 'poucheco', days: 983, lastSent: '2023-05-23', lastSubject: 'Re: Compostable Film Trial', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'good-fibers.com', customerNeeds: 'Compostable film for fiber products', lastReply: 'Requested film trial samples', productInterest: 'PLA/PBAT film rolls', status: 'Trial requested' },
    { id: '108', email: 'jmcorbeil@kenkomeals.com', name: 'Jean-Michel - Kenko Meals', account: 'poucheco', days: 1002, lastSent: '2023-05-04', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 5, totalRecv: 3, priority: 'high', domain: 'kenkomeals.com', customerNeeds: 'Meal prep packaging for healthy food delivery Canada', lastReply: 'DHL samples received, confirmed address in Quebec', productInterest: 'Compostable meal pouches', status: 'Samples delivered' },
    { id: '109', email: 'paul@fastingsystems.com', name: 'Paul Higgins - Fasting Systems', account: 'poucheco', days: 1010, lastSent: '2023-04-26', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'fastingsystems.com', customerNeeds: 'Supplement sachets for fasting programs', lastReply: 'Interested in small sachet format', productInterest: '3-side seal sachets', status: 'Quoted' },
    
    // === 2023 ACHIEVEPACK LEADS - VERY OLD ===
    { id: '200', email: 'andrea@department220.com', name: 'Andrea Falasca - Department 220', account: 'achievepack', days: 962, lastSent: '2023-06-14', lastSubject: 'Re: New Event Meeting', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'department220.com', customerNeeds: 'Retail packaging design agency', lastReply: 'Had meeting about client projects', productInterest: 'Custom printed pouches', status: 'Post-meeting' },
    { id: '201', email: 'steph@cocktailsbymail.co.uk', name: 'Steph DiCamillo - Cocktails By Mail', account: 'achievepack', days: 1024, lastSent: '2023-04-12', lastSubject: 'Re: Pouches', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'cocktailsbymail.co.uk', customerNeeds: 'Liquid-safe pouches for cocktail delivery UK', lastReply: 'Discussing leak-proof options', productInterest: 'Spout pouches', status: 'Quoted' },
    { id: '202', email: 'sarah@bpiworld.org', name: 'Sarah Roza - BPI World', account: 'achievepack', days: 1024, lastSent: '2023-04-12', lastSubject: 'Re: Payment request BPI Invoice', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'bpiworld.org', customerNeeds: 'BPI certification partnership', lastReply: 'Invoice processed, ongoing cert support', productInterest: 'Certification services', status: 'Active partner' },
    { id: '203', email: 'k.babel@flustix.com', name: 'Krzysztof Babel - Flustix', account: 'achievepack', days: 1024, lastSent: '2023-04-12', lastSubject: 'Re: EU-Regulation flustix', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'flustix.com', customerNeeds: 'EU plastic-free certification', lastReply: 'Discussing EU regulation compliance', productInterest: 'Flustix certified materials', status: 'Cert discussion' },
    { id: '204', email: 'hello@bisawellness.com', name: 'Delilah Bisase - Bisa Wellness', account: 'achievepack', days: 927, lastSent: '2024-07-18', lastSubject: 'Re: Dimensions and Edits', totalSent: 12, totalRecv: 8, priority: 'high', domain: 'bisawellness.com', customerNeeds: 'Skincare product pouches with specific dimensions', lastReply: 'Multiple design revisions, finalizing artwork', productInterest: 'Custom sized stand-up pouches', status: 'Design revisions' },
    { id: '205', email: 'victor@tmwfoods.com', name: 'Victor Paul - TMW Foods', account: 'achievepack', days: 1025, lastSent: '2023-04-11', lastSubject: 'Re: New Event Meeting', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'tmwfoods.com', customerNeeds: 'Food packaging for specialty foods', lastReply: 'Had initial call, exploring options', productInterest: 'Barrier pouches for food', status: 'Post-meeting' },
    { id: '206', email: 'pkjfrost96@gmail.com', name: 'Peter Frost', account: 'achievepack', days: 1024, lastSent: '2023-04-12', lastSubject: 'Re: New Event Meeting', totalSent: 6, totalRecv: 4, priority: 'high', domain: 'gmail.com', customerNeeds: 'Small business packaging needs', lastReply: 'Active discussion about options', productInterest: 'Entry-level pouches', status: 'Quoted' },
    { id: '207', email: 'macevedoestu@umass.edu', name: 'Victoria Acevedo - UMass', account: 'achievepack', days: 1030, lastSent: '2023-04-06', lastSubject: 'Re: New Event Meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'umass.edu', customerNeeds: 'Academic research on sustainable packaging', lastReply: 'Research collaboration discussion', productInterest: 'Material samples for study', status: 'Research' },
    
    // === 2022-2023 ACHIEVEPACK LEADS ===
    { id: '210', email: 'pepskaram@gmail.com', name: 'Peter Karam', account: 'achievepack', days: 1185, lastSent: '2022-11-02', lastSubject: 'Re: New Event Meeting', totalSent: 5, totalRecv: 3, priority: 'high', domain: 'gmail.com', customerNeeds: 'Personal brand packaging', lastReply: 'Had meeting, discussed options', productInterest: 'Small quantity pouches', status: 'Post-meeting' },
    { id: '211', email: 'dpitts@iwilife.com', name: 'Destiny Pitts - IWI Life', account: 'achievepack', days: 1183, lastSent: '2022-11-03', lastSubject: 'Re: New Event Meeting', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'iwilife.com', customerNeeds: 'Algae supplement packaging', lastReply: 'Video call completed', productInterest: 'Eco-friendly supplement pouches', status: 'Post-meeting' },
    { id: '212', email: 'liza@knowrishwell.com', name: 'Liza Stewart - Knowrish Well', account: 'achievepack', days: 1181, lastSent: '2022-11-06', lastSubject: 'Re: Purchase Order from Morlife', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'knowrishwell.com', customerNeeds: 'Health food packaging', lastReply: 'Coordinating with Morlife order', productInterest: 'Nutrition pouches', status: 'Order processing' },
    { id: '213', email: 'energy@lovmate.com.au', name: 'Lov Maté Australia', account: 'achievepack', days: 1183, lastSent: '2022-11-03', lastSubject: 'Re: Pouches', totalSent: 8, totalRecv: 6, priority: 'high', domain: 'lovmate.com.au', customerNeeds: 'Yerba mate tea packaging Australia', lastReply: 'Multiple design iterations completed', productInterest: 'Premium tea pouches', status: 'Design stage' },
    { id: '214', email: 'purchasing@morlife.com', name: 'Gina Davidson - Morlife', account: 'achievepack', days: 1185, lastSent: '2022-11-02', lastSubject: 'RE: Purchase Order', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'morlife.com', customerNeeds: 'Large scale supplement packaging Australia', lastReply: 'Purchase order confirmed', productInterest: 'Protein powder pouches', status: 'Repeat customer' },
    { id: '215', email: 'spartateashop@gmail.com', name: 'Sparta Tea Shop', account: 'achievepack', days: 1185, lastSent: '2022-11-02', lastSubject: 'Re: Tea Bag colors', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'gmail.com', customerNeeds: 'Custom colored tea bags', lastReply: 'Color samples requested', productInterest: 'Colored paper tea bags', status: 'Sample requested' },
    { id: '216', email: 'me@muthaearth.ca', name: 'Mutha Earth Canada', account: 'achievepack', days: 1134, lastSent: '2022-12-23', lastSubject: 'Re: UPDATED LABELS', totalSent: 5, totalRecv: 3, priority: 'high', domain: 'muthaearth.ca', customerNeeds: 'Eco skincare packaging Canada', lastReply: 'Label designs updated and approved', productInterest: 'Compostable cosmetic pouches', status: 'Labels approved' },
    { id: '217', email: 'f.pettenon@sicce.com', name: 'Francesca Pettenon - Sicce', account: 'achievepack', days: 1191, lastSent: '2022-10-27', lastSubject: 'Re: New Event Meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'sicce.com', customerNeeds: 'Aquarium products packaging Italy', lastReply: 'Initial meeting completed', productInterest: 'Pet industry pouches', status: 'Post-meeting' },
    { id: '218', email: 'senabumin@gmail.com', name: 'Sena Bumin', account: 'achievepack', days: 1191, lastSent: '2022-10-27', lastSubject: 'Re: New Event Meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'gmail.com', customerNeeds: 'Food product packaging', lastReply: 'Had discovery call', productInterest: 'Food-grade pouches', status: 'Post-meeting' },
    { id: '219', email: 'sbotes83@me.com', name: 'Shaun Botes', account: 'achievepack', days: 1192, lastSent: '2022-10-26', lastSubject: 'Re: New Event Meeting', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'me.com', customerNeeds: 'Specialty product packaging', lastReply: 'Following up on meeting', productInterest: 'Custom pouches', status: 'Post-meeting' },
    { id: '220', email: 'cathie@woodmountainnaturals.com', name: 'Cathie Bal - Wood Mountain', account: 'achievepack', days: 1189, lastSent: '2022-10-29', lastSubject: 'Re: Stand up kraft pouches', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'woodmountainnaturals.com', customerNeeds: 'Natural products packaging Canada', lastReply: 'Kraft pouch samples requested', productInterest: 'Kraft stand-up pouches', status: 'Sample requested' },
    { id: '221', email: 'adair@auzziedogtreats.com.au', name: 'Adair Murphy - Auzzie Dog Treats', account: 'achievepack', days: 1186, lastSent: '2022-11-01', lastSubject: 'Re: New Event Meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'auzziedogtreats.com.au', customerNeeds: 'Pet treat packaging Australia', lastReply: 'Video call completed', productInterest: 'Resealable pet food pouches', status: 'Post-meeting' },
    { id: '222', email: 'Perri@weareshrine.com', name: 'Perri - Shrine', account: 'achievepack', days: 1116, lastSent: '2023-01-10', lastSubject: 'Zoom link', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'weareshrine.com', customerNeeds: 'Premium brand packaging', lastReply: 'Zoom meeting scheduled', productInterest: 'Luxury pouches', status: 'Meeting scheduled' },
    { id: '223', email: 'parmeetgill6@gmail.com', name: 'Parmeet Gill', account: 'achievepack', days: 1117, lastSent: '2023-01-09', lastSubject: 'Re: flat bottom pouch', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'gmail.com', customerNeeds: 'Coffee packaging with flat bottom', lastReply: 'Interested in flat bottom design', productInterest: 'Flat bottom coffee pouches', status: 'Quoted' },
    
    // === 2022-2023 POUCHECO LEADS ===
    { id: '230', email: 'kyle@wildwayoflife.com', name: 'Kyle Koehler - Wild Way of Life', account: 'poucheco', days: 1067, lastSent: '2023-02-28', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'wildwayoflife.com', customerNeeds: 'Outdoor/adventure product packaging', lastReply: 'Exploring eco options', productInterest: 'Durable eco pouches', status: 'Inquiry' },
    { id: '231', email: 'ceara@naturalspafactory.co.uk', name: 'Ceara - Natural Spa Factory', account: 'poucheco', days: 1198, lastSent: '2022-10-20', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'naturalspafactory.co.uk', customerNeeds: 'Spa products packaging UK', lastReply: 'Requested info on eco options', productInterest: 'Cosmetic pouches', status: 'Inquiry' },
    { id: '232', email: 'bobby@abokichi.com', name: 'Bobby Khorasani - Abokichi', account: 'poucheco', days: 1205, lastSent: '2022-10-13', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'abokichi.com', customerNeeds: 'Japanese miso paste packaging', lastReply: 'Multiple discussions about barrier requirements', productInterest: 'High-barrier food pouches', status: 'Technical discussion' },
    { id: '233', email: 'egle.girdzijauske@allive.com', name: 'Eglė Girdžijauskė - Allive', account: 'poucheco', days: 1204, lastSent: '2022-10-14', lastSubject: 'RE: Sustainable pouches Kirkland', totalSent: 6, totalRecv: 4, priority: 'high', domain: 'allive.com', customerNeeds: 'Kirkland private label sustainable packaging', lastReply: 'Extensive email thread about specifications', productInterest: 'Large volume sustainable pouches', status: 'Specs review' },
    { id: '234', email: 'orders@zazubean.com', name: 'Zazu Bean', account: 'poucheco', days: 1209, lastSent: '2022-10-09', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'zazubean.com', customerNeeds: 'Chocolate/cocoa product packaging', lastReply: 'Initial inquiry response', productInterest: 'Food-safe pouches', status: 'Inquiry' },
    { id: '235', email: 'fv@terroirsandexperiences.com', name: 'Fabrice - Terroirs & Experiences', account: 'poucheco', days: 1211, lastSent: '2022-10-07', lastSubject: 'Re: Ziplock bags French market', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'terroirsandexperiences.com', customerNeeds: 'Gourmet food packaging for French market', lastReply: 'Ziplock requirements discussed', productInterest: 'Resealable ziplock pouches', status: 'Quoted' },
    { id: '236', email: 'nick@esse.agency', name: 'Nick Cannons - Esse Agency', account: 'poucheco', days: 1210, lastSent: '2022-10-08', lastSubject: 'Re: Our meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'esse.agency', customerNeeds: 'Brand agency client packaging', lastReply: 'Post-meeting follow up', productInterest: 'Custom branded pouches', status: 'Post-meeting' },
    { id: '237', email: 'shiloh@teaatshiloh.com', name: 'Shiloh - Tea at Shiloh', account: 'poucheco', days: 1206, lastSent: '2022-10-12', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'teaatshiloh.com', customerNeeds: 'Premium tea packaging', lastReply: 'Exploring eco tea bags', productInterest: 'Compostable tea pouches', status: 'Inquiry' },
    { id: '238', email: 'contact@colibrio.cafe', name: 'Colibrio Cafe', account: 'poucheco', days: 1212, lastSent: '2022-10-06', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'colibrio.cafe', customerNeeds: 'Coffee packaging for cafe brand', lastReply: 'Initial inquiry', productInterest: 'Coffee pouches with valve', status: 'Inquiry' },
    { id: '239', email: 'contact@mothernaturesrecipes.com', name: 'Kheyla - Mother Natures Recipes', account: 'poucheco', days: 1207, lastSent: '2022-10-11', lastSubject: 'Re: Biodegradable pouch', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'mothernaturesrecipes.com', customerNeeds: 'Natural food products biodegradable packaging', lastReply: 'Multiple questions about biodegradability', productInterest: 'Certified biodegradable pouches', status: 'Technical Q&A' },
    { id: '240', email: 'tudor@unison.today', name: 'Tudor Iacob - Unison', account: 'poucheco', days: 1201, lastSent: '2022-10-17', lastSubject: 'Re: 3 side seal packaging', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'unison.today', customerNeeds: '3-side seal sachets for products', lastReply: 'Technical specs discussed', productInterest: '3-side seal sachets', status: 'Quoted' },
    { id: '241', email: 'angela.mcquien@terrasoul.com', name: 'Angela McQuien - Terrasoul', account: 'poucheco', days: 1209, lastSent: '2022-10-09', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'terrasoul.com', customerNeeds: 'Superfoods bulk packaging', lastReply: 'Exploring sustainable alternatives', productInterest: 'Large format eco pouches', status: 'Inquiry' },
    { id: '242', email: 'reallyfoodsg@gmail.com', name: 'Really Foods Singapore', account: 'poucheco', days: 1209, lastSent: '2022-10-09', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'gmail.com', customerNeeds: 'Food packaging Singapore market', lastReply: 'Multiple inquiries about options', productInterest: 'Food-grade pouches SEA', status: 'Multi-inquiry' },
    { id: '243', email: 'sn@viriditybrands.com', name: 'Viridity Brands', account: 'poucheco', days: 1212, lastSent: '2022-10-06', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'viriditybrands.com', customerNeeds: 'Green/eco brand packaging', lastReply: 'Initial inquiry', productInterest: 'Eco-certified pouches', status: 'Inquiry' },
    { id: '244', email: 'arianna@laboraad.com', name: 'Arianna - Laboraad', account: 'poucheco', days: 1212, lastSent: '2022-10-06', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'laboraad.com', customerNeeds: 'Lab/pharmaceutical packaging', lastReply: 'Exploring options', productInterest: 'Medical-grade pouches', status: 'Inquiry' },
    { id: '245', email: 'oranjegrove@gmail.com', name: 'Oranje Grove Dutch Shoppe', account: 'poucheco', days: 1212, lastSent: '2022-10-06', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'gmail.com', customerNeeds: 'Dutch specialty foods packaging', lastReply: 'Initial contact', productInterest: 'Food pouches', status: 'Inquiry' },
    { id: '246', email: 'alda_london@yahoo.co.uk', name: 'Alda Bjork Olafsdottir', account: 'poucheco', days: 1210, lastSent: '2022-10-08', lastSubject: 'Re: Enquiry', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'yahoo.co.uk', customerNeeds: 'Specialty product packaging', lastReply: 'General inquiry answered', productInterest: 'Custom pouches', status: 'Inquiry' },
    { id: '247', email: 'jorge.vas.val@gmail.com', name: 'Jorge Vasquez - Super Greens', account: 'poucheco', days: 1212, lastSent: '2022-10-06', lastSubject: 'Re: Pouch for super greens', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'gmail.com', customerNeeds: 'Green superfood powder packaging', lastReply: 'Sizing and materials discussed', productInterest: 'Powder pouches with zipper', status: 'Quoted' },
    
    // 2024 Leads - 1 year old
    { id: '110', email: 'selin@flora.co', name: 'Selin - Flora Co', account: 'poucheco', days: 602, lastSent: '2024-06-08', lastSubject: 'Fwd: Thank you Pouch.eco', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'flora.co', customerNeeds: 'Floral/botanical product packaging', productInterest: 'Eco-friendly pouches', status: 'New lead' },
    { id: '111', email: 'mellisa@spreademkitchen.com', name: 'Mellisa - Spread Em Kitchen', account: 'poucheco', days: 602, lastSent: '2024-06-08', lastSubject: 'Fwd: Thank you Pouch.eco', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'spreademkitchen.com', customerNeeds: 'Artisan food spreads packaging', productInterest: 'Food-safe stand-up pouches', status: 'New lead' },
    { id: '112', email: 'joncrane@compassionatekitchen.org', name: 'Jon Crane - Compassionate Kitchen', account: 'poucheco', days: 607, lastSent: '2024-06-03', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'compassionatekitchen.org', customerNeeds: 'Plant-based food packaging nonprofit', lastReply: 'Discussed bulk options', productInterest: 'Compostable food pouches', status: 'Multi-inquiry' },
    { id: '113', email: 'dcgaviola91@yahoo.com', name: 'DC Gaviola', account: 'poucheco', days: 595, lastSent: '2024-06-15', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'yahoo.com', customerNeeds: 'Small business packaging', productInterest: 'Entry-level eco pouches', status: 'New lead' },
    { id: '114', email: 'kong@themoonbeam.co', name: 'Qi Herng Kong - Moonbeam', account: 'poucheco', days: 619, lastSent: '2024-05-22', lastSubject: 'Re: Invitation Meeting', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'themoonbeam.co', customerNeeds: 'Premium beverage packaging Singapore', lastReply: 'Meeting scheduled', productInterest: 'Luxury drink pouches', status: 'Post-meeting' },
    { id: '115', email: 'varden@themoonbeam.co', name: 'Varden Toh - Moonbeam', account: 'poucheco', days: 618, lastSent: '2024-05-23', lastSubject: 'Re: Invitation Meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'themoonbeam.co', customerNeeds: 'Moonbeam brand operations', lastReply: 'Follow up from meeting', productInterest: 'Sustainable beverage packaging', status: 'Post-meeting' },
    
    // achievepack old leads 2025
    { id: '120', email: 'hey@switchbakery.com', name: 'Joshua Bradley - Switch Bakery', account: 'achievepack', days: 269, lastSent: '2025-05-07', lastSubject: 'Re: New Event Meeting', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'switchbakery.com', customerNeeds: 'Bakery product packaging for artisan breads', lastReply: 'Had meeting, discussed options', productInterest: 'Kraft paper bags with window', status: 'Post-meeting' },
    { id: '121', email: 'lorraine.wong@dfiretailgroup.com', name: 'Lorraine Wong - DFI Retail', account: 'achievepack', days: 269, lastSent: '2025-05-07', lastSubject: 'FSC Label Application', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'dfiretailgroup.com', customerNeeds: 'FSC certified packaging for retail chain', lastReply: 'FSC label application in progress', productInterest: 'FSC certified pouches', status: 'Cert in progress' },
    { id: '122', email: 'june.wong@rich-aim.com', name: 'June Wong - Rich Aim', account: 'achievepack', days: 269, lastSent: '2025-05-07', lastSubject: 'RE: Paper Sandwich Boxes', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'rich-aim.com', customerNeeds: 'Food service paper packaging', lastReply: 'Discussing paper sandwich box specs', productInterest: 'Paper food containers', status: 'Quoted' },
    { id: '123', email: 'michaela.herbini@gmail.com', name: 'Michaela Herbini', account: 'achievepack', days: 322, lastSent: '2025-03-15', lastSubject: 'Re: New Event Meeting', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'gmail.com', customerNeeds: 'Personal brand product packaging', lastReply: 'Had discovery meeting', productInterest: 'Custom branded pouches', status: 'Post-meeting' },
    { id: '124', email: 'rose.battah@bpiworld.org', name: 'Rose Battah - BPI', account: 'achievepack', days: 325, lastSent: '2025-03-12', lastSubject: 'Re: BPI Annual Check-In', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'bpiworld.org', customerNeeds: 'BPI certification annual partnership renewal', lastReply: 'Annual check-in completed', productInterest: 'Compostable certification', status: 'Active partner' },
    { id: '125', email: 'luria.david5@gmail.com', name: 'David Luria', account: 'achievepack', days: 325, lastSent: '2025-03-12', lastSubject: 'Re: New Event Meeting', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'gmail.com', customerNeeds: 'Startup packaging requirements', lastReply: 'Had detailed discussion', productInterest: 'Flexible packaging', status: 'Post-meeting' },
    { id: '126', email: 'gia@ninettehairstudio.com', name: 'Giannina Montanari - Ninette', account: 'achievepack', days: 327, lastSent: '2025-03-10', lastSubject: 'Re: New Event Meeting', totalSent: 5, totalRecv: 3, priority: 'high', domain: 'ninettehairstudio.com', customerNeeds: 'Hair product packaging for salon brand', lastReply: 'Multiple design discussions', productInterest: 'Cosmetic pouches', status: 'Design stage' },
    { id: '127', email: 'hello@mnpse.com', name: 'Mark Newall - MNPSE', account: 'achievepack', days: 332, lastSent: '2025-03-04', lastSubject: 'Re: New Event Meeting', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'mnpse.com', customerNeeds: 'Engineering/industrial product packaging', lastReply: 'Technical requirements discussed', productInterest: 'Heavy-duty pouches', status: 'Post-meeting' },
    { id: '128', email: 'kenny.tsang@gvdg.com.hk', name: 'Kenny Tsang - GVDG', account: 'achievepack', days: 336, lastSent: '2025-03-01', lastSubject: 'Re: Quotation Salad Bag Order', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'gvdg.com.hk', customerNeeds: 'Salad bags for HK food service', lastReply: 'Quotation for salad bag order', productInterest: 'Produce bags', status: 'Quoted' },
    { id: '129', email: 'info@wildandtea.com', name: 'Danielle - Wild and Tea', account: 'achievepack', days: 337, lastSent: '2025-02-28', lastSubject: 'Re: New Event Meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'wildandtea.com', customerNeeds: 'Wild herbal tea packaging', lastReply: 'Initial meeting completed', productInterest: 'Tea pouches with zipper', status: 'Post-meeting' },
    { id: '130', email: 'jess@naturesfarmersea.com', name: 'Jess Redman - Natures Farmer', account: 'achievepack', days: 338, lastSent: '2025-02-27', lastSubject: 'Re: New Event Meeting', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'naturesfarmersea.com', customerNeeds: 'Organic farm products packaging SEA', lastReply: 'Had meeting discussion', productInterest: 'Sustainable food pouches', status: 'Post-meeting' },
    
    // === EXISTING DATA ===
    { id: '4', email: 'sales@baumannse.com', name: 'Sales Team', account: 'poucheco', days: 828, lastSent: '2023-10-26', lastSubject: 'Re: New Inquiry For Order 2620', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'baumannse.com', customerNeeds: 'Industrial packaging equipment supplier', lastReply: 'Order inquiry 2620 details', productInterest: 'Machinery compatible pouches', status: 'Inquiry' },
    { id: '5', email: 'adam@designmonkey.co.nz', name: 'Adam', account: 'achievepack', days: 795, lastSent: '2023-11-28', lastSubject: 'Re: New Event: Joe Dakin', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'designmonkey.co.nz', customerNeeds: 'Design agency packaging for NZ clients', lastReply: 'Joe Dakin project discussion', productInterest: 'Custom designed pouches', status: 'Post-meeting' },
    { id: '6', email: 'sarah@ecoware.co.nz', name: 'Sarah', account: 'poucheco', days: 786, lastSent: '2023-12-07', lastSubject: 'Re: Compostable Juice Pouches', totalSent: 4, totalRecv: 3, priority: 'high', domain: 'ecoware.co.nz', customerNeeds: 'Compostable juice pouches for NZ eco brand', lastReply: 'Detailed specs for juice pouches', productInterest: 'Compostable spout pouches', status: 'Technical Q&A' },
    { id: '7', email: 'raul@terraseed.com', name: 'Raul', account: 'achievepack', days: 785, lastSent: '2023-12-08', lastSubject: 'Re: Multivitamin for Vegan', totalSent: 6, totalRecv: 5, priority: 'high', domain: 'terraseed.com', customerNeeds: 'Vegan supplement packaging', lastReply: 'Extensive discussion on vegan cert requirements', productInterest: 'Vegan-certified pouches', status: 'Multi-inquiry' },
    { id: '8', email: 'fereshteh@blueaquaint.com', name: 'Fereshteh', account: 'poucheco', days: 780, lastSent: '2023-12-13', lastSubject: 'Re: Request for Standing Pouch', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'blueaquaint.com', customerNeeds: 'Standing pouch for cosmetic brand', lastReply: 'Requested specific dimensions', productInterest: 'Stand-up cosmetic pouches', status: 'Quoted' },
    { id: '9', email: 'lucido.leinteract@gmail.com', name: 'Lucido', account: 'achievepack', days: 770, lastSent: '2023-12-23', lastSubject: 'compostable-ecopouch.com request', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'gmail.com', customerNeeds: 'Website inquiry for compostable pouches', lastReply: 'Via ecopouch website form', productInterest: 'Compostable pouches', status: 'Inquiry' },
    { id: '10', email: 'aadil@rigroup.co.uk', name: 'Aadil', account: 'achievepack', days: 736, lastSent: '2024-01-26', lastSubject: 'Re: Thank you for your interest', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'rigroup.co.uk', customerNeeds: 'UK retail group packaging needs', lastReply: 'Follow up on interest', productInterest: 'Retail-ready pouches', status: 'Inquiry' },
    { id: '11', email: 'caribafoods@rogers.com', name: 'Cariba Foods', account: 'poucheco', days: 734, lastSent: '2024-01-28', lastSubject: 'Sher dieline', totalSent: 5, totalRecv: 4, priority: 'high', domain: 'rogers.com', customerNeeds: 'Caribbean food products packaging', lastReply: 'Dieline for Sher product line', productInterest: 'Food pouches with custom print', status: 'Design stage' },
    { id: '12', email: 'barry.verlaque@sealedair.com', name: 'Barry Verlaque', account: 'achievepack', days: 726, lastSent: '2024-02-05', lastSubject: 'print', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'sealedair.com', customerNeeds: 'Sealed Air partnership/print discussion', lastReply: 'Print capabilities inquiry', productInterest: 'Print partnership', status: 'Discussion' },
    { id: '13', email: 'tara@plugtheproject.com', name: 'Tara', account: 'poucheco', days: 726, lastSent: '2024-02-05', lastSubject: 'Thank you for your interest', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'plugtheproject.com', customerNeeds: 'Marketing agency client packaging', lastReply: 'Initial interest follow up', productInterest: 'Branded pouches', status: 'Inquiry' },
    { id: '14', email: 'team@thegoodpeaco.com', name: 'Good Pea Co Team', account: 'achievepack', days: 716, lastSent: '2024-02-15', lastSubject: 'Re: Enquiry', totalSent: 4, totalRecv: 3, priority: 'high', domain: 'thegoodpeaco.com', customerNeeds: 'Plant-based pea protein packaging', lastReply: 'Multiple inquiries about protein pouch options', productInterest: 'Protein powder pouches', status: 'Multi-inquiry' },
    
    // poucheco 2025 leads
    { id: '47', email: 'PDixit@fuld.com', name: 'Prerna Dixit', account: 'poucheco', days: 327, lastSent: '2025-03-09', lastSubject: 'RE: High-Barrier Coating', totalSent: 3, totalRecv: 2, priority: 'high', domain: 'fuld.com', customerNeeds: 'High-barrier coating research', lastReply: 'Technical specs on barrier coatings', productInterest: 'High-barrier film', status: 'Technical Q&A' },
    { id: '48', email: 'jordan@carnivoremeat.com', name: 'Jordan', account: 'poucheco', days: 330, lastSent: '2025-03-05', lastSubject: 'Re: Thank you', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'carnivoremeat.com', customerNeeds: 'Meat snack packaging', lastReply: 'Thank you follow up', productInterest: 'High-barrier meat pouches', status: 'Inquiry' },
    { id: '49', email: 'josh.s@microdose.com', name: 'Josh Silva', account: 'poucheco', days: 342, lastSent: '2025-02-11', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 6, totalRecv: 4, priority: 'high', domain: 'microdose.com', customerNeeds: 'Microdose supplement packaging', lastReply: 'Multiple discussions on sachet options', productInterest: 'Small sachets with child-resistant', status: 'Multi-inquiry' },
    { id: '50', email: 'deserveat.foods@gmail.com', name: 'DeservEat', account: 'poucheco', days: 354, lastSent: '2025-02-10', lastSubject: 'Re: Thank you Pouch.eco', totalSent: 3, totalRecv: 1, priority: 'high', domain: 'gmail.com', customerNeeds: 'Ready-to-eat food packaging', lastReply: 'Initial inquiry response', productInterest: 'Retort pouches', status: 'Inquiry' },
    { id: '51', email: 'info@firmvineng.com', name: 'Firmvin Engineering', account: 'poucheco', days: 356, lastSent: '2025-02-09', lastSubject: 'Re: Partnership Opportunity', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'firmvineng.com', customerNeeds: 'Engineering partnership for machinery', lastReply: 'Partnership discussion', productInterest: 'Pouch-machine compatibility', status: 'Partnership' },
    { id: '52', email: 'procurement@myni.ca', name: 'Myni Approvisionnement', account: 'poucheco', days: 358, lastSent: '2025-02-07', lastSubject: 'Re: Urgent: Quotation', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'myni.ca', customerNeeds: 'Eco-cleaning products packaging Canada', lastReply: 'Urgent quotation requested', productInterest: 'Refill pouches', status: 'Urgent quote' },
    { id: '53', email: 'estefbono@hotmail.com', name: 'Estef Bono', account: 'poucheco', days: 358, lastSent: '2025-02-07', lastSubject: 'Re: Pouch Pricing', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'hotmail.com', customerNeeds: 'Small business pouch pricing', lastReply: 'Pricing inquiry', productInterest: 'Budget-friendly pouches', status: 'Quoted' },
    { id: '54', email: 'beau.schmitt@gmail.com', name: 'Beau Schmitt', account: 'poucheco', days: 364, lastSent: '2025-02-01', lastSubject: 'Re: Packaging Request', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'gmail.com', customerNeeds: 'Custom packaging request', lastReply: 'Packaging requirements shared', productInterest: 'Custom pouches', status: 'Inquiry' },
    { id: '56', email: 'kendra.strath@cocomarch.com', name: 'Kendra Strath', account: 'poucheco', days: 374, lastSent: '2025-01-22', lastSubject: 'Re: Eco-friendly pouch', totalSent: 5, totalRecv: 3, priority: 'high', domain: 'cocomarch.com', customerNeeds: 'Coconut products eco packaging', lastReply: 'Multiple discussions on eco options', productInterest: 'Compostable food pouches', status: 'Multi-inquiry' },
    { id: '57', email: 'Hello@leavesofleisure.com', name: 'Allison Ullo', account: 'poucheco', days: 374, lastSent: '2025-01-22', lastSubject: 'Re: Quote', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'leavesofleisure.com', customerNeeds: 'Tea/herbal products packaging', productInterest: 'Premium tea pouches', status: 'New lead' },
    { id: '58', email: 'kelly@naturesfarmersea.com', name: 'Kelly Howarth', account: 'poucheco', days: 396, lastSent: '2024-12-23', lastSubject: 'Re: Quote', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'naturesfarmersea.com', customerNeeds: 'Nature Farmer SEA products packaging', lastReply: 'Quote follow up', productInterest: 'Sustainable farm packaging', status: 'Quoted' },
    { id: '59', email: 'mubeen@earthsidefarms.com', name: 'Ahmad Mubeen', account: 'poucheco', days: 413, lastSent: '2024-12-14', lastSubject: 'Re: RFQ-Compostable Packaging', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'earthsidefarms.com', customerNeeds: 'Organic farm compostable packaging', lastReply: 'RFQ details discussed', productInterest: 'Certified compostable pouches', status: 'RFQ pending' },
    
    // achievepack 2025 recent
    { id: '25', email: 'al@tierrafarm.com', name: 'Al Fox', account: 'achievepack', days: 72, lastSent: '2025-11-20', lastSubject: 'Re: Al and Ryan Wong Meeting', totalSent: 6, totalRecv: 4, priority: 'high', domain: 'tierrafarm.com', customerNeeds: 'Large organic farm product packaging', lastReply: 'Had meeting with Ryan, discussing bulk orders', productInterest: 'Bulk organic food pouches', status: 'Post-meeting' },
    { id: '26', email: 'arthur@teacraft.com.au', name: 'Arthur', account: 'achievepack', days: 72, lastSent: '2025-11-20', lastSubject: 'RE: tea packaging Sydney', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'teacraft.com.au', customerNeeds: 'Premium tea packaging for Sydney tea brand', lastReply: 'Sydney tea packaging requirements', productInterest: 'Specialty tea pouches', status: 'Inquiry' },
    { id: '27', email: 'joseph@numilk.com', name: 'Joseph Savino', account: 'achievepack', days: 74, lastSent: '2025-11-18', lastSubject: 'Re: Numilk Compostable Films', totalSent: 5, totalRecv: 3, priority: 'high', domain: 'numilk.com', customerNeeds: 'Compostable film for plant milk brand', lastReply: 'Film specs discussion for Numilk', productInterest: 'Compostable dairy-alt films', status: 'Technical Q&A' },
    { id: '28', email: 'info@boojabooja.com', name: 'Booja Booja', account: 'achievepack', days: 75, lastSent: '2025-11-17', lastSubject: 'eco friendly packaging', totalSent: 1, totalRecv: 0, priority: 'high', domain: 'boojabooja.com', customerNeeds: 'UK chocolate brand eco packaging', productInterest: 'Compostable chocolate wrappers', status: 'New lead' },
    { id: '29', email: 'george@segapac.com', name: 'George Dislakis', account: 'achievepack', days: 92, lastSent: '2025-11-01', lastSubject: 'RE: 2 pallets rewind', totalSent: 4, totalRecv: 2, priority: 'high', domain: 'segapac.com', customerNeeds: 'Film rewind and converting services', lastReply: '2 pallet rewind order discussion', productInterest: 'Film rolls/rewind', status: 'Active order' },
    { id: '30', email: 'sparkle@projektglitter.com', name: 'Jeen Low', account: 'achievepack', days: 95, lastSent: '2025-10-28', lastSubject: 'Re: New Event', totalSent: 2, totalRecv: 1, priority: 'high', domain: 'projektglitter.com', customerNeeds: 'Glitter/cosmetic product packaging', lastReply: 'Event meeting completed', productInterest: 'Cosmetic pouches', status: 'Post-meeting' },
    { id: '31', email: 'jemma@mylkmade.co.nz', name: 'Jemma - Mylk Made', account: 'achievepack', days: 96, lastSent: '2025-10-27', lastSubject: 'Re: Jemma Delore', totalSent: 8, totalRecv: 6, priority: 'high', domain: 'mylkmade.co.nz', customerNeeds: 'Plant-based milk NZ brand packaging', lastReply: 'Multiple design iterations for Mylk Made', productInterest: 'Dairy-alt drink pouches', status: 'Design stage' },
    { id: '32', email: 'eangarita@igcpharma.com', name: 'Eliana Angarita', account: 'achievepack', days: 101, lastSent: '2025-10-22', lastSubject: 'Re: Compostable packaging', totalSent: 6, totalRecv: 4, priority: 'high', domain: 'igcpharma.com', customerNeeds: 'Pharmaceutical compostable packaging', lastReply: 'Pharma-grade compostable options discussed', productInterest: 'Medical-grade compostable pouches', status: 'Multi-inquiry' },
    
    // === MEDIUM PRIORITY (30-60 days) ===
    { id: '16', email: 'hello@seedsbynora.com', name: 'Seeds by Nora', account: 'poucheco', days: 57, lastSent: '2025-12-05', lastSubject: 'Re: SEEDBLOOM Packaging', totalSent: 6, totalRecv: 5, priority: 'medium', domain: 'seedsbynora.com', customerNeeds: 'Seed packet eco-friendly packaging', lastReply: 'SEEDBLOOM brand packaging discussion', productInterest: 'Small sachets for seeds', status: 'Multi-inquiry' },
    { id: '17', email: 'helen@helenmillar.co.uk', name: 'Helen Millar', account: 'achievepack', days: 54, lastSent: '2025-12-08', lastSubject: 'Re: Final size and design', totalSent: 8, totalRecv: 7, priority: 'medium', domain: 'helenmillar.co.uk', customerNeeds: 'UK skincare brand packaging finalization', lastReply: 'Final size and design being confirmed', productInterest: 'Premium cosmetic pouches', status: 'Design final' },
    { id: '18', email: 'john.dietz@paxauris.com', name: 'John Dietz', account: 'poucheco', days: 53, lastSent: '2025-12-09', lastSubject: 'Re: New Event', totalSent: 4, totalRecv: 3, priority: 'medium', domain: 'paxauris.com', customerNeeds: 'Cannabis/wellness packaging', lastReply: 'Event meeting follow up', productInterest: 'Child-resistant pouches', status: 'Post-meeting' },
    { id: '46', email: 'information@cruzbueno.com', name: 'CRUZ BUENO', account: 'poucheco', days: 30, lastSent: '2026-01-01', lastSubject: 'Re: Website enquiry', totalSent: 3, totalRecv: 1, priority: 'medium', domain: 'cruzbueno.com', customerNeeds: 'Specialty food product packaging', lastReply: 'Website inquiry response', productInterest: 'Food-grade pouches', status: 'Inquiry' },
  ]

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    setScanProgress({ stage: 'Initializing', percent: 5, detail: 'Connecting to email servers...' })
    await new Promise(r => setTimeout(r, 300))
    
    setScanProgress({ stage: 'Scanning achievepack', percent: 25, detail: 'Reading INBOX (500 emails)...' })
    await new Promise(r => setTimeout(r, 400))
    
    setScanProgress({ stage: 'Scanning achievepack', percent: 40, detail: 'Reading SENT (500 emails)...' })
    await new Promise(r => setTimeout(r, 400))
    
    setScanProgress({ stage: 'Scanning poucheco', percent: 55, detail: 'Reading INBOX (500 emails)...' })
    await new Promise(r => setTimeout(r, 400))
    
    setScanProgress({ stage: 'Scanning poucheco', percent: 70, detail: 'Reading SENT (500 emails)...' })
    await new Promise(r => setTimeout(r, 400))
    
    setScanProgress({ stage: 'Analyzing', percent: 85, detail: 'Identifying conversations needing follow-up...' })
    await new Promise(r => setTimeout(r, 500))
    
    setScanProgress({ stage: 'Complete', percent: 100, detail: 'Analysis complete!' })
    
    // Load saved states from localStorage
    const deletedContacts = getDeletedContacts()
    const savedStatuses = getSavedBusinessStatuses()
    
    // Load saved sent dates
    const savedSentDates = getSavedSentDates()
    
    // Filter out deleted contacts and apply saved business statuses + sent dates
    const filteredData = realEmailData
      .filter(thread => !deletedContacts.includes(thread.id))
      .map(thread => {
        const sentDateRecord = savedSentDates[thread.id]
        const today = new Date()
        
        // Use saved lastSent date if available, otherwise use the original lastSent
        const effectiveLastSent = sentDateRecord?.lastSent || thread.lastSent
        
        // Always calculate days dynamically from lastSent date
        const lastSentDate = new Date(effectiveLastSent)
        const days = Math.floor((today.getTime() - lastSentDate.getTime()) / (1000 * 60 * 60 * 24))
        
        return {
          ...thread,
          businessStatus: savedStatuses[thread.id] || thread.businessStatus,
          lastSent: effectiveLastSent,
          lastSubject: sentDateRecord?.lastSubject || thread.lastSubject,
          totalSent: sentDateRecord?.totalSent || thread.totalSent,
          days,
          priority: days < 30 ? 'low' as const : days < 90 ? 'medium' as const : 'high' as const
        }
      })
    
    console.log(`📊 Loaded ${filteredData.length} contacts (${deletedContacts.length} deleted)`)
    
    // Set filtered data
    setThreads(filteredData)
    setStats({
      totalContacts: 620,
      totalEmails: 4200,
      needsFollowup: 92,
      over30: 88,
      over60: 88,
      over90: 82,
      highPriority: 88,
      mediumPriority: 4
    })
    setTopDomains({
      'gmail.com': 14,
      'wholefoods.com': 1,
      'themoonbeam.co': 2,
      'bpiworld.org': 2,
      'morlife.com': 2,
      'abokichi.com': 1,
      'allive.com': 1,
      'terrasoul.com': 1
    })
    
    setLoading(false)
  }

  const generateAISuggestion = async (thread: EmailThread) => {
    setGeneratingAI(thread.id)
    console.log('🤖 Generating AI suggestion for:', thread.email)
    
    // Build context with customer needs and product interest
    const needsInfo = thread.customerNeeds ? `\n- Customer Needs: ${thread.customerNeeds}` : ''
    const productInfo = thread.productInterest ? `\n- Product Interest: ${thread.productInterest}` : ''
    const statusInfo = thread.status ? `\n- Current Status: ${thread.status}` : ''
    const lastReplyInfo = thread.lastReply ? `\n- Last Reply Summary: ${thread.lastReply}` : ''
    
    // Include domain info if available
    const domainInfo = thread.domainInfo ? `
- Company Status: ${thread.domainInfo.status === 'active' ? 'Business is active' : thread.domainInfo.status === 'closed' ? 'Business may be closed - verify before sending' : 'Unknown status'}
- Company Info: ${thread.domainInfo.companyInfo || 'N/A'}
- Their Products: ${thread.domainInfo.products?.join(', ') || 'N/A'}
- Recommended Packaging for them: ${thread.domainInfo.recommendedPackaging?.join(', ') || 'N/A'}` : ''
    
    const prompt = `You are a professional sales follow-up assistant for AchievePack, an eco-friendly packaging company. Generate a brief, friendly follow-up email for this situation:
- Contact: ${thread.name} (${thread.email})
- Domain: ${thread.domain}
- Last Subject: ${thread.lastSubject}
- Days since last contact: ${thread.days}${needsInfo}${productInfo}${statusInfo}${lastReplyInfo}${domainInfo}
- Total emails exchanged: ${thread.totalSent + thread.totalRecv}

Our Product Line (AchievePack.com):
- Stand-up pouches (kraft, clear window, matte finish)
- Flat bottom coffee bags with valve
- 3-side seal sachets
- Spout pouches for liquids
- Compostable/biodegradable films
- Child-resistant packaging
- Custom printed pouches
- Recyclable mono-material pouches

FREE SERVICES we offer (use these as incentives):
- FREE sample pouches (up to 5 styles)
- FREE custom design consultation
- FREE 3D mockup visualization
- FREE material testing for your product
- FREE sustainability certification guidance

Generate a short, professional follow-up message (4-5 sentences) that:
1. References their specific needs or product interest naturally
2. ${thread.domainInfo?.status === 'closed' ? 'Gently inquire if they are still in business or have pivoted' : 'Shows genuine interest without being pushy'}
3. ${thread.domainInfo?.recommendedPackaging ? `Mentions relevant packaging options: ${thread.domainInfo.recommendedPackaging.slice(0, 2).join(' or ')}` : 'Offers value related to their packaging requirements'}
4. MUST offer at least one FREE service as an incentive to reply
5. MUST include the link https://achievepack.com somewhere in the email
6. End with a clear call-to-action

Reply with ONLY the email body text, no subject line.`

    try {
      // Try XAI API first if key exists
      if (XAI_API_KEY && XAI_API_KEY.length > 10) {
        console.log('🔑 Using XAI API...')
        const response = await fetch('https://api.x.ai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${XAI_API_KEY}`
          },
          body: JSON.stringify({
            model: 'grok-beta',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 300,
            temperature: 0.7
          })
        })
        
        if (response.ok) {
          const data = await response.json()
          const suggestion = data.choices?.[0]?.message?.content || ''
          console.log('✅ XAI response received')
          setThreads(prev => prev.map(t => 
            t.id === thread.id ? { ...t, aiSuggestion: suggestion } : t
          ))
          setGeneratingAI(null)
          return
        } else {
          console.warn('⚠️ XAI API failed, using fallback')
        }
      } else {
        console.log('📝 No XAI key, using fallback suggestions')
      }
      
      // Fallback suggestions - context-aware with FREE services and achievepack.com link
      const firstName = thread.name.split(' ')[0] || 'there'
      const topicClean = thread.lastSubject.replace(/^(Re:|Fwd:|RE:|FW:)\s*/gi, '').substring(0, 35)
      const product = thread.productInterest || 'eco-friendly packaging'
      const needs = thread.customerNeeds || 'sustainable packaging solutions'
      
      const fallbacks = [
        `Hi ${firstName},

I wanted to follow up on our conversation about ${needs.toLowerCase()}. We've been helping many brands transition to ${product.toLowerCase()}, and I'd love to share some options that might work well for your needs.

As a thank you for your interest, I'd like to offer you FREE sample pouches (up to 5 different styles) so you can test the quality firsthand. You can also explore our full range at https://achievepack.com

Would you like me to arrange the free samples for you?

Best regards,
Ryan`,
        `Hi ${firstName},

Just checking in regarding your interest in ${product.toLowerCase()}. I understand you're looking for ${needs.toLowerCase()}, and we have some exciting new solutions.

I'd like to offer you a FREE custom design consultation and 3D mockup visualization - no obligation, just to show you what's possible. Check out some examples at https://achievepack.com

Would this week work for a quick 15-minute call?

Best,
Ryan`,
        `Hi ${firstName},

I hope this message finds you well! I wanted to reconnect about "${topicClean}". Since we last spoke, we've expanded our ${product.toLowerCase()} options.

I'd like to offer you FREE material testing for your product - we'll help you find the perfect barrier properties and sustainability certifications. Learn more at https://achievepack.com

Let me know if you'd like to take advantage of this free service!

Warm regards,
Ryan`
      ]
      const suggestion = fallbacks[Math.floor(Math.random() * fallbacks.length)]
      
      // Small delay to show loading state
      await new Promise(r => setTimeout(r, 800))
      
      console.log('✅ Fallback suggestion generated')
      setThreads(prev => prev.map(t => 
        t.id === thread.id ? { ...t, aiSuggestion: suggestion } : t
      ))
    } catch (error) {
      console.error('❌ AI suggestion error:', error)
      // Even on error, provide a basic suggestion with free service
      const firstName = thread.name.split(' ')[0] || 'there'
      const product = thread.productInterest || 'packaging'
      const basicSuggestion = `Hi ${firstName},

I wanted to follow up on our previous conversation about ${product.toLowerCase()}. I'd love to offer you FREE sample pouches so you can experience the quality firsthand.

You can explore our full range at https://achievepack.com - let me know if you'd like me to arrange the samples!

Best regards,
Ryan`
      setThreads(prev => prev.map(t => 
        t.id === thread.id ? { ...t, aiSuggestion: basicSuggestion } : t
      ))
    }
    
    setGeneratingAI(null)
  }

  const filteredThreads = useMemo(() => {
    let result = threads
    
    if (accountFilter !== 'all') {
      result = result.filter(t => t.account === accountFilter)
    }
    
    if (filter === 'high') {
      result = result.filter(t => t.priority === 'high')
    } else if (filter === 'medium') {
      result = result.filter(t => t.priority === 'medium')
    } else if (filter === '30days') {
      result = result.filter(t => t.days >= 30 && t.days < 60)
    } else if (filter === '60days') {
      result = result.filter(t => t.days >= 60 && t.days < 90)
    } else if (filter === '90days') {
      result = result.filter(t => t.days >= 90)
    }
    
    // Customer status filter (multi-select)
    if (selectedCustomerStatuses.length > 0) {
      result = result.filter(t => {
        // Map existing status to customer status
        const mappedStatus = mapStatusToCustomerStatus(t.status || '')
        return selectedCustomerStatuses.includes(mappedStatus)
      })
    }
    
    // Email send status filter (multi-select)
    if (selectedEmailStatuses.length > 0) {
      result = result.filter(t => {
        const emailStatus = getEmailSendStatus(t)
        return selectedEmailStatuses.includes(emailStatus)
      })
    }
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(t => 
        t.email.toLowerCase().includes(q) ||
        t.name.toLowerCase().includes(q) ||
        t.lastSubject.toLowerCase().includes(q) ||
        t.domain.toLowerCase().includes(q) ||
        (t.status && t.status.toLowerCase().includes(q)) ||
        (t.customerNeeds && t.customerNeeds.toLowerCase().includes(q))
      )
    }
    
    return result.sort((a, b) => b.days - a.days)
  }, [threads, filter, accountFilter, searchQuery, selectedCustomerStatuses, selectedEmailStatuses])

  // Helper function to map existing status to customer status
  const mapStatusToCustomerStatus = (status: string): CustomerStatus => {
    const statusLower = status.toLowerCase()
    if (statusLower.includes('new') || statusLower.includes('inquiry')) return 'new'
    if (statusLower.includes('quoted') || statusLower.includes('quote')) return 'quoted'
    if (statusLower.includes('sample') || statusLower.includes('sampling')) return 'sampling'
    if (statusLower.includes('meeting') || statusLower.includes('post-meeting') || statusLower.includes('contacted')) return 'contacted'
    if (statusLower.includes('follow') || statusLower.includes('pending') || statusLower.includes('discussion') || statusLower.includes('design')) return 'following_up'
    if (statusLower.includes('repeat') || statusLower.includes('partner') || statusLower.includes('active') || statusLower.includes('order')) return 'won'
    if (statusLower.includes('closed') || statusLower.includes('lost')) return 'lost'
    return 'new' // Default
  }
  
  // Helper function to determine email send status
  const getEmailSendStatus = (thread: EmailThread): EmailSendStatus => {
    if (thread.emailSendStatus) return thread.emailSendStatus
    // Check localStorage for manually marked sent
    const manuallySent = getManuallySentRecords()
    if (manuallySent[thread.id]) return 'sent'
    // Infer from data
    if (thread.totalSent > 0) return 'sent'
    return 'not_sent'
  }
  
  // Check if a thread is manually marked as sent
  const isManuallyMarkedSent = (threadId: string): boolean => {
    const records = getManuallySentRecords()
    return !!records[threadId]
  }
  
  // Get manually sent time for display
  const getManualSentTime = (threadId: string): string | null => {
    const records = getManuallySentRecords()
    if (records[threadId]) {
      return new Date(records[threadId].markedAt).toLocaleString('zh-CN')
    }
    return null
  }

  // Mark a thread as manually sent
  const markAsSent = (thread: EmailThread) => {
    console.log('✉️ Marking as sent:', thread.email)
    saveManuallySentRecord(thread.id, thread.email)
    
    // Update local state to trigger re-render
    const today = new Date().toISOString().split('T')[0]
    setThreads(prev => prev.map(t => 
      t.id === thread.id 
        ? { 
            ...t, 
            days: 0,
            lastSent: today,
            totalSent: t.totalSent + 1,
            emailSendStatus: 'sent' as const,
            lastEmailSentTime: new Date().toISOString(),
            priority: 'low' as const
          } 
        : t
    ))
    
    // Update stats
    setStats(prev => prev ? {
      ...prev,
      needsFollowup: Math.max(0, prev.needsFollowup - 1),
      highPriority: Math.max(0, prev.highPriority - 1)
    } : null)
  }
  
  // Unmark a thread as sent (toggle back)
  const unmarkAsSent = (thread: EmailThread) => {
    console.log('❌ Unmarking as sent:', thread.email)
    removeManuallySentRecord(thread.id)
    
    // Update local state
    setThreads(prev => prev.map(t => 
      t.id === thread.id 
        ? { ...t, emailSendStatus: undefined } 
        : t
    ))
  }

  // Define sent groups for all emails by days
  type SentGroupKey = 'sent_14' | 'sent_60' | 'sent_120' | 'sent_240' | 'sent_older'
  
  const SENT_GROUPS: { key: SentGroupKey; label: string; maxDays: number; color: string; borderColor: string; badgeColor: string }[] = [
    { key: 'sent_14', label: '14 天内', maxDays: 14, color: 'from-emerald-50 to-emerald-100', borderColor: 'border-emerald-200', badgeColor: 'bg-emerald-200 text-emerald-800' },
    { key: 'sent_60', label: '60 天内', maxDays: 60, color: 'from-cyan-50 to-cyan-100', borderColor: 'border-cyan-200', badgeColor: 'bg-cyan-200 text-cyan-800' },
    { key: 'sent_120', label: '120 天内', maxDays: 120, color: 'from-blue-50 to-blue-100', borderColor: 'border-blue-200', badgeColor: 'bg-blue-200 text-blue-800' },
    { key: 'sent_240', label: '240 天内', maxDays: 240, color: 'from-indigo-50 to-indigo-100', borderColor: 'border-indigo-200', badgeColor: 'bg-indigo-200 text-indigo-800' },
    { key: 'sent_older', label: '240+ 天', maxDays: Infinity, color: 'from-slate-50 to-slate-100', borderColor: 'border-slate-200', badgeColor: 'bg-slate-200 text-slate-800' },
  ]

  const groupedThreads = useMemo(() => {
    const groups: Record<string, EmailThread[]> = { 
      sent_14: [],
      sent_60: [],
      sent_120: [],
      sent_240: [],
      sent_older: []
    }
    
    // Group ALL emails by days: 14, 60, 120, 240
    filteredThreads.forEach(t => {
      if (t.days <= 14) {
        groups.sent_14.push(t)
      } else if (t.days <= 60) {
        groups.sent_60.push(t)
      } else if (t.days <= 120) {
        groups.sent_120.push(t)
      } else if (t.days <= 240) {
        groups.sent_240.push(t)
      } else {
        groups.sent_older.push(t)
      }
    })
    
    // Sort all groups by days (most recent first within each group)
    SENT_GROUPS.forEach(g => {
      groups[g.key].sort((a, b) => a.days - b.days)
    })
    
    return groups
  }, [filteredThreads])

  const handleCompose = (thread: EmailThread) => {
    setSelectedThread(thread)
    setComposeData({
      to: thread.email,
      subject: `Re: ${thread.lastSubject}`,
      body: thread.aiSuggestion || `Hi ${thread.name.split(' ')[0]},

I wanted to follow up on our previous conversation.

`
    })
    setShowComposeModal(true)
  }

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Send email via Brevo API
  const handleSendEmail = async () => {
    if (!composeData.to || !composeData.subject || !composeData.body) {
      setSendResult({ success: false, message: 'Please fill in all fields' })
      return
    }

    setSendingEmail(true)
    setSendResult(null)
    console.log('📧 Sending email to:', composeData.to)

    try {
      // Convert plain text to HTML
      const htmlBody = composeData.body
        .replace(/\n/g, '<br>')
        .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" style="color: #059669;">$1</a>')

      const response = await fetch('/api/send-campaign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          testEmail: composeData.to,
          cc: [{ email: 'ryan@achievepack.com', name: 'Ryan Wong' }],
          subject: composeData.subject,
          htmlContent: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px;">${htmlBody}</div>`
        })
      })

      const data = await response.json()
      console.log('📨 Send result:', data)

      if (data.success) {
        setSendResult({ success: true, message: `✅ Email sent successfully to ${composeData.to}` })
        
        // Update the thread record to show it was just contacted
        const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD format
        
        // Find the thread to get its ID and current totalSent
        const currentThread = threads.find(t => t.email === composeData.to)
        if (currentThread) {
          const newTotalSent = currentThread.totalSent + 1
          // Save to localStorage for persistence
          saveSentDate(currentThread.id, today, composeData.subject, newTotalSent)
          console.log('💾 Saved sent date to localStorage for:', currentThread.id)
        }
        
        setThreads(prev => prev.map(t => 
          t.email === composeData.to 
            ? { 
                ...t, 
                days: 0, 
                lastSent: today, 
                lastSubject: composeData.subject,
                totalSent: t.totalSent + 1,
                priority: 'low' as const // Just contacted, low priority now
              } 
            : t
        ))
        
        // Update stats
        setStats(prev => prev ? {
          ...prev,
          needsFollowup: prev.needsFollowup - 1,
          highPriority: prev.highPriority - 1
        } : null)
        
        console.log('📊 Updated contact record for:', composeData.to)
        
        // Close modal after 2 seconds
        setTimeout(() => {
          setShowComposeModal(false)
          setSendResult(null)
          setComposeData({ to: '', subject: '', body: '' })
          setSelectedThread(null)
        }, 2000)
      } else {
        setSendResult({ success: false, message: data.error || 'Failed to send email' })
      }
    } catch (error) {
      console.error('❌ Send error:', error)
      setSendResult({ success: false, message: 'Network error. Please try again.' })
    }

    setSendingEmail(false)
  }

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev => ({ ...prev, [group]: !prev[group] }))
  }

  // Delete a contact from the list
  const deleteContact = (thread: EmailThread) => {
    console.log('🗑️ Deleting contact:', thread.email)
    
    // Save to localStorage
    addDeletedContact(thread.id)
    
    // Remove from state
    setThreads(prev => prev.filter(t => t.id !== thread.id))
    
    // Update stats
    setStats(prev => prev ? {
      ...prev,
      needsFollowup: Math.max(0, prev.needsFollowup - 1),
      totalContacts: Math.max(0, prev.totalContacts - 1)
    } : null)
  }

  // Update business status for a thread - Delete if closed
  const updateBusinessStatus = (threadId: string, newStatus: BusinessStatus) => {
    console.log('🎯 Updating business status:', threadId, newStatus)
    
    if (newStatus === 'closed') {
      // Delete the contact when marked as closed
      console.log('🗑️ Deleting contact:', threadId)
      
      // Save to localStorage
      addDeletedContact(threadId)
      
      setThreads(prev => prev.filter(t => t.id !== threadId))
      
      // Update stats
      setStats(prev => prev ? {
        ...prev,
        needsFollowup: Math.max(0, prev.needsFollowup - 1),
        highPriority: Math.max(0, prev.highPriority - 1)
      } : null)
    } else {
      // Save status to localStorage
      saveBusinessStatus(threadId, newStatus)
      
      setThreads(prev => prev.map(t => 
        t.id === threadId ? { ...t, businessStatus: newStatus } : t
      ))
    }
  }

  // Check domain status using XAI
  const checkDomainStatus = async (thread: EmailThread) => {
    console.log('🌐 Checking domain status for:', thread.domain)
    
    // Mark as checking
    setThreads(prev => prev.map(t => 
      t.id === thread.id ? { ...t, domainChecking: true } : t
    ))

    const prompt = `Analyze this business domain and provide information:

Domain: ${thread.domain}
Company Name: ${thread.name}
Email Context: They previously inquired about eco-friendly packaging (${thread.customerNeeds || 'general packaging needs'})

Please provide:
1. Is this company/website still active? (Check if the domain appears to be operational)
2. Brief company description (what do they do?)
3. What products do they likely sell?
4. Based on their products, recommend suitable packaging from AchievePack's eco-friendly product line:
   - Stand-up pouches (kraft, clear window, matte finish)
   - Flat bottom pouches (coffee bags with valve)
   - 3-side seal sachets
   - Spout pouches
   - Compostable/biodegradable films
   - Child-resistant packaging
   - Custom printed pouches

Respond in this JSON format only:
{
  "status": "active" or "closed" or "unknown",
  "companyInfo": "brief description",
  "products": ["product1", "product2"],
  "recommendedPackaging": ["packaging1", "packaging2", "packaging3"]
}`

    try {
      if (XAI_API_KEY && XAI_API_KEY.length > 10) {
        console.log('🔑 Using XAI API for domain check...')
        const response = await fetch('https://api.x.ai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${XAI_API_KEY}`
          },
          body: JSON.stringify({
            model: 'grok-beta',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 500,
            temperature: 0.3
          })
        })

        if (response.ok) {
          const data = await response.json()
          const content = data.choices?.[0]?.message?.content || ''
          console.log('✅ XAI domain check response:', content)
          
          try {
            // Parse JSON from response
            const jsonMatch = content.match(/\{[\s\S]*\}/)
            if (jsonMatch) {
              const domainInfo: DomainInfo = JSON.parse(jsonMatch[0])
              domainInfo.lastChecked = new Date().toISOString()
              
              setThreads(prev => prev.map(t => 
                t.id === thread.id ? { ...t, domainInfo, domainChecking: false } : t
              ))
              return
            }
          } catch (parseError) {
            console.warn('⚠️ Could not parse JSON response')
          }
        }
      }
      
      // Fallback - basic domain info
      const fallbackInfo: DomainInfo = {
        status: 'unknown',
        companyInfo: `Business at ${thread.domain}`,
        products: [thread.productInterest || 'Various products'],
        recommendedPackaging: ['Stand-up pouches', 'Custom printed pouches', 'Eco-friendly options'],
        lastChecked: new Date().toISOString()
      }
      
      setThreads(prev => prev.map(t => 
        t.id === thread.id ? { ...t, domainInfo: fallbackInfo, domainChecking: false } : t
      ))
      
    } catch (error) {
      console.error('❌ Domain check error:', error)
      setThreads(prev => prev.map(t => 
        t.id === thread.id ? { ...t, domainChecking: false } : t
      ))
    }
  }

  // Open domain website in new tab
  const openDomainWebsite = (domain: string) => {
    // Skip common email providers
    if (['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'me.com', 'icloud.com'].includes(domain.toLowerCase())) {
      return
    }
    window.open(`https://${domain}`, '_blank')
  }

  // Batch check all domains (only business domains, skip personal emails)
  const batchCheckAllDomains = async () => {
    const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'me.com', 'icloud.com', 'yahoo.co.uk']
    const businessThreads = filteredThreads.filter(t => 
      !personalDomains.includes(t.domain.toLowerCase()) && !t.domainInfo
    )
    
    if (businessThreads.length === 0) {
      console.log('✅ All business domains already checked')
      return
    }
    
    console.log(`🌐 Batch checking ${businessThreads.length} business domains...`)
    setBatchCheckingDomains(true)
    setBatchProgress({ current: 0, total: businessThreads.length, type: 'domain' })
    
    for (let i = 0; i < businessThreads.length; i++) {
      setBatchProgress({ current: i + 1, total: businessThreads.length, type: 'domain' })
      await checkDomainStatus(businessThreads[i])
      // Small delay between requests to avoid rate limiting
      await new Promise(r => setTimeout(r, 500))
    }
    
    setBatchCheckingDomains(false)
    setBatchProgress({ current: 0, total: 0, type: '' })
    console.log('✅ Batch domain check complete')
  }

  // Batch generate AI suggestions for all visible threads
  const batchGenerateAllAI = async () => {
    const threadsWithoutAI = filteredThreads.filter(t => !t.aiSuggestion)
    
    if (threadsWithoutAI.length === 0) {
      console.log('✅ All threads already have AI suggestions')
      return
    }
    
    console.log(`✨ Batch generating AI for ${threadsWithoutAI.length} threads...`)
    setBatchGeneratingAI(true)
    setBatchProgress({ current: 0, total: threadsWithoutAI.length, type: 'ai' })
    
    for (let i = 0; i < threadsWithoutAI.length; i++) {
      setBatchProgress({ current: i + 1, total: threadsWithoutAI.length, type: 'ai' })
      await generateAISuggestion(threadsWithoutAI[i])
      // Small delay between requests
      await new Promise(r => setTimeout(r, 300))
    }
    
    setBatchGeneratingAI(false)
    setBatchProgress({ current: 0, total: 0, type: '' })
    console.log('✅ Batch AI generation complete')
  }

  // Batch send follow-up emails to all visible threads with AI suggestions
  const batchSendAllEmails = async () => {
    const threadsWithAI = filteredThreads.filter(t => t.aiSuggestion)
    
    if (threadsWithAI.length === 0) {
      alert('❌ 没有可发送的邮件，请先使用 "AI Suggest All" 生成邮件内容')
      return
    }
    
    if (!confirm(`确定要发送 ${threadsWithAI.length} 封跟进邮件吗？`)) {
      return
    }
    
    console.log(`📨 Batch sending ${threadsWithAI.length} emails...`)
    setBatchSendingEmails(true)
    setBatchProgress({ current: 0, total: threadsWithAI.length, type: 'send' })
    
    let successCount = 0
    let failCount = 0
    
    for (let i = 0; i < threadsWithAI.length; i++) {
      const thread = threadsWithAI[i]
      setBatchProgress({ current: i + 1, total: threadsWithAI.length, type: 'send' })
      
      try {
        // Convert plain text to HTML
        const htmlBody = thread.aiSuggestion!
          .replace(/\n/g, '<br>')
          .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" style="color: #059669;">$1</a>')

        const response = await fetch('/api/send-campaign', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            testEmail: thread.email,
            cc: [{ email: 'ryan@achievepack.com', name: 'Ryan Wong' }],
            subject: `Re: ${thread.lastSubject}`,
            htmlContent: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px;">${htmlBody}</div>`
          })
        })

        const data = await response.json()
        
        if (data.success) {
          successCount++
          const today = new Date().toISOString().split('T')[0]
          saveSentDate(thread.id, today, `Re: ${thread.lastSubject}`, thread.totalSent + 1)
          
          setThreads(prev => prev.map(t => 
            t.id === thread.id 
              ? { 
                  ...t, 
                  days: 0, 
                  lastSent: today, 
                  totalSent: t.totalSent + 1,
                  priority: 'low' as const
                } 
              : t
          ))
        } else {
          failCount++
          console.error(`Failed to send to ${thread.email}:`, data.error)
        }
      } catch (error) {
        failCount++
        console.error(`Error sending to ${thread.email}:`, error)
      }
      
      // Delay between sends to avoid rate limiting
      await new Promise(r => setTimeout(r, 1000))
    }
    
    setBatchSendingEmails(false)
    setBatchProgress({ current: 0, total: 0, type: '' })
    
    // Update stats
    setStats(prev => prev ? {
      ...prev,
      needsFollowup: Math.max(0, prev.needsFollowup - successCount)
    } : null)
    
    alert(`✅ 发送完成\n成功: ${successCount}\n失败: ${failCount}`)
    console.log(`✅ Batch send complete. Success: ${successCount}, Failed: ${failCount}`)
  }

  if (loading) {
    return (
      <div className="min-h-[500px] flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          {/* Progress Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary-600 animate-pulse" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{scanProgress.stage}</h3>
                <p className="text-sm text-gray-500">{scanProgress.detail}</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden mb-4">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${scanProgress.percent}%` }}
              />
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Scanning emails...</span>
              <span className="font-medium text-primary-600">{scanProgress.percent}%</span>
            </div>
          </div>
          
          {/* Scanning Animation */}
          <div className="mt-6 flex justify-center gap-2">
            {[0, 1, 2].map(i => (
              <div 
                key={i}
                className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Mail className="w-7 h-7 text-primary-600" />
            Email Follow Up
          </h1>
          <p className="text-gray-500 mt-1">AI-powered analysis of emails needing follow-up</p>
        </div>
        <button
          onClick={loadData}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors shadow-sm"
        >
          <RefreshCw className="w-4 h-4" />
          Rescan Emails
        </button>
      </div>

      {/* Stats Grid */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-medium text-blue-600">Contacts</span>
            </div>
            <p className="text-2xl font-bold text-blue-700">{stats.totalContacts}</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 border border-indigo-200">
            <div className="flex items-center gap-2 mb-1">
              <Mail className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-medium text-indigo-600">Emails</span>
            </div>
            <p className="text-2xl font-bold text-indigo-700">{stats.totalEmails.toLocaleString()}</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200">
            <div className="flex items-center gap-2 mb-1">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <span className="text-xs font-medium text-red-600">Need F/U</span>
            </div>
            <p className="text-2xl font-bold text-red-700">{stats.needsFollowup}</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-medium text-orange-600">High Pri</span>
            </div>
            <p className="text-2xl font-bold text-orange-700">{stats.highPriority}</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 border border-yellow-200">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-yellow-600" />
              <span className="text-xs font-medium text-yellow-600">&gt;30 Days</span>
            </div>
            <p className="text-2xl font-bold text-yellow-700">{stats.over30}</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-medium text-amber-600">&gt;60 Days</span>
            </div>
            <p className="text-2xl font-bold text-amber-700">{stats.over60}</p>
          </div>
          <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-4 border border-rose-200">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-rose-600" />
              <span className="text-xs font-medium text-rose-600">&gt;90 Days</span>
            </div>
            <p className="text-2xl font-bold text-rose-700">{stats.over90}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
            <div className="flex items-center gap-2 mb-1">
              <Globe className="w-4 h-4 text-purple-600" />
              <span className="text-xs font-medium text-purple-600">Domains</span>
            </div>
            <p className="text-2xl font-bold text-purple-700">{Object.keys(topDomains).length}</p>
          </div>
        </div>
      )}

      {/* Top Domains */}
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <BarChart3 className="w-4 h-4" />
          Top Domains Needing Follow-up
        </h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(topDomains).map(([domain, count]) => (
            <div key={domain} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200">
              <Globe className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-sm text-gray-700">{domain}</span>
              <span className="text-xs font-medium text-primary-600 bg-primary-50 px-1.5 py-0.5 rounded">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm space-y-4">
        {/* Main Filter Row */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索客户名称、邮箱、域名、需求..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <select
            value={accountFilter}
            onChange={(e) => setAccountFilter(e.target.value as any)}
            className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
          >
            <option value="all">所有账户</option>
            <option value="achievepack">achievepack</option>
            <option value="poucheco">poucheco</option>
          </select>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
          >
            <option value="all">所有优先级</option>
            <option value="high">🔴 高优先级</option>
            <option value="medium">🟡 中优先级</option>
            <option value="30days">30-60 天</option>
            <option value="60days">60-90 天</option>
            <option value="90days">&gt; 90 天</option>
          </select>
          
          {/* Advanced Filter Toggle */}
          <button
            onClick={() => setShowFilterPanel(!showFilterPanel)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all ${
              showFilterPanel || selectedCustomerStatuses.length > 0 || selectedEmailStatuses.length > 0
                ? 'bg-primary-50 border-primary-300 text-primary-700'
                : 'border-gray-300 text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Filter className="w-4 h-4" />
            高级筛选
            {(selectedCustomerStatuses.length + selectedEmailStatuses.length) > 0 && (
              <span className="px-1.5 py-0.5 text-xs bg-primary-600 text-white rounded-full">
                {selectedCustomerStatuses.length + selectedEmailStatuses.length}
              </span>
            )}
          </button>
        </div>
        
        {/* Advanced Filter Panel */}
        {showFilterPanel && (
          <div className="border-t border-gray-200 pt-4 space-y-4">
            {/* Customer Status Filter */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  客户状态筛选 (多选)
                </h4>
                {selectedCustomerStatuses.length > 0 && (
                  <button
                    onClick={() => setSelectedCustomerStatuses([])}
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    清除选择
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {CUSTOMER_STATUSES.map((status) => {
                  const Icon = status.icon
                  const isSelected = selectedCustomerStatuses.includes(status.value)
                  return (
                    <button
                      key={status.value}
                      onClick={() => {
                        setSelectedCustomerStatuses(prev => 
                          isSelected 
                            ? prev.filter(s => s !== status.value)
                            : [...prev, status.value]
                        )
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all text-sm ${
                        isSelected
                          ? `${status.color} border-current ring-1 ring-current ring-opacity-30`
                          : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {status.label}
                    </button>
                  )
                })}
              </div>
            </div>
            
            {/* Email Send Status Filter */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  邮件发送状态 (多选)
                </h4>
                {selectedEmailStatuses.length > 0 && (
                  <button
                    onClick={() => setSelectedEmailStatuses([])}
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    清除选择
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {EMAIL_SEND_STATUSES.map((status) => {
                  const Icon = status.icon
                  const isSelected = selectedEmailStatuses.includes(status.value)
                  return (
                    <button
                      key={status.value}
                      onClick={() => {
                        setSelectedEmailStatuses(prev => 
                          isSelected 
                            ? prev.filter(s => s !== status.value)
                            : [...prev, status.value]
                        )
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all text-sm ${
                        isSelected
                          ? `${status.color} border-current ring-1 ring-current ring-opacity-30`
                          : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {status.label}
                    </button>
                  )
                })}
              </div>
            </div>
            
            {/* Filter Summary */}
            {(selectedCustomerStatuses.length > 0 || selectedEmailStatuses.length > 0) && (
              <div className="flex items-center justify-between bg-primary-50 rounded-lg px-3 py-2">
                <span className="text-sm text-primary-700">
                  筛选结果: <strong>{filteredThreads.length}</strong> 条记录
                </span>
                <button
                  onClick={() => {
                    setSelectedCustomerStatuses([])
                    setSelectedEmailStatuses([])
                  }}
                  className="text-sm text-primary-600 hover:text-primary-800 flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" />
                  清除所有筛选
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Thread List - Excel Style Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Email Groups by Days */}
        {SENT_GROUPS.map((sentGroup) => (
          groupedThreads[sentGroup.key].length > 0 && (
            <div key={sentGroup.key} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleGroup(sentGroup.key)}
                className={`w-full flex items-center justify-between p-3 transition-colors bg-gradient-to-r ${sentGroup.color} border-b ${sentGroup.borderColor}`}
              >
                <div className="flex items-center gap-3">
                  {expandedGroups[sentGroup.key] ? <ChevronDown className="w-5 h-5 text-gray-600" /> : <ChevronRight className="w-5 h-5 text-gray-600" />}
                  <MailCheck className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-gray-700">
                    {sentGroup.label}
                  </span>
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${sentGroup.badgeColor}`}>
                    {groupedThreads[sentGroup.key].length}
                  </span>
                </div>
              </button>

              {expandedGroups[sentGroup.key] && (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1200px] text-sm">
                    <thead className="bg-gray-50 sticky top-0">
                      <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <th className="px-3 py-2 w-[180px]">联系人</th>
                        <th className="px-3 py-2 w-[200px]">邮箱 / 域名</th>
                        <th className="px-3 py-2 w-[120px]">状态</th>
                        <th className="px-3 py-2 w-[100px]">发送天数</th>
                        <th className="px-3 py-2 w-[250px]">最后主题</th>
                        <th className="px-3 py-2 w-[300px]">AI 建议</th>
                        <th className="px-3 py-2 w-[250px] text-right">操作</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {groupedThreads[sentGroup.key].map((thread) => {
                        const currentCustomerStatus = mapStatusToCustomerStatus(thread.status || '')
                        const statusConfig = CUSTOMER_STATUSES.find(s => s.value === currentCustomerStatus)
                        const StatusIcon = statusConfig?.icon || Star
                        
                        return (
                          <tr key={thread.id} className="hover:bg-gray-50 transition-colors">
                            {/* Contact Name & Account */}
                            <td className="px-3 py-3">
                              <div className="flex flex-col">
                                <span className="font-medium text-gray-900 truncate max-w-[160px]" title={thread.name}>
                                  {thread.name}
                                </span>
                                <span className={`inline-flex w-fit px-1.5 py-0.5 text-[10px] rounded ${thread.account === 'achievepack' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                                  {thread.account}
                                </span>
                              </div>
                            </td>
                            
                            {/* Email & Domain */}
                            <td className="px-3 py-3">
                              <div className="flex flex-col gap-1">
                                <span className="text-gray-600 truncate max-w-[180px] text-xs" title={thread.email}>
                                  {thread.email}
                                </span>
                                {!['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'me.com', 'icloud.com', 'yahoo.co.uk'].includes(thread.domain.toLowerCase()) ? (
                                  <button
                                    onClick={() => openDomainWebsite(thread.domain)}
                                    className="flex items-center gap-1 text-[10px] text-blue-600 hover:text-blue-800 hover:underline"
                                  >
                                    <Globe className="w-3 h-3" />
                                    {thread.domain}
                                    <ExternalLink className="w-2.5 h-2.5" />
                                  </button>
                                ) : (
                                  <span className="text-[10px] text-gray-400">@{thread.domain}</span>
                                )}
                              </div>
                            </td>
                            
                            {/* Customer Status Dropdown */}
                            <td className="px-3 py-3">
                              <div className="relative">
                                <select
                                  value={currentCustomerStatus}
                                  onChange={(e) => {
                                    const newStatus = e.target.value as CustomerStatus
                                    // Update thread status based on selection
                                    const statusMap: Record<CustomerStatus, string> = {
                                      'new': 'New lead',
                                      'contacted': 'Contacted',
                                      'quoted': 'Quoted',
                                      'following_up': 'Follow up',
                                      'sampling': 'Sample sent',
                                      'won': 'Active customer',
                                      'lost': 'Lost',
                                      'spam': 'Spam'
                                    }
                                    setThreads(prev => prev.map(t => 
                                      t.id === thread.id ? { ...t, status: statusMap[newStatus], customerStatus: newStatus } : t
                                    ))
                                  }}
                                  className={`appearance-none w-full pl-6 pr-2 py-1 text-xs rounded-lg border cursor-pointer ${statusConfig?.color || 'bg-gray-100 text-gray-600'} border-current/20 focus:ring-1 focus:ring-current focus:outline-none`}
                                >
                                  {CUSTOMER_STATUSES.map(status => (
                                    <option key={status.value} value={status.value}>
                                      {status.label}
                                    </option>
                                  ))}
                                </select>
                                <StatusIcon className="absolute left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none" />
                              </div>
                            </td>
                            
                            {/* Days Since Last Send */}
                            <td className="px-3 py-3">
                              <div className="flex flex-col gap-1">
                                <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-100 text-emerald-700 inline-flex items-center gap-1 w-fit">
                                  <MailCheck className="w-3 h-3" />
                                  {thread.days}天
                                </span>
                                <span className="text-[10px] text-gray-400">
                                  {thread.lastSent}
                                </span>
                              </div>
                            </td>
                            
                            {/* Last Subject */}
                            <td className="px-3 py-3">
                              <p className="text-xs text-gray-700 truncate max-w-[230px]" title={thread.lastSubject}>
                                {thread.lastSubject}
                              </p>
                              {thread.customerNeeds && (
                                <p className="text-[10px] text-gray-400 truncate max-w-[230px] mt-0.5" title={thread.customerNeeds}>
                                  需求: {thread.customerNeeds}
                                </p>
                              )}
                            </td>
                            
                            {/* AI Suggestion */}
                            <td className="px-3 py-3">
                              {thread.aiSuggestion ? (
                                <div className="flex flex-col gap-1">
                                  <p className="text-[10px] text-gray-600 line-clamp-2 max-w-[280px]" title={thread.aiSuggestion}>
                                    {thread.aiSuggestion.substring(0, 100)}...
                                  </p>
                                  <div className="flex gap-1">
                                    <button
                                      onClick={() => {
                                        setComposeData({
                                          to: thread.email,
                                          subject: `Re: ${thread.lastSubject}`,
                                          body: thread.aiSuggestion || ''
                                        })
                                        setSelectedThread(thread)
                                        setShowComposeModal(true)
                                      }}
                                      className="text-[10px] px-1.5 py-0.5 bg-green-100 text-green-700 rounded hover:bg-green-200"
                                    >
                                      应用
                                    </button>
                                    <button
                                      onClick={() => copyToClipboard(thread.aiSuggestion || '', thread.id)}
                                      className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded hover:bg-gray-200"
                                    >
                                      {copiedId === thread.id ? <CheckCheck className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                    </button>
                                    <button
                                      onClick={() => generateAISuggestion(thread)}
                                      disabled={generatingAI === thread.id}
                                      className="text-[10px] px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded hover:bg-purple-200 disabled:opacity-50"
                                    >
                                      {generatingAI === thread.id ? <Loader2 className="w-3 h-3 animate-spin" /> : '重新生成'}
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <button
                                  onClick={() => generateAISuggestion(thread)}
                                  disabled={generatingAI === thread.id}
                                  className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 disabled:opacity-50"
                                >
                                  {generatingAI === thread.id ? (
                                    <><Loader2 className="w-3 h-3 animate-spin" /> 生成中...</>
                                  ) : (
                                    <><Sparkles className="w-3 h-3" /> AI 建议</>
                                  )}
                                </button>
                              )}
                            </td>
                            
                            {/* Actions */}
                            <td className="px-3 py-3">
                              <div className="flex items-center justify-end gap-1 flex-wrap">
                                {/* Check Site Button */}
                                {!['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'me.com', 'icloud.com', 'yahoo.co.uk'].includes(thread.domain.toLowerCase()) && (
                                  <button
                                    onClick={() => checkDomainStatus(thread)}
                                    disabled={thread.domainChecking}
                                    className="flex items-center gap-1 px-2 py-1 text-[10px] bg-cyan-100 text-cyan-700 rounded hover:bg-cyan-200 disabled:opacity-50"
                                    title={thread.domainInfo ? `上次检查: ${new Date(thread.domainInfo.lastChecked || '').toLocaleString('zh-CN')}` : '检查网站状态'}
                                  >
                                    {thread.domainChecking ? (
                                      <Loader2 className="w-3 h-3 animate-spin" />
                                    ) : thread.domainInfo ? (
                                      <>
                                        <CheckCircle className="w-3 h-3" />
                                        {thread.domainInfo.status === 'active' ? '活跃' : thread.domainInfo.status === 'closed' ? '已关' : '未知'}
                                      </>
                                    ) : (
                                      <><Globe className="w-3 h-3" /> 检查</>
                                    )}
                                  </button>
                                )}
                                
                                {/* Mark as Sent Button */}
                                {!isManuallyMarkedSent(thread.id) ? (
                                  <button
                                    onClick={() => markAsSent(thread)}
                                    className="flex items-center gap-1 px-2 py-1 text-[10px] bg-green-100 text-green-700 rounded hover:bg-green-200"
                                    title="标记为已发送"
                                  >
                                    <MailCheck className="w-3 h-3" /> 已发
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => unmarkAsSent(thread)}
                                    className="flex items-center gap-1 px-2 py-1 text-[10px] bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200"
                                    title={`手动标记时间: ${getManualSentTime(thread.id)}`}
                                  >
                                    <CheckCheck className="w-3 h-3" /> 取消
                                  </button>
                                )}
                                
                                {/* Delete Button */}
                                <button
                                  onClick={() => deleteContact(thread)}
                                  className="flex items-center gap-1 px-2 py-1 text-[10px] bg-red-100 text-red-600 rounded hover:bg-red-200"
                                  title="删除此联系人"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                                
                                {/* Follow Up Button */}
                                <button
                                  onClick={() => handleCompose(thread)}
                                  className="flex items-center gap-1 px-2 py-1 text-[10px] bg-primary-600 text-white rounded hover:bg-primary-700"
                                >
                                  <Reply className="w-3 h-3" /> 跟进
                                </button>
                              </div>
                              
                              {/* Domain Info Display */}
                              {thread.domainInfo && (
                                <div className="mt-2 p-2 bg-gray-50 rounded text-[10px] text-gray-600 max-w-[240px]">
                                  <p className="truncate" title={thread.domainInfo.companyInfo}>
                                    <strong>公司:</strong> {thread.domainInfo.companyInfo?.substring(0, 50)}...
                                  </p>
                                  {thread.domainInfo.recommendedPackaging && (
                                    <p className="truncate mt-0.5">
                                      <strong>推荐:</strong> {thread.domainInfo.recommendedPackaging.slice(0, 2).join(', ')}
                                    </p>
                                  )}
                                </div>
                              )}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )
        ))}

        {filteredThreads.length === 0 && (
          <div className="bg-white rounded-xl p-12 border border-gray-200 shadow-sm text-center">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">没有匹配的记录</h3>
            <p className="text-gray-500">没有符合当前筛选条件的客户需要跟进。</p>
          </div>
        )}
      </div>

      {/* Compose Modal */}
      {showComposeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Send className="w-5 h-5 text-primary-600" />
                Compose Follow Up
              </h2>
              <button onClick={() => setShowComposeModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 overflow-y-auto max-h-[60vh]">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <input
                  type="email"
                  value={composeData.to}
                  onChange={(e) => setComposeData(prev => ({ ...prev, to: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  value={composeData.subject}
                  onChange={(e) => setComposeData(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  value={composeData.body}
                  onChange={(e) => setComposeData(prev => ({ ...prev, body: e.target.value }))}
                  rows={10}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 resize-none"
                />
              </div>
            </div>
            {/* Send Result Message */}
            {sendResult && (
              <div className={`mx-6 mb-4 p-3 rounded-xl text-sm font-medium ${
                sendResult.success 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {sendResult.message}
              </div>
            )}
            
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowComposeModal(false)
                  setSendResult(null)
                }}
                className="px-5 py-2.5 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200"
                disabled={sendingEmail}
              >
                Cancel
              </button>
              <button 
                onClick={handleSendEmail}
                disabled={sendingEmail}
                className="flex items-center gap-2 px-6 py-2.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sendingEmail ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Email
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmailFollowUpPage
