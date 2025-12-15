import React from 'react'
import { Package, Shield, CheckCircle, Droplets, Baby } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const BabyFoodPage: React.FC = () => {
  const { t } = useTranslation()
  const sections = [
    {
      id: 'overview',
      title: 'Baby Food & Infant Nutrition Packaging',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack provides premium food-safe packaging for baby food, infant cereals, toddler snacks, and baby purées.</strong> Our packaging meets the strictest safety standards with materials specifically designed for infant and child nutrition products.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Why Choose Our Baby Food Packaging:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Ultra-safe materials</strong> – Zero migration, no BPA, phthalates, or harmful substances</li>
            <li><strong>High-barrier protection</strong> – Preserve nutrients, vitamins, and freshness</li>
            <li><strong>Spout pouches</strong> – Convenient for purées with child-safe caps</li>
            <li><strong>Resealable options</strong> – Portion control for cereals and snacks</li>
            <li><strong>Sustainable choices</strong> – Compostable and recyclable materials</li>
          </ul>
        </div>
      )
    },
    {
      id: 'products',
      title: 'Baby Products We Package',
      icon: <Baby className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-2">Baby Purées</h4>
              <ul className="text-sm space-y-1 text-pink-700">
                <li>• Fruit purées</li>
                <li>• Vegetable purées</li>
                <li>• Mixed meal purées</li>
                <li>• Yogurt blends</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Dry Baby Food</h4>
              <ul className="text-sm space-y-1 text-blue-700">
                <li>• Infant cereals</li>
                <li>• Rice cereals</li>
                <li>• Oatmeal powders</li>
                <li>• Formula supplements</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Toddler Snacks</h4>
              <ul className="text-sm space-y-1 text-yellow-700">
                <li>• Puffs & melts</li>
                <li>• Teething biscuits</li>
                <li>• Fruit snacks</li>
                <li>• Veggie sticks</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'spout',
      title: 'Spout Pouches for Purées',
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our spout pouches are specifically designed for baby food applications:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Safety Features</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Child-safe caps (no choking hazard)</li>
                <li>✓ Tamper-evident seals</li>
                <li>✓ Smooth edges, no sharp parts</li>
                <li>✓ FDA & EU food contact approved</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Convenience Features</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Self-standing design</li>
                <li>✓ Reclosable cap</li>
                <li>✓ Clear window option</li>
                <li>✓ Squeeze-friendly material</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'safety',
      title: 'Safety & Compliance',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Baby food packaging requires the highest safety standards:</p>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>FDA 21 CFR 170-199</strong> – US food contact regulations</li>
              <li>✓ <strong>EU 10/2011</strong> – European food contact materials</li>
              <li>✓ <strong>EU 1935/2004</strong> – Framework regulation</li>
              <li>✓ <strong>BPA Free</strong> – No bisphenol A in any component</li>
              <li>✓ <strong>Phthalate Free</strong> – No plasticizers</li>
              <li>✓ <strong>Heavy Metal Testing</strong> – Below detection limits</li>
              <li>✓ <strong>Migration Testing</strong> – Certified safe for infant food</li>
            </ul>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            We provide full documentation including Certificates of Conformity, migration test reports, and material safety data sheets for regulatory compliance.
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What materials are safe for baby food packaging?",
      answer: "We use food-grade materials specifically certified for infant food contact under FDA 21 CFR and EU 10/2011 regulations. All materials are BPA-free, phthalate-free, and undergo migration testing to ensure no harmful substances transfer to food."
    },
    {
      question: "Do you offer spout pouches for baby purées?",
      answer: "Yes, we specialize in spout pouches for baby food purées. Our pouches feature child-safe caps, tamper-evident seals, and smooth construction without sharp edges. Available in 90ml, 120ml, and 150ml sizes."
    },
    {
      question: "Are your baby food pouches sustainable?",
      answer: "Yes, we offer sustainable options including recyclable mono-material pouches and PCR (post-consumer recycled) content materials. While certified compostable spout pouches are still developing, our dry baby food pouches are available in certified compostable materials."
    },
    {
      question: "What certifications do you provide for baby food packaging?",
      answer: "We provide comprehensive documentation including FDA compliance statements, EU Declaration of Conformity, migration test reports from accredited laboratories, and material safety data sheets (SDS)."
    }
  ]

  const tables = [
    {
      title: "Baby Food Packaging Size Guide",
      data: {
        headers: ["Product Type", "Size", "Capacity", "Format"],
        rows: [
          ["Baby purée", "100 x 150mm", "90-100ml", "Spout Pouch"],
          ["Baby purée", "110 x 170mm", "120-150ml", "Spout Pouch"],
          ["Infant cereal", "120 x 180 + 70mm", "200-300g", "Stand-Up Zipper"],
          ["Toddler snacks", "100 x 150 + 60mm", "30-60g", "Stand-Up Pouch"],
          ["Puffs", "80 x 120mm", "20-40g", "Stand-Up Pouch"]
        ]
      }
    }
  ]

  const relatedLinks = [
    { title: "Spout Pouches", url: "/packaging/spout-pouches", description: "Perfect for baby purées and liquid foods" },
    { title: "Compostable Packaging", url: "/materials/compostable", description: "Eco-friendly options for baby food" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Great for cereals and snacks" }
  ]

  return (
    <SEOPageLayout
      title="Baby Food Packaging | Spout Pouches, Infant Cereal Bags & Toddler Snack Pouches"
      description="Food-safe packaging for baby purées, infant cereals, and toddler snacks. Spout pouches with child-safe caps. FDA & EU compliant, BPA-free materials. MOQ 500 units."
      keywords={[
        'baby food packaging',
        'baby puree pouches',
        'spout pouches baby food',
        'infant cereal packaging',
        'toddler snack bags',
        'baby food pouches',
        'safe baby packaging',
        'BPA free food pouches',
        'child safe packaging'
      ]}
      canonicalUrl="https://achievepack.com/industry/baby-food"
      heroTitle={t('seoPages.pages.babyFood.heroTitle')}
      heroSubtitle={t('seoPages.pages.babyFood.heroSubtitle')}
      heroImage="/imgs/solution-food-beverage.webp"
      heroImageAlt="Safe baby food packaging spout pouches"
      introSummary={t('seoPages.pages.babyFood.introSummary')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle="Get Safe Baby Food Packaging"
      ctaDescription="Request a free sample and quote for your baby food brand."
      ctaButtonText="Request Free Sample"
    />
  )
}

export default BabyFoodPage
