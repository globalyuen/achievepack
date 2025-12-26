import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Grid3X3, List, Folder, ArrowLeft, Copy, Check, ExternalLink, Save, Download, FileText, X, Sparkles, Tag, Eye, Code, Lock, LogOut } from 'lucide-react'
import imageCatalog from '../data/image-catalog.json'
import aiDescriptionsData from '../data/image-ai-descriptions.json'
import { useAuth } from '../hooks/useAuth'

const ADMIN_EMAIL = 'ryan@achievepack.com'

interface ImageInfo {
  filename: string
  path: string
  extension: string
}

interface CategoryData {
  count: number
  images: ImageInfo[]
}

// LocalStorage keys
const ALT_TEXTS_KEY = 'achievepack_image_alt_texts'
const AI_DESCRIPTIONS_KEY = 'achievepack_ai_descriptions'

interface AIDescription {
  title: string
  description: string
  alt: string
  keywords: string[]
  category: string
  type: string
  colors: string[]
  seo_priority: string
}

// Pre-loaded AI descriptions from JSON file
const preloadedDescriptions = (aiDescriptionsData as any).descriptions as Record<string, AIDescription>

export default function ImageCatalogPage() {
  const navigate = useNavigate()
  const { user, signOut, loading: authLoading } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list') // Default to list for alt text editing
  const [copiedPath, setCopiedPath] = useState<string | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [altTexts, setAltTexts] = useState<Record<string, string>>({})
  const [unsavedChanges, setUnsavedChanges] = useState(false)
  const [saveMessage, setSaveMessage] = useState<string | null>(null)
  const [showOnlyEmpty, setShowOnlyEmpty] = useState(false)
    const [aiDescriptions, setAiDescriptions] = useState<Record<string, AIDescription>>(preloadedDescriptions)
    const [editingImage, setEditingImage] = useState<string | null>(null)

  const [copiedJson, setCopiedJson] = useState<string | null>(null)

  // Check if user is admin
  useEffect(() => {
    if (!authLoading && (!user || user.email !== ADMIN_EMAIL)) {
      navigate('/login')
    }
  }, [user, authLoading, navigate])

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }
  
    const categories = imageCatalog.categories as Record<string, CategoryData>
  const totalImages = imageCatalog.total_images

  // Load data from localStorage on mount
  useEffect(() => {
    const savedAlt = localStorage.getItem(ALT_TEXTS_KEY)
    if (savedAlt) {
      try {
        setAltTexts(JSON.parse(savedAlt))
      } catch (e) {
        console.error('Failed to parse saved alt texts')
      }
    }
    const savedAI = localStorage.getItem(AI_DESCRIPTIONS_KEY)
    if (savedAI) {
      try {
        const parsed = JSON.parse(savedAI)
        setAiDescriptions(prev => ({ ...preloadedDescriptions, ...prev, ...parsed }))
      } catch (e) {
        console.error('Failed to parse saved AI descriptions')
      }
    }
  }, [])

  // Count AI analyzed images
  const countWithAI = Object.keys(aiDescriptions).length

  // Filter images based on search and empty filter
  const getFilteredImages = () => {
    let images: ImageInfo[] = []
    
    if (!searchQuery && !selectedCategory) {
      return []
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      Object.values(categories).forEach(cat => {
        cat.images.forEach(img => {
          if (img.filename.toLowerCase().includes(query) || img.path.toLowerCase().includes(query)) {
            images.push(img)
          }
        })
      })
    } else if (selectedCategory) {
      images = categories[selectedCategory]?.images || []
    }

    // Filter to show only empty alt texts if enabled
    if (showOnlyEmpty) {
      images = images.filter(img => !altTexts[img.path] || altTexts[img.path].trim() === '')
    }

    return images
  }

  const filteredImages = getFilteredImages()

  // Count images with alt text
  const countWithAltText = Object.keys(altTexts).filter(k => altTexts[k]?.trim()).length
  const countWithoutAltText = totalImages - countWithAltText

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedPath(text)
    setTimeout(() => setCopiedPath(null), 2000)
  }

  const copyJsonToClipboard = (path: string) => {
    const ai = aiDescriptions[path]
    if (ai) {
      const jsonData = JSON.stringify({
        path,
        ...ai
      }, null, 2)
      navigator.clipboard.writeText(jsonData)
      setCopiedJson(path)
      setTimeout(() => setCopiedJson(null), 2000)
    }
  }

  const handleAltTextChange = (path: string, value: string) => {
    setAltTexts(prev => ({ ...prev, [path]: value }))
    setUnsavedChanges(true)
  }

  const saveAltTexts = () => {
    localStorage.setItem(ALT_TEXTS_KEY, JSON.stringify(altTexts))
    localStorage.setItem(AI_DESCRIPTIONS_KEY, JSON.stringify(aiDescriptions))
    setUnsavedChanges(false)
    setSaveMessage('Saved to browser!')
    setTimeout(() => setSaveMessage(null), 2000)
  }

  const exportAsJson = () => {
    // Create export data with image info, alt texts, and AI descriptions
    const exportData = {
      generated: new Date().toISOString(),
      total_images: totalImages,
      images_with_alt: countWithAltText,
      images_with_ai: countWithAI,
      ai_descriptions: aiDescriptions,
      alt_texts: altTexts,
      images: Object.entries(categories).flatMap(([category, data]) => 
        data.images.map(img => ({
          category,
          filename: img.filename,
          path: img.path,
          alt: altTexts[img.path] || aiDescriptions[img.path]?.alt || '',
          ai: aiDescriptions[img.path] || null
        }))
      )
    }

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `achievepack-image-catalog-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const generateAltFromFilename = (filename: string): string => {
    // Remove extension and clean up filename to create a basic alt text
    return filename
      .replace(/\.(webp|png|jpg|jpeg|svg)$/i, '')
      .replace(/^a_/, '')
      .replace(/_/g, ' ')
      .replace(/\d{6,}$/, '') // Remove trailing numbers like ID
      .replace(/\s+/g, ' ')
      .trim()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  const autoGenerateAlt = (path: string, filename: string) => {
    const generated = generateAltFromFilename(filename)
    handleAltTextChange(path, generated)
  }

  const autoGenerateAllEmpty = () => {
    const newAltTexts = { ...altTexts }
    Object.values(categories).forEach(cat => {
      cat.images.forEach(img => {
        if (!newAltTexts[img.path] || newAltTexts[img.path].trim() === '') {
          newAltTexts[img.path] = generateAltFromFilename(img.filename)
        }
      })
    })
    setAltTexts(newAltTexts)
    setUnsavedChanges(true)
  }

  // Show loading state
  if (authLoading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500 mb-2"></div>
          <p className="text-neutral-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Redirect if not admin
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
              <Link to="/admin" className="text-neutral-500 hover:text-neutral-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  AI Image Catalog
                </h1>
                <p className="text-sm text-neutral-500">
                  {totalImages} images · <span className="text-purple-600">{countWithAI} AI analyzed</span> · <span className="text-green-600">{countWithAltText} with alt</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search images..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-700 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 w-48"
                />
              </div>
              
              {/* Filter empty */}
              <button
                onClick={() => setShowOnlyEmpty(!showOnlyEmpty)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  showOnlyEmpty ? 'bg-orange-100 text-orange-700 border border-orange-300' : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                }`}
              >
                {showOnlyEmpty ? 'Show All' : 'Missing Alt Only'}
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

              {/* Auto Generate */}
              <button
                onClick={autoGenerateAllEmpty}
                className="px-3 py-2 rounded-lg bg-blue-100 text-blue-700 text-sm font-medium hover:bg-blue-200 transition flex items-center gap-1"
              >
                <FileText className="h-4 w-4" />
                Auto Fill Empty
              </button>

              {/* Save */}
              <button
                onClick={saveAltTexts}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition flex items-center gap-1 ${
                  unsavedChanges ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-neutral-100 text-neutral-600'
                }`}
              >
                <Save className="h-4 w-4" />
                {saveMessage || (unsavedChanges ? 'Save Changes' : 'Saved')}
              </button>

              {/* Export */}
              <button
                onClick={exportAsJson}
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
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar - Categories */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-xl border border-neutral-200 p-4 sticky top-24">
              <h2 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                <Folder className="h-4 w-4" />
                Categories
              </h2>
              <ul className="space-y-1 max-h-[70vh] overflow-y-auto">
                <li>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                      !selectedCategory && !searchQuery ? 'bg-primary-50 text-primary-700 font-medium' : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    All Categories
                  </button>
                </li>
                {Object.entries(categories).map(([cat, data]) => {
                  const catAltCount = data.images.filter(img => altTexts[img.path]?.trim()).length
                  return (
                    <li key={cat}>
                      <button
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition flex items-center justify-between ${
                          selectedCategory === cat ? 'bg-primary-50 text-primary-700 font-medium' : 'text-neutral-600 hover:bg-neutral-50'
                        }`}
                      >
                        <span className="truncate">{cat}</span>
                        <span className={`text-xs ml-2 ${catAltCount === data.count ? 'text-green-600' : 'text-neutral-400'}`}>
                          {catAltCount}/{data.count}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Show all categories overview when nothing selected */}
            {!selectedCategory && !searchQuery ? (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-neutral-900">Select a Category to Edit Alt Texts</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(categories).map(([cat, data]) => {
                    const catAltCount = data.images.filter(img => altTexts[img.path]?.trim()).length
                    const progress = Math.round((catAltCount / data.count) * 100)
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className="bg-white rounded-xl border border-neutral-200 p-4 hover:border-primary-300 hover:shadow-md transition text-left group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                            <Folder className="h-5 w-5 text-primary-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-neutral-900 group-hover:text-primary-600 transition text-sm">{cat}</h3>
                            <p className="text-xs text-neutral-500">{data.count} images</p>
                          </div>
                        </div>
                        {/* Progress bar */}
                        <div className="mb-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-neutral-500">Alt Text Progress</span>
                            <span className={progress === 100 ? 'text-green-600 font-medium' : 'text-neutral-500'}>{progress}%</span>
                          </div>
                          <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                            <div 
                              className={`h-full transition-all ${progress === 100 ? 'bg-green-500' : 'bg-primary-500'}`}
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>
                        {/* Preview thumbnails */}
                        <div className="grid grid-cols-4 gap-1">
                          {data.images.slice(0, 4).map((img, i) => (
                            <div key={i} className="aspect-square bg-neutral-100 rounded overflow-hidden relative">
                              <img src={img.path} alt="" className="w-full h-full object-cover" loading="lazy" />
                              {altTexts[img.path]?.trim() && (
                                <div className="absolute top-0.5 right-0.5 w-2 h-2 bg-green-500 rounded-full" />
                              )}
                            </div>
                          ))}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            ) : (
              <>
                {/* Category header */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-neutral-900">
                    {searchQuery ? `Search: "${searchQuery}"` : selectedCategory}
                    <span className="text-neutral-400 font-normal ml-2">({filteredImages.length} images)</span>
                  </h2>
                </div>

                {/* Images List View (Best for editing) */}
                {viewMode === 'list' ? (
                  <div className="space-y-3">
                    {filteredImages.map((img, i) => (
                      <div key={i} className="bg-white rounded-lg border border-neutral-200 p-4 flex gap-4">
                        {/* Thumbnail */}
                        <button
                          onClick={() => setPreviewImage(img.path)}
                          className="w-24 h-24 flex-shrink-0 bg-neutral-100 rounded-lg overflow-hidden relative group"
                        >
                          <img src={img.path} alt={altTexts[img.path] || img.filename} className="w-full h-full object-cover" loading="lazy" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <ExternalLink className="h-5 w-5 text-white" />
                          </div>
                        </button>

                        {/* Info & Alt Text Input */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div>
                              <p className="text-sm font-medium text-neutral-900 truncate">{img.filename}</p>
                              <p className="text-xs text-neutral-500 font-mono">{img.path}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              {aiDescriptions[img.path] && (
                                <button
                                  onClick={() => copyJsonToClipboard(img.path)}
                                  className="p-1 text-purple-400 hover:text-purple-600"
                                  title="Copy JSON"
                                >
                                  {copiedJson === img.path ? <Check className="h-4 w-4 text-green-500" /> : <Code className="h-4 w-4" />}
                                </button>
                              )}
                              <button
                                onClick={() => copyToClipboard(img.path)}
                                className="p-1 text-neutral-400 hover:text-neutral-600"
                                title="Copy path"
                              >
                                {copiedPath === img.path ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                              </button>
                              <button
                                onClick={() => autoGenerateAlt(img.path, img.filename)}
                                className="p-1 text-blue-400 hover:text-blue-600"
                                title="Auto-generate from filename"
                              >
                                <FileText className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          
                          {/* Alt Text Input */}
                          <div className="relative">
                            <input
                              type="text"
                              value={altTexts[img.path] || aiDescriptions[img.path]?.alt || ''}
                              onChange={(e) => handleAltTextChange(img.path, e.target.value)}
                              placeholder="Enter alt text for SEO & accessibility..."
                              className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                                aiDescriptions[img.path] 
                                  ? 'border-purple-300 bg-purple-50' 
                                  : altTexts[img.path]?.trim() 
                                    ? 'border-green-300 bg-green-50' 
                                    : 'border-neutral-200 bg-white'
                              }`}
                            />
                            {aiDescriptions[img.path] && (
                              <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-500" />
                            )}
                          </div>
                          
                          {/* AI Description Preview */}
                          {aiDescriptions[img.path] && (
                            <div className="mt-2 p-2 bg-purple-50 rounded-lg border border-purple-200">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-medium text-purple-700 flex items-center gap-1">
                                  <Sparkles className="h-3 w-3" /> AI Analyzed
                                </span>
                                <button
                                  onClick={() => copyJsonToClipboard(img.path)}
                                  className="text-xs text-purple-600 hover:text-purple-800 flex items-center gap-1"
                                >
                                  {copiedJson === img.path ? <><Check className="h-3 w-3" /> Copied!</> : <><Code className="h-3 w-3" /> Copy JSON</>}
                                </button>
                              </div>
                              <p className="text-xs text-purple-800 font-medium">{aiDescriptions[img.path].title}</p>
                              <p className="text-xs text-purple-600 mt-1 line-clamp-2">{aiDescriptions[img.path].description}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Grid View */
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {filteredImages.map((img, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg border border-neutral-200 overflow-hidden group hover:shadow-md transition"
                      >
                        <button
                          onClick={() => setPreviewImage(img.path)}
                          className="w-full aspect-square bg-neutral-100 relative"
                        >
                          <img src={img.path} alt={altTexts[img.path] || img.filename} className="w-full h-full object-cover" loading="lazy" />
                          {altTexts[img.path]?.trim() && (
                            <div className="absolute top-2 right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                          )}
                        </button>
                        <div className="p-2 space-y-2">
                          <p className="text-xs text-neutral-700 truncate" title={img.filename}>{img.filename}</p>
                          <input
                            type="text"
                            value={altTexts[img.path] || ''}
                            onChange={(e) => handleAltTextChange(img.path, e.target.value)}
                            placeholder="Alt text..."
                            className="w-full px-2 py-1 border border-neutral-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-primary-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <button 
            onClick={() => setPreviewImage(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-4xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <img src={previewImage} alt={altTexts[previewImage] || ''} className="max-w-full max-h-[70vh] object-contain rounded-lg" />
            <div className="mt-4 bg-white rounded-lg p-4">
              <p className="text-xs text-neutral-500 font-mono mb-2">{previewImage}</p>
              <input
                type="text"
                value={altTexts[previewImage] || ''}
                onChange={(e) => handleAltTextChange(previewImage, e.target.value)}
                placeholder="Enter alt text for this image..."
                className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
