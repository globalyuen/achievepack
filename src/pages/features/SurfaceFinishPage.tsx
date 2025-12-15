import React from 'react'
import { Sparkles, Eye, Package, CheckCircle, Clock } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const SurfaceFinishPage: React.FC = () => {
  const { t } = useTranslation()
  const sections = [
    {
      id: 'overview',
      title: 'Surface Finish Options for Eco-Friendly Pouches',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Transform your sustainable packaging into a premium shelf presence with our range of surface finishes.</strong> From soft-touch tactile coatings to eye-catching spot UV, Achieve Pack offers finishing options that elevate your brand while maintaining eco-credentials.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Available Surface Finishes:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Matte lamination</strong> – Sophisticated, non-reflective finish</li>
            <li><strong>Gloss lamination</strong> – Vibrant colors and high shine</li>
            <li><strong>Soft-touch coating</strong> – Velvety tactile experience</li>
            <li><strong>Spot UV</strong> – Selective gloss highlights</li>
            <li><strong>Hot foil stamping</strong> – Metallic accents and logos</li>
          </ul>
        </div>
      )
    },
    {
      id: 'lamination',
      title: 'Lamination Options',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">Gloss Lamination</h4>
              <ul className="text-sm space-y-1">
                <li>• Maximum color vibrancy</li>
                <li>• High light reflection</li>
                <li>• Easy to clean surface</li>
                <li>• Best for: Food, beverages</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Matte Lamination</h4>
              <ul className="text-sm space-y-1">
                <li>• Sophisticated, elegant look</li>
                <li>• Reduced glare</li>
                <li>• Fingerprint resistant</li>
                <li>• Best for: Premium, organic</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Soft-Touch Coating</h4>
              <ul className="text-sm space-y-1">
                <li>• Velvety tactile feel</li>
                <li>• Premium perception</li>
                <li>• Scuff-resistant</li>
                <li>• Best for: Luxury, cosmetics</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'special-effects',
      title: 'Special Effect Finishes',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Elevate your packaging with premium finishing effects:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Spot UV Varnish</h4>
              <p className="text-sm text-neutral-600 mb-2">Apply high-gloss coating to specific areas for contrast and emphasis.</p>
              <ul className="text-sm space-y-1">
                <li>• Highlight logos and text</li>
                <li>• Create texture patterns</li>
                <li>• Combine with matte base</li>
                <li>• Adds $0.02-0.05/unit</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Hot Foil Stamping</h4>
              <p className="text-sm text-neutral-600 mb-2">Metallic foil transfer for premium brand elements.</p>
              <ul className="text-sm space-y-1">
                <li>• Gold, silver, copper, holographic</li>
                <li>• Logos and borders</li>
                <li>• Certificate/award seals</li>
                <li>• Adds $0.05-0.15/unit</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Embossing/Debossing</h4>
              <p className="text-sm text-neutral-600 mb-2">Raised or recessed 3D patterns on the pouch surface.</p>
              <ul className="text-sm space-y-1">
                <li>• Tactile brand logos</li>
                <li>• Texture patterns</li>
                <li>• Combine with foil</li>
                <li>• Adds $0.03-0.08/unit</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Registered Metallics</h4>
              <p className="text-sm text-neutral-600 mb-2">Metallic ink effects printed in registration with design.</p>
              <ul className="text-sm space-y-1">
                <li>• Full metallic panels</li>
                <li>• Gradient metallic effects</li>
                <li>• More economical than foil</li>
                <li>• Included in plate printing</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'comparison',
      title: 'Finish Comparison',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border">Finish</th>
                  <th className="text-left p-3 border">Look</th>
                  <th className="text-left p-3 border">Feel</th>
                  <th className="text-left p-3 border">Best For</th>
                  <th className="text-left p-3 border">Cost Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border font-medium">Gloss</td><td className="p-3 border">Shiny, vibrant</td><td className="p-3 border">Smooth</td><td className="p-3 border">Food, snacks</td><td className="p-3 border text-green-600">Base cost</td></tr>
                <tr><td className="p-3 border font-medium">Matte</td><td className="p-3 border">Elegant, subtle</td><td className="p-3 border">Smooth</td><td className="p-3 border">Premium, organic</td><td className="p-3 border text-green-600">Base cost</td></tr>
                <tr><td className="p-3 border font-medium">Soft-Touch</td><td className="p-3 border">Rich, premium</td><td className="p-3 border">Velvety</td><td className="p-3 border">Luxury, cosmetics</td><td className="p-3 border">+10-15%</td></tr>
                <tr><td className="p-3 border font-medium">Spot UV</td><td className="p-3 border">Contrast highlights</td><td className="p-3 border">Textured</td><td className="p-3 border">Branding emphasis</td><td className="p-3 border">+$0.02-0.05/unit</td></tr>
                <tr><td className="p-3 border font-medium">Hot Foil</td><td className="p-3 border">Metallic shine</td><td className="p-3 border">Smooth metallic</td><td className="p-3 border">Luxury, awards</td><td className="p-3 border">+$0.05-0.15/unit</td></tr>
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
              <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
              <div className="text-sm text-neutral-600">Finish Options</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500</div>
              <div className="text-sm text-neutral-600">Min Order (Digital)</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5,000</div>
              <div className="text-sm text-neutral-600">Min Order (Foil/UV)</div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Can I combine multiple finishes on one pouch?",
      answer: "Yes! Popular combinations include matte lamination + spot UV for contrast, or soft-touch + hot foil for luxury. We can help you design the optimal finish combination for your brand positioning."
    },
    {
      question: "Are special finishes available on compostable pouches?",
      answer: "Matte and gloss lamination are available on compostable materials. However, some special effects like hot foil require testing for compostability. We recommend water-based coatings for certified compostable packaging."
    },
    {
      question: "What is the minimum order for spot UV or hot foil?",
      answer: "Special finishes like spot UV and hot foil require plate printing (5,000+ MOQ) as they involve additional tooling. For smaller orders, we recommend metallic inks which can be done with digital printing."
    },
    {
      question: "Does soft-touch coating affect food safety?",
      answer: "Our soft-touch coating is applied to the exterior surface only and is FDA-compliant. The interior food-contact layer remains unaffected and meets all food safety standards."
    }
  ]

  const relatedLinks = [
    { title: "Plate Printing", url: "/printing/plate-printing", description: "Required for special finishes" },
    { title: "Reclosure Options", url: "/features/reclosure-options", description: "Complete your pouch design" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Popular format for premium finishes" }
  ]

  return (
    <SEOPageLayout
      title={t('seoPages.pages.surfaceFinish.title')}
      description="Premium surface finishes for eco-friendly pouches. Matte, gloss, soft-touch coating, spot UV, hot foil stamping, and embossing options for sustainable packaging."
      keywords={['pouch finish options', 'matte packaging', 'soft touch coating', 'spot UV pouches', 'hot foil packaging', 'premium pouch finishes']}
      canonicalUrl="https://achievepack.com/features/surface-finish"
      heroTitle={t('seoPages.pages.surfaceFinish.heroTitle')}
      heroSubtitle={t('seoPages.pages.surfaceFinish.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_finishing_options_premium_showcase_3613860.webp"
      heroImageAlt="Premium surface finishes on eco-friendly pouches"
      introSummary={t('seoPages.pages.surfaceFinish.introSummary')}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle="Ready to Elevate Your Packaging?"
      ctaDescription="Get samples of different finish options and see the premium quality difference."
    />
  )
}

export default SurfaceFinishPage
