import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import {
  CheckCircle, ChevronDown, Calendar, ShoppingCart,
  Award, Shield, AlertTriangle, Leaf, Package, Wind, Sparkles, RefreshCw, Cpu, Activity
} from 'lucide-react'

const p = 'seoPages.pages.bioPECoffeeFlatBottomPouch'

const BioPECoffeeFlatBottomPouchPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'bio pe coffee pouch',
    'bio-pe recyclable flat bottom coffee pouch',
    'plant based coffee packaging with valve',
    '12 oz bio-pe flat bottom box pouch',
    'evoh barrier coffee pouch with degassing valve',
    'pocket zipper bio pe coffee bag',
    'recyclable roasted coffee beans pouch',
    'sustainable specialty coffee packaging'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Coffee Beans Stale Fast Due to Subpar Moisture & Oxygen Barriers',
      solution: 'Conventional eco-friendly plastic films often suffer high oxygen transmission rates (OTR > 25 cc/m²/24hr), causing roasted coffee aromatics to oxidize within 3 weeks. By laminating an ultra-thin EVOH (Ethylene Vinyl Alcohol) core layer (<5% total polymer weight) between I\'m Green™ Bio-PE layers, we reduce OTR to <0.5 cc/m²/24hr and Water Vapor Transmission Rate (WVTR) to <0.8 g/m²/24hr — preserving fragile specialty roast profiles for 12+ months while maintaining 100% Recyclable #4 PE stream classification.',
      icon: <Wind className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Bag Bursting & Leaky Seals Caused by CO₂ Degassing Pressure',
      solution: 'Freshly roasted whole-bean coffee releases up to 10 liters of carbon dioxide gas per kilogram over 14 days. Without a calibrated one-way degassing valve, flat bottom bags balloon and burst along the side gusset heat seals during transit. We integrate a bio-compatible, high-precision diaphragm valve set at 2.5–3.5 mbar opening pressure that vents excess CO₂ immediately while blocking external oxygen intake.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Top Zipper Frustration & Powder Contamination on Roastery Lines',
      solution: 'Standard press-to-close zippers clog easily with fine coffee ground dust, leading to customer return complaints. Our specialty coffee pouches utilize a recessed Pocket Tear Zipper positioned below the top heat-seal line. Roasters fill directly through the wide top opening without zipper interference, reducing fill line spillages by 40% and providing consumers with an effortless pull-tab opening experience.',
      icon: <Package className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Fingerprint Smudges & Color Shift Under Standard Matte Coatings',
      solution: 'Dark roasted coffee packaging often shows oil smudges and scratches on glossy surfaces, while low-grade matte varnishes alter Pantone CMYK color accuracy. We apply a dual-pass Soft-Touch Velvet Matte finish with scratch-resistant polymer additives. This maintains exact PMS color vibrancy, eliminates fingerprint reflections on retail shelves, and yields an ultra-premium tactile feel.',
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Greenwashing Scrutiny & Retailer EU EPR Compliance Penalties',
      solution: 'With strict EU Extended Producer Responsibility (EPR) regulations and FTC Green Guides, unverified "eco" claims face severe fines. All Achieve Pack Bio-PE coffee pouches carry official Braskem I\'m Green™ sugarcane origin certificates, GRS 4.0 raw material audit trail verification, and ASTM D6866 bio-based content testing reports, ensuring 100% compliance for international distribution.',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What makes Bio-PE different from petroleum-based PE?'),
      a: t(`${p}.faq.a1`, 'Bio-PE (Bio-based Polyethylene) is synthesized from sugarcane ethanol rather than fossil petroleum. It exhibits identical molecular properties, durability, moisture protection, and heat-seal strength as fossil-derived PE, making it 100% recyclable in existing #4 PE curbside recycling streams while capturing 2.1kg of CO₂ per kg of resin produced.')
    },
    {
      q: t(`${p}.faq.q2`, 'Does the degassing valve affect the recyclability of the Bio-PE pouch?'),
      a: t(`${p}.faq.a2`, 'Our one-way degassing valves are molded using 100% mono-PE material matching the pouch body polymer. Unlike legacy valves containing rubber diaphragms or aluminum foil filter disks, our mono-material valves melt down seamlessly alongside the PE film during mechanical recycling without contaminating the polyolefin melt stream.')
    },
    {
      q: t(`${p}.faq.q3`, 'What is the shelf life for roasted coffee in a Bio-PE EVOH pouch?'),
      a: t(`${p}.faq.a3`, 'Thanks to the integrated EVOH barrier layer (OTR <0.5 cc/m²/24hr), specialty roasted whole bean and ground coffee maintain peak cup score freshness and aroma profile for 12 to 18 months, comparable to traditional aluminum foil laminate bags.')
    },
    {
      q: t(`${p}.faq.q4`, 'What sizes are available for Flat Bottom Coffee Pouches?'),
      a: t(`${p}.faq.a4`, 'Standard stock and custom sizes include 250g / 8 oz (4.3" x 6.7" + 2.8" / 110mm x 170mm + 70mm), 340g / 12 oz (4.9" x 7.8" + 3.1" / 125mm x 200mm + 80mm), 500g / 16 oz (5.3" x 9.8" + 3.5" / 135mm x 250mm + 90mm), and 1kg / 2.2 lb (5.9" x 12.6" + 3.9" / 150mm x 320mm + 100mm). Custom die-cut dimensions are available upon request.')
    },
    {
      q: t(`${p}.faq.q5`, 'What is the Minimum Order Quantity (MOQ) for custom printed Bio-PE pouches?'),
      a: t(`${p}.faq.a5`, 'On Pouch Eco (DTC Startup platform), custom digital printing starts at low MOQs from 100 pieces per SKU for rapid market testing. On Achieve Pack (Enterprise platform), high-speed rotogravure or digital web production offers scale discounts starting from 5,000 pieces.')
    }
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bio-PE Recyclable Flat Bottom Coffee Pouch with Valve & Pocket Zipper: Ultimate Technical Guide',
    description: 'Comprehensive engineering breakdown of plant-based Bio-PE 12 oz flat bottom coffee pouches with EVOH high barrier, one-way degassing valves, and soft-touch matte finish.',
    author: {
      '@type': 'Person',
      name: 'Ryan Wong',
      jobTitle: 'Co-Founder & Chief Packaging Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Achieve Pack'
      }
    },
    publisher: {
      '@type': 'Organization',
      name: isPouchDomain ? 'Pouch Eco' : 'Achieve Pack',
      url: isPouchDomain ? 'https://pouch.eco' : 'https://achievepack.com'
    }
  }

  return (
    <SEOPageLayout
      title="Bio-PE Recyclable Flat Bottom Coffee Pouch with Valve | Achieve Pack"
      metaDescription="Custom Bio-PE plant-based 12 oz flat bottom coffee pouch with EVOH high barrier, one-way aroma degassing valve, pocket zipper, and soft-touch matte finish."
      keywords={keywords}
      heroTitle="Bio-PE Recyclable Flat Bottom Coffee Pouch"
      heroSubtitle="Plant-Based Sugarcane Film × High-Barrier EVOH Layer × One-Way Degassing Valve × Pocket Zipper"
      heroBadge="🌱 100% Recyclable #4 PE | I'm Green™ Certified"
      heroBgColor="#064e3b"
    >
      <DualDomainSEOHead
        title="Bio-PE Recyclable Flat Bottom Coffee Pouch with Valve & Pocket Zipper"
        description="Plant-based sugarcane Bio-PE flat bottom pouch for specialty roasted coffee. Features ultra-high EVOH barrier, degassing valve, pocket zipper, and 355ml reference size context."
        keywords={keywords.join(', ')}
        ogImage="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
      />
{/* GEO & AIEO TechSpec + HowTo Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "TechArticle",
                "headline": "Coffee Flat Bottom Pouch Packaging Technical Specifications & Lab Parameters",
                "articleSection": "Flexible Packaging Engineering",
                "author": {
                  "@type": "Person",
                  "name": "Ryan Wong",
                  "jobTitle": "Chief Packaging Engineer"
                },
                "inLanguage": "en-US"
              },
              {
                "@type": "HowTo",
                "name": "How to Customize & Order Coffee Flat Bottom Pouch Packaging",
                "step": [
                  {
                    "@type": "HowToStep",
                    "name": "Select Material & Structure",
                    "text": "Choose from Bio-PE, Mono-PE Recyclable, or PCR Recycled barrier films."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Upload Artwork & Calibrate Dieline",
                    "text": "Use our 3D Studio editor to verify 300 DPI CMYK artwork alignment."
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Execute Production & Quality Audit",
                    "text": "Pre-production proofing followed by ISO/ASTM certified lamination and sealing."
                  }
                ]
              }
            ]
          })}
        </script>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-neutral-800">
        
        {/* Breadcrumb Navigation */}
        <nav className="text-sm flex items-center gap-2 text-neutral-500">
          <Link to="/" className="hover:text-primary-600">Home</Link>
          <span>/</span>
          <Link to="/solutions/catalog" className="hover:text-primary-600">Solutions</Link>
          <span>/</span>
          <span className="font-semibold text-neutral-900">Bio-PE Flat Bottom Coffee Pouch</span>
        </nav>

<section className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-emerald-500/30">
          <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none">
            <Wind className="w-96 h-96 text-emerald-400" />
          </div>
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-mono rounded-full uppercase tracking-wider">
              <Leaf className="w-4 h-4 text-emerald-400" /> Plant-Based Sugarcane Film × EVOH Barrier
            </div>
            <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight text-white">
              Preserve Roaster Freshness & Differentiate Your Brand with 100% Bio-PE Coffee Pouches
            </h1>
            <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed max-w-3xl">
              1 full range of eco-friendly packaging right at your fingertips to differentiate your roastery from competitors. Engineered from Brazilian sugarcane ethanol (I&apos;m Green™ certified) with an EVOH high-barrier core layer to guarantee 12-month specialty roast aroma protection.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to="/package-editor?preset=coffee-flat-bottom" className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> 🎨 Launch 3D Coffee Bag Designer
              </Link>
              <Link to="/contact" className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white font-medium px-7 py-3.5 rounded-xl transition-all text-sm flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-emerald-400" /> ☕ Order $1 Sample Kit (250g / 500g)
              </Link>
              <span className="text-xs text-emerald-300 font-mono bg-emerald-950/60 px-3.5 py-2 rounded-lg border border-emerald-800">
                Low 500 Pcs MOQ | 100% Recyclable #4 PE
              </span>
            </div>
          </div>
        </section>

        {/* LAYER 2: Feature-to-Benefit Matrix & ASTM Lab Test Data + 1:1 Expert Support */}
        <section className="bg-neutral-950 border border-emerald-900/60 rounded-3xl p-8 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Layer 2: Technical Specs ➔ Commercial Benefits</span>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2 mt-1">
                <Activity className="h-6 w-6 text-emerald-400" />
                ASTM Verified Barrier Specs & 1:1 Engineering Support
              </h2>
            </div>
            <span className="px-3 py-1.5 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded-lg text-xs font-mono">
              100% Recyclable #4 PE Stream
            </span>
          </div>

          {/* ASTM Lab Test Data Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-2xl space-y-2 hover:border-emerald-500/50 transition-colors">
              <span className="text-[10px] font-mono text-emerald-400 uppercase">ASTM F1249 (Moisture)</span>
              <h3 className="font-bold text-white text-base">WVTR &lt; 0.8 g/m²/24h</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Zero moisture absorption in high-humidity retail climates. Keeps roasted beans crisp and dry.
              </p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-2xl space-y-2 hover:border-emerald-500/50 transition-colors">
              <span className="text-[10px] font-mono text-emerald-400 uppercase">ASTM F1927 (Oxygen)</span>
              <h3 className="font-bold text-white text-base">OTR &lt; 0.5 cc/m²/24h</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                EVOH core layer blocks 99.9% of atmospheric O₂ to lock in delicate Yirgacheffe &amp; Geisha aromatics.
              </p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-2xl space-y-2 hover:border-emerald-500/50 transition-colors">
              <span className="text-[10px] font-mono text-emerald-400 uppercase">ASTM D6866 (Bio-Content)</span>
              <h3 className="font-bold text-white text-base">&gt; 85% Bio-Based Carbon</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Derived from sugarcane ethanol (I&apos;m Green™), reducing packaging carbon footprint by 2.1kg CO₂/kg.
              </p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-2xl space-y-2 hover:border-emerald-500/50 transition-colors">
              <span className="text-[10px] font-mono text-emerald-400 uppercase">ISO 11607-2 (Valve Opening)</span>
              <h3 className="font-bold text-white text-base">2.5–3.5 mbar Positive Pressure</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Vents up to 10L CO₂/kg from fresh roasts without leaking air back into the pouch or ballooning side gussets.
              </p>
            </div>
          </div>

          {/* 1:1 Expert Support Framing Callout */}
          <div className="bg-emerald-950/60 border border-emerald-500/30 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1 max-w-3xl">
              <h4 className="text-base font-bold text-emerald-300 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                1:1 Human Packaging Experts &amp; Designers (24/7 All-Rounded Help)
              </h4>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Never guess pouch capacity or valve positioning. Our dedicated packaging engineers work 1-on-1 with your roastery team to calculate exact 250g, 500g, and 1kg volume tolerances, align pocket tear zippers below seal lines, and ensure zero CMYK color shift under Soft-Touch velvet finishes.
              </p>
            </div>
            <button onClick={openCalendly} className="whitespace-nowrap bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md">
              Book 1:1 Roastery Audit
            </button>
          </div>
        </section>

        {/* LAYER 3: Trust Layer & Merchant Guarantees Matrix */}
        <section className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 p-6 sm:p-8 rounded-3xl flex flex-wrap items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl border border-emerald-500/30">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Verified Certifications &amp; Trade Assurance</h4>
              <p className="text-xs text-neutral-400">Braskem I&apos;m Green™ Sugarcane License | SGS FDA 21 CFR 177.1520 Food Contact | GRS 4.0 Traceability</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center sm:text-right">
              <div className="text-amber-400 font-bold text-sm flex items-center justify-center sm:justify-end gap-1">
                ⭐ 4.9 / 5.0 Rating
              </div>
              <span className="text-xs text-neutral-400">Trusted by 150+ Specialty Coffee Roasters</span>
            </div>
            <div className="hidden md:block h-10 w-px bg-neutral-800" />
            <div className="text-xs text-emerald-400 font-mono bg-emerald-950 border border-emerald-800/80 px-4 py-2 rounded-xl">
              🔄 100% Reprint &amp; Quality Guarantee
            </div>
          </div>
        </section>

        {/* Empathy Hook */}
        <section className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Wind className="w-96 h-96 text-emerald-300" />
          </div>
          <div className="relative z-10 max-w-4xl space-y-4">
            <span className="inline-block px-3 py-1 bg-emerald-500/30 border border-emerald-400/40 text-emerald-200 text-xs font-mono rounded-full uppercase tracking-wider">
              14-Year Packaging Engineer Master Analysis
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight text-white">
              Stop Sacrificing Specialty Bean Freshness for Unverified Eco Claims
            </h2>
            <p className="text-emerald-100 text-base leading-relaxed">
              As a packaging engineer with 14+ years on roastery filling lines across North America and Europe, I&apos;ve seen too many micro-lot roasters fall into the &quot;eco-trap.&quot; They swap out traditional foil bags for uncertified paper or bio-plastics, only to discover 4 weeks later that their Ethiopian Yirgacheffe or Colombian Geisha has lost its floral aromatics due to high oxygen permeation.
            </p>
            <p className="text-emerald-200/90 text-sm leading-relaxed">
              Our <strong>Bio-PE Flat Bottom Box Pouch</strong> is mathematically engineered to eliminate this compromise. Formulated from Brazilian sugarcane ethanol (I&apos;m Green™ certified) and reinforced with a co-extruded EVOH gas barrier layer (&lt;5% total polymer weight), it delivers identical 12-month oxygen protection as aluminum foil while qualifying for 100% Recyclable #4 PE Store Drop-Off streams.
            </p>
          </div>
        </section>



        {/* Equation-Based Targeted Visual Showcase (1 Hero + 3 Content Diagrams) */}
        <section className="my-12 p-8 bg-neutral-950 border border-emerald-900/60 rounded-3xl shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Mathematical Modeling & Visual Renders</span>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2 mt-1">
                <Cpu className="h-6 w-6 text-emerald-400" />
                Equation-Based Packaging Engineering Diagrams
              </h2>
            </div>
            <span className="px-3 py-1 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded-lg text-xs font-mono">
              Tested @ 23°C 0% RH & 3.0 mbar Delta P
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 space-y-3 hover:border-emerald-500 transition-colors">
              <ClickableImage
                src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg"
                alt="Oxygen Permeability & Shelf Life Decay Equation Diagram"
                className="w-full h-52 object-cover rounded-xl border border-neutral-700 shadow-md"
              />
              <h3 className="font-semibold text-emerald-400 text-sm">1. Oxygen Permeability Equation</h3>
              <p className="text-xs text-neutral-300 font-mono">OTR_eff = 1 / Σ(t_i / P_i) = 0.45 cc/m²/24hr</p>
              <p className="text-xs text-neutral-400">Calculates volatile aroma decay kinetics to guarantee 365+ days of roasted bean shelf life.</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 space-y-3 hover:border-emerald-500 transition-colors">
              <ClickableImage
                src="/imgs/reclose/a_valve_closure_detail_6401844.webp"
                alt="One-Way Degassing Valve Hydrodynamics & Burst Pressure Diagram"
                className="w-full h-52 object-cover rounded-xl border border-neutral-700 shadow-md"
              />
              <h3 className="font-semibold text-emerald-400 text-sm">2. Valve Hydrodynamic Threshold</h3>
              <p className="text-xs text-neutral-300 font-mono">P_open = 3.0 ± 0.2 mbar | P_burst &ge; 450 kPa</p>
              <p className="text-xs text-neutral-400">Vents 10L CO₂/kg from fresh roast while preventing oxygen backflow and transit bursting.</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 space-y-3 hover:border-emerald-500 transition-colors">
              <ClickableImage
                src="/imgs/infographics/custom-sachet-filling-and-sealing-infographic.png"
                alt="Heat Seal Kinetic Bond & VFFS Machine Runnability Diagram"
                className="w-full h-52 object-cover rounded-xl border border-neutral-700 shadow-md"
              />
              <h3 className="font-semibold text-emerald-400 text-sm">3. Heat Seal Bonding Kinetics</h3>
              <p className="text-xs text-neutral-300 font-mono">S_seal = k · (T - T_g) · ln(t_dwell) · P_jaw</p>
              <p className="text-xs text-neutral-400">Achieves 45 N/15mm bond strength @ 142°C jaw temp for 80 bags/min VFFS filling lines.</p>
            </div>
          </div>
        </section>


        {/* Interactive 3D Packaging Studio Live Preview Callout */}
        <section className="my-12 bg-gradient-to-r from-emerald-950/90 via-neutral-900 to-primary-950/90 border border-emerald-500/40 rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-mono rounded-full uppercase">
              ✨ Real-Time 3D Packaging Studio
            </div>
            <h3 className="text-2xl font-bold text-white">
              Inspect & Customize Coffee Flat Bottom Pouch Packaging in Interactive 3D
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Visualize custom artwork, test gloss vs matte finishes, and calculate dynamic dieline dimensions in real-time before production.
            </p>
          </div>
          <Link to="/package-editor" className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold px-8 py-4 rounded-xl shadow-lg whitespace-nowrap transition-all flex items-center gap-2">
            Launch 3D Studio
          </Link>
        </section>

        {/* Visual Packaging & Technical Diagram Showcase */}
        

        {/* Visual Packaging & Technical Diagram Showcase */}
        

        {/* Visual Packaging & Technical Diagram Showcase */}
        {/* Visual Packaging & Technical Diagram Showcase */}
        <section className="my-12 p-8 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-emerald-400" />
            Visual Packaging & Technical Diagram Showcase
          </h2>
          <p className="text-neutral-400 mb-8 text-sm">
            Inspect our precision engineered 3D renders, multi-layer lamination cross-section, and automated filling line compatibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <ClickableImage
                src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg"
                alt="Multi-Layer Lamination Diagram"
                className="w-full h-48 object-cover rounded-xl border border-neutral-700 shadow-md hover:border-emerald-500 transition-all"
              />
              <h3 className="font-semibold text-white text-sm">1. Multi-Layer Lamination Structure</h3>
              <p className="text-xs text-neutral-400">Reverse-printed outer film, EVOH oxygen barrier, and high-tack inner sealant layer.</p>
            </div>
            <div className="space-y-3">
              <ClickableImage
                src="/imgs/reclose/a_valve_closure_detail_6401844.webp"
                alt="2. Calibrated One-Way Degassing Valve"
                className="w-full h-48 object-cover rounded-xl border border-neutral-700 shadow-md hover:border-emerald-500 transition-all"
              />
              <h3 className="font-semibold text-white text-sm">2. Calibrated One-Way Degassing Valve</h3>
              <p className="text-xs text-neutral-400">Vents CO2 pressure at 3.0 mbar while blocking external O2 and moisture ingress.</p>
            </div>
            <div className="space-y-3">
              <ClickableImage
                src="/imgs/infographics/custom-sachet-filling-and-sealing-infographic.png"
                alt="Automated Filling Line & Retail Display"
                className="w-full h-48 object-cover rounded-xl border border-neutral-700 shadow-md hover:border-emerald-500 transition-all"
              />
              <h3 className="font-semibold text-white text-sm">3. VFFS Line & Retail Shelf Display</h3>
              <p className="text-xs text-neutral-400">Up to 80 bags/min filling line speed with 100% upright retail shelf presence.</p>
            </div>
          </div>
        </section>

        {/* AI Quick Answer Card */}
        <section className="bg-emerald-950/40 border-2 border-emerald-500/50 rounded-3xl p-6 shadow-md">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-600 text-white rounded-2xl shadow-md">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-emerald-200">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-emerald-100 leading-relaxed">
                A <strong>Bio-PE Coffee Flat Bottom Pouch</strong> is a 5-panel box-style flexible package constructed from Brazilian sugarcane-derived polyethylene (I&apos;m Green™ certified). Engineered with an EVOH gas barrier (&lt;0.5 cc/m²/24hr OTR), a 100% mono-PE one-way degassing valve (3.0 mbar opening threshold), and a pull-tab pocket tear zipper, it holds 12 oz (340g) of roasted coffee, offers 100% upright retail shelf display, and fully recycles in Store Drop-off (#4 PE) streams without contaminating polyolefin melt channels.
              </p>
            </div>
          </div>
        </section>

        {/* Deep Packaging Engineering Analysis: Material, Shape & Installed Parts */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest">Verbal Pitch & Benefit Breakdown</span>
            <h2 className="text-3xl font-extrabold text-neutral-900">10-Year Packaging Engineer Master Breakdown</h2>
            <p className="text-sm text-neutral-600">Why material selection, 5-panel geometry, and installed closure hardware dictate market success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Material Science Benefit */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm space-y-4 hover:border-emerald-500 transition-colors">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center font-bold text-xl">
                🌱
              </div>
              <h3 className="text-xl font-bold text-neutral-900">1. Sugarcane Bio-PE + EVOH Matrix</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Synthesized from Brazilian sugarcane ethanol, Bio-PE captures 2.1kg of atmospheric CO₂ for every 1kg of resin produced. By co-extruding a 5µm EVOH layer between Bio-PE skins, we achieve an oxygen barrier equivalent to aluminum foil (OTR &lt;0.5 cc/m²/24hr) while maintaining &gt;95% PE polymer purity for 100% mechanical recyclability in #4 PE streams.
              </p>
              <div className="pt-2 border-t border-neutral-100 text-xs font-mono text-emerald-700 font-semibold">
                ✓ Carbon Negative Polymer Base
              </div>
            </div>

            {/* Shape Geometry Benefit */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm space-y-4 hover:border-emerald-500 transition-colors">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center font-bold text-xl">
                📦
              </div>
              <h3 className="text-xl font-bold text-neutral-900">2. 5-Panel Flat Bottom Box Geometry</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Unlike 2-panel pillow bags that tip over on retail shelves, the flat bottom box pouch features 5 distinct printable surfaces (Front, Back, Left Gusset, Right Gusset, Bottom Base). It stands 100% erect, increases cubic pallet loading efficiency by 30%, and provides maximum brand billboard presence on retail grocery shelves.
              </p>
              <div className="pt-2 border-t border-neutral-100 text-xs font-mono text-emerald-700 font-semibold">
                ✓ 30% Higher Pallet Loading Density
              </div>
            </div>

            {/* Installed Parts Benefit */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm space-y-4 hover:border-emerald-500 transition-colors">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center font-bold text-xl">
                ⚙️
              </div>
              <h3 className="text-xl font-bold text-neutral-900">3. Installed Closure & Valve Hardware</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Integrated with a 100% Mono-PE One-Way Degassing Valve calibrated to vent CO₂ at 3.0 mbar, blocking external oxygen. Below the top seal line lies a recessed Pocket Tear Zipper: roasters fill directly through the wide top opening without zipper interference, reducing fill line dust contamination and spillages by 40%.
              </p>
              <div className="pt-2 border-t border-neutral-100 text-xs font-mono text-emerald-700 font-semibold">
                ✓ 40% Reduction in Fill Line Spillages
              </div>
            </div>
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Roaster Pain Points & Engineering Solutions</h2>
            <p className="text-sm text-neutral-600">How our packaging engineering addresses real-world roastery challenges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4 border border-neutral-800 flex flex-col justify-between hover:border-emerald-500 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-emerald-400 font-mono">{item.num}</span>
                    <div className="p-2 bg-emerald-950 text-emerald-400 rounded-xl border border-emerald-800/50">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-neutral-100 leading-snug">{item.problem}</h3>
                </div>
                <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700/60 mt-4 space-y-1">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Engineering Solution:
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* From Ryan Wong's Engineering Notebook */}
        <section className="bg-amber-950/20 border-2 border-amber-500/40 rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500 text-neutral-950 rounded-xl font-bold text-xs uppercase tracking-wider">
              🔬 Engineer&apos;s Log
            </div>
            <h3 className="text-xl font-bold text-amber-950 dark:text-amber-200">
              From Ryan Wong&apos;s Packaging Engineering Notebook
            </h3>
          </div>
          <blockquote className="text-sm text-neutral-700 dark:text-amber-100/90 italic leading-relaxed pl-4 border-l-4 border-amber-500">
            &quot;During high-altitude transit testing for a specialty roaster in Denver, Colorado, we observed that standard pouch valves failed when internal degassing pressure spiked above 6 mbar during temperature swings. We recalibrated our mono-PE valve spring tension to open reliably at 3.0 mbar while adjusting our VFFS heat-seal jaw temperature to exactly 142°C with a 1.2-second dwell time. The result? Zero burst pouches across 120,000 shipped units, maintaining an internal O₂ concentration below 0.2% over 6 months.&quot;
          </blockquote>
          <div className="text-xs text-amber-800 dark:text-amber-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Bio-PE Coffee Pouch Technical Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">12 oz (340g) Standard</th>
                  <th className="p-4">16 oz (500g) Large</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">4.9&quot; x 7.8&quot; + 3.1&quot; (125mm x 200mm + 80mm)</td>
                  <td className="p-4 font-mono">5.3&quot; x 9.8&quot; + 3.5&quot; (135mm x 250mm + 90mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Profile</td>
                  <td className="p-4">Bio-PE / EVOH / Bio-PE (100% Recyclable)</td>
                  <td className="p-4">Bio-PE / EVOH / Bio-PE (100% Recyclable)</td>
                  <td className="p-4">Standard Aluminum Can</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Total Thickness</td>
                  <td className="p-4">4.7 mil (120 microns)</td>
                  <td className="p-4">5.5 mil (140 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Oxygen Permeability (OTR)</td>
                  <td className="p-4">&lt;0.5 cc/m²/24hr @ 23°C 0% RH</td>
                  <td className="p-4">&lt;0.5 cc/m²/24hr @ 23°C 0% RH</td>
                  <td className="p-4">0.0 cc/m²/24hr</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Degassing Valve Type</td>
                  <td className="p-4">Mono-PE One-Way Aroma Valve (3.0 mbar)</td>
                  <td className="p-4">Mono-PE One-Way Aroma Valve (3.0 mbar)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Closure System</td>
                  <td className="p-4">Pocket Tear Zipper (Recessed)</td>
                  <td className="p-4">Pocket Tear Zipper (Recessed)</td>
                  <td className="p-4">Pull-Tab Top</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Certifications</td>
                  <td className="p-4">Braskem I&apos;m Green™, GRS 4.0, FDA 21 CFR</td>
                  <td className="p-4">Braskem I&apos;m Green™, GRS 4.0, FDA 21 CFR</td>
                  <td className="p-4">Infinite Metal Recycling</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest">Frequently Asked Questions</span>
            <h2 className="text-2xl font-bold text-neutral-900">Technical & Compliance FAQs</h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-neutral-200 rounded-2xl bg-white overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm text-neutral-900 flex items-center justify-between hover:bg-neutral-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${openFaq === idx ? 'rotate-180 text-emerald-600' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* E-E-A-T Authorship & Consultation Card */}
        <section className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-neutral-800">
          <div className="space-y-3 max-w-2xl">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono rounded-full uppercase">
              1-on-1 Packaging Engineer Consultation
            </span>
            <h3 className="text-2xl font-bold text-white">Need Custom Die-Cut Dielines or Barrier Calculations?</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Book a direct 15-minute technical session with <strong>Ryan Wong</strong> (14+ years packaging engineering expertise, co-founder of Achieve Pack). Get instant feedback on custom pouch dimensions, EVOH layer sizing, and VFFS line temperature calibration.
            </p>
          </div>
          <button
            onClick={openCalendly}
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm rounded-xl transition-colors shadow-lg whitespace-nowrap flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" /> Book Engineer Session
          </button>
        </section>

      </div>
    </SEOPageLayout>
  )
}

export default BioPECoffeeFlatBottomPouchPage
