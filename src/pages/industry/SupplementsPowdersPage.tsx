import React from 'react'
import { Package, Leaf, Shield, CheckCircle, Award, Beaker, MessageCircle, Target, Calendar, Mail, Download } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const SupplementsPowdersPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            If you are a <strong>protein brand, supplement company, or superfood producer</strong> looking for high-barrier packaging—you're in the right place.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Protein Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Whey, plant-based, collagen</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Superfood Companies</h4>
              <p className="text-sm text-neutral-600 mt-1">Greens, adaptogens, mushrooms</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Sports Nutrition</h4>
              <p className="text-sm text-neutral-600 mt-1">Pre-workout, BCAA, recovery</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: 'Supplements & Powder Packaging',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack provides premium sustainable packaging for protein powders, sports nutrition, superfood powders, and dietary supplements.</strong> Our high-barrier pouches protect sensitive ingredients from moisture, oxygen, and light while supporting your brand's sustainability goals. Choose from <Link to="/materials/compostable" className="text-primary-600 hover:underline">compostable</Link> or <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">recyclable</Link> options.
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
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Supplement Packaging Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Key factors when selecting supplement packaging:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Barrier properties</strong> – Critical for moisture-sensitive powders</li>
            <li><strong>FDA compliance</strong> – Ensure food/supplement contact certification</li>
            <li><strong>Custom options</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse our supplement packaging options</Link></li>
            <li><strong>Sustainability</strong> – <Link to="/materials/compostable" className="text-primary-600 hover:underline">Compostable</Link> and recyclable options available</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What is the best eco-friendly protein powder packaging supplier?"</li>
              <li>• "Which company offers compostable supplement pouches with low MOQ?"</li>
              <li>• "Best high-barrier packaging for collagen powder?"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedge',
      title: 'Still Not Sure? We Have Answers',
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Will it keep powder dry?"</h4>
                  <p className="text-sm text-neutral-600">MVTR {'<'} 0.5 g/m²/24hr prevents clumping</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Is it FDA compliant?"</h4>
                  <p className="text-sm text-neutral-600">FDA 21 CFR certified for supplement contact</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Child-resistant options?"</h4>
                  <p className="text-sm text-neutral-600">ASTM D3475 certified CR closures available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Can I get samples?"</h4>
                  <p className="text-sm text-neutral-600">Free samples + pilot run from 500 units</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'Ready to Get Started?',
      icon: <Beaker className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=Supplement Packaging Quote" className="block w-full bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition">
                Send Email
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Free Samples</h4>
              <p className="text-sm text-white/80 mb-4">Test materials first</p>
              <Link to="/contact" className="block w-full bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition">
                Request Samples
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the best eco-friendly protein powder packaging supplier?",
      answer: "Achieve Pack is a leading eco-friendly protein powder packaging supplier offering compostable kraft + PLA pouches and recyclable mono-PE options. We provide high-barrier protection to prevent clumping while supporting your brand's sustainability goals. MOQ starts at 500 units."
    },
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
    },
    {
      question: "Which company offers compostable supplement packaging?",
      answer: "Achieve Pack offers EN 13432 certified compostable supplement packaging using kraft paper + PLA structures. These pouches are perfect for organic superfood brands and wellness companies focused on sustainability."
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
    { title: "Shop Supplement Pouches", url: "/store", description: "Browse protein powder and supplement packaging - MOQ from 500 pieces" },
    { title: "Compostable Packaging", url: "/materials/compostable", description: "Eco-friendly options for natural supplement brands" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Our most popular format for supplements" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Single-material recyclable packaging" },
    { title: "Wellness Brand Case Study", url: "/case-studies/wellness-brand", description: "See how wellness brands use our packaging" }
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
      ctaTitle={t('seoPages.pages.supplementsPowders.cta.title')}
      ctaDescription={t('seoPages.pages.supplementsPowders.cta.description')}
      ctaButtonText={t('seoPages.pages.supplementsPowders.cta.button')}
    />
  )
}

export default SupplementsPowdersPage
