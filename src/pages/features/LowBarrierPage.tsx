import React, { useState } from 'react'
import { Shield, Leaf, Package, CheckCircle, Clock, Image, X, ChevronLeft, ChevronRight, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const lowBarrierGallery = [
  { src: '/imgs/barrier/ads/a_achieve_pack_barrier_kv_updated_green_definition_6833995.webp', title: 'Eco-Friendly Barrier', desc: 'Best sustainability credentials with home compostable options' },
  { src: '/imgs/barrier/ads/a_barrier_levels_7395220.webp', title: 'Barrier Level Chart', desc: 'Low barrier provides 3-6 months protection' },
  { src: '/imgs/barrier/ads/a_kraft_levels_1_2_3604187.webp', title: 'Kraft Paper Options', desc: 'Natural kraft paper with PLA inner lining' },
  { src: '/imgs/barrier/ads/a_transparent_options_3839456.webp', title: 'Transparent Options', desc: 'NatureFlex cellulose for product visibility' },
  { src: '/imgs/barrier/ads/a_application_scenarios_2234685.webp', title: 'Application Scenarios', desc: 'Cookies, tea, granola, and dry goods' },
  { src: '/imgs/barrier/ads/a_value_barrier_eco_4905901.webp', title: 'Best Eco Value', desc: 'Home compostable and widely recyclable options' },
];

const LowBarrierPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.lowBarrier'
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = lowBarrierGallery.length - 1
    if (newIndex >= lowBarrierGallery.length) newIndex = 0
    setGalleryEnlarged({ src: lowBarrierGallery[newIndex].src, index: newIndex })
  }
  
  const sections = [
    {
      id: 'overview',
      title: 'Low Barrier Packaging (3-6 Months Shelf Life)',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Low barrier packaging offers the best eco-credentials with 3-6 months shelf life protection.</strong> Perfect for products with fast turnover or naturally dry goods that don't require extended protection.
          </p>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-4">
            <h4 className="font-semibold text-green-800 mb-2">Technical Specifications</h4>
            <ul className="text-sm space-y-1 text-green-700">
              <li>• <strong>OTR:</strong> 50-100 cc/m²/day</li>
              <li>• <strong>MVTR:</strong> 10-20 g/m²/day</li>
              <li>• <strong>Shelf Life:</strong> 3-6 months typical</li>
              <li>• <strong>Best Sustainability:</strong> Home compostable options available</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'visual-gallery',
      title: 'Low Barrier Solutions Gallery',
      icon: <Image className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Explore our low barrier eco-friendly solutions. Click any image to enlarge:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {lowBarrierGallery.map((img, index) => (
              <button
                key={index}
                onClick={() => setGalleryEnlarged({ src: img.src, index })}
                className="text-left bg-white rounded-xl border border-neutral-200 hover:border-primary-400 overflow-hidden transition-all hover:shadow-lg group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-3">
                  <h5 className="font-semibold text-sm text-neutral-800 mb-1">{img.title}</h5>
                  <p className="text-xs text-neutral-600 line-clamp-2">{img.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Low Barrier Material Options',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Kraft Paper + PLA</h4>
              <p className="text-sm mb-3">Natural kraft paper with PLA inner lining. Home compostable.</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>✓ 100% plant-based</li>
                <li>✓ Home & industrial compostable</li>
                <li>✓ Natural aesthetic</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">NatureFlex™ Cellulose</h4>
              <p className="text-sm mb-3">Transparent cellulose film for product visibility.</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>✓ Crystal clear appearance</li>
                <li>✓ Compostable certified</li>
                <li>✓ Ideal for windowed pouches</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Paper + Water-Based Coating</h4>
              <p className="text-sm mb-3">Pure paper with minimal coating for recyclability.</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>✓ Widely recyclable</li>
                <li>✓ Minimal plastic content</li>
                <li>✓ Cost-effective</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Thin Mono-PE</h4>
              <p className="text-sm mb-3">Lightweight recyclable film for basic protection.</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>✓ 100% recyclable</li>
                <li>✓ Flexible & durable</li>
                <li>✓ Good seal strength</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Ideal Product Applications',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Low barrier packaging is perfect for:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">🍪</div>
              <h5 className="font-semibold text-sm">Cookies & Biscuits</h5>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">🍵</div>
              <h5 className="font-semibold text-sm">Loose Leaf Tea</h5>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">🥣</div>
              <h5 className="font-semibold text-sm">Granola & Muesli</h5>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">🍚</div>
              <h5 className="font-semibold text-sm">Rice & Grains</h5>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">🥜</div>
              <h5 className="font-semibold text-sm">Dried Fruits</h5>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">🌿</div>
              <h5 className="font-semibold text-sm">Herbal Products</h5>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'benefits',
      title: 'Why Choose Low Barrier?',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold">Best Eco-Credentials</h4>
                <p className="text-sm">Home compostable and widely recyclable options available</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold">Most Cost-Effective</h4>
                <p className="text-sm">Lower material costs compared to medium and high barrier</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold">Natural Aesthetics</h4>
                <p className="text-sm">Kraft paper look appeals to eco-conscious consumers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold">Fast Turnover Friendly</h4>
                <p className="text-sm">Perfect for artisan products with quick sales cycles</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'order',
      title: 'Order Information',
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500</div>
              <div className="text-sm text-neutral-600">Minimum Order</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">15-20</div>
              <div className="text-sm text-neutral-600">Days Lead Time</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Free</div>
              <div className="text-sm text-neutral-600">Sample Available</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: 'Industry Applications',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-neutral-900">Baked Goods Bakery Products</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">Cookies、Crackers、Bread、Pastries</p>
              <div className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block">Share: 40%</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">Organicfood Organic Foods</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">OrganicGrains、nuts、Dried fruits</p>
              <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded inline-block">Share: 35%</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-neutral-900">TeaHerbs Tea & Herbs</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">BulkTea、Herbal tea、Spices</p>
              <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded inline-block">25% market share</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">Customer Success Story</h4>
            <p className="text-sm text-neutral-600">「OurOrganicGrainsBrandadoptionLow BarriercanCompostablePackagingAfter，BrandEco-friendlyimagesignificantlyimprove，Consumersapproval ratingincrease55%，salesamountgrowth30%。」</p>
            <p className="text-xs text-neutral-500 mt-2">— Organic Food Brands，Marketsharehaverateimprove 20%</p>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: 'Market Data & Intelligence',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">$6.2B</div>
              <div className="text-sm opacity-90">GlobalcanCompostablePackagingMarket</div>
              <div className="text-xs opacity-75 mt-1">2024yearSize</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">14.5%</div>
              <div className="text-sm opacity-90">CAGR</div>
              <div className="text-xs opacity-75 mt-1">2024-2030</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">3-6</div>
              <div className="text-sm opacity-90"> monthsShelf Life</div>
              <div className="text-xs opacity-75 mt-1">Low Barrierstandard</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">68%</div>
              <div className="text-sm opacity-90">ConsumerspreferenceEco-friendly</div>
              <div className="text-xs opacity-75 mt-1">Willingpay premium</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-3">Market Trend Insights</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span><strong>home compostable becoming mainstream</strong>：EUEN 13432Certificationbecomingstandard</span>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span><strong>OrganicfoodMarket</strong>：yeargrowthratereaching15%，drivingEco-friendlyPackagingRequirements</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: 'Material Comparison',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-200 px-4 py-2 text-left">Material Type</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">Shelf Life</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">Cost</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">Eco-Friendly</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">Recommended Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">Kraft paper+PLA</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">3-6month</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">🌱 Compostable</td>
                  <td className="border border-neutral-200 px-4 py-2">Organicfood、Cookies</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">NatureFlex FiberDimensionElement</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">3-6month</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">🌱 Compostable</td>
                  <td className="border border-neutral-200 px-4 py-2">TransparentWindow、Display</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">Paper+WaterfocusedCoatingLayer</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">2-4month</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">♥️ Recyclable</td>
                  <td className="border border-neutral-200 px-4 py-2">Thin Dryfood、SimpleSinglePackaging</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">Thintype Mono-PE</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">4-6month</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">♥️ Recyclable</td>
                  <td className="border border-neutral-200 px-4 py-2">OneGeneral Grocery、GrainFood</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800 mb-2">Material Selection Guide</h4>
            <p className="text-sm text-primary-700">Low BarrierPackagingsuitableSuitablerapidWeekswitchedProduct。PursuemaximumBestEco-friendlychooseKraft paper+PLA；requireTransparentDisplaychooseNatureFlex；CostPrioritychooseThintypeMono-PE。</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ]

  const relatedLinks = [
    { title: "Medium Barrier Options", url: "/features/medium-barrier", description: "6-12 month protection" },
    { title: "High Barrier Options", url: "/features/high-barrier", description: "12-24 month protection" },
    { title: "Home Compostable Materials", url: "/materials/home-compostable", description: "Backyard compostable" }
  ]

  return (
    <>
      <SEOPageLayout
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['low barrier packaging', 'compostable pouches', 'short shelf life packaging', 'eco-friendly packaging', 'kraft paper pouches']}
        canonicalUrl="https://achievepack.com/features/low-barrier"
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        heroImage="/imgs/seo-photos/a_achievepack_low_barrier_fresh_5851801.webp"
        heroImageAlt="Low barrier eco-friendly packaging for fresh products"
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={t(`${p}.cta.title`)}
        ctaDescription={t(`${p}.cta.description`)}
        ctaButtonText={t(`${p}.cta.button`)}
        ctaButtonUrl="/contact"
      />
      
      {/* Gallery Lightbox Modal */}
      {galleryEnlarged && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"><X className="h-8 w-8" /></button>
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }} className="absolute left-4 text-white hover:text-neutral-300 transition p-2"><ChevronLeft className="h-10 w-10" /></button>
          <img src={galleryEnlarged.src} alt={lowBarrierGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2"><ChevronRight className="h-10 w-10" /></button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{lowBarrierGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{lowBarrierGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {lowBarrierGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default LowBarrierPage
