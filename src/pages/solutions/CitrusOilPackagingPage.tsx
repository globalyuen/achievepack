import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Beaker, Leaf, Award, CheckCircle, Clock, Shield, Target, 
  Package, Zap, Factory, AlertTriangle, ArrowRight, ShoppingBag, Sparkles 
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'

const CitrusOilPackagingPage: React.FC = () => {
  const sections = [
    {
      id: 'citrus-packaging-challenge',
      title: 'The Citrus Oil Challenge: Terpene Degradation & Material Selection',
      icon: <Beaker className="h-5 w-5 text-green-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p className="text-lg">
            Citrus-derived oils, rich in active organic compounds like <strong>d-limonene</strong> and other acidic terpenes, are highly volatile and chemically aggressive. Unlike ordinary water-based cosmetics, citrus oils act as mild organic solvents that can swell, stress-crack, or permeate standard low-barrier plastics over time.
          </p>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 grid md:grid-cols-2 gap-6 my-4">
            <div>
              <h4 className="font-semibold text-amber-900 flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" /> Key Material Risks
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>Terpene Permeation:</strong> Aromas leak through low-density PE within days, causing product oxidation.</li>
                <li>• <strong>Stress-Cracking:</strong> Acidic components weaken heat-sealed joints, risking transport leaks.</li>
                <li>• <strong>Aroma Scavenging:</strong> High-terpene liquids degrade plastic flavor profiles, turning premium oils rancid.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-green-600" /> Engineering Requirements
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>Metallized Terpene Barrier:</strong> A solid foil core (aluminum or high-density EVOH coating).</li>
                <li>• <strong>Acid-Resistant Sealants:</strong> Co-polymer laminates tested against direct fruit extracts.</li>
                <li>• <strong>FSC Solid display boxes:</strong> Protective outer cartons for delicate capsules or glass-alternative pouches.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'packaging-options',
      title: '5 Packaging Options Compared: Low-Cost MVP to Sustainable Premium',
      icon: <Package className="h-5 w-5 text-green-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            We provide a complete spectrum of certified packaging solutions for direct-to-consumer launches, small-batch demand testing, and massive wholesale production.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Option 1: Bottle-Shaped Specialty Sachet */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 1</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Low Cost MVP</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">Bottle-Shaped Foil Sachet</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  An eye-catching, specialty aluminum sachet shape designed for single-use trial packs or travel-sized launches. Extremely cost-effective with absolute light and air protection.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• High-Barrier Matte Aluminum</li>
                  <li>• Ideal for trial doses (5-30g)</li>
                  <li>• Tear-notch for smooth opening</li>
                </ul>
              </div>
              <Link to="/store/product/bottle-shape-sachet-bag" className="text-sm font-semibold text-green-700 hover:text-green-800 flex items-center gap-1 mt-2">
                Order Sachets (From US$0.06) <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 2: Plastic-Free Foil Capsule */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 2</span>
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded">Premium & Distinct</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">Plastic-Free Foil Capsule</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Compact 40ml MVP capsules made of aluminum foil with heat-sealed tops. Zero plastics and bold luxury unboxing appeal—perfect for gifting and premium sampling.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• Pure metallic barrier layer</li>
                  <li>• Matte high-end retail aesthetic</li>
                  <li>• Minimal initial machinery startup cost</li>
                </ul>
              </div>
              <Link to="/store" className="text-sm font-semibold text-green-700 hover:text-green-800 flex items-center gap-1 mt-2">
                Request Custom Capsule RFQ <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 3: Clear Recyclable Spout Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 3</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Eco Refill Style</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">Recyclable Spout Pouch</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  A high-clarity mono-material PE stand-up pouch that is fully recyclable in standard plastic streams. Perfect for D2C refills with high branding visibility.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• Mono-material EVOH/PE structure</li>
                  <li>• Golden product color completely visible</li>
                  <li>• Lower carbon footprint than bottles</li>
                </ul>
              </div>
              <Link to="/store/product/eco-standup" className="text-sm font-semibold text-green-700 hover:text-green-800 flex items-center gap-1 mt-2">
                Buy Recyclable Pouches <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 4: Sugarcane Bio-PE Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 4</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-0.5 rounded"> sugarcane-based PE</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">Bio-PE Sugarcane Spout Pouch</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Sugarcane-derived organic polyethylene paired with advanced metallized barrier layers. The gold standard for ultimate long-term stability and transport seal integrity.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• Bio-based polymer structure</li>
                  <li>• Highest chemical defense against d-limonene</li>
                  <li>• Puncture resistant during logistics</li>
                </ul>
              </div>
              <Link to="/store/product/spouted-foil-pouch" className="text-sm font-semibold text-green-700 hover:text-green-800 flex items-center gap-1 mt-2">
                Shop Spouted Foil Pouches <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 5: FSC Capsule Display Box */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 5</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-0.5 rounded">Luxury Retail Gift</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">FSC Capsule Display Box</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Add matching premium FSC retail display boxes to your foil capsule line. Pairs custom die-cut inner trays and gold foil accents to create a complete luxury ecosystem.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• FSC Recycled Solid Grayboard</li>
                  <li>• Premium gold foil & matte finishes</li>
                  <li>• Ships flat to save storage space</li>
                </ul>
              </div>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-green-700 hover:text-green-800 flex items-center gap-1 mt-2">
                Design Custom Display Box <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'interactive-showcase',
      title: 'Premium Visual Mockups & Product Showcase',
      icon: <Sparkles className="h-5 w-5 text-green-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Click to inspect high-resolution product prototypes. Developed under active sugarcane material testing guidelines and sustainable FSC paper printing standards.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/materials/citrus_foil_capsule.png" 
                alt="Plastic-free metallic foil capsule for trial launch MVP" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">40ml Trial Foil Capsule</h5>
                <p className="text-[10px] text-neutral-500 mt-1">Plastic-free metallic seal, luxury matte skincare look.</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/materials/citrus_capsule_display_box.png" 
                alt="Premium FSC custom retail display box for metallic capsules" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">FSC Custom Gift Carton</h5>
                <p className="text-[10px] text-neutral-500 mt-1">Die-cut inserts, organic gold details, premium retail kit.</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/materials/citrus_clear_spout_pouch.png" 
                alt="Transparent recyclable mono-PE spout pouch for fruit liquid refills" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">Recyclable Spout Pouch</h5>
                <p className="text-[10px] text-neutral-500 mt-1">Mono-material design with visible liquid core.</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/materials/citrus_biope_spout_pouch.png" 
                alt="Sugar-cane bio-PE high barrier spout pouch for premium citrus oils" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">Bio-PE Spout Pouch</h5>
                <p className="text-[10px] text-neutral-500 mt-1">Sugarcane-based material, multi-layer high barrier protection.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200 flex flex-col md:flex-row items-center gap-6 mt-6">
            <div className="w-full md:w-1/3">
              <ClickableImage 
                src="/taobao/bottle-shape-sachet-bag/O1CN01q5cziX1wI7uDjUFyO_--1816946284-jpg_.webp" 
                alt="Bottle-shaped specialty foil sachet in matte finishes" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-3">
              <span className="bg-[#D4FF00] text-black text-[10px] font-black px-2.5 py-1 uppercase rounded-full border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                Highlight Launch Solution
              </span>
              <h4 className="font-bold text-neutral-900 text-lg">Featured Low-Cost Solution: Bottle-Shaped Specialty Sachet</h4>
              <p className="text-sm text-neutral-700">
                Want to stand out without spending a fortune? The <strong>Bottle-Shaped Specialty Foil Sachet</strong> mimics standard liquid bottles at a fraction of the weight, volume, and tooling costs. Ideal for shipping travel-sized formulas or organic cosmetics samples directly in small cardboard mailers.
              </p>
              <div className="flex gap-4">
                <Link to="/store/product/bottle-shape-sachet-bag" className="bg-green-700 hover:bg-green-800 text-white text-xs font-semibold px-4 py-2.5 rounded transition">
                  Buy Stock Sachets (MOQ 100)
                </Link>
                <Link to="/store/product/eco-pla-sealing-sticker" className="bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-semibold px-4 py-2.5 rounded border border-neutral-300 transition">
                  Order Clear PLA Sealing Stickers
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
      icon: <Award className="h-5 w-5 text-green-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 text-sm">
          <p>
            To ensure zero structural degradation and absolute chemical compatibility, we recommend following the Achieve Pack lab-testing framework prior to full mass production:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">🧪 Phase 1: Material Verification</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Confirm if formula has high terpene ratios (e.g., &gt;1.5% d-limonene).</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Check water/oil emulsion stability under different temperatures.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Assess active solvents (alcohol or organic surfactants) present in formula.</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">⚖ Phase 2: Integrity Testing</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Run a 30-day continuous stress test at 40°C in simulated retail environments.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Conduct standard drop and vacuum puncture leak tests under shipping loads.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Verify seal strength consistency across both heat-sealed capsules and pouch caps.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Are active citrus terpenes compatible with standard polyethylene (PE)?",
      answer: "Standard low-density polyethylene (LDPE) is highly porous to volatile terpenes, leading to rapid aroma transmission, flavor loss, and bottle/capsule deflation. However, high-density mono-PE (copolymer structures) containing specialty EVOH barrier layers block up to 99.8% of terpenes, enabling a sustainable monomaterial recycling claim without degradation."
    },
    {
      question: "How do I prevent oxidation and aroma loss in citrus oils?",
      answer: "Citrus oils degrade rapidly when exposed to oxygen, UV rays, and moisture. To preserve active terpene concentrations and prevent structural oxidation, we recommend using solid aluminum metallized foils or sugarcane-based multi-layer Bio-PE high-barrier pouch formats."
    },
    {
      question: "What is the primary benefit of the Bottle-Shaped Specialty Foil Sachet?",
      answer: "The specialty bottle sachet is the perfect low-cost retail option. It is extremely eye-catching, holds from 5g to 35g of material, requires zero rigid packaging tooling costs, and provides an excellent chemical and terpene barrier via its multi-layer foil structure."
    },
    {
      question: "Can I print custom logos in low minimum quantities?",
      answer: "Yes! While standard high-capacity packaging suppliers require 20,000+ units, Achieve Pack offers custom printed spout pouches, custom tuck gift boxes, and specialty foil sachets starting from low MOQs (from 500 units) to fit startup launch campaigns."
    }
  ]

  const tables = [
    {
      title: "Technical Comparison: Citrus Packaging Options",
      data: {
        headers: ["Format", "Oxygen Barrier (OTR)", "Water Vapor (WVTR)", "Acid/Terpene Resistance", "MOQ", "Relative Cost"],
        rows: [
          ["Bottle Foil Sachet", "0.01 ml/m²/day", "0.02 g/m²/day", "★★★★★ (Foil Core)", "100 pcs", "Low ($)"],
          ["Foil Capsule MVP", "0.02 ml/m²/day", "0.03 g/m²/day", "★★★★☆ (Protected Alum)", "500 pcs", "Medium ($$)"],
          ["Clear Mono-PE Pouch", "0.45 ml/m²/day", "0.35 g/m²/day", "★★★☆☆ (Co-PE EVOH)", "500 pcs", "Medium ($$)"],
          ["Sugarcane Bio-PE Pouch", "0.05 ml/m²/day", "0.08 g/m²/day", "★★★★★ ( Sugarcane Foil)", "500 pcs", "High ($$$)"],
          ["FSC Custom Display Box", "N/A (Outer Protection)", "N/A", "N/A", "200 pcs", "Premium ($$$$)"]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: "Spouted Foil Stand Up Pouches",
      url: "/store/product/spouted-foil-pouch",
      description: "Buy high-barrier center-spouted aluminum pouches designed for chemical and liquid formulations."
    },
    {
      title: "Eco Stand Up Pouches",
      url: "/store/product/eco-standup",
      description: "Organic sustainable stand-up pouch catalog supporting eco-friendly recycling streams."
    },
    {
      title: "Bottle-Shaped Specialty Sachet Pouch",
      url: "/store/product/bottle-shape-sachet-bag",
      description: "Order eye-catching high-barrier foil sachets in gorgeous matte pastel finishes."
    },
    {
      title: "Premium PLA Sealing Stickers",
      url: "/store/product/eco-pla-sealing-sticker",
      description: "Biodegradable heat-stable transparent labels for sealing capsules or folding pouches."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Citrus Oil Packaging Solutions: Foil Capsule vs. Spout Pouches | Achieve Pack</title>
        <meta name="description" content="Compare premium sustainable packaging directions for liquid citrus oils: high-barrier bottle sachets, foil capsules, recyclable mono-PE, and Bio-PE pouches. Shield volatile acidic terpenes from oxidation and leakage." />
        <link rel="canonical" href="https://achievepack.com/solutions/citrus-oil-packaging" />
        <meta property="og:title" content="Citrus Oil Packaging Solutions: Sachets, Capsules & Spout Pouches" />
        <meta property="og:description" content="Complete packaging engineering guide for citrus liquids and terpene extraction. Prevent aroma leakage and stress-cracking with certified solutions." />
        <meta property="og:url" content="https://achievepack.com/solutions/citrus-oil-packaging" />
        <meta name="keywords" content="citrus oil packaging, sachet pouch honey, d-limonene compatibility, terpene barrier pouch, recyclable spout pouch, bio-PE sugarcane pouch, custom cosmetic box, low MOQ packaging, foil capsule packaging" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Citrus Oil Packaging Solutions Ecosystem",
            "description": "Complete packaging solution range comparing foil capsules, spouted pouches, and specialty bottle sachets for liquid citrus oils and cosmetics.",
            "brand": {
              "@type": "Brand",
              "name": "Achieve Pack"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "0.06",
              "highPrice": "2.57",
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
        heroBgColor="#14532d"
        title="Citrus Oil Packaging Solutions: Sachet vs. Foil Capsule vs. Spout Pouches"
        description="Premium material engineering guide for packaging liquid citrus and terpene-based cosmetics. Choose from high-barrier, recyclable, and bio-based PE options."
        keywords={['citrus oil packaging', 'limonene barrier', 'recyclable spout pouch', 'sachet pouch sample']}
        heroTitle="Citrus Oil & Terpene Packaging Solutions"
        heroSubtitle="High-Barrier Sachets | Recyclable Spout Pouches | Premium Foil Capsules & Gift Cartons"
        introSummary="Startup-level demand testing demands packaging that balances active chemical protection, leak-resistance, and carbon-reduction goals. Compare our five engineered packaging options for citrus extracts, skincare oils, and organic refills."
        sections={sections}
        tables={tables}
        faqs={faqs}
        relatedLinks={relatedLinks}
        schemaType="Product"
        heroImage="/imgs/materials/citrus_clear_spout_pouch.png"
      />
    </>
  )
}

export default CitrusOilPackagingPage
