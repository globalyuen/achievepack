import React, { useState, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpDown, Grid, List, X, Lock, Sparkles, Wrench, Shield } from 'lucide-react'

// ============ CLOSURE OPTIONS ============
export interface ClosureOption {
  id: string
  name: string
  img: string
  type: 'zipper' | 'non-zipper' | 'specialty'
  reclosable: boolean
  childResistant: boolean
  premium: boolean
  bestFor: string[]
  description: string
}

export const CLOSURE_OPTIONS: ClosureOption[] = [
  {
    id: 'no-zipper',
    name: 'No Zipper (Heat Seal)',
    img: '/imgs/store/closure/no-zipper.webp',
    type: 'non-zipper',
    reclosable: false,
    childResistant: false,
    premium: false,
    bestFor: ['Single-use products', 'Sachets', 'Samples'],
    description: 'Standard heat seal closure, most cost-effective option'
  },
  {
    id: 'normal-zipper',
    name: 'Standard Press-to-Close Zipper',
    img: '/imgs/store/closure/normal-zipper.webp',
    type: 'zipper',
    reclosable: true,
    childResistant: false,
    premium: false,
    bestFor: ['Snacks', 'Coffee', 'Pet treats', 'Dried fruits'],
    description: 'Most popular closure, easy to open and reclose'
  },
  {
    id: 'front-zipper',
    name: 'Pocket Zipper (Below Seal)',
    img: '/imgs/store/closure/front-zipper.webp',
    type: 'zipper',
    reclosable: true,
    childResistant: false,
    premium: true,
    bestFor: ['Premium products', 'Gift packaging', 'Clean aesthetic'],
    description: 'Zipper positioned below top seal for cleaner look'
  },
  {
    id: 'slider-zipper',
    name: 'Slider Zipper',
    img: '/imgs/store/closure/slider-zipper.webp',
    type: 'zipper',
    reclosable: true,
    childResistant: false,
    premium: true,
    bestFor: ['Heavy products', 'Pet food', 'Easy access needed'],
    description: 'Easy one-hand operation with sliding mechanism'
  },
  {
    id: 'child-resistant',
    name: 'Child Resistant Zipper',
    img: '/imgs/store/closure/child-resistant-zipper.webp',
    type: 'zipper',
    reclosable: true,
    childResistant: true,
    premium: true,
    bestFor: ['Cannabis', 'Pharmaceuticals', 'Supplements', 'CBD'],
    description: 'Push-and-slide mechanism meets child safety standards'
  },
  {
    id: 'tin-tie',
    name: 'Tin Tie (Wire Closure)',
    img: '/imgs/store/closure/tin-tie.webp',
    type: 'specialty',
    reclosable: true,
    childResistant: false,
    premium: true,
    bestFor: ['Bakery', 'Coffee beans', 'Artisan products'],
    description: 'Classic fold-over wire closure for artisan appeal'
  },
  {
    id: 'spout',
    name: 'Spout Cap',
    img: '/imgs/store/closure/spout.webp',
    type: 'specialty',
    reclosable: true,
    childResistant: false,
    premium: true,
    bestFor: ['Liquids', 'Sauces', 'Baby food', 'Beverages'],
    description: 'Pour spout with screw cap for liquid products'
  },
  {
    id: 'adhesive-tape',
    name: 'Adhesive Tape Strip',
    img: '/imgs/store/closure/adhesive-tap.webp',
    type: 'specialty',
    reclosable: true,
    childResistant: false,
    premium: false,
    bestFor: ['E-commerce mailers', 'Documents', 'Apparel'],
    description: 'Self-adhesive strip for easy sealing'
  }
]

// ============ SURFACE OPTIONS ============
export interface SurfaceOption {
  id: string
  name: string
  img: string
  finish: 'matte' | 'gloss' | 'texture' | 'metallic'
  premium: boolean
  printQuality: 'standard' | 'enhanced' | 'premium'
  tactile: boolean
  bestFor: string[]
  description: string
}

export const SURFACE_OPTIONS: SurfaceOption[] = [
  {
    id: 'matt',
    name: 'Matte Finish',
    img: '/imgs/store/surface/matt.webp',
    finish: 'matte',
    premium: false,
    printQuality: 'standard',
    tactile: false,
    bestFor: ['Natural products', 'Organic brands', 'Eco-friendly'],
    description: 'Subtle, non-reflective finish with elegant appearance'
  },
  {
    id: 'glossy',
    name: 'Gloss Finish',
    img: '/imgs/store/surface/glossy.webp',
    finish: 'gloss',
    premium: false,
    printQuality: 'enhanced',
    tactile: false,
    bestFor: ['Vibrant colors', 'Food products', 'Retail shelf appeal'],
    description: 'High-shine finish that makes colors pop'
  },
  {
    id: 'metallic',
    name: 'Metallic Finish',
    img: '/imgs/store/surface/metalic.webp',
    finish: 'metallic',
    premium: true,
    printQuality: 'premium',
    tactile: false,
    bestFor: ['Luxury products', 'Supplements', 'Premium coffee'],
    description: 'Reflective metallic appearance for premium positioning'
  },
  {
    id: 'soft-touch',
    name: 'Soft Touch Finish',
    img: '/imgs/store/surface/soft-touch.webp',
    finish: 'texture',
    premium: true,
    printQuality: 'premium',
    tactile: true,
    bestFor: ['Luxury brands', 'Cosmetics', 'High-end gifts'],
    description: 'Velvety texture that invites touch and feels premium'
  },
  {
    id: 'emboss',
    name: 'Embossing',
    img: '/imgs/store/surface/emboss.webp',
    finish: 'texture',
    premium: true,
    printQuality: 'premium',
    tactile: true,
    bestFor: ['Logo emphasis', 'Branding', 'Tactile appeal'],
    description: 'Raised texture creates 3D effect on packaging'
  },
  {
    id: 'stamp-foil',
    name: 'Foil Stamping',
    img: '/imgs/store/surface/stamp-foil.webp',
    finish: 'metallic',
    premium: true,
    printQuality: 'premium',
    tactile: true,
    bestFor: ['Gold/silver accents', 'Luxury', 'Special editions'],
    description: 'Metallic foil applied to specific areas for shine'
  }
]

// ============ ADDITIONAL FEATURES ============
export interface AdditionalFeature {
  id: string
  name: string
  img: string
  category: 'functionality' | 'convenience' | 'display'
  popular: boolean
  bestFor: string[]
  description: string
}

export const ADDITIONAL_FEATURES: AdditionalFeature[] = [
  {
    id: 'valve',
    name: 'Degassing Valve',
    img: '/imgs/store/additional/valve.webp',
    category: 'functionality',
    popular: true,
    bestFor: ['Coffee', 'Freshly roasted beans', 'Gas-releasing products'],
    description: 'One-way valve releases CO2 while preventing air entry'
  },
  {
    id: 'laser-tear',
    name: 'Laser Scoring (Easy Tear)',
    img: '/imgs/store/additional/laser-tear.webp',
    category: 'convenience',
    popular: true,
    bestFor: ['Snacks', 'Single-serve', 'On-the-go products'],
    description: 'Precision tear line for easy opening without scissors'
  },
  {
    id: 'hang-hole',
    name: 'Hang Hole (Euro Slot)',
    img: '/imgs/store/additional/hang-hole.webp',
    category: 'display',
    popular: true,
    bestFor: ['Retail display', 'Pegboard hanging', 'Store shelves'],
    description: 'Die-cut hole for hanging on retail display hooks'
  }
]

// ============ BARRIER OPTIONS ============
export interface BarrierOption {
  id: string
  name: string
  img: string
  layers: number
  material: 'clear' | 'paper' | 'foil' | 'paperclear'
  barrierLevel: 'low' | 'medium' | 'high' | 'max'
  shelfLife: string
  oxygenBarrier: boolean
  moistureBarrier: boolean
  lightBarrier: boolean
  bestFor: string[]
  description: string
}

export const BARRIER_OPTIONS: BarrierOption[] = [
  {
    id: '2-clear',
    name: '2-Layer Clear',
    img: '/imgs/store/barrier/2-clear.webp',
    layers: 2,
    material: 'clear',
    barrierLevel: 'low',
    shelfLife: '3-6 months',
    oxygenBarrier: false,
    moistureBarrier: true,
    lightBarrier: false,
    bestFor: ['Dry goods', 'Grains', 'Visual products'],
    description: 'Basic protection for dry, non-sensitive products'
  },
  {
    id: '2-paper',
    name: '2-Layer Paper',
    img: '/imgs/store/barrier/2-paper.webp',
    layers: 2,
    material: 'paper',
    barrierLevel: 'low',
    shelfLife: '3-6 months',
    oxygenBarrier: false,
    moistureBarrier: true,
    lightBarrier: true,
    bestFor: ['Bakery', 'Dry snacks', 'Natural look'],
    description: 'Kraft paper exterior with basic PE lining'
  },
  {
    id: '3-clear',
    name: '3-Layer Clear',
    img: '/imgs/store/barrier/3-clear.webp',
    layers: 3,
    material: 'clear',
    barrierLevel: 'medium',
    shelfLife: '6-12 months',
    oxygenBarrier: true,
    moistureBarrier: true,
    lightBarrier: false,
    bestFor: ['Snacks', 'Candy', 'Nuts', 'Product visibility'],
    description: 'Enhanced barrier with EVOH or nylon middle layer'
  },
  {
    id: '3-paper',
    name: '3-Layer Paper',
    img: '/imgs/store/barrier/3-paper.webp',
    layers: 3,
    material: 'paper',
    barrierLevel: 'medium',
    shelfLife: '6-12 months',
    oxygenBarrier: true,
    moistureBarrier: true,
    lightBarrier: true,
    bestFor: ['Coffee', 'Tea', 'Granola', 'Natural brands'],
    description: 'Kraft exterior with enhanced barrier layers'
  },
  {
    id: '3-paperclear',
    name: '3-Layer Paper with Window',
    img: '/imgs/store/barrier/3-paperclear.webp',
    layers: 3,
    material: 'paperclear',
    barrierLevel: 'medium',
    shelfLife: '6-12 months',
    oxygenBarrier: true,
    moistureBarrier: true,
    lightBarrier: false,
    bestFor: ['Display products', 'Granola', 'Mixed items'],
    description: 'Paper with clear window for product visibility'
  },
  {
    id: '3-foil',
    name: '3-Layer Foil (Metalised)',
    img: '/imgs/store/barrier/3-foil.webp',
    layers: 3,
    material: 'foil',
    barrierLevel: 'high',
    shelfLife: '12-24 months',
    oxygenBarrier: true,
    moistureBarrier: true,
    lightBarrier: true,
    bestFor: ['Coffee', 'Pharmaceuticals', 'Sensitive products'],
    description: 'Metalised layer provides maximum protection'
  },
  {
    id: '4-paper',
    name: '4-Layer Paper Premium',
    img: '/imgs/store/barrier/4-paper.webp',
    layers: 4,
    material: 'paper',
    barrierLevel: 'max',
    shelfLife: '24+ months',
    oxygenBarrier: true,
    moistureBarrier: true,
    lightBarrier: true,
    bestFor: ['Premium coffee', 'Long shelf life', 'Export'],
    description: 'Maximum protection with paper exterior'
  }
]

// ============ SORTABLE TABLE COMPONENT ============
type SortDirection = 'asc' | 'desc'

interface SortableOptionsTableProps<T> {
  options: T[]
  title: string
  categoryColor: 'blue' | 'green' | 'purple' | 'amber' | 'red'
  productLink?: string
  type: 'closure' | 'surface' | 'additional' | 'barrier'
}

type OptionType = ClosureOption | SurfaceOption | AdditionalFeature | BarrierOption

export function SortableOptionsTable<T extends OptionType>({
  options,
  title,
  categoryColor,
  productLink = '/store/product/eco-standup',
  type
}: SortableOptionsTableProps<T>) {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid')
  const [sortBy, setSortBy] = useState<string>('name')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxTitle, setLightboxTitle] = useState<string>('')

  const colorClasses = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-800' },
    green: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-800' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-800' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-800' },
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', badge: 'bg-red-100 text-red-800' }
  }[categoryColor]

  const handleSort = useCallback((field: string) => {
    if (sortBy === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortDirection('asc')
    }
  }, [sortBy])

  const sortedOptions = useMemo(() => {
    return [...options].sort((a, b) => {
      let aVal: string | number | boolean = ''
      let bVal: string | number | boolean = ''

      switch (sortBy) {
        case 'name':
          aVal = a.name
          bVal = b.name
          break
        case 'premium':
          aVal = 'premium' in a ? (a.premium ? 1 : 0) : 0
          bVal = 'premium' in b ? (b.premium ? 1 : 0) : 0
          break
        case 'reclosable':
          aVal = 'reclosable' in a ? (a.reclosable ? 1 : 0) : 0
          bVal = 'reclosable' in b ? (b.reclosable ? 1 : 0) : 0
          break
        case 'layers':
          aVal = 'layers' in a ? a.layers : 0
          bVal = 'layers' in b ? b.layers : 0
          break
        case 'barrierLevel':
          const barrierOrder = { low: 1, medium: 2, high: 3, max: 4 }
          aVal = 'barrierLevel' in a ? barrierOrder[a.barrierLevel as keyof typeof barrierOrder] : 0
          bVal = 'barrierLevel' in b ? barrierOrder[b.barrierLevel as keyof typeof barrierOrder] : 0
          break
        default:
          aVal = a.name
          bVal = b.name
      }

      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortDirection === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
      }
      return sortDirection === 'asc' ? Number(aVal) - Number(bVal) : Number(bVal) - Number(aVal)
    })
  }, [options, sortBy, sortDirection])

  const openLightbox = (img: string, name: string) => {
    setLightboxImage(img)
    setLightboxTitle(name)
  }

  const getSortButtons = () => {
    switch (type) {
      case 'closure':
        return ['name', 'reclosable', 'premium']
      case 'surface':
        return ['name', 'premium']
      case 'additional':
        return ['name']
      case 'barrier':
        return ['name', 'layers', 'barrierLevel']
      default:
        return ['name']
    }
  }

  const getSortLabel = (field: string) => {
    const labels: Record<string, string> = {
      name: 'Name',
      reclosable: 'Reclosable',
      premium: 'Premium',
      layers: 'Layers',
      barrierLevel: 'Barrier Level'
    }
    return labels[field] || field
  }

  return (
    <div className={`${colorClasses.bg} p-6 rounded-2xl border ${colorClasses.border}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className={`text-lg font-bold ${colorClasses.text}`}>{title}</h3>
        
        <div className="flex flex-wrap items-center gap-2">
          {/* Sort Buttons */}
          {getSortButtons().map(field => (
            <button
              key={field}
              onClick={() => handleSort(field)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                sortBy === field ? `${colorClasses.badge}` : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              {getSortLabel(field)}
              <ArrowUpDown className="h-3 w-3" />
            </button>
          ))}
          
          {/* View Toggle */}
          <div className="flex bg-white rounded-lg p-0.5 border border-neutral-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded ${viewMode === 'grid' ? colorClasses.badge : 'text-neutral-400'}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded ${viewMode === 'table' ? colorClasses.badge : 'text-neutral-400'}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedOptions.map((option) => (
            <div
              key={option.id}
              className="bg-white rounded-xl p-4 border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all group"
            >
              {/* Image */}
              <div 
                className="aspect-square bg-neutral-50 rounded-lg mb-3 flex items-center justify-center cursor-pointer overflow-hidden"
                onClick={() => openLightbox(option.img, option.name)}
              >
                <img
                  src={option.img}
                  alt={option.name}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
              
              {/* Name */}
              <h4 className="font-semibold text-sm text-neutral-800 mb-1 line-clamp-2">{option.name}</h4>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-1 mb-2">
                {'premium' in option && option.premium && (
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-amber-100 text-amber-700 text-xs rounded">
                    <Sparkles className="h-3 w-3" />
                    Premium
                  </span>
                )}
                {'reclosable' in option && option.reclosable && (
                  <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-xs rounded">Reclosable</span>
                )}
                {'childResistant' in option && option.childResistant && (
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-red-100 text-red-700 text-xs rounded">
                    <Lock className="h-3 w-3" />
                    Child-Safe
                  </span>
                )}
                {'barrierLevel' in option && (
                  <span className={`px-1.5 py-0.5 text-xs rounded ${
                    option.barrierLevel === 'max' ? 'bg-purple-100 text-purple-700' :
                    option.barrierLevel === 'high' ? 'bg-blue-100 text-blue-700' :
                    option.barrierLevel === 'medium' ? 'bg-green-100 text-green-700' :
                    'bg-neutral-100 text-neutral-700'
                  }`}>
                    {option.barrierLevel.toUpperCase()}
                  </span>
                )}
                {'layers' in option && (
                  <span className="px-1.5 py-0.5 bg-neutral-100 text-neutral-700 text-xs rounded">
                    {option.layers}L
                  </span>
                )}
              </div>
              
              {/* Description */}
              <p className="text-xs text-neutral-500 line-clamp-2">{option.description}</p>
              
              {/* Best For */}
              <div className="mt-2 pt-2 border-t border-neutral-100">
                <p className="text-xs text-neutral-400">Best for:</p>
                <p className="text-xs text-neutral-600 line-clamp-1">{option.bestFor.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Table View */}
      {viewMode === 'table' && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-2 px-3 font-semibold text-neutral-700">Image</th>
                <th className="text-left py-2 px-3 font-semibold text-neutral-700">Name</th>
                {type === 'closure' && (
                  <>
                    <th className="text-center py-2 px-3 font-semibold text-neutral-700">Reclosable</th>
                    <th className="text-center py-2 px-3 font-semibold text-neutral-700">Child-Safe</th>
                  </>
                )}
                {type === 'barrier' && (
                  <>
                    <th className="text-center py-2 px-3 font-semibold text-neutral-700">Layers</th>
                    <th className="text-center py-2 px-3 font-semibold text-neutral-700">Barrier</th>
                    <th className="text-center py-2 px-3 font-semibold text-neutral-700">Shelf Life</th>
                  </>
                )}
                <th className="text-center py-2 px-3 font-semibold text-neutral-700">Premium</th>
                <th className="text-left py-2 px-3 font-semibold text-neutral-700">Best For</th>
              </tr>
            </thead>
            <tbody>
              {sortedOptions.map((option) => (
                <tr key={option.id} className="border-b border-neutral-100 hover:bg-white">
                  <td className="py-2 px-3">
                    <img
                      src={option.img}
                      alt={option.name}
                      className="w-12 h-12 object-contain bg-neutral-50 rounded cursor-pointer"
                      onClick={() => openLightbox(option.img, option.name)}
                    />
                  </td>
                  <td className="py-2 px-3 font-medium text-neutral-800">{option.name}</td>
                  {type === 'closure' && 'reclosable' in option && (
                    <>
                      <td className="py-2 px-3 text-center">
                        {option.reclosable ? '✓' : '–'}
                      </td>
                      <td className="py-2 px-3 text-center">
                        {'childResistant' in option && option.childResistant ? '✓' : '–'}
                      </td>
                    </>
                  )}
                  {type === 'barrier' && 'layers' in option && (
                    <>
                      <td className="py-2 px-3 text-center">{option.layers}</td>
                      <td className="py-2 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          option.barrierLevel === 'max' ? 'bg-purple-100 text-purple-700' :
                          option.barrierLevel === 'high' ? 'bg-blue-100 text-blue-700' :
                          option.barrierLevel === 'medium' ? 'bg-green-100 text-green-700' :
                          'bg-neutral-100 text-neutral-700'
                        }`}>
                          {option.barrierLevel.toUpperCase()}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-center text-xs">{'shelfLife' in option && option.shelfLife}</td>
                    </>
                  )}
                  <td className="py-2 px-3 text-center">
                    {'premium' in option && option.premium ? (
                      <Sparkles className="h-4 w-4 text-amber-500 mx-auto" />
                    ) : '–'}
                  </td>
                  <td className="py-2 px-3 text-xs text-neutral-600">{option.bestFor.slice(0, 2).join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Product Link */}
      <div className="mt-6 pt-4 border-t border-neutral-200 text-center">
        <Link
          to={productLink}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${colorClasses.badge} hover:opacity-80 transition-opacity text-sm font-medium`}
        >
          View in Eco Digital Stand Up Pouch →
        </Link>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-2xl w-full bg-white rounded-2xl p-4" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-neutral-100"
            >
              <X className="h-5 w-5" />
            </button>
            <img src={lightboxImage} alt={lightboxTitle} className="w-full h-auto max-h-[70vh] object-contain" />
            <p className="text-center mt-3 font-semibold text-neutral-800">{lightboxTitle}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SortableOptionsTable
