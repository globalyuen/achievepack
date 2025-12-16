import React from 'react'
import { Lock, RefreshCw, Package, CheckCircle, Clock } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const ReclosureOptionsPage: React.FC = () => {
  const { t } = useTranslation()
  const sections = [
    {
      id: 'overview',
      title: 'Reclosure Options for Eco-Friendly Pouches',
      icon: <Lock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Keep products fresh and consumers happy with our range of sustainable reclosure solutions.</strong> From press-to-close zippers to child-resistant caps, Achieve Pack offers reclosure options that maintain freshness while supporting your eco-friendly positioning.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Available Reclosure Types:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Press-to-close zippers</strong> – Simple, reliable sealing for everyday products</li>
            <li><strong>Slider zippers</strong> – Easy one-hand operation for convenience</li>
            <li><strong>Spout caps</strong> – Pour control for liquids and powders</li>
            <li><strong>Tin-ties</strong> – Classic look for coffee and artisan products</li>
            <li><strong>Child-resistant closures</strong> – Safety-first for cannabis and pharmaceuticals</li>
          </ul>
        </div>
      )
    },
    {
      id: 'zipper-types',
      title: 'Zipper Options',
      icon: <RefreshCw className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">Press-to-Close Zipper</h4>
              <ul className="text-sm space-y-1">
                <li>• Most economical option</li>
                <li>• 500+ open/close cycles</li>
                <li>• Available in all pouch formats</li>
                <li>• Clear or colored options</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Slider Zipper</h4>
              <ul className="text-sm space-y-1">
                <li>• Premium one-hand operation</li>
                <li>• Tactile "click" confirmation</li>
                <li>• Ideal for snacks and pet food</li>
                <li>• Higher perceived value</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Child-Resistant Zipper</h4>
              <ul className="text-sm space-y-1">
                <li>• ASTM D3475 certified</li>
                <li>• Required for cannabis packaging</li>
                <li>• Push-and-slide mechanism</li>
                <li>• Senior-friendly (16 CFR 1700)</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Velcro-Style Zipper</h4>
              <ul className="text-sm space-y-1">
                <li>• Ultra-quiet opening</li>
                <li>• Soft-touch feel</li>
                <li>• Great for premium products</li>
                <li>• 1000+ cycle durability</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'spouts',
      title: 'Spout & Cap Options',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>For liquids, sauces, and pourable products:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Standard Screw Cap (8.6mm)',
              'Wide Mouth Cap (15mm)',
              'Flip-Top Dispensing Cap',
              'Child-Resistant Cap',
              'Tamper-Evident Seal',
              'Corner Spout (Space-Saving)',
              'Center Spout (Pour Control)',
              'Pump Dispenser Cap',
              'Squeeze & Measure Cap'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Product Applications',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border">Product Type</th>
                  <th className="text-left p-3 border">Recommended Closure</th>
                  <th className="text-left p-3 border">Why</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border">Coffee Beans</td><td className="p-3 border">Tin-tie + Valve</td><td className="p-3 border">Classic look, degassing</td></tr>
                <tr><td className="p-3 border">Snacks & Chips</td><td className="p-3 border">Slider Zipper</td><td className="p-3 border">Easy one-hand access</td></tr>
                <tr><td className="p-3 border">Pet Food</td><td className="p-3 border">Press-to-Close</td><td className="p-3 border">Cost-effective, durable</td></tr>
                <tr><td className="p-3 border">Baby Food Puree</td><td className="p-3 border">Screw Cap Spout</td><td className="p-3 border">Controlled dispensing</td></tr>
                <tr><td className="p-3 border">Cannabis</td><td className="p-3 border">Child-Resistant</td><td className="p-3 border">Regulatory compliance</td></tr>
                <tr><td className="p-3 border">Sauces</td><td className="p-3 border">Flip-Top Spout</td><td className="p-3 border">Easy squeeze & pour</td></tr>
              </tbody>
            </table>
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
              <div className="text-sm text-neutral-600">Min Order (Zippers)</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">1,000</div>
              <div className="text-sm text-neutral-600">Min Order (Spouts)</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-sm text-neutral-600">Closure Options</div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Are your zippers recyclable or compostable?",
      answer: "Our mono-PE zippers are fully recyclable with PE pouches. For compostable pouches, we offer PLA-based zippers that meet EN 13432 standards. The zipper material always matches the pouch material for proper end-of-life processing."
    },
    {
      question: "What is the child-resistant certification for cannabis packaging?",
      answer: "Our child-resistant pouches are certified to ASTM D3475 standards and comply with 16 CFR 1700 for senior accessibility. We provide COC (Certificate of Compliance) documentation for regulatory submissions."
    },
    {
      question: "Can I have a tear notch AND a zipper?",
      answer: "Yes, most customers combine a tear notch for easy opening with a zipper for reclosure. The tear notch is positioned above the zipper line so the reseal functionality remains intact after opening."
    },
    {
      question: "Do spout pouches cost more than zipper pouches?",
      answer: "Spout pouches typically cost 20-40% more than zipper pouches due to the spout component and additional sealing process. However, they offer unique functionality for liquid and semi-liquid products that zippers can't provide."
    }
  ]

  const relatedLinks = [
    { title: "Spout Pouches", url: "/packaging/spout-pouches", description: "Complete spout pouch solutions" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Most popular zipper format" },
    { title: "Surface Finish Options", url: "/features/surface-finish", description: "Enhance your pouch appearance" }
  ]

  return (
    <SEOPageLayout
      title={t('seoPages.pages.reclosureOptions.title')}
      description="Sustainable reclosure solutions for flexible packaging. Press-to-close zippers, slider zippers, spout caps, tin-ties, and child-resistant options for eco-friendly pouches."
      keywords={['reclosable pouches', 'zipper bags', 'spout pouch', 'resealable packaging', 'child resistant packaging', 'tin tie bags']}
      canonicalUrl="https://achievepack.com/features/reclosure-options"
      heroTitle={t('seoPages.pages.reclosureOptions.heroTitle')}
      heroSubtitle={t('seoPages.pages.reclosureOptions.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_closure_systems_infographic_4275938.webp"
      heroImageAlt="Various reclosure options for eco-friendly pouches"
      introSummary={t('seoPages.pages.reclosureOptions.introSummary')}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle={t('seoPages.pages.reclosureOptions.cta.title')}
      ctaDescription={t('seoPages.pages.reclosureOptions.cta.description')}
      ctaButtonText={t('seoPages.pages.reclosureOptions.cta.button')}
    />
  )
}

export default ReclosureOptionsPage
