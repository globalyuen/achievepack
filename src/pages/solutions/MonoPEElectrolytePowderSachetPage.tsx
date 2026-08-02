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

const MonoPEElectrolytePowderSachetPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'mono pe electrolyte powder sachet',
    'recyclable stick pack electrolyte sachet',
    'mono-material hydration powder packaging',
    'ultra high moisture barrier sachet mono pe',
    'electrolyte stick pack recyclable #4 pe',
    'custom printed electrolyte drink sachet',
    'sustainable sports drink powder sachet',
    'high speed vffs stick pack film mono pe'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Hygroscopic Salt Hardening & Powder Caking from Moisture',
      solution: 'Electrolyte powders contain sodium, potassium, and magnesium salts that absorb atmospheric moisture instantly, turning powder into hard bricks. We co-extrude a High-Density Mono-PE (HDPE) film matrix achieving an ultra-low WVTR <0.2 g/m²/24hr, keeping stick pack powder free-flowing.',
      icon: <Wind className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Static Powder Cling & Messy Pouring in Water Bottles',
      solution: 'Narrow 35mm stick packs frequently trap fine powder against inner sidewalls due to static electricity. We treat our internal LLDPE contact layer with an anti-static agent, allowing 100% clean powder discharge into narrow water bottle openings.',
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Tear Notch Misalignment & Jagged Diagonal Tearing',
      solution: 'Consumers opening stick packs during workouts get frustrated by jagged tears that spill electrolyte powder. We precision laser-score horizontal tear notches across the top seal, guaranteeing a clean, straight tear every time.',
      icon: <Package className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'High-Speed VFFS Stick Pack Machine Jamming & Seal Leaks',
      solution: 'Running eco-friendly mono-PE films at 100+ stick packs/min often leads to film stretching or leakers. We optimize our Mono-PE film slip properties (COF <0.2) and low-heat initiation sealing for smooth, high-speed VFFS operation.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Landfill Waste from Millions of Non-Recyclable Foil Sachets',
      solution: 'Single-serve stick packs generate massive plastic landfill waste. Our 100% Mono-PE sachet consists of >95% Polyethylene polymer, qualifying for #4 PE Store Drop-Off recycling streams.',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: 'Why is Mono-PE essential for single-serve electrolyte stick packs?',
      a: 'Electrolyte powders require absolute moisture protection to prevent salt caking. Mono-PE provides ultra-low water vapor transmission (WVTR <0.2 g/m²/24hr) while remaining 100% recyclable in #4 PE store drop-off streams, replacing non-recyclable PET/Alu/PE foil sachets.'
    },
    {
      q: 'Does the sachet feature laser scoring for easy opening on-the-go?',
      a: 'Yes! All stick packs feature precision micro-laser scoring across the tear notch, ensuring athletes can easily tear open the sachet with one hand during runs or workouts.'
    },
    {
      q: 'What standard sizes are available for electrolyte stick packs?',
      a: 'Standard single-serve dimensions include 6g Stick Pack (1.4" x 4.9" / 35mm x 125mm) and Multi-Serving Pack (2.4" x 5.9" / 60mm x 150mm). Custom lengths and multi-pack carton configurations are supported.'
    },
    {
      q: 'Are these Mono-PE films compatible with high-speed multi-lane VFFS stick pack lines?',
      a: 'Yes. Our Mono-PE rollstock is engineered with high tensile stiffness, low Coefficient of Friction (COF <0.2), and broad heat-sealing windows (100°C–140°C), supporting multi-lane machine speeds up to 120 lanes/min.'
    },
    {
      q: 'What is the MOQ for custom printed Mono-PE electrolyte sachets?',
      a: 'On Pouch Eco, custom digital printing starts from 1,000 sachets for new product launches. High-speed rollstock production on Achieve Pack starts at 20,000 stick packs.'
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
    headline: 'Recyclable Mono-PE Ultra-High Moisture Barrier Electrolyte Stick Pack Sachet',
    description: 'Engineering specifications for 100% recyclable mono-material stick pack sachets for hydration powders and electrolyte drink mixes.',
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
      title="Mono-PE Electrolyte Powder Sachet | Achieve Pack"
      metaDescription="Recyclable Mono-PE stick pack sachet for hydration & electrolyte powders. Ultra-low WVTR moisture barrier, laser tear notch, #4 PE recyclable."
      keywords={keywords}
      heroTitle="Mono-PE Electrolyte Powder Sachet"
      heroSubtitle="100% Polyethylene Structure × Ultra-Low Moisture Barrier × Laser Tear Notch × #4 PE Recyclable"
      heroBadge="⚡ 100% Recyclable #4 PE | Anti-Caking Barrier"
      heroBgColor="#15803d"
    >
      <DualDomainSEOHead
        title="Mono-PE Recyclable Electrolyte Powder Stick Pack Sachet"
        description="High-barrier mono-PE stick pack for hydration and sports drink powders. Ultra-low WVTR prevents salt caking, 100% recyclable in PE streams."
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
                "headline": "Electrolyte Powder Sachet Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Electrolyte Powder Sachet Packaging",
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
          <Link to="/" className="hover:text-green-700">Home</Link>
          <span>/</span>
          <Link to="/solutions/catalog" className="hover:text-green-700">Solutions</Link>
          <span>/</span>
          <span className="font-semibold text-neutral-900">Mono-PE Electrolyte Sachet</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-green-950 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Package className="w-96 h-96 text-green-300" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-green-500/30 border border-green-400/40 text-green-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Hydration Brand Packaging Insight
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Keep Electrolyte Powders Free-Flowing with 100% Recyclable Ultra-High Moisture Barrier Stick Packs
            </h2>
            <p className="text-green-100 leading-relaxed">
              Electrolyte and hydration powders are intensely hygroscopic. If ambient water vapor penetrates the sachet, the powder hardens into a solid block, destroying customer trust.
            </p>
            <p className="text-green-200/90 text-sm leading-relaxed">
              Our <strong>Mono-PE Electrolyte Powder Sachet</strong> delivers an ultra-low moisture vapor transmission rate (WVTR &lt;0.2 g/m²/24hr), anti-static interior lining, and laser-scored tear notches — all in a 100% Recyclable #4 PE mono-material structure.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Electrolyte Powder Sachet.
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
              Inspect & Customize Electrolyte Powder Sachet Packaging in Interactive 3D
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
        <section className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-700 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-green-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-green-900 leading-relaxed">
                A <strong>Mono-PE Electrolyte Powder Sachet</strong> is a single-serve stick pack manufactured from 100% polyethylene co-extruded film (&lt;0.2 g/m²/24hr WVTR). Designed for 6g single-serve hydration drink mixes, it provides anti-caking moisture protection, anti-static easy-pour lining, laser-scored tear notches, and #4 PE store drop-off recyclability.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-green-500 transition-colors">
            <div className="text-green-700 font-bold text-xl">💧 WVTR &lt;0.2 Barrier</div>
            <p className="text-xs text-neutral-600">Ultra-low moisture permeability prevents hygroscopic salt hardening and caking.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-green-500 transition-colors">
            <div className="text-green-700 font-bold text-xl">✂️ Laser Tear Notch</div>
            <p className="text-xs text-neutral-600">Micro-laser scored line guarantees effortless, straight one-handed opening.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-green-500 transition-colors">
            <div className="text-green-700 font-bold text-xl">♻️ #4 PE Recyclable</div>
            <p className="text-xs text-neutral-600">All-polyethylene mono-material structure qualifies for standard #4 PE Store Drop-Off.</p>
          </div>
        </section>

        {/* Showcase Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Hydration Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed Mono-PE 6g Stick Pack Sachet</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring matte or glossy finishes, high-definition flexo/digital printing, narrow 35mm stick pack format, and 355ml reference scale matching for display box planning.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 1.4&quot; x 4.9&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">35mm x 125mm</span>
              <span className="px-3 py-1 bg-green-50 border border-green-200 text-xs text-green-900 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="Mono-PE Electrolyte Powder Stick Pack Sachet being poured into water bottle"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Electrolyte Sachet Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">Addressing moisture caking, static cling, and high-speed VFFS filling</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4 border border-neutral-800 flex flex-col justify-between hover:border-green-500 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-green-400 font-mono">{item.num}</span>
                    <div className="p-2 bg-green-950 text-green-400 rounded-xl border border-green-800/50">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-neutral-100 leading-snug">{item.problem}</h3>
                </div>
                <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700/60 mt-4 space-y-1">
                  <div className="text-xs font-bold text-green-400 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Engineering Solution:
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* From Ryan Wong's Engineering Notebook */}
        <section className="bg-green-950/20 border-2 border-green-500/40 rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500 text-neutral-950 rounded-xl font-bold text-xs uppercase tracking-wider">
              🔬 Engineer&apos;s Log
            </div>
            <h3 className="text-xl font-bold text-green-950 dark:text-green-200">
              From Ryan Wong&apos;s Packaging Engineering Notebook
            </h3>
          </div>
          <blockquote className="text-sm text-neutral-700 dark:text-green-100/90 italic leading-relaxed pl-4 border-l-4 border-green-500">
            &quot;Electrolyte stick packs containing sodium citrate clumped within 14 days when packed in standard mono-PE films. We engineered a 5-layer co-extruded HDPE/LLDPE structure with high crystalline orientation. In humidity chamber testing at 38°C / 90% RH, WVTR dropped from 1.2 to 0.18 g/m²/24hr — maintaining free-flowing powder over 24 months.&quot;
          </blockquote>
          <div className="text-xs text-green-800 dark:text-green-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Mono-PE Electrolyte Sachet Specification Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">6g Single Serve Stick Pack</th>
                  <th className="p-4">30g Multi-Serving Pack</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxH)</td>
                  <td className="p-4 font-mono">1.4&quot; x 4.9&quot; (35mm x 125mm)</td>
                  <td className="p-4 font-mono">2.4&quot; x 5.9&quot; (60mm x 150mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Structure</td>
                  <td className="p-4">HDPE / High Barrier EVOH / LLDPE (100% PE)</td>
                  <td className="p-4">HDPE / High Barrier EVOH / LLDPE (100% PE)</td>
                  <td className="p-4">Standard Aluminum Can</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Total Thickness</td>
                  <td className="p-4">3.5 mil (90 microns)</td>
                  <td className="p-4">4.3 mil (110 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Water Vapor Transmission (WVTR)</td>
                  <td className="p-4">&lt;0.2 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">&lt;0.2 g/m²/24hr @ 38°C 90% RH</td>
                  <td className="p-4">0.0 g/m²/24hr</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Laser Tear Notch</td>
                  <td className="p-4">Micro-Laser Scored Horizontal Tear</td>
                  <td className="p-4">Micro-Laser Scored Horizontal Tear</td>
                  <td className="p-4">Pull Tab</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Recyclability Stream</td>
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
            <Link to="/store" className="text-xs font-bold text-green-700 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Mono-PE Stick Pack Sachet" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">6g Mono-PE Electrolyte Stick Pack</h4>
                <p className="text-xs text-neutral-500">Recyclable #4 PE sachet with ultra-low WVTR anti-caking barrier.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-green-700 hover:text-green-800">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Bio-PE Matcha Sachet" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Bio-PE Sugarcane Matcha Sachet</h4>
                <p className="text-xs text-neutral-500">Plant-based renewable PE single-serve sachet.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-green-700 hover:text-green-800">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Compostable Powder Bag" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Compostable Protein Powder Pouch</h4>
                <p className="text-xs text-neutral-500">Certified TUV OK Compost Home flat bottom pouch.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-green-700 hover:text-green-800">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Frequently Asked Questions</span>
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
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-green-500 flex-shrink-0 bg-neutral-800 flex items-center justify-center text-green-400 font-bold text-2xl">
            RW
          </div>
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <h4 className="text-lg font-bold text-white">Ryan Wong</h4>
              <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/40">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Packaging Audit with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-green-950 via-neutral-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-green-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-mono rounded-full border border-green-500/30">
              Upgrade Your Hydration Product Line
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Mono-PE Electrolyte Stick Pack Sample Kits
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test moisture anti-caking performance, laser tear scoring, and high-speed VFFS rollstock sealability.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={openCalendly}
              className="px-6 py-3 bg-green-500 hover:bg-green-400 text-neutral-950 font-bold text-sm rounded-xl transition-colors shadow-lg shadow-green-950/50"
            >
              Schedule Engineering Consultation
            </button>
            <a
              href="mailto:support@achievepack.com?subject=Mono-PE%20Electrolyte%20Sachet%20Sample"
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
              <h3 itemProp="name">What is a Mono-PE Electrolyte Powder Sachet?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A Mono-PE Electrolyte Powder Sachet is a single-serve stick pack flexible container manufactured from 100% polyethylene co-extruded film (&lt;0.2 g/m²/24hr WVTR). Designed for 6g portioned hydration drink mixes, it provides anti-caking moisture barrier protection, laser tear scoring, anti-static inner lining, and 100% recyclability in #4 PE store drop-off programs.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default MonoPEElectrolytePowderSachetPage
