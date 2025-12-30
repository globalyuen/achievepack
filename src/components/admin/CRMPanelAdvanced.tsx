import { useState, useEffect, useMemo, useCallback } from 'react'
import { supabase, CRMInquiry, CRMActivity } from '../../lib/supabase'
import { 
  Search, Filter, Mail, Phone, Calendar, Clock, Globe, Building2,
  User, Package, MessageSquare, Tag, ChevronDown, ChevronUp, ChevronLeft, ChevronRight,
  Send, Plus, Edit, Trash2, ExternalLink, Upload, Download, History,
  AlertCircle, CheckCircle, XCircle, Star, RefreshCw, Sparkles, Instagram, Facebook,
  BarChart3, MapPin, Factory, Users, CheckSquare, Square, X, Wand2, Copy, Eye
} from 'lucide-react'

interface CRMPanelProps {
  onRefresh?: () => void
}

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-100 text-blue-800',
  contacted: 'bg-yellow-100 text-yellow-800',
  quoted: 'bg-purple-100 text-purple-800',
  follow_up: 'bg-orange-100 text-orange-800',
  won: 'bg-green-100 text-green-800',
  lost: 'bg-red-100 text-red-800',
  spam: 'bg-gray-100 text-gray-500'
}

const PRIORITY_COLORS: Record<string, string> = {
  low: 'text-gray-400',
  medium: 'text-yellow-500',
  high: 'text-red-500'
}

const STATUS_OPTIONS = ['new', 'contacted', 'quoted', 'follow_up', 'won', 'lost', 'spam']

// Phone country code mapping
const COUNTRY_CODES: Record<string, string> = {
  '+1': 'USA/Canada', '+44': 'UK', '+61': 'Australia', '+64': 'New Zealand',
  '+49': 'Germany', '+33': 'France', '+34': 'Spain', '+39': 'Italy',
  '+31': 'Netherlands', '+32': 'Belgium', '+41': 'Switzerland',
  '+86': 'China', '+852': 'Hong Kong', '+886': 'Taiwan', '+81': 'Japan', '+82': 'Korea',
  '+65': 'Singapore', '+60': 'Malaysia', '+62': 'Indonesia', '+63': 'Philippines', '+66': 'Thailand',
  '+91': 'India', '+92': 'Pakistan', '+971': 'UAE', '+966': 'Saudi Arabia',
  '+52': 'Mexico', '+55': 'Brazil', '+54': 'Argentina', '+56': 'Chile', '+57': 'Colombia',
  '+27': 'South Africa', '+234': 'Nigeria', '+254': 'Kenya',
  '+351': 'Portugal', '+353': 'Ireland', '+358': 'Finland', '+46': 'Sweden', '+47': 'Norway'
}

// Industry detection keywords
const INDUSTRY_KEYWORDS: Record<string, string[]> = {
  'Coffee & Tea': ['coffee', 'tea', 'roast', 'brew', 'cafe', 'espresso', 'chai', 'matcha'],
  'Food & Snacks': ['food', 'snack', 'chip', 'cookie', 'candy', 'chocolate', 'nuts', 'granola', 'protein', 'bar'],
  'Pet Food': ['pet', 'dog', 'cat', 'treat', 'kibble', 'animal'],
  'Cannabis/CBD': ['cannabis', 'cbd', 'hemp', 'weed', 'marijuana', 'thc', 'dispensary'],
  'Supplements': ['supplement', 'vitamin', 'protein', 'powder', 'health', 'wellness', 'nutrition'],
  'Cosmetics': ['cosmetic', 'beauty', 'skincare', 'makeup', 'cream', 'lotion', 'serum'],
  'Baby Products': ['baby', 'infant', 'puree', 'toddler', 'child'],
  'Sauce & Condiments': ['sauce', 'condiment', 'ketchup', 'mayo', 'dressing', 'spice', 'seasoning'],
  'Frozen Food': ['frozen', 'ice', 'cold', 'freeze'],
  'Agriculture': ['seed', 'farm', 'agriculture', 'organic', 'harvest', 'grow'],
  'E-commerce': ['amazon', 'shopify', 'ecommerce', 'online', 'dtc', 'direct to consumer']
}

// AI Email templates by industry
const AI_EMAIL_TEMPLATES: Record<string, string> = {
  'Coffee & Tea': `Hi {name},

Thank you for your interest in our eco-friendly coffee packaging solutions!

For coffee packaging, I'd recommend:
• **Stand Up Pouches** with degassing valve - perfect for freshly roasted beans
• **Kraft-look finish** - gives that artisan, specialty coffee aesthetic
• **High barrier** - protects flavor and aroma for months

Our compostable options are certified OK Compost Home, so your customers can feel good about their purchase.

Would you like me to send you some samples? I can include different sizes and finishes for you to evaluate.

Best regards,
{sender}`,

  'Food & Snacks': `Hi {name},

Thanks for reaching out about your snack packaging needs!

Based on your product, I'd suggest:
• **Stand Up Pouches** with resealable zipper - keeps snacks fresh
• **Clear window option** - lets customers see your delicious product
• **Medium to high barrier** - extends shelf life

We specialize in eco-friendly materials that don't compromise on performance. Our PCR and bio-based options are great alternatives to conventional plastic.

Can I send you a sample kit to try out?

Best regards,
{sender}`,

  'default': `Hi {name},

Thank you for your inquiry about our sustainable packaging solutions!

Based on your needs, I'd love to discuss:
• The best pouch style for your product
• Material options (compostable, recyclable, or PCR-based)
• Printing and finishing options

Could you share a bit more about:
1. What product you're packaging?
2. Your target order quantity?
3. Any specific certifications needed?

I'm happy to send samples and provide a detailed quote.

Best regards,
{sender}`
}

function detectCountry(phone: string): string {
  if (!phone) return 'Unknown'
  const cleaned = phone.replace(/[\s\-\(\)]/g, '')
  
  for (const [code, country] of Object.entries(COUNTRY_CODES)) {
    if (cleaned.startsWith(code)) return country
  }
  
  // Check for country codes without +
  if (/^1\d{10}$/.test(cleaned)) return 'USA/Canada'
  if (/^44\d{10}$/.test(cleaned)) return 'UK'
  if (/^61\d{9}$/.test(cleaned)) return 'Australia'
  
  return 'Unknown'
}

function detectIndustry(text: string): string {
  if (!text) return 'Other'
  const lower = text.toLowerCase()
  
  for (const [industry, keywords] of Object.entries(INDUSTRY_KEYWORDS)) {
    if (keywords.some(kw => lower.includes(kw))) {
      return industry
    }
  }
  return 'Other'
}

function extractDomain(email: string): string {
  if (!email) return ''
  const match = email.match(/@([^@]+)$/)
  if (!match) return ''
  const domain = match[1].toLowerCase()
  // Skip common email providers
  if (['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com', 'mail.com'].includes(domain)) {
    return ''
  }
  return domain
}

export default function CRMPanelAdvanced({ onRefresh }: CRMPanelProps) {
  const [inquiries, setInquiries] = useState<CRMInquiry[]>([])
  const [activities, setActivities] = useState<CRMActivity[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [industryFilter, setIndustryFilter] = useState<string>('all')
  const [countryFilter, setCountryFilter] = useState<string>('all')
  const [packagingFilter, setPackagingFilter] = useState<string>('all')
  const [selectedInquiry, setSelectedInquiry] = useState<CRMInquiry | null>(null)
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [showBulkEmailModal, setShowBulkEmailModal] = useState(false)
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false)
  const [showHistoryModal, setShowHistoryModal] = useState(false)
  const [emailForm, setEmailForm] = useState({ subject: '', body: '' })
  const [customerReply, setCustomerReply] = useState('')
  const [newNote, setNewNote] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(50)
  const [aiGenerating, setAiGenerating] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    fetchInquiries()
  }, [])

  useEffect(() => {
    if (selectedInquiry) {
      fetchActivities(selectedInquiry.id)
    }
  }, [selectedInquiry])

  const fetchInquiries = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('crm_inquiries')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (!error && data) {
      setInquiries(data)
    }
    setLoading(false)
  }

  const fetchActivities = async (inquiryId: string) => {
    const { data } = await supabase
      .from('crm_activities')
      .select('*')
      .eq('inquiry_id', inquiryId)
      .order('created_at', { ascending: false })
    
    if (data) {
      setActivities(data)
    }
  }

  // Enriched inquiries with analyzed data
  const enrichedInquiries = useMemo(() => {
    return inquiries.map(inq => ({
      ...inq,
      country: detectCountry(inq.phone || ''),
      industry: detectIndustry(`${inq.message || ''} ${inq.packaging_type || ''} ${inq.subject || ''}`),
      domain: extractDomain(inq.email)
    }))
  }, [inquiries])

  // Get unique values for filters
  const filterOptions = useMemo(() => {
    const industries = new Set<string>()
    const countries = new Set<string>()
    const packagingTypes = new Set<string>()
    
    enrichedInquiries.forEach(inq => {
      if (inq.industry) industries.add(inq.industry)
      if (inq.country && inq.country !== 'Unknown') countries.add(inq.country)
      if (inq.packaging_type) packagingTypes.add(inq.packaging_type)
    })
    
    return {
      industries: Array.from(industries).sort(),
      countries: Array.from(countries).sort(),
      packagingTypes: Array.from(packagingTypes).sort()
    }
  }, [enrichedInquiries])

  // Filtered inquiries
  const filteredInquiries = useMemo(() => {
    let result = enrichedInquiries

    if (statusFilter !== 'all') {
      result = result.filter(i => i.status === statusFilter)
    }
    if (industryFilter !== 'all') {
      result = result.filter(i => i.industry === industryFilter)
    }
    if (countryFilter !== 'all') {
      result = result.filter(i => i.country === countryFilter)
    }
    if (packagingFilter !== 'all') {
      result = result.filter(i => i.packaging_type === packagingFilter)
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(i => 
        i.name?.toLowerCase().includes(query) ||
        i.email?.toLowerCase().includes(query) ||
        i.company?.toLowerCase().includes(query) ||
        i.message?.toLowerCase().includes(query) ||
        i.domain?.toLowerCase().includes(query)
      )
    }

    return result
  }, [enrichedInquiries, statusFilter, industryFilter, countryFilter, packagingFilter, searchQuery])

  // Pagination
  const totalPages = Math.ceil(filteredInquiries.length / pageSize)
  const paginatedInquiries = filteredInquiries.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  // Analytics
  const analytics = useMemo(() => {
    const byIndustry: Record<string, number> = {}
    const byCountry: Record<string, number> = {}
    const byStatus: Record<string, number> = {}
    const byPackaging: Record<string, number> = {}

    enrichedInquiries.forEach(inq => {
      byIndustry[inq.industry] = (byIndustry[inq.industry] || 0) + 1
      if (inq.country !== 'Unknown') {
        byCountry[inq.country] = (byCountry[inq.country] || 0) + 1
      }
      byStatus[inq.status] = (byStatus[inq.status] || 0) + 1
      if (inq.packaging_type) {
        byPackaging[inq.packaging_type] = (byPackaging[inq.packaging_type] || 0) + 1
      }
    })

    return { byIndustry, byCountry, byStatus, byPackaging }
  }, [enrichedInquiries])

  const updateInquiryStatus = async (id: string, status: string) => {
    await supabase
      .from('crm_inquiries')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
    
    await supabase.from('crm_activities').insert({
      inquiry_id: id,
      type: 'status_change',
      content: `Status changed to ${status}`,
      created_by: 'admin'
    })
    
    fetchInquiries()
    if (selectedInquiry?.id === id) fetchActivities(id)
  }

  const updateInquiryPriority = async (id: string, priority: string) => {
    await supabase
      .from('crm_inquiries')
      .update({ priority, updated_at: new Date().toISOString() })
      .eq('id', id)
    fetchInquiries()
  }

  const addNote = async () => {
    if (!selectedInquiry || !newNote.trim()) return
    
    await supabase.from('crm_activities').insert({
      inquiry_id: selectedInquiry.id,
      type: 'note',
      content: newNote,
      created_by: 'admin'
    })
    
    await supabase.from('crm_inquiries').update({ updated_at: new Date().toISOString() }).eq('id', selectedInquiry.id)
    
    setNewNote('')
    fetchActivities(selectedInquiry.id)
    fetchInquiries()
  }

  const addCustomerReply = async () => {
    if (!selectedInquiry || !customerReply.trim()) return
    
    await supabase.from('crm_activities').insert({
      inquiry_id: selectedInquiry.id,
      type: 'email',
      subject: 'Customer Reply',
      content: `[CUSTOMER REPLY]\n${customerReply}`,
      created_by: 'customer'
    })
    
    await supabase.from('crm_inquiries').update({ 
      updated_at: new Date().toISOString(),
      status: 'follow_up'
    }).eq('id', selectedInquiry.id)
    
    setCustomerReply('')
    fetchActivities(selectedInquiry.id)
    fetchInquiries()
  }

  const generateAIEmail = async () => {
    if (!selectedInquiry) return
    setAiGenerating(true)
    
    // Detect industry and get template
    const industry = detectIndustry(`${selectedInquiry.message || ''} ${selectedInquiry.packaging_type || ''}`)
    let template = AI_EMAIL_TEMPLATES[industry] || AI_EMAIL_TEMPLATES['default']
    
    // Personalize
    template = template
      .replace(/{name}/g, selectedInquiry.name?.split(' ')[0] || 'there')
      .replace(/{sender}/g, 'Ryan\nAchieve Pack Team')
    
    setEmailForm({
      subject: `Re: ${selectedInquiry.subject || 'Your Packaging Inquiry'} - Achieve Pack`,
      body: template
    })
    
    setAiGenerating(false)
  }

  const sendEmail = async () => {
    if (!selectedInquiry || !emailForm.subject || !emailForm.body) return
    
    await supabase.from('crm_activities').insert({
      inquiry_id: selectedInquiry.id,
      type: 'email',
      subject: emailForm.subject,
      content: emailForm.body,
      created_by: 'admin'
    })
    
    await supabase.from('crm_inquiries').update({ 
      last_contacted: new Date().toISOString(),
      status: selectedInquiry.status === 'new' ? 'contacted' : selectedInquiry.status,
      updated_at: new Date().toISOString()
    }).eq('id', selectedInquiry.id)
    
    const mailtoLink = `mailto:${selectedInquiry.email}?subject=${encodeURIComponent(emailForm.subject)}&body=${encodeURIComponent(emailForm.body)}`
    window.open(mailtoLink, '_blank')
    
    setShowEmailModal(false)
    setEmailForm({ subject: '', body: '' })
    fetchInquiries()
    fetchActivities(selectedInquiry.id)
  }

  const sendBulkEmail = () => {
    if (selectedIds.size === 0) return
    
    const emails = enrichedInquiries
      .filter(i => selectedIds.has(i.id))
      .map(i => i.email)
      .join(',')
    
    const mailtoLink = `mailto:?bcc=${emails}&subject=${encodeURIComponent(emailForm.subject)}&body=${encodeURIComponent(emailForm.body)}`
    window.open(mailtoLink, '_blank')
    
    setShowBulkEmailModal(false)
    setSelectedIds(new Set())
  }

  const toggleSelectAll = () => {
    if (selectedIds.size === paginatedInquiries.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(paginatedInquiries.map(i => i.id)))
    }
  }

  const toggleSelect = (id: string) => {
    const newSet = new Set(selectedIds)
    if (newSet.has(id)) {
      newSet.delete(id)
    } else {
      newSet.add(id)
    }
    setSelectedIds(newSet)
  }

  const openWebsite = (domain: string) => {
    if (domain) window.open(`https://${domain}`, '_blank')
  }

  const searchSocial = (name: string, platform: 'instagram' | 'facebook') => {
    const query = encodeURIComponent(name)
    if (platform === 'instagram') {
      window.open(`https://www.instagram.com/explore/search/keyword/?q=${query}`, '_blank')
    } else {
      window.open(`https://www.facebook.com/search/top?q=${query}`, '_blank')
    }
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    })
  }

  const stats = useMemo(() => ({
    total: inquiries.length,
    new: inquiries.filter(i => i.status === 'new').length,
    contacted: inquiries.filter(i => i.status === 'contacted').length,
    quoted: inquiries.filter(i => i.status === 'quoted').length,
    won: inquiries.filter(i => i.status === 'won').length,
    followUp: inquiries.filter(i => i.status === 'follow_up').length
  }), [inquiries])

  return (
    <div className="space-y-4">
      {/* Stats Cards */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        <div className="bg-white p-3 rounded-lg shadow-sm border">
          <div className="text-xl font-bold text-gray-900">{stats.total}</div>
          <div className="text-xs text-gray-500">Total</div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg shadow-sm border border-blue-200 cursor-pointer hover:bg-blue-100" onClick={() => setStatusFilter('new')}>
          <div className="text-xl font-bold text-blue-600">{stats.new}</div>
          <div className="text-xs text-blue-600">New</div>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg shadow-sm border border-yellow-200 cursor-pointer hover:bg-yellow-100" onClick={() => setStatusFilter('contacted')}>
          <div className="text-xl font-bold text-yellow-600">{stats.contacted}</div>
          <div className="text-xs text-yellow-600">Contacted</div>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg shadow-sm border border-purple-200 cursor-pointer hover:bg-purple-100" onClick={() => setStatusFilter('quoted')}>
          <div className="text-xl font-bold text-purple-600">{stats.quoted}</div>
          <div className="text-xs text-purple-600">Quoted</div>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg shadow-sm border border-orange-200 cursor-pointer hover:bg-orange-100" onClick={() => setStatusFilter('follow_up')}>
          <div className="text-xl font-bold text-orange-600">{stats.followUp}</div>
          <div className="text-xs text-orange-600">Follow Up</div>
        </div>
        <div className="bg-green-50 p-3 rounded-lg shadow-sm border border-green-200 cursor-pointer hover:bg-green-100" onClick={() => setStatusFilter('won')}>
          <div className="text-xl font-bold text-green-600">{stats.won}</div>
          <div className="text-xs text-green-600">Won</div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-lg shadow-sm space-y-3">
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search name, email, company..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1) }}
                className="pl-10 pr-4 py-2 border rounded-lg w-64 text-sm focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-3 py-2 border rounded-lg text-sm ${showFilters ? 'bg-primary-50 border-primary-300' : ''}`}
            >
              <Filter className="h-4 w-4" />
              Filters
              {(statusFilter !== 'all' || industryFilter !== 'all' || countryFilter !== 'all') && (
                <span className="bg-primary-500 text-white text-xs px-1.5 rounded-full">!</span>
              )}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setShowAnalyticsModal(true)} className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </button>
            <button onClick={fetchInquiries} className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
              <RefreshCw className="h-4 w-4" />
            </button>
            {selectedIds.size > 0 && (
              <button
                onClick={() => setShowBulkEmailModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-700"
              >
                <Mail className="h-4 w-4" />
                Email {selectedIds.size} Selected
              </button>
            )}
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="flex flex-wrap gap-3 pt-3 border-t">
            <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1) }} className="border rounded-lg px-3 py-1.5 text-sm">
              <option value="all">All Status</option>
              {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s.replace('_', ' ').toUpperCase()}</option>)}
            </select>
            <select value={industryFilter} onChange={(e) => { setIndustryFilter(e.target.value); setCurrentPage(1) }} className="border rounded-lg px-3 py-1.5 text-sm">
              <option value="all">All Industries</option>
              {filterOptions.industries.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
            <select value={countryFilter} onChange={(e) => { setCountryFilter(e.target.value); setCurrentPage(1) }} className="border rounded-lg px-3 py-1.5 text-sm">
              <option value="all">All Countries</option>
              {filterOptions.countries.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={packagingFilter} onChange={(e) => { setPackagingFilter(e.target.value); setCurrentPage(1) }} className="border rounded-lg px-3 py-1.5 text-sm">
              <option value="all">All Packaging</option>
              {filterOptions.packagingTypes.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <button onClick={() => { setStatusFilter('all'); setIndustryFilter('all'); setCountryFilter('all'); setPackagingFilter('all') }} className="text-sm text-gray-500 hover:text-gray-700">
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-5 gap-4">
        {/* Inquiry List */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-2 py-2 text-left">
                    <button onClick={toggleSelectAll} className="p-1 hover:bg-gray-200 rounded">
                      {selectedIds.size === paginatedInquiries.length && paginatedInquiries.length > 0 ? 
                        <CheckSquare className="h-4 w-4 text-primary-600" /> : 
                        <Square className="h-4 w-4 text-gray-400" />}
                    </button>
                  </th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">Contact</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">Industry</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">Country</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">Status</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {loading ? (
                  <tr><td colSpan={6} className="px-4 py-8 text-center text-gray-500">Loading...</td></tr>
                ) : paginatedInquiries.length === 0 ? (
                  <tr><td colSpan={6} className="px-4 py-8 text-center text-gray-500">No inquiries found</td></tr>
                ) : (
                  paginatedInquiries.map((inquiry) => (
                    <tr 
                      key={inquiry.id}
                      className={`hover:bg-gray-50 cursor-pointer ${selectedInquiry?.id === inquiry.id ? 'bg-primary-50' : ''}`}
                      onClick={() => setSelectedInquiry(inquiry)}
                    >
                      <td className="px-2 py-2" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => toggleSelect(inquiry.id)} className="p-1 hover:bg-gray-200 rounded">
                          {selectedIds.has(inquiry.id) ? 
                            <CheckSquare className="h-4 w-4 text-primary-600" /> : 
                            <Square className="h-4 w-4 text-gray-400" />}
                        </button>
                      </td>
                      <td className="px-2 py-2">
                        <div className="font-medium text-gray-900 truncate max-w-[150px]">{inquiry.name}</div>
                        <div className="text-xs text-gray-500 truncate max-w-[150px]">{inquiry.email}</div>
                        {inquiry.domain && (
                          <div className="text-xs text-primary-600 truncate max-w-[150px]">{inquiry.domain}</div>
                        )}
                      </td>
                      <td className="px-2 py-2">
                        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-gray-100">
                          <Factory className="h-3 w-3" />
                          {inquiry.industry}
                        </span>
                      </td>
                      <td className="px-2 py-2">
                        <span className="inline-flex items-center gap-1 text-xs">
                          <MapPin className="h-3 w-3 text-gray-400" />
                          {inquiry.country}
                        </span>
                      </td>
                      <td className="px-2 py-2">
                        <select
                          value={inquiry.status}
                          onChange={(e) => { e.stopPropagation(); updateInquiryStatus(inquiry.id, e.target.value) }}
                          onClick={(e) => e.stopPropagation()}
                          className={`text-xs font-medium px-2 py-0.5 rounded-full border-0 ${STATUS_COLORS[inquiry.status]}`}
                        >
                          {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s.replace('_', ' ')}</option>)}
                        </select>
                      </td>
                      <td className="px-2 py-2" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center gap-1">
                          <a href={`mailto:${inquiry.email}`} className="p-1 text-gray-400 hover:text-primary-600" title="Email">
                            <Mail className="h-3.5 w-3.5" />
                          </a>
                          {inquiry.phone && (
                            <a href={`https://wa.me/${inquiry.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="p-1 text-gray-400 hover:text-green-600" title="WhatsApp">
                              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                              </svg>
                            </a>
                          )}
                          {inquiry.domain && (
                            <button onClick={() => openWebsite(inquiry.domain!)} className="p-1 text-gray-400 hover:text-blue-600" title="Website">
                              <Globe className="h-3.5 w-3.5" />
                            </button>
                          )}
                          <button onClick={() => searchSocial(inquiry.name, 'instagram')} className="p-1 text-gray-400 hover:text-pink-600" title="Find on Instagram">
                            <Instagram className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="px-4 py-3 bg-gray-50 border-t flex items-center justify-between text-sm">
            <div className="text-gray-500">
              Showing {((currentPage - 1) * pageSize) + 1}-{Math.min(currentPage * pageSize, filteredInquiries.length)} of {filteredInquiries.length}
            </div>
            <div className="flex items-center gap-2">
              <select value={pageSize} onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1) }} className="border rounded px-2 py-1 text-sm">
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={200}>200</option>
              </select>
              <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="p-1 rounded hover:bg-gray-200 disabled:opacity-50">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="px-2">{currentPage} / {totalPages}</span>
              <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="p-1 rounded hover:bg-gray-200 disabled:opacity-50">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm max-h-[80vh] overflow-y-auto">
          {selectedInquiry ? (
            <div className="p-4 space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{selectedInquiry.name}</h3>
                  <p className="text-sm text-gray-500">{selectedInquiry.email}</p>
                  {extractDomain(selectedInquiry.email) && (
                    <a href={`https://${extractDomain(selectedInquiry.email)}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:underline flex items-center gap-1">
                      <Globe className="h-3 w-3" /> {extractDomain(selectedInquiry.email)}
                    </a>
                  )}
                </div>
                <button onClick={() => setShowHistoryModal(true)} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg" title="View History">
                  <History className="h-5 w-5" />
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${STATUS_COLORS[selectedInquiry.status]}`}>
                  {selectedInquiry.status.replace('_', ' ').toUpperCase()}
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-700 flex items-center gap-1">
                  <Factory className="h-3 w-3" /> {(selectedInquiry as any).industry}
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-700 flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {(selectedInquiry as any).country}
                </span>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                {selectedInquiry.phone && (
                  <a href={`tel:${selectedInquiry.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-green-600">
                    <Phone className="h-4 w-4" /> {selectedInquiry.phone}
                  </a>
                )}
                {selectedInquiry.packaging_type && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Package className="h-4 w-4" /> {selectedInquiry.packaging_type}
                  </div>
                )}
              </div>

              {/* Social Media Search */}
              <div className="flex gap-2">
                {selectedInquiry.phone && (
                  <a 
                    href={`https://wa.me/${selectedInquiry.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                )}
                <button onClick={() => searchSocial(selectedInquiry.name, 'instagram')} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm hover:opacity-90">
                  <Instagram className="h-4 w-4" /> Find Instagram
                </button>
                <button onClick={() => searchSocial(selectedInquiry.name, 'facebook')} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                  <Facebook className="h-4 w-4" /> Find Facebook
                </button>
              </div>

              {/* Message */}
              {selectedInquiry.message && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">Original Message</h4>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedInquiry.message}</p>
                </div>
              )}

              {/* Quick Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => { generateAIEmail(); setShowEmailModal(true) }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  <Wand2 className="h-4 w-4" />
                  AI Email
                </button>
                <a href={`tel:${selectedInquiry.phone}`} className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  <Phone className="h-4 w-4" />
                </a>
              </div>

              {/* Customer Reply Input */}
              <div className="border-t pt-4">
                <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">Log Customer Reply</h4>
                <textarea
                  value={customerReply}
                  onChange={(e) => setCustomerReply(e.target.value)}
                  placeholder="Paste customer's email reply here..."
                  className="w-full px-3 py-2 border rounded-lg text-sm h-20 resize-none"
                />
                <button
                  onClick={addCustomerReply}
                  disabled={!customerReply.trim()}
                  className="mt-2 w-full flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50"
                >
                  <Plus className="h-4 w-4" /> Save Reply
                </button>
              </div>

              {/* Notes */}
              <div className="border-t pt-4">
                <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">Add Note</h4>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Add a note..."
                    className="flex-1 px-3 py-2 border rounded-lg text-sm"
                    onKeyDown={(e) => e.key === 'Enter' && addNote()}
                  />
                  <button onClick={addNote} className="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-medium text-gray-500 uppercase">Recent Activity</h4>
                  <button onClick={() => setShowHistoryModal(true)} className="text-xs text-primary-600 hover:underline">View All</button>
                </div>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {activities.length === 0 ? (
                    <p className="text-sm text-gray-400">No activity yet</p>
                  ) : (
                    activities.slice(0, 5).map((activity) => (
                      <div key={activity.id} className="flex gap-2 text-sm">
                        <div className={`mt-0.5 p-1 rounded-full ${
                          activity.type === 'email' ? 'bg-blue-100 text-blue-600' :
                          activity.type === 'status_change' ? 'bg-purple-100 text-purple-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {activity.type === 'email' ? <Mail className="h-3 w-3" /> : <MessageSquare className="h-3 w-3" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-700 truncate">{activity.content.substring(0, 50)}...</p>
                          <p className="text-xs text-gray-400">{formatDate(activity.created_at)}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-400">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Select an inquiry to view details</p>
            </div>
          )}
        </div>
      </div>

      {/* Email Modal */}
      {showEmailModal && selectedInquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wand2 className="h-5 w-5 text-primary-600" />
                <h3 className="font-semibold">AI-Powered Email Composer</h3>
              </div>
              <button onClick={() => setShowEmailModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-primary-50 rounded-lg p-3 text-sm">
                <p className="font-medium text-primary-700">Industry Detected: {(selectedInquiry as any).industry}</p>
                <p className="text-primary-600">Email personalized for this industry</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <input type="text" value={selectedInquiry.email} disabled className="w-full px-3 py-2 border rounded-lg bg-gray-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  value={emailForm.subject}
                  onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  value={emailForm.body}
                  onChange={(e) => setEmailForm({ ...emailForm, body: e.target.value })}
                  rows={12}
                  className="w-full px-3 py-2 border rounded-lg font-mono text-sm"
                />
              </div>
              <button onClick={generateAIEmail} disabled={aiGenerating} className="flex items-center gap-2 text-sm text-primary-600 hover:underline">
                <Sparkles className="h-4 w-4" />
                Regenerate AI Suggestion
              </button>
            </div>
            <div className="p-4 border-t flex justify-end gap-2">
              <button onClick={() => setShowEmailModal(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
              <button onClick={sendEmail} className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center gap-2">
                <Send className="h-4 w-4" /> Send Email
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Email Modal */}
      {showBulkEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="font-semibold">Send Bulk Email to {selectedIds.size} Contacts</h3>
              <button onClick={() => setShowBulkEmailModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  value={emailForm.subject}
                  onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                  placeholder="Your subject line..."
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  value={emailForm.body}
                  onChange={(e) => setEmailForm({ ...emailForm, body: e.target.value })}
                  rows={8}
                  placeholder="Your email message..."
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
            <div className="p-4 border-t flex justify-end gap-2">
              <button onClick={() => setShowBulkEmailModal(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
              <button onClick={sendBulkEmail} className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center gap-2">
                <Send className="h-4 w-4" /> Open Mail Client
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Analytics Modal */}
      {showAnalyticsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2"><BarChart3 className="h-5 w-5" /> Analytics Dashboard</h3>
              <button onClick={() => setShowAnalyticsModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 grid md:grid-cols-2 gap-6">
              {/* By Industry */}
              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2"><Factory className="h-4 w-4" /> By Industry</h4>
                <div className="space-y-2">
                  {Object.entries(analytics.byIndustry).sort((a, b) => b[1] - a[1]).map(([industry, count]) => (
                    <div key={industry} className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                        <div className="bg-primary-500 h-full rounded-full" style={{ width: `${(count / inquiries.length) * 100}%` }} />
                      </div>
                      <span className="text-sm w-24 truncate">{industry}</span>
                      <span className="text-sm font-medium w-10 text-right">{count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* By Country */}
              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2"><MapPin className="h-4 w-4" /> By Country</h4>
                <div className="space-y-2">
                  {Object.entries(analytics.byCountry).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([country, count]) => (
                    <div key={country} className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: `${(count / inquiries.length) * 100}%` }} />
                      </div>
                      <span className="text-sm w-24 truncate">{country}</span>
                      <span className="text-sm font-medium w-10 text-right">{count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* By Status */}
              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2"><Tag className="h-4 w-4" /> By Status</h4>
                <div className="space-y-2">
                  {Object.entries(analytics.byStatus).sort((a, b) => b[1] - a[1]).map(([status, count]) => (
                    <div key={status} className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                        <div className="bg-purple-500 h-full rounded-full" style={{ width: `${(count / inquiries.length) * 100}%` }} />
                      </div>
                      <span className="text-sm w-24 truncate">{status}</span>
                      <span className="text-sm font-medium w-10 text-right">{count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* By Packaging */}
              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2"><Package className="h-4 w-4" /> By Packaging Type</h4>
                <div className="space-y-2">
                  {Object.entries(analytics.byPackaging).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([pkg, count]) => (
                    <div key={pkg} className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                        <div className="bg-orange-500 h-full rounded-full" style={{ width: `${(count / inquiries.length) * 100}%` }} />
                      </div>
                      <span className="text-sm w-32 truncate">{pkg}</span>
                      <span className="text-sm font-medium w-10 text-right">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* History Modal */}
      {showHistoryModal && selectedInquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2"><History className="h-5 w-5" /> Conversation History - {selectedInquiry.name}</h3>
              <button onClick={() => setShowHistoryModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {/* Original Inquiry */}
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <User className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-blue-900">Original Inquiry</span>
                  <span className="text-xs text-blue-600">{selectedInquiry.created_at ? formatDate(selectedInquiry.created_at) : ''}</span>
                </div>
                <p className="text-sm text-blue-800 whitespace-pre-wrap">{selectedInquiry.message || 'No message'}</p>
                {selectedInquiry.packaging_type && (
                  <p className="text-xs text-blue-600 mt-2">Interested in: {selectedInquiry.packaging_type}</p>
                )}
              </div>

              {/* Activity Timeline */}
              {activities.map((activity) => (
                <div 
                  key={activity.id} 
                  className={`rounded-lg p-4 ${
                    activity.created_by === 'customer' ? 'bg-gray-50 ml-8' : 'bg-green-50 mr-8'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {activity.type === 'email' ? <Mail className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
                    <span className="font-medium text-sm">
                      {activity.created_by === 'customer' ? 'Customer' : 'You'} - {activity.type}
                    </span>
                    <span className="text-xs text-gray-500">{formatDate(activity.created_at)}</span>
                  </div>
                  {activity.subject && <p className="text-sm font-medium mb-1">{activity.subject}</p>}
                  <p className="text-sm whitespace-pre-wrap">{activity.content}</p>
                </div>
              ))}

              {activities.length === 0 && (
                <p className="text-center text-gray-400 py-8">No follow-up activity yet</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
