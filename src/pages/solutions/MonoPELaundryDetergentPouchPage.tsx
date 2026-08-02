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
  Award, Shield, AlertTriangle, Droplets, Package, RefreshCw, Sparkles, Layers
} from 'lucide-react'

const p = 'seoPages.pages.monoPELaundryDetergentPouch'

const MonoPELaundryDetergentPouchPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'mono pe laundry detergent pouch',
    'recyclable liquid detergent spout pouch',
    'mono material laundry pod packaging',
    'heavy duty pe spout pouch for liquid soap',
    'surfactant resistant detergent pouch',
    '100% pe recyclable refill pouch',
    'sustainable detergent pouch manufacturer',
    'mono-pe high barrier liquid packaging'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Alkali & Surfactant Chemical Migration Causing Layer Delamination',
      solution: 'Concentrated liquid laundry detergents contain heavy anionic surfactants and high pH builder salts that aggressive attack standard polyurethane adhesive bonds in conventional laminated films. We co-extrude a multi-layer Mono-PE matrix with solventless high-tack resin layers, ensuring zero delamination or chemical degradation over a 24-month shelf life.',
      icon: <Droplets className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Puncture & Burst Failures During Heavy Drop Impact Transit',
      solution: 'Liquid laundry refills weighing 64 oz (1.89L) exert massive kinetic pressure on bottom gusset heat seals during 1.2-meter drop tests. By utilizing sub-zero cold-toughened LLDPE elastomeric resins, our pouches absorb shock energy and achieve 3x the tear propagation strength of rigid plastic bottles while using 75% less plastic by weight.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Recycling Stream Contamination From Rigid Plastic Pouring Spouts',
      solution: 'Legacy spout pouches mix PET film bodies with rigid polypropylene (PP) caps, forcing recycling facilities to send them to landfills. Our engineering team developed a 100% Mono-PE 22mm pour spout and tamper-evident screw cap that melt down seamlessly in standard #4 HDPE/LDPE recycling streams without chemical contamination.',
      icon: <RefreshCw className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Detergent Pod Moisture Clumping & Child Safety Compliance Gaps',
      solution: 'Detergent pods dissolve instantly when exposed to ambient humidity (>60% RH). Our Mono-PE Pod Pouches feature a continuous EVOH moisture barrier (WVTR <0.4 g/m²/24hr) combined with an ASTM D3475 certified Child-Resistant Press-to-Close zipper, keeping pods bone-dry while protecting young children.',
      icon: <Shield className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Inflexible MOQs & Carbon Footprint Penalty on Rigid Bottle Lines',
      solution: 'Rigid HDPE detergent jugs require high freight volume, transporting 90% air before filling. Our flat-ship Mono-PE spout pouches fit 30,000 units per pallet compared to 2,500 rigid jugs, slashing inbound logistics freight emissions by 88% while offering digital print MOQs starting at just 500 units on Pouch Eco.',
      icon: <Layers className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'Why is Mono-PE superior to PET/PE composite films for laundry detergent?'),
      a: t(`${p}.faq.a1`, 'Composite PET/PE pouches contain chemically incompatible polymer layers that cannot be separated in mechanical recycling plants. Mono-PE consists exclusively of polyolefin resin (&gt;95% PE), allowing full curbside and store drop-off recycling under #4 PE code while retaining complete alkali and surfactant resistance.')
    },
    {
      q: t(`${p}.faq.q2`, 'Can Mono-PE spout pouches handle concentrated liquid detergent without leaking?'),
      a: t(`${p}.faq.a2`, 'Yes. Our Mono-PE liquid spout pouches undergo 100% ultrasonic seal pressure testing and high-speed burst tests up to 0.8 bar. The integrated PE spout is heat-welded into the top corner using twin-blade sealing jaws to guarantee zero liquid leakage.')
    },
    {
      q: t(`${p}.faq.q3`, 'Are these pouches child-resistant certified for laundry detergent pods?'),
      a: t(`${p}.faq.a3`, 'Yes, our Mono-PE pod pouches feature an optional dual-push tab Child-Resistant Zipper compliant with US CPSC 16 CFR 1700.20 and European ISO 8317 child-safety packaging standards.')
    },
    {
      q: t(`${p}.faq.q4`, 'What sizes are standard for liquid detergent refill pouches?'),
      a: t(`${p}.faq.a4`, 'Standard capacity sizes include 32 oz / 1L (6.3" x 10.2" + 3.5" / 160mm x 260mm + 90mm), 64 oz / 1.89L (7.9" x 11.8" + 3.9" / 200mm x 300mm + 100mm), and 128 oz / 3.78L Gallon Refill (9.8" x 14.5" + 4.7" / 250mm x 370mm + 120mm).')
    },
    {
      q: t(`${p}.faq.q5`, 'What surface finishes are available for detergent pouches?'),
      a: t(`${p}.faq.a5`, 'We offer Glossy, Matte, Soft-Touch Velvet, and Spot UV varnish options. All inks used are heavy-metal free, alkali-resistant water-based flexo inks that will not bleed or smear when exposed to detergent drops.')
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
    headline: 'Mono-PE Recyclable Laundry Detergent & Pod Pouch: Engineering Guide',
    description: 'Comprehensive technical overview of 100% Mono-PE liquid detergent spout pouches and child-resistant detergent pod bags with surfactant barrier and EVOH core.',
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
      title="Mono-PE Recyclable Laundry Detergent Pouch | Achieve Pack"
      metaDescription="Custom Mono-PE recyclable laundry detergent spout pouches & pod bags. Surfactant-resistant, 100% #4 PE recyclable, leakproof spout, child-resistant zipper options."
      keywords={keywords}
      heroTitle="Mono-PE Recyclable Laundry Detergent Pouch"
      heroSubtitle="100% Mono-Material Polyethylene × High-Barrier EVOH Core × Surfactant Resistant × Recyclable Spout"
      heroBadge="🔄 100% Recyclable #4 PE | Surfactant Proof"
      heroBgColor="#0f172a"
      heroImage="/imgs/solutions/hero-MonoPELaundryDetergentPouchPage.jpg"
    >
      <DualDomainSEOHead
        title="Mono-PE Recyclable Laundry Detergent Pouch & Spout Refill"
        description="Surfactant-resistant mono-material PE pouches for liquid detergent refills & laundry pods. Features 100% PE recyclable spout, child-resistant closure, and 355ml reference scale."
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
                "headline": "Laundry Detergent Pouch Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Laundry Detergent Pouch Packaging",
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
          <span className="font-semibold text-neutral-900">Mono-PE Laundry Detergent Pouch</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Droplets className="w-96 h-96 text-blue-400" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-blue-500/30 border border-blue-400/40 text-blue-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Detergent &amp; Home Care Brand Breakthrough
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Eliminate Rigid Jug Freight Waste Without Risking Detergent Leaks
            </h2>
            <p className="text-slate-200 leading-relaxed">
              Shipping heavy 64 oz liquid laundry detergent in rigid plastic jugs wastes thousands in empty-container freight while generating massive plastic landfill footprint. Transitioning to flexible pouches often fails when harsh surfactants degrade film layers or puncture bottom gussets during drop transport.
            </p>
            <p className="text-slate-300/90 text-sm leading-relaxed">
              Our <strong>Mono-PE Laundry Detergent Pouch</strong> solves both chemical degradation and recycling compliance. Engineered with co-extruded LLDPE elastomeric resins and an alkali-resistant EVOH core, it replaces heavy rigid jugs with a 100% Recyclable #4 PE pouch that survives 1.2-meter drop tests with zero leaks.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Laundry Detergent Pouch.
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
              Inspect & Customize Laundry Detergent Pouch Packaging in Interactive 3D
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
        <section className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-600 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-blue-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-blue-900 leading-relaxed">
                A <strong>Mono-PE Laundry Detergent Pouch</strong> is an eco-engineered flexible refill package constructed entirely from Polyethylene (&gt;95% total mass). Fortified with an alkali-resistant EVOH oxygen/moisture barrier (&lt;0.4 g/m²/24hr WVTR) and fitted with a 100% PE pour spout or child-resistant zipper, it safely holds 64 oz (1.89L) liquid detergent or pods, cuts plastic packaging weight by 75%, and fully recycles in curbside/store drop-off #4 PE streams.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-blue-500 transition-colors">
            <div className="text-blue-600 font-bold text-xl">🔄 100% Recyclable Mono-PE</div>
            <p className="text-xs text-neutral-600">Pure polyolefin design with matching PE spout. Fully compliant with RecyClass & APR #4 recycling protocols.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-blue-500 transition-colors">
            <div className="text-blue-600 font-bold text-xl">🧪 Surfactant & Alkali Proof</div>
            <p className="text-xs text-neutral-600">Solventless lamination prevents layer peeling, chemical swelling, and seal breakdown under heavy surfactant exposure.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-blue-500 transition-colors">
            <div className="text-blue-600 font-bold text-xl">🚚 75% Freight Carbon Cut</div>
            <p className="text-xs text-neutral-600">Ships flat to filling plants, fitting 30,000 units per pallet versus 2,500 rigid HDPE jugs.</p>
          </div>
        </section>

        {/* Hero & Detail Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Visual Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed 64 oz Mono-PE Detergent Refill Pouch</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Equipped with a heavy-duty <strong>22mm Corner Mono-PE Pour Spout</strong>, ergonomic die-cut carrying handle, and high-clarity surface printing. Designed to replace rigid plastic jugs for eco-conscious laundry, dishwashing, and home cleaning brands.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 7.9&quot; x 11.8&quot; + 3.9&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">200mm x 300mm + 100mm</span>
              <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-xs text-blue-800 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="Mono-PE Recyclable Laundry Detergent Refill Spout Pouch"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Laundry Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">How our polyolefin engineering resolves heavy liquid refill challenges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4 border border-neutral-800 flex flex-col justify-between hover:border-blue-500 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-blue-400 font-mono">{item.num}</span>
                    <div className="p-2 bg-blue-950 text-blue-400 rounded-xl border border-blue-800/50">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-neutral-100 leading-snug">{item.problem}</h3>
                </div>
                <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700/60 mt-4 space-y-1">
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Engineering Solution:
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* From Ryan Wong's Engineering Notebook */}
        <section className="bg-slate-950 text-white border-2 border-blue-500/40 rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500 text-neutral-950 rounded-xl font-bold text-xs uppercase tracking-wider">
              🔬 Engineer&apos;s Log
            </div>
            <h3 className="text-xl font-bold text-blue-200">
              From Ryan Wong&apos;s Packaging Engineering Notebook
            </h3>
          </div>
          <blockquote className="text-sm text-slate-200 italic leading-relaxed pl-4 border-l-4 border-blue-500">
            &quot;When stress-testing 64 oz detergent pouches filled with concentrated non-ionic surfactants, standard PE/PET laminations suffered delamination at the seal throat within 14 days due to chemical permeation. We adjusted our extrusion process to blend a 15% MLLDPE (Metallocene Linear Low-Density Polyethylene) resin tie-layer with high-density HDPE outer skins. The resulting film sustained 1.5-meter drop tests onto concrete at 4°C with zero micro-cracks or seal degradation.&quot;
          </blockquote>
          <div className="text-xs text-blue-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Mono-PE Laundry Pouch Technical Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">64 oz (1.89L) Liquid Refill</th>
                  <th className="p-4">2kg Detergent Pod Pouch</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">7.9&quot; x 11.8&quot; + 3.9&quot; (200mm x 300mm + 100mm)</td>
                  <td className="p-4 font-mono">8.7&quot; x 12.6&quot; + 4.3&quot; (220mm x 320mm + 110mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Composition</td>
                  <td className="p-4">HDPE Outer / EVOH Core / LLDPE Sealant (&gt;95% PE)</td>
                  <td className="p-4">Mono-PE Matrix / High-Barrier EVOH Layer</td>
                  <td className="p-4">Standard Aluminum Can</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Total Thickness</td>
                  <td className="p-4">6.0 mil (150 microns)</td>
                  <td className="p-4">5.0 mil (125 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Moisture Barrier (WVTR)</td>
                  <td className="p-4">&lt;0.4 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">&lt;0.4 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">0.0 g/m²/24hr</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Closure System</td>
                  <td className="p-4">22mm Mono-PE Spout & Tamper Cap</td>
                  <td className="p-4">Child-Resistant Push-Tab Zipper</td>
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
            <h3 className="text-xl font-bold text-neutral-900">Related Liquid & Home Care Packaging</h3>
            <Link to="/store" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="64 oz Detergent Spout Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">64 oz Mono-PE Detergent Spout Pouch</h4>
                <p className="text-xs text-neutral-500">Recyclable mono-material PE pouch with 22mm pour spout for liquid refills.</p>
                <Link to="/store/product/mono-pe-detergent-spout-pouch" className="inline-block mt-2 text-xs font-bold text-blue-600 hover:text-blue-700">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Child Resistant Pod Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Child-Resistant Laundry Pod Bag</h4>
                <p className="text-xs text-neutral-500">Certified child-safe push-tab zipper pouch with zero moisture clumping.</p>
                <Link to="/store/product/child-resistant-pod-pouch" className="inline-block mt-2 text-xs font-bold text-blue-600 hover:text-blue-700">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Recyclable Liquid Soap Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">32 oz Liquid Soap Refill Pouch</h4>
                <p className="text-xs text-neutral-500">Mono-PE stand-up spout pouch for body wash and hand soap refills.</p>
                <Link to="/store/product/liquid-soap-spout-pouch" className="inline-block mt-2 text-xs font-bold text-blue-600 hover:text-blue-700">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Frequently Asked Questions</span>
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
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500 flex-shrink-0 bg-neutral-800 flex items-center justify-center text-blue-400 font-bold text-2xl">
            RW
          </div>
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <h4 className="text-lg font-bold text-white">Ryan Wong</h4>
              <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded border border-blue-500/40">
                14+ Yrs Packaging Engineering
              </span>
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700">
                GRS & FSC Certified Auditor
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Expert in mono-material polyolefin co-extrusion, liquid spout sealed pouch performance, and chemical surfactant barrier formulation for consumer brands.
            </p>
            <div className="pt-2">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Engineering Consultation with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-slate-950 via-neutral-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-blue-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-mono rounded-full border border-blue-500/30">
              Ready to Upgrade Your Laundry Packaging?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Custom Printed Mono-PE Detergent Sample Kits Shipped Worldwide
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test spout integrity, liquid drop strength, and child-resistant zippers on your own liquid filling line before placing a commercial order.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={openCalendly}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-neutral-950 font-bold text-sm rounded-xl transition-colors shadow-lg shadow-blue-950/50"
            >
              Schedule Engineering Consultation
            </button>
            <a
              href="mailto:support@achievepack.com?subject=Mono-PE%20Detergent%20Pouch%20Sample%20Request"
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
              <h3 itemProp="name">What is a Mono-PE Laundry Detergent Pouch?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A Mono-PE Laundry Detergent Pouch is a 100% recyclable polyolefin liquid packaging container made from polyethylene film and matching PE spouts. Built with surfactant-resistant EVOH barrier layers, it replaces heavy rigid HDPE detergent jugs while providing complete #4 PE store drop-off recyclability.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default MonoPELaundryDetergentPouchPage
