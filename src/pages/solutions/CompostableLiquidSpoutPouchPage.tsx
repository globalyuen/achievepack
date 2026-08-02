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

const CompostableLiquidSpoutPouchPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'compostable liquid spout pouch',
    'home compostable spouted pouch for juice',
    'plant based liquid spout pouch 250ml',
    'high barrier compostable sauce spout pouch',
    'cold brew coffee compostable spout pouch',
    'tuv ok compost liquid spout packaging',
    'biodegradable spouted pouch with cap',
    'sustainable beverage spout packaging'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Liquid Leakage Around Spout Weld Heat Seals',
      solution: 'Hot liquid or high-viscosity juices put high hydraulic pressure on the spout insertion seal area. We engineer a bio-PBS injection spout welded with ultrasonic dual-frequency sealing, achieving 100% leak-proof hermetic seals up to 3.5 bar burst pressure.',
      icon: <Wind className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Acidic Beverage Degradation of Plant-Based Bio-Films',
      solution: 'Organic cold brew, citrus juices, and acidic sauces hydrolyze basic bioplastics. Our proprietary PLA/PBS bio-laminate is reinforced with food-grade plant wax coatings that resist organic acids (pH 2.8–7.0) for 12 months.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Spout Cap Plastic Waste & Environmental Non-Compliance',
      solution: 'Standard plastic caps end up in oceans and landfills. Our liquid spout pouch utilizes a 100% bio-based PBS tamper-evident screw cap that disintegrates in home compost alongside the pouch body.',
      icon: <Package className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Pouch Collapse and Pouring Splashes During Dispensing',
      solution: 'Flimsy liquid pouches fold in half during pouring, causing embarrassing splashes. Our engineered bottom gusset stand-up structure provides self-supporting vertical rigidity for controlled, glug-free pouring.',
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Regulatory Fines Under Single-Use Beverage Container Directives',
      solution: 'Rigid plastic beverage bottles face heavy SUP bans globally. Our certified home compostable spout pouch eliminates synthetic plastics, backed by TUV OK Compost Home (EN 13432) and FDA 21 CFR safety reports.',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: 'Can compostable spout pouches hold acidic juices and cold brew coffee?',
      a: 'Yes! Our high-barrier bio-film is specifically treated to withstand acidic liquids (pH 2.8 to 7.0) such as citrus juices, cold brew coffee, salad dressings, and puree without film breakdown or seal degradation.'
    },
    {
      q: 'Is the spout fitment and screw cap also certified compostable?',
      a: 'Yes, both the spout fitment and tamper-evident cap are injection-molded from certified bio-PBS material, achieving full disintegration in home compost within 12 months under TUV OK Compost Home standards.'
    },
    {
      q: 'What liquid volumes are standard for compostable spout pouches?',
      a: 'Standard capacities include 250ml / 8.5 fl oz (3.9" x 6.7" + 2.4" / 100mm x 170mm + 60mm) and 500ml / 16.9 fl oz (4.7" x 8.3" + 2.8" / 120mm x 210mm + 70mm). Custom sizes up to 1L are available.'
    },
    {
      q: 'What is the temperature resistance range for hot-fill liquids?',
      a: 'Our PBS/PLA liquid pouches support warm-fill temperatures up to 85°C (185°F) for hot sauce and juice pasteurization, followed by rapid cooling.'
    },
    {
      q: 'What is the MOQ for custom printed compostable spout pouches?',
      a: 'On Pouch Eco, short-run digital printing starts at 500 pcs per design. Enterprise high-speed production on Achieve Pack starts at 10,000 pcs.'
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
    headline: 'Certified Home Compostable Liquid Spout Pouch for Beverages & Sauces',
    description: 'Engineering specifications for plant-based spouted pouches designed for cold brew coffee, juices, and sauces with compostable cap.',
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
      title="Compostable Liquid Spout Pouch | Achieve Pack"
      metaDescription="Plant-based certified home compostable liquid spout pouch for cold brew coffee, juices & sauces. Leak-proof bio spout, 250ml & 500ml sizes, TUV certified."
      keywords={keywords}
      heroTitle="Compostable Liquid Spout Pouch"
      heroSubtitle="Plant-Based Bio-PBS Film × Ultrasonic Spout Weld × Acid Resistant × TUV OK Compost Home"
      heroBadge="🧃 100% Home Compostable | Leak-Proof Bio-Spout"
      heroBgColor="#0284c7"
    >
      <DualDomainSEOHead
        title="Compostable Liquid Spout Pouch for Beverages & Sauces"
        description="Leak-proof home compostable spout pouch for cold brew, juices, and liquid condiments. Certified bio-PBS spout fitment and cap."
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
                "headline": "Liquid Spout Pouch Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Liquid Spout Pouch Packaging",
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
          <Link to="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <Link to="/solutions/catalog" className="hover:text-sky-600">Solutions</Link>
          <span>/</span>
          <span className="font-semibold text-neutral-900">Compostable Liquid Spout Pouch</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-sky-950 to-blue-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Package className="w-96 h-96 text-sky-300" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-sky-500/30 border border-sky-400/40 text-sky-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Beverage & Sauce Brand Insight
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Deliver Eco-Friendly Cold Brew & Organic Juices in 100% Home Compostable Spout Pouches
            </h2>
            <p className="text-sky-100 leading-relaxed">
              DTC beverage and sauce brands face immense pressure to phase out rigid plastic bottles. But early bio-spout pouches frequently leaked around spout corner welds or dissolved under acidic lemon juice and cold brew coffee.
            </p>
            <p className="text-sky-200/90 text-sm leading-relaxed">
              Our <strong>Compostable Liquid Spout Pouch</strong> features ultrasonic bio-spout welding, acid-resistant plant liners, and a 100% compostable bio-PBS cap — providing burst-proof confidence and zero plastic footprint.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Liquid Spout Pouch.
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
              Inspect & Customize Liquid Spout Pouch Packaging in Interactive 3D
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
            <div className="p-3 bg-sky-700 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-sky-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-sky-900 leading-relaxed">
                A <strong>Compostable Liquid Spout Pouch</strong> is a flexible beverage package constructed from plant-based PBS/PLA bio-laminate fitted with a 100% bio-PBS corner or center spout and tamper-evident cap. Designed for 250ml (8.5 oz) and 500ml (16.9 oz) cold brew, juices, and sauces, it resists liquid burst pressures up to 3.5 bar and disintegrates in home compost within 12 months under TUV OK Compost Home standards.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-sky-500 transition-colors">
            <div className="text-sky-700 font-bold text-xl">💦 Burst-Proof Weld</div>
            <p className="text-xs text-neutral-600">Ultrasonic spout sealing handles up to 3.5 bar burst pressure during transport.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-sky-500 transition-colors">
            <div className="text-sky-700 font-bold text-xl">🍋 Acid Resistant</div>
            <p className="text-xs text-neutral-600">Specialized bio-laminate withstands acidic juices, cold brew, and hot sauces (pH 2.8–7.0).</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-sky-500 transition-colors">
            <div className="text-sky-700 font-bold text-xl">🌱 Full Bio Fitment</div>
            <p className="text-xs text-neutral-600">Spout fitment and cap are molded from certified bio-PBS for complete home composting.</p>
          </div>
        </section>

        {/* Showcase Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">Beverage Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed Compostable Spout Pouch</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring matte tactile finish, 8.5mm or 16mm bio-spout fitments, ergonomic carrying handle options, and 355ml reference scale matching for beverage cooler display planning.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 3.9&quot; x 6.7&quot; + 2.4&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">100mm x 170mm + 60mm</span>
              <span className="px-3 py-1 bg-sky-50 border border-sky-200 text-xs text-sky-900 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="Compostable Liquid Spout Pouch for cold brew coffee and organic juices"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Liquid Spout Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">Eliminating spout leaks, acid degradation, and glug splashes</p>
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
        <section className="bg-sky-950/20 border-2 border-sky-500/40 rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-500 text-neutral-950 rounded-xl font-bold text-xs uppercase tracking-wider">
              🔬 Engineer&apos;s Log
            </div>
            <h3 className="text-xl font-bold text-sky-950 dark:text-sky-200">
              From Ryan Wong&apos;s Packaging Engineering Notebook
            </h3>
          </div>
          <blockquote className="text-sm text-neutral-700 dark:text-sky-100/90 italic leading-relaxed pl-4 border-l-4 border-sky-500">
            &quot;In cold-brew coffee spout pouch testing, standard bio-PLA caps cracked under 2.0 Nm torque on automated capping machines. We reformulated the spout fitment resin with a PBS-cellulose compound, raising impact toughness by 220%. Capping torque achieved 3.2 Nm with zero cap cracking and zero leak failure across 40,000 filled pouches.&quot;
          </blockquote>
          <div className="text-xs text-sky-800 dark:text-sky-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Compostable Spout Pouch Specification Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">250ml (8.5 fl oz) Standard</th>
                  <th className="p-4">500ml (16.9 fl oz) Large</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">3.9&quot; x 6.7&quot; + 2.4&quot; (100mm x 170mm + 60mm)</td>
                  <td className="p-4 font-mono">4.7&quot; x 8.3&quot; + 2.8&quot; (120mm x 210mm + 70mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Profile</td>
                  <td className="p-4">PBS / PLA Bio-Film Matrix + Bio-PBS Fitment</td>
                  <td className="p-4">PBS / PLA Bio-Film Matrix + Bio-PBS Fitment</td>
                  <td className="p-4">Standard Aluminum Can</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Total Thickness</td>
                  <td className="p-4">5.1 mil (130 microns)</td>
                  <td className="p-4">5.9 mil (150 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Burst Strength</td>
                  <td className="p-4">&gt;3.5 bar (50 psi) Hydrostatic Test</td>
                  <td className="p-4">&gt;3.5 bar (50 psi) Hydrostatic Test</td>
                  <td className="p-4">High Rigid Pressure</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Spout Diameter Options</td>
                  <td className="p-4">8.5mm, 10mm, 16mm Bio-PBS Spouts</td>
                  <td className="p-4">10mm, 16mm, 22mm Bio-PBS Spouts</td>
                  <td className="p-4">Pull Tab Opening</td>
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
            <Link to="/store" className="text-xs font-bold text-sky-700 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Compostable Spout Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">250ml Compostable Liquid Spout Pouch</h4>
                <p className="text-xs text-neutral-500">Plant-based spout pouch for cold brew coffee & juices.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-sky-700 hover:text-sky-800">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Bio-PE Spout Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Mono-PE Recyclable Spout Pouch</h4>
                <p className="text-xs text-neutral-500">100% Recyclable #4 PE spout pouch for refills & liquids.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-sky-700 hover:text-sky-800">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Transparent Spout Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Clear High-Barrier Liquid Spout Pouch</h4>
                <p className="text-xs text-neutral-500">Transparent liquid pouch for organic purees & syrups.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-sky-700 hover:text-sky-800">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">Frequently Asked Questions</span>
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
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Specializes in polyolefin polymer lamination, high-barrier EVOH co-extrusion, and sustainable DTC roastery packaging scaling. Has guided over 500+ global coffee brands from prototype testing to automated VFFS filling lines.
            </p>
            <div className="pt-2">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Packaging Audit with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-sky-950 via-neutral-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-sky-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-sky-500/20 text-sky-300 text-xs font-mono rounded-full border border-sky-500/30">
              Upgrade Your Beverage Packaging
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Compostable Liquid Spout Sample Kits
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test burst strength, ultrasonic spout seals, and acid-resistant performance with your beverage or sauce formulas.
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
              href="mailto:support@achievepack.com?subject=Compostable%20Liquid%20Spout%20Pouch%20Sample"
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
              <h3 itemProp="name">What is a Compostable Liquid Spout Pouch?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A Compostable Liquid Spout Pouch is a flexible beverage container crafted from plant-based PBS/PLA bio-laminate fitted with a 100% bio-PBS corner spout and cap. Designed for 250ml and 500ml cold brew, juices, and sauces, it withstands 3.5 bar burst pressure and disintegrates in home compost within 12 months under TUV OK Compost Home standards.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default CompostableLiquidSpoutPouchPage
