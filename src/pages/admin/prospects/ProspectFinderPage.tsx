import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet'
import { EmailEditor } from '@/components/EmailEditor'
import { Search, Mail, RefreshCw, Loader2, PlayCircle, StopCircle, UserMinus, Plus, Check, Send, Wand2, SendHorizonal, Eye, Download, BarChart3, MousePointerClick, MailOpen } from 'lucide-react'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const API_BASE = '' // Use relative paths for Vercel API routes

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
  sender?: string
  email_opened?: boolean
  email_clicked?: boolean
  search_query?: string
}

interface EmailStats {
  total_sent: number
  opened: number
  clicked: number
  open_rate: number
  click_rate: number
}

export default function ProspectFinderPage() {
  const [activeTab, setActiveTab] = useState<'search' | 'results' | 'campaigns' | 'logs'>('search')
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
  const [isTogglingAutoRun, setIsTogglingAutoRun] = useState(false)
  const [lastRunAt, setLastRunAt] = useState<string | null>(null)
  const [isRunningManual, setIsRunningManual] = useState(false)
  const [history, setHistory] = useState<SearchResult[]>([])
  const [historyStats, setHistoryStats] = useState<EmailStats | null>(null)
  const [filterQuery, setFilterQuery] = useState('')
  const [engagementFilter, setEngagementFilter] = useState<'all' | 'opened' | 'clicked' | 'engaged' | 'no_engagement'>('all')
  // Log messages for user visibility
  const [logs, setLogs] = useState<{time: string, message: string, type: 'info' | 'success' | 'error'}[]>([])

  const addLog = (message: string, type: 'info' | 'success' | 'error' = 'info') => {
    const time = new Date().toLocaleTimeString()
    setLogs(prev => [...prev.slice(-19), { time, message, type }]) // Keep last 20 logs
    console.log(`[${time}] ${type.toUpperCase()}: ${message}`)
  }

  // Auto Run Status - Explained to User
  const toggleAutoRun = async () => {
      if (isTogglingAutoRun) return // Prevent double click
      const newState = !autoRunEnabled
      setIsTogglingAutoRun(true)
      addLog(`${newState ? 'Starting' : 'Stopping'} Auto Run...`, 'info')
      try {
        const endpoint = newState ? '/api/prospect/automation-start' : '/api/prospect/automation-stop'
        addLog(`Calling: ${API_BASE}${endpoint}`, 'info')
        const res = await fetch(`${API_BASE}${endpoint}`, { method: 'POST' })
        const data = await res.json()
        addLog(`Response: ${JSON.stringify(data)}`, data.success ? 'success' : 'error')
        if (data.success) {
           setAutoRunEnabled(newState)
           if (newState) {
               toast.success("Auto Run Enabled", { description: "Background automation started." })
               addLog('Auto Run ENABLED successfully', 'success')
           } else {
               toast.info("Auto Run Disabled")
               addLog('Auto Run DISABLED', 'info')
           }
        } else {
            toast.error("Failed to update automation status: " + (data.message || data.error || 'Unknown error'))
            addLog('Failed: ' + (data.message || data.error || 'Unknown error'), 'error')
        }
      } catch (e: any) {
          console.error(e)
          const errorMsg = e.message || 'Network error'
          toast.error(errorMsg)
          addLog('Error: ' + errorMsg, 'error')
      } finally {
          setIsTogglingAutoRun(false)
      }
  }

  // Generate AI search phrase
  const generateSearchPhrase = async () => {
    setIsGeneratingPhrase(true)
    try {
      const res = await fetch(`/api/prospect/generate-phrase`, { method: 'POST' })
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
    addLog(`Checking automation status: /api/prospect/automation-status`, 'info')
    fetch(`/api/prospect/automation-status`)
      .then(res => res.json())
      .then(data => {
          addLog(`Status response: ${JSON.stringify(data)}`, 'success')
          if (data && typeof data.running !== 'undefined') {
              setAutoRunEnabled(data.running)
              setLastRunAt(data.last_run)
              addLog(`Auto Run is ${data.running ? 'ON' : 'OFF'}${data.last_run ? `, last run: ${new Date(data.last_run).toLocaleString()}` : ''}`, data.running ? 'success' : 'info')
          }
      })
      .catch(e => {
          console.error(e)
          addLog('Failed to fetch status: ' + e.message, 'error')
      })
  }, [])

  // Manual trigger for Auto Run (for testing)
  const triggerManualRun = async () => {
    if (isRunningManual) return
    setIsRunningManual(true)
    addLog('Manually triggering Auto Run...', 'info')
    try {
      const res = await fetch('/api/prospect/cron-autorun', { method: 'GET' })
      const data = await res.json()
      addLog(`Manual run response: ${JSON.stringify(data)}`, data.success ? 'success' : 'error')
      if (data.success) {
        if (data.skipped) {
          toast.info('Auto Run is disabled - enable it first')
        } else {
          toast.success(`Auto Run complete: ${data.emailsSent || 0} emails sent`)
          fetchHistory() // Refresh history
        }
      } else {
        toast.error('Manual run failed: ' + (data.error || 'Unknown error'))
      }
    } catch (e: any) {
      addLog('Manual run error: ' + e.message, 'error')
      toast.error('Failed to trigger manual run')
    } finally {
      setIsRunningManual(false)
    }
  }

  // Fetch History
  const fetchHistory = async () => {
      try {
      const res = await fetch(`/api/prospect/email-history?limit=200`)
          const data = await res.json()
          if (data.success) {
              setHistory(data.results.map((r: any) => ({
                  ...r,
                  status: 'sent',
                  last_contacted: r.sent_at
              })))
              if (data.stats) {
                  setHistoryStats(data.stats)
              }
          }
      } catch (e) {
          console.error(e)
      }
  }

  // Export to Excel - temporarily disabled during migration
  const handleExportExcel = () => {
      // TODO: Implement Excel export via Vercel API
      toast.info('Excel export coming soon')
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
    addLog(`Searching for: "${buildSearchQuery()}"`, 'info')
    try {
      const fullQuery = buildSearchQuery()
      
      const res = await fetch(`/api/prospect/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: fullQuery, sender })
      })
      
      const data = await res.json()
      addLog(`Search response: ${JSON.stringify(data)}`, data.success ? 'success' : 'error')
      
      if (data.success && data.search_id) {
        setCurrentSearchId(data.search_id)
        toast.success(`Found ${data.prospects_created || 0} prospects!`)
        setActiveTab('results')
        fetchResults(data.search_id)
      } else {
        toast.error(data.error || "Search failed")
      }
    } catch (e: any) {
      console.error(e)
      addLog('Search error: ' + e.message, 'error')
      toast.error("Network error")
    } finally {
      setIsSearching(false)
    }
  }

  const fetchResults = async (searchId: number) => {
    try {
      const res = await fetch(`/api/prospect/results?id=${searchId}`)
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

  const filteredHistory = history.filter(r => {
      // Text search filter
      const matchesText = r.name?.toLowerCase().includes(filterQuery.toLowerCase()) || 
          r.email?.toLowerCase().includes(filterQuery.toLowerCase())
      
      // Engagement filter
      let matchesEngagement = true
      switch (engagementFilter) {
          case 'opened':
              matchesEngagement = r.email_opened === true
              break
          case 'clicked':
              matchesEngagement = r.email_clicked === true
              break
          case 'engaged':
              matchesEngagement = r.email_opened === true || r.email_clicked === true
              break
          case 'no_engagement':
              matchesEngagement = !r.email_opened && !r.email_clicked
              break
          default:
              matchesEngagement = true
      }
      
      return matchesText && matchesEngagement
  })


  // Handle composing email with preview
  const handleCompose = async (prospect: SearchResult) => {
    setSelectedProspect(prospect)
    setIsSending(true)
    try {
      // Fetch email preview from backend
      const res = await fetch(`/api/prospect/preview-email?id=${prospect.id}`)
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

  // Send single email using ProspectPro API with edited content
  const handleSendEmail = async () => {
    if (!selectedProspect) return
    if (!emailSubject.trim() || !emailBody.trim()) {
      toast.error('Subject and body are required')
      return
    }
    setIsSending(true)
    try {
      const res = await fetch(`/api/prospect/send-email?id=${selectedProspect.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: emailSubject,
          body: emailBody
        })
      })
      const data = await res.json()
      if (data.success) {
        toast.success(data.message || "Email sent successfully!")
        setIsEmailOpen(false)
        // Update local status
        setResults(prev => prev.map(p => p.id === selectedProspect.id ? { ...p, status: 'sent', email_sent: true } : p))
      } else {
        toast.error("Failed to send: " + (data.error || data.message))
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
      const res = await fetch(`/api/prospect/send-all?searchId=${currentSearchId}`, {
        method: 'POST'
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
                 <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end">
                        <div className="flex items-center space-x-2">
                            <Label htmlFor="auto-mode" className="text-sm font-medium text-neutral-600">
                                {isTogglingAutoRun ? 'Auto Run: ...' : autoRunEnabled ? 'Auto Run: ON' : 'Auto Run: OFF'}
                            </Label>
                            <Switch 
                                id="auto-mode" 
                                checked={autoRunEnabled} 
                                onCheckedChange={toggleAutoRun} 
                                disabled={isTogglingAutoRun}
                            />
                            {isTogglingAutoRun && <Loader2 className="w-4 h-4 animate-spin text-neutral-400" />}
                        </div>
                        {lastRunAt && (
                            <span className="text-xs text-neutral-400">Last: {new Date(lastRunAt).toLocaleString()}</span>
                        )}
                    </div>
                    <Button 
                        variant="outline" 
                        size="sm"
                        onClick={triggerManualRun}
                        disabled={isRunningManual}
                        className="gap-1"
                        title="Manually trigger one automation cycle"
                    >
                        {isRunningManual ? <Loader2 className="w-4 h-4 animate-spin" /> : <PlayCircle className="w-4 h-4" />}
                        Run Now
                    </Button>
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
            <button 
                 onClick={() => setActiveTab('logs')}
                 className={`pb-3 px-1 font-medium text-sm transition-colors ${activeTab === 'logs' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-neutral-500 hover:text-neutral-700'}`}
            >
                Logs ({logs.length})
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
                 <div className="space-y-6">
                    {/* Stats Cards */}
                    {historyStats && (
                        <div className="grid grid-cols-4 gap-4">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                                <div className="flex items-center gap-2 text-blue-600 mb-1">
                                    <Mail className="w-4 h-4" />
                                    <span className="text-sm font-medium">Total Sent</span>
                                </div>
                                <p className="text-2xl font-bold text-blue-900">{historyStats.total_sent}</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                                <div className="flex items-center gap-2 text-green-600 mb-1">
                                    <MailOpen className="w-4 h-4" />
                                    <span className="text-sm font-medium">Opened</span>
                                </div>
                                <p className="text-2xl font-bold text-green-900">{historyStats.opened} <span className="text-sm font-normal">({historyStats.open_rate}%)</span></p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                                <div className="flex items-center gap-2 text-purple-600 mb-1">
                                    <MousePointerClick className="w-4 h-4" />
                                    <span className="text-sm font-medium">Clicked</span>
                                </div>
                                <p className="text-2xl font-bold text-purple-900">{historyStats.clicked} <span className="text-sm font-normal">({historyStats.click_rate}%)</span></p>
                            </div>
                            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
                                <div className="flex items-center gap-2 text-amber-600 mb-1">
                                    <BarChart3 className="w-4 h-4" />
                                    <span className="text-sm font-medium">Engagement</span>
                                </div>
                                <p className="text-2xl font-bold text-amber-900">{historyStats.total_sent > 0 ? Math.round((historyStats.opened + historyStats.clicked) / historyStats.total_sent * 50) : 0}%</p>
                            </div>
                        </div>
                    )}

                    {/* Controls */}
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <h2 className="text-lg font-semibold">Sent History ({filteredHistory.length})</h2>
                            <Input 
                                placeholder="Search history..." 
                                className="w-[200px] h-8" 
                                value={filterQuery}
                                onChange={(e) => setFilterQuery(e.target.value)}
                            />
                            <select
                                value={engagementFilter}
                                onChange={(e) => setEngagementFilter(e.target.value as any)}
                                className="h-8 px-3 rounded-md border border-neutral-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                            >
                                <option value="all">All Emails</option>
                                <option value="opened">Opened</option>
                                <option value="clicked">Clicked</option>
                                <option value="engaged">Any Engagement</option>
                                <option value="no_engagement">No Engagement</option>
                            </select>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={handleExportExcel} className="gap-2">
                                <Download className="w-4 h-4" /> Export Excel
                            </Button>
                            <Button variant="ghost" size="sm" onClick={fetchHistory} className="gap-2">
                                 <RefreshCw className="w-4 h-4" /> Refresh
                            </Button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="border rounded-lg overflow-hidden bg-white shadow-sm overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-neutral-50 text-neutral-600 border-b">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Company</th>
                                    <th className="px-4 py-3 font-medium">Email</th>
                                    <th className="px-4 py-3 font-medium">Type</th>
                                    <th className="px-4 py-3 font-medium">Sender</th>
                                    <th className="px-4 py-3 font-medium">Sent At</th>
                                    <th className="px-4 py-3 font-medium text-center">Opened</th>
                                    <th className="px-4 py-3 font-medium text-center">Clicked</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {filteredHistory.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="px-4 py-8 text-center text-neutral-500">
                                            No email history found.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredHistory.map((item) => (
                                        <tr key={item.id} className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-4 py-3">
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{item.name}</span>
                                                    {item.website && (
                                                        <a href={item.website} target="_blank" rel="noopener noreferrer" className="text-neutral-500 text-xs hover:text-primary-600 truncate max-w-[150px]">
                                                            {item.website.replace(/^https?:\/\//, '')}
                                                        </a>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-neutral-600">
                                                <span className="truncate block max-w-[180px]">{item.email}</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-neutral-100 text-neutral-700 capitalize">
                                                    {item.business_type || 'general'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                                                    item.sender === 'ryan' ? 'bg-blue-100 text-blue-700' :
                                                    item.sender === 'jericha' ? 'bg-pink-100 text-pink-700' :
                                                    item.sender === 'eric' ? 'bg-green-100 text-green-700' :
                                                    'bg-neutral-100 text-neutral-700'
                                                }`}>
                                                    {item.sender || 'unknown'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-neutral-600 text-xs">
                                                {item.last_contacted ? new Date(item.last_contacted).toLocaleString() : '-'}
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                {item.email_opened ? (
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                                                        <Check className="w-4 h-4" />
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-neutral-100 text-neutral-400">-</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                {item.email_clicked ? (
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600">
                                                        <Check className="w-4 h-4" />
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-neutral-100 text-neutral-400">-</span>
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

            {/* Logs Tab */}
            {activeTab === 'logs' && (
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Activity Logs</h2>
                        <Button variant="ghost" size="sm" onClick={() => setLogs([])} className="gap-2">
                            Clear Logs
                        </Button>
                    </div>
                    <div className="border rounded-lg bg-neutral-900 text-neutral-100 p-4 font-mono text-sm h-[400px] overflow-y-auto">
                        {logs.length === 0 ? (
                            <p className="text-neutral-500">No logs yet. Actions will appear here.</p>
                        ) : (
                            logs.map((log, idx) => (
                                <div key={idx} className={`py-1 border-b border-neutral-800 last:border-0 ${
                                    log.type === 'error' ? 'text-red-400' : 
                                    log.type === 'success' ? 'text-green-400' : 'text-neutral-300'
                                }`}>
                                    <span className="text-neutral-500">[{log.time}]</span>{' '}
                                    <span className={`uppercase text-xs px-1 rounded ${
                                        log.type === 'error' ? 'bg-red-900 text-red-300' : 
                                        log.type === 'success' ? 'bg-green-900 text-green-300' : 'bg-neutral-700 text-neutral-300'
                                    }`}>{log.type}</span>{' '}
                                    {log.message}
                                </div>
                            ))
                        )}
                    </div>
                    <div className="p-4 bg-blue-50 text-blue-800 rounded-lg text-sm">
                        <p className="font-medium mb-1">💡 API Endpoints:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Status: <code className="bg-blue-100 px-1 rounded">{API_BASE}/api/automation/status</code></li>
                            <li>Start: <code className="bg-blue-100 px-1 rounded">{API_BASE}/api/automation/start</code></li>
                            <li>Stop: <code className="bg-blue-100 px-1 rounded">{API_BASE}/api/automation/stop</code></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>

        {/* Email Composer Sheet */}
        <Sheet open={isEmailOpen} onOpenChange={setIsEmailOpen}>
            <SheetContent className="sm:max-w-2xl w-full overflow-y-auto">
                <SheetHeader className="mb-4">
                    <SheetTitle>Edit & Send Email</SheetTitle>
                    <SheetDescription>
                        To: <span className="font-medium text-neutral-900">{selectedProspect?.email}</span>
                        <span className="block text-xs text-green-600 mt-1">Edit the content below before sending. Includes unsubscribe link.</span>
                    </SheetDescription>
                </SheetHeader>
                
                <div className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-medium text-neutral-500">Subject Line</label>
                        <Input 
                            value={emailSubject} 
                            onChange={(e) => setEmailSubject(e.target.value)}
                            placeholder="Enter email subject..."
                        />
                    </div>
                    
                    <div className="space-y-1">
                        <label className="text-xs font-medium text-neutral-500">Message Body</label>
                        <div className="text-xs text-neutral-400 mb-1">Tip: Links to achievepack.com pages and unsubscribe link are included</div>
                        <EmailEditor 
                            value={emailBody} 
                            onChange={setEmailBody}
                        />
                    </div>
                    
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800">
                        <strong>SEO Links included:</strong>
                        <ul className="mt-1 space-y-0.5 text-amber-700">
                            <li>• achievepack.com/materials/compostable</li>
                            <li>• achievepack.com/packaging/stand-up-pouches</li>
                            <li>• achievepack.com/free-service</li>
                            <li>• Calendly booking link</li>
                            <li>• Unsubscribe link (GDPR compliant)</li>
                        </ul>
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
