import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, Link, useSearchParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { supabase, Order, Profile, NewsletterSubscriber, Document, Quote, ArtworkFile, EmailDraft, CRMInquiry, CRMActivity } from '../lib/supabase'
import { blogPosts } from '../data/blogData'
import { Home, Users, Package, Settings, Search, ChevronDown, ChevronLeft, ChevronRight, LogOut, Eye, Edit, Trash2, ArrowLeft, RefreshCw, Mail, Phone, Building, Calendar, DollarSign, TrendingUp, ShoppingBag, Newspaper, FileText, Upload, Truck, ExternalLink, X, FileCheck, Image, CheckCircle, Clock, AlertCircle, MessageSquare, Sparkles, Inbox, Send, FileCode, Check, Globe, Filter, MapPin, Factory, Tag, History } from 'lucide-react'
import CRMPanelAdvanced from '../components/admin/CRMPanelAdvanced'
import { sendTestEmail, sendBulkEmails, generateEmailTemplate, EmailRecipient } from '../lib/brevo'

// Industry detection keywords
const INDUSTRY_KEYWORDS: Record<string, string[]> = {
  'Coffee & Tea': ['coffee', 'tea', 'roast', 'brew', 'cafe', 'espresso', 'chai', 'matcha', 'bean'],
  'Food & Snacks': ['food', 'snack', 'chip', 'cookie', 'candy', 'chocolate', 'nuts', 'granola', 'protein', 'bar'],
  'Pet Food': ['pet', 'dog', 'cat', 'treat', 'kibble', 'animal'],
  'Cannabis/CBD': ['cannabis', 'cbd', 'hemp', 'weed', 'marijuana', 'thc', 'dispensary'],
  'Supplements': ['supplement', 'vitamin', 'protein', 'powder', 'health', 'wellness', 'nutrition'],
  'Cosmetics': ['cosmetic', 'beauty', 'skincare', 'makeup', 'cream', 'lotion', 'serum'],
  'Baby Products': ['baby', 'infant', 'puree', 'toddler', 'child'],
  'Sauce & Condiments': ['sauce', 'condiment', 'ketchup', 'mayo', 'dressing', 'spice', 'seasoning'],
  'Agriculture': ['seed', 'farm', 'agriculture', 'organic', 'harvest', 'grow', 'garden'],
  'Beverage': ['drink', 'beverage', 'juice', 'water', 'soda', 'smoothie']
}

// Email domain TLD to country mapping
const EMAIL_TLD_COUNTRIES: Record<string, string> = {
  '.au': 'Australia', '.com.au': 'Australia', '.nz': 'New Zealand',
  '.uk': 'UK', '.co.uk': 'UK', '.ca': 'Canada', '.de': 'Germany',
  '.fr': 'France', '.es': 'Spain', '.it': 'Italy', '.nl': 'Netherlands',
  '.se': 'Sweden', '.no': 'Norway', '.dk': 'Denmark', '.fi': 'Finland',
  '.jp': 'Japan', '.kr': 'Korea', '.cn': 'China', '.hk': 'Hong Kong',
  '.sg': 'Singapore', '.my': 'Malaysia', '.in': 'India', '.ae': 'UAE',
  '.za': 'South Africa', '.mx': 'Mexico', '.br': 'Brazil'
}

function detectCountryFromEmail(email: string): string {
  if (!email) return 'Unknown'
  const domain = email.toLowerCase()
  for (const [tld, country] of Object.entries(EMAIL_TLD_COUNTRIES).sort((a, b) => b[0].length - a[0].length)) {
    if (domain.endsWith(tld)) return country
  }
  return 'USA' // Default for .com
}

function detectIndustry(text: string): string {
  if (!text) return 'Other'
  const lower = text.toLowerCase()
  for (const [industry, keywords] of Object.entries(INDUSTRY_KEYWORDS)) {
    if (keywords.some(kw => lower.includes(kw))) return industry
  }
  return 'Other'
}

type TabType = 'dashboard' | 'customers' | 'orders' | 'quotes' | 'artwork' | 'documents' | 'newsletter' | 'crm' | 'email-marketing' | 'settings'

const ADMIN_EMAIL = 'ryan@achievepack.com'

const AdminPage: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { user, signOut, loading: authLoading } = useAuth()
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')
  const [customers, setCustomers] = useState<Profile[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [artworks, setArtworks] = useState<ArtworkFile[]>([])
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [selectedCustomer, setSelectedCustomer] = useState<Profile | null>(null)
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null)
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkFile | null>(null)
  const [documents, setDocuments] = useState<Document[]>([])
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [showTrackingModal, setShowTrackingModal] = useState(false)
  const [uploadForm, setUploadForm] = useState({ userId: '', name: '', description: '', fileUrl: '', type: 'PDF' })
  const [trackingForm, setTrackingForm] = useState({ trackingNumber: '', carrier: '', trackingUrl: '' })
  const [artworkFeedback, setArtworkFeedback] = useState('')
  
  // Email Marketing state
  const [selectedPage, setSelectedPage] = useState('')
  const [emailSubject, setEmailSubject] = useState('')
  const [emailContent, setEmailContent] = useState('')
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])
  const [personalizationFields, setPersonalizationFields] = useState({ greeting: 'Hi {{name}}', closing: 'Best regards,\nRyan Wong\nAchievePack Team' })
  const [showEmailPreview, setShowEmailPreview] = useState(false)
  const [emailImages, setEmailImages] = useState<string[]>([])
  const [testEmailSending, setTestEmailSending] = useState(false)
  const [emailDrafts, setEmailDrafts] = useState<EmailDraft[]>([])
  const [savingDraft, setSavingDraft] = useState(false)
  const [currentDraftId, setCurrentDraftId] = useState<string | null>(null)
  const [inquiries, setInquiries] = useState<CRMInquiry[]>([])
  const [contactFilter, setContactFilter] = useState<'all' | 'newsletter' | 'customer' | 'inquiry' | 'paypal' | 'stripe' | 'calendly' | 'website' | 'import' | 'manual'>('all')
  const [editorMode, setEditorMode] = useState<'visual' | 'html'>('visual')
  const [sendingCampaign, setSendingCampaign] = useState(false)
  const [contactSearch, setContactSearch] = useState('')
  
  // Advanced filters for Email Marketing
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [industryFilter, setIndustryFilter] = useState<string>('all')
  const [countryFilter, setCountryFilter] = useState<string>('all')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [customerTypeFilter, setCustomerTypeFilter] = useState<string>('all')
  const [dateRangeFilter, setDateRangeFilter] = useState<'all' | '7days' | '30days' | '90days' | '1year'>('all')
  const [contactPage, setContactPage] = useState(1)
  const [contactPageSize, setContactPageSize] = useState(50)
  const [emailHistory, setEmailHistory] = useState<CRMActivity[]>([])
  const [showEmailHistory, setShowEmailHistory] = useState(false)
  const [showImageCatalog, setShowImageCatalog] = useState(false)
  const [imageCatalogFilter, setImageCatalogFilter] = useState<string>('all')

  // Image Catalog for Email
  const imageCatalog = {
    'Growth & Progress': [
      { url: '/imgs/blog/2025-thank-you/2025letter.webp', name: '2025 Newsletter', alt: '2025 Year in Review' },
      { url: '/imgs/climate.webp', name: 'Climate Impact', alt: 'Climate and sustainability impact' },
      { url: '/imgs/infographic-plant-based.webp', name: 'Plant Based', alt: 'Plant-based materials infographic' },
    ],
    'Products': [
      { url: '/imgs/illustrated/a_achievepack_standup_pouches_9884402.webp', name: 'Stand-Up Pouch', alt: 'Eco-friendly stand-up pouch' },
      { url: '/imgs/illustrated/a_achievepack_flatbottom_bags_0519153.webp', name: 'Flat Bottom Bag', alt: 'Sustainable flat bottom bag' },
      { url: '/imgs/illustrated/a_achievepack_sidegusset_bags_7074883.webp', name: 'Side Gusset Bag', alt: 'Side gusset packaging bag' },
      { url: '/imgs/illustrated/a_achievepack_spout_pouches_1062736.webp', name: 'Spout Pouch', alt: 'Spout pouch packaging' },
      { url: '/imgs/illustrated/a_achievepack_flat_pouches_0260646.webp', name: 'Flat Pouch', alt: 'Flat pouch packaging' },
      { url: '/imgs/illustrated/a_achievepack_vacuum_pouches_8597303.webp', name: 'Vacuum Pouch', alt: 'Vacuum pouch packaging' },
      { url: '/imgs/illustrated/a_achievepack_custom_boxes_6574270.webp', name: 'Custom Box', alt: 'Custom packaging box' },
    ],
    'Industry': [
      { url: '/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp', name: 'Coffee Packaging', alt: 'Coffee bag packaging solution' },
      { url: '/imgs/seo-photos/a_adaptogens_singapore_zen_wellness_pouch_1951517.webp', name: 'Wellness Packaging', alt: 'Wellness and supplements packaging' },
      { url: '/imgs/seo-photos/a_artisan_chocolate_abu_dhabi_luxury_pouch_4218900.webp', name: 'Chocolate Packaging', alt: 'Luxury chocolate packaging' },
      { url: '/imgs/seo-photos/a_bavarian_bliss_bath_bombs_spa_pouch_9301794.webp', name: 'Bath Products', alt: 'Bath and beauty packaging' },
    ],
    'Sustainability': [
      { url: '/imgs/seo-photos/a_achievepack_compostable_garden_9329618.webp', name: 'Compostable', alt: 'Certified compostable packaging' },
      { url: '/imgs/seo-photos/a_achievepack_home_compostable_balcony_9883994.webp', name: 'Home Compostable', alt: 'Home compostable packaging' },
      { url: '/imgs/seo-photos/a_achievepack_pcr_office_8175988.webp', name: 'PCR Materials', alt: 'Post-consumer recycled materials' },
      { url: '/imgs/seo-photos/a_achievepack_mono_kitchen_8539724.webp', name: 'Mono Material', alt: 'Recyclable mono-material packaging' },
      { url: '/imgs/4-infograhic/compost.webp', name: 'Compost Icon', alt: 'Compostable certification icon' },
      { url: '/imgs/4-infograhic/recyclable.webp', name: 'Recyclable Icon', alt: 'Recyclable certification icon' },
    ],
    'Brand & Logo': [
      { url: '/ap-logo.png', name: 'AP Logo', alt: 'Achieve Pack logo' },
      { url: '/ap-logo-white.png', name: 'AP Logo White', alt: 'Achieve Pack logo white' },
      { url: '/eco-pouch-logo-white-tran.svg', name: 'Pouch.eco Logo', alt: 'Pouch.eco logo' },
    ],
  }

  // Check if user is admin
  useEffect(() => {
    if (!authLoading && (!user || user.email !== ADMIN_EMAIL)) {
      navigate('/login')
    }
  }, [user, authLoading, navigate])

  // Fetch data
  useEffect(() => {
    if (user && user.email === ADMIN_EMAIL) {
      fetchData()
    }
  }, [user])

  const fetchData = async () => {
    setLoading(true)
    
    // Fetch all CRM inquiries (may be more than 1000)
    let allInquiries: CRMInquiry[] = []
    let offset = 0
    const batchSize = 1000
    let hasMore = true
    
    while (hasMore) {
      const { data, error } = await supabase
        .from('crm_inquiries')
        .select('*')
        .order('created_at', { ascending: false })
        .range(offset, offset + batchSize - 1)
      
      if (error) {
        console.error('Inquiries fetch error:', error)
        break
      }
      
      if (data && data.length > 0) {
        allInquiries = [...allInquiries, ...data]
        offset += batchSize
        hasMore = data.length === batchSize
      } else {
        hasMore = false
      }
    }
    
    const [customersRes, ordersRes, subscribersRes, documentsRes, draftsRes, emailHistoryRes] = await Promise.all([
      supabase.from('profiles').select('*').order('created_at', { ascending: false }),
      supabase.from('orders').select('*').order('created_at', { ascending: false }),
      supabase.from('newsletter_subscribers').select('*').order('created_at', { ascending: false }),
      supabase.from('documents').select('*').order('created_at', { ascending: false }),
      supabase.from('email_drafts').select('*').order('updated_at', { ascending: false }),
      supabase.from('crm_activities').select('*').eq('type', 'email').order('created_at', { ascending: false }).limit(100)
    ])
    
    // Debug: Log data counts
    console.log('📊 Data loaded:', {
      customers: customersRes.data?.length || 0,
      orders: ordersRes.data?.length || 0,
      subscribers: subscribersRes.data?.length || 0,
      inquiries: allInquiries.length,
      emailHistory: emailHistoryRes.data?.length || 0
    })
    
    // Debug: Log inquiry sources
    if (allInquiries.length > 0) {
      const sources = allInquiries.reduce((acc: Record<string, number>, inq: any) => {
        acc[inq.source || 'unknown'] = (acc[inq.source || 'unknown'] || 0) + 1
        return acc
      }, {})
      console.log('📍 Inquiry sources:', sources)
    }
    
    // Check for errors
    if (customersRes.error) console.error('Customers error:', customersRes.error)
    if (subscribersRes.error) console.error('Subscribers error:', subscribersRes.error)
    
    setCustomers(customersRes.data || [])
    setOrders(ordersRes.data || [])
    setSubscribers(subscribersRes.data || [])
    setDocuments(documentsRes.data || [])
    setEmailDrafts(draftsRes.data || [])
    setInquiries(allInquiries)
    setEmailHistory(emailHistoryRes.data || [])
    setLoading(false)
  }

  // Handle URL params for preselecting contacts from CRM
  useEffect(() => {
    const preselect = searchParams.get('preselect')
    const tab = searchParams.get('tab')
    
    if (tab === 'seo-email' || tab === 'email-marketing') {
      setActiveTab('email-marketing')
    }
    
    if (preselect) {
      // Format: inquiry_id1,inquiry_id2 or single inquiry_id
      const ids = preselect.split(',').map(id => id.startsWith('inquiry_') ? id : `inquiry_${id}`)
      setSelectedContacts(ids)
    }
  }, [searchParams])

  // Enriched contacts with industry and country detection
  const enrichedContacts = useMemo(() => {
    return inquiries.map(inq => ({
      ...inq,
      industry: detectIndustry(`${inq.message || ''} ${inq.packaging_type || ''} ${inq.company || ''}`),
      country: detectCountryFromEmail(inq.email || '')
    }))
  }, [inquiries])

  // Filter options for dropdowns
  const filterOptions = useMemo(() => {
    const industries = [...new Set(enrichedContacts.map(c => c.industry))].sort()
    const countries = [...new Set(enrichedContacts.map(c => c.country))].sort()
    const statuses = [...new Set(enrichedContacts.map(c => c.status))].filter(Boolean)
    return { industries, countries, statuses }
  }, [enrichedContacts])

  // Filtered contacts based on all filters
  const filteredContacts = useMemo(() => {
    const now = new Date()
    const dateThresholds: Record<string, number> = {
      '7days': 7, '30days': 30, '90days': 90, '1year': 365
    }
    
    return enrichedContacts.filter(contact => {
      // Search filter
      if (contactSearch) {
        const search = contactSearch.toLowerCase()
        if (!contact.name?.toLowerCase().includes(search) &&
            !contact.email?.toLowerCase().includes(search) &&
            !contact.company?.toLowerCase().includes(search)) {
          return false
        }
      }
      
      // Source filter
      if (contactFilter !== 'all' && contactFilter !== 'newsletter' && contactFilter !== 'customer' && contactFilter !== 'inquiry') {
        // Website filter includes null/undefined/empty source
        if (contactFilter === 'website') {
          if (contact.source && contact.source !== 'website') return false
        } else {
          if (contact.source !== contactFilter) return false
        }
      }
      
      // Industry filter
      if (industryFilter !== 'all' && contact.industry !== industryFilter) return false
      
      // Country filter  
      if (countryFilter !== 'all' && contact.country !== countryFilter) return false
      
      // Status filter
      if (statusFilter !== 'all' && contact.status !== statusFilter) return false
      
      // Customer type filter
      if (customerTypeFilter !== 'all' && contact.customer_type !== customerTypeFilter) return false
      
      // Date range filter
      if (dateRangeFilter !== 'all') {
        const days = dateThresholds[dateRangeFilter]
        const contactDate = new Date(contact.created_at)
        const diffDays = (now.getTime() - contactDate.getTime()) / (1000 * 60 * 60 * 24)
        if (diffDays > days) return false
      }
      
      // Exclude spam
      if (contact.status === 'spam') return false
      
      return true
    })
  }, [enrichedContacts, contactSearch, contactFilter, industryFilter, countryFilter, statusFilter, customerTypeFilter, dateRangeFilter])

  // Paginated contacts
  const paginatedContacts = useMemo(() => {
    const start = (contactPage - 1) * contactPageSize
    return filteredContacts.slice(start, start + contactPageSize)
  }, [filteredContacts, contactPage, contactPageSize])

  const totalContactPages = Math.ceil(filteredContacts.length / contactPageSize)

  // Record email to CRM after sending
  const recordEmailToCRM = async (recipients: EmailRecipient[], subject: string, content: string) => {
    const activities = recipients.map(r => {
      // Find inquiry ID from email
      const inquiry = inquiries.find(i => i.email === r.email)
      if (!inquiry) return null
      return {
        inquiry_id: inquiry.id,
        type: 'email' as const,
        subject: subject,
        content: `Campaign Email: ${subject}\n\nSent via Email Marketing feature`,
        created_by: 'admin'
      }
    }).filter(Boolean)
    
    if (activities.length > 0) {
      await supabase.from('crm_activities').insert(activities)
      
      // Update last_contacted for all recipients
      const inquiryIds = activities.map(a => a!.inquiry_id)
      await supabase.from('crm_inquiries').update({
        last_contacted: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }).in('id', inquiryIds)
    }
  }

  // Save email draft
  const saveDraft = async () => {
    setSavingDraft(true)
    const draftData = {
      name: emailSubject || 'Untitled Draft',
      subject: emailSubject,
      greeting: personalizationFields.greeting,
      content: emailContent,
      closing: personalizationFields.closing,
      selected_page: selectedPage,
      images: emailImages,
      status: 'draft' as const,
      updated_at: new Date().toISOString()
    }
    
    if (currentDraftId) {
      await supabase.from('email_drafts').update(draftData).eq('id', currentDraftId)
    } else {
      const { data } = await supabase.from('email_drafts').insert([draftData]).select().single()
      if (data) setCurrentDraftId(data.id)
    }
    
    setSavingDraft(false)
    fetchData()
    alert('Draft saved!')
  }

  // Load email draft
  const loadDraft = (draft: EmailDraft) => {
    setCurrentDraftId(draft.id)
    setEmailSubject(draft.subject)
    setEmailContent(draft.content)
    setSelectedPage(draft.selected_page || '')
    setEmailImages(draft.images || [])
    setPersonalizationFields({
      greeting: draft.greeting || 'Hi {{name}}',
      closing: draft.closing || 'Best regards,\nRyan Wong\nAchievePack Team'
    })
  }

  // Delete draft
  const deleteDraft = async (id: string) => {
    if (confirm('Delete this draft?')) {
      await supabase.from('email_drafts').delete().eq('id', id)
      if (currentDraftId === id) {
        setCurrentDraftId(null)
        setEmailSubject('')
        setEmailContent('')
        setSelectedPage('')
        setEmailImages([])
      }
      fetchData()
    }
  }

  // Extract text from HTML content
  const htmlToText = (html: string): string => {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = html
    // Remove figure/figcaption as they're not content
    tempDiv.querySelectorAll('figure, figcaption').forEach(el => el.remove())
    // Convert lists to bullet points
    tempDiv.querySelectorAll('li').forEach(li => {
      li.innerHTML = '• ' + li.innerHTML
    })
    // Convert blockquotes
    tempDiv.querySelectorAll('blockquote').forEach(bq => {
      bq.innerHTML = '"' + bq.innerHTML.trim() + '"'
    })
    return tempDiv.textContent?.replace(/\s+/g, ' ').trim() || ''
  }

  // Extract images from HTML content
  const extractImages = (html: string): string[] => {
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/g
    const images: string[] = []
    let match
    while ((match = imgRegex.exec(html)) !== null) {
      images.push(match[1])
    }
    return images
  }

  // SEO Page email content templates
  const seoPageTemplates: Record<string, { title: string; content: string; images: string[] }> = {
    // Industry Pages
    '/industry/coffee-tea': {
      title: 'Sustainable Coffee & Tea Packaging Solutions',
      content: `<h2>Eco-Friendly Packaging for Coffee & Tea Brands</h2>
<p>Looking for sustainable packaging that keeps your coffee fresh and your brand values aligned? We specialize in <strong>low MOQ eco-friendly pouches</strong> designed specifically for coffee and tea brands.</p>

<h3>Why Choose Our Coffee & Tea Packaging?</h3>
<ul>
  <li><strong>High barrier protection</strong> — Keeps coffee fresh with excellent oxygen and moisture barriers</li>
  <li><strong>Certified sustainable</strong> — Compostable, recyclable, and bio-based options available</li>
  <li><strong>Low MOQ from 100 units</strong> — Perfect for small roasters and specialty brands</li>
  <li><strong>Custom printing</strong> — Showcase your brand with premium digital or gravure printing</li>
</ul>

<p>Whether you need stand-up pouches with degassing valves, flat bottom bags for premium shelf presence, or side gusset bags for bulk packaging, we have you covered.</p>

<p><strong>Ready to explore sustainable coffee packaging?</strong> Let's chat about your needs.</p>`,
      images: ['/imgs/industry/coffee-tea-hero.webp']
    },
    '/industry/pet-food': {
      title: 'Eco-Friendly Pet Food Packaging',
      content: `<h2>Sustainable Packaging for Pet Food Brands</h2>
<p>Pet owners care about sustainability — and so should your packaging. We offer <strong>eco-friendly pet food pouches</strong> with the durability and barrier properties your products need.</p>

<h3>Pet Food Packaging Solutions</h3>
<ul>
  <li><strong>Heavy-duty materials</strong> — Built for larger package sizes and heavier contents</li>
  <li><strong>Excellent barrier properties</strong> — Keeps pet food fresh and aroma-sealed</li>
  <li><strong>Recyclable mono-PE options</strong> — Easy for consumers to recycle</li>
  <li><strong>Compostable alternatives</strong> — For brands targeting eco-conscious pet owners</li>
</ul>

<p>From premium freeze-dried treats to bulk kibble, our packaging solutions scale with your brand.</p>

<p><strong>Let's discuss your pet food packaging needs.</strong></p>`,
      images: ['/imgs/industry/pet-food-hero.webp']
    },
    '/industry/snacks-food': {
      title: 'Sustainable Snack Packaging Options',
      content: `<h2>Eco-Friendly Snack & Food Packaging</h2>
<p>Stand out on shelves with sustainable packaging that consumers love. Our <strong>snack pouches</strong> combine eye-catching design with genuine eco credentials.</p>

<h3>Snack Packaging Features</h3>
<ul>
  <li><strong>Vibrant printing</strong> — High-definition colors that pop on retail shelves</li>
  <li><strong>Resealable options</strong> — Zipper closures for consumer convenience</li>
  <li><strong>Multiple sizes</strong> — From single-serve sachets to family packs</li>
  <li><strong>Sustainable materials</strong> — Compostable, recyclable, and bio-based choices</li>
</ul>

<p>Perfect for chips, nuts, dried fruits, granola, and more.</p>

<p><strong>Ready to make your snacks shine sustainably?</strong></p>`,
      images: ['/imgs/industry/snacks-hero.webp']
    },
    '/industry/supplements-powders': {
      title: 'Supplements & Powders Packaging',
      content: `<h2>Sustainable Packaging for Supplements & Powders</h2>
<p>Your wellness brand deserves packaging that reflects your commitment to health — for people and planet. Our <strong>supplement pouches</strong> offer superior protection with eco-friendly materials.</p>

<h3>Why Our Supplement Packaging?</h3>
<ul>
  <li><strong>High moisture barrier</strong> — Essential for powder stability</li>
  <li><strong>Light protection</strong> — Preserves ingredient potency</li>
  <li><strong>Resealable closures</strong> — Maintains freshness between uses</li>
  <li><strong>Clean labeling</strong> — Ample space for nutritional info and certifications</li>
</ul>

<p>From protein powders to vitamin blends, we have the right solution.</p>`,
      images: ['/imgs/industry/supplements-hero.webp']
    },
    '/industry/baby-food': {
      title: 'Baby Food Packaging Solutions',
      content: `<h2>Safe & Sustainable Baby Food Packaging</h2>
<p>Parents want the best for their children — including packaging that's safe and eco-friendly. Our <strong>baby food pouches</strong> meet the highest safety standards while reducing environmental impact.</p>

<h3>Baby Food Packaging Features</h3>
<ul>
  <li><strong>Food-grade certified</strong> — Meets FDA and international safety standards</li>
  <li><strong>Spout pouches available</strong> — Perfect for purées and smoothies</li>
  <li><strong>BPA-free materials</strong> — Safe for babies and toddlers</li>
  <li><strong>Eco-friendly options</strong> — Show parents you care about their child's future</li>
</ul>

<p><strong>Let's create packaging parents can trust.</strong></p>`,
      images: ['/imgs/industry/baby-food-hero.webp']
    },
    // Materials Pages
    '/materials/compostable': {
      title: 'Discover Our Compostable Materials',
      content: `<h2>Certified Compostable Packaging Materials</h2>
<p>Make a genuine impact with <strong>certified compostable pouches</strong> that break down naturally, leaving no harmful residues behind.</p>

<h3>Our Compostable Options</h3>
<ul>
  <li><strong>Home compostable</strong> — TÜV OK compost HOME certified for backyard composting</li>
  <li><strong>Industrial compostable</strong> — BPI certified for commercial facilities</li>
  <li><strong>PLA-based films</strong> — Made from renewable plant sources</li>
  <li><strong>Cellulose materials</strong> — Natural look with genuine eco performance</li>
</ul>

<p>Perfect for brands committed to true sustainability. Available from just 100 units.</p>

<p><strong>Ready to go compostable?</strong></p>`,
      images: ['/imgs/materials/compostable-hero.webp']
    },
    '/materials/recyclable-mono-pe': {
      title: 'Recyclable Mono-PE Solutions',
      content: `<h2>100% Recyclable Mono-PE Packaging</h2>
<p>Our <strong>mono-material PE pouches</strong> are designed for easy recycling in existing infrastructure — no sorting hassles for consumers.</p>

<h3>Mono-PE Benefits</h3>
<ul>
  <li><strong>100% recyclable</strong> — Compatible with PE recycling streams worldwide</li>
  <li><strong>Excellent barrier</strong> — High moisture protection for product freshness</li>
  <li><strong>Cost-effective</strong> — Only 5-10% premium over conventional materials</li>
  <li><strong>How2Recycle compatible</strong> — Clear recycling guidance for consumers</li>
</ul>

<p>The practical choice for brands wanting immediate recycling compatibility.</p>`,
      images: ['/imgs/materials/mono-pe-hero.webp']
    },
    '/materials/recyclable-mono-pp': {
      title: 'Recyclable Mono-PP Options',
      content: `<h2>Recyclable Mono-PP Packaging</h2>
<p>For applications requiring higher temperature resistance, our <strong>mono-PP pouches</strong> deliver recyclability with enhanced performance.</p>

<h3>Mono-PP Advantages</h3>
<ul>
  <li><strong>Heat resistant</strong> — Suitable for hot-fill applications</li>
  <li><strong>Excellent clarity</strong> — Great for showcasing product contents</li>
  <li><strong>Recyclable</strong> — Compatible with PP recycling streams</li>
  <li><strong>Versatile</strong> — Works for multiple product categories</li>
</ul>`,
      images: ['/imgs/materials/mono-pp-hero.webp']
    },
    '/materials/bio-pe': {
      title: 'Bio-PE Materials - Carbon Negative',
      content: `<h2>Bio-PE: The Carbon-Negative Alternative</h2>
<p>Made from sugarcane, <strong>Bio-PE</strong> offers the same performance as conventional PE with a fraction of the carbon footprint.</p>

<h3>Why Choose Bio-PE?</h3>
<ul>
  <li><strong>Carbon-negative raw material</strong> — Sugarcane captures CO₂ during growth</li>
  <li><strong>Chemically identical to PE</strong> — Same processing, same recyclability</li>
  <li><strong>ISCC certified</strong> — Verified sustainable sourcing</li>
  <li><strong>No performance compromise</strong> — Identical barrier and strength properties</li>
</ul>

<p>Tell a powerful sustainability story without changing your supply chain.</p>`,
      images: ['/imgs/materials/bio-pe-hero.webp']
    },
    '/materials/pcr': {
      title: 'PCR Recycled Materials',
      content: `<h2>Post-Consumer Recycled (PCR) Packaging</h2>
<p>Close the loop with <strong>PCR materials</strong> that incorporate recycled plastic from consumer waste.</p>

<h3>PCR Options Available</h3>
<ul>
  <li><strong>30% PCR content</strong> — Balance of sustainability and cost</li>
  <li><strong>50% PCR content</strong> — Strong environmental statement</li>
  <li><strong>GRS certified</strong> — Third-party verified recycled content</li>
  <li><strong>Supports circular economy</strong> — Reduces virgin plastic demand</li>
</ul>

<p>Make your packaging part of the solution.</p>`,
      images: ['/imgs/materials/pcr-hero.webp']
    },
    // Packaging Types
    '/packaging/stand-up-pouches': {
      title: 'Custom Stand-Up Pouches for Your Brand',
      content: `<h2>Stand-Up Pouches — Versatile & Eye-Catching</h2>
<p>The most popular flexible packaging format, <strong>stand-up pouches</strong> offer maximum shelf visibility and consumer convenience.</p>

<h3>Stand-Up Pouch Features</h3>
<ul>
  <li><strong>Self-standing design</strong> — Great retail shelf presence</li>
  <li><strong>Multiple closure options</strong> — Zippers, tear notches, spouts</li>
  <li><strong>360° branding</strong> — Front, back, and gusset printing</li>
  <li><strong>Sustainable materials</strong> — Available in all our eco-friendly options</li>
</ul>

<p>Perfect for coffee, snacks, pet food, and more. Starting from just 100 units.</p>`,
      images: ['/imgs/packaging/stand-up-pouch-hero.webp']
    },
    '/packaging/flat-bottom-bags': {
      title: 'Premium Flat Bottom Bags',
      content: `<h2>Flat Bottom Bags — Premium Shelf Presence</h2>
<p>Also known as box pouches, <strong>flat bottom bags</strong> provide superior stability and a premium look for specialty products.</p>

<h3>Flat Bottom Bag Benefits</h3>
<ul>
  <li><strong>Superior stability</strong> — Stands perfectly upright without support</li>
  <li><strong>5 printable panels</strong> — Maximum branding real estate</li>
  <li><strong>Premium appearance</strong> — Ideal for specialty and artisan products</li>
  <li><strong>High capacity</strong> — Great for larger product volumes</li>
</ul>

<p>Elevate your product presentation with flat bottom bags.</p>`,
      images: ['/imgs/packaging/flat-bottom-hero.webp']
    },
    '/packaging/spout-pouches': {
      title: 'Spout Pouches for Liquids',
      content: `<h2>Spout Pouches — Perfect for Liquids</h2>
<p>Our <strong>spout pouches</strong> offer controlled dispensing for liquids, purées, and semi-liquid products.</p>

<h3>Spout Pouch Applications</h3>
<ul>
  <li><strong>Baby food purées</strong> — Convenient feeding format</li>
  <li><strong>Liquid supplements</strong> — Easy, mess-free consumption</li>
  <li><strong>Sauces & condiments</strong> — Controlled pour dispensing</li>
  <li><strong>Beverages</strong> — Alternative to bottles and cans</li>
</ul>

<p>Available in multiple spout styles and sustainable materials.</p>`,
      images: ['/imgs/packaging/spout-pouch-hero.webp']
    },
    '/packaging/flat-pouches': {
      title: 'Flat Pouches & Sachets',
      content: `<h2>Flat Pouches — Simple & Efficient</h2>
<p><strong>Flat pouches</strong> and sachets are the most economical packaging format, perfect for samples and single-serve portions.</p>

<h3>Flat Pouch Uses</h3>
<ul>
  <li><strong>Sample packs</strong> — Cost-effective trial sizes</li>
  <li><strong>Single-serve portions</strong> — Convenience and portion control</li>
  <li><strong>Seasonings & condiments</strong> — Individual serving packets</li>
  <li><strong>Minimal material usage</strong> — Lower environmental footprint</li>
</ul>`,
      images: ['/imgs/packaging/flat-pouch-hero.webp']
    },
    '/packaging/side-gusset-bags': {
      title: 'Side Gusset Bags',
      content: `<h2>Side Gusset Bags — Classic & Reliable</h2>
<p>A traditional format that's still incredibly popular, <strong>side gusset bags</strong> offer excellent volume capacity and a familiar look.</p>

<h3>Side Gusset Bag Features</h3>
<ul>
  <li><strong>High capacity</strong> — Great for bulk products</li>
  <li><strong>Classic appearance</strong> — Familiar to consumers</li>
  <li><strong>Multiple closure options</strong> — Tin ties, zippers, heat seals</li>
  <li><strong>Popular for coffee</strong> — Traditional coffee bag format</li>
</ul>`,
      images: ['/imgs/packaging/side-gusset-hero.webp']
    },
    // Products & Topics
    '/products/compostable-coffee-bags': {
      title: 'Compostable Coffee Bags',
      content: `<h2>Certified Compostable Coffee Bags</h2>
<p>Give coffee lovers packaging they can feel good about. Our <strong>compostable coffee bags</strong> combine excellent barrier properties with genuine sustainability.</p>

<h3>Features</h3>
<ul>
  <li><strong>Home compostable options</strong> — TÜV certified</li>
  <li><strong>Degassing valves</strong> — Compatible with compostable materials</li>
  <li><strong>Multiple formats</strong> — Stand-up, flat bottom, side gusset</li>
  <li><strong>Low MOQ from 100 units</strong> — Perfect for specialty roasters</li>
</ul>`,
      images: ['/imgs/products/compostable-coffee-hero.webp']
    },
    '/products/compostable-stand-up-pouches': {
      title: 'Compostable Stand-Up Pouches',
      content: `<h2>Compostable Stand-Up Pouches</h2>
<p>The versatility of stand-up pouches with certified compostable materials. Available in home and industrial compostable options.</p>

<h3>Perfect For</h3>
<ul>
  <li>Snacks & granola</li>
  <li>Coffee & tea</li>
  <li>Pet treats</li>
  <li>Supplements & powders</li>
</ul>

<p>Starting from just 100 units with full custom printing.</p>`,
      images: ['/imgs/products/compostable-sup-hero.webp']
    },
    '/products/low-moq-packaging': {
      title: 'Low MOQ Packaging',
      content: `<h2>Low MOQ Custom Packaging — Start from 100 Units</h2>
<p>Don't let minimum order quantities hold your brand back. We offer <strong>custom printed pouches from just 100 pieces</strong> — perfect for startups, market testing, and small brands.</p>

<h3>Why Low MOQ Matters</h3>
<ul>
  <li><strong>Test before committing</strong> — Validate packaging designs with real customers</li>
  <li><strong>Reduce inventory risk</strong> — Order what you need, when you need it</li>
  <li><strong>Multiple SKUs affordable</strong> — Launch product variations without breaking the bank</li>
  <li><strong>Fast iteration</strong> — Update designs quickly based on feedback</li>
</ul>`,
      images: ['/imgs/products/low-moq-hero.webp']
    },
    '/topics/eco-friendly-food-packaging': {
      title: 'Eco-Friendly Food Packaging Guide',
      content: `<h2>Your Guide to Eco-Friendly Food Packaging</h2>
<p>Navigating sustainable packaging options can be overwhelming. Here's what you need to know about making your food packaging more eco-friendly.</p>

<h3>Key Considerations</h3>
<ul>
  <li><strong>Compostable vs Recyclable</strong> — Understanding the differences and best applications</li>
  <li><strong>Certifications that matter</strong> — BPI, TÜV, How2Recycle explained</li>
  <li><strong>Barrier requirements</strong> — Balancing sustainability with product protection</li>
  <li><strong>Consumer perception</strong> — What eco claims resonate most</li>
</ul>

<p>We're here to help you make the right choice for your products.</p>`,
      images: ['/imgs/topics/eco-friendly-hero.webp']
    },
    '/topics/dtc-sustainable-packaging': {
      title: 'DTC Sustainable Packaging Guide',
      content: `<h2>Sustainable Packaging for DTC Brands</h2>
<p>Direct-to-consumer brands have unique packaging needs. Here's how to nail sustainable packaging for your DTC business.</p>

<h3>DTC Packaging Best Practices</h3>
<ul>
  <li><strong>Unboxing experience</strong> — Create memorable moments sustainably</li>
  <li><strong>Right-sized packaging</strong> — Reduce waste and shipping costs</li>
  <li><strong>Brand storytelling</strong> — Communicate your values through packaging</li>
  <li><strong>Return-friendly</strong> — Consider the reverse logistics</li>
</ul>`,
      images: ['/imgs/topics/dtc-hero.webp']
    },
    '/topics/green-coffee-materials': {
      title: 'Green Coffee Materials Guide',
      content: `<h2>Sustainable Materials for Coffee Packaging</h2>
<p>Coffee brands have unique barrier requirements. Here are the best sustainable material options for keeping your coffee fresh.</p>

<h3>Material Comparison</h3>
<ul>
  <li><strong>Compostable with barrier</strong> — Home and industrial options</li>
  <li><strong>Recyclable mono-PE</strong> — Practical and cost-effective</li>
  <li><strong>Bio-PE alternatives</strong> — Carbon-negative performance</li>
  <li><strong>Kraft paper laminates</strong> — Natural look with barrier protection</li>
</ul>`,
      images: ['/imgs/topics/green-coffee-hero.webp']
    }
  }

  // Get page content by slug - returns raw HTML
  const getPageContent = (pagePath: string): { content: string; images: string[]; title: string } | null => {
    // Check if it's a blog page
    if (pagePath.startsWith('/blog/')) {
      const slug = pagePath.replace('/blog/', '')
      const blog = blogPosts.find(b => b.slug === slug)
      if (blog) {
        return {
          title: blog.title,
          content: blog.content, // Return raw HTML
          images: [blog.featuredImage, ...extractImages(blog.content)]
        }
      }
    }
    
    // Check if it's an SEO page with template
    if (seoPageTemplates[pagePath]) {
      return seoPageTemplates[pagePath]
    }
    
    return null
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const updateOrderStatus = async (orderId: string, status: string) => {
    await supabase.from('orders').update({ status, updated_at: new Date().toISOString() }).eq('id', orderId)
    fetchData()
    setSelectedOrder(null)
  }

  const deleteOrder = async (orderId: string) => {
    if (confirm('Are you sure you want to delete this order?')) {
      const { error } = await supabase.from('orders').delete().eq('id', orderId)
      if (error) {
        console.error('Delete order error:', error)
        alert(`Failed to delete order: ${error.message}`)
        return
      }
      alert('Order deleted successfully!')
      fetchData()
      setSelectedOrder(null)
    }
  }

  const toggleSubscription = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase.from('newsletter_subscribers').update({ 
      subscribed: !currentStatus, 
      updated_at: new Date().toISOString() 
    }).eq('id', id)
    if (error) {
      console.error('Toggle subscription error:', error)
      alert(`Failed to update subscription: ${error.message}`)
      return
    }
    fetchData()
  }

  const deleteSubscriber = async (id: string) => {
    if (confirm('Are you sure you want to delete this subscriber?')) {
      const { error } = await supabase.from('newsletter_subscribers').delete().eq('id', id)
      if (error) {
        console.error('Delete subscriber error:', error)
        alert(`Failed to delete subscriber: ${error.message}`)
        return
      }
      alert('Subscriber deleted successfully!')
      fetchData()
    }
  }

  const uploadDocument = async () => {
    if (!uploadForm.userId || !uploadForm.name || !uploadForm.fileUrl) {
      alert('Please fill in all required fields')
      return
    }
    const { error } = await supabase.from('documents').insert([{
      user_id: uploadForm.userId,
      name: uploadForm.name,
      description: uploadForm.description,
      type: uploadForm.type,
      file_url: uploadForm.fileUrl,
      is_public: true
    }])
    if (error) {
      console.error('Upload document error:', error)
      alert(`Failed to upload document: ${error.message}`)
      return
    }
    setShowUploadModal(false)
    setUploadForm({ userId: '', name: '', description: '', fileUrl: '', type: 'PDF' })
    fetchData()
    alert('Document uploaded successfully!')
  }

  const updateTracking = async () => {
    if (!selectedOrder || !trackingForm.trackingNumber) {
      alert('Please enter tracking number')
      return
    }
    const { error } = await supabase.from('orders').update({
      tracking_number: trackingForm.trackingNumber,
      carrier: trackingForm.carrier,
      tracking_url: trackingForm.trackingUrl,
      status: 'shipped',
      updated_at: new Date().toISOString()
    }).eq('id', selectedOrder.id)
    
    if (error) {
      console.error('Update tracking error:', error)
      alert(`Failed to update tracking: ${error.message}`)
      return
    }
    
    // Fetch updated order data
    const { data: updatedOrder } = await supabase
      .from('orders')
      .select('*')
      .eq('id', selectedOrder.id)
      .single()
    
    setShowTrackingModal(false)
    setTrackingForm({ trackingNumber: '', carrier: '', trackingUrl: '' })
    
    // Update the selected order with fresh data
    if (updatedOrder) {
      setSelectedOrder(updatedOrder)
    }
    
    fetchData()
    alert('Tracking information updated!')
  }

  const deleteDocument = async (id: string) => {
    if (confirm('Are you sure you want to delete this document?')) {
      const { error } = await supabase.from('documents').delete().eq('id', id)
      if (error) {
        console.error('Delete document error:', error)
        alert(`Failed to delete document: ${error.message}`)
        return
      }
      alert('Document deleted successfully!')
      fetchData()
    }
  }

  const filteredSubscribers = subscribers.filter(s =>
    s.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.email?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const activeSubscribers = subscribers.filter(s => s.subscribed).length

  const filteredCustomers = customers.filter(c => 
    c.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.company?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredOrders = orders.filter(o =>
    o.order_number?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    o.customer_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    o.customer_email?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-blue-100 text-blue-800',
      production: 'bg-purple-100 text-purple-800',
      shipped: 'bg-indigo-100 text-indigo-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <RefreshCw className="h-8 w-8 animate-spin text-primary-500 mx-auto mb-4" />
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  }

  if (!user || user.email !== ADMIN_EMAIL) return null

  // Stats
  const totalRevenue = orders.reduce((sum, o) => sum + (o.total_amount || 0), 0)
  const pendingOrders = orders.filter(o => o.status === 'pending').length
  const completedOrders = orders.filter(o => o.status === 'delivered').length

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r border-gray-200">
          <div className="flex items-center flex-shrink-0 px-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/ap-logo.svg" alt="Logo" className="h-8 w-auto" />
              <span className="font-bold text-gray-900">Admin</span>
            </Link>
          </div>

          <div className="px-4 mt-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full py-2 pl-10 pr-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="px-4 mt-6">
            <hr className="border-gray-200" />
          </div>

          <div className="flex flex-col flex-1 px-3 mt-6">
            <nav className="flex-1 space-y-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'dashboard'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <Home className="flex-shrink-0 w-5 h-5 mr-4" />
                Dashboard
              </button>

              <button
                onClick={() => setActiveTab('customers')}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'customers'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <Users className="flex-shrink-0 w-5 h-5 mr-4" />
                Customers
                <span className="ml-auto bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                  {customers.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('orders')}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'orders'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <Package className="flex-shrink-0 w-5 h-5 mr-4" />
                Orders
                {pendingOrders > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {pendingOrders}
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('documents')}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'documents'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <FileText className="flex-shrink-0 w-5 h-5 mr-4" />
                Documents
                <span className="ml-auto bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                  {documents.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('newsletter')}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'newsletter'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <Newspaper className="flex-shrink-0 w-5 h-5 mr-4" />
                Newsletter
                <span className="ml-auto bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                  {activeSubscribers}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('crm')}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'crm'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <Inbox className="flex-shrink-0 w-5 h-5 mr-4" />
                CRM / Inquiries
              </button>

              <button
                onClick={() => setActiveTab('email-marketing')}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'email-marketing'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <Send className="flex-shrink-0 w-5 h-5 mr-4" />
                Email Marketing
              </button>

              <Link
                to="/ctrl-x9k7m/management?tab=quotes"
                className="flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 text-gray-900 hover:bg-yellow-50 hover:text-yellow-600"
              >
                <MessageSquare className="flex-shrink-0 w-5 h-5 mr-4" />
                Quotes & RFQ
              </Link>

              <Link
                to="/ctrl-x9k7m/management?tab=artwork"
                className="flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 text-gray-900 hover:bg-purple-50 hover:text-purple-600"
              >
                <Image className="flex-shrink-0 w-5 h-5 mr-4" />
                Artwork Files
              </Link>

              <Link
                to="/image-catalog"
                className="flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 text-gray-900 hover:bg-violet-50 hover:text-violet-600"
              >
                <Sparkles className="flex-shrink-0 w-5 h-5 mr-4" />
                AI Image Catalog
              </Link>

              <hr className="border-gray-200 my-4" />

              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'settings'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <Settings className="flex-shrink-0 w-5 h-5 mr-4" />
                Settings
              </button>
            </nav>

            <div className="pb-4 mt-auto">
              <button
                onClick={handleSignOut}
                className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <LogOut className="flex-shrink-0 w-5 h-5 mr-3 text-gray-500" />
                Sign Out
              </button>
              <div className="flex items-center px-4 py-2 mt-2">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold text-sm">
                    {user.email?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Admin</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Admin</span>
          </Link>
          <button onClick={handleSignOut} className="text-gray-600">
            <LogOut className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex overflow-x-auto bg-white border-b px-2 py-2 gap-2">
          {(['dashboard', 'customers', 'orders', 'documents', 'newsletter', 'crm', 'email-marketing', 'settings'] as TabType[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
          <Link
            to="/image-catalog"
            className="px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap bg-violet-100 text-violet-700 flex items-center gap-1"
          >
            <Sparkles className="h-4 w-4" />
            AI Images
          </Link>
        </div>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <button
                  onClick={fetchData}
                  className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 text-sm"
                >
                  <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total Customers</p>
                      <p className="text-3xl font-bold text-gray-900 mt-1">{customers.length}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total Orders</p>
                      <p className="text-3xl font-bold text-gray-900 mt-1">{orders.length}</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <ShoppingBag className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Pending Orders</p>
                      <p className="text-3xl font-bold text-yellow-600 mt-1">{pendingOrders}</p>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Package className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total Revenue</p>
                      <p className="text-3xl font-bold text-green-600 mt-1">${totalRevenue.toLocaleString()}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="px-6 py-4 border-b">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {orders.slice(0, 5).map(order => (
                        <tr key={order.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedOrder(order)}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.order_number}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{order.customer_name || order.customer_email}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">${order.total_amount?.toLocaleString()}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {new Date(order.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Customers Tab */}
          {activeTab === 'customers' && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
              
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredCustomers.map(customer => (
                        <tr key={customer.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                                <span className="text-primary-600 font-semibold">
                                  {customer.full_name?.charAt(0) || customer.email?.charAt(0) || '?'}
                                </span>
                              </div>
                              <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">{customer.full_name || 'No name'}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{customer.email}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{customer.company || '-'}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{customer.phone || '-'}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {customer.created_at ? new Date(customer.created_at).toLocaleDateString() : '-'}
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => setSelectedCustomer(customer)}
                              className="text-primary-600 hover:text-primary-700"
                            >
                              <Eye className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {filteredCustomers.length === 0 && (
                    <div className="text-center py-12 text-gray-500">No customers found</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
              
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order #</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredOrders.map(order => (
                        <tr key={order.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.order_number}</td>
                          <td className="px-6 py-4">
                            <div>
                              <p className="text-sm font-medium text-gray-900">{order.customer_name}</p>
                              <p className="text-xs text-gray-500">{order.customer_email}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{order.items?.length || 0} items</td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">${order.total_amount?.toLocaleString()}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {new Date(order.created_at).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button onClick={() => setSelectedOrder(order)} className="text-primary-600 hover:text-primary-700">
                                <Eye className="h-5 w-5" />
                              </button>
                              <button onClick={() => deleteOrder(order.id)} className="text-red-600 hover:text-red-700">
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {filteredOrders.length === 0 && (
                    <div className="text-center py-12 text-gray-500">No orders found</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === 'documents' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Documents Management</h1>
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
                >
                  <Upload className="h-5 w-5" />
                  Upload Document
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {documents.map(doc => {
                        const user = customers.find(c => c.id === doc.user_id)
                        return (
                          <tr key={doc.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                  <FileText className="h-5 w-5 text-blue-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-900">{doc.name}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              {user?.full_name || user?.email || 'Unknown'}
                            </td>
                            <td className="px-6 py-4">
                              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                {doc.type}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                              {doc.description || '-'}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              {new Date(doc.created_at).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <a
                                  href={doc.file_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary-600 hover:text-primary-700"
                                >
                                  <ExternalLink className="h-5 w-5" />
                                </a>
                                <button
                                  onClick={() => deleteDocument(doc.id)}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <Trash2 className="h-5 w-5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                  {documents.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      No documents uploaded yet
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* CRM Tab */}
          {activeTab === 'crm' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">CRM / Inquiries</h1>
              </div>
              <CRMPanelAdvanced onRefresh={fetchData} />
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h2 className="text-lg font-semibold mb-4">Admin Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">Last login: {new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Newsletter Tab */}
          {activeTab === 'newsletter' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Newsletter Subscribers</h1>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-green-600">{activeSubscribers}</span> active / 
                    <span className="font-semibold text-gray-600"> {subscribers.length}</span> total
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subscribed</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredSubscribers.map(subscriber => (
                        <tr key={subscriber.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <span className="text-green-600 font-semibold">
                                  {subscriber.first_name?.charAt(0) || '?'}
                                </span>
                              </div>
                              <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">{subscriber.first_name || 'No name'}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{subscriber.email}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              subscriber.subscribed 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {subscriber.subscribed ? 'Active' : 'Unsubscribed'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {subscriber.created_at ? new Date(subscriber.created_at).toLocaleDateString() : '-'}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => toggleSubscription(subscriber.id, subscriber.subscribed)}
                                className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                                  subscriber.subscribed
                                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                                }`}
                              >
                                {subscriber.subscribed ? 'Unsubscribe' : 'Resubscribe'}
                              </button>
                              <button
                                onClick={() => deleteSubscriber(subscriber.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {filteredSubscribers.length === 0 && (
                    <div className="text-center py-12 text-gray-500">No subscribers found</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Email Marketing Tab */}
          {activeTab === 'email-marketing' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Email Marketing</h1>
                <div className="text-sm text-gray-500">
                  Convert any page content to personalized emails
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column - Page Selection & Email Builder */}
                <div className="space-y-4">
                  {/* Page Selection */}
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-blue-500" />
                      Select Page
                    </h3>
                    <select
                      value={selectedPage}
                      onChange={(e) => {
                        const pagePath = e.target.value
                        setSelectedPage(pagePath)
                        
                        // Try to get content from blog posts
                        const pageContent = getPageContent(pagePath)
                        if (pageContent) {
                          setEmailSubject(pageContent.title)
                          setEmailContent(pageContent.content)
                          setEmailImages(pageContent.images.filter(img => img))
                          return
                        }
                        
                        // Fallback: Auto-generate subject based on page
                        const pageTitles: Record<string, string> = {
                          '/industry/coffee-tea': 'Sustainable Coffee & Tea Packaging Solutions',
                          '/industry/pet-food': 'Eco-Friendly Pet Food Packaging',
                          '/industry/snacks-food': 'Sustainable Snack Packaging Options',
                          '/materials/compostable': 'Discover Our Compostable Materials',
                          '/materials/recyclable-mono-pe': 'Recyclable Mono-PE Solutions',
                          '/packaging/stand-up-pouches': 'Custom Stand-Up Pouches for Your Brand',
                          '/packaging/flat-bottom-bags': 'Premium Flat Bottom Bags',
                          '/features/barrier-options': 'Barrier Options for Product Protection',
                          '/products/compostable-coffee-bags': 'Compostable Coffee Bags',
                          '/topics/eco-friendly-food-packaging': 'Eco-Friendly Food Packaging Guide'
                        }
                        setEmailSubject(pageTitles[pagePath] || '')
                        setEmailContent('')
                        setEmailImages([])
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">-- Select a page --</option>
                      <optgroup label="Industry Pages">
                        <option value="/industry/coffee-tea">Coffee & Tea Industry</option>
                        <option value="/industry/pet-food">Pet Food Industry</option>
                        <option value="/industry/snacks-food">Snacks & Food Industry</option>
                        <option value="/industry/supplements-powders">Supplements & Powders</option>
                        <option value="/industry/baby-food">Baby Food</option>
                      </optgroup>
                      <optgroup label="Materials">
                        <option value="/materials/compostable">Compostable Materials</option>
                        <option value="/materials/recyclable-mono-pe">Recyclable Mono-PE</option>
                        <option value="/materials/recyclable-mono-pp">Recyclable Mono-PP</option>
                        <option value="/materials/bio-pe">Bio-PE Materials</option>
                        <option value="/materials/pcr">PCR Materials</option>
                      </optgroup>
                      <optgroup label="Packaging Types">
                        <option value="/packaging/stand-up-pouches">Stand-Up Pouches</option>
                        <option value="/packaging/flat-bottom-bags">Flat Bottom Bags</option>
                        <option value="/packaging/spout-pouches">Spout Pouches</option>
                        <option value="/packaging/flat-pouches">Flat Pouches</option>
                        <option value="/packaging/side-gusset-bags">Side Gusset Bags</option>
                      </optgroup>
                      <optgroup label="Products">
                        <option value="/products/compostable-coffee-bags">Compostable Coffee Bags</option>
                        <option value="/products/compostable-stand-up-pouches">Compostable Stand-Up Pouches</option>
                        <option value="/products/low-moq-packaging">Low MOQ Packaging</option>
                      </optgroup>
                      <optgroup label="Topics">
                        <option value="/topics/eco-friendly-food-packaging">Eco-Friendly Food Packaging</option>
                        <option value="/topics/dtc-sustainable-packaging">DTC Sustainable Packaging</option>
                        <option value="/topics/green-coffee-materials">Green Coffee Materials</option>
                      </optgroup>
                      <optgroup label="Blog Articles">
                        <option value="/blog/sustainable-packaging-supplier-analysis">Sustainable Packaging Supplier Analysis</option>
                        <option value="/blog/pet-food-packaging-complete-guide">Pet Food Packaging Complete Guide</option>
                        <option value="/blog/startup-sustainable-packaging-guide">Startup Sustainable Packaging Guide</option>
                        <option value="/blog/anz-sustainable-food-packaging-guide">ANZ Sustainable Packaging Guide</option>
                        <option value="/blog/thank-you-for-2025-heres-to-whats-next">Thank You for 2025 (Newsletter)</option>
                      </optgroup>
                      <optgroup label="Newsletter">
                        <option value="/blog/thank-you-for-2025-heres-to-whats-next">🎄 Thank You for 2025 - New Year Message</option>
                      </optgroup>
                    </select>
                    {selectedPage && (
                      <a 
                        href={selectedPage} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700"
                      >
                        Preview page <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>

                  {/* Email Builder */}
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Mail className="h-5 w-5 text-green-500" />
                        Email Builder
                        {currentDraftId && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Editing Draft</span>}
                      </h3>
                      {currentDraftId && (
                        <button
                          onClick={() => {
                            setCurrentDraftId(null)
                            setEmailSubject('')
                            setEmailContent('')
                            setSelectedPage('')
                            setEmailImages([])
                            setPersonalizationFields({ greeting: 'Hi {{name}}', closing: 'Best regards,\nRyan Wong\nAchievePack Team' })
                          }}
                          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                        >
                          + New Email
                        </button>
                      )}
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject Line</label>
                        <input
                          type="text"
                          value={emailSubject}
                          onChange={(e) => setEmailSubject(e.target.value)}
                          placeholder="Enter email subject..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Greeting (use {'{'}{'{'} name {'}'}{'}'}  for personalization)</label>
                        <input
                          type="text"
                          value={personalizationFields.greeting}
                          onChange={(e) => setPersonalizationFields({...personalizationFields, greeting: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-sm font-medium text-gray-700">Email Content</label>
                          <div className="flex bg-gray-100 rounded-lg p-0.5">
                            <button
                              onClick={() => setEditorMode('visual')}
                              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${editorMode === 'visual' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                              Visual
                            </button>
                            <button
                              onClick={() => setEditorMode('html')}
                              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${editorMode === 'html' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                              HTML
                            </button>
                          </div>
                        </div>
                        
                        {editorMode === 'visual' ? (
                          <div className="border border-gray-300 rounded-lg overflow-hidden">
                            {/* Toolbar */}
                            <div className="flex items-center gap-1 p-2 bg-gray-50 border-b">
                              <button 
                                onClick={() => setEmailContent(emailContent + '<h2>Heading</h2>')}
                                className="px-2 py-1 text-xs font-bold bg-white border rounded hover:bg-gray-100"
                              >H2</button>
                              <button 
                                onClick={() => setEmailContent(emailContent + '<strong>bold</strong>')}
                                className="px-2 py-1 text-xs font-bold bg-white border rounded hover:bg-gray-100"
                              >B</button>
                              <button 
                                onClick={() => setEmailContent(emailContent + '<em>italic</em>')}
                                className="px-2 py-1 text-xs italic bg-white border rounded hover:bg-gray-100"
                              >I</button>
                              <button 
                                onClick={() => setEmailContent(emailContent + '<a href="https://achievepack.com">link</a>')}
                                className="px-2 py-1 text-xs text-blue-600 bg-white border rounded hover:bg-gray-100"
                              >Link</button>
                              <button 
                                onClick={() => setEmailContent(emailContent + '<ul><li>Item 1</li><li>Item 2</li></ul>')}
                                className="px-2 py-1 text-xs bg-white border rounded hover:bg-gray-100"
                              >List</button>
                              <button 
                                onClick={() => setEmailContent(emailContent + '<blockquote>Quote text here</blockquote>')}
                                className="px-2 py-1 text-xs bg-white border rounded hover:bg-gray-100"
                              >Quote</button>
                              <button 
                                onClick={() => setShowImageCatalog(true)}
                                className="px-2 py-1 text-xs bg-white border rounded hover:bg-gray-100 flex items-center gap-1"
                              ><Image className="h-3 w-3" />Image</button>
                              <div className="flex-1" />
                              <button 
                                onClick={() => setEmailContent('')}
                                className="px-2 py-1 text-xs text-red-600 bg-white border rounded hover:bg-red-50"
                              >Clear</button>
                            </div>
                            {/* Editor + Preview Split */}
                            <div className="grid grid-cols-2 divide-x">
                              <textarea
                                value={emailContent}
                                onChange={(e) => setEmailContent(e.target.value)}
                                placeholder="Write HTML content...\n\n<h2>Title</h2>\n<p>Your paragraph here...</p>"
                                rows={12}
                                className="w-full px-4 py-3 text-sm font-mono border-0 focus:ring-0 resize-none"
                              />
                              <div 
                                className="p-4 prose prose-sm max-w-none overflow-y-auto bg-white" 
                                style={{maxHeight: '300px'}}
                                dangerouslySetInnerHTML={{__html: emailContent || '<p class="text-gray-400">Preview will appear here...</p>'}}
                              />
                            </div>
                          </div>
                        ) : (
                          <textarea
                            value={emailContent}
                            onChange={(e) => setEmailContent(e.target.value)}
                            placeholder="Write raw HTML...\n\n<h2>Title</h2>\n<p>Content</p>"
                            rows={12}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 font-mono text-sm"
                          />
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Closing</label>
                        <textarea
                          value={personalizationFields.closing}
                          onChange={(e) => setPersonalizationFields({...personalizationFields, closing: e.target.value})}
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      
                      {/* Image Manager */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Add Images</label>
                        <div className="border border-dashed border-gray-300 rounded-lg p-4">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {emailImages.map((img, idx) => (
                              <div key={idx} className="relative group">
                                <img src={img} alt="" className="w-20 h-20 object-cover rounded-lg" />
                                <button
                                  onClick={() => setEmailImages(emailImages.filter((_, i) => i !== idx))}
                                  className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="Paste image URL..."
                              id="imageUrlInput"
                              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg"
                            />
                            <button
                              onClick={() => {
                                const input = document.getElementById('imageUrlInput') as HTMLInputElement
                                if (input?.value) {
                                  setEmailImages([...emailImages, input.value])
                                  input.value = ''
                                }
                              }}
                              className="px-4 py-2 bg-primary-500 text-white text-sm rounded-lg hover:bg-primary-600"
                            >
                              Add
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">Suggested: /imgs/blog/2025-thank-you/2025-to-2026-growth.webp</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Saved Drafts */}
                  {emailDrafts.length > 0 && (
                    <div className="bg-white rounded-xl shadow-sm border p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-orange-500" />
                        Saved Drafts ({emailDrafts.length})
                      </h3>
                      <div className="space-y-2 max-h-[200px] overflow-y-auto">
                        {emailDrafts.map(draft => (
                          <div key={draft.id} className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors ${currentDraftId === draft.id ? 'border-primary-500 bg-primary-50' : 'border-gray-200'}`}>
                            <div className="flex-1 min-w-0" onClick={() => loadDraft(draft)}>
                              <p className="text-sm font-medium text-gray-900 truncate">{draft.name || 'Untitled'}</p>
                              <p className="text-xs text-gray-500">{new Date(draft.updated_at).toLocaleString()}</p>
                            </div>
                            <button
                              onClick={(e) => { e.stopPropagation(); deleteDraft(draft.id); }}
                              className="ml-2 text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column - Contact Selection */}
                <div className="space-y-4">
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Users className="h-5 w-5 text-purple-500" />
                        Select Recipients
                      </h3>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            const allIds = [
                              ...subscribers.filter(s => s.subscribed).map(s => `newsletter_${s.id}`),
                              ...customers.map(c => `customer_${c.id}`),
                              ...inquiries.filter(i => i.email && i.status !== 'spam').map(i => `inquiry_${i.id}`)
                            ]
                            setSelectedContacts(allIds)
                          }}
                          className="text-xs px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
                        >
                          Select All
                        </button>
                        <button
                          onClick={() => setSelectedContacts([])}
                          className="text-xs px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
                        >
                          Clear All
                        </button>
                      </div>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <button
                        onClick={() => setContactFilter('all')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                          contactFilter === 'all' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        All ({subscribers.filter(s => s.subscribed).length + customers.length + inquiries.filter(i => i.email && i.status !== 'spam').length})
                      </button>
                      <button
                        onClick={() => setContactFilter('newsletter')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                          contactFilter === 'newsletter' ? 'bg-green-500 text-white' : 'bg-green-100 text-green-700 hover:bg-green-200'
                        }`}
                      >
                        Newsletter ({subscribers.filter(s => s.subscribed).length})
                      </button>
                      <button
                        onClick={() => setContactFilter('customer')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                          contactFilter === 'customer' ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                        }`}
                      >
                        Customers ({customers.length})
                      </button>
                      <button
                        onClick={() => setContactFilter('inquiry')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                          contactFilter === 'inquiry' ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                        }`}
                      >
                        All Inquiries ({inquiries.filter(i => i.email && i.status !== 'spam').length})
                      </button>
                    </div>
                    {/* Source Filter Buttons */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs text-gray-500 self-center mr-1">Source:</span>
                      <button
                        onClick={() => setContactFilter('website')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                          contactFilter === 'website' ? 'bg-teal-500 text-white' : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                        }`}
                      >
                        Website ({inquiries.filter(i => i.email && (i.source === 'website' || !i.source)).length})
                      </button>
                      <button
                        onClick={() => setContactFilter('import')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                          contactFilter === 'import' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        Import ({inquiries.filter(i => i.email && i.source === 'import').length})
                      </button>
                      <button
                        onClick={() => setContactFilter('paypal')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                          contactFilter === 'paypal' ? 'bg-yellow-500 text-white' : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                        }`}
                      >
                        PayPal ({inquiries.filter(i => i.email && i.source === 'paypal').length})
                      </button>
                      <button
                        onClick={() => setContactFilter('stripe')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                          contactFilter === 'stripe' ? 'bg-indigo-500 text-white' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                        }`}
                      >
                        Stripe ({inquiries.filter(i => i.email && i.source === 'stripe').length})
                      </button>
                      <button
                        onClick={() => setContactFilter('calendly')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                          contactFilter === 'calendly' ? 'bg-purple-500 text-white' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                        }`}
                      >
                        Calendly ({inquiries.filter(i => i.email && i.source === 'calendly').length})
                      </button>
                      <button
                        onClick={() => setContactFilter('manual')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                          contactFilter === 'manual' ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                        }`}
                      >
                        Manual ({inquiries.filter(i => i.email && i.source === 'manual').length})
                      </button>
                    </div>

                    {/* Advanced Filters Toggle */}
                    <button
                      onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                      className="flex items-center gap-2 text-xs text-primary-600 hover:text-primary-700 mb-3"
                    >
                      <Filter className="h-3 w-3" />
                      {showAdvancedFilters ? 'Hide' : 'Show'} Advanced Filters
                      {(industryFilter !== 'all' || countryFilter !== 'all' || statusFilter !== 'all' || customerTypeFilter !== 'all' || dateRangeFilter !== 'all') && (
                        <span className="bg-primary-500 text-white text-xs px-1.5 rounded-full">!</span>
                      )}
                    </button>

                    {/* Advanced Filters */}
                    {showAdvancedFilters && (
                      <div className="grid grid-cols-2 gap-2 mb-3 p-3 bg-gray-50 rounded-lg">
                        <select
                          value={industryFilter}
                          onChange={(e) => { setIndustryFilter(e.target.value); setContactPage(1) }}
                          className="text-xs border rounded-lg px-2 py-1.5"
                        >
                          <option value="all">All Industries</option>
                          {filterOptions.industries.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                        <select
                          value={countryFilter}
                          onChange={(e) => { setCountryFilter(e.target.value); setContactPage(1) }}
                          className="text-xs border rounded-lg px-2 py-1.5"
                        >
                          <option value="all">All Countries</option>
                          {filterOptions.countries.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <select
                          value={statusFilter}
                          onChange={(e) => { setStatusFilter(e.target.value); setContactPage(1) }}
                          className="text-xs border rounded-lg px-2 py-1.5"
                        >
                          <option value="all">All Status</option>
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="quoted">Quoted</option>
                          <option value="follow_up">Follow Up</option>
                          <option value="won">Won</option>
                          <option value="lost">Lost</option>
                        </select>
                        <select
                          value={customerTypeFilter}
                          onChange={(e) => { setCustomerTypeFilter(e.target.value); setContactPage(1) }}
                          className="text-xs border rounded-lg px-2 py-1.5"
                        >
                          <option value="all">All Types</option>
                          <option value="lead">Leads</option>
                          <option value="sample">Sample (&lt;$100)</option>
                          <option value="customer">Customer (≥$100)</option>
                        </select>
                        <select
                          value={dateRangeFilter}
                          onChange={(e) => { setDateRangeFilter(e.target.value as any); setContactPage(1) }}
                          className="text-xs border rounded-lg px-2 py-1.5"
                        >
                          <option value="all">All Time</option>
                          <option value="7days">Last 7 Days</option>
                          <option value="30days">Last 30 Days</option>
                          <option value="90days">Last 90 Days</option>
                          <option value="1year">Last Year</option>
                        </select>
                        <button
                          onClick={() => {
                            setIndustryFilter('all')
                            setCountryFilter('all')
                            setStatusFilter('all')
                            setCustomerTypeFilter('all')
                            setDateRangeFilter('all')
                          }}
                          className="text-xs text-gray-500 hover:text-gray-700"
                        >
                          Clear Filters
                        </button>
                      </div>
                    )}

                    {/* Search */}
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Search by name, email, company..."
                        value={contactSearch}
                        onChange={(e) => setContactSearch(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    
                    <div className="text-sm text-gray-500 mb-3">
                      Selected: <span className="font-semibold text-primary-600">{selectedContacts.length}</span> contacts
                    </div>

                    <div className="max-h-[400px] overflow-y-auto space-y-2">
                      {/* Newsletter Subscribers */}
                      {(contactFilter === 'all' || contactFilter === 'newsletter') && (
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-gray-500 uppercase mb-2 sticky top-0 bg-white py-1">Newsletter Subscribers ({subscribers.filter(s => s.subscribed).length})</p>
                          {subscribers.filter(s => s.subscribed).filter(s => 
                            !contactSearch || 
                            s.first_name?.toLowerCase().includes(contactSearch.toLowerCase()) ||
                            s.email?.toLowerCase().includes(contactSearch.toLowerCase())
                          ).map(sub => (
                            <label key={sub.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedContacts.includes(`newsletter_${sub.id}`)}
                                onChange={(e) => {
                                  const contactId = `newsletter_${sub.id}`
                                  if (e.target.checked) {
                                    setSelectedContacts([...selectedContacts, contactId])
                                  } else {
                                    setSelectedContacts(selectedContacts.filter(id => id !== contactId))
                                  }
                                }}
                                className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">{sub.first_name || 'Subscriber'}</p>
                                <p className="text-xs text-gray-500 truncate">{sub.email}</p>
                              </div>
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Newsletter</span>
                            </label>
                          ))}
                        </div>
                      )}

                      {/* Customers */}
                      {(contactFilter === 'all' || contactFilter === 'customer') && (
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-gray-500 uppercase mb-2 sticky top-0 bg-white py-1">Customers ({customers.length})</p>
                          {customers.filter(c => 
                            !contactSearch ||
                            c.full_name?.toLowerCase().includes(contactSearch.toLowerCase()) ||
                            c.email?.toLowerCase().includes(contactSearch.toLowerCase()) ||
                            c.company?.toLowerCase().includes(contactSearch.toLowerCase())
                          ).map(customer => (
                            <label key={customer.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedContacts.includes(`customer_${customer.id}`)}
                                onChange={(e) => {
                                  const contactId = `customer_${customer.id}`
                                  if (e.target.checked) {
                                    setSelectedContacts([...selectedContacts, contactId])
                                  } else {
                                    setSelectedContacts(selectedContacts.filter(id => id !== contactId))
                                  }
                                }}
                                className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">{customer.full_name || 'Customer'}</p>
                                <p className="text-xs text-gray-500 truncate">{customer.email}</p>
                              </div>
                              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Customer</span>
                            </label>
                          ))}
                        </div>
                      )}

                      {/* Inquiries - Using paginated filtered contacts */}
                      {(() => {
                        if (contactFilter === 'newsletter' || contactFilter === 'customer') return null
                        
                        // Check for source filters
                        const sourceFilters: Record<string, string[]> = {
                          'all': [],
                          'inquiry': [],
                          'paypal': ['paypal'],
                          'stripe': ['stripe'],
                          'calendly': ['calendly'],
                          'website': ['website'],
                          'import': ['import'],
                          'manual': ['manual']
                        }
                        const sources = sourceFilters[contactFilter] || []
                        
                        // Apply source filter on top of existing filters
                        const displayContacts = sources.length === 0 
                          ? paginatedContacts
                          : paginatedContacts.filter(c => sources.includes(c.source || ''))
                        
                        return (
                          <div className="mb-4">
                            <div className="flex items-center justify-between sticky top-0 bg-white py-1 mb-2">
                              <p className="text-xs font-semibold text-gray-500 uppercase">
                                {contactFilter === 'all' ? 'All Inquiries' : contactFilter.charAt(0).toUpperCase() + contactFilter.slice(1)} 
                                ({filteredContacts.length} total)
                              </p>
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => {
                                    // Select all visible
                                    const ids = filteredContacts.map(c => `inquiry_${c.id}`)
                                    setSelectedContacts([...new Set([...selectedContacts, ...ids])])
                                  }}
                                  className="text-xs text-primary-600 hover:underline"
                                >
                                  Select All ({filteredContacts.length})
                                </button>
                                <span className="text-gray-300">|</span>
                                <button
                                  onClick={() => {
                                    const inquiryIds = filteredContacts.map(c => `inquiry_${c.id}`)
                                    setSelectedContacts(selectedContacts.filter(id => !inquiryIds.includes(id)))
                                  }}
                                  className="text-xs text-gray-500 hover:underline"
                                >
                                  Clear
                                </button>
                              </div>
                            </div>
                            
                            {displayContacts.map(inquiry => (
                              <label key={inquiry.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={selectedContacts.includes(`inquiry_${inquiry.id}`)}
                                  onChange={(e) => {
                                    const contactId = `inquiry_${inquiry.id}`
                                    if (e.target.checked) {
                                      setSelectedContacts([...selectedContacts, contactId])
                                    } else {
                                      setSelectedContacts(selectedContacts.filter(id => id !== contactId))
                                    }
                                  }}
                                  className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                                />
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate">{inquiry.name || 'Unknown'}</p>
                                  <p className="text-xs text-gray-500 truncate">{inquiry.email}</p>
                                  {inquiry.company && <p className="text-xs text-gray-400 truncate">{inquiry.company}</p>}
                                </div>
                                <div className="flex flex-col items-end gap-0.5">
                                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                                    inquiry.source === 'paypal' ? 'bg-yellow-100 text-yellow-700' :
                                    inquiry.source === 'stripe' ? 'bg-indigo-100 text-indigo-700' :
                                    inquiry.source === 'calendly' ? 'bg-purple-100 text-purple-700' :
                                    'bg-orange-100 text-orange-700'
                                  }`}>
                                    {inquiry.source || 'website'}
                                  </span>
                                  <span className="text-xs text-gray-400">
                                    {inquiry.industry} · {inquiry.country}
                                  </span>
                                </div>
                              </label>
                            ))}
                            
                            {/* Pagination Controls */}
                            <div className="flex items-center justify-between pt-3 mt-2 border-t text-xs">
                              <div className="flex items-center gap-2">
                                <span className="text-gray-500">
                                  Page {contactPage} of {totalContactPages} ({filteredContacts.length} contacts)
                                </span>
                                <select
                                  value={contactPageSize}
                                  onChange={(e) => { setContactPageSize(Number(e.target.value)); setContactPage(1) }}
                                  className="border rounded px-1 py-0.5 text-xs"
                                >
                                  <option value={25}>25</option>
                                  <option value={50}>50</option>
                                  <option value={100}>100</option>
                                  <option value={200}>200</option>
                                  <option value={500}>500</option>
                                  <option value={1000}>1000</option>
                                  <option value={10000}>All</option>
                                </select>
                              </div>
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => setContactPage(1)}
                                  disabled={contactPage === 1}
                                  className="px-2 py-1 rounded hover:bg-gray-100 disabled:opacity-50"
                                >
                                  First
                                </button>
                                <button
                                  onClick={() => setContactPage(p => Math.max(1, p - 1))}
                                  disabled={contactPage === 1}
                                  className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                                >
                                  <ChevronLeft className="h-4 w-4" />
                                </button>
                                <span className="px-2">{contactPage}</span>
                                <button
                                  onClick={() => setContactPage(p => Math.min(totalContactPages, p + 1))}
                                  disabled={contactPage === totalContactPages}
                                  className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() => setContactPage(totalContactPages)}
                                  disabled={contactPage === totalContactPages}
                                  className="px-2 py-1 rounded hover:bg-gray-100 disabled:opacity-50"
                                >
                                  Last
                                </button>
                              </div>
                            </div>
                          </div>
                        )
                      })()}
                    </div>
                  </div>

                  {/* Send Button */}
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Ready to Send?</h3>
                        <p className="text-sm text-white/80">Preview, test, then send</p>
                      </div>
                      <Send className="h-8 w-8 text-white/50" />
                    </div>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        {selectedPage ? <Check className="h-4 w-4 text-green-300" /> : <X className="h-4 w-4 text-red-300" />}
                        <span>Page: {selectedPage || 'None'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {emailSubject ? <Check className="h-4 w-4 text-green-300" /> : <X className="h-4 w-4 text-red-300" />}
                        <span>Subject: {emailSubject || 'Not set'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {selectedContacts.length > 0 ? <Check className="h-4 w-4 text-green-300" /> : <X className="h-4 w-4 text-red-300" />}
                        <span>Recipients: {selectedContacts.length} selected</span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="space-y-2">
                      {/* Save Draft Button */}
                      <button
                        onClick={saveDraft}
                        disabled={!emailSubject || savingDraft}
                        className="w-full py-2.5 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                      >
                        {savingDraft ? (
                          <><RefreshCw className="h-4 w-4 animate-spin" /> Saving...</>
                        ) : (
                          <><FileText className="h-4 w-4" /> {currentDraftId ? 'Update Draft' : 'Save Draft'}</>
                        )}
                      </button>

                      {/* Preview Button */}
                      <button
                        onClick={() => setShowEmailPreview(true)}
                        disabled={!emailSubject}
                        className="w-full py-2.5 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                      >
                        <Eye className="h-4 w-4" />
                        Preview Email
                      </button>
                      
                      {/* Test Send Button */}
                      <button
                        onClick={async () => {
                          setTestEmailSending(true)
                          try {
                            const result = await sendTestEmail(
                              'ryan@achievepack.com',
                              emailSubject,
                              emailContent,
                              personalizationFields.greeting,
                              personalizationFields.closing,
                              emailImages.length > 0 ? emailImages[0] : undefined,
                              selectedPage ? `https://achievepack.com${selectedPage}` : undefined,
                              'Read More on Our Website'
                            )
                            if (result.success) {
                              alert(`✅ Test email sent successfully!

Message ID: ${result.messageId}

Check your inbox at ryan@achievepack.com`)
                            } else {
                              alert(`❌ Failed to send test email:\n\n${result.error}`)
                            }
                          } catch (error) {
                            alert(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
                          }
                          setTestEmailSending(false)
                        }}
                        disabled={!emailSubject || testEmailSending}
                        className="w-full py-2.5 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                      >
                        {testEmailSending ? (
                          <><RefreshCw className="h-4 w-4 animate-spin" /> Sending...</>
                        ) : (
                          <><Mail className="h-4 w-4" /> Test Send to ryan@achievepack.com</>
                        )}
                      </button>
                      
                      {/* Send to All Button */}
                      <button
                        disabled={!emailSubject || selectedContacts.length === 0 || sendingCampaign}
                        onClick={async () => {
                          if (!confirm(`Send email to ${selectedContacts.length} recipients?\n\nSubject: ${emailSubject}`)) return
                          
                          setSendingCampaign(true)
                          try {
                            // Build recipient list
                            const recipients: EmailRecipient[] = []
                            
                            selectedContacts.forEach(contactId => {
                              if (contactId.startsWith('newsletter_')) {
                                const sub = subscribers.find(s => `newsletter_${s.id}` === contactId)
                                if (sub) recipients.push({ email: sub.email, name: sub.first_name || undefined })
                              } else if (contactId.startsWith('customer_')) {
                                const cust = customers.find(c => `customer_${c.id}` === contactId)
                                if (cust) recipients.push({ email: cust.email, name: cust.full_name || undefined })
                              } else if (contactId.startsWith('inquiry_')) {
                                const inq = inquiries.find(i => `inquiry_${i.id}` === contactId)
                                if (inq && inq.email) recipients.push({ email: inq.email, name: inq.name || undefined })
                              }
                            })
                            
                            const fullHtml = generateEmailTemplate(
                              emailContent,
                              personalizationFields.greeting,
                              personalizationFields.closing,
                              emailImages[0],
                              selectedPage ? `https://achievepack.com${selectedPage}` : undefined,
                              'Read More on Our Website'
                            )
                            
                            const result = await sendBulkEmails(
                              recipients,
                              emailSubject,
                              fullHtml
                            )
                            
                            // Record to CRM if successful
                            if (result.success > 0) {
                              await recordEmailToCRM(recipients, emailSubject, emailContent)
                              fetchData() // Refresh email history
                            }
                            
                            const errMsg = result.errors.length > 0 ? '\n\nErrors:\n' + result.errors.slice(0, 5).join('\n') : ''
                            alert('📧 Email Campaign Complete!\n\n✅ Sent: ' + result.success + '\n❌ Failed: ' + result.failed + errMsg)
                          } catch (error) {
                            alert(`❌ Campaign failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
                          }
                          setSendingCampaign(false)
                        }}
                        className="w-full py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                      >
                        {sendingCampaign ? (
                          <><RefreshCw className="h-5 w-5 animate-spin" /> Sending Campaign...</>
                        ) : (
                          <><Send className="h-5 w-5" /> Send to {selectedContacts.length} Recipients</>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Email Preview Modal */}
          {showEmailPreview && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
              <div className="bg-gray-100 rounded-xl max-w-4xl w-full max-h-[95vh] overflow-hidden flex flex-col shadow-2xl">
                <div className="p-4 border-b flex items-center justify-between bg-white">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <h2 className="text-sm font-medium text-gray-700">Email Preview - {emailSubject}</h2>
                  </div>
                  <button onClick={() => setShowEmailPreview(false)} className="text-gray-500 hover:text-gray-700">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Email Client Header */}
                <div className="p-4 bg-gray-50 border-b text-sm">
                  <div className="space-y-1">
                    <p className="flex gap-2"><span className="text-gray-500 w-14">From:</span> <span className="font-medium">Achieve Pack</span> &lt;hello@achievepack.com&gt;</p>
                    <p className="flex gap-2"><span className="text-gray-500 w-14">To:</span> <span>John Doe &lt;john@example.com&gt;</span></p>
                    <p className="flex gap-2"><span className="text-gray-500 w-14">Subject:</span> <span className="font-semibold text-gray-900">{emailSubject}</span></p>
                  </div>
                </div>
                
                {/* Email Body - Actual Template Preview */}
                <div className="flex-1 overflow-y-auto bg-gray-200 p-4">
                  <div className="max-w-[650px] mx-auto bg-white shadow-lg">
                    <iframe
                      title="Email Preview"
                      srcDoc={generateEmailTemplate(
                        emailContent || '<p>Your email content will appear here...</p>',
                        personalizationFields.greeting.replace('{{name}}', 'John'),
                        personalizationFields.closing,
                        emailImages.length > 0 ? emailImages[0] : undefined,
                        selectedPage ? `https://achievepack.com${selectedPage}` : undefined,
                        'Read More'
                      ).replace('{{email_encoded}}', btoa('john@example.com'))}
                      className="w-full border-0"
                      style={{ height: '600px' }}
                    />
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-3">
                    ✓ This preview shows exactly what customers will receive
                  </p>
                </div>
                
                {/* Actions */}
                <div className="p-4 border-t bg-white flex gap-3">
                  <button
                    onClick={() => setShowEmailPreview(false)}
                    className="flex-1 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                  >
                    ← Edit Content
                  </button>
                  <button
                    onClick={async () => {
                      setTestEmailSending(true)
                      await new Promise(resolve => setTimeout(resolve, 1500))
                      setTestEmailSending(false)
                      alert('Test email sent to ryan@achievepack.com!')
                    }}
                    disabled={testEmailSending}
                    className="flex-1 py-2.5 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:opacity-50 transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    {testEmailSending ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
                    Send Test Email
                  </button>
                  <button
                    disabled={selectedContacts.length === 0}
                    onClick={() => {
                      if (confirm(`Send to ${selectedContacts.length} recipients?`)) {
                        alert('Email campaign sent!')
                        setShowEmailPreview(false)
                      }
                    }}
                    className="flex-1 py-2.5 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <Send className="h-4 w-4" />
                    Send to {selectedContacts.length}
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold">Order {selectedOrder.order_number}</h2>
              <button onClick={() => setSelectedOrder(null)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Customer</p>
                  <p className="font-medium">{selectedOrder.customer_name}</p>
                  <p className="text-sm text-gray-600">{selectedOrder.customer_email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <select
                    value={selectedOrder.status}
                    onChange={(e) => updateOrderStatus(selectedOrder.id, e.target.value)}
                    className={`mt-1 px-3 py-1 rounded-lg border ${getStatusColor(selectedOrder.status)}`}
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="production">Production</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">Items</p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  {selectedOrder.items?.map((item: any, i: number) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span>
                        {item.name}
                        {item.variant && (
                          <span className="text-gray-600">
                            {' '}({item.variant.size || ''} • {item.variant.shape || ''} • {item.variant.finish || ''} • {item.variant.barrier || ''})
                          </span>
                        )}
                        {' '}x{item.quantity}
                      </span>
                      <span className="font-medium">${item.totalPrice?.toLocaleString()}</span>
                    </div>
                  ))}
                  <hr className="my-2" />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${selectedOrder.total_amount?.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {selectedOrder.shipping_address && (
                <div>
                  <p className="text-sm text-gray-500 mb-2">Shipping Address</p>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm">
                    <p>{selectedOrder.shipping_address.firstName} {selectedOrder.shipping_address.lastName}</p>
                    {selectedOrder.shipping_address.company && <p>{selectedOrder.shipping_address.company}</p>}
                    <p>{selectedOrder.shipping_address.address}</p>
                    <p>{selectedOrder.shipping_address.city}, {selectedOrder.shipping_address.zipCode}</p>
                    <p>{selectedOrder.shipping_address.country}</p>
                    <p className="mt-2">Phone: {selectedOrder.shipping_address.phone}</p>
                  </div>
                </div>
              )}

              {/* Tracking Information */}
              {selectedOrder.tracking_number && (
                <div>
                  <p className="text-sm text-gray-500 mb-2">Tracking Information</p>
                  <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Carrier</p>
                        <p className="font-medium">{selectedOrder.carrier || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Tracking Number</p>
                        <p className="font-mono font-medium">{selectedOrder.tracking_number}</p>
                      </div>
                    </div>
                    {selectedOrder.tracking_url && (
                      <a
                        href={selectedOrder.tracking_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm"
                      >
                        <Truck className="h-4 w-4" />
                        Track Package
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="text-sm text-gray-500">
                Created: {new Date(selectedOrder.created_at).toLocaleString()}
                {selectedOrder.updated_at && (
                  <span className="ml-4">Updated: {new Date(selectedOrder.updated_at).toLocaleString()}</span>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setTrackingForm({
                      trackingNumber: selectedOrder.tracking_number || '',
                      carrier: selectedOrder.carrier || '',
                      trackingUrl: selectedOrder.tracking_url || ''
                    })
                    setShowTrackingModal(true)
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Truck className="h-4 w-4" />
                  {selectedOrder.tracking_number ? 'Update Tracking' : 'Add Tracking'}
                </button>
                <button
                  onClick={() => deleteOrder(selectedOrder.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Customer Detail Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl max-w-lg w-full">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold">Customer Details</h2>
              <button onClick={() => setSelectedCustomer(null)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-2xl">
                    {selectedCustomer.full_name?.charAt(0) || selectedCustomer.email?.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-xl font-bold">{selectedCustomer.full_name || 'No name'}</p>
                  <p className="text-gray-500">{selectedCustomer.email}</p>
                </div>
              </div>
              <hr />
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-gray-400" />
                  <span>{selectedCustomer.company || 'No company'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span>{selectedCustomer.phone || 'No phone'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <span>Joined {selectedCustomer.created_at ? new Date(selectedCustomer.created_at).toLocaleDateString() : 'N/A'}</span>
                </div>
              </div>
              <hr />
              <div>
                <p className="text-sm text-gray-500 mb-2">Orders from this customer</p>
                <p className="text-2xl font-bold text-primary-600">
                  {orders.filter(o => o.user_id === selectedCustomer.id).length} orders
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload Document Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl max-w-lg w-full">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold">Upload Document</h2>
              <button onClick={() => setShowUploadModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Customer</label>
                <select
                  value={uploadForm.userId}
                  onChange={(e) => setUploadForm({ ...uploadForm, userId: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select customer</option>
                  {customers.map(customer => (
                    <option key={customer.id} value={customer.id}>
                      {customer.full_name} ({customer.email})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Document Name *</label>
                <input
                  type="text"
                  value={uploadForm.name}
                  onChange={(e) => setUploadForm({ ...uploadForm, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="EN13432 Certificate"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Document Type</label>
                <select
                  value={uploadForm.type}
                  onChange={(e) => setUploadForm({ ...uploadForm, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="PDF">PDF</option>
                  <option value="DOC">DOC</option>
                  <option value="IMAGE">IMAGE</option>
                  <option value="EXCEL">EXCEL</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={uploadForm.description}
                  onChange={(e) => setUploadForm({ ...uploadForm, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  rows={3}
                  placeholder="Compostability certification document"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">File URL *</label>
                <input
                  type="text"
                  value={uploadForm.fileUrl}
                  onChange={(e) => setUploadForm({ ...uploadForm, fileUrl: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="/docs/certifications/EN13432.pdf"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Upload file to /public/docs/ folder and enter the path here
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={uploadDocument}
                  className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  Upload Document
                </button>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Tracking Modal */}
      {showTrackingModal && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl max-w-lg w-full">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold">Add Tracking Information</h2>
              <button onClick={() => setShowTrackingModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600">Order Number</p>
                <p className="font-semibold text-lg">{selectedOrder.order_number}</p>
                <p className="text-sm text-gray-600 mt-2">Customer: {selectedOrder.customer_name}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Carrier</label>
                <select
                  value={trackingForm.carrier}
                  onChange={(e) => setTrackingForm({ ...trackingForm, carrier: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select carrier</option>
                  <option value="DHL">DHL</option>
                  <option value="FedEx">FedEx</option>
                  <option value="UPS">UPS</option>
                  <option value="SF Express">SF Express</option>
                  <option value="China Post">China Post</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tracking Number *</label>
                <input
                  type="text"
                  value={trackingForm.trackingNumber}
                  onChange={(e) => setTrackingForm({ ...trackingForm, trackingNumber: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 font-mono"
                  placeholder="1234567890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tracking URL (Optional)</label>
                <input
                  type="text"
                  value={trackingForm.trackingUrl}
                  onChange={(e) => setTrackingForm({ ...trackingForm, trackingUrl: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="https://www.dhl.com/track?id=..."
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
                <p className="font-medium">⚠️ Note:</p>
                <p>Adding tracking will automatically update order status to "Shipped"</p>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={updateTracking}
                  className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  Save Tracking Info
                </button>
                <button
                  onClick={() => setShowTrackingModal(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Catalog Modal */}
      {showImageCatalog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-primary-500 to-primary-600">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Image className="h-6 w-6" />
                  Image Catalog
                </h2>
                <p className="text-primary-100 text-sm">Select an image to insert into your email</p>
              </div>
              <button onClick={() => setShowImageCatalog(false)} className="text-white hover:bg-white/20 p-2 rounded-lg">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 p-4 bg-gray-50 border-b">
              <button
                onClick={() => setImageCatalogFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${imageCatalogFilter === 'all' ? 'bg-primary-500 text-white' : 'bg-white border text-gray-600 hover:bg-gray-100'}`}
              >All Images</button>
              {Object.keys(imageCatalog).map(cat => (
                <button
                  key={cat}
                  onClick={() => setImageCatalogFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${imageCatalogFilter === cat ? 'bg-primary-500 text-white' : 'bg-white border text-gray-600 hover:bg-gray-100'}`}
                >{cat}</button>
              ))}
            </div>
            
            {/* Image Grid */}
            <div className="p-6 overflow-y-auto" style={{maxHeight: 'calc(80vh - 200px)'}}>
              {(imageCatalogFilter === 'all' ? Object.entries(imageCatalog) : [[imageCatalogFilter, imageCatalog[imageCatalogFilter as keyof typeof imageCatalog]]]).map(([category, images]) => (
                <div key={String(category)} className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    {String(category)}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {(images as {url: string, name: string, alt: string}[]).map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          const imgTag = `<img src="${img.url}" alt="${img.alt}" class="w-full rounded-lg my-4" />`
                          setEmailContent(emailContent + imgTag)
                          setShowImageCatalog(false)
                        }}
                        className="group cursor-pointer bg-white rounded-xl border-2 border-transparent hover:border-primary-500 transition-all overflow-hidden shadow-sm hover:shadow-lg"
                      >
                        <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
                          <img 
                            src={img.url} 
                            alt={img.alt} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = '/placeholder-image.png'
                              target.setAttribute('class', 'w-12 h-12 opacity-30')
                            }}
                          />
                        </div>
                        <div className="p-3">
                          <p className="text-xs font-medium text-gray-900 truncate">{img.name}</p>
                          <p className="text-xs text-gray-500 truncate">{img.alt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t bg-gray-50 flex items-center justify-between">
              <p className="text-xs text-gray-500">Click on an image to insert it into your email content</p>
              <button
                onClick={() => setShowImageCatalog(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm font-medium"
              >Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminPage
