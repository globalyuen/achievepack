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
  Award, Shield, AlertTriangle, Droplets, RefreshCw, Sparkles, Layers
} from 'lucide-react'

const p = 'seoPages.pages.monoPELiquidSoapSpoutPouch'

const MonoPELiquidSoapSpoutPouchPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'mono pe liquid soap spout pouch',
    'recyclable hand soap refill pouch',
    'mono material body wash spout pouch',
    '100% pe recyclable liquid spout pouch',
    'surfactant resistant liquid soap pouch',
    'ecofriendly shampoo refill pouch manufacturer',
    'mono-pe spout pouch with tamper cap',
    'sustainable personal care refill packaging'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Recycling Stream Rejection Caused by Rigid Polypropylene Spouts',
      solution: 'Conventional liquid pouches weld a rigid polypropylene (PP) spout into a PET/PE film body. When processed at municipal recycling centers, the mixed polymers contaminate polyolefin melt streams and get rejected into landfills. We engineer a 100% Mono-PE 16mm/22mm pour spout and cap that melts seamlessly alongside the PE pouch body in standard #4 recycling facilities.',
      icon: <RefreshCw className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Spout Weld Splitting & Leakage Under High Squeeze Pressure',
      solution: 'Refilling narrow soap dispensers requires consumers to squeeze pouches forcibly. Inferior thermal spout welds often split along the pouch throat, spilling liquid soap over bathroom counters. Our dual-step Ultrasonic Spout Welding process applies concentrated high-frequency energy directly to the PE spout flange, forming a molecular bond that withstands 1.2 bar internal burst pressure.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Surfactant & Essential Oil Delamination Over 12-Month Storage',
      solution: 'Liquid hand soaps and body washes contain aggressive sodium lauryl sulfate (SLS) surfactants and citrus essential oils that permeate cheap polyolefin films, breaking down adhesive layers. We co-extrude a multi-layer Mono-PE matrix with solventless high-tack resin layers, guaranteeing zero layer peeling or fragrance loss over a 24-month shelf life.',
      icon: <Droplets className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Heavy Plastic Bottling Costs & High Carbon Shipping Footprint',
      solution: 'Rigid HDPE pump bottles use up to 60 grams of plastic per 32 oz bottle and require massive cargo container space to transport empty containers. Our flat-ship Mono-PE refill pouches weigh under 15 grams, reducing plastic usage by 75% and cutting inbound freight emissions by 85%.',
      icon: <Layers className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Tamper Security Risks in Retail Bulk Refill Displays',
      solution: 'Cosmetic retailers require visible tamper evidence to prevent product contamination on open store shelves. Every Achieve Pack Mono-PE spout cap features a break-away plastic ring that snaps clean on first twist, giving consumers 100% confidence in formula purity.',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What makes Mono-PE spout pouches 100% recyclable?'),
      a: t(`${p}.faq.a1`, 'Unlike standard spout pouches that combine PET films with PP spouts, our Mono-PE pouches use polyethylene for the pouch body, internal barrier tie-layers, spout, and tamper-evident cap (&gt;95% total PE mass). This allows the entire package to be recycled in standard #4 PE store drop-off and curbside streams without manual dis-assembly.')
    },
    {
      q: t(`${p}.faq.q2`, 'Can Mono-PE spout pouches hold viscous liquid soaps and shampoos?'),
      a: t(`${p}.faq.a2`, 'Yes. We offer 16mm, 22mm, and 28mm inner diameter spouts designed specifically for smooth, glug-free dispensing of high-viscosity liquid hand soaps, body washes, hair conditioners, and dish gels.')
    },
    {
      q: t(`${p}.faq.q3`, 'What sizes are standard for liquid soap refill pouches?'),
      a: t(`${p}.faq.a3`, 'Standard capacity sizes include 16 oz / 500ml Travel/Refill (5.1" x 8.7" + 3.1" / 130mm x 220mm + 80mm), 32 oz / 1L Standard Refill (6.3" x 10.2" + 3.5" / 160mm x 260mm + 90mm), and 64 oz / 2L Bulk Eco Refill (8.3" x 12.6" + 3.9" / 210mm x 320mm + 100mm).')
    },
    {
      q: t(`${p}.faq.q4`, 'What surface finishes are available for liquid soap pouches?'),
      a: t(`${p}.faq.a4`, 'We offer Glossy, Soft-Touch Velvet Matte, and Spot UV finishes. All inks are water-based flexo inks resistant to water, soaps, and bathroom moisture.')
    },
    {
      q: t(`${p}.faq.q5`, 'What is the MOQ for custom printed Mono-PE liquid soap pouches?'),
      a: t(`${p}.faq.a5`, 'On Pouch Eco (DTC Startup platform), custom digital printing starts at low MOQs from 500 units per SKU. On Achieve Pack (Enterprise platform), bulk rotogravure pricing starts at 5,000 units.')
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
    headline: 'Mono-PE Recyclable Liquid Soap Spout Refill Pouch: Technical Guide',
    description: 'Engineering overview of 100% Mono-PE liquid soap spout refill pouches with matching PE spout, ultrasonic seal strength, surfactant barrier, and RecyClass #4 PE compliance.',
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
      title="Mono-PE Liquid Soap Spout Pouch | Achieve Pack"
      metaDescription="Custom 100% Mono-PE liquid soap spout refill pouches. Surfactant-proof, matching PE spout & tamper cap, 100% #4 PE recyclable, 75% plastic reduction."
      keywords={keywords}
      heroTitle="Mono-PE Liquid Soap Spout Refill Pouch"
      heroSubtitle="100% Mono-Material Polyethylene × Matching PE Spout & Cap × Surfactant Proof × 100% Recyclable"
      heroBadge="🔄 100% Recyclable #4 PE | RecyClass Approved"
      heroBgColor="#0369a1"
    >
      <DualDomainSEOHead
        title="Mono-PE Recyclable Liquid Soap Spout Refill Pouch (100% PE)"
        description="Surfactant-resistant mono-material PE spout pouch for liquid soap, body wash & shampoo refills. Features 100% PE spout, tamper cap, ultrasonic seal, and 355ml reference scale."
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
                "headline": "Liquid Soap Spout Pouch Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Liquid Soap Spout Pouch Packaging",
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
          <span className="font-semibold text-neutral-900">Mono-PE Liquid Soap Spout Pouch</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-sky-950 to-cyan-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Droplets className="w-96 h-96 text-sky-400" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-sky-500/30 border border-sky-400/40 text-sky-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Personal Care & Bath Refill Revolution
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Cut Rigid Plastic Bottle Waste Without Compromising Liquid Spout Integrity
            </h2>
            <p className="text-sky-100 leading-relaxed">
              Shipping rigid HDPE pump bottles for liquid hand soaps and body washes wastes thousands in freight while generating massive plastic footprint. Transitioning to flexible spout refills often hits a roadblock when mixed PET/PP materials get rejected by recycling plants or spouts burst under squeeze pressure.
            </p>
            <p className="text-sky-200/90 text-sm leading-relaxed">
              Our <strong>Mono-PE Liquid Soap Spout Pouch</strong> replaces rigid bottles with a 100% Recyclable Polyethylene package. Featuring a matching PE pour spout and tamper-evident cap, it cuts plastic usage by 75% and recycles seamlessly in standard #4 PE streams.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Liquid Soap Spout Pouch.
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
              Inspect & Customize Liquid Soap Spout Pouch Packaging in Interactive 3D
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
                src="/imgs/spout-pouch-transparent-1500-1783005719700-89534.png"
                alt="2. 100% PE Recyclable Pour Spout"
                className="w-full h-48 object-cover rounded-xl border border-neutral-700 shadow-md hover:border-emerald-500 transition-all"
              />
              <h3 className="font-semibold text-white text-sm">2. 100% PE Recyclable Pour Spout</h3>
              <p className="text-xs text-neutral-400">Ultrasonic heat-welded PE fitment with tamper-evident screw cap rated for 1.2m drop impact.</p>
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
        <section className="bg-sky-50 border-2 border-sky-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-sky-600 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-sky-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-sky-900 leading-relaxed">
                A <strong>Mono-PE Liquid Soap Spout Pouch</strong> is a 100% recyclable flexible refill package made from polyethylene film and matching PE pour spouts (&gt;95% total PE mass). Engineered with a surfactant-resistant EVOH barrier (&lt;0.4 g/m²/24hr WVTR) and ultrasonic spout welds withstanding 1.2 bar burst pressure, it holds 32 oz (1L) liquid soap, reduces plastic packaging weight by 75%, and fully recycles under #4 PE code.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-sky-500 transition-colors">
            <div className="text-sky-600 font-bold text-xl">🔄 100% Recyclable Mono-PE</div>
            <p className="text-xs text-neutral-600">Pouch body, spout, and cap made from 100% Polyethylene. Fully compliant with RecyClass #4 guidelines.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-sky-500 transition-colors">
            <div className="text-sky-600 font-bold text-xl">🧪 Surfactant & Oil Proof</div>
            <p className="text-xs text-neutral-600">Solventless lamination prevents film blistering, layer peeling, and scent loss over 24 months.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-sky-500 transition-colors">
            <div className="text-sky-600 font-bold text-xl">🚿 75% Less Plastic Waste</div>
            <p className="text-xs text-neutral-600">Replaces heavy 60g rigid pump bottles with a lightweight 15g flexible refill pouch.</p>
          </div>
        </section>

        {/* Hero & Detail Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Visual Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed 32 oz Mono-PE Liquid Soap Refill Pouch</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Equipped with a top/corner <strong>22mm Mono-PE Spout & Tamper Cap</strong>, ergonomic carrying handle, and vibrant water-based printing. Designed for hand soap, shower gel, shampoo, and body lotion refill lines.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 6.3&quot; x 10.2&quot; + 3.5&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">160mm x 260mm + 90mm</span>
              <span className="px-3 py-1 bg-sky-50 border border-sky-200 text-xs text-sky-800 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="Mono-PE Recyclable Liquid Soap Spout Refill Pouch"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Liquid Soap Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">How our Mono-PE spout engineering solves personal care refill challenges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4 border border-neutral-800 flex flex-col justify-between hover:border-sky-500 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-sky-400 font-mono">{item.num}</span>
                    <div className="p-2 bg-sky-950 text-sky-400 rounded-xl border border-sky-800/50">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-neutral-100 leading-snug">{item.problem}</h3>
                </div>
                <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700/60 mt-4 space-y-1">
                  <div className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Engineering Solution:
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* From Ryan Wong's Engineering Notebook */}
        <section className="bg-sky-950/40 border-2 border-sky-500/40 rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-500 text-neutral-950 rounded-xl font-bold text-xs uppercase tracking-wider">
              🔬 Engineer&apos;s Log
            </div>
            <h3 className="text-xl font-bold text-sky-200">
              From Ryan Wong&apos;s Packaging Engineering Notebook
            </h3>
          </div>
          <blockquote className="text-sm text-sky-100/90 italic leading-relaxed pl-4 border-l-4 border-sky-500">
            &quot;When stress-testing 32 oz liquid soap refill pouches for an organic personal care brand in the UK, thermal heat-sealed spouts failed 8% of drop tests due to micro-cracks at the PE spout base. We switched to an Ultrasonic Horn Welding machine set at 20 kHz with a 0.8-second dwell time. The ultrasonic molecular melt eliminated micro-fissures completely, achieving 100% pass rates across 80,000 drop test cycles from 1.5 meters.&quot;
          </blockquote>
          <div className="text-xs text-sky-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Mono-PE Liquid Soap Pouch Technical Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">32 oz (1L) Standard Refill</th>
                  <th className="p-4">64 oz (2L) Bulk Family Refill</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">6.3&quot; x 10.2&quot; + 3.5&quot; (160mm x 260mm + 90mm)</td>
                  <td className="p-4 font-mono">8.3&quot; x 12.6&quot; + 3.9&quot; (210mm x 320mm + 100mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Composition</td>
                  <td className="p-4">HDPE Outer / EVOH Core / LLDPE Sealant (&gt;95% PE)</td>
                  <td className="p-4">HDPE Outer / EVOH Core / LLDPE Sealant (&gt;95% PE)</td>
                  <td className="p-4">Standard Aluminum Can</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Total Thickness</td>
                  <td className="p-4">5.5 mil (140 microns)</td>
                  <td className="p-4">6.5 mil (165 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Spout & Cap Material</td>
                  <td className="p-4">100% HDPE Mono-Material (Tamper Evident)</td>
                  <td className="p-4">100% HDPE Mono-Material (Tamper Evident)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Spout Diameter Options</td>
                  <td className="p-4">16mm, 22mm, or 28mm High-Flow Spouts</td>
                  <td className="p-4">22mm or 28mm Heavy-Flow Spouts</td>
                  <td className="p-4">Pull-Tab Top</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Recyclability Stream</td>
                  <td className="p-4">100% Store Drop-off & Curbside #4 PE</td>
                  <td className="p-4">100% Store Drop-off & Curbside #4 PE</td>
                  <td className="p-4">Infinite Metal Recycling</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Store Product Relations */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-neutral-900">Related Refill Packaging</h3>
            <Link to="/store" className="text-xs font-bold text-sky-600 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="32 oz Liquid Soap Spout Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">32 oz Mono-PE Liquid Soap Spout Pouch</h4>
                <p className="text-xs text-neutral-500">100% recyclable mono PE pouch with 22mm pour spout for hand soap refills.</p>
                <Link to="/store/product/mono-pe-liquid-soap-pouch" className="inline-block mt-2 text-xs font-bold text-sky-600 hover:text-sky-700">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Shampoo Refill Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Shampoo & Conditioner Refill Spout Bag</h4>
                <p className="text-xs text-neutral-500">Viscosity-tested mono PE spout pouch for hair care product refills.</p>
                <Link to="/store/product/shampoo-spout-refill-pouch" className="inline-block mt-2 text-xs font-bold text-sky-600 hover:text-sky-700">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="64 oz Detergent Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">64 oz Laundry Detergent Spout Pouch</h4>
                <p className="text-xs text-neutral-500">Heavy-duty 100% PE spout pouch for home care & cleaning refills.</p>
                <Link to="/store/product/mono-pe-detergent-spout-pouch" className="inline-block mt-2 text-xs font-bold text-sky-600 hover:text-sky-700">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Frequently Asked Questions</span>
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
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-sky-500 flex-shrink-0 bg-neutral-800 flex items-center justify-center text-sky-400 font-bold text-2xl">
            RW
          </div>
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <h4 className="text-lg font-bold text-white">Ryan Wong</h4>
              <span className="px-2 py-0.5 bg-sky-500/20 text-sky-400 text-xs rounded border border-sky-500/40">
                14+ Yrs Packaging Engineering
              </span>
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700">
                GRS & FSC Certified Auditor
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Specialist in mono-material polyolefin spout welding, liquid surfactant barrier design, and sustainable personal care refill system scaling.
            </p>
            <div className="pt-2">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Engineering Consultation with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-sky-950 via-neutral-900 to-cyan-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-sky-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-sky-500/20 text-sky-300 text-xs font-mono rounded-full border border-sky-500/30">
              Ready to Upgrade Your Liquid Soap Packaging?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Custom Printed Mono-PE Liquid Soap Sample Pouches Shipped Worldwide
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test ultrasonic spout strength, squeeze flow rates, and surfactant resistance with your own formula before placing a commercial order.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={openCalendly}
              className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-neutral-950 font-bold text-sm rounded-xl transition-colors shadow-lg shadow-sky-950/50"
            >
              Schedule Engineering Consultation
            </button>
            <a
              href="mailto:support@achievepack.com?subject=Mono-PE%20Soap%20Spout%20Pouch%20Sample%20Request"
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
              <h3 itemProp="name">What is a Mono-PE Liquid Soap Spout Pouch?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A Mono-PE Liquid Soap Spout Pouch is a 100% recyclable flexible refill package made from polyethylene film and matching PE spouts (&gt;95% total PE content). Built with surfactant-resistant EVOH barrier layers and ultrasonic spout welds, it replaces rigid HDPE pump bottles, cuts plastic waste by 75%, and fully recycles under #4 PE code.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default MonoPELiquidSoapSpoutPouchPage
