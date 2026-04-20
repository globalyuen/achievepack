import React, { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  Lock, CheckCircle, AlertCircle, Clock, X, Check, ChevronLeft, ChevronRight,
  RefreshCw, FileImage, Sparkles, AlertTriangle, Info, Send, MessageSquare,
  ZoomIn, Download, Search, Code, ExternalLink, LayoutGrid, CircleDashed, CheckCircle2,
  Image as ImageIcon, Link as LinkIcon, Trash2, Paperclip
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
  
  // Bulk review state
  const [showBulkReview, setShowBulkReview] = useState(false)
  const [bulkChecklist, setBulkChecklist] = useState<Record<string, boolean>>({})
  const [bulkApprovalType, setBulkApprovalType] = useState<'approve_as_is' | 'approve_with_changes' | 'not_approved' | null>(null)
  const [bulkComment, setBulkComment] = useState('')
  const [bulkSubmitting, setBulkSubmitting] = useState(false)
  
  // Image preview
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('')
  const [itemFilter, setItemFilter] = useState<'all' | 'with-comment' | 'with-artwork' | 'blank' | 'approved' | 'rejected' | 'pending'>('all')
  
  // JSON preview state
  const [showJsonModal, setShowJsonModal] = useState(false)
  const [selectedItemJson, setSelectedItemJson] = useState<ArtworkBatchItem | null>(null)

  // Customer reply thread state
  const [replyingToItem, setReplyingToItem] = useState<string | null>(null)
  const [customerReplyText, setCustomerReplyText] = useState('')
  const [sendingCustomerReply, setSendingCustomerReply] = useState(false)

  // Format file size
  const formatFileSize = (bytes?: number) => {
    if (!bytes) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
  }

  // Customer reply to thread
  const handleCustomerReply = async (item: ArtworkBatchItem, text: string, assets: { type: 'image' | 'link', url: string, name?: string }[] = []) => {
    if ((!text.trim() && assets.length === 0) || sendingCustomerReply) return
    setSendingCustomerReply(true)
    try {
      const newReply = {
        author: 'Customer',
        text: text.trim(),
        at: new Date().toISOString(),
        assets: assets.length > 0 ? assets : undefined
      }
      const existingReplies: any[] = item.ai_analysis?.replies ?? []
      const updatedReplies = [...existingReplies, newReply]
      const updatedAnalysis = { ...(item.ai_analysis || {}), replies: updatedReplies }

      const now = new Date().toISOString()
      const { error } = await supabase
        .from('artwork_batch_items')
        .update({ 
          ai_analysis: updatedAnalysis,
          updated_at: now
        })
        .eq('id', item.id)

      if (error) throw error

      setItems(prev => prev.map(i =>
        i.id === item.id ? { ...i, ai_analysis: updatedAnalysis, updated_at: now } : i
      ))
      setCustomerReplyText('')
      setReplyingToItem(null)
    } catch (err) {
      console.error('Customer reply error:', err)
      alert('Failed to send reply')
    } finally {
      setSendingCustomerReply(false)
    }
  }

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
      
      // Send notification email to admin for individual item review
      try {
        await fetch('/api/send-artwork-batch-approval', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            batchName: batch?.batch_name,
            batchId,
            approvalType,
            approverName: '',
            approverCompany: '',
            comment: comment,
            totalItems: 1,
            approvedCount: approvalType !== 'not_approved' ? 1 : 0,
            rejectedCount: approvalType === 'not_approved' ? 1 : 0,
            items: [{
              name: item.name,
              status,
              comment
            }]
          })
        })
      } catch (emailErr) {
        console.error('Failed to send notification email:', emailErr)
      }
      
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
      const finalStatus = items.some(i => i.status === 'rejected') ? 'rejected' : 'approved'
      const approvedCount = items.filter(i => i.status === 'approved').length
      const rejectedCount = items.filter(i => i.status === 'rejected').length
      
      await supabase
        .from('artwork_batches')
        .update({
          overall_comment: overallComment || null,
          approved_by_name: approverName,
          approved_by_company: approverCompany || null,
          approved_at: new Date().toISOString(),
          status: finalStatus
        })
        .eq('id', batchId)
      
      // Send notification email to admin
      try {
        await fetch('/api/send-artwork-batch-approval', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            batchName: batch?.batch_name,
            batchId,
            approvalType: rejectedCount > 0 ? 'not_approved' : 'approve_as_is',
            approverName,
            approverCompany,
            comment: overallComment,
            totalItems: items.length,
            approvedCount,
            rejectedCount,
            items: items.map(i => ({
              name: i.name,
              status: i.status,
              comment: i.customer_comment
            }))
          })
        })
      } catch (emailErr) {
        console.error('Failed to send notification email:', emailErr)
      }
      
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

  // Bulk review all items at once
  const handleBulkReview = async () => {
    if (!bulkApprovalType) {
      alert('Please select an approval decision')
      return
    }
    
    const allChecked = CHECKLIST_ITEMS.every(c => bulkChecklist[c.key])
    if (bulkApprovalType !== 'not_approved' && !allChecked) {
      alert('Please verify all checklist items before approving')
      return
    }
    
    if (bulkApprovalType === 'not_approved' && !bulkComment.trim()) {
      alert('Please provide comments for revision request')
      return
    }
    
    setBulkSubmitting(true)
    try {
      const status = bulkApprovalType === 'not_approved' ? 'rejected' : 'approved'
      
      // Update all items
      for (const item of items) {
        await supabase
          .from('artwork_batch_items')
          .update({
            status,
            approval_type: bulkApprovalType,
            customer_comment: bulkComment || null,
            checklist: bulkChecklist,
            updated_at: new Date().toISOString()
          })
          .eq('id', item.id)
      }
      
      // Update batch counts
      const approved = bulkApprovalType !== 'not_approved' ? items.length : 0
      const rejected = bulkApprovalType === 'not_approved' ? items.length : 0
      
      await supabase
        .from('artwork_batches')
        .update({
          approved_count: approved,
          rejected_count: rejected,
          status: bulkApprovalType === 'not_approved' ? 'rejected' : 'approved'
        })
        .eq('id', batchId)
      
      // Send notification email to admin
      try {
        await fetch('/api/send-artwork-batch-approval', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            batchName: batch?.batch_name,
            batchId,
            approvalType: bulkApprovalType,
            approverName: '',
            approverCompany: '',
            comment: bulkComment,
            totalItems: items.length,
            approvedCount: approved,
            rejectedCount: rejected,
            items: items.map(i => ({
              name: i.name,
              status: bulkApprovalType === 'not_approved' ? 'rejected' : 'approved',
              comment: bulkComment
            }))
          })
        })
      } catch (emailErr) {
        console.error('Failed to send notification email:', emailErr)
      }
      
      alert(`All ${items.length} artworks have been reviewed!`)
      setShowBulkReview(false)
      setBulkChecklist({})
      setBulkApprovalType(null)
      setBulkComment('')
      fetchBatchData()
    } catch (err) {
      console.error('Error bulk reviewing:', err)
      alert('Failed to save. Please try again.')
    } finally {
      setBulkSubmitting(false)
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
  
  const [itemSortOption, setItemSortOption] = useState<'name' | 'newest' | 'oldest' | 'activity'>('activity')
  
  // Filter and sort items
  const filteredItems = React.useMemo(() => {
    let filtered = items.filter(item => {
    const q = searchQuery.toLowerCase().trim()
    const ai = item.ai_analysis
    
    // Search filter
    const matchesSearch = !q || (
      item.name.toLowerCase().includes(q) ||
      item.customer_comment?.toLowerCase().includes(q) ||
      ai?.title?.toLowerCase().includes(q) ||
      ai?.description?.toLowerCase().includes(q) ||
      ai?.keywords?.some((k: string) => k.toLowerCase().includes(q)) ||
      ai?.category?.toLowerCase().includes(q) ||
      ai?.colors?.some((c: string) => c.toLowerCase().includes(q)) ||
      (ai && JSON.stringify(ai).toLowerCase().includes(q))
    )

    if (!matchesSearch) return false

    // Category filter
    switch (itemFilter) {
      case 'with-comment':
        return !!(item.customer_comment || (item.ai_analysis?.replies?.length ?? 0) > 0)
      case 'with-artwork':
        return !!item.file_url
      case 'blank':
        return !item.file_url
      case 'approved':
        return item.status === 'approved'
      case 'rejected':
        return item.status === 'rejected'
      case 'pending':
        return item.status === 'pending'
      default:
        return true
      }
    })

    // Sort
    return filtered.sort((a, b) => {
      switch (itemSortOption) {
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        case 'oldest':
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        case 'activity':
          const dateA = new Date(a.updated_at || a.created_at).getTime()
          const dateB = new Date(b.updated_at || b.created_at).getTime()
          return dateB - dateA
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })
  }, [items, searchQuery, itemFilter, itemSortOption])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 gap-4">
            <div className="flex items-start gap-4 flex-1 min-w-0">
              <img src="/ap-logo.svg" alt="AchievePack" className="h-8 w-auto flex-shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <h1 className="font-semibold text-gray-900 break-words">Artwork Review - Batch {batch.batch_name}</h1>
                <p className="text-xs text-gray-500">{totalItems} artworks • {pendingCount} pending review</p>
              </div>
            </div>
            {allReviewed && (
              <button
                onClick={() => setShowOverallApproval(true)}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex-shrink-0"
              >
                <Send className="h-4 w-4" />
                <span className="hidden sm:inline">Submit Review</span>
                <span className="sm:hidden">Submit</span>
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

        {/* Bulk Review Button */}
        {pendingCount > 0 && items.length > 1 && (
          <div className="mb-6 p-4 bg-primary-50 border border-primary-200 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-primary-900">Review All Artworks at Once</h3>
                <p className="text-sm text-primary-700 mt-1">
                  Apply the same checklist verification and decision to all {items.length} artworks
                </p>
              </div>
              <button
                onClick={() => setShowBulkReview(true)}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-medium"
              >
                Review All ({items.length})
              </button>
            </div>
          </div>
        )}

        {/* Search & Sort */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, keyword, color..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-1 sm:py-0">
            <span className="text-[10px] uppercase font-bold text-gray-400 whitespace-nowrap">Sort by</span>
            <select 
              value={itemSortOption}
              onChange={(e) => setItemSortOption(e.target.value as any)}
              className="text-xs border-none focus:ring-0 bg-transparent py-2.5 pr-8 font-medium text-gray-700 cursor-pointer"
            >
              <option value="activity">Latest Activity</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-100">
            {[
              { id: 'all', label: 'All', icon: CheckCircle },
              { id: 'with-comment', label: 'Comments', icon: MessageSquare },
              { id: 'with-artwork', label: 'Artworks', icon: FileImage },
              { id: 'approved', label: 'Approved', icon: CheckCircle },
              { id: 'pending', label: 'Pending', icon: Clock },
            ].map(f => {
              const Icon = f.icon
              const isActive = itemFilter === f.id
              return (
                <button
                  key={f.id}
                  onClick={() => setItemFilter(f.id as any)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition ${
                    isActive 
                      ? 'bg-primary-600 text-white shadow-sm' 
                      : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {f.label}
                  <span className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] ${isActive ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
                    {items.filter(i => {
                      if (f.id === 'all') return true
                      if (f.id === 'with-comment') return i.customer_comment || (i.ai_analysis?.replies?.length ?? 0) > 0
                      if (f.id === 'with-artwork') return !!i.file_url
                      if (f.id === 'approved') return i.status === 'approved'
                      if (f.id === 'pending') return i.status === 'pending'
                      return true
                    }).length}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => {
            const isImage = /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(item.file_url) || /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(item.name)
            const isVideo = /\.(mp4|mov|webm)$/i.test(item.file_url) || /\.(mp4|mov|webm)$/i.test(item.name)
            const isPdf = /\.pdf$/i.test(item.file_url) || /\.pdf$/i.test(item.name)
            return (
              <div 
                key={item.id} 
                className={`bg-white rounded-xl border overflow-hidden hover:shadow-lg transition ${
                  item.status === 'approved' ? 'border-green-200' :
                  item.status === 'rejected' ? 'border-red-200' : 'border-gray-200'
                }`}
              >
                {/* Preview */}
                <div 
                  className="aspect-[4/3] bg-gray-100 relative cursor-pointer overflow-hidden group"
                  onClick={() => {
                    setSelectedItem(item)
                    setShowReviewModal(true)
                  }}
                >
                  {isImage ? (
                    <img 
                      src={item.file_url} 
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  ) : isVideo ? (
                    <video 
                      src={item.file_url} 
                      controls
                      className="w-full h-full object-contain bg-black pointer-events-none"
                    />
                  ) : isPdf ? (
                    <iframe 
                      src={`${item.file_url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                      className="w-full h-full border-0 pointer-events-none" 
                      scrolling="no"
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
                  {/* AI Badge */}
                  {item.ai_analysis?.analyzed_at && (
                    <div className="absolute bottom-2 right-2">
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700">
                        <Sparkles className="h-3 w-3" />
                        AI
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Info */}
                <div className="p-3">
                  <h3 className="font-medium text-gray-900 text-xs leading-snug line-clamp-2 break-words" title={item.name}>{item.name}</h3>
                  {item.ai_analysis?.title && (
                    <p className="text-xs text-gray-500 mt-1 truncate">{item.ai_analysis.title}</p>
                  )}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-50">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] text-gray-400 flex items-center gap-1">
                        <Clock className="h-2.5 w-2.5" />
                        Updated: {new Date(item.updated_at).toLocaleDateString()}
                      </span>
                      {item.file_size > 0 && (
                        <span className="text-[10px] text-gray-400 font-medium">
                          Size: {formatFileSize(item.file_size)}
                        </span>
                      )}
                    </div>
                    {(item.customer_comment || (item.ai_analysis?.replies?.length ?? 0) > 0) && (
                      <span className="text-[10px] text-primary-500 font-bold flex items-center gap-1">
                        <MessageSquare className="h-2.5 w-2.5" />
                        {(item.ai_analysis?.replies?.length ?? 0) + (item.customer_comment ? 1 : 0)}
                      </span>
                    )}
                  </div>
                  {/* Thread preview on card */}
                  {(item.customer_comment || (item.ai_analysis?.replies?.length ?? 0) > 0) ? (
                    <div className="mt-1 space-y-1">
                      {item.customer_comment && (
                        <p className="text-[10px] text-yellow-700 truncate">
                          You: {item.customer_comment}
                        </p>
                      )}
                      {(item.ai_analysis?.replies ?? []).slice(-1).map((r: any, i: number) => (
                        <p key={i} className={`text-[10px] truncate ${r.author === 'Admin' ? 'text-blue-600' : 'text-gray-500'}`}>
                          {r.author === 'Admin' ? 'AP: ' : 'You: '}{r.text}
                        </p>
                      ))}
                    </div>
                  ) : null}
                  <div className="flex items-center gap-2 mt-2">
                    <button 
                      onClick={() => {
                        setSelectedItem(item)
                        setShowReviewModal(true)
                      }}
                      className="flex-1 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded-lg transition"
                    >
                      {item.status === 'pending' ? 'Review Now' : 'View Details'}
                    </button>
                    {item.ai_analysis && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedItemJson(item)
                          setShowJsonModal(true)
                        }}
                        className="p-2 text-emerald-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition"
                        title="View AI JSON"
                      >
                        <Code className="h-4 w-4" />
                      </button>
                    )}
                    {item.source_link && (
                      <a
                        href={item.source_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 text-indigo-500 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition"
                        title="View Original Source File"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
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
          onAddReply={handleCustomerReply}
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

      {/* Bulk Review Modal */}
      {showBulkReview && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/50 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full my-8">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Review All Artworks</h2>
                <p className="text-sm text-gray-500 mt-1">Apply to all {items.length} artworks at once</p>
              </div>
              <button onClick={() => setShowBulkReview(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Checklist */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">Verification Checklist</h3>
                  <button
                    onClick={() => {
                      const allChecked = CHECKLIST_ITEMS.every(c => bulkChecklist[c.key])
                      if (allChecked) {
                        setBulkChecklist({})
                      } else {
                        const newChecklist: Record<string, boolean> = {}
                        CHECKLIST_ITEMS.forEach(c => { newChecklist[c.key] = true })
                        setBulkChecklist(newChecklist)
                      }
                    }}
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {CHECKLIST_ITEMS.every(c => bulkChecklist[c.key]) ? 'Uncheck All' : 'Check All'}
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {CHECKLIST_ITEMS.map(c => (
                    <label 
                      key={c.key}
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={bulkChecklist[c.key] || false}
                        onChange={(e) => setBulkChecklist(prev => ({ ...prev, [c.key]: e.target.checked }))}
                        className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">{c.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Decision */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Your Decision</h3>
                <div className="space-y-2">
                  <label className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition ${
                    bulkApprovalType === 'approve_as_is' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:bg-gray-50'
                  }`}>
                    <input
                      type="radio"
                      name="bulk_approval"
                      checked={bulkApprovalType === 'approve_as_is'}
                      onChange={() => setBulkApprovalType('approve_as_is')}
                      className="mt-1"
                    />
                    <div>
                      <span className="font-medium text-gray-900">Approve as is</span>
                      <p className="text-sm text-gray-500">The artwork is approved for production</p>
                    </div>
                  </label>
                  
                  <label className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition ${
                    bulkApprovalType === 'approve_with_changes' ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200 hover:bg-gray-50'
                  }`}>
                    <input
                      type="radio"
                      name="bulk_approval"
                      checked={bulkApprovalType === 'approve_with_changes'}
                      onChange={() => setBulkApprovalType('approve_with_changes')}
                      className="mt-1"
                    />
                    <div>
                      <span className="font-medium text-gray-900">Approve with changes</span>
                      <p className="text-sm text-gray-500">Minor changes noted but approved for production</p>
                    </div>
                  </label>
                  
                  <label className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition ${
                    bulkApprovalType === 'not_approved' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:bg-gray-50'
                  }`}>
                    <input
                      type="radio"
                      name="bulk_approval"
                      checked={bulkApprovalType === 'not_approved'}
                      onChange={() => setBulkApprovalType('not_approved')}
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
                  Comments for All Artworks {bulkApprovalType === 'not_approved' && <span className="text-red-500">*</span>}
                </label>
                <textarea
                  value={bulkComment}
                  onChange={(e) => setBulkComment(e.target.value)}
                  placeholder={bulkApprovalType === 'not_approved' ? 'Please describe what needs to be changed...' : 'Optional comments...'}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              {/* Summary */}
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <Info className="h-4 w-4 inline mr-1" />
                  This will apply your verification and decision to <strong>all {items.length} artworks</strong> in this batch.
                </p>
              </div>
            </div>
            
            {/* Footer */}
            <div className="flex gap-3 p-6 border-t bg-gray-50 rounded-b-2xl">
              <button
                onClick={() => setShowBulkReview(false)}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg hover:bg-white transition"
              >
                Cancel
              </button>
              <button
                onClick={handleBulkReview}
                disabled={
                  !bulkApprovalType || 
                  bulkSubmitting ||
                  (bulkApprovalType !== 'not_approved' && !CHECKLIST_ITEMS.every(c => bulkChecklist[c.key])) ||
                  (bulkApprovalType === 'not_approved' && !bulkComment.trim())
                }
                className={`flex-1 px-4 py-3 text-white rounded-lg transition disabled:opacity-50 ${
                  bulkApprovalType === 'not_approved' ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {bulkSubmitting ? 'Applying...' : `Apply to All ${items.length} Artworks`}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* JSON Preview Modal */}
      {showJsonModal && selectedItemJson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h2 className="text-xl font-bold text-gray-900">AI Analysis JSON</h2>
                <p className="text-sm text-gray-500 mt-1">{selectedItemJson.name}</p>
              </div>
              <button onClick={() => { setShowJsonModal(false); setSelectedItemJson(null) }} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto">
                {JSON.stringify(selectedItemJson.ai_analysis, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const ReviewModal: React.FC<{
  item: ArtworkBatchItem
  onClose: () => void
  onSubmit: (item: ArtworkBatchItem, type: 'approve_as_is' | 'approve_with_changes' | 'not_approved', comment: string, checklist: Record<string, boolean>) => void
  onPreview: (url: string) => void
  onAddReply: (item: ArtworkBatchItem, text: string, assets?: { type: 'image' | 'link', url: string, name?: string }[]) => Promise<void>
}> = ({ item, onClose, onSubmit, onPreview, onAddReply }) => {
  const [approvalType, setApprovalType] = useState<'approve_as_is' | 'approve_with_changes' | 'not_approved' | null>(
    item.approval_type || null
  )
  const [comment, setComment] = useState(item.customer_comment || '')
  const [checklist, setChecklist] = useState<Record<string, boolean>>(
    item.checklist || {}
  )
  const [localItem, setLocalItem] = useState(item)
  const [replyText, setReplyText] = useState('')
  const [sendingReply, setSendingReply] = useState(false)

  // Asset states
  const [pendingAssets, setPendingAssets] = useState<{ type: 'image' | 'link', url: string, name?: string }[]>([])
  const [uploadingAsset, setUploadingAsset] = useState(false)
  const [showLinkInput, setShowLinkInput] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')
  const [linkLabel, setLinkLabel] = useState('')
  
  const isImage = /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(item.file_url) || /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(item.name)
  const isVideo = /\.(mp4|mov|webm)$/i.test(item.file_url) || /\.(mp4|mov|webm)$/i.test(item.name)
  const isPdf = /\.pdf$/i.test(item.file_url) || /\.pdf$/i.test(item.name)
  const allChecked = CHECKLIST_ITEMS.every(c => checklist[c.key])

  const handleAssetUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    
    setUploadingAsset(true)
    try {
      const ext = file.name.split('.').pop() || 'bin'
      const filePath = `replies/${item.batch_id}/${item.id}/${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`
      
      const { error: uploadError } = await supabase.storage
        .from('artworks')
        .upload(filePath, file)
      
      if (uploadError) throw uploadError
      
      const { data: urlData } = supabase.storage.from('artworks').getPublicUrl(filePath)
      
      setPendingAssets(prev => [...prev, {
        type: 'image',
        url: urlData.publicUrl,
        name: file.name
      }])
    } catch (err) {
      console.error('Asset upload error:', err)
      alert('Failed to upload image')
    } finally {
      setUploadingAsset(false)
      if (e.target) e.target.value = ''
    }
  }

  const handleAddLink = () => {
    if (!linkUrl.trim()) return
    let url = linkUrl.trim()
    if (!/^https?:\/\//i.test(url)) {
      url = 'https://' + url
    }
    setPendingAssets(prev => [...prev, {
      type: 'link',
      url: url,
      name: linkLabel.trim() || url
    }])
    setLinkUrl('')
    setLinkLabel('')
    setShowLinkInput(false)
  }

  const handleRemovePendingAsset = (index: number) => {
    setPendingAssets(prev => prev.filter((_, i) => i !== index))
  }

  const handleSendReply = async () => {
    if ((!replyText.trim() && pendingAssets.length === 0) || sendingReply) return
    setSendingReply(true)
    
    const assetsToSend = pendingAssets.length > 0 ? pendingAssets : undefined
    await onAddReply(localItem, replyText.trim(), assetsToSend)
    
    // Update local state to show reply immediately
    const newReply = { 
      author: 'Customer', 
      text: replyText.trim(), 
      at: new Date().toISOString(),
      assets: assetsToSend
    }
    const updatedReplies = [...(localItem.ai_analysis?.replies ?? []), newReply]
    setLocalItem(prev => ({ ...prev, ai_analysis: { ...(prev.ai_analysis || {}), replies: updatedReplies } }))
    
    setReplyText('')
    setPendingAssets([])
    setSendingReply(false)
  }

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
      <div className="bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">Review Artwork</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition p-1 hover:bg-gray-100 rounded-full">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Image Preview */}
            <div>
              <div 
                className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative cursor-zoom-in group border border-gray-200"
                onClick={() => isImage && onPreview(item.file_url)}
              >
                {isImage ? (
                  <>
                    <img 
                      src={item.file_url} 
                      alt={item.name}
                      className="w-full h-full object-contain transition group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                    <div className="absolute bottom-3 right-3 p-2 bg-black/60 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="h-5 w-5 text-white" />
                    </div>
                  </>
                ) : isVideo ? (
                  <video 
                    src={item.file_url} 
                    controls
                    className="w-full h-full object-contain bg-black"
                  />
                ) : isPdf ? (
                  <iframe 
                    src={`${item.file_url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                    className="w-full h-full border-0" 
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <FileImage className="h-16 w-16 text-gray-300 mb-2" />
                    <p className="text-sm text-gray-500 font-medium">Preview not available</p>
                  </div>
                )}
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm leading-tight break-words" title={item.name}>{item.name}</p>
                    {item.file_size > 0 && (
                      <p className="text-[10px] text-gray-500 mt-1 font-medium italic">File Size: {formatFileSize(item.file_size)}</p>
                    )}
                  </div>
                  <a
                    href={item.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 whitespace-nowrap bg-primary-50 px-3 py-1 rounded-full transition"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Press Proof
                  </a>
                </div>
                
                {item.source_link && (
                  <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <ImageIcon className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-indigo-900 mb-1">Source Link Available</p>
                        <p className="text-xs text-indigo-700 mb-3 leading-relaxed">Please use the original high-resolution source file for final color and dimension verification.</p>
                        <a
                          href={item.source_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition shadow-sm hover:shadow-md"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Download Original File
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* AI Analysis Info */}
              {item.ai_analysis && (
                <div className="mt-4 p-4 bg-gray-50 border border-gray-100 rounded-xl">
                  <div className="flex items-center gap-2 text-gray-700 mb-3">
                    <Sparkles className="h-4 w-4 text-indigo-500" />
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-500">Auto-Detect</span>
                  </div>
                  {item.ai_analysis.title && (
                    <p className="text-sm font-semibold text-gray-800 mb-2">{item.ai_analysis.title}</p>
                  )}
                  {item.ai_analysis.keywords && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.ai_analysis.keywords.slice(0, 8).map((kw, i) => (
                        <span key={i} className="px-2 py-0.5 text-[10px] font-bold bg-white text-gray-600 border border-gray-200 rounded uppercase tracking-tighter">
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
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Verification Checklist
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {CHECKLIST_ITEMS.map(c => (
                    <label 
                      key={c.key}
                      className={`flex items-center gap-3 p-3 border rounded-xl transition cursor-pointer ${
                        checklist[c.key] ? 'border-primary-200 bg-primary-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checklist[c.key] || false}
                        onChange={(e) => setChecklist(prev => ({ ...prev, [c.key]: e.target.checked }))}
                        className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className={`text-sm font-medium ${checklist[c.key] ? 'text-primary-900' : 'text-gray-700'}`}>
                        {c.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Approval Options */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <LayoutGrid className="h-4 w-4 text-primary-500" />
                  Your Decision
                </h3>
                <div className="space-y-2">
                  <label className={`flex items-start gap-4 p-4 border rounded-xl cursor-pointer transition ${
                    approvalType === 'approve_as_is' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="approval"
                      checked={approvalType === 'approve_as_is'}
                      onChange={() => setApprovalType('approve_as_is')}
                      className="mt-1 w-4 h-4 text-green-600 focus:ring-green-500"
                    />
                    <div>
                      <span className="font-bold text-gray-900">Approve as is</span>
                      <p className="text-xs text-gray-600 mt-0.5">Perfect! Ready for full commercial production.</p>
                    </div>
                  </label>
                  
                  <label className={`flex items-start gap-4 p-4 border rounded-xl cursor-pointer transition ${
                    approvalType === 'approve_with_changes' ? 'border-amber-500 bg-amber-50' : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="approval"
                      checked={approvalType === 'approve_with_changes'}
                      onChange={() => setApprovalType('approve_with_changes')}
                      className="mt-1 w-4 h-4 text-amber-600 focus:ring-amber-500"
                    />
                    <div>
                      <span className="font-bold text-gray-900">Approve with changes</span>
                      <p className="text-xs text-gray-600 mt-0.5">Proceed after minor noted corrections.</p>
                    </div>
                  </label>
                  
                  <label className={`flex items-start gap-4 p-4 border rounded-xl cursor-pointer transition ${
                    approvalType === 'not_approved' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="approval"
                      checked={approvalType === 'not_approved'}
                      onChange={() => setApprovalType('not_approved')}
                      className="mt-1 w-4 h-4 text-red-600 focus:ring-red-500"
                    />
                    <div>
                      <span className="font-bold text-gray-900 uppercase tracking-tight">Requires Revision</span>
                      <p className="text-xs text-gray-600 mt-0.5">Do NOT print. Request new proof after changes.</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Discussion Thread */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-inner">
                <div className="p-4 border-b border-gray-200 bg-white/50 flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2 text-sm">
                    <MessageSquare className="h-4 w-4 text-primary-500" />
                    Discussion Thread
                  </h3>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Live Updates</span>
                </div>
                
                <div className="max-h-60 overflow-y-auto p-4 space-y-4">
                  {localItem.customer_comment && (
                    <div className="flex flex-col items-end">
                      <div className="bg-primary-600 text-white rounded-2xl rounded-tr-none px-4 py-2 shadow-sm max-w-[90%]">
                        <p className="text-xs font-bold mb-1 opacity-80">Initial Feedback</p>
                        <p className="text-sm leading-relaxed">{localItem.customer_comment}</p>
                      </div>
                    </div>
                  )}
                  
                  {(localItem.ai_analysis?.replies ?? []).map((r: any, idx: number) => {
                    const isAdmin = r.author === 'Admin' || r.author === 'Achieve Pack'
                    return (
                      <div key={idx} className={`flex flex-col ${isAdmin ? 'items-start' : 'items-end'}`}>
                        <div className={`px-4 py-2 rounded-2xl shadow-sm max-w-[90%] ${
                          isAdmin 
                            ? 'bg-white border border-gray-200 rounded-tl-none' 
                            : 'bg-primary-600 text-white rounded-tr-none'
                        }`}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[10px] font-black uppercase tracking-tight ${isAdmin ? 'text-indigo-600' : 'text-primary-100'}`}>
                              {isAdmin ? 'Achieve Pack' : 'You'}
                            </span>
                            <span className={`text-[9px] ${isAdmin ? 'text-gray-400' : 'text-primary-200'}`}>
                              {new Date(r.at).toLocaleDateString()}
                            </span>
                          </div>
                          {r.text && <p className="text-sm leading-relaxed">{r.text}</p>}
                          
                          {/* Reply Assets */}
                          {r.assets && r.assets.length > 0 && (
                            <div className="mt-2 space-y-1.5 pt-2 border-t border-black/5">
                              {r.assets.map((asset: any, aidx: number) => (
                                <div key={aidx}>
                                  {asset.type === 'image' ? (
                                    <button 
                                      onClick={() => onPreview(asset.url)}
                                      className="rounded-lg overflow-hidden border border-black/10 hover:opacity-90 transition block"
                                    >
                                      <img src={asset.url} alt="Attachment" className="max-h-32 w-auto object-contain" />
                                    </button>
                                  ) : (
                                    <a 
                                      href={asset.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className={`flex items-center gap-1.5 text-xs font-bold underline decoration-2 underline-offset-2 ${
                                        isAdmin ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-primary-100'
                                      }`}
                                    >
                                      <LinkIcon className="h-3 w-3" />
                                      {asset.name || 'View Link'}
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                  
                  {(!localItem.customer_comment && (localItem.ai_analysis?.replies?.length ?? 0) === 0) && (
                    <div className="text-center py-4">
                      <p className="text-xs text-gray-400 italic">No discussion yet. Send a note to the production team.</p>
                    </div>
                  )}
                </div>
                
                {/* Reply Input Area */}
                <div className="p-4 bg-white border-t border-gray-200">
                  {/* Pending Assets Preview */}
                  {pendingAssets.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {pendingAssets.map((asset, idx) => (
                        <div key={idx} className="relative group bg-gray-100 rounded-lg p-1 pr-7 border border-gray-200">
                          {asset.type === 'image' ? (
                            <div className="h-8 w-8 rounded overflow-hidden flex-shrink-0">
                              <img src={asset.url} alt="Pending" className="h-full w-full object-cover" />
                            </div>
                          ) : (
                            <div className="h-8 flex items-center px-2 gap-1.5 text-[10px] font-bold text-gray-600">
                              <LinkIcon className="h-3 w-3" />
                              <span className="max-w-[80px] truncate">{asset.name || 'Link'}</span>
                            </div>
                          )}
                          <button 
                            onClick={() => handleRemovePendingAsset(idx)}
                            className="absolute right-1 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-red-500 transition"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Link Input Overlay */}
                  {showLinkInput && (
                    <div className="mb-3 p-3 bg-primary-50 rounded-xl border border-primary-100 space-y-2 animate-in slide-in-from-top-2">
                      <input 
                        type="url" 
                        value={linkUrl}
                        onChange={e => setLinkUrl(e.target.value)}
                        placeholder="Paste URL here..."
                        className="w-full px-3 py-1.5 text-xs rounded-lg border-gray-200 focus:ring-1 focus:ring-primary-500"
                        autoFocus
                      />
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          value={linkLabel}
                          onChange={e => setLinkLabel(e.target.value)}
                          placeholder="Label (optional)"
                          className="flex-1 px-3 py-1.5 text-xs rounded-lg border-gray-200 focus:ring-1 focus:ring-primary-500"
                        />
                        <button 
                          onClick={handleAddLink}
                          className="px-4 py-1.5 bg-primary-600 text-white text-xs font-bold rounded-lg hover:bg-primary-700"
                        >Add</button>
                        <button 
                          onClick={() => setShowLinkInput(false)}
                          className="px-3 py-1.5 bg-white text-gray-500 text-xs font-bold rounded-lg border border-gray-200"
                        >✕</button>
                      </div>
                    </div>
                  )}

                  <div className="flex items-end gap-2">
                    <div className="flex-1 min-w-0">
                      <textarea
                        value={replyText}
                        onChange={e => setReplyText(e.target.value)}
                        placeholder="Write a message..."
                        rows={2}
                        className="w-full px-4 py-2 text-sm border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                        onKeyDown={e => {
                          if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendReply() }
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-1">
                        <label className="cursor-pointer p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition" title="Attach Image">
                          {uploadingAsset ? <RefreshCw className="h-5 w-5 animate-spin" /> : <ImageIcon className="h-5 w-5" />}
                          <input type="file" accept="image/*" className="hidden" onChange={handleAssetUpload} disabled={uploadingAsset} />
                        </label>
                        <button 
                          onClick={() => setShowLinkInput(!showLinkInput)}
                          className={`p-2 transition rounded-lg ${showLinkInput ? 'text-primary-600 bg-primary-50' : 'text-gray-400 hover:text-primary-600 hover:bg-primary-50'}`}
                          title="Add Link"
                        >
                          <LinkIcon className="h-5 w-5" />
                        </button>
                      </div>
                      <button
                        onClick={handleSendReply}
                        disabled={(!replyText.trim() && pendingAssets.length === 0) || sendingReply || uploadingAsset}
                        className="p-2.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 disabled:opacity-50 transition shadow-sm"
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Comment Field (Bottom) */}
              <div className="pt-4 border-t border-gray-100">
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Final Summary / Decision Notes
                  {approvalType === 'not_approved' && <span className="ml-1 text-red-500 font-black">*</span>}
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder={approvalType === 'not_approved' ? 'Please describe exactly what needs revision...' : 'Additional notes for the production team...'}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 transition"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex gap-4 p-6 border-t bg-gray-50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3.5 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-white transition shadow-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!approvalType || (approvalType !== 'not_approved' && !allChecked) || (approvalType === 'not_approved' && !comment.trim())}
            className={`flex-1 px-6 py-3.5 text-white font-black uppercase tracking-wider rounded-xl transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:shadow-none ${
              approvalType === 'not_approved' ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {approvalType === 'not_approved' ? 'Request Revision' : 'Confirm & Approve'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArtworkReviewPage
