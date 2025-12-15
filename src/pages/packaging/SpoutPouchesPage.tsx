import React from 'react'
import { Droplets, Package, CheckCircle, Shield, Settings } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const SpoutPouchesPage: React.FC = () => {
  const { t } = useTranslation()
  const sections = [
    {
      id: 'overview',
      title: 'What is a Spout Pouch?',
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>A spout pouch is a flexible stand-up pouch with a built-in pour spout and cap, designed for liquids, semi-liquids, and viscous products.</strong> This format combines the cost efficiency of flexible packaging with the functionality of rigid containers.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">Key Advantages:</h4>
            <ul className="space-y-1 text-sm">
              <li>✓ Easy dispensing with reclosable cap</li>
              <li>✓ Uses 70% less plastic than rigid bottles</li>
              <li>✓ Self-standing for retail display</li>
              <li>✓ Lightweight, reduced shipping costs</li>
              <li>✓ High-barrier options available</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Common Applications',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Spout pouches are ideal for pourable products across many industries:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-2">Baby Food</h4>
              <ul className="text-sm space-y-1 text-pink-700">
                <li>• Fruit purées</li>
                <li>• Vegetable blends</li>
                <li>• Yogurt smoothies</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Sauces & Condiments</h4>
              <ul className="text-sm space-y-1 text-red-700">
                <li>• Ketchup & mayo</li>
                <li>• Hot sauce</li>
                <li>• Dressings</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Beverages</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• Smoothie packs</li>
                <li>• Cold brew coffee</li>
                <li>• Cocktail mixes</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Oils & Spreads</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>• Cooking oils</li>
                <li>• Honey & syrups</li>
                <li>• Ghee</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Pet Food</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                <li>• Wet food toppers</li>
                <li>• Gravy & broths</li>
                <li>• Pet supplements</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Non-Food</h4>
              <ul className="text-sm space-y-1 text-blue-700">
                <li>• Laundry detergent</li>
                <li>• Hand soap refills</li>
                <li>• Cleaning products</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'spout-options',
      title: 'Spout & Cap Options',
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Spout Sizes</h4>
              <ul className="text-sm space-y-1">
                <li>• <strong>8.6mm</strong> – Standard for liquids</li>
                <li>• <strong>10mm</strong> – Thicker liquids, purees</li>
                <li>• <strong>15mm</strong> – Viscous products</li>
                <li>• <strong>22mm</strong> – High viscosity, pastes</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Cap Features</h4>
              <ul className="text-sm space-y-1">
                <li>• Standard screw cap</li>
                <li>• Flip-top dispensing cap</li>
                <li>• Child-resistant (baby food)</li>
                <li>• Tamper-evident bands</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: 'Technical Specifications',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>Material:</strong> PET/AL/PE, PET/PE, or specialized structures</li>
              <li>✓ <strong>Capacity range:</strong> 50ml to 2L</li>
              <li>✓ <strong>Spout position:</strong> Top center, corner, or side</li>
              <li>✓ <strong>Hot-fill capable:</strong> Up to 85°C</li>
              <li>✓ <strong>Retort capable:</strong> Special structures for 121°C</li>
              <li>✓ <strong>FDA/EU compliant</strong> for food contact</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What products are spout pouches used for?",
      answer: "Spout pouches are ideal for liquids, semi-liquids, and viscous products including baby food purées, sauces, condiments, beverages, smoothie packs, cooking oils, honey, soups, and pet food toppers. They're also popular for non-food applications like detergent refills."
    },
    {
      question: "Are spout pouches recyclable?",
      answer: "Standard multi-material spout pouches are challenging to recycle in most municipal systems. However, we offer mono-PE spout pouches that are recyclable in PE recycling streams. The cap should be removed before recycling."
    },
    {
      question: "Can spout pouches be used for hot products?",
      answer: "Yes, we offer hot-fill spout pouches suitable for filling at up to 85°C. For sterilized, shelf-stable products, we provide retort-capable pouches that withstand 121°C processing."
    },
    {
      question: "What is the minimum order for spout pouches?",
      answer: "Our minimum order for custom printed spout pouches is 1,000 units. For plain pouches with standard caps, we can offer smaller quantities of 500 units."
    }
  ]

  const tables = [
    {
      title: "Spout Pouch Size Guide",
      data: {
        headers: ["Capacity", "Dimensions", "Typical Use"],
        rows: [
          ["90-100ml", "100 × 150mm", "Baby food single serve"],
          ["150ml", "110 × 170mm", "Baby food, smoothie"],
          ["250ml", "130 × 200mm", "Sauces, beverages"],
          ["500ml", "160 × 250mm", "Cooking oil, refills"],
          ["1L", "200 × 300mm", "Large format refills"],
          ["2L", "250 × 350mm", "Bulk refills, foodservice"]
        ]
      }
    }
  ]

  const relatedLinks = [
    { title: "Baby Food Packaging", url: "/industry/baby-food", description: "Safe packaging for infant nutrition" },
    { title: "Sauces & Condiments", url: "/industry/sauces-condiments", description: "Liquid food packaging solutions" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Alternative for dry products" }
  ]

  return (
    <SEOPageLayout
      title="Spout Pouches | Liquid Packaging | Pour Spout Bags"
      description="Custom spout pouches for liquids, baby food, sauces, and beverages. Resealable caps, multiple spout sizes. Hot-fill and retort capable. MOQ 500 units."
      keywords={[
        'spout pouch',
        'liquid pouch',
        'pour spout bag',
        'baby food pouch',
        'sauce pouch',
        'beverage pouch',
        'spouted pouch',
        'liquid packaging bag'
      ]}
      canonicalUrl="https://achievepack.com/packaging/spout-pouches"
      heroTitle={t('seoPages.pages.spoutPouches.heroTitle')}
      heroSubtitle={t('seoPages.pages.spoutPouches.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_food_grade_olive_stone_pouch_achieve_pack_8628145.webp"
      heroImageAlt="Spout pouch packaging for liquids"
      introSummary={t('seoPages.pages.spoutPouches.introSummary')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle="Get Custom Spout Pouches"
      ctaDescription="Request a free sample and quote for your liquid products."
      ctaButtonText="Request Free Quote"
    />
  )
}

export default SpoutPouchesPage
