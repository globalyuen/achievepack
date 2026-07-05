import React, { useEffect } from 'react'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingCart, Info, Package, Leaf, Zap, Shield, ChevronRight } from 'lucide-react'
import MegaMenu from '../components/MegaMenu'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

export default function ProductsPage() {
  const { t } = useTranslation()
  const p = 'seoPages.pages.products'

  // Ensure we start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const PRODUCT_LINES = [
    {
      id: 'stand-up-pouches',
      title: t(`${p}.products.standUp.title`),
      description: t(`${p}.products.standUp.desc`),
      image: '/imgs/store/pouch shape/stand-up.webp',
      features: [
        t(`${p}.products.standUp.features.0`), 
        t(`${p}.products.standUp.features.1`), 
        t(`${p}.products.standUp.features.2`)
      ],
      specsLink: '/packaging/stand-up-pouches',
      storeLink: '/store?shape=Stand%20Up%20Pouch%20%2F%20Doypack',
      icon: <Package className="w-6 h-6 text-primary-600" />
    },
    {
      id: 'flat-bottom-bags',
      title: t(`${p}.products.flatBottom.title`),
      description: t(`${p}.products.flatBottom.desc`),
      image: '/imgs/pouch-shape/flat-bottom-premium.png',
      features: [
        t(`${p}.products.flatBottom.features.0`), 
        t(`${p}.products.flatBottom.features.1`), 
        t(`${p}.products.flatBottom.features.2`)
      ],
      specsLink: '/packaging/flat-bottom-bags',
      storeLink: '/store?shape=Flat%20Squared%20Bottom%20Pouch',
      icon: <Shield className="w-6 h-6 text-primary-600" />
    },
    {
      id: 'side-gusset-bags',
      title: t(`${p}.products.sideGusset.title`),
      description: t(`${p}.products.sideGusset.desc`),
      image: '/imgs/pouch-shape/a_side_gusset_pouch_isolated_2545871.webp',
      features: [
        t(`${p}.products.sideGusset.features.0`), 
        t(`${p}.products.sideGusset.features.1`), 
        t(`${p}.products.sideGusset.features.2`)
      ],
      specsLink: '/packaging/side-gusset-bags',
      storeLink: '/store?shape=Side%20Gusset%20Pouch',
      icon: <Zap className="w-6 h-6 text-primary-600" />
    },
    {
      id: 'eco-stock-plain',
      title: t(`${p}.products.ecoStock.title`),
      description: t(`${p}.products.ecoStock.desc`),
      image: '/imgs/pouch-shape/eco-stand-up-pouch.png',
      features: [
        t(`${p}.products.ecoStock.features.0`), 
        t(`${p}.products.ecoStock.features.1`), 
        t(`${p}.products.ecoStock.features.2`)
      ],
      specsLink: '/materials/recyclable-mono-pe',
      storeLink: '/store?category=eco-stock-plain',
      icon: <Leaf className="w-6 h-6 text-primary-600" />
    },
    {
      id: 'spout-pouches',
      title: t(`${p}.products.spoutPouches.title`),
      description: t(`${p}.products.spoutPouches.desc`),
      image: '/imgs/store/pouch shape/spout.webp',
      features: [
        t(`${p}.products.spoutPouches.features.0`), 
        t(`${p}.products.spoutPouches.features.1`), 
        t(`${p}.products.spoutPouches.features.2`)
      ],
      specsLink: '/packaging/spout-pouches',
      storeLink: '/store',
      icon: <Package className="w-6 h-6 text-primary-600" />
    },
    {
      id: 'custom-boxes',
      title: t(`${p}.products.customBoxes.title`),
      description: t(`${p}.products.customBoxes.desc`),
      image: '/imgs/store/products/triangle-coffee-box-card-tuck-thumbnail-1.jpg',
      features: [
        t(`${p}.products.customBoxes.features.0`), 
        t(`${p}.products.customBoxes.features.1`), 
        t(`${p}.products.customBoxes.features.2`)
      ],
      specsLink: '/packaging/custom-boxes',
      storeLink: '/store?category=boxes',
      icon: <Package className="w-6 h-6 text-primary-600" />
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <SEO title={t(`${p}.seoTitle`)} description={t(`${p}.seoDesc`)} url="https://achievepack.com/products" />

      <MegaMenu />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-white py-16 md:py-24 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
                {t(`${p}.hero.badge`)}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
                {t(`${p}.hero.headlineLine1`)} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                  {t(`${p}.hero.headlineLine2`)}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed max-w-2xl">
                {t(`${p}.hero.desc`)}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/store"
                  className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {t(`${p}.hero.btnShop`)}
                </Link>
                <Link
                  to="/size-guide"
                  className="inline-flex items-center justify-center bg-white text-neutral-700 border border-neutral-300 px-8 py-4 rounded-xl font-semibold hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                >
                  {t(`${p}.hero.btnSize`)}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Lines Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {PRODUCT_LINES.map((product) => (
                <div key={product.id} className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                  <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
                  </div>
                  
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary-50 rounded-lg">
                        {product.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-neutral-900">{product.title}</h2>
                    </div>
                    
                    <p className="text-neutral-600 mb-6 flex-grow leading-relaxed">
                      {product.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm font-medium text-neutral-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                      <Link
                        to={product.storeLink}
                        className="inline-flex items-center justify-center bg-neutral-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-neutral-800 transition-colors group/btn"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {t(`${p}.card.btnShop`)}
                        <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                      </Link>
                      <Link
                        to={product.specsLink}
                        className="inline-flex items-center justify-center bg-primary-50 text-primary-700 px-6 py-3 rounded-xl font-semibold hover:bg-primary-100 transition-colors"
                      >
                        <Info className="w-4 h-4 mr-2" />
                        {t(`${p}.card.btnSpecs`)}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Store CTA */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-12">
          <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary-500 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary-400 opacity-20 blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t(`${p}.cta.title`)}</h2>
              <p className="text-primary-100 text-lg md:text-xl mb-10 leading-relaxed">
                {t(`${p}.cta.desc`)}
              </p>
              <Link
                to="/store"
                className="inline-flex items-center justify-center bg-white text-primary-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {t(`${p}.cta.btn`)}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
