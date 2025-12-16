import React from 'react'
import { Package, Leaf, Shield, CheckCircle, Heart } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const PetFoodPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.petFood'
  const sections = [
    {
      id: 'overview',
      title: 'Pet Food & Treats Packaging',
      icon: <Heart className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack provides premium sustainable packaging for dry pet food, treats, and supplements.</strong> Our eco-friendly pouches meet the unique demands of pet food packaging: durability, moisture barriers, odor control, and pet-safe materials.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Why Pet Brands Choose Us:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Heavy-duty construction</strong> – Thick films and reinforced seals handle dense kibble</li>
            <li><strong>Excellent barrier properties</strong> – Lock in freshness and prevent fat oxidation</li>
            <li><strong>Resealable closures</strong> – Sliders and press-to-close zippers for daily use</li>
            <li><strong>Pet-safe inks and materials</strong> – Food-contact approved, no harmful chemicals</li>
            <li><strong>Large format options</strong> – From single-serve treats to 10kg+ bulk bags</li>
          </ul>
        </div>
      )
    },
    {
      id: 'products',
      title: 'Pet Products We Package',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our flexible packaging serves the entire pet food and supplies market:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {[
              { category: 'Dry Pet Food', items: ['Dog kibble', 'Cat dry food', 'Small animal food', 'Bird seed'] },
              { category: 'Pet Treats', items: ['Training treats', 'Dental chews', 'Jerky treats', 'Freeze-dried treats'] },
              { category: 'Supplements', items: ['Joint support', 'Skin & coat', 'Digestive health', 'CBD pet products'] },
              { category: 'Raw & Fresh', items: ['Freeze-dried raw', 'Dehydrated meals', 'Bone broth powder', 'Meal toppers'] }
            ].map((cat, idx) => (
              <div key={idx} className="bg-neutral-50 p-4 rounded-lg">
                <h4 className="font-semibold text-neutral-800 mb-2">{cat.category}</h4>
                <ul className="text-sm space-y-1 text-neutral-600">
                  {cat.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Sustainable Pet Packaging',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            The global pet food packaging market is valued at <strong>$11.2 billion (2024)</strong>, with sustainable packaging growing at <strong>8.3% CAGR</strong> according to Grand View Research. Pet parents increasingly demand eco-friendly options for their furry friends.
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Our Sustainable Options:</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>Certified Compostable:</strong> Kraft/PLA pouches for premium natural pet brands</li>
              <li><strong>Recyclable Mono-PE:</strong> Single-material structure for curbside recycling</li>
              <li><strong>PCR Content:</strong> 30-50% post-consumer recycled plastic</li>
              <li><strong>Paper-Based:</strong> Minimal plastic, kraft-dominant construction</li>
            </ul>
          </div>
          
          <p className="text-sm mt-4">
            <strong>Source:</strong> <a href="https://www.grandviewresearch.com/industry-analysis/pet-food-packaging-market" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Grand View Research Pet Food Packaging Market Report 2024</a>
          </p>
        </div>
      )
    },
    {
      id: 'formats',
      title: 'Packaging Formats',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Choose the right format for your pet product:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Stand-Up Pouch</h4>
              <p className="text-sm text-neutral-600">Most popular for treats and small kibble bags. Great shelf presence, resealable options available.</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Flat Bottom Bag</h4>
              <p className="text-sm text-neutral-600">Premium look with stable base. Ideal for premium pet food brands and larger sizes.</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Side Gusset Bag</h4>
              <p className="text-sm text-neutral-600">Traditional pet food format. High capacity for bulk kibble, efficient shipping.</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Pillow Pouch</h4>
              <p className="text-sm text-neutral-600">Economical for single-serve treats and samples. Flow-wrap compatible.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'safety',
      title: 'Pet Safety Standards',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>All our pet food packaging materials are manufactured to the highest safety standards:</p>
          
          <div className="bg-neutral-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>FDA 21 CFR Compliant</strong> – Food contact materials approved</li>
              <li>✓ <strong>AAFCO Guidelines</strong> – Pet food packaging requirements met</li>
              <li>✓ <strong>Heavy Metal Testing</strong> – Below detection limits</li>
              <li>✓ <strong>BPA-Free Materials</strong> – No bisphenol A in any component</li>
              <li>✓ <strong>Low-Migration Inks</strong> – Food-safe printing inks only</li>
            </ul>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            We provide full material safety documentation, including COA (Certificate of Analysis) and SDS (Safety Data Sheets) for regulatory compliance.
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What packaging is best for dry dog food?",
      answer: "For dry dog food, we recommend flat bottom bags or side gusset bags with high-barrier laminates. These formats handle heavy weights (2-20kg), provide excellent moisture barriers to prevent kibble from going stale, and include slider closures for resealability. Our materials achieve MVTR below 2.0 g/m²/24hr."
    },
    {
      question: "Are your pet food bags safe for dogs and cats?",
      answer: "Yes, all our pet food packaging is manufactured with food-contact approved materials. We use FDA-compliant films and low-migration, food-safe inks. We provide Certificates of Conformity and can arrange third-party testing if required for your certification needs."
    },
    {
      question: "Do you offer sustainable pet food packaging?",
      answer: "Yes, we offer multiple sustainable options: certified compostable pouches (EN 13432), recyclable mono-material structures, and PCR (post-consumer recycled) content pouches. We help pet brands meet sustainability goals while maintaining product freshness and safety."
    },
    {
      question: "What is the MOQ for custom printed pet treat bags?",
      answer: "Our minimum order is 500 units for custom printed pet food and treat pouches. This low MOQ is ideal for startup pet brands, small batch producers, and testing new product lines before scaling up."
    },
    {
      question: "Can you make large format bags for bulk pet food?",
      answer: "Yes, we manufacture pouches up to 10kg+ capacity. Large format options include quad-seal bags, side gusset bags, and flat bottom bags with reinforced seals and carry handles. These are perfect for warehouse clubs and bulk pet food retailers."
    }
  ]

  const tables = [
    {
      title: "Pet Food Packaging Size Guide",
      data: {
        headers: ["Product Type", "Weight Range", "Recommended Size", "Format"],
        rows: [
          ["Treats (sample)", "20-50g", "80 x 120mm", "Pillow Pouch"],
          ["Treats (retail)", "100-250g", "120 x 200 + 80mm", "Stand-Up Zipper"],
          ["Small Kibble Bag", "500g-1kg", "180 x 280 + 100mm", "Stand-Up Slider"],
          ["Medium Kibble Bag", "2-4kg", "220 x 350 + 120mm", "Flat Bottom"],
          ["Large Kibble Bag", "5-10kg", "280 x 450 + 150mm", "Side Gusset"],
          ["Supplements", "100-300g", "140 x 200 + 80mm", "Stand-Up Pouch"]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: "Flat Bottom Bags",
      url: "/packaging/flat-bottom-bags",
      description: "Premium format for pet food"
    },
    {
      title: "Compostable Materials",
      url: "/materials/compostable",
      description: "Certified sustainable options"
    },
    {
      title: "Snacks & Food Packaging",
      url: "/industry/snacks-food",
      description: "Similar solutions for human snacks"
    }
  ]

  return (
    <SEOPageLayout
      title="Pet Food & Treats Packaging | Sustainable Dog & Cat Food Pouches"
      description="Eco-friendly flexible packaging for dry pet food, dog treats, cat food, and pet supplements. Compostable, recyclable options. Heavy-duty construction, resealable closures. MOQ 500 units."
      keywords={[
        'pet food packaging',
        'dog food bags',
        'cat food pouches',
        'pet treat bags',
        'sustainable pet packaging',
        'compostable pet food bags',
        'kibble packaging',
        'pet supplement pouches',
        'custom pet food bags',
        'eco-friendly pet packaging'
      ]}
      canonicalUrl="https://achievepack.com/industry/pet-food"
      heroTitle={t('seoPages.pages.petFood.heroTitle')}
      heroSubtitle={t('seoPages.pages.petFood.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_achieve_pack_outdoor_picnic_pouch_4758828.webp"
      heroImageAlt="Eco-friendly pet food packaging with dog treats stand-up pouch"
      introSummary={t('seoPages.pages.petFood.introSummary')}
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

export default PetFoodPage
