import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, Layers, Palette, Package, BookOpen, Calendar, FileText, Sparkles } from 'lucide-react'
import { useCustomQuote } from '../contexts/CustomQuoteContext'

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

const SHAPE_FEATURED = [
  { name: 'Clear Pouch', image: '/imgs/illustrated/a_achievepack_standup_pouches_9884402.webp', link: '/store' },
  { name: 'Metalised', image: '/imgs/illustrated/a_achievepack_flatbottom_bags_0519153.webp', link: '/store' },
  { name: 'Kraft', image: '/imgs/illustrated/a_achievepack_sidegusset_bags_7074883.webp', link: '/store' },
  { name: 'Eco Material', image: '/imgs/illustrated/a_compostable_v3_9254998.webp', link: '/store' },
]

// CUSTOM menu - Custom printed packaging
const CUSTOM_CATEGORIES = [
  { name: 'Eco Digital', link: '/store?category=eco-digital' },
  { name: 'Conventional Digital', link: '/store?category=conventional-digital' },
  { name: 'Custom Boxes', link: '/custom-boxes' },
]

const CUSTOM_FEATURED = [
  { name: 'Eco Stand Up', image: '/imgs/store/eco-digital/D_Ec0HTDnnSvukUxwY-fJNRDhAjAWxtRnjMmkr63vlk=.webp', link: '/store?category=eco-digital' },
  { name: 'Eco Box Bottom', image: '/imgs/store/eco-digital/TKAqlW4KL2xV9glNA91iuD_sYEvp2G29eWT4819Ne1g=.webp', link: '/store?category=eco-digital' },
  { name: 'Eco Quad Seal', image: '/imgs/store/eco-digital/hAGC60SxXYmSdiBTJD3XPhMZBocRVBXZyuV-dvt3r7c=.webp', link: '/store?category=eco-digital' },
  { name: 'Custom Box', image: '/imgs/illustrated/a_achievepack_custom_boxes_6574270.webp', link: '/custom-boxes' },
]

// STOCK menu - Ready stock items
const STOCK_CATEGORIES = [
  { name: 'Zipper Stand Up Pouch', link: '/store?category=eco-stock&shape=standup' },
  { name: 'Zipper 3 Side Sealed', link: '/store?category=eco-stock&shape=3side' },
  { name: 'Mailer Bags', link: '/store?category=mailer' },
]

const STOCK_FEATURED = [
  { name: 'Clear Stand Up', image: '/imgs/illustrated/a_achievepack_standup_pouches_9884402.webp', link: '/store?category=eco-stock' },
  { name: 'Metalised Pouch', image: '/imgs/illustrated/a_monomaterial_warm_4127359.webp', link: '/store?category=eco-stock' },
  { name: 'Header Mailer', image: '/imgs/illustrated/a_achievepack_flat_pouches_0260646.webp', link: '/store?category=mailer' },
  { name: 'Zipper Mailer', image: '/imgs/illustrated/a_ecommerce_brand_variation_2_5348466.webp', link: '/store?category=mailer' },
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
  featured: { name: string; image: string; link: string }[]
  shopAllLink: string
  shopAllLabel: string
  onQuoteClick: () => void
}

function MegaMenuDropdown({ categories, featured, shopAllLink, shopAllLabel, onQuoteClick }: MegaMenuDropdownProps) {
  return (
    <div className="w-[700px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
      <div className="grid grid-cols-12">
        {/* Left: Categories */}
        <div className="col-span-4 bg-neutral-50 p-5 border-r border-neutral-100">
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

        {/* Right: Featured Products */}
        <div className="col-span-8 p-5">
          <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Featured Products</h3>
          <div className="grid grid-cols-4 gap-3">
            {featured.map((product) => (
              <Link key={product.name} to={product.link} className="group text-center">
                <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden mb-1.5 group-hover:shadow-md transition-all">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs font-medium text-neutral-600 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-neutral-100">
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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { openQuoteLightbox } = useCustomQuote()

  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
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
                featured={SHAPE_FEATURED}
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
                featured={CUSTOM_FEATURED}
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
                featured={STOCK_FEATURED}
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
