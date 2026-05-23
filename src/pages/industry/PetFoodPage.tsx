import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Beaker, Leaf, Award, CheckCircle, Clock, Shield, Target, 
  Package, Zap, Factory, AlertTriangle, ArrowRight, ShoppingBag, Sparkles 
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'

const PetFoodPage: React.FC = () => {
  const sections = [
    {
      id: 'grease-challenge',
      title: 'The Pet Food Challenge: Strong Odors, Grease Permeation & Puncture Resistance',
      icon: <Beaker className="h-5 w-5 text-slate-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p className="text-lg">
            Pet food, organic dog treats, and raw kibble are rich in animal fats, active proteins, and strong organic odors. Standard retail plastics fail quickly under direct grease exposure, leading to oily packaging exteriors and bad-smelling rancid spoilage. Furthermore, dehydrated treats and dense dry kibble have sharp edges that can easily puncture ordinary packaging during heavy logistics.
          </p>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 grid md:grid-cols-2 gap-6 my-4">
            <div>
              <h4 className="font-semibold text-amber-900 flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" /> Key Material Risks
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>Grease Migration:</strong> Animal fats permeate through low-density PE, creating sticky, stained bags.</li>
                <li>• <strong>Odor Leakage:</strong> Highly aromatic fish or beef treat odors leak out, ruining kitchen pantries.</li>
                <li>• <strong>Puncture Tears:</strong> Hard, dehydrated treats tear thin film cores, causing wholesale leaks.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-green-600" /> Engineering Requirements
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• <strong>Grease-Proof Barrier Liners:</strong> Co-extruded inner layers designed to withstand raw oil migration.</li>
                <li>• <strong>Aroma Defense Cores:</strong> Solid EVOH coatings or thick metallic layers to keep odors inside.</li>
                <li>• <strong>Heavy-Duty Puncture Defense:</strong> Co-polymer laminates tested against sharp treat drops.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'packaging-options',
      title: '5 Packaging Options Compared: Low-Cost MVP to Sustainable Premium',
      icon: <Package className="h-5 w-5 text-slate-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Choose from our range of five engineered sustainable packaging formats designed for raw strength, odor retention, and eco-friendly claims.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Option 1: Stand-Up Zipper Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 1</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Low Cost MVP</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">Stand-Up Zipper Pouch</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  The ideal retail choice for small-batch dog treats or organic pet supplements. High vertical display, strong pre-installed ziplock, and high-barrier grease resistance.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• Glossy or premium matte finishes</li>
                  <li>• Press-to-close airtight zipper</li>
                  <li>• Moderate cost, highly startup-friendly</li>
                </ul>
              </div>
              <Link to="/store/product/eco-standup" className="text-sm font-semibold text-slate-700 hover:text-slate-800 flex items-center gap-1 mt-2">
                Order Stand-Up Pouches (From US$0.09) <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 2: Flat Bottom Box Pouch */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 2</span>
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded">Premium Bulk Style</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">Flat Bottom Box Pouch</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Perfect for large-format pet food, raw kibble, or bulk cat treats. Stands completely upright with five fully printable panels for extreme brand presentation.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• Exceptional structural box profile</li>
                  <li>• Perfect for thick zippers and side handles</li>
                  <li>• Holds 1kg to 10kg loads easily</li>
                </ul>
              </div>
              <Link to="/products/compostable-coffee-bags" className="text-sm font-semibold text-slate-700 hover:text-slate-800 flex items-center gap-1 mt-2">
                Buy Flat Bottom Bags <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 3: Recyclable Mono-PE Gusset Bag */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 3</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Curbside Recyclable</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">Recyclable Mono-PE Gusset Pouch</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Engineered using a single polymer PE laminate containing EVOH coatings. Highly accepted in standard store recycling bins, delivering a premium carbon-reduced footprint.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• Curbside and drop-off recyclable claim</li>
                  <li>• Extreme puncture and impact defense</li>
                  <li>• Custom clear windows to view kibble</li>
                </ul>
              </div>
              <Link to="/store/product/eco-standup" className="text-sm font-semibold text-slate-700 hover:text-slate-800 flex items-center gap-1 mt-2">
                Order Recyclable PE Pouches <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 4: Compostable Kraft Treats Bag */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 4</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Zero-Waste Loop</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">Compostable Kraft treats bag</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Organic unbleached kraft paper paired with high-barrier plant-derived inner layers. 100% biodegradable in commercial composting, creating a perfect circular ecosystem.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• Earthy unbleached organic appearance</li>
                  <li>• BPI & EN 13432 compostability certified</li>
                  <li>• Outstanding animal fat defense</li>
                </ul>
              </div>
              <Link to="/products/compostable-coffee-bags" className="text-sm font-semibold text-slate-700 hover:text-slate-800 flex items-center gap-1 mt-2">
                Order Compostable Bags <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Option 5: FSC Recycled Supplement Carton */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs font-bold px-2.5 py-1 rounded">Option 5</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-0.5 rounded">Pet Supplement MVP</span>
                </div>
                <h4 className="font-bold text-neutral-900 text-lg mb-2">FSC Custom Carton Box</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Elevate your pet supplements, single-use jerky packs, or chew bars with customized FSC certified retail display cartons. Matte textures and spot varnish highlights.
                </p>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  <li>• FSC Recycled Solid Cardboard</li>
                  <li>• Precise custom die-cut inner dividers</li>
                  <li>• Ships flat to minimize inventory storage</li>
                </ul>
              </div>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-700 hover:text-slate-800 flex items-center gap-1 mt-2">
                Design Custom Cartons <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'interactive-showcase',
      title: 'Premium Visual Mockups & Product Showcase',
      icon: <Sparkles className="h-5 w-5 text-slate-700" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Click to inspect high-resolution product prototypes. Specially designed to stop grease migration and retain volatile dog food smells under strict BRC regulations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_pet_food_hero_v3_7652587.webp" 
                alt="Premium pet treats stand-up pouch packaging mockup" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">Premium Pet Treats Pouches</h5>
                <p className="text-[10px] text-neutral-500 mt-1">High barrier, oil-proof internal films, airtight ziplocks.</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/illustrated/a_pet_treats_v2_seal_7677464.webp" 
                alt="Earthy unbleached organic pet treats packaging pouch" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">Organic Kraft Treat Pouches</h5>
                <p className="text-[10px] text-neutral-500 mt-1">Earthy textures, plant-based compostable barrier cores.</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/blog/Sustainable-pet/a_pet_food_material_comparison_4636150.webp" 
                alt="Pet treats heavy duty packaging material comparison mockup" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">Heavy-Duty Treat Pouches</h5>
                <p className="text-[10px] text-neutral-500 mt-1">Extra thick co-polymer films, robust puncture defense.</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex flex-col justify-between">
              <ClickableImage 
                src="/imgs/blog/plant/a_pet_food_lifestyle_scene_9319878.webp" 
                alt="Pet food lifestyle scene with sustainable treat packaging" 
                className="w-full h-40 object-cover rounded-md mb-2 shadow-sm"
              />
              <div>
                <h5 className="font-semibold text-xs text-neutral-900">Treat Bags in Pantry Scene</h5>
                <p className="text-[10px] text-neutral-500 mt-1">Zero odor leakage, hermetically sealed for total security.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col md:flex-row items-center gap-6 mt-6">
            <div className="w-full md:w-1/3">
              <ClickableImage 
                src="/imgs/blog/Sustainable-pet/a_sustainable_pet_food_packaging_hero_2601845.webp" 
                alt="Compostable organic pet food treat bag standing upright" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-3">
              <span className="bg-[#D4FF00] text-black text-[10px] font-black px-2.5 py-1 uppercase rounded-full border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                Highlighted Pet Solution
              </span>
              <h4 className="font-bold text-neutral-900 text-lg">Featured Eco Solution: Certified Compostable Kraft Pet Treats Bag</h4>
              <p className="text-sm text-neutral-700">
                Align your pet brand with zero-waste initiatives using our <strong>Certified Compostable Kraft Treats Bags</strong>. These pouches use organic, unbleached kraft papers and specialized plant-derived barrier liners. Certified compostable under EN 13432 standards, they deliver excellent fat and grease protection without leaking greasy oils.
              </p>
              <div className="flex gap-4">
                <Link to="/products/compostable-coffee-bags" className="bg-slate-700 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded transition">
                  Buy Compostable Treat Bags (MOQ 100)
                </Link>
                <Link to="/store/product/eco-standup" className="bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-semibold px-4 py-2.5 rounded border border-neutral-300 transition">
                  Order Recyclable PE Pouches
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
      icon: <Award className="h-5 w-5 text-slate-700" />,
      content: (
        <div className="space-y-4 text-neutral-700 text-sm">
          <p>
            To assure zero animal oil seepage and secure total seal safety under packaging logistics load, we advise following this test pipeline:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">🧪 Phase 1: Material Verification</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Measure grease/oil concentration in treats to adjust sealant thickness layers.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Assess volatile protein aromas to verify OTR barrier specifications.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Verify raw material thickness to secure total puncture resilience.</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h5 className="font-bold text-neutral-900 mb-2">⚖ Phase 2: Integrity Testing</h5>
              <ul className="space-y-2 text-neutral-600 text-xs">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Run a 30-day grease migration test at 38°C to ensure zero outer stains.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Subject pouches to vibration testing to check seam stability during transport.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✔</span> Confirm zipper reseal durability over 50 simulated open/close usages.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "How do you prevent raw animal oils from seeping through compostable paper?",
      answer: "We use an advanced, multi-layer co-polymer structure that integrates a highly grease-resistant inner film core. This compostable sealant core stops natural fats and oils from seeping through, ensuring the outer unbleached kraft paper remains completely stain-free and dry."
    },
    {
      question: "Will strong pet treat odors escape from recyclable mono-PE pouches?",
      answer: "No. Our curbside-recyclable mono-PE pouches are co-extruded with high-performance EVOH barrier coatings. This compound blocks up to 99.7% of volatile organic odors, keeping highly aromatic treats hermetically locked inside without smelling up pantries."
    },
    {
      question: "Can these bags support heavy pet food weights (e.g., 5kg to 10kg)?",
      answer: "Yes! For large-format and heavy pet food weights, we recommend our Flat Bottom Gusset Pouches with reinforced quad-seal corners, thick polymer laminates, and built-in side handles. These are drop-tested to withstand up to 1.5-meter drops without seams bursting."
    },
    {
      question: "What is the MOQ for custom-printed pet food packaging bags?",
      answer: "We accommodate small business startups by offering custom printed stand-up treats pouches and bulk pet food bags starting from a low MOQ of just 500 pieces. Full-color digital customization means zero plate setup fees."
    }
  ]

  const tables = [
    {
      title: "Technical Comparison: Pet Food & Treats Packaging Options",
      data: {
        headers: ["Format", "Oxygen Barrier (OTR)", "Water Vapor (WVTR)", "Grease/Fat Resistance", "MOQ", "Relative Cost"],
        rows: [
          ["Stand-Up Zipper Pouch", "0.25 ml/m²/day", "0.22 g/m²/day", "★★★★☆ (Protected PE)", "100 pcs", "Low ($)"],
          ["Flat Bottom Box Pouch", "0.12 ml/m²/day", "0.15 g/m²/day", "★★★★★ (Thick Copolymer)", "500 pcs", "Medium ($$)"],
          ["Recyclable Mono-PE Bag", "0.32 ml/m²/day", "0.26 g/m²/day", "★★★★☆ (EVOH/PE Film)", "500 pcs", "Medium ($$)"],
          ["Compostable Kraft Pouch", "0.45 ml/m²/day", "0.39 g/m²/day", "★★★★★ (Grease Liner)", "500 pcs", "Medium ($$)"],
          ["FSC Custom Display Box", "N/A (Outer Protection)", "N/A", "N/A", "200 pcs", "Premium ($$$$)"]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: "Recyclable Mono-Material Pouches",
      url: "/store/product/eco-standup",
      description: "Explore our curbside-recyclable stand-up pouches with EVOH barrier coatings."
    },
    {
      title: "Compostable Stand Up Pouches",
      url: "/products/compostable-coffee-bags",
      description: "Buy premium certified compostable flexible kraft paper treat bags."
    },
    {
      title: "Custom Printed Box Cartons",
      url: "/store?category=boxes",
      description: "Browse premium FSC certified solid display folding cartons for retail packs."
    },
    {
      title: "Low MOQ Packaging Ecosystem",
      url: "/products/low-moq-packaging",
      description: "Check our flexible startup-friendly small batch solutions."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Sustainable Pet Food & Treats Packaging: Heavy Duty Bags | Achieve Pack</title>
        <meta name="description" content="Compare certified compostable and curbside recyclable pet food packaging. High-strength puncture resistance and grease-proof barrier bags with low MOQs." />
        <link rel="canonical" href="https://achievepack.com/industry/pet-food" />
        <meta property="og:title" content="Sustainable Pet Food & Treats Packaging Solutions" />
        <meta property="og:description" content="Heavy-duty, grease-proof flexible pouches for organic pet treats, kibble, and supplements. Certified compostable and recyclable options." />
        <meta property="og:url" content="https://achievepack.com/industry/pet-food" />
        <meta name="keywords" content="pet food packaging, dog treats packaging, compostable pet treats bag, recyclable pet food bag, mono-PE pet treats pouch, kibble packaging, cat treats bag, FSC pet box, low MOQ packaging" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Pet Food & Treats Packaging Ecosystem",
            "description": "Heavy-duty flexible pet treats packaging solutions comparing recyclable mono-polymer pouches, compostable unbleached kraft pouches, and custom FSC display gift boxes.",
            "brand": {
              "@type": "Brand",
              "name": "Achieve Pack"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "0.09",
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
        heroBgColor="#0f172a"
        title="Sustainable Pet Food & Treats Packaging: Heavy Duty Bags"
        description="Premium material engineering guide for packaging organic dog treats, kibble, cat jerks, and pet supplements. Discover certified compostable, recyclable and puncture-proof selections."
        keywords={['pet food packaging', 'dog treat bag', 'compostable pet treat bag', 'recyclable kibble bag']}
        heroTitle="Pet Food & Treats Packaging Solutions"
        heroSubtitle="Grease-Proof Barriers | Compostable jerks Bags | Curbside Recyclable Mono-PE Refills & Custom Display Boxes"
        introSummary="Startup pet treats brands and organic kibble manufacturers require packaging that blocks grease migration, locks in heavy animal odors, and handles high physical stress. Compare our five high-strength packaging formats."
        sections={sections}
        tables={tables}
        faqs={faqs}
        relatedLinks={relatedLinks}
        schemaType="Product"
        heroImage="/imgs/illustrated/a_pet_food_hero_v3_7652587.webp"
      />
    </>
  )
}

export default PetFoodPage
