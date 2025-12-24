import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Rocket, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, TrendingUp, DollarSign, Clock } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const LowMOQStartupPackagingPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The Startup Packaging Challenge',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Startups face a classic packaging dilemma: <strong>high minimums lock you into untested designs</strong>, while generic packaging hurts your brand. Low MOQ custom packaging solves both.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-800">Common Startup Problems</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• 10,000+ unit minimums from traditional suppliers</li>
                  <li>• High plate costs eating into limited budgets</li>
                  <li>• Long lead times slowing product launches</li>
                  <li>• Can't test multiple SKUs affordably</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">Our Solution</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Start from just 100 pieces</li>
                  <li>• No plate fees with digital printing</li>
                  <li>• 10-15 day turnaround</li>
                  <li>• Test and iterate affordably</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'low-moq-options',
      title: 'Low MOQ Packaging Options',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Get <strong>professional custom packaging</strong> at startup-friendly quantities. All sustainable material options available.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">100</div>
              <h4 className="font-semibold text-green-800">Digital Print MOQ</h4>
              <p className="text-sm text-green-700 mt-2">Custom printed pouches on any sustainable material. Full color, no plate fees.</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <h4 className="font-semibold text-blue-800">Stock Pouch MOQ</h4>
              <p className="text-sm text-blue-700 mt-2">Unprinted stock pouches ship immediately. Test your product fit first.</p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">500</div>
              <h4 className="font-semibold text-purple-800">Labels + Stock</h4>
              <p className="text-sm text-purple-700 mt-2">Stock pouches + custom labels. Affordable branded option for testing.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            <ClickableImage 
              src="/imgs/store/shape/stand-up-pouch.webp" 
              alt="Stand up pouch for startups" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Stand Up"
            />
            <ClickableImage 
              src="/imgs/store/shape/flat-bottom-pouch.webp" 
              alt="Flat bottom bag" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Flat Bottom"
            />
            <ClickableImage 
              src="/imgs/store/shape/flat-pouch.webp" 
              alt="Flat pouch" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Flat Pouch"
            />
            <ClickableImage 
              src="/imgs/store/shape/side-gusset.webp" 
              alt="Side gusset bag" 
              className="w-full h-24 object-cover rounded-lg"
              caption="Side Gusset"
            />
          </div>
        </div>
      )
    },
    {
      id: 'startup-benefits',
      title: 'Why Startups Choose Us',
      icon: <Rocket className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-neutral-800">Cash Flow Friendly</h4>
              <p className="text-sm text-neutral-600 mt-2">Order only what you need. No tying up capital in excess inventory.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-neutral-800">Fast to Market</h4>
              <p className="text-sm text-neutral-600 mt-2">10-15 day production. Launch products quickly and respond to demand.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-neutral-800">Scale When Ready</h4>
              <p className="text-sm text-neutral-600 mt-2">Move to flexographic printing for volume discounts as you grow.</p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-6 border border-amber-200">
            <h5 className="font-semibold text-amber-800 mb-2">Startup Success Stories:</h5>
            <p className="text-sm text-amber-700">
              We've helped hundreds of startups launch with professional sustainable packaging. From Kickstarter campaigns to farmers market debuts to DTC e-commerce launches—low MOQ makes it possible.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'eco-options',
      title: 'Sustainable Materials for Startups',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Launch with <strong>sustainability from day one</strong>. All eco-friendly materials available at low MOQ.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Link to="/materials/compostable" className="block bg-green-50 p-4 rounded-lg border border-green-200 hover:shadow-md transition">
              <h5 className="font-semibold text-green-800">Compostable</h5>
              <p className="text-sm text-green-700">TUV certified. Perfect for premium and organic positioning.</p>
            </Link>
            <Link to="/materials/recyclable-mono-pe" className="block bg-blue-50 p-4 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h5 className="font-semibold text-blue-800">Recyclable</h5>
              <p className="text-sm text-blue-700">Mono-PE. Store drop-off recycling compatible.</p>
            </Link>
            <Link to="/materials/bio-pe" className="block bg-amber-50 p-4 rounded-lg border border-amber-200 hover:shadow-md transition">
              <h5 className="font-semibold text-amber-800">Bio-Based</h5>
              <p className="text-sm text-amber-700">Sugarcane-derived. Carbon footprint reduction.</p>
            </Link>
            <Link to="/materials/pcr" className="block bg-purple-50 p-4 rounded-lg border border-purple-200 hover:shadow-md transition">
              <h5 className="font-semibold text-purple-800">PCR Content</h5>
              <p className="text-sm text-purple-700">Post-consumer recycled. Circular economy support.</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Launch Your Product With Us',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Start Your Packaging Project</h3>
          <p className="text-lg mb-6 opacity-90">
            Tell us about your product. We'll recommend materials, sizes, and help you get samples for testing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Free Startup Consultation
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Package className="h-5 w-5" />
              Browse Sample Packs
            </Link>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the lowest minimum order for custom packaging?",
      answer: "Our lowest MOQ for custom printed sustainable pouches is 100 pieces with digital printing. Stock (unprinted) pouches have no minimum—you can order as few as you need for testing."
    },
    {
      question: "How much does low MOQ packaging cost per unit?",
      answer: "Small order pricing is naturally higher per unit than bulk orders, but our digital printing eliminates plate fees (typically $300-800 per color), making small runs more affordable. As you grow and order 3,000+ units, pricing decreases significantly."
    },
    {
      question: "Can I order different sizes and designs in small quantities?",
      answer: "Yes, that's a key advantage of digital printing. You can order 100 of size A, 100 of size B, and 100 of design C in the same order. Perfect for testing multiple SKUs."
    },
    {
      question: "How long does small order production take?",
      answer: "Digital printed pouches ship in 10-15 business days from artwork approval. Stock pouches ship within 3-5 business days. Rush options available."
    },
    {
      question: "When should I switch from digital to flexographic printing?",
      answer: "Flexographic printing becomes more cost-effective at around 3,000-5,000 units per design. We'll help you transition when the time is right, and can produce both methods to support your growth."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Low Minimum Order Packaging for Startups | From 100 Pieces | Achieve Pack</title>
        <meta name="description" content="Custom packaging for startups from just 100 pieces. No plate fees, fast turnaround, sustainable materials. Perfect for product launches and testing." />
        <link rel="canonical" href="https://achievepack.com/topics/low-moq-startup-packaging" />
        <meta name="keywords" content="low MOQ packaging, startup packaging, small order custom pouches, low minimum packaging" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Low Minimum Order Packaging for Startups",
            "description": "Custom sustainable packaging with minimum orders from 100 pieces, designed for startups and small businesses.",
            "provider": { "@type": "Organization", "name": "Achieve Pack" }
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title="Low Minimum Order Packaging for Startups"
        description="Custom sustainable packaging from just 100 pieces. No plate fees, fast turnaround."
        keywords={['low MOQ packaging', 'startup packaging', 'small order custom pouches']}
        heroTitle="Low MOQ Packaging for Startups"
        heroSubtitle="From 100 Pieces | No Plate Fees | Fast Turnaround"
        introSummary="Launch your product with professional custom packaging—without the 10,000 unit minimums. We help startups get to market fast with sustainable packaging at quantities that make sense."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_sustainable_packaging_printing_3127893.webp"
      />
    </>
  )
}

export default LowMOQStartupPackagingPage
