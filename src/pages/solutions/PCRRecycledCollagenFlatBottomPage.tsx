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

const PCRRecycledCollagenFlatBottomPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'pcr recycled collagen flat bottom pouch',
    'post consumer recycled collagen powder packaging',
    '30% pcr wellness powder pouch',
    'recyclable collagen peptides box pouch',
    'evoh moisture barrier collagen pouch',
    'wide opening protein powder pouch',
    '100% recyclable #4 pe supplement bag',
    'sustainable collagen peptides packaging'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Collagen Powder Clumping & Humidity Degradation',
      solution: 'Hydrolyzed collagen peptides are extremely hygroscopic, absorbing water vapor quickly upon air exposure and forming sticky clumps. Our PCR flat bottom pouch incorporates an EVOH barrier co-extrusion (<0.6 g/m²/24hr WVTR), locking out moisture for 24+ months.',
      icon: <Wind className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Messy Scoop Dusting & Powder Catching Under Standard Zippers',
      solution: 'Consumers hate getting collagen powder on their hands when scooping out of narrow bags. Our 5-panel flat bottom pouch features a wide 3.5" (90mm) square top opening paired with a recessed pocket tear zipper, guaranteeing clean scoop access.',
      icon: <Package className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Rigid Plastic Tub Waste & High Shipping Carbon Emissions',
      solution: 'Traditional rigid HDPE collagen tubs contain 70% excess air volume and weigh 5x more than flexible pouches, driving up shipping freight costs. Switching to PCR flexible flat bottom pouches reduces packaging weight by 80% and transport carbon emissions by 65%.',
      icon: <RefreshCw className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Surface Hazing & Dark Gel Specks in Recycled Content',
      solution: 'Unfiltered post-consumer plastic often exhibits grey streaks or black gel specks. We utilize GRS 4.0 certified PCR resins subjected to dual melt filtration and high-opacity white PE tie-layers, producing pristine PMS color printing.',
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Regulatory Scrutiny for Recycled Food-Contact Plastics',
      solution: 'Nutraceutical brands face strict FDA and EFSA safety rules for recycled materials. We engineer a 3-layer film structure: outer GRS-certified 30%+ PCR PE layer, EVOH barrier core, and inner virgin FDA 21 CFR food-grade PE sealant layer for 100% safety.',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: 'Is a PCR Recycled Collagen Pouch safe for direct food/supplement contact?',
      a: 'Yes! Our pouches feature a co-extruded multi-layer architecture. The outer layer utilizes 30% to 50% GRS-certified PCR resin, while the inner sealant layer in contact with the collagen powder is molded from 100% virgin FDA-compliant food-contact PE.'
    },
    {
      q: 'How does a flat bottom pouch compare to a traditional rigid plastic collagen tub?',
      a: 'A flat bottom box pouch uses 80% less plastic by weight than a rigid HDPE tub, ships flat (reducing inbound logistics emissions by 70%), and stands just as stably on retail shelves with a premium tactile soft-matte finish.'
    },
    {
      q: 'What is the moisture barrier performance for hydrolyzed collagen peptides?',
      a: 'Thanks to the integrated EVOH co-extruded barrier core, the Water Vapor Transmission Rate (WVTR) is less than 0.6 g/m²/24hr, preventing collagen powder from clumping even in humid tropical climates.'
    },
    {
      q: 'What pouch sizes are common for collagen powder and protein supplements?',
      a: 'Popular sizes include 300g / 10.5 oz (4.9" x 7.8" + 3.1" / 125mm x 200mm + 80mm), 500g / 17.6 oz (5.9" x 9.8" + 3.5" / 150mm x 250mm + 90mm), and 1kg / 2.2 lb (7.1" x 11.8" + 3.9" / 180mm x 300mm + 100mm).'
    },
    {
      q: 'What is the MOQ for custom printed PCR collagen pouches?',
      a: 'Custom digital printing starts from 500 units per SKU for short-run wellness brands. High-volume rotogravure printing starts at 5,000 units.'
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
    headline: 'PCR Recycled Collagen Flat Bottom Pouch: Technical Spec & Safety Guide',
    description: 'Detailed packaging guide on GRS-certified 30%+ PCR recycled flat bottom box pouches for collagen peptides, protein powders, and nutraceuticals.',
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
      title="PCR Recycled Collagen Flat Bottom Pouch | 30% Post-Consumer PE"
      metaDescription="Custom GRS-certified 30%+ PCR recycled flat bottom pouch for collagen peptides and protein powders. EVOH moisture barrier, wide scoop-friendly box opening, and 100% Recyclable #4 PE."
      keywords={keywords}
      heroTitle="PCR Recycled Collagen Flat Bottom Pouch"
      heroSubtitle="30%+ Post-Consumer Recycled PE × Wide Scoop-Friendly Box Opening × EVOH Moisture Barrier × Recyclable #4 PE"
      heroBadge="♻️ GRS 4.0 Certified | 100% Recyclable #4 PE"
      heroBgColor="#be185d"
    >
      <DualDomainSEOHead
        title="PCR Recycled Collagen Flat Bottom Pouch | 30% Post-Consumer PE"
        description="30%+ PCR recycled flat bottom box pouch for collagen peptides and nutritional powders. Features EVOH moisture barrier, wide opening, pocket zipper, and 355ml reference scale."
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
                "headline": "Collagen Flat Bottom Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Collagen Flat Bottom Packaging",
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
          <span className="font-semibold text-neutral-900">PCR Collagen Flat Bottom Pouch</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-pink-950 to-rose-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Sparkles className="w-96 h-96 text-pink-300" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-pink-500/30 border border-pink-400/40 text-pink-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Nutraceutical Brand Insight
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Replace Bulky Rigid Tubs with Eco-Friendly PCR Flexible Pouches
            </h2>
            <p className="text-pink-100 leading-relaxed">
              Wellness consumers buying collagen peptides want sleek, sustainable packaging. Bulky plastic tubs clutter kitchen counters, waste shipping space, and contribute to virgin plastic pollution.
            </p>
            <p className="text-pink-200/90 text-sm leading-relaxed">
              Our <strong>PCR Recycled Collagen Flat Bottom Pouch</strong> offers the ultimate modern upgrade. Made with 30%+ GRS-certified post-consumer resin, it cuts plastic weight by 80%, features a wide scoop-friendly box opening, and keeps powders dry.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Collagen Flat Bottom.
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
              Inspect & Customize Collagen Flat Bottom Packaging in Interactive 3D
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
                src="/imgs/store/pouch shape/quad-seal.webp"
                alt="2. High Puncture Resistance & Fat Barrier"
                className="w-full h-48 object-cover rounded-xl border border-neutral-700 shadow-md hover:border-emerald-500 transition-all"
              />
              <h3 className="font-semibold text-white text-sm">2. High Puncture Resistance & Fat Barrier</h3>
              <p className="text-xs text-neutral-400">Multi-layer co-extruded film structure prevents oil bleed-through and resists sharp kibble puncture.</p>
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
        <section className="bg-pink-50 border-2 border-pink-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-600 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-pink-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-pink-900 leading-relaxed">
                A <strong>PCR Recycled Collagen Flat Bottom Pouch</strong> is a 5-panel box-style flexible package incorporating 30% to 50% GRS-certified post-consumer recycled PE resin. Equipped with an EVOH moisture barrier (&lt;0.6 g/m²/24hr WVTR) and wide opening for 300g–1kg of collagen powder, it fully recycles in #4 PE store drop-off streams.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-pink-500 transition-colors">
            <div className="text-pink-600 font-bold text-xl">♻️ 30%+ GRS Certified PCR</div>
            <p className="text-xs text-neutral-600">Uses verified post-consumer recycled resin, reducing virgin plastic consumption and carbon footprint.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-pink-500 transition-colors">
            <div className="text-pink-600 font-bold text-xl">🥄 Easy Scoop Box Opening</div>
            <p className="text-xs text-neutral-600">Wide 5-panel box geometry enables clean scoop access without powder dusting on knuckles.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-pink-500 transition-colors">
            <div className="text-pink-600 font-bold text-xl">🛡️ EVOH Moisture Lock</div>
            <p className="text-xs text-neutral-600">WVTR &lt;0.6 g/m²/24hr prevents hygroscopic collagen peptides from clumping for 24+ months.</p>
          </div>
        </section>

        {/* Hero & Detail Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-pink-600 uppercase tracking-widest">Visual Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed PCR 500g Collagen Box Pouch</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring a silky Soft-Touch Matte Varnish, recessed pocket tear zipper, crisp rotogravure print finish, and food-grade virgin inner sealant layer.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 5.9&quot; x 9.8&quot; + 3.5&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">150mm x 250mm + 90mm</span>
              <span className="px-3 py-1 bg-pink-50 border border-pink-200 text-xs text-pink-800 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="PCR Recycled Collagen Flat Bottom Pouch next to scoop of collagen peptides powder"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-pink-600 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Collagen Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">Addressing clumping, scoop mess, and PCR safety compliance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4 border border-neutral-800 flex flex-col justify-between hover:border-pink-500 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-pink-400 font-mono">{item.num}</span>
                    <div className="p-2 bg-pink-950 text-pink-400 rounded-xl border border-pink-800/50">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-neutral-100 leading-snug">{item.problem}</h3>
                </div>
                <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700/60 mt-4 space-y-1">
                  <div className="text-xs font-bold text-pink-400 uppercase tracking-wider flex items-center gap-1">
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
            &quot;When a Australian wellness brand replaced their 1-liter rigid HDPE collagen tubs with our 30% PCR flat bottom pouches, we conducted a cradle-to-gate LCA audit. Not only did freight shipping costs fall by 48%, but consumer survey scores for ease of scooping jumped 65% thanks to the wide box top opening.&quot;
          </blockquote>
          <div className="text-xs text-amber-800 dark:text-amber-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-pink-600 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">PCR Collagen Flat Bottom Specification Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">300g (10.5 oz) Standard</th>
                  <th className="p-4">500g (17.6 oz) Large</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">4.9&quot; x 7.8&quot; + 3.1&quot; (125mm x 200mm + 80mm)</td>
                  <td className="p-4 font-mono">5.9&quot; x 9.8&quot; + 3.5&quot; (150mm x 250mm + 90mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Profile</td>
                  <td className="p-4">30% PCR PE / EVOH / Virgin PE (Recyclable #4)</td>
                  <td className="p-4">30% PCR PE / EVOH / Virgin PE (Recyclable #4)</td>
                  <td className="p-4">Standard Aluminum Can</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Total Thickness</td>
                  <td className="p-4">5.1 mil (130 microns)</td>
                  <td className="p-4">5.5 mil (140 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Moisture Transmission (WVTR)</td>
                  <td className="p-4">&lt;0.6 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">&lt;0.6 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">0.0 g/m²/24hr</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Zipper Closure</td>
                  <td className="p-4">Pocket Tear Zipper (Recessed)</td>
                  <td className="p-4">Pocket Tear Zipper (Recessed)</td>
                  <td className="p-4">Pull-Tab Top</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Certifications</td>
                  <td className="p-4">GRS 4.0, ISCC PLUS, FDA 21 CFR Compliant</td>
                  <td className="p-4">GRS 4.0, ISCC PLUS, FDA 21 CFR Compliant</td>
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
            <Link to="/store" className="text-xs font-bold text-pink-600 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="PCR Collagen Flat Bottom Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">500g PCR Collagen Flat Bottom Pouch</h4>
                <p className="text-xs text-neutral-500">30% PCR recycled PE pouch with pocket zipper for wellness powders.</p>
                <Link to="/store/product/pcr-collagen-flat-bottom-pouch" className="inline-block mt-2 text-xs font-bold text-pink-600 hover:text-pink-700">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Bio-PE Protein Powder Bag" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Bio-PE Protein Powder Doypack</h4>
                <p className="text-xs text-neutral-500">Plant-based sugarcane pouch with high moisture barrier for whey & plant protein.</p>
                <Link to="/store/product/bio-pe-protein-bag" className="inline-block mt-2 text-xs font-bold text-pink-600 hover:text-pink-700">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Compostable Powder Bag" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Compostable Supplement Pouch</h4>
                <p className="text-xs text-neutral-500">Home compostable Kraft paper pouch for organic superfoods.</p>
                <Link to="/store/product/compostable-supplement-pouch" className="inline-block mt-2 text-xs font-bold text-pink-600 hover:text-pink-700">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-pink-600 uppercase tracking-widest">Frequently Asked Questions</span>
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
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-pink-500 flex-shrink-0 bg-neutral-800 flex items-center justify-center text-pink-400 font-bold text-2xl">
            RW
          </div>
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <h4 className="text-lg font-bold text-white">Ryan Wong</h4>
              <span className="px-2 py-0.5 bg-pink-500/20 text-pink-400 text-xs rounded border border-pink-500/40">
                14+ Yrs Packaging Engineering
              </span>
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700">
                GRS & FSC Certified Auditor
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Specialist in post-consumer recycled polyolefin films, nutraceutical powder moisture protection, and sustainable supplement packaging conversion.
            </p>
            <div className="pt-2">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Packaging Audit with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-pink-950 via-neutral-900 to-rose-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-pink-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs font-mono rounded-full border border-pink-500/30">
              Upgrade Your Collagen Packaging
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Custom Printed PCR Collagen Pouch Samples
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test moisture barrier protection, pocket zipper durability, and soft-touch matte finish with your own powder products.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={openCalendly}
              className="px-6 py-3 bg-pink-500 hover:bg-pink-400 text-neutral-950 font-bold text-sm rounded-xl transition-colors shadow-lg shadow-pink-950/50"
            >
              Schedule Engineering Consultation
            </button>
            <a
              href="mailto:support@achievepack.com?subject=PCR%20Collagen%20Pouch%20Sample%20Request"
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
              <h3 itemProp="name">What is a PCR Recycled Collagen Flat Bottom Pouch?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A PCR Recycled Collagen Flat Bottom Pouch is a 5-panel box-style flexible package incorporating 30% to 50% GRS-certified post-consumer recycled PE plastic. Engineered with an EVOH moisture barrier (&lt;0.6 g/m²/24hr WVTR) and wide opening for 300g–1kg of collagen peptides, it is 100% recyclable in #4 PE film streams.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default PCRRecycledCollagenFlatBottomPage
