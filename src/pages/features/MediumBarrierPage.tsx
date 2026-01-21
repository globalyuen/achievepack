import React, { useState } from 'react'
import { Shield, Layers, Package, CheckCircle, Clock, Image, X, ChevronLeft, ChevronRight, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const mediumBarrierGallery = [
  { src: '/imgs/barrier/ads/a_achieve_pack_barrier_kv_updated_green_definition_6833995.webp', title: 'Barrier Technology Overview', desc: 'Eco-friendly barrier solutions for balanced protection' },
  { src: '/imgs/barrier/ads/a_barrier_levels_7395220.webp', title: 'Barrier Level Chart', desc: 'Medium barrier provides 6-12 months protection' },
  { src: '/imgs/barrier/ads/a_kraft_levels_1_2_3604187.webp', title: 'Kraft Paper Options', desc: 'Paper-based solutions with medium barrier properties' },
  { src: '/imgs/barrier/ads/a_transparent_options_3839456.webp', title: 'Transparent Options', desc: 'Clear films with medium barrier for product visibility' },
  { src: '/imgs/barrier/ads/a_application_scenarios_2234685.webp', title: 'Application Scenarios', desc: 'Coffee beans, nuts, pet food, and protein powders' },
  { src: '/imgs/barrier/ads/a_value_barrier_eco_4905901.webp', title: 'Eco Value Proposition', desc: 'Sustainable medium barrier without compromising protection' },
];

const MediumBarrierPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.mediumBarrier'
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = mediumBarrierGallery.length - 1
    if (newIndex >= mediumBarrierGallery.length) newIndex = 0
    setGalleryEnlarged({ src: mediumBarrierGallery[newIndex].src, index: newIndex })
  }
  
  const sections = [
    {
      id: 'overview',
      title: 'Medium Barrier Packaging (6-12 Months Shelf Life)',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Medium barrier packaging provides balanced protection with 6-12 months shelf life.</strong> The sweet spot for most food products, combining good barrier properties with excellent sustainability credentials.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">Technical Specifications</h4>
            <ul className="text-sm space-y-1 text-blue-700">
              <li>• <strong>OTR:</strong> 5-20 cc/m²/day</li>
              <li>• <strong>MVTR:</strong> 2-5 g/m²/day</li>
              <li>• <strong>Shelf Life:</strong> 6-12 months typical</li>
              <li>• <strong>Sustainability:</strong> Recyclable mono-materials available</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'visual-gallery',
      title: 'Medium Barrier Solutions Gallery',
      icon: <Image className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Explore our medium barrier packaging solutions. Click any image to enlarge:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {mediumBarrierGallery.map((img, index) => (
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
      title: 'Medium Barrier Material Options',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Mono-PE (Recyclable)</h4>
              <p className="text-sm mb-3">Single material polyethylene structure. Widely recyclable.</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>✓ 100% PE recyclable</li>
                <li>✓ Excellent seal strength</li>
                <li>✓ Good moisture barrier</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Bio-PE (Sugarcane-Based)</h4>
              <p className="text-sm mb-3">Plant-based polyethylene from renewable sugarcane.</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>✓ Carbon-negative material</li>
                <li>✓ Same performance as fossil PE</li>
                <li>✓ Recyclable in PE streams</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">PCR Plastic (30-100%)</h4>
              <p className="text-sm mb-3">Post-consumer recycled content for circular economy.</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>✓ Up to 100% recycled content</li>
                <li>✓ GRS certified available</li>
                <li>✓ Reduces virgin plastic use</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Metallized Kraft</h4>
              <p className="text-sm mb-3">Paper with metallized layer for enhanced protection.</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>✓ Premium natural look</li>
                <li>✓ Good oxygen barrier</li>
                <li>✓ Partially recyclable</li>
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
          <p>Medium barrier packaging is perfect for:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">☕</div>
              <h5 className="font-semibold text-sm">Roasted Coffee Beans</h5>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">🥜</div>
              <h5 className="font-semibold text-sm">Nuts & Seeds</h5>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">🐕</div>
              <h5 className="font-semibold text-sm">Pet Food & Treats</h5>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">💪</div>
              <h5 className="font-semibold text-sm">Protein Powders</h5>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">🥣</div>
              <h5 className="font-semibold text-sm">Breakfast Cereals</h5>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">🍫</div>
              <h5 className="font-semibold text-sm">Chocolate & Confections</h5>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'benefits',
      title: 'Why Choose Medium Barrier?',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold">Balanced Performance</h4>
                <p className="text-sm">Optimal protection for most food products</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold">Recyclable Options</h4>
                <p className="text-sm">Mono-PE and Bio-PE are widely recyclable</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold">Cost-Effective</h4>
                <p className="text-sm">Great value for extended shelf life needs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold">Versatile Applications</h4>
                <p className="text-sm">Suitable for the widest range of products</p>
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
              <div className="text-sm text-neutral-600">Barrier Testing</div>
            </div>
          </div>
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
                <h4 className="font-semibold text-neutral-900">咖啡豆 Coffee Beans</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">烘焙咖啡豆、單品咖啡、精品咖啡</p>
              <div className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block">佔比 35%</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-neutral-900">寵物食品 Pet Food</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">狗糧、貓糧、寵物零食</p>
              <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded inline-block">佔比 40%</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">堅果零食 Nuts & Snacks</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">堅果、種子、乾果、零食</p>
              <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded inline-block">佔比 25%</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">客戶成功案例 Success Story</h4>
            <p className="text-sm text-neutral-600">「我們的寵物食品品牌採用中阻隔可回收包裝後，產品保質期達到了12個月，同時滿足了消費者對環保包裝的需求，市場反饋非常正面。」</p>
            <p className="text-xs text-neutral-500 mt-2">— 寵物食品品牌，年銷售額增長 35%</p>
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
              <div className="text-3xl font-bold">$22.5B</div>
              <div className="text-sm opacity-90">全球中阻隔包裝市場</div>
              <div className="text-xs opacity-75 mt-1">2024年規模</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">5.8%</div>
              <div className="text-sm opacity-90">年複合增長率</div>
              <div className="text-xs opacity-75 mt-1">2024-2030</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">6-12</div>
              <div className="text-sm opacity-90">個月保質期</div>
              <div className="text-xs opacity-75 mt-1">中阻隔標準</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">55%</div>
              <div className="text-sm opacity-90">可回收材料佔比</div>
              <div className="text-xs opacity-75 mt-1">中阻隔市場</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-3">市場趨勢洞察</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span><strong>Mono PE市場領先</strong>：可回收單一材質結構成主流</span>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span><strong>寵物食品增長</strong>：全球寵物食品市場年增8%</span>
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
                  <th className="border border-neutral-200 px-4 py-2 text-center">保質期</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">成本</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">環保性</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">推薦應用</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">Mono-PE 可回收</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">6-9月</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">♥️ 可回收</td>
                  <td className="border border-neutral-200 px-4 py-2">咖啡豆、寵物食品</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">Bio-PE 甘蔗</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">6-9月</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">🌱 碳負性</td>
                  <td className="border border-neutral-200 px-4 py-2">環保品牌</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">PCR 回收塑料</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">6-12月</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">🌱 循環經濟</td>
                  <td className="border border-neutral-200 px-4 py-2">大型品牌、零售</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">金屬化牛皮紙</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">9-12月</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">部分可回收</td>
                  <td className="border border-neutral-200 px-4 py-2">精品咖啡、高端茶葉</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800 mb-2">選材建議</h4>
            <p className="text-sm text-primary-700">中阻隔是最廣泛使用的包裝類別。追求可回收選Mono-PE；環保優先選Bio-PE或PCR；追求奢華外觀選金屬化牛皮紙。</p>
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
    { title: "High Barrier Options", url: "/features/high-barrier", description: "12-24 month protection" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "100% recyclable material" }
  ]

  return (
    <>
      <SEOPageLayout
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['medium barrier packaging', 'recyclable pouches', 'mono-PE packaging', 'bio-PE pouches', 'coffee packaging', 'pet food packaging']}
        canonicalUrl="https://achievepack.com/features/medium-barrier"
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        heroImage="/imgs/seo-photos/a_achievepack_medium_barrier_pantry_7988653.webp"
        heroImageAlt="Medium barrier recyclable packaging for pantry products"
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
          <img src={galleryEnlarged.src} alt={mediumBarrierGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2"><ChevronRight className="h-10 w-10" /></button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{mediumBarrierGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{mediumBarrierGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {mediumBarrierGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default MediumBarrierPage
