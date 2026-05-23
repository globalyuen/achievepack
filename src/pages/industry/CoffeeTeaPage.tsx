import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Beaker, Leaf, Award, CheckCircle, Clock, Shield, Target, 
  Package, Zap, Factory, AlertTriangle, ArrowRight, ShoppingBag, Sparkles 
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'

const CoffeeTeaPage: React.FC = () => {
  const sections = [
    {
      id: 'freshness-challenge',
      title: 'The Freshness Challenge: Degassing, Oxidation & Barrier Protection',
      icon: <Beaker className="h-5 w-5 text-amber-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p className="text-lg">
            Specialty coffee beans and fine loose-leaf teas are highly sensitive agricultural products. Immediately after roasting, coffee beans release large volumes of carbon dioxide (CO2), which can swell or rupture a sealed pouch. At the same time, oxygen exposure destroys delicate roasted coffee oils and tea terpenes within days, turning vibrant aromatics flat and stale.
          </p>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 grid md:grid-cols-2 gap-6 my-4">
            <div>
              <h4 className="font-semibold text-amber-900 flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" /> Key Material Risks
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>Oxidation Degradation:</strong> Oxygen contact makes volatile coffee oils go rancid and flat.</li>
                <li>• <strong>Pouch Swelling:</strong> Fresh roast CO2 release build-up swells or bursts bags lacking vents.</li>
                <li>• <strong>Aroma Permeation:</strong> Essential tea/coffee oils leak through low-density plastics, losing flavor.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-green-600" /> Engineering Requirements
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>One-Way Degassing Valves:</strong> Relieves internal gas pressure without letting outside air in.</li>
                <li>• <strong>Ultra-High Oxygen Barrier:</strong> Aluminum cores or high-barrier EVOH / compostable metallized films.</li>
                <li>• <strong>Airtight Resealable Zippers:</strong> Retains freshness after initial package opening.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'packaging-options',
      title: '5 Packaging Options Compared: Low-Cost MVP to Sustainable Premium',
      icon: <Package className="h-5 w-5 text-amber-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            We provide a complete range of certified sustainable packaging options designed to preserve volatile aromas while minimizing your carbon footprint.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Option 1: Stand-Up Pouch with Valve */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 1</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Low Cost MVP</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">Stand-Up Pouch with Valve</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  The retail standard for growing coffee brands. A robust stand-up pouch featuring a pre-installed one-way degassing valve, providing absolute aroma freshness at a low entry point.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• Built-in one-way degassing valve</li>
                  <li>• High-barrier metallized lining</li>
                  <li>• Reusable press-to-close zipper</li>
                </ul>
              </div>
              <Link to="/products/coffee-bags-degassing-valve" className="text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 mt-2">
                Order Valve Pouches (From US$0.12) <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 2: Compostable Kraft Coffee Bag */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 2</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">100% Compostable</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">Compostable Kraft Coffee Bag</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Certified EN 13432 & ASTM D6400 plant-based kraft paper paired with a compostable inner barrier. Fully degrades in commercial composting conditions, complete with a compostable valve.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• Earthy organic kraft paper look</li>
                  <li>• Commercial compostable valve and zipper</li>
                  <li>• Plant-based, plastic-free barrier</li>
                </ul>
              </div>
              <Link to="/products/compostable-coffee-bags" className="text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 mt-2">
                Buy Compostable Bags (From US$0.18) <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 3: Recyclable Mono-PE Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 3</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Curbside Recyclable</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">Recyclable Mono-PE Pouch</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Fully recyclable mono-polymer PE structure with EVOH coating. Provides a high barrier against moisture and oxygen while being fully accepted in store-collection recycling streams.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• Curbside and store drop-off recyclable</li>
                  <li>• Exceptional clarity or matte texture options</li>
                  <li>• High performance co-extruded barrier</li>
                </ul>
              </div>
              <Link to="/store/product/eco-standup" className="text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 mt-2">
                Buy Recyclable Pouches <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 4: Drip Coffee Sachet / Tea Pack */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 4</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-0.5 rounded">Single-Serve Launch</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">Single-Serve Drip Coffee Sachet</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Perfect for loose-leaf specialty tea, matcha, or single-use drip coffee sachets. Provides absolute light and air defense in single-dose packs. Highly visual and startup-friendly.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• High-Barrier matte sachet</li>
                  <li>• Tear-notch for instant quick opening</li>
                  <li>• Extremely lightweight and cheap to ship</li>
                </ul>
              </div>
              <Link to="/store/product/bottle-shape-sachet-bag" className="text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 mt-2">
                Order Drip Sachets <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 5: Custom Retail Tea Gift Box */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 5</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-0.5 rounded">Luxury Presentation</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">FSC Custom Tea Display Box</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Enhance your coffee pouches or tea sachets with a custom-printed FSC certified rigid display box. Elevate your retail presence with luxury unboxing appeals.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• FSC Certified recycled grayboard</li>
                  <li>• Custom die-cut windows and inserts</li>
                  <li>• Sleek premium gold foil embellishments</li>
                </ul>
              </div>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 mt-2">
                Schedule Design Consult <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'interactive-showcase',
      title: 'Premium Visual Mockups & Product Showcase',
      icon: <Sparkles className="h-5 w-5 text-amber-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Click to inspect high-resolution product prototypes. Engineered to preserve volatile coffee aromas and sensitive tea terpenes under strict sustainable material standards.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_coffee_bags_warm_4136520.webp" 
                alt="Matte coffee bags with degassing valve and zip seal" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">Matte Coffee Bags with Valve</h5>
                <p className="text-[10px] text-neutral-500 mt-1">Sturdy flat bottom construct, degassing valve, and reseal zip.</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp" 
                alt="Earthy organic compostable coffee pouch mockup" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">Compostable Coffee Bags</h5>
                <p className="text-[10px] text-neutral-500 mt-1">Earthy kraft look, compostable barrier, and plant-based valve.</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_coffee_tea_hero_v3_3443187.webp" 
                alt="Specialty stand-up pouches for coffee beans and loose leaf tea" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">Specialty Coffee & Tea Pouches</h5>
                <p className="text-[10px] text-neutral-500 mt-1">High-clarity window displays, matte colors, premium retail branding.</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_degassingvalve_warm_0118491.webp" 
                alt="One-way degassing valve closeup on premium coffee pouch" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">Degassing Valve Closeup</h5>
                <p className="text-[10px] text-neutral-500 mt-1">Precision engineered venting system to discharge CO2 pressure.</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 flex flex-col md:flex-row items-center gap-6 mt-6">
            <div className="w-full md:w-1/3">
              <ClickableImage 
                src="/imgs/illustrated/a_coffee_roaster_variation_2_0460293.webp" 
                alt="Kraft paper coffee bag with customized branding" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-3">
              <span className="bg-[#D4FF00] text-black text-[10px] font-black px-2.5 py-1 uppercase rounded-full border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                Highlighted Roastery Solution
              </span>
              <h4 className="font-bold text-neutral-900 text-lg">Featured Eco Solution: Certified Compostable Coffee Bag with Valve</h4>
              <p className="text-sm text-neutral-700">
                Are you looking to capture the conscious consumer? Our <strong>Compostable Kraft Coffee Bags</strong> use BPI-certified EN 13432 materials that breakdown naturally in standard industrial composting. Combined with an organic degassing valve, this is the ultimate solution for third-wave roasters looking to zero out plastic waste.
              </p>
              <div className="flex gap-4">
                <Link to="/products/compostable-coffee-bags" className="bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold px-4 py-2.5 rounded transition">
                  Shop Compostable Coffee Bags (MOQ 100)
                </Link>
                <Link to="/products/coffee-bags-degassing-valve" className="bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-semibold px-4 py-2.5 rounded border border-neutral-300 transition">
                  Buy Stand-Up Valve Pouches
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'expert-checklist',
      title: 'Active Compliance & Testing Protocol Checklist',
      icon: <Award className="h-5 w-5 text-amber-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 text-sm">
          <p>
            To guarantee long-term shelf stability, aroma retention, and leak-proof shipping, we recommend adhering to our professional lab-testing protocol:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">🧪 Phase 1: Material Verification</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Confirm target shelf life requirements (e.g., 6 months vs 12+ months).</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Measure volatile oil content in beans or tea leaves to verify barrier thickness needs.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Assess light-sensitivity to decide between transparent window and solid foil cores.</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">⚖ Phase 2: Integrity Testing</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Run a 30-day simulated retail shelf test under ambient and high moisture.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Verify degassing valve performance under internal CO2 gas pressure load.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Perform standard drop tests (1.2m drop) to check corner seal durability.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Why is a one-way degassing valve required for roasted coffee?",
      answer: "Freshly roasted coffee beans discharge large amounts of carbon dioxide (CO2) for days after roasting. Without a one-way degassing valve, this build-up of pressure will cause the sealed bag to balloon and burst. The valve allows the built-up CO2 to safely escape while blocking oxygen from entering the bag, preventing oxidation and aroma loss."
    },
    {
      question: "Are compostable coffee bags completely stable during transport?",
      answer: "Yes! Our certified compostable coffee bags feature a multi-layer structure incorporating high-strength kraft paper and advanced plant-based barrier films. They provide the identical high oxygen and moisture protection of standard plastics for up to 12 months, only breaking down when exposed to active industrial composting factors."
    },
    {
      question: "How do I choose between Recyclable Mono-PE and Compostable Kraft?",
      answer: "Choose Compostable Kraft if your brand story revolves around a zero-waste loop, and your local customer base has easy access to commercial composting bins. Choose Recyclable Mono-PE if you want maximum clarity (product window), higher moisture barriers, and standard store drop-off recycling access."
    },
    {
      question: "What is the minimum order quantity for custom branded printing?",
      answer: "While typical packaging factories require massive orders of 20,000+ pouches, Achieve Pack specializes in low MOQ production. You can order fully custom-printed stand-up coffee valve bags or loose tea sachets starting from only 500 pieces, enabling startups to test market demand."
    }
  ]

  const tables = [
    {
      title: "Technical Comparison: Coffee & Tea Packaging Options",
      data: {
        headers: ["Format", "Oxygen Barrier (OTR)", "Water Vapor (WVTR)", "Valve Compatibility", "MOQ", "Relative Cost"],
        rows: [
          ["Stand-Up Pouch + Valve", "0.15 ml/m²/day", "0.20 g/m²/day", "Yes (WIPF/Goglio)", "100 pcs", "Low ($)"],
          ["Compostable Kraft Bag", "0.45 ml/m²/day", "0.38 g/m²/day", "Yes (Bio-valve)", "500 pcs", "Medium ($$)"],
          ["Recyclable Mono-PE Pouch", "0.35 ml/m²/day", "0.28 g/m²/day", "Yes (Recyclable PE)", "500 pcs", "Medium ($$)"],
          ["Drip Coffee Sachet", "0.02 ml/m²/day", "0.04 g/m²/day", "No (Pre-portioned)", "100 pcs", "Low ($)"],
          ["FSC Tea Gift Box", "N/A (Outer Protection)", "N/A", "N/A", "200 pcs", "Premium ($$$$)"]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: "Compostable Coffee Bags",
      url: "/products/compostable-coffee-bags",
      description: "Explore our certified compostable kraft paper coffee pouches with bio-valves."
    },
    {
      title: "Coffee Bags with Degassing Valve",
      url: "/products/coffee-bags-degassing-valve",
      description: "Buy high-barrier stand-up pouches with pre-installed one-way degassing valves."
    },
    {
      title: "Eco Stand Up Pouches",
      url: "/store/product/eco-standup",
      description: "Purchase premium sustainable stand-up pouches for retail display."
    },
    {
      title: "Custom Tuck Display Packaging Boxes",
      url: "/store?category=boxes",
      description: "Browse premium FSC certified solid display folding cartons for sachet boxes."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Sustainable Coffee & Tea Packaging: Bags with Valve & Resealable Pouches | Achieve Pack</title>
        <meta name="description" content="Compare certified compostable and recyclable mono-PE coffee bags with degassing valves. Preserve freshness, prevent volatile oil oxidation, and support circular packaging loops with low MOQs." />
        <link rel="canonical" href="https://achievepack.com/industry/coffee-tea" />
        <meta property="og:title" content="Sustainable Coffee & Tea Packaging Solutions" />
        <meta property="og:description" content="State-of-the-art barrier pouches and degassing valves for whole beans and loose leaf tea. Certified compostable and recyclable options." />
        <meta property="og:url" content="https://achievepack.com/industry/coffee-tea" />
        <meta name="keywords" content="coffee packaging, tea packaging, degassing valve coffee bag, compostable coffee pouch, recyclable mono-PE coffee, drip coffee sachet, loose leaf tea bag, FSC gift tea carton, low MOQ coffee bag" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Coffee & Tea Packaging Solutions Ecosystem",
            "description": "Complete packaging solutions ecosystem including degassing valve pouches, compostable kraft bags, and recyclable mono-PE flat-bottom bags.",
            "brand": {
              "@type": "Brand",
              "name": "Achieve Pack"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "0.08",
              "highPrice": "1.85",
              "offerCount": "5"
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#1e1510"
        title="Sustainable Coffee & Tea Packaging: Bags with Valve & Resealable Pouches"
        description="Premium material engineering guide for packaging specialty whole beans, ground coffee, and loose leaf tea. Discover certified compostable, recyclable and high-barrier selections."
        keywords={['coffee packaging', 'degassing valve', 'compostable coffee bag', 'recyclable coffee pouch']}
        heroTitle="Coffee & Tea Packaging Solutions"
        heroSubtitle="One-Way Degassing Valves | Compostable Kraft Bags | Recyclable Mono-PE Refills & FSC Display Boxes"
        introSummary="Startup coffee roasters and premium tea brands require packaging that blocks oxygen, locks in volatile aromas, and fulfills corporate carbon-reduction goals. Explore our five engineered packaging formats for bean and leaf preservation."
        sections={sections}
        tables={tables}
        faqs={faqs}
        relatedLinks={relatedLinks}
        schemaType="Product"
        heroImage="/imgs/illustrated/a_coffee_tea_hero_v1_1905321.webp"
      />
    </>
  )
}

export default CoffeeTeaPage
