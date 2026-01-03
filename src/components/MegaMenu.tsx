import { useState, useRef, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, Layers, Palette, Package, BookOpen, Calendar, FileText, Sparkles, Search, Leaf, Factory, ShoppingBag, Users, Award, HelpCircle, Zap, Beaker, Globe, Menu, X } from 'lucide-react'
import { useCustomQuote } from '../contexts/CustomQuoteContext'
import { LEARN_PAGES } from './LearnNavigation'
import { blogPosts } from '../data/blogData'

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

// SHAPE menu - All packaging shapes (two columns)
const SHAPE_CATEGORIES_COL1 = [
  { name: '3 Side Seal Pouch', link: '/store?shape=3-side-seal' },
  { name: 'Stand Up Pouch', link: '/store?shape=stand-up' },
  { name: 'Flat Bottom Bags', link: '/store?shape=flat-bottom' },
  { name: 'Side Gusset Bags', link: '/store?shape=side-gusset' },
  { name: 'Spout Pouches', link: '/store?shape=spout' },
]

const SHAPE_CATEGORIES_COL2 = [
  { name: 'Custom Boxes', link: '/store?category=boxes' },
  { name: 'Mailer Bags', link: '/store?category=mailer' },
  { name: 'Labels & Stickers', link: '/products/labels-and-stickers' },
  { name: 'Lab Bags', link: '/products/lab-bags' },
]

// Combined for backward compat
const SHAPE_CATEGORIES = [...SHAPE_CATEGORIES_COL1, ...SHAPE_CATEGORIES_COL2]

// CUSTOM menu - Custom printed packaging
const CUSTOM_CATEGORIES = [
  { name: 'Eco Digital Pouches', link: '/store?category=eco-digital' },
  { name: 'Conventional Digital', link: '/store?category=conventional-digital' },
  { name: 'Custom Boxes', link: '/store?category=boxes' },
  { name: 'Custom Mailer Bags', link: '/store?category=mailer' },
  { name: 'Custom Labels', link: '/products/custom-labels' },
  { name: 'Custom Stickers', link: '/products/custom-stickers' },
]

// STOCK menu - Ready stock items
const STOCK_CATEGORIES = [
  { name: 'Zipper Stand Up Pouch', link: '/store?category=eco-stock' },
  { name: 'Zipper 3 Side Sealed', link: '/store?category=eco-stock' },
  { name: 'Mailer Bags', link: '/store?category=mailer' },
]

// Category icons for Learn Menu
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  materials: <Leaf className="h-3.5 w-3.5" />,
  packaging: <Package className="h-3.5 w-3.5" />,
  options: <Package className="h-3.5 w-3.5" />,
  industries: <Factory className="h-3.5 w-3.5" />,
  products: <ShoppingBag className="h-3.5 w-3.5" />,
  solutions: <Users className="h-3.5 w-3.5" />,
  topics: <FileText className="h-3.5 w-3.5" />,
  caseStudies: <Award className="h-3.5 w-3.5" />,
  knowledge: <BookOpen className="h-3.5 w-3.5" />,
  support: <HelpCircle className="h-3.5 w-3.5" />,
  function: <Zap className="h-3.5 w-3.5" />,
  lab: <Beaker className="h-3.5 w-3.5" />,
  usa: <Globe className="h-3.5 w-3.5" />,
  company: <Award className="h-3.5 w-3.5" />,
  spec: <Layers className="h-3.5 w-3.5" />,
  composting: <Leaf className="h-3.5 w-3.5" />,
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
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [hoveredPage, setHoveredPage] = useState<{ name: string; link: string; image: string } | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { openQuoteLightbox } = useCustomQuote()
  
  // Pre-fill Learn menu with random content when it opens
  useEffect(() => {
    if (activeMenu === 'learn' && !activeCategory) {
      // Get all category keys
      const categoryKeys = Object.keys(LEARN_PAGES)
      // Pick a random category
      const randomCategoryKey = categoryKeys[Math.floor(Math.random() * categoryKeys.length)]
      setActiveCategory(randomCategoryKey)
      
      // Pick a random page from that category to show preview
      const category = LEARN_PAGES[randomCategoryKey as keyof typeof LEARN_PAGES]
      if (category && category.pages.length > 0) {
        const randomPage = category.pages[Math.floor(Math.random() * category.pages.length)]
        setHoveredPage(randomPage)
      }
    }
  }, [activeMenu])
  
  // Reset when menu closes
  useEffect(() => {
    if (activeMenu !== 'learn') {
      setActiveCategory(null)
      setHoveredPage(null)
    }
  }, [activeMenu])
  
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
    // Only refresh for store menus, not Learn
    if (activeMenu !== menuId && (menuId === 'shape' || menuId === 'custom' || menuId === 'stock')) {
      setRefreshKey(prev => prev + 1)
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
              <div className="w-[95vw] max-w-[1200px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
                <div className="grid grid-cols-12">
                  {/* Left: Categories - Two Columns */}
                  <div className="col-span-4 lg:col-span-3 bg-neutral-50 p-4 lg:p-5 border-r border-neutral-100">
                    <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-3">All Shapes & Products</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Column 1: Pouches */}
                      <div>
                        <h4 className="text-[10px] font-bold text-neutral-500 uppercase mb-2">Pouches</h4>
                        <ul className="space-y-0.5">
                          {SHAPE_CATEGORIES_COL1.map((cat) => (
                            <li key={cat.name}>
                              <Link to={cat.link} className="flex items-center gap-1 py-1.5 px-2 rounded-lg text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all text-xs font-medium">
                                <ChevronRight className="h-2.5 w-2.5 text-neutral-400" />
                                {cat.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Column 2: Other Products */}
                      <div>
                        <h4 className="text-[10px] font-bold text-neutral-500 uppercase mb-2">Other Products</h4>
                        <ul className="space-y-0.5">
                          {SHAPE_CATEGORIES_COL2.map((cat) => (
                            <li key={cat.name}>
                              <Link to={cat.link} className="flex items-center gap-1 py-1.5 px-2 rounded-lg text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all text-xs font-medium">
                                <ChevronRight className="h-2.5 w-2.5 text-neutral-400" />
                                {cat.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-neutral-200">
                      <button
                        onClick={openQuoteLightbox}
                        className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-primary-600 text-white rounded-lg text-xs font-semibold hover:bg-primary-700 transition-colors"
                      >
                        <Sparkles className="h-4 w-4" />
                        Custom Quote
                      </button>
                    </div>
                  </div>

                  {/* Right: Random Ads Images */}
                  <div className="col-span-8 lg:col-span-9 p-3 lg:p-4">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Discover Products</h3>
                    <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                      {randomStoreAdsImages.map((ad, index) => (
                        <Link key={`shape-${ad.link}-${index}`} to={ad.link} className="flex-shrink-0 group">
                          <div className="w-[120px] lg:w-[200px] bg-neutral-100 rounded-lg overflow-hidden" style={{ aspectRatio: '9/16' }}>
                            <img src={ad.image} alt="Product" className="w-full h-full object-cover pointer-events-none" loading="lazy" decoding="async" />
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-neutral-100">
                      <Link to="/store" className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                        Shop All Products →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
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
          <Link to="/learn" className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors ${activeMenu === 'learn' ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'}`}>
            <BookOpen className="h-4 w-4" />
            LEARN
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'learn' ? 'rotate-180' : ''}`} />
          </Link>
          {activeMenu === 'learn' && (
            <div className="fixed left-1/2 -translate-x-1/2 top-16 pt-2 z-50" onMouseEnter={() => handleMouseEnter('learn')} onMouseLeave={handleMouseLeave}>
              <div className="w-[95vw] max-w-[1100px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
                <div className="grid grid-cols-12">
                  {/* Left: All Categories */}
                  <div className="col-span-3 bg-neutral-50 p-3 border-r border-neutral-100 max-h-[70vh] overflow-y-auto">
                    <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Learn Center
                    </h3>
                    <ul className="space-y-0.5">
                      {Object.entries(LEARN_PAGES).map(([key, category]) => (
                        <li key={key}>
                          <button
                            onMouseEnter={() => { setActiveCategory(key); setHoveredPage(null); }}
                            className={`w-full flex items-center justify-between py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                              activeCategory === key ? 'bg-primary-100 text-primary-700' : 'text-neutral-700 hover:bg-neutral-100'
                            }`}
                          >
                            <span className="flex items-center gap-1.5">
                              {CATEGORY_ICONS[key]}
                              {category.title}
                            </span>
                            <span className="text-[10px] text-neutral-400">{category.pages.length}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Middle: Pages of selected category */}
                  <div className="col-span-5 p-3 border-r border-neutral-100 max-h-[70vh] overflow-y-auto">
                    {activeCategory && LEARN_PAGES[activeCategory as keyof typeof LEARN_PAGES] ? (
                      <>
                        <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                          {LEARN_PAGES[activeCategory as keyof typeof LEARN_PAGES].title}
                        </h4>
                        <ul className="space-y-0.5">
                          {LEARN_PAGES[activeCategory as keyof typeof LEARN_PAGES].pages.map((page) => (
                            <li key={page.link}>
                              <Link
                                to={page.link}
                                onMouseEnter={() => setHoveredPage(page)}
                                className={`block py-1.5 px-2 rounded-lg text-xs transition-all ${
                                  hoveredPage?.link === page.link ? 'bg-primary-50 text-primary-700' : 'text-neutral-600 hover:bg-neutral-50'
                                }`}
                              >
                                {page.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <div className="text-center py-8 text-neutral-400 text-sm">
                        <BookOpen className="h-8 w-8 mx-auto mb-2 opacity-50" />
                        Hover a category to see pages
                      </div>
                    )}
                  </div>

                  {/* Right: Hero Image Preview */}
                  <div className="col-span-4 p-3 bg-neutral-50">
                    {hoveredPage ? (
                      <div className="h-full flex flex-col">
                        <img
                          src={hoveredPage.image}
                          alt={hoveredPage.name}
                          className="w-full aspect-[4/3] object-cover rounded-lg mb-2"
                          loading="lazy"
                        />
                        <h5 className="text-sm font-semibold text-neutral-800 mb-1">{hoveredPage.name}</h5>
                        <Link
                          to={hoveredPage.link}
                          className="text-xs text-primary-600 hover:text-primary-700 font-medium"
                        >
                          Read more →
                        </Link>
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-neutral-400 text-sm">
                        <div className="text-center">
                          <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                          Hover a page to preview
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-neutral-50 px-4 py-2 border-t border-neutral-100 flex items-center justify-between">
                  <Link to="/learn" className="text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                    Browse All Pages →
                  </Link>
                  <a
                    href="https://calendly.com/30-min-free-packaging-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary-600 text-xs font-semibold hover:text-primary-700 transition-colors"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BLOG */}
        <div className="relative" onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
          <Link to="/blog" className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors ${activeMenu === 'blog' ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'}`}>
            <FileText className="h-4 w-4" />
            BLOG
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'blog' ? 'rotate-180' : ''}`} />
          </Link>
          {activeMenu === 'blog' && (
            <div className="fixed left-1/2 -translate-x-1/2 top-16 pt-2 z-50" onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
              <div className="w-[95vw] max-w-[900px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
                <div className="grid grid-cols-12">
                  {/* Left: Blog Categories */}
                  <div className="col-span-3 bg-neutral-50 p-3 border-r border-neutral-100">
                    <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Blog
                    </h3>
                    <ul className="space-y-0.5">
                      <li>
                        <Link to="/blog" className="flex items-center gap-2 py-1.5 px-2 rounded-lg text-xs font-medium text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all">
                          <ChevronRight className="h-3 w-3 text-neutral-400" />
                          All Articles
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog?category=Packaging" className="flex items-center gap-2 py-1.5 px-2 rounded-lg text-xs font-medium text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all">
                          <ChevronRight className="h-3 w-3 text-neutral-400" />
                          Packaging Tips
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog?category=Sustainability" className="flex items-center gap-2 py-1.5 px-2 rounded-lg text-xs font-medium text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all">
                          <ChevronRight className="h-3 w-3 text-neutral-400" />
                          Sustainability
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog?category=Industry" className="flex items-center gap-2 py-1.5 px-2 rounded-lg text-xs font-medium text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all">
                          <ChevronRight className="h-3 w-3 text-neutral-400" />
                          Industry News
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog?category=Newsletter" className="flex items-center gap-2 py-1.5 px-2 rounded-lg text-xs font-medium text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all">
                          <ChevronRight className="h-3 w-3 text-neutral-400" />
                          Newsletter
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Right: Latest Blog Posts with Images */}
                  <div className="col-span-9 p-3">
                    <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Latest Articles</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {blogPosts.slice(0, 6).map((post) => (
                        <Link
                          key={post.id}
                          to={`/blog/${post.slug}`}
                          className="group"
                        >
                          <div className="aspect-[16/10] rounded-lg overflow-hidden mb-2 bg-neutral-100">
                            <img
                              src={post.featuredImage}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-[10px] text-primary-600 font-medium">{post.category}</span>
                          <h5 className="text-xs font-medium text-neutral-800 line-clamp-2 group-hover:text-primary-600 transition-colors">{post.title}</h5>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-50 px-4 py-2 border-t border-neutral-100">
                  <Link to="/blog" className="text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                    View All Posts →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
