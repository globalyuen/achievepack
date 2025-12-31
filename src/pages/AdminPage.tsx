import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { supabase, Order, Profile, NewsletterSubscriber, Document, Quote, ArtworkFile } from '../lib/supabase'
import { Home, Users, Package, Settings, Search, ChevronDown, LogOut, Eye, Edit, Trash2, ArrowLeft, RefreshCw, Mail, Phone, Building, Calendar, DollarSign, TrendingUp, ShoppingBag, Newspaper, FileText, Upload, Truck, ExternalLink, X, FileCheck, Image, CheckCircle, Clock, AlertCircle, MessageSquare, Sparkles, Inbox, Send, FileCode, Check, Globe } from 'lucide-react'
import CRMPanelAdvanced from '../components/admin/CRMPanelAdvanced'

type TabType = 'dashboard' | 'customers' | 'orders' | 'quotes' | 'artwork' | 'documents' | 'newsletter' | 'crm' | 'seo-email' | 'settings'

const ADMIN_EMAIL = 'ryan@achievepack.com'

const AdminPage: React.FC = () => {
  const navigate = useNavigate()
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
  
  // SEO to Email state
  const [selectedPage, setSelectedPage] = useState('')
  const [emailSubject, setEmailSubject] = useState('')
  const [emailContent, setEmailContent] = useState('')
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])
  const [personalizationFields, setPersonalizationFields] = useState({ greeting: 'Hi {{name}}', closing: 'Best regards,\nRyan Wong\nAchievePack Team' })
  const [showEmailPreview, setShowEmailPreview] = useState(false)
  const [emailImages, setEmailImages] = useState<string[]>([])
  const [testEmailSending, setTestEmailSending] = useState(false)

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
    const [customersRes, ordersRes, subscribersRes, documentsRes] = await Promise.all([
      supabase.from('profiles').select('*').order('created_at', { ascending: false }),
      supabase.from('orders').select('*').order('created_at', { ascending: false }),
      supabase.from('newsletter_subscribers').select('*').order('created_at', { ascending: false }),
      supabase.from('documents').select('*').order('created_at', { ascending: false })
    ])
    setCustomers(customersRes.data || [])
    setOrders(ordersRes.data || [])
    setSubscribers(subscribersRes.data || [])
    setDocuments(documentsRes.data || [])
    setLoading(false)
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
      await supabase.from('orders').delete().eq('id', orderId)
      fetchData()
    }
  }

  const toggleSubscription = async (id: string, currentStatus: boolean) => {
    await supabase.from('newsletter_subscribers').update({ 
      subscribed: !currentStatus, 
      updated_at: new Date().toISOString() 
    }).eq('id', id)
    fetchData()
  }

  const deleteSubscriber = async (id: string) => {
    if (confirm('Are you sure you want to delete this subscriber?')) {
      await supabase.from('newsletter_subscribers').delete().eq('id', id)
      fetchData()
    }
  }

  const uploadDocument = async () => {
    if (!uploadForm.userId || !uploadForm.name || !uploadForm.fileUrl) {
      alert('Please fill in all required fields')
      return
    }
    await supabase.from('documents').insert([{
      user_id: uploadForm.userId,
      name: uploadForm.name,
      description: uploadForm.description,
      type: uploadForm.type,
      file_url: uploadForm.fileUrl,
      is_public: true
    }])
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
    await supabase.from('orders').update({
      tracking_number: trackingForm.trackingNumber,
      carrier: trackingForm.carrier,
      tracking_url: trackingForm.trackingUrl,
      status: 'shipped',
      updated_at: new Date().toISOString()
    }).eq('id', selectedOrder.id)
    
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
      await supabase.from('documents').delete().eq('id', id)
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
                onClick={() => setActiveTab('seo-email')}
                className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'seo-email'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-900 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <Send className="flex-shrink-0 w-5 h-5 mr-4" />
                SEO to Email
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
          {(['dashboard', 'customers', 'orders', 'documents', 'newsletter', 'crm', 'seo-email', 'settings'] as TabType[]).map(tab => (
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

          {/* SEO to Email Tab */}
          {activeTab === 'seo-email' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">SEO Page to Email</h1>
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
                        setSelectedPage(e.target.value)
                        // Auto-generate subject based on page
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
                          '/topics/eco-friendly-food-packaging': 'Eco-Friendly Food Packaging Guide',
                          '/blog/sustainable-packaging-supplier-analysis': 'Sustainable Packaging Supplier Analysis',
                          '/blog/pet-food-packaging-complete-guide': 'Complete Guide to Pet Food Packaging',
                          '/blog/startup-sustainable-packaging-guide': 'Startup Guide to Sustainable Packaging',
                          '/blog/anz-sustainable-food-packaging-guide': 'ANZ Sustainable Food Packaging Guide',
                          '/blog/thank-you-for-2025-heres-to-whats-next': 'Thank You for 2025. Here\'s to What\'s Next.'
                        }
                        setEmailSubject(pageTitles[e.target.value] || '')
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Mail className="h-5 w-5 text-green-500" />
                      Email Builder
                    </h3>
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
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Content</label>
                        <textarea
                          value={emailContent}
                          onChange={(e) => setEmailContent(e.target.value)}
                          placeholder="Write your email content here...\n\nYou can use {{name}} for personalization."
                          rows={8}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        />
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
                            const allIds = [...subscribers.filter(s => s.subscribed).map(s => s.id), ...customers.map(c => c.id)]
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
                    
                    <div className="text-sm text-gray-500 mb-3">
                      Selected: <span className="font-semibold text-primary-600">{selectedContacts.length}</span> contacts
                    </div>

                    <div className="max-h-[500px] overflow-y-auto space-y-2">
                      {/* Newsletter Subscribers */}
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Newsletter Subscribers ({subscribers.filter(s => s.subscribed).length})</p>
                        {subscribers.filter(s => s.subscribed).map(sub => (
                          <label key={sub.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedContacts.includes(sub.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedContacts([...selectedContacts, sub.id])
                                } else {
                                  setSelectedContacts(selectedContacts.filter(id => id !== sub.id))
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

                      {/* Customers */}
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Customers ({customers.length})</p>
                        {customers.map(customer => (
                          <label key={customer.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedContacts.includes(customer.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedContacts([...selectedContacts, customer.id])
                                } else {
                                  setSelectedContacts(selectedContacts.filter(id => id !== customer.id))
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
                          // Simulate test email send
                          await new Promise(resolve => setTimeout(resolve, 1500))
                          setTestEmailSending(false)
                          alert(`Test email sent to ryan@achievepack.com

Subject: ${emailSubject}

Check your inbox!`)
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
                        disabled={!selectedPage || !emailSubject || selectedContacts.length === 0}
                        onClick={() => {
                          if (confirm(`Send email to ${selectedContacts.length} recipients?\n\nSubject: ${emailSubject}`)) {
                            alert(`Email campaign sent!

Recipients: ${selectedContacts.length}

Note: Email delivery in progress.`)
                          }
                        }}
                        className="w-full py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                      >
                        <Send className="h-5 w-5" />
                        Send to {selectedContacts.length} Recipients
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
              <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                <div className="p-4 border-b flex items-center justify-between bg-gray-50">
                  <h2 className="text-lg font-bold text-gray-900">Email Preview</h2>
                  <button onClick={() => setShowEmailPreview(false)} className="text-gray-500 hover:text-gray-700">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Email Header Preview */}
                <div className="p-4 border-b bg-gray-100">
                  <div className="text-sm space-y-1">
                    <p><span className="text-gray-500">From:</span> Achieve Pack &lt;hello@achievepack.com&gt;</p>
                    <p><span className="text-gray-500">To:</span> {'{'}recipient{'}'}</p>
                    <p><span className="text-gray-500 font-semibold">Subject:</span> <span className="font-semibold">{emailSubject}</span></p>
                  </div>
                </div>
                
                {/* Email Body Preview */}
                <div className="flex-1 overflow-y-auto p-6 bg-white">
                  <div className="max-w-xl mx-auto">
                    {/* Logo */}
                    <div className="text-center mb-6">
                      <img src="/ap-logo.png" alt="Achieve Pack" className="h-10 mx-auto" />
                    </div>
                    
                    {/* Greeting */}
                    <p className="text-gray-800 mb-4">{personalizationFields.greeting.replace('{{name}}', 'John')},</p>
                    
                    {/* Content */}
                    <div className="text-gray-700 whitespace-pre-wrap mb-6">
                      {emailContent || 'Your email content will appear here...'}
                    </div>
                    
                    {/* Added Images */}
                    {emailImages.length > 0 && (
                      <div className="my-6 space-y-3">
                        {emailImages.map((img, idx) => (
                          <img key={idx} src={img} alt="" className="w-full rounded-lg" />
                        ))}
                      </div>
                    )}
                    
                    {/* Featured Page Link */}
                    {selectedPage && (
                      <div className="my-6 p-4 bg-gray-50 rounded-lg border">
                        <p className="text-sm text-gray-500 mb-2">Featured Content from: {selectedPage}</p>
                        <a href={`https://achievepack.com${selectedPage}`} className="text-primary-600 hover:underline text-sm">
                          Read more on our website →
                        </a>
                      </div>
                    )}
                    
                    {/* Closing */}
                    <div className="text-gray-700 whitespace-pre-wrap mt-6">
                      {personalizationFields.closing}
                    </div>
                    
                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t text-center text-xs text-gray-500">
                      <p>© 2025 Achieve Pack. All rights reserved.</p>
                      <p className="mt-1">You're receiving this because you subscribed to our newsletter.</p>
                      <p className="mt-1"><a href="#" className="text-primary-600 hover:underline">Unsubscribe</a></p>
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="p-4 border-t bg-gray-50 flex gap-3">
                  <button
                    onClick={() => setShowEmailPreview(false)}
                    className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Edit Content
                  </button>
                  <button
                    onClick={async () => {
                      setTestEmailSending(true)
                      await new Promise(resolve => setTimeout(resolve, 1500))
                      setTestEmailSending(false)
                      alert('Test email sent to ryan@achievepack.com!')
                    }}
                    disabled={testEmailSending}
                    className="flex-1 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                  >
                    {testEmailSending ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
                    Test Send
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
    </div>
  )
}

export default AdminPage
