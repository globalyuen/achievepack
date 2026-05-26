import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, Award, CheckCircle, Package, Shield, Clock, Recycle, MessageCircle, Target, Calendar, ArrowRight, ShoppingCart, ChevronDown, Compass, Cpu, Layers } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CompostableSideGussetPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'overview',
      title: 'Compostable Side Gusset Pouches',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack's compostable side gusset pouches</strong> represent the perfect marriage of traditional artisan aesthetics and cutting-edge ecological engineering. Commonly referred to as quad-seal or fold-over coffee bags, these pouches feature expandable side gussets that maximize storage volume while maintaining a remarkably compact retail shelf footprint.
          </p>
          <p>
            Certified under strict global standards including <strong>EN 13432</strong>, <strong>ASTM D6400</strong>, and <strong>AS 5810</strong>, our compostable side gusset bags are designed to completely return to nature as organic compost, leaving zero microplastics or toxins behind.
          </p>
          
          <div className="bg-primary-50 p-4 rounded-xl border border-primary-100 mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Technical Advantages of Side Gusset Pouches:</h4>
            <ul className="space-y-1.5 text-sm">
              <li>• <strong>Maximised Storage Volume</strong> – Side gussets expand fully to accommodate 24% more bulk volume than standard flat pouches.</li>
              <li>• <strong>Premium Tactile Kraft</strong> – Raw organic outer texture holds custom date/batch stamps and feels premium to touch.</li>
              <li>• <strong>Triplex High-Barrier</strong> – Protects delicate coffee oils and aromas from oxygen, moisture, and UV light for up to 12 months.</li>
              <li>• <strong>Automatic Line Compatible</strong> – Formed with precise mechanical tolerances for high-speed automatic B2B filling lines.</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/store/products/compostable-side-gusset-collection.png?v=2" 
              alt="Natural brown Kraft paper side gusset pouch collection for specialty coffee" 
              className="w-full rounded-2xl shadow-md border border-neutral-200"
              caption="Achieve Pack's premium compostable Kraft side gusset bag collection"
            />
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'High-Barrier Sustainable Materials',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            To achieve high-barrier coffee protection without using standard aluminum foils or fossil-fuel plastics, we engineer a premium **Triplex lamination structure** composed entirely of plant-based materials:
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-xl p-4 bg-white shadow-sm">
              <span className="text-2xl block mb-2">🪵</span>
              <h4 className="font-bold text-neutral-900 mb-1 text-sm">1. Outer Layer: Kraft Paper</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Sustainably sourced FSC-certified Kraft paper (White or Brown). Provides structural stiffness, direct ink stamp-holding properties, and raw tactile organic aesthetics.
              </p>
            </div>
            <div className="border border-neutral-200 rounded-xl p-4 bg-white shadow-sm">
              <span className="text-2xl block mb-2">🌽</span>
              <h4 className="font-bold text-neutral-900 mb-1 text-sm">2. Middle Barrier: NatureFlex™</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Renewable wood-pulp cellulose film. Provides an exceptional barrier against moisture, oxygen, and mineral oils, guaranteeing standard 12-month coffee shelf stability.
              </p>
            </div>
            <div className="border border-neutral-200 rounded-xl p-4 bg-white shadow-sm">
              <span className="text-2xl block mb-2">🌱</span>
              <h4 className="font-bold text-neutral-900 mb-1 text-sm">3. Inner Sealant: PLA / PBAT</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Certified plant-starch copolymer (Polyacetic Acid & PBAT). Creates high-strength airtight hermetic seals at standard sealing bar temperatures.
              </p>
            </div>
          </div>

          <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100 mt-4 text-xs leading-relaxed text-amber-900">
            <strong>🚀 B2B Packaging Note:</strong> Unlike cheap compostable bags that suffer from static electricity or tear easily, our proprietary PLA/PBAT blend features dynamic slip agents that slide easily on vertical form-fill-seal (VFFS) machinery pipelines.
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Closure & Valve Configurations',
      icon: <Cpu className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Customize your side gusset bags with fully compostable functional closure features tailored to your B2B/B2C fulfillment parameters:
          </p>
          
          <div className="space-y-3 mt-4">
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-xl border border-neutral-200/50">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold">
                💨
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 text-sm">One-Way Compostable Degassing Valve</h4>
                <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                  Crucial for freshly roasted coffee beans. Releases carbon dioxide gas build-up while locking out ambient oxygen. Our valves are certified compostable, ensuring the whole pouch degrades cleanly as one single unit.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-xl border border-neutral-200/50">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold">
                🔗
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 text-sm">Premium Reusable Tin-Tie Closures</h4>
                <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                  The classic roaster look. Allows customers to roll down the top header of the bag and seal it tightly with side metal ties. Tin-ties are easily peelable prior to backyard disposal.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-xl border border-neutral-200/50">
              <div className="w-10 h-10 bg-amber-50 text-amber-600 border border-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold">
                🏷️
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 text-sm">Premium PLA Biodegradable Sealing Stickers</h4>
                <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                  Due to the structural folds of expandable side gusset bags, standard internal press-to-close zippers are not feasible. Instead, we highly recommend using our certified 100% plant-based <Link to="/store/product/eco-pla-sealing-sticker" className="text-primary-600 font-semibold underline hover:text-primary-800">Premium PLA Sealing Stickers</Link> or <Link to="/products/custom-compostable-labels" className="text-primary-600 font-semibold underline hover:text-primary-800">Custom Compostable Labels</Link> to secure and seal rolled-down headers post-fill.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'composting',
      title: 'Certified Biodegradation Timeline',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Our side gusset bags are engineered to decompose cleanly back into organic soil humus without leaving microplastics or volatile chemical traces:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-white border border-neutral-200 p-5 rounded-2xl shadow-sm space-y-3">
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-green-50 text-green-700 border border-green-100 rounded-md uppercase tracking-wider">
                Home Compostable (AS 5810)
              </span>
              <h4 className="font-bold text-neutral-900 text-base">Backyard Compost Bin</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Decomposes fully within <strong>180 days</strong> at ambient backyard temperatures (approx. 20-30°C). Our bio-barrier is certified safe for garden soil and worm farms.
              </p>
              <div className="text-[10px] font-mono text-neutral-400 mt-2">
                Standards: AS 5810, NF T51-800
              </div>
            </div>
            
            <div className="bg-white border border-neutral-200 p-5 rounded-2xl shadow-sm space-y-3">
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-md uppercase tracking-wider">
                Industrial Compostable (EN 13432)
              </span>
              <h4 className="font-bold text-neutral-900 text-base">Municipal Organics Run</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Decomposes fully within <strong>90 days</strong> under active industrial composting facilities (elevated heat 55-60°C and managed moisture). 
              </p>
              <div className="text-[10px] font-mono text-neutral-400 mt-2">
                Standards: EN 13432, ASTM D6400, BPI
              </div>
            </div>
          </div>

          <div className="mt-6">
            <ClickableImage 
              src="/imgs/store/products/compostable-side-gusset-retail-box.png?v=2" 
              alt="Natural unprinted Kraft paper side gusset bags arranged dynamically at various angles on a sleek dark studio background" 
              className="w-full rounded-2xl shadow-md border border-neutral-200"
              caption="Achieve Pack's unprinted premium Kraft side gusset coffee bags at various angles"
            />
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'High-Barrier Sustainable Materials',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            To achieve high-barrier coffee protection without using standard aluminum foils or fossil-fuel plastics, we engineer a premium **Triplex lamination structure** composed entirely of plant-based materials:
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-xl p-4 bg-white shadow-sm">
              <span className="text-2xl block mb-2">🪵</span>
              <h4 className="font-bold text-neutral-900 mb-1 text-sm">1. Outer Layer: Kraft Paper</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Sustainably sourced FSC-certified Kraft paper (White or Brown). Provides structural stiffness, direct ink stamp-holding properties, and raw tactile organic aesthetics.
              </p>
            </div>
            <div className="border border-neutral-200 rounded-xl p-4 bg-white shadow-sm">
              <span className="text-2xl block mb-2">🌽</span>
              <h4 className="font-bold text-neutral-900 mb-1 text-sm">2. Middle Barrier: NatureFlex™</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Renewable wood-pulp cellulose film. Provides an exceptional barrier against moisture, oxygen, and mineral oils, guaranteeing standard 12-month coffee shelf stability.
              </p>
            </div>
            <div className="border border-neutral-200 rounded-xl p-4 bg-white shadow-sm">
              <span className="text-2xl block mb-2">🌱</span>
              <h4 className="font-bold text-neutral-900 mb-1 text-sm">3. Inner Sealant: PLA / PBAT</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Certified plant-starch copolymer (Polyacetic Acid & PBAT). Creates high-strength airtight hermetic seals at standard sealing bar temperatures.
              </p>
            </div>
          </div>

          <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100 mt-4 text-xs leading-relaxed text-amber-900">
            <strong>🚀 B2B Packaging Note:</strong> Unlike cheap compostable bags that suffer from static electricity or tear easily, our proprietary PLA/PBAT blend features dynamic slip agents that slide easily on vertical form-fill-seal (VFFS) machinery pipelines.
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Closure & Valve Configurations',
      icon: <Cpu className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Customize your side gusset bags with fully compostable functional closure features tailored to your B2B/B2C fulfillment parameters:
          </p>
          
          <div className="space-y-3 mt-4">
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-xl border border-neutral-200/50">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold">
                💨
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 text-sm">One-Way Compostable Degassing Valve</h4>
                <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                  Crucial for freshly roasted coffee beans. Releases carbon dioxide gas build-up while locking out ambient oxygen. Our valves are certified compostable, ensuring the whole pouch degrades cleanly as one single unit.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-xl border border-neutral-200/50">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold">
                🔗
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 text-sm">Premium Reusable Tin-Tie Closures</h4>
                <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                  The classic roaster look. Allows customers to roll down the top header of the bag and seal it tightly with side metal ties. Tin-ties are easily peelable prior to backyard disposal.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-xl border border-neutral-200/50">
              <div className="w-10 h-10 bg-amber-50 text-amber-600 border border-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold">
                🔒
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 text-sm">Resealable Internal Zipper (Optional)</h4>
                <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                  For brands seeking airtight zipper convenience, we integrate high-integrity bio-compostable zip-locks that extend product freshness indefinitely.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'composting',
      title: 'Certified Biodegradation Timeline',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Our side gusset bags are engineered to decompose cleanly back into organic soil humus without leaving microplastics or volatile chemical traces:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-white border border-neutral-200 p-5 rounded-2xl shadow-sm space-y-3">
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-green-50 text-green-700 border border-green-100 rounded-md uppercase tracking-wider">
                Home Compostable (AS 5810)
              </span>
              <h4 className="font-bold text-neutral-900 text-base">Backyard Compost Bin</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Decomposes fully within <strong>180 days</strong> at ambient backyard temperatures (approx. 20-30°C). Our bio-barrier is certified safe for garden soil and worm farms.
              </p>
              <div className="text-[10px] font-mono text-neutral-400 mt-2">
                Standards: AS 5810, NF T51-800
              </div>
            </div>
            
            <div className="bg-white border border-neutral-200 p-5 rounded-2xl shadow-sm space-y-3">
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-md uppercase tracking-wider">
                Industrial Compostable (EN 13432)
              </span>
              <h4 className="font-bold text-neutral-900 text-base">Municipal Organics Run</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Decomposes fully within <strong>90 days</strong> under active industrial composting facilities (elevated heat 55-60°C and managed moisture). 
              </p>
              <div className="text-[10px] font-mono text-neutral-400 mt-2">
                Standards: EN 13432, ASTM D6400, BPI
              </div>
            </div>
          </div>

          <div className="mt-6">
            <ClickableImage 
              src="/imgs/store/products/compostable-side-gusset-retail-box.png?v=2" 
              alt="Premium natural Kraft coffee pouch seated inside a black retail box on a green mossy background" 
              className="w-full rounded-2xl shadow-md border border-neutral-200"
              caption="Achieve Pack's B2B premium pouch-in-box retail presentation"
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Are compostable side gusset bags home compostable?",
      answer: "Yes, we offer certified home compostable configurations (AS 5810 & OK Compost HOME) using a high-barrier compostable Kraft paper cellulose structure. They decompose fully in backyard compost bins within 180 days."
    },
    {
      question: "What is the difference between side gusset and flat bottom box pouches?",
      answer: "A side gusset pouch is sealed at the top and bottom with expandable sides. A flat bottom pouch has a distinct flat box-like bottom. Side gusset bags provide a classic rustic artisanal coffee roastery look and cost slightly less in volume production."
    },
    {
      question: "Can these bags be used on automatic filling machinery?",
      answer: "Yes. Our side gusset pouches are engineered with precise mechanical seals and premium slip-agent plant copolymer liners (PLA/PBAT) to guarantee high speed, static-free sliding on vertical form-fill-seal (VFFS) systems."
    },
    {
      question: "Do compostable side gusset bags provide a high oxygen barrier?",
      answer: "Yes. We laminate with NatureFlex™ (regenerated wood pulp cellulose) which offers barrier ratings of OTR < 1.0 cc/m²/day and WVTR < 1.5 g/m²/day, equivalent to traditional plastic foils, keeping roasted beans fresh up to 12 months."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Compostable Side Gusset Pouches | ASTM D6400 Certified | Achieve Pack</title>
        <meta name="description" content="Premium certified compostable side gusset coffee bags. ASTM D6400 & EN 13432 home compostable. Low MOQ 500 pcs, $0 plate setup fee. Perfect for specialty roasters." />
        <link rel="canonical" href="https://achievepack.com/products/compostable-side-gusset-bags" />
        <meta property="og:title" content="Compostable Side Gusset Pouches | Certified Organic | Achieve Pack" />
        <meta property="og:description" content="Premium certified compostable side gusset coffee bags. ASTM D6400 & EN 13432 certified. Low MOQ from 500 pieces for specialty roasters." />
        <meta property="og:url" content="https://achievepack.com/products/compostable-side-gusset-bags" />
        <meta property="og:image" content="https://achievepack.com/imgs/store/products/compostable-side-gusset-collection.png" />
        <meta property="og:type" content="product" />
        <meta name="keywords" content="compostable side gusset bags, certified side gusset coffee bag, Kraft coffee bags, BPI certified side gussets, EN 13432 coffee pouch, degassing valve side gussets, home compostable coffee bags, low MOQ gusset pouches" />
        
        {/* Product Graph Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "@id": "https://achievepack.com/products/compostable-side-gusset-bags#product",
                "name": "Compostable Side Gusset Coffee Pouches",
                "description": "Premium certified compostable side gusset bags with one-way degassing valves. Certified home and industrial compostable.",
                "brand": {
                  "@type": "Brand",
                  "name": "Achieve Pack"
                },
                "offers": {
                  "@type": "AggregateOffer",
                  "lowPrice": "0.50",
                  "highPrice": "2.90",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "offerCount": "4"
                },
                "additionalProperty": [
                  {
                    "@type": "PropertyValue",
                    "name": "Certification",
                    "value": "ASTM D6400, EN 13432, AS 5810, BPI"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Minimum Order",
                    "value": "500 pieces"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#1c1917"
        title="Compostable Side Gusset Pouches | ASTM D6400 Certified | Achieve Pack"
        description="Premium certified compostable side gusset coffee bags. ASTM D6400 & EN 13432 home compostable. Low MOQ 500 pcs, $0 plate setup fee. Perfect for specialty roasters."
        keywords={['compostable side gusset bags', 'certified side gusset coffee bag', 'Kraft coffee bags', 'BPI certified side gussets', 'EN 13432 coffee pouch', 'degassing valve side gussets']}
        heroTitle="Compostable Side Gusset Pouches"
        heroSubtitle="ASTM D6400 & EN 13432 Certified | Organic Kraft Fibers | Low MOQ from 500"
        introSummary="Premium compostable side gusset pouches engineered specifically for specialty coffee roasters. Combining the classic artisanal quad-fold look with certified BPI home-compostable barrier technologies, expandable gussets, and optional degassing valves."
        sections={sections}
        faqs={faqs}
        heroImage="/imgs/store/products/compostable-side-gusset-collection.png?v=2"
        heroImageAlt="Achieve Pack premium compostable Kraft paper side gusset pouch collection"
      />

      {/* Visually Hidden Semantic AIEO Crawling Section */}
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map(f => (
            <article key={f.question} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{f.question}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{f.answer}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  )
}

export default CompostableSideGussetPage
