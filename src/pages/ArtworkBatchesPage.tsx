import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, Plus, Search, Upload, Trash2, Eye, Copy, Check, 
  RefreshCw, Sparkles, X, ChevronRight, Lock, Mail, ExternalLink,
  CheckCircle, Clock, AlertCircle, FileImage, Download, MoreHorizontal,
  Folder, Package, Code, ArrowUpDown, ArrowUp, ArrowDown, Link2, Pencil, Files, Pin,
  LayoutGrid, MessageSquare, CircleDashed, CheckCircle2,
  Image as ImageIcon, Link as LinkIcon
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
  const [itemFilter, setItemFilter] = useState<'all' | 'with-comment' | 'with-artwork' | 'blank' | 'approved' | 'rejected' | 'pending'>('all')
  
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
  const [copiedPasswordOnly, setCopiedPasswordOnly] = useState(false)
  const [copiedLinkOnly, setCopiedLinkOnly] = useState(false)
  
  // JSON preview state
  const [showJsonModal, setShowJsonModal] = useState(false)
  const [selectedItemJson, setSelectedItemJson] = useState<ArtworkBatchItem | null>(null)

  // Batch item counts (actual count from database)
  const [batchItemCounts, setBatchItemCounts] = useState<Record<string, number>>({})

  // Source link editing state
  const [editingSourceLink, setEditingSourceLink] = useState<string | null>(null)
  const [sourceLinkValue, setSourceLinkValue] = useState('')
  const [savingSourceLink, setSavingSourceLink] = useState(false)

  // Batch rename state
  const [editingBatchName, setEditingBatchName] = useState(false)
  const [batchNameValue, setBatchNameValue] = useState('')
  const [savingBatchName, setSavingBatchName] = useState(false)

  // File rename state
  const [editingFileName, setEditingFileName] = useState<string | null>(null)
  const [fileNameValue, setFileNameValue] = useState('')
  const [savingFileName, setSavingFileName] = useState(false)

  // Clone batch state
  const [cloningBatch, setCloningBatch] = useState(false)

  // Pin functionality state
  const [copyTargetItem, setCopyTargetItem] = useState<ArtworkBatchItem | null>(null)

  // Comment thread reply state
  const [replyingToItem, setReplyingToItem] = useState<string | null>(null)
  const [replyText, setReplyText] = useState('')
  const [sendingReply, setSendingReply] = useState(false)
  const [adminPendingAssets, setAdminPendingAssets] = useState<{ type: 'image' | 'link', url: string, name?: string }[]>([])
  const [adminUploadingAsset, setAdminUploadingAsset] = useState(false)
  const [showAdminLinkInput, setShowAdminLinkInput] = useState(false)
  const [adminLinkUrl, setAdminLinkUrl] = useState('')
  const [adminLinkLabel, setAdminLinkLabel] = useState('')

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
    
    // Sort by pinned status first, then by date
    result.sort((a, b) => {
      const aPinned = a.batch_name.startsWith('📌 ');
      const bPinned = b.batch_name.startsWith('📌 ');
      if (aPinned && !bPinned) return -1;
      if (!aPinned && bPinned) return 1;

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
            const isVideo = /\.(mp4|mov|webm)$/i.test(file.name)
            if (itemData) {
              uploadedItems.push({ id: itemData.id, url: urlData.publicUrl, isImage: isImage || isVideo })
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

  // Format file size
  const formatFileSize = (bytes?: number) => {
    if (!bytes) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
  }

  // Delete an artwork item
  const handleDeleteItem = async (itemId: string) => {
    if (!window.confirm('Are you sure you want to delete this artwork? This cannot be undone.')) return
    
    try {
      const { error } = await supabase
        .from('artwork_batch_items')
        .delete()
        .eq('id', itemId)
      
      if (error) throw error
      
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
      console.error('Delete item error:', err)
      alert('Failed to delete artwork')
    }
  }

  // Update an existing artwork item's file
  const handleUpdateItemFile = async (e: React.ChangeEvent<HTMLInputElement>, itemId: string) => {
    const file = e.target.files?.[0]
    if (!file || !selectedBatch) return
    
    setUploading(true)
    try {
      // Upload to storage
      const ext = file.name.split('.').pop() || 'bin'
      const storagePath = `batches/${selectedBatch.id}/${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`
      
      const { error: uploadError } = await supabase.storage
        .from('artworks')
        .upload(storagePath, file)
      
      if (uploadError) throw uploadError
      
      // Get public URL
      const { data: urlData } = supabase.storage.from('artworks').getPublicUrl(storagePath)
      
      const now = new Date().toISOString()
      
      // Update item in database
      const { error: updateError } = await supabase
        .from('artwork_batch_items')
        .update({
          file_url: urlData.publicUrl,
          file_type: file.type,
          file_size: file.size,
          updated_at: now
        })
        .eq('id', itemId)
      
      if (updateError) throw updateError
      
      // Update local state
      setBatchItems(prev => prev.map(item => 
        item.id === itemId 
          ? { 
              ...item, 
              file_url: urlData.publicUrl, 
              file_type: file.type, 
              file_size: file.size,
              updated_at: now
            } 
          : item
      ))
      
    } catch (err) {
      console.error('Update item file error:', err)
      alert('Failed to update file')
    } finally {
      setUploading(false)
      if (e.target) e.target.value = ''
    }
  }

  // Create blank artwork slot
  const handleCreateBlankArtwork = async () => {
    if (!selectedBatch) return;
    
    setUploading(true);
    try {
      const { data, error } = await supabase
        .from('artwork_batch_items')
        .insert({
          batch_id: selectedBatch.id,
          name: 'New Blank Artwork',
          file_url: '', // Empty or could be a placeholder URL
          file_type: 'placeholder',
          file_size: 0,
          status: 'pending'
        })
        .select()
        .single();
      
      if (error) throw error;
      
      setBatchItems(prev => [data, ...prev]);
      
      // Update batch total
      await supabase
        .from('artwork_batches')
        .update({ total_items: selectedBatch.total_items + 1 })
        .eq('id', selectedBatch.id);
      
      fetchBatches();
    } catch (err) {
      console.error('Create blank artwork error:', err);
      alert('Failed to create blank artwork');
    } finally {
      setUploading(false);
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
    const textToCopy = `Artwork Review Link: ${link}\nPassword: ${selectedBatch.password}`
    navigator.clipboard.writeText(textToCopy)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  const handleCopyPasswordOnly = () => {
    if (!selectedBatch) return
    navigator.clipboard.writeText(selectedBatch.password)
    setCopiedPasswordOnly(true)
    setTimeout(() => setCopiedPasswordOnly(false), 2000)
  }

  const handleCopyLinkOnly = () => {
    if (!selectedBatch) return
    const link = `${window.location.origin}/artwork-review/${selectedBatch.id}`
    navigator.clipboard.writeText(link)
    setCopiedLinkOnly(true)
    setTimeout(() => setCopiedLinkOnly(false), 2000)
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

  // Rename batch
  const handleRenameBatch = async () => {
    if (!selectedBatch || savingBatchName || !batchNameValue.trim()) return
    
    setSavingBatchName(true)
    try {
      const { error } = await supabase
        .from('artwork_batches')
        .update({ batch_name: batchNameValue.trim() })
        .eq('id', selectedBatch.id)
      
      if (error) throw error
      
      // Update local state
      setSelectedBatch({ ...selectedBatch, batch_name: batchNameValue.trim() })
      setBatches(prev => prev.map(b => 
        b.id === selectedBatch.id ? { ...b, batch_name: batchNameValue.trim() } : b
      ))
      
      setEditingBatchName(false)
      setBatchNameValue('')
    } catch (err) {
      console.error('Rename batch error:', err)
      alert('Failed to rename batch')
    } finally {
      setSavingBatchName(false)
    }
  }

  // Rename file
  const handleRenameFile = async (itemId: string) => {
    if (savingFileName || !fileNameValue.trim()) return
    
    setSavingFileName(true)
    try {
      const { error } = await supabase
        .from('artwork_batch_items')
        .update({ name: fileNameValue.trim() })
        .eq('id', itemId)
      
      if (error) throw error
      
      // Update local state
      setBatchItems(prev => prev.map(i => 
        i.id === itemId ? { ...i, name: fileNameValue.trim() } : i
      ))
      
      setEditingFileName(null)
      setFileNameValue('')
    } catch (err) {
      console.error('Rename file error:', err)
      alert('Failed to rename file')
    } finally {
      setSavingFileName(false)
    }
  }

  // Clone batch
  const handleCloneBatch = async () => {
    if (!selectedBatch || cloningBatch) return
    
    if (!confirm('Clone this entire batch? It will copy all artworks & passwords into a new batch link.')) return

    setCloningBatch(true)
    try {
      // 1. Create new batch
      const newBatchName = `${selectedBatch.batch_name} (Copy)`
      const { data: newBatch, error: batchError } = await supabase
        .from('artwork_batches')
        .insert({
          batch_name: newBatchName,
          password: selectedBatch.password,
          customer_email: selectedBatch.customer_email,
          customer_name: selectedBatch.customer_name,
          status: 'pending',
          total_items: selectedBatch.total_items,
          approved_count: 0,
          rejected_count: 0,
          created_by: user?.id || null
        })
        .select()
        .single()
      
      if (batchError || !newBatch) throw batchError || new Error("Failed to create new batch")

      // 2. Clone items
      if (batchItems.length > 0) {
        const insertItems = batchItems.map(item => ({
          batch_id: newBatch.id,
          name: item.name,
          file_url: item.file_url,
          file_type: item.file_type,
          file_size: item.file_size,
          source_link: item.source_link,
          ai_analysis: item.ai_analysis,
          status: 'pending'
        }))
        
        const { error: itemsError } = await supabase
          .from('artwork_batch_items')
          .insert(insertItems)
        
        if (itemsError) throw itemsError
      }

      // 3. Update UI
      fetchBatches()
      setBatches(prev => [newBatch, ...prev])
      setSelectedBatch(newBatch)
      
    } catch (err) {
      console.error('Clone batch error:', err)
      alert('Failed to clone batch')
    } finally {
      setCloningBatch(false)
    }
  }

  // Add admin reply to comment thread
  const handleAdminAssetUpload = async (e: React.ChangeEvent<HTMLInputElement>, item: ArtworkBatchItem) => {
    const file = e.target.files?.[0]
    if (!file) return
    
    setAdminUploadingAsset(true)
    try {
      const ext = file.name.split('.').pop() || 'bin'
      const filePath = `replies/${item.batch_id}/${item.id}/${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`
      
      const { error: uploadError } = await supabase.storage
        .from('artworks')
        .upload(filePath, file)
      
      if (uploadError) throw uploadError
      
      const { data: urlData } = supabase.storage.from('artworks').getPublicUrl(filePath)
      
      setAdminPendingAssets(prev => [...prev, {
        type: 'image',
        url: urlData.publicUrl,
        name: file.name
      }])
    } catch (err) {
      console.error('Asset upload error:', err)
      alert('Failed to upload image')
    } finally {
      setAdminUploadingAsset(false)
      if (e.target) e.target.value = ''
    }
  }

  const handleAdminAddLink = () => {
    if (!adminLinkUrl.trim()) return
    let url = adminLinkUrl.trim()
    if (!/^https?:\/\//i.test(url)) {
      url = 'https://' + url
    }
    setAdminPendingAssets(prev => [...prev, {
      type: 'link',
      url: url,
      name: adminLinkLabel.trim() || url
    }])
    setAdminLinkUrl('')
    setAdminLinkLabel('')
    setShowAdminLinkInput(false)
  }

  const handleRemoveAdminPendingAsset = (index: number) => {
    setAdminPendingAssets(prev => prev.filter((_, i) => i !== index))
  }

  const handleAddReply = async (item: ArtworkBatchItem) => {
    if ((!replyText.trim() && adminPendingAssets.length === 0) || sendingReply) return
    setSendingReply(true)
    try {
      const assetsToSend = adminPendingAssets.length > 0 ? adminPendingAssets : undefined
      const newReply = {
        author: 'Admin',
        text: replyText.trim(),
        at: new Date().toISOString(),
        assets: assetsToSend
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

      setBatchItems(prev => prev.map(i =>
        i.id === item.id ? { ...i, ai_analysis: updatedAnalysis, updated_at: now } : i
      ))
      setReplyText('')
      setAdminPendingAssets([])
      setReplyingToItem(null)
    } catch (err) {
      console.error('Reply error:', err)
      alert('Failed to send reply')
    } finally {
      setSendingReply(false)
    }
  }

  // Delete a reply from thread
  const handleDeleteReply = async (item: ArtworkBatchItem, replyIndex: number) => {
    try {
      const existingReplies: { author: string; text: string; at: string }[] = item.ai_analysis?.replies ?? []
      const updatedReplies = existingReplies.filter((_, i) => i !== replyIndex)
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

      setBatchItems(prev => prev.map(i =>
        i.id === item.id ? { ...i, ai_analysis: updatedAnalysis, updated_at: now } : i
      ))
    } catch (err) {
      console.error('Delete reply error:', err)
    }
  }

  // Toggle Pin Batch
  const handleTogglePinBatch = async (batch: ArtworkBatch) => {
    const isPinned = batch.batch_name.startsWith('📌 ');
    const newName = isPinned ? batch.batch_name.replace('📌 ', '') : '📌 ' + batch.batch_name;
    
    try {
      const { error } = await supabase
        .from('artwork_batches')
        .update({ batch_name: newName })
        .eq('id', batch.id);

      if (error) throw error;

      if (selectedBatch?.id === batch.id) {
        setSelectedBatch({ ...selectedBatch, batch_name: newName });
      }
      setBatches(prev => prev.map(b => 
        b.id === batch.id ? { ...b, batch_name: newName } : b
      ));
    } catch (err) {
      console.error('Toggle pin error:', err);
      alert('Failed to pin/unpin batch');
    }
  }

  // Copy to Pinned Batch
  const handleCopyToPinnedBatch = async (targetBatchId: string) => {
    if (!copyTargetItem) return;
    try {
      const { data, error } = await supabase.from('artwork_batch_items').insert({
        batch_id: targetBatchId,
        name: copyTargetItem.name,
        file_url: copyTargetItem.file_url,
        file_type: copyTargetItem.file_type,
        file_size: copyTargetItem.file_size,
        status: 'pending',
        ai_analysis: copyTargetItem.ai_analysis,
        source_link: copyTargetItem.source_link
      }).select().single();
      
      if (error) throw error;
      
      const targetBatch = batches.find(b => b.id === targetBatchId);
      if (targetBatch) {
        await supabase.from('artwork_batches').update({ total_items: targetBatch.total_items + 1 }).eq('id', targetBatchId);
        setBatches(prev => prev.map(b => b.id === targetBatchId ? { ...b, total_items: b.total_items + 1 } : b));
      }

      setCopyTargetItem(null);
      alert('Artwork successfully saved template library pinned batch!');
    } catch (err) {
      console.error('Copy to pinned batch error:', err);
      alert('Failed to copy artwork');
    }
  }

  const [itemSortOption, setItemSortOption] = useState<'name' | 'newest' | 'oldest' | 'activity'>('activity')

  // Filter and sort items
  const filteredItems = useMemo(() => {
    let filtered = batchItems.filter(item => {
      const q = searchQuery.toLowerCase().trim()
      const ai = item.ai_analysis
      
      // Search filter
      const matchesSearch = !q || (
        item.name.toLowerCase().includes(q) ||
        item.customer_comment?.toLowerCase().includes(q) ||
        ai?.title?.toLowerCase().includes(q) ||
        ai?.description?.toLowerCase().includes(q) ||
        ai?.keywords?.some(k => k.toLowerCase().includes(q)) ||
        ai?.category?.toLowerCase().includes(q) ||
        ai?.colors?.some(c => c.toLowerCase().includes(q)) ||
        ai?.content_detected?.some(c => c.toLowerCase().includes(q)) ||
        ai?.quality_score?.toLowerCase().includes(q) ||
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
  }, [batchItems, searchQuery, itemFilter, itemSortOption])

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
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Batch List */}
          <div className="w-full lg:w-80 flex-shrink-0">
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
                      {editingBatchName ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={batchNameValue}
                            onChange={(e) => setBatchNameValue(e.target.value)}
                            className="text-xl font-bold text-gray-900 px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Batch name"
                            autoFocus
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') handleRenameBatch()
                              if (e.key === 'Escape') {
                                setEditingBatchName(false)
                                setBatchNameValue('')
                              }
                            }}
                          />
                          <button
                            onClick={handleRenameBatch}
                            disabled={savingBatchName || !batchNameValue.trim()}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg disabled:opacity-50"
                            title="Save"
                          >
                            {savingBatchName ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                          </button>
                          <button
                            onClick={() => {
                              setEditingBatchName(false)
                              setBatchNameValue('')
                            }}
                            className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg"
                            title="Cancel"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <h2 className="text-xl font-bold text-gray-900">Batch {selectedBatch.batch_name}</h2>
                          <button
                            onClick={() => {
                              setBatchNameValue(selectedBatch.batch_name)
                              setEditingBatchName(true)
                            }}
                            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition"
                            title="Rename batch"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                      <p className="text-sm text-gray-500 mt-1 flex flex-wrap gap-x-4 gap-y-1">
                        <span>{batchItems.length} artworks</span>
                        <span className="flex items-center gap-1 font-medium text-gray-400">
                          <Plus className="h-3 w-3" />
                          Created: {new Date(selectedBatch.created_at).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1 font-bold text-primary-600">
                          <RefreshCw className="h-3 w-3" />
                          Last Activity: {new Date(selectedBatch.updated_at || selectedBatch.created_at).toLocaleDateString()}
                        </span>
                      </p>
                      {selectedBatch.customer_name && (
                        <p className="text-sm text-gray-600 mt-1">
                          Customer: {selectedBatch.customer_name} {selectedBatch.customer_email && `(${selectedBatch.customer_email})`}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleTogglePinBatch(selectedBatch)}
                        className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition ${selectedBatch.batch_name.startsWith('📌 ') ? 'bg-primary-50 border-primary-200 text-primary-700' : 'border-gray-200 hover:bg-gray-50'}`}
                        title={selectedBatch.batch_name.startsWith('📌 ') ? "Unpin Batch" : "Pin Batch for Templates"}
                      >
                        <Pin className={`h-4 w-4 ${selectedBatch.batch_name.startsWith('📌 ') ? 'fill-current' : ''}`} />
                        <span className="hidden sm:inline text-sm">{selectedBatch.batch_name.startsWith('📌 ') ? 'Pinned' : 'Pin'}</span>
                      </button>
                      <button
                        onClick={handleCloneBatch}
                        disabled={cloningBatch}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition disabled:opacity-50"
                        title="Clone entire batch for a new project"
                      >
                        {cloningBatch ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Files className="h-4 w-4" />}
                        <span className="hidden sm:inline text-sm">Clone</span>
                      </button>
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
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">Password:</span>
                        <code className="px-2 py-0.5 bg-white rounded border text-gray-800">{selectedBatch.password}</code>
                      </div>
                      <button
                        onClick={handleCopyPasswordOnly}
                        className="p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-200 rounded transition"
                        title="Copy Password"
                      >
                        {copiedPasswordOnly ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-3 pt-3 border-t border-gray-200">
                      <div className="flex items-center gap-2 overflow-hidden pr-2">
                        <ExternalLink className="h-4 w-4 text-gray-500 flex-shrink-0" />
                        <span className="text-gray-600 flex-shrink-0">Review Link:</span>
                        <code className="px-2 py-0.5 bg-white rounded border text-gray-800 text-xs truncate max-w-md">
                          {window.location.origin}/artwork-review/{selectedBatch.id}
                        </code>
                      </div>
                      <button
                        onClick={handleCopyLinkOnly}
                        className="p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-200 rounded transition flex-shrink-0"
                        title="Copy Link"
                      >
                        {copiedLinkOnly ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                      </button>
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
                  <button
                    onClick={handleCreateBlankArtwork}
                    disabled={uploading}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition"
                    title="Create a placeholder to input original artwork link while waiting for press-ready files"
                  >
                    <Plus className="h-4 w-4" />
                    <span className="whitespace-nowrap">Blank Artwork</span>
                  </button>
                  <label className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition cursor-pointer">
                    <Upload className="h-4 w-4" />
                    <span>Upload Files</span>
                    <input
                      type="file"
                      multiple
                      accept=".png,.jpg,.jpeg,.webp,.gif,.pdf,.ai,.eps,.tiff,.tif,.psd,.zip,.mp4,.mov,.webm"
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

                {/* Items Count & Sort */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="text-sm text-gray-500 font-medium">
                    Showing {filteredItems.length} of {batchItems.length} artworks
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Sort by:</span>
                    <select 
                      value={itemSortOption}
                      onChange={(e) => setItemSortOption(e.target.value as any)}
                      className="text-xs border-gray-200 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white"
                    >
                      <option value="activity">Latest Activity</option>
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="name">Name (A-Z)</option>
                    </select>
                  </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                  {[
                    { id: 'all', label: 'All Items', icon: LayoutGrid },
                    { id: 'with-comment', label: 'With Comments', icon: MessageSquare },
                    { id: 'with-artwork', label: 'With Artwork', icon: FileImage },
                    { id: 'blank', label: 'Blank Cards', icon: CircleDashed },
                    { id: 'approved', label: 'Approved', icon: CheckCircle2 },
                    { id: 'pending', label: 'Pending', icon: Clock },
                  ].map(f => {
                    const Icon = f.icon
                    const isActive = itemFilter === f.id
                    return (
                      <button
                        key={f.id}
                        onClick={() => setItemFilter(f.id as any)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                          isActive 
                            ? 'bg-primary-50 text-primary-600 border border-primary-200 shadow-sm' 
                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                        }`}
                      >
                        <Icon className={`h-4 w-4 ${isActive ? 'text-primary-600' : 'text-gray-400'}`} />
                        {f.label}
                        {isActive && (
                          <span className="ml-1 px-1.5 py-0.5 bg-primary-100 text-primary-700 rounded-full text-[10px]">
                            {filteredItems.length}
                          </span>
                        )}
                      </button>
                    )
                  })}
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
                      const isImage = /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(item.file_url) || /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(item.name)
                      const isVideo = /\.(mp4|mov|webm)$/i.test(item.file_url) || /\.(mp4|mov|webm)$/i.test(item.name)
                      const isPdf = /\.pdf$/i.test(item.file_url) || /\.pdf$/i.test(item.name)
                      return (
                        <div key={item.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition">
                          {/* Preview */}
                          <div className="aspect-[4/3] bg-gray-100 relative group/preview overflow-hidden">
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
                                className="w-full h-full object-contain bg-black"
                              />
                            ) : isPdf ? (
                              <iframe 
                                src={`${item.file_url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                                className="w-full h-full border-0 pointer-events-none" 
                                scrolling="no"
                              />
                            ) : (
                              <div className="w-full h-full flex flex-col items-center justify-center p-4">
                                <FileImage className="h-12 w-12 text-gray-300 mb-3" />
                                <label className="cursor-pointer">
                                  <span className="px-4 py-2 bg-primary-600 text-white rounded-lg text-xs font-medium hover:bg-primary-700 shadow-sm transition flex items-center gap-2">
                                    <Upload className="h-3.5 w-3.5" />
                                    Upload Proof
                                  </span>
                                  <input 
                                    type="file" 
                                    className="hidden" 
                                    onChange={(e) => handleUpdateItemFile(e, item.id)}
                                  />
                                </label>
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

                            {/* Replace Overlay (only if file exists) */}
                            {item.file_url && (
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition flex items-center justify-center pointer-events-none group-hover/preview:pointer-events-auto">
                                <label className="cursor-pointer">
                                  <span className="px-4 py-2 bg-white rounded-lg text-xs font-semibold text-gray-900 shadow-xl border border-gray-200 hover:bg-gray-50 flex items-center gap-2 transition transform scale-90 group-hover/preview:scale-100">
                                    <RefreshCw className="h-4 w-4" />
                                    Replace Proof
                                  </span>
                                  <input 
                                    type="file" 
                                    className="hidden" 
                                    onChange={(e) => handleUpdateItemFile(e, item.id)}
                                  />
                                </label>
                              </div>
                            )}
                          </div>
                          
                          {/* Info */}
                          <div className="p-4">
                            {editingFileName === item.id ? (
                              <div className="flex items-center gap-2 mb-2">
                                <input
                                  type="text"
                                  value={fileNameValue}
                                  onChange={(e) => setFileNameValue(e.target.value)}
                                  className="flex-1 px-2 py-1 text-sm font-medium border border-gray-300 rounded focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                                  autoFocus
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleRenameFile(item.id)
                                    if (e.key === 'Escape') {
                                      setEditingFileName(null)
                                      setFileNameValue('')
                                    }
                                  }}
                                />
                                <button
                                  onClick={() => handleRenameFile(item.id)}
                                  disabled={savingFileName}
                                  className="p-1 text-green-600 hover:bg-green-50 rounded"
                                >
                                  {savingFileName ? <RefreshCw className="h-3 w-3 animate-spin" /> : <Check className="h-3 w-3" />}
                                </button>
                                <button
                                  onClick={() => {
                                    setEditingFileName(null)
                                    setFileNameValue('')
                                  }}
                                  className="p-1 text-gray-400 hover:bg-gray-100 rounded"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </div>
                            ) : (
                              <h3 className="text-xs font-medium text-gray-900 line-clamp-2 leading-snug flex items-start justify-between gap-1 group/name" title={item.name}>
                                <span className="break-words min-w-0">{item.name}</span>
                                <button 
                                  onClick={() => {
                                    setFileNameValue(item.name)
                                    setEditingFileName(item.id)
                                  }}
                                  className="opacity-0 group-hover/name:opacity-100 p-1 text-gray-400 hover:text-primary-600 rounded transition"
                                >
                                  <Pencil className="h-3 w-3" />
                                </button>
                              </h3>
                            )}
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
                              <div className="flex items-center gap-2">
                                {(item.customer_comment || (item.ai_analysis?.replies?.length ?? 0) > 0) && (
                                  <span className="text-[10px] text-primary-500 font-bold flex items-center gap-1">
                                    <MessageSquare className="h-2.5 w-2.5" />
                                    {(item.ai_analysis?.replies?.length ?? 0) + (item.customer_comment ? 1 : 0)}
                                  </span>
                                )}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteItem(item.id);
                                  }}
                                  className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition"
                                  title="Delete artwork"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            </div>
                            
                            {/* Comment Thread */}
                            {(item.customer_comment || (item.ai_analysis?.replies?.length ?? 0) > 0) && (
                              <div className="mt-2 rounded-lg overflow-hidden border border-yellow-100">
                                {/* Customer comment bubble */}
                                {item.customer_comment && (
                                  <div className="p-2.5 bg-yellow-50">
                                    <div className="flex items-center gap-1.5 mb-1">
                                      <span className="text-[10px] font-bold uppercase tracking-wide text-yellow-700">Customer</span>
                                      <span className="text-[10px] text-yellow-500">{new Date(item.updated_at).toLocaleDateString()}</span>
                                    </div>
                                    <p className="text-xs text-yellow-900">{item.customer_comment}</p>
                                  </div>
                                )}
                                {/* Admin replies */}
                                {(item.ai_analysis?.replies ?? []).map((reply: any, idx: number) => (
                                  <div key={idx} className="p-2.5 bg-blue-50 border-t border-blue-100 flex items-start justify-between gap-2 group/reply">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-1.5 mb-1">
                                        <span className="text-[10px] font-bold uppercase tracking-wide text-blue-700">{reply.author}</span>
                                        <span className="text-[10px] text-blue-400">{new Date(reply.at).toLocaleDateString()}</span>
                                      </div>
                                      {reply.text && <p className="text-xs text-blue-900">{reply.text}</p>}
                                      
                                      {/* Reply Assets */}
                                      {reply.assets && reply.assets.length > 0 && (
                                        <div className="mt-2 space-y-1 pt-1 border-t border-blue-100/50">
                                          {reply.assets.map((asset: any, aidx: number) => (
                                            <div key={aidx}>
                                              {asset.type === 'image' ? (
                                                <a 
                                                  href={asset.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="block rounded border border-blue-200 overflow-hidden hover:opacity-90 transition"
                                                >
                                                  <img src={asset.url} alt="Attachment" className="max-h-24 w-auto object-contain bg-white" />
                                                </a>
                                              ) : (
                                                <a 
                                                  href={asset.url} 
                                                  target="_blank" 
                                                  rel="noopener noreferrer"
                                                  className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 hover:text-blue-800 underline decoration-1"
                                                >
                                                  <LinkIcon className="h-2.5 w-2.5" />
                                                  {asset.name || 'View Link'}
                                                </a>
                                              )}
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                    <button
                                      onClick={() => handleDeleteReply(item, idx)}
                                      className="opacity-0 group-hover/reply:opacity-100 p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition mt-0.5"
                                      title="Delete reply"
                                    >
                                      <X className="h-3 w-3" />
                                    </button>
                                  </div>
                                ))}
                                {/* Reply input */}
                                {replyingToItem === item.id ? (
                                  <div className="p-2 bg-gray-50 border-t border-gray-100">
                                    {/* Pending Assets Preview */}
                                    {adminPendingAssets.length > 0 && (
                                      <div className="flex flex-wrap gap-1 mb-2">
                                        {adminPendingAssets.map((asset, idx) => (
                                          <div key={idx} className="relative group bg-white rounded border border-gray-200 p-0.5 pr-5">
                                            {asset.type === 'image' ? (
                                              <img src={asset.url} alt="Pending" className="h-6 w-6 object-cover rounded" />
                                            ) : (
                                              <div className="h-6 flex items-center px-1 gap-1 text-[9px] font-bold text-gray-600">
                                                <LinkIcon className="h-2.5 w-2.5" />
                                                <span className="max-w-[40px] truncate">{asset.name || 'Link'}</span>
                                              </div>
                                            )}
                                            <button 
                                              onClick={() => handleRemoveAdminPendingAsset(idx)}
                                              className="absolute right-0.5 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-red-500 transition"
                                            >
                                              <X className="h-2 w-2" />
                                            </button>
                                          </div>
                                        ))}
                                      </div>
                                    )}

                                    {/* Link Input Overlay */}
                                    {showAdminLinkInput && (
                                      <div className="mb-2 p-2 bg-primary-50 rounded border border-primary-100 space-y-1.5 shadow-sm">
                                        <input 
                                          type="url" 
                                          value={adminLinkUrl}
                                          onChange={e => setAdminLinkUrl(e.target.value)}
                                          placeholder="Paste URL here..."
                                          className="w-full px-2 py-1 text-[10px] rounded border-gray-200 focus:ring-1 focus:ring-primary-500"
                                          autoFocus
                                        />
                                        <div className="flex gap-1.5">
                                          <input 
                                            type="text" 
                                            value={adminLinkLabel}
                                            onChange={e => setAdminLinkLabel(e.target.value)}
                                            placeholder="Label (optional)"
                                            className="flex-1 px-2 py-1 text-[10px] rounded border-gray-200 focus:ring-1 focus:ring-primary-500"
                                          />
                                          <button 
                                            onClick={handleAdminAddLink}
                                            className="px-2 py-1 bg-primary-600 text-white text-[10px] font-bold rounded hover:bg-primary-700"
                                          >Add</button>
                                          <button 
                                            onClick={() => setShowAdminLinkInput(false)}
                                            className="px-2 py-1 bg-white text-gray-500 text-[10px] font-bold rounded border border-gray-200"
                                          >✕</button>
                                        </div>
                                      </div>
                                    )}

                                    <textarea
                                      value={replyText}
                                      onChange={e => setReplyText(e.target.value)}
                                      placeholder="Type your reply..."
                                      rows={2}
                                      className="w-full px-2 py-1.5 text-xs border border-gray-200 rounded resize-none focus:ring-1 focus:ring-primary-500"
                                      autoFocus
                                      onKeyDown={e => {
                                        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleAddReply(item) }
                                        if (e.key === 'Escape') { setReplyingToItem(null); setReplyText(''); setAdminPendingAssets([]); setShowAdminLinkInput(false) }
                                      }}
                                    />
                                    <div className="flex items-center gap-1.5 mt-1.5">
                                      <div className="flex gap-0.5">
                                        <label className="cursor-pointer p-1.5 text-gray-400 hover:text-primary-600 hover:bg-white rounded transition" title="Attach Image">
                                          {adminUploadingAsset ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <ImageIcon className="h-3.5 w-3.5" />}
                                          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleAdminAssetUpload(e, item)} disabled={adminUploadingAsset} />
                                        </label>
                                        <button 
                                          onClick={() => setShowAdminLinkInput(!showAdminLinkInput)}
                                          className={`p-1.5 transition rounded ${showAdminLinkInput ? 'text-primary-600 bg-white' : 'text-gray-400 hover:text-primary-600 hover:bg-white'}`}
                                          title="Add Link"
                                        >
                                          <LinkIcon className="h-3.5 w-3.5" />
                                        </button>
                                      </div>
                                      <button
                                        onClick={() => handleAddReply(item)}
                                        disabled={(!replyText.trim() && adminPendingAssets.length === 0) || sendingReply || adminUploadingAsset}
                                        className="flex-1 py-1 text-[11px] font-semibold bg-primary-600 text-white rounded hover:bg-primary-700 disabled:opacity-50 transition"
                                      >{sendingReply ? 'Sending...' : 'Send Reply'}</button>
                                      <button
                                        onClick={() => { setReplyingToItem(null); setReplyText(''); setAdminPendingAssets([]); setShowAdminLinkInput(false) }}
                                        className="py-1 px-3 text-[11px] bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition"
                                      >Cancel</button>
                                    </div>
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => { setReplyingToItem(item.id); setReplyText(''); setAdminPendingAssets([]); setShowAdminLinkInput(false) }}
                                    className="w-full py-1.5 text-[11px] font-semibold text-blue-600 hover:bg-blue-50 transition border-t border-yellow-100"
                                  >↩ Reply</button>
                                )}
                              </div>
                            )}
                            {/* Show reply button even if no comment yet */}
                            {!item.customer_comment && (item.ai_analysis?.replies?.length ?? 0) === 0 && (
                              <div className="mt-2">
                                {replyingToItem === item.id ? (
                                  <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                                    <div className="p-2 bg-gray-50">
                                      {/* Pending Assets Preview */}
                                      {adminPendingAssets.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mb-2">
                                          {adminPendingAssets.map((asset, idx) => (
                                            <div key={idx} className="relative group bg-white rounded border border-gray-200 p-0.5 pr-5">
                                              {asset.type === 'image' ? (
                                                <img src={asset.url} alt="Pending" className="h-6 w-6 object-cover rounded" />
                                              ) : (
                                                <div className="h-6 flex items-center px-1 gap-1 text-[9px] font-bold text-gray-600">
                                                  <LinkIcon className="h-2.5 w-2.5" />
                                                  <span className="max-w-[40px] truncate">{asset.name || 'Link'}</span>
                                                </div>
                                              )}
                                              <button 
                                                onClick={() => handleRemoveAdminPendingAsset(idx)}
                                                className="absolute right-0.5 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-red-500 transition"
                                              >
                                                <X className="h-2 w-2" />
                                              </button>
                                            </div>
                                          ))}
                                        </div>
                                      )}

                                      {/* Link Input Overlay */}
                                      {showAdminLinkInput && (
                                        <div className="mb-2 p-2 bg-primary-50 rounded border border-primary-100 space-y-1.5 shadow-sm">
                                          <input 
                                            type="url" 
                                            value={adminLinkUrl}
                                            onChange={e => setAdminLinkUrl(e.target.value)}
                                            placeholder="Paste URL here..."
                                            className="w-full px-2 py-1 text-[10px] rounded border-gray-200 focus:ring-1 focus:ring-primary-500"
                                            autoFocus
                                          />
                                          <div className="flex gap-1.5">
                                            <input 
                                              type="text" 
                                              value={adminLinkLabel}
                                              onChange={e => setAdminLinkLabel(e.target.value)}
                                              placeholder="Label (optional)"
                                              className="flex-1 px-2 py-1 text-[10px] rounded border-gray-200 focus:ring-1 focus:ring-primary-500"
                                            />
                                            <button 
                                              onClick={handleAdminAddLink}
                                              className="px-2 py-1 bg-primary-600 text-white text-[10px] font-bold rounded hover:bg-primary-700"
                                            >Add</button>
                                            <button 
                                              onClick={() => setShowAdminLinkInput(false)}
                                              className="px-2 py-1 bg-white text-gray-500 text-[10px] font-bold rounded border border-gray-200"
                                            >✕</button>
                                          </div>
                                        </div>
                                      )}

                                      <textarea
                                        value={replyText}
                                        onChange={e => setReplyText(e.target.value)}
                                        placeholder="Type your note for the customer..."
                                        rows={2}
                                        className="w-full px-2 py-1.5 text-xs border border-gray-200 rounded resize-none focus:ring-1 focus:ring-primary-500"
                                        autoFocus
                                        onKeyDown={e => {
                                          if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleAddReply(item) }
                                          if (e.key === 'Escape') { setReplyingToItem(null); setReplyText(''); setAdminPendingAssets([]); setShowAdminLinkInput(false) }
                                        }}
                                      />
                                      <div className="flex items-center gap-1.5 mt-1.5">
                                        <div className="flex gap-0.5">
                                          <label className="cursor-pointer p-1.5 text-gray-400 hover:text-primary-600 hover:bg-white rounded transition" title="Attach Image">
                                            {adminUploadingAsset ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <ImageIcon className="h-3.5 w-3.5" />}
                                            <input type="file" accept="image/*" className="hidden" onChange={(e) => handleAdminAssetUpload(e, item)} disabled={adminUploadingAsset} />
                                          </label>
                                          <button 
                                            onClick={() => setShowAdminLinkInput(!showAdminLinkInput)}
                                            className={`p-1.5 transition rounded ${showAdminLinkInput ? 'text-primary-600 bg-white' : 'text-gray-400 hover:text-primary-600 hover:bg-white'}`}
                                            title="Add Link"
                                          >
                                            <LinkIcon className="h-3.5 w-3.5" />
                                          </button>
                                        </div>
                                        <button
                                          onClick={() => handleAddReply(item)}
                                          disabled={(!replyText.trim() && adminPendingAssets.length === 0) || sendingReply || adminUploadingAsset}
                                          className="flex-1 py-1 text-[11px] font-semibold bg-primary-600 text-white rounded hover:bg-primary-700 disabled:opacity-50 transition"
                                        >{sendingReply ? 'Sending...' : 'Send Note'}</button>
                                        <button
                                          onClick={() => { setReplyingToItem(null); setReplyText(''); setAdminPendingAssets([]); setShowAdminLinkInput(false) }}
                                          className="py-1 px-3 text-[11px] bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition"
                                        >Cancel</button>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => { setReplyingToItem(item.id); setReplyText(''); setAdminPendingAssets([]); setShowAdminLinkInput(false) }}
                                    className="text-[11px] text-gray-400 hover:text-primary-600 transition"
                                  >+ Add note</button>
                                )}
                              </div>
                            )}
                            
                            {/* Original Artwork Link */}
                            <div className="mt-3 pt-3 border-t border-gray-100">
                              <label className="text-xs font-semibold text-gray-700 block mb-1.5 flex items-center gap-1">
                                <Link2 className="h-3 w-3" /> Original Source File
                              </label>
                              {editingSourceLink === item.id ? (
                                <div className="flex items-center gap-2">
                                  <input
                                    type="url"
                                    value={sourceLinkValue}
                                    onChange={(e) => setSourceLinkValue(e.target.value)}
                                    placeholder="Google Drive, WeTransfer..."
                                    className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
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
                                    className="p-1 px-2 text-xs font-medium bg-green-100 text-green-700 hover:bg-green-200 rounded transition"
                                  >
                                    {savingSourceLink ? 'Saving...' : 'Save'}
                                  </button>
                                  <button
                                    onClick={() => {
                                      setEditingSourceLink(null)
                                      setSourceLinkValue('')
                                    }}
                                    className="p-1 px-2 text-xs font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 rounded transition"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              ) : (
                                <div className="flex items-center justify-between gap-2 p-2 bg-gray-50 rounded-lg">
                                  {item.source_link ? (
                                    <a
                                      href={item.source_link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex-1 text-xs text-blue-600 hover:text-blue-800 truncate flex items-center gap-1 font-medium"
                                      title={item.source_link}
                                    >
                                      <Download className="h-3 w-3 flex-shrink-0" />
                                      <span className="truncate font-mono tracking-tight" style={{ fontSize: '10px' }}>
                                        {item.source_link.length > 15
                                          ? `...${item.source_link.slice(-10)}`
                                          : item.source_link}
                                      </span>
                                    </a>
                                  ) : (
                                    <span className="text-[10px] text-gray-400 italic">No link</span>
                                  )}
                                  <button
                                    onClick={() => {
                                      setSourceLinkValue(item.source_link || '')
                                      setEditingSourceLink(item.id)
                                    }}
                                    className="p-1 px-2 text-[10px] font-medium bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 rounded transition flex-shrink-0"
                                  >
                                    {item.source_link ? 'Edit' : '+ Add Link'}
                                  </button>
                                </div>
                              )}
                            </div>

                            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                Updated: {new Date(item.updated_at).toLocaleDateString()}
                              </span>
                              <span>{item.file_size ? (item.file_size / 1024 / 1024).toFixed(2) + ' MB' : ''}</span>
                            </div>
                            
                            {/* Actions */}
                            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
                              <label className="cursor-pointer p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition" title="Replace File">
                                <Upload className="h-4 w-4" />
                                <input type="file" className="hidden" onChange={(e) => handleUpdateItemFile(e, item.id)} />
                              </label>
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
                              {/* Save to Pinned Batch Button */}
                              <button
                                onClick={() => setCopyTargetItem(item)}
                                className="p-2 text-primary-500 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition"
                                title="Save to Pinned Batch (Template Library)"
                              >
                                <Pin className="h-4 w-4" />
                              </button>
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

      {/* Save to Pinned Batch Modal */}
      {copyTargetItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Save to Pinned Batch</h2>
              <button onClick={() => setCopyTargetItem(null)} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Select a pinned batch to save <strong>{copyTargetItem.name}</strong> as a reusable template.
            </p>

            <div className="space-y-2 max-h-60 overflow-y-auto border border-gray-200 rounded-lg p-2 mb-6">
              {batches.filter(b => b.batch_name.startsWith('📌 ')).length === 0 ? (
                <div className="p-4 text-center text-gray-500 text-sm">
                  No pinned batches found. Pin a batch first to use it as a template library.
                </div>
              ) : (
                batches.filter(b => b.batch_name.startsWith('📌 ')).map(b => (
                  <button
                    key={b.id}
                    onClick={() => handleCopyToPinnedBatch(b.id)}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition border border-transparent hover:border-primary-100 flex items-center justify-between group"
                  >
                    <span className="font-medium truncate">{b.batch_name}</span>
                    <Pin className="h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                ))
              )}
            </div>
            
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setCopyTargetItem(null)}
                className="flex-1 px-4 py-2 border border-gray-200 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ArtworkBatchesPage
