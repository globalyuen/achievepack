import React from 'react'
import { Link } from 'react-router-dom'
import { getDomain } from '../../utils/domain'
import { ShieldCheck, Layers, Package, ArrowRight } from 'lucide-react'

export interface B2BSpecPillBarProps {
  keywords?: string[] | string
  primaryKeyword?: string
  className?: string
}

interface SpecPill {
  label: string
  category: 'material' | 'bagType' | 'certification' | 'feature'
  link: string
}

const DEFAULT_PILLS: SpecPill[] = [
  { label: '100% Home Compostable (PLA/PBAT)', category: 'material', link: '/materials/kraft-high-barrier' },
  { label: 'Recyclable Mono-PE (GRS Certified)', category: 'material', link: '/recyclable/roadmap-sme' },
  { label: 'Stand-Up Doypack Pouches', category: 'bagType', link: '/packaging/stand-up-pouches' },
  { label: 'Flat Bottom Box Pouches', category: 'bagType', link: '/packaging/flat-bottom-bags' },
  { label: 'Spout & Liquid Barrier Bags', category: 'bagType', link: '/packaging/spout-pouches' },
  { label: 'TÜV OK Compost HOME', category: 'certification', link: '/pouch/certifications' },
  { label: 'BPI Certified #10529618', category: 'certification', link: '/pouch/certifications' },
  { label: 'ASTM D6400 / EN 13432', category: 'certification', link: '/topics/eu-ppwr-compliance' },
  { label: 'Aroma Degassing Valve', category: 'feature', link: '/packaging/coffee-pouches' }
]

export const B2BSpecPillBar: React.FC<B2BSpecPillBarProps> = ({
  keywords,
  primaryKeyword,
  className = ''
}) => {
  const isPouch = getDomain() === 'pouch'

  // Convert incoming raw keywords into clean badges if provided
  const parsedKeywords: string[] = React.useMemo(() => {
    if (!keywords) return []
    if (Array.isArray(keywords)) return keywords.map(k => k.trim()).filter(Boolean)
    if (typeof keywords === 'string') return keywords.split(',').map(k => k.trim()).filter(Boolean)
    return []
  }, [keywords])

  const pillContainerClass = isPouch
    ? 'bg-black border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(212,255,0,1)] rounded-none'
    : 'bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm'

  const badgeClass = isPouch
    ? 'inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-black uppercase tracking-wider bg-[#222] text-[#D4FF00] border-2 border-black hover:bg-[#D4FF00] hover:text-black transition-all cursor-pointer'
    : 'inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-primary-50 hover:text-primary-700 hover:border-primary-300 border border-neutral-200 rounded-full transition-all cursor-pointer'

  const activeCategoryIcon = (category: SpecPill['category']) => {
    switch (category) {
      case 'material': return <Layers className="w-3.5 h-3.5 text-emerald-500" />
      case 'bagType': return <Package className="w-3.5 h-3.5 text-blue-500" />
      case 'certification': return <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
      default: return <ArrowRight className="w-3.5 h-3.5 text-primary-500" />
    }
  }

  return (
    <section className={`my-8 ${className}`}>
      <div className={pillContainerClass}>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-neutral-200/20">
          <div>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${isPouch ? 'text-[#D4FF00]' : 'text-primary-600 bg-primary-50 px-2 py-0.5 rounded'}`}>
              B2B Specification Filters
            </span>
            <h3 className={`text-base font-bold mt-1 ${isPouch ? 'text-white uppercase' : 'text-neutral-900'}`}>
              {primaryKeyword ? `${primaryKeyword} Specifications` : 'Explore Eco Packaging Technical Specs'}
            </h3>
          </div>
          <Link
            to="/store"
            className={`text-xs font-bold flex items-center gap-1 ${isPouch ? 'text-[#00FFFF] hover:underline' : 'text-primary-600 hover:text-primary-800'}`}
          >
            View Full Material Catalog <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Spec Pills List */}
        <div className="flex flex-wrap gap-2">
          {DEFAULT_PILLS.map((pill, idx) => (
            <Link key={idx} to={pill.link} className={badgeClass}>
              {activeCategoryIcon(pill.category)}
              <span>{pill.label}</span>
            </Link>
          ))}

          {/* Dynamic extracted keywords */}
          {parsedKeywords.slice(0, 6).map((kw, idx) => (
            <span key={`kw-${idx}`} className={badgeClass}>
              <ArrowRight className="w-3.5 h-3.5 text-primary-400" />
              <span>{kw}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default B2BSpecPillBar
