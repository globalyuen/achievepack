import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useSearchParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { supabase, Quote, ArtworkFile, Profile } from '../lib/supabase'
import { 
  Home, FileCheck, Image as ImageIcon, LogOut, Eye, Trash2, ArrowLeft, 
  RefreshCw, CheckCircle, Clock, AlertCircle, MessageSquare, X, 
  Mail, Globe, Camera, FileText, Link2, Upload, Tag
} from 'lucide-react'

type TabType = 'quotes' | 'artwork'

const ADMIN_EMAIL = 'ryan@achievepack.com'

const AdminManagementPage: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { user, signOut, loading: authLoading } = useAuth()
  const [activeTab, setActiveTab] = useState<TabType>('quotes')
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [artworks, setArtworks] = useState<ArtworkFile[]>([])
  const [customers, setCustomers] = useState<Profile[]>([])
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null)
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkFile | null>(null)
  const [artworkFeedback, setArtworkFeedback] = useState('')
  const [adminReply, setAdminReply] = useState('')
  const [quotedAmount, setQuotedAmount] = useState('')
  
  // Coding assignment states
  const [artworkCustomerCode, setArtworkCustomerCode] = useState('')
  const [artworkProductCode, setArtworkProductCode] = useState('')
  const [artworkLinkType, setArtworkLinkType] = useState<'order' | 'quote' | 'none'>('none')
  const [artworkLinkedId, setArtworkLinkedId] = useState('')
  const [proofUrl, setProofUrl] = useState('')

  // Check URL params for tab
  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab === 'quotes' || tab === 'artwork') {
      setActiveTab(tab)
    }
  }, [searchParams])

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
    const [quotesRes, rfqRes, artworksRes, customersRes, ordersRes] = await Promise.all([
      supabase.from('quotes').select('*').order('created_at', { ascending: false }),
      supabase.from('rfq_submissions').select('*').order('created_at', { ascending: false }),
      supabase.from('artwork_files').select('*').order('created_at', { ascending: false }),
      supabase.from('profiles').select('*'),
      supabase.from('orders').select('*').order('created_at', { ascending: false })
    ])
    
    // Merge quotes and RFQ submissions
    const regularQuotes = quotesRes.data || []
    const rfqSubmissions = (rfqRes.data || []).map(rfq => ({
      ...rfq,
      quote_number: `RFQ-${rfq.id.slice(0, 8)}`,
      total_amount: 0,
      valid_until: new Date(new Date(rfq.created_at).getTime() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      notes: rfq.message,
      is_rfq: true
    }))
    
    const allQuotes = [...regularQuotes, ...rfqSubmissions].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
    
    setQuotes(allQuotes)
    setArtworks(artworksRes.data || [])
    setCustomers(customersRes.data || [])
    setOrders(ordersRes.data || [])
    setLoading(false)
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const updateQuoteStatus = async (quoteId: string, status: string) => {
    const quote = quotes.find(q => q.id === quoteId)
    if (quote?.is_rfq) {
      await supabase.from('rfq_submissions').update({ status }).eq('id', quoteId)
    } else {
      await supabase.from('quotes').update({ status }).eq('id', quoteId)
    }
    fetchData()
    setSelectedQuote(null)
  }

  const sendQuoteReply = async () => {
    if (!selectedQuote || !adminReply.trim()) {
      alert('Please enter a reply message')
      return
    }

    try {
      const quote = quotes.find(q => q.id === selectedQuote.id)
      const updateData: any = {
        admin_reply: adminReply,
        replied_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }

      // Add quoted amount if provided
      if (quotedAmount && !isNaN(parseFloat(quotedAmount))) {
        updateData.quoted_amount = parseFloat(quotedAmount)
      }

      // Update the appropriate table
      if (quote?.is_rfq) {
        await supabase.from('rfq_submissions').update(updateData).eq('id', selectedQuote.id)
      } else {
        await supabase.from('quotes').update(updateData).eq('id', selectedQuote.id)
      }

      // TODO: Send email notification to customer
      // This would require setting up email service (e.g., SendGrid, AWS SES)

      alert('Reply sent successfully! Customer will be notified via email.')
      setAdminReply('')
      setQuotedAmount('')
      fetchData()
      setSelectedQuote(null)
    } catch (error: any) {
      console.error('Error sending reply:', error)
      alert('Failed to send reply: ' + error.message)
    }
  }

  const deleteQuote = async (quoteId: string) => {
    if (confirm('Are you sure you want to delete this quote?')) {
      const quote = quotes.find(q => q.id === quoteId)
      if (quote?.is_rfq) {
        await supabase.from('rfq_submissions').delete().eq('id', quoteId)
      } else {
        await supabase.from('quotes').delete().eq('id', quoteId)
      }
      fetchData()
      setSelectedQuote(null)
    }
  }

  const updateArtworkStatus = async (artworkId: string, status: string, feedback?: string) => {
    await supabase.from('artwork_files').update({ 
      status,
      admin_feedback: feedback || null,
      updated_at: new Date().toISOString()
    }).eq('id', artworkId)
    fetchData()
    setSelectedArtwork(null)
    setArtworkFeedback('')
  }

  const deleteArtwork = async (artworkId: string) => {
    if (confirm('Are you sure you want to delete this artwork?')) {
      await supabase.from('artwork_files').delete().eq('id', artworkId)
      fetchData()
      setSelectedArtwork(null)
    }
  }

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800',
      accepted: 'bg-green-100 text-green-800',
      expired: 'bg-red-100 text-red-800',
      rejected: 'bg-red-100 text-red-800',
      pending_review: 'bg-blue-100 text-blue-800',
      approved: 'bg-green-100 text-green-800',
      revision_needed: 'bg-orange-100 text-orange-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  const getCustomer = (userId: string) => {
    return customers.find(c => c.id === userId)
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

  const pendingQuotes = quotes.filter(q => q.status === 'pending').length
  const pendingArtworks = artworks.filter(a => a.status === 'pending_review').length

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r border-gray-200">
          <div className="flex items-center flex-shrink-0 px-4">
            <Link to="/ctrl-x9k7m" className="flex items-center gap-2">
              <img src="/ap-logo.svg" alt="Logo" className="h-8 w-auto" />
              <span className="font-bold text-gray-900">Admin</span>
            </Link>
          </div>

          <div className="px-4 mt-8">
            <Link to="/ctrl-x9k7m" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Main Admin
            </Link>
          </div>

          <div className="px-4 mt-6">
            <hr className="border-gray-200" />
          </div>

          <div className="flex flex-col flex-1 px-3 mt-6">
            <nav className="flex-1 space-y-2">
              <button
                onClick={() => setActiveTab('quotes')}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'quotes'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <FileCheck className="flex-shrink-0 w-5 h-5 mr-4" />
                Quotes & RFQ
                {pendingQuotes > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {pendingQuotes}
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('artwork')}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'artwork'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <ImageIcon className="flex-shrink-0 w-5 h-5 mr-4" />
                Artwork Files
                {pendingArtworks > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {pendingArtworks}
                  </span>
                )}
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
          <Link to="/ctrl-x9k7m" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Quotes & Artwork</span>
          </Link>
          <button onClick={handleSignOut} className="text-gray-600">
            <LogOut className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex overflow-x-auto bg-white border-b px-2 py-2 gap-2">
          {(['quotes', 'artwork'] as TabType[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tab === 'quotes' ? 'Quotes & RFQ' : 'Artwork'}
            </button>
          ))}
        </div>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {/* Quotes Tab */}
          {activeTab === 'quotes' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Quotes & Customer Requests</h1>
                  <p className="text-sm text-gray-500 mt-1">Manage all quotes and RFQ submissions</p>
                </div>
                <button
                  onClick={fetchData}
                  className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 text-sm"
                >
                  <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">Total Quotes</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{quotes.length}</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600 mt-1">{pendingQuotes}</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">RFQ Submissions</p>
                  <p className="text-2xl font-bold text-blue-600 mt-1">
                    {quotes.filter(q => q.is_rfq).length}
                  </p>
                </div>
              </div>

              {/* Quotes Table */}
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quote #</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {quotes.map(quote => {
                        const customer = getCustomer(quote.user_id)
                        return (
                          <tr key={quote.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{quote.quote_number}</td>
                            <td className="px-6 py-4">
                              <div>
                                <p className="text-sm font-medium text-gray-900">{customer?.full_name || 'Unknown'}</p>
                                <p className="text-xs text-gray-500">{customer?.email}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              {quote.is_rfq ? (
                                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                                  RFQ
                                </span>
                              ) : (
                                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
                                  Quote
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                              {quote.is_rfq ? '-' : `$${quote.total_amount?.toLocaleString()}`}
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(quote.status)}`}>
                                {quote.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              {new Date(quote.created_at).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <button onClick={() => setSelectedQuote(quote)} className="text-primary-600 hover:text-primary-700">
                                  <Eye className="h-5 w-5" />
                                </button>
                                <button onClick={() => deleteQuote(quote.id)} className="text-red-600 hover:text-red-700">
                                  <Trash2 className="h-5 w-5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                  {quotes.length === 0 && (
                    <div className="text-center py-12 text-gray-500">No quotes found</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Artwork Tab */}
          {activeTab === 'artwork' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Artwork Files</h1>
                  <p className="text-sm text-gray-500 mt-1">Review and manage customer artwork submissions</p>
                </div>
                <button
                  onClick={fetchData}
                  className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 text-sm"
                >
                  <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">Total Files</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{artworks.length}</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">Pending Review</p>
                  <p className="text-2xl font-bold text-blue-600 mt-1">
                    {artworks.filter(a => a.status === 'pending_review').length}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">Approved</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">
                    {artworks.filter(a => a.status === 'approved').length}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border">
                  <p className="text-sm text-gray-500">Need Revision</p>
                  <p className="text-2xl font-bold text-orange-600 mt-1">
                    {artworks.filter(a => a.status === 'revision_needed').length}
                  </p>
                </div>
              </div>

              {/* Artwork Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {artworks.map(artwork => {
                  const customer = getCustomer(artwork.user_id)
                  return (
                    <div key={artwork.id} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                              <ImageIcon className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900 truncate">{artwork.name}</p>
                              <p className="text-xs text-gray-500">{formatFileSize(artwork.file_size)}</p>
                            </div>
                          </div>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(artwork.status)}`}>
                            {artwork.status.replace('_', ' ')}
                          </span>
                        </div>

                        <div className="space-y-2 mb-3">
                          <div>
                            <p className="text-xs text-gray-500">Customer</p>
                            <p className="text-sm text-gray-900">{customer?.full_name || 'Unknown'}</p>
                            <p className="text-xs text-gray-600">{customer?.email}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Uploaded</p>
                            <p className="text-sm text-gray-900">{new Date(artwork.created_at).toLocaleDateString()}</p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedArtwork(artwork)}
                            className="flex-1 px-3 py-2 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition"
                          >
                            Review
                          </button>
                          <a
                            href={artwork.file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition"
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {artworks.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <ImageIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>No artwork files uploaded yet</p>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Quote Detail Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">{selectedQuote.quote_number}</h2>
                {selectedQuote.is_rfq && (
                  <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                    Customer Request (RFQ)
                  </span>
                )}
              </div>
              <button onClick={() => setSelectedQuote(null)} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Customer</p>
                  <p className="font-medium">{getCustomer(selectedQuote.user_id)?.full_name || 'Unknown'}</p>
                  <p className="text-sm text-gray-600">{getCustomer(selectedQuote.user_id)?.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <select
                    value={selectedQuote.status}
                    onChange={(e) => updateQuoteStatus(selectedQuote.id, e.target.value)}
                    className={`mt-1 px-3 py-1 rounded-lg border ${getStatusColor(selectedQuote.status)}`}
                  >
                    <option value="pending">Pending</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
                    <option value="expired">Expired</option>
                  </select>
                </div>
              </div>

              {selectedQuote.is_rfq && (
                <>
                  {selectedQuote.message && (
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Customer Message</p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedQuote.message}</p>
                      </div>
                    </div>
                  )}

                  {selectedQuote.website_link && (
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Product Website</p>
                      <a 
                        href={selectedQuote.website_link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:underline flex items-center gap-2"
                      >
                        <Globe className="h-4 w-4" />
                        {selectedQuote.website_link}
                      </a>
                    </div>
                  )}

                  {selectedQuote.photo_urls && selectedQuote.photo_urls.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Reference Images ({selectedQuote.photo_urls.length})</p>
                      <div className="grid grid-cols-3 gap-3">
                        {selectedQuote.photo_urls.map((url, idx) => (
                          <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="block">
                            <img 
                              src={url} 
                              alt={`Reference ${idx + 1}`} 
                              className="w-full h-32 object-cover rounded-lg border border-gray-200 hover:border-primary-400 transition"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {!selectedQuote.is_rfq && selectedQuote.total_amount !== undefined && (
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="text-2xl font-bold text-green-600">${selectedQuote.total_amount.toLocaleString()}</p>
                </div>
              )}

              {/* Show existing admin reply if present */}
              {(selectedQuote.admin_reply || (selectedQuote as any).quoted_amount) && (
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-sm font-semibold text-blue-800 mb-2">Previous Admin Reply</p>
                  {selectedQuote.admin_reply && (
                    <p className="text-sm text-blue-900 whitespace-pre-wrap mb-2">{selectedQuote.admin_reply}</p>
                  )}
                  {(selectedQuote as any).quoted_amount && (
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm text-blue-700">Quoted Amount:</span>
                      <span className="text-lg font-bold text-blue-900">${(selectedQuote as any).quoted_amount.toLocaleString()}</span>
                    </div>
                  )}
                  {(selectedQuote as any).replied_at && (
                    <p className="text-xs text-blue-600 mt-2">Replied: {new Date((selectedQuote as any).replied_at).toLocaleString()}</p>
                  )}
                </div>
              )}

              {/* Admin Reply Section */}
              <div className="border-t pt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline h-4 w-4 mr-1" />
                  Admin Reply to Customer
                </label>
                <textarea
                  value={adminReply}
                  onChange={(e) => setAdminReply(e.target.value)}
                  placeholder="Enter your reply to the customer...\n\nExample:\n- Pricing details\n- Product recommendations\n- Timeline estimates\n- Next steps"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                />
                
                {/* Quoted Amount (optional) */}
                <div className="mt-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quoted Amount (Optional)
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">$</span>
                    <input
                      type="number"
                      value={quotedAmount}
                      onChange={(e) => setQuotedAmount(e.target.value)}
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                {/* Send Reply Button */}
                <button
                  onClick={sendQuoteReply}
                  disabled={!adminReply.trim()}
                  className="w-full mt-3 px-4 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition flex items-center justify-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Send Reply to Customer
                </button>
              </div>

              <div className="text-sm text-gray-500">
                Created: {new Date(selectedQuote.created_at).toLocaleString()}
              </div>

              <button
                onClick={() => deleteQuote(selectedQuote.id)}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Delete {selectedQuote.is_rfq ? 'Request' : 'Quote'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Artwork Review Modal */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Review Artwork</h2>
                {selectedArtwork.artwork_code && (
                  <span className="inline-block mt-1 font-mono text-sm font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded">
                    {selectedArtwork.artwork_code}
                  </span>
                )}
              </div>
              <button onClick={() => { 
                setSelectedArtwork(null); 
                setArtworkFeedback('');
                setArtworkCustomerCode('');
                setArtworkProductCode('');
                setArtworkLinkType('none');
                setArtworkLinkedId('');
                setProofUrl('');
              }} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Customer</p>
                  <p className="font-medium">{getCustomer(selectedArtwork.user_id)?.full_name || 'Unknown'}</p>
                  <p className="text-sm text-gray-600">{getCustomer(selectedArtwork.user_id)?.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">File</p>
                  <p className="font-medium">{selectedArtwork.name}</p>
                  <p className="text-sm text-gray-600">{formatFileSize(selectedArtwork.file_size)}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">Current Status</p>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(selectedArtwork.status)}`}>
                  {selectedArtwork.status.replace('_', ' ')}
                </span>
              </div>

              {/* Coding Assignment Section */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Tag className="h-5 w-5 text-primary-600" />
                  Artwork Coding
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Customer Code</label>
                    <input
                      type="text"
                      value={artworkCustomerCode || selectedArtwork.customer_code || ''}
                      onChange={(e) => setArtworkCustomerCode(e.target.value.toUpperCase())}
                      placeholder="ACM01"
                      maxLength={10}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 font-mono uppercase"
                    />
                    <p className="text-xs text-gray-400 mt-1">e.g., ACM01, BTX02</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Code</label>
                    <input
                      type="text"
                      value={artworkProductCode || selectedArtwork.product_code || ''}
                      onChange={(e) => setArtworkProductCode(e.target.value.toUpperCase())}
                      placeholder="PKG01"
                      maxLength={10}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 font-mono uppercase"
                    />
                    <p className="text-xs text-gray-400 mt-1">e.g., PKG01, BAG02</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Current version: V{String(selectedArtwork.version_number || 1).padStart(3, '0')}
                </p>
              </div>

              {/* Link to Order/Quote Section */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Link2 className="h-5 w-5 text-blue-600" />
                  Link to Order or Quote
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Link Type</label>
                    <select
                      value={artworkLinkType || selectedArtwork.link_type || 'none'}
                      onChange={(e) => {
                        setArtworkLinkType(e.target.value as 'order' | 'quote' | 'none');
                        setArtworkLinkedId('');
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="none">No Link</option>
                      <option value="order">Link to Order</option>
                      <option value="quote">Link to Quote</option>
                    </select>
                  </div>
                  
                  {(artworkLinkType || selectedArtwork.link_type) !== 'none' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Select {artworkLinkType === 'order' ? 'Order' : 'Quote'}
                      </label>
                      <select
                        value={artworkLinkedId || (artworkLinkType === 'order' ? selectedArtwork.linked_order_id : selectedArtwork.linked_quote_id) || ''}
                        onChange={(e) => setArtworkLinkedId(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select...</option>
                        {artworkLinkType === 'order' 
                          ? orders.map(order => (
                              <option key={order.id} value={order.id}>
                                {order.order_number} - {order.customer_name || getCustomer(order.user_id)?.full_name} (${order.total_amount?.toLocaleString() || 0})
                              </option>
                            ))
                          : quotes.map(quote => (
                              <option key={quote.id} value={quote.id}>
                                {quote.quote_number} - {getCustomer(quote.user_id)?.full_name} (${quote.total_amount?.toLocaleString() || 0})
                              </option>
                            ))
                        }
                      </select>
                    </div>
                  )}
                </div>
              </div>

              {/* Proof Upload Section */}
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Upload className="h-5 w-5 text-green-600" />
                  Proof PDF URL
                </h3>
                <input
                  type="url"
                  value={proofUrl || selectedArtwork.proof_url || ''}
                  onChange={(e) => setProofUrl(e.target.value)}
                  placeholder="https://... (paste proof PDF URL)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
                <p className="text-xs text-gray-500 mt-1">Upload proof to storage first, then paste URL here</p>
              </div>

              {selectedArtwork.customer_comment && (
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Customer Comment</p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-blue-800">{selectedArtwork.customer_comment}</p>
                  </div>
                </div>
              )}

              {/* Show approval info if approved */}
              {selectedArtwork.approval_type && (
                <div className={`rounded-lg p-4 ${selectedArtwork.approval_type === 'approve_as_is' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <h4 className="font-semibold mb-2">
                    {selectedArtwork.approval_type === 'approve_as_is' ? '✅ Customer Approved' : '❌ Customer Requested Changes'}
                  </h4>
                  {selectedArtwork.approver_signature && (
                    <p className="text-sm">Signed by: {selectedArtwork.approver_signature} {selectedArtwork.approver_company ? `(${selectedArtwork.approver_company})` : ''}</p>
                  )}
                  {selectedArtwork.approved_date && (
                    <p className="text-sm">Date: {selectedArtwork.approved_date}</p>
                  )}
                  {selectedArtwork.approval_notes && (
                    <p className="text-sm mt-2 italic">"{selectedArtwork.approval_notes}"</p>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Admin Feedback (Optional)</label>
                <textarea
                  value={artworkFeedback}
                  onChange={(e) => setArtworkFeedback(e.target.value)}
                  placeholder="Provide feedback for the customer..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                />
              </div>

              <div className="text-sm text-gray-500">
                Uploaded: {new Date(selectedArtwork.created_at).toLocaleString()}
              </div>

              {/* Save Coding & Linking Button */}
              <button
                onClick={async () => {
                  const updateData: any = {
                    updated_at: new Date().toISOString()
                  };
                  if (artworkCustomerCode) updateData.customer_code = artworkCustomerCode;
                  if (artworkProductCode) updateData.product_code = artworkProductCode;
                  if (artworkLinkType) {
                    updateData.link_type = artworkLinkType;
                    if (artworkLinkType === 'order' && artworkLinkedId) {
                      updateData.linked_order_id = artworkLinkedId;
                      updateData.linked_quote_id = null;
                      const linkedOrder = orders.find(o => o.id === artworkLinkedId);
                      if (linkedOrder) updateData.order_number = linkedOrder.order_number;
                    } else if (artworkLinkType === 'quote' && artworkLinkedId) {
                      updateData.linked_quote_id = artworkLinkedId;
                      updateData.linked_order_id = null;
                      const linkedQuote = quotes.find(q => q.id === artworkLinkedId);
                      if (linkedQuote) updateData.quote_number = linkedQuote.quote_number;
                    } else {
                      updateData.linked_order_id = null;
                      updateData.linked_quote_id = null;
                    }
                  }
                  if (proofUrl) updateData.proof_url = proofUrl;
                  
                  await supabase.from('artwork_files').update(updateData).eq('id', selectedArtwork.id);
                  fetchData();
                  alert('Artwork coding and linking saved!');
                }}
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <Tag className="h-5 w-5" />
                Save Coding & Linking
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={async () => {
                    const updateData: any = { 
                      status: 'proof_ready',
                      admin_feedback: artworkFeedback || null,
                      updated_at: new Date().toISOString()
                    };
                    if (proofUrl) updateData.proof_url = proofUrl;
                    if (artworkCustomerCode) updateData.customer_code = artworkCustomerCode;
                    if (artworkProductCode) updateData.product_code = artworkProductCode;
                    
                    await supabase.from('artwork_files').update(updateData).eq('id', selectedArtwork.id);
                    fetchData();
                    setSelectedArtwork(null);
                    setArtworkFeedback('');
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  <FileCheck className="h-5 w-5" />
                  Set Proof Ready
                </button>
                <button
                  onClick={() => updateArtworkStatus(selectedArtwork.id, 'revision_needed', artworkFeedback)}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                >
                  <AlertCircle className="h-5 w-5" />
                  Need Revision
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => updateArtworkStatus(selectedArtwork.id, 'in_production', artworkFeedback)}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  <CheckCircle className="h-5 w-5" />
                  Send to Production
                </button>
                <button
                  onClick={() => updateArtworkStatus(selectedArtwork.id, 'prepress', artworkFeedback)}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  <ImageIcon className="h-5 w-5" />
                  Send to Prepress
                </button>
              </div>

              <div className="flex gap-3">
                <a
                  href={selectedArtwork.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Download File
                </a>
                <button
                  onClick={() => deleteArtwork(selectedArtwork.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminManagementPage
