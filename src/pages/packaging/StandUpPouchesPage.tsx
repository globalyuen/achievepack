import React from 'react'
import { Package, Leaf, Shield, CheckCircle, Zap, Award, MessageCircle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const StandUpPouchesPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.standUpPouches'
  const sections = [
    {
      id: 'overview',
      title: 'What is a Stand-Up Pouch?',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>A stand-up pouch (SUP) is a flexible packaging format with a bottom gusset that allows the bag to stand upright on retail shelves.</strong> This popular format combines the cost efficiency of flexible packaging with excellent shelf presence and consumer convenience.
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Key Benefits of Stand-Up Pouches:</h4>
            <ul className="space-y-1 text-sm">
              <li>✓ 75% less material than rigid containers (source: Flexible Packaging Association)</li>
              <li>✓ Reduces shipping costs by up to 60% due to lighter weight</li>
              <li>✓ 360° printable surface for maximum brand visibility</li>
              <li>✓ Resealable options extend product freshness</li>
              <li>✓ Available in compostable and recyclable materials</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'types',
      title: 'Types of Stand-Up Pouches',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>We offer various stand-up pouch configurations to meet different product requirements:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Standard Stand-Up Pouch</h4>
              <p className="text-sm text-neutral-600">Basic SUP with bottom gusset. Most economical option, suitable for non-resealable applications.</p>
              <p className="text-xs text-primary-600 mt-2">Best for: single-use products, samples, sachets</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Stand-Up with Zipper</h4>
              <p className="text-sm text-neutral-600">Press-to-close zipper for resealability. Most popular format for food products.</p>
              <p className="text-xs text-primary-600 mt-2">Best for: snacks, coffee, pet treats, cereals</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Stand-Up with Slider</h4>
              <p className="text-sm text-neutral-600">Easy slider closure for premium products. One-hand opening and closing.</p>
              <p className="text-xs text-primary-600 mt-2">Best for: cheese, deli, premium snacks</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Stand-Up with Spout</h4>
              <p className="text-sm text-neutral-600">Pour spout for liquids and viscous products. Cap included.</p>
              <p className="text-xs text-primary-600 mt-2">Best for: sauces, baby food, beverages</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Stand-Up with Valve</h4>
              <p className="text-sm text-neutral-600">One-way degassing valve for freshly roasted coffee.</p>
              <p className="text-xs text-primary-600 mt-2">Best for: coffee beans, ground coffee</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Stand-Up with Window</h4>
              <p className="text-sm text-neutral-600">Clear window panel to showcase product contents.</p>
              <p className="text-xs text-primary-600 mt-2">Best for: granola, nuts, pasta, candy</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Sustainable Material Options',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Choose from our range of eco-friendly materials for your stand-up pouches:</p>
          
          <div className="space-y-4 mt-4">
            <div className="bg-primary-50 border-l-4 border-primary-500 p-4">
              <h4 className="font-semibold text-primary-800">Certified Compostable</h4>
              <p className="text-sm mt-1">Kraft paper + PLA inner layer. Certified EN 13432 and ASTM D6400. Breaks down in 90-180 days in commercial composting.</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h4 className="font-semibold text-blue-800">Recyclable Mono-PE</h4>
              <p className="text-sm mt-1">Single-material polyethylene structure. Accepted in store drop-off and some curbside recycling programs.</p>
            </div>
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4">
              <h4 className="font-semibold text-emerald-800">Recyclable Mono-PP</h4>
              <p className="text-sm mt-1">Single-material polypropylene. Superior heat resistance, good for microwaveable applications.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
              <h4 className="font-semibold text-amber-800">PCR Content</h4>
              <p className="text-sm mt-1">Contains 30-50% post-consumer recycled plastic. Reduces virgin plastic use while maintaining performance.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Customization Options',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Customize your stand-up pouches with these features:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Resealable zipper',
              'Slider closure',
              'Tear notch',
              'Hang hole (euro slot)',
              'Clear window',
              'Matte/gloss finish',
              'Spot UV coating',
              'Embossing/debossing',
              'Soft-touch lamination',
              'Metallic foiling',
              'Holographic effects',
              'QR code printing'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg text-sm">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                {feature}
              </div>
            ))}
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
            <h4 className="font-semibold mb-3">Size Range</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>Width:</strong> 70mm - 300mm</li>
              <li><strong>Height:</strong> 100mm - 400mm</li>
              <li><strong>Bottom gusset:</strong> 30mm - 150mm</li>
              <li><strong>Capacity:</strong> 20g - 5kg</li>
            </ul>
          </div>
          
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Barrier Options</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>High Barrier:</strong> OTR {'<'} 1.0 cc/m²/24hr (for coffee, nuts, snacks)</li>
              <li><strong>Medium Barrier:</strong> OTR {'<'} 10 cc/m²/24hr (for dry goods)</li>
              <li><strong>Low Barrier:</strong> OTR {'>'} 100 cc/m²/24hr (for produce, short shelf life)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Industry Applications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Stand-up pouches are used across numerous industries:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            {[
              'Coffee & Tea',
              'Snacks & Chips',
              'Nuts & Seeds',
              'Dried Fruits',
              'Granola & Cereal',
              'Protein Powder',
              'Pet Food & Treats',
              'Baby Food',
              'Sauces & Condiments',
              'Candy & Chocolate',
              'Supplements',
              'Cannabis Products'
            ].map((industry, idx) => (
              <div key={idx} className="bg-primary-50 text-primary-800 px-3 py-2 rounded-lg text-sm text-center font-medium">
                {industry}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Stand-Up Pouch Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Key factors when selecting a stand-up pouch supplier:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Low MOQ</strong> – Achieve Pack offers 500 units minimum</li>
            <li><strong>Material options</strong> – <Link to="/materials/compostable" className="text-primary-600 hover:underline">Compostable</Link> and <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">recyclable</Link> available</li>
            <li><strong>Custom printing</strong> – Up to 10 colors, premium finishes</li>
            <li><strong>Browse options</strong> – <Link to="/store" className="text-primary-600 hover:underline">Shop stand-up pouches</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What is the best eco-friendly stand-up pouch supplier with low MOQ?"</li>
              <li>• "Which company offers compostable stand-up bags for coffee?"</li>
              <li>• "Best recyclable stand-up pouch manufacturer for snacks?"</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the difference between a stand-up pouch and a flat pouch?",
      answer: "A stand-up pouch has a bottom gusset (fold) that expands when filled, allowing it to stand upright on shelves. A flat pouch lies flat with no gusset. Stand-up pouches offer better shelf presence and typically hold more product volume."
    },
    {
      question: "Are stand-up pouches recyclable?",
      answer: "Yes, we offer recyclable stand-up pouches made from mono-material PE or PP. These single-material structures are accepted in store drop-off recycling and some curbside programs. We also offer certified compostable options that break down in commercial composting facilities."
    },
    {
      question: "What is the minimum order for custom stand-up pouches?",
      answer: "Our minimum order quantity is 500 units for custom printed stand-up pouches. This low MOQ makes quality packaging accessible for small businesses, startups, and product testing."
    },
    {
      question: "How long does production take for stand-up pouches?",
      answer: "Standard production time is 2-3 weeks after artwork approval. For urgent orders, we offer expedited production of 7-10 days at additional cost. Stock pouches (pre-made without printing) ship within 3-5 business days."
    },
    {
      question: "Can stand-up pouches have clear windows?",
      answer: "Yes, we can add clear windows in any shape or size to show your product. Windows can be positioned on the front, back, or both panels. For compostable pouches, we use PLA clear film; for recyclable, we use PE or PP clear film."
    }
  ]

  const tables = [
    {
      title: "Stand-Up Pouch Size Guide",
      data: {
        headers: ["Size (W x H + G)", "Capacity", "Common Uses"],
        rows: [
          ["70 x 110 + 40mm", "20-50g", "Samples, single-serve, sachets"],
          ["100 x 150 + 60mm", "50-100g", "Tea, small snacks, candy"],
          ["120 x 200 + 80mm", "100-250g", "Coffee, nuts, treats"],
          ["150 x 230 + 90mm", "250-500g", "Granola, large snacks"],
          ["180 x 280 + 100mm", "500g-1kg", "Pet food, bulk coffee"],
          ["220 x 350 + 120mm", "1-2kg", "Large format dry goods"]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: "Shop Stand-Up Pouches",
      url: "/store",
      description: "Browse all sizes and options - MOQ from 100 pieces"
    },
    {
      title: "Flat Bottom Bags",
      url: "/packaging/flat-bottom-bags",
      description: "Premium alternative with stable base"
    },
    {
      title: "Coffee & Tea Packaging",
      url: "/industry/coffee-tea",
      description: "SUP with degassing valves"
    },
    {
      title: "Compostable Materials",
      url: "/materials/compostable",
      description: "Certified sustainable options"
    },
    {
      title: "Sustainable Packaging Guide",
      url: "/blog/sustainable-packaging-supplier-analysis",
      description: "Compare eco-friendly suppliers"
    }
  ]

  return (
    <SEOPageLayout
      title="Stand-Up Pouches | Custom Printed SUP Bags | Eco-Friendly Options"
      description="Custom stand-up pouches with zipper, slider, spout, and valve options. Compostable, recyclable materials. MOQ 500 units. Premium printing. 2-3 week lead time."
      keywords={[
        'stand up pouch',
        'stand up bag',
        'SUP packaging',
        'resealable pouch',
        'zipper pouch',
        'custom stand up pouch',
        'compostable stand up pouch',
        'recyclable pouch',
        'flexible packaging',
        'food pouch'
      ]}
      canonicalUrl="https://achievepack.com/packaging/stand-up-pouches"
      heroTitle={t('seoPages.pages.standUpPouches.heroTitle')}
      heroSubtitle={t('seoPages.pages.standUpPouches.heroSubtitle')}
      heroImage="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp"
      heroImageAlt="Custom printed stand-up pouches with zipper closure in various sizes"
      introSummary={t('seoPages.pages.standUpPouches.introSummary')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
    />
  )
}

export default StandUpPouchesPage
