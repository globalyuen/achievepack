import React, { useState, useEffect } from 'react'
import { Save, Eye, Upload, RefreshCw, ExternalLink, Check, X, Type, Image as ImageIcon, Globe } from 'lucide-react'

// Demo content interface
interface DemoContent {
  brand: {
    name: string
    tagline: string
    taglineWords: string[]
    description: string
    ctaText: string
    ctaLink: string
  }
  hero: {
    backgroundImage: string
    overlayOpacity: number
  }
  marquee: {
    text: string
    speed: number
  }
  products: {
    id: string
    name: string
    price: number
    type: string
    origin: string
    process: string
    image: string
  }[]
  collections: {
    id: string
    name: string
    logo: string
    description: string
    bgColor: string
    images: string[]
  }[]
  mission: {
    title: string
    content: string
    image: string
    coordinates: string
  }
  subscription: {
    title: string
    steps: string[]
    discount: string
  }
}

const DEFAULT_CONTENT: DemoContent = {
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
    content: "We've been accused of having a one-track mind. And to those accusations we say - thank you.",
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80',
    coordinates: '22.3193° N — 114.1694° E'
  },
  subscription: {
    title: 'Never Run Out',
    steps: ['Select your coffee and size', 'Select your frequency', 'Sit back and Achieve'],
    discount: 'Save up to 15% on every order'
  }
}

// Image Picker Modal
const ImagePickerModal: React.FC<{
  isOpen: boolean
  onClose: () => void
  onSelect: (url: string) => void
  currentImage?: string
}> = ({ isOpen, onClose, onSelect, currentImage }) => {
  const [customUrl, setCustomUrl] = useState(currentImage || '')

  const unsplashImages = [
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

  useEffect(() => {
    setCustomUrl(currentImage || '')
  }, [currentImage, isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b flex items-center justify-between">
          <h3 className="text-lg font-semibold">Select Image</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Custom URL Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Custom Image URL</label>
            <div className="flex gap-2">
              <input
                type="url"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <button
                onClick={() => {
                  if (customUrl) {
                    onSelect(customUrl)
                    onClose()
                  }
                }}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                Use URL
              </button>
            </div>
          </div>

          {/* Coffee Images Gallery */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Or choose from gallery</label>
            <div className="grid grid-cols-4 gap-3">
              {unsplashImages.map((url, i) => (
                <button
                  key={i}
                  onClick={() => {
                    onSelect(url)
                    onClose()
                  }}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                    currentImage === url ? 'border-primary-500 ring-2 ring-primary-200' : 'border-transparent'
                  }`}
                >
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

// Main Website Editor Component
const WebsiteEditor: React.FC = () => {
  const [content, setContent] = useState<DemoContent>(DEFAULT_CONTENT)
  const [activeSection, setActiveSection] = useState<'brand' | 'hero' | 'products' | 'collections' | 'mission' | 'subscription'>('brand')
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [imagePickerOpen, setImagePickerOpen] = useState(false)
  const [imagePickerTarget, setImagePickerTarget] = useState<{ path: string } | null>(null)

  // Load saved content
  useEffect(() => {
    const saved = localStorage.getItem('achieve_coffee_demo_content')
    if (saved) {
      try {
        setContent({ ...DEFAULT_CONTENT, ...JSON.parse(saved) })
      } catch (e) {
        console.error('Failed to load saved content')
      }
    }
  }, [])

  // Save content
  const handleSave = async () => {
    setIsSaving(true)
    try {
      localStorage.setItem('achieve_coffee_demo_content', JSON.stringify(content))
      setSaveStatus('success')
      setTimeout(() => setSaveStatus('idle'), 3000)
    } catch (e) {
      setSaveStatus('error')
    }
    setIsSaving(false)
  }

  // Reset to default
  const handleReset = () => {
    if (window.confirm('Reset all content to default? This cannot be undone.')) {
      setContent(DEFAULT_CONTENT)
      localStorage.removeItem('achieve_coffee_demo_content')
    }
  }

  // Update nested content
  const updateContent = (path: string, value: any) => {
    const paths = path.split('.')
    setContent(prev => {
      const newContent = JSON.parse(JSON.stringify(prev)) // Deep clone
      let current: any = newContent
      for (let i = 0; i < paths.length - 1; i++) {
        current = current[paths[i]]
      }
      current[paths[paths.length - 1]] = value
      return newContent
    })
  }

  // Open image picker
  const openImagePicker = (path: string) => {
    setImagePickerTarget({ path })
    setImagePickerOpen(true)
  }

  // Handle image selection
  const handleImageSelect = (url: string) => {
    if (imagePickerTarget) {
      updateContent(imagePickerTarget.path, url)
    }
  }

  // Get current image for picker
  const getCurrentImage = () => {
    if (!imagePickerTarget) return ''
    const paths = imagePickerTarget.path.split('.')
    let current: any = content
    for (const path of paths) {
      current = current[path]
    }
    return current || ''
  }

  const sections = [
    { id: 'brand', label: 'Brand', icon: Type },
    { id: 'hero', label: 'Hero', icon: ImageIcon },
    { id: 'products', label: 'Products', icon: Globe },
    { id: 'collections', label: 'Collections', icon: ImageIcon },
    { id: 'mission', label: 'Mission', icon: Type },
    { id: 'subscription', label: 'Subscription', icon: Type }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Website Editor</h1>
          <p className="text-sm text-gray-500 mt-1">
            Edit the Achieve Coffee demo website content
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/free-service/achieve-coffee-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm"
          >
            <Eye className="w-4 h-4" />
            Preview
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Reset
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition text-sm disabled:opacity-50"
          >
            {isSaving ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : saveStatus === 'success' ? (
              <Check className="w-4 h-4" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            {isSaving ? 'Saving...' : saveStatus === 'success' ? 'Saved!' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Main Editor */}
      <div className="grid grid-cols-12 gap-6">
        {/* Section Nav */}
        <div className="col-span-12 md:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
                    activeSection === section.id
                      ? 'bg-primary-50 text-primary-700'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <section.icon className="w-5 h-5" />
                  <span className="font-medium">{section.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Editor Panel */}
        <div className="col-span-12 md:col-span-9">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            {/* Brand Section */}
            {activeSection === 'brand' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold border-b pb-3">Brand Settings</h2>
                
                <div className="grid gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
                    <input
                      type="text"
                      value={content.brand.name}
                      onChange={(e) => updateContent('brand.name', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tagline Words (one per line)</label>
                    <textarea
                      value={content.brand.taglineWords.join('\n')}
                      onChange={(e) => updateContent('brand.taglineWords', e.target.value.split('\n').filter(w => w.trim()))}
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={content.brand.description}
                      onChange={(e) => updateContent('brand.description', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CTA Button Text</label>
                      <input
                        type="text"
                        value={content.brand.ctaText}
                        onChange={(e) => updateContent('brand.ctaText', e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CTA Link</label>
                      <input
                        type="text"
                        value={content.brand.ctaLink}
                        onChange={(e) => updateContent('brand.ctaLink', e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Hero Section */}
            {activeSection === 'hero' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold border-b pb-3">Hero Section</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Background Image</label>
                  <div className="flex gap-4 items-start">
                    <div
                      className="w-48 h-32 rounded-lg overflow-hidden border cursor-pointer hover:ring-2 hover:ring-primary-500 transition"
                      onClick={() => openImagePicker('hero.backgroundImage')}
                    >
                      <img
                        src={content.hero.backgroundImage}
                        alt="Hero background"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      onClick={() => openImagePicker('hero.backgroundImage')}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      Change Image
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Overlay Opacity: {Math.round(content.hero.overlayOpacity * 100)}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={content.hero.overlayOpacity}
                    onChange={(e) => updateContent('hero.overlayOpacity', parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Marquee Text</label>
                  <input
                    type="text"
                    value={content.marquee.text}
                    onChange={(e) => updateContent('marquee.text', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            )}

            {/* Products Section */}
            {activeSection === 'products' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold border-b pb-3">Products</h2>
                
                {content.products.map((product, index) => (
                  <div key={product.id} className="p-4 border rounded-lg space-y-4">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-24 h-24 rounded-lg overflow-hidden border cursor-pointer hover:ring-2 hover:ring-primary-500 transition flex-shrink-0"
                        onClick={() => openImagePicker(`products.${index}.image`)}
                      >
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">Name</label>
                          <input
                            type="text"
                            value={product.name}
                            onChange={(e) => updateContent(`products.${index}.name`, e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">Price ($)</label>
                          <input
                            type="number"
                            value={product.price}
                            onChange={(e) => updateContent(`products.${index}.price`, parseFloat(e.target.value) || 0)}
                            className="w-full px-3 py-2 border rounded-lg text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">Type</label>
                          <input
                            type="text"
                            value={product.type}
                            onChange={(e) => updateContent(`products.${index}.type`, e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">Origin</label>
                          <input
                            type="text"
                            value={product.origin}
                            onChange={(e) => updateContent(`products.${index}.origin`, e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">Process</label>
                          <input
                            type="text"
                            value={product.process}
                            onChange={(e) => updateContent(`products.${index}.process`, e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Collections Section */}
            {activeSection === 'collections' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold border-b pb-3">Collections</h2>
                
                {content.collections.map((collection, index) => (
                  <div key={collection.id} className="p-4 border rounded-lg space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Name</label>
                        <input
                          type="text"
                          value={collection.name}
                          onChange={(e) => updateContent(`collections.${index}.name`, e.target.value)}
                          className="w-full px-3 py-2 border rounded-lg text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Logo Text</label>
                        <input
                          type="text"
                          value={collection.logo}
                          onChange={(e) => updateContent(`collections.${index}.logo`, e.target.value)}
                          className="w-full px-3 py-2 border rounded-lg text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Description</label>
                      <textarea
                        value={collection.description}
                        onChange={(e) => updateContent(`collections.${index}.description`, e.target.value)}
                        rows={2}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-2">Images</label>
                      <div className="flex gap-2">
                        {collection.images.map((img, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="w-20 h-20 rounded-lg overflow-hidden border cursor-pointer hover:ring-2 hover:ring-primary-500 transition"
                            onClick={() => openImagePicker(`collections.${index}.images.${imgIndex}`)}
                          >
                            <img src={img} alt={`${collection.name} ${imgIndex + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Mission Section */}
            {activeSection === 'mission' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold border-b pb-3">Mission Section</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={content.mission.title}
                    onChange={(e) => updateContent('mission.title', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                  <textarea
                    value={content.mission.content}
                    onChange={(e) => updateContent('mission.content', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Background Image</label>
                  <div className="flex gap-4 items-start">
                    <div
                      className="w-48 h-32 rounded-lg overflow-hidden border cursor-pointer hover:ring-2 hover:ring-primary-500 transition"
                      onClick={() => openImagePicker('mission.image')}
                    >
                      <img src={content.mission.image} alt="Mission background" className="w-full h-full object-cover" />
                    </div>
                    <button
                      onClick={() => openImagePicker('mission.image')}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      Change Image
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Coordinates</label>
                  <input
                    type="text"
                    value={content.mission.coordinates}
                    onChange={(e) => updateContent('mission.coordinates', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            )}

            {/* Subscription Section */}
            {activeSection === 'subscription' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold border-b pb-3">Subscription Section</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={content.subscription.title}
                    onChange={(e) => updateContent('subscription.title', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Steps (one per line)</label>
                  <textarea
                    value={content.subscription.steps.join('\n')}
                    onChange={(e) => updateContent('subscription.steps', e.target.value.split('\n').filter(s => s.trim()))}
                    rows={3}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Discount Text</label>
                  <input
                    type="text"
                    value={content.subscription.discount}
                    onChange={(e) => updateContent('subscription.discount', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Picker Modal */}
      <ImagePickerModal
        isOpen={imagePickerOpen}
        onClose={() => setImagePickerOpen(false)}
        onSelect={handleImageSelect}
        currentImage={getCurrentImage()}
      />
    </div>
  )
}

export default WebsiteEditor
