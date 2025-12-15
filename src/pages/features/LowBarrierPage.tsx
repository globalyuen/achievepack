import React from 'react'
import { Shield, Leaf, Package, CheckCircle, Clock } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const LowBarrierPage: React.FC = () => {
  const { t } = useTranslation()
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
    }
  ]

  const faqs = [
    {
      question: "Is low barrier packaging suitable for my product?",
      answer: "Low barrier is ideal for dry products consumed within 3-6 months: cookies, tea, granola, dried fruits, rice, and similar dry goods. If your product is moisture or oxygen sensitive, consider medium or high barrier options."
    },
    {
      question: "Can low barrier packaging be compostable?",
      answer: "Yes! Many low barrier options like Kraft+PLA and NatureFlex are home compostable, breaking down in backyard compost within 6-12 months. These are certified to EN 13432 and OK Home standards."
    },
    {
      question: "What's the price difference vs medium barrier?",
      answer: "Low barrier materials typically cost 15-25% less than medium barrier options. The cost savings plus better eco-credentials make it an excellent choice when your product doesn't require extended shelf life."
    },
    {
      question: "How do I transition from plastic to low barrier eco-packaging?",
      answer: "We offer free consultation and samples to test compatibility. Many brands successfully switch dry goods to low barrier compostable packaging. We help you validate shelf life and optimize the transition."
    }
  ]

  const relatedLinks = [
    { title: "Medium Barrier Options", url: "/features/medium-barrier", description: "6-12 month protection" },
    { title: "High Barrier Options", url: "/features/high-barrier", description: "12-24 month protection" },
    { title: "Home Compostable Materials", url: "/materials/home-compostable", description: "Backyard compostable" }
  ]

  return (
    <SEOPageLayout
      title="Low Barrier Packaging | 3-6 Month Shelf Life Eco Pouches"
      description="Low barrier eco-friendly packaging for products with 3-6 month shelf life. Home compostable and recyclable options. Best sustainability credentials. Perfect for dry goods, tea, cookies, granola."
      keywords={['low barrier packaging', 'compostable pouches', 'short shelf life packaging', 'eco-friendly packaging', 'kraft paper pouches']}
      canonicalUrl="https://achievepack.com/features/low-barrier"
      heroTitle="Low Barrier Packaging"
      heroSubtitle="Best eco-credentials with 3-6 month shelf life protection. Perfect for dry goods with fast turnover."
      heroImage="/imgs/seo-photos/a_achievepack_low_barrier_fresh_5851801.webp"
      heroImageAlt="Low barrier eco-friendly packaging for fresh products"
      introSummary="Low barrier packaging offers the most sustainable options with home compostable and widely recyclable materials. Ideal for dry products like cookies, tea, granola, and grains that don't require extended shelf life protection."
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle="Ready to Go Sustainable?"
      ctaDescription="Get free samples of our low barrier compostable packaging and see the quality for yourself."
    />
  )
}

export default LowBarrierPage
