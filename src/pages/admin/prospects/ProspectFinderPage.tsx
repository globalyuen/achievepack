import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet'
import { EmailEditor } from '@/components/EmailEditor'
import { Search, Mail, Play, Pause, RefreshCw, Loader2, CheckCircle, XCircle, FileText, Download, Send } from 'lucide-react'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'

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

  const handleSearch = async () => {
    if (!query) return toast.error("Please enter a keyword")
    setIsSearching(true)
    try {
      const res = await fetch('http://localhost:5001/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, sender: 'Admin User' }) // TODO: Get actual user
      })
      const data = await res.json()
      if (data.success) {
        toast.success("Search started successfully")
        // Poll for results or wait
        // For now, let's just simulate or fetch immediately if sync (it's likely async)
        // We'll switch to results tab and let user refresh
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
      const res = await fetch(`http://localhost:5001/api/results/${searchId}`)
      const data = await res.json()
      if (data.success) {
        setResults(data.results)
      }
    } catch (e) {
      console.error(e)
    }
  }

  // Handle composing email
  const handleCompose = (prospect: SearchResult) => {
    setSelectedProspect(prospect)
    setEmailSubject(`Partnership Opportunity: ${prospect.company || 'Your Company'} x Achieve Pack`)
    setEmailBody(prospect.sales_pitch || '')
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
                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border shadow-sm">
                    <span className="text-sm font-medium">Auto Run:</span>
                    <button 
                        onClick={() => setAutoRunEnabled(!autoRunEnabled)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${autoRunEnabled ? 'bg-green-500' : 'bg-neutral-300'}`}
                    >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${autoRunEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                 </div>
                 <Link to="/ctrl-x9k7m/prospects/lists">
                    <Button variant="outline">Manage Lists</Button>
                 </Link>
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
                Campaigns
            </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-100 min-h-[500px] p-6">
            {activeTab === 'search' && (
                <div className="max-w-2xl mx-auto mt-10 space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-700">Keyword / Industry</label>
                        <Input 
                            placeholder="e.g. Organic Coffee Roasters" 
                            className="h-12 text-lg"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-700">Region</label>
                        <select 
                            className="w-full h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                        >
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Australia">Australia</option>
                            <option value="Global">Global</option>
                        </select>
                    </div>
                    <Button 
                        size="lg" 
                        className="w-full h-12 text-lg gap-2"
                        onClick={handleSearch}
                        disabled={isSearching}
                    >
                        {isSearching ? <Loader2 className="animate-spin" /> : <Search className="w-5 h-5" />}
                        Start Prospecting
                    </Button>
                </div>
            )}

            {activeTab === 'results' && (
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Latest Results</h2>
                        <Button variant="ghost" size="sm" onClick={() => fetchResults(1)} className="gap-2"> {/* TODO: Dynamic ID */}
                            <RefreshCw className="w-4 h-4" /> Refresh
                        </Button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-neutral-50 text-neutral-500 font-medium">
                                <tr>
                                    <th className="px-4 py-3 rounded-tl-lg">Company</th>
                                    <th className="px-4 py-3">Email</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3 rounded-tr-lg text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-100">
                                {results.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="px-4 py-8 text-center text-neutral-400">
                                            No results found. Start a new search.
                                        </td>
                                    </tr>
                                ) : (
                                    results.map((prospect) => (
                                        <tr key={prospect.id} className="hover:bg-neutral-50/50">
                                            <td className="px-4 py-3 font-medium text-neutral-900">{prospect.name || prospect.company}</td>
                                            <td className="px-4 py-3 text-neutral-600">{prospect.email}</td>
                                            <td className="px-4 py-3">
                                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                    prospect.status === 'sent' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                    {prospect.status || 'Pending'}
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
                <div className="text-center py-20 text-neutral-400">
                    <p>Automation Campaigns coming soon.</p>
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
