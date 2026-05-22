import { Helmet } from 'react-helmet-async'
import { Beaker, Shield, AlertTriangle, ArrowRight, Sparkles, CheckCircle, Package } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { getBaseUrl } from '../../../utils/domain'

export default function PouchCitrusOilPackagingPage() {
  const baseUrl = getBaseUrl()

  const OPTION_CARDS = [
    {
      id: 'bottle-sachet',
      title: 'BOTTLE_FOIL_SACHET',
      badge: '★ Best Value MVP',
      badgeColor: 'cyan',
      description: 'An eye-catching, specialty bottle-shaped aluminum foil sachet. Absolute light/aroma barrier at the lowest possible cost.',
      features: [
        'Holds ~5g to 35g product',
        'Foil core blocks all terpenes',
        'Tear notch for easy unboxing',
        'MOQ from just 100 units!'
      ],
      ctaText: 'Shop Sachets (From $0.06)',
      ctaUrl: '/store/product/bottle-shape-sachet-bag',
      image: '/taobao/bottle-shape-sachet-bag/O1CN01q5cziX1wI7uDjUFyO_--1816946284-jpg_.webp',
      color: 'bg-white'
    },
    {
      id: 'foil-capsule',
      title: 'FOIL_CAPSULE_MVP',
      badge: '★ Premium Gifting',
      badgeColor: 'amber',
      description: 'Plastic-free pure aluminum capsules with custom heat-sealed lids. Perfect for trial launches, serums, or high-end cosmetic kits.',
      features: [
        'Compact 40ml custom dosage',
        'Skincare-grade metallic look',
        'Pairs with custom boxes'
      ],
      ctaText: 'Custom Capsule RFQ',
      ctaUrl: '/store',
      image: '/imgs/materials/citrus_foil_capsule.png',
      color: 'bg-white'
    },
    {
      id: 'recyclable-spout',
      title: 'RECYCLABLE_SPOUT_POUCH',
      badge: '★ Eco Refill Hub',
      badgeColor: 'lime',
      description: 'A transparent mono-PE standing pouch designed for sustainable direct-to-consumer refills. Let your golden formula shine.',
      features: [
        'High-density EVOH terpene barrier',
        'Single-material recyclable stream',
        'Lightweight, eco-conscious story'
      ],
      ctaText: 'Shop Recyclable (MOQ 500)',
      ctaUrl: '/store/product/eco-standup',
      image: '/imgs/materials/citrus_clear_spout_pouch.png',
      color: 'bg-white'
    },
    {
      id: 'biope-spout',
      title: 'BIO_PE_FOIL_POUCH',
      badge: '★ Sugarcane Shield',
      badgeColor: 'magenta',
      description: 'Organic sugarcane-derived polyethylene paired with full foil protection. Highest chemical resistance for aggressive formulas.',
      features: [
        ' sugarcane bio-materials',
        'Ultimate shelf life protection',
        'Reinforced puncture defense'
      ],
      ctaText: 'Buy High-Barrier Spouts',
      ctaUrl: '/store/product/spouted-foil-pouch',
      image: '/imgs/materials/citrus_biope_spout_pouch.png',
      color: 'bg-white'
    }
  ]

  const CHEMICAL_COMPATIBILITIES = [
    {
      property: "Material Core",
      sachet: "Matte Alum Foil",
      capsule: "Molded Aluminum",
      monoPe: "Co-Extruded Mono PE",
      bioPe: " Sugarcane PE"
    },
    {
      property: "D-Limonene Def.",
      sachet: "★★★★★ (Zero loss)",
      capsule: "★★★★★ (Zero loss)",
      monoPe: "★★★☆☆ (EVOH coated)",
      bioPe: "★★★★★ (Ultimate shield)"
    },
    {
      property: "Water Vapor Barrier",
      sachet: "★★★★★",
      capsule: "★★★★★",
      monoPe: "★★★★☆",
      bioPe: "★★★★★"
    },
    {
      property: "Sustainability",
      sachet: "FSC certified",
      capsule: "Plastic-free",
      monoPe: "Recyclable mono-PE",
      bioPe: "Plant-derived Sugarcane"
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Citrus Oil Packaging | Low MOQ Eco Spout Pouches & Sachets | Pouch.eco</title>
        <meta name="description" content="Launch your liquid citrus oil or beauty brand with premium eco-friendly spouted pouches, foil capsules, and bottle-shaped sachets from just 100 pieces. Leak-proof and certified." />
        <link rel="canonical" href={`${baseUrl}/solutions/citrus-oil-packaging`} />
        <meta property="og:title" content="Citrus Oil & Cosmetics Packaging | Low MOQ | Pouch.eco" />
        <meta property="og:description" content="Compare bottle sachets, foil capsules, and recyclable mono-PE spout pouches designed for active botanical oils." />
        <meta property="og:url" content={`${baseUrl}/solutions/citrus-oil-packaging`} />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-16 pb-24 border-b-4 border-black overflow-hidden bg-[#F0F0F0]">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center space-y-8">
          <div className="inline-block bg-black text-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-['JetBrains_Mono'] font-bold text-sm">LAUNCH_SOLUTIONS_05</span>
          </div>

          <h1 className="font-black text-5xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
            Citrus Oil<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">Packaging</span>
          </h1>

          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto text-left font-['JetBrains_Mono'] space-y-2">
            <p className="font-bold text-base md:text-lg">
              &gt; PROBLEM: Active d-limonene & terpenes chemically stress low-quality plastics.
            </p>
            <p className="font-bold text-base md:text-lg">
              &gt; RESPONSE: 5 engineered layers protecting aroma, seals, and leak resistance.
            </p>
            <p className="font-bold text-base md:text-lg">
              &gt; ACCESSIBILITY: Launch with low MOQs (from 100 pcs) today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
              Book Tech Consult
            </NeoButton>
            <NeoButton to="/products" variant="secondary">
              Browse Store
            </NeoButton>
          </div>
        </div>
      </section>

      {/* Terpene Chemical Insight Warning card */}
      <section className="py-16 px-4 md:px-6 max-w-4xl mx-auto">
        <NeoCard color="bg-amber-100" className="border-4 border-black">
          <h2 className="font-black text-2xl md:text-3xl uppercase flex items-center gap-2 mb-4">
            <AlertTriangle className="h-6 w-6 text-amber-600" /> Technical Warning: Terpene Permeation
          </h2>
          <p className="font-['Space_Grotesk'] text-base md:text-lg leading-relaxed mb-4">
            Citrus oils contain high levels of active terpenes (like d-limonene) which act as organic solvents. In ordinary thin plastic sachets, these compounds swell the polymer matrix, leading to rapid aroma leakage, packaging deflation, and eventual stress-cracking.
          </p>
          <div className="border-t-2 border-dashed border-black pt-4 font-['JetBrains_Mono'] text-xs font-bold space-y-1">
            <div>&gt; Recommended WVTR (Water Vapor Transmission): &lt; 0.1 g/m²/day</div>
            <div>&gt; Recommended OTR (Oxygen Transmission): &lt; 0.1 ml/m²/day</div>
            <div>&gt; Approved barrier material core: Metallized Foil / Molded Aluminum / EVOH Copolymer</div>
          </div>
        </NeoCard>
      </section>

      {/* Main Options Grid */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-black text-4xl md:text-6xl uppercase leading-none">
            Packaging<br/>Directions
          </h2>
          <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#00FFFF] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            FROM_LOW_COST_TO_PREMIUM
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {OPTION_CARDS.map((card) => (
            <NeoCard key={card.id} color={card.color} className="flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <NeoBadge color={card.badgeColor}>{card.badge}</NeoBadge>
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-neutral-400">[{card.title}]</span>
                </div>
                
                <div className="aspect-video overflow-hidden border-4 border-black bg-neutral-100">
                  <ClickableImage 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="font-['Space_Grotesk'] text-lg leading-relaxed pt-2">
                  {card.description}
                </p>

                <ul className="space-y-1 font-['JetBrains_Mono'] text-xs font-bold bg-neutral-50 p-4 border-2 border-black">
                  {card.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <NeoButton href={card.ctaUrl} variant="primary" className="w-full text-center">
                  {card.ctaText}
                </NeoButton>
              </div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* Foil Capsule Display Box matching concept */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <NeoCard color="bg-[#D4FF00]">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/5 border-4 border-black overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <ClickableImage 
                src="/imgs/materials/citrus_capsule_display_box.png" 
                alt="FSC retail display box design for premium foil capsules" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="w-full md:w-3/5 space-y-4">
              <span className="bg-black text-[#D4FF00] font-black uppercase text-[10px] px-3 py-1 border-2 border-[#D4FF00]">
                UNBOXING_DESIGN_ECOSYSTEM
              </span>
              <h3 className="font-black text-3xl md:text-5xl uppercase leading-none text-black">
                FSC Capsule Display Box Concept
              </h3>
              <p className="font-['Space_Grotesk'] text-lg text-black leading-relaxed">
                Elevate your foil capsules with custom printed cardboard display boxes. Ideal for retail shelves or e-commerce subscription boxes, featuring organic sugarcane-based inserts, precision die-cut capsule trays, and premium gold foil stamping. Zero waste, fully biodegradable.
              </p>
              <div className="flex gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="dark">
                  Request Free 3D Mockup
                </NeoButton>
              </div>
            </div>
          </div>
        </NeoCard>
      </section>

      {/* Chemical Compatibility Table */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <NeoCard className="overflow-x-auto">
          <h3 className="font-black text-2xl uppercase mb-6 flex items-center gap-2">
            <Beaker className="h-6 w-6" /> Material Performance Grid
          </h3>
          <table className="w-full text-left font-['JetBrains_Mono'] text-xs md:text-sm border-collapse">
            <thead>
              <tr className="border-b-4 border-black">
                <th className="pb-3 uppercase">Property</th>
                <th className="pb-3 uppercase">Bottle Sachet</th>
                <th className="pb-3 uppercase">Foil Capsule</th>
                <th className="pb-3 uppercase">Recyclable Mono-PE</th>
                <th className="pb-3 uppercase">Bio-PE Sugarcane</th>
              </tr>
            </thead>
            <tbody>
              {CHEMICAL_COMPATIBILITIES.map((row, idx) => (
                <tr key={idx} className="border-b-2 border-black/10 hover:bg-neutral-50 transition-colors">
                  <td className="py-3 font-bold">{row.property}</td>
                  <td className="py-3">{row.sachet}</td>
                  <td className="py-3">{row.capsule}</td>
                  <td className="py-3">{row.monoPe}</td>
                  <td className="py-3">{row.bioPe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </NeoCard>
      </section>

      {/* Seal sticker & PLA accessories */}
      <section className="py-16 px-4 md:px-6 max-w-4xl mx-auto">
        <NeoCard color="bg-[#00FFFF]" className="text-center space-y-6">
          <h3 className="font-black text-3xl md:text-4xl uppercase">Seal Your Package Safely</h3>
          <p className="font-['Space_Grotesk'] text-lg">
            Ensure tamper-evident security with our certified biodegradable <strong>Premium PLA Sealing Stickers</strong>. Perfect for sealing foil capsules or securing paper outer wraps.
          </p>
          <div className="flex gap-4 justify-center">
            <NeoButton href="/store/product/eco-pla-sealing-sticker" variant="dark">
              Order PLA Stickers
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="secondary">
              Request Samples
            </NeoButton>
          </div>
        </NeoCard>
      </section>
    </PouchLayout>
  )
}
