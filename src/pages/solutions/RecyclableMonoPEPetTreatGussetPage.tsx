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

const RecyclableMonoPEPetTreatGussetPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'recyclable mono pe pet treat gusset',
    'mono-material quad seal pet food bag',
    'recyclable dog treat side gusset pouch',
    'store drop off recyclable pet food packaging',
    'high barrier mono pe pet treat pouch',
    'grease resistant organic pet treat packaging',
    'custom printed recyclable pet food pouch',
    'sustainable pet food packaging solution'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'High Fat & Oil Rancidity from Subpar Barrier Films',
      solution: 'Organic pet treats contain rich natural fats and oils that oxidize quickly under low-barrier packaging, causing foul odors and rancidity. Our Mono-PE matrix incorporates an EVOH ultra-barrier layer (<0.5 cc/m²/24hr OTR) that locks out oxygen and keeps fats fresh for 18+ months.',
      icon: <Wind className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Grease Stains and Seep-Through on Outer Paper or Film',
      solution: 'Jerky and freeze-dried pet treats bleed grease onto outer packaging during warm transit. We formulate high-density PE (HDPE) outer film with pinhole-free grease barriers, preventing oil migration and keeping printed surfaces pristine.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Pouch Slumping and Display Sagging for Bulk Treat Quantities',
      solution: 'Quad seal side gusset bags often bulge into rounded pillows when packed with 1lb to 2lb treat quantities. Our four-corner sealed quad structure reinforces vertical rigidity by 300%, ensuring crisp shelf display next to rigid pet food containers.',
      icon: <Package className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Heavy Pet Odor Leakage on Retail Shelves and In-Home Storage',
      solution: 'Strong aromatic treats like freeze-dried salmon or liver emit pungent aromas if seal integrity is inadequate. We employ a low-temperature melt LLDPE sealing layer with superior seal hermeticity, containing odors inside the bag.',
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Recyclability Rejection by Municipal & Store Drop-off Programs',
      solution: 'Multi-layer PET/ALU/PE laminates cannot be processed in plastic recycling streams. Our 100% Mono-PE pouch passes APR (Association of Plastic Recyclers) guidelines, earning official #4 PE Store Drop-Off approval.',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: 'Why is a Quad Seal Side Gusset ideal for bulk pet treats?',
      a: 'The quad-seal design reinforces all four vertical corners, allowing 1 lb (454g) and 2 lb (908g) pet treat pouches to maintain a box-like upright shape on retail shelves while offering maximum front, back, and side gusset branding real estate.'
    },
    {
      q: 'Is this Mono-PE pet food bag grease resistant for high-fat meat snacks?',
      a: 'Yes. Our specialized co-extruded HDPE/LLDPE structure provides outstanding resistance to animal fats, beef tallow, and fish oils, ensuring zero grease penetration or exterior staining over extended shelf life.'
    },
    {
      q: 'How does Mono-PE packaging support Store Drop-off recycling?',
      a: 'Because the outer layer, barrier core, inner sealant, and press-to-close zipper are all engineered from Polyethylene (PE) family polymers (>95% total PE), the entire pouch recycles as a single stream in #4 PE store drop-off bins across North America and Europe.'
    },
    {
      q: 'What standard sizes are available for pet treat side gusset pouches?',
      a: 'Common sizes include 1 lb / 454g (4.7" x 10.6" + 3.1" / 120mm x 270mm + 80mm) and 2 lb / 908g (5.9" x 13.4" + 3.5" / 150mm x 340mm + 90mm). Custom sizes and handle punch cutouts are also available.'
    },
    {
      q: 'Can we add a heavy-duty zipper for repeated daily treat access?',
      a: 'Yes, we integrate high-durability mono-PE press-to-close or slider zippers designed for 100+ daily openings by pet parents without losing seal grip.'
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
    headline: '100% Recyclable Mono-PE Pet Treat Quad Seal Side Gusset Pouch',
    description: 'Engineering specifications for recyclable mono-material side gusset pet food packaging with grease barrier and #4 PE recycling qualification.',
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
      title="Recyclable Mono-PE Pet Treat Gusset Pouch | Achieve Pack"
      metaDescription="100% Recyclable Mono-PE quad seal side gusset pouch for pet treats and dog food. Grease-resistant high barrier with #4 PE store drop-off certification."
      keywords={keywords}
      heroTitle="Recyclable Mono-PE Pet Treat Gusset Pouch"
      heroSubtitle="100% Polyethylene Structure × EVOH Oxygen Barrier × Grease Protection × #4 PE Store Drop-Off"
      heroBadge="🐾 100% Recyclable #4 PE | APR Compliant"
      heroBgColor="#1e293b"
    >
      <DualDomainSEOHead
        title="Recyclable Mono-PE Pet Treat Quad Seal Gusset Pouch"
        description="High-barrier mono-material side gusset bag for organic pet treats. Grease-proof, odor-locking seal, 100% recyclable in PE streams."
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
                "headline": "Recyclable Pet Treat Gusset Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Recyclable Pet Treat Gusset Packaging",
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
          <Link to="/" className="hover:text-cyan-600">Home</Link>
          <span>/</span>
          <Link to="/solutions/catalog" className="hover:text-cyan-600">Solutions</Link>
          <span>/</span>
          <span className="font-semibold text-neutral-900">Mono-PE Pet Treat Gusset Pouch</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-slate-900 to-cyan-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Package className="w-96 h-96 text-cyan-300" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-cyan-500/30 border border-cyan-400/40 text-cyan-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Pet Food Packaging Insight
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Protect High-Fat Pet Treats from Rancidity with 100% Recyclable Quad-Seal Packaging
            </h2>
            <p className="text-slate-100 leading-relaxed">
              Pet owners are more conscious than ever about ingredient purity and packaging sustainability. But when organic jerky or salmon bites bleed oil through eco-pouches or oxidize into stale kibble, brand loyalty vanishes instantly.
            </p>
            <p className="text-cyan-200/90 text-sm leading-relaxed">
              Our <strong>Recyclable Mono-PE Pet Treat Gusset Pouch</strong> combines quad-corner seal structural rigidity with superior grease resistance and EVOH oxygen protection — all while qualifying for standard #4 PE recycling streams.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Recyclable Pet Treat Gusset.
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
              Inspect & Customize Recyclable Pet Treat Gusset Packaging in Interactive 3D
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
        <section className="bg-cyan-50 border-2 border-cyan-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-cyan-700 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-cyan-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-cyan-900 leading-relaxed">
                A <strong>Recyclable Mono-PE Pet Treat Gusset Pouch</strong> is an all-polyethylene quad seal side gusset bag fortified with an EVOH barrier layer (&lt;0.5 cc/m²/24hr OTR). Designed for 1 lb to 2 lb organic dog and cat treats, it provides pinhole-free grease protection, odor containment, and 100% recyclability in #4 PE store drop-off streams.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-cyan-500 transition-colors">
            <div className="text-cyan-700 font-bold text-xl">♻️ 100% Mono-Material</div>
            <p className="text-xs text-neutral-600">All-PE construction qualifies for #4 PE Store Drop-Off streams nationwide.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-cyan-500 transition-colors">
            <div className="text-cyan-700 font-bold text-xl">🥩 Grease-Proof Barrier</div>
            <p className="text-xs text-neutral-600">Resists natural oils and fats from beef jerky, chicken liver, and salmon treats.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-cyan-500 transition-colors">
            <div className="text-cyan-700 font-bold text-xl">📦 Quad Seal Rigidity</div>
            <p className="text-xs text-neutral-600">4-corner vertical seals hold crisp shape without slumping under 2 lb treat loads.</p>
          </div>
        </section>

        {/* Showcase Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Pet Brand Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed Mono-PE Side Gusset Pouch</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring matte or glossy finishes, heavy-duty resealable zipper, side gusset expansion for max volume, and 355ml reference scale matching for shelf layout visualization.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 4.7&quot; x 10.6&quot; + 3.1&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">120mm x 270mm + 80mm</span>
              <span className="px-3 py-1 bg-cyan-50 border border-cyan-200 text-xs text-cyan-900 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="Recyclable Mono-PE Pet Treat Side Gusset Pouch next to organic dog treats"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Pet Treat Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">Addressing fat oxidation, odor containment, and recyclability</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4 border border-neutral-800 flex flex-col justify-between hover:border-cyan-500 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-cyan-400 font-mono">{item.num}</span>
                    <div className="p-2 bg-slate-950 text-cyan-400 rounded-xl border border-slate-800/50">
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
        <section className="bg-cyan-950/20 border-2 border-cyan-500/40 rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500 text-neutral-950 rounded-xl font-bold text-xs uppercase tracking-wider">
              🔬 Engineer&apos;s Log
            </div>
            <h3 className="text-xl font-bold text-cyan-950 dark:text-cyan-200">
              From Ryan Wong&apos;s Packaging Engineering Notebook
            </h3>
          </div>
          <blockquote className="text-sm text-neutral-700 dark:text-cyan-100/90 italic leading-relaxed pl-4 border-l-4 border-cyan-500">
            &quot;During high-fat liver treat trials for a premium pet brand in Oregon, standard PE pouches experienced fat bleed through microscopic film pinholes after 45 days. We solved this by co-extruding a 5-layer MLLDPE/HDPE matrix with tailored polymer density gradients. The resulting pouch withstood 60 days of accelerated shelf-life testing at 40°C/75% RH with zero grease migration and perfect seal strength.&quot;
          </blockquote>
          <div className="text-xs text-cyan-800 dark:text-cyan-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Mono-PE Pet Treat Pouch Specification Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">1 lb (454g) Standard</th>
                  <th className="p-4">2 lb (908g) Large</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">4.7&quot; x 10.6&quot; + 3.1&quot; (120mm x 270mm + 80mm)</td>
                  <td className="p-4 font-mono">5.9&quot; x 13.4&quot; + 3.5&quot; (150mm x 340mm + 90mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Profile</td>
                  <td className="p-4">100% Mono-PE / EVOH Core Barrier</td>
                  <td className="p-4">100% Mono-PE / EVOH Core Barrier</td>
                  <td className="p-4">Standard Aluminum Can</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Total Thickness</td>
                  <td className="p-4">5.1 mil (130 microns)</td>
                  <td className="p-4">5.9 mil (150 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Oxygen Permeability (OTR)</td>
                  <td className="p-4">&lt;0.5 cc/m²/24hr @ 23°C 0% RH</td>
                  <td className="p-4">&lt;0.5 cc/m²/24hr @ 23°C 0% RH</td>
                  <td className="p-4">0.0 cc/m²/24hr</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Grease Resistance</td>
                  <td className="p-4">Kit Test 12 Rating (Maximum Protection)</td>
                  <td className="p-4">Kit Test 12 Rating (Maximum Protection)</td>
                  <td className="p-4">Complete Barrier</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Recyclability</td>
                  <td className="p-4">#4 PE Store Drop-Off / APR Qualified</td>
                  <td className="p-4">#4 PE Store Drop-Off / APR Qualified</td>
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
            <Link to="/store" className="text-xs font-bold text-cyan-700 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Mono-PE Pet Treat Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">1 lb Mono-PE Pet Treat Quad Pouch</h4>
                <p className="text-xs text-neutral-500">100% Recyclable mono-material pouch with heavy-duty zipper.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-cyan-700 hover:text-cyan-800">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Mono-PE Stand Up Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Bio-PE Sugarcane Pet Treat Bag</h4>
                <p className="text-xs text-neutral-500">Plant-based renewable PE stand up pouch for treats and biscuits.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-cyan-700 hover:text-cyan-800">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Flat Bottom Pet Food Bag" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Flat Bottom Box Pouch for Pet Food</h4>
                <p className="text-xs text-neutral-500">5-panel box structure for premium dry dog food and freeze-dried kibble.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-cyan-700 hover:text-cyan-800">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Frequently Asked Questions</span>
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
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Specializes in polyolefin polymer lamination, high-barrier EVOH co-extrusion, and sustainable DTC roastery packaging scaling. Has guided over 500+ global coffee brands from prototype testing to automated VFFS filling lines.
            </p>
            <div className="pt-2">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Packaging Audit with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-slate-950 via-neutral-900 to-cyan-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-cyan-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-mono rounded-full border border-cyan-500/30">
              Upgrade Your Pet Brand Packaging
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Recyclable Mono-PE Pet Treat Sample Packs
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test oil resistance, seal hermeticity, and quad-seal rigidity with your organic treat formulas.
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
              href="mailto:support@achievepack.com?subject=Recyclable%20Pet%20Treat%20Gusset%20Sample"
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
              <h3 itemProp="name">What is a Recyclable Mono-PE Pet Treat Gusset Pouch?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A Recyclable Mono-PE Pet Treat Gusset Pouch is a 100% polyethylene quad seal side gusset bag designed for organic dog and cat treats. Laminated with an EVOH barrier (&lt;0.5 cc/m²/24hr OTR), it offers superior fat resistance and odor containment while being fully recyclable in #4 PE store drop-off programs.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default RecyclableMonoPEPetTreatGussetPage
