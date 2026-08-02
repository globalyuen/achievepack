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

const MonoPPDriedFruitStandUpPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'mono pp dried fruit stand up pouch',
    'recyclable mono-pp dried fruit packaging',
    'high clarity mono pp stand up pouch',
    'mono pp mango slice snack bag',
    'pp stream recyclable flexible pouch #5',
    'high moisture barrier mono pp pouch',
    'custom printed mono polypropylene pouch',
    'sustainable dried fruit snack packaging'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Dried Fruit Slices Sticking Together & Sugar Moisture Absorption',
      solution: 'Dehydrated fruit slices (mango, pineapple, berries) draw moisture rapidly, becoming sticky and soggy in low-barrier plastic. Our Mono-PP (Polypropylene) co-extruded matrix delivers an exceptional Water Vapor Transmission Rate (WVTR <0.3 g/m²/24hr), preserving chewy crispness.',
      icon: <Wind className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Hazy Window Blur & Poor Optical Clarity in Recyclable Packaging',
      solution: 'Recyclable mono-PE films often look hazy, hiding natural fruit colors from shoppers. We utilize high-clarity Cast PP (CPP) outer layers that provide crystal-clear product window visibility with zero haziness.',
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Sharp Dried Fruit Edges Puncturing Soft Packaging Films',
      solution: 'Dehydrated banana chips and crunchy freeze-dried fruit have sharp edges that puncture thin films during transit. Our OPP/CPP mono-PP laminate offers high puncture resistance (>25 N) and flex-crack immunity.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Zipper Delamination & Weak Tear Notch Strength',
      solution: 'Multi-material zippers peel away from PP pouch bodies under stress. We integrate a 100% Mono-PP press-to-close zipper ultrasonic welded to the inner CPP sealant film for robust re-seal durability.',
      icon: <Package className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Curbside Plastic Recycling Rejection (#5 PP Stream)',
      solution: 'Polypropylene is one of the fastest-growing rigid and flexible recycling streams globally (#5 PP). Our 100% Mono-PP pouch contains >95% PP polymer mass, fully qualified for PP recycling collection.',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: 'What makes Mono-PP ideal for dried fruit and nut packaging?',
      a: 'Mono-PP (Polypropylene) provides superior thermal resistance, crystal-clear optical transparency, high stiffness for standing upright on retail shelves, and an ultra-low moisture transmission rate (WVTR <0.3 g/m²/24hr).'
    },
    {
      q: 'Can we include a transparent product window on Mono-PP pouches?',
      a: 'Yes! Due to the high optical clarity of Oriented Polypropylene (OPP) and Cast Polypropylene (CPP), custom clear windows let consumers see the natural vibrant color of dried fruit slices without compromising barrier performance.'
    },
    {
      q: 'How is Mono-PP recycled?',
      a: 'Mono-PP flexible pouches are collected under #5 Polypropylene recycling streams. They melt down into high-grade PP re-granulate used for consumer goods, automotive parts, and industrial packaging.'
    },
    {
      q: 'What standard sizes are available for dried fruit stand up pouches?',
      a: 'Common stock and custom sizes include 150g / 5.3 oz (4.7" x 7.1" + 2.4" / 120mm x 180mm + 60mm) and 250g / 8.8 oz (5.5" x 8.7" + 2.8" / 140mm x 220mm + 70mm).'
    },
    {
      q: 'What is the MOQ for custom printed Mono-PP stand up pouches?',
      a: 'On Pouch Eco, digital custom printing starts at 500 pcs per SKU. On Achieve Pack, high-speed rotogravure production starts at 5,000 pcs with high-volume cost efficiency.'
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
    headline: 'Recyclable Mono-PP High-Barrier Dried Fruit Stand-Up Pouch',
    description: 'Technical specifications for 100% polypropylene stand-up pouches with crystal-clear product window and #5 PP recycling compliance.',
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
      title="Mono-PP Dried Fruit Stand Up Pouch | Achieve Pack"
      metaDescription="100% Recyclable Mono-PP stand up pouch for dried fruits & nuts. High clarity window, puncture-resistant, ultra-low WVTR moisture barrier, #5 PP recyclable."
      keywords={keywords}
      heroTitle="Mono-PP Dried Fruit Stand Up Pouch"
      heroSubtitle="100% Polypropylene Structure × Ultra-Low Moisture Barrier × High Clarity Window × #5 PP Stream"
      heroBadge="🍍 100% Recyclable #5 PP | High-Clarity Window"
      heroBgColor="#7c2d12"
    >
      <DualDomainSEOHead
        title="Mono-PP Recyclable Dried Fruit Stand-Up Pouch"
        description="High-barrier mono-polypropylene packaging for dried mango, berries, and nut mixes. Crystal clear product window, #5 PP recyclable."
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
                "headline": "Mono P P Dried Fruit Stand Up Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Mono P P Dried Fruit Stand Up Packaging",
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
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <span>/</span>
          <Link to="/solutions/catalog" className="hover:text-orange-600">Solutions</Link>
          <span>/</span>
          <span className="font-semibold text-neutral-900">Mono-PP Dried Fruit Pouch</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-orange-950 to-amber-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Package className="w-96 h-96 text-orange-300" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-orange-500/30 border border-orange-400/40 text-orange-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Snack Brand Packaging Insight
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Showcase Vibrant Dried Fruit Colors with High-Clarity Recyclable Polypropylene Packaging
            </h2>
            <p className="text-orange-100 leading-relaxed">
              Consumers buy dried fruit with their eyes — looking for bright orange mango slices or deep red cranberries through clear packaging windows. But traditional clear pouches use non-recyclable PET/PE films that harm brand sustainability goals.
            </p>
            <p className="text-orange-200/90 text-sm leading-relaxed">
              Our <strong>Mono-PP Dried Fruit Stand Up Pouch</strong> delivers glass-like window clarity, superior moisture protection (WVTR &lt;0.3 g/m²/24hr), and 100% Mono-Material recyclability under #5 PP streams.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Mono P P Dried Fruit Stand Up.
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
              Inspect & Customize Mono P P Dried Fruit Stand Up Packaging in Interactive 3D
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
                src="/imgs/reclose/a_reclosure_options_kv_product_photo_7983949.webp"
                alt="2. Airtight Press-to-Close Zipper"
                className="w-full h-48 object-cover rounded-xl border border-neutral-700 shadow-md hover:border-emerald-500 transition-all"
              />
              <h3 className="font-semibold text-white text-sm">2. Airtight Press-to-Close Zipper</h3>
              <p className="text-xs text-neutral-400">Heavy-duty recloseable zipper locks in aroma, prevents moisture absorption, and extends shelf life.</p>
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
        <section className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-700 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-orange-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-orange-900 leading-relaxed">
                A <strong>Mono-PP Dried Fruit Stand Up Pouch</strong> is an all-polypropylene flexible stand-up pouch made of OPP/CPP co-extruded film (&lt;0.3 g/m²/24hr WVTR). Designed for 150g to 250g dried fruit slices and trail mixes, it provides crystal-clear window transparency, puncture resistance (&gt;25 N), and 100% recyclability in #5 PP streams.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-orange-500 transition-colors">
            <div className="text-orange-700 font-bold text-xl">✨ Glass-Clear Window</div>
            <p className="text-xs text-neutral-600">CPP film provides high optical transparency without hazy distortion for appetizing fruit display.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-orange-500 transition-colors">
            <div className="text-orange-700 font-bold text-xl">💧 Ultra-Low WVTR</div>
            <p className="text-xs text-neutral-600">Moisture barrier WVTR &lt;0.3 g/m²/24hr stops sugar moisture absorption and fruit stickiness.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-orange-500 transition-colors">
            <div className="text-orange-700 font-bold text-xl">♻️ #5 PP Recyclable</div>
            <p className="text-xs text-neutral-600">Single polyolefin PP polymer mass qualifies for standard polypropylene recycling streams.</p>
          </div>
        </section>

        {/* Showcase Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-orange-700 uppercase tracking-widest">Snack Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed Mono-PP Stand Up Pouch</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring gloss or matte varnishes, custom die-cut clear window, integrated PP press-to-close zipper, and 355ml reference scale matching for snack aisle display planning.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 5.5&quot; x 8.7&quot; + 2.8&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">140mm x 220mm + 70mm</span>
              <span className="px-3 py-1 bg-orange-50 border border-orange-200 text-xs text-orange-900 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="Mono-PP Dried Fruit Stand Up Pouch with clear window next to dried mango slices"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-orange-700 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Dried Fruit Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">Addressing fruit stickiness, window blur, and puncture risk</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4 border border-neutral-800 flex flex-col justify-between hover:border-orange-500 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-orange-400 font-mono">{item.num}</span>
                    <div className="p-2 bg-orange-950 text-orange-400 rounded-xl border border-orange-800/50">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-neutral-100 leading-snug">{item.problem}</h3>
                </div>
                <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700/60 mt-4 space-y-1">
                  <div className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Engineering Solution:
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* From Ryan Wong's Engineering Notebook */}
        <section className="bg-orange-950/20 border-2 border-orange-500/40 rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500 text-neutral-950 rounded-xl font-bold text-xs uppercase tracking-wider">
              🔬 Engineer&apos;s Log
            </div>
            <h3 className="text-xl font-bold text-orange-950 dark:text-orange-200">
              From Ryan Wong&apos;s Packaging Engineering Notebook
            </h3>
          </div>
          <blockquote className="text-sm text-neutral-700 dark:text-orange-100/90 italic leading-relaxed pl-4 border-l-4 border-orange-500">
            &quot;When packaging freeze-dried berries with sharp crystalline sugar edges, standard mono-PE films suffered flex-crack punctures during transit vibration tests. By switching to a bi-orientated OPP outer layer laminated with high-impact CPP inner film, puncture resistance jumped from 14N to 28N while keeping optical haze below 2.5%. Zero pinhole leaks across 80,000 shipped snack pouches.&quot;
          </blockquote>
          <div className="text-xs text-orange-800 dark:text-orange-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-orange-700 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Mono-PP Dried Fruit Pouch Specification Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">150g (5.3 oz) Medium</th>
                  <th className="p-4">250g (8.8 oz) Standard</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">4.7&quot; x 7.1&quot; + 2.4&quot; (120mm x 180mm + 60mm)</td>
                  <td className="p-4 font-mono">5.5&quot; x 8.7&quot; + 2.8&quot; (140mm x 220mm + 70mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Profile</td>
                  <td className="p-4">OPP / High-Barrier SiOx / CPP (100% PP)</td>
                  <td className="p-4">OPP / High-Barrier SiOx / CPP (100% PP)</td>
                  <td className="p-4">Standard Aluminum Can</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Total Thickness</td>
                  <td className="p-4">3.9 mil (100 microns)</td>
                  <td className="p-4">4.7 mil (120 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Water Vapor Transmission (WVTR)</td>
                  <td className="p-4">&lt;0.3 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">&lt;0.3 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">0.0 g/m²/24hr</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Puncture Resistance</td>
                  <td className="p-4">&gt;25 N ASTM F1306</td>
                  <td className="p-4">&gt;28 N ASTM F1306</td>
                  <td className="p-4">High Rigid Resistance</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Recyclability Stream</td>
                  <td className="p-4">#5 Polypropylene (PP) Stream</td>
                  <td className="p-4">#5 Polypropylene (PP) Stream</td>
                  <td className="p-4">Curbside Metal Stream</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Store Product Relations */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-neutral-900">Related Store Products</h3>
            <Link to="/store" className="text-xs font-bold text-orange-700 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Mono-PP Stand Up Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">250g Mono-PP Clear Window Pouch</h4>
                <p className="text-xs text-neutral-500">Recyclable #5 PP stand-up pouch for dried fruit & trail mix.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-orange-700 hover:text-orange-800">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Bio-PE Snack Bag" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Bio-PE Sugarcane Snack Pouch</h4>
                <p className="text-xs text-neutral-500">Plant-based renewable PE pouch with EVOH oxygen barrier.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-orange-700 hover:text-orange-800">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Compostable Snack Bag" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Kraft Home Compostable Snack Bag</h4>
                <p className="text-xs text-neutral-500">Certified TUV OK Compost Home kraft paper pouch.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-orange-700 hover:text-orange-800">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-orange-700 uppercase tracking-widest">Frequently Asked Questions</span>
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
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-orange-500 flex-shrink-0 bg-neutral-800 flex items-center justify-center text-orange-400 font-bold text-2xl">
            RW
          </div>
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <h4 className="text-lg font-bold text-white">Ryan Wong</h4>
              <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-xs rounded border border-orange-500/40">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Packaging Audit with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-orange-950 via-neutral-900 to-amber-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-orange-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-mono rounded-full border border-orange-500/30">
              Upgrade Your Snack Brand Packaging
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Mono-PP Dried Fruit Pouch Sample Kits
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test glass-like window clarity, puncture resistance, and #5 PP recyclability with your dried fruit products.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={openCalendly}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-neutral-950 font-bold text-sm rounded-xl transition-colors shadow-lg shadow-orange-950/50"
            >
              Schedule Engineering Consultation
            </button>
            <a
              href="mailto:support@achievepack.com?subject=Mono-PP%20Dried%20Fruit%20Pouch%20Sample"
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
              <h3 itemProp="name">What is a Mono-PP Dried Fruit Stand Up Pouch?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A Mono-PP Dried Fruit Stand Up Pouch is a 100% polypropylene flexible package made of OPP/CPP co-extruded film (&lt;0.3 g/m²/24hr WVTR). Ideal for 150g to 250g dried fruit slices and nuts, it features high window clarity, puncture resistance (&gt;25 N), and 100% recyclability in #5 PP recycling streams.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default MonoPPDriedFruitStandUpPage
