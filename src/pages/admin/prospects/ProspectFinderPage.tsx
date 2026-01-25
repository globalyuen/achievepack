import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet'
import { EmailEditor } from '@/components/EmailEditor'
import { Search, Mail, RefreshCw, Loader2, PlayCircle, StopCircle, UserMinus, Plus, Check, Send } from 'lucide-react'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

interface SearchResult {
  id: number
  name: string
  company: string
  email: string
  status: string
  sales_pitch?: string
  last_contacted?: string
}

export default function ProspectFinderPage() {
  const [activeTab, setActiveTab] = useState<'search' | 'results' | 'campaigns'>('search')
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('Hong Kong')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedProspect, setSelectedProspect] = useState<SearchResult | null>(null)
  const [isEmailOpen, setIsEmailOpen] = useState(false)
  const [emailSubject, setEmailSubject] = useState('')
  const [emailBody, setEmailBody] = useState('')
  const [isSending, setIsSending] = useState(false)
  // Auto Run Status
  const [autoRunEnabled, setAutoRunEnabled] = useState(false)
  const [history, setHistory] = useState<SearchResult[]>([])
  const [filterQuery, setFilterQuery] = useState('')

  // Auto Run Status - Explained to User
  const toggleAutoRun = async () => {
      const newState = !autoRunEnabled
      try {
        const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5001'
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

  // Fetch initial status
  useEffect(() => {
    const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5001'
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
      const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5001'
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

  const handleSearch = async () => {
    const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5001'
    if (!query) return toast.error("Please enter a keyword")
    setIsSearching(true)
    try {
      const res = await fetch(`${API_BASE}/api/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, sender: 'Admin User' }) // TODO: Get actual user
      })
      const data = await res.json()
      if (data.success) {
        toast.success("Search started successfully")
        setActiveTab('results')
        fetchResults(data.search_id)
      } else {
        toast.error("Search failed: " + data.message)
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
      const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5001'
      const res = await fetch(`${API_BASE}/api/results/${searchId}`)
      const data = await res.json()
      if (data.success) {
        setResults(data.results)
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


  // Handle composing email
  const handleCompose = (prospect: SearchResult) => {
    setSelectedProspect(prospect)
    setIsEmailOpen(true)
  }

  const handleSendEmail = async () => {
    if (!selectedProspect) return
    setIsSending(true)
    try {
      const res = await fetch('http://localhost:5001/api/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to_email: selectedProspect.email,
          subject: emailSubject,
          html_body: emailBody
        })
      })
      const data = await res.json()
      if (data.success) {
        toast.success("Email sent successfully!")
        setIsEmailOpen(false)
        // Update local status
        setResults(prev => prev.map(p => p.id === selectedProspect.id ? { ...p, status: 'sent' } : p))
      } else {
        toast.error("Failed to send: " + data.error)
      }
    } catch (e) {
      console.error(e)
      toast.error("Network error sending email")
    } finally {
      setIsSending(false)
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
                            <Input 
                                placeholder="e.g. Coffee Roasters, Marketing Agencies" 
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Region / Location</Label>
                            <Input 
                                placeholder="e.g. Hong Kong, Singapore" 
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                            />
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
                            <h2 className="text-lg font-semibold">Latest Results</h2>
                            <Input 
                                placeholder="Filter results..." 
                                className="w-[250px] h-8" 
                                value={filterQuery}
                                onChange={(e) => setFilterQuery(e.target.value)}
                            />
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => fetchResults(1)} className="gap-2"> {/* TODO: Dynamic ID */}
                            <RefreshCw className="w-4 h-4" /> Refresh
                        </Button>
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
                                            <td className="px-4 py-3 font-medium">{prospect.company || 'Unknown'}</td>
                                            <td className="px-4 py-3">
                                                <div className="flex flex-col">
                                                    <span>{prospect.name}</span>
                                                    <span className="text-neutral-500 text-xs">{prospect.email}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                    prospect.status === 'sent' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                    {prospect.status === 'sent' ? 'Contacted' : 'Pending'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-right">
                                                <Button 
                                                    size="sm" 
                                                    variant="ghost" 
                                                    className="h-8 gap-1 text-primary-600 hover:text-primary-700 hover:bg-primary-50"
                                                    onClick={() => handleCompose(prospect)}
                                                >
                                                    <Mail className="w-3 h-3" /> Compose
                                                </Button>
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
