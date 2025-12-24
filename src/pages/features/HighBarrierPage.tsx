import React, { useState } from 'react'
import { Shield, Zap, Package, CheckCircle, Clock, Image, X, ChevronLeft, ChevronRight } from 'lucide-react'
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
