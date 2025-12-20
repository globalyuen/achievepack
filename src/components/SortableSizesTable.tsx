import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpDown, ArrowUp, ArrowDown, Filter, Ruler, Package, Box, Scale, Eye } from 'lucide-react'

// Size data type
export interface PouchSize {
  id: string
  code: string // XXXS, XXS, XS, S, M, L, XL, XXL
  name: string
  img: string
  widthMm: number
  heightMm: number
  gussetMm: number
  widthInch: number
  heightInch: number
  gussetInch: number
  capacityG: string // e.g., "10-25g"
  capacityOz: string
  volumeMl: number // approximate volume for sorting
  bestFor: string[]
  pouchType: 'stand-up' | 'flat-bottom' | '3-side-seal' | 'center-seal' | 'quad-seal' | 'side-gusset' | 'box-bottom'
}

// Stand Up Pouch Sizes - from eco-standup product
export const STAND_UP_SIZES: PouchSize[] = [
  {
    id: 'sup-xxxs',
    code: 'XXXS',
    name: 'Extra Extra Extra Small',
    img: '/imgs/store/size/stand-up/xxxs.webp',
    widthMm: 90,
    heightMm: 110,
    gussetMm: 60,
    widthInch: 3.5,
    heightInch: 4.3,
    gussetInch: 2.4,
    capacityG: '10-25g',
    capacityOz: '0.35-0.9 oz',
    volumeMl: 50,
    bestFor: ['Samples', 'Single-serve', 'Sachets', 'Candy'],
    pouchType: 'stand-up'
  },
  {
    id: 'sup-xxs',
    code: 'XXS',
    name: 'Extra Extra Small',
    img: '/imgs/store/size/stand-up/xxs.webp',
    widthMm: 110,
    heightMm: 160,
    gussetMm: 60,
    widthInch: 4.3,
    heightInch: 6.3,
    gussetInch: 2.4,
    capacityG: '25-50g',
    capacityOz: '0.9-1.8 oz',
    volumeMl: 100,
    bestFor: ['Tea bags', 'Spices', 'Small snacks', 'Samples'],
    pouchType: 'stand-up'
  },
  {
    id: 'sup-xs',
    code: 'XS',
    name: 'Extra Small',
    img: '/imgs/store/size/stand-up/xs.webp',
    widthMm: 130,
    heightMm: 180,
    gussetMm: 80,
    widthInch: 5.1,
    heightInch: 7.1,
    gussetInch: 3.1,
    capacityG: '50-100g',
    capacityOz: '1.8-3.5 oz',
    volumeMl: 200,
    bestFor: ['Coffee 100g', 'Nuts', 'Trail mix', 'Jerky'],
    pouchType: 'stand-up'
  },
  {
    id: 'sup-s',
    code: 'S',
    name: 'Small',
    img: '/imgs/store/size/stand-up/s.webp',
    widthMm: 150,
    heightMm: 200,
    gussetMm: 80,
    widthInch: 5.9,
    heightInch: 7.9,
    gussetInch: 3.1,
    capacityG: '100-200g',
    capacityOz: '3.5-7 oz',
    volumeMl: 350,
    bestFor: ['Coffee 200g', 'Granola', 'Pet treats', 'Dried fruits'],
    pouchType: 'stand-up'
  },
  {
    id: 'sup-l',
    code: 'L',
    name: 'Large',
    img: '/imgs/store/size/stand-up/l.webp',
    widthMm: 180,
    heightMm: 250,
    gussetMm: 80,
    widthInch: 7.1,
    heightInch: 9.8,
    gussetInch: 3.1,
    capacityG: '250-500g',
    capacityOz: '8.8-17.6 oz',
    volumeMl: 600,
    bestFor: ['Coffee 12oz', 'Standard retail', 'Cereals', 'Rice'],
    pouchType: 'stand-up'
  },
  {
    id: 'sup-xl',
    code: 'XL',
    name: 'Extra Large',
    img: '/imgs/store/size/stand-up/xl.webp',
    widthMm: 200,
    heightMm: 300,
    gussetMm: 100,
    widthInch: 7.9,
    heightInch: 11.8,
    gussetInch: 3.9,
    capacityG: '500g-1kg',
    capacityOz: '1.1-2.2 lb',
    volumeMl: 1000,
    bestFor: ['Family size', 'Pet food 1kg', 'Bulk snacks', 'Protein powder'],
    pouchType: 'stand-up'
  },
  {
    id: 'sup-xxl',
    code: 'XXL',
    name: 'Extra Extra Large',
    img: '/imgs/store/size/stand-up/xxl.webp',
    widthMm: 250,
    heightMm: 350,
    gussetMm: 100,
    widthInch: 9.8,
    heightInch: 13.8,
    gussetInch: 3.9,
    capacityG: '1-2kg',
    capacityOz: '2.2-4.4 lb',
    volumeMl: 2000,
    bestFor: ['Bulk coffee', 'Pet food 2kg', 'Wholesale', 'Industrial'],
    pouchType: 'stand-up'
  },
]

// Flat Bottom Bag Sizes
export const FLAT_BOTTOM_SIZES: PouchSize[] = [
  {
    id: 'fb-xxxs',
    code: 'XXXS',
    name: 'Extra Extra Extra Small',
    img: '/imgs/store/size/flat-bottom/xxxs.webp',
    widthMm: 70,
    heightMm: 120,
    gussetMm: 40,
    widthInch: 2.8,
    heightInch: 4.7,
    gussetInch: 1.6,
    capacityG: '25-50g',
    capacityOz: '0.9-1.8 oz',
    volumeMl: 80,
    bestFor: ['Samples', 'Sachets', 'Small gifts'],
    pouchType: 'flat-bottom'
  },
  {
    id: 'fb-xxs',
    code: 'XXS',
    name: 'Extra Extra Small',
    img: '/imgs/store/size/flat-bottom/xxs.webp',
    widthMm: 95,
    heightMm: 140,
    gussetMm: 55,
    widthInch: 3.7,
    heightInch: 5.5,
    gussetInch: 2.2,
    capacityG: '50-100g',
    capacityOz: '1.8-3.5 oz',
    volumeMl: 150,
    bestFor: ['Single-origin coffee', 'Premium tea', 'Spices'],
    pouchType: 'flat-bottom'
  },
  {
    id: 'fb-xs',
    code: 'XS',
    name: 'Extra Small',
    img: '/imgs/store/size/flat-bottom/xs.webp',
    widthMm: 95,
    heightMm: 190,
    gussetMm: 55,
    widthInch: 3.7,
    heightInch: 7.5,
    gussetInch: 2.2,
    capacityG: '100-200g',
    capacityOz: '3.5-7 oz',
    volumeMl: 250,
    bestFor: ['Coffee 8oz', 'Tea blends', 'Specialty snacks'],
    pouchType: 'flat-bottom'
  },
  {
    id: 'fb-s',
    code: 'S',
    name: 'Small',
    img: '/imgs/store/size/flat-bottom/s.webp',
    widthMm: 120,
    heightMm: 200,
    gussetMm: 70,
    widthInch: 4.7,
    heightInch: 7.9,
    gussetInch: 2.8,
    capacityG: '200-350g',
    capacityOz: '7-12 oz',
    volumeMl: 400,
    bestFor: ['Coffee 12oz', 'Premium granola', 'Gourmet snacks'],
    pouchType: 'flat-bottom'
  },
  {
    id: 'fb-l',
    code: 'L',
    name: 'Large',
    img: '/imgs/store/size/flat-bottom/l.webp',
    widthMm: 140,
    heightMm: 270,
    gussetMm: 80,
    widthInch: 5.5,
    heightInch: 10.6,
    gussetInch: 3.1,
    capacityG: '500g-1kg',
    capacityOz: '1.1-2.2 lb',
    volumeMl: 800,
    bestFor: ['Coffee 1kg', 'Pet food', 'Bulk cereals'],
    pouchType: 'flat-bottom'
  },
  {
    id: 'fb-xl',
    code: 'XL',
    name: 'Extra Large',
    img: '/imgs/store/size/flat-bottom/xl.webp',
    widthMm: 150,
    heightMm: 320,
    gussetMm: 90,
    widthInch: 5.9,
    heightInch: 12.6,
    gussetInch: 3.5,
    capacityG: '1-1.5kg',
    capacityOz: '2.2-3.3 lb',
    volumeMl: 1200,
    bestFor: ['Commercial coffee', 'Pet food bags', 'Wholesale'],
    pouchType: 'flat-bottom'
  },
  {
    id: 'fb-xxl',
    code: 'XXL',
    name: 'Extra Extra Large',
    img: '/imgs/store/size/flat-bottom/xxl.webp',
    widthMm: 180,
    heightMm: 380,
    gussetMm: 100,
    widthInch: 7.1,
    heightInch: 15.0,
    gussetInch: 3.9,
    capacityG: '1.5-2.5kg',
    capacityOz: '3.3-5.5 lb',
    volumeMl: 2000,
    bestFor: ['Bulk orders', 'Industrial', 'Large format retail'],
    pouchType: 'flat-bottom'
  },
]

// 3 Side Seal Sizes (no gusset)
export const THREE_SIDE_SEAL_SIZES: PouchSize[] = [
  {
    id: '3ss-xxxs',
    code: 'XXXS',
    name: 'Extra Extra Extra Small',
    img: '/imgs/store/pouch shape/3-side.webp',
    widthMm: 90,
    heightMm: 110,
    gussetMm: 0,
    widthInch: 3.5,
    heightInch: 4.3,
    gussetInch: 0,
    capacityG: '5-15g',
    capacityOz: '0.2-0.5 oz',
    volumeMl: 30,
    bestFor: ['Sachets', 'Single-use samples', 'Condiments'],
    pouchType: '3-side-seal'
  },
  {
    id: '3ss-xxs',
    code: 'XXS',
    name: 'Extra Extra Small',
    img: '/imgs/store/pouch shape/3-side.webp',
    widthMm: 110,
    heightMm: 160,
    gussetMm: 0,
    widthInch: 4.3,
    heightInch: 6.3,
    gussetInch: 0,
    capacityG: '15-30g',
    capacityOz: '0.5-1 oz',
    volumeMl: 50,
    bestFor: ['Tea bags', 'Spice packets', 'Sample packs'],
    pouchType: '3-side-seal'
  },
  {
    id: '3ss-xs',
    code: 'XS',
    name: 'Extra Small',
    img: '/imgs/store/pouch shape/3-side.webp',
    widthMm: 130,
    heightMm: 180,
    gussetMm: 0,
    widthInch: 5.1,
    heightInch: 7.1,
    gussetInch: 0,
    capacityG: '30-60g',
    capacityOz: '1-2 oz',
    volumeMl: 80,
    bestFor: ['Snack bars', 'Single-serve jerky', 'Face masks'],
    pouchType: '3-side-seal'
  },
  {
    id: '3ss-l',
    code: 'L',
    name: 'Large',
    img: '/imgs/store/pouch shape/3-side.webp',
    widthMm: 180,
    heightMm: 250,
    gussetMm: 0,
    widthInch: 7.1,
    heightInch: 9.8,
    gussetInch: 0,
    capacityG: '100-200g',
    capacityOz: '3.5-7 oz',
    volumeMl: 200,
    bestFor: ['Flat products', 'Documents', 'Apparel accessories'],
    pouchType: '3-side-seal'
  },
  {
    id: '3ss-xl',
    code: 'XL',
    name: 'Extra Large',
    img: '/imgs/store/pouch shape/3-side.webp',
    widthMm: 200,
    heightMm: 300,
    gussetMm: 0,
    widthInch: 7.9,
    heightInch: 11.8,
    gussetInch: 0,
    capacityG: '200-400g',
    capacityOz: '7-14 oz',
    volumeMl: 350,
    bestFor: ['Clothing', 'Large flat items', 'Kits'],
    pouchType: '3-side-seal'
  },
]

// All sizes combined
export const ALL_SIZES: PouchSize[] = [
  ...STAND_UP_SIZES,
  ...FLAT_BOTTOM_SIZES,
  ...THREE_SIDE_SEAL_SIZES,
]

type SortKey = 'code' | 'volumeMl' | 'widthMm' | 'heightMm' | 'gussetMm'
type SortDirection = 'asc' | 'desc'

interface FilterOptions {
  pouchType: PouchSize['pouchType'] | null
  sizeCode: string | null
}

interface SortableSizesTableProps {
  sizes: PouchSize[]
  title: string
  categoryColor?: string
  showPouchTypeColumn?: boolean
  productLink?: string
}

const codeOrder: Record<string, number> = {
  'XXXS': 1,
  'XXS': 2,
  'XS': 3,
  'S': 4,
  'M': 5,
  'L': 6,
  'XL': 7,
  'XXL': 8,
  'XXXL': 9,
}

const pouchTypeLabels: Record<string, string> = {
  'stand-up': 'Stand Up',
  'flat-bottom': 'Flat Bottom',
  '3-side-seal': '3 Side Seal',
  'center-seal': 'Center Seal',
  'quad-seal': 'Quad Seal',
  'side-gusset': 'Side Gusset',
  'box-bottom': 'Box Bottom',
}

const SortableSizesTable: React.FC<SortableSizesTableProps> = ({
  sizes,
  title,
  categoryColor = 'blue',
  showPouchTypeColumn = false,
  productLink = '/store/product/eco-standup',
}) => {
  const [sortKey, setSortKey] = useState<SortKey>('code')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
  const [filters, setFilters] = useState<FilterOptions>({ pouchType: null, sizeCode: null })
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('grid')
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDirection('asc')
    }
  }

  const getSortIcon = (key: SortKey) => {
    if (sortKey !== key) return <ArrowUpDown className="h-3 w-3 text-neutral-400" />
    return sortDirection === 'asc' 
      ? <ArrowUp className="h-3 w-3 text-primary-600" />
      : <ArrowDown className="h-3 w-3 text-primary-600" />
  }

  const filteredAndSortedSizes = useMemo(() => {
    let result = [...sizes]
    
    // Apply filters
    if (filters.pouchType) {
      result = result.filter(s => s.pouchType === filters.pouchType)
    }
    if (filters.sizeCode) {
      result = result.filter(s => s.code === filters.sizeCode)
    }
    
    // Apply sorting
    result.sort((a, b) => {
      let comparison = 0
      switch (sortKey) {
        case 'code':
          comparison = codeOrder[a.code] - codeOrder[b.code]
          break
        case 'volumeMl':
          comparison = a.volumeMl - b.volumeMl
          break
        case 'widthMm':
          comparison = a.widthMm - b.widthMm
          break
        case 'heightMm':
          comparison = a.heightMm - b.heightMm
          break
        case 'gussetMm':
          comparison = a.gussetMm - b.gussetMm
          break
      }
      return sortDirection === 'asc' ? comparison : -comparison
    })
    
    return result
  }, [sizes, sortKey, sortDirection, filters])

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    amber: 'bg-amber-50 border-amber-200 text-amber-800',
  }

  const headerColor = colorClasses[categoryColor as keyof typeof colorClasses] || colorClasses.blue

  const uniqueSizeCodes = [...new Set(sizes.map(s => s.code))].sort((a, b) => codeOrder[a] - codeOrder[b])

  return (
    <div className="space-y-4">
      {/* Header with Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h3 className="text-lg font-bold text-neutral-800">{title}</h3>
        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <div className="flex bg-neutral-100 rounded-lg p-0.5">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${viewMode === 'grid' ? 'bg-white shadow text-primary-700' : 'text-neutral-600'}`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${viewMode === 'table' ? 'bg-white shadow text-primary-700' : 'text-neutral-600'}`}
            >
              Table
            </button>
          </div>
          
          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border transition ${showFilters ? 'bg-primary-50 border-primary-300 text-primary-700' : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}
          >
            <Filter className="h-3 w-3" />
            Filters
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className={`p-4 rounded-lg border ${headerColor}`}>
          <div className="flex flex-wrap gap-4">
            {showPouchTypeColumn && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium">Type:</span>
                <select
                  value={filters.pouchType || ''}
                  onChange={(e) => setFilters({ ...filters, pouchType: (e.target.value || null) as FilterOptions['pouchType'] })}
                  className="text-xs px-2 py-1 rounded border border-neutral-300 bg-white"
                >
                  <option value="">All</option>
                  <option value="stand-up">Stand Up</option>
                  <option value="flat-bottom">Flat Bottom</option>
                  <option value="3-side-seal">3 Side Seal</option>
                </select>
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium">Size:</span>
              <select
                value={filters.sizeCode || ''}
                onChange={(e) => setFilters({ ...filters, sizeCode: e.target.value || null })}
                className="text-xs px-2 py-1 rounded border border-neutral-300 bg-white"
              >
                <option value="">All</option>
                {uniqueSizeCodes.map(code => (
                  <option key={code} value={code}>{code}</option>
                ))}
              </select>
            </div>
            <button
              onClick={() => setFilters({ pouchType: null, sizeCode: null })}
              className="text-xs text-primary-600 hover:underline"
            >
              Clear all
            </button>
          </div>
        </div>
      )}

      {/* Results Count */}
      <p className="text-xs text-neutral-500">
        Showing {filteredAndSortedSizes.length} of {sizes.length} sizes
        {sortKey && ` • Sorted by ${sortKey === 'volumeMl' ? 'Capacity' : sortKey.charAt(0).toUpperCase() + sortKey.slice(1).replace('Mm', ' (mm)')} (${sortDirection === 'asc' ? 'small→large' : 'large→small'})`}
      </p>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredAndSortedSizes.map((size) => (
            <div
              key={size.id}
              className="group bg-white border-2 rounded-xl p-3 hover:border-primary-400 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setEnlargedImage(size.img)}
            >
              <div className="aspect-[3/4] overflow-hidden bg-neutral-50 rounded-lg mb-3">
                <img 
                  src={size.img} 
                  alt={`${size.code} ${size.name}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg text-primary-700">{size.code}</span>
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">{size.capacityG}</span>
                </div>
                <p className="text-xs text-neutral-600">
                  {size.widthMm} × {size.heightMm}{size.gussetMm > 0 ? ` + ${size.gussetMm}` : ''}mm
                </p>
                <p className="text-xs text-neutral-500">
                  ({size.widthInch}" × {size.heightInch}"{size.gussetInch > 0 ? ` + ${size.gussetInch}"` : ''})
                </p>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/90 rounded-full p-1.5 shadow-lg">
                  <Eye className="h-4 w-4 text-primary-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Table View */}
      {viewMode === 'table' && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className={headerColor}>
                <th className="p-2 text-left border font-semibold">Image</th>
                <th className="p-2 text-center border font-semibold">
                  <button onClick={() => handleSort('code')} className="flex items-center gap-1 mx-auto hover:text-primary-700">
                    Size {getSortIcon('code')}
                  </button>
                </th>
                <th className="p-2 text-center border font-semibold">
                  <button onClick={() => handleSort('widthMm')} className="flex items-center gap-1 mx-auto hover:text-primary-700">
                    Width {getSortIcon('widthMm')}
                  </button>
                </th>
                <th className="p-2 text-center border font-semibold">
                  <button onClick={() => handleSort('heightMm')} className="flex items-center gap-1 mx-auto hover:text-primary-700">
                    Height {getSortIcon('heightMm')}
                  </button>
                </th>
                <th className="p-2 text-center border font-semibold">
                  <button onClick={() => handleSort('gussetMm')} className="flex items-center gap-1 mx-auto hover:text-primary-700">
                    Gusset {getSortIcon('gussetMm')}
                  </button>
                </th>
                <th className="p-2 text-center border font-semibold">
                  <button onClick={() => handleSort('volumeMl')} className="flex items-center gap-1 mx-auto hover:text-primary-700">
                    Capacity {getSortIcon('volumeMl')}
                  </button>
                </th>
                <th className="p-2 text-left border font-semibold">Best For</th>
                {showPouchTypeColumn && <th className="p-2 text-center border font-semibold">Type</th>}
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedSizes.map((size, idx) => (
                <tr key={size.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                  <td className="p-2 border">
                    <button onClick={() => setEnlargedImage(size.img)}>
                      <img src={size.img} alt={size.name} className="w-16 h-20 object-cover rounded hover:scale-105 transition" />
                    </button>
                  </td>
                  <td className="p-2 text-center border font-bold text-primary-700">{size.code}</td>
                  <td className="p-2 text-center border font-mono text-xs">
                    {size.widthMm}mm<br/><span className="text-neutral-400">({size.widthInch}")</span>
                  </td>
                  <td className="p-2 text-center border font-mono text-xs">
                    {size.heightMm}mm<br/><span className="text-neutral-400">({size.heightInch}")</span>
                  </td>
                  <td className="p-2 text-center border font-mono text-xs">
                    {size.gussetMm > 0 ? <>{size.gussetMm}mm<br/><span className="text-neutral-400">({size.gussetInch}")</span></> : '-'}
                  </td>
                  <td className="p-2 text-center border">
                    <span className="font-medium">{size.capacityG}</span><br/>
                    <span className="text-xs text-neutral-500">{size.capacityOz}</span>
                  </td>
                  <td className="p-2 border">
                    <div className="flex flex-wrap gap-1">
                      {size.bestFor.slice(0, 3).map((use, i) => (
                        <span key={i} className="text-[10px] bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded">{use}</span>
                      ))}
                    </div>
                  </td>
                  {showPouchTypeColumn && (
                    <td className="p-2 text-center border text-xs text-neutral-600">{pouchTypeLabels[size.pouchType]}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Quick Selection Guide */}
      <div className={`p-4 rounded-lg border ${headerColor} mt-4`}>
        <h4 className="font-semibold mb-2">Quick Selection by Product Type</h4>
        <div className="grid sm:grid-cols-4 gap-2 text-xs">
          <div className="bg-white p-2 rounded flex items-center gap-2">
            <Package className="h-4 w-4 text-amber-500" />
            <span><strong>Coffee 250g:</strong> S or L</span>
          </div>
          <div className="bg-white p-2 rounded flex items-center gap-2">
            <Box className="h-4 w-4 text-green-500" />
            <span><strong>Snacks:</strong> XS or S</span>
          </div>
          <div className="bg-white p-2 rounded flex items-center gap-2">
            <Scale className="h-4 w-4 text-blue-500" />
            <span><strong>Pet Food 1kg:</strong> L or XL</span>
          </div>
          <div className="bg-white p-2 rounded flex items-center gap-2">
            <Ruler className="h-4 w-4 text-purple-500" />
            <span><strong>Samples:</strong> XXXS or XXS</span>
          </div>
        </div>
      </div>

      {/* Shop CTA */}
      <div className="text-center pt-4">
        <Link 
          to={productLink}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition"
        >
          Shop Eco Stand Up Pouches
          <Package className="h-4 w-4" />
        </Link>
      </div>

      {/* Image Lightbox */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <button
            onClick={() => setEnlargedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white text-2xl"
          >
            ×
          </button>
          <img
            src={enlargedImage}
            alt="Size comparison full view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default SortableSizesTable
