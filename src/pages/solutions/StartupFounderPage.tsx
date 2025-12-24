import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Rocket, Leaf, Award, CheckCircle, Clock, Shield, Target, Calendar, MessageCircle, Package, Zap, Users } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const StartupFounderPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The Startup Packaging Challenge',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              You're building a <strong>direct-to-consumer wellness brand</strong> with tight budgets and big sustainability goals. Finding packaging that scales with your business while maintaining your eco-credentials feels impossible.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-amber-800">Common Frustrations</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• 10,000+ MOQ requirements lock you out</li>
                  <li>• Generic packaging doesn't match brand positioning</li>
                  <li>• Unclear environmental certifications</li>
                  <li>• Long lead times miss product launches</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">What You Actually Need</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Low MOQ (100-500 pieces) for testing</li>
                  <li>• Verified compostable certifications</li>
                  <li>• Premium design without premium prices</li>
                  <li>• Fast turnaround for launch deadlines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'solution',
      title: 'Packaging That Grows With Your Brand',
      icon: <Rocket className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack specializes in startup-friendly packaging</strong> with the lowest MOQ in the industry. Get custom printed, certified sustainable pouches from just 100 pieces—perfect for product launches, market testing, and scaling.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-5 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">100</div>
              <div className="text-sm text-green-600 font-medium">Minimum Order</div>
              <p className="text-xs mt-2 text-neutral-600">Start small, test the market</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">2-3</div>
              <div className="text-sm text-blue-600 font-medium">Weeks Production</div>
              <p className="text-xs mt-2 text-neutral-600">Meet launch deadlines</p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl font-bold text-purple-700 mb-2">FREE</div>
              <div className="text-sm text-purple-600 font-medium">Design Support</div>
              <p className="text-xs mt-2 text-neutral-600">Mockups included</p>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">Startup Packaging Examples</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/seo-photos/a_achievepack_compostable_garden_9329618.webp" 
                alt="Compostable pouch for wellness startup brand" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Compostable Pouch"
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp" 
                alt="Stand-up pouch for protein powder startup" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Stand-Up Pouch"
              />
              <ClickableImage 
                src="/imgs/store/surface/matt.webp" 
                alt="Matte finish premium look for DTC brand" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Matte Finish"
              />
              <ClickableImage 
                src="/imgs/4-infograhic/compost.webp" 
                alt="Industrial compostable certification for startup" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Certified Compostable"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: 'Verified Environmental Credentials',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Your customers demand proof. Our packaging comes with <strong>internationally recognized certifications</strong> that you can confidently display on your packaging and marketing materials.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🌱</div>
              <h4 className="font-semibold text-neutral-800">ASTM D6400</h4>
              <p className="text-xs text-neutral-600 mt-1">US Compostable</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🇪🇺</div>
              <h4 className="font-semibold text-neutral-800">EN 13432</h4>
              <p className="text-xs text-neutral-600 mt-1">EU Compostable</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">♻️</div>
              <h4 className="font-semibold text-neutral-800">How2Recycle</h4>
              <p className="text-xs text-neutral-600 mt-1">Store Drop-Off</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🏭</div>
              <h4 className="font-semibold text-neutral-800">BRC Certified</h4>
              <p className="text-xs text-neutral-600 mt-1">Food Safety</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-200">
            <p className="text-sm text-green-800">
              <strong>Marketing Ready:</strong> We provide certification logos, environmental claim language, and documentation for your website and packaging—helping you communicate authentically to eco-conscious consumers.
            </p>
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
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/materials/compostable" className="block bg-green-50 p-5 rounded-lg border border-green-200 hover:shadow-md transition">
              <h4 className="font-semibold text-green-800 mb-2">Certified Compostable</h4>
              <p className="text-sm text-green-700">Kraft paper + PLA. Breaks down in 90-180 days. Perfect for wellness and organic brands.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Learn more →</span>
            </Link>
            <Link to="/materials/recyclable-mono-pe" className="block bg-blue-50 p-5 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h4 className="font-semibold text-blue-800 mb-2">Recyclable Mono-PE</h4>
              <p className="text-sm text-blue-700">Store drop-off recyclable. High barrier for product freshness. Cost-effective option.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Learn more →</span>
            </Link>
            <Link to="/materials/pcr" className="block bg-purple-50 p-5 rounded-lg border border-purple-200 hover:shadow-md transition">
              <h4 className="font-semibold text-purple-800 mb-2">PCR Content</h4>
              <p className="text-sm text-purple-700">30-50% post-consumer recycled plastic. Reduces virgin plastic use.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Learn more →</span>
            </Link>
            <Link to="/materials/bio-pe" className="block bg-amber-50 p-5 rounded-lg border border-amber-200 hover:shadow-md transition">
              <h4 className="font-semibold text-amber-800 mb-2">Bio-Based PE</h4>
              <p className="text-sm text-amber-700">Sugarcane-derived polyethylene. Drop-in replacement for fossil PE.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Learn more →</span>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'design-support',
      title: 'Free Design Consultation & Mockups',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Don't have a packaging designer? <strong>Our in-house team provides free design support</strong> to help you create packaging that elevates your brand.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">1. Consultation</h4>
              <p className="text-sm text-neutral-600">We discuss your brand, product, and sustainability goals</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">2. Mockup Design</h4>
              <p className="text-sm text-neutral-600">Receive 3D mockups showing your design on actual pouches</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">3. Samples</h4>
              <p className="text-sm text-neutral-600">Physical samples before bulk production</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'social-proof',
      title: 'Trusted by Startups Worldwide',
      icon: <Users className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <p className="text-sm italic text-neutral-600 mb-4">
                "As a new protein powder brand, finding sustainable packaging with low MOQ was nearly impossible—until we found Achieve Pack. They helped us launch with just 500 bags and the design support was invaluable."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold">JM</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800">James M.</p>
                  <p className="text-xs text-neutral-500">Founder, Clean Fuel Nutrition</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <p className="text-sm italic text-neutral-600 mb-4">
                "The compostable certification was a game-changer for our organic tea brand. Our customers love that they can compost the entire package. Fast turnaround helped us hit our Kickstarter deadline."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">SK</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800">Sarah K.</p>
                  <p className="text-xs text-neutral-500">Co-founder, Mindful Tea Co.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <div className="px-4 py-2 bg-neutral-100 rounded-lg text-sm">
              <strong>500+</strong> Startup Brands Served
            </div>
            <div className="px-4 py-2 bg-neutral-100 rounded-lg text-sm">
              <strong>8</strong> Countries
            </div>
            <div className="px-4 py-2 bg-neutral-100 rounded-lg text-sm">
              <strong>98%</strong> Satisfaction Rate
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pricing',
      title: 'Startup-Friendly Pricing',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Order Size</th>
                  <th className="p-3 text-left">Price Range</th>
                  <th className="p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">100-499 pcs</td>
                  <td className="p-3">$0.85 - $1.50/bag</td>
                  <td className="p-3">Product testing, samples</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">500-999 pcs</td>
                  <td className="p-3">$0.55 - $0.95/bag</td>
                  <td className="p-3">Initial launch</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">1,000-4,999 pcs</td>
                  <td className="p-3">$0.35 - $0.65/bag</td>
                  <td className="p-3">Growth stage</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">5,000+ pcs</td>
                  <td className="p-3">Contact for quote</td>
                  <td className="p-3">Scale stage</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-neutral-500">*Pricing varies by size, material, and printing options</p>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Launch with Sustainable Packaging?',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-primary-600 to-green-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Get Your Startup Packaging Quote</h3>
          <p className="text-lg mb-6 opacity-90">
            Book a free 30-minute consultation. We'll discuss your brand, timeline, and create a custom packaging plan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Book Free Consultation
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Package className="h-5 w-5" />
              Browse Products
            </Link>
          </div>
          
          <p className="mt-6 text-sm opacity-80">
            Or email directly: <a href="mailto:ryan@achievepack.com" className="underline">ryan@achievepack.com</a>
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the minimum order quantity for startup brands?",
      answer: "Our minimum order is just 100 pieces for custom printed pouches—the lowest in the industry. This allows startups to test products, iterate on packaging designs, and scale without large inventory commitments."
    },
    {
      question: "How quickly can I get packaging for my product launch?",
      answer: "Standard production is 2-3 weeks after artwork approval, plus 5-7 days shipping. For urgent launches, we offer expedited 7-10 day production. Stock pouches ship within 3-5 business days."
    },
    {
      question: "Do you help with packaging design?",
      answer: "Yes! We offer free design consultation and 3D mockup services. Our team can help you create professional packaging that matches your brand positioning, even if you don't have a dedicated designer."
    },
    {
      question: "What certifications come with compostable packaging?",
      answer: "Our compostable pouches are certified to ASTM D6400 (US), EN 13432 (EU), and AS5810 (Australia). We provide certification logos and approved claim language for your marketing materials."
    },
    {
      question: "Can I reorder in different quantities as my business grows?",
      answer: "Absolutely. Many of our startup clients start with 100-500 pieces, then scale to thousands as their brand grows. We offer consistent pricing tiers and priority production for repeat customers."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Packaging for Startup Founders | Low MOQ Sustainable Pouches | Achieve Pack</title>
        <meta name="description" content="Startup-friendly sustainable packaging with 100 piece minimum order. Certified compostable pouches, free design support, and fast turnaround for product launches. Perfect for DTC wellness brands." />
        <link rel="canonical" href="https://achievepack.com/solutions/startup-founder" />
        <meta property="og:title" content="Packaging for Startup Founders | Low MOQ | Achieve Pack" />
        <meta property="og:description" content="Launch your brand with certified sustainable packaging. 100 piece MOQ, free design support, 2-3 week turnaround." />
        <meta property="og:url" content="https://achievepack.com/solutions/startup-founder" />
        <meta name="keywords" content="startup packaging, low MOQ pouches, DTC brand packaging, sustainable packaging startup, compostable pouches low minimum, wellness brand packaging, protein powder packaging" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Startup Founder Packaging Solutions",
            "description": "Custom sustainable packaging for startup founders with low minimum order quantities, certified materials, and design support.",
            "provider": { "@type": "Organization", "name": "Achieve Pack" },
            "areaServed": ["United States", "United Kingdom", "European Union", "Australia"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Startup Packaging Options",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Compostable Stand-Up Pouch", "description": "ASTM D6400 certified" }},
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Recyclable Mono-PE Pouch", "description": "Store drop-off recyclable" }}
              ]
            }
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title="Packaging for Startup Founders | Low MOQ Sustainable Pouches"
        description="Launch your brand with certified sustainable packaging. Low MOQ from 100 pieces, free design support, fast turnaround for startups."
        keywords={['startup packaging', 'low MOQ pouches', 'DTC brand packaging', 'sustainable packaging startup', 'wellness brand packaging']}
        heroTitle="Packaging for Startup Founders"
        heroSubtitle="Low MOQ from 100 Pieces | Certified Sustainable | Free Design Support"
        introSummary="Launch your DTC brand with packaging that matches your sustainability values. Get custom printed, certified compostable pouches from just 100 pieces—with free design support and 2-3 week turnaround."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_achievepack_compostable_garden_9329618.webp"
      />
    </>
  )
}

export default StartupFounderPage
