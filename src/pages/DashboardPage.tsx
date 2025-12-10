import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Package, FileText, Palette, Settings, LogOut, Home, Download, Search, Bell, 
  LayoutDashboard, ShoppingCart, FileCheck, Image, ChevronRight, TrendingUp, 
  TrendingDown, Users, DollarSign, MoreHorizontal, Plus, RefreshCw, Eye, X, 
  MapPin, Phone, Mail as MailIcon, Truck, ExternalLink, Upload, CheckCircle, 
  Clock, AlertCircle, FileImage, MessageSquare, Send, Heart, Trash2
} from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { supabase, Order, Quote, Document, ArtworkFile, SavedCartItem } from '../lib/supabase'
import { useTranslation } from 'react-i18next'
import { isDemoUser, getDemoData } from '../data/demoCustomerData'
import { useStore } from '../store/StoreContext'

type TabType = 'dashboard' | 'orders' | 'quotes' | 'documents' | 'artwork' | 'saved' | 'settings'

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
  const { addToCart, setIsCartOpen } = useStore()
  const [orders, setOrders] = useState<Order[]>([])
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [documents, setDocuments] = useState<Document[]>([])
  const [artworks, setArtworks] = useState<ArtworkFile[]>([])
  const [savedItems, setSavedItems] = useState<SavedCartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  
  // Artwork upload states
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkFile | null>(null)
  const [revisionComment, setRevisionComment] = useState('')
  const [showRevisionModal, setShowRevisionModal] = useState(false)

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
      // Demo artwork data
      setArtworks([
        {
          id: 'demo-art-1',
          user_id: 'demo-user',
          name: 'coffee_pouch_design_v1.ai',
          file_url: '#',
          file_type: 'application/illustrator',
          file_size: 2500000,
          status: 'approved',
          proof_url: '/sample-proof.pdf',
          admin_feedback: 'Design approved! Ready for production.',
          created_at: '2024-12-01T10:00:00Z',
          updated_at: '2024-12-03T15:30:00Z'
        },
        {
          id: 'demo-art-2',
          user_id: 'demo-user',
          name: 'snack_bag_artwork.pdf',
          file_url: '#',
          file_type: 'application/pdf',
          file_size: 1800000,
          status: 'proof_ready',
          proof_url: '/sample-proof-2.pdf',
          admin_feedback: 'Prepress complete. Please review the proof.',
          created_at: '2024-12-05T14:00:00Z',
          updated_at: '2024-12-07T09:00:00Z'
        },
        {
          id: 'demo-art-3',
          user_id: 'demo-user',
          name: 'eco_pouch_label.eps',
          file_url: '#',
          file_type: 'application/postscript',
          file_size: 3200000,
          status: 'revision_needed',
          admin_feedback: 'Text too close to bleed edge. Please adjust margins by 3mm.',
          created_at: '2024-12-08T11:00:00Z',
          updated_at: '2024-12-09T16:00:00Z'
        },
        {
          id: 'demo-art-4',
          user_id: 'demo-user',
          name: 'new_product_design.ai',
          file_url: '#',
          file_type: 'application/illustrator',
          file_size: 4100000,
          status: 'in_review',
          created_at: '2024-12-09T08:00:00Z',
          updated_at: '2024-12-09T08:00:00Z'
        }
      ] as ArtworkFile[])
      // Demo saved items
      setSavedItems([
        {
          id: 'demo-saved-1',
          user_id: 'demo-user',
          product_id: 'stand-up-pouch',
          name: 'Stand Up Pouch - Eco Series',
          image: '/products/stand-up-pouch.jpg',
          variant: { shape: 'stand-up', size: '120x200', barrier: 'kraft', finish: 'matte' },
          quantity: 5000,
          unit_price: 0.42,
          total_price: 2100,
          created_at: '2024-12-08T10:00:00Z',
          updated_at: '2024-12-08T10:00:00Z'
        },
        {
          id: 'demo-saved-2',
          user_id: 'demo-user',
          product_id: 'flat-bottom-pouch',
          name: 'Flat Bottom Bag - Premium',
          image: '/products/flat-bottom.jpg',
          variant: { shape: 'flat-bottom', size: '150x250', barrier: 'clear', finish: 'glossy' },
          quantity: 3000,
          unit_price: 0.58,
          total_price: 1740,
          created_at: '2024-12-09T14:30:00Z',
          updated_at: '2024-12-09T14:30:00Z'
        }
      ] as SavedCartItem[])
      setLoading(false)
      return
    }
    
    // Regular user - fetch from database
    const [ordersRes, quotesRes, docsRes, artworksRes, savedRes] = await Promise.all([
      supabase.from('orders').select('*').eq('user_id', user?.id).order('created_at', { ascending: false }),
      supabase.from('quotes').select('*').eq('user_id', user?.id).order('created_at', { ascending: false }),
      supabase.from('documents').select('*').or(`user_id.eq.${user?.id},is_public.eq.true`).order('created_at', { ascending: false }),
      supabase.from('artwork_files').select('*').eq('user_id', user?.id).order('created_at', { ascending: false }),
      supabase.from('saved_cart_items').select('*').eq('user_id', user?.id).order('created_at', { ascending: false }),
    ])
    setOrders(ordersRes.data || [])
    setQuotes(quotesRes.data || [])
    setDocuments(docsRes.data || [])
    setArtworks(artworksRes.data || [])
    setSavedItems(savedRes.data || [])
    setLoading(false)
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const getUserName = () => {
    return user?.email?.split('@')[0] || 'User'
  }

  // Artwork upload handler
  const handleArtworkUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return
    
    setUploading(true)
    setUploadError('')
    
    try {
      for (const file of Array.from(files) as File[]) {
        // Validate file type
        const validTypes = ['application/pdf', 'application/postscript', 'application/illustrator', 
          'image/png', 'image/jpeg', 'image/tiff', 'application/zip']
        const isValid = validTypes.some(t => file.type.includes(t.split('/')[1])) || 
          file.name.match(/\.(ai|eps|pdf|png|jpg|jpeg|tiff|tif|zip|psd)$/i)
        
        if (!isValid) {
          setUploadError(`Invalid file type: ${file.name}. Please upload AI, EPS, PDF, PNG, JPG, TIFF, PSD, or ZIP files.`)
          continue
        }
        
        // Upload to Supabase Storage
        const fileName = `${user?.id}/${Date.now()}_${file.name}`
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('artworks')
          .upload(fileName, file)
        
        if (uploadError) throw uploadError
        
        // Get public URL
        const { data: urlData } = supabase.storage.from('artworks').getPublicUrl(fileName)
        
        // Create artwork record
        const { error: dbError } = await supabase.from('artwork_files').insert({
          user_id: user?.id,
          name: file.name,
          file_url: urlData.publicUrl,
          file_type: file.type || 'unknown',
          file_size: file.size,
          status: 'pending_review',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        
        if (dbError) throw dbError
      }
      
      // Refresh artwork list
      fetchData()
    } catch (error: any) {
      console.error('Upload error:', error)
      setUploadError(error.message || 'Failed to upload artwork')
    } finally {
      setUploading(false)
      // Reset input
      e.target.value = ''
    }
  }

  // Submit revision comment
  const handleSubmitRevision = async () => {
    if (!selectedArtwork || !revisionComment.trim()) return
    
    try {
      await supabase.from('artwork_files')
        .update({ 
          customer_comment: revisionComment,
          updated_at: new Date().toISOString()
        })
        .eq('id', selectedArtwork.id)
      
      setShowRevisionModal(false)
      setRevisionComment('')
      setSelectedArtwork(null)
      fetchData()
    } catch (error) {
      console.error('Error submitting revision:', error)
    }
  }

  // Get status display info
  const getArtworkStatus = (status: string) => {
    switch (status) {
      case 'pending_review':
        return { label: 'Pending Review', color: 'bg-yellow-100 text-yellow-800', icon: Clock }
      case 'in_review':
        return { label: 'In Review', color: 'bg-blue-100 text-blue-800', icon: Eye }
      case 'prepress':
        return { label: 'Prepress', color: 'bg-purple-100 text-purple-800', icon: Palette }
      case 'proof_ready':
        return { label: 'Proof Ready', color: 'bg-indigo-100 text-indigo-800', icon: FileCheck }
      case 'approved':
        return { label: 'Approved', color: 'bg-green-100 text-green-800', icon: CheckCircle }
      case 'revision_needed':
        return { label: 'Revision Needed', color: 'bg-red-100 text-red-800', icon: AlertCircle }
      default:
        return { label: status, color: 'bg-gray-100 text-gray-800', icon: Clock }
    }
  }

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
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

          <button
            onClick={() => setActiveTab('saved')}
            className={`flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium rounded-lg transition ${
              activeTab === 'saved'
                ? 'bg-primary-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center">
              <Heart className="h-5 w-5 mr-3" />
              Saved Items
            </div>
            {savedItems.length > 0 && (
              <span className={`px-2 py-0.5 text-xs rounded-full ${
                activeTab === 'saved' ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-700'
              }`}>
                {savedItems.length}
              </span>
            )}
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
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Artwork Files</h1>
                <label className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition cursor-pointer">
                  <Upload className="h-4 w-4" />
                  Upload Artwork
                  <input
                    type="file"
                    multiple
                    accept=".ai,.eps,.pdf,.png,.jpg,.jpeg,.tiff,.tif,.psd,.zip"
                    onChange={handleArtworkUpload}
                    className="hidden"
                    disabled={uploading}
                  />
                </label>
              </div>

              {/* Upload Error */}
              {uploadError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <p className="text-sm text-red-700">{uploadError}</p>
                  <button onClick={() => setUploadError('')} className="ml-auto text-red-600 hover:text-red-800">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}

              {/* Uploading Indicator */}
              {uploading && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center gap-3">
                  <RefreshCw className="h-5 w-5 text-blue-600 animate-spin" />
                  <p className="text-sm text-blue-700">Uploading artwork files...</p>
                </div>
              )}

              {/* Upload Guidelines */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Upload Guidelines</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-medium text-gray-800 mb-1">Accepted Formats:</p>
                    <p>AI, EPS, PDF, PNG, JPG, TIFF, PSD, ZIP</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">Requirements:</p>
                    <p>300 DPI minimum, CMYK color mode, 3mm bleed</p>
                  </div>
                </div>
              </div>

              {/* Artwork List */}
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                {artworks.length === 0 ? (
                  <div className="p-12 text-center">
                    <FileImage className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p className="text-gray-500">No artwork files uploaded yet</p>
                    <p className="text-sm text-gray-400 mt-2">Upload your design files to get started</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {artworks.map(artwork => {
                      const statusInfo = getArtworkStatus(artwork.status)
                      const StatusIcon = statusInfo.icon
                      return (
                        <div key={artwork.id} className="p-5 hover:bg-gray-50 transition">
                          <div className="flex items-start gap-4">
                            {/* File Icon */}
                            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileImage className="h-6 w-6 text-purple-600" />
                            </div>
                            
                            {/* File Info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <h3 className="font-semibold text-gray-900 truncate">{artwork.name}</h3>
                                  <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                                    <span>{formatFileSize(artwork.file_size)}</span>
                                    <span>•</span>
                                    <span>{new Date(artwork.created_at).toLocaleDateString()}</span>
                                  </div>
                                </div>
                                
                                {/* Status Badge */}
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full ${statusInfo.color}`}>
                                  <StatusIcon className="h-3.5 w-3.5" />
                                  {statusInfo.label}
                                </span>
                              </div>
                              
                              {/* Admin Feedback */}
                              {artwork.admin_feedback && (
                                <div className="mt-3 bg-gray-50 rounded-lg p-3">
                                  <p className="text-xs font-medium text-gray-500 mb-1">Achieve Pack Team Feedback:</p>
                                  <p className="text-sm text-gray-700">{artwork.admin_feedback}</p>
                                </div>
                              )}
                              
                              {/* Customer Comment */}
                              {artwork.customer_comment && (
                                <div className="mt-3 bg-blue-50 rounded-lg p-3">
                                  <p className="text-xs font-medium text-blue-600 mb-1">Your Comment:</p>
                                  <p className="text-sm text-blue-800">{artwork.customer_comment}</p>
                                </div>
                              )}
                              
                              {/* Action Buttons */}
                              <div className="mt-4 flex flex-wrap items-center gap-3">
                                {/* Download Original */}
                                <a 
                                  href={artwork.file_url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                                >
                                  <Download className="h-4 w-4" />
                                  Original File
                                </a>
                                
                                {/* Download Proof (if available) */}
                                {artwork.proof_url && (artwork.status === 'proof_ready' || artwork.status === 'approved') && (
                                  <a 
                                    href={artwork.proof_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
                                  >
                                    <Download className="h-4 w-4" />
                                    Download Proof
                                  </a>
                                )}
                                
                                {/* Approve Button (if proof ready) */}
                                {artwork.status === 'proof_ready' && (
                                  <button 
                                    onClick={async () => {
                                      await supabase.from('artwork_files')
                                        .update({ status: 'approved', updated_at: new Date().toISOString() })
                                        .eq('id', artwork.id)
                                      fetchData()
                                    }}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
                                  >
                                    <CheckCircle className="h-4 w-4" />
                                    Approve
                                  </button>
                                )}
                                
                                {/* Request Revision / Upload Revised (if revision needed or proof ready) */}
                                {(artwork.status === 'revision_needed' || artwork.status === 'proof_ready') && (
                                  <>
                                    <button 
                                      onClick={() => {
                                        setSelectedArtwork(artwork)
                                        setShowRevisionModal(true)
                                      }}
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-orange-700 bg-orange-100 rounded-lg hover:bg-orange-200 transition"
                                    >
                                      <MessageSquare className="h-4 w-4" />
                                      Leave Comment
                                    </button>
                                    
                                    <label className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-purple-700 bg-purple-100 rounded-lg hover:bg-purple-200 transition cursor-pointer">
                                      <Upload className="h-4 w-4" />
                                      Upload Revised
                                      <input
                                        type="file"
                                        accept=".ai,.eps,.pdf,.png,.jpg,.jpeg,.tiff,.tif,.psd,.zip"
                                        onChange={handleArtworkUpload}
                                        className="hidden"
                                      />
                                    </label>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Workflow Status Legend */}
              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 mb-4">Artwork Review Workflow</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span className="text-sm text-gray-600">Pending Review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                    <span className="text-sm text-gray-600">In Review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-purple-400"></span>
                    <span className="text-sm text-gray-600">Prepress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-indigo-400"></span>
                    <span className="text-sm text-gray-600">Proof Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-400"></span>
                    <span className="text-sm text-gray-600">Approved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="text-sm text-gray-600">Revision Needed</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Saved Items Tab */}
          {activeTab === 'saved' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Saved Items</h1>
                <Link
                  to="/store"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition"
                >
                  <Plus className="h-4 w-4" /> Add More Items
                </Link>
              </div>

              {savedItems.length === 0 ? (
                <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p className="text-gray-500">No saved items yet</p>
                  <p className="text-sm text-gray-400 mt-2">Items you save from your cart will appear here</p>
                  <Link
                    to="/store"
                    className="inline-flex items-center gap-2 mt-4 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <ShoppingCart className="h-4 w-4" /> Browse Products
                  </Link>
                </div>
              ) : (
                <>
                  {/* Saved Items List */}
                  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <div className="divide-y divide-gray-100">
                      {savedItems.map(item => (
                        <div key={item.id} className="p-5 hover:bg-gray-50 transition">
                          <div className="flex gap-4">
                            {/* Product Image */}
                            {item.image && (
                              <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.src = '/placeholder-product.png'
                                  }}
                                />
                              </div>
                            )}
                            
                            {/* Item Details */}
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start gap-4">
                                <div>
                                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                  {item.variant && (
                                    <p className="text-sm text-gray-500 mt-1">
                                      {item.variant.shape} • {item.variant.size} • {item.variant.barrier}
                                    </p>
                                  )}
                                  <div className="flex items-center gap-4 mt-2 text-sm">
                                    <span className="text-gray-500">Qty: <span className="font-medium text-gray-900">{item.quantity.toLocaleString()}</span></span>
                                    <span className="text-gray-500">Unit: <span className="font-medium text-gray-900">${item.unit_price.toFixed(2)}</span></span>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="text-lg font-bold text-primary-600">${item.total_price.toLocaleString()}</p>
                                  <p className="text-xs text-gray-400 mt-1">
                                    Saved {new Date(item.created_at).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                              
                              {/* Action Buttons */}
                              <div className="flex items-center gap-3 mt-4">
                                <button
                                  onClick={() => {
                                    addToCart({
                                      productId: item.product_id,
                                      name: item.name,
                                      image: item.image,
                                      variant: item.variant,
                                      quantity: item.quantity,
                                      unitPrice: item.unit_price,
                                      totalPrice: item.total_price
                                    })
                                    setIsCartOpen(true)
                                  }}
                                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition"
                                >
                                  <ShoppingCart className="h-4 w-4" />
                                  Add to Cart
                                </button>
                                <button
                                  onClick={async () => {
                                    await supabase.from('saved_cart_items').delete().eq('id', item.id)
                                    fetchData()
                                  }}
                                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition"
                                >
                                  <Trash2 className="h-4 w-4" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary & Checkout */}
                  <div className="bg-white rounded-xl border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Total Saved Items</p>
                        <p className="text-lg font-bold text-gray-900">{savedItems.length} items</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Estimated Total</p>
                        <p className="text-2xl font-bold text-primary-600">
                          ${savedItems.reduce((sum, item) => sum + item.total_price, 0).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          // Add all items to cart
                          savedItems.forEach(item => {
                            addToCart({
                              productId: item.product_id,
                              name: item.name,
                              image: item.image,
                              variant: item.variant,
                              quantity: item.quantity,
                              unitPrice: item.unit_price,
                              totalPrice: item.total_price
                            })
                          })
                          setIsCartOpen(true)
                        }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Add All to Cart & Checkout
                      </button>
                      <button
                        onClick={async () => {
                          if (confirm('Are you sure you want to remove all saved items?')) {
                            await supabase.from('saved_cart_items').delete().eq('user_id', user?.id)
                            fetchData()
                          }
                        }}
                        className="px-4 py-3 border border-red-200 text-red-600 rounded-xl hover:bg-red-50 transition"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </>
              )}
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

      {/* Revision Comment Modal */}
      {showRevisionModal && selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowRevisionModal(false)}>
          <div className="bg-white rounded-xl max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Leave a Comment</h2>
                <p className="text-sm text-gray-500 mt-1">{selectedArtwork.name}</p>
              </div>
              <button onClick={() => setShowRevisionModal(false)} className="text-gray-400 hover:text-gray-600 transition">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What changes do you need?
                </label>
                <textarea
                  value={revisionComment}
                  onChange={(e) => setRevisionComment(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                  placeholder="Describe the changes you'd like to see..."
                />
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                <p><strong>Tip:</strong> Be specific about colors, placement, text changes, or any other modifications needed.</p>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={handleSubmitRevision}
                  disabled={!revisionComment.trim()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white font-medium rounded-lg transition"
                >
                  <Send className="h-4 w-4" />
                  Submit Comment
                </button>
                <button
                  onClick={() => setShowRevisionModal(false)}
                  className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
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

export default DashboardPage
