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

const BioPERoastedNutsQuadSealPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'bio pe roasted nuts quad seal bag',
    'sugarcane bio-pe almond pouch',
    'nitrogen flush nut packaging bag',
    'evoh oil barrier quad seal nut bag',
    'recyclable trail mix bag',
    'macadamia nut soft touch pouch',
    '100% recyclable #4 pe nut packaging',
    'sustainable roasted nut packaging'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Rancidity & Stale Off-Flavors Caused by Nut Lipid Oxidation',
      solution: 'Roasted nuts and seeds (such as almonds, cashews, and walnuts) contain high unsaturated fats that oxidize rapidly when exposed to oxygen, creating bitter off-flavors. Our Bio-PE quad seal bag integrates an EVOH co-extruded barrier (<0.5 cc/m²/24hr OTR), preserving fresh roast flavor and crunchy texture for 18+ months.',
      icon: <Wind className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Bag Deflation & Nitrogen Gas Loss on Automated Packing Lines',
      solution: 'Nitrogen gas flushing extends nut shelf life, but porous film seals allow N₂ gas to diffuse out, causing bags to collapse on retail shelves. We formulate high-density LLDPE heat-seal layers with zero pinhole tolerances, maintaining internal N₂ gas purity >98%.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Oil Bleed & Grease Staining on Outer Paper / Plastic Surface',
      solution: 'Essential nut oils seep through standard plastic layers, leaving unsightly grease spots on package branding. Our multi-layer plant-based structure incorporates a grease-proof inner sealant layer that resists oil migration up to 60°C ambient transport.',
      icon: <Package className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Pouch Slouching & Unstable Display on Retail Shelves',
      solution: 'Standard pillow bags collapse on retail shelves when stacked. Our 4-corner quad-seal structure provides rigid box-like vertical pillars that stand perfectly upright on supermarket shelves, maximizing brand visibility.',
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Retailer Pressure for Sustainable #4 PE Stream Compliance',
      solution: 'Supermarket chains demand recyclable polyolefin film packaging. Built with sugarcane-derived I\'m Green™ Bio-PE resin, our quad seal bags are certified 100% Recyclable in standard Store Drop-off (#4 PE) streams.',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: 'Why choose Bio-PE quad seal bags over conventional plastic bags for roasted nuts?',
      a: 'Bio-PE is synthesized from sugarcane ethanol, capturing 2.1kg of CO₂ per kg of resin while delivering identical barrier performance, seal strength, and oil resistance as fossil PE. Its 4-corner quad seal design provides 360-degree branding real estate and rock-solid shelf stability.'
    },
    {
      q: 'Are Bio-PE quad seal nut bags compatible with Nitrogen Gas Flushing (MAP)?',
      a: 'Yes. Our EVOH-fortified Bio-PE structure has extremely low gas permeability, retaining residual O₂ levels below 0.5% after nitrogen flushing, which extends roasted nut shelf life up to 18 months.'
    },
    {
      q: 'Can a reclosable zipper be added to a quad seal nut bag?',
      a: 'Yes. We offer heavy-duty press-to-close Mono-PE zippers and pocket zippers welded into the top gusset area, allowing consumers to easily re-seal nuts between snacks.'
    },
    {
      q: 'What bag capacities are supported for gourmet nuts and trail mixes?',
      a: 'Standard sizes range from 250g / 8.8 oz (4.3" x 7.8" + 2.8" / 110mm x 200mm + 70mm) up to 1kg / 2.2 lb (5.9" x 12.6" + 3.9" / 150mm x 320mm + 100mm).'
    },
    {
      q: 'What is the Minimum Order Quantity (MOQ) for custom Bio-PE quad seal bags?',
      a: 'MOQs start at 500 units for digital web printing (ideal for short-run specialty roasters) and 5,000 units for rotogravure production.'
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
    headline: 'Bio-PE Roasted Nuts Quad Seal Bag: Nitrogen Barrier & Shelf Life Guide',
    description: 'Technical packaging guide on sugarcane Bio-PE quad seal bags with EVOH lipid barrier, nitrogen gas flush retention, and soft-touch matte printing for roasted nuts.',
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
      title="Bio-PE Roasted Nuts Quad Seal Bag | Sugarcane Recyclable"
      metaDescription="Custom Bio-PE quad seal bag for roasted nuts, almonds, and trail mix. EVOH nitrogen flush gas retention barrier, soft-touch matte finish, and 100% Recyclable #4 PE."
      keywords={keywords}
      heroTitle="Bio-PE Roasted Nuts Quad Seal Bag"
      heroSubtitle="Sugarcane Bio-PE Polyolefin × EVOH Lipid Oxygen Shield × Nitrogen Flush Ready × 4-Corner Rigid Box Geometry"
      heroBadge="🌱 100% Recyclable #4 PE | I'm Green™ Sugarcane"
      heroBgColor="#78350f"
    >
      <DualDomainSEOHead
        title="Bio-PE Roasted Nuts Quad Seal Bag | Sugarcane Recyclable"
        description="Sugarcane Bio-PE quad seal bag for almonds, macadamias, and trail mix. Features EVOH lipid barrier, nitrogen gas retention, soft-touch matte finish, and 355ml reference scale."
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
                "headline": "Roasted Nuts Quad Seal Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Roasted Nuts Quad Seal Packaging",
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
          <span className="font-semibold text-neutral-900">Bio-PE Roasted Nuts Quad Seal Bag</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-amber-950 to-amber-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Package className="w-96 h-96 text-amber-300" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-500/30 border border-amber-400/40 text-amber-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Gourmet Snack Brand Insight
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Eliminate Nut Fat Rancidity While Elevating Premium Shelf Presence
            </h2>
            <p className="text-amber-100 leading-relaxed">
              Roasting almonds and macadamias unleashes rich natural oils, but exposure to oxygen quickly turns those delicious fats rancid. Nothing damages a gourmet nut brand faster than a consumer opening a bag to taste stale, bitter nuts.
            </p>
            <p className="text-amber-200/90 text-sm leading-relaxed">
              Our <strong>Bio-PE Roasted Nuts Quad Seal Bag</strong> delivers total protection. Built with plant-based sugarcane PE and an EVOH gas barrier, it retains nitrogen flush purity and prevents grease bleed while standing tall on retail displays.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Roasted Nuts Quad Seal.
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
              Inspect & Customize Roasted Nuts Quad Seal Packaging in Interactive 3D
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
        <section className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-700 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-amber-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-amber-900 leading-relaxed">
                A <strong>Bio-PE Roasted Nuts Quad Seal Bag</strong> is a plant-based 4-corner sealed flexible package made from sugarcane polyethylene (I&apos;m Green™ certified). Engineered with EVOH lipid barrier layer (&lt;0.5 cc/m²/24hr OTR) and nitrogen gas flush retention, it holds 250g–1kg of roasted nuts and trail mix while remaining 100% recyclable in #4 PE film streams.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-amber-500 transition-colors">
            <div className="text-amber-700 font-bold text-xl">🥜 Lipid Rancidity Barrier</div>
            <p className="text-xs text-neutral-600">EVOH barrier core stops oil oxidation and holds nitrogen flush gas for 18+ month shelf freshness.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-amber-500 transition-colors">
            <div className="text-amber-700 font-bold text-xl">🌱 Sugarcane Bio-PE Resin</div>
            <p className="text-xs text-neutral-600">Carbon-negative polyolefin film replaces petroleum plastic without sacrificing seal strength.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-amber-500 transition-colors">
            <div className="text-amber-700 font-bold text-xl">📦 4-Corner Rigid Structure</div>
            <p className="text-xs text-neutral-600">Quad corner seals create a stable box-like silhouette that stands 100% straight on retail shelves.</p>
          </div>
        </section>

        {/* Hero & Detail Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Visual Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed Bio-PE 500g Quad Seal Nut Bag</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring a velvety Soft-Touch Matte Varnish, reinforced side gusset corner seals, nitrogen flush seal tight parameters, and optional reclosable pocket zipper.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 4.9&quot; x 9.8&quot; + 3.1&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">125mm x 250mm + 80mm</span>
              <span className="px-3 py-1 bg-amber-50 border border-amber-200 text-xs text-amber-800 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="Bio-PE Roasted Nuts Quad Seal Bag next to whole roasted almonds"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Roasted Nut Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">Addressing rancidity, grease staining, and nitrogen gas retention</p>
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
            &quot;For a Australian macadamia roaster shipping nitrogen-flushed 500g quad seal bags across tropical export routes, we observed pouch swelling during air transit. Standard seal jaws created micro-voids at the 4-corner intersection. We designed a dual-stage heat seal jaw with chamfered corner reliefs, eliminating pinholes and holding internal N₂ concentration at 99.1% over a 12-month transport simulation.&quot;
          </blockquote>
          <div className="text-xs text-amber-800 dark:text-amber-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Bio-PE Nut Quad Seal Specification Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">250g (8.8 oz) Standard</th>
                  <th className="p-4">500g (17.6 oz) Value</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">4.3&quot; x 7.8&quot; + 2.8&quot; (110mm x 200mm + 70mm)</td>
                  <td className="p-4 font-mono">4.9&quot; x 9.8&quot; + 3.1&quot; (125mm x 250mm + 80mm)</td>
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
                  <td className="p-4 font-bold text-neutral-900">Gas Flushing Compatibility</td>
                  <td className="p-4">100% N₂ Gas Flush Compatible</td>
                  <td className="p-4">100% N₂ Gas Flush Compatible</td>
                  <td className="p-4">N/A</td>
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
            <Link to="/store" className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Bio-PE Nut Quad Seal Bag" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">500g Bio-PE Nut Quad Seal Bag</h4>
                <p className="text-xs text-neutral-500">Sugarcane Bio-PE pouch with EVOH lipid barrier & N₂ flush support.</p>
                <Link to="/store/product/bio-pe-nut-quad-seal-bag" className="inline-block mt-2 text-xs font-bold text-amber-700 hover:text-amber-800">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Bio-PE Stand Up Nut Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Bio-PE Stand-Up Nut Doypack</h4>
                <p className="text-xs text-neutral-500">Plant-based Doypack with tear notch and press zipper for dried fruit & nuts.</p>
                <Link to="/store/product/bio-pe-nut-doypack" className="inline-block mt-2 text-xs font-bold text-amber-700 hover:text-amber-800">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Compostable Kraft Nut Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Home Compostable Kraft Nut Bag</h4>
                <p className="text-xs text-neutral-500">Certified home-compostable Kraft paper pouch with NatureFlex lining.</p>
                <Link to="/store/product/compostable-kraft-nut-bag" className="inline-block mt-2 text-xs font-bold text-amber-700 hover:text-amber-800">
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
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Specialist in polyolefin lipid barrier optimization, nitrogen gas flush retention, and sustainable snack food packaging scale-up.
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
        <section className="bg-gradient-to-r from-amber-950 via-neutral-900 to-amber-900 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-amber-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-mono rounded-full border border-amber-500/30">
              Upgrade Your Nut Packaging
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Custom Printed Bio-PE Nut Bag Samples
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test nitrogen flush gas retention, soft-touch matte finish, and oil barrier performance on your own filling lines.
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
              href="mailto:support@achievepack.com?subject=Bio-PE%20Nut%20Bag%20Sample%20Request"
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
              <h3 itemProp="name">What is a Bio-PE Roasted Nuts Quad Seal Bag?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A Bio-PE Roasted Nuts Quad Seal Bag is a plant-based 4-corner sealed flexible container produced from sugarcane-derived polyethylene film and an EVOH lipid oxygen barrier (&lt;0.5 cc/m²/24hr OTR). Designed for almonds, macadamias, and trail mixes, it supports nitrogen flushing and is 100% recyclable in #4 PE streams.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default BioPERoastedNutsQuadSealPage
