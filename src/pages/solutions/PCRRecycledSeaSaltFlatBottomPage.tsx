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
  Award, Shield, AlertTriangle, Droplets, RefreshCw, Sparkles, Package, Layers
} from 'lucide-react'

const p = 'seoPages.pages.pcrRecycledSeaSaltFlatBottom'

const PCRRecycledSeaSaltFlatBottomPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'pcr recycled sea salt flat bottom pouch',
    'post consumer recycled gourmet salt packaging',
    'moisture proof sea salt box pouch',
    'grs certified pcr salt bag',
    'corrosion resistant sea salt pouch manufacturer',
    'anti caking sea salt flat bottom bag',
    'sustainable gourmet salt packaging',
    '100% pe recyclable sea salt pouch'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Salt Crystal Moisture Caking & Hardening on Kitchen Shelves',
      solution: 'Gourmet flaky sea salt and Himalayan pink salt crystals rapidly absorb ambient humidity (>70% RH), turning loose salt flakes into rock-hard solid blocks that shoppers cannot pour. We co-extrude a continuous pinhole-free EVOH moisture barrier layer (WVTR <0.3 g/m²/24hr), keeping delicate salt flakes loose, crisp, and free-flowing for 24 months.',
      icon: <Droplets className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Salt Chloride Corrosion Degrading Metallic Film Layers',
      solution: 'High concentrations of sodium chloride (NaCl) chemically react with aluminum foil layers in standard multi-layer composite bags, causing foil oxidation, black specking, and layer delamination. We utilize a non-metallic All-Polyolefin PCR structure with a chemically inert PE inner sealant that is 100% immune to salt corrosion.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Narrow Pouch Openings Frustrating Chef Measuring Spoons',
      solution: 'Traditional narrow stand-up pouches make it difficult for home cooks and professional chefs to dip measuring spoons into salt bags without spilling crystals. Our 5-panel Flat Bottom Box Pouch features a wide-mouth top opening and stable rectangular base that stays wide open during cooking.',
      icon: <Package className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Heavy Salt Weight Causing Gusset Bursting in Shipping Cartons',
      solution: 'Heavy 16 oz to 32 oz sea salt pouches exert dense downward pressure during transit, splitting weak bottom gusset heat seals. Our 5-panel box pouch is built with 4-corner quad seal reinforcement and 5.5-mil heavy-gauge PCR PE film, increasing drop-burst resistance by 40%.',
      icon: <Layers className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Retail Audit Penalties for Uncertified Recycled Content',
      solution: 'Specialty food retailers demand verifiable sustainability claims. All Achieve Pack PCR salt pouches carry official GRS 4.0 Chain of Custody certification, ISO 14021 recycled content verification, and US FDA food-contact compliance documentation.',
      icon: <RefreshCw className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What percentage of PCR plastic is incorporated into these sea salt pouches?'),
      a: t(`${p}.faq.a1`, 'Our flat bottom sea salt pouches contain 30% to 50% GRS 4.0 certified Post-Consumer Recycled (PCR) polyethylene resin blended into the middle film core layer, preserving 100% virgin-grade food contact purity.')
    },
    {
      q: t(`${p}.faq.q2`, 'Why is non-metallic PCR PE better than aluminum foil bags for packing sea salt?'),
      a: t(`${p}.faq.a2`, 'Aluminum foil oxidizes and corrodes when exposed to salt moisture, causing black pinholes and chemical layer separation. Our All-PE mono-material structure with EVOH barrier provides identical moisture protection without any risk of metal corrosion, while being 100% recyclable under #4 PE code.')
    },
    {
      q: t(`${p}.faq.q3`, 'What sizes are standard for gourmet sea salt and flake salt packaging?'),
      a: t(`${p}.faq.a3`, 'Standard capacity sizes include 8 oz / 227g Specialty Flake Salt (4.3" x 7.1" + 2.8" / 110mm x 180mm + 70mm), 16 oz / 454g Standard Sea Salt (5.1" x 8.3" + 3.1" / 130mm x 210mm + 80mm), and 32 oz / 907g Chef Size (6.3" x 10.2" + 3.5" / 160mm x 260mm + 90mm).')
    },
    {
      q: t(`${p}.faq.q4`, 'Is this flat bottom pouch recyclable in standard municipal streams?'),
      a: t(`${p}.faq.a4`, 'Yes. The entire pouch body, bottom gusset, and press-to-close zipper consist of matching polyolefin PE resin (&gt;95% PE mass), allowing full recycling in #4 PE store drop-off and curbside polyolefin collection streams.')
    },
    {
      q: t(`${p}.faq.q5`, 'What surface finishes highlight premium gourmet sea salt products?'),
      a: t(`${p}.faq.a5`, 'We recommend a Soft-Touch Velvet Matte finish with selective Gloss Spot UV accents over salt crystal imagery. This creates a tactile, ultra-premium presentation on gourmet grocery shelves.')
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
    headline: 'PCR Recycled Sea Salt Flat Bottom Box Pouch: Technical Guide',
    description: 'Engineering overview of 30%-50% PCR recycled flat bottom box pouches for gourmet sea salt and mineral flakes with corrosion-proof EVOH moisture shield and wide spoon opening.',
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
      title="PCR Recycled Sea Salt Flat Bottom Pouch | Achieve Pack"
      metaDescription="Custom 30%-50% PCR recycled flat bottom pouch for gourmet sea salt & flake salt. Salt corrosion proof, EVOH moisture shield WVTR <0.3g, wide spoon mouth, 100% #4 PE recyclable."
      keywords={keywords}
      heroTitle="PCR Recycled Sea Salt Flat Bottom Pouch"
      heroSubtitle="30%-50% GRS Certified PCR Resin × Salt Corrosion Proof × EVOH Moisture Shield × Wide Spoon Mouth"
      heroBadge="♻️ GRS 4.0 Certified | 30%-50% PCR Content"
      heroBgColor="#0f172a"
    >
      <DualDomainSEOHead
        title="PCR Recycled Plastic Flat Bottom Sea Salt Pouch (Corrosion & Moisture Shield)"
        description="GRS 4.0 certified PCR recycled flat bottom box pouch for gourmet sea salt & flake salt. Salt corrosion-proof PE liner, EVOH moisture shield, wide mouth, and 355ml reference scale."
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
                "headline": "Sea Salt Flat Bottom Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Sea Salt Flat Bottom Packaging",
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
          <span className="font-semibold text-neutral-900">PCR Recycled Sea Salt Flat Bottom Pouch</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Droplets className="w-96 h-96 text-sky-400" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-sky-500/30 border border-sky-400/40 text-sky-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Gourmet Salt & Specialty Food Innovation
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Deliver Pristine Flake Salt Crispness Without Foil Corrosion or Salt Caking
            </h2>
            <p className="text-slate-100 leading-relaxed">
              Harvesting Maldon-style flake sea salt or Himalayan pink crystals is an artisanal craft. Yet packaging sea salt in standard aluminum foil bags often leads to salt chloride corrosion, black spot degradation, and hardened salt blocks on kitchen counters.
            </p>
            <p className="text-slate-200/90 text-sm leading-relaxed">
              Our <strong>PCR Recycled Sea Salt Flat Bottom Pouch</strong> combines up to 50% GRS-certified post-consumer recycled plastic with a salt-corrosion proof EVOH moisture shield. Featuring a wide-mouth box opening for chef measuring spoons, it keeps sea salt crystals loose and crisp while cutting virgin plastic consumption by 50%.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Sea Salt Flat Bottom.
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
              Inspect & Customize Sea Salt Flat Bottom Packaging in Interactive 3D
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
        <section className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-slate-700 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-slate-900 leading-relaxed">
                A <strong>PCR Recycled Sea Salt Flat Bottom Pouch</strong> is a 5-panel box-style flexible container made with 30% to 50% GRS 4.0 certified Post-Consumer Recycled (PCR) polyethylene. Engineered with a salt-corrosion proof PE liner and pinhole-free EVOH moisture barrier (&lt;0.3 g/m²/24hr WVTR), it holds 16 oz (454g) of gourmet sea salt or flake salt without caking or foil oxidation, fully recycling under #4 PE code.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-slate-500 transition-colors">
            <div className="text-slate-700 font-bold text-xl">♻️ 30%-50% GRS PCR Resin</div>
            <p className="text-xs text-neutral-600">Super-cleaned post-consumer recycled plastic with full GRS 4.0 chain-of-custody audit certification.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-slate-500 transition-colors">
            <div className="text-slate-700 font-bold text-xl">🛡️ Salt Corrosion Proof</div>
            <p className="text-xs text-neutral-600">100% non-metallic polyolefin inner liner immune to sodium chloride chemical oxidation and foil blackening.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-slate-500 transition-colors">
            <div className="text-slate-700 font-bold text-xl">📦 Wide Spoon Box Opening</div>
            <p className="text-xs text-neutral-600">5-panel box shape stays wide open for measuring spoons while standing 100% upright on retail displays.</p>
          </div>
        </section>

        {/* Hero & Detail Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Visual Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed 16 oz PCR Recycled Sea Salt Box Pouch</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring a tactile <strong>Soft-Touch Velvet Finish</strong>, wide pocket tear zipper, and 5-panel box construction. Designed specifically for gourmet sea salt, flaky finishing salt, smoked salt, and Himalayan mineral salts.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 5.1&quot; x 8.3&quot; + 3.1&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">130mm x 210mm + 80mm</span>
              <span className="px-3 py-1 bg-slate-100 border border-slate-200 text-xs text-slate-800 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="PCR Recycled Plastic Sea Salt Flat Bottom Box Pouch"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Sea Salt Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">How our PCR polyolefin engineering solves gourmet salt storage challenges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4 border border-neutral-800 flex flex-col justify-between hover:border-slate-500 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-slate-300 font-mono">{item.num}</span>
                    <div className="p-2 bg-slate-800 text-slate-300 rounded-xl border border-slate-700">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-neutral-100 leading-snug">{item.problem}</h3>
                </div>
                <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700/60 mt-4 space-y-1">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Engineering Solution:
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* From Ryan Wong's Engineering Notebook */}
        <section className="bg-slate-950 text-white border-2 border-slate-700 rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider">
              🔬 Engineer&apos;s Log
            </div>
            <h3 className="text-xl font-bold text-slate-200">
              From Ryan Wong&apos;s Packaging Engineering Notebook
            </h3>
          </div>
          <blockquote className="text-sm text-slate-200 italic leading-relaxed pl-4 border-l-4 border-slate-500">
            &quot;When evaluating aluminum foil laminates for a French Maldon-style sea salt brand, salt chloride ions reacted with moisture to cause foil oxidation pinholes after 60 days of storage. We switched to an All-PE 40% GRS PCR film with a co-extruded pinhole-free EVOH core. The non-metallic structure eliminated corrosion entirely, keeping salt flakes loose and moisture-free over 24 months.&quot;
          </blockquote>
          <div className="text-xs text-slate-400 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">PCR Sea Salt Pouch Technical Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">16 oz (454g) Gourmet Salt Box Pouch</th>
                  <th className="p-4">32 oz (907g) Chef Size</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">5.1&quot; x 8.3&quot; + 3.1&quot; (130mm x 210mm + 80mm)</td>
                  <td className="p-4 font-mono">6.3&quot; x 10.2&quot; + 3.5&quot; (160mm x 260mm + 90mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Profile</td>
                  <td className="p-4">30%-50% GRS PCR PE / EVOH / PE</td>
                  <td className="p-4">30%-50% GRS PCR PE / EVOH / PE</td>
                  <td className="p-4">Standard Aluminum Can</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Total Thickness</td>
                  <td className="p-4">5.5 mil (140 microns)</td>
                  <td className="p-4">6.5 mil (165 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Moisture Barrier (WVTR)</td>
                  <td className="p-4">&lt;0.3 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">&lt;0.3 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">0.0 g/m²/24hr</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Chemical Resistance</td>
                  <td className="p-4">100% Immune to NaCl Salt Corrosion</td>
                  <td className="p-4">100% Immune to NaCl Salt Corrosion</td>
                  <td className="p-4">Full Inert Chemical Resistance</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Certifications</td>
                  <td className="p-4">GRS 4.0, FDA 21 CFR Food Contact, ISO 14021</td>
                  <td className="p-4">GRS 4.0, FDA 21 CFR Food Contact, ISO 14021</td>
                  <td className="p-4">Infinite Metal Recycling</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Store Product Relations */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-neutral-900">Related Salt & Spice Packaging</h3>
            <Link to="/store" className="text-xs font-bold text-slate-700 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="16 oz PCR Sea Salt Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">16 oz PCR Sea Salt Box Pouch</h4>
                <p className="text-xs text-neutral-500">50% PCR PE flat bottom pouch with corrosion-proof EVOH moisture shield.</p>
                <Link to="/store/product/pcr-sea-salt-pouch" className="inline-block mt-2 text-xs font-bold text-slate-700 hover:text-slate-800">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Bio PE Spice Sachet" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Bio-PE Organic Spice Powder Sachet</h4>
                <p className="text-xs text-neutral-500">Anti-static sugarcane Bio-PE sachet for seasonings & ground spices.</p>
                <Link to="/store/product/bio-pe-spice-sachet" className="inline-block mt-2 text-xs font-bold text-slate-700 hover:text-slate-800">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Compostable Salt Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Kraft Home Compostable Salt Pouch</h4>
                <p className="text-xs text-neutral-500">Certified TUV OK Compost Home kraft paper pouch with high barrier PLA inner coating.</p>
                <Link to="/store/product/compostable-salt-pouch" className="inline-block mt-2 text-xs font-bold text-slate-700 hover:text-slate-800">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Frequently Asked Questions</span>
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
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-500 flex-shrink-0 bg-neutral-800 flex items-center justify-center text-slate-300 font-bold text-2xl">
            RW
          </div>
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <h4 className="text-lg font-bold text-white">Ryan Wong</h4>
              <span className="px-2 py-0.5 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700">
                14+ Yrs Packaging Engineering
              </span>
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700">
                GRS & FSC Certified Auditor
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Specialist in post-consumer recycled plastic extrusion, salt corrosion barrier chemistry, and 5-panel box pouch structural engineering.
            </p>
            <div className="pt-2">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Engineering Consultation with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-slate-950 via-neutral-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-slate-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded-full border border-slate-700">
              Ready to Upgrade Your Sea Salt Packaging?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Custom Printed PCR Sea Salt Sample Pouches Shipped Worldwide
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test salt corrosion resistance, EVOH moisture barrier strength, and GRS-certified PCR print finish on your own packing line before placing a production order.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={openCalendly}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold text-sm rounded-xl transition-colors shadow-lg shadow-slate-950/50"
            >
              Schedule Engineering Consultation
            </button>
            <a
              href="mailto:support@achievepack.com?subject=PCR%20Sea%20Salt%20Pouch%20Sample%20Request"
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
              <h3 itemProp="name">What is a PCR Recycled Sea Salt Flat Bottom Pouch?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A PCR Recycled Sea Salt Flat Bottom Pouch is a 5-panel box-style flexible container made with 30% to 50% GRS 4.0 certified Post-Consumer Recycled (PCR) polyethylene. Engineered with a salt corrosion-proof PE liner and pinhole-free EVOH moisture barrier (&lt;0.3 g/m²/24hr WVTR), it protects gourmet sea salt and flake salt from caking without metal foil oxidation, while recycling under #4 PE code.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default PCRRecycledSeaSaltFlatBottomPage
