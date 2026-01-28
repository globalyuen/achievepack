import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, FileText, Image, Upload, Trash2, Eye, Download, 
  RefreshCw, X, Send, Plus, Clock, MapPin, Check, Copy,
  Truck, Package, CheckCircle, AlertCircle, Loader2, Lock,
  ExternalLink, Sparkles, Calendar, Edit, Save
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
}

interface Document {
  id: string
  batch_id: string
  type: string
  name: string
  file_url: string
  file_type: string
  file_size: number
  created_at: string
}

interface Proof {
  id: string
  batch_id: string
  type: string
  name: string
  file_url: string
  notes: string
  uploaded_at: string
}

interface TrackingEvent {
  id: string
  batch_id: string
  status: string
  location: string
  description: string
  timestamp: string
}

const STATUS_OPTIONS = [
  { value: 'pending', label: 'Pending', color: 'bg-gray-100 text-gray-700' },
  { value: 'processing', label: 'Processing', color: 'bg-blue-100 text-blue-700' },
  { value: 'shipped', label: 'Shipped', color: 'bg-purple-100 text-purple-700' },
  { value: 'in_transit', label: 'In Transit', color: 'bg-orange-100 text-orange-700' },
  { value: 'delivered', label: 'Delivered', color: 'bg-green-100 text-green-700' },
]

const DOCUMENT_TYPES = [
  { value: 'invoice', label: 'Commercial Invoice' },
  { value: 'packing_list', label: 'Packing List' },
  { value: 'bill_of_lading', label: 'Bill of Lading' },
  { value: 'certificate', label: 'Certificate' },
  { value: 'other', label: 'Other' },
]

const PROOF_TYPES = [
  { value: 'delivery_receipt', label: 'Delivery Receipt' },
  { value: 'shipping_label', label: 'Shipping Label' },
  { value: 'cargo_photo', label: 'Cargo Photo' },
  { value: 'signature', label: 'Signature' },
  { value: 'other', label: 'Other' },
]

export default function ShipmentDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { user, loading: authLoading } = useAuth()
  const navigate = useNavigate()
  
  const [batch, setBatch] = useState<ShipmentBatch | null>(null)
  const [documents, setDocuments] = useState<Document[]>([])
  const [proofs, setProofs] = useState<Proof[]>([])
  const [trackingHistory, setTrackingHistory] = useState<TrackingEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [uploadingProof, setUploadingProof] = useState(false)
  const [saving, setSaving] = useState(false)
  
  // Upload modal state
  const [showUploadModal, setShowUploadModal] = useState<'document' | 'proof' | null>(null)
  const [uploadType, setUploadType] = useState('')
  const [uploadNotes, setUploadNotes] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  // Status update modal
  const [showStatusModal, setShowStatusModal] = useState(false)
  const [newStatus, setNewStatus] = useState('')
  const [statusLocation, setStatusLocation] = useState('')
  const [statusDescription, setStatusDescription] = useState('')
  
  // Edit mode
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState<Partial<ShipmentBatch>>({})
  
  const [copiedLink, setCopiedLink] = useState(false)

  // Fetch data
  const fetchData = useCallback(async () => {
    if (!id) return
    try {
      setLoading(true)
      
      // Fetch batch
      const { data: batchData, error: batchError } = await supabase
        .from('shipment_batches')
        .select('*')
        .eq('id', id)
        .single()
      
      if (batchError) throw batchError
      setBatch(batchData)
      setEditData(batchData)
      
      // Fetch documents
      const { data: docsData } = await supabase
        .from('shipment_documents')
        .select('*')
        .eq('batch_id', id)
        .order('created_at', { ascending: false })
      
      setDocuments(docsData || [])
      
      // Fetch proofs
      const { data: proofsData } = await supabase
        .from('shipment_proofs')
        .select('*')
        .eq('batch_id', id)
        .order('uploaded_at', { ascending: false })
      
      setProofs(proofsData || [])
      
      // Fetch tracking history
      const { data: trackingData } = await supabase
        .from('shipment_tracking_history')
        .select('*')
        .eq('batch_id', id)
        .order('timestamp', { ascending: false })
      
      setTrackingHistory(trackingData || [])
      
    } catch (err) {
      console.error('Error fetching data:', err)
      toast.error('Failed to load shipment data')
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    if (user?.email === ADMIN_EMAIL) {
      fetchData()
    }
  }, [user, fetchData])

  // Save batch updates
  const handleSave = async () => {
    if (!batch) return
    setSaving(true)
    try {
      const { error } = await supabase
        .from('shipment_batches')
        .update({
          ...editData,
          updated_at: new Date().toISOString()
        })
        .eq('id', batch.id)
      
      if (error) throw error
      
      setBatch({ ...batch, ...editData })
      setIsEditing(false)
      toast.success('Shipment updated!')
    } catch (err: any) {
      console.error('Error saving:', err)
      toast.error(err.message || 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  // Upload document
  const handleUploadDocument = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0 || !batch) return
    
    setUploading(true)
    try {
      for (const file of Array.from(files)) {
        const ext = file.name.split('.').pop() || 'bin'
        const fileName = `${batch.id}/docs/${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`
        
        const { error: uploadError } = await supabase.storage
          .from('shipments')
          .upload(fileName, file)
        
        if (uploadError) throw uploadError
        
        const { data: urlData } = supabase.storage.from('shipments').getPublicUrl(fileName)
        
        const { error: insertError } = await supabase
          .from('shipment_documents')
          .insert({
            batch_id: batch.id,
            type: uploadType || 'other',
            name: file.name,
            file_url: urlData.publicUrl,
            file_type: file.type,
            file_size: file.size
          })
        
        if (insertError) throw insertError
      }
      
      toast.success('Document uploaded!')
      setShowUploadModal(null)
      setUploadType('')
      fetchData()
    } catch (err: any) {
      console.error('Upload error:', err)
      toast.error(err.message || 'Upload failed')
    } finally {
      setUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  // Upload proof
  const handleUploadProof = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0 || !batch) return
    
    setUploadingProof(true)
    try {
      for (const file of Array.from(files)) {
        const ext = file.name.split('.').pop() || 'bin'
        const fileName = `${batch.id}/proofs/${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`
        
        const { error: uploadError } = await supabase.storage
          .from('shipments')
          .upload(fileName, file)
        
        if (uploadError) throw uploadError
        
        const { data: urlData } = supabase.storage.from('shipments').getPublicUrl(fileName)
        
        const { error: insertError } = await supabase
          .from('shipment_proofs')
          .insert({
            batch_id: batch.id,
            type: uploadType || 'other',
            name: file.name,
            file_url: urlData.publicUrl,
            notes: uploadNotes
          })
        
        if (insertError) throw insertError
      }
      
      toast.success('Proof uploaded!')
      setShowUploadModal(null)
      setUploadType('')
      setUploadNotes('')
      fetchData()
    } catch (err: any) {
      console.error('Upload error:', err)
      toast.error(err.message || 'Upload failed')
    } finally {
      setUploadingProof(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  // Delete document
  const handleDeleteDocument = async (doc: Document) => {
    if (!confirm('Delete this document?')) return
    try {
      await supabase.from('shipment_documents').delete().eq('id', doc.id)
      toast.success('Document deleted')
      fetchData()
    } catch (err) {
      toast.error('Failed to delete')
    }
  }

  // Delete proof
  const handleDeleteProof = async (proof: Proof) => {
    if (!confirm('Delete this proof?')) return
    try {
      await supabase.from('shipment_proofs').delete().eq('id', proof.id)
      toast.success('Proof deleted')
      fetchData()
    } catch (err) {
      toast.error('Failed to delete')
    }
  }

  // Add tracking event
  const handleAddTracking = async () => {
    if (!batch || !newStatus) return
    try {
      // Update batch status
      await supabase
        .from('shipment_batches')
        .update({ 
          shipping_status: newStatus,
          updated_at: new Date().toISOString()
        })
        .eq('id', batch.id)
      
      // Add tracking history
      await supabase
        .from('shipment_tracking_history')
        .insert({
          batch_id: batch.id,
          status: newStatus,
          location: statusLocation,
          description: statusDescription,
          updated_by: user?.id
        })
      
      toast.success('Status updated!')
      setShowStatusModal(false)
      setNewStatus('')
      setStatusLocation('')
      setStatusDescription('')
      fetchData()
    } catch (err) {
      toast.error('Failed to update status')
    }
  }

  // Copy link
  const copyLink = () => {
    if (!batch) return
    const link = `${window.location.origin}/shipment/${batch.id}`
    navigator.clipboard.writeText(link)
    setCopiedLink(true)
    toast.success('Link copied!')
    setTimeout(() => setCopiedLink(false), 2000)
  }

  // Auth check
  if (authLoading || loading) {
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

  if (!batch) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Shipment not found</p>
        </div>
      </div>
    )
  }

  const currentStatus = STATUS_OPTIONS.find(s => s.value === batch.shipping_status) || STATUS_OPTIONS[0]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/ctrl-x9k7m/shipments" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
                <span className="hidden sm:inline">Back</span>
              </Link>
              <div className="h-6 w-px bg-gray-200" />
              <h1 className="text-lg font-semibold text-gray-900">{batch.batch_number}</h1>
              <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${currentStatus.color}`}>
                {currentStatus.label}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={copyLink}
                className="flex items-center gap-1 px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                {copiedLink ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                <span className="hidden sm:inline">Copy Link</span>
              </button>
              <Link
                to={`/shipment/${batch.id}`}
                target="_blank"
                className="flex items-center gap-1 px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="hidden sm:inline">Preview</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Details & Documents */}
          <div className="lg:col-span-2 space-y-6">
            {/* Batch Info Card */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Shipment Details</h2>
                {isEditing ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => { setIsEditing(false); setEditData(batch) }}
                      className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="flex items-center gap-1 px-3 py-1.5 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
                    >
                      {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                      Save
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <label className="text-gray-500">Customer</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.customer_name || ''}
                      onChange={(e) => setEditData({ ...editData, customer_name: e.target.value })}
                      className="w-full mt-1 px-2 py-1 border rounded"
                    />
                  ) : (
                    <p className="font-medium">{batch.customer_name}</p>
                  )}
                </div>
                <div>
                  <label className="text-gray-500">Customer PO</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.customer_po || ''}
                      onChange={(e) => setEditData({ ...editData, customer_po: e.target.value })}
                      className="w-full mt-1 px-2 py-1 border rounded"
                    />
                  ) : (
                    <p className="font-medium">{batch.customer_po || '-'}</p>
                  )}
                </div>
                <div>
                  <label className="text-gray-500">Shipping Term</label>
                  {isEditing ? (
                    <select
                      value={editData.shipping_term || ''}
                      onChange={(e) => setEditData({ ...editData, shipping_term: e.target.value })}
                      className="w-full mt-1 px-2 py-1 border rounded"
                    >
                      <option value="FOB">FOB</option>
                      <option value="CIF">CIF</option>
                      <option value="EXW">EXW</option>
                      <option value="DDP">DDP</option>
                    </select>
                  ) : (
                    <p className="font-medium">{batch.shipping_term || '-'}</p>
                  )}
                </div>
                <div>
                  <label className="text-gray-500">Shipping Mode</label>
                  {isEditing ? (
                    <select
                      value={editData.shipping_mode || ''}
                      onChange={(e) => setEditData({ ...editData, shipping_mode: e.target.value })}
                      className="w-full mt-1 px-2 py-1 border rounded"
                    >
                      <option value="By Sea">By Sea</option>
                      <option value="By Air">By Air</option>
                      <option value="By Truck">By Truck</option>
                      <option value="Express">Express</option>
                    </select>
                  ) : (
                    <p className="font-medium">{batch.shipping_mode || '-'}</p>
                  )}
                </div>
                <div>
                  <label className="text-gray-500">Carrier</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.carrier || ''}
                      onChange={(e) => setEditData({ ...editData, carrier: e.target.value })}
                      className="w-full mt-1 px-2 py-1 border rounded"
                    />
                  ) : (
                    <p className="font-medium">{batch.carrier || '-'}</p>
                  )}
                </div>
                <div>
                  <label className="text-gray-500">Tracking Number</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.tracking_number || ''}
                      onChange={(e) => setEditData({ ...editData, tracking_number: e.target.value })}
                      className="w-full mt-1 px-2 py-1 border rounded"
                    />
                  ) : (
                    <p className="font-medium">{batch.tracking_number || '-'}</p>
                  )}
                </div>
                <div>
                  <label className="text-gray-500">Delivery To</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.delivery_to || ''}
                      onChange={(e) => setEditData({ ...editData, delivery_to: e.target.value })}
                      className="w-full mt-1 px-2 py-1 border rounded"
                    />
                  ) : (
                    <p className="font-medium">{batch.delivery_to || '-'}</p>
                  )}
                </div>
                <div>
                  <label className="text-gray-500">Est. Delivery</label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={editData.estimated_delivery || ''}
                      onChange={(e) => setEditData({ ...editData, estimated_delivery: e.target.value })}
                      className="w-full mt-1 px-2 py-1 border rounded"
                    />
                  ) : (
                    <p className="font-medium">
                      {batch.estimated_delivery ? new Date(batch.estimated_delivery).toLocaleDateString() : '-'}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Password */}
              <div className="mt-4 pt-4 border-t flex items-center gap-2 text-sm text-gray-500">
                <Lock className="h-4 w-4" />
                <span>Access Password:</span>
                <code className="px-2 py-0.5 bg-gray-100 rounded font-mono">{batch.password}</code>
              </div>
            </div>

            {/* Documents Section */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary-600" />
                  Documents ({documents.length})
                </h2>
                <button
                  onClick={() => { setShowUploadModal('document'); setUploadType('invoice') }}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  <Upload className="h-4 w-4" />
                  Upload
                </button>
              </div>
              
              {documents.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <FileText className="h-10 w-10 mx-auto mb-2 text-gray-300" />
                  <p>No documents yet</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {documents.map(doc => (
                    <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-primary-500" />
                        <div>
                          <p className="font-medium text-sm">{doc.name}</p>
                          <p className="text-xs text-gray-500 capitalize">{doc.type.replace('_', ' ')}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={doc.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-500 hover:text-primary-600"
                        >
                          <Eye className="h-4 w-4" />
                        </a>
                        <a
                          href={doc.file_url}
                          download
                          className="p-2 text-gray-500 hover:text-primary-600"
                        >
                          <Download className="h-4 w-4" />
                        </a>
                        <button
                          onClick={() => handleDeleteDocument(doc)}
                          className="p-2 text-gray-500 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Delivery Proofs Section */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Image className="h-5 w-5 text-purple-600" />
                  Delivery Proofs ({proofs.length})
                </h2>
                <button
                  onClick={() => { setShowUploadModal('proof'); setUploadType('cargo_photo') }}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  <Upload className="h-4 w-4" />
                  Upload
                </button>
              </div>
              
              {proofs.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Image className="h-10 w-10 mx-auto mb-2 text-gray-300" />
                  <p>No proofs uploaded</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {proofs.map(proof => (
                    <div key={proof.id} className="relative group">
                      <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={proof.file_url}
                          alt={proof.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                        <a
                          href={proof.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full text-gray-700 hover:text-primary-600"
                        >
                          <Eye className="h-4 w-4" />
                        </a>
                        <button
                          onClick={() => handleDeleteProof(proof)}
                          className="p-2 bg-white rounded-full text-gray-700 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="mt-2 text-xs text-gray-600 truncate capitalize">{proof.type?.replace('_', ' ')}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Status & Tracking */}
          <div className="space-y-6">
            {/* Update Status Card */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Shipping Status</h2>
                <button
                  onClick={() => { setShowStatusModal(true); setNewStatus(batch.shipping_status) }}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Update
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-full ${currentStatus.color.replace('text-', 'bg-').replace('-700', '-100')}`}>
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">{currentStatus.label}</p>
                  {batch.carrier && <p className="text-sm text-gray-500">{batch.carrier}</p>}
                </div>
              </div>
            </div>

            {/* Tracking History */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  Tracking History
                </h2>
                <button
                  onClick={() => setShowStatusModal(true)}
                  className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700"
                >
                  <Plus className="h-4 w-4" />
                  Add
                </button>
              </div>
              
              {trackingHistory.length === 0 ? (
                <div className="text-center py-6 text-gray-500">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                  <p className="text-sm">No tracking updates</p>
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-200" />
                  <div className="space-y-4">
                    {trackingHistory.map((event, index) => {
                      const status = STATUS_OPTIONS.find(s => s.value === event.status)
                      return (
                        <div key={event.id} className="relative pl-8">
                          <div className={`absolute left-0 w-6 h-6 rounded-full flex items-center justify-center ${
                            index === 0 ? 'bg-primary-600 text-white' : 'bg-gray-200'
                          }`}>
                            {index === 0 ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-3 w-3" />}
                          </div>
                          <div>
                            <p className="font-medium text-sm">{event.description || status?.label}</p>
                            {event.location && (
                              <p className="text-xs text-gray-500 flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {event.location}
                              </p>
                            )}
                            <p className="text-xs text-gray-400 mt-1">
                              {new Date(event.timestamp).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Send to Customer */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-lg font-semibold mb-4">Share with Customer</h2>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Customer Link</p>
                  <code className="text-xs break-all">{window.location.origin}/shipment/{batch.id}</code>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Access Password</p>
                  <code className="font-mono">{batch.password}</code>
                </div>
                {batch.customer_email && (
                  <button
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <Send className="h-4 w-4" />
                    Send Email to Customer
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">
                Upload {showUploadModal === 'document' ? 'Document' : 'Proof'}
              </h2>
              <button onClick={() => setShowUploadModal(null)} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  value={uploadType}
                  onChange={(e) => setUploadType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  {(showUploadModal === 'document' ? DOCUMENT_TYPES : PROOF_TYPES).map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              {showUploadModal === 'proof' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                  <input
                    type="text"
                    value={uploadNotes}
                    onChange={(e) => setUploadNotes(e.target.value)}
                    placeholder="Optional notes..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">File</label>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary-500 hover:bg-gray-50 transition">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">
                      {uploading || uploadingProof ? 'Uploading...' : 'Click to upload'}
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept={showUploadModal === 'document' ? '.pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png' : 'image/*'}
                    onChange={showUploadModal === 'document' ? handleUploadDocument : handleUploadProof}
                    className="hidden"
                    disabled={uploading || uploadingProof}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Status Update Modal */}
      {showStatusModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Update Status</h2>
              <button onClick={() => setShowStatusModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  {STATUS_OPTIONS.map(status => (
                    <option key={status.value} value={status.value}>{status.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={statusLocation}
                  onChange={(e) => setStatusLocation(e.target.value)}
                  placeholder="e.g. Hong Kong Port"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={statusDescription}
                  onChange={(e) => setStatusDescription(e.target.value)}
                  placeholder="e.g. Departed from port, expected arrival in 5 days"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 p-4 border-t">
              <button
                onClick={() => setShowStatusModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTracking}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
