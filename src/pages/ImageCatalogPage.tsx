import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Grid3X3, List, Folder, ArrowLeft, Copy, Check, ExternalLink, Save, Download, FileText, X, Sparkles, Tag, Eye, Code, Lock, LogOut, Cloud, CloudOff, Zap, Clock, AlertCircle } from 'lucide-react'
import imageCatalog from '../data/image-catalog.json'
import aiDescriptionsData from '../data/image-ai-descriptions.json'
import { useAuth } from '../hooks/useAuth'
import { supabase } from '../lib/supabase'

const ADMIN_EMAIL = 'ryan@achievepack.com'

interface ImageInfo {
  filename: string
  path: string
  extension: string
  modified?: string
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
  const [showOnlyNoJson, setShowOnlyNoJson] = useState(false)
  const [sortByNewest, setSortByNewest] = useState(true)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analyzingImage, setAnalyzingImage] = useState<string | null>(null)
  const [isSavingToCloud, setIsSavingToCloud] = useState(false)
  const [cloudSyncStatus, setCloudSyncStatus] = useState<'synced' | 'pending' | 'error'>('synced')
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
  
  const fileCategories = imageCatalog.categories as Record<string, CategoryData>
  const totalImages = imageCatalog.total_images

  // Get all images from file catalog - sorted by modification time
  const allImages: ImageInfo[] = Object.values(fileCategories)
    .flatMap(cat => cat.images)
    .sort((a, b) => {
      if (!sortByNewest) return a.filename.localeCompare(b.filename)
      const dateA = a.modified ? new Date(a.modified).getTime() : 0
      const dateB = b.modified ? new Date(b.modified).getTime() : 0
      return dateB - dateA // Newest first
    })

  // Build AI-based categories dynamically
  const getAICategories = () => {
    const catMap: Record<string, ImageInfo[]> = {}
    
    allImages.forEach(img => {
      const aiDesc = aiDescriptions[img.path]
      const category = aiDesc?.category || 'uncategorized'
      if (!catMap[category]) {
        catMap[category] = []
      }
      catMap[category].push(img)
    })
    
    return catMap
  }

  const aiCategories = getAICategories()

  // Load data from localStorage and Supabase on mount
  useEffect(() => {
    const loadData = async () => {
      // First load from localStorage for immediate display
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

      // Then load from Supabase (cloud data takes priority)
      try {
        const { data, error } = await supabase
          .from('image_descriptions')
          .select('*')
        
        if (!error && data && data.length > 0) {
          const cloudAltTexts: Record<string, string> = {}
          const cloudAiDescriptions: Record<string, AIDescription> = {}
          
          data.forEach((item: any) => {
            if (item.alt_text) {
              cloudAltTexts[item.path] = item.alt_text
            }
            if (item.title || item.description) {
              cloudAiDescriptions[item.path] = {
                title: item.title || '',
                description: item.description || '',
                alt: item.alt_text || '',
                keywords: item.keywords || [],
                category: item.category || '',
                type: item.type || '',
                colors: item.colors || [],
                seo_priority: item.seo_priority || 'medium'
              }
            }
          })
          
          setAltTexts(prev => ({ ...prev, ...cloudAltTexts }))
          setAiDescriptions(prev => ({ ...preloadedDescriptions, ...prev, ...cloudAiDescriptions }))
          setCloudSyncStatus('synced')
        }
      } catch (e) {
        console.error('Failed to load from Supabase:', e)
        setCloudSyncStatus('error')
      }
    }

    loadData()
  }, [])

  // Count AI analyzed images
  const countWithAI = Object.keys(aiDescriptions).length

  // Filter images based on search and empty filter
  const getFilteredImages = () => {
    let images: ImageInfo[] = []
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      allImages.forEach(img => {
        const aiDesc = aiDescriptions[img.path]
        if (
          img.filename.toLowerCase().includes(query) || 
          img.path.toLowerCase().includes(query) ||
          aiDesc?.title?.toLowerCase().includes(query) ||
          aiDesc?.keywords?.some(k => k.toLowerCase().includes(query))
        ) {
          images.push(img)
        }
      })
    } else if (selectedCategory) {
      images = aiCategories[selectedCategory] || []
    } else {
      // Show all images when no category selected
      images = allImages
    }

    // Filter to show only images without JSON description
    if (showOnlyNoJson) {
      images = images.filter(img => !aiDescriptions[img.path])
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

  const saveAltTexts = async () => {
    // Save to localStorage first (immediate)
    localStorage.setItem(ALT_TEXTS_KEY, JSON.stringify(altTexts))
    localStorage.setItem(AI_DESCRIPTIONS_KEY, JSON.stringify(aiDescriptions))
    
    // Then save to Supabase (cloud)
    setIsSavingToCloud(true)
    setSaveMessage('Saving to cloud...')
    
    try {
      // Prepare data for upsert
      const upsertData = Object.entries(altTexts).map(([path, alt_text]) => ({
        path,
        alt_text,
        title: aiDescriptions[path]?.title || null,
        description: aiDescriptions[path]?.description || null,
        keywords: aiDescriptions[path]?.keywords || null,
        category: aiDescriptions[path]?.category || null,
        type: aiDescriptions[path]?.type || null,
        colors: aiDescriptions[path]?.colors || null,
        seo_priority: aiDescriptions[path]?.seo_priority || null,
        updated_at: new Date().toISOString()
      }))
      
      // Also add AI descriptions that don't have alt texts yet
      Object.entries(aiDescriptions).forEach(([path, desc]: [string, AIDescription]) => {
        if (!altTexts[path]) {
          upsertData.push({
            path,
            alt_text: desc.alt || null,
            title: desc.title || null,
            description: desc.description || null,
            keywords: desc.keywords || null,
            category: desc.category || null,
            type: desc.type || null,
            colors: desc.colors || null,
            seo_priority: desc.seo_priority || null,
            updated_at: new Date().toISOString()
          })
        }
      })
      
      const { error } = await supabase
        .from('image_descriptions')
        .upsert(upsertData, { onConflict: 'path' })
      
      if (error) throw error
      
      setUnsavedChanges(false)
      setCloudSyncStatus('synced')
      setSaveMessage('Saved to cloud!')
    } catch (e) {
      console.error('Failed to save to Supabase:', e)
      setCloudSyncStatus('error')
      setSaveMessage('Cloud save failed!')
    } finally {
      setIsSavingToCloud(false)
      setTimeout(() => setSaveMessage(null), 2000)
    }
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
      images: Object.entries(aiCategories).flatMap(([category, images]) => 
        images.map(img => ({
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
    allImages.forEach(img => {
      if (!newAltTexts[img.path] || newAltTexts[img.path].trim() === '') {
        newAltTexts[img.path] = generateAltFromFilename(img.filename)
      }
    })
    setAltTexts(newAltTexts)
    setUnsavedChanges(true)
  }

  // xAI Vision Analysis function
  const analyzeImageWithXAI = async (imagePath: string) => {
    const apiKey = import.meta.env.VITE_XAI_API_KEY
    
    if (!apiKey) {
      alert('xAI API Key not configured. Please add VITE_XAI_API_KEY to your .env file.')
      return
    }
    
    setIsAnalyzing(true)
    setAnalyzingImage(imagePath)
    
    try {
      // Convert image to base64
      const imageResponse = await fetch(imagePath)
      const blob = await imageResponse.blob()
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result as string)
        reader.readAsDataURL(blob)
      })
      
      console.log('Analyzing image:', imagePath)
      
      const response = await fetch('https://api.x.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'grok-2-vision-1212',
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'image_url',
                  image_url: { url: base64 }
                },
                {
                  type: 'text',
                  text: `Analyze this image and provide a JSON response with the following structure:
{
  "title": "Short descriptive title (max 60 chars)",
  "description": "Detailed description of the image content and context (100-200 words)",
  "alt": "SEO-friendly alt text for accessibility (max 125 chars)",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "category": "one of: product, lifestyle, marketing, certification, sustainability, technical, branding, scene, detail",
  "type": "one of: product, scene, hero, infographic, logo, certification, detail, cutout",
  "colors": ["primary color", "secondary color"],
  "seo_priority": "high, medium, or low",
  "usage": {
    "recommended_placement": ["suggested page sections"],
    "background": "background compatibility notes",
    "size": "recommended display size"
  }
}

Respond ONLY with valid JSON, no other text.`
                }
              ]
            }
          ],
          max_tokens: 1000
        })
      })
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('API Response:', response.status, errorText)
        throw new Error(`API error: ${response.status} - ${errorText}`)
      }
      
      const data = await response.json()
      console.log('xAI Response:', data)
      
      const content = data.choices?.[0]?.message?.content
      
      if (content) {
        // Parse the JSON response
        const jsonMatch = content.match(/\{[\s\S]*\}/)
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0])
          console.log('Parsed JSON:', parsed)
          
          // Update AI descriptions
          const newAiDescriptions = {
            ...aiDescriptions,
            [imagePath]: parsed
          }
          setAiDescriptions(newAiDescriptions)
          
          // Also update alt text if empty
          const newAltTexts = { ...altTexts }
          if (!altTexts[imagePath]) {
            newAltTexts[imagePath] = parsed.alt || ''
            setAltTexts(newAltTexts)
          }
          
          // Auto-save to localStorage immediately
          localStorage.setItem(AI_DESCRIPTIONS_KEY, JSON.stringify(newAiDescriptions))
          localStorage.setItem(ALT_TEXTS_KEY, JSON.stringify(newAltTexts))
          console.log('Auto-saved to localStorage')
          
          // Auto-save to Supabase immediately
          try {
            const { error } = await supabase
              .from('image_descriptions')
              .upsert({
                path: imagePath,
                alt_text: parsed.alt || null,
                title: parsed.title || null,
                description: parsed.description || null,
                keywords: parsed.keywords || null,
                category: parsed.category || null,
                type: parsed.type || null,
                colors: parsed.colors || null,
                seo_priority: parsed.seo_priority || null,
                updated_at: new Date().toISOString()
              }, { onConflict: 'path' })
            
            if (error) {
              console.error('Failed to auto-save to Supabase:', error)
            } else {
              console.log('Auto-saved to Supabase:', imagePath)
              setCloudSyncStatus('synced')
            }
          } catch (e) {
            console.error('Supabase auto-save error:', e)
          }
          
          setUnsavedChanges(false)
        } else {
          console.error('No valid JSON found in response:', content)
          alert('Failed to parse xAI response. Check console.')
        }
      } else {
        console.error('No content in response:', data)
        alert('No content in xAI response. Check console.')
      }
    } catch (error) {
      console.error('xAI analysis failed:', error)
      alert(`Failed to analyze image: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setIsAnalyzing(false)
      setAnalyzingImage(null)
    }
  }

  // Analyze all images without JSON (newest first) - Optimized for INP
  const analyzeAllMissingJson = async () => {
    // Set loading state immediately for responsive UI
    setIsAnalyzing(true)
    
    // Use setTimeout to yield to the main thread, preventing UI blocking
    await new Promise(resolve => setTimeout(resolve, 0))
    
    const imagesWithoutJson = allImages.filter(img => !aiDescriptions[img.path])
    
    if (imagesWithoutJson.length === 0) {
      setIsAnalyzing(false)
      alert('All images already have JSON descriptions!')
      return
    }
    
    setIsAnalyzing(false) // Reset before confirm dialog
    const confirmAnalyze = confirm(`Analyze ${imagesWithoutJson.length} images without JSON? This will use xAI API credits.`)
    if (!confirmAnalyze) return
    
    setIsAnalyzing(true)
    
    for (const img of imagesWithoutJson) {
      await analyzeImageWithXAI(img.path)
      // Yield to main thread between requests for smooth UI
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
    
    setIsAnalyzing(false)
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
              <Link to="/ctrl-x9k7m" className="text-neutral-500 hover:text-neutral-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  AI Image Catalog
                </h1>
                <p className="text-sm text-neutral-500">
                  {totalImages} images · <span className="text-purple-600">{countWithAI} AI analyzed</span> · <span className="text-green-600">{countWithAltText} filled alt text</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
              {/* Search */}
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search images..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-700 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 w-full sm:w-48"
                />
              </div>
              
              {/* Filter empty */}
              <button
                onClick={() => setShowOnlyEmpty(!showOnlyEmpty)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  showOnlyEmpty ? 'bg-orange-100 text-orange-700 border border-orange-300' : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                }`}
              >
                {showOnlyEmpty ? 'Show All' : 'Missing Alt'}
              </button>

              {/* Filter no JSON */}
              <button
                onClick={() => setShowOnlyNoJson(!showOnlyNoJson)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  showOnlyNoJson ? 'bg-purple-100 text-purple-700 border border-purple-300' : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
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
                {sortByNewest ? 'Newest First' : 'A-Z'}
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
                Auto Fill
              </button>

              {/* xAI Analyze */}
              <button
                onClick={analyzeAllMissingJson}
                disabled={isAnalyzing}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition flex items-center gap-1 ${
                  isAnalyzing 
                    ? 'bg-yellow-100 text-yellow-700 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                }`}
              >
                <Zap className="h-4 w-4" />
                {isAnalyzing ? `Analyzing...` : 'xAI Analyze All'}
              </button>

              {/* Save */}
              <button
                onClick={saveAltTexts}
                disabled={isSavingToCloud}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition flex items-center gap-1 ${
                  unsavedChanges ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-neutral-100 text-neutral-600'
                } ${isSavingToCloud ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {cloudSyncStatus === 'synced' ? <Cloud className="h-4 w-4" /> : cloudSyncStatus === 'error' ? <CloudOff className="h-4 w-4 text-red-500" /> : <Save className="h-4 w-4" />}
                {saveMessage || (isSavingToCloud ? 'Saving...' : unsavedChanges ? 'Save to Cloud' : 'Synced')}
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
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Categories */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl border border-neutral-200 p-4 lg:sticky lg:top-24">
              <h2 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                <Folder className="h-4 w-4" />
                Categories
              </h2>
              <ul className="space-y-1 max-h-[40vh] lg:max-h-[70vh] overflow-y-auto flex flex-wrap lg:flex-col gap-1 lg:gap-0">
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
                {Object.entries(aiCategories)
                  .sort(([a], [b]) => a === 'uncategorized' ? 1 : b === 'uncategorized' ? -1 : a.localeCompare(b))
                  .map(([cat, images]) => {
                  return (
                    <li key={cat}>
                      <button
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition flex items-center justify-between ${
                          selectedCategory === cat ? 'bg-primary-50 text-primary-700 font-medium' : 'text-neutral-600 hover:bg-neutral-50'
                        }`}
                      >
                        <span className="truncate capitalize">{cat}</span>
                        <span className="text-xs ml-2 text-neutral-400">
                          {images.length}
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
                      <div key={i} className="bg-white rounded-lg border border-neutral-200 p-3 sm:p-4 flex gap-3 sm:gap-4">
                        {/* Thumbnail */}
                        <button
                          onClick={() => setPreviewImage(img.path)}
                          className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 bg-neutral-100 rounded-lg overflow-hidden relative group"
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
                              {/* xAI Analyze single image */}
                              {!aiDescriptions[img.path] && (
                                <button
                                  onClick={() => analyzeImageWithXAI(img.path)}
                                  disabled={isAnalyzing}
                                  className={`p-1 rounded transition ${
                                    analyzingImage === img.path 
                                      ? 'text-yellow-500 animate-pulse' 
                                      : 'text-purple-400 hover:text-purple-600 hover:bg-purple-50'
                                  }`}
                                  title="Analyze with xAI"
                                >
                                  <Zap className="h-4 w-4" />
                                </button>
                              )}
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
                          
                          {/* Modified time indicator */}
                          {img.modified && (
                            <div className="text-xs text-neutral-400 mb-1 flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {new Date(img.modified).toLocaleDateString()}
                            </div>
                          )}
                          
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
                          {aiDescriptions[img.path] && (
                            <div className="absolute top-2 left-2 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                              <Sparkles className="h-3 w-3 text-white" />
                            </div>
                          )}
                          {altTexts[img.path]?.trim() && (
                            <div className="absolute top-2 right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                          )}
                        </button>
                        <div className="p-2 space-y-2">
                          <p className="text-xs text-neutral-700 truncate" title={img.filename}>{img.filename}</p>
                          {/* Alt text input - directly editable */}
                          <div className="relative">
                            <input
                              type="text"
                              value={altTexts[img.path] || aiDescriptions[img.path]?.alt || ''}
                              onChange={(e) => handleAltTextChange(img.path, e.target.value)}
                              placeholder="Alt text for AI to reuse..."
                              className={`w-full px-2 py-1.5 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-primary-500 ${
                                aiDescriptions[img.path] 
                                  ? 'border-purple-300 bg-purple-50' 
                                  : altTexts[img.path]?.trim() 
                                    ? 'border-green-300 bg-green-50' 
                                    : 'border-neutral-200 bg-white'
                              }`}
                            />
                          </div>
                          {/* Quick action buttons */}
                          <div className="flex items-center gap-1">
                            {!aiDescriptions[img.path] && (
                              <button
                                onClick={() => analyzeImageWithXAI(img.path)}
                                disabled={isAnalyzing}
                                className={`flex-1 py-1 rounded text-xs flex items-center justify-center gap-1 ${
                                  analyzingImage === img.path 
                                    ? 'bg-yellow-100 text-yellow-700 animate-pulse' 
                                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                                }`}
                                title="Analyze with xAI"
                              >
                                <Zap className="h-3 w-3" />
                                {analyzingImage === img.path ? '...' : 'xAI'}
                              </button>
                            )}
                            <button
                              onClick={() => autoGenerateAlt(img.path, img.filename)}
                              className="flex-1 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 text-xs flex items-center justify-center gap-1"
                              title="Auto-generate from filename"
                            >
                              <FileText className="h-3 w-3" />
                              Auto
                            </button>
                            <button
                              onClick={() => copyToClipboard(img.path)}
                              className="py-1 px-2 rounded bg-neutral-100 text-neutral-600 hover:bg-neutral-200 text-xs"
                              title="Copy path"
                            >
                              {copiedPath === img.path ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
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
