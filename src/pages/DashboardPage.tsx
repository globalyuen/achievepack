import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Package, FileText, Palette, Settings, LogOut, Home, Download, Search, Bell, 
  LayoutDashboard, ShoppingCart, FileCheck, Image, ChevronRight, TrendingUp, 
  TrendingDown, Users, DollarSign, MoreHorizontal, Plus, RefreshCw, Eye, X, 
  MapPin, Phone, Mail as MailIcon, Truck, ExternalLink
} from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { supabase, Order, Quote, Document } from '../lib/supabase'
import { useTranslation } from 'react-i18next'
import { isDemoUser, getDemoData } from '../data/demoCustomerData'

type TabType = 'dashboard' | 'orders' | 'quotes' | 'documents' | 'artwork' | 'settings'

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  production: 'bg-purple-100 text-purple-800',
  shipped: 'bg-indigo-100 text-indigo-800',
  delivered: 'bg-green-100 text-green-800',
  accepted: 'bg-green-100 text-green-800',
  expired: 'bg-red-100 text-red-800',
}

const DashboardPage: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { user, signOut, loading: authLoading } = useAuth()
  const [orders, setOrders] = useState<Order[]>([])
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login')
    }
  }, [user, authLoading, navigate])

  useEffect(() => {
    if (user) fetchData()
  }, [user])

  const fetchData = async () => {
    setLoading(true)
    
    // Check if this is demo user
    if (isDemoUser(user?.email)) {
      const demoData = getDemoData(user?.email)
      setOrders(demoData.orders as Order[])
      setQuotes(demoData.quotes as Quote[])
      setDocuments(demoData.documents as Document[])
      setLoading(false)
      return
    }
    
    // Regular user - fetch from database
    const [ordersRes, quotesRes, docsRes] = await Promise.all([
      supabase.from('orders').select('*').eq('user_id', user?.id).order('created_at', { ascending: false }),
      supabase.from('quotes').select('*').eq('user_id', user?.id).order('created_at', { ascending: false }),
      supabase.from('documents').select('*').or(`user_id.eq.${user?.id},is_public.eq.true`).order('created_at', { ascending: false }),
    ])
    setOrders(ordersRes.data || [])
    setQuotes(quotesRes.data || [])
    setDocuments(docsRes.data || [])
    setLoading(false)
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const getUserName = () => {
    return user?.email?.split('@')[0] || 'User'
  }

  const totalSpent = orders.reduce((sum, o) => sum + (o.total_amount || 0), 0)
  const activeOrders = orders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').length
  const pendingQuotes = quotes.filter(q => q.status === 'pending').length

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin text-primary-500 mx-auto mb-4" />
          <p className="text-gray-600">{t('customerCenter.dashboard.loading')}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-gray-200 fixed h-full">
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-100">
          <Link to="/" className="flex items-center gap-2">
            <img src="/achieve-pack-logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="font-bold text-gray-900">Customer</span>
          </Link>
        </div>

        {/* New Order Button */}
        <div className="px-4 mt-6">
          <Link
            to="/store"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition"
          >
            <Plus className="h-5 w-5" />
            {t('customerCenter.dashboard.actions.newOrder')}
          </Link>
        </div>

        {/* Search */}
        <div className="px-4 mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pl-10 pr-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Search..."
            />
          </div>
        </div>

        <hr className="mx-4 my-4 border-gray-100" />

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition ${
              activeTab === 'dashboard'
                ? 'bg-primary-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <LayoutDashboard className="h-5 w-5 mr-3" />
            Dashboard
          </button>

          <div className="pt-4 pb-2 px-4">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Orders</span>
          </div>

          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium rounded-lg transition ${
              activeTab === 'orders'
                ? 'bg-primary-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center">
              <ShoppingCart className="h-5 w-5 mr-3" />
              My Orders
            </div>
            {activeOrders > 0 && (
              <span className={`px-2 py-0.5 text-xs rounded-full ${
                activeTab === 'orders' ? 'bg-white/20 text-white' : 'bg-primary-100 text-primary-700'
              }`}>
                {activeOrders}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('quotes')}
            className={`flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium rounded-lg transition ${
              activeTab === 'quotes'
                ? 'bg-primary-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center">
              <FileCheck className="h-5 w-5 mr-3" />
              Quotes
            </div>
            {pendingQuotes > 0 && (
              <span className={`px-2 py-0.5 text-xs rounded-full ${
                activeTab === 'quotes' ? 'bg-white/20 text-white' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {pendingQuotes}
              </span>
            )}
          </button>

          <div className="pt-4 pb-2 px-4">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Resources</span>
          </div>

          <button
            onClick={() => setActiveTab('documents')}
            className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition ${
              activeTab === 'documents'
                ? 'bg-primary-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <FileText className="h-5 w-5 mr-3" />
            Documents
          </button>

          <button
            onClick={() => setActiveTab('artwork')}
            className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition ${
              activeTab === 'artwork'
                ? 'bg-primary-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Image className="h-5 w-5 mr-3" />
            Artwork Files
          </button>

          <hr className="my-4 border-gray-100" />

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition ${
              activeTab === 'settings'
                ? 'bg-primary-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </button>
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-gray-100">
          <button
            onClick={handleSignOut}
            className="flex items-center w-full px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition"
          >
            <LogOut className="h-5 w-5 mr-3 text-gray-500" />
            {t('customerCenter.dashboard.signOut')}
          </button>
          <div className="flex items-center px-4 py-3 mt-2">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-primary-600 font-semibold">
                {user?.email?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-gray-900 truncate">{getUserName()}</p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4 lg:hidden">
              <Link to="/" className="flex items-center gap-2">
                <img src="/achieve-pack-logo.png" alt="Logo" className="h-8 w-auto" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <h1 className="text-lg text-gray-600">
                Hey <span className="font-semibold text-gray-900">{getUserName()}</span> – {t('customerCenter.dashboard.welcome')}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-primary-600 font-semibold">
                  {user?.email?.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Active Orders</p>
                  <div className="flex items-end justify-between mt-2">
                    <p className="text-3xl font-bold text-gray-900">{activeOrders}</p>
                    <span className="text-sm text-green-600 flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Total Spent</p>
                  <div className="flex items-end justify-between mt-2">
                    <p className="text-3xl font-bold text-gray-900">${totalSpent.toLocaleString()}</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Total Orders</p>
                  <div className="flex items-end justify-between mt-2">
                    <p className="text-3xl font-bold text-gray-900">{orders.length}</p>
                    <span className="text-sm text-green-600">+{orders.filter(o => {
                      const d = new Date(o.created_at)
                      const now = new Date()
                      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
                    }).length} this month</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Documents</p>
                  <div className="flex items-end justify-between mt-2">
                    <p className="text-3xl font-bold text-gray-900">{documents.length}</p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100">
                  <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="font-semibold text-gray-900">Recent Orders</h2>
                    <button onClick={() => setActiveTab('orders')} className="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1">
                      See All <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {orders.length === 0 ? (
                      <div className="p-8 text-center text-gray-400">
                        {t('customerCenter.dashboard.empty.noOrders')}
                        <Link to="/store" className="block mt-2 text-primary-600 hover:underline">
                          {t('customerCenter.dashboard.empty.shopNow')}
                        </Link>
                      </div>
                    ) : orders.slice(0, 5).map(order => (
                      <div key={order.id} className="p-4 hover:bg-gray-50 transition flex items-center justify-between cursor-pointer" onClick={() => setSelectedOrder(order)}>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                            <Package className="h-5 w-5 text-primary-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{order.order_number}</p>
                            <p className="text-sm text-gray-500">{new Date(order.created_at).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="text-right flex items-center gap-3">
                          <div>
                            <p className="font-semibold text-gray-900">${order.total_amount?.toLocaleString()}</p>
                            <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${statusColors[order.status]}`}>
                              {order.status}
                            </span>
                          </div>
                          <Eye className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl border border-gray-100">
                  <div className="p-5 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-900">{t('customerCenter.dashboard.sections.quickActions')}</h2>
                  </div>
                  <div className="p-4 space-y-3">
                    <Link to="/store" className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <ShoppingCart className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{t('customerCenter.dashboard.actions.newOrder')}</p>
                        <p className="text-sm text-gray-500">Browse our products</p>
                      </div>
                    </Link>
                    <Link to="/" className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Home className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{t('customerCenter.backToHome')}</p>
                        <p className="text-sm text-gray-500">Visit homepage</p>
                      </div>
                    </Link>
                    <button onClick={() => setActiveTab('documents')} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition w-full text-left">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">View Certificates</p>
                        <p className="text-sm text-gray-500">Compliance documents</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
                <Link to="/store" className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition">
                  <Plus className="h-4 w-4" /> New Order
                </Link>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                {orders.length === 0 ? (
                  <div className="p-12 text-center text-gray-400">
                    <Package className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>{t('customerCenter.dashboard.empty.noOrders')}</p>
                    <Link to="/store" className="inline-block mt-4 text-primary-600 hover:underline">
                      {t('customerCenter.dashboard.empty.shopNow')}
                    </Link>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {orders.map(order => (
                      <div key={order.id} className="p-5 hover:bg-gray-50 transition flex items-center justify-between cursor-pointer" onClick={() => setSelectedOrder(order)}>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                            <Package className="h-6 w-6 text-primary-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{order.order_number}</p>
                            <p className="text-sm text-gray-500">{new Date(order.created_at).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="text-right flex items-center gap-4">
                          <div>
                            <p className="text-lg font-bold text-gray-900">${order.total_amount?.toLocaleString()}</p>
                            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${statusColors[order.status]}`}>
                              {order.status}
                            </span>
                          </div>
                          <Eye className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Quotes Tab */}
          {activeTab === 'quotes' && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-gray-900">My Quotes</h1>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                {quotes.length === 0 ? (
                  <div className="p-12 text-center text-gray-400">
                    <FileCheck className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>{t('customerCenter.dashboard.empty.noQuotes')}</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {quotes.map(quote => (
                      <div key={quote.id} className="p-5 hover:bg-gray-50 transition flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
                            <FileCheck className="h-6 w-6 text-yellow-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{quote.quote_number}</p>
                            <p className="text-sm text-gray-500">Valid until: {new Date(quote.valid_until).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">${quote.total_amount?.toLocaleString()}</p>
                          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${statusColors[quote.status]}`}>
                            {quote.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === 'documents' && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-gray-900">{t('customerCenter.dashboard.sections.complianceDocs')}</h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {documents.map(doc => (
                  <a
                    key={doc.id}
                    href={doc.file_url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-primary-200 transition group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-green-600" />
                      </div>
                      <Download className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mt-4">{doc.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{doc.description}</p>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Artwork Tab */}
          {activeTab === 'artwork' && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-gray-900">Artwork Files</h1>
              <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
                <Image className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p className="text-gray-500">No artwork files yet</p>
                <p className="text-sm text-gray-400 mt-2">Your design files will appear here once you place an order</p>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h2 className="font-semibold text-gray-900 mb-4">Account Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500">Email</label>
                    <p className="text-gray-900 font-medium">{user?.email}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Member Since</label>
                    <p className="text-gray-900 font-medium">
                      {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setSelectedOrder(null)}>
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Order Details</h2>
                <p className="text-sm text-gray-500 mt-1">{selectedOrder.order_number}</p>
              </div>
              <button onClick={() => setSelectedOrder(null)} className="text-gray-400 hover:text-gray-600 transition">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Status and Date */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Order Status</p>
                  <span className={`inline-block px-3 py-1.5 text-sm font-medium rounded-lg mt-1 ${statusColors[selectedOrder.status]}`}>
                    {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Order Date</p>
                  <p className="text-lg font-semibold text-gray-900 mt-1">
                    {new Date(selectedOrder.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Tracking Information */}
              {selectedOrder.tracking_number && (
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Truck className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">Tracking Information</h3>
                      <div className="space-y-2 text-sm">
                        {selectedOrder.carrier && (
                          <div>
                            <span className="text-gray-500">Carrier: </span>
                            <span className="font-medium text-gray-900">{selectedOrder.carrier}</span>
                          </div>
                        )}
                        <div>
                          <span className="text-gray-500">Tracking Number: </span>
                          <span className="font-medium text-gray-900">{selectedOrder.tracking_number}</span>
                        </div>
                        {selectedOrder.tracking_url && (
                          <a 
                            href={selectedOrder.tracking_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Track Package <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Order Items */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Order Items</h3>
                <div className="space-y-4">
                  {selectedOrder.items?.map((item: any, i: number) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex gap-4">
                        {/* Product Image */}
                        {item.image && (
                          <div className="w-20 h-20 rounded-lg overflow-hidden bg-white border border-gray-200 flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.style.display = 'none'
                              }}
                            />
                          </div>
                        )}
                        
                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <h4 className="font-semibold text-gray-900">{item.name}</h4>
                              
                              {/* Variant Details */}
                              {item.variant && (
                                <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
                                  {item.variant.size && (
                                    <div className="flex">
                                      <span className="text-gray-500 w-16">Size:</span>
                                      <span className="text-gray-900 font-medium">{item.variant.size}</span>
                                    </div>
                                  )}
                                  {item.variant.shape && (
                                    <div className="flex">
                                      <span className="text-gray-500 w-16">Shape:</span>
                                      <span className="text-gray-900 font-medium">{item.variant.shape}</span>
                                    </div>
                                  )}
                                  {item.variant.finish && (
                                    <div className="flex">
                                      <span className="text-gray-500 w-16">Finish:</span>
                                      <span className="text-gray-900 font-medium">{item.variant.finish}</span>
                                    </div>
                                  )}
                                  {item.variant.barrier && (
                                    <div className="flex">
                                      <span className="text-gray-500 w-16">Barrier:</span>
                                      <span className="text-gray-900 font-medium">{item.variant.barrier}</span>
                                    </div>
                                  )}
                                </div>
                              )}
                              
                              {/* Additional Details (from older order format) */}
                              {(item.size || item.material || item.printing) && (
                                <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
                                  {item.size && !item.variant?.size && (
                                    <div className="flex">
                                      <span className="text-gray-500 w-16">Size:</span>
                                      <span className="text-gray-900 font-medium">{item.size}</span>
                                    </div>
                                  )}
                                  {item.material && (
                                    <div className="flex">
                                      <span className="text-gray-500 w-16">Material:</span>
                                      <span className="text-gray-900 font-medium">{item.material}</span>
                                    </div>
                                  )}
                                  {item.printing && (
                                    <div className="flex col-span-2">
                                      <span className="text-gray-500 w-16">Printing:</span>
                                      <span className="text-gray-900 font-medium">{item.printing}</span>
                                    </div>
                                  )}
                                </div>
                              )}
                              
                              {/* Features */}
                              {item.features && item.features.length > 0 && (
                                <div className="mt-2">
                                  <span className="text-sm text-gray-500">Features: </span>
                                  <span className="text-sm text-gray-900">{item.features.join(', ')}</span>
                                </div>
                              )}
                              
                              {/* Notes */}
                              {item.notes && (
                                <div className="mt-2 text-sm text-gray-600 italic">
                                  {item.notes}
                                </div>
                              )}
                            </div>
                            
                            {/* Pricing */}
                            <div className="text-right flex-shrink-0">
                              <p className="text-lg font-bold text-gray-900">
                                ${(item.totalPrice || item.total)?.toLocaleString()}
                              </p>
                            </div>
                          </div>
                          
                          {/* Quantity & Unit Price Row */}
                          <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center text-sm">
                            <div className="flex gap-4">
                              <span>
                                <span className="text-gray-500">Qty: </span>
                                <span className="font-semibold text-gray-900">{item.quantity?.toLocaleString()}</span>
                              </span>
                              {(item.unitPrice || item.unit_price) && (
                                <span>
                                  <span className="text-gray-500">Unit Price: </span>
                                  <span className="font-medium text-gray-900">${(item.unitPrice || item.unit_price)?.toFixed(4)}</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              {selectedOrder.shipping_address && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Shipping Address</h3>
                  <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium text-gray-900">{selectedOrder.shipping_address.fullName || selectedOrder.customer_name}</p>
                        <p className="text-gray-600 mt-1">{selectedOrder.shipping_address.address}</p>
                        <p className="text-gray-600">
                          {selectedOrder.shipping_address.city}, {selectedOrder.shipping_address.state} {selectedOrder.shipping_address.zipCode}
                        </p>
                        <p className="text-gray-600">{selectedOrder.shipping_address.country}</p>
                      </div>
                    </div>
                    {selectedOrder.shipping_address.phone && (
                      <div className="flex items-center gap-2 pt-2 border-t border-gray-200">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <p className="text-sm text-gray-600">{selectedOrder.shipping_address.phone}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Order Summary */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-900">Total Amount</p>
                  <p className="text-2xl font-bold text-primary-600">${selectedOrder.total_amount?.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DashboardPage
