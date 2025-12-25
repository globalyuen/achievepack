import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, Leaf, Box, ShoppingBag, Calendar } from 'lucide-react'

interface Category {
  name: string
  link: string
}

interface FeaturedProduct {
  name: string
  image: string
  link: string
  badge?: string
}

interface MenuItem {
  id: string
  label: string
  icon: React.ReactNode
  categories: Category[]
  featuredProducts: FeaturedProduct[]
  shopAllLink: string
  shopAllLabel: string
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'eco-digital',
    label: 'ECO DIGITAL',
    icon: <Leaf className="h-4 w-4" />,
    categories: [
      { name: '3 Side Seal Pouch', link: '/store/eco-3side' },
      { name: 'Center Seal Pouch', link: '/store/eco-centerseal' },
      { name: 'Stand Up Pouch / Doypack', link: '/store/eco-standup' },
      { name: 'Box Bottom Pouch', link: '/store/eco-boxbottom' },
      { name: 'Flat Squared Bottom Pouch', link: '/store/eco-flatbottom' },
      { name: 'Quad Seal Pouch', link: '/store/eco-quadseal' },
      { name: 'Side Gusset Pouch', link: '/store/eco-sidegusset' },
    ],
    featuredProducts: [
      { 
        name: 'Eco Stand Up Pouch', 
        image: '/imgs/store/eco-digital/D_Ec0HTDnnSvukUxwY-fJNRDhAjAWxtRnjMmkr63vlk=.webp', 
        link: '/store/eco-standup',
        badge: '✨ Popular'
      },
      { 
        name: 'Eco Box Bottom', 
        image: '/imgs/store/eco-digital/TKAqlW4KL2xV9glNA91iuD_sYEvp2G29eWT4819Ne1g=.webp', 
        link: '/store/eco-boxbottom' 
      },
      { 
        name: 'Eco Quad Seal', 
        image: '/imgs/store/eco-digital/hAGC60SxXYmSdiBTJD3XPhMZBocRVBXZyuV-dvt3r7c=.webp', 
        link: '/store/eco-quadseal' 
      },
      { 
        name: 'Eco Side Gusset', 
        image: '/imgs/store/eco-digital/wXqLssPqdR9J0iDhIyQ-NGTDDFm-3DgFKlyQD4ipsEw=.webp', 
        link: '/store/eco-sidegusset' 
      },
    ],
    shopAllLink: '/store?category=eco-digital',
    shopAllLabel: 'Shop All Eco Digital',
  },
  {
    id: 'boxes',
    label: 'BOXES',
    icon: <Box className="h-4 w-4" />,
    categories: [
      { name: 'Mailer Boxes', link: '/store?category=boxes&type=mailer' },
      { name: 'RSC Shipping Boxes', link: '/store?category=boxes&type=rsc' },
      { name: 'Custom Printed Boxes', link: '/custom-boxes' },
    ],
    featuredProducts: [
      { 
        name: 'Kraft Mailer Box', 
        image: '/imgs/store/boxes/mailer-box-kraft.webp', 
        link: '/store?category=boxes',
        badge: '📦 New'
      },
      { 
        name: 'White Mailer Box', 
        image: '/imgs/store/boxes/mailer-box-white.webp', 
        link: '/store?category=boxes' 
      },
      { 
        name: 'RSC Shipping Box', 
        image: '/imgs/store/boxes/rsc-box.webp', 
        link: '/store?category=boxes' 
      },
    ],
    shopAllLink: '/store?category=boxes',
    shopAllLabel: 'Shop All Boxes',
  },
]

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

      {/* Mega Menu Items */}
      {MENU_ITEMS.map((item) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <button 
            className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors ${
              activeMenu === item.id 
                ? 'text-primary-600' 
                : 'text-neutral-700 hover:text-primary-600'
            }`}
          >
            {item.icon}
            {item.label}
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === item.id ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown */}
          {activeMenu === item.id && (
            <div 
              className="absolute left-1/2 -translate-x-1/2 top-full pt-2"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-[750px] bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden">
                <div className="grid grid-cols-12">
                  {/* Left: Categories */}
                  <div className="col-span-4 bg-neutral-50 p-6 border-r border-neutral-100">
                    <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                      {item.icon}
                      {item.label}
                    </h3>
                    <ul className="space-y-1">
                      {item.categories.map((cat) => (
                        <li key={cat.name}>
                          <Link
                            to={cat.link}
                            className="flex items-center justify-between py-2.5 px-3 rounded-lg text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-all group font-medium"
                          >
                            <span>{cat.name}</span>
                            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Buttons */}
                    <div className="mt-6 pt-6 border-t border-neutral-200 space-y-2">
                      <a
                        href="https://calendly.com/30-min-free-packaging-consultancy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 px-4 border-2 border-primary-500 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                      >
                        <Calendar className="h-4 w-4" />
                        Book Consultation
                      </a>
                      <Link
                        to={item.shopAllLink}
                        className="block w-full text-center py-2.5 px-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                      >
                        {item.shopAllLabel} →
                      </Link>
                    </div>
                  </div>

                  {/* Right: Featured Products */}
                  <div className="col-span-8 p-6">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">
                      Featured Products
                    </h3>
                    <div className={`grid gap-4 ${item.featuredProducts.length >= 4 ? 'grid-cols-4' : 'grid-cols-3'}`}>
                      {item.featuredProducts.map((product) => (
                        <Link
                          key={product.name}
                          to={product.link}
                          className="group text-center"
                        >
                          <div className="relative aspect-square bg-neutral-100 rounded-xl overflow-hidden mb-2 group-hover:shadow-lg transition-all">
                            {product.badge && (
                              <span className="absolute top-2 left-2 z-10 text-xs bg-primary-500 text-white px-2 py-0.5 rounded-full font-medium">
                                {product.badge}
                              </span>
                            )}
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          <p className="text-sm font-medium text-neutral-700 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {product.name}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

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
