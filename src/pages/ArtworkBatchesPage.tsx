import React, { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, Plus, Search, Upload, Trash2, Eye, Copy, Check, 
  RefreshCw, Sparkles, X, ChevronRight, Lock, Mail, ExternalLink,
  CheckCircle, Clock, AlertCircle, FileImage, Download, MoreHorizontal,
  Folder, Package
} from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { supabase, ArtworkBatch, ArtworkBatchItem } from '../lib/supabase'
import { analyzeArtworkWithXAI } from '../lib/artworkAnalysis'

const ADMIN_EMAIL = 'ryan@achievepack.com'

const ArtworkBatchesPage: React.FC = () => {
  const navigate = useNavigate()
  const { user, loading: authLoading } = useAuth()
  
  // State
  const [batches, setBatches] = useState<ArtworkBatch[]>([])
  const [selectedBatch, setSelectedBatch] = useState<ArtworkBatch | null>(null)
  const [batchItems, setBatchItems] = useState<ArtworkBatchItem[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  
  // Create batch modal
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newBatchName, setNewBatchName] = useState('')
  const [newBatchPassword, setNewBatchPassword] = useState('')
  const [newBatchCustomerEmail, setNewBatchCustomerEmail] = useState('')
  const [newBatchCustomerName, setNewBatchCustomerName] = useState('')
  const [creating, setCreating] = useState(false)
  
  // Upload state
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  
  // AI analysis state
  const [analyzingId, setAnalyzingId] = useState<string | null>(null)
  
  // Copy link state
  const [copiedLink, setCopiedLink] = useState(false)

  // Fetch batches
  const fetchBatches = useCallback(async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('artwork_batches')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setBatches(data || [])
    } catch (err) {
      console.error('Error fetching batches:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  // Fetch batch items
  const fetchBatchItems = useCallback(async (batchId: string) => {
    try {
      const { data, error } = await supabase
        .from('artwork_batch_items')
        .select('*')
        .eq('batch_id', batchId)
        .order('created_at', { ascending: true })
      
      if (error) throw error
      setBatchItems(data || [])
    } catch (err) {
      console.error('Error fetching batch items:', err)
    }
  }, [])

  useEffect(() => {
    if (user && user.email === ADMIN_EMAIL) {
      fetchBatches()
    }
  }, [user, fetchBatches])

  useEffect(() => {
    if (selectedBatch) {
      fetchBatchItems(selectedBatch.id)
    }
  }, [selectedBatch, fetchBatchItems])

  // Create new batch
  const handleCreateBatch = async () => {
    if (!newBatchName.trim() || !newBatchPassword.trim()) return
    
    setCreating(true)
    try {
      const { data, error } = await supabase
        .from('artwork_batches')
        .insert({
          batch_name: newBatchName.trim(),
          password: newBatchPassword.trim(),
          customer_email: newBatchCustomerEmail.trim() || null,
          customer_name: newBatchCustomerName.trim() || null,
          status: 'pending',
          total_items: 0,
          approved_count: 0,
          rejected_count: 0,
          created_by: user?.id
        })
        .select()
        .single()
      
      if (error) throw error
      
      setBatches(prev => [data, ...prev])
      setShowCreateModal(false)
      setNewBatchName('')
      setNewBatchPassword('')
      setNewBatchCustomerEmail('')
      setNewBatchCustomerName('')
      setSelectedBatch(data)
    } catch (err) {
      console.error('Error creating batch:', err)
      alert('Failed to create batch')
    } finally {
      setCreating(false)
    }
  }

  // Upload files to batch
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedBatch || !e.target.files?.length) return
    
    const files = Array.from(e.target.files)
    setUploading(true)
    setUploadProgress(0)
    
    try {
      let uploaded = 0
      for (const file of files) {
        // Upload to storage
        const ext = file.name.split('.').pop() || 'bin'
        const fileName = `batches/${selectedBatch.id}/${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('artworks')
          .upload(fileName, file)
        
        if (uploadError) {
          console.error('Upload error:', uploadError)
          continue
        }
        
        // Get public URL
        const { data: urlData } = supabase.storage.from('artworks').getPublicUrl(fileName)
        
        // Create batch item
        const { data: itemData, error: itemError } = await supabase
          .from('artwork_batch_items')
          .insert({
            batch_id: selectedBatch.id,
            name: file.name,
            file_url: urlData.publicUrl,
            file_type: file.type,
            file_size: file.size,
            status: 'pending'
          })
          .select()
          .single()
        
        if (itemError) {
          console.error('Item create error:', itemError)
          continue
        }
        
        // Update batch total
        await supabase
          .from('artwork_batches')
          .update({ total_items: selectedBatch.total_items + uploaded + 1 })
          .eq('id', selectedBatch.id)
        
        // Auto-analyze if image
        const isImage = /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(file.name)
        if (isImage && itemData) {
          analyzeArtworkWithXAI(urlData.publicUrl, itemData.id).catch(console.error)
        }
        
        uploaded++
        setUploadProgress(Math.round((uploaded / files.length) * 100))
      }
      
      // Refresh data
      fetchBatchItems(selectedBatch.id)
      fetchBatches()
    } catch (err) {
      console.error('Upload error:', err)
    } finally {
      setUploading(false)
      setUploadProgress(0)
      e.target.value = ''
    }
  }

  // Delete batch item
  const handleDeleteItem = async (itemId: string) => {
    if (!confirm('Delete this artwork?')) return
    
    try {
      await supabase
        .from('artwork_batch_items')
        .delete()
        .eq('id', itemId)
      
      setBatchItems(prev => prev.filter(i => i.id !== itemId))
      
      // Update batch total
      if (selectedBatch) {
        await supabase
          .from('artwork_batches')
          .update({ total_items: Math.max(0, selectedBatch.total_items - 1) })
          .eq('id', selectedBatch.id)
        fetchBatches()
      }
    } catch (err) {
      console.error('Delete error:', err)
    }
  }

  // Run AI analysis on item
  const handleAnalyze = async (item: ArtworkBatchItem) => {
    const isImage = /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(item.file_url)
    if (!isImage) {
      alert('AI analysis only works with image files')
      return
    }
    
    setAnalyzingId(item.id)
    try {
      const analysis = await analyzeArtworkWithXAI(item.file_url, item.id)
      if (analysis) {
        setBatchItems(prev => prev.map(i => 
          i.id === item.id ? { ...i, ai_analysis: analysis } : i
        ))
      }
    } catch (err) {
      console.error('Analysis error:', err)
    } finally {
      setAnalyzingId(null)
    }
  }

  // Copy review link
  const handleCopyLink = () => {
    if (!selectedBatch) return
    const link = `${window.location.origin}/artwork-review/${selectedBatch.id}`
    navigator.clipboard.writeText(link)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  // Filter items by search
  const filteredItems = batchItems.filter(item => {
    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    return (
      item.name.toLowerCase().includes(q) ||
      item.ai_analysis?.title?.toLowerCase().includes(q) ||
      item.ai_analysis?.keywords?.some(k => k.toLowerCase().includes(q)) ||
      item.ai_analysis?.category?.toLowerCase().includes(q)
    )
  })

  // Status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700"><CheckCircle className="h-3 w-3" />Approved</span>
      case 'rejected':
        return <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-700"><AlertCircle className="h-3 w-3" />Rejected</span>
      case 'revision_needed':
        return <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700"><AlertCircle className="h-3 w-3" />Revision</span>
      default:
        return <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700"><Clock className="h-3 w-3" />Pending</span>
    }
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
    return null
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
              <h1 className="text-lg font-semibold text-gray-900">Artwork Batches</h1>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">New Batch</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Left: Batch List */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900">All Batches</h2>
                <p className="text-sm text-gray-500 mt-1">{batches.length} batches</p>
              </div>
              
              {loading ? (
                <div className="p-8 text-center">
                  <RefreshCw className="h-6 w-6 animate-spin text-gray-400 mx-auto" />
                </div>
              ) : batches.length === 0 ? (
                <div className="p-8 text-center">
                  <Folder className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">No batches yet</p>
                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="mt-3 text-sm text-primary-600 hover:text-primary-700"
                  >
                    Create your first batch
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-gray-100 max-h-[calc(100vh-300px)] overflow-y-auto">
                  {batches.map(batch => (
                    <button
                      key={batch.id}
                      onClick={() => setSelectedBatch(batch)}
                      className={`w-full p-4 text-left hover:bg-gray-50 transition ${
                        selectedBatch?.id === batch.id ? 'bg-primary-50 border-l-4 border-primary-500' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Batch {batch.batch_name}</span>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{batch.total_items} files</span>
                        <span className="text-xs text-gray-400">•</span>
                        {getStatusBadge(batch.status)}
                      </div>
                      {batch.customer_name && (
                        <p className="text-xs text-gray-500 mt-1">{batch.customer_name}</p>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Batch Detail */}
          <div className="flex-1 min-w-0">
            {selectedBatch ? (
              <div className="space-y-6">
                {/* Batch Header */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">Batch {selectedBatch.batch_name}</h2>
                      <p className="text-sm text-gray-500 mt-1">
                        {selectedBatch.total_items} artworks • Created {new Date(selectedBatch.created_at).toLocaleDateString()}
                      </p>
                      {selectedBatch.customer_name && (
                        <p className="text-sm text-gray-600 mt-1">
                          Customer: {selectedBatch.customer_name} {selectedBatch.customer_email && `(${selectedBatch.customer_email})`}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopyLink}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                      >
                        {copiedLink ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        <span className="text-sm">{copiedLink ? 'Copied!' : 'Copy Link'}</span>
                      </button>
                      <a
                        href={`/artwork-review/${selectedBatch.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
                      >
                        <Eye className="h-4 w-4" />
                        <span className="text-sm">Preview</span>
                      </a>
                    </div>
                  </div>
                  
                  {/* Password & Link Info */}
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <Lock className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">Password:</span>
                      <code className="px-2 py-0.5 bg-white rounded border text-gray-800">{selectedBatch.password}</code>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-2">
                      <ExternalLink className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">Review Link:</span>
                      <code className="px-2 py-0.5 bg-white rounded border text-gray-800 text-xs truncate max-w-md">
                        {window.location.origin}/artwork-review/{selectedBatch.id}
                      </code>
                    </div>
                  </div>
                </div>

                {/* Search & Upload */}
                <div className="flex flex-col sm:flex-row gap-4">
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
                  <label className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition cursor-pointer">
                    <Upload className="h-4 w-4" />
                    <span>Upload Files</span>
                    <input
                      type="file"
                      multiple
                      accept=".png,.jpg,.jpeg,.pdf,.ai,.eps,.tiff,.tif,.psd,.zip"
                      onChange={handleFileUpload}
                      className="hidden"
                      disabled={uploading}
                    />
                  </label>
                </div>

                {/* Upload Progress */}
                {uploading && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <RefreshCw className="h-5 w-5 text-blue-600 animate-spin" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-blue-700">Uploading files...</p>
                        <div className="mt-2 h-2 bg-blue-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-600 transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-medium text-blue-700">{uploadProgress}%</span>
                    </div>
                  </div>
                )}

                {/* Items Count */}
                <div className="text-sm text-gray-500">
                  Showing {filteredItems.length} of {batchItems.length} artworks
                </div>

                {/* Items Grid */}
                {batchItems.length === 0 ? (
                  <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                    <FileImage className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No artwork files yet</p>
                    <p className="text-sm text-gray-400 mt-1">Upload files to get started</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredItems.map(item => {
                      const isImage = /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(item.file_url)
                      return (
                        <div key={item.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition">
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
                            {/* Status Badge */}
                            <div className="absolute top-2 left-2">
                              {getStatusBadge(item.status)}
                            </div>
                            {/* AI Badge */}
                            {item.ai_analysis?.analyzed_at && (
                              <div className="absolute top-2 right-2">
                                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700">
                                  <Sparkles className="h-3 w-3" />
                                  AI
                                </span>
                              </div>
                            )}
                          </div>
                          
                          {/* Info */}
                          <div className="p-4">
                            <h3 className="font-medium text-gray-900 truncate" title={item.name}>{item.name}</h3>
                            {item.ai_analysis?.title && (
                              <p className="text-sm text-gray-500 truncate mt-1">{item.ai_analysis.title}</p>
                            )}
                            {item.ai_analysis?.keywords && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {item.ai_analysis.keywords.slice(0, 3).map((kw, i) => (
                                  <span key={i} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
                                    {kw}
                                  </span>
                                ))}
                              </div>
                            )}
                            
                            {/* Customer Comment */}
                            {item.customer_comment && (
                              <div className="mt-2 p-2 bg-yellow-50 rounded text-xs text-yellow-800">
                                <strong>Comment:</strong> {item.customer_comment}
                              </div>
                            )}
                            
                            {/* Actions */}
                            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
                              <a
                                href={item.file_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition"
                                title="Download"
                              >
                                <Download className="h-4 w-4" />
                              </a>
                              {isImage && !item.ai_analysis?.analyzed_at && (
                                <button
                                  onClick={() => handleAnalyze(item)}
                                  disabled={analyzingId === item.id}
                                  className="p-2 text-indigo-500 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition disabled:opacity-50"
                                  title="Run AI Analysis"
                                >
                                  {analyzingId === item.id ? (
                                    <RefreshCw className="h-4 w-4 animate-spin" />
                                  ) : (
                                    <Sparkles className="h-4 w-4" />
                                  )}
                                </button>
                              )}
                              <button
                                onClick={() => handleDeleteItem(item.id)}
                                className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition ml-auto"
                                title="Delete"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Select a batch to view details</p>
                <p className="text-sm text-gray-400 mt-1">Or create a new batch to get started</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Create Batch Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Create New Batch</h2>
              <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Batch Name *</label>
                <input
                  type="text"
                  value={newBatchName}
                  onChange={(e) => setNewBatchName(e.target.value)}
                  placeholder="e.g. 91"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Access Password *</label>
                <input
                  type="text"
                  value={newBatchPassword}
                  onChange={(e) => setNewBatchPassword(e.target.value)}
                  placeholder="Password for customer access"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                <input
                  type="text"
                  value={newBatchCustomerName}
                  onChange={(e) => setNewBatchCustomerName(e.target.value)}
                  placeholder="Customer name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email (for notifications)</label>
                <input
                  type="email"
                  value={newBatchCustomerEmail}
                  onChange={(e) => setNewBatchCustomerEmail(e.target.value)}
                  placeholder="customer@email.com"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateBatch}
                disabled={!newBatchName.trim() || !newBatchPassword.trim() || creating}
                className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition disabled:opacity-50"
              >
                {creating ? 'Creating...' : 'Create Batch'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ArtworkBatchesPage
