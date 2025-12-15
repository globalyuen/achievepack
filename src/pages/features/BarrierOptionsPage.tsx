import React from 'react'
import { Shield, Thermometer, Package, CheckCircle, Clock } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const BarrierOptionsPage: React.FC = () => {
  const { t } = useTranslation()
  const sections = [
    {
      id: 'overview',
      title: 'Barrier Options for Eco-Friendly Packaging',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Protect your products with the right barrier level while maintaining sustainability.</strong> Achieve Pack offers low, medium, and high barrier options in both recyclable and compostable materials to match your product's shelf life requirements.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Barrier Protection Levels:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Low Barrier (3-6 months)</strong> – Ideal for dry goods with fast turnover</li>
            <li><strong>Medium Barrier (6-12 months)</strong> – Balanced protection for most products</li>
            <li><strong>High Barrier (12-24 months)</strong> – Maximum protection for sensitive products</li>
          </ul>
        </div>
      )
    },
    {
      id: 'barrier-types',
      title: 'Barrier Level Comparison',
      icon: <Thermometer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Low Barrier</h4>
              <div className="text-2xl font-bold text-green-600 mb-2">3-6 Months</div>
              <ul className="text-sm space-y-1">
                <li>• OTR: 50-100 cc/m²/day</li>
                <li>• MVTR: 10-20 g/m²/day</li>
                <li>• Best eco-credentials</li>
                <li>• Lowest cost option</li>
              </ul>
              <p className="text-xs text-green-700 mt-3">Best for: Dry snacks, cookies, tea, granola</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Medium Barrier</h4>
              <div className="text-2xl font-bold text-blue-600 mb-2">6-12 Months</div>
              <ul className="text-sm space-y-1">
                <li>• OTR: 5-20 cc/m²/day</li>
                <li>• MVTR: 2-5 g/m²/day</li>
                <li>• Good sustainability</li>
                <li>• Moderate cost</li>
              </ul>
              <p className="text-xs text-blue-700 mt-3">Best for: Coffee, nuts, pet treats, cereals</p>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg border-2 border-primary-200">
              <h4 className="font-semibold text-primary-800 mb-2">High Barrier</h4>
              <div className="text-2xl font-bold text-primary-600 mb-2">12-24 Months</div>
              <ul className="text-sm space-y-1">
                <li>• OTR: {'<'} 1 cc/m²/day</li>
                <li>• MVTR: {'<'} 1 g/m²/day</li>
                <li>• Maximum protection</li>
                <li>• Premium positioning</li>
              </ul>
              <p className="text-xs text-primary-700 mt-3">Best for: Coffee, supplements, baby food</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Sustainable Barrier Materials',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Choose from eco-friendly barrier solutions:</p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border">Material</th>
                  <th className="text-left p-3 border">Barrier Level</th>
                  <th className="text-left p-3 border">Sustainability</th>
                  <th className="text-left p-3 border">Best Application</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border font-medium">Kraft + PLA</td><td className="p-3 border">Low</td><td className="p-3 border text-green-600">Compostable</td><td className="p-3 border">Dry goods, tea, cookies</td></tr>
                <tr><td className="p-3 border font-medium">Mono-PE</td><td className="p-3 border">Medium</td><td className="p-3 border text-blue-600">Recyclable</td><td className="p-3 border">Snacks, pet food</td></tr>
                <tr><td className="p-3 border font-medium">Mono-PE + EVOH</td><td className="p-3 border">High</td><td className="p-3 border text-blue-600">Recyclable*</td><td className="p-3 border">Coffee, supplements</td></tr>
                <tr><td className="p-3 border font-medium">Bio-PE</td><td className="p-3 border">Medium</td><td className="p-3 border text-green-600">Bio-based</td><td className="p-3 border">Organic products</td></tr>
                <tr><td className="p-3 border font-medium">PCR Plastic</td><td className="p-3 border">Medium-High</td><td className="p-3 border text-blue-600">30-100% recycled</td><td className="p-3 border">General food</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-neutral-500">*EVOH layer is {'<'}5% of total structure, accepted in most recycling streams</p>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Product Recommendations',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <h5 className="font-semibold text-green-800 text-sm mb-2">Low Barrier Products</h5>
              <ul className="text-xs space-y-1 text-green-700">
                <li>• Dried fruits & vegetables</li>
                <li>• Cookies & biscuits</li>
                <li>• Loose-leaf tea</li>
                <li>• Granola & muesli</li>
                <li>• Rice & grains</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <h5 className="font-semibold text-blue-800 text-sm mb-2">Medium Barrier Products</h5>
              <ul className="text-xs space-y-1 text-blue-700">
                <li>• Roasted coffee beans</li>
                <li>• Nuts & seeds</li>
                <li>• Pet food & treats</li>
                <li>• Protein powders</li>
                <li>• Breakfast cereals</li>
              </ul>
            </div>
            <div className="bg-primary-50 p-3 rounded-lg">
              <h5 className="font-semibold text-primary-800 text-sm mb-2">High Barrier Products</h5>
              <ul className="text-xs space-y-1 text-primary-700">
                <li>• Ground coffee</li>
                <li>• Vitamins & supplements</li>
                <li>• Baby food</li>
                <li>• Freeze-dried products</li>
                <li>• Pharmaceutical powders</li>
              </ul>
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
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-sm text-neutral-600">Barrier Levels</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500</div>
              <div className="text-sm text-neutral-600">Minimum Order</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Free</div>
              <div className="text-sm text-neutral-600">Barrier Testing</div>
            </div>
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            Not sure which barrier level you need? We offer free shelf-life testing to determine the optimal barrier for your product.
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "How do I know which barrier level my product needs?",
      answer: "The required barrier depends on your product's sensitivity to oxygen and moisture, and your target shelf life. We offer free shelf-life testing where we package your product in different barrier materials and monitor quality over time. Contact us for a consultation."
    },
    {
      question: "Can high-barrier packaging still be sustainable?",
      answer: "Yes! Our mono-PE high-barrier pouches with thin EVOH layer (<5%) are accepted in most recycling streams. We also offer bio-based high-barrier options. The key is matching the right barrier to your actual needs - over-engineering barriers wastes resources."
    },
    {
      question: "What is OTR and MVTR?",
      answer: "OTR (Oxygen Transmission Rate) measures how much oxygen passes through the material. MVTR (Moisture Vapor Transmission Rate) measures water vapor passage. Lower numbers mean better barrier protection. We provide test certificates for all materials."
    },
    {
      question: "Do you offer barrier testing services?",
      answer: "Yes, we provide complimentary barrier testing for qualified orders. We can test your current packaging or run comparative tests with different barrier materials to optimize your packaging choice."
    }
  ]

  const relatedLinks = [
    { title: "Compostable Materials", url: "/materials/compostable", description: "Low barrier eco-friendly options" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Medium-high barrier recyclable" },
    { title: "Coffee & Tea Packaging", url: "/industry/coffee-tea", description: "High barrier applications" }
  ]

  return (
    <SEOPageLayout
      title={t('seoPages.pages.barrierOptions.title')}
      description="Choose the right barrier level for your sustainable packaging. Low, medium, and high barrier options in recyclable and compostable materials. Free shelf-life testing available."
      keywords={['barrier packaging', 'high barrier pouches', 'oxygen barrier', 'moisture barrier', 'shelf life packaging', 'EVOH barrier']}
      canonicalUrl="https://achievepack.com/features/barrier-options"
      heroTitle={t('seoPages.pages.barrierOptions.heroTitle')}
      heroSubtitle={t('seoPages.pages.barrierOptions.heroSubtitle')}
      heroImage="/imgs/feature-barrier-options.webp"
      heroImageAlt="Barrier protection levels for eco-friendly packaging"
      introSummary={t('seoPages.pages.barrierOptions.introSummary')}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle="Need Help Choosing Your Barrier?"
      ctaDescription="Get free shelf-life testing and expert recommendations for your product's optimal barrier level."
    />
  )
}

export default BarrierOptionsPage
