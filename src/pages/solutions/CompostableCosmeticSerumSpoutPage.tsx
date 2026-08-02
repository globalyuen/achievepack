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

const CompostableCosmeticSerumSpoutPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'compostable cosmetic serum spout pouch',
    'eco friendly skincare refill spout pouch',
    'plant based cosmetic lotion refill pouch 100ml',
    'compostable facial serum packaging',
    'tuv ok compost cosmetic refill pouch',
    'biodegradable cosmetics spout pouch with cap',
    'sustainable beauty packaging solution',
    'custom printed skincare spout pouch'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Essential Oil & Active Ingredient Permeation through Bio-Films',
      solution: 'Concentrated facial serums contain volatile essential oils and actives (Vitamin C, Retinol) that dissolve standard bioplastics. We engineer a specialized plant-derived PBS/PLA multi-layer barrier film that preserves cosmetic active potency for 24 months without swelling.',
      icon: <Wind className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Viscous Serum Clogging and Drip Spills at the Spout Tip',
      solution: 'Thick serums and lotion creams create messy buildup around standard spout tips. We integrate a precision anti-drip bio-PBS narrow spout fitment (6.5mm / 8.5mm orifice) designed for clean, controlled refill dispensing into glass bottles.',
      icon: <Package className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Glass Bottle Environmental Weight & Shipping Footprint',
      solution: 'Shipping heavy rigid glass serum bottles creates huge freight carbon emissions. Our flexible compostable refill spout pouch reduces packaging weight by 85% and shipping volume by 90% per 100ml unit.',
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Leaking Spout Welds Under Squeeze Pressure',
      solution: 'Consumers squeeze refill pouches hard to extract every last drop of expensive serum. Our dual-pulse ultrasonic spout seal handles up to 4.0 bar squeeze pressure without seam failure.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Cosmetics Greenwashing & Microplastic Scrutiny',
      solution: 'Clean beauty consumers reject synthetic plastic waste. Every component of our cosmetic spout pouch (film, spout, and cap) holds TUV OK Compost Home (EN 13432) and BPI certifications, breaking down into organic soil humus.',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: 'Can compostable spout pouches safely hold active skincare serums and essential oils?',
      a: 'Yes! Our high-barrier bio-laminate features a chemical-resistant inner bio-PBS sealant layer tested against active formulation ingredients including Vitamin C (ascorbic acid), Hyaluronic Acid, Retinol, Niacinamide, and natural essential oils without film delamination.'
    },
    {
      q: 'Is this cosmetic spout pouch certified home compostable?',
      a: 'Yes. The pouch body, spout fitment, and precision screw cap are all certified TUV OK Compost Home (EN 13432), disintegrating in home compost soil within 12 months with zero toxic residues.'
    },
    {
      q: 'What sizes are standard for cosmetic serum refill spout pouches?',
      a: 'Popular sizes for skincare refill pouches include 100ml / 3.4 fl oz (3.1" x 5.5" + 2.0" / 80mm x 140mm + 50mm) and 200ml / 6.8 fl oz (3.9" x 6.7" + 2.4" / 100mm x 170mm + 60mm). Custom sizes and mini trial formats are available.'
    },
    {
      q: 'How does a refill spout pouch support circular beauty business models?',
      a: 'Brands sell a premium glass or ceramic dropper bottle once, then provide lightweight compostable refill spout pouches on a subscription model. This reduces total brand packaging carbon emissions by over 70%.'
    },
    {
      q: 'What is the MOQ for custom printed cosmetic refill pouches?',
      a: 'On Pouch Eco, short-run digital printing starts at 500 pcs per SKU for clean beauty startup launches. Enterprise high-speed production on Achieve Pack starts at 5,000 pcs.'
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
    headline: 'Compostable Cosmetic Serum & Skincare Refill Spout Pouch',
    description: 'Engineering breakdown of plant-based home compostable spout pouches for facial serums, lotions, and clean beauty refills.',
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
      title="Compostable Cosmetic Serum Spout Pouch | Achieve Pack"
      metaDescription="Custom home compostable cosmetic serum spout pouch for skincare refills. Chemical-resistant bio-film, precision anti-drip spout, TUV certified."
      keywords={keywords}
      heroTitle="Compostable Cosmetic Serum Spout Pouch"
      heroSubtitle="Plant-Based Bio-PBS Film × Chemical-Resistant Barrier × Anti-Drip Spout × TUV Home Compost"
      heroBadge="🌸 Clean Beauty Refill | 100% Home Compostable"
      heroBgColor="#701a75"
    >
      <DualDomainSEOHead
        title="Compostable Cosmetic Serum & Skincare Refill Spout Pouch"
        description="Plant-based home compostable spout pouch for skincare refills, facial serums, and lotions. Precision anti-drip spout, zero microplastic waste."
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
                "headline": "Cosmetic Serum Spout Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Cosmetic Serum Spout Packaging",
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
          <Link to="/" className="hover:text-fuchsia-700">Home</Link>
          <span>/</span>
          <Link to="/solutions/catalog" className="hover:text-fuchsia-700">Solutions</Link>
          <span>/</span>
          <span className="font-semibold text-neutral-900">Compostable Cosmetic Spout Pouch</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-fuchsia-950 to-pink-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Sparkles className="w-96 h-96 text-fuchsia-300" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-fuchsia-500/30 border border-fuchsia-400/40 text-fuchsia-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Clean Beauty Brand Insight
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Power Your Circular Beauty Refill Program with 100% Home Compostable Serum Spout Pouches
            </h2>
            <p className="text-fuchsia-100 leading-relaxed">
              Clean beauty consumers love luxurious glass serum bottles, but hate the carbon footprint of shipping heavy glass refills. Yet early bio-refill pouches suffered essential oil leaks or dissolved under active Retinol and Vitamin C formulas.
            </p>
            <p className="text-fuchsia-200/90 text-sm leading-relaxed">
              Our <strong>Compostable Cosmetic Serum Spout Pouch</strong> delivers active-safe chemical barrier resistance, precision anti-drip dispensing, and full TUV OK Compost Home certification — cutting shipping carbon by 85%.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Cosmetic Serum Spout.
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
              Inspect & Customize Cosmetic Serum Spout Packaging in Interactive 3D
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
        <section className="bg-fuchsia-50 border-2 border-fuchsia-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-fuchsia-700 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-fuchsia-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-fuchsia-900 leading-relaxed">
                A <strong>Compostable Cosmetic Serum Spout Pouch</strong> is a flexible skincare refill package constructed from plant-based PBS/PLA bio-laminate with a bio-PBS anti-drip spout fitment. Designed for 100ml (3.4 oz) and 200ml (6.8 oz) facial serums, creams, and lotions, it offers active ingredient barrier protection, 4.0 bar squeeze resistance, and 100% home compost disintegration under TUV OK Compost Home standards.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-fuchsia-500 transition-colors">
            <div className="text-fuchsia-700 font-bold text-xl">✨ Active-Safe Barrier</div>
            <p className="text-xs text-neutral-600">Chemical-resistant bio-film protects active ingredients (Vitamin C, Retinol, Hyaluronic Acid).</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-fuchsia-500 transition-colors">
            <div className="text-fuchsia-700 font-bold text-xl">💧 Anti-Drip Spout</div>
            <p className="text-xs text-neutral-600">Narrow bio-PBS spout tip ensures clean, spill-free refilling into glass serum bottles.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-fuchsia-500 transition-colors">
            <div className="text-fuchsia-700 font-bold text-xl">🌱 100% Home Compost</div>
            <p className="text-xs text-neutral-600">Film, spout fitment, and screw cap disintegrate into organic soil humus in 12 months.</p>
          </div>
        </section>

        {/* Showcase Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-fuchsia-700 uppercase tracking-widest">Cosmetic Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed Compostable Serum Refill Pouch</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring soft velvet matte finish, rose gold or custom soy-ink branding, anti-drip bio spout tip, and 355ml reference scale matching for luxury cosmetics vanity display.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 3.1&quot; x 5.5&quot; + 2.0&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">80mm x 140mm + 50mm</span>
              <span className="px-3 py-1 bg-fuchsia-50 border border-fuchsia-200 text-xs text-fuchsia-900 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="Compostable Cosmetic Serum Spout Pouch next to glass dropper bottle"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-fuchsia-700 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Cosmetic Spout Pouch Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">Solving essential oil compatibility, drip spills, and refill squeezing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4 border border-neutral-800 flex flex-col justify-between hover:border-fuchsia-500 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-fuchsia-400 font-mono">{item.num}</span>
                    <div className="p-2 bg-fuchsia-950 text-fuchsia-400 rounded-xl border border-fuchsia-800/50">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-neutral-100 leading-snug">{item.problem}</h3>
                </div>
                <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700/60 mt-4 space-y-1">
                  <div className="text-xs font-bold text-fuchsia-400 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Engineering Solution:
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* From Ryan Wong's Engineering Notebook */}
        <section className="bg-fuchsia-950/20 border-2 border-fuchsia-500/40 rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-fuchsia-500 text-neutral-950 rounded-xl font-bold text-xs uppercase tracking-wider">
              🔬 Engineer&apos;s Log
            </div>
            <h3 className="text-xl font-bold text-fuchsia-950 dark:text-fuchsia-200">
              From Ryan Wong&apos;s Packaging Engineering Notebook
            </h3>
          </div>
          <blockquote className="text-sm text-neutral-700 dark:text-fuchsia-100/90 italic leading-relaxed pl-4 border-l-4 border-fuchsia-500">
            &quot;Formulating skincare packaging for high-concentration Vitamin C serum required 12-week accelerated stability testing at 45°C. Standard bio-PLA films suffered micro-cracking due to acid migration. By adding a modified 3-micron bio-PBS tie layer, we eliminated film degradation, maintaining active Vitamin C potency above 98% with zero pouch discoloration.&quot;
          </blockquote>
          <div className="text-xs text-fuchsia-800 dark:text-fuchsia-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-fuchsia-700 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Cosmetic Serum Spout Pouch Specification Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">100ml (3.4 fl oz) Standard Refill</th>
                  <th className="p-4">200ml (6.8 fl oz) Value Refill</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">3.1&quot; x 5.5&quot; + 2.0&quot; (80mm x 140mm + 50mm)</td>
                  <td className="p-4 font-mono">3.9&quot; x 6.7&quot; + 2.4&quot; (100mm x 170mm + 60mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Profile</td>
                  <td className="p-4">Chemical-Resistant PBS / PLA Bio-Film</td>
                  <td className="p-4">Chemical-Resistant PBS / PLA Bio-Film</td>
                  <td className="p-4">Standard Aluminum Can</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Total Thickness</td>
                  <td className="p-4">4.7 mil (120 microns)</td>
                  <td className="p-4">5.5 mil (140 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Squeeze Burst Resistance</td>
                  <td className="p-4">&gt;4.0 bar (58 psi) Squeeze Test</td>
                  <td className="p-4">&gt;4.0 bar (58 psi) Squeeze Test</td>
                  <td className="p-4">High Rigid Pressure</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Spout Orifice Size</td>
                  <td className="p-4">6.5mm Precision Anti-Drip Bio-Spout</td>
                  <td className="p-4">8.5mm High Flow Bio-Spout</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Certifications</td>
                  <td className="p-4">TUV OK Compost Home, EN 13432, FDA 21 CFR</td>
                  <td className="p-4">TUV OK Compost Home, EN 13432, FDA 21 CFR</td>
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
            <Link to="/store" className="text-xs font-bold text-fuchsia-700 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Compostable Serum Spout Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">100ml Compostable Cosmetic Serum Spout Pouch</h4>
                <p className="text-xs text-neutral-500">Plant-based skincare refill pouch with anti-drip bio spout.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-fuchsia-700 hover:text-fuchsia-800">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Bio-PE Cosmetic Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Bio-PE Recyclable Cosmetic Pouch</h4>
                <p className="text-xs text-neutral-500">Plant-based sugarcane pouch for facial cleansers & creams.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-fuchsia-700 hover:text-fuchsia-800">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Mono-PE Spout Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Mono-PE Recyclable Shampoo Refill Pouch</h4>
                <p className="text-xs text-neutral-500">100% Recyclable #4 PE pouch for body wash & shampoo refills.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-fuchsia-700 hover:text-fuchsia-800">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-fuchsia-700 uppercase tracking-widest">Frequently Asked Questions</span>
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
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-fuchsia-500 flex-shrink-0 bg-neutral-800 flex items-center justify-center text-fuchsia-400 font-bold text-2xl">
            RW
          </div>
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <h4 className="text-lg font-bold text-white">Ryan Wong</h4>
              <span className="px-2 py-0.5 bg-fuchsia-500/20 text-fuchsia-400 text-xs rounded border border-fuchsia-500/40">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500 hover:bg-fuchsia-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Packaging Audit with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-fuchsia-950 via-neutral-900 to-pink-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-fuchsia-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-fuchsia-500/20 text-fuchsia-300 text-xs font-mono rounded-full border border-fuchsia-500/30">
              Upgrade Your Clean Beauty Refill Line
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Compostable Cosmetic Spout Sample Kits
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test chemical compatibility, active ingredient stability, and anti-drip spout refilling with your facial serum formulas.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={openCalendly}
              className="px-6 py-3 bg-fuchsia-500 hover:bg-fuchsia-400 text-neutral-950 font-bold text-sm rounded-xl transition-colors shadow-lg shadow-fuchsia-950/50"
            >
              Schedule Engineering Consultation
            </button>
            <a
              href="mailto:support@achievepack.com?subject=Compostable%20Cosmetic%20Spout%20Sample"
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
              <h3 itemProp="name">What is a Compostable Cosmetic Serum Spout Pouch?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A Compostable Cosmetic Serum Spout Pouch is a flexible skincare refill container constructed from plant-based PBS/PLA bio-laminate with a bio-PBS anti-drip spout fitment. Designed for 100ml and 200ml facial serums and creams, it resists active formulation degradation and disintegrates in home compost within 12 months under TUV OK Compost Home standards.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default CompostableCosmeticSerumSpoutPage
