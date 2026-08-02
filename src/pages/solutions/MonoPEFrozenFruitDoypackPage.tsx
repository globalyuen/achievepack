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
  Award, Shield, AlertTriangle, Snowflake, RefreshCw, Sparkles, Layers
} from 'lucide-react'

const p = 'seoPages.pages.monoPEFrozenFruitDoypack'

const MonoPEFrozenFruitDoypackPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'mono pe frozen fruit doypack',
    'recyclable frozen berry stand up pouch',
    'sub zero cold impact pe pouch',
    'mono material frozen food packaging',
    'anti brittle freezer zipper pouch',
    '100% pe recyclable frozen vegetable bag',
    'sustainable frozen fruit pouch manufacturer',
    'evoh barrier frozen food packaging'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Sub-Zero Film Brittleness & Pouch Cracking at -20°C Freezer Temps',
      solution: 'Standard plastic films become rigid and brittle under commercial blast freezer conditions (-18°C to -40°C), shattering when dropped on frozen supermarket floors. We engineer a cold-toughened Mono-PE matrix blending elastomeric Metallocene LLDPE (mLLDPE) resins, maintaining 100% impact flexibility and zero glass-transition cracking down to -40°C.',
      icon: <Snowflake className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Sharp Ice Crystal Punctures & Freezer Burn Frosting',
      solution: 'Individually Quick Frozen (IQF) blueberries, strawberries, and mango chunks form jagged ice crystals that puncture thin 3-mil freezer bags. Moisture migration causes heavy frost buildup and freezer burn. Our 5.5-mil heavy-gauge Mono-PE pouch incorporates an EVOH moisture-oxygen barrier (WVTR <0.3 g/m²/24hr), preventing freezer burn frosting for 18 months.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Freezer Zipper Sticking & Seal Splitting Upon Opening',
      solution: 'Consumers opening frozen fruit bags in home kitchens face frozen, stuck zippers that rip away from the pouch wall. Our specialty Cold-Flex Press-to-Close Zipper is molded from elastomeric PE resins that remain flexible when frozen, opening and closing smoothly without tearing the pouch throat.',
      icon: <Shield className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Moisture & Condensation Contaminating VFFS Heat Seals',
      solution: 'Packaging wet IQF frozen fruit on automated vertical form-fill-seal (VFFS) lines coats seal margins with ice crystals and liquid water, leading to defective channel leaks. We incorporate low-temperature high-tack PE sealant resins that bite through moisture and ice films during heat sealing.',
      icon: <Layers className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Mixed Plastic Landfill Waste & EPR Regulatory Penalties',
      solution: 'Traditional frozen food pouches combine PET, nylon, and PE layers that cannot be recycled together, triggering heavy Extended Producer Responsibility (EPR) fines in the EU and UK. Our All-PE Mono-Material pouch is 100% compliant with APR and RecyClass #4 PE store drop-off and curbside recycling streams.',
      icon: <RefreshCw className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What makes Mono-PE suitable for sub-zero frozen food packaging?'),
      a: t(`${p}.faq.a1`, 'Mono-PE made with Metallocene Linear Low-Density Polyethylene (mLLDPE) has an exceptionally low glass transition temperature (-120°C). It maintains rubber-like elasticity under deep blast freezing (-40°C), preventing the cracking and seal shattering common with PET/PE composite laminates.')
    },
    {
      q: t(`${p}.faq.q2`, 'How does EVOH prevent freezer burn in frozen fruit bags?'),
      a: t(`${p}.faq.a2`, 'Freezer burn occurs when sublimated water vapor escapes the pouch and oxygen oxidizes fruit pigments. Our EVOH core layer provides an impenetrable moisture wall (WVTR <0.3 g/m²/24hr) and oxygen shield (OTR <0.5 cc/m²/24hr), locking moisture inside the fruit cells.')
    },
    {
      q: t(`${p}.faq.q3`, 'What sizes are standard for frozen fruit and berry Doypacks?'),
      a: t(`${p}.faq.a3`, 'Standard sizes include 12 oz / 340g Retail Berry Size (5.9" x 9.1" + 3.1" / 150mm x 230mm + 80mm), 16 oz / 454g (7.1" x 10.6" + 3.5" / 180mm x 270mm + 90mm), and 32 oz / 907g Family Pack (8.7" x 12.6" + 4.3" / 220mm x 320mm + 110mm).')
    },
    {
      q: t(`${p}.faq.q4`, 'Is this frozen fruit pouch 100% recyclable in standard streams?'),
      a: t(`${p}.faq.a4`, 'Yes. Because the pouch body, internal tie-layers, and press-to-close zipper are all manufactured from polyolefin PE (&gt;95% mass), the entire pouch recycles in #4 PE store drop-off and curbside collection streams.')
    },
    {
      q: t(`${p}.faq.q5`, 'What surface finishes withstand wet freezer conditions?'),
      a: t(`${p}.faq.a5`, 'We apply a Glossy or Tactile Soft-Touch Matte varnish with wet-rub resistant surface additives. The print graphics will not peel, smear, or fade when exposed to freezer frost and thawing moisture condensation.')
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
    headline: 'Mono-PE Recyclable Frozen Fruit & Berry Doypack: Engineering Guide',
    description: 'Comprehensive packaging engineering breakdown of 100% Mono-PE frozen fruit stand-up pouches with sub-zero cold-impact strength (-40°C), EVOH freezer burn shield, and RecyClass #4 PE compliance.',
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
      title="Mono-PE Frozen Fruit Doypack | Achieve Pack"
      metaDescription="Custom Mono-PE recyclable frozen fruit & berry Doypack pouches. Sub-zero cold impact strength (-40°C), anti-freezer burn EVOH barrier, 100% #4 PE recyclable."
      keywords={keywords}
      heroTitle="Mono-PE Recyclable Frozen Fruit Doypack"
      heroSubtitle="Sub-Zero Cold Impact Resistant (-40°C) × Anti-Freezer Burn EVOH Shield × 100% Polyethylene Recyclable"
      heroBadge="🔄 100% Recyclable #4 PE | Sub-Zero Tested"
      heroBgColor="#0f172a"
    >
      <DualDomainSEOHead
        title="Mono-PE Recyclable Frozen Fruit Stand-Up Doypack (Sub-Zero Tested)"
        description="Sub-zero cold-toughened mono-material PE pouch for frozen berries, fruit & smoothies. Features EVOH freezer burn shield, cold-flex zipper, and 355ml reference scale."
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
                "headline": "Frozen Fruit Doypack Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Frozen Fruit Doypack Packaging",
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
          <span className="font-semibold text-neutral-900">Mono-PE Frozen Fruit Doypack</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-cyan-950 to-blue-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Snowflake className="w-96 h-96 text-cyan-400" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-cyan-500/30 border border-cyan-400/40 text-cyan-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Frozen Food & Produce Brand Breakthrough
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Eliminate Sub-Zero Pouch Shattering Without Resorting to Non-Recyclable Plastics
            </h2>
            <p className="text-cyan-100 leading-relaxed">
              Packing IQF frozen berries and organic fruit blends is tough on packaging. Traditional plastic pouches turn brittle at -20°C, cracking open during grocery store stocking, while unbarrier bags cause heavy freezer burn frosting that ruins fruit taste.
            </p>
            <p className="text-cyan-200/90 text-sm leading-relaxed">
              Our <strong>Mono-PE Frozen Fruit Doypack</strong> combines sub-zero metallocene PE resins with an anti-freezer burn EVOH moisture shield. It survives 1.5-meter sub-zero drop tests down to -40°C while offering 100% Recyclable #4 PE store drop-off compliance.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Frozen Fruit Doypack.
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
              Inspect & Customize Frozen Fruit Doypack Packaging in Interactive 3D
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
        <section className="bg-cyan-50 border-2 border-cyan-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-cyan-600 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-cyan-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-cyan-900 leading-relaxed">
                A <strong>Mono-PE Frozen Fruit Doypack</strong> is a cold-toughened flexible stand-up pouch made entirely from Polyethylene (&gt;95% total PE mass). Formulated with elastomeric mLLDPE resins for sub-zero drop impact strength (-40°C) and an EVOH moisture barrier (&lt;0.3 g/m²/24hr WVTR), it holds 16 oz (454g) of frozen berries without pouch cracking or freezer burn frosting, fully recycling under #4 PE code.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-cyan-500 transition-colors">
            <div className="text-cyan-600 font-bold text-xl">❄️ Sub-Zero Impact (-40°C)</div>
            <p className="text-xs text-neutral-600">Elastomeric mLLDPE resin blend prevents brittle glass-transition film shattering under deep freezing.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-cyan-500 transition-colors">
            <div className="text-cyan-600 font-bold text-xl">🛡️ Anti-Freezer Burn Shield</div>
            <p className="text-xs text-neutral-600">EVOH core layer (&lt;0.3g WVTR) prevents ice sublimation and preserves vibrant fruit pigments for 18 months.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-cyan-500 transition-colors">
            <div className="text-cyan-600 font-bold text-xl">🔄 100% Recyclable Mono-PE</div>
            <p className="text-xs text-neutral-600">Pure polyolefin design with matching PE zipper. Fully compliant with RecyClass & APR #4 recycling standards.</p>
          </div>
        </section>

        {/* Hero & Detail Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Visual Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed 16 oz Mono-PE Frozen Fruit Doypack</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring a high-clarity <strong>Wet-Moisture Resistant Varnish</strong>, Cold-Flex press zipper, and stable K-seal bottom gusset. Designed for frozen berries, mango chunks, smoothie blends, and IQF vegetables.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 7.1&quot; x 10.6&quot; + 3.5&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">180mm x 270mm + 90mm</span>
              <span className="px-3 py-1 bg-cyan-50 border border-cyan-200 text-xs text-cyan-800 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="Mono-PE Recyclable Stand-Up Doypack for Frozen Fruit"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Frozen Food Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">How our polyolefin sub-zero engineering solves freezer packaging issues</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4 border border-neutral-800 flex flex-col justify-between hover:border-cyan-500 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-cyan-400 font-mono">{item.num}</span>
                    <div className="p-2 bg-cyan-950 text-cyan-400 rounded-xl border border-cyan-800/50">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-neutral-100 leading-snug">{item.problem}</h3>
                </div>
                <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700/60 mt-4 space-y-1">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Engineering Solution:
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* From Ryan Wong's Engineering Notebook */}
        <section className="bg-cyan-950/40 border-2 border-cyan-500/40 rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500 text-neutral-950 rounded-xl font-bold text-xs uppercase tracking-wider">
              🔬 Engineer&apos;s Log
            </div>
            <h3 className="text-xl font-bold text-cyan-200">
              From Ryan Wong&apos;s Packaging Engineering Notebook
            </h3>
          </div>
          <blockquote className="text-sm text-cyan-100/90 italic leading-relaxed pl-4 border-l-4 border-cyan-500">
            &quot;During freezer drop-impact trials (-25°C) for a commercial organic berry brand in Oregon, standard PET/PE laminates shattered at a 15% rate when dropped from 1.2 meters due to rigid PET glass transition. We co-extruded a 3-layer Mono-PE structure incorporating 25% Metallocene LLDPE with high puncture elongation. Pouch drop survival reached 100% across 500 test drops with zero pinhole tears or seal splits.&quot;
          </blockquote>
          <div className="text-xs text-cyan-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Mono-PE Frozen Fruit Pouch Technical Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">16 oz (454g) Standard Berry Pack</th>
                  <th className="p-4">32 oz (907g) Family Pack</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">7.1&quot; x 10.6&quot; + 3.5&quot; (180mm x 270mm + 90mm)</td>
                  <td className="p-4 font-mono">8.7&quot; x 12.6&quot; + 4.3&quot; (220mm x 320mm + 110mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Composition</td>
                  <td className="p-4">HDPE Outer / EVOH Core / mLLDPE Sealant (&gt;95% PE)</td>
                  <td className="p-4">HDPE Outer / EVOH Core / mLLDPE Sealant (&gt;95% PE)</td>
                  <td className="p-4">Standard Aluminum Can</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Total Thickness</td>
                  <td className="p-4">5.5 mil (140 microns)</td>
                  <td className="p-4">6.5 mil (165 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Cold Temperature Rating</td>
                  <td className="p-4">Tested to -40°C (-40°F) Blast Freezing</td>
                  <td className="p-4">Tested to -40°C (-40°F) Blast Freezing</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Moisture Barrier (WVTR)</td>
                  <td className="p-4">&lt;0.3 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">&lt;0.3 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">0.0 g/m²/24hr</td>
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
            <h3 className="text-xl font-bold text-neutral-900">Related Frozen Food Packaging</h3>
            <Link to="/store" className="text-xs font-bold text-cyan-600 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="16 oz Frozen Fruit Doypack" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">16 oz Mono-PE Frozen Fruit Doypack</h4>
                <p className="text-xs text-neutral-500">Recyclable sub-zero PE pouch with anti-freezer burn EVOH barrier.</p>
                <Link to="/store/product/mono-pe-frozen-fruit-pouch" className="inline-block mt-2 text-xs font-bold text-cyan-600 hover:text-cyan-700">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Frozen Smoothie Mix Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Frozen Smoothie Mix Stand-Up Pouch</h4>
                <p className="text-xs text-neutral-500">Single-serve sub-zero Mono-PE zipper pouch for frozen pre-portioned smoothies.</p>
                <Link to="/store/product/frozen-smoothie-pouch" className="inline-block mt-2 text-xs font-bold text-cyan-600 hover:text-cyan-700">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Compostable Frozen Food Bag" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Compostable Frozen Food Pillow Bag</h4>
                <p className="text-xs text-neutral-500">Home compostable bio-cellulose rollstock film for automated frozen packaging.</p>
                <Link to="/store/product/compostable-frozen-bag" className="inline-block mt-2 text-xs font-bold text-cyan-600 hover:text-cyan-700">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Frequently Asked Questions</span>
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
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-500 flex-shrink-0 bg-neutral-800 flex items-center justify-center text-cyan-400 font-bold text-2xl">
            RW
          </div>
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <h4 className="text-lg font-bold text-white">Ryan Wong</h4>
              <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded border border-cyan-500/40">
                14+ Yrs Packaging Engineering
              </span>
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700">
                GRS & FSC Certified Auditor
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Specialist in sub-zero polyolefin resin selection (-40°C), anti-freezer burn barrier design, and high-speed VFFS frozen food packing line optimization.
            </p>
            <div className="pt-2">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Engineering Consultation with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-cyan-950 via-neutral-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-cyan-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-mono rounded-full border border-cyan-500/30">
              Ready to Upgrade Your Frozen Food Packaging?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Custom Printed Mono-PE Frozen Fruit Sample Pouches Shipped Worldwide
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test sub-zero drop impact strength, freezer burn resistance, and cold-flex zippers under actual blast freezer conditions before placing a commercial order.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={openCalendly}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold text-sm rounded-xl transition-colors shadow-lg shadow-cyan-950/50"
            >
              Schedule Engineering Consultation
            </button>
            <a
              href="mailto:support@achievepack.com?subject=Mono-PE%20Frozen%20Fruit%20Pouch%20Sample%20Request"
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
              <h3 itemProp="name">What is a Mono-PE Frozen Fruit Doypack?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A Mono-PE Frozen Fruit Doypack is a cold-toughened 100% recyclable flexible stand-up pouch made from polyethylene film and matching PE zippers (&gt;95% total PE mass). Formulated with elastomeric mLLDPE resins for sub-zero impact resistance down to -40°C and an EVOH moisture barrier (&lt;0.3 g/m²/24hr WVTR), it protects frozen berries and fruit from cracking and freezer burn frosting while recycling under #4 PE code.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default MonoPEFrozenFruitDoypackPage
