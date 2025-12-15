import React from 'react'
import { Package, CheckCircle, Layers, Shield } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const SideGussetBagsPage: React.FC = () => {
  const { t } = useTranslation()
  const sections = [
    {
      id: 'overview',
      title: 'What is a Side Gusset Bag?',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>A side gusset bag (also called quad seal bag) features expandable side panels that provide high capacity while maintaining a compact footprint.</strong> This traditional bag format is popular for coffee, tea, and bulk products.
          </p>
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Key Characteristics:</h4>
            <ul className="space-y-1 text-sm">
              <li>✓ Expandable side gussets for high volume</li>
              <li>✓ Quad seal construction (4 seams)</li>
              <li>✓ Compact when empty, expands when filled</li>
              <li>✓ Traditional coffee bag appearance</li>
              <li>✓ Multiple closure options available</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'construction',
      title: 'Bag Construction',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Panel Structure</h4>
              <ul className="text-sm space-y-1">
                <li>• Front panel – Main branding</li>
                <li>• Back panel – Information</li>
                <li>• 2 Side gussets – Expand for volume</li>
                <li>• Top/bottom seals</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Closure Options</h4>
              <ul className="text-sm space-y-1">
                <li>• Tin tie (fold-over with wire)</li>
                <li>• Heat seal (permanent)</li>
                <li>• Resealable zipper</li>
                <li>• Fold-over with label</li>
              </ul>
            </div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            {[
              'Coffee beans',
              'Ground coffee',
              'Loose leaf tea',
              'Rice & grains',
              'Flour & baking',
              'Pet food',
              'Bird seed',
              'Dried pasta',
              'Nuts & seeds',
              'Dried fruit',
              'Cookies & biscuits',
              'Bulk spices'
            ].map((item, idx) => (
              <div key={idx} className="bg-primary-50 text-primary-800 px-3 py-2 rounded-lg text-sm text-center font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Additional Features',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Degassing Valve</h4>
              <p className="text-sm">One-way valve for freshly roasted coffee. Releases CO2 without letting oxygen in.</p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Clear Window</h4>
              <p className="text-sm">Show product contents. Available in various shapes and positions.</p>
            </div>
            <div className="border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Hang Hole</h4>
              <p className="text-sm">Euro slot or round hole for retail display hanging.</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the difference between side gusset and flat bottom bags?",
      answer: "Side gusset bags have expandable side panels and lay relatively flat, while flat bottom bags have a rigid rectangular base for superior standing stability. Flat bottom bags offer more shelf presence but cost more. Side gusset bags are more traditional for coffee and offer good capacity."
    },
    {
      question: "Are side gusset bags suitable for automatic filling?",
      answer: "Yes, side gusset bags work well with VFFS (vertical form fill seal) machines. We can supply bags pre-made or as roll stock film for automatic packaging lines."
    },
    {
      question: "What sizes are available?",
      answer: "Side gusset bags are available from 100g to 5kg capacity. Common sizes are 250g, 500g, 1kg, and 2.5kg. Custom sizes available for orders over 5,000 units."
    }
  ]

  const tables = [
    {
      title: "Side Gusset Bag Size Guide",
      data: {
        headers: ["Capacity", "Dimensions (W×H×G)", "Common Use"],
        rows: [
          ["250g", "100 × 280 × 60mm", "Retail coffee, tea"],
          ["500g", "120 × 320 × 70mm", "Coffee beans, dried fruit"],
          ["1kg", "140 × 380 × 80mm", "Pet food, rice"],
          ["2.5kg", "180 × 450 × 100mm", "Bulk products"],
          ["5kg", "220 × 550 × 120mm", "Large format pet food"]
        ]
      }
    }
  ]

  const relatedLinks = [
    { title: "Flat Bottom Bags", url: "/packaging/flat-bottom-bags", description: "Premium alternative with better stability" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Popular modern format" },
    { title: "Coffee & Tea", url: "/industry/coffee-tea", description: "Specialty coffee solutions" }
  ]

  return (
    <SEOPageLayout
      title="Side Gusset Bags | Quad Seal Bags | Coffee Bags"
      description="Custom side gusset bags (quad seal) for coffee, tea, and bulk products. Expandable gussets for high capacity. Tin tie, zipper, and valve options. MOQ 500."
      keywords={[
        'side gusset bag',
        'quad seal bag',
        'coffee bag gusset',
        'gusseted pouch',
        'side fold bag',
        'tin tie coffee bag',
        'bulk food bag'
      ]}
      canonicalUrl="https://achievepack.com/packaging/side-gusset-bags"
      heroTitle={t('seoPages.pages.sideGussetBags.heroTitle')}
      heroSubtitle={t('seoPages.pages.sideGussetBags.heroSubtitle')}
      heroImage="/imgs/product-hero-pouch.webp"
      heroImageAlt="Side gusset coffee bag packaging"
      introSummary={t('seoPages.pages.sideGussetBags.introSummary')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle="Get Custom Side Gusset Bags"
      ctaDescription="Request a free sample and quote for your bulk products."
      ctaButtonText="Request Free Quote"
    />
  )
}

export default SideGussetBagsPage
