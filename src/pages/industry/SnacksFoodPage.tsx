import React from 'react'
import { Package, Leaf, Shield, CheckCircle, Zap } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const SnacksFoodPage: React.FC = () => {
  const { t } = useTranslation()
  const sections = [
    {
      id: 'overview',
      title: 'Snacks & Food Packaging Solutions',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack delivers premium flexible packaging for snacks, confectionery, dried foods, and ready-to-eat products.</strong> Our eco-friendly pouches combine superior barrier protection with sustainable materials, helping food brands reduce environmental impact while maintaining product freshness and shelf life.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Why Choose Our Snack Packaging:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Extended shelf life</strong> – High-barrier materials protect against moisture, oxygen, and UV light</li>
            <li><strong>Resealable options</strong> – Press-to-close zippers and slider closures for consumer convenience</li>
            <li><strong>Grease-resistant layers</strong> – Ideal for chips, nuts, and oil-containing products</li>
            <li><strong>Vibrant printing</strong> – Up to 10-color gravure printing for eye-catching shelf presence</li>
            <li><strong>Sustainable materials</strong> – Compostable, recyclable, and PCR (post-consumer recycled) options</li>
          </ul>
        </div>
      )
    },
    {
      id: 'products',
      title: 'Food Products We Package',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our flexible packaging solutions serve the entire food industry spectrum:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Snacks & Chips</h4>
              <ul className="text-sm space-y-1 text-orange-700">
                <li>• Potato chips & crisps</li>
                <li>• Corn chips & tortillas</li>
                <li>• Vegetable chips</li>
                <li>• Puffs & extruded snacks</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Nuts & Seeds</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>• Almonds & mixed nuts</li>
                <li>• Trail mix</li>
                <li>• Roasted seeds</li>
                <li>• Nut butters</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Meat Snacks</h4>
              <ul className="text-sm space-y-1 text-red-700">
                <li>• Beef jerky</li>
                <li>• Meat sticks</li>
                <li>• Dried meat</li>
                <li>• Biltong</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Dried Fruits</h4>
              <ul className="text-sm space-y-1 text-yellow-700">
                <li>• Raisins & dried mango</li>
                <li>• Banana chips</li>
                <li>• Freeze-dried fruits</li>
                <li>• Fruit leather</li>
              </ul>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-2">Confectionery</h4>
              <ul className="text-sm space-y-1 text-pink-700">
                <li>• Chocolates & pralines</li>
                <li>• Gummies & candy</li>
                <li>• Cookies & biscuits</li>
                <li>• Energy bars</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Breakfast & Cereals</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• Granola & muesli</li>
                <li>• Breakfast cereals</li>
                <li>• Oatmeal packets</li>
                <li>• Protein oats</li>
              </ul>
            </div>
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
          <p>Choose the right sustainable material for your snack product:</p>
          
          <div className="space-y-4 mt-4">
            <div className="border border-primary-200 rounded-lg p-4">
              <h4 className="font-semibold text-primary-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                Certified Compostable (EN 13432 / ASTM D6400)
              </h4>
              <p className="text-sm mt-2">Paper/PLA structure breaks down in commercial composting. Best for: organic snacks, health food brands, farmers market products.</p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Recyclable Mono-PE / Mono-PP
              </h4>
              <p className="text-sm mt-2">Single-material structure accepted in curbside recycling. Best for: high-barrier requirements, grease-resistant applications.</p>
            </div>
            <div className="border border-emerald-200 rounded-lg p-4">
              <h4 className="font-semibold text-emerald-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                PCR Content (Post-Consumer Recycled)
              </h4>
              <p className="text-sm mt-2">Contains 30-50% recycled plastic content. Best for: brands targeting circular economy, corporate sustainability goals.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Packaging Features',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Customize your snack packaging with these functional features:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {[
              { name: 'Resealable Zipper', desc: 'Press-to-close for freshness' },
              { name: 'Tear Notch', desc: 'Easy opening without scissors' },
              { name: 'Hang Hole', desc: 'Retail display ready' },
              { name: 'Clear Window', desc: 'Show product inside' },
              { name: 'Matte/Gloss Finish', desc: 'Premium look and feel' },
              { name: 'Spot UV', desc: 'Highlight logo/elements' },
              { name: 'Embossing', desc: 'Tactile brand experience' },
              { name: 'QR Code', desc: 'Link to digital content' }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-neutral-50 p-3 rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-neutral-900">{feature.name}</div>
                  <div className="text-sm text-neutral-600">{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'compliance',
      title: 'Food Safety & Compliance',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>All our food packaging materials meet strict international safety standards:</p>
          
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Certifications & Standards</h4>
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>FDA 21 CFR</strong> – US Food Contact Materials compliance</li>
              <li>✓ <strong>EU 10/2011</strong> – European food contact regulation</li>
              <li>✓ <strong>BRC/IFS</strong> – Certified production facility</li>
              <li>✓ <strong>ISO 22000</strong> – Food safety management</li>
              <li>✓ <strong>SGS Testing</strong> – Migration and safety testing available</li>
            </ul>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            We provide Certificates of Conformity (COC) and food safety documentation with every order. Our production facilities undergo regular third-party audits.
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the best packaging for potato chips and snacks?",
      answer: "For chips and crispy snacks, we recommend nitrogen-flush compatible pouches with high oxygen barrier properties. Our metallized films or EVOH-layered pouches provide OTR (oxygen transmission rate) below 1.0 cc/m²/24hr, keeping snacks crispy for 6-12 months."
    },
    {
      question: "Can snack packaging be compostable?",
      answer: "Yes, we offer certified compostable snack packaging using kraft paper + PLA structures. These are best suited for dry snacks without high oil content. For greasy snacks like chips, we recommend recyclable mono-PE with grease barriers."
    },
    {
      question: "What is the minimum order for custom printed snack bags?",
      answer: "Our minimum order quantity is 500 units for custom printed pouches. This makes sustainable packaging accessible for small batch producers, startup brands, and artisan food makers."
    },
    {
      question: "Do you offer child-resistant packaging for edibles?",
      answer: "Yes, we can provide child-resistant closure options for cannabis edibles and other regulated products. These meet ASTM D3475 and 16 CFR 1700.20 standards for child-resistant packaging."
    },
    {
      question: "How long is the shelf life with your snack packaging?",
      answer: "Shelf life varies by product type: chips and dry snacks typically achieve 6-12 months; nuts and seeds 12-18 months; jerky and dried meats 12+ months. We can customize barrier properties based on your specific shelf life requirements."
    }
  ]

  const tables = [
    {
      title: "Snack Packaging Size Guide",
      data: {
        headers: ["Product Type", "Recommended Size", "Capacity", "Format"],
        rows: [
          ["Chips (single serve)", "100 x 150mm", "25-50g", "Pillow Pouch"],
          ["Chips (sharing size)", "180 x 250mm", "150-200g", "Stand-Up Zipper"],
          ["Nuts & Trail Mix", "120 x 200 + 80mm", "100-250g", "Stand-Up Pouch"],
          ["Jerky", "100 x 180mm", "50-100g", "3-Side Seal"],
          ["Granola", "150 x 230 + 90mm", "300-500g", "Stand-Up Zipper"],
          ["Candy/Gummies", "80 x 120mm", "50-100g", "Stand-Up Pouch"]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: "Stand-Up Pouches",
      url: "/packaging/stand-up-pouches",
      description: "Most popular format for snack packaging"
    },
    {
      title: "Recyclable Materials",
      url: "/materials/recyclable",
      description: "Mono-PE and mono-PP options"
    },
    {
      title: "Pet Food Packaging",
      url: "/industry/pet-food",
      description: "Similar solutions for pet treats"
    }
  ]

  return (
    <SEOPageLayout
      title="Snacks & Food Packaging | Sustainable Pouches for Chips, Nuts & Confectionery"
      description="Eco-friendly flexible packaging for snacks, chips, nuts, jerky, and confectionery. Compostable, recyclable, and PCR options. High-barrier, resealable pouches. MOQ 500 units."
      keywords={[
        'snack packaging',
        'food pouch',
        'chip bags',
        'nut packaging',
        'jerky packaging',
        'candy bags',
        'sustainable snack packaging',
        'compostable food pouches',
        'recyclable food packaging',
        'custom snack bags',
        'flexible food packaging'
      ]}
      canonicalUrl="https://achievepack.com/industry/snacks-food"
      heroTitle={t('seoPages.pages.snacksFood.heroTitle')}
      heroSubtitle={t('seoPages.pages.snacksFood.heroSubtitle')}
      heroImage="/imgs/products/snack-pouch-hero.webp"
      heroImageAlt="Eco-friendly snack packaging stand-up pouches with various snacks"
      introSummary={t('seoPages.pages.snacksFood.introSummary')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle="Get Custom Snack Packaging"
      ctaDescription="Request a free sample and quote for your snack brand. Our experts will recommend the best sustainable solution."
      ctaButtonText="Request Free Sample"
    />
  )
}

export default SnacksFoodPage
