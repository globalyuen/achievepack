import React from 'react'
import { Shield, Zap, Package, CheckCircle, Clock } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const HighBarrierPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.highBarrier'
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
    />
  )
}

export default HighBarrierPage
