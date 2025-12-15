import React from 'react'
import { Package, Droplets, CheckCircle, Shield, Utensils } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const SaucesCondimentsPage: React.FC = () => {
  const { t } = useTranslation()
  const sections = [
    {
      id: 'overview',
      title: 'Sauces & Condiments Packaging',
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack provides flexible packaging for sauces, condiments, liquids, and semi-liquid food products.</strong> Our spout pouches and refill packs offer convenient dispensing while reducing plastic use compared to rigid containers.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Packaging Advantages:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Spout pouches</strong> – Easy dispensing with reclosable caps</li>
            <li><strong>Refill packs</strong> – Eco-friendly alternative to bottles</li>
            <li><strong>High barrier</strong> – Protects flavor and extends shelf life</li>
            <li><strong>Flexible formats</strong> – From single-serve sachets to bulk pouches</li>
            <li><strong>Retort-capable</strong> – For hot-fill and retort applications</li>
          </ul>
        </div>
      )
    },
    {
      id: 'products',
      title: 'Products We Package',
      icon: <Utensils className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Sauces</h4>
              <ul className="text-sm space-y-1 text-red-700">
                <li>• Ketchup & tomato sauce</li>
                <li>• Mayonnaise</li>
                <li>• Hot sauce & chili sauce</li>
                <li>• BBQ sauce</li>
                <li>• Pasta sauce</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Condiments</h4>
              <ul className="text-sm space-y-1 text-yellow-700">
                <li>• Mustard</li>
                <li>• Dressings</li>
                <li>• Marinades & rubs</li>
                <li>• Soy sauce & fish sauce</li>
                <li>• Vinegar</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Spreads & Oils</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>• Honey & syrups</li>
                <li>• Nut butters</li>
                <li>• Cooking oils & ghee</li>
                <li>• Jams & preserves</li>
                <li>• Tahini</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'formats',
      title: 'Packaging Formats',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-primary-200 rounded-lg p-4">
              <h4 className="font-semibold text-primary-800 mb-2">Spout Pouches</h4>
              <p className="text-sm">Reclosable pour spouts for easy dispensing. Available in 100ml to 2L sizes.</p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Single-Serve Sachets</h4>
              <p className="text-sm">Tear-top portions for foodservice and convenience. 10-50ml sizes.</p>
            </div>
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Refill Pouches</h4>
              <p className="text-sm">Eco-friendly refills for bottles. Uses 80% less plastic than rigid containers.</p>
            </div>
            <div className="border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Stand-Up Pouches</h4>
              <p className="text-sm">With flip-top cap or corner spout. 200ml to 1L sizes.</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Can pouches be used for hot-fill sauces?",
      answer: "Yes, we offer pouches suitable for hot-fill applications up to 85°C. For higher temperatures, we provide retort-capable pouches that can withstand sterilization at 121°C for shelf-stable sauces."
    },
    {
      question: "What are refill pouches?",
      answer: "Refill pouches are flexible pouches designed to refill rigid bottles or dispensers at home. They use approximately 80% less plastic than a new bottle, offering significant environmental benefits while maintaining convenience."
    },
    {
      question: "Are sauce pouches recyclable?",
      answer: "Standard sauce pouches are multi-material and challenging to recycle. We offer mono-material alternatives that are recyclable, though availability varies by region and local infrastructure."
    }
  ]

  const relatedLinks = [
    { title: "Spout Pouches", url: "/packaging/spout-pouches", description: "Perfect for pourable sauces and liquids" },
    { title: "Flat Pouches", url: "/packaging/flat-pouches", description: "Ideal for single-serve sachets" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Sustainable sauce packaging" }
  ]

  return (
    <SEOPageLayout
      title="Sauces & Condiments Packaging | Spout Pouches & Refill Packs"
      description="Flexible packaging for sauces, condiments, oils, and spreads. Spout pouches, refill packs, sachets. Hot-fill and retort capable. MOQ 500 units."
      keywords={[
        'sauce packaging',
        'condiment pouches',
        'spout pouch sauces',
        'sauce sachet',
        'refill pouch',
        'ketchup packaging',
        'honey pouch',
        'oil pouch packaging'
      ]}
      canonicalUrl="https://achievepack.com/industry/sauces-condiments"
      heroTitle={t('seoPages.pages.saucesCondiments.heroTitle')}
      heroSubtitle={t('seoPages.pages.saucesCondiments.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_food_grade_olive_stone_pouch_achieve_pack_8628145.webp"
      heroImageAlt="Spout pouches for sauces and condiments"
      introSummary={t('seoPages.pages.saucesCondiments.introSummary')}
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle="Get Sauce & Condiment Packaging"
      ctaDescription="Request a free sample and quote for your liquid products."
      ctaButtonText="Request Free Sample"
    />
  )
}

export default SaucesCondimentsPage
