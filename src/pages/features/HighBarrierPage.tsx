import React, { useState } from 'react'
import { Shield, Zap, Package, CheckCircle, Clock, Image, X, ChevronLeft, ChevronRight, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const highBarrierGallery = [
  { src: '/imgs/barrier/ads/a_achieve_pack_barrier_kv_updated_green_definition_6833995.webp', title: 'High Barrier Technology', desc: 'Maximum oxygen and moisture protection for extended shelf life' },
  { src: '/imgs/barrier/ads/a_barrier_levels_7395220.webp', title: 'Barrier Level Comparison', desc: 'High barrier provides 12-24 months protection' },
  { src: '/imgs/barrier/ads/a_metallic_barrier_closeup_9656118.webp', title: 'Metallic Barrier Detail', desc: 'Premium metallic appearance with maximum barrier' },
  { src: '/imgs/barrier/ads/a_kraft_high_max_4456348.webp', title: 'High Barrier Kraft', desc: 'Paper-based solution with enhanced oxygen barrier' },
  { src: '/imgs/barrier/ads/a_application_scenarios_2234685.webp', title: 'Application Scenarios', desc: 'Coffee, supplements, and sensitive products' },
  { src: '/imgs/barrier/ads/a_closing_consultation_6756895.webp', title: 'Expert Consultation', desc: 'Get personalized high barrier recommendations' },
];

const HighBarrierPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.highBarrier'
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = highBarrierGallery.length - 1
    if (newIndex >= highBarrierGallery.length) newIndex = 0
    setGalleryEnlarged({ src: highBarrierGallery[newIndex].src, index: newIndex })
  }
  
  const sections = [
    {
      id: 'overview',
      title: 'High Barrier Packaging (12-24 Months Shelf Life)',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>High barrier packaging provides maximum protection with 12-24 months shelf life.</strong> Essential for oxygen-sensitive products, supplements, and premium items requiring extended freshness.
          </p>
          <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-500 mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Technical Specifications</h4>
            <ul className="text-sm space-y-1 text-primary-700">
              <li>• <strong>OTR:</strong> {'<'} 1 cc/m²/day</li>
              <li>• <strong>MVTR:</strong> {'<'} 1 g/m²/day</li>
              <li>• <strong>Shelf Life:</strong> 12-24 months typical</li>
              <li>• <strong>Sustainability:</strong> Recyclable mono-structures available</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'visual-gallery',
      title: 'High Barrier Solutions Gallery',
      icon: <Image className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Explore our high barrier packaging solutions. Click any image to enlarge:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {highBarrierGallery.map((img, index) => (
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
      title: 'High Barrier Material Options',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Mono-PE + EVOH</h4>
              <p className="text-sm mb-3">PE structure with thin EVOH oxygen barrier. Recyclable.</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>✓ EVOH layer {'<'}5% (recyclable)</li>
                <li>✓ Excellent oxygen barrier</li>
                <li>✓ Premium protection</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Mono-PP High Barrier</h4>
              <p className="text-sm mb-3">Polypropylene with enhanced barrier properties.</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>✓ 100% recyclable PP</li>
                <li>✓ High heat resistance</li>
                <li>✓ Crystal clear options</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Aluminum-Free Metallic</h4>
              <p className="text-sm mb-3">Metallized film without aluminum for recyclability.</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>✓ Premium metallic look</li>
                <li>✓ Excellent light barrier</li>
                <li>✓ Recyclable in PE streams</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">PCR High Barrier</h4>
              <p className="text-sm mb-3">Post-consumer recycled content with premium barrier.</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>✓ Up to 50% recycled content</li>
                <li>✓ GRS certified available</li>
                <li>✓ Circular economy</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            *Our high barrier recyclable structures with thin EVOH layer ({'<'}5%) are accepted in most recycling programs as the layer is too thin to affect processing.
          </p>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Ideal Product Applications',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>High barrier packaging is essential for:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            <div className="bg-primary-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">☕</div>
              <h5 className="font-semibold text-sm">Ground Coffee</h5>
            </div>
            <div className="bg-primary-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">💊</div>
              <h5 className="font-semibold text-sm">Vitamins & Supplements</h5>
            </div>
            <div className="bg-primary-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">👶</div>
              <h5 className="font-semibold text-sm">Baby Food & Formula</h5>
            </div>
            <div className="bg-primary-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">❄️</div>
              <h5 className="font-semibold text-sm">Freeze-Dried Products</h5>
            </div>
            <div className="bg-primary-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">🏥</div>
              <h5 className="font-semibold text-sm">Medical Powders</h5>
            </div>
            <div className="bg-primary-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">🌿</div>
              <h5 className="font-semibold text-sm">Premium Adaptogens</h5>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Additional Features for High Barrier',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Degassing Valve</h4>
              <p className="text-sm">One-way valve for freshly roasted coffee - releases CO2 while blocking oxygen entry.</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Tin Tie Reclosure</h4>
              <p className="text-sm">Metal clasp closure for repeated opening and sealing. Maintains barrier after opening.</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Child-Resistant Zipper</h4>
              <p className="text-sm">Safety zipper for supplements and pharmaceuticals requiring secure packaging.</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Tear Notch</h4>
              <p className="text-sm">Easy-open tear notch with controlled opening for portion control.</p>
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
              <div className="text-3xl font-bold text-primary-600 mb-2">15-25</div>
              <div className="text-sm text-neutral-600">Days Lead Time</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Free</div>
              <div className="text-sm text-neutral-600">OTR/MVTR Testing</div>
            </div>
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            All high barrier materials come with OTR and MVTR test certificates. We offer accelerated shelf-life testing for validation.
          </p>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: '行業應用場景 Industry Applications',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-neutral-900">咖啡茶葉 Coffee & Tea</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">精品咖啡、接價咖啡粉、高端茶葉</p>
              <div className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block">佔比 35%</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-neutral-900">保健品 Supplements</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">維生素、蟋白粉、營養補充劑</p>
              <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded inline-block">佔比 40%</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">嬰兒食品 Baby Food</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">嬰兒配方奶、輔食、營養粉</p>
              <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded inline-block">佔比 25%</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">客戶成功案例 Success Story</h4>
            <p className="text-sm text-neutral-600">「我們的營養補充劑品牌採用高阻隔包裝後，產品保質期從6個月延長至18個月，減少了50%的商品損耗，大幅提升了利潤空間。」</p>
            <p className="text-xs text-neutral-500 mt-2">— 保健品品牌，年銷售額增長 45%</p>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: '市場數據 Market Intelligence',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">$15.8B</div>
              <div className="text-sm opacity-90">全球高阻隔包裝市場</div>
              <div className="text-xs opacity-75 mt-1">2024年規模</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">7.2%</div>
              <div className="text-sm opacity-90">年複合增長率</div>
              <div className="text-xs opacity-75 mt-1">2024-2030</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">12-24</div>
              <div className="text-sm opacity-90">個月保質期</div>
              <div className="text-xs opacity-75 mt-1">高阻隔標準</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{'<'}1</div>
              <div className="text-sm opacity-90">OTR cc/m²/天</div>
              <div className="text-xs opacity-75 mt-1">極低氧氣透過率</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-3">市場趨勢洞察</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span><strong>可回收高阻隔</strong>：Mono PE+EVOH結構市場佔比持續上升</span>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span><strong>保健品增長</strong>：單件保健品市場年增12%</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: '材料對比 Material Comparison',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-200 px-4 py-2 text-left">材料類型</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">OTR</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">保質期</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">環保性</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">推薦應用</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">Mono-PE + EVOH</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{'<'}1</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">18-24月</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">♥️ 可回收</td>
                  <td className="border border-neutral-200 px-4 py-2">咖啡粉、保健品</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">PET/Al/PE 鋁箔</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{'<'}0.5</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">24+月</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">難回收</td>
                  <td className="border border-neutral-200 px-4 py-2">嬰兒配方、藥品</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">Mono-PP 高阻隔</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{'<'}2</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">12-18月</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">♥️ 可回收</td>
                  <td className="border border-neutral-200 px-4 py-2">耐熱產品、即食</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">PCR 高阻隔</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">{'<'}1</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">12-18月</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">🌱 循環經濟</td>
                  <td className="border border-neutral-200 px-4 py-2">環保品牌</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800 mb-2">選材建議</h4>
            <p className="text-sm text-primary-700">高阻隔包裝需要OTR{'<'}1。追求可回收選Mono-PE+EVOH；需要最佳阻隔選鋁箔複合；環保優先選PCR材質。</p>
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
    { title: "Low Barrier Options", url: "/features/low-barrier", description: "3-6 month protection" },
    { title: "Medium Barrier Options", url: "/features/medium-barrier", description: "6-12 month protection" },
    { title: "Coffee & Tea Packaging", url: "/industry/coffee-tea", description: "Specialty coffee solutions" }
  ]

  return (
    <>
      <SEOPageLayout
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['high barrier packaging', 'EVOH barrier pouches', 'long shelf life packaging', 'supplement packaging', 'coffee bag high barrier']}
        canonicalUrl="https://achievepack.com/features/high-barrier"
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        heroImage="/imgs/seo-photos/a_achievepack_high_barrier_luxury_1992395.webp"
        heroImageAlt="High barrier premium packaging for luxury products"
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
          <img src={galleryEnlarged.src} alt={highBarrierGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2"><ChevronRight className="h-10 w-10" /></button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{highBarrierGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{highBarrierGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {highBarrierGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default HighBarrierPage
