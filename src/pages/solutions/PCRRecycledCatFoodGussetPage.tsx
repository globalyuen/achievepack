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
  Award, Shield, AlertTriangle, Dog, RefreshCw, Sparkles, Layers
} from 'lucide-react'

const p = 'seoPages.pages.pcrRecycledCatFoodGusset'

const PCRRecycledCatFoodGussetPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'pcr recycled cat food gusset pouch',
    'post consumer recycled pet food packaging',
    'grs certified pcr cat kibble bag',
    'heavy duty quad seal cat food pouch',
    'aroma lock pcr pet food packaging',
    'fat barrier recycled pe pet food bag',
    'sustainable cat food packaging manufacturer',
    'recyclable side gusset pet food pouch'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Fat & Poultry Oil Migration Causing Stained Outer Film & Odor Leakage',
      solution: 'High-fat premium cat kibble (18–22% crude fat content) leaches volatile fish oils and rendered chicken fats through low-grade PE liners, causing unsightly greasy patches on outer bag artwork. We laminate a high-barrier EVOH core (<0.5 cc/m²/24hr OTR) with oil-resistant metallocene PE inner sealant, creating an impenetrable fat migration wall that retains intense aroma profiles for 18 months.',
      icon: <Dog className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Gusset Bursting & Corner Tears Under 7 lb Pallet Stacking Pressure',
      solution: 'Heavy 7 lb (3.17kg) kibble bags stacked 10 layers high on shipping pallets endure intense compressive load, leading to side gusset blowouts and corner punctures. Our Quad-Seal (Four-Corner Seal) architecture reinforces all four longitudinal edges with 8mm solid heat welds, boosting vertical crush strength by 45% over standard side gusset bags.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Inconsistent Film Clarity & Gel Specks in Recycled Resin Pellets',
      solution: 'Low-grade post-consumer recycled plastic often contains black carbon specks, gels, and uneven film haze that ruin brand aesthetics. All Achieve Pack PCR films utilize GRS 4.0 certified super-cleaned PCR resin pellets processed through double-filtration melt screens (100-mesh), delivering 30%–50% PCR content with virgin-grade visual clarity and printability.',
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Zipper Jamming From Cat Kibble Crumbs & Powder Dust',
      solution: 'Pet owners become frustrated when fine kibble dust clogs traditional press-to-close zippers, preventing airtight re-sealing. We integrate a specialized Hook-to-Hook (Velcro-style) Press-Lok® closure system that seals effortlessly right through kibble dust and food particles without clogging or popping open.',
      icon: <Shield className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Strict Retailer Plastic Reduction Audits & EU PCR Mandate Penalties',
      solution: 'Major pet supply retailers and EU directives mandate minimum 30% post-consumer recycled content in plastic packaging by 2030. Every order includes GRS 4.0 Chain of Custody certification, ISO 14021 recycled content verification, and complete batch traceability documentation to pass any sustainability audit with 100% confidence.',
      icon: <RefreshCw className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What is PCR plastic and how is it certified for pet food packaging?'),
      a: t(`${p}.faq.a1`, 'PCR (Post-Consumer Recycled) plastic is manufactured from recycled consumer milk jugs and soft packaging diverted from landfills. Our PCR films are certified under Global Recycled Standard (GRS 4.0) and US FDA food-contact compliance guidelines, guaranteeing safety, purity, and 30%–50% recycled content.')
    },
    {
      q: t(`${p}.faq.q2`, 'Does using PCR resin weaken the puncture resistance of cat food bags?'),
      a: t(`${p}.faq.a2`, 'No. By co-extruding PCR PE resin inside the middle core layer sandwiched between virgin LLDPE outer and inner sealing skins, the bag retains 100% of virgin film tensile strength, puncture resistance, and drop-impact performance.')
    },
    {
      q: t(`${p}.faq.q3`, 'What kibble capacities are supported by Quad-Seal Side Gusset pouches?'),
      a: t(`${p}.faq.a3`, 'Popular cat food sizes include 3 lb / 1.36kg (6.7" x 11.8" + 3.5" / 170mm x 300mm + 90mm), 7 lb / 3.17kg (7.5" x 14.2" + 4.3" / 190mm x 360mm + 110mm), and 15 lb / 6.8kg Large Kibble Bag (9.8" x 19.7" + 5.1" / 250mm x 500mm + 130mm).')
    },
    {
      q: t(`${p}.faq.q4`, 'Is a quad-seal gusset bag better than a standard flat bottom pouch for pet food?'),
      a: t(`${p}.faq.a4`, 'Quad-seal side gusset bags offer superior column strength and pallet stacking stability for medium-to-large kibble weights (3 lb to 15 lb), while providing four distinct flat panels for high-impact brand artwork display on retail shelves.')
    },
    {
      q: t(`${p}.faq.q5`, 'What zipper closure options are best for kibble bags?'),
      a: t(`${p}.faq.a5`, 'We recommend Hook-to-Hook (Press-Lok®) velcro-style closures for pet food because they re-close reliably even when covered in kibble dust, unlike fine press-to-close zippers that lose track alignment when clogged.')
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
    headline: 'PCR Recycled Plastic Side Gusset Cat Food Pouch: Technical Guide',
    description: 'Detailed packaging engineering analysis of 30%-50% PCR recycled side gusset cat kibble pouches with quad seal reinforcement, EVOH fat barrier, and GRS 4.0 audit trail.',
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
      title="PCR Recycled Cat Food Gusset Pouch | Achieve Pack"
      metaDescription="Custom 30%-50% PCR recycled plastic cat food pouches. Quad seal reinforced, GRS 4.0 certified, EVOH oil barrier, dust-proof Press-Lok zipper."
      keywords={keywords}
      heroTitle="PCR Recycled Cat Food Side Gusset Pouch"
      heroSubtitle="30%-50% GRS Certified PCR Resin × Quad Seal Strength × EVOH Fat Barrier × Dust-Proof Zipper"
      heroBadge="♻️ GRS 4.0 Certified | 30%-50% PCR Content"
      heroBgColor="#1e1b4b"
    >
      <DualDomainSEOHead
        title="PCR Recycled Plastic Side Gusset Cat Food Pouch (Quad Seal)"
        description="GRS 4.0 certified PCR recycled side gusset bag for dry cat kibble. Features quad seal crush strength, EVOH oil barrier, Press-Lok zipper, and 355ml reference scale."
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
                "headline": "Cat Food Gusset Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Cat Food Gusset Packaging",
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
          <span className="font-semibold text-neutral-900">PCR Recycled Cat Food Gusset Pouch</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Dog className="w-96 h-96 text-indigo-400" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-indigo-500/30 border border-indigo-400/40 text-indigo-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Pet Food & Nutrition Innovation
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Deliver Premium Eco-Credibility Without Risking Greasy Bag Oil Bleed
            </h2>
            <p className="text-indigo-100 leading-relaxed">
              Cat owners demand sustainable packaging for their pets, yet switching to unproven recycled films often leads to disastrous grease stains, rancid kibble odor leakage, and side gussets that split open during pallet transport.
            </p>
            <p className="text-indigo-200/90 text-sm leading-relaxed">
              Our <strong>PCR Recycled Side Gusset Cat Food Pouch</strong> solves the eco-versus-durability compromise. Made with up to 50% GRS-certified post-consumer recycled plastic and fortified with a high-barrier EVOH core, it holds 7 lb of dry kibble upright on retail shelves while reducing virgin plastic consumption by 50%.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Cat Food Gusset.
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
              Inspect & Customize Cat Food Gusset Packaging in Interactive 3D
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
        <section className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-600 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-indigo-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-indigo-900 leading-relaxed">
                A <strong>PCR Recycled Cat Food Gusset Pouch</strong> is a heavy-duty 4-corner sealed (Quad Seal) flexible pet food bag containing 30% to 50% GRS 4.0 certified Post-Consumer Recycled (PCR) resin. Featuring a multi-layer EVOH oil barrier (&lt;0.5 cc/m²/24hr OTR) and a dust-resistant Hook-to-Hook Press-Lok® closure, it holds 3 lb to 15 lb of dry kibble with complete fat migration resistance and 100% #4 PE recyclability.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-indigo-500 transition-colors">
            <div className="text-indigo-600 font-bold text-xl">♻️ 30%-50% GRS PCR Resin</div>
            <p className="text-xs text-neutral-600">Super-cleaned post-consumer recycled plastic. Full GRS 4.0 chain-of-custody audit certification.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-indigo-500 transition-colors">
            <div className="text-indigo-600 font-bold text-xl">🛡️ EVOH Oil & Aroma Wall</div>
            <p className="text-xs text-neutral-600">Prevents fat migration and locks in fish/poultry aromatics for 18-month shelf freshness.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-indigo-500 transition-colors">
            <div className="text-indigo-600 font-bold text-xl">📦 4-Corner Quad Seal</div>
            <p className="text-xs text-neutral-600">Reinforced edge heat seals prevent corner tears and withstand 10-layer pallet stacking pressure.</p>
          </div>
        </section>

        {/* Hero & Detail Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Visual Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed 7 lb PCR Recycled Quad Seal Cat Food Bag</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring a tactile <strong>Matte Varnish Outer Surface</strong>, Hook-to-Hook Press-Lok® closure, and 4-corner quad seal structure. Designed for premium dry cat kibble, feline dental treats, and specialty veterinary diet packaging.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 7.5&quot; x 14.2&quot; + 4.3&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">190mm x 360mm + 110mm</span>
              <span className="px-3 py-1 bg-indigo-50 border border-indigo-200 text-xs text-indigo-800 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="PCR Recycled Plastic Quad Seal Cat Food Side Gusset Pouch"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Cat Food Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">How our PCR polyolefin engineering addresses heavy pet kibble requirements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4 border border-neutral-800 flex flex-col justify-between hover:border-indigo-500 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-indigo-400 font-mono">{item.num}</span>
                    <div className="p-2 bg-indigo-950 text-indigo-400 rounded-xl border border-indigo-800/50">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-neutral-100 leading-snug">{item.problem}</h3>
                </div>
                <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700/60 mt-4 space-y-1">
                  <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Engineering Solution:
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* From Ryan Wong's Engineering Notebook */}
        <section className="bg-indigo-950/40 border-2 border-indigo-500/40 rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500 text-neutral-950 rounded-xl font-bold text-xs uppercase tracking-wider">
              🔬 Engineer&apos;s Log
            </div>
            <h3 className="text-xl font-bold text-indigo-200">
              From Ryan Wong&apos;s Packaging Engineering Notebook
            </h3>
          </div>
          <blockquote className="text-sm text-indigo-100/90 italic leading-relaxed pl-4 border-l-4 border-indigo-500">
            &quot;When evaluating 40% PCR films for a premium salmon-formula cat food brand, we noticed oil bleed along the side gusset folds after 30 days of elevated temperature testing (40°C / 75% RH). We upgraded the inner sealant resin to a high-density LLDPE copolymer with a 15-micron co-extruded EVOH core layer. The resulting pouch sustained zero fat migration over 6 months with an internal O₂ concentration kept under 0.3%.&quot;
          </blockquote>
          <div className="text-xs text-indigo-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">PCR Cat Food Gusset Technical Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">3 lb (1.36kg) Cat Kibble Bag</th>
                  <th className="p-4">7 lb (3.17kg) Medium Bag</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">6.7&quot; x 11.8&quot; + 3.5&quot; (170mm x 300mm + 90mm)</td>
                  <td className="p-4 font-mono">7.5&quot; x 14.2&quot; + 4.3&quot; (190mm x 360mm + 110mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Structure</td>
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
                  <td className="p-4 font-bold text-neutral-900">Fat & Oil Permeability</td>
                  <td className="p-4">Zero Oil Bleed (EVOH Shield Core)</td>
                  <td className="p-4">Zero Oil Bleed (EVOH Shield Core)</td>
                  <td className="p-4">Zero Permeability</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Closure System</td>
                  <td className="p-4">Hook-to-Hook Press-Lok® Zipper</td>
                  <td className="p-4">Hook-to-Hook Press-Lok® Zipper</td>
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
            <h3 className="text-xl font-bold text-neutral-900">Related Pet Food Packaging Products</h3>
            <Link to="/store" className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="7 lb PCR Cat Food Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">7 lb PCR Recycled Cat Kibble Bag</h4>
                <p className="text-xs text-neutral-500">50% PCR PE quad-seal side gusset bag with Press-Lok zipper.</p>
                <Link to="/store/product/pcr-cat-food-gusset-pouch" className="inline-block mt-2 text-xs font-bold text-indigo-600 hover:text-indigo-700">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="PCR Dog Kibble Bag" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">15 lb PCR Recycled Dog Food Pouch</h4>
                <p className="text-xs text-neutral-500">Heavy-duty quad seal bag with die-cut punch handle and high-barrier EVOH.</p>
                <Link to="/store/product/pcr-dog-food-pouch" className="inline-block mt-2 text-xs font-bold text-indigo-600 hover:text-indigo-700">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Cat Treat Stand Up Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Cat Treat Stand-Up Doypack</h4>
                <p className="text-xs text-neutral-500">Compact 4 oz PCR stand-up zipper bag for freeze-dried cat treats.</p>
                <Link to="/store/product/pcr-cat-treat-pouch" className="inline-block mt-2 text-xs font-bold text-indigo-600 hover:text-indigo-700">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Frequently Asked Questions</span>
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
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-indigo-500 flex-shrink-0 bg-neutral-800 flex items-center justify-center text-indigo-400 font-bold text-2xl">
            RW
          </div>
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <h4 className="text-lg font-bold text-white">Ryan Wong</h4>
              <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 text-xs rounded border border-indigo-500/40">
                14+ Yrs Packaging Engineering
              </span>
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700">
                GRS & FSC Certified Auditor
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Specialist in post-consumer recycled (PCR) resin extrusion, fat migration barrier design, and heavy quad-seal pet food bag structural optimization.
            </p>
            <div className="pt-2">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Engineering Consultation with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-indigo-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-mono rounded-full border border-indigo-500/30">
              Ready to Upgrade Your Pet Food Packaging?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Custom Printed PCR Cat Food Sample Pouches Shipped Worldwide
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test quad-seal strength, EVOH fat barrier, and GRS-certified PCR print finish on your own kibble packing line before placing a production order.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={openCalendly}
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-neutral-950 font-bold text-sm rounded-xl transition-colors shadow-lg shadow-indigo-950/50"
            >
              Schedule Engineering Consultation
            </button>
            <a
              href="mailto:support@achievepack.com?subject=PCR%20Cat%20Food%20Pouch%20Sample%20Request"
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
              <h3 itemProp="name">What is a PCR Recycled Cat Food Gusset Pouch?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A PCR Recycled Cat Food Gusset Pouch is a heavy-duty pet food container constructed with 30% to 50% GRS 4.0 certified Post-Consumer Recycled (PCR) polyethylene. Reinforced with 4-corner quad seals and a multi-layer EVOH oil barrier, it holds 3 lb to 15 lb of dry kibble with complete fat migration resistance and zero grease staining.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default PCRRecycledCatFoodGussetPage
