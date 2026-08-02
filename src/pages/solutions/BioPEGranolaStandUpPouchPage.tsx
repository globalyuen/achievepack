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

const BioPEGranolaStandUpPouchPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'bio pe granola stand up pouch',
    'sugarcane bio-pe doypack granola',
    'plant based organic cereal pouch',
    'recyclable muesli stand up bag',
    'evoh high moisture granola pouch',
    'clear window bio pe breakfast pouch',
    '100% recyclable #4 pe cereal bag',
    'sustainable oat packaging'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Granola Crispiness Lost Due to Moisture Vapor Penetration',
      solution: 'Crunchy oat clusters quickly absorb ambient moisture through standard film pouches, rendering granola soft and unappealing. Our Bio-PE pouch incorporates an EVOH barrier layer reducing Water Vapor Transmission Rate (WVTR) to <0.6 g/m²/24hr, keeping oats & nuts crisp for 12+ months.',
      icon: <Wind className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Oil Seepage & Staining from Nut Butter & Seed Oils',
      solution: 'High-fat seeds, toasted nuts, and coconut oils can penetrate low-grade PE films, leaving sticky stains on outer package printing. We apply a specialized grease-resistant bio-based tie-layer that prevents fat migration while maintaining pristine print quality.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Zipper Failure & Fine Particle Contamination',
      solution: 'Fine oat dust and sugar flakes clog traditional zippers, causing pouches to pop open in pantries. We install high-performance press-to-close Mono-PE zippers engineered with wide interlocking tracks that purge fine powder upon closing.',
      icon: <Package className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Consumer Desire for Transparent Product Windows in Eco Pouches',
      solution: 'Shoppers want to inspect organic granola ingredients before buying, but traditional transparent films compromise oxygen barriers. We offer high-clarity EVOH window cutouts that maintain full #4 PE recyclability while giving buyers clear visibility of toasted clusters.',
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Fossil-Based Plastic Backlash & Greenwashing Risk',
      solution: 'Consumers scrutinize petroleum plastic claims. Our Bio-PE granola pouches use certified Braskem I\'m Green™ sugarcane polyolefin resin with third-party carbon footprint audits, removing up to 2.1 tons of CO₂ per ton of resin produced.',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: 'What is the material composition of a Bio-PE Granola Stand-Up Pouch?',
      a: 'The pouch is manufactured using sugarcane ethanol-derived Bio-PE blended with an ultra-thin EVOH barrier core layer. The resulting structure is 100% Mono-PE (#4 PE), fully recyclable via store drop-off streams.'
    },
    {
      q: 'Can a Bio-PE pouch have a clear transparent window for granola?',
      a: 'Yes! We engineer high-transparency Bio-PE films with crystal-clear EVOH window zones, allowing consumers to see product texture and ingredients without sacrificing barrier properties or recyclability.'
    },
    {
      q: 'How does Bio-PE protect granola from going stale?',
      a: 'Our EVOH-fortified Bio-PE structure exhibits a Water Vapor Transmission Rate (WVTR) below 0.6 g/m²/24hr and OTR below 0.5 cc/m²/24hr, completely shielding baked oats and dried fruits from atmospheric moisture and oxygen.'
    },
    {
      q: 'What pouch sizes are popular for organic granola brands?',
      a: 'Common sizes include 250g / 8.8 oz (5.9" x 9.0" + 3.1" / 150mm x 230mm + 80mm) and 340g / 12 oz (6.7" x 10.2" + 3.5" / 170mm x 260mm + 90mm). Custom size die-cuts are fully supported.'
    },
    {
      q: 'What is the MOQ for custom printed sugarcane Bio-PE granola pouches?',
      a: 'On Pouch Eco, short-run digital printing starts at 100 units per SKU. On Achieve Pack Enterprise, high-speed rotogravure production begins at 5,000 units with volume price breaks.'
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
    headline: 'Bio-PE Granola Stand-Up Pouch with EVOH Barrier: Technical Packaging Guide',
    description: 'Comprehensive engineering guide on plant-based sugarcane Bio-PE stand-up pouches for organic granola, cereal, and muesli.',
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
      title="Bio-PE Granola Stand-Up Pouch | Sugarcane Recyclable Doypack"
      metaDescription="Custom Bio-PE plant-based stand-up pouch for organic granola and cereal. High-barrier EVOH moisture protection, clear window options, and 100% Recyclable #4 PE structure."
      keywords={keywords}
      heroTitle="Bio-PE Granola Stand-Up Pouch"
      heroSubtitle="Sugarcane Bio-PE Resin × EVOH Moisture Barrier × Dust-Proof Zipper × 100% Recyclable #4 PE"
      heroBadge="🌱 I'm Green™ Sugarcane | 100% Recyclable #4 PE"
      heroBgColor="#047857"
    >
      <DualDomainSEOHead
        title="Bio-PE Granola Stand-Up Pouch | Sugarcane Recyclable Doypack"
        description="Sugarcane Bio-PE stand-up Doypack for organic granola, oats, and cereal. Features high EVOH moisture barrier, clear window, press-to-close zipper, and 355ml reference scale."
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
                "headline": "Granola Stand Up Pouch Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Granola Stand Up Pouch Packaging",
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
          <span className="font-semibold text-neutral-900">Bio-PE Granola Stand-Up Pouch</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-emerald-950 to-teal-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Leaf className="w-96 h-96 text-emerald-300" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-emerald-500/30 border border-emerald-400/40 text-emerald-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Organic Breakfast Brand Insight
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Keep Granola Crunchy Without Relying on Fossil-Fuel Plastics
            </h2>
            <p className="text-emerald-100 leading-relaxed">
              Organic breakfast shoppers care deeply about what goes into their bodies and onto the planet. When your high-protein, honey-toasted granola is packaged in conventional multi-layer plastic, health-conscious consumers hesitate at checkout.
            </p>
            <p className="text-emerald-200/90 text-sm leading-relaxed">
              Our <strong>Bio-PE Granola Stand-Up Pouch</strong> solves this dilemma. Sourced from Brazilian sugarcane ethanol, it delivers an eco-friendly carbon-negative footprint while protecting delicate oat crispiness with ultra-low moisture transmission rates.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Granola Stand Up Pouch.
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
              Inspect & Customize Granola Stand Up Pouch Packaging in Interactive 3D
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
        <section className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-600 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-emerald-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-emerald-900 leading-relaxed">
                A <strong>Bio-PE Granola Stand-Up Pouch</strong> is a plant-based Doypack package made from sugarcane polyethylene (I&apos;m Green™ certified). Engineered with an EVOH moisture barrier (&lt;0.6 g/m²/24hr WVTR), a dust-purging press-to-close zipper, and optional clear viewing windows, it holds 250g–500g of granola while qualifying for 100% Recyclable #4 PE recycling.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-emerald-500 transition-colors">
            <div className="text-emerald-600 font-bold text-xl">🌾 Moisture Crispness Barrier</div>
            <p className="text-xs text-neutral-600">WVTR &lt;0.6 g/m²/24hr keeps toasted oats, nuts, and seed clusters crunchy for 12+ months.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-emerald-500 transition-colors">
            <div className="text-emerald-600 font-bold text-xl">🌱 Carbon-Negative Sugarcane PE</div>
            <p className="text-xs text-neutral-600">Captures 2.1kg of CO₂ per kg of resin produced, offering a verified low-carbon lifecycle.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-emerald-500 transition-colors">
            <div className="text-emerald-600 font-bold text-xl">👁️ Recyclable Clear Window</div>
            <p className="text-xs text-neutral-600">Optional clear window cutout lets consumers inspect granola texture without breaking recyclability.</p>
          </div>
        </section>

        {/* Hero & Detail Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Visual Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed Bio-PE 340g Granola Doypack</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Designed with a stable bottom K-seal gusset, tactile soft-matte finish, clear viewing window, and dust-resistant reclosable zipper.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 6.7&quot; x 10.2&quot; + 3.5&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">170mm x 260mm + 90mm</span>
              <span className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="Bio-PE Granola Stand Up Pouch next to organic oat cereal"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Granola Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">Resolving moisture, oil resistance, and clear window barrier issues</p>
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
            &quot;A client selling maple nut granola experienced pouch fogging and soft oats when shipping to humid Southeast Asian markets. We analyzed their pouch seal integrity and found standard PE zippers permitted 1.8 g/m²/day water vapor ingress along the zip track. By upgrading to an ultra-precise interlocking Mono-PE zipper with ultrasonic end-stops, we reduced moisture ingress by 78%, keeping the granola crisp across a 14-month shelf study.&quot;
          </blockquote>
          <div className="text-xs text-amber-800 dark:text-amber-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Bio-PE Granola Pouch Technical Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">250g (8.8 oz) Standard</th>
                  <th className="p-4">340g (12 oz) Large</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">5.9&quot; x 9.0&quot; + 3.1&quot; (150mm x 230mm + 80mm)</td>
                  <td className="p-4 font-mono">6.7&quot; x 10.2&quot; + 3.5&quot; (170mm x 260mm + 90mm)</td>
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
                  <td className="p-4">4.3 mil (110 microns)</td>
                  <td className="p-4">4.7 mil (120 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Moisture Transmission (WVTR)</td>
                  <td className="p-4">&lt;0.6 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">&lt;0.6 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">0.0 g/m²/24hr</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Zipper System</td>
                  <td className="p-4">Press-to-Close Powder Purging Zipper</td>
                  <td className="p-4">Press-to-Close Powder Purging Zipper</td>
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

        {/* Store Product Relations */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-neutral-900">Related Store Products</h3>
            <Link to="/store" className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Bio-PE Granola Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">340g Bio-PE Granola Doypack</h4>
                <p className="text-xs text-neutral-500">Plant-based sugarcane pouch with EVOH moisture barrier.</p>
                <Link to="/store/product/bio-pe-granola-pouch" className="inline-block mt-2 text-xs font-bold text-emerald-600 hover:text-emerald-700">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Compostable Granola Bag" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Home Compostable Granola Bag</h4>
                <p className="text-xs text-neutral-500">Kraft paper home-compostable bag with plant cellulose lining.</p>
                <Link to="/store/product/compostable-granola-bag" className="inline-block mt-2 text-xs font-bold text-emerald-600 hover:text-emerald-700">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Mono-PE Snack Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Recyclable Mono-PE Snack Bag</h4>
                <p className="text-xs text-neutral-500">High clarity #4 PE pouch for nuts, dried fruits, and trail mixes.</p>
                <Link to="/store/product/mono-pe-snack-bag" className="inline-block mt-2 text-xs font-bold text-emerald-600 hover:text-emerald-700">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Frequently Asked Questions</span>
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
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-emerald-500 flex-shrink-0 bg-neutral-800 flex items-center justify-center text-emerald-400 font-bold text-2xl">
            RW
          </div>
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <h4 className="text-lg font-bold text-white">Ryan Wong</h4>
              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded border border-emerald-500/40">
                14+ Yrs Packaging Engineering
              </span>
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700">
                GRS & FSC Certified Auditor
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Specializes in plant-based polyolefin materials, moisture barrier optimization, and eco-friendly cereal packaging.
            </p>
            <div className="pt-2">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Packaging Audit with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-emerald-950 via-neutral-900 to-teal-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-emerald-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-mono rounded-full border border-emerald-500/30">
              Ready to Package Your Granola Sustainably?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Custom Printed Bio-PE Granola Pouch Samples
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test moisture barrier protection and zipper sealing performance on your own filling lines before ordering.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={openCalendly}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm rounded-xl transition-colors shadow-lg shadow-emerald-950/50"
            >
              Schedule Engineering Consultation
            </button>
            <a
              href="mailto:support@achievepack.com?subject=Bio-PE%20Granola%20Pouch%20Sample%20Request"
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
              <h3 itemProp="name">What is a Bio-PE Granola Stand-Up Pouch?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A Bio-PE Granola Stand-Up Pouch is a plant-based Doypack flexible bag made from sugarcane-derived polyethylene combined with an EVOH moisture barrier layer (&lt;0.6 g/m²/24hr WVTR). It protects organic cereal and granola from moisture loss while remaining 100% recyclable in #4 PE film streams.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default BioPEGranolaStandUpPouchPage
