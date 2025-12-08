import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Package, FileText, Palette, Settings, LogOut, Clock, CheckCircle, Truck, ChevronRight, Home, Download } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { supabase, Order, Quote, Document } from '../lib/supabase'

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
  const navigate = useNavigate()
  const { user, signOut, loading: authLoading } = useAuth()
  const [orders, setOrders] = useState<Order[]>([])
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)

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
    const [ordersRes, quotesRes, docsRes] = await Promise.all([
      supabase.from('orders').select('*').eq('user_id', user?.id).order('created_at', { ascending: false }).limit(5),
      supabase.from('quotes').select('*').eq('user_id', user?.id).order('created_at', { ascending: false }).limit(5),
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

  if (authLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>

  return (
    <div className="min-h-screen bg-neutral-100">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl font-bold text-primary-600">AchievePack</Link>
            <span className="text-neutral-400">/</span>
            <span className="font-medium text-neutral-700">Customer Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-neutral-600 hidden md:block">{user?.email}</span>
            <button onClick={handleSignOut} className="flex items-center gap-2 text-neutral-600 hover:text-red-600 transition">
              <LogOut className="h-5 w-5" /> <span className="hidden md:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Active Orders', value: orders.filter(o => o.status !== 'delivered').length, icon: Package, color: 'bg-blue-500' },
            { label: 'Pending Quotes', value: quotes.filter(q => q.status === 'pending').length, icon: FileText, color: 'bg-yellow-500' },
            { label: 'Documents', value: documents.length, icon: FileText, color: 'bg-green-500' },
            { label: 'Artwork Files', value: 0, icon: Palette, color: 'bg-purple-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-neutral-500 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-neutral-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-full text-white`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-lg font-semibold flex items-center gap-2"><Package className="h-5 w-5 text-primary-500" /> Recent Orders</h2>
            </div>
            <div className="divide-y">
              {orders.length === 0 ? (
                <div className="p-8 text-center text-neutral-400">No orders yet. <Link to="/store" className="text-primary-600 hover:underline">Shop Now</Link></div>
              ) : orders.map(order => (
                <div key={order.id} className="p-4 hover:bg-neutral-50 transition">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{order.order_number}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>{order.status}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <span>${order.total_amount?.toLocaleString()}</span>
                    <span>{new Date(order.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-lg font-semibold flex items-center gap-2"><FileText className="h-5 w-5 text-yellow-500" /> Active Quotes</h2>
            </div>
            <div className="divide-y">
              {quotes.length === 0 ? (
                <div className="p-8 text-center text-neutral-400">No quotes yet</div>
              ) : quotes.map(quote => (
                <div key={quote.id} className="p-4 hover:bg-neutral-50 transition">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{quote.quote_number}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[quote.status]}`}>{quote.status}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <span>${quote.total_amount?.toLocaleString()}</span>
                    <span>Valid until: {new Date(quote.valid_until).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold flex items-center gap-2"><FileText className="h-5 w-5 text-green-500" /> Compliance Documents</h2>
            </div>
            <div className="divide-y">
              {documents.map(doc => (
                <a key={doc.id} href={doc.file_url || '#'} target="_blank" rel="noopener noreferrer" className="p-4 hover:bg-neutral-50 transition flex items-center justify-between">
                  <div>
                    <span className="font-medium block">{doc.name}</span>
                    <span className="text-xs text-neutral-500">{doc.description}</span>
                  </div>
                  <Download className="h-5 w-5 text-neutral-400" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/store" className="p-4 border rounded-lg hover:border-primary-500 hover:bg-primary-50 transition text-center">
                <Package className="h-8 w-8 mx-auto mb-2 text-primary-500" />
                <span className="font-medium">New Order</span>
              </Link>
              <Link to="/" className="p-4 border rounded-lg hover:border-neutral-500 hover:bg-neutral-50 transition text-center">
                <Home className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
                <span className="font-medium">Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
