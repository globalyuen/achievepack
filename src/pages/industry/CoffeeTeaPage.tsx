import React from 'react'
import { Package, Leaf, Shield, Clock, CheckCircle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const CoffeeTeaPage: React.FC = () => {
  const { t } = useTranslation()
  const sections = [
    {
      id: 'overview',
      title: 'Coffee & Tea Packaging Solutions',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack specializes in premium eco-friendly packaging for coffee beans, ground coffee, loose-leaf tea, and tea sachets.</strong> Our certified compostable and recyclable pouches maintain freshness while supporting your brand's sustainability goals.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Key Features for Coffee & Tea Packaging:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>One-way degassing valves</strong> – Essential for freshly roasted coffee to release CO2 without letting oxygen in</li>
            <li><strong>High-barrier materials</strong> – Protect against moisture, oxygen, and light to preserve aroma and flavor</li>
            <li><strong>Resealable zippers</strong> – Maintain freshness after opening with easy-close functionality</li>
            <li><strong>Custom printing</strong> – Full-color gravure printing for premium brand presentation</li>
            <li><strong>Multiple formats</strong> – Stand-up pouches, flat bottom bags, side gusset bags, and drip bag packaging</li>
          </ul>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Sustainable Material Options',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Choose from our range of eco-friendly materials designed specifically for coffee and tea preservation:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">Certified Compostable</h4>
              <ul className="text-sm space-y-1">
                <li>• Kraft paper + PLA film (EN 13432 certified)</li>
                <li>• Breaks down in 90-180 days in commercial composting</li>
                <li>• Ideal for premium specialty coffee brands</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Recyclable Mono-PE</h4>
              <ul className="text-sm space-y-1">
                <li>• Single-material polyethylene structure</li>
                <li>• Accepted in standard recycling streams</li>
                <li>• High barrier properties maintained</li>
              </ul>
            </div>
          </div>
          
          <p className="mt-4">
            According to the <a href="https://www.sustainablepackaging.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Sustainable Packaging Coalition</a>, the coffee packaging market is expected to grow to $5.2 billion by 2027, with sustainable packaging driving 40% of that growth.
          </p>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Product Applications',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our coffee and tea packaging solutions serve a wide range of products:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Whole Coffee Beans',
              'Ground Coffee',
              'Coffee Capsule Refills',
              'Drip Coffee Bags',
              'Cold Brew Packs',
              'Loose-Leaf Tea',
              'Tea Sachets',
              'Matcha Powder',
              'Herbal Infusions',
              'Chai Blends',
              'Instant Coffee',
              'Coffee Alternatives'
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
      id: 'specifications',
      title: 'Technical Specifications',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our coffee and tea pouches meet rigorous quality standards:</p>
          
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Barrier Performance</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>Oxygen Transmission Rate (OTR):</strong> {'<'} 1.0 cc/m²/24hr</li>
              <li><strong>Moisture Vapor Transmission Rate (MVTR):</strong> {'<'} 2.0 g/m²/24hr</li>
              <li><strong>Shelf Life Extension:</strong> 12-18 months for sealed products</li>
            </ul>
          </div>
          
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-3">Certifications</h4>
            <ul className="space-y-2 text-sm">
              <li>✓ EN 13432 (European Compostability Standard)</li>
              <li>✓ ASTM D6400 (US Compostability Standard)</li>
              <li>✓ FDA Food Contact Approved</li>
              <li>✓ BRC/IFS Certified Production Facility</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'moq',
      title: 'Order Information',
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Achieve Pack offers flexible ordering options for businesses of all sizes:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500</div>
              <div className="text-sm text-neutral-600">Minimum Order Quantity</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">2-3</div>
              <div className="text-sm text-neutral-600">Weeks Lead Time</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-sm text-neutral-600">Years Experience</div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the best packaging for freshly roasted coffee?",
      answer: "For freshly roasted coffee, we recommend our stand-up pouches with one-way degassing valves. The valve allows CO2 released during the degassing process (24-72 hours post-roasting) to escape without letting oxygen in, preserving freshness for up to 12 months when stored properly."
    },
    {
      question: "Are your coffee pouches truly compostable?",
      answer: "Yes, our kraft paper + PLA pouches are certified compostable under EN 13432 and ASTM D6400 standards. They break down within 90-180 days in commercial composting facilities. We provide certification documentation upon request for your sustainability claims."
    },
    {
      question: "What is the minimum order quantity for custom printed coffee bags?",
      answer: "Our minimum order quantity (MOQ) for custom printed coffee and tea pouches is 500 units. This low MOQ makes our sustainable packaging accessible for small roasters, artisan tea brands, and growing businesses."
    },
    {
      question: "Can you match Pantone colors for my brand?",
      answer: "Yes, we use high-quality gravure printing that can accurately reproduce Pantone colors. We recommend ordering a pre-production sample to verify color accuracy before full production. Color tolerance is typically ±10% for matte finishes and ±8% for gloss."
    },
    {
      question: "Do you offer degassing valves for all pouch types?",
      answer: "One-way degassing valves can be added to most pouch formats including stand-up pouches, flat bottom bags, and side gusset bags. The valve is heat-sealed to the interior and does not affect the exterior printing area."
    }
  ]

  const tables = [
    {
      title: "Coffee & Tea Pouch Size Guide",
      data: {
        headers: ["Product Type", "Recommended Size", "Capacity", "Common Format"],
        rows: [
          ["Coffee Beans (250g)", "140 x 200 + 80mm", "250-350g", "Stand-Up with Valve"],
          ["Coffee Beans (1kg)", "180 x 280 + 100mm", "1000-1200g", "Flat Bottom with Valve"],
          ["Ground Coffee", "120 x 180 + 70mm", "200-300g", "Stand-Up with Zipper"],
          ["Loose-Leaf Tea", "100 x 150 + 60mm", "50-100g", "Stand-Up Pouch"],
          ["Tea Sachets (Box)", "80 x 120mm", "10-20 sachets", "Pillow Pouch"],
          ["Matcha Powder", "90 x 130 + 50mm", "30-100g", "Stand-Up with Zipper"]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: "Stand-Up Pouches",
      url: "/packaging/stand-up-pouches",
      description: "Learn about our versatile stand-up pouch options"
    },
    {
      title: "Flat Bottom Bags",
      url: "/packaging/flat-bottom-bags",
      description: "Premium shelf presence for specialty coffee"
    },
    {
      title: "Compostable Materials",
      url: "/materials/compostable",
      description: "Explore our certified compostable options"
    },
    {
      title: "Get a Free Quote",
      url: "/#contact",
      description: "Request pricing for your coffee packaging project"
    }
  ]

  return (
    <SEOPageLayout
      title="Coffee & Tea Packaging | Eco-Friendly Pouches for Roasters & Tea Brands"
      description="Premium compostable and recyclable packaging for coffee beans, ground coffee, loose-leaf tea, and tea sachets. Low MOQ from 500 units. Degassing valves available. EN 13432 & FDA certified."
      keywords={[
        'coffee packaging',
        'tea packaging',
        'coffee pouch',
        'coffee bag with valve',
        'compostable coffee packaging',
        'sustainable tea packaging',
        'kraft coffee bags',
        'degassing valve pouch',
        'specialty coffee packaging',
        'loose leaf tea bags',
        'eco-friendly coffee packaging'
      ]}
      canonicalUrl="https://achievepack.com/industry/coffee-tea"
      heroTitle={t('seoPages.pages.coffeeTea.heroTitle')}
      heroSubtitle={t('seoPages.pages.coffeeTea.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp"
      heroImageAlt="Eco-friendly coffee packaging stand-up pouch with degassing valve"
      introSummary={t('seoPages.pages.coffeeTea.introSummary')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle="Get Custom Coffee Packaging"
      ctaDescription="Request a free sample and quote for your coffee or tea brand. Our packaging experts will help you choose the right materials and format."
      ctaButtonText="Request Free Sample"
    />
  )
}

export default CoffeeTeaPage
