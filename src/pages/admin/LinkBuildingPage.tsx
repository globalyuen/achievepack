import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet'
import { 
  Search, Mail, RefreshCw, Loader2, Link2, ExternalLink, Plus, Check, Send, 
  Eye, BarChart3, Globe, FileText, AlertCircle, CheckCircle, Clock, X,
  ArrowRight, Zap, Target, TrendingUp, Edit2, Trash2, Copy, Filter
} from 'lucide-react'
import { toast } from 'sonner'
import { Label } from '@/components/ui/label'
import { supabase } from '@/lib/supabase'

// Types
interface LinkOpportunity {
  id: number
  type: 'brand_mention' | 'competitor' | 'broken_link' | 'resource' | 'guest_post' | 'case_study'
  source_url: string
  source_domain: string
  contact_email: string | null
  contact_name: string | null
  status: 'new' | 'contacted' | 'replied' | 'converted' | 'rejected'
  template_used: string | null
  notes: string | null
  priority: number
  created_at: string
  contacted_at: string | null
  converted_at: string | null
}

interface OutreachTemplate {
  id: number
  name: string
  type: string
  subject: string
  body: string
  is_active: boolean
}

interface BrandMention {
  id: number
  keyword: string
  found_url: string
  found_domain: string
  snippet: string
  has_backlink: boolean
  status: string
  found_at: string
}

interface DashboardStats {
  total_opportunities: number
  new_opportunities: number
  contacted: number
  converted: number
  conversion_rate: number
  this_month_links: number
}

// Status colors
const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-100 text-blue-800',
  contacted: 'bg-yellow-100 text-yellow-800',
  replied: 'bg-purple-100 text-purple-800',
  converted: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
}

// Type labels
const TYPE_LABELS: Record<string, { label: string, icon: React.ReactNode, color: string }> = {
  brand_mention: { label: 'Brand Mention', icon: <Target className="w-4 h-4" />, color: 'bg-blue-500' },
  competitor: { label: 'Competitor Backlink', icon: <TrendingUp className="w-4 h-4" />, color: 'bg-purple-500' },
  broken_link: { label: 'Broken Link', icon: <AlertCircle className="w-4 h-4" />, color: 'bg-orange-500' },
  resource: { label: 'Resource Page', icon: <FileText className="w-4 h-4" />, color: 'bg-green-500' },
  guest_post: { label: 'Guest Post', icon: <Edit2 className="w-4 h-4" />, color: 'bg-indigo-500' },
  case_study: { label: 'Case Study', icon: <BarChart3 className="w-4 h-4" />, color: 'bg-pink-500' },
}

// Default templates
const DEFAULT_TEMPLATES: Omit<OutreachTemplate, 'id'>[] = [
  {
    name: 'Brand Mention Conversion',
    type: 'brand_mention',
    subject: 'Thanks for mentioning {{company_name}}!',
    body: `Hi {{contact_name}},

I'm {{sender_name}} from {{company_name}}. I came across your article "{{article_title}}" and was thrilled to see you mentioned our packaging solutions!

If you find it helpful, would you consider adding a link to our website so your readers can learn more?

{{our_url}}

We'd also be happy to provide any additional information or images for your article.

Thanks again for the mention!

Best regards,
{{signature}}`,
    is_active: true
  },
  {
    name: 'Skyscraper Outreach',
    type: 'competitor',
    subject: 'Updated resource for your "{{original_article}}" article',
    body: `Hi {{contact_name}},

I noticed your excellent article on "{{original_article}}" - great insights!

We've just published a comprehensive 2026 update that includes:
✅ Real-world case studies from food & beverage brands
✅ Latest sustainability regulations breakdown
✅ Cost comparison charts & infographics

Here's the link: {{our_article_url}}

I thought it might be a valuable addition to your resource list. Feel free to check it out!

Best regards,
{{signature}}`,
    is_active: true
  },
  {
    name: 'Broken Link Fix',
    type: 'broken_link',
    subject: 'Quick heads up - broken link on your site',
    body: `Hi {{contact_name}},

I was reading your helpful article "{{article_title}}" and noticed one of the links is no longer working:

❌ Broken: {{broken_url}}

We have a similar (and up-to-date) resource that covers the same topic:
✅ {{our_replacement_url}}

Would you consider updating the link? I think your readers would find it useful!

Thanks for your great content!

Best regards,
{{signature}}`,
    is_active: true
  },
  {
    name: 'Resource Page Pitch',
    type: 'resource',
    subject: 'Resource suggestion for your {{page_topic}} page',
    body: `Hi {{contact_name}},

I found your excellent resource page on {{page_topic}} and thought our guide might be a great addition:

📦 "{{our_resource_title}}"
{{our_resource_url}}

It covers:
• Sustainable packaging materials comparison
• Cost-benefit analysis for businesses
• Step-by-step implementation guide

Let me know if you'd like more details!

Best regards,
{{signature}}`,
    is_active: true
  },
  {
    name: 'Guest Post Pitch',
    type: 'guest_post',
    subject: 'Guest post idea for {{site_name}}',
    body: `Hi {{contact_name}},

I'm a packaging specialist with 10+ years of experience helping food brands go sustainable.

I'd love to contribute a guest post to {{site_name}}. Here are some topic ideas:

1. "5 Packaging Mistakes That Cost Food Brands Thousands"
2. "The Complete Guide to Compostable Packaging in 2026"
3. "How {{industry}} Brands Are Cutting Packaging Costs by 30%"

Each article would include original research, real case studies, and actionable tips.

Interested? I can send you a detailed outline!

Best regards,
{{signature}}`,
    is_active: true
  },
  {
    name: 'Case Study Request',
    type: 'case_study',
    subject: 'Would you like to be featured as a success story?',
    body: `Hi {{contact_name}},

We've been working with {{company_name}} on your sustainable packaging, and I wanted to reach out about a great opportunity.

We're creating a case study featuring our top clients, and we'd love to include {{company_name}}! Here's what's in it for you:

✅ Free exposure on our website (10K+ monthly visitors)
✅ Featured in our marketing materials
✅ Backlink to your website

All we'd need is:
• A short quote about your experience
• Permission to use your logo
• A link back to us from your site (optional but appreciated!)

Would you be interested?

Best regards,
{{signature}}`,
    is_active: true
  }
]

export default function LinkBuildingPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'opportunities' | 'mentions' | 'templates' | 'scan'>('dashboard')
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [opportunities, setOpportunities] = useState<LinkOpportunity[]>([])
  const [templates, setTemplates] = useState<OutreachTemplate[]>([])
  const [mentions, setMentions] = useState<BrandMention[]>([])
  
  // Filters
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  
  // Modals
  const [showAddOpportunity, setShowAddOpportunity] = useState(false)
  const [showEditTemplate, setShowEditTemplate] = useState(false)
  const [showEmailPreview, setShowEmailPreview] = useState(false)
  const [selectedOpportunity, setSelectedOpportunity] = useState<LinkOpportunity | null>(null)
  const [selectedTemplate, setSelectedTemplate] = useState<OutreachTemplate | null>(null)
  
  // Form states
  const [newOpportunity, setNewOpportunity] = useState({
    type: 'brand_mention' as const,
    source_url: '',
    source_domain: '',
    contact_email: '',
    contact_name: '',
    notes: '',
    priority: 3
  })
  
  // Scan states
  const [scanKeyword, setScanKeyword] = useState('achievepack')
  const [isScanning, setIsScanning] = useState(false)
  const [scanResults, setScanResults] = useState<any[]>([])

  // Load data
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setIsLoading(true)
    try {
      // Load opportunities
      const { data: opps, error: oppsError } = await supabase
        .from('link_opportunities')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (!oppsError && opps) {
        setOpportunities(opps)
        
        // Calculate stats
        const total = opps.length
        const newCount = opps.filter(o => o.status === 'new').length
        const contacted = opps.filter(o => o.status === 'contacted').length
        const converted = opps.filter(o => o.status === 'converted').length
        const thisMonth = opps.filter(o => {
          const date = new Date(o.converted_at || '')
          const now = new Date()
          return o.status === 'converted' && 
            date.getMonth() === now.getMonth() && 
            date.getFullYear() === now.getFullYear()
        }).length
        
        setStats({
          total_opportunities: total,
          new_opportunities: newCount,
          contacted,
          converted,
          conversion_rate: total > 0 ? (converted / total) * 100 : 0,
          this_month_links: thisMonth
        })
      }
      
      // Load templates
      const { data: tmpl, error: tmplError } = await supabase
        .from('outreach_templates')
        .select('*')
        .order('name')
      
      if (!tmplError && tmpl) {
        setTemplates(tmpl)
      }
      
      // Load brand mentions
      const { data: ments, error: mentsError } = await supabase
        .from('brand_mentions')
        .select('*')
        .order('found_at', { ascending: false })
        .limit(50)
      
      if (!mentsError && ments) {
        setMentions(ments)
      }
      
    } catch (error) {
      console.error('Error loading data:', error)
      toast.error('Failed to load data')
    } finally {
      setIsLoading(false)
    }
  }

  // Add new opportunity
  const addOpportunity = async () => {
    try {
      const domain = new URL(newOpportunity.source_url).hostname.replace('www.', '')
      
      const { data, error } = await supabase
        .from('link_opportunities')
        .insert({
          ...newOpportunity,
          source_domain: domain,
          status: 'new'
        })
        .select()
        .single()
      
      if (error) throw error
      
      setOpportunities(prev => [data, ...prev])
      setShowAddOpportunity(false)
      setNewOpportunity({
        type: 'brand_mention',
        source_url: '',
        source_domain: '',
        contact_email: '',
        contact_name: '',
        notes: '',
        priority: 3
      })
      toast.success('Opportunity added!')
    } catch (error: any) {
      console.error('Error adding opportunity:', error)
      toast.error(error.message || 'Failed to add opportunity')
    }
  }

  // Update opportunity status
  const updateStatus = async (id: number, status: string) => {
    try {
      const updateData: any = { status }
      if (status === 'contacted') updateData.contacted_at = new Date().toISOString()
      if (status === 'converted') updateData.converted_at = new Date().toISOString()
      
      const { error } = await supabase
        .from('link_opportunities')
        .update(updateData)
        .eq('id', id)
      
      if (error) throw error
      
      setOpportunities(prev => prev.map(o => o.id === id ? { ...o, ...updateData } : o))
      toast.success('Status updated!')
    } catch (error: any) {
      toast.error(error.message || 'Failed to update status')
    }
  }

  // Delete opportunity
  const deleteOpportunity = async (id: number) => {
    if (!confirm('Delete this opportunity?')) return
    
    try {
      const { error } = await supabase
        .from('link_opportunities')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      
      setOpportunities(prev => prev.filter(o => o.id !== id))
      toast.success('Deleted!')
    } catch (error: any) {
      toast.error(error.message || 'Failed to delete')
    }
  }

  // Initialize templates if empty
  const initializeTemplates = async () => {
    try {
      for (const template of DEFAULT_TEMPLATES) {
        await supabase.from('outreach_templates').insert(template)
      }
      await loadData()
      toast.success('Templates initialized!')
    } catch (error) {
      console.error('Error initializing templates:', error)
    }
  }

  // Scan for brand mentions using Google Search API
  const scanBrandMentions = async () => {
    if (!scanKeyword.trim()) {
      toast.error('Please enter a keyword to scan')
      return
    }
    
    setIsScanning(true)
    setScanResults([])
    
    try {
      const res = await fetch(`/api/link-building/scan-mentions?keyword=${encodeURIComponent(scanKeyword)}`)
      const data = await res.json()
      
      if (data.success && data.results) {
        setScanResults(data.results)
        toast.success(`Found ${data.results.length} mentions!`)
        
        // Reload mentions from database
        await loadData()
      } else {
        toast.error(data.error || 'Scan failed')
      }
    } catch (error: any) {
      console.error('Scan error:', error)
      toast.error('Failed to scan: ' + error.message)
    } finally {
      setIsScanning(false)
    }
  }

  // Convert mention to opportunity
  const convertMentionToOpportunity = async (mention: BrandMention) => {
    try {
      const { error } = await supabase
        .from('link_opportunities')
        .insert({
          type: 'brand_mention',
          source_url: mention.found_url,
          source_domain: mention.found_domain,
          notes: mention.snippet,
          status: 'new',
          priority: 2
        })
      
      if (error) throw error
      
      // Update mention status
      await supabase
        .from('brand_mentions')
        .update({ status: 'converted_to_opportunity' })
        .eq('id', mention.id)
      
      await loadData()
      toast.success('Converted to opportunity!')
    } catch (error: any) {
      toast.error(error.message || 'Failed to convert')
    }
  }

  // Filter opportunities
  const filteredOpportunities = opportunities.filter(opp => {
    if (statusFilter !== 'all' && opp.status !== statusFilter) return false
    if (typeFilter !== 'all' && opp.type !== typeFilter) return false
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        opp.source_domain.toLowerCase().includes(query) ||
        opp.source_url.toLowerCase().includes(query) ||
        (opp.contact_name?.toLowerCase().includes(query)) ||
        (opp.contact_email?.toLowerCase().includes(query))
      )
    }
    return true
  })

  // Copy email to clipboard
  const copyEmail = (template: OutreachTemplate) => {
    const text = `Subject: ${template.subject}\n\n${template.body}`
    navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard!')
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
      </div>
    )
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Link Building</h1>
          <p className="text-sm text-gray-500">Manage backlink opportunities and outreach campaigns</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={loadData}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button onClick={() => setShowAddOpportunity(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Opportunity
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
          { id: 'opportunities', label: 'Opportunities', icon: Target },
          { id: 'mentions', label: 'Brand Mentions', icon: Globe },
          { id: 'templates', label: 'Email Templates', icon: Mail },
          { id: 'scan', label: 'Scan & Discover', icon: Search },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white rounded-xl p-4 border shadow-sm">
              <div className="text-2xl font-bold text-gray-900">{stats?.total_opportunities || 0}</div>
              <div className="text-sm text-gray-500">Total Opportunities</div>
            </div>
            <div className="bg-white rounded-xl p-4 border shadow-sm">
              <div className="text-2xl font-bold text-blue-600">{stats?.new_opportunities || 0}</div>
              <div className="text-sm text-gray-500">New</div>
            </div>
            <div className="bg-white rounded-xl p-4 border shadow-sm">
              <div className="text-2xl font-bold text-yellow-600">{stats?.contacted || 0}</div>
              <div className="text-sm text-gray-500">Contacted</div>
            </div>
            <div className="bg-white rounded-xl p-4 border shadow-sm">
              <div className="text-2xl font-bold text-green-600">{stats?.converted || 0}</div>
              <div className="text-sm text-gray-500">Converted</div>
            </div>
            <div className="bg-white rounded-xl p-4 border shadow-sm">
              <div className="text-2xl font-bold text-primary-600">{stats?.conversion_rate.toFixed(1) || 0}%</div>
              <div className="text-sm text-gray-500">Conversion Rate</div>
            </div>
            <div className="bg-white rounded-xl p-4 border shadow-sm">
              <div className="text-2xl font-bold text-indigo-600">{stats?.this_month_links || 0}</div>
              <div className="text-sm text-gray-500">This Month</div>
            </div>
          </div>

          {/* Recent Opportunities */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Recent Opportunities</h3>
            </div>
            <div className="divide-y">
              {opportunities.slice(0, 5).map(opp => (
                <div key={opp.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${TYPE_LABELS[opp.type]?.color} flex items-center justify-center text-white`}>
                      {TYPE_LABELS[opp.type]?.icon}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{opp.source_domain}</div>
                      <div className="text-xs text-gray-500">{TYPE_LABELS[opp.type]?.label}</div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${STATUS_COLORS[opp.status]}`}>
                    {opp.status}
                  </span>
                </div>
              ))}
              {opportunities.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  <Target className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p>No opportunities yet</p>
                  <Button variant="link" onClick={() => setShowAddOpportunity(true)}>
                    Add your first opportunity
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-4">
            <button
              onClick={() => setActiveTab('scan')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-4 text-left hover:shadow-lg transition-shadow"
            >
              <Search className="w-6 h-6 mb-2" />
              <div className="font-semibold">Scan Brand Mentions</div>
              <div className="text-sm opacity-80">Find unlinked mentions of your brand</div>
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-4 text-left hover:shadow-lg transition-shadow"
            >
              <Mail className="w-6 h-6 mb-2" />
              <div className="font-semibold">Email Templates</div>
              <div className="text-sm opacity-80">Manage outreach templates</div>
            </button>
            <button
              onClick={() => setShowAddOpportunity(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-4 text-left hover:shadow-lg transition-shadow"
            >
              <Plus className="w-6 h-6 mb-2" />
              <div className="font-semibold">Add Opportunity</div>
              <div className="text-sm opacity-80">Manually add a new link opportunity</div>
            </button>
          </div>
        </div>
      )}

      {/* Opportunities Tab */}
      {activeTab === 'opportunities' && (
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex-1 min-w-[200px]">
              <Input
                placeholder="Search by domain, email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border rounded-lg text-sm"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="replied">Replied</option>
              <option value="converted">Converted</option>
              <option value="rejected">Rejected</option>
            </select>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-2 border rounded-lg text-sm"
            >
              <option value="all">All Types</option>
              <option value="brand_mention">Brand Mention</option>
              <option value="competitor">Competitor Backlink</option>
              <option value="broken_link">Broken Link</option>
              <option value="resource">Resource Page</option>
              <option value="guest_post">Guest Post</option>
              <option value="case_study">Case Study</option>
            </select>
          </div>

          {/* Opportunities List */}
          <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Source</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Contact</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="text-right px-4 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredOpportunities.map(opp => (
                  <tr key={opp.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded ${TYPE_LABELS[opp.type]?.color} flex items-center justify-center text-white text-xs`}>
                          {TYPE_LABELS[opp.type]?.icon}
                        </div>
                        <span className="text-xs text-gray-600">{TYPE_LABELS[opp.type]?.label}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-sm">{opp.source_domain}</div>
                      <a 
                        href={opp.source_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:underline flex items-center gap-1"
                      >
                        View page <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">{opp.contact_name || '-'}</div>
                      <div className="text-xs text-gray-500">{opp.contact_email || 'No email'}</div>
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={opp.status}
                        onChange={(e) => updateStatus(opp.id, e.target.value)}
                        className={`px-2 py-1 rounded text-xs font-medium border-0 ${STATUS_COLORS[opp.status]}`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="replied">Replied</option>
                        <option value="converted">Converted</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500">
                      {new Date(opp.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        {opp.contact_email && (
                          <Button variant="ghost" size="sm" onClick={() => {
                            setSelectedOpportunity(opp)
                            setShowEmailPreview(true)
                          }}>
                            <Mail className="w-4 h-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="sm" onClick={() => deleteOpportunity(opp.id)}>
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredOpportunities.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                No opportunities found
              </div>
            )}
          </div>
        </div>
      )}

      {/* Brand Mentions Tab */}
      {activeTab === 'mentions' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="font-semibold">Brand Mentions</h3>
              <Button variant="outline" size="sm" onClick={() => setActiveTab('scan')}>
                <Search className="w-4 h-4 mr-2" />
                Scan for More
              </Button>
            </div>
            <div className="divide-y">
              {mentions.map(mention => (
                <div key={mention.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{mention.found_domain}</span>
                        {mention.has_backlink ? (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full flex items-center gap-1">
                            <Check className="w-3 h-3" /> Has Backlink
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                            No Backlink
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{mention.snippet}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <a 
                          href={mention.found_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-500 hover:underline flex items-center gap-1"
                        >
                          View page <ExternalLink className="w-3 h-3" />
                        </a>
                        <span className="text-xs text-gray-400">
                          Found: {new Date(mention.found_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    {!mention.has_backlink && mention.status === 'new' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => convertMentionToOpportunity(mention)}
                      >
                        <ArrowRight className="w-4 h-4 mr-1" />
                        Convert
                      </Button>
                    )}
                  </div>
                </div>
              ))}
              {mentions.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  <Globe className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p>No brand mentions found yet</p>
                  <Button variant="link" onClick={() => setActiveTab('scan')}>
                    Start scanning
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Templates Tab */}
      {activeTab === 'templates' && (
        <div className="space-y-4">
          {templates.length === 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-yellow-800">No templates found</p>
                <p className="text-sm text-yellow-600">Initialize default templates to get started</p>
              </div>
              <Button onClick={initializeTemplates}>
                <Zap className="w-4 h-4 mr-2" />
                Initialize Templates
              </Button>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 gap-4">
            {templates.map(template => (
              <div key={template.id} className="bg-white rounded-xl border shadow-sm overflow-hidden">
                <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-sm">{template.name}</h4>
                    <span className="text-xs text-gray-500">{TYPE_LABELS[template.type]?.label || template.type}</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => copyEmail(template)}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <div className="p-4">
                  <div className="mb-2">
                    <Label className="text-xs text-gray-500">Subject</Label>
                    <p className="text-sm font-medium">{template.subject}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-gray-500">Body Preview</Label>
                    <p className="text-sm text-gray-600 line-clamp-4 whitespace-pre-line">{template.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Scan Tab */}
      {activeTab === 'scan' && (
        <div className="space-y-6">
          {/* Scan Form */}
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <h3 className="font-semibold mb-4">Scan for Brand Mentions</h3>
            <p className="text-sm text-gray-500 mb-4">
              Search Google for mentions of your brand that don't have a backlink yet.
            </p>
            
            <div className="flex gap-3">
              <Input
                placeholder="Enter keyword (e.g., achievepack, achieve pack packaging)"
                value={scanKeyword}
                onChange={(e) => setScanKeyword(e.target.value)}
                className="flex-1"
              />
              <Button onClick={scanBrandMentions} disabled={isScanning}>
                {isScanning ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Scanning...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Scan Now
                  </>
                )}
              </Button>
            </div>
            
            <div className="mt-4 text-xs text-gray-400">
              <p>Tip: Try different variations of your brand name:</p>
              <ul className="list-disc list-inside mt-1">
                <li>"achievepack" - exact brand name</li>
                <li>"achieve pack packaging" - with product type</li>
                <li>"sustainable food packaging Hong Kong" - industry + location</li>
              </ul>
            </div>
          </div>

          {/* Scan Results */}
          {scanResults.length > 0 && (
            <div className="bg-white rounded-xl border shadow-sm">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Scan Results ({scanResults.length})</h3>
              </div>
              <div className="divide-y">
                {scanResults.map((result, idx) => (
                  <div key={idx} className="p-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-sm">{result.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{result.snippet}</p>
                        <a 
                          href={result.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-500 hover:underline mt-2 inline-flex items-center gap-1"
                        >
                          {result.displayLink} <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      {!result.hasBacklink && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                          No Backlink
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Add Opportunity Sheet */}
      <Sheet open={showAddOpportunity} onOpenChange={setShowAddOpportunity}>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Add Link Opportunity</SheetTitle>
            <SheetDescription>
              Manually add a new backlink opportunity to track
            </SheetDescription>
          </SheetHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <Label>Type</Label>
              <select
                value={newOpportunity.type}
                onChange={(e) => setNewOpportunity(prev => ({ ...prev, type: e.target.value as any }))}
                className="w-full mt-1 px-3 py-2 border rounded-lg"
              >
                <option value="brand_mention">Brand Mention</option>
                <option value="competitor">Competitor Backlink</option>
                <option value="broken_link">Broken Link</option>
                <option value="resource">Resource Page</option>
                <option value="guest_post">Guest Post</option>
                <option value="case_study">Case Study Request</option>
              </select>
            </div>
            
            <div>
              <Label>Source URL *</Label>
              <Input
                value={newOpportunity.source_url}
                onChange={(e) => setNewOpportunity(prev => ({ ...prev, source_url: e.target.value }))}
                placeholder="https://example.com/article"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label>Contact Name</Label>
              <Input
                value={newOpportunity.contact_name}
                onChange={(e) => setNewOpportunity(prev => ({ ...prev, contact_name: e.target.value }))}
                placeholder="John Smith"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label>Contact Email</Label>
              <Input
                value={newOpportunity.contact_email}
                onChange={(e) => setNewOpportunity(prev => ({ ...prev, contact_email: e.target.value }))}
                placeholder="john@example.com"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label>Priority</Label>
              <select
                value={newOpportunity.priority}
                onChange={(e) => setNewOpportunity(prev => ({ ...prev, priority: Number(e.target.value) }))}
                className="w-full mt-1 px-3 py-2 border rounded-lg"
              >
                <option value="1">1 - Highest</option>
                <option value="2">2 - High</option>
                <option value="3">3 - Medium</option>
                <option value="4">4 - Low</option>
                <option value="5">5 - Lowest</option>
              </select>
            </div>
            
            <div>
              <Label>Notes</Label>
              <textarea
                value={newOpportunity.notes}
                onChange={(e) => setNewOpportunity(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="Any additional notes..."
                className="w-full mt-1 px-3 py-2 border rounded-lg h-24"
              />
            </div>
          </div>
          
          <SheetFooter>
            <Button variant="outline" onClick={() => setShowAddOpportunity(false)}>
              Cancel
            </Button>
            <Button onClick={addOpportunity} disabled={!newOpportunity.source_url}>
              <Plus className="w-4 h-4 mr-2" />
              Add Opportunity
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
