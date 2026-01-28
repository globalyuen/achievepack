import React, { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  Package, FileText, Image, Download, Eye, Lock, Truck, 
  CheckCircle, Clock, MapPin, Calendar, ExternalLink,
  RefreshCw, AlertCircle, ChevronRight, Ship, Plane, Box
} from 'lucide-react'
import { supabase } from '../lib/supabase'

interface ShipmentBatch {
  id: string
  batch_number: string
  order_number: string
  customer_po: string
  customer_name: string
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
}

interface Document {
  id: string
  type: string
  name: string
  file_url: string
}

interface Proof {
  id: string
  type: string
  name: string
  file_url: string
  notes: string
}

interface TrackingEvent {
  id: string
  status: string
  location: string
  description: string
  timestamp: string
}

const STATUS_STEPS = [
  { key: 'pending', label: 'Pending', icon: Clock },
  { key: 'processing', label: 'Processing', icon: Box },
  { key: 'shipped', label: 'Shipped', icon: Package },
  { key: 'in_transit', label: 'In Transit', icon: Truck },
  { key: 'delivered', label: 'Delivered', icon: CheckCircle },
]

const STATUS_INDEX: Record<string, number> = {
  pending: 0,
  processing: 1,
  shipped: 2,
  in_transit: 3,
  delivered: 4,
}

export default function ShipmentTrackingPage() {
  const { id } = useParams<{ id: string }>()
  const [password, setPassword] = useState('')
  const [verified, setVerified] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [error, setError] = useState('')
  
  const [batch, setBatch] = useState<ShipmentBatch | null>(null)
  const [documents, setDocuments] = useState<Document[]>([])
  const [proofs, setProofs] = useState<Proof[]>([])
  const [trackingHistory, setTrackingHistory] = useState<TrackingEvent[]>([])
  const [loading, setLoading] = useState(false)
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Verify password
  const handleVerify = async () => {
    if (!password.trim()) {
      setError('Please enter password')
      return
    }
    
    setVerifying(true)
    setError('')
    
    try {
      const { data, error: fetchError } = await supabase
        .from('shipment_batches')
        .select('id, password')
        .eq('id', id)
        .single()
      
      if (fetchError || !data) {
        setError('Shipment not found')
        return
      }
      
      if (data.password !== password) {
        setError('Incorrect password')
        return
      }
      
      setVerified(true)
      fetchData()
    } catch (err) {
      setError('Verification failed')
    } finally {
      setVerifying(false)
    }
  }

  // Fetch shipment data
  const fetchData = useCallback(async () => {
    if (!id) return
    setLoading(true)
    
    try {
      // Fetch batch
      const { data: batchData } = await supabase
        .from('shipment_batches')
        .select('*')
        .eq('id', id)
        .single()
      
      setBatch(batchData)
      
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
      
      // Fetch tracking
      const { data: trackingData } = await supabase
        .from('shipment_tracking_history')
        .select('*')
        .eq('batch_id', id)
        .order('timestamp', { ascending: false })
      
      setTrackingHistory(trackingData || [])
    } catch (err) {
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }, [id])

  // Check if already verified (e.g., from session)
  useEffect(() => {
    const savedPassword = sessionStorage.getItem(`shipment_${id}`)
    if (savedPassword) {
      setPassword(savedPassword)
      setVerified(true)
      fetchData()
    }
  }, [id, fetchData])

  // Save password to session after verification
  useEffect(() => {
    if (verified && password) {
      sessionStorage.setItem(`shipment_${id}`, password)
    }
  }, [verified, password, id])

  // Get shipping icon
  const getShippingIcon = () => {
    switch (batch?.shipping_mode?.toLowerCase()) {
      case 'by sea':
        return <Ship className="h-6 w-6" />
      case 'by air':
        return <Plane className="h-6 w-6" />
      default:
        return <Truck className="h-6 w-6" />
    }
  }

  // Password screen
  if (!verified) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-primary-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Shipment Tracking</h1>
            <p className="text-gray-500">Enter your access password to view shipment details</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError('') }}
                onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                placeholder="Enter access password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </p>
              )}
            </div>
            
            <button
              onClick={handleVerify}
              disabled={verifying}
              className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 transition font-medium"
            >
              {verifying ? 'Verifying...' : 'View Shipment'}
            </button>
          </div>
          
          <div className="mt-6 pt-6 border-t text-center">
            <Link to="/" className="text-sm text-primary-600 hover:text-primary-700">
              Back to Achieve Pack
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Loading
  if (loading || !batch) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <RefreshCw className="h-8 w-8 animate-spin text-primary-500" />
      </div>
    )
  }

  const currentStatusIndex = STATUS_INDEX[batch.shipping_status] ?? 0

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Achieve Pack" className="h-8" />
              <span className="font-semibold text-gray-900">Achieve Pack</span>
            </Link>
            <span className="text-sm text-gray-500">Shipment Tracking</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Title Card */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                Shipment {batch.batch_number}
              </h1>
              <p className="text-gray-500">
                {batch.customer_name} • PO: {batch.customer_po}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary-100 rounded-full text-primary-600">
                {getShippingIcon()}
              </div>
              <div>
                <p className="text-sm text-gray-500">{batch.shipping_mode}</p>
                <p className="font-medium">{batch.carrier || '-'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Progress */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 mb-6">
          <h2 className="text-lg font-semibold mb-6">Shipping Status</h2>
          
          {/* Progress Bar */}
          <div className="relative mb-8">
            {/* Background Line */}
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 rounded-full" />
            {/* Progress Line */}
            <div 
              className="absolute top-5 left-0 h-1 bg-primary-600 rounded-full transition-all duration-500"
              style={{ width: `${(currentStatusIndex / (STATUS_STEPS.length - 1)) * 100}%` }}
            />
            
            {/* Steps */}
            <div className="relative flex justify-between">
              {STATUS_STEPS.map((step, index) => {
                const Icon = step.icon
                const isComplete = index <= currentStatusIndex
                const isCurrent = index === currentStatusIndex
                
                return (
                  <div key={step.key} className="flex flex-col items-center">
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all
                      ${isComplete 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-200 text-gray-400'
                      }
                      ${isCurrent ? 'ring-4 ring-primary-200' : ''}
                    `}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`
                      mt-2 text-xs font-medium text-center
                      ${isComplete ? 'text-primary-600' : 'text-gray-400'}
                    `}>
                      {step.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ETA */}
          {batch.estimated_delivery && (
            <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl">
              <Calendar className="h-5 w-5 text-primary-600" />
              <div>
                <p className="text-sm text-primary-600">Estimated Delivery</p>
                <p className="font-semibold text-primary-900">
                  {new Date(batch.estimated_delivery).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          )}

          {/* Tracking Number */}
          {batch.tracking_number && (
            <div className="mt-4 flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <Package className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Tracking Number</p>
                <p className="font-mono font-medium">{batch.tracking_number}</p>
              </div>
            </div>
          )}
        </div>

        {/* Tracking History */}
        {trackingHistory.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange-500" />
              Tracking Updates
            </h2>
            
            <div className="relative">
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-200" />
              <div className="space-y-4">
                {trackingHistory.map((event, index) => (
                  <div key={event.id} className="relative pl-10">
                    <div className={`
                      absolute left-0 w-6 h-6 rounded-full flex items-center justify-center
                      ${index === 0 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'}
                    `}>
                      {index === 0 ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-3 w-3" />}
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="font-medium text-gray-900">{event.description}</p>
                      {event.location && (
                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </p>
                      )}
                      <p className="text-xs text-gray-400 mt-2">
                        {new Date(event.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Documents */}
        {documents.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-500" />
              Documents
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {documents.map(doc => (
                <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{doc.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{doc.type.replace('_', ' ')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <a
                      href={doc.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 hover:text-primary-600 transition"
                      title="View"
                    >
                      <Eye className="h-5 w-5" />
                    </a>
                    <a
                      href={doc.file_url}
                      download
                      className="p-2 text-gray-500 hover:text-primary-600 transition"
                      title="Download"
                    >
                      <Download className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Delivery Proofs */}
        {proofs.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Image className="h-5 w-5 text-purple-500" />
              Delivery Proofs
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {proofs.map(proof => (
                <button
                  key={proof.id}
                  onClick={() => setSelectedImage(proof.file_url)}
                  className="relative group aspect-square rounded-xl overflow-hidden bg-gray-100"
                >
                  <img
                    src={proof.file_url}
                    alt={proof.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <Eye className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-xs text-white truncate capitalize">{proof.type?.replace('_', ' ')}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Shipment Details */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Shipment Details</h2>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Shipping Term</p>
              <p className="font-medium">{batch.shipping_term || '-'}</p>
            </div>
            <div>
              <p className="text-gray-500">Delivery To</p>
              <p className="font-medium">{batch.delivery_to || '-'}</p>
            </div>
            {batch.total_boxes && (
              <div>
                <p className="text-gray-500">Total Boxes</p>
                <p className="font-medium">{batch.total_boxes} CTNS</p>
              </div>
            )}
            {batch.total_weight_kg && (
              <div>
                <p className="text-gray-500">Total Weight</p>
                <p className="font-medium">{batch.total_weight_kg} KG</p>
              </div>
            )}
            {batch.total_volume_cbm && (
              <div>
                <p className="text-gray-500">Total Volume</p>
                <p className="font-medium">{batch.total_volume_cbm} CBM</p>
              </div>
            )}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-primary-50 rounded-2xl p-6 text-center">
          <p className="text-primary-800 mb-2">Questions about your shipment?</p>
          <a 
            href="mailto:info@achievepack.com" 
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            Contact us
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Proof"
              className="max-w-full max-h-[90vh] rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-2xl text-gray-600">&times;</span>
            </button>
            <a
              href={selectedImage}
              download
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-lg text-gray-700 hover:text-primary-600"
            >
              <Download className="h-4 w-4" />
              Download
            </a>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Achieve Pack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
