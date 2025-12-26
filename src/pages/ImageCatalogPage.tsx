import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Grid3X3, List, ChevronDown, ChevronRight, Image, Folder, ArrowLeft, Copy, Check, ExternalLink } from 'lucide-react'
import imageCatalog from '../data/image-catalog.json'

interface ImageInfo {
  filename: string
  path: string
  extension: string
}

interface CategoryData {
  count: number
  images: ImageInfo[]
}

export default function ImageCatalogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())
  const [copiedPath, setCopiedPath] = useState<string | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const categories = imageCatalog.categories as Record<string, CategoryData>
  const totalImages = imageCatalog.total_images

  // Filter images based on search
  const getFilteredImages = () => {
    if (!searchQuery) {
      if (selectedCategory) {
        return categories[selectedCategory]?.images || []
      }
      return []
    }

    const query = searchQuery.toLowerCase()
    const results: ImageInfo[] = []
    
    Object.values(categories).forEach(cat => {
      cat.images.forEach(img => {
        if (img.filename.toLowerCase().includes(query) || img.path.toLowerCase().includes(query)) {
          results.push(img)
        }
      })
    })
    
    return results
  }

  const filteredImages = getFilteredImages()

  const toggleCategory = (cat: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(cat)) {
      newExpanded.delete(cat)
    } else {
      newExpanded.add(cat)
    }
    setExpandedCategories(newExpanded)
  }

  const copyToClipboard = (path: string) => {
    navigator.clipboard.writeText(path)
    setCopiedPath(path)
    setTimeout(() => setCopiedPath(null), 2000)
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-neutral-500 hover:text-neutral-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-neutral-900">Image Catalog</h1>
                <p className="text-sm text-neutral-500">{totalImages} images in {Object.keys(categories).length} categories</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search images..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-700 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 w-64"
                />
              </div>
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
                {Object.entries(categories).map(([cat, data]) => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition flex items-center justify-between ${
                        selectedCategory === cat ? 'bg-primary-50 text-primary-700 font-medium' : 'text-neutral-600 hover:bg-neutral-50'
                      }`}
                    >
                      <span className="truncate">{cat}</span>
                      <span className="text-xs text-neutral-400 ml-2">{data.count}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Show all categories overview when nothing selected */}
            {!selectedCategory && !searchQuery ? (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-neutral-900">All Categories Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(categories).map(([cat, data]) => (
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
                      {/* Preview thumbnails */}
                      <div className="grid grid-cols-4 gap-1">
                        {data.images.slice(0, 4).map((img, i) => (
                          <div key={i} className="aspect-square bg-neutral-100 rounded overflow-hidden">
                            <img src={img.path} alt="" className="w-full h-full object-cover" loading="lazy" />
                          </div>
                        ))}
                      </div>
                    </button>
                  ))}
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

                {/* Images Grid/List */}
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {filteredImages.map((img, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg border border-neutral-200 overflow-hidden group hover:shadow-md transition"
                      >
                        <button
                          onClick={() => setPreviewImage(img.path)}
                          className="w-full aspect-square bg-neutral-100 relative"
                        >
                          <img src={img.path} alt={img.filename} className="w-full h-full object-cover" loading="lazy" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <ExternalLink className="h-6 w-6 text-white" />
                          </div>
                        </button>
                        <div className="p-2">
                          <p className="text-xs text-neutral-700 truncate" title={img.filename}>{img.filename}</p>
                          <button
                            onClick={() => copyToClipboard(img.path)}
                            className="mt-1 text-xs text-primary-600 hover:text-primary-700 flex items-center gap-1"
                          >
                            {copiedPath === img.path ? (
                              <>
                                <Check className="h-3 w-3" /> Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" /> Copy path
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-neutral-50 border-b border-neutral-200">
                        <tr>
                          <th className="text-left px-4 py-3 font-medium text-neutral-600">Preview</th>
                          <th className="text-left px-4 py-3 font-medium text-neutral-600">Filename</th>
                          <th className="text-left px-4 py-3 font-medium text-neutral-600">Path</th>
                          <th className="text-left px-4 py-3 font-medium text-neutral-600">Type</th>
                          <th className="text-left px-4 py-3 font-medium text-neutral-600">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {filteredImages.map((img, i) => (
                          <tr key={i} className="hover:bg-neutral-50">
                            <td className="px-4 py-2">
                              <button onClick={() => setPreviewImage(img.path)}>
                                <img src={img.path} alt="" className="w-10 h-10 object-cover rounded" loading="lazy" />
                              </button>
                            </td>
                            <td className="px-4 py-2 text-neutral-900">{img.filename}</td>
                            <td className="px-4 py-2 text-neutral-500 font-mono text-xs">{img.path}</td>
                            <td className="px-4 py-2">
                              <span className="px-2 py-0.5 bg-neutral-100 rounded text-xs text-neutral-600">{img.extension}</span>
                            </td>
                            <td className="px-4 py-2">
                              <button
                                onClick={() => copyToClipboard(img.path)}
                                className="text-primary-600 hover:text-primary-700 flex items-center gap-1"
                              >
                                {copiedPath === img.path ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
          <div className="relative max-w-4xl max-h-[90vh]">
            <img src={previewImage} alt="" className="max-w-full max-h-[85vh] object-contain rounded-lg" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-mono">
              {previewImage}
              <button
                onClick={(e) => { e.stopPropagation(); copyToClipboard(previewImage); }}
                className="ml-3 text-primary-300 hover:text-primary-200"
              >
                {copiedPath === previewImage ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
