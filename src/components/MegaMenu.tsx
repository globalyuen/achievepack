import { useState, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, Layers, Palette, Package, BookOpen, Calendar, FileText, Sparkles } from 'lucide-react'
import { useCustomQuote } from '../contexts/CustomQuoteContext'

// Ads images pool with related product links (9:16 ratio images)
const ADS_IMAGES_POOL = [
  { image: '/imgs/illustrated/a_achievepack_standup_pouches_9884402.webp', link: '/packaging/stand-up-pouches' },
  { image: '/imgs/illustrated/a_achievepack_flatbottom_bags_0519153.webp', link: '/packaging/flat-bottom-bags' },
  { image: '/imgs/illustrated/a_achievepack_sidegusset_bags_7074883.webp', link: '/packaging/side-gusset-bags' },
  { image: '/imgs/illustrated/a_achievepack_flat_pouches_0260646.webp', link: '/packaging/flat-pouches' },
  { image: '/imgs/illustrated/a_achievepack_spout_pouches_1062736.webp', link: '/packaging/spout-pouches' },
  { image: '/imgs/illustrated/a_achievepack_custom_boxes_6574270.webp', link: '/packaging/custom-boxes' },
  { image: '/imgs/illustrated/a_compostable_v3_9254998.webp', link: '/materials/compostable' },
  { image: '/imgs/illustrated/a_home_compostable_card_v1_2166648.webp', link: '/materials/home-compostable' },
  { image: '/imgs/illustrated/a_industrial_compostable_card_v1_5916306.webp', link: '/materials/industrial-compostable' },
  { image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp', link: '/materials/recyclable-mono-pe' },
  { image: '/imgs/illustrated/a_recyclable_mono_pp_card_v2_2805205.webp', link: '/materials/recyclable-mono-pp' },
  { image: '/imgs/illustrated/a_bio_pe_card_v3_4603248.webp', link: '/materials/bio-pe' },
  { image: '/imgs/illustrated/a_pcr_card_v1_0334493.webp', link: '/materials/pcr' },
  { image: '/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp', link: '/solutions/coffee-roaster' },
  { image: '/imgs/illustrated/a_coffee_tea_hero_v1_1905321.webp', link: '/industry/coffee-tea' },
  { image: '/imgs/illustrated/a_pet_food_hero_v3_7652587.webp', link: '/industry/pet-food' },
  { image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp', link: '/industry/snacks-food' },
  { image: '/imgs/illustrated/a_baby_food_hero_v1_7008467.webp', link: '/industry/baby-food' },
  { image: '/imgs/illustrated/a_frozen_food_hero_v2_0166133.webp', link: '/industry/frozen-food' },
  { image: '/imgs/illustrated/a_supplements_hero_v1_0434970.webp', link: '/industry/supplements-powders' },
  { image: '/imgs/illustrated/a_monomaterial_warm_4127359.webp', link: '/store?category=eco-stock' },
  { image: '/imgs/illustrated/a_digital_printing_close_detail_b_7761926.webp', link: '/printing/digital-printing' },
  { image: '/imgs/illustrated/a_ecommerce_brand_variation_2_5348466.webp', link: '/solutions/ecommerce-brand' },
  { image: '/imgs/illustrated/a_startup_founder_variation_3_2900816.webp', link: '/solutions/startup-founder' },
  { image: '/imgs/illustrated/a_artisan_producer_variation_1_5454378.webp', link: '/solutions/artisan-producer' },
  { image: '/imgs/illustrated/a_corporate_sustainability_variation_1_1739210.webp', link: '/solutions/corporate-sustainability' },
  { image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp', link: '/products/low-moq-packaging' },
  { image: '/imgs/illustrated/a_degassingvalve_warm_0118491.webp', link: '/products/coffee-bags-degassing-valve' },
  { image: '/imgs/illustrated/a_snack_brand_variation_1_5605894.webp', link: '/solutions/snack-brand-manager' },
  { image: '/imgs/illustrated/a_barrier_options_presentation_c_6124347.webp', link: '/features/barrier-options' },
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
  { name: '3 Side Seal Pouch', link: '/packaging/flat-pouches' },
  { name: 'Stand Up Pouch', link: '/packaging/stand-up-pouches' },
  { name: 'Flat Bottom Bags', link: '/packaging/flat-bottom-bags' },
  { name: 'Side Gusset Bags', link: '/packaging/side-gusset-bags' },
  { name: 'Spout Pouches', link: '/packaging/spout-pouches' },
  { name: 'Boxes', link: '/packaging/custom-boxes' },
  { name: 'Mailer', link: '/store?category=mailer' },
]

// CUSTOM menu - Custom printed packaging
const CUSTOM_CATEGORIES = [
  { name: 'Eco Digital', link: '/store?category=eco-digital' },
  { name: 'Conventional Digital', link: '/store?category=conventional-digital' },
  { name: 'Custom Boxes', link: '/custom-boxes' },
]

// STOCK menu - Ready stock items
const STOCK_CATEGORIES = [
  { name: 'Zipper Stand Up Pouch', link: '/store?category=eco-stock&shape=standup' },
  { name: 'Zipper 3 Side Sealed', link: '/store?category=eco-stock&shape=3side' },
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
    <div className="w-[750px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
      <div className="grid grid-cols-12">
        {/* Left: Categories */}
        <div className="col-span-3 bg-neutral-50 p-5 border-r border-neutral-100">
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

        {/* Right: Random Ads Images (9:16 ratio, 100px width) */}
        <div className="col-span-9 p-4">
          <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Discover Products</h3>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {adsImages.map((ad, index) => (
              <Link 
                key={`${ad.link}-${index}`} 
                to={ad.link} 
                className="flex-shrink-0 group"
              >
                <div 
                  className="w-[100px] bg-neutral-100 rounded-lg overflow-hidden group-hover:shadow-lg group-hover:ring-2 group-hover:ring-primary-400 transition-all"
                  style={{ aspectRatio: '9/16' }}
                >
                  <img
                    src={ad.image}
                    alt="Product"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
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
  
  // Randomize 10 ads images when menu opens
  const randomAdsImages = useMemo(() => {
    return shuffleArray(ADS_IMAGES_POOL).slice(0, 10)
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
                adsImages={randomAdsImages}
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
                adsImages={randomAdsImages}
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
                adsImages={randomAdsImages}
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
              <div className="w-[550px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
                <div className="grid grid-cols-4 gap-0">
                  <div className="p-4 border-r border-neutral-100">
                    <h4 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">Materials</h4>
                    <ul className="space-y-1">
                      {LEARN_CATEGORIES.materials.map((item) => (
                        <li key={item.name}>
                          <Link to={item.link} className="block py-1 text-xs text-neutral-600 hover:text-primary-600 transition-colors">{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 border-r border-neutral-100">
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
        <Link to="/blog" className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-primary-600 transition-colors">
          <FileText className="h-4 w-4" />
          BLOG
        </Link>
      </nav>
    </div>
  )
}
