import React, { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  Lock, CheckCircle, AlertCircle, Clock, X, Check, ChevronLeft, ChevronRight,
  RefreshCw, FileImage, Sparkles, AlertTriangle, Info, Send, MessageSquare,
  ZoomIn, Download
} from 'lucide-react'
import { supabase, ArtworkBatch, ArtworkBatchItem } from '../lib/supabase'

// Important Notice Content (from provided image)
const IMPORTANT_NOTICE = [
  "This proof is an exact duplicate of the original production artwork that will be used to print your product.",
  "All copy, punctuation and spelling has been proof read by the account executive.",
  "We will not be responsible for any discrepancies that are approved by the customer.",
  "Color Management will be controlled by other document."
]

// Checklist Items (from provided image)
const CHECKLIST_ITEMS = [
  { key: 'size', label: 'Size' },
  { key: 'correct_colours', label: 'Correct Colours' },
  { key: 'eyespot_size_location', label: 'Eyespot Size and Location' },
  { key: 'weight_description', label: 'Weight Description' },
  { key: 'correct_upc_barcode', label: 'Correct UPC/Bar Code' },
  { key: 'roll_direction', label: 'Roll Direction' },
  { key: 'add_ons', label: 'Add Ons (e.g. zipper, tear notch, etc)' },
  { key: 'fin_lap_seal', label: 'Fin/Lap Seal' }
] as const

// Tolerances (from provided image)
const TOLERANCES = [
  "Bag Making Tolerance +/-2mm",
  "Color Tolerance +/-10%"
]

const ArtworkReviewPage: React.FC = () => {
  const { batchId } = useParams<{ batchId: string }>()
  
  // Auth state
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  
  // Data state
  const [batch, setBatch] = useState<ArtworkBatch | null>(null)
  const [items, setItems] = useState<ArtworkBatchItem[]>([])
  const [loading, setLoading] = useState(true)
  
  // Review state
  const [selectedItem, setSelectedItem] = useState<ArtworkBatchItem | null>(null)
  const [showReviewModal, setShowReviewModal] = useState(false)
  
  // Overall approval state
  const [showOverallApproval, setShowOverallApproval] = useState(false)
  const [approverName, setApproverName] = useState('')
  const [approverCompany, setApproverCompany] = useState('')
  const [overallComment, setOverallComment] = useState('')
  const [submitting, setSubmitting] = useState(false)
  
  // Image preview
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  // Fetch batch data
  const fetchBatchData = useCallback(async () => {
    if (!batchId) return
    
    try {
      const { data: batchData, error: batchError } = await supabase
        .from('artwork_batches')
        .select('*')
        .eq('id', batchId)
        .single()
      
      if (batchError) throw batchError
      setBatch(batchData)
      
      // Fetch items
      const { data: itemsData, error: itemsError } = await supabase
        .from('artwork_batch_items')
        .select('*')
        .eq('batch_id', batchId)
        .order('created_at', { ascending: true })
      
      if (itemsError) throw itemsError
      setItems(itemsData || [])
    } catch (err) {
      console.error('Error fetching batch:', err)
    } finally {
      setLoading(false)
    }
  }, [batchId])

  // Verify password
  const handleVerifyPassword = async () => {
    if (!password.trim() || !batch) return
    
    if (password.trim() === batch.password) {
      setAuthenticated(true)
      setPasswordError('')
    } else {
      setPasswordError('Incorrect password. Please try again.')
    }
  }

  // Update item status
  const handleItemApproval = async (
    item: ArtworkBatchItem, 
    approvalType: 'approve_as_is' | 'approve_with_changes' | 'not_approved',
    comment: string,
    checklist: Record<string, boolean>
  ) => {
    try {
      const status = approvalType === 'not_approved' ? 'rejected' : 'approved'
      
      await supabase
        .from('artwork_batch_items')
        .update({
          status,
          approval_type: approvalType,
          customer_comment: comment || null,
          checklist,
          updated_at: new Date().toISOString()
        })
        .eq('id', item.id)
      
      // Update local state
      setItems(prev => prev.map(i => 
        i.id === item.id ? { ...i, status, approval_type: approvalType, customer_comment: comment, checklist } : i
      ))
      
      // Update batch counts
      const updatedItems = items.map(i => i.id === item.id ? { ...i, status } : i)
      const approved = updatedItems.filter(i => i.status === 'approved').length
      const rejected = updatedItems.filter(i => i.status === 'rejected').length
      
      await supabase
        .from('artwork_batches')
        .update({
          approved_count: approved,
          rejected_count: rejected,
          status: updatedItems.every(i => i.status !== 'pending') 
            ? (rejected > 0 ? 'rejected' : 'approved')
            : 'partial'
        })
        .eq('id', batchId)
      
      setShowReviewModal(false)
      setSelectedItem(null)
    } catch (err) {
      console.error('Error updating item:', err)
      alert('Failed to save. Please try again.')
    }
  }

  // Submit overall approval
  const handleOverallApproval = async () => {
    if (!approverName.trim()) {
      alert('Please enter your name')
      return
    }
    
    setSubmitting(true)
    try {
      await supabase
        .from('artwork_batches')
        .update({
          overall_comment: overallComment || null,
          approved_by_name: approverName,
          approved_by_company: approverCompany || null,
          approved_at: new Date().toISOString(),
          status: items.some(i => i.status === 'rejected') ? 'rejected' : 'approved'
        })
        .eq('id', batchId)
      
      // Send notification email to admin (via edge function or direct)
      // This would typically be done via a Supabase edge function
      
      alert('Your review has been submitted. Thank you!')
      setShowOverallApproval(false)
      fetchBatchData()
    } catch (err) {
      console.error('Error submitting approval:', err)
      alert('Failed to submit. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    if (batchId) {
      fetchBatchData()
    }
  }, [batchId, fetchBatchData])

  // Status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700"><CheckCircle className="h-3 w-3" />Approved</span>
      case 'rejected':
        return <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-700"><AlertCircle className="h-3 w-3" />Revision Needed</span>
      default:
        return <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700"><Clock className="h-3 w-3" />Pending Review</span>
    }
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin text-primary-500 mx-auto mb-4" />
          <p className="text-gray-600">Loading artwork batch...</p>
        </div>
      </div>
    )
  }

  // Not found
  if (!batch) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h1 className="text-xl font-semibold text-gray-900">Batch Not Found</h1>
          <p className="text-gray-500 mt-2">This artwork batch doesn't exist or has been removed.</p>
        </div>
      </div>
    )
  }

  // Password gate
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-primary-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Artwork Review</h1>
            <p className="text-gray-500 mt-2">Batch: {batch.batch_name}</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Enter Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setPasswordError('')
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleVerifyPassword()}
                placeholder="Access password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              {passwordError && (
                <p className="text-sm text-red-600 mt-2">{passwordError}</p>
              )}
            </div>
            
            <button
              onClick={handleVerifyPassword}
              disabled={!password.trim()}
              className="w-full py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition disabled:opacity-50"
            >
              Access Artwork
            </button>
          </div>
          
          <p className="text-xs text-gray-400 text-center mt-6">
            Password provided by AchievePack
          </p>
        </div>
      </div>
    )
  }

  // Stats
  const totalItems = items.length
  const approvedCount = items.filter(i => i.status === 'approved').length
  const rejectedCount = items.filter(i => i.status === 'rejected').length
  const pendingCount = items.filter(i => i.status === 'pending').length
  const allReviewed = pendingCount === 0

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <img src="https://achievepack.com/favicon.ico" alt="AchievePack" className="h-8 w-8" />
              <div>
                <h1 className="font-semibold text-gray-900">Artwork Review - Batch {batch.batch_name}</h1>
                <p className="text-xs text-gray-500">{totalItems} artworks • {pendingCount} pending review</p>
              </div>
            </div>
            {allReviewed && (
              <button
                onClick={() => setShowOverallApproval(true)}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                <Send className="h-4 w-4" />
                <span>Submit Review</span>
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold text-amber-800 mb-3">Important Notice - Please Read Before Approval</h2>
              <ul className="space-y-2">
                {IMPORTANT_NOTICE.map((notice, i) => (
                  <li key={i} className="text-sm text-amber-700 flex items-start gap-2">
                    <span className="text-amber-400">•</span>
                    {notice}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-amber-200">
                <p className="text-sm font-medium text-amber-800">Tolerances:</p>
                <ul className="mt-1 space-y-1">
                  {TOLERANCES.map((t, i) => (
                    <li key={i} className="text-sm text-amber-700">{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-500">Pending</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-1">{pendingCount}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-500">Approved</span>
            </div>
            <p className="text-2xl font-bold text-green-600 mt-1">{approvedCount}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <span className="text-sm text-gray-500">Need Revision</span>
            </div>
            <p className="text-2xl font-bold text-red-600 mt-1">{rejectedCount}</p>
          </div>
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((item, index) => {
            const isImage = /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(item.file_url)
            return (
              <div 
                key={item.id} 
                className={`bg-white rounded-xl border overflow-hidden hover:shadow-lg transition cursor-pointer ${
                  item.status === 'approved' ? 'border-green-200' :
                  item.status === 'rejected' ? 'border-red-200' : 'border-gray-200'
                }`}
                onClick={() => {
                  setSelectedItem(item)
                  setShowReviewModal(true)
                }}
              >
                {/* Preview */}
                <div className="aspect-[4/3] bg-gray-100 relative">
                  {isImage ? (
                    <img 
                      src={item.file_url} 
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FileImage className="h-12 w-12 text-gray-300" />
                    </div>
                  )}
                  {/* Number Badge */}
                  <div className="absolute top-2 left-2 w-8 h-8 bg-black/60 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-2 right-2">
                    {getStatusBadge(item.status)}
                  </div>
                </div>
                
                {/* Info */}
                <div className="p-3">
                  <h3 className="font-medium text-gray-900 truncate text-sm" title={item.name}>{item.name}</h3>
                  {item.customer_comment && (
                    <p className="text-xs text-gray-500 mt-1 truncate">
                      <MessageSquare className="h-3 w-3 inline mr-1" />
                      {item.customer_comment}
                    </p>
                  )}
                  <button className="w-full mt-2 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded-lg transition">
                    {item.status === 'pending' ? 'Review Now' : 'View Details'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Overall Submit Button (bottom) */}
        {allReviewed && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowOverallApproval(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition"
            >
              <Send className="h-5 w-5" />
              Submit All Reviews
            </button>
            <p className="text-sm text-gray-500 mt-2">
              All {totalItems} artworks have been reviewed. Click to finalize your submission.
            </p>
          </div>
        )}
      </div>

      {/* Review Modal */}
      {showReviewModal && selectedItem && (
        <ReviewModal
          item={selectedItem}
          onClose={() => {
            setShowReviewModal(false)
            setSelectedItem(null)
          }}
          onSubmit={handleItemApproval}
          onPreview={(url) => setPreviewImage(url)}
        />
      )}

      {/* Overall Approval Modal */}
      {showOverallApproval && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Final Submission</h2>
              <button onClick={() => setShowOverallApproval(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Summary */}
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong>{approvedCount}</strong> approved, <strong>{rejectedCount}</strong> need revision
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  value={approverName}
                  onChange={(e) => setApproverName(e.target.value)}
                  placeholder="Full name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  value={approverCompany}
                  onChange={(e) => setApproverCompany(e.target.value)}
                  placeholder="Company name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Overall Comments</label>
                <textarea
                  value={overallComment}
                  onChange={(e) => setOverallComment(e.target.value)}
                  placeholder="Any additional comments..."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              {/* Signature Notice */}
              <p className="text-xs text-gray-500">
                By submitting, you confirm that you have reviewed all artworks and your decisions are final.
              </p>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowOverallApproval(false)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleOverallApproval}
                disabled={!approverName.trim() || submitting}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Confirm & Submit'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Preview Modal */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90"
          onClick={() => setPreviewImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            onClick={() => setPreviewImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={previewImage} 
            alt="Preview" 
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

// Review Modal Component
const ReviewModal: React.FC<{
  item: ArtworkBatchItem
  onClose: () => void
  onSubmit: (item: ArtworkBatchItem, type: 'approve_as_is' | 'approve_with_changes' | 'not_approved', comment: string, checklist: Record<string, boolean>) => void
  onPreview: (url: string) => void
}> = ({ item, onClose, onSubmit, onPreview }) => {
  const [approvalType, setApprovalType] = useState<'approve_as_is' | 'approve_with_changes' | 'not_approved' | null>(
    item.approval_type || null
  )
  const [comment, setComment] = useState(item.customer_comment || '')
  const [checklist, setChecklist] = useState<Record<string, boolean>>(
    item.checklist || {}
  )
  
  const isImage = /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(item.file_url)
  const allChecked = CHECKLIST_ITEMS.every(c => checklist[c.key])

  const handleSubmit = () => {
    if (!approvalType) {
      alert('Please select an approval option')
      return
    }
    if (approvalType !== 'not_approved' && !allChecked) {
      alert('Please verify all checklist items before approving')
      return
    }
    onSubmit(item, approvalType, comment, checklist)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">Review Artwork</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: Image Preview */}
            <div>
              <div 
                className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative cursor-zoom-in"
                onClick={() => isImage && onPreview(item.file_url)}
              >
                {isImage ? (
                  <>
                    <img 
                      src={item.file_url} 
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-2 right-2 p-2 bg-black/50 rounded-lg">
                      <ZoomIn className="h-5 w-5 text-white" />
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <FileImage className="h-16 w-16 text-gray-300 mb-2" />
                    <p className="text-sm text-gray-500">Preview not available</p>
                  </div>
                )}
              </div>
              
              <div className="mt-4 flex items-center gap-3">
                <p className="font-medium text-gray-900 truncate flex-1">{item.name}</p>
                <a
                  href={item.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700"
                >
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </div>
              
              {/* AI Analysis Info */}
              {item.ai_analysis && (
                <div className="mt-4 p-4 bg-indigo-50 rounded-xl">
                  <div className="flex items-center gap-2 text-indigo-700 mb-2">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm font-medium">AI Analysis</span>
                  </div>
                  {item.ai_analysis.title && (
                    <p className="text-sm text-indigo-600">{item.ai_analysis.title}</p>
                  )}
                  {item.ai_analysis.keywords && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.ai_analysis.keywords.slice(0, 5).map((kw, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs bg-indigo-100 text-indigo-600 rounded">
                          {kw}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Right: Review Form */}
            <div className="space-y-6">
              {/* Checklist */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Verification Checklist</h3>
                <div className="space-y-2">
                  {CHECKLIST_ITEMS.map(c => (
                    <label 
                      key={c.key}
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={checklist[c.key] || false}
                        onChange={(e) => setChecklist(prev => ({ ...prev, [c.key]: e.target.checked }))}
                        className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">{c.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Approval Options */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Your Decision</h3>
                <div className="space-y-2">
                  <label className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition ${
                    approvalType === 'approve_as_is' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:bg-gray-50'
                  }`}>
                    <input
                      type="radio"
                      name="approval"
                      checked={approvalType === 'approve_as_is'}
                      onChange={() => setApprovalType('approve_as_is')}
                      className="mt-1"
                    />
                    <div>
                      <span className="font-medium text-gray-900">Approve as is</span>
                      <p className="text-sm text-gray-500">The artwork is approved for production</p>
                    </div>
                  </label>
                  
                  <label className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition ${
                    approvalType === 'approve_with_changes' ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200 hover:bg-gray-50'
                  }`}>
                    <input
                      type="radio"
                      name="approval"
                      checked={approvalType === 'approve_with_changes'}
                      onChange={() => setApprovalType('approve_with_changes')}
                      className="mt-1"
                    />
                    <div>
                      <span className="font-medium text-gray-900">Approve with changes</span>
                      <p className="text-sm text-gray-500">Minor changes noted but approved for production</p>
                    </div>
                  </label>
                  
                  <label className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition ${
                    approvalType === 'not_approved' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:bg-gray-50'
                  }`}>
                    <input
                      type="radio"
                      name="approval"
                      checked={approvalType === 'not_approved'}
                      onChange={() => setApprovalType('not_approved')}
                      className="mt-1"
                    />
                    <div>
                      <span className="font-medium text-gray-900">Not Approved - Send New Proof</span>
                      <p className="text-sm text-gray-500">Requires revision before approval</p>
                    </div>
                  </label>
                </div>
              </div>
              
              {/* Comment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comments {approvalType === 'not_approved' && <span className="text-red-500">*</span>}
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder={approvalType === 'not_approved' ? 'Please describe what needs to be changed...' : 'Optional comments...'}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex gap-3 p-6 border-t bg-gray-50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg hover:bg-white transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!approvalType || (approvalType !== 'not_approved' && !allChecked) || (approvalType === 'not_approved' && !comment.trim())}
            className={`flex-1 px-4 py-3 text-white rounded-lg transition disabled:opacity-50 ${
              approvalType === 'not_approved' ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {approvalType === 'not_approved' ? 'Request Revision' : 'Confirm Approval'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArtworkReviewPage
