import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, Package, BookOpen, ShoppingBag, Calendar } from 'lucide-react'

// Shape categories with illustrated images
const SHAPE_CATEGORIES = [
  { name: 'Stand Up Pouches', link: '/packaging/stand-up-pouches', image: '/imgs/illustrated/a_achievepack_standup_pouches_9884402.webp' },
  { name: 'Flat Bottom Bags', link: '/packaging/flat-bottom-bags', image: '/imgs/illustrated/a_achievepack_flatbottom_bags_0519153.webp' },
  { name: 'Flat Pouches', link: '/packaging/flat-pouches', image: '/imgs/illustrated/a_achievepack_flat_pouches_0260646.webp' },
  { name: 'Side Gusset Bags', link: '/packaging/side-gusset-bags', image: '/imgs/illustrated/a_achievepack_sidegusset_bags_7074883.webp' },
  { name: 'Spout Pouches', link: '/packaging/spout-pouches', image: '/imgs/illustrated/a_achievepack_spout_pouches_1062736.webp' },
  { name: 'Vacuum Pouches', link: '/packaging/vacuum-pouches', image: '/imgs/illustrated/a_achievepack_vacuum_pouches_8597303.webp' },
  { name: 'Custom Boxes', link: '/packaging/custom-boxes', image: '/imgs/illustrated/a_achievepack_custom_boxes_6574270.webp' },
]

// Learn menu categories (from footer)
const LEARN_CATEGORIES = {
  materials: [
    { name: 'Home Compostable', link: '/materials/home-compostable' },
    { name: 'Industrial Compostable', link: '/materials/industrial-compostable' },
    { name: 'Recyclable Mono PE', link: '/materials/recyclable-mono-pe' },
    { name: 'Recyclable Mono PP', link: '/materials/recyclable-mono-pp' },
    { name: 'Bio-PE', link: '/materials/bio-pe' },
    { name: 'PCR Recycled', link: '/materials/pcr' },
  ],
  options: [
    { name: 'Digital Printing', link: '/printing/digital-printing' },
    { name: 'Plate Printing', link: '/printing/plate-printing' },
    { name: 'Reclosure Options', link: '/features/reclosure-options' },
    { name: 'Surface Finishes', link: '/features/surface-finish' },
    { name: 'Barrier Options', link: '/features/barrier-options' },
  ],
  industries: [
    { name: 'Coffee & Tea', link: '/industry/coffee-tea' },
    { name: 'Snacks & Food', link: '/industry/snacks-food' },
    { name: 'Pet Food', link: '/industry/pet-food' },
    { name: 'Supplements', link: '/industry/supplements-powders' },
    { name: 'Baby Food', link: '/industry/baby-food' },
    { name: 'Frozen Food', link: '/industry/frozen-food' },
  ],
  support: [
    { name: 'FAQs', link: '/support/faqs' },
    { name: 'Lead Time', link: '/support/lead-time' },
    { name: 'Workflow', link: '/knowledge/workflow' },
    { name: 'About Us', link: '/company/about' },
    { name: 'Certificates', link: '/company/certificates' },
  ],
}

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveMenu(menuId)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 150)
  }

  return (
    <nav className="hidden lg:flex items-center">
      {/* Store Link */}
      <Link 
        to="/store" 
        className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-primary-600 transition-colors"
      >
        <ShoppingBag className="h-4 w-4" />
        STORE
      </Link>

      {/* SHAPES Menu */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter('shapes')}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors ${
            activeMenu === 'shapes' 
              ? 'text-primary-600' 
              : 'text-neutral-700 hover:text-primary-600'
          }`}
        >
          <Package className="h-4 w-4" />
          SHAPES
          <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'shapes' ? 'rotate-180' : ''}`} />
        </button>

        {activeMenu === 'shapes' && (
          <div 
            className="absolute left-1/2 -translate-x-1/2 top-full pt-2"
            onMouseEnter={() => handleMouseEnter('shapes')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-[800px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Packaging Shapes
                </h3>
                <div className="grid grid-cols-7 gap-4">
                  {SHAPE_CATEGORIES.map((shape) => (
                    <Link
                      key={shape.name}
                      to={shape.link}
                      className="group text-center"
                    >
                      <div className="relative aspect-square bg-neutral-50 rounded-xl overflow-hidden mb-2 group-hover:shadow-lg group-hover:bg-primary-50 transition-all">
                        <img
                          src={shape.image}
                          alt={shape.name}
                          className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-xs font-medium text-neutral-700 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {shape.name}
                      </p>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-center">
                  <Link
                    to="/store"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                  >
                    Shop All Products →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* LEARN Menu */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter('learn')}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors ${
            activeMenu === 'learn' 
              ? 'text-primary-600' 
              : 'text-neutral-700 hover:text-primary-600'
          }`}
        >
          <BookOpen className="h-4 w-4" />
          LEARN
          <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === 'learn' ? 'rotate-180' : ''}`} />
        </button>

        {activeMenu === 'learn' && (
          <div 
            className="absolute left-1/2 -translate-x-1/2 top-full pt-2"
            onMouseEnter={() => handleMouseEnter('learn')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-[650px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
              <div className="grid grid-cols-4 gap-0">
                {/* Materials */}
                <div className="p-5 border-r border-neutral-100">
                  <h4 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-3">Materials</h4>
                  <ul className="space-y-1">
                    {LEARN_CATEGORIES.materials.map((item) => (
                      <li key={item.name}>
                        <Link to={item.link} className="block py-1.5 text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Options */}
                <div className="p-5 border-r border-neutral-100">
                  <h4 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-3">Options</h4>
                  <ul className="space-y-1">
                    {LEARN_CATEGORIES.options.map((item) => (
                      <li key={item.name}>
                        <Link to={item.link} className="block py-1.5 text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Industries */}
                <div className="p-5 border-r border-neutral-100">
                  <h4 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-3">Industries</h4>
                  <ul className="space-y-1">
                    {LEARN_CATEGORIES.industries.map((item) => (
                      <li key={item.name}>
                        <Link to={item.link} className="block py-1.5 text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Support */}
                <div className="p-5">
                  <h4 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-3">Support</h4>
                  <ul className="space-y-1">
                    {LEARN_CATEGORIES.support.map((item) => (
                      <li key={item.name}>
                        <Link to={item.link} className="block py-1.5 text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-neutral-50 px-5 py-3 border-t border-neutral-100">
                <a
                  href="https://calendly.com/30-min-free-packaging-consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  <Calendar className="h-4 w-4" />
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Blog Link */}
      <Link 
        to="/blog" 
        className="px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-primary-600 transition-colors"
      >
        BLOG
      </Link>
    </nav>
  )
}
