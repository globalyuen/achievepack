import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Beaker, Leaf, Award, CheckCircle, Clock, Shield, Target, 
  Package, Zap, Factory, AlertTriangle, ArrowRight, ShoppingBag, Sparkles 
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'

const BabyFoodPage: React.FC = () => {
  const sections = [
    {
      id: 'safety-challenge',
      title: 'The Baby Food Challenge: Toxicity-Free Safety, Hot-Fill Sterilization & Leak-Proof Seals',
      icon: <Beaker className="h-5 w-5 text-sky-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p className="text-lg">
            Organic baby purees, infant formulas, and baby snacks demands the absolute highest tier of packaging safety and structural integrity. Pureed fruit and vegetable blends undergo severe hot-fill sterilization or pasteurization (up to 85°C–95°C) to secure shelf stability. Packaging must be 100% BPA-free, toxicity-free, and endocrine-disruptor-free, while remaining completely leak-proof under thermal stress.
          </p>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 grid md:grid-cols-2 gap-6 my-4">
            <div>
              <h4 className="font-semibold text-amber-900 flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" /> Key Material Risks
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>Chemical Leaching:</strong> Trace elements from standard plastics can migrate into infant food during hot-filling.</li>
                <li>• <strong>Seal Rupture:</strong> Thermal pasteurization weakens standard low-temperature seals, risking leaks.</li>
                <li>• <strong>Choking Hazards:</strong> Traditional small caps can be accidentally swallowed by infants.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-green-600" /> Engineering Requirements
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>100% Toxicity-Free:</strong> Certified FDA & EU food contact safety polymers (BPA, BPS, and phthalate-free).</li>
                <li>• <strong>Hot-Fill Sealants:</strong> Specialty high-temperature co-polymers stable up to 95°C.</li>
                <li>• <strong>Choke-Proof Caps:</strong> Large-diameter safety caps designed with anti-choking venting structures.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'packaging-options',
      title: '5 Packaging Options Compared: Low-Cost MVP to Sustainable Premium',
      icon: <Package className="h-5 w-5 text-sky-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Compare our five top-tier sustainable baby food packaging options engineered for absolute safety and puncture resistance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Option 1: Choke-Proof Spout Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 1</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Retail Puree MVP</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">Choke-Proof Spout Pouch</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  The standard for organic purees. A premium spouted stand-up pouch featuring a pre-installed choke-proof safety cap. Engineered for absolute leak resistance and easy squeezing.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• High-Barrier metallized aluminum core</li>
                  <li>• Large anti-choke safety cap</li>
                  <li>• BPA & phthalate-free food-safe lining</li>
                </ul>
              </div>
              <Link to="/store/product/spouted-foil-pouch" className="text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 mt-2">
                Order Spout Pouches (From US$0.14) <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 2: Recyclable Mono-PE Spout Bag */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 2</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Curbside Recyclable</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">Recyclable Mono-PE Spout Pouch</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Fully recyclable single-polymer PE structure with EVOH barrier coatings. Approved for store drop-off flexible packaging collection streams, combining sustainability and safety.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• 100% recyclable mono-material structure</li>
                  <li>• High clarity transparent window options</li>
                  <li>• Toxicity-free co-extruded barrier</li>
                </ul>
              </div>
              <Link to="/store/product/eco-standup" className="text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 mt-2">
                Buy Recyclable Pouches <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 3: Sugarcane Bio-PE Spout Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 3</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-0.5 rounded">Sugarcane Bio-PE</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">Sugarcane Bio-PE Spout Pouch</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Crafted using plant-based organic polyethylene derived from sustainable sugarcane. The ultimate option for absolute long-term seal strength and hot-fill resilience.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• Bio-based polymer structure</li>
                  <li>• Exceptional resistance against acidic purees</li>
                  <li>• High temperature stable up to 95°C</li>
                </ul>
              </div>
              <Link to="/store/product/spouted-foil-pouch" className="text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 mt-2">
                Shop Bio-PE Pouches <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 4: Compostable Kraft Puffs Bag */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 4</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Zero-Waste Snacks</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">Compostable Baby Snacks Pouch</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Earthy organic unbleached kraft paper on the outside combined with certified biodegradable inner layers. Ideal for baby puffs, organic teething wafers, and dry snacks.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• Earthy organic kraft paper look</li>
                  <li>• EN 13432 & ASTM D6400 certified</li>
                  <li>• Airtight zip closure to stop moisture</li>
                </ul>
              </div>
              <Link to="/store/product/compostable-coffee-bags" className="text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 mt-2">
                Order Compostable Kraft <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 5: FSC Recycled Multi-Pack Box */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 5</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-0.5 rounded">Subscription Box</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">FSC Custom Multi-Pack Box</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Package individual puree pouches or dry wafer packs in customized FSC certified multi-pack folding boxes. Perfect for retail sets or subscription box services.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• FSC Recycled Solid Cardboard</li>
                  <li>• Anti-scratch matte texture coating</li>
                  <li>• Ships flat to minimize inventory storage</li>
                </ul>
              </div>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1 mt-2">
                Design Multi-Pack Boxes <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'interactive-showcase',
      title: 'Premium Visual Mockups & Product Showcase',
      icon: <Sparkles className="h-5 w-5 text-sky-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Click to inspect high-resolution product prototypes. Specially designed to withstand hot-fill pasteurization and comply with strict FDA non-toxicity guidelines.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/demo-site/baby/achieve_baby_realistic_hero.png" 
                alt="Premium baby spout pouch packaging mockup with safety cap" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">Premium Puree Spout Pouches</h5>
                <p className="text-[10px] text-neutral-500 mt-1">Leak-proof thermal seals, anti-choke safety caps.</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/demo-site/baby/achieve_baby_pea_realistic.png" 
                alt="Organic green pea baby puree spout pouch mockup" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">Organic Pea Puree Pouches</h5>
                <p className="text-[10px] text-neutral-500 mt-1">Sugarcane-based Bio-PE, toxicity-free co-polymers.</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/demo-site/baby/achieve_baby_carrot_realistic.png" 
                alt="Sweet carrot baby puree spout pouch mockup with clear window" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">Sweet Carrot Puree Pouches</h5>
                <p className="text-[10px] text-neutral-500 mt-1">Clear high-barrier window, store-collection recyclable PE.</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/demo-site/baby/achieve_baby_compost_texture.png" 
                alt="Compostable baby food puffs wafer packaging sachet" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">Baby Snacks Compostable Bags</h5>
                <p className="text-[10px] text-neutral-500 mt-1">EN 13432 certified paper, airtight reseal zippers.</p>
              </div>
            </div>
          </div>

          <div className="bg-sky-50 rounded-xl p-6 border border-sky-200 flex flex-col md:flex-row items-center gap-6 mt-6">
            <div className="w-full md:w-1/3">
              <ClickableImage 
                src="/imgs/illustrated/a_baby_food_hero_v1_7008467.webp" 
                alt="Organic baby food packaging pouches and boxes in clean kitchen environment" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-3">
              <span className="bg-[#D4FF00] text-black text-[10px] font-black px-2.5 py-1 uppercase rounded-full border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                Highlighted Baby Solution
              </span>
              <h4 className="font-bold text-neutral-900 text-lg">Featured Eco Solution: Sugarcane Bio-PE Spout Pouch</h4>
              <p className="text-sm text-neutral-700">
                Pioneer absolute safety and carbon neutrality in infant nutrition using our <strong>Sugarcane Bio-PE Spout Pouches</strong>. Extruded entirely from sugarcane-derived organic polyethylene, these pouches are 100% free of BPA, phthalates, and trace chemicals. Fitted with a large anti-choke safety cap, they are drop-tested to withstand up to 1.5-meter drops without seams bursting during hot-fill pasteurization.
              </p>
              <div className="flex gap-4">
                <Link to="/store/product/spouted-foil-pouch" className="bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold px-4 py-2.5 rounded transition">
                  Buy Spout Pouches (MOQ 100)
                </Link>
                <Link to="/store/product/compostable-coffee-bags" className="bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-semibold px-4 py-2.5 rounded border border-neutral-300 transition">
                  Order Compostable Puffs Bags
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
      icon: <Award className="h-5 w-5 text-sky-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 text-sm">
          <p>
            To secure 100% non-toxicity and absolute thermal seal integrity during hot-fill pasteurization lines, we advise adhering to this protocol checklist:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">🧪 Phase 1: Material Verification</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Perform chemical leaching test to verify zero micro-plastic migration at 95°C.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Confirm direct food contact safety via FDA and EU compliance certification sheets.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Match pouch thickness to puree viscosity to ensure perfect squeeze control.</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">⚖ Phase 2: Integrity Testing</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Run a 30-day thermal aging test under ambient moisture to ensure seam stability.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Subject hot-filled spout pouches to drops test to verify zero seam splitting.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Verify anti-choking cap size to confirm absolute pediatric compliance.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Are these baby food spout pouches 100% BPA and toxicity free?",
      answer: "Yes! Every baby food packaging pouch we manufacture is certified 100% free from Bisphenol A (BPA), Bisphenol S (BPS), phthalates, and heavy metals. We strictly use food-grade FDA and EU compliant co-polymers, ensuring zero chemical migration during hot-fill processing."
    },
    {
      question: "Can these spout pouches withstand hot-fill sterilization at 90°C?",
      answer: "Yes, absolutely. Our baby food spout pouches are engineered using high-performance co-polymers that are thermally stable up to 95°C. This allows roasters and food brands to hot-fill or pasteurize organic purees directly inside the pouch without seal leakage."
    },
    {
      question: "What makes the pre-installed caps 'choke-proof'?",
      answer: "We use pediatric-approved, large-diameter safety caps. Unlike standard small bottle caps, choke-proof caps feature wide structural profiles and built-in airflow vents. If an infant accidentally places the cap in their mouth, the vents allow air to flow through freely, complying with strict global child safety guidelines."
    },
    {
      question: "What is the MOQ for custom-printed baby food pouches?",
      answer: "We accommodate small batch testing by offering custom printed spouted pouches starting from an MOQ of only 500 pieces. Digital customization allows startup brands to run multiple purees without spending on plate setup."
    }
  ]

  const tables = [
    {
      title: "Technical Comparison: Baby Food Packaging Options",
      data: {
        headers: ["Format", "Oxygen Barrier (OTR)", "Water Vapor (WVTR)", "Hot-Fill Sterile (95°C)", "MOQ", "Relative Cost"],
        rows: [
          ["Choke-Proof Spout Pouch", "0.05 ml/m²/day", "0.08 g/m²/day", "★★★★★ (Specialty Foil Core)", "100 pcs", "Low ($)"],
          ["Recyclable Mono-PE Spout", "0.32 ml/m²/day", "0.26 g/m²/day", "★★★★☆ (EVOH/PE Layer)", "500 pcs", "Medium ($$)"],
          ["Sugarcane Bio-PE Spout", "0.08 ml/m²/day", "0.10 g/m²/day", "★★★★★ (Sugarcane Foil Core)", "500 pcs", "Medium ($$)"],
          ["Compostable Kraft Bag", "0.45 ml/m²/day", "0.39 g/m²/day", "★☆☆☆☆ (Dry Snacks Only)", "500 pcs", "Medium ($$)"],
          ["FSC Custom Display Box", "N/A (Outer Protection)", "N/A", "N/A", "200 pcs", "Premium ($$$$)"]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: "Spouted Foil Stand Up Pouches",
      url: "/store/product/spouted-foil-pouch",
      description: "Explore our certified food-grade spouted stand-up pouches with anti-choke safety caps."
    },
    {
      title: "Recyclable Mono-Material Pouches",
      url: "/store/product/eco-standup",
      description: "Buy curbside-recyclable stand-up pouches with EVOH barrier coatings."
    },
    {
      title: "Compostable Stand Up Pouches",
      url: "/store/product/compostable-coffee-bags",
      description: "Order premium certified compostable flexible kraft paper puff wafer bags."
    },
    {
      title: "Custom Printed Box Packaging",
      url: "/store?category=boxes",
      description: "Browse premium FSC certified solid display folding cartons for retail packs."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Sustainable Baby Food Packaging: Spout Pouches | Achieve Pack</title>
        <meta name="description" content="Compare certified compostable and recyclable baby food pouches. High safety standards, leak-proof spout pouches, and choke-proof caps with low MOQs." />
        <link rel="canonical" href="https://achievepack.com/industry/baby-food" />
        <meta property="og:title" content="Sustainable Baby Food & Purees Packaging Solutions" />
        <meta property="og:description" content="Toxicity-free, leak-proof spouted pouches for organic baby purees and dry infant snacks. Certified compostable and recyclable designs." />
        <meta property="og:url" content="https://achievepack.com/industry/baby-food" />
        <meta name="keywords" content="baby food packaging, spout pouch baby food, compostable baby food bag, recyclable baby food bag, mono-PE baby puree pouch, baby puffs packaging, safety caps baby food, FSC baby box, low MOQ packaging" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Baby Food & Purees Packaging Ecosystem",
            "description": "Certified non-toxic flexible baby purees packaging solutions comparing recyclable mono-polymer pouches, compostable unbleached kraft pouches, and custom FSC display gift boxes.",
            "brand": {
              "@type": "Brand",
              "name": "Achieve Pack"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "0.10",
              "highPrice": "2.40",
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
        heroBgColor="#0369a1"
        title="Sustainable Baby Food Packaging: Spout Pouches"
        description="Premium material engineering guide for packaging organic baby purees, dry baby puffs, and infant formula. Discover certified compostable, recyclable and non-toxic selections."
        keywords={['baby food packaging', 'spout pouch', 'compostable baby snack bag', 'choke proof cap']}
        heroTitle="Baby Food & Snacks Packaging Solutions"
        heroSubtitle="Toxicity-Free Materials | Compostable Puffs Bags | Curbside Recyclable Mono-PE Refills & Custom Display Boxes"
        introSummary="Startup baby food brands and organic infant puree manufacturers require packaging that guarantees 100% non-toxicity compliance, resists hot-fill sterilization heat, and prevents leaks. Compare our five high-performance packaging formats."
        sections={sections}
        tables={tables}
        faqs={faqs}
        relatedLinks={relatedLinks}
        schemaType="Product"
        heroImage="/imgs/illustrated/a_baby_food_hero_v1_7008467.webp"
      />
    </>
  )
}

export default BabyFoodPage
