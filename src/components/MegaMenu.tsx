import { useState, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, Layers, Palette, Package, BookOpen, Calendar, FileText, Sparkles } from 'lucide-react'
import { useCustomQuote } from '../contexts/CustomQuoteContext'

// Store-related 9:16 ads images pool (for SHAPE/CUSTOM/STOCK menus - left side)
const STORE_ADS_POOL = [
  // Eco Digital products (9:16)
  { image: '/imgs/menu/eco-digital/D_Ec0HTDnnSvukUxwY-fJNRDhAjAWxtRnjMmkr63vlk=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/menu/eco-digital/TKAqlW4KL2xV9glNA91iuD_sYEvp2G29eWT4819Ne1g=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/menu/eco-digital/hAGC60SxXYmSdiBTJD3XPhMZBocRVBXZyuV-dvt3r7c=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/menu/eco-digital/os9CHhTSQoGASvA8lsfm-iHYfG4kddPoZP2wYMh47fs=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/menu/eco-digital/wXqLssPqdR9J0iDhIyQ-NGTDDFm-3DgFKlyQD4ipsEw=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/menu/eco-digital/X5RkmCe76z3hyMvMr6Yvb5RjclkrdDjh2rNvGIRqgWU=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/menu/eco-digital/LQ5WGOrIkQPzbXSfWupAIFvVrlyL9lvZoMKc35bbHPw=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/menu/eco-digital/vxuLNp13OWRZXhe-qkwn3UgHCWirk5TzBLhB7q8JJ30=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/menu/eco-digital/AvEbY4SX8gwP2SzENbSen8dnT_kTrrk8VN6siqp1B2I=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/menu/eco-digital/0eQiBArdHVo_uyy12vmVid9Vc-hB8Msln4h0Oddu4dQ=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/menu/eco-digital/1k3ig0ezuHcds_30mxxPOgFL-qeSwHc8uuzElo2-GP4=.webp', link: '/store?category=eco-digital' },
  { image: '/imgs/menu/eco-digital/7CWxuO-mB4GevbYtCFnSFfzuCLECtUQ8AjuleiT4vAk=.webp', link: '/store?category=eco-digital' },
  // Corrugated Box (9:16)
  { image: '/imgs/menu/corrugated-box/a_hero_kv_black_gold_mailer_4737831.webp', link: '/store?category=boxes' },
  { image: '/imgs/menu/corrugated-box/a_foil_stamping_detail_logo_3101304.webp', link: '/store?category=boxes' },
  { image: '/imgs/menu/corrugated-box/a_material_benefits_page_4228725.webp', link: '/store?category=boxes' },
  { image: '/imgs/menu/corrugated-box/a_brand_closing_collection_9526391.webp', link: '/store?category=boxes' },
  { image: '/imgs/menu/corrugated-box/a_insert_detail_arrangement_4804418.webp', link: '/store?category=boxes' },
  { image: '/imgs/menu/corrugated-box/a_packing_scene_production_9264348.webp', link: '/store?category=boxes' },
  // Tuck Box (9:16)
  { image: '/imgs/menu/tuck-box/a_hero_kv_tuck_box_3590474.webp', link: '/store?category=boxes' },
  { image: '/imgs/menu/tuck-box/a_detail_gold_foil_embossing_5696847.webp', link: '/store?category=boxes' },
  { image: '/imgs/menu/tuck-box/a_range_collection_closing_9211739.webp', link: '/store?category=boxes' },
  { image: '/imgs/menu/tuck-box/a_detail_base_loading_4721904.webp', link: '/store?category=boxes' },
  { image: '/imgs/menu/tuck-box/a_retail_display_scene_3099119.webp', link: '/store?category=boxes' },
  // Mailer Bags (9:16)
  { image: '/imgs/menu/mailer/447849b2-65ea-49fb-86de-1278a636c795_upscayl_3x_upscayl-standard-4x.webp', link: '/store?category=mailer' },
  { image: '/imgs/menu/mailer/a_comparison_compostable_transparent_7910662.webp', link: '/store?category=mailer' },
  { image: '/imgs/menu/mailer/a_custom_printing_showcase_transparent_0406760.webp', link: '/store?category=mailer' },
  { image: '/imgs/menu/mailer/a_durability_test_material_pull_6142959.webp', link: '/store?category=mailer' },
]

// SEO page 9:16 ads images pool (for LEARN/BLOG menus - right side)
const LEARN_ADS_POOL = [
  // Pouch Shape ads (9:16) - linking to SEO pages
  { image: '/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp', link: '/packaging/flat-pouches' },
  { image: '/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp', link: '/packaging/stand-up-pouches' },
  { image: '/imgs/pouch-shape/ads/a_achieve_pack_quad_side_gusset_closeup_9751125.webp', link: '/packaging/side-gusset-bags' },
  { image: '/imgs/pouch-shape/ads/a_achieve_pack_spout_pouch_closeup_5874382.webp', link: '/packaging/spout-pouches' },
  { image: '/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp', link: '/packaging/flat-bottom-bags' },
  { image: '/imgs/pouch-shape/ads/a_achieve_pack_irregular_shape_closeup_0205542.webp', link: '/packaging/vacuum-pouches' },
  { image: '/imgs/pouch-shape/ads/a_achieve_pack_size_closure_options_7735113.webp', link: '/knowledge/pouch-sizing' },
  // Surface Finish ads (9:16)
  { image: '/imgs/surface/ads/a_achieve_pack_main_kv_six_finishes_3535755.webp', link: '/features/surface-finish' },
  { image: '/imgs/surface/ads/a_gloss_finish_detail_5685549.webp', link: '/features/surface-finish' },
  { image: '/imgs/surface/ads/a_matte_finish_detail_7483118.webp', link: '/features/surface-finish' },
  { image: '/imgs/surface/ads/a_metallic_gold_closeup_5151764.webp', link: '/features/surface-finish' },
  { image: '/imgs/surface/ads/a_foil_green_charcoal_7632386.webp', link: '/features/surface-finish' },
  { image: '/imgs/surface/ads/a_embossed_navy_9933981.webp', link: '/features/surface-finish' },
  // Reclosure ads (9:16)
  { image: '/imgs/reclose/ads/a_reclosure_options_kv_product_photo_7983949.webp', link: '/features/reclosure-options' },
  { image: '/imgs/reclose/ads/a_reclosure_four_quadrant_overview_3481316.webp', link: '/features/reclosure-options' },
  { image: '/imgs/reclose/ads/a_spout_closure_closeup_detail_2705813.webp', link: '/features/reclosure-options' },
  { image: '/imgs/reclose/ads/a_tintie_coffee_pouch_correct_4114906.webp', link: '/features/reclosure-options' },
  { image: '/imgs/reclose/ads/a_valve_closure_detail_6401844.webp', link: '/features/reclosure-options' },
  { image: '/imgs/reclose/ads/a_presstoclose_closure_detail_5742103.webp', link: '/features/reclosure-options' },
  { image: '/imgs/reclose/ads/a_reclosure_comparison_scene_9769566.webp', link: '/features/reclosure-options' },
  // Barrier ads (9:16)
  { image: '/imgs/barrier/ads/a_achieve_pack_barrier_kv_updated_green_definition_6833995.webp', link: '/features/barrier-options' },
  { image: '/imgs/barrier/ads/a_barrier_levels_7395220.webp', link: '/features/barrier-options' },
  { image: '/imgs/barrier/ads/a_kraft_high_max_4456348.webp', link: '/features/barrier-options' },
  { image: '/imgs/barrier/ads/a_metallic_barrier_closeup_9656118.webp', link: '/features/barrier-options' },
  { image: '/imgs/barrier/ads/a_application_scenarios_2234685.webp', link: '/features/barrier-options' },
  { image: '/imgs/barrier/ads/a_transparent_options_3839456.webp', link: '/features/barrier-options' },
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
    <div className="w-[95vw] max-w-[1200px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
      <div className="grid grid-cols-12">
        {/* Left: Categories */}
        <div className="col-span-3 lg:col-span-2 bg-neutral-50 p-4 lg:p-5 border-r border-neutral-100">
          <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-3">Categories</h3>
          <ul className="space-y-0.5">
            {categories.map((cat) => (
              <li key={cat.name}>
                <Link
                  to={cat.link}
                  className="flex items-center justify-between py-2 px-2 lg:px-3 rounded-lg text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all group text-xs lg:text-sm font-medium"
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
              className="flex items-center justify-center gap-2 w-full py-2 px-2 lg:px-3 bg-primary-600 text-white rounded-lg text-xs lg:text-sm font-semibold hover:bg-primary-700 transition-colors"
            >
              <Sparkles className="h-4 w-4" />
              Custom Quote
            </button>
          </div>
        </div>

        {/* Right: Random Ads Images (9:16 ratio) */}
        <div className="col-span-9 lg:col-span-10 p-3 lg:p-4">
          <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Discover Products</h3>
          <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {adsImages.map((ad, index) => (
              <Link 
                key={`${ad.link}-${index}`} 
                to={ad.link} 
                className="flex-shrink-0 group"
              >
                <div 
                  className="w-[120px] lg:w-[200px] bg-neutral-100 rounded-lg overflow-hidden"
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
            <div className="fixed left-1/2 -translate-x-1/2 top-16 pt-2 z-50" onMouseEnter={() => handleMouseEnter('shape')} onMouseLeave={handleMouseLeave}>
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
            <div className="fixed left-1/2 -translate-x-1/2 top-16 pt-2 z-50" onMouseEnter={() => handleMouseEnter('custom')} onMouseLeave={handleMouseLeave}>
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
            <div className="fixed left-1/2 -translate-x-1/2 top-16 pt-2 z-50" onMouseEnter={() => handleMouseEnter('stock')} onMouseLeave={handleMouseLeave}>
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
            <div className="fixed left-1/2 -translate-x-1/2 top-16 pt-2 z-50" onMouseEnter={() => handleMouseEnter('learn')} onMouseLeave={handleMouseLeave}>
              <div className="w-[95vw] max-w-[1200px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
                <div className="flex">
                  {/* Left: Categories Grid */}
                  <div className="flex-shrink-0 w-[200px] lg:w-[280px] grid grid-cols-2 gap-0 border-r border-neutral-100">
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
                  <div className="flex-1 p-3 lg:p-4">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Discover More</h3>
                    <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                      {randomLearnAdsImages.map((ad, index) => (
                        <Link 
                          key={`learn-${ad.link}-${index}`} 
                          to={ad.link} 
                          className="flex-shrink-0 group"
                        >
                          <div 
                            className="w-[120px] lg:w-[200px] bg-neutral-100 rounded-lg overflow-hidden"
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
            <div className="fixed left-1/2 -translate-x-1/2 top-16 pt-2 z-50" onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
              <div className="w-[95vw] max-w-[1200px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
                <div className="flex">
                  {/* Left: Blog Categories */}
                  <div className="flex-shrink-0 w-[140px] lg:w-[180px] bg-neutral-50 p-4 lg:p-5 border-r border-neutral-100">
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
                  <div className="flex-1 p-3 lg:p-4">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Featured Products</h3>
                    <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                      {randomLearnAdsImages.map((ad, index) => (
                        <Link 
                          key={`blog-${ad.link}-${index}`} 
                          to={ad.link} 
                          className="flex-shrink-0 group"
                        >
                          <div 
                            className="w-[120px] lg:w-[200px] bg-neutral-100 rounded-lg overflow-hidden"
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
