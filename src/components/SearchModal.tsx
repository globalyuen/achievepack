import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, CornerDownLeft, Sparkles, BookOpen, Package, Zap } from 'lucide-react'

interface SearchItem {
  title: string
  link: string
  category: 'Products' | 'Materials' | 'Tools' | 'Services' | 'Blog'
  description: string
}

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  theme: 'b2b' | 'b2c'
}

export default function SearchModal({ isOpen, onClose, theme }: SearchModalProps) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsContainerRef = useRef<HTMLDivElement>(null)

  // Curated Search Index based on domain context
  const catalog: SearchItem[] = useMemo(() => {
    if (theme === 'b2b') {
      return [
        // B2B Products
        { title: 'Stand Up Pouches', link: '/packaging/stand-up-pouches', category: 'Products', description: 'Self-standing pouches with oval bottom' },
        { title: 'Flat Bottom Bags', link: '/packaging/flat-bottom-bags', category: 'Products', description: 'Box bottom pouches with 5 printable faces' },
        { title: 'Side Gusset Bags', link: '/packaging/side-gusset-bags', category: 'Products', description: 'Traditional coffee bags with side expansion' },
        { title: '3 Side Seal Pouches', link: '/packaging/3-side-seal-bags', category: 'Products', description: 'Flat sachets sealed on three sides' },
        { title: 'Spout Pouches', link: '/packaging/spout-pouches', category: 'Products', description: 'Liquid packaging with custom spouts' },
        { title: 'Vacuum Pouches', link: '/packaging/vacuum-pouches', category: 'Products', description: 'Extremely high barrier food saver bags' },
        // B2B Materials
        { title: 'Compostable Materials', link: '/materials/compostable', category: 'Materials', description: '100% home & industrial compostable barriers' },
        { title: 'Recyclable Mono-PE', link: '/materials/recyclable-mono-pe', category: 'Materials', description: 'Mono-material PE pouches fully recyclable' },
        { title: 'Bio-PE Green Plastic', link: '/materials/bio-pe', category: 'Materials', description: 'Sugarcane derived bio-based plastic' },
        { title: 'PCR (Post-Consumer Recycled)', link: '/materials/pcr', category: 'Materials', description: 'Recycled content bags reducing carbon footprint' },
        { title: 'Kraft Paper Packaging', link: '/materials/kraft-paper', category: 'Materials', description: 'Natural unbleached kraft paper composites' },
        // B2B Tools & Services
        { title: 'Sizing & Capacity Finder', link: '/size-guide', category: 'Tools', description: 'Interactive visual size and volume estimator' },
        { title: 'Dieline Finder / Templates', link: '/dieline-finder', category: 'Tools', description: 'Free Illustrator print-ready template directory' },
        { title: 'Spec Comparison Dashboard', link: '/tech-specs', category: 'Tools', description: 'OTR & WVTR performance specifications chart' },
        { title: 'Pricing & Budget Calculator', link: '/pricing', category: 'Tools', description: 'Calculate instant volume discounts and MOQs' },
        { title: 'Free mockups & design services', link: '/free-service', category: 'Services', description: 'Discover our free brand upgrade suite' }
      ]
    } else {
      return [
        // B2C Products
        { title: 'Stand Up Pouches', link: '/products/stand-up-pouches', category: 'Products', description: 'Eco-friendly self-standing pouches' },
        { title: 'Flat Bottom Bags', link: '/products/flat-bottom-bags', category: 'Products', description: 'Premium box bottom bag with quad seals' },
        { title: 'Side Gusset Bags', link: '/products/side-gusset-bags', category: 'Products', description: 'Sustainable quad-seal side gusset bags' },
        { title: 'Vacuum Pouches', link: '/products/vacuum-pouches', category: 'Products', description: 'High-vacuum eco-friendly seal bags' },
        { title: 'Flat Pouches', link: '/products/flat-pouches', category: 'Products', description: 'Flat 3-side seal eco-friendly pouches' },
        { title: 'Spout Pouches', link: '/products/spout-pouches', category: 'Products', description: 'Recyclable liquid spout pouches' },
        // B2C Materials
        { title: 'Compostable Packaging', link: '/materials/compostable', category: 'Materials', description: 'BPI certified bio-based compostable films' },
        { title: 'Recyclable Plastics', link: '/materials/recyclable', category: 'Materials', description: 'Fully recyclable high barrier Mono-PE bags' },
        { title: 'Plastic-Free Kraft Paper', link: '/materials/plastic-free-kraft', category: 'Materials', description: 'Completely plastic-free organic paper bags' },
        { title: 'Kraft High Barrier', link: '/materials/kraft-high-barrier', category: 'Materials', description: 'High barrier kraft paper composites' },
        { title: 'Home Compostable Films', link: '/materials/home-compostable', category: 'Materials', description: 'Certified backyard compostable bags' },
        { title: 'PCR (Post-Consumer Recycled)', link: '/materials/pcr', category: 'Materials', description: 'Recycled content circular packaging' },
        { title: 'Bio-PE Sugarcane', link: '/materials/bio-pe', category: 'Materials', description: 'Renewable sugarcane-based PE' },
        // B2C Services & Apps
        { title: 'Free Mockup Design', link: '/free-service/packaging-mockup', category: 'Services', description: 'Get a free high-fidelity 3D packaging mockup' },
        { title: 'Free Website Upgrade', link: '/free-service/website-upgrade', category: 'Services', description: 'Free storefront strategy & web development' },
        { title: 'Free Order & Artwork Manager', link: '/free-service/customer-center', category: 'Services', description: 'Order tracking & prepress tool' },
        { title: 'Free Design Consultation', link: '/free-service/packaging-design-consultation', category: 'Services', description: '20-min layout strategy call' },
        { title: 'Sizing Finder', link: '/size-guide', category: 'Tools', description: 'Visual capacity sizing guide' },
        { title: 'Dieline Finder', link: '/dieline-finder', category: 'Tools', description: 'Free Adobe Illustrator templates' },
        { title: 'Spec Finder', link: '/tech-specs', category: 'Tools', description: 'Compare OTR & WVTR barrier specs' },
        { title: 'Pricing Calculator', link: '/pricing', category: 'Tools', description: 'Interactive budgeting tool' }
      ]
    }
  }, [theme])

  // Filter items matching query
  const filteredResults = useMemo(() => {
    if (!query.trim()) return catalog.slice(0, 5) // Show popular/quick suggestions
    const q = query.toLowerCase().trim()
    return catalog.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    )
  }, [query, catalog])

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setSelectedIndex(0)
      setQuery('')
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Log telemetry immediately to Vercel Endpoint
  const logSearchTelemetry = async (searchTerm: string) => {
    try {
      await fetch('/api/log-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: searchTerm,
          domain: theme === 'b2b' ? 'achievepack.com' : 'pouch.eco'
        })
      })
    } catch (err) {
      console.error('Failed to log search telemetry:', err)
    }
  }

  // Handle select / submit
  const handleSelect = (item: SearchItem) => {
    logSearchTelemetry(item.title)
    onClose()
    navigate(item.link)
  }

  const handleGlobalSubmit = () => {
    if (filteredResults.length > 0 && selectedIndex < filteredResults.length) {
      handleSelect(filteredResults[selectedIndex])
    } else if (query.trim()) {
      const term = query.trim()
      logSearchTelemetry(term)
      onClose()
      // Redirect to catalog/store with search parameter
      if (theme === 'b2b') {
        navigate(`/store?q=${encodeURIComponent(term)}`)
      } else {
        navigate(`/products?q=${encodeURIComponent(term)}`)
      }
    }
  }

  // Keyboard navigation listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => (prev + 1) % Math.max(1, filteredResults.length))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => (prev - 1 + filteredResults.length) % Math.max(1, filteredResults.length))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        handleGlobalSubmit()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredResults, selectedIndex, query])

  // Auto-scroll active result into view
  useEffect(() => {
    if (resultsContainerRef.current) {
      const activeEl = resultsContainerRef.current.children[selectedIndex] as HTMLElement
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [selectedIndex])

  if (!isOpen) return null

  // Aesthetic configuration
  const styles = theme === 'b2c' ? {
    backdrop: "bg-black/60 backdrop-blur-sm",
    container: "bg-[#F0F0F0] border-4 border-black text-black font-['Space_Grotesk'] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none",
    inputBox: "border-4 border-black bg-white focus-within:ring-0 rounded-none",
    input: "font-['JetBrains_Mono'] placeholder:text-neutral-500 text-black",
    activeRow: "bg-[#D4FF00] border-2 border-black text-black",
    inactiveRow: "hover:bg-neutral-200 border-2 border-transparent text-black",
    badge: (cat: string) => {
      if (cat === 'Products') return "bg-[#00FFFF] border border-black text-black"
      if (cat === 'Materials') return "bg-[#FF00FF] border border-black text-white"
      return "bg-black border border-black text-white"
    },
    footerKey: "font-['JetBrains_Mono'] border border-black px-1.5 py-0.5 bg-white text-xs font-bold"
  } : {
    backdrop: "bg-neutral-900/60 backdrop-blur-md",
    container: "bg-white border border-neutral-200 text-neutral-800 font-sans shadow-2xl rounded-2xl",
    inputBox: "border border-neutral-200 bg-neutral-50 focus-within:border-primary-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-100 rounded-xl",
    input: "placeholder:text-neutral-400 text-neutral-800",
    activeRow: "bg-primary-50 text-primary-900",
    inactiveRow: "hover:bg-neutral-50 text-neutral-700",
    badge: (cat: string) => {
      if (cat === 'Products') return "bg-blue-50 text-blue-700 font-semibold"
      if (cat === 'Materials') return "bg-green-50 text-green-700 font-semibold"
      return "bg-amber-50 text-amber-700 font-semibold"
    },
    footerKey: "border border-neutral-200 px-1.5 py-0.5 bg-neutral-50 text-[10px] text-neutral-500 rounded font-medium shadow-sm"
  }

  return (
    <div className={`fixed inset-0 z-[999] flex items-start justify-center p-4 pt-[10vh] ${styles.backdrop}`}>
      {/* Backdrop Click Dismiss */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />

      {/* Modal Card */}
      <div className={`w-full max-w-2xl overflow-hidden transition-all transform flex flex-col ${styles.container}`}>
        {/* Search Header */}
        <div className="p-4 border-b border-neutral-200">
          <div className={`flex items-center gap-3 px-3 py-2 ${styles.inputBox}`}>
            <Search className={`w-5 h-5 ${theme === 'b2c' ? 'text-black' : 'text-neutral-400'}`} />
            <input
              ref={inputRef}
              type="text"
              placeholder={theme === 'b2c' ? "SEARCH ECO POUCH..." : "Search B2B materials, sizes, spec sheets..."}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setSelectedIndex(0)
              }}
              className={`flex-1 bg-transparent border-0 outline-none p-0 focus:ring-0 text-lg ${styles.input}`}
            />
            {query.trim() && (
              <button 
                onClick={() => setQuery('')}
                className="p-1 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-neutral-400" />
              </button>
            )}
            <button 
              onClick={onClose}
              className={`p-1 px-2.5 text-sm border hover:bg-neutral-100 font-bold ${theme === 'b2c' ? 'border-black hover:bg-[#D4FF00]' : 'border-neutral-200 rounded-lg'}`}
            >
              ESC
            </button>
          </div>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto max-h-[380px] p-2 space-y-1">
          {/* Section Header */}
          <div className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${theme === 'b2c' ? 'text-neutral-700 font-[\'JetBrains_Mono\']' : 'text-neutral-400'}`}>
            {query.trim() ? `Search Results (${filteredResults.length})` : 'Popular Searches'}
          </div>

          <div ref={resultsContainerRef} className="space-y-1">
            {filteredResults.map((item, idx) => {
              const isActive = idx === selectedIndex
              return (
                <div
                  key={item.link + idx}
                  onClick={() => handleSelect(item)}
                  className={`flex items-start justify-between p-3 cursor-pointer transition-all duration-150 ${
                    isActive ? styles.activeRow : styles.inactiveRow
                  } ${theme === 'b2c' ? '' : 'rounded-xl'}`}
                >
                  <div className="flex gap-3">
                    <div className="mt-0.5">
                      {item.category === 'Products' && <Package className="w-5 h-5 opacity-70" />}
                      {item.category === 'Materials' && <Sparkles className="w-5 h-5 opacity-70" />}
                      {item.category === 'Tools' && <Zap className="w-5 h-5 opacity-70" />}
                      {item.category === 'Services' && <Zap className="w-5 h-5 opacity-70" />}
                    </div>
                    <div>
                      <div className="font-bold text-sm tracking-tight">{item.title}</div>
                      <div className={`text-xs mt-0.5 ${isActive ? 'text-inherit opacity-90' : 'text-neutral-500'}`}>
                        {item.description}
                      </div>
                    </div>
                  </div>

                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 ${styles.badge(item.category)}`}>
                    {item.category}
                  </span>
                </div>
              )
            })}

            {filteredResults.length === 0 && (
              <div className="p-8 text-center text-neutral-500">
                <Search className="w-8 h-8 mx-auto opacity-30 mb-2" />
                <p className="font-bold text-sm">No exact matches found for "{query}"</p>
                <p className="text-xs mt-1">Press <kbd className="font-mono bg-neutral-100 px-1 py-0.5 rounded">Enter</kbd> to search our store catalog catalog.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer shortcuts */}
        <div className={`p-3 border-t flex items-center justify-between text-xs text-neutral-500 bg-neutral-50 ${theme === 'b2c' ? 'border-black bg-[#E5E5E5] font-[\'JetBrains_Mono\']' : 'border-neutral-200'}`}>
          <div className="flex items-center gap-1">
            <kbd className={styles.footerKey}>↑↓</kbd> to navigate
          </div>
          <div className="flex items-center gap-1">
            <kbd className={styles.footerKey}>Enter</kbd> to select
          </div>
          <div className="flex items-center gap-1.5 font-semibold text-neutral-700">
            <CornerDownLeft className="w-3.5 h-3.5" />
            Global Search
          </div>
        </div>
      </div>
    </div>
  )
}
