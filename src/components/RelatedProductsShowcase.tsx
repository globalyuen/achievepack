import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FEATURED_PRODUCTS, type StoreProduct } from '../store/productData'
import { useProductTranslation } from '../utils/productTranslation'
import { getDomain } from '../utils/domain'
import { Sparkles, ArrowRight, Star } from 'lucide-react'

interface RelatedProductsShowcaseProps {
  productIds: string[]
}

export default function RelatedProductsShowcase({ productIds }: RelatedProductsShowcaseProps) {
  const { t } = useTranslation()
  const { translateProducts } = useProductTranslation()
  const isPouchDomain = getDomain() === 'pouch'

  // Filter products by matching IDs and apply translation
  const productsToShow = useMemo(() => {
    const matched = FEATURED_PRODUCTS.filter(product => productIds.includes(product.id))
    // Maintain the order of productIds passed in
    const sorted = [...matched].sort((a, b) => productIds.indexOf(a.id) - productIds.indexOf(b.id))
    return translateProducts(sorted)
  }, [productIds, translateProducts])

  if (productsToShow.length === 0) return null

  // Neo-Brutalist Layout (Pouch.eco)
  if (isPouchDomain) {
    return (
      <div className="my-12 border-t-4 border-black pt-10 text-left">
        <h3 className="font-black text-2xl md:text-3xl uppercase tracking-tight mb-6 text-black">
          {t('seo.relatedProducts.title', 'Related Store Products')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsToShow.map((product: StoreProduct) => {
            const hasCustomQuote = product.viewQuoteLink && product.viewQuoteLink.startsWith('/view-quote/')
            const linkPath = (product.id.endsWith('-custom') ? `/view-quote/${product.id.replace('-custom', '')}` : null) || `/store/product/${product.id}`
            const displayImage = product.images[0] || '/imgs/store/pouch shape/stand-up.webp'
            
            return (
              <div
                key={product.id}
                className="bg-white border-4 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col h-full text-black font-['JetBrains_Mono']"
              >
                {/* Image Section */}
                <div className="relative aspect-square border-b-4 border-black bg-neutral-50 overflow-hidden group">
                  <img
                    src={displayImage}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#D4FF00] border-2 border-black text-black text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating / Review count */}
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-black stroke-2" />
                      <span className="text-xs font-black">{product.rating.toFixed(1)}</span>
                      <span className="text-neutral-500 text-[10px]">({product.reviews} reviews)</span>
                    </div>

                    <h4 className="font-black text-lg mb-2 line-clamp-2 uppercase leading-tight hover:text-emerald-600 transition-colors">
                      <Link to={linkPath}>{product.name}</Link>
                    </h4>
                    
                    <p className="text-neutral-600 text-xs font-sans line-clamp-3 mb-4 leading-relaxed">
                      {product.shortDesc || product.description}
                    </p>
                  </div>

                  <div>
                    {/* Price and Action */}
                    <div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-black">
                      <div>
                        <span className="text-[10px] text-neutral-500 block uppercase font-black">{t('seo.relatedProducts.from', 'From')}</span>
                        <span className="text-lg font-black text-emerald-600">
                          USD ${product.basePrice.toFixed(2)}
                        </span>
                      </div>
                      
                      <Link
                        to={linkPath}
                        className="bg-[#10b981] border-2 border-black hover:bg-emerald-500 text-white font-black px-4 py-2 text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100 flex items-center gap-1.5"
                      >
                        {hasCustomQuote ? t('seo.relatedProducts.quote', 'Quote') : t('seo.relatedProducts.view', 'View')}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // B2B Corporate Layout (Achieve Pack)
  return (
    <div className="my-16 border-t border-neutral-200 pt-12 text-left">
      <h3 className="font-bold text-2xl text-neutral-900 tracking-tight mb-8">
        {t('seo.relatedProducts.title', 'Related Store Products')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsToShow.map((product: StoreProduct) => {
          const hasCustomQuote = product.viewQuoteLink && product.viewQuoteLink.startsWith('/view-quote/')
          const linkPath = (product.id.endsWith('-custom') ? `/view-quote/${product.id.replace('-custom', '')}` : null) || `/store/product/${product.id}`
          const displayImage = product.images[0] || '/imgs/store/pouch shape/stand-up.webp'

          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative aspect-square bg-neutral-50 overflow-hidden group">
                <img
                  src={displayImage}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-350"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-primary-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2.5">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < Math.floor(product.rating) ? 'fill-current' : 'text-neutral-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-neutral-500 font-medium ml-1">
                      {product.rating.toFixed(1)} ({product.reviews})
                    </span>
                  </div>

                  <h4 className="font-bold text-neutral-900 text-lg mb-2 line-clamp-2 hover:text-primary-600 transition-colors">
                    <Link to={linkPath}>{product.name}</Link>
                  </h4>
                  
                  <p className="text-neutral-500 text-sm line-clamp-3 mb-5 leading-relaxed">
                    {product.shortDesc || product.description}
                  </p>
                </div>

                <div>
                  {/* Price & Action */}
                  <div className="flex items-center justify-between pt-5 border-t border-neutral-100">
                    <div>
                      <span className="text-[10px] text-neutral-400 block uppercase tracking-wider font-semibold">{t('seo.relatedProducts.from', 'From')}</span>
                      <span className="text-xl font-bold text-neutral-900">
                        USD ${product.basePrice.toFixed(2)}
                      </span>
                    </div>

                    <Link
                      to={linkPath}
                      className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase transition-colors flex items-center gap-1.5 shadow-sm hover:shadow"
                    >
                      {hasCustomQuote ? t('seo.relatedProducts.quote', 'Get Quote') : t('seo.relatedProducts.view', 'View Details')}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
