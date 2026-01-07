import React, { useState, useEffect, useRef } from 'react'
import { 
  Save, RefreshCw, Check, X, Upload, ExternalLink, Eye,
  Type, Image as ImageIcon, Loader2, Coffee, Sparkles,
  Plus, Trash2, ChevronDown, ChevronUp
} from 'lucide-react'
import { supabase, MiniSiteContent } from '../../lib/supabase'

// Default Achieve Coffee content
const DEFAULT_CONTENT: MiniSiteContent = {
  brand: {
    name: 'Achieve Coffee',
    tagline: 'Go Against the Grain',
    taglineWords: ['Go', 'Against', 'the', 'Grain'],
    description: 'Surrender to the moment with each sip and every cup of our wide and varied specialty coffee selection.',
    ctaText: 'Shop Now',
    ctaLink: '#shop'
  },
  hero: {
    backgroundImage: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80',
    overlayOpacity: 0.4
  },
  marquee: {
    text: 'NEW * FRESH OFF THE TREE * NEW',
    speed: 30
  },
  products: [
    {
      id: '1',
      name: 'Achieve Signature Blend',
      price: 29.00,
      type: 'Single Origin',
      origin: 'Ethiopia',
      process: 'Natural',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80'
    },
    {
      id: '2',
      name: 'Morning Ritual',
      price: 25.00,
      type: 'Single Origin',
      origin: 'Colombia',
      process: 'Washed',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80'
    },
    {
      id: '3',
      name: 'Red Honey Reserve',
      price: 34.00,
      type: 'Single Origin',
      origin: 'Costa Rica',
      process: 'Red Honey',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80'
    }
  ],
  collections: [
    {
      id: 'limited',
      name: 'Limited Series',
      logo: 'LIMITED',
      description: "They're the highest echelon of quality we find with producers we already work with.",
      bgColor: 'from-amber-900 to-amber-950',
      images: [
        'https://images.unsplash.com/photo-1587734005433-0a43e5f9e7c4?w=400&q=80',
        'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80',
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80'
      ]
    },
    {
      id: 'bright',
      name: 'Bright Series',
      logo: 'BRIGHT',
      description: 'They are developed with bright aromatic flavors in mind.',
      bgColor: 'from-orange-800 to-orange-950',
      images: [
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
        'https://images.unsplash.com/photo-1587734005433-0a43e5f9e7c4?w=400&q=80',
        'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80'
      ]
    },
    {
      id: 'warm',
      name: 'Warm Series',
      logo: 'WARM',
      description: 'It showcases the personality of the coffee without adding a burnt taste.',
      bgColor: 'from-stone-800 to-stone-950',
      images: [
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80',
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
        'https://images.unsplash.com/photo-1587734005433-0a43e5f9e7c4?w=400&q=80'
      ]
    }
  ],
  mission: {
    title: 'Our Mission',
    content: "We've been accused of having a one-track mind. And to those accusations we say - thank you. Because we know it's by focusing on one thing that many things happen. And at Achieve, that one thing was always coffee.",
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80',
    coordinates: '22.3193° N — 114.1694° E'
  },
  subscription: {
    title: 'Never Run Out',
    steps: ['Select your coffee and size', 'Select your frequency', 'Sit back and Achieve'],
    discount: 'Save up to 15% on every order'
  }
}

// Coffee-themed image gallery
const COFFEE_GALLERY = [
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
  'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80',
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
  'https://images.unsplash.com/photo-1587734005433-0a43e5f9e7c4?w=800&q=80',
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80',
  'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
  'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80',
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
  'https://images.unsplash.com/photo-1507226983735-a838615193b0?w=800&q=80'
]

// Image Picker Modal
const ImagePicker: React.FC<{
  isOpen: boolean
  onClose: () => void
  onSelect: (url: string) => void
  currentImage?: string
}> = ({ isOpen, onClose, onSelect, currentImage }) => {
  const [customUrl, setCustomUrl] = useState(currentImage || '')
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setCustomUrl(currentImage || '')
    setUploadError('')
  }, [currentImage, isOpen])

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select an image file')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setUploadError('Image must be less than 5MB')
      return
    }

    setIsUploading(true)
    setUploadError('')

    try {
      const ext = file.name.split('.').pop() || 'jpg'
      const fileName = `achieve-coffee/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`

      const { data: uploadData, error: uploadErr } = await supabase.storage
        .from('artworks')
        .upload(fileName, file, { cacheControl: '3600', upsert: false, contentType: file.type })

      if (uploadErr) throw new Error(uploadErr.message)

      const { data: urlData } = supabase.storage
        .from('artworks')
        .getPublicUrl(uploadData?.path || fileName)

      onSelect(urlData.publicUrl)
      onClose()
    } catch (error: any) {
      setUploadError(error.message || 'Failed to upload')
    } finally {
      setIsUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden">
        <div className="p-4 border-b flex items-center justify-between bg-gradient-to-r from-amber-50 to-orange-50">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Coffee className="w-5 h-5 text-amber-600" />
            Select Image
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-white/50 rounded-lg"><X className="w-5 h-5" /></button>
        </div>
        
        <div className="p-4 overflow-y-auto max-h-[calc(85vh-60px)]">
          {/* Upload */}
          <div className="mb-4 p-4 border-2 border-dashed border-amber-300 rounded-xl hover:border-amber-400 transition-colors bg-amber-50/50">
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" id="coffee-image-upload" />
            <label htmlFor="coffee-image-upload" className="flex flex-col items-center justify-center cursor-pointer py-3">
              {isUploading ? (
                <><Loader2 className="w-8 h-8 text-amber-500 animate-spin mb-2" /><span className="text-sm text-gray-600">Uploading...</span></>
              ) : (
                <><Upload className="w-8 h-8 text-amber-400 mb-2" /><span className="text-sm font-medium text-gray-700">Upload your own image</span><span className="text-xs text-gray-500 mt-1">JPG, PNG, WebP (max 5MB)</span></>
              )}
            </label>
            {uploadError && <p className="text-sm text-red-600 text-center mt-2">{uploadError}</p>}
          </div>

          {/* URL Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Or paste image URL</label>
            <div className="flex gap-2">
              <input type="url" value={customUrl} onChange={(e) => setCustomUrl(e.target.value)} placeholder="https://..." className="flex-1 px-3 py-2 border rounded-lg text-sm" />
              <button onClick={() => { if (customUrl) { onSelect(customUrl); onClose() } }} className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 text-sm">Use</button>
            </div>
          </div>

          {/* Coffee Gallery */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Coffee Photo Gallery</label>
            <div className="grid grid-cols-4 gap-2">
              {COFFEE_GALLERY.map((url, i) => (
                <button key={i} onClick={() => { onSelect(url); onClose() }} className={`aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${currentImage === url ? 'border-amber-500 ring-2 ring-amber-200' : 'border-transparent hover:border-amber-300'}`}>
                  <img src={url} alt={`Coffee ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Collapsible Section
const Section: React.FC<{
  title: string
  icon: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
}> = ({ title, icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="font-semibold text-gray-900">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && <div className="p-4 border-t">{children}</div>}
    </div>
  )
}

// Main CMS Component
const AchieveCoffeeCMS: React.FC = () => {
  const [content, setContent] = useState<MiniSiteContent>(DEFAULT_CONTENT)
  const [siteId, setSiteId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [imagePickerOpen, setImagePickerOpen] = useState(false)
  const [imagePickerTarget, setImagePickerTarget] = useState<string>('')

  // Load content on mount
  useEffect(() => {
    loadContent()
  }, [])

  const loadContent = async () => {
    setIsLoading(true)
    try {
      // Try to load from Supabase
      const { data, error } = await supabase
        .from('mini_sites')
        .select('*')
        .eq('slug', 'achieve-coffee-demo')
        .single()

      if (data && !error) {
        setSiteId(data.id)
        setContent(data.content || DEFAULT_CONTENT)
      } else {
        // Use default content if not found
        setContent(DEFAULT_CONTENT)
      }
    } catch (error) {
      console.error('Failed to load:', error)
      setContent(DEFAULT_CONTENT)
    }
    setIsLoading(false)
  }

  const saveContent = async () => {
    setIsSaving(true)
    setSaveStatus('idle')
    try {
      if (siteId) {
        // Update existing
        const { error } = await supabase
          .from('mini_sites')
          .update({ content, updated_at: new Date().toISOString() })
          .eq('id', siteId)

        if (error) throw error
      } else {
        // Create new
        const { data: { user } } = await supabase.auth.getUser()
        const { data, error } = await supabase
          .from('mini_sites')
          .insert({
            name: 'Achieve Coffee',
            slug: 'achieve-coffee-demo',
            description: 'Demo coffee shop website',
            template: 'coffee-shop',
            status: 'published',
            is_public: true,
            content,
            owner_id: user?.id
          })
          .select()
          .single()

        if (error) throw error
        if (data) setSiteId(data.id)
      }

      setSaveStatus('success')
      setTimeout(() => setSaveStatus('idle'), 3000)
    } catch (error) {
      console.error('Failed to save:', error)
      setSaveStatus('error')
    }
    setIsSaving(false)
  }

  const updateContent = (path: string, value: any) => {
    const paths = path.split('.')
    setContent(prev => {
      const newContent = JSON.parse(JSON.stringify(prev))
      let current: any = newContent
      for (let i = 0; i < paths.length - 1; i++) {
        current = current[paths[i]]
      }
      current[paths[paths.length - 1]] = value
      return newContent
    })
  }

  const openImagePicker = (path: string) => {
    setImagePickerTarget(path)
    setImagePickerOpen(true)
  }

  const handleImageSelect = (url: string) => {
    if (imagePickerTarget) {
      updateContent(imagePickerTarget, url)
    }
  }

  const getCurrentImage = () => {
    if (!imagePickerTarget) return ''
    const paths = imagePickerTarget.split('.')
    let current: any = content
    for (const path of paths) {
      current = current?.[path]
    }
    return current || ''
  }

  const addProduct = () => {
    const newProduct = {
      id: Date.now().toString(),
      name: 'New Coffee',
      price: 25.00,
      type: 'Single Origin',
      origin: 'Origin',
      process: 'Process',
      image: COFFEE_GALLERY[Math.floor(Math.random() * COFFEE_GALLERY.length)]
    }
    updateContent('products', [...content.products, newProduct])
  }

  const removeProduct = (index: number) => {
    const newProducts = content.products.filter((_, i) => i !== index)
    updateContent('products', newProducts)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <Coffee className="w-12 h-12 text-amber-500 animate-pulse mx-auto mb-4" />
          <p className="text-gray-500">Loading Achieve Coffee CMS...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-4 md:p-6 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Achieve Coffee CMS</h1>
              <p className="text-amber-100 text-sm">Edit your demo website content</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/free-service/achieve-coffee-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-colors"
            >
              <Eye className="w-4 h-4" />
              Preview
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={saveContent}
              disabled={isSaving}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                saveStatus === 'success' ? 'bg-green-500' : saveStatus === 'error' ? 'bg-red-500' : 'bg-white text-amber-700 hover:bg-amber-50'
              }`}
            >
              {isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : saveStatus === 'success' ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              {isSaving ? 'Saving...' : saveStatus === 'success' ? 'Saved!' : saveStatus === 'error' ? 'Error' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-3">
        {/* Brand Section */}
        <Section title="Brand Identity" icon={<Sparkles className="w-5 h-5 text-amber-600" />} defaultOpen={true}>
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
              <input type="text" value={content.brand.name} onChange={(e) => updateContent('brand.name', e.target.value)} className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tagline Words (one per line)</label>
              <textarea value={content.brand.taglineWords.join('\n')} onChange={(e) => updateContent('brand.taglineWords', e.target.value.split('\n').filter(w => w.trim()))} rows={3} className="w-full px-4 py-2 border rounded-lg text-sm" placeholder="Go&#10;Against&#10;the&#10;Grain" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea value={content.brand.description} onChange={(e) => updateContent('brand.description', e.target.value)} rows={2} className="w-full px-4 py-2 border rounded-lg text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CTA Button Text</label>
                <input type="text" value={content.brand.ctaText} onChange={(e) => updateContent('brand.ctaText', e.target.value)} className="w-full px-4 py-2 border rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CTA Link</label>
                <input type="text" value={content.brand.ctaLink} onChange={(e) => updateContent('brand.ctaLink', e.target.value)} className="w-full px-4 py-2 border rounded-lg text-sm" />
              </div>
            </div>
          </div>
        </Section>

        {/* Hero Section */}
        <Section title="Hero Section" icon={<ImageIcon className="w-5 h-5 text-amber-600" />}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Background Image</label>
              <div className="flex gap-4 items-start">
                <div className="w-48 h-28 rounded-lg overflow-hidden border-2 border-amber-200 cursor-pointer hover:border-amber-400 transition-colors" onClick={() => openImagePicker('hero.backgroundImage')}>
                  <img src={content.hero.backgroundImage} alt="Hero" className="w-full h-full object-cover" />
                </div>
                <button onClick={() => openImagePicker('hero.backgroundImage')} className="px-4 py-2 border border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 flex items-center gap-2 text-sm">
                  <Upload className="w-4 h-4" /> Change Image
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Overlay Darkness: {Math.round(content.hero.overlayOpacity * 100)}%</label>
              <input type="range" min="0" max="1" step="0.1" value={content.hero.overlayOpacity} onChange={(e) => updateContent('hero.overlayOpacity', parseFloat(e.target.value))} className="w-full accent-amber-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Scrolling Marquee Text</label>
              <input type="text" value={content.marquee.text} onChange={(e) => updateContent('marquee.text', e.target.value)} className="w-full px-4 py-2 border rounded-lg text-sm" />
            </div>
          </div>
        </Section>

        {/* Products Section */}
        <Section title="Products" icon={<Coffee className="w-5 h-5 text-amber-600" />}>
          <div className="space-y-4">
            {content.products.map((product, index) => (
              <div key={product.id} className="p-4 border rounded-xl bg-amber-50/50">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-amber-200 cursor-pointer hover:border-amber-400 flex-shrink-0" onClick={() => openImagePicker(`products.${index}.image`)}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-2">
                    <input type="text" value={product.name} onChange={(e) => updateContent(`products.${index}.name`, e.target.value)} placeholder="Product Name" className="px-3 py-2 border rounded-lg text-sm" />
                    <input type="number" value={product.price} onChange={(e) => updateContent(`products.${index}.price`, parseFloat(e.target.value) || 0)} placeholder="Price" className="px-3 py-2 border rounded-lg text-sm" />
                    <input type="text" value={product.type} onChange={(e) => updateContent(`products.${index}.type`, e.target.value)} placeholder="Type (e.g. Single Origin)" className="px-3 py-2 border rounded-lg text-sm" />
                    <input type="text" value={product.origin} onChange={(e) => updateContent(`products.${index}.origin`, e.target.value)} placeholder="Origin (e.g. Ethiopia)" className="px-3 py-2 border rounded-lg text-sm" />
                    <input type="text" value={product.process} onChange={(e) => updateContent(`products.${index}.process`, e.target.value)} placeholder="Process (e.g. Natural)" className="col-span-2 px-3 py-2 border rounded-lg text-sm" />
                  </div>
                  <button onClick={() => removeProduct(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg" title="Remove">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            <button onClick={addProduct} className="w-full py-3 border-2 border-dashed border-amber-300 rounded-xl text-amber-600 hover:bg-amber-50 flex items-center justify-center gap-2 text-sm font-medium">
              <Plus className="w-4 h-4" /> Add Product
            </button>
          </div>
        </Section>

        {/* Collections Section */}
        <Section title="Collections" icon={<ImageIcon className="w-5 h-5 text-amber-600" />}>
          <div className="space-y-4">
            {content.collections.map((collection, index) => (
              <div key={collection.id} className="p-4 border rounded-xl bg-amber-50/50 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" value={collection.name} onChange={(e) => updateContent(`collections.${index}.name`, e.target.value)} placeholder="Collection Name" className="px-3 py-2 border rounded-lg text-sm" />
                  <input type="text" value={collection.logo} onChange={(e) => updateContent(`collections.${index}.logo`, e.target.value)} placeholder="Logo Text" className="px-3 py-2 border rounded-lg text-sm" />
                </div>
                <textarea value={collection.description} onChange={(e) => updateContent(`collections.${index}.description`, e.target.value)} placeholder="Description" rows={2} className="w-full px-3 py-2 border rounded-lg text-sm" />
                <div className="flex gap-2">
                  {collection.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="w-16 h-16 rounded-lg overflow-hidden border-2 border-amber-200 cursor-pointer hover:border-amber-400" onClick={() => openImagePicker(`collections.${index}.images.${imgIndex}`)}>
                      <img src={img} alt={`${collection.name} ${imgIndex + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Mission Section */}
        <Section title="Mission Statement" icon={<Type className="w-5 h-5 text-amber-600" />}>
          <div className="space-y-4">
            <input type="text" value={content.mission.title} onChange={(e) => updateContent('mission.title', e.target.value)} placeholder="Section Title" className="w-full px-4 py-2 border rounded-lg" />
            <textarea value={content.mission.content} onChange={(e) => updateContent('mission.content', e.target.value)} placeholder="Mission statement content..." rows={4} className="w-full px-4 py-2 border rounded-lg text-sm" />
            <div className="flex gap-4 items-start">
              <div className="w-48 h-28 rounded-lg overflow-hidden border-2 border-amber-200 cursor-pointer hover:border-amber-400" onClick={() => openImagePicker('mission.image')}>
                <img src={content.mission.image} alt="Mission" className="w-full h-full object-cover" />
              </div>
              <button onClick={() => openImagePicker('mission.image')} className="px-4 py-2 border border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 flex items-center gap-2 text-sm">
                <Upload className="w-4 h-4" /> Change
              </button>
            </div>
            <input type="text" value={content.mission.coordinates} onChange={(e) => updateContent('mission.coordinates', e.target.value)} placeholder="Coordinates (e.g. 22.3193° N — 114.1694° E)" className="w-full px-4 py-2 border rounded-lg text-sm" />
          </div>
        </Section>

        {/* Subscription Section */}
        <Section title="Subscription" icon={<Type className="w-5 h-5 text-amber-600" />}>
          <div className="space-y-4">
            <input type="text" value={content.subscription.title} onChange={(e) => updateContent('subscription.title', e.target.value)} placeholder="Section Title" className="w-full px-4 py-2 border rounded-lg" />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Steps (one per line)</label>
              <textarea value={content.subscription.steps.join('\n')} onChange={(e) => updateContent('subscription.steps', e.target.value.split('\n').filter(s => s.trim()))} rows={3} className="w-full px-4 py-2 border rounded-lg text-sm" />
            </div>
            <input type="text" value={content.subscription.discount} onChange={(e) => updateContent('subscription.discount', e.target.value)} placeholder="Discount text" className="w-full px-4 py-2 border rounded-lg text-sm" />
          </div>
        </Section>
      </div>

      {/* Image Picker Modal */}
      <ImagePicker
        isOpen={imagePickerOpen}
        onClose={() => setImagePickerOpen(false)}
        onSelect={handleImageSelect}
        currentImage={getCurrentImage()}
      />
    </div>
  )
}

export default AchieveCoffeeCMS
