import React from 'react'
import { Link } from 'react-router-dom'
import { getDomain } from '../utils/domain'

interface CatalogItem {
  id: string
  label: string
  icon: React.ReactNode
}

const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: 'Rollstock',
    label: 'Rollstock',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-8">
        <ellipse cx="75" cy="40" rx="4" ry="10" />
        <ellipse cx="75" cy="40" rx="9" ry="20" />
        <ellipse cx="75" cy="40" rx="14" ry="30" />
        <path d="M75 10 C 50 10, 36 14, 26 34 C 20 48, 18 64, 8 64 C 5 64, 3 60, 5 56 C 7 52, 11 52, 14 56" />
        <path d="M75 70 L52 70 C 46 70, 43 66, 41 60" />
      </svg>
    )
  },
  {
    id: '3 Side Seal Pouch',
    label: '3 Side Seal',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-8">
        <path d="M32 15 H68 V26 L65 28 L68 30 V64 C68 68 65 71 61 71 H39 C35 71 32 68 32 64 V30 L35 28 L32 26 Z" />
        <line x1="32" y1="20" x2="68" y2="20" strokeWidth="1" />
        <path d="M37 15 V66 H63 V15" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    id: 'Center Seal Pouch',
    label: 'Center Seal',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-8">
        <path d="M30 15 H70" strokeWidth="3" />
        <path d="M30 67 H70" strokeWidth="3" />
        <path d="M30 15 C21 28 21 54 30 67" />
        <path d="M70 15 C79 28 79 54 70 67" />
        <path d="M47 15 V67 M53 15 V67" strokeWidth="1.2" />
        <path d="M47 25 L53 30 M47 40 L53 45 M47 55 L53 60" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: 'Stand Up Pouch / Doypack',
    label: 'Stand Up Pouch',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-8">
        <path d="M32 15 H68 V26 L66 28 L68 30 V58 C68 65 61 69 50 69 C39 69 32 65 32 58 V30 L34 28 L32 26 Z" />
        <line x1="32" y1="21" x2="68" y2="21" strokeWidth="1" />
        <path d="M32 58 C38 62 62 62 68 58" strokeWidth="1.8" />
        <path d="M35 59 L38 65 M65 59 L62 65" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: 'Flat Squared Bottom Pouch',
    label: 'Flat Bottom Pouch',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-8">
        <path d="M32 18 H54 V70 H32 Z" />
        <path d="M54 18 L68 23 V64 L54 70" />
        <path d="M32 18 L54 18 L68 23" strokeWidth="3" />
        <path d="M61 20.5 V67" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M32 70 L54 70 L68 64" />
      </svg>
    )
  },
  {
    id: 'Side Gusset Pouch',
    label: 'Side Gusset Pouch',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-8">
        <path d="M35 15 H65 V20 L61 25 V70 H39 V25 L35 20 Z" />
        <path d="M44 25 V70" strokeWidth="1.5" />
        <path d="M56 25 V70" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="35" y1="20" x2="65" y2="20" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 'Shrink Sleeve',
    label: 'Shrink Sleeve',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-8">
        <path d="M35 15 C 35 15, 45 12, 50 12 C 55 12, 65 15, 65 15 V 65 C 65 65, 55 68, 50 68 C 45 68, 35 65, 35 65 Z" stroke="currentColor" strokeWidth="2.2" fill="none" />
        <path d="M35 25 C 35 25, 45 22, 50 22 C 55 22, 65 25, 65 25" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M35 55 C 35 55, 45 52, 50 52 C 55 52, 65 55, 65 55" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    )
  },
  {
    id: 'Quad Seal Pouch',
    label: 'Quad Seal Pouch',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-8">
        <path d="M32 18 H52 V68 H32 Z" />
        <path d="M52 18 L66 22 V63 L52 68" />
        <path d="M35 18 V68 M49 18 V68 M55 19 V66 M63 21 V64" strokeWidth="1.2" />
        <path d="M32 18 H52 L66 22" strokeWidth="2.2" />
      </svg>
    )
  },
  {
    id: 'Box Bottom Pouch',
    label: 'Box Bottom Pouch',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-8">
        <path d="M32 18 H52 V68 H32 Z" />
        <path d="M52 18 L66 21 V63 L52 68" />
        <path d="M32 68 L42 72 L52 68 L66 63" />
        <path d="M42 72 V68" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M32 18 L52 18 L66 21" strokeWidth="3" />
        <path d="M59 19.5 V65" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: 'Spouted Stand Up Pouch',
    label: 'Spouted Stand Up',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-8">
        <rect x="46" y="8" width="8" height="10" rx="1" />
        <line x1="42" y1="12" x2="58" y2="12" strokeWidth="1.5" />
        <line x1="42" y1="15" x2="58" y2="15" strokeWidth="1.5" />
        <path d="M34 18 H46 V22 H54 V18 H66 V55 C66 63 60 67 50 67 C40 67 34 63 34 55 Z" />
        <path d="M34 55 C40 59 60 59 66 55" strokeWidth="1.8" />
      </svg>
    )
  },
  {
    id: 'Mailer Bag',
    label: 'Mailer Bag',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-8">
        <path d="M30 20 H70 V68 H30 Z" />
        <path d="M30 20 L50 38 L70 20" strokeWidth="2" />
        <line x1="33" y1="25" x2="67" y2="25" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M30 60 H70" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    id: 'Box',
    label: 'Box Catalog',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-8">
        <path d="M25 32 L50 42 V70 L25 58 Z" />
        <path d="M50 42 L75 32 V58 L50 70 Z" />
        <path d="M25 32 L50 20 L75 32 L50 42 Z" />
        <line x1="50" y1="20" x2="50" y2="42" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    id: 'Label & Sticker',
    label: 'Label & Sticker',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-8">
        <rect x="28" y="16" width="44" height="48" rx="8" strokeDasharray="3 3" strokeWidth="1.2" />
        <path d="M34 22 H66 V48 L56 58 H34 Z" fill="none" />
        <path d="M66 48 L56 58 V48 Z" strokeWidth="2" />
        <circle cx="46" cy="36" r="6" strokeWidth="1.5" />
        <line x1="38" y1="48" x2="54" y2="48" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 'Wrapping Paper',
    label: 'Wrapping Paper',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-8">
        <rect x="28" y="15" width="44" height="50" rx="2" strokeWidth="1.5" />
        <path d="M28 35 H72 M28 55 H72" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M40 15 V65 M60 15 V65" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M34 25 C34 25 38 29 50 29 C62 29 66 25 66 25" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: 'Machinery',
    label: 'Machinery',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-8">
        <rect x="25" y="25" width="50" height="40" rx="4" strokeWidth="2" />
        <circle cx="35" cy="45" r="5" strokeWidth="2" />
        <circle cx="65" cy="45" r="5" strokeWidth="2" />
        <path d="M45 45 H55" strokeWidth="2" />
        <path d="M25 35 H75" strokeWidth="1" />
        <path d="M40 25 V15 H60 V25" strokeWidth="1.5" />
      </svg>
    )
  }
]

export default function ProductCatalogBanner() {
  const isPouchDomain = getDomain() === 'pouch'
  const accentColor = isPouchDomain ? 'hover:text-[#10b981] text-neutral-600' : 'hover:text-primary-500 text-neutral-600'
  const hoverBorderColor = isPouchDomain ? 'hover:border-[#10b981]' : 'hover:border-primary-500'

  // Standard Infinite Marquee
  return (
    <div className="w-full bg-white py-2 border-b border-neutral-200 select-none overflow-hidden relative z-30">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-banner {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-banner {
          display: flex;
          width: max-content;
          animation: scroll-banner 30s linear infinite;
        }
        .animate-scroll-banner:hover {
          animation-play-state: paused;
        }
      ` }} />
      
      <div className="flex w-full overflow-hidden relative">
        {/* Left & Right gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-scroll-banner py-1 flex items-center gap-8">
          {/* Double list for seamless marquee loop */}
          {[...CATALOG_ITEMS, ...CATALOG_ITEMS, ...CATALOG_ITEMS].map((item, index) => (
            <Link
              key={`${item.id}-${index}`}
              to={`/store?shape=${encodeURIComponent(item.id)}`}
              className={`flex-shrink-0 flex items-center justify-center p-2 rounded-xl border border-transparent transition-all duration-200 cursor-pointer relative group ${accentColor} ${hoverBorderColor} hover:bg-neutral-50/50`}
            >
              <div className="w-8 h-8 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Hover Tooltip showing name of catalog */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-neutral-900 text-white text-[10px] font-black uppercase tracking-wider rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50 pointer-events-none border border-neutral-800">
                {item.label}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-neutral-900" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
