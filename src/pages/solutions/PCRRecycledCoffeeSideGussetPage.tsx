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
  Award, Shield, AlertTriangle, Leaf, Package, Wind, Sparkles, RefreshCw
} from 'lucide-react'

const PCRRecycledCoffeeSideGussetPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'pcr recycled coffee side gusset bag',
    '50% pcr coffee pouch with degassing valve',
    'post consumer recycled coffee packaging',
    'grs certified pcr coffee bag',
    'aluminum free high barrier pcr coffee pouch',
    '12oz pcr side gusset coffee bag',
    'sustainable specialty coffee roaster packaging',
    'custom printed pcr coffee pouch'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Surface Gel Speckles & Inconsistent Color in Recycled Plastic',
      solution: 'Raw post-consumer recycled (PCR) resin often contains gel impurities and color shifts. We use GRS-certified 50%+ PCR resin filtered through 40-micron melt screens and reverse-printed with ultra-opaque white undercoats to ensure flawless CMYK print accuracy.',
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Loss of Tensile Strength & Bursting Side Gusset Seams',
      solution: 'Recycled polymers can suffer degraded molecular chain length, risking seam splits when packed with 2.2 lb (1kg) coffee beans. We engineer a co-extruded PCR-PE structure fortified with 50% virgin LLDPE inner sealant layers, achieving >28 N/15mm seal strength.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Degassing Ballooning in High-Altitude Transport',
      solution: 'Freshly roasted whole-bean coffee releases large volumes of CO₂ gas. We integrate a mono-PE one-way degassing valve calibrated at 2.5–3.5 mbar opening pressure that vents CO₂ without admitting atmospheric oxygen.',
      icon: <Wind className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Aluminum Foil Metal Waste & Circular Economy Incompatibility',
      solution: 'Legacy 3-ply coffee bags use aluminum foil barrier layers that prevent recycling. Our PCR side gusset bag utilizes an aluminum-free metallized EVOH barrier layer (<0.5 cc/m²/24hr OTR), reducing carbon footprint by 65%.',
      icon: <Package className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'UK Plastics Packaging Tax & EU EPR Financial Penalties',
      solution: 'Countries enforcing plastic taxes (like the UK PPT £217.85/tonne penalty on <30% PCR plastic) penalize virgin plastic bags. Our 50%+ PCR coffee bags exempt roasters from plastic tax penalties with full GRS 4.0 chain-of-custody documentation.',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: 'What is PCR packaging and how much recycled content does this bag contain?',
      a: 'PCR (Post-Consumer Recycled) packaging utilizes recycled resin made from ocean-bound or diverted municipal plastic waste. Our PCR Coffee Side Gusset Bags contain 50% to 75% GRS 4.0 certified post-consumer recycled polyolefin content.'
    },
    {
      q: 'Does 50% PCR content affect the oxygen barrier or coffee freshness?',
      a: 'Not at all. The PCR resin forms the outer structural layer, while the inner contact layers feature virgin food-grade PE and an EVOH high-oxygen barrier (<0.5 cc/m²/24hr OTR), maintaining 12+ months of roasted coffee aroma freshness.'
    },
    {
      q: 'Does this PCR coffee bag qualify for UK Plastic Packaging Tax (PPT) exemption?',
      a: 'Yes! Because our bags exceed the 30% recycled plastic threshold (containing 50%+ PCR), they are 100% exempt from UK PPT and satisfy EU Extended Producer Responsibility (EPR) guidelines.'
    },
    {
      q: 'What standard sizes are available for PCR Side Gusset Coffee Bags?',
      a: 'Common roaster sizes include 12 oz / 340g (3.9" x 9.8" + 2.4" / 100mm x 250mm + 60mm) and 2.2 lb / 1kg (5.3" x 15.4" + 3.1" / 135mm x 390mm + 80mm). Custom sizes and tin-tie closures are available.'
    },
    {
      q: 'What is the MOQ for custom printed PCR coffee bags?',
      a: 'Digital short-run printing on Pouch Eco starts from 500 bags per SKU. High-speed rotogravure or flexographic production on Achieve Pack starts at 5,000 bags.'
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
    headline: '50%+ PCR Post-Consumer Recycled Coffee Side Gusset Bag with Valve',
    description: 'Engineering specifications for GRS 4.0 certified post-consumer recycled side gusset coffee bags with one-way aroma degassing valve.',
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
      title="PCR Recycled Coffee Side Gusset Bag | Achieve Pack"
      metaDescription="Custom 50%+ Post-Consumer Recycled (PCR) coffee side gusset bag with degassing valve. GRS 4.0 certified, UK PPT tax exempt, aluminum-free high barrier."
      keywords={keywords}
      heroTitle="PCR Recycled Coffee Side Gusset Bag"
      heroSubtitle="50%+ Post-Consumer Recycled Content × GRS 4.0 Certified × Degassing Valve × PPT Tax Exempt"
      heroBadge="♻️ 50%+ PCR Content | GRS 4.0 Certified"
      heroBgColor="#1c1917"
    >
      <DualDomainSEOHead
        title="50%+ PCR Post-Consumer Recycled Coffee Side Gusset Bag"
        description="High-barrier post-consumer recycled coffee bag for specialty roasters. One-way aroma valve, aluminum-free EVOH core, UK PPT tax exempt."
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
                "headline": "Coffee Side Gusset Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Coffee Side Gusset Packaging",
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
          <Link to="/" className="hover:text-stone-700">Home</Link>
          <span>/</span>
          <Link to="/solutions/catalog" className="hover:text-stone-700">Solutions</Link>
          <span>/</span>
          <span className="font-semibold text-neutral-900">PCR Coffee Side Gusset Bag</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <RefreshCw className="w-96 h-96 text-amber-300" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-500/30 border border-amber-400/40 text-amber-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Circular Economy Roaster Insight
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Turn Plastic Waste into Premium Coffee Packaging While Avoiding Plastic Packaging Taxes
            </h2>
            <p className="text-stone-100 leading-relaxed">
              Roasters in Europe, the UK, and North America face rising plastic packaging taxes and customer backlash against virgin plastics. But switching to unproven recycled films can compromise tear strength or cause ugly print gel spots.
            </p>
            <p className="text-amber-200/90 text-sm leading-relaxed">
              Our <strong>PCR Recycled Coffee Side Gusset Bag</strong> contains 50%+ GRS-certified post-consumer recycled resin, paired with a food-grade EVOH barrier layer and one-way degassing valve — delivering zero tax penalties and 100% premium shelf appeal.
            </p>
          </div>
        </section>


        {/* 1:1 Human Packaging Experts & Designers Callout Card */}
        <section className="my-12 bg-primary-950/80 border border-primary-500/40 rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-mono rounded-full uppercase">
              🤝 1:1 Human Expert & Designer Consultation
            </div>
            <h3 className="text-2xl font-bold text-white">
              1:1 Human Packaging Experts & Designers (24/7 All-Rounded Help)
            </h3>
            <p className="text-primary-200/90 text-sm leading-relaxed">
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Coffee Side Gusset.
            </p>
          </div>
          <button onClick={openCalendly} className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-8 py-4 rounded-xl shadow-lg whitespace-nowrap transition-all">
            Book 1:1 Expert Consultation
          </button>
        </section>

        {/* Interactive 3D Packaging Studio Live Preview Callout */}
        <section className="my-12 bg-gradient-to-r from-emerald-950/90 via-neutral-900 to-primary-950/90 border border-emerald-500/40 rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-mono rounded-full uppercase">
              ✨ Real-Time 3D Packaging Studio
            </div>
            <h3 className="text-2xl font-bold text-white">
              Inspect & Customize Coffee Side Gusset Packaging in Interactive 3D
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
        <section className="bg-stone-50 border-2 border-stone-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-stone-800 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-stone-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-stone-900 leading-relaxed">
                A <strong>PCR Recycled Coffee Side Gusset Bag</strong> is a flexible coffee package made from 50%+ GRS-certified post-consumer recycled polyolefin resin combined with an EVOH oxygen barrier (&lt;0.5 cc/m²/24hr OTR) and a mono-PE one-way degassing valve. Designed for 12 oz (340g) and 2.2 lb (1kg) roasted coffee beans, it is 100% exempt from the UK Plastic Packaging Tax.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-amber-500 transition-colors">
            <div className="text-amber-700 font-bold text-xl">♻️ 50%+ Certified PCR</div>
            <p className="text-xs text-neutral-600">Made from diverted post-consumer plastic waste with GRS 4.0 audit verification.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-amber-500 transition-colors">
            <div className="text-amber-700 font-bold text-xl">🛡️ UK PPT Tax Exempt</div>
            <p className="text-xs text-neutral-600">Exceeds 30% recycled content requirement, eliminating plastic packaging tax penalties.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-amber-500 transition-colors">
            <div className="text-amber-700 font-bold text-xl">💨 Calibrated Valve</div>
            <p className="text-xs text-neutral-600">Mono-PE aroma valve opens at 3.0 mbar to vent excess CO₂ gas during high-altitude transport.</p>
          </div>
        </section>

        {/* Showcase Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Recycled Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed 50% PCR Side Gusset Bag</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring matte or gloss finishes, tin-tie reclosable option, deep side gusset expansion for maximum roast volume, and 355ml reference scale matching.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 3.9&quot; x 9.8&quot; + 2.4&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">100mm x 250mm + 60mm</span>
              <span className="px-3 py-1 bg-amber-50 border border-amber-200 text-xs text-amber-900 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="PCR Recycled Coffee Side Gusset Bag next to freshly roasted coffee beans"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 PCR Coffee Bag Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">Overcoming gel speckles, plastic tax penalties, and seam strength concerns</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4 border border-neutral-800 flex flex-col justify-between hover:border-amber-500 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-amber-400 font-mono">{item.num}</span>
                    <div className="p-2 bg-amber-950 text-amber-400 rounded-xl border border-amber-800/50">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-neutral-100 leading-snug">{item.problem}</h3>
                </div>
                <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700/60 mt-4 space-y-1">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
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
            &quot;In testing 75% PCR film blends, we noticed micro-thinning along side gusset fold corners under drop impact tests. By optimizing our co-extrusion die ratio to place a 30% virgin LLDPE toughness core between PCR outer layers, drop test survival from 1.8 meters increased from 60% to 100% without lowering total PCR percentage.&quot;
          </blockquote>
          <div className="text-xs text-amber-800 dark:text-amber-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">PCR Coffee Side Gusset Specification Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">12 oz (340g) Standard</th>
                  <th className="p-4">2.2 lb (1kg) Bulk Roaster</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">3.9&quot; x 9.8&quot; + 2.4&quot; (100mm x 250mm + 60mm)</td>
                  <td className="p-4 font-mono">5.3&quot; x 15.4&quot; + 3.1&quot; (135mm x 390mm + 80mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Profile</td>
                  <td className="p-4">50%+ PCR Polyolefin / EVOH / Virgin LLDPE</td>
                  <td className="p-4">50%+ PCR Polyolefin / EVOH / Virgin LLDPE</td>
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
                  <td className="p-4 font-bold text-neutral-900">Certifications</td>
                  <td className="p-4">GRS 4.0 Certified, UK PPT Exempt, FDA 21 CFR</td>
                  <td className="p-4">GRS 4.0 Certified, UK PPT Exempt, FDA 21 CFR</td>
                  <td className="p-4">Infinite Metal Recycling</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Store Product Relations */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-neutral-900">Related Store Products</h3>
            <Link to="/store" className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="PCR Coffee Side Gusset Bag" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">12 oz PCR Recycled Coffee Side Gusset Bag</h4>
                <p className="text-xs text-neutral-500">50%+ PCR content with mono-PE degassing valve.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-amber-700 hover:text-amber-800">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Bio-PE Flat Bottom Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Bio-PE Sugarcane Coffee Pouch</h4>
                <p className="text-xs text-neutral-500">Plant-based renewable PE pouch with pocket zipper.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-amber-700 hover:text-amber-800">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Kraft Compostable Bag" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Kraft Home Compostable Coffee Bag</h4>
                <p className="text-xs text-neutral-500">FSC paper home compostable bag with bio valve.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-amber-700 hover:text-amber-800">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Frequently Asked Questions</span>
            <h2 className="text-2xl font-bold text-neutral-900">Technical & Compliance FAQs</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-sm text-neutral-900 hover:bg-neutral-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-0 text-xs text-neutral-600 border-t border-neutral-100 leading-relaxed bg-neutral-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Ryan Wong Authorship Profile Card */}
        <section className="bg-neutral-900 text-white rounded-3xl p-8 border border-neutral-800 flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-amber-500 flex-shrink-0 bg-neutral-800 flex items-center justify-center text-amber-400 font-bold text-2xl">
            RW
          </div>
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <h4 className="text-lg font-bold text-white">Ryan Wong</h4>
              <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs rounded border border-amber-500/40">
                14+ Yrs Packaging Engineering
              </span>
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700">
                GRS & FSC Certified Auditor
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Specializes in polyolefin polymer lamination, high-barrier EVOH co-extrusion, and sustainable DTC roastery packaging scaling. Has guided over 500+ global coffee brands from prototype testing to automated VFFS filling lines.
            </p>
            <div className="pt-2">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Packaging Audit with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-stone-950 via-neutral-900 to-amber-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-amber-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-mono rounded-full border border-amber-500/30">
              Upgrade to Recycled PCR Packaging
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free 50%+ PCR Coffee Bag Sample Kits
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test seal strength, print clarity, and degassing performance with your roasted coffee beans.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={openCalendly}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm rounded-xl transition-colors shadow-lg shadow-amber-950/50"
            >
              Schedule Engineering Consultation
            </button>
            <a
              href="mailto:support@achievepack.com?subject=PCR%20Coffee%20Bag%20Sample"
              className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-sm rounded-xl border border-neutral-700 transition-colors"
            >
              Request Free Sample Pack
            </a>
          </div>
        </section>

        {/* GEO Visually Hidden Semantic Block for LLM Extraction */}
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">What is a PCR Recycled Coffee Side Gusset Bag?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A PCR Recycled Coffee Side Gusset Bag is a flexible coffee package containing 50%+ GRS 4.0 certified post-consumer recycled polyolefin content. Laminated with an EVOH oxygen barrier (&lt;0.5 cc/m²/24hr OTR) and a mono-PE degassing valve, it provides 12-month freshness for 12 oz (340g) and 1kg roasted coffee while being exempt from the UK Plastic Packaging Tax.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default PCRRecycledCoffeeSideGussetPage
