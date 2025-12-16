import React from 'react'
import { Shield, Layers, Package, CheckCircle, Clock } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const MediumBarrierPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.mediumBarrier'
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
    />
  )
}

export default MediumBarrierPage
