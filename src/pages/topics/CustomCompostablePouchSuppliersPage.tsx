import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Factory, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Truck, Globe, Clock, Users } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CustomCompostablePouchSuppliersPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Finding the Right Compostable Pouch Supplier',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Not all <strong>compostable pouch suppliers</strong> are equal. Finding a partner with genuine certifications, custom capabilities, and reliable supply is critical for your sustainable packaging success.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-amber-800">What to Look For</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Third-party compostability certifications</li>
                  <li>• Custom printing capabilities</li>
                  <li>• Low minimum order quantities</li>
                  <li>• Food-safe manufacturing (BRC)</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-800">Red Flags to Avoid</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Vague "biodegradable" claims</li>
                  <li>• No certificate documentation</li>
                  <li>• Extremely long lead times</li>
                  <li>• No samples available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'why-achieve-pack',
      title: 'Why Choose Achieve Pack',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            We're a <strong>specialized compostable packaging supplier</strong> with verified certifications, global reach, and a commitment to helping brands succeed with sustainable packaging.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-neutral-800">Verified Certifications</h4>
              <p className="text-sm text-neutral-600 mt-2">TUV OK Home Compost, EN13432, ASTM D6400. All third-party verified.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-neutral-800">Low MOQ Custom</h4>
              <p className="text-sm text-neutral-600 mt-2">Custom printed compostable pouches from just 100 pieces. Stock options too.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-neutral-800">Global Shipping</h4>
              <p className="text-sm text-neutral-600 mt-2">Ship to US, UK, EU, Australia, and more. DDP available.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            <ClickableImage 
              src="/imgs/4-infograhic/compost.webp" 
              alt="Compostable packaging certification" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Compostable"
            />
            <ClickableImage 
              src="/imgs/store/shape/stand-up-pouch.webp" 
              alt="Compostable stand up pouch" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Stand Up"
            />
            <ClickableImage 
              src="/imgs/store/shape/flat-bottom-pouch.webp" 
              alt="Compostable flat bottom bag" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Flat Bottom"
            />
            <ClickableImage 
              src="/imgs/store/barrier/3-paper.webp" 
              alt="Kraft compostable" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Kraft Paper"
            />
          </div>
        </div>
      )
    },
    {
      id: 'capabilities',
      title: 'Our Compostable Packaging Capabilities',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <h4 className="font-bold text-neutral-800 mb-3">Pouch Styles</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Stand-up pouches (doypacks)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Flat bottom bags (box pouches)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Side gusset bags
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Flat pouches & sachets
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Spout pouches
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <h4 className="font-bold text-neutral-800 mb-3">Features Available</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Resealable zippers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Tear notches
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Degassing valves (coffee)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Hang holes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Clear windows
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-200">
            <h5 className="font-semibold text-green-800 mb-2">Barrier Options:</h5>
            <p className="text-sm text-green-700">
              High barrier (12+ months), medium barrier (6-12 months), and standard barrier options. All use aluminum-free, compostable barrier technologies.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'process',
      title: 'How We Work With You',
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-4 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">1</div>
              <h5 className="font-semibold text-neutral-800">Consultation</h5>
              <p className="text-xs text-neutral-600 mt-1">Discuss your product and requirements</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">2</div>
              <h5 className="font-semibold text-neutral-800">Samples</h5>
              <p className="text-xs text-neutral-600 mt-1">Receive material samples for testing</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">3</div>
              <h5 className="font-semibold text-neutral-800">Artwork</h5>
              <p className="text-xs text-neutral-600 mt-1">Submit or develop your design</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">4</div>
              <h5 className="font-semibold text-neutral-800">Production</h5>
              <p className="text-xs text-neutral-600 mt-1">10-15 days for digital print orders</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Get Started With Compostable Pouches',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Request Compostable Samples</h3>
          <p className="text-lg mb-6 opacity-90">
            Get certified compostable pouch samples delivered to your door. Test with your products before ordering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Book Consultation
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Package className="h-5 w-5" />
              Order Sample Pack
            </Link>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What certifications should a compostable pouch supplier have?",
      answer: "Look for third-party certifications: TUV OK Home Compost or OK Industrial Compost, EN 13432 (EU), ASTM D6400 (US), or AS 5810/4736 (Australia). The supplier should provide certificate copies upon request. Avoid suppliers with only vague 'biodegradable' claims."
    },
    {
      question: "What is the minimum order for custom compostable pouches?",
      answer: "At Achieve Pack, our minimum order for custom printed compostable pouches is 100 pieces with digital printing. Stock compostable pouches are available with no minimum. This allows brands to test before committing to larger orders."
    },
    {
      question: "How long does it take to get custom compostable packaging?",
      answer: "Digital printed compostable pouches take 10-15 business days from artwork approval. Flexographic printing requires 21-30 days. Sample requests typically ship within 3-5 business days."
    },
    {
      question: "Do you ship compostable packaging internationally?",
      answer: "Yes, we ship to the US, UK, EU, Canada, Australia, New Zealand, and most other countries. We offer DDP (Delivered Duty Paid) shipping for a hassle-free experience. Local warehousing available in key markets."
    },
    {
      question: "Can I get compostable pouches with zippers and valves?",
      answer: "Yes, we offer compostable pouches with resealable zippers, tear notches, hang holes, and degassing valves for coffee. All closure features maintain the compostable certification of the packaging."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Custom Compostable Pouch Suppliers | Certified Eco Packaging | Achieve Pack</title>
        <meta name="description" content="Custom compostable pouch supplier with TUV, EN13432, and ASTM D6400 certifications. Low MOQ from 100 pieces. Stand-up, flat bottom, side gusset styles. Global shipping." />
        <link rel="canonical" href="https://achievepack.com/topics/compostable-pouch-suppliers" />
        <meta name="keywords" content="compostable pouch supplier, custom compostable bags, certified compostable packaging, eco-friendly pouch manufacturer" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Achieve Pack",
            "description": "Custom compostable pouch supplier with certified sustainable packaging solutions.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Compostable Pouches",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Custom Compostable Stand-Up Pouches" }},
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Compostable Flat Bottom Bags" }}
              ]
            }
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title="Custom Compostable Pouch Suppliers"
        description="Certified compostable pouch supplier with low MOQ and custom printing capabilities."
        keywords={['compostable pouch supplier', 'custom compostable bags', 'certified compostable packaging']}
        heroTitle="Custom Compostable Pouch Suppliers"
        heroSubtitle="Certified | Low MOQ | Custom Printing"
        introSummary="Find a trusted compostable packaging partner with verified certifications, custom capabilities, and low minimums. We help brands transition to certified compostable pouches with confidence."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      />
    </>
  )
}

export default CustomCompostablePouchSuppliersPage
