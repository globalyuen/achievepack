import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  Lock, ChevronLeft, ChevronRight, RefreshCw, ZoomIn, ZoomOut, Download, 
  Search, LayoutGrid, X, FileText, Image as ImageIcon, Grid, List, 
  Info, Tag, Paintbrush, ArrowRight, Eye, Grid3X3, Maximize2, Sparkles
} from 'lucide-react'
import { supabase, ArtworkBatch, ArtworkBatchItem } from '../lib/supabase'

const formatFileSize = (bytes?: number) => {
  if (!bytes) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  if (i < 0 || isNaN(i)) return '0 B'
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
}

const translateSectionName = (name: string): string => {
  const mapping: Record<string, string> = {
    'Front': 'Front / 正面',
    'Back': 'Back / 背面',
    'Gusset': 'Gusset / 侧面-底面',
    'Bottom': 'Bottom / 底部',
    'Uncategorized': 'Uncategorized / 未分类',
    'Front Panel': 'Front Panel / 正面',
    'Back Panel': 'Back Panel / 背面',
    'Bottom Gusset': 'Bottom Gusset / 底部风琴',
    'Side Gusset': 'Side Gusset / 侧部风琴',
    'Layout': 'Layout / 版面图',
    'Dieline': 'Dieline / 刀线图',
    'Reference': 'Reference / 参考图',
    'Artwork': 'Artwork / 设计图稿',
  }
  return mapping[name] || name
}

const ArtworkGalleryPage: React.FC = () => {
  const { batchId } = useParams<{ batchId: string }>()
  
  // Auth state
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  
  // Data state
  const [batch, setBatch] = useState<ArtworkBatch | null>(null)
  const [items, setItems] = useState<ArtworkBatchItem[]>([])
  const [sectionOrder, setSectionOrder] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSection, setSelectedSection] = useState<string>('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [gridSize, setGridSize] = useState<'cozy' | 'compact'>('cozy')
  
  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [zoomScale, setZoomScale] = useState(1)
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  // Check if batch is already unlocked in this session
  useEffect(() => {
    if (batchId) {
      const isUnlocked = sessionStorage.getItem(`ap_gallery_unlocked_${batchId}`)
      if (isUnlocked === 'true') {
        setAuthenticated(true)
      }
    }
  }, [batchId])

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
      
      const systemItem = itemsData?.find(i => i.name === '__section_order__')
      const normalItems = itemsData?.filter(i => i.name !== '__section_order__') || []
      
      setSectionOrder(systemItem?.ai_analysis?.section_order || [])
      
      // Filter out items in old zone (hidden from customer)
      const visibleItems = normalItems.filter(item => {
        const zone = item.ai_analysis?.zone || 'current';
        return zone === 'current';
      });
      
      setItems(visibleItems)
    } catch (err) {
      console.error('Error fetching batch gallery data:', err)
    } finally {
      setLoading(false)
    }
  }, [batchId])

  useEffect(() => {
    if (batchId) {
      fetchBatchData()
    }
  }, [batchId, fetchBatchData])

  // Verify password
  const handleVerifyPassword = () => {
    if (!password.trim() || !batch) return
    
    // Can be unlocked by either customer password or supplier password
    if (password.trim() === batch.password || (batch.supplier_password && password.trim() === batch.supplier_password)) {
      setAuthenticated(true)
      sessionStorage.setItem(`ap_gallery_unlocked_${batchId}`, 'true')
      setPasswordError('')
    } else {
      setPasswordError('Incorrect password. Please check and try again.')
    }
  }

  // Filter items based on search and selected section
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const nameMatch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (item.ai_analysis?.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (item.ai_analysis?.description || '').toLowerCase().includes(searchQuery.toLowerCase())
      
      const section = item.ai_analysis?.section_name || 'Uncategorized'
      const sectionMatch = selectedSection === 'All' || section === selectedSection
      
      return nameMatch && sectionMatch
    })
  }, [items, searchQuery, selectedSection])

  // Extract all unique sections
  const sections = useMemo(() => {
    const set = new Set<string>()
    items.forEach(item => {
      set.add(item.ai_analysis?.section_name || 'Uncategorized')
    })
    
    const arr = Array.from(set)
    if (sectionOrder && sectionOrder.length > 0) {
      arr.sort((a, b) => {
        const idxA = sectionOrder.indexOf(a)
        const idxB = sectionOrder.indexOf(b)
        if (idxA === -1 && idxB === -1) return 0
        if (idxA === -1) return 1
        if (idxB === -1) return -1
        return idxA - idxB
      })
    }
    return ['All', ...arr]
  }, [items, sectionOrder])

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next')
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev')
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, filteredItems])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setZoomScale(1)
    setPanOffset({ x: 0, y: 0 })
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    setZoomScale(1)
    setPanOffset({ x: 0, y: 0 })
  }

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (lightboxIndex === null || filteredItems.length === 0) return
    
    let newIndex = lightboxIndex
    if (direction === 'next') {
      newIndex = (lightboxIndex + 1) % filteredItems.length
    } else {
      newIndex = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
    }
    
    setLightboxIndex(newIndex)
    setZoomScale(1)
    setPanOffset({ x: 0, y: 0 })
  }

  // Lightbox Zoom Helpers
  const handleZoomIn = () => setZoomScale(prev => Math.min(prev + 0.5, 4))
  const handleZoomOut = () => setZoomScale(prev => Math.max(prev - 0.5, 0.5))
  const handleZoomReset = () => {
    setZoomScale(1)
    setPanOffset({ x: 0, y: 0 })
  }

  // Mouse drag panning logic
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomScale <= 1) return
    setIsDragging(true)
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-200">
        <RefreshCw className="h-10 w-10 animate-spin text-purple-500 mb-4" />
        <p className="text-slate-400 font-medium">Loading premium artwork gallery...</p>
      </div>
    )
  }

  if (!batch) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-8 text-center shadow-2xl">
          <X className="h-12 w-12 text-rose-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-100">Gallery Not Found</h1>
          <p className="text-slate-400 mt-2">The shared artwork collection you are looking for does not exist or has been removed.</p>
        </div>
      </div>
    )
  }

  // Password Gate UI
  if (!authenticated && (batch.password || batch.supplier_password)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500"></div>
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/25 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/5">
              <Lock className="h-8 w-8 text-purple-400 animate-pulse" />
            </div>
            <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Protected Artwork Gallery</h1>
            <p className="text-slate-400 text-sm mt-2">Enter the access passcode to view the collection:</p>
            <p className="text-purple-400 text-xs font-semibold mt-1 bg-purple-500/5 border border-purple-500/10 rounded-full px-3 py-1 inline-block">
              {batch.batch_name}
            </p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Access Passcode</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setPasswordError('')
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleVerifyPassword()}
                placeholder="Enter passcode..."
                className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200"
              />
              {passwordError && (
                <p className="text-xs text-rose-500 mt-2 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-rose-500 rounded-full inline-block"></span>
                  {passwordError}
                </p>
              )}
            </div>
            
            <button
              onClick={handleVerifyPassword}
              disabled={!password.trim()}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg shadow-purple-900/20 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none"
            >
              Unlock Gallery
            </button>
          </div>
          
          <div className="mt-8 text-center border-t border-slate-800/80 pt-6">
            <p className="text-xs text-slate-500">
              Need assistance? Contact your AchievePack account manager.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const selectedLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Top Header */}
      <header className="bg-slate-900/60 backdrop-blur-md border-b border-slate-800/60 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/ap-logo.svg" alt="AchievePack" className="h-8 w-auto filter brightness-200" />
            <div className="h-6 w-px bg-slate-800 hidden sm:block"></div>
            <div>
              <h1 className="font-bold text-slate-100 tracking-tight flex items-center gap-2">
                <span>{batch.batch_name}</span>
                <span className="text-xs px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full font-semibold">
                  Gallery Showcase
                </span>
              </h1>
              <p className="text-xs text-slate-400 hidden sm:block">
                View & download production ready files • {items.length} files total
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 hidden md:block">
              Clean Visual View (No Checklist)
            </span>
            <Link
              to={`/artwork-review/${batchId}`}
              className="flex items-center gap-1 px-4 py-2 border border-slate-700 bg-slate-800/40 hover:bg-slate-800 text-slate-200 hover:text-white rounded-xl text-sm font-semibold transition-all duration-200"
            >
              <Eye className="h-4 w-4 text-purple-400" />
              <span>Approval View</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Gallery Intro Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-900/30 via-slate-900 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-8 shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-pink-500/5 rounded-full filter blur-2xl pointer-events-none -ml-20 -mb-20"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2.5 py-1 rounded-md">Shared Portfolio</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-3 tracking-tight">Artwork & Die-line Presentation</h2>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Welcome to your visual presentation portal. You can view, search, zoom into details, and download the absolute highest resolution source files for review below.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 bg-slate-950/40 border border-slate-800/80 p-2 rounded-2xl">
              <div className="text-center px-4 py-2 border-r border-slate-800/80">
                <span className="block text-xs text-slate-500 uppercase tracking-wider font-semibold">Total Files</span>
                <span className="text-lg font-bold text-slate-200">{items.length}</span>
              </div>
              <div className="text-center px-4 py-2">
                <span className="block text-xs text-slate-500 uppercase tracking-wider font-semibold">Active Sections</span>
                <span className="text-lg font-bold text-purple-400">{sections.length - 1}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-4 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between shadow-md">
          {/* Search Box */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by file name or details..."
              className="w-full pl-10 pr-4 py-2 bg-slate-950/60 border border-slate-850 rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-500 transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-0.5 rounded-full hover:bg-slate-800"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* Section Selector */}
          <div className="flex flex-wrap gap-1.5 items-center max-w-full overflow-x-auto py-1">
            {sections.map(sec => (
              <button
                key={sec}
                onClick={() => setSelectedSection(sec)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedSection === sec
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-900/10'
                    : 'bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                {sec === 'All' ? 'All Sections' : translateSectionName(sec)}
              </button>
            ))}
          </div>

          {/* View Toggles */}
          <div className="flex items-center gap-4 border-l border-slate-800/80 pl-4 hidden md:flex">
            {viewMode === 'grid' && (
              <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 border border-slate-850 rounded-lg">
                <button
                  onClick={() => setGridSize('cozy')}
                  className={`p-1.5 rounded-md transition ${gridSize === 'cozy' ? 'bg-slate-800 text-purple-400' : 'text-slate-500 hover:text-slate-400'}`}
                  title="Cozy Grid"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setGridSize('compact')}
                  className={`p-1.5 rounded-md transition ${gridSize === 'compact' ? 'bg-slate-800 text-purple-400' : 'text-slate-500 hover:text-slate-400'}`}
                  title="Compact Grid"
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
              </div>
            )}
            <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 border border-slate-850 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition ${viewMode === 'grid' ? 'bg-slate-800 text-purple-400' : 'text-slate-500 hover:text-slate-405'}`}
                title="Grid Layout"
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md transition ${viewMode === 'list' ? 'bg-slate-800 text-purple-400' : 'text-slate-500 hover:text-slate-405'}`}
                title="List Layout"
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Content */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/10 border border-dashed border-slate-800/80 rounded-3xl">
            <ImageIcon className="h-12 w-12 text-slate-700 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-400">No matching artworks found</h3>
            <p className="text-slate-500 text-sm mt-1">Try adjusting your search query or section filters.</p>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View Layout */
          <div className={`grid gap-6 ${
            gridSize === 'cozy' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
          }`}>
            {filteredItems.map((item, index) => {
              const isImage = /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(item.file_url) || /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(item.name)
              const isVideo = /\.(mp4|mov|webm|ogg|m4v)$/i.test(item.file_url) || /\.(mp4|mov|webm|ogg|m4v)$/i.test(item.name)
              const section = item.ai_analysis?.section_name || 'Uncategorized'
              
              return (
                <div
                  key={item.id}
                  className="group bg-slate-900 border border-slate-850 hover:border-slate-750 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Visual Content Block */}
                  <div className="relative aspect-[4/3] bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-950">
                    {item.file_url ? (
                      isImage ? (
                        <img
                          src={item.file_url}
                          alt={item.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-505"
                          loading="lazy"
                        />
                      ) : isVideo ? (
                        <video
                          src={item.file_url}
                          preload="metadata"
                          muted
                          playsInline
                          className="w-full h-full object-contain bg-black group-hover:scale-105 transition-transform duration-505 pointer-events-none"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center p-6 text-center">
                          <FileText className="h-14 w-14 text-slate-700 mb-3" />
                          <span className="text-xs font-semibold px-2.5 py-1 bg-slate-800 text-slate-400 rounded-md border border-slate-750">
                            {item.file_url.split('.').pop()?.toUpperCase() || 'DOCUMENT'}
                          </span>
                        </div>
                      )
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center p-6">
                        <ImageIcon className="h-10 w-10 text-slate-800 mb-2" />
                        <span className="text-xs text-slate-600 font-semibold uppercase">Blank Space</span>
                      </div>
                    )}
                    
                    {/* Hover Overlay Actions */}
                    {item.file_url && (
                      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                        <button
                          onClick={() => openLightbox(index)}
                          className="p-3 bg-purple-650 hover:bg-purple-600 text-white rounded-xl hover:scale-110 active:scale-95 transition shadow-lg shadow-purple-950/40"
                          title="Open Zoom Lightbox"
                        >
                          <Maximize2 className="h-5 w-5" />
                        </button>
                        <a
                          href={item.file_url}
                          download={item.name}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl hover:scale-110 active:scale-95 transition shadow-lg"
                          title="Download Original File"
                        >
                          <Download className="h-5 w-5" />
                        </a>
                      </div>
                    )}
                  </div>
                  
                  {/* Info Block */}
                  <div className="p-4 flex-1 flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-800 px-2 py-0.5 rounded border border-slate-800">
                          {section}
                        </span>
                        {item.file_size && (
                          <span className="text-[10px] font-semibold text-slate-500">
                            {formatFileSize(item.file_size)}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="font-bold text-slate-200 text-sm group-hover:text-purple-400 transition truncate" title={item.name}>
                        {item.ai_analysis?.title || item.name}
                      </h3>
                      
                      {item.ai_analysis?.description && (
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                          {item.ai_analysis.description}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-850 pt-3 mt-auto">
                      <button
                        onClick={() => openLightbox(index)}
                        className="text-xs font-bold text-purple-400 hover:text-purple-350 flex items-center gap-1 transition"
                      >
                        <span>Details & View</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                      
                      {item.status && (
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                          item.status === 'approved' ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' :
                          item.status === 'rejected' ? 'bg-rose-500/10 border border-rose-500/20 text-rose-400' :
                          'bg-slate-800 border border-slate-750 text-slate-400'
                        }`}>
                          {item.status === 'approved' ? 'approved' : item.status === 'rejected' ? 'revision req' : 'pending review'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          /* List View Layout */
          <div className="bg-slate-900 border border-slate-850 rounded-2xl overflow-hidden divide-y divide-slate-850 shadow-lg">
            {filteredItems.map((item, index) => {
              const section = item.ai_analysis?.section_name || 'Uncategorized'
              const isImage = /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(item.file_url) || /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(item.name)
              const isVideo = /\.(mp4|mov|webm|ogg|m4v)$/i.test(item.file_url) || /\.(mp4|mov|webm|ogg|m4v)$/i.test(item.name)
              
              return (
                <div 
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 hover:bg-slate-850/40 transition duration-150"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div 
                      onClick={() => item.file_url && openLightbox(index)}
                      className="w-16 h-12 bg-slate-950 border border-slate-850 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 cursor-pointer hover:border-purple-500/50 transition"
                    >
                      {item.file_url ? (
                        isImage ? (
                          <img src={item.file_url} alt={item.name} className="w-full h-full object-contain" />
                        ) : isVideo ? (
                          <video src={item.file_url} preload="metadata" muted playsInline className="w-full h-full object-contain bg-black" />
                        ) : (
                          <FileText className="h-5 w-5 text-slate-500" />
                        )
                      ) : (
                        <ImageIcon className="h-5 w-5 text-slate-700" />
                      )}
                    </div>
                    
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-bold text-slate-200 text-sm truncate max-w-md">{item.ai_analysis?.title || item.name}</h4>
                        <span className="text-[9px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-800">
                          {section}
                        </span>
                      </div>
                      <p className="text-xs text-slate-550 truncate max-w-xl mt-0.5">{item.ai_analysis?.description || item.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 justify-between sm:justify-end w-full sm:w-auto">
                    <div className="text-right hidden md:block">
                      <span className="block text-xs font-semibold text-slate-350">{formatFileSize(item.file_size)}</span>
                      <span className="text-[10px] text-slate-500 uppercase">{item.file_url?.split('.').pop() || 'File'}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openLightbox(index)}
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg border border-slate-750 transition"
                      >
                        View Gallery
                      </button>
                      {item.file_url && (
                        <a
                          href={item.file_url}
                          download={item.name}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-purple-650/10 hover:bg-purple-650/20 text-purple-400 border border-purple-500/20 hover:border-purple-500/30 rounded-lg transition"
                          title="Download"
                        >
                          <Download className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>

      {/* Lightbox / Slideshow Modal */}
      {lightboxIndex !== null && selectedLightboxItem && (
        <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col md:flex-row overflow-hidden animate-fade-in">
          {/* Main Visual Screen */}
          <div className="flex-1 flex flex-col justify-between relative bg-slate-950 min-h-0">
            {/* Lightbox Header Bar */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-950/80 to-transparent p-4 flex items-center justify-between z-10">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded-xl">
                File {lightboxIndex + 1} of {filteredItems.length}
              </span>
              
              {/* Zoom Panel */}
              {/\.(png|jpg|jpeg|gif|webp)$/i.test(selectedLightboxItem.file_url) && (
                <div className="flex items-center gap-1 bg-slate-900/80 border border-slate-800 p-1 rounded-xl shadow-lg">
                  <button 
                    onClick={handleZoomOut} 
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-850 transition"
                    title="Zoom Out"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </button>
                  <span className="text-xs font-semibold text-slate-350 px-2 min-w-[3rem] text-center">
                    {Math.round(zoomScale * 100)}%
                  </span>
                  <button 
                    onClick={handleZoomIn} 
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-850 transition"
                    title="Zoom In"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>
                  {zoomScale !== 1 && (
                    <button 
                      onClick={handleZoomReset} 
                      className="text-[10px] font-bold text-purple-400 hover:text-purple-300 px-2 border-l border-slate-800"
                    >
                      Reset
                    </button>
                  )}
                </div>
              )}

              {/* Close Button Mobile */}
              <button
                onClick={closeLightbox}
                className="p-2 bg-slate-900/80 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition md:hidden"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main File Canvas */}
            <div 
              className={`flex-1 flex items-center justify-center p-8 select-none ${
                zoomScale > 1 ? 'cursor-grab active:cursor-grabbing' : ''
              }`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {selectedLightboxItem.file_url ? (
                /\.(png|jpg|jpeg|gif|webp|tiff|tif)$/i.test(selectedLightboxItem.file_url) ? (
                  <img
                    src={selectedLightboxItem.file_url}
                    alt={selectedLightboxItem.name}
                    className="max-h-full max-w-full object-contain pointer-events-none select-none transition-transform duration-200 ease-out"
                    style={{
                      transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomScale})`,
                    }}
                  />
                ) : /\.(mp4|mov|webm|ogg|m4v)$/i.test(selectedLightboxItem.file_url) ? (
                  <video
                    src={selectedLightboxItem.file_url}
                    controls
                    autoPlay
                    className="max-h-full max-w-full object-contain bg-black rounded-xl"
                  />
                ) : (
                  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center max-w-md shadow-2xl animate-scale-up">
                    <FileText className="h-20 w-20 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-200 truncate">{selectedLightboxItem.name}</h3>
                    <p className="text-slate-400 text-sm mt-2">This is a PDF/vector production file that cannot be rendered inline in a slideshow.</p>
                    <a
                      href={selectedLightboxItem.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-purple-650 hover:bg-purple-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-900/30 transition active:scale-[0.98]"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download Original File</span>
                    </a>
                  </div>
                )
              ) : (
                <div className="text-center bg-slate-900/30 border border-dashed border-slate-800 rounded-3xl p-12 max-w-md">
                  <ImageIcon className="h-16 w-16 text-slate-800 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-450">No Attachment Available</h3>
                  <p className="text-slate-500 text-xs mt-1">This slot represents an artwork configuration with no proof file attached yet.</p>
                </div>
              )}
            </div>

            {/* Slider Navigation Controls */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={() => navigateLightbox('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-slate-900/80 hover:bg-slate-900 text-slate-400 hover:text-white rounded-2xl border border-slate-800 hover:border-slate-700 transition shadow-xl"
                  title="Previous (Left Arrow)"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => navigateLightbox('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-slate-900/80 hover:bg-slate-900 text-slate-400 hover:text-white rounded-2xl border border-slate-800 hover:border-slate-700 transition shadow-xl"
                  title="Next (Right Arrow)"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {/* Visual Instructions */}
            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
              <span className="text-[10px] text-slate-500 bg-slate-950/80 border border-slate-900 px-3 py-1.5 rounded-full inline-block">
                Use Left / Right arrow keys to navigate • Esc to exit
              </span>
            </div>
          </div>

          {/* Details Sidebar Panel (Right Side) */}
          <div className="w-full md:w-[24rem] bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800 flex flex-col justify-between overflow-y-auto">
            {/* Header info */}
            <div className="p-6 border-b border-slate-850 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded">
                  {selectedLightboxItem.ai_analysis?.section_name || 'Uncategorized'}
                </span>
                <h2 className="text-lg font-bold text-slate-100 mt-2 truncate max-w-[16rem]" title={selectedLightboxItem.name}>
                  {selectedLightboxItem.ai_analysis?.title || selectedLightboxItem.name}
                </h2>
                <p className="text-xs text-slate-500 break-all mt-1" title={selectedLightboxItem.name}>
                  Filename: {selectedLightboxItem.name}
                </p>
              </div>
              
              <button
                onClick={closeLightbox}
                className="p-2 bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 rounded-xl transition hidden md:block"
                title="Close Slideshow"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Middle detailed metadata contents */}
            <div className="p-6 space-y-6 flex-1">
              
              {/* File Specs Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Info className="h-3.5 w-3.5 text-purple-400" />
                  <span>File Specifications</span>
                </h4>
                
                <div className="grid grid-cols-2 gap-3 bg-slate-950/40 border border-slate-800/80 p-3 rounded-xl">
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase">Format</span>
                    <span className="text-xs font-bold text-slate-350">
                      {selectedLightboxItem.name.split('.').pop()?.toUpperCase() || 'N/A'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase">Dimensions</span>
                    <span className="text-xs font-bold text-slate-350">
                      {selectedLightboxItem.ai_analysis?.category || 'Not Analyzed'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase">Size</span>
                    <span className="text-xs font-bold text-slate-350">
                      {formatFileSize(selectedLightboxItem.file_size)}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase">Status</span>
                    <span className={`text-[10px] font-bold uppercase inline-block ${
                      selectedLightboxItem.status === 'approved' ? 'text-emerald-400' :
                      selectedLightboxItem.status === 'rejected' ? 'text-rose-400' : 'text-slate-400'
                    }`}>
                      {selectedLightboxItem.status || 'Pending'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Color Scheme */}
              {selectedLightboxItem.ai_analysis?.colors && selectedLightboxItem.ai_analysis.colors.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Paintbrush className="h-3.5 w-3.5 text-purple-400" />
                    <span>Colors Detected</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLightboxItem.ai_analysis.colors.map(col => (
                      <span
                        key={col}
                        className="text-xs bg-slate-950/60 border border-slate-800/80 px-2.5 py-1 rounded-xl text-slate-300 flex items-center gap-2"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600" style={{ backgroundColor: col.toLowerCase() }}></span>
                        <span>{col}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Keywords / Content tags */}
              {selectedLightboxItem.ai_analysis?.keywords && selectedLightboxItem.ai_analysis.keywords.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Tag className="h-3.5 w-3.5 text-purple-400" />
                    <span>Keywords & Elements</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedLightboxItem.ai_analysis.keywords.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] bg-slate-950/40 text-slate-400 border border-slate-850 px-2 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Description / Suggestions */}
              {selectedLightboxItem.ai_analysis?.description && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-purple-400 animate-pulse" />
                    <span>AI Description</span>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed bg-slate-950/20 border border-slate-850/60 p-3 rounded-xl">
                    {selectedLightboxItem.ai_analysis.description}
                  </p>
                </div>
              )}

            </div>

            {/* Bottom Call-To-Action (Download original) */}
            {selectedLightboxItem.file_url && (
              <div className="p-6 border-t border-slate-850 bg-slate-950/30">
                <a
                  href={selectedLightboxItem.file_url}
                  download={selectedLightboxItem.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-purple-600 to-pink-650 hover:from-purple-500 hover:to-pink-550 text-white font-bold rounded-xl shadow-lg active:scale-[0.98] transition-all duration-150"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Original Source</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ArtworkGalleryPage
