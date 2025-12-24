import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Coffee, Wind, Shield, Clock, CheckCircle, Calendar, MessageCircle, Award, Target, Package, Sparkles, Store } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CoffeeRoasterPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The Coffee Packaging Challenge',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              As an <strong>established specialty coffee roaster</strong>, you've perfected your craft. Now customers and regulations are pushing you to reduce plastic waste—without compromising the freshness and shelf presence that drive sales.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-800">Current Concerns</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Traditional bags use multi-layer plastics</li>
                  <li>• Customer demand for sustainable options</li>
                  <li>• Fear of compromising freshness/shelf life</li>
                  <li>• Premium appearance drives retail sales</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">What You Need</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Degassing valve compatibility</li>
                  <li>• Proven freshness performance</li>
                  <li>• Premium retail shelf appeal</li>
                  <li>• Sustainable credentials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'degassing',
      title: 'Degassing Valves & Freshness',
      icon: <Wind className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Freshly roasted coffee releases CO2 for days. <strong>Our pouches include one-way degassing valves</strong> that let gas escape while preventing oxygen ingress—maintaining peak freshness.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 text-center">
              <Wind className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <h4 className="font-semibold text-amber-800">One-Way Valve</h4>
              <p className="text-xs text-amber-700 mt-2">CO2 out, oxygen blocked</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200 text-center">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-green-800">High Barrier</h4>
              <p className="text-xs text-green-700 mt-2">12+ month shelf life</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 text-center">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800">Same-Day Pack</h4>
              <p className="text-xs text-blue-700 mt-2">No degassing wait</p>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">Coffee Packaging Options</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp" 
                alt="Specialty coffee packaging with valve" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Coffee Pouch"
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_flat_bottom_pouch_isolated_7901973.webp" 
                alt="Flat bottom coffee bag" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Flat Bottom"
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_side_gusset_pouch_isolated_2545871.webp" 
                alt="Side gusset coffee bag" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Side Gusset"
              />
              <ClickableImage 
                src="/imgs/store/closure/tin-tie.webp" 
                alt="Tin tie closure for coffee" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Tin Tie"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainable',
      title: 'Sustainable Alternatives',
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Move away from conventional plastic without sacrificing performance. <strong>Choose from proven sustainable materials</strong> that work with your existing equipment.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Link to="/materials/compostable" className="block bg-green-50 p-5 rounded-lg border border-green-200 hover:shadow-md transition">
              <h4 className="font-semibold text-green-800 mb-2">Certified Compostable</h4>
              <p className="text-sm text-green-700">Kraft paper + PLA barrier. Breaks down in industrial composting. ASTM D6400 certified.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Learn more →</span>
            </Link>
            <Link to="/materials/recyclable-mono-pe" className="block bg-blue-50 p-5 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h4 className="font-semibold text-blue-800 mb-2">Store Drop-Off Recyclable</h4>
              <p className="text-sm text-blue-700">Mono-PE structure accepted at PE recycling points. High barrier, lower cost.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Learn more →</span>
            </Link>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">Valve Compatibility</h4>
            <p className="text-sm text-amber-700">All our sustainable materials are compatible with standard one-way degassing valves. No equipment changes needed.</p>
          </div>
        </div>
      )
    },
    {
      id: 'retail-presence',
      title: 'Premium Retail Presence',
      icon: <Store className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Shelf appeal drives impulse purchases. <strong>Our premium finishes create standout packaging</strong> that commands attention in crowded retail environments.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">Pouch Styles</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Flat bottom (box pouch)</li>
                <li>• Stand-up pouch</li>
                <li>• Side gusset</li>
                <li>• Quad seal</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">Premium Finishes</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Matte/soft-touch</li>
                <li>• Spot UV gloss</li>
                <li>• Foil stamping</li>
                <li>• Embossing</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">Closure Options</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Press-to-close zipper</li>
                <li>• Tin tie + zipper</li>
                <li>• Slider zipper</li>
                <li>• Heat seal</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'consistent-supply',
      title: 'Reliable Supply Chain',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Production runs can't wait for packaging delays. <strong>We maintain consistent supply</strong> with reliable lead times and inventory management options.
          </p>
          
          <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-neutral-700">2-3 weeks</div>
                <p className="text-xs text-neutral-600 mt-1">Standard production</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-700">Blanket orders</div>
                <p className="text-xs text-neutral-600 mt-1">Scheduled releases</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-700">Priority</div>
                <p className="text-xs text-neutral-600 mt-1">Repeat customer status</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Upgrade Your Coffee Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Request Coffee Packaging Samples</h3>
          <p className="text-lg mb-6 opacity-90">
            See and feel sustainable coffee bags before committing. We'll send samples with your preferred valve and closure options.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Book Consultation
            </button>
            <Link
              to="/products/coffee-bags-degassing-valve"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Package className="h-5 w-5" />
              View Coffee Bags
            </Link>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Do compostable bags work with degassing valves?",
      answer: "Yes. Our compostable coffee bags are fully compatible with one-way degassing valves. The valves are applied after pouch fabrication using standard heat-seal equipment—no changes to your packing process."
    },
    {
      question: "What's the shelf life of compostable coffee bags?",
      answer: "With high-barrier compostable materials and a degassing valve, expect 6-9 months shelf life for roasted whole bean coffee. For 12+ months, we recommend our recyclable mono-PE option."
    },
    {
      question: "Can I get the same premium look with sustainable materials?",
      answer: "Absolutely. Our kraft paper compostable bags have a natural, premium appearance. We also offer matte finishes, spot UV, and foil stamping on sustainable materials for maximum shelf presence."
    },
    {
      question: "What minimum orders do you require for coffee bags?",
      answer: "MOQ is 500 pieces for standard coffee bag sizes with degassing valve. For market testing or new blends, we can accommodate smaller runs of 100-200 pieces through our digital print line."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Coffee Roaster Packaging | Degassing Valve Bags | Sustainable | Achieve Pack</title>
        <meta name="description" content="Sustainable coffee packaging for specialty roasters. Degassing valve compatible, high barrier for freshness, compostable and recyclable options. Premium retail presence." />
        <link rel="canonical" href="https://achievepack.com/solutions/coffee-roaster" />
        <meta name="keywords" content="coffee roaster packaging, degassing valve bags, sustainable coffee bags, compostable coffee packaging, specialty coffee packaging, coffee bag supplier" />
      </Helmet>

      <SEOPageLayout
        title="Coffee Roaster Packaging | Degassing Valve Compatible"
        description="Sustainable coffee packaging for specialty roasters. Degassing valve compatible with proven freshness performance."
        keywords={['coffee roaster packaging', 'degassing valve bags', 'sustainable coffee bags', 'specialty coffee packaging']}
        heroTitle="Coffee Roaster Packaging"
        heroSubtitle="Degassing Valve Compatible | High Barrier | Sustainable Options"
        introSummary="Transition to sustainable coffee packaging without compromising freshness. Degassing valve compatible, 12+ month shelf life, premium retail presence—in compostable or recyclable materials."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp"
      />
    </>
  )
}

export default CoffeeRoasterPage
