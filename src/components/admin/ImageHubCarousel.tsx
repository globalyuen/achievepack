import { useState, useEffect, useMemo } from 'react'
import { Search, ChevronLeft, ChevronRight, Copy, Check, X, ExternalLink, Grid3X3, Folder } from 'lucide-react'
import imageCatalog from '../../data/image-catalog.json'

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

export default function ImageHubCarousel() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [copiedPath, setCopiedPath] = useState<string | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel')
  const [imagesPerPage] = useState(20)

  const fileCategories = imageCatalog.categories as Record<string, CategoryData>
  const totalImages = imageCatalog.total_images
  const categoryNames = Object.keys(fileCategories).sort()

  // Get filtered images
  const filteredImages = useMemo(() => {
    let images: ImageInfo[] = []
    
    if (selectedCategory) {
      images = fileCategories[selectedCategory]?.images || []
    } else {
      images = Object.values(fileCategories).flatMap(cat => cat.images)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      images = images.filter(img => 
        img.filename.toLowerCase().includes(query) || 
        img.path.toLowerCase().includes(query)
      )
    }

    return images
  }, [selectedCategory, searchQuery, fileCategories])

  // Reset index when filters change
  useEffect(() => {
    setCurrentIndex(0)
  }, [selectedCategory, searchQuery])

  const copyPath = (path: string) => {
    navigator.clipboard.writeText(path)
    setCopiedPath(path)
    setTimeout(() => setCopiedPath(null), 2000)
  }

  const navigateCarousel = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex(prev => Math.max(0, prev - 1))
    } else {
      setCurrentIndex(prev => Math.min(filteredImages.length - 1, prev + 1))
    }
  }

  const currentImage = filteredImages[currentIndex]
  const paginatedImages = filteredImages.slice(0, imagesPerPage * Math.ceil((currentIndex + 1) / imagesPerPage))

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Image Hub</h1>
          <p className="text-sm text-gray-500">{totalImages} images • {categoryNames.length} categories</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('carousel')}
            className={`p-2 rounded-lg ${viewMode === 'carousel' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'}`}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'}`}
          >
            <Grid3X3 className="h-4 w-4" />
          </button>
          <a
            href="/image-catalog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-2 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            <ExternalLink className="h-4 w-4" />
            Full View
          </a>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search images..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <select
          value={selectedCategory || ''}
          onChange={(e) => setSelectedCategory(e.target.value || null)}
          className="px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-primary-500 min-w-[200px]"
        >
          <option value="">All Categories ({totalImages})</option>
          {categoryNames.map(cat => (
            <option key={cat} value={cat}>
              {cat} ({fileCategories[cat].count})
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <div className="text-sm text-gray-500">
        Showing {filteredImages.length} images
        {currentImage && viewMode === 'carousel' && ` • ${currentIndex + 1} of ${filteredImages.length}`}
      </div>

      {viewMode === 'carousel' ? (
        /* Carousel View */
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          {currentImage ? (
            <div className="flex flex-col md:flex-row">
              {/* Image Preview */}
              <div className="md:w-1/2 bg-gray-100 p-4 flex items-center justify-center min-h-[300px] relative">
                <button
                  onClick={() => navigateCarousel('prev')}
                  disabled={currentIndex === 0}
                  className="absolute left-2 p-2 bg-white/80 rounded-full shadow hover:bg-white disabled:opacity-30"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <img
                  src={currentImage.path}
                  alt={currentImage.filename}
                  className="max-h-[400px] max-w-full object-contain cursor-pointer"
                  onClick={() => setPreviewImage(currentImage.path)}
                />
                <button
                  onClick={() => navigateCarousel('next')}
                  disabled={currentIndex >= filteredImages.length - 1}
                  className="absolute right-2 p-2 bg-white/80 rounded-full shadow hover:bg-white disabled:opacity-30"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Image Info */}
              <div className="md:w-1/2 p-4 space-y-3">
                <h3 className="font-semibold text-gray-900 break-all">{currentImage.filename}</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 w-16">Path:</span>
                    <code className="flex-1 text-xs bg-gray-100 px-2 py-1 rounded truncate">{currentImage.path}</code>
                    <button
                      onClick={() => copyPath(currentImage.path)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      {copiedPath === currentImage.path ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 w-16">Type:</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{currentImage.extension}</span>
                  </div>

                  {currentImage.modified && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 w-16">Modified:</span>
                      <span className="text-xs text-gray-600">{new Date(currentImage.modified).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>

                {/* Thumbnail strip */}
                <div className="pt-4 border-t">
                  <p className="text-xs text-gray-500 mb-2">Quick Jump</p>
                  <div className="flex gap-1 overflow-x-auto pb-2">
                    {filteredImages.slice(Math.max(0, currentIndex - 5), currentIndex + 10).map((img, idx) => {
                      const actualIdx = Math.max(0, currentIndex - 5) + idx
                      return (
                        <button
                          key={img.path}
                          onClick={() => setCurrentIndex(actualIdx)}
                          className={`flex-shrink-0 w-12 h-12 rounded border-2 overflow-hidden ${
                            actualIdx === currentIndex ? 'border-primary-500' : 'border-transparent hover:border-gray-300'
                          }`}
                        >
                          <img src={img.path} alt="" className="w-full h-full object-cover" />
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <Folder className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>No images found</p>
            </div>
          )}
        </div>
      ) : (
        /* Grid View */
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
            {filteredImages.slice(0, 100).map((img, idx) => (
              <button
                key={img.path}
                onClick={() => {
                  setCurrentIndex(idx)
                  setViewMode('carousel')
                }}
                className="aspect-square rounded-lg overflow-hidden border hover:border-primary-500 hover:shadow-md transition-all"
              >
                <img src={img.path} alt={img.filename} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          {filteredImages.length > 100 && (
            <p className="text-center text-sm text-gray-500 mt-4">
              Showing first 100 of {filteredImages.length} images
            </p>
          )}
        </div>
      )}

      {/* Preview Modal */}
      {previewImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <button 
            onClick={() => setPreviewImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={previewImage} 
            alt="Preview" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
