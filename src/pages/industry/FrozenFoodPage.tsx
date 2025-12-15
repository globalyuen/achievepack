import React from 'react'
import { Package, Snowflake, Truck, CheckCircle, ThermometerSnowflake } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const FrozenFoodPage: React.FC = () => {
  const { t } = useTranslation()
  const sections = [
    {
      id: 'overview',
      title: 'Frozen Food Packaging Solutions',
      icon: <Snowflake className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack provides durable, cold-resistant flexible packaging for frozen foods.</strong> Our pouches maintain integrity at freezing temperatures while protecting against freezer burn and moisture loss.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Key Features:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cold-resistant materials</strong> – Maintain flexibility at -40°C/-40°F</li>
            <li><strong>Moisture barrier</strong> – Prevent freezer burn and ice crystal formation</li>
            <li><strong>Durable seals</strong> – Strong seals that withstand thermal cycling</li>
            <li><strong>Resealable options</strong> – Zipper closures for convenient portion use</li>
            <li><strong>Microwave-safe options</strong> – For frozen-to-table convenience</li>
          </ul>
        </div>
      )
    },
    {
      id: 'products',
      title: 'Frozen Products We Package',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Frozen Snacks</h4>
              <ul className="text-sm space-y-1 text-blue-700">
                <li>• Dumplings & potstickers</li>
                <li>• Nuggets & tenders</li>
                <li>• Plant-based alternatives</li>
                <li>• Appetizers</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Frozen Desserts</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                <li>• Ice cream bites</li>
                <li>• Frozen fruit</li>
                <li>• Frozen pastries</li>
                <li>• Mochi & novelties</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Frozen Meals</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• Ready meals</li>
                <li>• Meal prep portions</li>
                <li>• Frozen vegetables</li>
                <li>• Seafood portions</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'technical',
      title: 'Technical Specifications',
      icon: <ThermometerSnowflake className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>Temperature range:</strong> -40°C to +100°C (-40°F to +212°F)</li>
              <li>✓ <strong>Cold crack resistance:</strong> Maintains flexibility at freezing</li>
              <li>✓ <strong>Moisture barrier:</strong> MVTR &lt; 1.0 g/m²/24hr</li>
              <li>✓ <strong>Seal strength:</strong> &gt;15 N/15mm at frozen state</li>
              <li>✓ <strong>FDA/EU approved</strong> for frozen food contact</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What materials work best for frozen food packaging?",
      answer: "We recommend PE/PA (polyethylene/nylon) or PE/PET structures for frozen food. These materials maintain flexibility at freezing temperatures and provide excellent moisture barrier. For sustainable options, we offer recyclable mono-PE pouches suitable for frozen applications."
    },
    {
      question: "Can frozen food pouches be microwaved?",
      answer: "We offer microwave-safe frozen food pouches with steam-release features for convenient frozen-to-table cooking. These pouches allow steam to escape during heating to prevent bursting."
    },
    {
      question: "Do you offer sustainable frozen food packaging?",
      answer: "Yes, we offer recyclable mono-PE frozen food pouches that can be recycled in PE recycling streams. These maintain good cold-crack resistance while offering an improved sustainability profile."
    }
  ]

  const relatedLinks = [
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Popular format for frozen products" },
    { title: "Vacuum Pouches", url: "/packaging/vacuum-pouches", description: "Extended shelf life for frozen meats" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Sustainable frozen packaging option" }
  ]

  return (
    <SEOPageLayout
      title={t('seoPages.pages.frozenFood.title')}
      description="Durable flexible packaging for frozen foods including dumplings, frozen snacks, ice cream bites, and frozen meals. Cold-crack resistant, FDA compliant. MOQ 500 units."
      keywords={[
        'frozen food packaging',
        'frozen pouch',
        'cold resistant packaging',
        'frozen snack bags',
        'ice cream packaging',
        'freezer bags custom',
        'frozen meal pouches',
        'frozen food bags'
      ]}
      canonicalUrl="https://achievepack.com/industry/frozen-food"
      heroTitle={t('seoPages.pages.frozenFood.heroTitle')}
      heroSubtitle={t('seoPages.pages.frozenFood.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_food_beverage_vacation_lifestyle_2486493.webp"
      heroImageAlt="Cold-resistant frozen food packaging pouches"
      introSummary={t('seoPages.pages.frozenFood.introSummary')}
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle="Get Frozen Food Packaging"
      ctaDescription="Request a free sample and quote for your frozen food products."
      ctaButtonText="Request Free Sample"
    />
  )
}

export default FrozenFoodPage
