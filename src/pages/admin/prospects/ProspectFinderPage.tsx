import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet'
import { EmailEditor } from '@/components/EmailEditor'
import { Search, Mail, RefreshCw, Loader2, PlayCircle, StopCircle, UserMinus, Plus, Check, Send, Wand2, SendHorizonal, Eye } from 'lucide-react'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5001'

// Sender profiles matching ProspectPro
const SENDERS = [
  { key: 'ryan', name: 'Ryan Wong', email: 'ryan@pouch.eco' },
  { key: 'jericha', name: 'Jericha K.', email: 'Jericha.k@pouch.eco' },
  { key: 'eric', name: 'Eric Chan', email: 'eric@pouch.eco' },
]

interface SearchResult {
  id: number
  name: string
  company: string
  email: string
  website?: string
  status: string
  sales_pitch?: string
  business_type?: string
  last_contacted?: string
  email_sent?: boolean
}

export default function ProspectFinderPage() {
  const [activeTab, setActiveTab] = useState<'search' | 'results' | 'campaigns'>('search')
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('Hong Kong')
  const [sender, setSender] = useState('ryan')
  const [isSearching, setIsSearching] = useState(false)
  const [isGeneratingPhrase, setIsGeneratingPhrase] = useState(false)
  const [results, setResults] = useState<SearchResult[]>([])
  const [currentSearchId, setCurrentSearchId] = useState<number | null>(null)
  const [selectedProspect, setSelectedProspect] = useState<SearchResult | null>(null)
  const [isEmailOpen, setIsEmailOpen] = useState(false)
  const [emailSubject, setEmailSubject] = useState('')
  const [emailBody, setEmailBody] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [isSendingAll, setIsSendingAll] = useState(false)
  // Auto Run Status
  const [autoRunEnabled, setAutoRunEnabled] = useState(false)
  const [history, setHistory] = useState<SearchResult[]>([])
  const [filterQuery, setFilterQuery] = useState('')

  // Auto Run Status - Explained to User
  const toggleAutoRun = async () => {
      const newState = !autoRunEnabled
      try {
        const endpoint = newState ? '/api/automation/start' : '/api/automation/stop'
        const res = await fetch(`${API_BASE}${endpoint}`, { method: 'POST' })
        const data = await res.json()
        if (data.success) {
           setAutoRunEnabled(newState)
           if (newState) {
               toast.success("Auto Run Enabled", { description: "Background automation started." })
           } else {
               toast.info("Auto Run Disabled")
           }
        } else {
            toast.error("Failed to update automation status")
        }
      } catch (e) {
          console.error(e)
          toast.error("Network error")
      }
  }

  // Generate AI search phrase
  const generateSearchPhrase = async () => {
    setIsGeneratingPhrase(true)
    try {
      const res = await fetch(`${API_BASE}/generate-phrase-v2`, { method: 'POST' })
      const data = await res.json()
      if (data.success && data.phrase) {
        setQuery(data.phrase)
        toast.success("Search phrase generated!")
      } else {
        toast.error("Failed to generate phrase")
      }
    } catch (e) {
      console.error(e)
      toast.error("Network error")
    } finally {
      setIsGeneratingPhrase(false)
    }
  }

  // Fetch initial status
  useEffect(() => {
    fetch(`${API_BASE}/api/automation/status`)
      .then(res => res.json())
      .then(data => {
          if (data && typeof data.running !== 'undefined') {
              setAutoRunEnabled(data.running)
          }
      })
      .catch(console.error)
  }, [])

  // Fetch History
  const fetchHistory = async () => {
      try {
      const res = await fetch(`${API_BASE}/api/email/history`)
          const data = await res.json()
          if (data.success) {
              setHistory(data.results.map((r: any) => ({
                  ...r,
                  status: 'sent',
                  last_contacted: r.sent_at
              })))
          }
      } catch (e) {
          console.error(e)
      }
  }

  // Effect to load history when tab changes
  useEffect(() => {
      if (activeTab === 'campaigns') { 
          fetchHistory()
      }
  }, [activeTab])

  // Build full search query with region
  const buildSearchQuery = () => {
    if (region && !query.toLowerCase().includes(region.toLowerCase())) {
      return `${query} in ${region}`
    }
    return query
  }

  const handleSearch = async () => {
    if (!query) return toast.error("Please enter a keyword")
    setIsSearching(true)
    try {
      const fullQuery = buildSearchQuery()
      // Use form submission to match ProspectPro backend
      const formData = new FormData()
      formData.append('query', fullQuery)
      formData.append('sender', sender)
      
      const res = await fetch(`${API_BASE}/search`, {
        method: 'POST',
        body: formData
      })
      
      // Check if redirected to results page (success case)
      if (res.redirected || res.ok) {
        // Extract search_id from redirect URL or try API
        const urlMatch = res.url.match(/search_id=(\d+)/)
        if (urlMatch) {
          const searchId = parseInt(urlMatch[1])
          setCurrentSearchId(searchId)
          toast.success("Search completed!")
          setActiveTab('results')
          fetchResults(searchId)
        } else {
          // Try to get latest search via API
          toast.success("Search started!")
          setActiveTab('results')
        }
      } else {
        toast.error("Search failed")
      }
    } catch (e) {
      console.error(e)
      toast.error("Network error")
    } finally {
      setIsSearching(false)
    }
  }

  const fetchResults = async (searchId: number) => {
    try {
      const res = await fetch(`${API_BASE}/api/results/${searchId}`)
      const data = await res.json()
      if (data.success) {
        setResults(data.results.map((r: any) => ({
          ...r,
          status: r.email_sent ? 'sent' : 'pending'
        })))
        setCurrentSearchId(searchId)
      }
    } catch (e) {
      console.error(e)
    }
  }

  // Filtered Results
  const filteredResults = results.filter(r => 
      r.name?.toLowerCase().includes(filterQuery.toLowerCase()) || 
      r.email?.toLowerCase().includes(filterQuery.toLowerCase()) ||
      (r.company && r.company.toLowerCase().includes(filterQuery.toLowerCase()))
  )

  const filteredHistory = history.filter(r => 
      r.name?.toLowerCase().includes(filterQuery.toLowerCase()) || 
      r.email?.toLowerCase().includes(filterQuery.toLowerCase())
  )


  // Handle composing email with preview
  const handleCompose = async (prospect: SearchResult) => {
    setSelectedProspect(prospect)
    setIsSending(true)
    try {
      // Fetch email preview from backend
      const res = await fetch(`${API_BASE}/preview-email/${prospect.id}`)
      const data = await res.json()
      if (data.success) {
        setEmailSubject(data.subject)
        setEmailBody(data.body)
      } else {
        // Fallback to sales_pitch
        setEmailSubject(`Boost ${prospect.name} sales with eco-friendly packaging`)
        setEmailBody(prospect.sales_pitch || '')
      }
    } catch (e) {
      console.error(e)
      setEmailSubject(`Boost ${prospect.name} sales with eco-friendly packaging`)
      setEmailBody(prospect.sales_pitch || '')
    } finally {
      setIsSending(false)
      setIsEmailOpen(true)
    }
  }

  // Send single email using ProspectPro API
  const handleSendEmail = async () => {
    if (!selectedProspect) return
    setIsSending(true)
    try {
      const res = await fetch(`${API_BASE}/send-single-email/${selectedProspect.id}`, {
        method: 'POST'
      })
      const data = await res.json()
      if (data.success) {
        toast.success(data.message || "Email sent successfully!")
        setIsEmailOpen(false)
        // Update local status
        setResults(prev => prev.map(p => p.id === selectedProspect.id ? { ...p, status: 'sent', email_sent: true } : p))
      } else {
        toast.error("Failed to send: " + data.message)
      }
    } catch (e) {
      console.error(e)
      toast.error("Network error sending email")
    } finally {
      setIsSending(false)
    }
  }

  // Send all emails for current search
  const handleSendAllEmails = async () => {
    if (!currentSearchId) return toast.error("No search selected")
    const pendingCount = results.filter(r => r.status !== 'sent' && r.email && r.email !== 'N/A').length
    if (pendingCount === 0) return toast.info("No pending emails to send")
    
    setIsSendingAll(true)
    try {
      const formData = new FormData()
      const res = await fetch(`${API_BASE}/send-emails/${currentSearchId}`, {
        method: 'POST',
        body: formData
      })
      
      if (res.ok || res.redirected) {
        toast.success(`Emails sent successfully!`)
        // Refresh results
        fetchResults(currentSearchId)
      } else {
        toast.error("Failed to send emails")
      }
    } catch (e) {
      console.error(e)
      toast.error("Network error")
    } finally {
      setIsSendingAll(false)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-3xl font-bold text-neutral-900">Prospect Finder</h1>
                <p className="text-neutral-500">AI-powered lead generation and outreach</p>
            </div>
            <div className="flex items-center gap-4">
                 <div className="flex items-center space-x-2">
                    <Label htmlFor="auto-mode" className="text-sm font-medium text-neutral-600">
                        {autoRunEnabled ? 'Auto Run: ON' : 'Auto Run: OFF'}
                    </Label>
                    <Switch id="auto-mode" checked={autoRunEnabled} onCheckedChange={toggleAutoRun} />
                </div>
                <Button variant="outline" asChild>
                    <Link to="/ctrl-x9k7m/prospects/lists">
                        Manage Lists
                    </Link>
                </Button>
            </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-neutral-200 mb-6">
            <button 
                onClick={() => setActiveTab('search')}
                className={`pb-3 px-1 font-medium text-sm transition-colors ${activeTab === 'search' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-neutral-500 hover:text-neutral-700'}`}
            >
                New Search
            </button>
            <button 
                onClick={() => setActiveTab('results')}
                className={`pb-3 px-1 font-medium text-sm transition-colors ${activeTab === 'results' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-neutral-500 hover:text-neutral-700'}`}
            >
                Results
            </button>
            <button 
                 onClick={() => setActiveTab('campaigns')}
                 className={`pb-3 px-1 font-medium text-sm transition-colors ${activeTab === 'campaigns' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-neutral-500 hover:text-neutral-700'}`}
            >
                History ({history.length})
            </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-100 min-h-[500px] p-6">
            {activeTab === 'search' && (
                <div className="max-w-xl space-y-8">
                     {/* Search Form */}
                    <div className="space-y-4 p-6 border rounded-xl bg-white shadow-sm">
                        <div className="space-y-2">
                            <Label>Target Keyword</Label>
                            <div className="flex gap-2">
                                <Input 
                                    placeholder="e.g. organic coffee roasters, artisan bakeries" 
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="flex-1"
                                />
                                <Button 
                                    variant="outline" 
                                    size="icon"
                                    onClick={generateSearchPhrase}
                                    disabled={isGeneratingPhrase}
                                    title="Generate AI Search Phrase"
                                >
                                    {isGeneratingPhrase ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                                </Button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Region / Location</Label>
                            <Input 
                                placeholder="e.g. Hong Kong, New York, London" 
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Send From</Label>
                            <select 
                                value={sender} 
                                onChange={(e) => setSender(e.target.value)}
                                className="w-full h-10 px-3 rounded-md border border-neutral-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                            >
                                {SENDERS.map(s => (
                                    <option key={s.key} value={s.key}>
                                        {s.name} ({s.email})
                                    </option>
                                ))}
                            </select>
                        </div>
                        <Button 
                            className="w-full gap-2" 
                            onClick={handleSearch}
                            disabled={isSearching}
                        >
                            {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                            {isSearching ? "Searching..." : "Find Prospects"}
                        </Button>
                    </div>

                    <div className="p-4 bg-blue-50 text-blue-800 rounded-lg text-sm">
                        <p className="font-medium mb-1">💡 Pro Tip:</p>
                        <p>Use specific keywords combined with locations for better results. The system will automatically filter out duplicates and blocked domains.</p>
                    </div>
                </div>
            )}

            {activeTab === 'results' && (
                <div>
                     <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-4 items-center">
                            <h2 className="text-lg font-semibold">Results ({filteredResults.length})</h2>
                            <Input 
                                placeholder="Filter results..." 
                                className="w-[250px] h-8" 
                                value={filterQuery}
                                onChange={(e) => setFilterQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button 
                                variant="default" 
                                size="sm" 
                                onClick={handleSendAllEmails} 
                                disabled={isSendingAll || !currentSearchId}
                                className="gap-2"
                            >
                                {isSendingAll ? <Loader2 className="w-4 h-4 animate-spin" /> : <SendHorizonal className="w-4 h-4" />}
                                Send All Emails
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => currentSearchId && fetchResults(currentSearchId)} className="gap-2">
                                <RefreshCw className="w-4 h-4" /> Refresh
                            </Button>
                        </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-neutral-50 text-neutral-600 border-b">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Company</th>
                                    <th className="px-4 py-3 font-medium">Contact</th>
                                    <th className="px-4 py-3 font-medium">Status</th>
                                    <th className="px-4 py-3 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {filteredResults.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="px-4 py-8 text-center text-neutral-500">
                                            No results found. Start a new search.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredResults.map((prospect) => (
                                        <tr key={prospect.id} className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-4 py-3">
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{prospect.name}</span>
                                                    {prospect.website && (
                                                        <a href={prospect.website} target="_blank" rel="noopener noreferrer" className="text-neutral-500 text-xs hover:text-primary-600 truncate max-w-[200px]">
                                                            {prospect.website.replace(/^https?:\/\//, '')}
                                                        </a>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex flex-col">
                                                    <span className={prospect.email === 'N/A' ? 'text-neutral-400' : ''}>{prospect.email}</span>
                                                    {prospect.business_type && (
                                                        <span className="text-neutral-500 text-xs capitalize">{prospect.business_type}</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                    prospect.status === 'sent' || prospect.email_sent ? 'bg-green-100 text-green-700' : 
                                                    prospect.email === 'N/A' ? 'bg-neutral-100 text-neutral-500' : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                    {prospect.status === 'sent' || prospect.email_sent ? 'Sent' : 
                                                     prospect.email === 'N/A' ? 'No Email' : 'Pending'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-right">
                                                {prospect.email && prospect.email !== 'N/A' && !prospect.email_sent && prospect.status !== 'sent' && (
                                                    <Button 
                                                        size="sm" 
                                                        variant="ghost" 
                                                        className="h-8 gap-1 text-primary-600 hover:text-primary-700 hover:bg-primary-50"
                                                        onClick={() => handleCompose(prospect)}
                                                    >
                                                        <Eye className="w-3 h-3" /> Preview & Send
                                                    </Button>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            
            {activeTab === 'campaigns' && (
                 <div>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-4 items-center">
                            <h2 className="text-lg font-semibold">Sent History</h2>
                            <Input 
                                placeholder="Search history..." 
                                className="w-[250px] h-8" 
                                value={filterQuery}
                                onChange={(e) => setFilterQuery(e.target.value)}
                            />
                        </div>
                        <Button variant="ghost" size="sm" onClick={fetchHistory} className="gap-2">
                             <RefreshCw className="w-4 h-4" /> Refresh
                        </Button>
                    </div>

                    <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-neutral-50 text-neutral-600 border-b">
                                <tr>
                                    <th className="px-4 py-3 font-medium">To</th>
                                    <th className="px-4 py-3 font-medium">Sent At</th>
                                    <th className="px-4 py-3 font-medium">Subject</th>
                                    <th className="px-4 py-3 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {filteredHistory.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="px-4 py-8 text-center text-neutral-500">
                                            No email history found.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredHistory.map((item) => (
                                        <tr key={item.id} className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-4 py-3">
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{item.email}</span>
                                                    <span className="text-neutral-500 text-xs">{item.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-neutral-600">
                                                {item.last_contacted ? new Date(item.last_contacted).toLocaleString() : '-'}
                                            </td>
                                            <td className="px-4 py-3 text-neutral-600">
                                                 Partnership Opportunity
                                            </td>
                                            <td className="px-4 py-3 text-right">
                                                <span className="text-xs text-green-600 font-medium flex items-center justify-end gap-1">
                                                    <Check className="w-3 h-3" /> Sent
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>

        {/* Email Composer Sheet */}
        <Sheet open={isEmailOpen} onOpenChange={setIsEmailOpen}>
            <SheetContent className="sm:max-w-2xl w-full overflow-y-auto">
                <SheetHeader className="mb-4">
                    <SheetTitle>Compose Email</SheetTitle>
                    <SheetDescription>
                        To: <span className="font-medium text-neutral-900">{selectedProspect?.email}</span>
                    </SheetDescription>
                </SheetHeader>
                
                <div className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-medium text-neutral-500">Subject</label>
                        <Input 
                            value={emailSubject} 
                            onChange={(e) => setEmailSubject(e.target.value)}
                        />
                    </div>
                    
                    <div className="space-y-1">
                        <label className="text-xs font-medium text-neutral-500">Message</label>
                        <EmailEditor 
                            value={emailBody} 
                            onChange={setEmailBody}
                        />
                    </div>
                </div>

                <SheetFooter className="mt-8">
                    <Button variant="outline" onClick={() => setIsEmailOpen(false)}>Cancel</Button>
                    <Button onClick={handleSendEmail} disabled={isSending} className="gap-2">
                        {isSending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                        Send Email
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
