import { useState, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, Layers, Palette, Package, BookOpen, Calendar, FileText, Sparkles } from 'lucide-react'
import { useCustomQuote } from '../contexts/CustomQuoteContext'

// Store product ads images pool (for SHAPE/CUSTOM/STOCK menus)
const STORE_ADS_POOL = [
  // Eco Digital products - linking to store with category filter
  { image: '/imgs/store/eco-digital/D_Ec0HTDnnSvukUxwY-fJNRDhAjAWxtRnjMmkr63vlk=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/TKAqlW4KL2xV9glNA91iuD_sYEvp2G29eWT4819Ne1g=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/hAGC60SxXYmSdiBTJD3XPhMZBocRVBXZyuV-dvt3r7c=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/os9CHhTSQoGASvA8lsfm-iHYfG4kddPoZP2wYMh47fs=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/wXqLssPqdR9J0iDhIyQ-NGTDDFm-3DgFKlyQD4ipsEw=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/X5RkmCe76z3hyMvMr6Yvb5RjclkrdDjh2rNvGIRqgWU=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/LQ5WGOrIkQPzbXSfWupAIFvVrlyL9lvZoMKc35bbHPw=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/vxuLNp13OWRZXhe-qkwn3UgHCWirk5TzBLhB7q8JJ30=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/YoIBVbbSdfCfRc5654ldAbT_L3N5rKcJk__lYon7YmU=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/AvEbY4SX8gwP2SzENbSen8dnT_kTrrk8VN6siqp1B2I=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/0eQiBArdHVo_uyy12vmVid9Vc-hB8Msln4h0Oddu4dQ=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/1k3ig0ezuHcds_30mxxPOgFL-qeSwHc8uuzElo2-GP4=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/7CWxuO-mB4GevbYtCFnSFfzuCLECtUQ8AjuleiT4vAk=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/ghEYoZQN4q_bq5SzDz94a_q95YbMZS933hJEnuImpmc=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/MPRxOw-bWF57OrAxie9J1CXjpM4HKHUUkoMKHeflN6E=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/bUr_Wdvkcyq2aH95-oFtusPsS5YMJ2jZ6tjm74mHEr4=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/zwwZAmSiOHouQPEkkT_Wwz5rhX13CtgkT8LqvNnoJ5w=.webp', link: '/store?category=eco-digital' },
  // Conventional Digital products
  { image: '/imgs/store/con-digital/sup-clear-zip/1.webp', link: '/store?category=conventional-digital' },
  { image: '/imgs/store/con-digital/sup-met-zip/1.webp', link: '/store?category=conventional-digital' },
  { image: '/imgs/store/con-digital/3ss-met-xzip/1.webp', link: '/store?category=conventional-digital' },
  { image: '/imgs/store/con-digital/3ss-clear-xzip/1.webp', link: '/store?category=conventional-digital' },
  { image: '/imgs/store/con-digital/sup-clear-xzip/1.webp', link: '/store?category=conventional-digital' },
  { image: '/imgs/store/con-digital/sup-met-xzip/1.webp', link: '/store?category=conventional-digital' },
  { image: '/imgs/store/con-digital/3ss-clear-zip/1.webp', link: '/store?category=conventional-digital' },
  { image: '/imgs/store/con-digital/3ss-met-zip/1.webp', link: '/store?category=conventional-digital' },
  // Box products
  { image: '/imgs/store/box/corrugated-box/a_half_open_box_3d_perspective_7357116.webp', link: '/store?category=boxes' },
  { image: '/imgs/store/box/corrugated-box/a_mockup_premium_layflat_applied_2105634.webp', link: '/store?category=boxes' },
  { image: '/imgs/store/box/corrugated-box/90f309ab-e30c-49e3-891c-83b47a7fe7a6.webp', link: '/store?category=boxes' },
  { image: '/imgs/store/box/tuck-box/247e2fdf-3274-4be8-b656-03d7e20b5a0f.webp', link: '/store?category=boxes' },
  { image: '/imgs/store/box/tuck-box/8a2918bb-a48c-44a3-875d-6e766e5f305f.webp', link: '/store?category=boxes' },
  // Customer sample images
  { image: '/imgs/store/customer-sample/Arielle.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/customer-sample/David.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/customer-sample/Holly.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/customer-sample/Leo.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/customer-sample/michelle.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/customer-sample/morlife.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/customer-sample/Nicole.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/customer-sample/Paul.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/customer-sample/Remi.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/customer-sample/Richard.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/customer-sample/ruby.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/customer-sample/Steph.webp', link: '/store?category=eco-digital' },
]

// Learn/Blog ads images pool - Use store product images only
const LEARN_ADS_POOL = [
  // Eco Digital products
  { image: '/imgs/store/eco-digital/D_Ec0HTDnnSvukUxwY-fJNRDhAjAWxtRnjMmkr63vlk=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/TKAqlW4KL2xV9glNA91iuD_sYEvp2G29eWT4819Ne1g=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/hAGC60SxXYmSdiBTJD3XPhMZBocRVBXZyuV-dvt3r7c=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/os9CHhTSQoGASvA8lsfm-iHYfG4kddPoZP2wYMh47fs=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/wXqLssPqdR9J0iDhIyQ-NGTDDFm-3DgFKlyQD4ipsEw=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/X5RkmCe76z3hyMvMr6Yvb5RjclkrdDjh2rNvGIRqgWU=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/LQ5WGOrIkQPzbXSfWupAIFvVrlyL9lvZoMKc35bbHPw=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/eco-digital/vxuLNp13OWRZXhe-qkwn3UgHCWirk5TzBLhB7q8JJ30=.webp', link: '/store?category=eco-digital' },
  // Conventional Digital products
  { image: '/imgs/store/con-digital/sup-clear-zip/1.webp', link: '/store?category=conventional-digital' },
  { image: '/imgs/store/con-digital/sup-met-zip/1.webp', link: '/store?category=conventional-digital' },
  { image: '/imgs/store/con-digital/3ss-met-xzip/1.webp', link: '/store?category=conventional-digital' },
  { image: '/imgs/store/con-digital/3ss-clear-xzip/1.webp', link: '/store?category=conventional-digital' },
  // Box products
  { image: '/imgs/store/box/corrugated-box/a_half_open_box_3d_perspective_7357116.webp', link: '/store?category=boxes' },
  { image: '/imgs/store/box/corrugated-box/a_mockup_premium_layflat_applied_2105634.webp', link: '/store?category=boxes' },
  { image: '/imgs/store/box/tuck-box/247e2fdf-3274-4be8-b656-03d7e20b5a0f.webp', link: '/store?category=boxes' },
  // Customer samples
  { image: '/imgs/store/customer-sample/Arielle.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/customer-sample/David.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/customer-sample/Holly.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/customer-sample/Leo.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/store/customer-sample/michelle.webp', link: '/store?category=eco-digital' },
]

// Shuffle array utility
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// SHAPE menu - All packaging shapes
const SHAPE_CATEGORIES = [
  { name: '3 Side Seal Pouch', link: '/store?shape=3-side-seal' },
  { name: 'Stand Up Pouch', link: '/store?shape=stand-up' },
  { name: 'Flat Bottom Bags', link: '/store?shape=flat-bottom' },
  { name: 'Side Gusset Bags', link: '/store?shape=side-gusset' },
  { name: 'Spout Pouches', link: '/store?shape=spout' },
  { name: 'Boxes', link: '/store?category=boxes' },
  { name: 'Mailer Bags', link: '/store?category=mailer' },
]

// CUSTOM menu - Custom printed packaging
const CUSTOM_CATEGORIES = [
  { name: 'Eco Digital', link: '/store?category=eco-digital' },
  { name: 'Conventional Digital', link: '/store?category=conventional-digital' },
  { name: 'Custom Boxes', link: '/store?category=boxes' },
]

// STOCK menu - Ready stock items
const STOCK_CATEGORIES = [
  { name: 'Zipper Stand Up Pouch', link: '/store?category=eco-stock' },
  { name: 'Zipper 3 Side Sealed', link: '/store?category=eco-stock' },
  { name: 'Mailer Bags', link: '/store?category=mailer' },
]

// LEARN menu categories
const LEARN_CATEGORIES = {
  materials: [
    { name: 'Home Compostable', link: '/materials/home-compostable' },
    { name: 'Industrial Compostable', link: '/materials/industrial-compostable' },
    { name: 'Recyclable Mono PE', link: '/materials/recyclable-mono-pe' },
    { name: 'Bio-PE', link: '/materials/bio-pe' },
    { name: 'PCR Recycled', link: '/materials/pcr' },
  ],
  options: [
    { name: 'Digital Printing', link: '/printing/digital-printing' },
    { name: 'Reclosure Options', link: '/features/reclosure-options' },
    { name: 'Surface Finishes', link: '/features/surface-finish' },
    { name: 'Barrier Options', link: '/features/barrier-options' },
  ],
  industries: [
    { name: 'Coffee & Tea', link: '/industry/coffee-tea' },
    { name: 'Snacks & Food', link: '/industry/snacks-food' },
    { name: 'Pet Food', link: '/industry/pet-food' },
    { name: 'Supplements', link: '/industry/supplements-powders' },
  ],
  support: [
    { name: 'FAQs', link: '/support/faqs' },
    { name: 'Lead Time', link: '/support/lead-time' },
    { name: 'Workflow', link: '/knowledge/workflow' },
    { name: 'About Us', link: '/company/about' },
  ],
}

interface MegaMenuDropdownProps {
  categories: { name: string; link: string }[]
  adsImages: { image: string; link: string }[]
  shopAllLink: string
  shopAllLabel: string
  onQuoteClick: () => void
}

function MegaMenuDropdown({ categories, adsImages, shopAllLink, shopAllLabel, onQuoteClick }: MegaMenuDropdownProps) {
  return (
    <div className="w-[1200px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
      <div className="grid grid-cols-12">
        {/* Left: Categories */}
        <div className="col-span-2 bg-neutral-50 p-5 border-r border-neutral-100">
          <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-3">Categories</h3>
          <ul className="space-y-0.5">
            {categories.map((cat) => (
              <li key={cat.name}>
                <Link
                  to={cat.link}
                  className="flex items-center justify-between py-2 px-3 rounded-lg text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all group text-sm font-medium"
                >
                  <span className="flex items-center gap-2">
                    <ChevronRight className="h-3 w-3 text-neutral-400" />
                    {cat.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-neutral-200">
            <button
              onClick={onQuoteClick}
              className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-primary-600 text-white rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors"
            >
              <Sparkles className="h-4 w-4" />
              Custom Quote
            </button>
          </div>
        </div>

        {/* Right: Random Ads Images (9:16 ratio, 200px width) */}
        <div className="col-span-10 p-4">
          <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Discover Products</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {adsImages.map((ad, index) => (
              <Link 
                key={`${ad.link}-${index}`} 
                to={ad.link} 
                className="flex-shrink-0 group"
              >
                <div 
                  className="w-[200px] bg-neutral-100 rounded-lg overflow-hidden transition-all duration-200 group-hover:shadow-lg group-hover:ring-2 group-hover:ring-primary-400 group-hover:scale-[1.02]"
                  style={{ aspectRatio: '9/16' }}
                >
                  <img
                    src={ad.image}
                    alt="Product"
                    className="w-full h-full object-cover pointer-events-none"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-neutral-100">
            <Link
              to={shopAllLink}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              {shopAllLabel} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { openQuoteLightbox } = useCustomQuote()
  
  // Randomize 10 store ads images for SHAPE/CUSTOM/STOCK menus
  const randomStoreAdsImages = useMemo(() => {
    return shuffleArray(STORE_ADS_POOL).slice(0, 10)
  }, [refreshKey])
  
  // Randomize 10 learn/blog ads images for LEARN/BLOG menus
  const randomLearnAdsImages = useMemo(() => {
    return shuffleArray(LEARN_ADS_POOL).slice(0, 10)
  }, [refreshKey])

  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    if (activeMenu !== menuId) {
      setRefreshKey(prev => prev + 1) // Refresh random images when switching menus
    }
    setActiveMenu(menuId)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150)
  }

  return (
    <div className="hidden lg:flex items-center w-full justify-between">
      {/* Left Navigation: SHAPE | CUSTOM | STOCK */}
      <nav className="flex items-center">
        {/* SHAPE */}
        <div className="relative" onMouseEnter={() => handleMouseEnter('shape')} onMouseLeave={handleMouseLeave}>
          <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors ${activeMenu === 'shape' ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'}`}>
            <Layers className="h-4 w-4" />
            SHAPE
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'shape' ? 'rotate-180' : ''}`} />
          </button>
          {activeMenu === 'shape' && (
            <div className="absolute left-0 top-full pt-2" onMouseEnter={() => handleMouseEnter('shape')} onMouseLeave={handleMouseLeave}>
              <MegaMenuDropdown
                categories={SHAPE_CATEGORIES}
                adsImages={randomStoreAdsImages}
                shopAllLink="/store"
                shopAllLabel="Shop All Shapes"
                onQuoteClick={openQuoteLightbox}
              />
            </div>
          )}
        </div>

        {/* CUSTOM */}
        <div className="relative" onMouseEnter={() => handleMouseEnter('custom')} onMouseLeave={handleMouseLeave}>
          <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors ${activeMenu === 'custom' ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'}`}>
            <Palette className="h-4 w-4" />
            CUSTOM
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'custom' ? 'rotate-180' : ''}`} />
          </button>
          {activeMenu === 'custom' && (
            <div className="absolute left-0 top-full pt-2" onMouseEnter={() => handleMouseEnter('custom')} onMouseLeave={handleMouseLeave}>
              <MegaMenuDropdown
                categories={CUSTOM_CATEGORIES}
                adsImages={randomStoreAdsImages}
                shopAllLink="/store?category=eco-digital"
                shopAllLabel="Shop All Custom Printed"
                onQuoteClick={openQuoteLightbox}
              />
            </div>
          )}
        </div>

        {/* STOCK */}
        <div className="relative" onMouseEnter={() => handleMouseEnter('stock')} onMouseLeave={handleMouseLeave}>
          <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors ${activeMenu === 'stock' ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'}`}>
            <Package className="h-4 w-4" />
            STOCK
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'stock' ? 'rotate-180' : ''}`} />
          </button>
          {activeMenu === 'stock' && (
            <div className="absolute left-0 top-full pt-2" onMouseEnter={() => handleMouseEnter('stock')} onMouseLeave={handleMouseLeave}>
              <MegaMenuDropdown
                categories={STOCK_CATEGORIES}
                adsImages={randomStoreAdsImages}
                shopAllLink="/store?category=eco-stock"
                shopAllLabel="Shop All Stock Pouches"
                onQuoteClick={openQuoteLightbox}
              />
            </div>
          )}
        </div>
      </nav>

      {/* Right Navigation: LEARN | BLOG */}
      <nav className="flex items-center">
        {/* LEARN */}
        <div className="relative" onMouseEnter={() => handleMouseEnter('learn')} onMouseLeave={handleMouseLeave}>
          <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors ${activeMenu === 'learn' ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'}`}>
            <BookOpen className="h-4 w-4" />
            LEARN
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'learn' ? 'rotate-180' : ''}`} />
          </button>
          {activeMenu === 'learn' && (
            <div className="absolute right-0 top-full pt-2" onMouseEnter={() => handleMouseEnter('learn')} onMouseLeave={handleMouseLeave}>
              <div className="w-[1200px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
                <div className="flex">
                  {/* Left: Categories Grid */}
                  <div className="flex-shrink-0 w-[280px] grid grid-cols-2 gap-0 border-r border-neutral-100">
                    <div className="p-4 border-r border-b border-neutral-100">
                      <h4 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">Materials</h4>
                      <ul className="space-y-1">
                        {LEARN_CATEGORIES.materials.map((item) => (
                          <li key={item.name}>
                            <Link to={item.link} className="block py-1 text-xs text-neutral-600 hover:text-primary-600 transition-colors">{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 border-b border-neutral-100">
                      <h4 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">Options</h4>
                      <ul className="space-y-1">
                        {LEARN_CATEGORIES.options.map((item) => (
                          <li key={item.name}>
                            <Link to={item.link} className="block py-1 text-xs text-neutral-600 hover:text-primary-600 transition-colors">{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 border-r border-neutral-100">
                      <h4 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">Industries</h4>
                      <ul className="space-y-1">
                        {LEARN_CATEGORIES.industries.map((item) => (
                          <li key={item.name}>
                            <Link to={item.link} className="block py-1 text-xs text-neutral-600 hover:text-primary-600 transition-colors">{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">Support</h4>
                      <ul className="space-y-1">
                        {LEARN_CATEGORIES.support.map((item) => (
                          <li key={item.name}>
                            <Link to={item.link} className="block py-1 text-xs text-neutral-600 hover:text-primary-600 transition-colors">{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Right: Random Ads Images */}
                  <div className="flex-1 p-4">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Discover More</h3>
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                      {randomLearnAdsImages.map((ad, index) => (
                        <Link 
                          key={`learn-${ad.link}-${index}`} 
                          to={ad.link} 
                          className="flex-shrink-0 group"
                        >
                          <div 
                            className="w-[200px] bg-neutral-100 rounded-lg overflow-hidden transition-all duration-200 group-hover:shadow-lg group-hover:ring-2 group-hover:ring-primary-400 group-hover:scale-[1.02]"
                            style={{ aspectRatio: '9/16' }}
                          >
                            <img
                              src={ad.image}
                              alt="Product"
                              className="w-full h-full object-cover pointer-events-none"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-50 px-4 py-2 border-t border-neutral-100">
                  <a
                    href="https://calendly.com/30-min-free-packaging-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-primary-600 text-sm font-semibold hover:text-primary-700 transition-colors"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Free Consultation
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BLOG */}
        <div className="relative" onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
          <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors ${activeMenu === 'blog' ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'}`}>
            <FileText className="h-4 w-4" />
            BLOG
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'blog' ? 'rotate-180' : ''}`} />
          </button>
          {activeMenu === 'blog' && (
            <div className="absolute right-0 top-full pt-2" onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
              <div className="w-[1200px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
                <div className="flex">
                  {/* Left: Blog Categories */}
                  <div className="flex-shrink-0 w-[180px] bg-neutral-50 p-5 border-r border-neutral-100">
                    <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-3">Categories</h3>
                    <ul className="space-y-0.5">
                      <li>
                        <Link to="/blog" className="flex items-center gap-2 py-2 px-3 rounded-lg text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all text-sm font-medium">
                          <ChevronRight className="h-3 w-3 text-neutral-400" />
                          All Articles
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog?category=packaging" className="flex items-center gap-2 py-2 px-3 rounded-lg text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all text-sm font-medium">
                          <ChevronRight className="h-3 w-3 text-neutral-400" />
                          Packaging Tips
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog?category=sustainability" className="flex items-center gap-2 py-2 px-3 rounded-lg text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all text-sm font-medium">
                          <ChevronRight className="h-3 w-3 text-neutral-400" />
                          Sustainability
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog?category=industry" className="flex items-center gap-2 py-2 px-3 rounded-lg text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all text-sm font-medium">
                          <ChevronRight className="h-3 w-3 text-neutral-400" />
                          Industry News
                        </Link>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-neutral-200">
                      <Link
                        to="/blog"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        View All Posts →
                      </Link>
                    </div>
                  </div>
                  
                  {/* Right: Random Ads Images */}
                  <div className="flex-1 p-4">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Featured Products</h3>
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                      {randomLearnAdsImages.map((ad, index) => (
                        <Link 
                          key={`blog-${ad.link}-${index}`} 
                          to={ad.link} 
                          className="flex-shrink-0 group"
                        >
                          <div 
                            className="w-[200px] bg-neutral-100 rounded-lg overflow-hidden transition-all duration-200 group-hover:shadow-lg group-hover:ring-2 group-hover:ring-primary-400 group-hover:scale-[1.02]"
                            style={{ aspectRatio: '9/16' }}
                          >
                            <img
                              src={ad.image}
                              alt="Product"
                              className="w-full h-full object-cover pointer-events-none"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
