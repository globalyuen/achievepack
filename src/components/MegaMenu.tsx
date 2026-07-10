import { useState, useRef, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, Layers, Palette, Package, BookOpen, Calendar, FileText, Sparkles, Search, Leaf, Factory, ShoppingBag, Users, Award, HelpCircle, Zap, Beaker, Globe, Menu, X, Sprout, Recycle, Gift, Coffee, Layout, DollarSign, Box } from 'lucide-react'
import { useCustomQuote } from '../contexts/CustomQuoteContext'
import { LEARN_PAGES } from './LearnNavigation'
import { blogPosts } from '../data/blogData'
import { SizingFinderIcon, MaterialSpecFinderIcon } from './AppIcons'

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
  { image: '/imgs/store/additional/valve.webp', link: '/features/reclosure-options' },
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
  { name: '3 Side Seal Pouch', link: '/store?shape=3-side-seal', icon: '/imgs/pouch-shape/a_three_side_seal_pouch_isolated_0879222.webp' },
  { name: 'Stand Up Pouch', link: '/store?shape=stand-up', icon: '/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp' },
  { name: 'Flat Bottom Bags', link: '/store?shape=flat-bottom', icon: '/imgs/pouch-shape/a_flat_bottom_pouch_isolated_7901973.webp' },
  { name: 'Side Gusset Bags', link: '/store?shape=side-gusset', icon: '/imgs/pouch-shape/a_side_gusset_pouch_isolated_2545871.webp' },
  { name: 'Spout Pouches', link: '/store?shape=spout', icon: '/imgs/pouch-shape/a_spout_pouch_isolated_6857112.webp' },
]

const SHAPE_CATEGORIES_COL2 = [
  { name: 'Custom Boxes', link: '/store?category=boxes', icon: '/imgs/pouch-shape/custom-box-eco.jpg' },
  { name: 'Shrink Sleeve', link: '/store?shape=Shrink Sleeve', icon: '/imgs/pouch-shape/shrink-sleeve-label-eco.jpg' },
  { name: 'Mailer Bags', link: '/store?category=mailer', icon: '/imgs/pouch-shape/compostable-mailer-eco.jpg' },
  { name: 'Labels & Stickers', link: '/products/labels-and-stickers', icon: '/imgs/pouch-shape/custom-labels-eco.jpg' },
  { name: 'Lab Bags', link: '/products/lab-bags', icon: '/imgs/pouch-shape/vacuum-pouch-eco.jpg' },
]

// Combined for backward compat
const SHAPE_CATEGORIES = [...SHAPE_CATEGORIES_COL1, ...SHAPE_CATEGORIES_COL2]

// CUSTOM menu - reorganized into Order Types and Products
const CUSTOM_ORDER_TYPES = [
  { name: 'Sample Packs', link: '/store?category=sample', description: 'Test before bulk' },
  { name: 'Stock Size Pouches', link: '/store?category=eco-digital', description: 'Quick ship sizes' },
  { name: 'Custom Size Pouches', link: '/store?category=eco-digital&custom=true', description: 'Your exact specs' },
]

const CUSTOM_PRODUCTS = [
  { name: 'Eco Digital Pouches', link: '/store?category=eco-digital', image: '/imgs/store/eco-digital/os9CHhTSQoGASvA8lsfm-iHYfG4kddPoZP2wYMh47fs=.webp', badge: '🌱 Eco' },
  { name: 'Compostable Side Gusset', link: '/products/compostable-side-gusset-bags', image: '/imgs/store/products/compostable-side-gusset-collection.png', badge: '🌱 Eco' },
  { name: 'Custom Boxes', link: '/store?category=boxes', image: '/imgs/store/box/corrugated-box/a_half_open_box_3d_perspective_7357116.webp', badge: '' },
  { name: 'Custom Mailer Bags', link: '/store?category=mailer', image: '/imgs/menu/mailer/447849b2-65ea-49fb-86de-1278a636c795_upscayl_3x_upscayl-standard-4x.webp', badge: '' },
  { name: 'Compostable Labels', link: '/products/custom-compostable-labels', image: '/taobao/compostable-label/compostable-label-cover.jpg', badge: '🌱 Eco' },
  { name: 'Custom Labels', link: '/products/custom-labels', image: '/imgs/label/custom-label/hero.webp', badge: '' },
]

// STOCK menu - reorganized into Order Types and Products
const STOCK_ORDER_TYPES = [
  { name: 'Sample Packs', link: '/store?category=sample', description: 'Test before bulk' },
  { name: 'Stock Pouches', link: '/store?category=eco-stock', description: 'Ready to ship' },
  { name: 'Mailer Bags', link: '/store?category=mailer', description: 'Eco mailers' },
]

const STOCK_PRODUCTS = [
  { name: 'PLA Tea Bags', link: '/store/product/eco-stock-tea-bags-pla', image: '/imgs/store/eco-stock/tea-bags/1.jpg', badge: '🌱 Eco' },
  { name: 'Conventional Digital', link: '/store?category=conventional-digital', image: '/imgs/store/con-digital/3ss-clear-zip/1.webp', badge: '📝 Stock Size' },
  { name: 'Zipper Stand Up Pouch', link: '/store?category=eco-stock', image: '/imgs/illustrated/a_achievepack_standup_pouches_9884402.webp', badge: '📦 Ready' },
  { name: 'Zipper 3 Side Sealed', link: '/store?category=eco-stock', image: '/imgs/store/eco-stock/flat-bottom/clear/1.webp', badge: '' },
  { name: 'Eco Mailer Bags', link: '/store?category=mailer', image: '/imgs/menu/mailer/a_comparison_compostable_transparent_7910662.webp', badge: '🌱 Eco' },
  { name: 'Header Bags', link: '/store?category=eco-stock', image: '/imgs/store/eco-stock/flat-bottom/kraft/1.webp', badge: '' },
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
  biope: <Sprout className="h-3.5 w-3.5" />,
  pcr: <Recycle className="h-3.5 w-3.5" />,
  recyclable: <Recycle className="h-3.5 w-3.5" />,
  freeService: <Gift className="h-3.5 w-3.5" />,
}

// Free Service pages for FREE mega menu
const FREE_SERVICE_PAGES = [
  {
    name: 'Free Packaging Design Consultation',
    link: '/free-service/packaging-design-consultation',
    image: '/imgs/free/design/hero.webp',
    description: 'Expert feedback on your packaging design'
  },
  {
    name: 'Free Website Upgrade',
    link: '/free-service/website-upgrade',
    image: '/imgs/free/website/hero.webp',
    description: '20-min strategy call + high-conversion homepage concept'
  },
  {
    name: 'Free Packaging Mockup',
    link: '/free-service/packaging-mockup',
    image: '/imgs/free/mock/hero.webp',
    description: 'Professional mockups to visualize your packaging design'
  },
  {
    name: 'Free Customer Center',
    link: '/free-service/customer-center',
    image: '/imgs/free/design/a_process_flow_infographic_5376739.webp',
    description: 'Track orders, manage artwork, approve proofs—all free'
  },
  {
    name: 'Interactive Packaging Apps',
    link: '/size-guide',
    image: '/imgs/store/additional/valve.webp',
    description: 'Interactive sizing finder, spec comparing, and degassing valve guide'
  }
]

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

interface MegaMenuProps {
  hideLearnBlog?: boolean
}

export default function MegaMenu({ hideLearnBlog = false }: MegaMenuProps) {
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
            <div className="fixed left-1/2 -translate-x-1/2 top-[88px] pt-2 z-50" onMouseEnter={() => handleMouseEnter('shape')} onMouseLeave={handleMouseLeave}>
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
                              <Link to={cat.link} className="flex items-center gap-2 py-1.5 px-2 rounded-lg text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all text-xs font-medium">
                                {cat.icon ? (
                                  <img src={cat.icon} alt={cat.name} className="w-5 h-5 object-contain" loading="lazy" />
                                ) : (
                                  <ChevronRight className="h-2.5 w-2.5 text-neutral-400" />
                                )}
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
                              <Link to={cat.link} className="flex items-center gap-2 py-1.5 px-2 rounded-lg text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all text-xs font-medium">
                                {cat.icon ? (
                                  <img src={cat.icon} alt={cat.name} className="w-5 h-5 object-contain" loading="lazy" />
                                ) : (
                                  <ChevronRight className="h-2.5 w-2.5 text-neutral-400" />
                                )}
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
            <div className="fixed left-1/2 -translate-x-1/2 top-[88px] pt-2 z-50" onMouseEnter={() => handleMouseEnter('custom')} onMouseLeave={handleMouseLeave}>
              <div className="w-[95vw] max-w-[1100px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
                <div className="grid grid-cols-12">
                  {/* Left: Order Types */}
                  <div className="col-span-3 bg-neutral-50 p-4 border-r border-neutral-100">
                    <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Palette className="h-4 w-4" />
                      Custom Print
                    </h3>
                    <ul className="space-y-1">
                      {CUSTOM_ORDER_TYPES.map((type) => (
                        <li key={type.name}>
                          <Link
                            to={type.link}
                            className="block py-2 px-3 rounded-lg text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all"
                          >
                            <span className="text-sm font-medium block">{type.name}</span>
                            <span className="text-xs text-neutral-500">{type.description}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-neutral-200">
                      <button
                        onClick={openQuoteLightbox}
                        className="flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-primary-600 text-white rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors"
                      >
                        <Sparkles className="h-4 w-4" />
                        Custom Quote
                      </button>
                    </div>
                  </div>

                  {/* Right: Products with Hover Images */}
                  <div className="col-span-9 p-4">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Products</h3>
                    <div className="grid grid-cols-6 gap-3">
                      {CUSTOM_PRODUCTS.map((product) => (
                        <Link
                          key={product.name}
                          to={product.link}
                          className="group relative"
                        >
                          <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden mb-2">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          {product.badge && (
                            <span className="absolute top-1 left-1 text-xs bg-white/90 px-1.5 py-0.5 rounded">{product.badge}</span>
                          )}
                          <span className="text-xs font-medium text-neutral-800 group-hover:text-primary-600 transition-colors line-clamp-2">{product.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-50 px-4 py-2 border-t border-neutral-100">
                  <Link to="/store?category=eco-digital" className="text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                    Shop All Custom Printed →
                  </Link>
                </div>
              </div>
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
            <div className="fixed left-1/2 -translate-x-1/2 top-[88px] pt-2 z-50" onMouseEnter={() => handleMouseEnter('stock')} onMouseLeave={handleMouseLeave}>
              <div className="w-[95vw] max-w-[1100px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
                <div className="grid grid-cols-12">
                  {/* Left: Order Types */}
                  <div className="col-span-3 bg-neutral-50 p-4 border-r border-neutral-100">
                    <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Stock Items
                    </h3>
                    <ul className="space-y-1">
                      {STOCK_ORDER_TYPES.map((type) => (
                        <li key={type.name}>
                          <Link
                            to={type.link}
                            className="block py-2 px-3 rounded-lg text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all"
                          >
                            <span className="text-sm font-medium block">{type.name}</span>
                            <span className="text-xs text-neutral-500">{type.description}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-neutral-200">
                      <Link
                        to="/store?category=eco-stock"
                        className="flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-primary-600 text-white rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors"
                      >
                        <ShoppingBag className="h-4 w-4" />
                        Shop All
                      </Link>
                    </div>
                  </div>

                  {/* Right: Products with Hover Images */}
                  <div className="col-span-9 p-4">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Products</h3>
                    <div className="grid grid-cols-4 gap-4">
                      {STOCK_PRODUCTS.map((product) => (
                        <Link
                          key={product.name}
                          to={product.link}
                          className="group relative"
                        >
                          <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden mb-2">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          {product.badge && (
                            <span className="absolute top-1 left-1 text-xs bg-white/90 px-1.5 py-0.5 rounded">{product.badge}</span>
                          )}
                          <span className="text-xs font-medium text-neutral-800 group-hover:text-primary-600 transition-colors line-clamp-2">{product.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-50 px-4 py-2 border-t border-neutral-100">
                  <Link to="/store?category=eco-stock" className="text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                    Shop All Stock Pouches →
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

// Separate RightNavMenu component for LEARN | BLOG | FREE
export function RightNavMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [hoveredPage, setHoveredPage] = useState<{ name: string; link: string; image: string } | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // Pre-fill Learn menu with random content when it opens
  useEffect(() => {
    if (activeMenu === 'resources' && !activeCategory) {
      const categoryKeys = Object.keys(LEARN_PAGES)
      const randomCategoryKey = categoryKeys[Math.floor(Math.random() * categoryKeys.length)]
      setActiveCategory(randomCategoryKey)
      const category = LEARN_PAGES[randomCategoryKey as keyof typeof LEARN_PAGES]
      if (category && category.pages.length > 0) {
        const randomPage = category.pages[Math.floor(Math.random() * category.pages.length)]
        setHoveredPage(randomPage)
      }
    }
  }, [activeMenu])
  
  useEffect(() => {
    if (activeMenu !== 'resources') {
      setActiveCategory(null)
      setHoveredPage(null)
    }
  }, [activeMenu])

  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveMenu(menuId)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150)
  }

  return (
    <nav className="flex items-center">
        {/* 3D STUDIO */}
        <div onMouseEnter={() => handleMouseEnter('3d-studio')} onMouseLeave={handleMouseLeave}>
          <Link 
            to="/app" 
            className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors whitespace-nowrap ${
              activeMenu === '3d-studio' ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
            }`}
          >
            <Box className="h-4 w-4 text-primary-500 animate-pulse flex-shrink-0" size={16} />
            3D STUDIO
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === '3d-studio' ? 'rotate-180' : ''}`} />
          </Link>
          {activeMenu === '3d-studio' && (
            <div className="fixed left-1/2 -translate-x-1/2 top-[88px] pt-2 z-50 animate-fade-in" onMouseEnter={() => handleMouseEnter('3d-studio')} onMouseLeave={handleMouseLeave}>
              <div className="w-[80vw] max-w-[1200px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden font-sans">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-600 to-emerald-600 px-5 py-3 text-white">
                  <div className="flex items-center gap-2 mb-0.5">
                    <Box className="h-5 w-5 text-emerald-300" />
                    <h3 className="text-base font-bold">Interactive 3D Packaging Studio</h3>
                  </div>
                  <p className="text-xs text-white/90">Design, scale, and preview over 400+ custom shapes in real-time WebGL 3D</p>
                </div>
                
                {/* Content */}
                <div className="p-4 bg-white grid grid-cols-12 gap-5">
                  {/* Left Column: Info & Button */}
                  <div className="col-span-5 space-y-3.5 border-r border-neutral-100 pr-4 text-left">
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Features</div>
                    <ul className="space-y-1.5">
                      <li className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-600">
                        <span className="w-1 h-1 rounded-full bg-emerald-500" />
                        Custom dimensions scaling
                      </li>
                      <li className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-600">
                        <span className="w-1 h-1 rounded-full bg-emerald-500" />
                        Upload design layer files
                      </li>
                      <li className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-600">
                        <span className="w-1 h-1 rounded-full bg-emerald-500" />
                        Watermark-free downloads
                      </li>
                    </ul>
                    <div className="pt-1.5">
                      <Link
                        to="/app"
                        onClick={() => setActiveMenu(null)}
                        className="flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-[11px] font-semibold shadow-lg shadow-primary-600/20 transition-all"
                      >
                        <Sparkles className="h-3.5 w-3.5" />
                        Launch 3D Studio (Free)
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Pouch Previews */}
                  <div className="col-span-7 space-y-2.5 text-left">
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Popular 3D Pouches</div>
                    <div className="grid grid-cols-2 gap-2">
                      {/* Pouch 1 */}
                      <Link 
                        to="/app?shape=1152" 
                        onClick={() => setActiveMenu(null)}
                        className="flex items-center gap-2 p-1 hover:bg-neutral-50 rounded-lg border border-neutral-100 hover:border-primary-200 transition-all group"
                      >
                        <img src="/thumbnails/1152.png" className="w-8 h-8 rounded object-contain border border-neutral-200 bg-neutral-50 group-hover:scale-105 transition-transform" alt="Snack Food Bag" />
                        <div className="text-left overflow-hidden">
                          <div className="font-bold text-[10px] text-neutral-850 truncate group-hover:text-primary-600">Snack Bag 2</div>
                          <div className="text-[8px] text-neutral-500 truncate">90 x 153 mm</div>
                        </div>
                      </Link>
                      
                      {/* Pouch 2 */}
                      <Link 
                        to="/app?shape=1066" 
                        onClick={() => setActiveMenu(null)}
                        className="flex items-center gap-2 p-1 hover:bg-neutral-50 rounded-lg border border-neutral-100 hover:border-primary-200 transition-all group"
                      >
                        <img src="/thumbnails/1066.png" className="w-8 h-8 rounded object-contain border border-neutral-200 bg-neutral-50 group-hover:scale-105 transition-transform" alt="Stand Up Pouch" />
                        <div className="text-left overflow-hidden">
                          <div className="font-bold text-[10px] text-neutral-850 truncate group-hover:text-primary-600">Stand Up Pouch</div>
                          <div className="text-[8px] text-neutral-500 truncate">100 x 150 mm</div>
                        </div>
                      </Link>

                      {/* Pouch 3 */}
                      <Link 
                        to="/app?shape=1093" 
                        onClick={() => setActiveMenu(null)}
                        className="flex items-center gap-2 p-1 hover:bg-neutral-50 rounded-lg border border-neutral-100 hover:border-primary-200 transition-all group"
                      >
                        <img src="/thumbnails/1093.png" className="w-8 h-8 rounded object-contain border border-neutral-200 bg-neutral-50 group-hover:scale-105 transition-transform" alt="Flat Bottom Bag" />
                        <div className="text-left overflow-hidden">
                          <div className="font-bold text-[10px] text-neutral-850 truncate group-hover:text-primary-600">Flat Bottom</div>
                          <div className="text-[8px] text-neutral-500 truncate">180 x 250 mm</div>
                        </div>
                      </Link>

                      {/* Pouch 4 */}
                      <Link 
                        to="/app?shape=1003" 
                        onClick={() => setActiveMenu(null)}
                        className="flex items-center gap-2 p-1 hover:bg-neutral-50 rounded-lg border border-neutral-100 hover:border-primary-200 transition-all group"
                      >
                        <img src="/thumbnails/1003.png" className="w-8 h-8 rounded object-contain border border-neutral-200 bg-neutral-50 group-hover:scale-105 transition-transform" alt="Three Side Seal" />
                        <div className="text-left overflow-hidden">
                          <div className="font-bold text-[10px] text-neutral-850 truncate group-hover:text-primary-600">Three Side Seal</div>
                          <div className="text-[8px] text-neutral-500 truncate">260 x 385 mm</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RESOURCES (LEARN & BLOG) */}
        <div onMouseEnter={() => handleMouseEnter('resources')} onMouseLeave={handleMouseLeave}>
          <Link to="/learn" className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors whitespace-nowrap ${activeMenu === 'resources' ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'}`}>
            <BookOpen className="h-4 w-4" />
            RESOURCES
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'resources' ? 'rotate-180' : ''}`} />
          </Link>
          {activeMenu === 'resources' && (
            <div className="fixed left-1/2 -translate-x-1/2 top-[88px] pt-2 z-50 animate-fade-in" onMouseEnter={() => handleMouseEnter('resources')} onMouseLeave={handleMouseLeave}>
              <div className="w-[80vw] max-w-[1200px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden text-neutral-800 text-left">
                <div className="grid grid-cols-12">
                  {/* Left: Learn Center Categories (col-span-3) */}
                  <div className="col-span-3 bg-neutral-50 p-3 border-r border-neutral-100 max-h-[70vh] overflow-y-auto">
                    <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Learn Center
                    </h3>
                    <ul className="space-y-0.5">
                      {Object.entries(LEARN_PAGES).map(([key, category]) => (
                        <li key={key}>
                          <button
                            onMouseEnter={() => { 
                              setActiveCategory(key); 
                              const pages = category.pages;
                              if (pages.length > 0) {
                                const randomPage = pages[Math.floor(Math.random() * pages.length)];
                                setHoveredPage(randomPage);
                              } else {
                                setHoveredPage(null);
                              }
                            }}
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

                  {/* Middle-Left: Pages of selected category (col-span-3) */}
                  <div className="col-span-3 p-3 border-r border-neutral-100 max-h-[70vh] overflow-y-auto">
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

                  {/* Middle-Right: Blog Quick Links & Latest (col-span-3) */}
                  <div className="col-span-3 p-3 border-r border-neutral-100 max-h-[70vh] overflow-y-auto">
                    <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Blog News
                    </h3>
                    <ul className="space-y-0.5 mb-4">
                      <li>
                        <Link to="/blog" className="flex items-center gap-2 py-1 px-2 rounded-lg text-xs font-medium text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all">
                          <ChevronRight className="h-3 w-3 text-neutral-400" />
                          All Articles
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog?category=Newsletter" className="flex items-center gap-2 py-1 px-2 rounded-lg text-xs font-medium text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all">
                          <ChevronRight className="h-3 w-3 text-neutral-400" />
                          Newsletter
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog?category=Packaging" className="flex items-center gap-2 py-1 px-2 rounded-lg text-xs font-medium text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all">
                          <ChevronRight className="h-3 w-3 text-neutral-400" />
                          Packaging Tips
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog?category=Sustainability" className="flex items-center gap-2 py-1 px-2 rounded-lg text-xs font-medium text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all">
                          <ChevronRight className="h-3 w-3 text-neutral-400" />
                          Sustainability
                        </Link>
                      </li>
                    </ul>
                    <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Latest Posts</h4>
                    <ul className="space-y-1.5">
                      {[...blogPosts].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).slice(0, 3).map((post) => (
                        <li key={post.id}>
                          <Link to={`/blog/${post.slug}`} className="block hover:text-primary-600 transition-colors group">
                            <span className="text-[10px] text-primary-600 font-medium block">{post.category}</span>
                            <span className="text-xs font-medium text-neutral-800 line-clamp-1 group-hover:text-primary-600 transition-colors">{post.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Hero Preview Card (col-span-3) */}
                  <div className="col-span-3 p-3 bg-neutral-50 flex flex-col justify-between">
                    {hoveredPage ? (
                      <div className="h-full flex flex-col">
                        <img
                          src={hoveredPage.image}
                          alt={hoveredPage.name}
                          className="w-full aspect-[4/3] object-cover rounded-lg mb-2 border border-neutral-200 shadow-sm"
                          loading="lazy"
                        />
                        <h5 className="text-xs font-bold text-neutral-900 mb-1">{hoveredPage.name}</h5>
                        <p className="text-[10px] text-neutral-500 leading-normal mb-2 flex-grow">
                          Sustainably sourced B2B guides for brands that scale. BRC, FDA compliant.
                        </p>
                        <Link
                          to={hoveredPage.link}
                          className="text-xs text-primary-600 hover:text-primary-700 font-bold flex items-center gap-1"
                        >
                          Read Article →
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
                {/* Bottom Footer */}
                <div className="bg-neutral-50 px-4 py-2 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex gap-4">
                    <Link to="/learn" className="text-xs font-bold text-primary-600 hover:text-primary-700 transition-colors">
                      📚 Learn Index ({Object.values(LEARN_PAGES).reduce((sum, cat) => sum + cat.pages.length, 0)} Articles)
                    </Link>
                    <Link to="/blog" className="text-xs font-bold text-primary-600 hover:text-primary-700 transition-colors">
                      📝 Blog Index ({blogPosts.length} Posts)
                    </Link>
                  </div>
                  <a
                    href="https://calendly.com/30-min-free-packaging-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary-600 text-xs font-bold hover:text-primary-700 transition-colors"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FREE - Glowing Button with Mega Menu */}
        <div className="ml-2" onMouseEnter={() => handleMouseEnter('free')} onMouseLeave={handleMouseLeave}>
          <Link 
            to="/free-service"
            className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-lg transition-all whitespace-nowrap ${
              activeMenu === 'free' 
                ? 'bg-green-500 text-white shadow-lg shadow-green-500/50' 
                : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 animate-pulse hover:animate-none'
            }`}
          >
            <Gift className="h-4 w-4" />
            FREE
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'free' ? 'rotate-180' : ''}`} />
          </Link>
          {activeMenu === 'free' && (
            <div className="fixed left-1/2 -translate-x-1/2 top-[88px] pt-2 z-50 animate-fade-in" onMouseEnter={() => handleMouseEnter('free')} onMouseLeave={handleMouseLeave}>
              <div className="w-[80vw] max-w-[1200px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden font-sans">
                {/* Header */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Gift className="h-5 w-5" />
                    <h3 className="text-lg font-bold">Free B2B Services & Apps</h3>
                  </div>
                  <p className="text-sm text-white/90">Premium interactive utilities & accelerator tools at absolutely no cost</p>
                </div>
                
                {/* Two-column layout */}
                <div className="p-5 bg-white grid grid-cols-2 gap-6">
                  {/* Left Column: Interactive Apps */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 pb-1 border-b border-neutral-100 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-green-500 animate-pulse" />
                      B2B Interactive Apps
                    </div>
                    
                    {/* 3D Studio */}
                    <Link
                      to="/app"
                      className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-xl border border-transparent hover:border-neutral-100 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Box className="w-6 h-6 text-emerald-600 animate-pulse" />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-xs uppercase tracking-tight text-neutral-850 group-hover:text-green-600 transition-colors flex items-center gap-1">
                          3D Studio
                          <span className="text-[8px] bg-green-100 text-green-800 px-1 py-0.5 rounded font-black uppercase">HOT</span>
                        </div>
                        <div className="text-[10px] text-neutral-500 leading-tight mt-0.5">Design & download 400+ 3D model packaging shapes</div>
                      </div>
                    </Link>

                    {/* Sizing Finder */}
                    <Link
                      to="/size-guide"
                      className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-xl border border-transparent hover:border-neutral-100 transition-all group"
                    >
                      <img src="/imgs/free/sizing-finder-hero.jpg" className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-neutral-200 group-hover:scale-105 transition-transform" alt="Sizing Finder" />
                      <div className="text-left">
                        <div className="font-bold text-xs uppercase tracking-tight text-neutral-850 group-hover:text-green-600 transition-colors">Sizing Finder</div>
                        <div className="text-[10px] text-neutral-500 leading-tight mt-0.5">Find exact size & capacity dimensions</div>
                      </div>
                    </Link>

                    {/* Spec Comparison */}
                    <Link
                      to="/tech-specs"
                      className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-xl border border-transparent hover:border-neutral-100 transition-all group"
                    >
                      <img src="/imgs/free/spec-finder-hero.jpg" className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-neutral-200 group-hover:scale-105 transition-transform" alt="Spec Comparison" />
                      <div className="text-left">
                        <div className="font-bold text-xs uppercase tracking-tight text-neutral-850 group-hover:text-green-600 transition-colors">Spec Comparison</div>
                        <div className="text-[10px] text-neutral-500 leading-tight mt-0.5">Compare oxygen OTR & moisture WVTR levels</div>
                      </div>
                    </Link>

                    {/* Dieline Finder */}
                    <Link
                      to="/dieline-finder"
                      className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-xl border border-transparent hover:border-neutral-100 transition-all group"
                    >
                      <img src="/imgs/free/dieline-finder-hero.jpg" className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-neutral-200 group-hover:scale-105 transition-transform" alt="Dieline Finder" />
                      <div className="text-left">
                        <div className="font-bold text-xs uppercase tracking-tight text-neutral-850 group-hover:text-green-600 transition-colors flex items-center gap-1">
                          Dieline Finder
                          <span className="text-[8px] bg-green-100 text-green-800 px-1 py-0.5 rounded font-black uppercase">NEW</span>
                        </div>
                        <div className="text-[10px] text-neutral-500 leading-tight mt-0.5">Directory of 160+ vector templates</div>
                      </div>
                    </Link>

                    {/* Dieline Creator */}
                    <Link
                      to="/dieline-creator"
                      className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-xl border border-transparent hover:border-neutral-100 transition-all group"
                    >
                      <img src="/imgs/free/dieline-finder-hero.jpg" className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-neutral-200 group-hover:scale-105 transition-transform" alt="Dieline Creator" />
                      <div className="text-left">
                        <div className="font-bold text-xs uppercase tracking-tight text-neutral-850 group-hover:text-green-600 transition-colors flex items-center gap-1">
                          Dieline Creator
                          <span className="text-[8px] bg-green-100 text-green-800 px-1 py-0.5 rounded font-black uppercase">NEW</span>
                        </div>
                        <div className="text-[10px] text-neutral-500 leading-tight mt-0.5">Custom dieline builder & vector PDF exporter</div>
                      </div>
                    </Link>

                  </div>

                  {/* Right Column: Free B2B Services */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 pb-1 border-b border-neutral-100 flex items-center gap-1.5">
                      <Gift className="w-3.5 h-3.5 text-green-500" />
                      Free B2B Services
                    </div>
                    
                    {/* Free Mockup */}
                    <Link
                      to="/free-service/packaging-mockup"
                      className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-xl border border-transparent hover:border-neutral-100 transition-all group"
                    >
                      <img src="/imgs/free/mock/hero.webp" className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-neutral-200 group-hover:scale-105 transition-transform" alt="Free Mockup" />
                      <div className="text-left">
                        <div className="font-bold text-xs uppercase tracking-tight text-neutral-850 group-hover:text-green-600 transition-colors">[FREE MOCKUP]</div>
                        <div className="text-[10px] text-neutral-500 leading-tight mt-0.5">Visualize professional packaging designs</div>
                      </div>
                    </Link>

                    {/* Free Website */}
                    <Link
                      to="/free-service/website-upgrade"
                      className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-xl border border-transparent hover:border-neutral-100 transition-all group"
                    >
                      <img src="/imgs/free/website/hero.webp" className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-neutral-200 group-hover:scale-105 transition-transform" alt="Free Website" />
                      <div className="text-left">
                        <div className="font-bold text-xs uppercase tracking-tight text-neutral-850 group-hover:text-green-600 transition-colors">[FREE WEBSITE]</div>
                        <div className="text-[10px] text-neutral-500 leading-tight mt-0.5">Strategy call & homepage concept upgrade</div>
                      </div>
                    </Link>

                    {/* Free MGT Tool */}
                    <Link
                      to="/free-service/customer-center"
                      className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-xl border border-transparent hover:border-neutral-100 transition-all group"
                    >
                      <img src="/imgs/free/design/a_process_flow_infographic_5376739.webp" className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-neutral-200 group-hover:scale-105 transition-transform" alt="Free MGT Tool" />
                      <div className="text-left">
                        <div className="font-bold text-xs uppercase tracking-tight text-neutral-850 group-hover:text-green-600 transition-colors">[FREE MGT TOOL]</div>
                        <div className="text-[10px] text-neutral-500 leading-tight mt-0.5">Order tracker & artwork asset manager</div>
                      </div>
                    </Link>

                    {/* Free Design */}
                    <Link
                      to="/free-service/packaging-design-consultation"
                      className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-xl border border-transparent hover:border-neutral-100 transition-all group"
                    >
                      <img src="/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp" className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-neutral-200 group-hover:scale-105 transition-transform" alt="Free Design" />
                      <div className="text-left">
                        <div className="font-bold text-xs uppercase tracking-tight text-neutral-850 group-hover:text-green-600 transition-colors">[FREE DESIGN]</div>
                        <div className="text-[10px] text-neutral-500 leading-tight mt-0.5">20-min structural & layout strategy call</div>
                      </div>
                    </Link>
                  </div>
                </div>
                
                {/* Footer with CTA */}
                <div className="bg-neutral-50 px-6 py-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-500">100% FREE • No hidden costs • No obligation</span>
                  <a
                    href="https://calendly.com/30-min-free-packaging-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors shadow-md"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Free Call
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
    </nav>
  )
}
