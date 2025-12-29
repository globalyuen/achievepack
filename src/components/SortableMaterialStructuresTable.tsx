import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpDown, ArrowUp, ArrowDown, Filter, Eye, Droplets, Shield, Sparkles, Leaf } from 'lucide-react'

// Material structure data type
export interface MaterialStructure {
  id: string
  name: string
  shortName: string
  img: string
  url: string
  otr: number  // Numeric for sorting (use max value if range like "<8")
  otrDisplay: string  // Display string like "<8"
  wvtr: number
  wvtrDisplay: string
  thickness: string
  barrierLevel: 'low' | 'mid' | 'high' | 'ultra'
  hasWindow: boolean
  hasKraft: boolean
  hasMetalised: boolean
  hasAluminum: boolean
  bestFor: string[]
  feature: string
  category: 'pcr' | 'mono-pe' | 'mono-pp' | 'compostable' | 'bio-pe'
}

// All PCR Structures
export const PCR_STRUCTURES: MaterialStructure[] = [
  { id: 'pcr-pet-duplex-clear', name: 'PCR PET Duplex Clear', shortName: 'PET Duplex Clear', img: '/imgs/spec/pcr-pet-duplex-clear.webp', url: '/spec/pcr-pet-duplex-clear', otr: 8, otrDisplay: '<8', wvtr: 12, wvtrDisplay: '<12', thickness: '100μm', barrierLevel: 'mid', hasWindow: true, hasKraft: false, hasMetalised: false, hasAluminum: false, bestFor: ['snacks', 'coffee', 'tea'], feature: 'Window Option', category: 'pcr' },
  { id: 'pcr-pp-duplex-clear', name: 'PCR PP Duplex Clear', shortName: 'PP Duplex Clear', img: '/imgs/spec/pcr-pp-duplex-clear.webp', url: '/spec/pcr-pp-duplex-clear', otr: 1500, otrDisplay: '<1500', wvtr: 5, wvtrDisplay: '<5', thickness: '100μm', barrierLevel: 'mid', hasWindow: true, hasKraft: false, hasMetalised: false, hasAluminum: false, bestFor: ['moisture-sensitive', 'granola'], feature: 'Best Moisture', category: 'pcr' },
  { id: 'pcr-pet-kraft-triplex-clear', name: 'PCR PET Kraft Triplex Clear', shortName: 'PET Kraft Triplex', img: '/imgs/spec/pcr-pet-kraft-triplex-clear.webp', url: '/spec/pcr-pet-kraft-triplex-clear', otr: 8, otrDisplay: '<8', wvtr: 10, wvtrDisplay: '<10', thickness: '150μm', barrierLevel: 'mid', hasWindow: true, hasKraft: true, hasMetalised: false, hasAluminum: false, bestFor: ['premium', 'coffee', 'tea'], feature: 'Natural + Window', category: 'pcr' },
  { id: 'pcr-pp-kraft-triplex-clear', name: 'PCR PP Kraft Triplex Clear', shortName: 'PP Kraft Triplex', img: '/imgs/spec/pcr-pp-kraft-triplex-clear.webp', url: '/spec/pcr-pp-kraft-triplex-clear', otr: 1500, otrDisplay: '<1500', wvtr: 4, wvtrDisplay: '<4', thickness: '150μm', barrierLevel: 'mid', hasWindow: true, hasKraft: true, hasMetalised: false, hasAluminum: false, bestFor: ['premium', 'granola'], feature: 'Kraft + Moisture', category: 'pcr' },
  { id: 'pcr-pet-duplex-nowindow', name: 'PCR PET Duplex No Window', shortName: 'PET No Window', img: '/imgs/spec/pcr-pet-duplex-nowindow.webp', url: '/spec/pcr-pet-duplex-nowindow', otr: 8, otrDisplay: '<8', wvtr: 12, wvtrDisplay: '<12', thickness: '100μm', barrierLevel: 'mid', hasWindow: false, hasKraft: false, hasMetalised: false, hasAluminum: false, bestFor: ['light-sensitive', 'supplements'], feature: 'Light Barrier', category: 'pcr' },
  { id: 'pcr-pp-duplex-nowindow', name: 'PCR PP Duplex No Window', shortName: 'PP No Window', img: '/imgs/spec/pcr-pp-duplex-nowindow.webp', url: '/spec/pcr-pp-duplex-nowindow', otr: 1500, otrDisplay: '<1500', wvtr: 5, wvtrDisplay: '<5', thickness: '100μm', barrierLevel: 'mid', hasWindow: false, hasKraft: false, hasMetalised: false, hasAluminum: false, bestFor: ['light+moisture'], feature: 'Moisture + Light', category: 'pcr' },
  { id: 'pcr-pet-triplex-metalised', name: 'PCR PET Triplex Metalised', shortName: 'PET Metalised', img: '/imgs/spec/pcr-pet-triplex-metalised.webp', url: '/spec/pcr-pet-triplex-metalised', otr: 1, otrDisplay: '<1', wvtr: 1, wvtrDisplay: '<1', thickness: '120μm', barrierLevel: 'high', hasWindow: false, hasKraft: false, hasMetalised: true, hasAluminum: false, bestFor: ['coffee', 'snacks', 'long shelf'], feature: 'High Barrier', category: 'pcr' },
  { id: 'pcr-pp-triplex-metalised', name: 'PCR PP Triplex Metalised', shortName: 'PP Metalised', img: '/imgs/spec/pcr-pp-triplex-metalised.webp', url: '/spec/pcr-pp-triplex-metalised', otr: 1, otrDisplay: '<1', wvtr: 0.5, wvtrDisplay: '<0.5', thickness: '120μm', barrierLevel: 'high', hasWindow: false, hasKraft: false, hasMetalised: true, hasAluminum: false, bestFor: ['coffee', 'moisture critical'], feature: 'High + Moisture', category: 'pcr' },
  { id: 'pcr-kraft-vmpet', name: 'PCR Kraft VMPET', shortName: 'Kraft VMPET', img: '/imgs/spec/pcr-kraft-vmpet.webp', url: '/spec/pcr-kraft-vmpet', otr: 1, otrDisplay: '<1', wvtr: 1, wvtrDisplay: '<1', thickness: '150μm', barrierLevel: 'high', hasWindow: false, hasKraft: true, hasMetalised: true, hasAluminum: false, bestFor: ['premium coffee', 'natural look'], feature: 'Natural + High', category: 'pcr' },
  { id: 'pcr-pet-triplex-aluminum', name: 'PCR PET Triplex Aluminum', shortName: 'PET Aluminum', img: '/imgs/spec/pcr-pet-triplex-aluminum.webp', url: '/spec/pcr-pet-triplex-aluminum', otr: 0.5, otrDisplay: '<0.5', wvtr: 0.5, wvtrDisplay: '<0.5', thickness: '130μm', barrierLevel: 'ultra', hasWindow: false, hasKraft: false, hasMetalised: false, hasAluminum: true, bestFor: ['sensitive products', 'max protection'], feature: 'Ultimate Barrier', category: 'pcr' },
  { id: 'pcr-pp-triplex-aluminum', name: 'PCR PP Triplex Aluminum', shortName: 'PP Aluminum', img: '/imgs/spec/pcr-pp-triplex-aluminum.webp', url: '/spec/pcr-pp-triplex-aluminum', otr: 0.5, otrDisplay: '<0.5', wvtr: 0.3, wvtrDisplay: '<0.3', thickness: '130μm', barrierLevel: 'ultra', hasWindow: false, hasKraft: false, hasMetalised: false, hasAluminum: true, bestFor: ['max moisture + oxygen'], feature: 'Ultimate + Moist', category: 'pcr' },
  { id: 'pcr-pet-kraft-quadlex-aluminum', name: 'PCR PET Kraft Quadlex Aluminum', shortName: 'PET Kraft Quadlex', img: '/imgs/spec/pcr-pet-kraft-quadlex-aluminum.webp', url: '/spec/pcr-pet-kraft-quadlex-aluminum', otr: 0.5, otrDisplay: '<0.5', wvtr: 0.5, wvtrDisplay: '<0.5', thickness: '180μm', barrierLevel: 'ultra', hasWindow: false, hasKraft: true, hasMetalised: false, hasAluminum: true, bestFor: ['premium', 'max barrier'], feature: 'Premium Natural', category: 'pcr' },
  { id: 'pcr-pp-kraft-quadlex-aluminum', name: 'PCR PP Kraft Quadlex Aluminum', shortName: 'PP Kraft Quadlex', img: '/imgs/spec/pcr-pp-kraft-quadlex-aluminum.webp', url: '/spec/pcr-pp-kraft-quadlex-aluminum', otr: 0.5, otrDisplay: '<0.5', wvtr: 0.3, wvtrDisplay: '<0.3', thickness: '180μm', barrierLevel: 'ultra', hasWindow: false, hasKraft: true, hasMetalised: false, hasAluminum: true, bestFor: ['ultimate protection'], feature: 'Ultimate Natural', category: 'pcr' },
  { id: 'pcr-kraft-duplex-low', name: 'PCR Kraft Duplex Low', shortName: 'Kraft Duplex Low', img: '/imgs/spec/pcr-kraft-duplex-low.webp', url: '/spec/pcr-kraft-duplex-low', otr: 2000, otrDisplay: '<2000', wvtr: 15, wvtrDisplay: '<15', thickness: '100μm', barrierLevel: 'low', hasWindow: false, hasKraft: true, hasMetalised: false, hasAluminum: false, bestFor: ['dry goods', 'budget'], feature: 'Budget Kraft', category: 'pcr' },
]

// Mono PE/PP Structures
export const MONO_PE_PP_STRUCTURES: MaterialStructure[] = [
  { id: 'mono-pe-duplex-clear', name: 'Mono PE Duplex Clear', shortName: 'PE Duplex Clear', img: '/imgs/spec/mono-pe-duplex-clear.webp', url: '/spec/mono-pe-duplex-clear', otr: 8, otrDisplay: '<8', wvtr: 12, wvtrDisplay: '<12', thickness: '100μm', barrierLevel: 'mid', hasWindow: true, hasKraft: false, hasMetalised: false, hasAluminum: false, bestFor: ['recyclable', 'snacks'], feature: 'Recyclable', category: 'mono-pe' },
  { id: 'mono-pp-duplex-clear', name: 'Mono PP Duplex Clear', shortName: 'PP Duplex Clear', img: '/imgs/spec/mono-pp-duplex-clear.webp', url: '/spec/mono-pp-duplex-clear', otr: 1500, otrDisplay: '<1500', wvtr: 5, wvtrDisplay: '<5', thickness: '100μm', barrierLevel: 'mid', hasWindow: true, hasKraft: false, hasMetalised: false, hasAluminum: false, bestFor: ['recyclable', 'moisture'], feature: 'Best Moisture', category: 'mono-pp' },
  { id: 'mono-pe-duplex-nowindow', name: 'Mono PE Duplex No Window', shortName: 'PE No Window', img: '/imgs/spec/mono-pe-duplex-nowindow.webp', url: '/spec/mono-pe-duplex-nowindow', otr: 8, otrDisplay: '<8', wvtr: 12, wvtrDisplay: '<12', thickness: '100μm', barrierLevel: 'mid', hasWindow: false, hasKraft: false, hasMetalised: false, hasAluminum: false, bestFor: ['recyclable', 'light barrier'], feature: 'Light Barrier', category: 'mono-pe' },
  { id: 'mono-pp-duplex-nowindow', name: 'Mono PP Duplex No Window', shortName: 'PP No Window', img: '/imgs/spec/mono-pp-duplex-nowindow.webp', url: '/spec/mono-pp-duplex-nowindow', otr: 1500, otrDisplay: '<1500', wvtr: 5, wvtrDisplay: '<5', thickness: '100μm', barrierLevel: 'mid', hasWindow: false, hasKraft: false, hasMetalised: false, hasAluminum: false, bestFor: ['recyclable', 'light+moist'], feature: 'Moisture + Light', category: 'mono-pp' },
  { id: 'mono-pe-triplex-metalised', name: 'Mono PE Triplex Metalised', shortName: 'PE Metalised', img: '/imgs/spec/biope-pet-triplex-metalised.webp', url: '/spec/biope-pet-triplex-metalised', otr: 1, otrDisplay: '<1', wvtr: 1, wvtrDisplay: '<1', thickness: '120μm', barrierLevel: 'high', hasWindow: false, hasKraft: false, hasMetalised: true, hasAluminum: false, bestFor: ['high barrier', 'coffee'], feature: 'High Barrier', category: 'mono-pe' },
  { id: 'mono-pp-triplex-metalised', name: 'Mono PP Triplex Metalised', shortName: 'PP Metalised', img: '/imgs/spec/biope-pp-triplex-metalised.webp', url: '/spec/biope-pp-triplex-metalised', otr: 1, otrDisplay: '<1', wvtr: 0.5, wvtrDisplay: '<0.5', thickness: '120μm', barrierLevel: 'high', hasWindow: false, hasKraft: false, hasMetalised: true, hasAluminum: false, bestFor: ['high barrier', 'moisture'], feature: 'High + Moisture', category: 'mono-pp' },
]

// Compostable Structures
export const COMPOSTABLE_STRUCTURES: MaterialStructure[] = [
  { id: 'bio-cello-duplex-clear', name: 'Bio Cello Duplex Clear', shortName: 'Cello Clear', img: '/imgs/spec/bio-cello-duplex-clear.webp', url: '/spec/bio-cello-duplex-clear', otr: 200, otrDisplay: '<200', wvtr: 50, wvtrDisplay: '<50', thickness: '60μm', barrierLevel: 'low', hasWindow: true, hasKraft: false, hasMetalised: false, hasAluminum: false, bestFor: ['home compostable', 'dry goods'], feature: 'Home Compostable', category: 'compostable' },
  { id: 'bio-cello-triplex-metalised', name: 'Bio Cello Triplex Metalised', shortName: 'Cello Metalised', img: '/imgs/spec/bio-cello-triplex-metalised.webp', url: '/spec/bio-cello-triplex-metalised', otr: 5, otrDisplay: '<5', wvtr: 5, wvtrDisplay: '<5', thickness: '80μm', barrierLevel: 'high', hasWindow: false, hasKraft: false, hasMetalised: true, hasAluminum: false, bestFor: ['home compostable', 'barrier'], feature: 'High Barrier Bio', category: 'compostable' },
  { id: 'bio-cello-triplex-highest', name: 'Bio Cello Triplex Highest', shortName: 'Cello Highest', img: '/imgs/spec/bio-cello-triplex-highest.webp', url: '/spec/bio-cello-triplex-highest', otr: 1, otrDisplay: '<1', wvtr: 1, wvtrDisplay: '<1', thickness: '100μm', barrierLevel: 'ultra', hasWindow: false, hasKraft: false, hasMetalised: true, hasAluminum: false, bestFor: ['max protection', 'coffee'], feature: 'Ultimate Bio', category: 'compostable' },
  { id: 'bio-kraft-pbat-low', name: 'Bio Kraft PBAT Low', shortName: 'Kraft PBAT', img: '/imgs/spec/bio-kraft-pbat-low.webp', url: '/spec/bio-kraft-pbat-low', otr: 2000, otrDisplay: '<2000', wvtr: 80, wvtrDisplay: '<80', thickness: '100μm', barrierLevel: 'low', hasWindow: false, hasKraft: true, hasMetalised: false, hasAluminum: false, bestFor: ['dry goods', 'natural look'], feature: 'Natural Kraft', category: 'compostable' },
  { id: 'bio-kraft-vm-cello', name: 'Bio Kraft VM Cello', shortName: 'Kraft VM Cello', img: '/imgs/spec/bio-kraft-vm-cello.webp', url: '/spec/bio-kraft-vm-cello', otr: 5, otrDisplay: '<5', wvtr: 5, wvtrDisplay: '<5', thickness: '120μm', barrierLevel: 'high', hasWindow: false, hasKraft: true, hasMetalised: true, hasAluminum: false, bestFor: ['premium', 'coffee'], feature: 'Natural + High', category: 'compostable' },
]

// Bio-PE Structures
export const BIO_PE_STRUCTURES: MaterialStructure[] = [
  { id: 'biope-pet-duplex-clear', name: 'BioPE PET Duplex Clear', shortName: 'BioPE PET Clear', img: '/imgs/spec/biope-pet-duplex-clear.webp', url: '/spec/biope-pet-duplex-clear', otr: 8, otrDisplay: '<8', wvtr: 12, wvtrDisplay: '<12', thickness: '100μm', barrierLevel: 'mid', hasWindow: true, hasKraft: false, hasMetalised: false, hasAluminum: false, bestFor: ['bio-based', 'snacks'], feature: 'Bio-based', category: 'bio-pe' },
  { id: 'biope-pp-duplex-clear', name: 'BioPE PP Duplex Clear', shortName: 'BioPE PP Clear', img: '/imgs/spec/biope-pp-duplex-clear.webp', url: '/spec/biope-pp-duplex-clear', otr: 1500, otrDisplay: '<1500', wvtr: 5, wvtrDisplay: '<5', thickness: '100μm', barrierLevel: 'mid', hasWindow: true, hasKraft: false, hasMetalised: false, hasAluminum: false, bestFor: ['bio-based', 'moisture'], feature: 'Bio + Moisture', category: 'bio-pe' },
  { id: 'biope-pet-duplex-nowindow', name: 'BioPE PET Duplex No Window', shortName: 'BioPE PET NoWin', img: '/imgs/spec/biope-pet-duplex-nowindow.webp', url: '/spec/biope-pet-duplex-nowindow', otr: 8, otrDisplay: '<8', wvtr: 12, wvtrDisplay: '<12', thickness: '100μm', barrierLevel: 'mid', hasWindow: false, hasKraft: false, hasMetalised: false, hasAluminum: false, bestFor: ['bio-based', 'light'], feature: 'Light Barrier', category: 'bio-pe' },
  { id: 'biope-pp-duplex-nowindow', name: 'BioPE PP Duplex No Window', shortName: 'BioPE PP NoWin', img: '/imgs/spec/biope-pp-duplex-nowindow.webp', url: '/spec/biope-pp-duplex-nowindow', otr: 1500, otrDisplay: '<1500', wvtr: 5, wvtrDisplay: '<5', thickness: '100μm', barrierLevel: 'mid', hasWindow: false, hasKraft: false, hasMetalised: false, hasAluminum: false, bestFor: ['bio-based', 'light+moist'], feature: 'Light + Moist', category: 'bio-pe' },
  { id: 'biope-kraft-vmpet', name: 'BioPE Kraft VMPET', shortName: 'BioPE Kraft VMPET', img: '/imgs/spec/biope-kraft-vmpet.webp', url: '/spec/biope-kraft-vmpet', otr: 1, otrDisplay: '<1', wvtr: 1, wvtrDisplay: '<1', thickness: '150μm', barrierLevel: 'high', hasWindow: false, hasKraft: true, hasMetalised: true, hasAluminum: false, bestFor: ['premium', 'coffee'], feature: 'Natural + High', category: 'bio-pe' },
  { id: 'biope-pet-triplex-metalised', name: 'BioPE PET Triplex Metalised', shortName: 'BioPE PET Metal', img: '/imgs/spec/biope-pet-triplex-metalised.webp', url: '/spec/biope-pet-triplex-metalised', otr: 1, otrDisplay: '<1', wvtr: 1, wvtrDisplay: '<1', thickness: '120μm', barrierLevel: 'high', hasWindow: false, hasKraft: false, hasMetalised: true, hasAluminum: false, bestFor: ['high barrier', 'bio'], feature: 'High Barrier', category: 'bio-pe' },
  { id: 'biope-pp-triplex-metalised', name: 'BioPE PP Triplex Metalised', shortName: 'BioPE PP Metal', img: '/imgs/spec/biope-pp-triplex-metalised.webp', url: '/spec/biope-pp-triplex-metalised', otr: 1, otrDisplay: '<1', wvtr: 0.5, wvtrDisplay: '<0.5', thickness: '120μm', barrierLevel: 'high', hasWindow: false, hasKraft: false, hasMetalised: true, hasAluminum: false, bestFor: ['high barrier', 'moisture'], feature: 'High + Moisture', category: 'bio-pe' },
  { id: 'biope-pet-triplex-aluminum', name: 'BioPE PET Triplex Aluminum', shortName: 'BioPE PET Alu', img: '/imgs/spec/biope-pet-triplex-aluminum.webp', url: '/spec/biope-pet-triplex-aluminum', otr: 0.5, otrDisplay: '<0.5', wvtr: 0.5, wvtrDisplay: '<0.5', thickness: '130μm', barrierLevel: 'ultra', hasWindow: false, hasKraft: false, hasMetalised: false, hasAluminum: true, bestFor: ['max barrier'], feature: 'Ultimate', category: 'bio-pe' },
  { id: 'biope-pp-triplex-aluminum', name: 'BioPE PP Triplex Aluminum', shortName: 'BioPE PP Alu', img: '/imgs/spec/biope-pp-triplex-aluminum.webp', url: '/spec/biope-pp-triplex-aluminum', otr: 0.5, otrDisplay: '<0.5', wvtr: 0.3, wvtrDisplay: '<0.3', thickness: '130μm', barrierLevel: 'ultra', hasWindow: false, hasKraft: false, hasMetalised: false, hasAluminum: true, bestFor: ['max barrier', 'moisture'], feature: 'Ultimate + Moist', category: 'bio-pe' },
]

// All structures combined
export const ALL_STRUCTURES: MaterialStructure[] = [
  ...PCR_STRUCTURES,
  ...MONO_PE_PP_STRUCTURES,
  ...COMPOSTABLE_STRUCTURES,
  ...BIO_PE_STRUCTURES,
]

type SortKey = 'name' | 'otr' | 'wvtr' | 'barrierLevel' | 'thickness'
type SortDirection = 'asc' | 'desc'

interface FilterOptions {
  hasWindow: boolean | null
  hasKraft: boolean | null
  barrierLevel: 'low' | 'mid' | 'high' | 'ultra' | null
}

interface SortableMaterialStructuresTableProps {
  structures: MaterialStructure[]
  title: string
  categoryColor?: string // e.g., 'blue', 'green', 'purple', 'amber'
  showCategoryColumn?: boolean
}

const barrierLevelOrder = { 'low': 1, 'mid': 2, 'high': 3, 'ultra': 4 }
const barrierLevelLabels = { 'low': 'Low', 'mid': 'Mid', 'high': 'High', 'ultra': 'Ultra' }
const barrierLevelColors = { 
  'low': 'bg-yellow-100 text-yellow-800', 
  'mid': 'bg-blue-100 text-blue-800', 
  'high': 'bg-purple-100 text-purple-800', 
  'ultra': 'bg-red-100 text-red-800' 
}

const SortableMaterialStructuresTable: React.FC<SortableMaterialStructuresTableProps> = ({
  structures,
  title,
  categoryColor = 'blue',
  showCategoryColumn = false,
}) => {
  const [sortKey, setSortKey] = useState<SortKey>('barrierLevel')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
  const [filters, setFilters] = useState<FilterOptions>({ hasWindow: null, hasKraft: null, barrierLevel: null })
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table')

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

  const filteredAndSortedStructures = useMemo(() => {
    let result = [...structures]
    
    // Apply filters
    if (filters.hasWindow !== null) {
      result = result.filter(s => s.hasWindow === filters.hasWindow)
    }
    if (filters.hasKraft !== null) {
      result = result.filter(s => s.hasKraft === filters.hasKraft)
    }
    if (filters.barrierLevel !== null) {
      result = result.filter(s => s.barrierLevel === filters.barrierLevel)
    }
    
    // Apply sorting
    result.sort((a, b) => {
      let comparison = 0
      switch (sortKey) {
        case 'name':
          comparison = a.name.localeCompare(b.name)
          break
        case 'otr':
          comparison = a.otr - b.otr
          break
        case 'wvtr':
          comparison = a.wvtr - b.wvtr
          break
        case 'barrierLevel':
          comparison = barrierLevelOrder[a.barrierLevel] - barrierLevelOrder[b.barrierLevel]
          break
        case 'thickness':
          comparison = parseInt(a.thickness) - parseInt(b.thickness)
          break
      }
      return sortDirection === 'asc' ? comparison : -comparison
    })
    
    return result
  }, [structures, sortKey, sortDirection, filters])

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    amber: 'bg-amber-50 border-amber-200 text-amber-800',
  }

  const headerColor = colorClasses[categoryColor as keyof typeof colorClasses] || colorClasses.blue

  return (
    <div className="space-y-4">
      {/* Header with Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h3 className="text-lg font-bold text-neutral-800">{title}</h3>
        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <div className="flex bg-neutral-100 rounded-lg p-0.5">
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${viewMode === 'table' ? 'bg-white shadow text-primary-700' : 'text-neutral-600'}`}
            >
              Table
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${viewMode === 'grid' ? 'bg-white shadow text-primary-700' : 'text-neutral-600'}`}
            >
              Grid
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
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium">Window:</span>
              <select
                value={filters.hasWindow === null ? '' : filters.hasWindow.toString()}
                onChange={(e) => setFilters({ ...filters, hasWindow: e.target.value === '' ? null : e.target.value === 'true' })}
                className="text-xs px-2 py-1 rounded border border-neutral-300 bg-white"
              >
                <option value="">All</option>
                <option value="true">Has Window</option>
                <option value="false">No Window</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium">Kraft:</span>
              <select
                value={filters.hasKraft === null ? '' : filters.hasKraft.toString()}
                onChange={(e) => setFilters({ ...filters, hasKraft: e.target.value === '' ? null : e.target.value === 'true' })}
                className="text-xs px-2 py-1 rounded border border-neutral-300 bg-white"
              >
                <option value="">All</option>
                <option value="true">Has Kraft</option>
                <option value="false">No Kraft</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium">Barrier:</span>
              <select
                value={filters.barrierLevel || ''}
                onChange={(e) => setFilters({ ...filters, barrierLevel: (e.target.value || null) as FilterOptions['barrierLevel'] })}
                className="text-xs px-2 py-1 rounded border border-neutral-300 bg-white"
              >
                <option value="">All</option>
                <option value="low">Low</option>
                <option value="mid">Mid</option>
                <option value="high">High</option>
                <option value="ultra">Ultra</option>
              </select>
            </div>
            <button
              onClick={() => setFilters({ hasWindow: null, hasKraft: null, barrierLevel: null })}
              className="text-xs text-primary-600 hover:underline"
            >
              Clear all
            </button>
          </div>
        </div>
      )}

      {/* Results Count */}
      <p className="text-xs text-neutral-500">
        Showing {filteredAndSortedStructures.length} of {structures.length} structures
        {sortKey && ` • Sorted by ${sortKey === 'otr' ? 'OTR' : sortKey === 'wvtr' ? 'WVTR' : sortKey.charAt(0).toUpperCase() + sortKey.slice(1)} (${sortDirection === 'asc' ? 'low→high' : 'high→low'})`}
      </p>

      {/* Table View */}
      {viewMode === 'table' && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className={headerColor}>
                <th className="p-2 text-left border font-semibold">Image</th>
                <th className="p-2 text-left border font-semibold">
                  <button onClick={() => handleSort('name')} className="flex items-center gap-1 hover:text-primary-700">
                    Structure {getSortIcon('name')}
                  </button>
                </th>
                <th className="p-2 text-center border font-semibold">
                  <button onClick={() => handleSort('otr')} className="flex items-center gap-1 mx-auto hover:text-primary-700">
                    OTR {getSortIcon('otr')}
                  </button>
                </th>
                <th className="p-2 text-center border font-semibold">
                  <button onClick={() => handleSort('wvtr')} className="flex items-center gap-1 mx-auto hover:text-primary-700">
                    WVTR {getSortIcon('wvtr')}
                  </button>
                </th>
                <th className="p-2 text-center border font-semibold">
                  <button onClick={() => handleSort('barrierLevel')} className="flex items-center gap-1 mx-auto hover:text-primary-700">
                    Barrier {getSortIcon('barrierLevel')}
                  </button>
                </th>
                <th className="p-2 text-center border font-semibold">Features</th>
                {showCategoryColumn && <th className="p-2 text-center border font-semibold">Category</th>}
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedStructures.map((structure, idx) => (
                <tr key={structure.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                  <td className="p-2 border">
                    <Link to={structure.url}>
                      <img src={structure.img} alt={structure.name} className="w-16 h-12 object-cover rounded hover:scale-105 transition" />
                    </Link>
                  </td>
                  <td className="p-2 border">
                    <Link to={structure.url} className="text-primary-600 hover:underline font-medium">
                      {structure.shortName}
                    </Link>
                  </td>
                  <td className="p-2 text-center border font-mono text-xs">{structure.otrDisplay}</td>
                  <td className="p-2 text-center border font-mono text-xs">{structure.wvtrDisplay}</td>
                  <td className="p-2 text-center border">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${barrierLevelColors[structure.barrierLevel]}`}>
                      {barrierLevelLabels[structure.barrierLevel]}
                    </span>
                  </td>
                  <td className="p-2 border">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {structure.hasWindow && <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded flex items-center gap-0.5"><Eye className="h-2.5 w-2.5" /> Window</span>}
                      {structure.hasKraft && <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded flex items-center gap-0.5"><Leaf className="h-2.5 w-2.5" /> Kraft</span>}
                      {structure.hasMetalised && <span className="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded flex items-center gap-0.5"><Sparkles className="h-2.5 w-2.5" /> Metal</span>}
                      {structure.hasAluminum && <span className="text-[10px] bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded flex items-center gap-0.5"><Shield className="h-2.5 w-2.5" /> Alu</span>}
                    </div>
                  </td>
                  {showCategoryColumn && (
                    <td className="p-2 text-center border text-[10px] uppercase text-neutral-500">{structure.category}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {filteredAndSortedStructures.map((structure) => (
            <Link
              key={structure.id}
              to={structure.url}
              className="group bg-white border rounded-lg p-2 hover:border-primary-400 hover:shadow-md transition-all"
            >
              <img src={structure.img} alt={structure.name} className="w-full h-20 object-cover rounded mb-2" />
              <p className="text-xs font-semibold text-primary-800 group-hover:text-primary-600 truncate">{structure.shortName}</p>
              <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                <span>OTR: {structure.otrDisplay}</span>
                <span>WVTR: {structure.wvtrDisplay}</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${barrierLevelColors[structure.barrierLevel]}`}>
                  {barrierLevelLabels[structure.barrierLevel]}
                </span>
                <span className="text-[10px] text-neutral-400">{structure.thickness}</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Quick Selection Guide */}
      <div className={`p-4 rounded-lg border ${headerColor} mt-4`}>
        <h4 className="font-semibold mb-2">Quick Selection Guide</h4>
        <div className="grid sm:grid-cols-4 gap-2 text-xs">
          <div className="bg-white p-2 rounded flex items-center gap-2">
            <Eye className="h-4 w-4 text-blue-500" />
            <span><strong>Window?</strong> Choose Clear</span>
          </div>
          <div className="bg-white p-2 rounded flex items-center gap-2">
            <Droplets className="h-4 w-4 text-cyan-500" />
            <span><strong>Moisture?</strong> Choose PP</span>
          </div>
          <div className="bg-white p-2 rounded flex items-center gap-2">
            <Shield className="h-4 w-4 text-purple-500" />
            <span><strong>Max Barrier?</strong> Aluminum</span>
          </div>
          <div className="bg-white p-2 rounded flex items-center gap-2">
            <Leaf className="h-4 w-4 text-amber-500" />
            <span><strong>Natural Look?</strong> Kraft</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SortableMaterialStructuresTable
