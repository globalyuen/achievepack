import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Search, Grid3X3, List, Folder, ArrowLeft, Copy, Check, ExternalLink, 
  Save, Download, X, Sparkles, Tag, Code, LogOut, Cloud, CloudOff, 
  Clock, Edit3, Plus, Trash2, Eye, Filter, RefreshCw
} from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { supabase, ArtworkFile } from '../lib/supabase'
import { ArtworkAIAnalysis, getAISearchableText } from '../lib/artworkAnalysis'

const ADMIN_EMAIL = 'ryan@achievepack.com'

interface ArtworkWithAnalysis extends ArtworkFile {
  ai_analysis?: ArtworkAIAnalysis | null
  customer_name?: string
  customer_email?: string
}

export default function ArtworkHubPage() {
  const navigate = useNavigate()
  const { user, signOut, loading: authLoading } = useAuth()
  const [artworks, setArtworks] = useState<ArtworkWithAnalysis[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
  const [copiedPath, setCopiedPath] = useState<string | null>(null)
  const [copiedJson, setCopiedJson] = useState<string | null>(null)
  const [previewArtwork, setPreviewArtwork] = useState<ArtworkWithAnalysis | null>(null)
  const [editingArtwork, setEditingArtwork] = useState<ArtworkWithAnalysis | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState<string | null>(null)
  const [showOnlyNoJson, setShowOnlyNoJson] = useState(false)
  const [sortByNewest, setSortByNewest] = useState(true)
  
  // Edit form state
  const [editForm, setEditForm] = useState<ArtworkAIAnalysis>({
    title: '',
    description: '',
    alt: '',
    keywords: [],
    category: '',
    type: '',
    colors: [],
    content_detected: [],
    quality_score: '',
    recommendations: []
  })
  const [keywordsInput, setKeywordsInput] = useState('')
  const [colorsInput, setColorsInput] = useState('')
  const [contentInput, setContentInput] = useState('')
  const [recommendationsInput, setRecommendationsInput] = useState('')

  // Check if user is admin
  useEffect(() => {
    if (!authLoading && (!user || user.email !== ADMIN_EMAIL)) {
      navigate('/login')
    }
  }, [user, authLoading, navigate])

  // Fetch artworks
  useEffect(() => {
    if (user?.email === ADMIN_EMAIL) {
      fetchArtworks()
    }
  }, [user])

  const fetchArtworks = async () => {
    setLoading(true)
    try {
      // Fetch artworks
      const { data: artworkData, error } = await supabase
        .from('artwork_files')
        .select('*')
        .is('deleted_at', null)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      
      // Fetch customer info
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, full_name, email')
      
      // Merge customer info
      const enrichedArtworks = (artworkData || []).map(artwork => {
        const customer = profiles?.find(p => p.id === artwork.user_id)
        return {
          ...artwork,
          customer_name: customer?.full_name,
          customer_email: customer?.email || artwork.customer_email
        }
      })
      
      setArtworks(enrichedArtworks)
    } catch (error) {
      console.error('Error fetching artworks:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  // Build categories from AI analysis
  const getCategories = () => {
    const catMap: Record<string, ArtworkWithAnalysis[]> = {}
    
    artworks.forEach(artwork => {
      const category = artwork.ai_analysis?.category || 'uncategorized'
      if (!catMap[category]) {
        catMap[category] = []
      }
      catMap[category].push(artwork)
    })
    
    return catMap
  }

  const categories = getCategories()

  // Filter artworks
  const getFilteredArtworks = () => {
    let filtered = [...artworks]
    
    // Sort
    if (sortByNewest) {
      filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    } else {
      filtered.sort((a, b) => (a.name || '').localeCompare(b.name || ''))
    }
    
    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(artwork => {
        const aiText = getAISearchableText(artwork.ai_analysis)
        return (
          artwork.name?.toLowerCase().includes(query) ||
          artwork.artwork_code?.toLowerCase().includes(query) ||
          artwork.customer_name?.toLowerCase().includes(query) ||
          artwork.customer_email?.toLowerCase().includes(query) ||
          aiText.includes(query)
        )
      })
    }
    
    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(artwork => 
        (artwork.ai_analysis?.category || 'uncategorized') === selectedCategory
      )
    }
    
    // No JSON filter
    if (showOnlyNoJson) {
      filtered = filtered.filter(artwork => !artwork.ai_analysis)
    }
    
    return filtered
  }

  const filteredArtworks = getFilteredArtworks()
  const countWithJson = artworks.filter(a => a.ai_analysis).length
  const countWithoutJson = artworks.length - countWithJson

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedPath(text)
    setTimeout(() => setCopiedPath(null), 2000)
  }

  const copyJsonToClipboard = (artwork: ArtworkWithAnalysis) => {
    if (artwork.ai_analysis) {
      const jsonData = JSON.stringify({
        artwork_id: artwork.id,
        name: artwork.name,
        file_url: artwork.file_url,
        ...artwork.ai_analysis
      }, null, 2)
      navigator.clipboard.writeText(jsonData)
      setCopiedJson(artwork.id)
      setTimeout(() => setCopiedJson(null), 2000)
    }
  }

  // Open edit modal
  const openEditModal = (artwork: ArtworkWithAnalysis) => {
    setEditingArtwork(artwork)
    const analysis = artwork.ai_analysis || {}
    setEditForm({
      title: analysis.title || '',
      description: analysis.description || '',
      alt: analysis.alt || '',
      keywords: analysis.keywords || [],
      category: analysis.category || '',
      type: analysis.type || '',
      colors: analysis.colors || [],
      content_detected: analysis.content_detected || [],
      quality_score: analysis.quality_score || '',
      recommendations: analysis.recommendations || []
    })
    setKeywordsInput((analysis.keywords || []).join(', '))
    setColorsInput((analysis.colors || []).join(', '))
    setContentInput((analysis.content_detected || []).join(', '))
    setRecommendationsInput((analysis.recommendations || []).join('\n'))
  }

  // Save JSON metadata
  const saveJsonMetadata = async () => {
    if (!editingArtwork) return
    
    setIsSaving(true)
    setSaveMessage('Saving...')
    
    try {
      // Parse array inputs
      const keywords = keywordsInput.split(',').map(k => k.trim()).filter(k => k)
      const colors = colorsInput.split(',').map(c => c.trim()).filter(c => c)
      const content_detected = contentInput.split(',').map(c => c.trim()).filter(c => c)
      const recommendations = recommendationsInput.split('\n').map(r => r.trim()).filter(r => r)
      
      const analysis: ArtworkAIAnalysis = {
        ...editForm,
        keywords,
        colors,
        content_detected,
        recommendations,
        analyzed_at: new Date().toISOString()
      }
      
      const { error } = await supabase
        .from('artwork_files')
        .update({
          ai_analysis: analysis,
          updated_at: new Date().toISOString()
        })
        .eq('id', editingArtwork.id)
      
      if (error) throw error
      
      // Update local state
      setArtworks(prev => prev.map(a => 
        a.id === editingArtwork.id ? { ...a, ai_analysis: analysis } : a
      ))
      
      setSaveMessage('Saved!')
      setTimeout(() => {
        setEditingArtwork(null)
        setSaveMessage(null)
      }, 1000)
    } catch (error: any) {
      console.error('Save error:', error)
      setSaveMessage('Error: ' + error.message)
    } finally {
      setIsSaving(false)
    }
  }

  // Export all as JSON
  const exportAllAsJson = () => {
    const exportData = {
      generated: new Date().toISOString(),
      total_artworks: artworks.length,
      artworks_with_json: countWithJson,
      artworks: artworks.map(artwork => ({
        id: artwork.id,
        name: artwork.name,
        file_url: artwork.file_url,
        artwork_code: artwork.artwork_code,
        customer_name: artwork.customer_name,
        customer_email: artwork.customer_email,
        status: artwork.status,
        created_at: artwork.created_at,
        ai_analysis: artwork.ai_analysis || null
      }))
    }
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `achievepack-artwork-catalog-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  // Loading state
  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin text-primary-500 mx-auto mb-2" />
          <p className="text-neutral-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Auth check
  if (!user || user.email !== ADMIN_EMAIL) {
    return null
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-4">
              <Link to="/ctrl-x9k7m" className="text-neutral-500 hover:text-neutral-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  Artwork Hub
                </h1>
                <p className="text-sm text-neutral-500">
                  {artworks.length} artworks · <span className="text-purple-600">{countWithJson} with JSON</span> · <span className="text-orange-600">{countWithoutJson} missing</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
              {/* Search */}
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search artworks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-700 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 w-full sm:w-48"
                />
              </div>
              
              {/* Filter no JSON */}
              <button
                onClick={() => setShowOnlyNoJson(!showOnlyNoJson)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  showOnlyNoJson ? 'bg-orange-100 text-orange-700 border border-orange-300' : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                }`}
              >
                {showOnlyNoJson ? 'Show All' : 'No JSON'}
              </button>

              {/* Sort toggle */}
              <button
                onClick={() => setSortByNewest(!sortByNewest)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition flex items-center gap-1 ${
                  sortByNewest ? 'bg-blue-100 text-blue-700 border border-blue-300' : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                }`}
              >
                <Clock className="h-4 w-4" />
                {sortByNewest ? 'Newest' : 'A-Z'}
              </button>

              {/* View Toggle */}
              <div className="flex border border-neutral-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition ${viewMode === 'grid' ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-600 hover:bg-neutral-50'}`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition ${viewMode === 'list' ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-600 hover:bg-neutral-50'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              {/* Refresh */}
              <button
                onClick={fetchArtworks}
                className="px-3 py-2 rounded-lg bg-neutral-100 text-neutral-600 text-sm font-medium hover:bg-neutral-200 transition flex items-center gap-1"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh
              </button>

              {/* Export */}
              <button
                onClick={exportAllAsJson}
                className="px-3 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition flex items-center gap-1"
              >
                <Download className="h-4 w-4" />
                Export JSON
              </button>

              {/* Sign Out */}
              <button
                onClick={handleSignOut}
                className="px-3 py-2 rounded-lg bg-red-100 text-red-700 text-sm font-medium hover:bg-red-200 transition flex items-center gap-1"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Categories */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl border border-neutral-200 p-4 lg:sticky lg:top-24">
              <h2 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                <Folder className="h-4 w-4" />
                Categories
              </h2>
              <ul className="space-y-1 max-h-[40vh] lg:max-h-[70vh] overflow-y-auto">
                <li>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                      !selectedCategory && !searchQuery ? 'bg-primary-50 text-primary-700 font-medium' : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    All ({artworks.length})
                  </button>
                </li>
                {Object.entries(categories)
                  .sort(([a], [b]) => a === 'uncategorized' ? 1 : b === 'uncategorized' ? -1 : a.localeCompare(b))
                  .map(([cat, items]) => (
                    <li key={cat}>
                      <button
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition flex items-center justify-between ${
                          selectedCategory === cat ? 'bg-primary-50 text-primary-700 font-medium' : 'text-neutral-600 hover:bg-neutral-50'
                        }`}
                      >
                        <span className="truncate capitalize">{cat}</span>
                        <span className="text-xs ml-2 text-neutral-400">{items.length}</span>
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-neutral-900">
                {searchQuery ? `Search: "${searchQuery}"` : selectedCategory || 'All Artworks'}
                <span className="text-neutral-400 font-normal ml-2">({filteredArtworks.length})</span>
              </h2>
            </div>

            {/* List View */}
            {viewMode === 'list' ? (
              <div className="space-y-3">
                {filteredArtworks.map((artwork) => (
                  <div key={artwork.id} className="bg-white rounded-lg border border-neutral-200 p-3 sm:p-4 flex gap-3 sm:gap-4">
                    {/* Thumbnail */}
                    <button
                      onClick={() => setPreviewArtwork(artwork)}
                      className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 bg-neutral-100 rounded-lg overflow-hidden relative group"
                    >
                      {/\.(png|jpg|jpeg|gif|webp)$/i.test(artwork.file_url || '') ? (
                        <img src={artwork.file_url} alt={artwork.name} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-400">
                          <Tag className="h-6 w-6" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Eye className="h-5 w-5 text-white" />
                      </div>
                    </button>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <p className="text-sm font-medium text-neutral-900 truncate">{artwork.name}</p>
                          <p className="text-xs text-neutral-500">
                            {artwork.customer_name || artwork.customer_email || 'Unknown'} · {artwork.artwork_code || 'No code'}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          {/* Edit JSON */}
                          <button
                            onClick={() => openEditModal(artwork)}
                            className="p-1 text-blue-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                            title="Edit JSON"
                          >
                            <Edit3 className="h-4 w-4" />
                          </button>
                          {/* Copy JSON */}
                          {artwork.ai_analysis && (
                            <button
                              onClick={() => copyJsonToClipboard(artwork)}
                              className="p-1 text-purple-400 hover:text-purple-600"
                              title="Copy JSON"
                            >
                              {copiedJson === artwork.id ? <Check className="h-4 w-4 text-green-500" /> : <Code className="h-4 w-4" />}
                            </button>
                          )}
                          {/* Copy URL */}
                          <button
                            onClick={() => copyToClipboard(artwork.file_url || '')}
                            className="p-1 text-neutral-400 hover:text-neutral-600"
                            title="Copy URL"
                          >
                            {copiedPath === artwork.file_url ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      
                      {/* Date */}
                      <div className="text-xs text-neutral-400 mb-2 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {new Date(artwork.created_at).toLocaleDateString()}
                      </div>
                      
                      {/* AI Analysis Preview */}
                      {artwork.ai_analysis ? (
                        <div className="p-2 bg-purple-50 rounded-lg border border-purple-200">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium text-purple-700 flex items-center gap-1">
                              <Sparkles className="h-3 w-3" /> JSON Data
                            </span>
                            <span className="text-xs text-purple-600 capitalize">{artwork.ai_analysis.category}</span>
                          </div>
                          <p className="text-xs text-purple-800 font-medium">{artwork.ai_analysis.title}</p>
                          {artwork.ai_analysis.description && (
                            <p className="text-xs text-purple-600 mt-1 line-clamp-2">{artwork.ai_analysis.description}</p>
                          )}
                        </div>
                      ) : (
                        <div className="p-2 bg-orange-50 rounded-lg border border-orange-200">
                          <span className="text-xs text-orange-700">No JSON metadata - Click Edit to add</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Grid View */
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {filteredArtworks.map((artwork) => (
                  <div
                    key={artwork.id}
                    className="bg-white rounded-lg border border-neutral-200 overflow-hidden group hover:shadow-md transition"
                  >
                    <button
                      onClick={() => setPreviewArtwork(artwork)}
                      className="w-full aspect-square bg-neutral-100 relative"
                    >
                      {/\.(png|jpg|jpeg|gif|webp)$/i.test(artwork.file_url || '') ? (
                        <img src={artwork.file_url} alt={artwork.name} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-400">
                          <Tag className="h-8 w-8" />
                        </div>
                      )}
                      {artwork.ai_analysis && (
                        <div className="absolute top-2 left-2 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                          <Sparkles className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </button>
                    <div className="p-2 space-y-2">
                      <p className="text-xs text-neutral-700 truncate" title={artwork.name}>{artwork.name}</p>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => openEditModal(artwork)}
                          className="flex-1 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 text-xs flex items-center justify-center gap-1"
                          title="Edit JSON"
                        >
                          <Edit3 className="h-3 w-3" />
                          Edit
                        </button>
                        <button
                          onClick={() => copyToClipboard(artwork.file_url || '')}
                          className="py-1 px-2 rounded bg-neutral-100 text-neutral-600 hover:bg-neutral-200 text-xs"
                          title="Copy URL"
                        >
                          {copiedPath === artwork.file_url ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Preview Modal */}
      {previewArtwork && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setPreviewArtwork(null)}
        >
          <button 
            onClick={() => setPreviewArtwork(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-4xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
            {/\.(png|jpg|jpeg|gif|webp)$/i.test(previewArtwork.file_url || '') ? (
              <img src={previewArtwork.file_url} alt={previewArtwork.name} className="max-w-full max-h-[70vh] object-contain rounded-lg" />
            ) : (
              <div className="bg-white rounded-lg p-8 text-center">
                <Tag className="h-16 w-16 mx-auto text-neutral-400 mb-4" />
                <p className="text-neutral-600">Non-image file</p>
              </div>
            )}
            <div className="mt-4 bg-white rounded-lg p-4">
              <p className="text-sm font-medium text-neutral-900">{previewArtwork.name}</p>
              <p className="text-xs text-neutral-500 mt-1">{previewArtwork.customer_name || previewArtwork.customer_email}</p>
              <button
                onClick={() => {
                  setPreviewArtwork(null)
                  openEditModal(previewArtwork)
                }}
                className="mt-3 w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center justify-center gap-2"
              >
                <Edit3 className="h-4 w-4" />
                Edit JSON Metadata
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingArtwork && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setEditingArtwork(null)}
        >
          <div 
            className="bg-white rounded-xl shadow-xl w-full max-w-2xl my-8"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
                <Edit3 className="h-5 w-5 text-blue-600" />
                Edit JSON Metadata
              </h3>
              <button onClick={() => setEditingArtwork(null)} className="text-neutral-400 hover:text-neutral-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
              {/* Artwork Info */}
              <div className="bg-neutral-50 rounded-lg p-3">
                <p className="text-sm font-medium text-neutral-900">{editingArtwork.name}</p>
                <p className="text-xs text-neutral-500">{editingArtwork.customer_name || editingArtwork.customer_email}</p>
              </div>
              
              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={e => setEditForm(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Short descriptive title"
                  />
                </div>
                
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Description</label>
                  <textarea
                    value={editForm.description}
                    onChange={e => setEditForm(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Detailed description"
                  />
                </div>
                
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Alt Text (SEO)</label>
                  <input
                    type="text"
                    value={editForm.alt}
                    onChange={e => setEditForm(prev => ({ ...prev, alt: e.target.value }))}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="SEO-friendly alt text"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Category</label>
                  <select
                    value={editForm.category}
                    onChange={e => setEditForm(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select...</option>
                    <option value="logo">Logo</option>
                    <option value="packaging_design">Packaging Design</option>
                    <option value="label">Label</option>
                    <option value="illustration">Illustration</option>
                    <option value="photo">Photo</option>
                    <option value="product_mockup">Product Mockup</option>
                    <option value="branding">Branding</option>
                    <option value="typography">Typography</option>
                    <option value="pattern">Pattern</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Type</label>
                  <select
                    value={editForm.type}
                    onChange={e => setEditForm(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select...</option>
                    <option value="vector">Vector</option>
                    <option value="raster">Raster</option>
                    <option value="mixed">Mixed</option>
                    <option value="photo">Photo</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Quality Score</label>
                  <select
                    value={editForm.quality_score}
                    onChange={e => setEditForm(prev => ({ ...prev, quality_score: e.target.value }))}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select...</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Keywords (comma separated)</label>
                  <input
                    type="text"
                    value={keywordsInput}
                    onChange={e => setKeywordsInput(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="logo, branding, coffee, organic"
                  />
                </div>
                
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Colors (comma separated)</label>
                  <input
                    type="text"
                    value={colorsInput}
                    onChange={e => setColorsInput(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="green, brown, white"
                  />
                </div>
                
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Content Detected (comma separated)</label>
                  <input
                    type="text"
                    value={contentInput}
                    onChange={e => setContentInput(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="text, logo, barcode, image"
                  />
                </div>
                
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Recommendations (one per line)</label>
                  <textarea
                    value={recommendationsInput}
                    onChange={e => setRecommendationsInput(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Higher resolution recommended
Check color profile"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border-t bg-neutral-50 rounded-b-xl">
              <button
                onClick={() => setEditingArtwork(null)}
                className="px-4 py-2 text-neutral-600 hover:text-neutral-800"
              >
                Cancel
              </button>
              <button
                onClick={saveJsonMetadata}
                disabled={isSaving}
                className={`px-6 py-2 rounded-lg font-medium flex items-center gap-2 ${
                  isSaving ? 'bg-neutral-300 text-neutral-500' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <Save className="h-4 w-4" />
                {saveMessage || 'Save JSON'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
