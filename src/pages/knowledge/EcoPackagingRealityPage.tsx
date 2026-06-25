import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  HelpCircle, ChevronDown, Calendar, ArrowRight, Check, X, Info, 
  Trash2, RefreshCw, Coffee, Leaf, Shield, Layers, Sparkles, Scale, AlertTriangle 
} from 'lucide-react'
import LearnNavigation from '../../components/LearnNavigation'
import Footer from '../../components/Footer'
import { useCalendly } from '../../contexts/CalendlyContext'
import { isPouch, getBrandConfig } from '../../utils/domain'

export default function EcoPackagingRealityPage() {
  const { t } = useTranslation()
  const p = 'seoPages.pages.ecoPackagingReality'

  const { openCalendly } = useCalendly()
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [scrollPercent, setScrollPercent] = useState(0)

  const isPouchDomain = isPouch()
  const brand = getBrandConfig()

  // Dynamic theme configurations based on the domain
  const primaryThemeColor = isPouchDomain ? '#10b981' : '#ff8400' // Green for pouch.eco, Amber/Orange for achievepack
  const primaryBtnClass = isPouchDomain 
    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/10' 
    : 'bg-[#ff8400] hover:bg-[#ff9526] text-white shadow-[#ff8400]/10'

  // Track global page scroll progress for scroll-driven micro-interactions
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        setScrollPercent(scrollTop / docHeight)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const ClickableImage = ({ src, alt, className = '', caption = '' }: { src: string; alt: string; className?: string; caption?: string }) => (
    <div className="group relative cursor-pointer" onClick={() => setEnlargedImage(src)}>
      <img
        src={src}
        alt={alt}
        className={`${className} transition-transform duration-500 group-hover:scale-[1.02]`}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center rounded-2xl">
        <span className="bg-white/90 text-neutral-800 text-xs font-bold px-3 py-1.5 rounded-xl border border-neutral-200 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to Zoom</span>
      </div>
      {caption && (
        <p className="text-xs text-neutral-500 mt-3 text-center font-medium italic">{caption}</p>
      )}
    </div>
  )

  const faqs = [
    {
      question: "Why do eco-friendly communities favor Recyclable Mono-PE over novel bioplastics?",
      answer: "Zero-waste and eco-friendly communities favor Mono-PE (single-polymer recyclable plastic) because it operates cleanly within existing municipal recycling systems. Many novel bio-plastics (like PLA or PBS) cannot be sorted easily by current infrared optical sorters. As a result, they are flagged as contaminants and discarded directly into landfills, whereas Mono-PE can be converted back into plastic pellets, supporting a true circular loop."
    },
    {
      question: "What is the difference between Industrial Compostable and Home Compostable packaging?",
      answer: "Industrial compostable packaging (certified EN 13432 or ASTM D6400) requires high-temperature commercial facilities (approx. 58°C) with managed hydration and aeration to break down. In contrast, Home Compostable packaging (certified TUV OK Compost Home) is formulated using highly sensitive cellulose or bio-PBS liners that degrade naturally inside regular backyard soil and garden compost piles (approx. 20-30°C) within 24 weeks."
    },
    {
      question: "How does Achieve Pack resolve the coffee packaging freshness vs. eco-friendliness tension?",
      answer: "We resolve this tension by replacing composite foil laminates with advanced high-barrier single materials. Our Mono-PE recyclable bags are co-extruded with EVOH (ethylene-vinyl alcohol copolymer), providing an oxygen transmission rate (OTR) of less than 0.1 cc/m²/day—matching traditional foil freshness without rendering the bag unrecyclable. For compostable options, we utilize bio-EVOH barriers sourced from plant starches."
    },
    {
      question: "Does compostable packaging break down in landfills?",
      answer: "No. Landfills are highly compacted, anaerobic environments (lacking oxygen). Certified compostable materials require oxygen and active microbes to break down. In a landfill, compostable bags stay preserved for decades, and when they slowly decompose under anaerobic conditions, they release methane—a greenhouse gas 28 times more potent than carbon dioxide."
    },
    {
      question: "Are your custom printed eco-pouches food-contact safe and certified?",
      answer: "Yes, 100%. All laminations—both Recyclable PE and Compostable structures—utilize BRCGS and ISO-certified manufacturing and fully comply with US FDA Regulation 21 CFR 177.1520 and European Commission Regulation (EU) No 10/2011, ensuring zero migration under standard food-contact conditions."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.metaTitle`)}</title>
        <meta name="description" content={t(`${p}.metaDesc`)} />
        <meta name="keywords" content="compostable packaging skepticism, recyclable mono-pe, compostable coffee bags, coffee freshness barrier, post-consumer recycled pcr, packaging transparency, eco-friendly coffee packaging" />
        <link rel="canonical" href="https://achievepack.com/knowledge/eco-packaging-reality" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="The Eco-Packaging Reality: Compostability vs. Recyclability" />
        <meta property="og:description" content="An honest technical breakdown of composting skepticism, recycling infrastructure limits, and the high-barrier coffee preservation tradeoff." />
        <meta property="og:image" content="https://achievepack.com/imgs/knowledge/eco-packaging-reality.png" />
        <meta property="og:url" content="https://achievepack.com/knowledge/eco-packaging-reality" />
      </Helmet>

      {/* FAQ Schema */}
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

      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "The Eco-Packaging Reality: Demystifying Compostability Skepticism and Recyclability Reality",
          "description": "An exhaustive technical guide analyzing the commercial infrastructure limitations, recycling circularity, and high-barrier coffee preservation materials.",
          "image": "https://achievepack.com/imgs/knowledge/eco-packaging-reality.png",
          "author": {
            "@type": "Person",
            "name": "Ryan Wong",
            "url": "https://www.linkedin.com/in/ryanwwc/"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Achieve Pack",
            "logo": {
              "@type": "ImageObject",
              "url": "https://achievepack.com/logo.svg"
            }
          },
          "datePublished": "2026-05-26",
          "dateModified": "2026-05-26"
        })}
      </script>

      <LearnNavigation />

      <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white text-neutral-900 font-sans selection:bg-[#ff8400]/20 selection:text-neutral-900">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 text-white overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/imgs/pattern-dots.svg')] opacity-[0.03]" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                Industry Transparency Analysis
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight font-['Outfit'] text-[#f5efe6]">
                {t(`${p}.heroTitleLine1`)}<br />
                {t(`${p}.heroTitleLine2`)}
              </h1>
              <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                An engineering breakdown of compostability skepticism, recyclability parameters, and high-barrier coffee preservation freshness. No greenwashing, just material science.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={openCalendly}
                  className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold transition shadow-lg ${primaryBtnClass}`}
                >
                  <Calendar className="h-5 w-5" />
                  Free Material Consultation
                </button>
                <Link
                  to="/store"
                  className="inline-flex items-center gap-2 border border-neutral-700 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 rounded-xl font-bold transition"
                >
                  Order Sample Swatches
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer Summary Callout */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-amber-500/10 p-4 rounded-xl flex-shrink-0">
                <Scale className="h-10 w-10 text-amber-500" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-neutral-900 leading-snug">
                  The Core Debate: Circularity vs. Bio-Degradation
                </h2>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  Sustainable packaging faces physical infrastructure realities. <strong>Compostable bags</strong> often require commercial industrial facilities that most consumers cannot access. <strong>Recyclability advocates</strong> argue that widely recycled mono-materials (like Mono-PE) offer far superior environmental footprints by looping polymers back into use, while <strong>specialty products (like fresh coffee)</strong> require high OTR EVOH barriers to protect value without landfill waste.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Detail Alternating Breakdown */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4">
          
          {/* Segment 1: Compostability Skepticism */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <span className="text-emerald-600 font-mono font-bold text-xs uppercase block tracking-wider">
                DEBATE ONE // The Composting Paradox
              </span>
              <h3 className="text-3xl font-black text-neutral-900 tracking-tight font-['Outfit'] flex items-center gap-3">
                <Trash2 className="h-7 w-7 text-emerald-500" />
                Compostability Skepticism
              </h3>
              <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
                <p>
                  Consumers are increasingly skeptical of the word <strong>“compostable”</strong>—and for good reason. Most compostable packaging does not break down in a standard backyard pile. Standard compostable plastics (like PLA) carry <span className="font-bold text-neutral-800">EN 13432 / ASTM D6400</span> certifications, meaning they require **industrial composting facilities** with controlled heat (58°C) and microbes to decompose.
                </p>
                <div className="bg-red-50/50 border border-red-200 rounded-xl p-4 flex gap-3 text-red-800 text-xs">
                  <AlertTriangle className="w-5 h-5 shrink-0 text-red-500" />
                  <div>
                    <span className="font-bold">The Infrastructure Gap:</span> Most municipalities do not have industrial composting programs. If an industrially compostable bag is thrown in the trash, it sits in an anaerobic landfill, halting degradation and emitting methane gas.
                  </div>
                </div>
                <p className="font-bold text-neutral-800">💡 Achieve Pack's Honest Response:</p>
                <p>
                  We prioritize **Home Compostable** laminates (such as certified cellulose and bio-PBS) which are designed to degrade in standard garden heaps within 24 weeks. We also clearly label all B2B orders to distinguish industrial compost requirements.
                </p>
              </div>
            </div>
            <div>
              <ClickableImage 
                src="/imgs/knowledge/eco-packaging-reality.png" 
                alt="Direct digital printed Recyclable Mono-PE and Compostable Kraft coffee pouches side-by-side" 
                className="rounded-3xl shadow-xl border border-neutral-200 w-full h-auto object-cover"
                caption="Fig 1: Dynamic comparison of Recyclable PE (forest teal) and Compostable Kraft (botanical amber) digital print mockups."
              />
            </div>
          </div>

          {/* Segment 2: Recyclability vs Reality */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="lg:order-2 space-y-6">
              <span className="text-blue-600 font-mono font-bold text-xs uppercase block tracking-wider">
                DEBATE TWO // The Circularity Loop
              </span>
              <h3 className="text-3xl font-black text-neutral-900 tracking-tight font-['Outfit'] flex items-center gap-3">
                <RefreshCw className="h-7 w-7 text-blue-500" />
                Recyclability vs. Reality
              </h3>
              <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
                <p>
                  Zero-waste and circular economy advocates favor **widely recyclable plastics** (such as high-PCR polymers and Mono-PE) over novel compostables. The logic is simple: municipal recycling grids for polyethylene are already established, highly efficient, and scale to millions of tons globally.
                </p>
                <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-4 flex gap-3 text-blue-800 text-xs">
                  <Info className="w-5 h-5 shrink-0 text-blue-500" />
                  <div>
                    <span className="font-bold">Contamination Risk:</span> Bioplastics can easily contaminate the traditional plastic stream. If PLA bags enter a PE recycling batch, they ruin the whole run. Recyclable PE avoids this, supporting circular repurposing.
                  </div>
                </div>
                <p className="font-bold text-neutral-800">💡 Achieve Pack's Honest Response:</p>
                <p>
                  We supply 100% recyclable **Mono-PE EVOH-doped high barrier pouches** that are accepted in store drop-off bins. We also incorporate up to 30%-50% **Post-Consumer Recycled (PCR)** resin in the outer layers to reduce dependency on virgin plastics.
                </p>
              </div>
            </div>
            <div className="lg:order-1 bg-neutral-50 p-6 rounded-3xl border border-neutral-200/80 shadow-inner flex flex-col justify-center min-h-[350px]">
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-neutral-900 border-b border-neutral-200 pb-2">PE Circular Loop Strategy</h4>
                <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono font-bold">
                  <div className="bg-neutral-900 text-white p-3 rounded-lg flex flex-col justify-between h-24">
                    <span>1</span>
                    <span>Virgin/PCR PE Extrusion</span>
                  </div>
                  <div className="bg-neutral-800 text-white p-3 rounded-lg flex flex-col justify-between h-24">
                    <span>2</span>
                    <span>Edge Printed Digital Pouch</span>
                  </div>
                  <div className="bg-neutral-700 text-white p-3 rounded-lg flex flex-col justify-between h-24">
                    <span>3</span>
                    <span>Drop-off Recycled</span>
                  </div>
                  <div className="bg-emerald-600 text-white p-3 rounded-lg flex flex-col justify-between h-24 border border-emerald-500">
                    <span>4</span>
                    <span>Pelletized & Re-used</span>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-500 leading-relaxed italic mt-3">
                  *Mono-PE utilizes a single polymer type across all laminated films, preventing chemical separation failure during the melting/extrusion phase.
                </p>
              </div>
            </div>
          </div>

          {/* Segment 3: Coffee Packaging Tradeoffs */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-amber-600 font-mono font-bold text-xs uppercase block tracking-wider">
                DEBATE THREE // The Barrier Freshness Dilemma
              </span>
              <h3 className="text-3xl font-black text-neutral-900 tracking-tight font-['Outfit'] flex items-center gap-3">
                <Coffee className="h-7 w-7 text-amber-500" />
                Coffee Packaging Tradeoffs
              </h3>
              <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
                <p>
                  Specialty coffee threads frequently highlight the massive tension between eco-friendly materials and **bag barrier freshness**. Freshly roasted beans release huge volumes of carbon dioxide and are highly sensitive to oxygen and moisture staling. 
                </p>
                <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-4 flex gap-3 text-amber-800 text-xs">
                  <Coffee className="w-5 h-5 shrink-0 text-amber-500" />
                  <div>
                    <span className="font-bold">Freshness vs. Footprint:</span> Many roasters and consumers accept complex, landfill-bound multi-layer foil-lined plastic bags because **letting specialty beans stale causes a massive carbon waste** across the agricultural supply chain.
                  </div>
                </div>
                <p className="font-bold text-neutral-800">💡 Achieve Pack's Honest Response:</p>
                <p>
                  We engineered advanced EVOH-barrier laminations:
                  <ul className="list-disc pl-4 mt-2 space-y-1 text-xs">
                    <li>**Mono-PE + EVOH Recyclable**: Eliminates aluminum foils entirely while keeping an oxygen transfer rate (OTR) of &lt;0.1 cc/m²/day.</li>
                    <li>**Bio-PLA/Kraft + Bio-EVOH**: A fully compostable, starch-derived barrier that preserves bean profile notes for up to 12-18 months.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="bg-neutral-900 text-white p-8 rounded-3xl border border-neutral-800 shadow-xl flex flex-col justify-between">
              <div>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-wider font-bold">
                  OTR Barrier Specs
                </span>
                <h4 className="font-extrabold text-xl mt-4 mb-2">Oxygen Transmission Performance</h4>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  Comparison of oxygen transmission rate (OTR in cc/m²/24h) across specialty coffee packaging barriers.
                </p>
              </div>
              <div className="space-y-4 text-xs font-mono">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-neutral-400">Standard Kraft (No Barrier)</span>
                    <span className="text-red-400">~150.0 cc</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-neutral-400">Bio-PLA Compostable (Medium)</span>
                    <span className="text-amber-400">~5.0 cc</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-neutral-400">Achieve Pack Mono-PE + EVOH</span>
                    <span className="text-emerald-400">&lt; 0.1 cc (Foil Grade)</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '3%' }}></div>
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-neutral-500 mt-6 pt-4 border-t border-neutral-800 font-mono text-center">
                Tested at 23°C / 0% Relative Humidity. Fully compliant with BRCGS standards.
              </div>
            </div>
          </div>

        </section>

        {/* The Decision Matrix */}
        <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 border-t border-neutral-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 font-['Outfit']">
              The Eco-Packaging Decision Matrix
            </h2>
            <p className="text-neutral-500 mt-2">
              A comprehensive technical comparison to help B2B and B2C brands choose their path.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-3xl overflow-x-auto shadow-sm">
            <table className="w-full min-w-[700px] text-left text-sm border-collapse">
              <thead className="bg-neutral-950 text-white font-['Outfit']">
                <tr>
                  <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Criteria</th>
                  <th className="px-6 py-4 font-bold text-emerald-400 uppercase tracking-wider text-xs">Certified Compostable (Home/Ind)</th>
                  <th className="px-6 py-4 font-bold text-blue-400 uppercase tracking-wider text-xs">Recyclable Mono-PE (Store Drop-off)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 font-medium">
                <tr className="bg-neutral-50/20">
                  <td className="px-6 py-4 font-bold text-neutral-800">Primary Materials</td>
                  <td className="px-6 py-4 text-neutral-600">Kraft Paper / Cellulose / Starch-PLA</td>
                  <td className="px-6 py-4 text-neutral-600">Single-polymer Polyethylene (Mono-PE)</td>
                </tr>
                <tr className="bg-neutral-50/50">
                  <td className="px-6 py-4 font-bold text-neutral-800">Composting/Recycle Grid</td>
                  <td className="px-6 py-4 text-neutral-600"> backyard heap (home) / commercial center (industrial)</td>
                  <td className="px-6 py-4 text-neutral-600">PE store collection / municipal curb drop-off</td>
                </tr>
                <tr className="bg-neutral-50/20">
                  <td className="px-6 py-4 font-bold text-neutral-800">Freshness OTR Barrier</td>
                  <td className="px-6 py-4 text-neutral-600">Medium-High (Utilizes bio-barrier films)</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">Excellent OTR &lt;0.1 cc (co-extruded EVOH)</td>
                </tr>
                <tr className="bg-neutral-50/50">
                  <td className="px-6 py-4 font-bold text-neutral-800">B2C Consumer Convenience</td>
                  <td className="px-6 py-4 text-neutral-600">High if home compostable; low if industrial</td>
                  <td className="px-6 py-4 text-neutral-600 font-bold">High (Uses standard retail drop-offs)</td>
                </tr>
                <tr className="bg-neutral-50/20">
                  <td className="px-6 py-4 font-bold text-neutral-800">Economic Material Costs</td>
                  <td className="px-6 py-4 text-neutral-600">Higher (due to organic cellulose conversions)</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">Highly Competitive (15-20% lower than compostable)</td>
                </tr>
                <tr className="bg-neutral-50/50">
                  <td className="px-6 py-4 font-bold text-neutral-800">Regulatory Compliance</td>
                  <td className="px-6 py-4 text-neutral-600">EN 13432 / BPI Certified Bio</td>
                  <td className="px-6 py-4 text-neutral-600">SPI Code 4 / PPWR Circular Ready</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* E-E-A-T Editorial Bio Block */}
        <section className="py-16 md:py-20 max-w-4xl mx-auto px-4">
          <div className="bg-[#f5efe6] border border-[#dfd2bf] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start shadow-sm">
            <div className="w-20 h-20 bg-neutral-900 text-white rounded-full flex items-center justify-center font-black text-3xl font-mono flex-shrink-0 select-none shadow-md">
              RW
            </div>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-bold text-neutral-900">{t(`${p}.authorName`)}</h3>
                <span className="bg-[#2d2a24] text-[#f5efe6] text-[9px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded uppercase">
                  CO-FOUNDER & TECHNICAL AUTHOR
                </span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Ryan is a recognized co-founder and packaging engineer with <strong>over 14 years of professional experience</strong> in supply chain engineering and packaging R&D. Graduating with a Global Supply Chain Management degree from PolyU, Ryan has successfully designed and scaled custom sustainable bag projects for startups and Fortune 500 companies globally, ensuring full PPWR compliance, high-fidelity barriers, and low MOQs.
              </p>
              <div className="flex gap-4 pt-1 text-xs">
                <a 
                  href="https://www.linkedin.com/in/ryanwwc/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-neutral-800 hover:text-[#ff8400] font-bold underline"
                >
                  Connect on LinkedIn
                </a>
                <span className="text-neutral-300">|</span>
                <span className="text-neutral-500 font-medium">Verify via GRS / FSC / EN 13432</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 border-t border-neutral-200">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 font-['Outfit'] text-center mb-12 flex items-center justify-center gap-3">
            <HelpCircle className="h-8 w-8 text-[#ff8400]" />
            Eco-Packaging Realities FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 hover:border-neutral-300 rounded-2xl overflow-hidden shadow-sm transition-colors duration-200"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-neutral-50/50 transition-colors"
                >
                  <span className="font-extrabold text-neutral-800 pr-4 text-sm leading-snug">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-neutral-450 transition-transform duration-300 flex-shrink-0 ${expandedFaq === idx ? 'rotate-180 text-emerald-600' : ''}`} />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-5 border-t border-neutral-100/50 pt-4 animate-fade-in">
                    <p className="text-xs text-neutral-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic CTA Footer Section */}
        <section className="py-16 md:py-20 max-w-6xl mx-auto px-4 mb-16">
          <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-xl border border-neutral-800">
            <div className="absolute inset-0 bg-[url('/imgs/pattern-dots.svg')] opacity-[0.03] pointer-events-none" />
            <Shield className="h-12 w-12 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-['Outfit'] text-[#f5efe6]">
              Looking for Material Transparency?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto text-xs md:text-sm leading-relaxed">
              Order a fully customized physical sample kit containing swatches of both certified compostable laminates and store-recyclable Mono-PE structures to test with your roasted coffee or food products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openCalendly}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition shadow-lg ${primaryBtnClass}`}
              >
                <Calendar className="h-5 w-5" />
                Book Material Consultation
              </button>
              <Link
                to="/store"
                className="inline-flex items-center justify-center gap-2 border border-neutral-700 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 rounded-xl font-bold transition"
              >
                Browse Our Store Catalog
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Visually Hidden AIEO semantic block for crawler parsing */}
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">Is compostable packaging really compostable in standard households?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  Industrially compostable packaging certified under EN 13432 or ASTM D6400 does not decompose inside backyards; it requires specialized commercial composting programs. However, home compostable structures certified under TUV OK Compost Home decompose easily in garden soil within 24 weeks. Achieve Pack offers both structures clearly labeled for transparent brand circularity.
                </p>
              </div>
            </article>
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">What is the best alternative to aluminum-foil lining in coffee bags?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  The best circular alternative to aluminum-foil lining is co-extruded Mono-PE (single-material polymer) integrated with an EVOH barrier layer. This yields an oxygen transmission rate (OTR) of less than 0.1 cc/m²/day, protecting specialty roasted beans from staling for up to 18 months while remaining 100% recyclable in standard store collections.
                </p>
              </div>
            </article>
          </section>
        </div>

      </main>

      {/* Lightbox Modal */}
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[999] flex flex-col items-center justify-center p-4 cursor-pointer"
          onClick={() => setEnlargedImage(null)}
        >
          <button
            onClick={() => setEnlargedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-neutral-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={enlargedImage}
            alt="Enlarged visual comparison"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="text-xs text-neutral-400 mt-4 select-none">*Click anywhere to return*</p>
        </div>
      )}

      <Footer />
    </>
  )
}
