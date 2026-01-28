import React, { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, Plus, Search, Package, FileText, Image, Truck, 
  RefreshCw, X, Eye, Copy, Check, Send, MoreHorizontal,
  Calendar, MapPin, Clock, ChevronRight, Upload, Filter,
  CheckCircle, AlertCircle, Loader2, ExternalLink, Lock
} from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import { supabase } from '../../lib/supabase'
import { toast } from 'sonner'

const ADMIN_EMAIL = 'ryan@achievepack.com'

interface ShipmentBatch {
  id: string
  batch_number: string
  order_number: string
  customer_po: string
  customer_id: string
  customer_name: string
  customer_email: string
  password: string
  shipping_status: string
  shipping_term: string
  shipping_mode: string
  delivery_to: string
  tracking_number: string
  carrier: string
  estimated_delivery: string
  actual_delivery: string
  total_boxes: number
  total_weight_kg: number
  total_volume_cbm: number
  notes: string
  created_at: string
  updated_at: string
  documents_count?: number
  proofs_count?: number
}

const STATUS_CONFIG: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  pending: { label: 'Pending', color: 'bg-gray-100 text-gray-700', icon: <Clock className="h-3 w-3" /> },
  processing: { label: 'Processing', color: 'bg-blue-100 text-blue-700', icon: <Package className="h-3 w-3" /> },
  shipped: { label: 'Shipped', color: 'bg-purple-100 text-purple-700', icon: <Truck className="h-3 w-3" /> },
  in_transit: { label: 'In Transit', color: 'bg-orange-100 text-orange-700', icon: <Truck className="h-3 w-3" /> },
  delivered: { label: 'Delivered', color: 'bg-green-100 text-green-700', icon: <CheckCircle className="h-3 w-3" /> },
}

export default function ShipmentHubPage() {
  const { user, loading: authLoading } = useAuth()
  const navigate = useNavigate()
  const [batches, setBatches] = useState<ShipmentBatch[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  
  // Create form state
  const [creating, setCreating] = useState(false)
  const [formData, setFormData] = useState({
    batch_number: '',
    order_number: '',
    customer_po: '',
    customer_name: '',
    customer_email: '',
    shipping_term: 'FOB',
    shipping_mode: 'By Sea',
    delivery_to: '',
    carrier: '',
    tracking_number: '',
    estimated_delivery: '',
    notes: ''
  })

  // Fetch batches
  const fetchBatches = useCallback(async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('shipment_batches')
        .select(`
          *,
          documents:shipment_documents(count),
          proofs:shipment_proofs(count)
        `)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      
      setBatches(data?.map(b => ({
        ...b,
        documents_count: b.documents?.[0]?.count || 0,
        proofs_count: b.proofs?.[0]?.count || 0
      })) || [])
    } catch (err) {
      console.error('Error fetching batches:', err)
      toast.error('Failed to load shipments')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (user?.email === ADMIN_EMAIL) {
      fetchBatches()
    }
  }, [user, fetchBatches])

  // Create batch
  const handleCreate = async () => {
    if (!formData.batch_number || !formData.customer_name) {
      toast.error('Batch number and customer name are required')
      return
    }
    
    setCreating(true)
    try {
      const { data, error } = await supabase
        .from('shipment_batches')
        .insert({
          ...formData,
          shipping_status: 'pending'
        })
        .select()
        .single()
      
      if (error) throw error
      
      toast.success('Shipment batch created!')
      setShowCreateModal(false)
      setFormData({
        batch_number: '',
        order_number: '',
        customer_po: '',
        customer_name: '',
        customer_email: '',
        shipping_term: 'FOB',
        shipping_mode: 'By Sea',
        delivery_to: '',
        carrier: '',
        tracking_number: '',
        estimated_delivery: '',
        notes: ''
      })
      fetchBatches()
      
      // Navigate to detail page
      if (data?.id) {
        navigate(`/ctrl-x9k7m/shipments/${data.id}`)
      }
    } catch (err: any) {
      console.error('Error creating batch:', err)
      toast.error(err.message || 'Failed to create batch')
    } finally {
      setCreating(false)
    }
  }

  // Copy link
  const copyLink = (batch: ShipmentBatch) => {
    const link = `${window.location.origin}/shipment/${batch.id}`
    navigator.clipboard.writeText(link)
    setCopiedId(batch.id)
    toast.success('Link copied!')
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Filter batches
  const filteredBatches = batches.filter(batch => {
    const matchesSearch = 
      batch.batch_number?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      batch.customer_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      batch.customer_po?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      batch.tracking_number?.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || batch.shipping_status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  // Stats
  const stats = {
    total: batches.length,
    pending: batches.filter(b => b.shipping_status === 'pending').length,
    in_transit: batches.filter(b => b.shipping_status === 'in_transit').length,
    delivered: batches.filter(b => b.shipping_status === 'delivered').length,
  }

  // Auth check
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <RefreshCw className="h-8 w-8 animate-spin text-primary-500" />
      </div>
    )
  }

  if (!user || user.email !== ADMIN_EMAIL) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Lock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Access denied</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/ctrl-x9k7m" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
                <span className="hidden sm:inline">Back to Admin</span>
              </Link>
              <div className="h-6 w-px bg-gray-200" />
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary-600" />
                <h1 className="text-lg font-semibold text-gray-900">Shipment Hub</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/ctrl-x9k7m/document-templates"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
              >
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Templates</span>
              </Link>
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
              >
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">New Shipment</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <p className="text-xs text-gray-500 mb-1">Total Shipments</p>
            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <p className="text-xs text-gray-500 mb-1">Pending</p>
            <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <p className="text-xs text-gray-500 mb-1">In Transit</p>
            <p className="text-2xl font-bold text-orange-600">{stats.in_transit}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <p className="text-xs text-gray-500 mb-1">Delivered</p>
            <p className="text-2xl font-bold text-green-600">{stats.delivered}</p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by batch, customer, PO, tracking..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="in_transit">In Transit</option>
            <option value="delivered">Delivered</option>
          </select>
          <button
            onClick={fetchBatches}
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {/* Batch List */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <RefreshCw className="h-8 w-8 animate-spin text-primary-500" />
          </div>
        ) : filteredBatches.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
            <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">No shipments found</p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
            >
              <Plus className="h-4 w-4" />
              Create First Shipment
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBatches.map(batch => {
              const status = STATUS_CONFIG[batch.shipping_status] || STATUS_CONFIG.pending
              return (
                <div
                  key={batch.id}
                  className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow"
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      {/* Left: Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {batch.batch_number}
                          </h3>
                          <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${status.color}`}>
                            {status.icon}
                            {status.label}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <span className="font-medium">Customer:</span> {batch.customer_name}
                          </span>
                          {batch.customer_po && (
                            <span className="flex items-center gap-1">
                              <span className="font-medium">PO:</span> {batch.customer_po}
                            </span>
                          )}
                          {batch.tracking_number && (
                            <span className="flex items-center gap-1">
                              <span className="font-medium">Tracking:</span> {batch.tracking_number}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="inline-flex items-center gap-1 text-gray-500">
                            <FileText className="h-4 w-4" />
                            {batch.documents_count || 0} Documents
                          </span>
                          <span className="inline-flex items-center gap-1 text-gray-500">
                            <Image className="h-4 w-4" />
                            {batch.proofs_count || 0} Proofs
                          </span>
                          {batch.estimated_delivery && (
                            <span className="inline-flex items-center gap-1 text-gray-500">
                              <Calendar className="h-4 w-4" />
                              ETA: {new Date(batch.estimated_delivery).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => copyLink(batch)}
                          className="flex items-center gap-1 px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                          title="Copy customer link"
                        >
                          {copiedId === batch.id ? (
                            <Check className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                        <Link
                          to={`/shipment/${batch.id}`}
                          target="_blank"
                          className="flex items-center gap-1 px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                          title="Preview customer view"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                        <Link
                          to={`/ctrl-x9k7m/shipments/${batch.id}`}
                          className="flex items-center gap-2 px-4 py-2 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
                        >
                          <Eye className="h-4 w-4" />
                          <span className="hidden sm:inline">Manage</span>
                        </Link>
                      </div>
                    </div>

                    {/* Password info */}
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                      <Lock className="h-3 w-3" />
                      <span>Password:</span>
                      <code className="px-2 py-0.5 bg-gray-100 rounded">{batch.password}</code>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white">
              <h2 className="text-lg font-semibold text-gray-900">Create New Shipment</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Batch Number *
                  </label>
                  <input
                    type="text"
                    value={formData.batch_number}
                    onChange={(e) => setFormData({ ...formData, batch_number: e.target.value })}
                    placeholder="e.g. API876-PO20250109"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Customer PO
                  </label>
                  <input
                    type="text"
                    value={formData.customer_po}
                    onChange={(e) => setFormData({ ...formData, customer_po: e.target.value })}
                    placeholder="e.g. 20250109"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Name *
                </label>
                <input
                  type="text"
                  value={formData.customer_name}
                  onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                  placeholder="e.g. Floriteshop"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Email
                </label>
                <input
                  type="email"
                  value={formData.customer_email}
                  onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
                  placeholder="customer@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Shipping Term
                  </label>
                  <select
                    value={formData.shipping_term}
                    onChange={(e) => setFormData({ ...formData, shipping_term: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="FOB">FOB</option>
                    <option value="CIF">CIF</option>
                    <option value="EXW">EXW</option>
                    <option value="DDP">DDP</option>
                    <option value="DAP">DAP</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Shipping Mode
                  </label>
                  <select
                    value={formData.shipping_mode}
                    onChange={(e) => setFormData({ ...formData, shipping_mode: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="By Sea">By Sea</option>
                    <option value="By Air">By Air</option>
                    <option value="By Truck">By Truck</option>
                    <option value="By Rail">By Rail</option>
                    <option value="Express">Express</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery To
                </label>
                <input
                  type="text"
                  value={formData.delivery_to}
                  onChange={(e) => setFormData({ ...formData, delivery_to: e.target.value })}
                  placeholder="e.g. Los Angeles Port"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Carrier
                  </label>
                  <input
                    type="text"
                    value={formData.carrier}
                    onChange={(e) => setFormData({ ...formData, carrier: e.target.value })}
                    placeholder="e.g. COSCO, DHL"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tracking Number
                  </label>
                  <input
                    type="text"
                    value={formData.tracking_number}
                    onChange={(e) => setFormData({ ...formData, tracking_number: e.target.value })}
                    placeholder="e.g. COSU1234567"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estimated Delivery
                </label>
                <input
                  type="date"
                  value={formData.estimated_delivery}
                  onChange={(e) => setFormData({ ...formData, estimated_delivery: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any additional notes..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 p-4 border-t">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                disabled={creating}
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 transition"
              >
                {creating ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
                Create Shipment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
