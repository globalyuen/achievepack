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
  Award, Shield, AlertTriangle, Leaf, RefreshCw, Sparkles, Package, Layers
} from 'lucide-react'

const p = 'seoPages.pages.pcrRecycledDriedMushroomFlatBottom'

const PCRRecycledDriedMushroomFlatBottomPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'pcr recycled dried mushroom flat bottom pouch',
    'post consumer recycled mushroom packaging',
    'moisture proof dried shiitake pouch',
    'grs certified pcr functional mushroom bag',
    'evoh barrier dried mushroom flat bottom box pouch',
    'sustainable lion mane powder pouch manufacturer',
    'recyclable mushroom packaging box pouch',
    '100% pe recyclable dried fungus pouch'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Moisture Permeation Causing Dried Mushroom Re-Hydration & Mold Spoilage',
      solution: 'Dehydrated gourmet and medicinal mushrooms (Shiitake, Reishi, Lion\'s Mane) quickly absorb ambient humidity if packaged in low-grade plastic bags. When internal moisture exceeds 12%, fungal spores reactivate and mold forms within weeks. We integrate a continuous EVOH moisture barrier layer (WVTR <0.3 g/m²/24hr), locking out water vapor and keeping mushrooms crisp and potent for 24 months.',
      icon: <Package className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Sharp Mushroom Cap Stems Puncturing Thin Film Bags in Transit',
      solution: 'Dehydrated whole mushroom caps and woody Reishi slices have sharp, rigid stems that easily pierce thin 3-mil film pouches under shipping vibration. Our 5-panel box pouch is built with a heavy-gauge 5.5-mil co-extruded PCR PE matrix that absorbs point-puncture stress without tearing.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Pouch Tppling & Poor Shelf Visibility for Premium Botanical Brands',
      solution: 'Standard pillow bags collapse and lay flat on retail displays, hiding brand logos and product specifications from shoppers. Our 5-panel Flat Bottom Box design features a rigid rectangular base and 4 reinforced corner seals, ensuring the pouch stands 100% upright with 5 prime billboard panels for artwork.',
      icon: <Layers className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Fine Mushroom Powder Clogging Press Zipper Seals',
      solution: 'Functional mushroom powders (Chaga, Cordyceps, Turkey Tail) deposit fine dust into standard press-to-close zippers, causing air leaks after first opening. We incorporate an internal Recessed Pocket Tear Zipper positioned below the top heat-seal, allowing easy scoop access without powder contamination.',
      icon: <Shield className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Unverified Eco Claims & Retailer Recycled Plastic Compliance Audits',
      solution: 'With strict EU EPR regulations and retail sustainability mandates, uncertified recycled claims risk legal fines and product delisting. Every order includes GRS 4.0 Chain of Custody certification, ISO 14021 recycled content verification, and FDA food-contact compliance documentation.',
      icon: <RefreshCw className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What percentage of PCR resin is used in these flat bottom mushroom pouches?'),
      a: t(`${p}.faq.a1`, 'Our flat bottom pouches contain 30% to 50% GRS 4.0 certified Post-Consumer Recycled (PCR) polyethylene resin blended into the middle core layer, preserving virgin-grade food contact safety and optical print quality.')
    },
    {
      q: t(`${p}.faq.q2`, 'Why is EVOH essential for dried mushroom packaging?'),
      a: t(`${p}.faq.a2`, 'Dried mushrooms are extremely hygroscopic and sensitive to oxygen oxidation, which destroys active beta-glucans and delicate umami flavor compounds. EVOH provides an ultra-low oxygen transmission rate (<0.5 cc/m²/24hr) and water vapor barrier (<0.3 g/m²/24hr), far outperforming standard PE films.')
    },
    {
      q: t(`${p}.faq.q3`, 'What sizes are standard for dried whole mushrooms and mushroom powders?'),
      a: t(`${p}.faq.a3`, 'Popular sizes include 4 oz / 113g Extract Powder (4.3" x 6.7" + 2.8" / 110mm x 170mm + 70mm), 8 oz / 227g Whole Dried Mushroom (5.3" x 8.7" + 3.1" / 135mm x 220mm + 80mm), and 16 oz / 454g Bulk Culinary Pack (6.3" x 10.6" + 3.5" / 160mm x 270mm + 90mm).')
    },
    {
      q: t(`${p}.faq.q4`, 'Is this PCR pouch 100% recyclable in standard recycling streams?'),
      a: t(`${p}.faq.a4`, 'Yes. Because the pouch is built as an All-PE mono-material structure (&gt;95% PE by mass), it recycles seamlessly in #4 PE store drop-off and curbside polyolefin streams without chemical separation.')
    },
    {
      q: t(`${p}.faq.q5`, 'What surface finishes best showcase organic mushroom products?'),
      a: t(`${p}.faq.a5`, 'We recommend a Tactile Kraft Paper Texture or Matte Varnish with Spot UV accents. This highlights organic botanical craftsmanship while providing scratch resistance during retail shelf handling.')
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
    headline: 'PCR Recycled Dried Mushroom Flat Bottom Box Pouch: Technical Guide',
    description: 'Detailed packaging engineering breakdown of 30%-50% PCR recycled flat bottom pouches for dried mushrooms and functional fungi powders with EVOH moisture barrier and pocket zipper.',
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
      title="PCR Recycled Dried Mushroom Flat Bottom Pouch | Achieve Pack"
      metaDescription="Custom 30%-50% PCR recycled flat bottom box pouch for dried mushrooms & medicinal fungi. Ultra-low WVTR EVOH moisture barrier, GRS certified, 100% #4 PE recyclable."
      keywords={keywords}
      heroTitle="PCR Recycled Dried Mushroom Flat Bottom Pouch"
      heroSubtitle="30%-50% GRS Certified PCR Resin × 5-Panel Box Stability × EVOH Moisture Barrier × Pocket Zipper"
      heroBadge="♻️ GRS 4.0 Certified | 30%-50% PCR Content"
      heroBgColor="#271c19"
    >
      <DualDomainSEOHead
        title="PCR Recycled Plastic Flat Bottom Dried Mushroom Pouch (EVOH Moisture Shield)"
        description="GRS 4.0 certified PCR recycled flat bottom pouch for gourmet dried mushrooms & functional fungi. Features EVOH moisture barrier WVTR <0.3g, pocket zipper, and 355ml reference scale."
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
                "headline": "Dried Mushroom Flat Bottom Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Dried Mushroom Flat Bottom Packaging",
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
          <span className="font-semibold text-neutral-900">PCR Recycled Dried Mushroom Flat Bottom Pouch</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-amber-950 to-stone-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Package className="w-96 h-96 text-amber-400" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-500/30 border border-amber-400/40 text-amber-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Functional Mushroom & Gourmet Food Breakthrough
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Protect Dried Fungi Potency Without Sacrificing Eco-Packaging Integrity
            </h2>
            <p className="text-amber-100 leading-relaxed">
              Sourcing wild-harvested Shiitake, Reishi, and Lion&apos;s Mane mushrooms requires strict quality control. Yet packaging them in standard plastic bags often results in moisture re-hydration, lost aromatic depth, and sharp mushroom stems puncturing pouches during shipment.
            </p>
            <p className="text-amber-200/90 text-sm leading-relaxed">
              Our <strong>PCR Recycled Flat Bottom Mushroom Pouch</strong> solves both moisture protection and retail shelf presentation. Constructed with up to 50% GRS-certified post-consumer recycled plastic and a high-barrier EVOH core, it stands 100% upright like a rigid box while preserving crisp mushroom texture for 24 months.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Dried Mushroom Flat Bottom.
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
              Inspect & Customize Dried Mushroom Flat Bottom Packaging in Interactive 3D
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
                A <strong>PCR Recycled Dried Mushroom Flat Bottom Pouch</strong> is a 5-panel box-style flexible container made with 30% to 50% GRS 4.0 certified Post-Consumer Recycled (PCR) resin. Featuring a high-barrier EVOH moisture shield (&lt;0.3 g/m²/24hr WVTR) and top pocket zipper, it holds 8 oz (227g) of dried mushrooms or powder, prevents stem punctures and re-hydration mold, and recycles under #4 PE code.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-amber-600 transition-colors">
            <div className="text-amber-700 font-bold text-xl">♻️ 30%-50% GRS PCR Resin</div>
            <p className="text-xs text-neutral-600">Super-cleaned post-consumer recycled plastic with full GRS 4.0 chain-of-custody audit certification.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-amber-600 transition-colors">
            <div className="text-amber-700 font-bold text-xl">🛡️ EVOH Moisture Shield</div>
            <p className="text-xs text-neutral-600">Ultra-low WVTR &lt;0.3g keeps dehydrated mushrooms bone-dry and prevents mold spore reactivation.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-amber-600 transition-colors">
            <div className="text-amber-700 font-bold text-xl">📦 5-Panel Box Structure</div>
            <p className="text-xs text-neutral-600">Flat bottom base ensures 100% upright retail shelf stability with 355ml can reference scale match.</p>
          </div>
        </section>

        {/* Hero & Detail Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Visual Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed 8 oz PCR Recycled Dried Mushroom Box Pouch</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring a tactile <strong>Matte Varnish Outer Surface</strong>, top pocket tear zipper, and 5-panel box construction. Designed specifically for gourmet dried mushrooms, mushroom teas, and functional adaptogen powders.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 5.3&quot; x 8.7&quot; + 3.1&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">135mm x 220mm + 80mm</span>
              <span className="px-3 py-1 bg-amber-50 border border-amber-200 text-xs text-amber-800 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="PCR Recycled Dried Mushroom Flat Bottom Box Pouch"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Dried Mushroom Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">How our PCR material science resolves botanical product storage challenges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4 border border-neutral-800 flex flex-col justify-between hover:border-amber-600 transition-colors">
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
        <section className="bg-amber-950/40 border-2 border-amber-500/40 rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500 text-neutral-950 rounded-xl font-bold text-xs uppercase tracking-wider">
              🔬 Engineer&apos;s Log
            </div>
            <h3 className="text-xl font-bold text-amber-200">
              From Ryan Wong&apos;s Packaging Engineering Notebook
            </h3>
          </div>
          <blockquote className="text-sm text-amber-100/90 italic leading-relaxed pl-4 border-l-4 border-amber-500">
            &quot;During high-humidity transit testing (38°C / 90% RH) for an organic Shiitake grower in Washington, standard 3-mil PE bags allowed moisture uptake, causing dried caps to soften and lose crispness within 30 days. We engineered a 5.5-mil 40% GRS PCR film with a co-extruded 12-micron EVOH core. Internal moisture content remained steady under 8% over 18 months, maintaining 100% crisp cap integrity.&quot;
          </blockquote>
          <div className="text-xs text-amber-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">PCR Dried Mushroom Pouch Technical Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">8 oz (227g) Whole Mushroom Box Pouch</th>
                  <th className="p-4">16 oz (454g) Bulk Culinary Pack</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">5.3&quot; x 8.7&quot; + 3.1&quot; (135mm x 220mm + 80mm)</td>
                  <td className="p-4 font-mono">6.3&quot; x 10.6&quot; + 3.5&quot; (160mm x 270mm + 90mm)</td>
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
                  <td className="p-4">6.0 mil (150 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Moisture Barrier (WVTR)</td>
                  <td className="p-4">&lt;0.3 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">&lt;0.3 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">0.0 g/m²/24hr</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Closure System</td>
                  <td className="p-4">Pocket Tear Zipper (Dust Proof)</td>
                  <td className="p-4">Pocket Tear Zipper (Dust Proof)</td>
                  <td className="p-4">Pull-Tab Top</td>
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
            <h3 className="text-xl font-bold text-neutral-900">Related Mushroom & Superfood Packaging</h3>
            <Link to="/store" className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="8 oz PCR Mushroom Box Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">8 oz PCR Dried Mushroom Box Pouch</h4>
                <p className="text-xs text-neutral-500">50% PCR PE flat bottom pouch with EVOH moisture shield & pocket zipper.</p>
                <Link to="/store/product/pcr-dried-mushroom-pouch" className="inline-block mt-2 text-xs font-bold text-amber-700 hover:text-amber-800">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Mushroom Powder Sachet" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Functional Mushroom Powder Sachet</h4>
                <p className="text-xs text-neutral-500">Anti-static Bio-PE 3-side seal sachet for Lion&apos;s Mane & Cordyceps powders.</p>
                <Link to="/store/product/mushroom-powder-sachet" className="inline-block mt-2 text-xs font-bold text-amber-700 hover:text-amber-800">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Compostable Mushroom Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Kraft Home Compostable Mushroom Bag</h4>
                <p className="text-xs text-neutral-500">Certified TUV OK Compost Home kraft paper pouch with high barrier PLA inner coating.</p>
                <Link to="/store/product/compostable-kraft-mushroom-pouch" className="inline-block mt-2 text-xs font-bold text-amber-700 hover:text-amber-800">
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
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Specialist in post-consumer recycled plastic extrusion, high-barrier EVOH moisture protection, and box-pouch structural engineering for botanical and superfood brands.
            </p>
            <div className="pt-2">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Engineering Consultation with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-amber-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-mono rounded-full border border-amber-500/30">
              Ready to Upgrade Your Mushroom Packaging?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Custom Printed PCR Dried Mushroom Sample Pouches Shipped Worldwide
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test moisture barrier strength, stem puncture resistance, and GRS-certified PCR print finish on your own packing line before placing a production order.
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
              href="mailto:support@achievepack.com?subject=PCR%20Mushroom%20Pouch%20Sample%20Request"
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
              <h3 itemProp="name">What is a PCR Recycled Dried Mushroom Flat Bottom Pouch?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A PCR Recycled Dried Mushroom Flat Bottom Pouch is a 5-panel box-style flexible container manufactured with 30% to 50% GRS 4.0 certified Post-Consumer Recycled (PCR) polyethylene. Engineered with a high-barrier EVOH moisture shield (&lt;0.3 g/m²/24hr WVTR), it protects gourmet Shiitake and functional mushroom powders from re-hydration mold while standing 100% upright on retail shelves.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default PCRRecycledDriedMushroomFlatBottomPage
