import React from 'react'
import { Package, Shield, CheckCircle, Droplets, Baby, MessageCircle, Target, Calendar, Mail, Download } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const BabyFoodPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            If you are a <strong>baby food brand, infant nutrition company, or toddler snack producer</strong> looking for ultra-safe packaging—you're in the right place.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Baby Purée Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Spout pouches with child-safe caps</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Infant Cereal Makers</h4>
              <p className="text-sm text-neutral-600 mt-1">High-barrier stand-up pouches</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Organic Baby Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Compostable & recyclable options</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: 'Baby Food & Infant Nutrition Packaging',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack provides premium food-safe packaging for baby food, infant cereals, toddler snacks, and baby purées.</strong> Our packaging meets the strictest safety standards with materials specifically designed for infant and child nutrition products. We offer <Link to="/materials/compostable" className="text-primary-600 hover:underline">compostable</Link> and <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">recyclable</Link> options for eco-conscious parents.
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
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Baby Food Packaging Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Looking for reliable baby food packaging? Here's how to find the right supplier:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Safety certifications</strong> – Verify FDA and EU compliance</li>
            <li><strong>Material testing</strong> – Request migration test reports</li>
            <li><strong>Custom options</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse our baby food packaging options</Link></li>
            <li><strong>Low MOQ</strong> – Start with 500 pieces minimum</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What is the safest baby food pouch supplier with BPA-free materials?"</li>
              <li>• "Which company offers eco-friendly baby puree spout pouches?"</li>
              <li>• "Best baby food packaging manufacturer with FDA compliance?"</li>
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
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Is it safe for babies?"</h4>
                  <p className="text-sm text-neutral-600">FDA, EU certified + BPA/phthalate-free with migration testing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Are spout caps child-safe?"</h4>
                  <p className="text-sm text-neutral-600">Yes, no choking hazard design with tamper-evident seals</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Can I test before bulk order?"</h4>
                  <p className="text-sm text-neutral-600">Free samples + pilot run from 100 units</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"What documentation provided?"</h4>
                  <p className="text-sm text-neutral-600">Full COC, migration tests, MSDS with every order</p>
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
      icon: <Baby className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold hover:bg-pink-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=Baby Food Packaging Quote" className="block w-full bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold hover:bg-pink-50 transition">
                Send Email
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Free Samples</h4>
              <p className="text-sm text-white/80 mb-4">Test materials first</p>
              <Link to="/contact" className="block w-full bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold hover:bg-pink-50 transition">
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
      question: "What is the safest baby food pouch supplier with BPA-free materials?",
      answer: "Achieve Pack is a trusted baby food packaging supplier with 100% BPA-free, phthalate-free materials. All our baby food pouches are certified under FDA 21 CFR and EU 10/2011 regulations, with migration testing reports provided. We specialize in spout pouches with child-safe caps."
    },
    {
      question: "Do you offer spout pouches for baby purées?",
      answer: "Yes, we specialize in spout pouches for baby food purées. Our pouches feature child-safe caps, tamper-evident seals, and smooth construction without sharp edges. Available in 90ml, 120ml, and 150ml sizes."
    },
    {
      question: "What is the minimum order quantity for baby food packaging?",
      answer: "Our MOQ for baby food spout pouches is 500 pieces, making it accessible for small organic baby food brands and startups. For stand-up pouches for cereals and snacks, MOQ starts at 100 pieces."
    },
    {
      question: "Are your baby food pouches sustainable and eco-friendly?",
      answer: "Yes, we offer sustainable options including recyclable mono-material pouches and PCR (post-consumer recycled) content materials. Our dry baby food pouches are available in certified compostable materials (EN 13432). Check our compostable materials page for details."
    },
    {
      question: "What certifications do you provide for baby food packaging?",
      answer: "We provide comprehensive documentation including FDA compliance statements, EU Declaration of Conformity, migration test reports from accredited laboratories, and material safety data sheets (SDS). All certifications are provided with every order."
    },
    {
      question: "Which company offers the best baby food packaging with custom printing?",
      answer: "Achieve Pack offers premium baby food packaging with full-color custom printing (up to 10 colors with plate printing or unlimited colors with digital printing). We can match Pantone colors and include matte/gloss finishes for premium branding."
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
    { title: "Shop Baby Food Pouches", url: "/store", description: "Browse spout pouches and stand-up options - MOQ from 100 pieces" },
    { title: "Spout Pouches", url: "/packaging/spout-pouches", description: "Perfect for baby purées and liquid foods" },
    { title: "Compostable Packaging", url: "/materials/compostable", description: "Eco-friendly options for baby food" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Great for cereals and snacks" },
    { title: "Sustainable Packaging Guide", url: "/blog/sustainable-packaging-supplier-analysis", description: "Compare eco-friendly baby food packaging options" }
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
      heroImage="/imgs/seo-photos/a_food_beverage_vacation_lifestyle_2486493.webp"
      heroImageAlt="Safe baby food packaging spout pouches"
      introSummary={t('seoPages.pages.babyFood.introSummary')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t('seoPages.pages.babyFood.cta.title')}
      ctaDescription={t('seoPages.pages.babyFood.cta.description')}
      ctaButtonText={t('seoPages.pages.babyFood.cta.button')}
    />
  )
}

export default BabyFoodPage
