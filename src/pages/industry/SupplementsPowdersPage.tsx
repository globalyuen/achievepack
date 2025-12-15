import React from 'react'
import { Package, Leaf, Shield, CheckCircle, Award, Beaker } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const SupplementsPowdersPage: React.FC = () => {
  const { t } = useTranslation()
  const sections = [
    {
      id: 'overview',
      title: 'Supplements & Powder Packaging',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack provides premium sustainable packaging for protein powders, sports nutrition, superfood powders, and dietary supplements.</strong> Our high-barrier pouches protect sensitive ingredients from moisture, oxygen, and light while supporting your brand's sustainability goals.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Why Choose Our Supplement Packaging:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>High-barrier protection</strong> – Preserve potency of vitamins, proteins, and active ingredients</li>
            <li><strong>Moisture-proof materials</strong> – Critical for hygroscopic powders like protein and collagen</li>
            <li><strong>Resealable closures</strong> – Press-to-close zippers and sliders for daily use</li>
            <li><strong>FDA compliant</strong> – All materials certified for food/supplement contact</li>
            <li><strong>Custom sizes</strong> – From single-serve sachets to 5kg bulk bags</li>
          </ul>
        </div>
      )
    },
    {
      id: 'products',
      title: 'Products We Package',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our flexible packaging serves the entire supplements and functional foods market:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Protein & Sports Nutrition</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                <li>• Whey protein isolate/concentrate</li>
                <li>• Plant-based protein (pea, rice, hemp)</li>
                <li>• BCAA & amino acids</li>
                <li>• Pre-workout formulas</li>
                <li>• Mass gainers</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Superfood Powders</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• Green powders (spirulina, chlorella)</li>
                <li>• Collagen peptides</li>
                <li>• Adaptogen blends</li>
                <li>• Mushroom powders</li>
                <li>• Maca, acai, moringa</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Functional Powders</h4>
              <ul className="text-sm space-y-1 text-blue-700">
                <li>• Electrolyte powders</li>
                <li>• Fiber supplements</li>
                <li>• Digestive enzymes</li>
                <li>• Vitamin C & immunity</li>
                <li>• Sleep & relaxation blends</li>
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
          <p>Choose the right sustainable material for your supplement product:</p>
          
          <div className="space-y-4 mt-4">
            <div className="border border-primary-200 rounded-lg p-4">
              <h4 className="font-semibold text-primary-800">Certified Compostable</h4>
              <p className="text-sm mt-1">Kraft paper + PLA inner layer. Perfect for organic, natural supplement brands. EN 13432 certified.</p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800">High-Barrier Metallized</h4>
              <p className="text-sm mt-1">Maximum protection for moisture-sensitive powders like protein and collagen. MVTR below 0.5 g/m²/24hr.</p>
            </div>
            <div className="border border-emerald-200 rounded-lg p-4">
              <h4 className="font-semibold text-emerald-800">Recyclable Mono-PE</h4>
              <p className="text-sm mt-1">Single-material structure for curbside recycling. Good barrier with sustainable end-of-life.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: 'Quality & Compliance',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>All our supplement packaging meets rigorous quality and safety standards:</p>
          
          <div className="bg-neutral-50 p-4 rounded-lg">
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>FDA 21 CFR</strong> – Food and supplement contact compliance</li>
              <li>✓ <strong>cGMP Facilities</strong> – Current Good Manufacturing Practice standards</li>
              <li>✓ <strong>Heavy Metal Testing</strong> – Below detection limits</li>
              <li>✓ <strong>Migration Testing</strong> – No harmful substances transfer</li>
              <li>✓ <strong>BRC/IFS Certified</strong> – Third-party audited production</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'formats',
      title: 'Packaging Formats',
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Stand-Up Pouches</h4>
              <p className="text-sm">Standard retail format with zipper. 250g to 5kg sizes.</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Flat Bottom Bags</h4>
              <p className="text-sm">Premium shelf presence. Ideal for 1-5kg products.</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Stick Packs</h4>
              <p className="text-sm">Single-serve format. 5-30g per stick.</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Sachets</h4>
              <p className="text-sm">Sample and travel sizes. 10-50g portions.</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What packaging is best for protein powder?",
      answer: "For protein powder, we recommend high-barrier stand-up pouches with metallized film and resealable zippers. These provide MVTR below 0.5 g/m²/24hr to prevent clumping and maintain powder flow. For eco-conscious brands, our kraft + PLA compostable pouches offer medium barrier suitable for shorter shelf-life products."
    },
    {
      question: "Can supplement pouches have child-resistant closures?",
      answer: "Yes, we offer child-resistant zipper closures for supplements that may pose risks to children. These meet ASTM D3475 and 16 CFR 1700.20 standards for child-resistant packaging."
    },
    {
      question: "What is the minimum order for custom supplement pouches?",
      answer: "Our minimum order is 500 units for custom printed supplement pouches. This includes stand-up pouches, sachets, and stick packs for single-serve applications."
    },
    {
      question: "Do you offer single-serve stick packs?",
      answer: "Yes, we manufacture stick packs (typically 20-30mm width) for single-serve supplement doses. These are perfect for protein sachets, electrolyte sticks, and travel-friendly supplement packaging."
    },
    {
      question: "How do you ensure freshness for moisture-sensitive powders?",
      answer: "We use high-barrier laminate structures with aluminum or metallized layers that provide excellent moisture barrier (MVTR < 0.5 g/m²/24hr). Combined with degassing valves for freshly-mixed products and nitrogen flushing options."
    }
  ]

  const tables = [
    {
      title: "Supplement Packaging Size Guide",
      data: {
        headers: ["Product Type", "Recommended Size", "Capacity", "Format"],
        rows: [
          ["Single-serve sachet", "80 x 120mm", "20-50g", "3-Side Seal"],
          ["Stick pack", "25 x 150mm", "5-15g", "Stick Pack"],
          ["Travel size", "120 x 180 + 80mm", "250-500g", "Stand-Up Zipper"],
          ["Standard retail", "180 x 280 + 100mm", "1-2kg", "Stand-Up Zipper"],
          ["Bulk/club size", "250 x 380 + 120mm", "2-5kg", "Flat Bottom"]
        ]
      }
    }
  ]

  const relatedLinks = [
    { title: "Compostable Packaging", url: "/materials/compostable", description: "Eco-friendly options for natural supplement brands" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Our most popular format for supplements" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Single-material recyclable packaging" }
  ]

  return (
    <SEOPageLayout
      title="Supplements & Powder Packaging | Protein, Superfood & Sports Nutrition Pouches"
      description="High-barrier flexible packaging for protein powders, superfood powders, collagen, and sports nutrition. Compostable, recyclable options. FDA compliant, moisture-proof. MOQ 500 units."
      keywords={[
        'supplement packaging',
        'protein powder bags',
        'sports nutrition packaging',
        'superfood powder pouches',
        'collagen packaging',
        'BCAA packaging',
        'powder supplement bags',
        'eco-friendly supplement packaging',
        'stick packs',
        'single serve sachets'
      ]}
      canonicalUrl="https://achievepack.com/industry/supplements-powders"
      heroTitle={t('seoPages.pages.supplementsPowders.heroTitle')}
      heroSubtitle={t('seoPages.pages.supplementsPowders.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_wellness_superfood_lifestyle_9527146.webp"
      heroImageAlt="Eco-friendly supplement powder packaging pouches"
      introSummary={t('seoPages.pages.supplementsPowders.introSummary')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle="Get Custom Supplement Packaging"
      ctaDescription="Request a free sample and quote for your supplement brand."
      ctaButtonText="Request Free Sample"
    />
  )
}

export default SupplementsPowdersPage
