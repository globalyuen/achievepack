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
  Award, Shield, AlertTriangle, Sparkles, Droplets, RefreshCw, Feather, Layers
} from 'lucide-react'

const p = 'seoPages.pages.bioPEBathSaltsStandUpPouch'

const BioPEBathSaltsStandUpPouchPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'bio pe bath salts stand up pouch',
    'plant based epsom salt packaging',
    'essential oil resistant bio-pe pouch',
    'recyclable bath soak doy pack',
    'sugarcane bio-pe cosmetic pouch',
    'moisture proof bath salt packaging',
    'sustainable bath salts pouch manufacturer',
    '100% pe recyclable bath soak bag'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Essential Oil Terpene Permeation Causing Swelling & Layer Delamination',
      solution: 'Aromatherapy bath salts containing lavender, eucalyptus, and citrus essential oils release aggressive volatile terpenes that dissolve standard film adhesives, causing pouches to swell, wrinkle, and delaminate within 30 days. We co-extrude a specialized Bio-PE terpene-barrier inner layer with solventless resin, maintaining structural integrity for 24+ months.',
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Epsom Salt Moisture Clumping & Hardening on Store Shelves',
      solution: 'Magnesium sulfate (Epsom salt) and dead sea salt crystals draw ambient moisture through porous plastic films, turning loose bath salts into rock-hard solid blocks. Our Bio-PE pouches incorporate an EVOH moisture barrier (WVTR <0.3 g/m²/24hr), keeping salt crystals loose, free-flowing, and instantly soluble.',
      icon: <Droplets className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Heavy Salt Crystal Punctures in Bath Tub Display Environments',
      solution: 'Coarse dead sea salt rocks with sharp crystalline edges easily puncture thin 3-mil stand-up pouches when dropped or handled on retail shelves. We engineer a 5.0-mil heavy-gauge Bio-PE matrix with enhanced puncture elongation, providing 2.5x the tear resistance of standard PET/PE bags.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Zipper Clogging From Fine Salt Dust & Wet Bathroom Fingers',
      solution: 'Consumers opening bath salt pouches in steamy bathrooms often struggle with fine salt grains clogging press-to-close zippers. Our pouches feature an extra-wide 10mm Heavy-Duty Double Track Zipper designed to seal cleanly even when exposed to moisture droplets and salt dust.',
      icon: <Shield className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Greenwashing Scrutiny & Retailer Cosmetic Compliance Audits',
      solution: 'Unverified eco claims in beauty and personal care face FTC enforcement and retailer bans. Every Achieve Pack Bio-PE pouch is backed by official Braskem I\'m Green™ sugarcane origin certificates, ASTM D6866 bio-content verification, and FDA 21 CFR 177.1520 cosmetic compliance documentation.',
      icon: <RefreshCw className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What makes sugarcane Bio-PE ideal for bath salt packaging?'),
      a: t(`${p}.faq.a1`, 'Bio-PE is produced from sugarcane ethanol, capturing 2.1kg of CO₂ per kg of resin during cultivation. It offers identical barrier protection, essential oil resistance, and heat-seal strength as fossil-derived PE while being 100% recyclable in existing #4 PE streams.')
    },
    {
      q: t(`${p}.faq.q2`, 'Can Bio-PE withstand concentrated essential oils like Eucalyptus and Peppermint?'),
      a: t(`${p}.faq.a2`, 'Yes. Our Bio-PE pouch film features a proprietary terpene-resistant inner sealant layer tested against high-concentration essential oil formulations (up to 5% essential oil load) without layer swelling, blistering, or delamination.')
    },
    {
      q: t(`${p}.faq.q3`, 'What sizes are recommended for bath salts and body soak pouches?'),
      a: t(`${p}.faq.a3`, 'Standard sizes include 8 oz / 227g (5.1" x 7.9" + 2.8" / 130mm x 200mm + 70mm), 16 oz / 454g (5.9" x 9.1" + 3.1" / 150mm x 230mm + 80mm), and 32 oz / 907g Bulk Bath Soak (7.1" x 11.0" + 3.5" / 180mm x 280mm + 90mm).')
    },
    {
      q: t(`${p}.faq.q4`, 'What surface finishes give bath salt packaging a luxury spa feel?'),
      a: t(`${p}.faq.a4`, 'We recommend our Soft-Touch Velvet Matte Varnish combined with selective Gloss Spot UV highlights. This creates an ultra-premium tactile feel that communicates luxury spa quality while resisting wet fingerprint smudges.')
    },
    {
      q: t(`${p}.faq.q5`, 'What is the MOQ for custom printed Bio-PE bath salt pouches?'),
      a: t(`${p}.faq.a5`, 'Small artisan brands can order custom digital printing starting at 100 pieces per SKU on Pouch Eco, while high-volume personal care brands benefit from bulk rotogravure pricing starting at 5,000 units on Achieve Pack.')
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
    headline: 'Bio-PE Sugarcane Bath Salts Stand-Up Pouch: Engineering Guide',
    description: 'Technical analysis of plant-based Bio-PE stand-up pouches for bath salts, Epsom soak, and essential oil aromatherapy products with essential oil barrier and 100% #4 PE recyclability.',
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
      title="Bio-PE Bath Salts Stand-Up Pouch | Achieve Pack"
      metaDescription="Plant-based Bio-PE stand-up pouch for bath salts & aromatherapy soaks. Essential oil resistant, moisture-proof EVOH barrier, 100% Recyclable #4 PE."
      keywords={keywords}
      heroTitle="Bio-PE Bath Salts Stand-Up Pouch"
      heroSubtitle="Plant-Based Sugarcane Bio-PE × Essential Oil Terpene Barrier × EVOH Moisture Core × 100% Recyclable"
      heroBadge="🌱 100% Recyclable #4 PE | I'm Green™ Certified"
      heroBgColor="#042f2e"
    >
      <DualDomainSEOHead
        title="Bio-PE Plant-Based Bath Salts Stand-Up Pouch (Aromatherapy Proof)"
        description="Sugarcane Bio-PE Doypack for bath salts and body soaks. Terpene oil resistant, moisture barrier WVTR <0.3g, soft-touch matte finish, and 355ml reference scale."
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
                "headline": "Bath Salts Stand Up Pouch Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Bath Salts Stand Up Pouch Packaging",
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
          <span className="font-semibold text-neutral-900">Bio-PE Bath Salts Stand-Up Pouch</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-teal-950 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Sparkles className="w-96 h-96 text-teal-400" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-teal-500/30 border border-teal-400/40 text-teal-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Personal Care & Bath Brand Innovation
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Deliver Luxury Spa Aesthetics Without Film Swelling or Salt Clumping
            </h2>
            <p className="text-teal-100 leading-relaxed">
              Formulating botanical bath soaks with organic lavender, peppermint, and eucalyptus essential oils creates a sublime customer experience — until aggressive oil terpenes permeate standard packaging, leaving wrinkled pouches and hardened salt blocks on store shelves.
            </p>
            <p className="text-teal-200/90 text-sm leading-relaxed">
              Our <strong>Bio-PE Bath Salts Stand-Up Pouch</strong> combines plant-based sugarcane polyethylene with a terpene-resistant EVOH shield. It keeps Epsom salt crystals loose and fragrant while displaying the 100% Recyclable #4 logo for eco-conscious spa consumers.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Bath Salts Stand Up Pouch.
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
              Inspect & Customize Bath Salts Stand Up Pouch Packaging in Interactive 3D
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
        <section className="bg-teal-50 border-2 border-teal-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-teal-600 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-teal-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-teal-900 leading-relaxed">
                A <strong>Bio-PE Bath Salts Stand-Up Pouch</strong> is a flexible Doypack made from sugarcane-derived polyethylene (I&apos;m Green™ certified). Engineered with an essential oil terpene barrier and EVOH moisture shield (&lt;0.3 g/m²/24hr WVTR), it holds 16 oz (454g) of aromatherapy bath salts, prevents salt clumping and film delamination, and fully recycles in standard #4 PE store drop-off streams.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-teal-500 transition-colors">
            <div className="text-teal-600 font-bold text-xl">🌱 Sugarcane Bio-PE</div>
            <p className="text-xs text-neutral-600">Produced from renewable sugarcane ethanol. Captures 2.1kg of CO₂ per kg resin produced.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-teal-500 transition-colors">
            <div className="text-teal-600 font-bold text-xl">🌿 Terpene Oil Barrier</div>
            <p className="text-xs text-neutral-600">Prevents essential oil permeation, layer blistering, and scent loss over 24 months.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-teal-500 transition-colors">
            <div className="text-teal-600 font-bold text-xl">✨ Soft-Touch Spa Varnish</div>
            <p className="text-xs text-neutral-600">Ultra-premium tactile velvet matte finish that resists wet bathroom finger smudges.</p>
          </div>
        </section>

        {/* Hero & Detail Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Visual Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed 16 oz Bio-PE Bath Salts Doypack</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring a tactile <strong>Soft-Touch Velvet Finish</strong>, 10mm heavy-duty double track zipper, and high-strength bottom K-seal. Designed for premium bath salt blends, body scrubs, and mineral spa crystals.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 5.9&quot; x 9.1&quot; + 3.1&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">150mm x 230mm + 80mm</span>
              <span className="px-3 py-1 bg-teal-50 border border-teal-200 text-xs text-teal-800 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="Bio-PE Sugarcane Bath Salts Stand-Up Pouch"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Bath Salt Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">How our Bio-PE material science solves personal care packaging issues</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4 border border-neutral-800 flex flex-col justify-between hover:border-teal-500 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-teal-400 font-mono">{item.num}</span>
                    <div className="p-2 bg-teal-950 text-teal-400 rounded-xl border border-teal-800/50">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-neutral-100 leading-snug">{item.problem}</h3>
                </div>
                <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700/60 mt-4 space-y-1">
                  <div className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Engineering Solution:
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* From Ryan Wong's Engineering Notebook */}
        <section className="bg-teal-950/40 border-2 border-teal-500/40 rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-500 text-neutral-950 rounded-xl font-bold text-xs uppercase tracking-wider">
              🔬 Engineer&apos;s Log
            </div>
            <h3 className="text-xl font-bold text-teal-200">
              From Ryan Wong&apos;s Packaging Engineering Notebook
            </h3>
          </div>
          <blockquote className="text-sm text-teal-100/90 italic leading-relaxed pl-4 border-l-4 border-teal-500">
            &quot;When testing eucalyptus bath soak formulations containing 3.5% essential oil concentrations, standard PET/PE laminations showed severe delamination along the side seal after 21 days at 38°C. We formulated a 5-layer co-extruded Bio-PE structure with an inner ionomer tie-layer and EVOH core. The updated film endured 120 days of accelerated aging with zero delamination, zero scent bleed, and a moisture barrier rating under 0.28 g/m²/24hr.&quot;
          </blockquote>
          <div className="text-xs text-teal-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Bio-PE Bath Salts Technical Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">16 oz (454g) Standard Soak</th>
                  <th className="p-4">32 oz (907g) Spa Bulk Size</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">5.9&quot; x 9.1&quot; + 3.1&quot; (150mm x 230mm + 80mm)</td>
                  <td className="p-4 font-mono">7.1&quot; x 11.0&quot; + 3.5&quot; (180mm x 280mm + 90mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Profile</td>
                  <td className="p-4">Braskem I&apos;m Green™ Bio-PE / EVOH / Bio-PE</td>
                  <td className="p-4">Braskem I&apos;m Green™ Bio-PE / EVOH / Bio-PE</td>
                  <td className="p-4">Standard Aluminum Can</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Total Thickness</td>
                  <td className="p-4">5.0 mil (125 microns)</td>
                  <td className="p-4">5.8 mil (145 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Moisture Barrier (WVTR)</td>
                  <td className="p-4">&lt;0.3 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">&lt;0.3 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">0.0 g/m²/24hr</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Essential Oil Resistance</td>
                  <td className="p-4">Tested Up to 5% Terpene Concentration</td>
                  <td className="p-4">Tested Up to 5% Terpene Concentration</td>
                  <td className="p-4">Full Inert Chemical Resistance</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Certifications</td>
                  <td className="p-4">Braskem I&apos;m Green™, ASTM D6866, FDA 21 CFR</td>
                  <td className="p-4">Braskem I&apos;m Green™, ASTM D6866, FDA 21 CFR</td>
                  <td className="p-4">Infinite Metal Recycling</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Store Product Relations */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-neutral-900">Related Spa & Personal Care Products</h3>
            <Link to="/store" className="text-xs font-bold text-teal-600 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="16 oz Bio-PE Bath Salts Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">16 oz Bio-PE Bath Salts Stand-Up Pouch</h4>
                <p className="text-xs text-neutral-500">Plant-based sugarcane pouch with essential oil barrier and soft-touch finish.</p>
                <Link to="/store/product/bio-pe-bath-salts-pouch" className="inline-block mt-2 text-xs font-bold text-teal-600 hover:text-teal-700">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Body Scrub Stand Up Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Bio-PE Coffee Body Scrub Doypack</h4>
                <p className="text-xs text-neutral-500">Oil-proof plant-based stand-up bag with heavy-duty zipper for body scrubs.</p>
                <Link to="/store/product/bio-pe-body-scrub-pouch" className="inline-block mt-2 text-xs font-bold text-teal-600 hover:text-teal-700">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Compostable Bath Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Kraft Home Compostable Bath Soak Bag</h4>
                <p className="text-xs text-neutral-500">Certified TUV OK Compost Home paper pouch with PLA moisture barrier.</p>
                <Link to="/store/product/compostable-bath-soak-pouch" className="inline-block mt-2 text-xs font-bold text-teal-600 hover:text-teal-700">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Frequently Asked Questions</span>
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
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-teal-500 flex-shrink-0 bg-neutral-800 flex items-center justify-center text-teal-400 font-bold text-2xl">
            RW
          </div>
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <h4 className="text-lg font-bold text-white">Ryan Wong</h4>
              <span className="px-2 py-0.5 bg-teal-500/20 text-teal-400 text-xs rounded border border-teal-500/40">
                14+ Yrs Packaging Engineering
              </span>
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700">
                GRS & FSC Certified Auditor
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Specialist in sugarcane Bio-PE resin processing, essential oil terpene barrier formulation, and luxury personal care packaging performance.
            </p>
            <div className="pt-2">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Engineering Consultation with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-teal-950 via-neutral-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-teal-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-mono rounded-full border border-teal-500/30">
              Ready to Upgrade Your Bath Salt Packaging?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Custom Printed Bio-PE Bath Salt Sample Pouches Shipped Worldwide
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test essential oil barrier performance, tactile soft-touch finish, and zipper seals with your own bath salt formulations before placing a commercial order.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={openCalendly}
              className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold text-sm rounded-xl transition-colors shadow-lg shadow-teal-950/50"
            >
              Schedule Engineering Consultation
            </button>
            <a
              href="mailto:support@achievepack.com?subject=Bio-PE%20Bath%20Salts%20Pouch%20Sample%20Request"
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
              <h3 itemProp="name">What is a Bio-PE Bath Salts Stand-Up Pouch?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A Bio-PE Bath Salts Stand-Up Pouch is a plant-based flexible packaging Doypack manufactured from sugarcane polyethylene (I&apos;m Green™ certified). Engineered with an essential oil terpene barrier and EVOH moisture shield, it protects Epsom salts and aromatherapy soaks from clumping and pouch swelling while being 100% recyclable in #4 PE streams.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default BioPEBathSaltsStandUpPouchPage
