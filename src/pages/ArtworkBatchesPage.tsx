import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, Plus, Search, Upload, Trash2, Eye, Copy, Check, 
  RefreshCw, Sparkles, X, ChevronRight, Lock, Mail, ExternalLink,
  CheckCircle, Clock, AlertCircle, FileImage, Download, MoreHorizontal,
  Folder, Package, Code, ArrowUpDown, ArrowUp, ArrowDown, Link2
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
  
  // Batch list search and sort
  const [batchSearchQuery, setBatchSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')
  const [batchItemsCache, setBatchItemsCache] = useState<Record<string, ArtworkBatchItem[]>>({})
  
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
  const [analyzingAll, setAnalyzingAll] = useState(false)
  const [analyzeAllProgress, setAnalyzeAllProgress] = useState({ done: 0, total: 0 })
  
  // Copy link state
  const [copiedLink, setCopiedLink] = useState(false)
  
  // JSON preview state
  const [showJsonModal, setShowJsonModal] = useState(false)
  const [selectedItemJson, setSelectedItemJson] = useState<ArtworkBatchItem | null>(null)

  // Batch item counts (actual count from database)
  const [batchItemCounts, setBatchItemCounts] = useState<Record<string, number>>({})

  // Source link editing state
  const [editingSourceLink, setEditingSourceLink] = useState<string | null>(null)
  const [sourceLinkValue, setSourceLinkValue] = useState('')
  const [savingSourceLink, setSavingSourceLink] = useState(false)

  // Fetch batches with actual item counts
  const fetchBatches = useCallback(async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('artwork_batches')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setBatches(data || [])

      // Fetch actual item counts for each batch
      if (data && data.length > 0) {
        const { data: countData, error: countError } = await supabase
          .from('artwork_batch_items')
          .select('batch_id')
        
        if (!countError && countData) {
          const counts: Record<string, number> = {}
          countData.forEach(item => {
            counts[item.batch_id] = (counts[item.batch_id] || 0) + 1
          })
          setBatchItemCounts(counts)
          
          // Also update total_items in database for any out-of-sync batches
          data.forEach(async (batch) => {
            const actualCount = counts[batch.id] || 0
            if (batch.total_items !== actualCount) {
              await supabase
                .from('artwork_batches')
                .update({ total_items: actualCount })
                .eq('id', batch.id)
            }
          })
        }
      }
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

  // Fetch all batch items for search (lazy load)
  const fetchAllBatchItems = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('artwork_batch_items')
        .select('batch_id, ai_analysis, name')
      
      if (error) throw error
      
      // Group by batch_id
      const cache: Record<string, ArtworkBatchItem[]> = {}
      data?.forEach(item => {
        if (!cache[item.batch_id]) cache[item.batch_id] = []
        cache[item.batch_id].push(item as ArtworkBatchItem)
      })
      setBatchItemsCache(cache)
    } catch (err) {
      console.error('Error fetching batch items for search:', err)
    }
  }, [])

  // Fetch items cache when search is used
  useEffect(() => {
    if (batchSearchQuery.trim() && Object.keys(batchItemsCache).length === 0) {
      fetchAllBatchItems()
    }
  }, [batchSearchQuery, batchItemsCache, fetchAllBatchItems])

  // Filter and sort batches
  const filteredBatches = useMemo(() => {
    let result = [...batches]
    
    // Search filter
    if (batchSearchQuery.trim()) {
      const q = batchSearchQuery.toLowerCase()
      result = result.filter(batch => {
        // Search batch name and customer
        if (batch.batch_name.toLowerCase().includes(q)) return true
        if (batch.customer_name?.toLowerCase().includes(q)) return true
        if (batch.customer_email?.toLowerCase().includes(q)) return true
        
        // Search artwork JSON content in this batch
        const items = batchItemsCache[batch.id] || []
        return items.some(item => {
          const ai = item.ai_analysis
          return (
            item.name.toLowerCase().includes(q) ||
            ai?.title?.toLowerCase().includes(q) ||
            ai?.description?.toLowerCase().includes(q) ||
            ai?.keywords?.some(k => k.toLowerCase().includes(q)) ||
            ai?.category?.toLowerCase().includes(q) ||
            ai?.colors?.some(c => c.toLowerCase().includes(q)) ||
            ai?.content_detected?.some(c => c.toLowerCase().includes(q)) ||
            (ai && JSON.stringify(ai).toLowerCase().includes(q))
          )
        })
      })
    }
    
    // Sort by date
    result.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime()
      const dateB = new Date(b.created_at).getTime()
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB
    })
    
    return result
  }, [batches, batchSearchQuery, sortOrder, batchItemsCache])

  useEffect(() => {
    if (selectedBatch) {
      fetchBatchItems(selectedBatch.id)
    }
  }, [selectedBatch, fetchBatchItems])

  // Create new batch
  const handleCreateBatch = async () => {
    if (!newBatchName.trim() || !newBatchPassword.trim()) {
      alert('Please enter batch name and password')
      return
    }
    
    setCreating(true)
    try {
      console.log('Creating batch...', { name: newBatchName, user: user?.id })
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
          created_by: user?.id || null
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
    } catch (err: any) {
      console.error('Error creating batch:', err)
      alert(`Failed to create batch: ${err?.message || err}`)
    } finally {
      setCreating(false)
    }
  }

  // Upload files to batch (supports 100+ files with concurrent upload)
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedBatch || !e.target.files?.length) return
    
    const files = Array.from(e.target.files)
    setUploading(true)
    setUploadProgress(0)
    
    const CONCURRENT_UPLOADS = 5 // Upload 5 files at a time
    const CONCURRENT_AI = 3 // AI analyze 3 at a time
    let uploaded = 0
    const uploadedItems: { id: string, url: string, isImage: boolean }[] = []
    
    try {
      // Process files in batches for concurrent upload
      for (let i = 0; i < files.length; i += CONCURRENT_UPLOADS) {
        const batch = files.slice(i, i + CONCURRENT_UPLOADS)
        
        await Promise.all(batch.map(async (file) => {
          try {
            // Upload to storage
            const ext = file.name.split('.').pop() || 'bin'
            const fileName = `batches/${selectedBatch.id}/${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`
            
            const { error: uploadError } = await supabase.storage
              .from('artworks')
              .upload(fileName, file)
            
            if (uploadError) {
              console.error('Upload error:', uploadError)
              return
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
              return
            }
            
            const isImage = /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(file.name)
            if (itemData) {
              uploadedItems.push({ id: itemData.id, url: urlData.publicUrl, isImage })
            }
            
            uploaded++
            setUploadProgress(Math.round((uploaded / files.length) * 100))
          } catch (err) {
            console.error('File upload error:', err)
          }
        }))
      }
      
      // Update batch total once at the end
      await supabase
        .from('artwork_batches')
        .update({ total_items: selectedBatch.total_items + uploaded })
        .eq('id', selectedBatch.id)
      
      // Refresh data immediately
      fetchBatchItems(selectedBatch.id)
      fetchBatches()
      
      // Run AI analysis in background with concurrency limit
      const imagesToAnalyze = uploadedItems.filter(item => item.isImage)
      if (imagesToAnalyze.length > 0) {
        const analyzeInBatches = async () => {
          for (let i = 0; i < imagesToAnalyze.length; i += CONCURRENT_AI) {
            const batch = imagesToAnalyze.slice(i, i + CONCURRENT_AI)
            await Promise.all(batch.map(item => 
              analyzeArtworkWithXAI(item.url, item.id).catch(console.error)
            ))
            // Refresh after each AI batch completes
            fetchBatchItems(selectedBatch.id)
          }
        }
        analyzeInBatches() // Run in background
      }
      
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

  // Delete entire batch
  const handleDeleteBatch = async (batchId: string) => {
    if (!confirm('Delete this entire batch? This will delete all artworks in this batch.')) return
    
    try {
      // Delete all items first (cascade should handle this, but be safe)
      await supabase
        .from('artwork_batch_items')
        .delete()
        .eq('batch_id', batchId)
      
      // Delete the batch
      await supabase
        .from('artwork_batches')
        .delete()
        .eq('id', batchId)
      
      // Clear selection if deleted batch was selected
      if (selectedBatch?.id === batchId) {
        setSelectedBatch(null)
        setBatchItems([])
      }
      
      // Refresh batches list
      fetchBatches()
    } catch (err) {
      console.error('Delete batch error:', err)
      alert('Failed to delete batch')
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

  // Analyze all images in batch
  const handleAnalyzeAll = async () => {
    if (!selectedBatch || analyzingAll) return
    
    // Filter images that need analysis
    const imagesToAnalyze = batchItems.filter(item => {
      const isImage = /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(item.file_url)
      return isImage
    })
    
    if (imagesToAnalyze.length === 0) {
      alert('No image files to analyze')
      return
    }
    
    if (!confirm(`Analyze ${imagesToAnalyze.length} images with AI? This may take a while.`)) return
    
    setAnalyzingAll(true)
    setAnalyzeAllProgress({ done: 0, total: imagesToAnalyze.length })
    
    const CONCURRENT_AI = 3
    let done = 0
    
    try {
      for (let i = 0; i < imagesToAnalyze.length; i += CONCURRENT_AI) {
        const batch = imagesToAnalyze.slice(i, i + CONCURRENT_AI)
        await Promise.all(batch.map(async (item) => {
          try {
            await analyzeArtworkWithXAI(item.file_url, item.id)
          } catch (err) {
            console.error('AI analysis error for', item.name, err)
          }
          done++
          setAnalyzeAllProgress({ done, total: imagesToAnalyze.length })
        }))
        // Refresh after each batch
        fetchBatchItems(selectedBatch.id)
      }
    } catch (err) {
      console.error('Analyze all error:', err)
    } finally {
      setAnalyzingAll(false)
      setAnalyzeAllProgress({ done: 0, total: 0 })
      fetchBatchItems(selectedBatch.id)
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

  // Save source link for artwork item
  const handleSaveSourceLink = async (itemId: string) => {
    if (savingSourceLink) return
    
    setSavingSourceLink(true)
    try {
      const { error } = await supabase
        .from('artwork_batch_items')
        .update({ source_link: sourceLinkValue.trim() || null })
        .eq('id', itemId)
      
      if (error) throw error
      
      // Update local state
      setBatchItems(prev => prev.map(i => 
        i.id === itemId ? { ...i, source_link: sourceLinkValue.trim() || undefined } : i
      ))
      
      setEditingSourceLink(null)
      setSourceLinkValue('')
    } catch (err) {
      console.error('Save source link error:', err)
      alert('Failed to save link')
    } finally {
      setSavingSourceLink(false)
    }
  }

  // Filter items by search (searches all JSON fields)
  const filteredItems = batchItems.filter(item => {
    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    const ai = item.ai_analysis
    return (
      item.name.toLowerCase().includes(q) ||
      item.customer_comment?.toLowerCase().includes(q) ||
      ai?.title?.toLowerCase().includes(q) ||
      ai?.description?.toLowerCase().includes(q) ||
      ai?.keywords?.some(k => k.toLowerCase().includes(q)) ||
      ai?.category?.toLowerCase().includes(q) ||
      ai?.colors?.some(c => c.toLowerCase().includes(q)) ||
      ai?.content_detected?.some(c => c.toLowerCase().includes(q)) ||
      ai?.quality_score?.toLowerCase().includes(q) ||
      // Search entire JSON as string fallback
      (ai && JSON.stringify(ai).toLowerCase().includes(q))
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
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-semibold text-gray-900">All Batches</h2>
                  <button
                    onClick={() => setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest')}
                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 px-2 py-1 rounded hover:bg-gray-100 transition"
                    title={`Sort by ${sortOrder === 'newest' ? 'oldest' : 'newest'} first`}
                  >
                    {sortOrder === 'newest' ? <ArrowDown className="h-3 w-3" /> : <ArrowUp className="h-3 w-3" />}
                    {sortOrder === 'newest' ? 'Newest' : 'Oldest'}
                  </button>
                </div>
                {/* Batch Search */}
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={batchSearchQuery}
                    onChange={(e) => setBatchSearchQuery(e.target.value)}
                    placeholder="Search batch, customer, artwork..."
                    className="w-full pl-8 pr-8 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                  {batchSearchQuery && (
                    <button
                      onClick={() => setBatchSearchQuery('')}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {batchSearchQuery ? `${filteredBatches.length} of ${batches.length}` : `${batches.length}`} batches
                </p>
              </div>
              
              {loading ? (
                <div className="p-8 text-center">
                  <RefreshCw className="h-6 w-6 animate-spin text-gray-400 mx-auto" />
                </div>
              ) : filteredBatches.length === 0 ? (
                <div className="p-8 text-center">
                  <Folder className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">
                    {batchSearchQuery ? 'No matching batches' : 'No batches yet'}
                  </p>
                  {!batchSearchQuery && (
                    <button
                      onClick={() => setShowCreateModal(true)}
                      className="mt-3 text-sm text-primary-600 hover:text-primary-700"
                    >
                      Create your first batch
                    </button>
                  )}
                </div>
              ) : (
                <div className="divide-y divide-gray-100 max-h-[calc(100vh-350px)] overflow-y-auto">
                  {filteredBatches.map(batch => (
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
                        <span className="text-xs text-gray-500">{batchItemCounts[batch.id] ?? batch.total_items} files</span>
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
                        {batchItems.length} artworks • Created {new Date(selectedBatch.created_at).toLocaleDateString()}
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
                      <button
                        onClick={() => handleDeleteBatch(selectedBatch.id)}
                        className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition"
                        title="Delete Batch"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
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
                      accept=".png,.jpg,.jpeg,.webp,.gif,.pdf,.ai,.eps,.tiff,.tif,.psd,.zip"
                      onChange={handleFileUpload}
                      className="hidden"
                      disabled={uploading}
                    />
                  </label>
                  <button
                    onClick={handleAnalyzeAll}
                    disabled={analyzingAll || batchItems.length === 0}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {analyzingAll ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        <span>{analyzeAllProgress.done}/{analyzeAllProgress.total}</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4" />
                        <span>Analyze All</span>
                      </>
                    )}
                  </button>
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
                            
                            {/* Source Link */}
                            <div className="mt-2">
                              {editingSourceLink === item.id ? (
                                <div className="flex items-center gap-2">
                                  <input
                                    type="url"
                                    value={sourceLinkValue}
                                    onChange={(e) => setSourceLinkValue(e.target.value)}
                                    placeholder="https://drive.google.com/... or download link"
                                    className="flex-1 px-2 py-1 text-xs border border-gray-200 rounded focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                                    autoFocus
                                    onKeyDown={(e) => {
                                      if (e.key === 'Enter') handleSaveSourceLink(item.id)
                                      if (e.key === 'Escape') {
                                        setEditingSourceLink(null)
                                        setSourceLinkValue('')
                                      }
                                    }}
                                  />
                                  <button
                                    onClick={() => handleSaveSourceLink(item.id)}
                                    disabled={savingSourceLink}
                                    className="p-1 text-green-600 hover:bg-green-50 rounded transition"
                                    title="Save"
                                  >
                                    {savingSourceLink ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                                  </button>
                                  <button
                                    onClick={() => {
                                      setEditingSourceLink(null)
                                      setSourceLinkValue('')
                                    }}
                                    className="p-1 text-gray-400 hover:bg-gray-50 rounded transition"
                                    title="Cancel"
                                  >
                                    <X className="h-4 w-4" />
                                  </button>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2">
                                  {item.source_link ? (
                                    <a
                                      href={item.source_link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex-1 text-xs text-blue-600 hover:text-blue-800 truncate flex items-center gap-1"
                                      title={item.source_link}
                                    >
                                      <Link2 className="h-3 w-3 flex-shrink-0" />
                                      <span className="truncate">{item.source_link}</span>
                                    </a>
                                  ) : (
                                    <span className="text-xs text-gray-400">No source link</span>
                                  )}
                                  <button
                                    onClick={() => {
                                      setEditingSourceLink(item.id)
                                      setSourceLinkValue(item.source_link || '')
                                    }}
                                    className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition flex-shrink-0"
                                    title="Edit source link"
                                  >
                                    <Link2 className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                              )}
                            </div>
                            
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
                              {/* View JSON Button */}
                              {item.ai_analysis && (
                                <button
                                  onClick={() => {
                                    setSelectedItemJson(item)
                                    setShowJsonModal(true)
                                  }}
                                  className="p-2 text-emerald-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition"
                                  title="View AI JSON"
                                >
                                  <Code className="h-4 w-4" />
                                </button>
                              )}
                              {/* AI Analyze Button - show for images */}
                              {isImage && (
                                <button
                                  onClick={() => handleAnalyze(item)}
                                  disabled={analyzingId === item.id}
                                  className="p-2 text-indigo-500 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition disabled:opacity-50"
                                  title={item.ai_analysis?.analyzed_at ? 'Re-analyze with AI' : 'Run AI Analysis'}
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

      {/* JSON Preview Modal */}
      {showJsonModal && selectedItemJson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-bold text-gray-900">AI Analysis JSON</h2>
              <button onClick={() => setShowJsonModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4 overflow-auto max-h-[60vh]">
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                {JSON.stringify(selectedItemJson.ai_analysis, null, 2)}
              </pre>
            </div>
            <div className="flex gap-3 p-4 border-t bg-gray-50">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(selectedItemJson.ai_analysis, null, 2))
                  alert('JSON copied to clipboard!')
                }}
                className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
              >
                Copy JSON
              </button>
              <button
                onClick={() => setShowJsonModal(false)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-100 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
