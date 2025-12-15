import React from 'react'
import { Package, Leaf, CheckCircle, Award, BoxSelect } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const FlatBottomBagsPage: React.FC = () => {
  const { t } = useTranslation()
  const sections = [
    {
      id: 'overview',
      title: 'What is a Flat Bottom Bag?',
      icon: <BoxSelect className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>A flat bottom bag (also called box bottom pouch or block bottom bag) features a rectangular base that allows it to stand upright with maximum stability.</strong> This premium format offers superior shelf presence and capacity compared to standard stand-up pouches.
          </p>
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Key Benefits:</h4>
            <ul className="space-y-1 text-sm">
              <li>✓ 5-panel construction for maximum branding surface</li>
              <li>✓ Stable, box-like shelf presence</li>
              <li>✓ Higher capacity than standard pouches</li>
              <li>✓ Premium appearance for specialty products</li>
              <li>✓ Available in compostable and recyclable materials</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'construction',
      title: 'Bag Construction',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Flat bottom bags are constructed with multiple panels that fold to create a rectangular base:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">5-Panel Design</h4>
              <ul className="text-sm space-y-1">
                <li>• Front panel – Main branding area</li>
                <li>• Back panel – Ingredients, instructions</li>
                <li>• 2 Side gussets – Additional branding space</li>
                <li>• Bottom panel – Stable base, can include print</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Closure Options</h4>
              <ul className="text-sm space-y-1">
                <li>• Resealable zipper (press-to-close or slider)</li>
                <li>• Tin tie closure</li>
                <li>• Degassing valve (for coffee)</li>
                <li>• Tear notch for easy opening</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Common Applications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Flat bottom bags are ideal for premium products that benefit from enhanced shelf presence:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            {['Specialty coffee', 'Premium tea', 'Pet food & treats', 'Protein powder', 'Granola & muesli', 'Dried fruits', 'Premium nuts', 'Rice & grains', 'Organic snacks', 'Artisan products', 'Superfoods', 'Gift packaging'].map((item, idx) => (
              <div key={idx} className="bg-primary-50 text-primary-800 px-3 py-2 rounded-lg text-sm text-center font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Material Options',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Compostable</h4>
              <p className="text-sm">Kraft paper + PLA. EN 13432 certified for industrial composting.</p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Recyclable</h4>
              <p className="text-sm">Mono-PE or paper-based structures for curbside recycling.</p>
            </div>
            <div className="border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">High Barrier</h4>
              <p className="text-sm">Metallized or aluminum for maximum freshness protection.</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the difference between flat bottom and stand-up pouches?",
      answer: "Flat bottom bags have a rectangular base with 5 printable panels, offering more stability and capacity. Stand-up pouches have an oval gusset with 2-3 panels. Flat bottom bags provide approximately 15-20% more volume for the same footprint."
    },
    {
      question: "Are flat bottom bags more expensive?",
      answer: "Yes, flat bottom bags typically cost 15-25% more than stand-up pouches due to more complex construction. However, they offer premium shelf presence and additional branding real estate that often justifies the investment for specialty products."
    },
    {
      question: "What sizes are available for flat bottom bags?",
      answer: "We offer flat bottom bags from 100g capacity up to 5kg. Common sizes include 250g, 500g, 1kg, and 2kg. Custom sizes are available for orders over 5,000 units."
    },
    {
      question: "Can flat bottom bags have a degassing valve?",
      answer: "Yes, we offer one-way degassing valves for coffee and other products that release CO2. The valve can be placed on any panel but is typically on the back for aesthetic reasons."
    }
  ]

  const tables = [
    {
      title: "Flat Bottom Bag Size Guide",
      data: {
        headers: ["Capacity", "Dimensions (W×H×G)", "Recommended For"],
        rows: [
          ["250g", "120 × 200 × 80mm", "Premium tea, specialty coffee"],
          ["500g", "140 × 240 × 90mm", "Coffee beans, granola"],
          ["1kg", "160 × 280 × 100mm", "Pet food, protein powder"],
          ["2kg", "200 × 350 × 120mm", "Bulk pet food, rice"],
          ["5kg", "280 × 450 × 150mm", "Large format pet food"]
        ]
      }
    }
  ]

  const relatedLinks = [
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "More economical alternative" },
    { title: "Coffee & Tea Packaging", url: "/industry/coffee-tea", description: "Specialty coffee solutions" },
    { title: "Compostable Materials", url: "/materials/compostable", description: "Eco-friendly options" }
  ]

  return (
    <SEOPageLayout
      title="Flat Bottom Bags | Box Bottom Pouches | Block Bottom Packaging"
      description="Custom flat bottom bags (box bottom pouches) for coffee, pet food, and premium products. 5-panel printing, stable base. Compostable & recyclable options. MOQ 500."
      keywords={[
        'flat bottom bag',
        'box bottom pouch',
        'block bottom bag',
        'coffee bag flat bottom',
        'premium pouch packaging',
        'flat bottom coffee bag',
        'box pouch',
        '5 panel pouch'
      ]}
      canonicalUrl="https://achievepack.com/packaging/flat-bottom-bags"
      heroTitle={t('seoPages.pages.flatBottomBags.heroTitle')}
      heroSubtitle={t('seoPages.pages.flatBottomBags.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp"
      heroImageAlt="Flat bottom bag box pouch packaging"
      introSummary={t('seoPages.pages.flatBottomBags.introSummary')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle="Get Custom Flat Bottom Bags"
      ctaDescription="Request a free sample and quote for your premium products."
      ctaButtonText="Request Free Quote"
    />
  )
}

export default FlatBottomBagsPage
