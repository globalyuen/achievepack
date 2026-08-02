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

const CompostableKraftCoffeeDoypackPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'compostable kraft coffee doypack',
    'home compostable coffee stand up pouch',
    'kraft paper coffee pouch with valve',
    'certified compostable coffee packaging',
    'tuv ok compost kraft doypack 12oz',
    'biodegradable kraft coffee bag with zipper',
    'high barrier compostable coffee packaging',
    'sustainable coffee roaster packaging'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Paper Degradation & Delamination under High Ambient Humidity',
      solution: 'Standard un-laminated kraft paper bags absorb moisture in humid storage, causing outer paper weakening and seal delamination. We co-extrude a certified bio-based High-Barrier NK Paper matrix with PBS/PLA inner lining, ensuring structural integrity at 90% RH while maintaining TUV OK Compost Home certification.',
      icon: <Wind className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Coffee Bean Stale Oxidation from Low OTR Barrier Bio-Plastics',
      solution: 'Basic PLA film exhibits high oxygen transmission rates (OTR > 50 cc/m²/24hr), causing roasted coffee beans to lose aroma in under a month. Our proprietary bio-barrier layer reduces OTR to <1.2 cc/m²/24hr and WVTR to <1.5 g/m²/24hr, extending specialty coffee shelf life to 12 months.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'CO₂ Pressure Ballooning & Bag Rupture During Transit',
      solution: 'Freshly roasted whole beans release significant CO₂ volume. Without proper venting, sealed doypacks balloon and split at heat seals. We heat-weld a 100% bio-based compostable one-way degassing valve that releases CO₂ at 3.0 mbar while blocking oxygen ingress.',
      icon: <Package className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Zipper Snap Failure & Powder Clogging on Re-closure',
      solution: 'Conventional eco-zippers crack under repeated opening or lose grip when coffee dust accumulates in grooves. Our plant-derived PLA press-to-close zipper features self-cleaning micro-grooves and high tear resistance (>18 N/15mm), tested through 50+ closure cycles.',
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Greenwashing Liabilities & Lack of Compliance Certification',
      solution: 'Unverified "biodegradable" claims trigger regulatory fines under FTC Green Guides and EU Directives. Every batch of Achieve Pack Kraft Doypacks includes DIN CERTCO (EN 13432) and BPI Industrial / TUV OK Compost Home certificate documentation for 100% legal compliance.',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: 'How long does this kraft coffee doypack take to decompose in home compost?',
      a: 'Under TUV OK Compost Home standards (20°C–30°C ambient temperature), the pouch disintegrates within 26 weeks and fully biodegrades into water, CO₂, and nutrient-rich biomass within 12 months without leaving synthetic microplastic residues.'
    },
    {
      q: 'Is the one-way degassing valve also certified 100% compostable?',
      a: 'Yes. Our degassing valve is injection-molded from certified bio-polybutylene succinate (PBS) and cellulose filter media, holding DIN CERTCO EN 13432 certification so the entire pouch can be composted without removing the valve.'
    },
    {
      q: 'Can I print full-color custom artwork on the natural kraft paper surface?',
      a: 'Absolutely. We offer high-definition soy/water-based ink flexographic and digital printing directly onto natural brown or bleached white FSC-certified kraft paper, supporting matte varnishes and bio-foil hot stamping.'
    },
    {
      q: 'What sizes are standard for Kraft Coffee Doypacks?',
      a: 'Popular sizes include 250g / 8 oz (5.1" x 8.1" + 2.6" / 130mm x 205mm + 65mm) and 340g / 12 oz (5.9" x 9.1" + 3.1" / 150mm x 230mm + 80mm). Custom sizes and custom die-cut windows are fully customizable.'
    },
    {
      q: 'What is the MOQ for custom printed compostable kraft pouches?',
      a: 'On Pouch Eco (DTC Startup platform), digital printing starts from just 100 pcs per design. For enterprise volume on Achieve Pack, rotogravure production begins at 5,000 pcs with wholesale pricing.'
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
    headline: 'Certified Compostable Kraft Coffee Doypack with One-Way Degassing Valve',
    description: 'Technical guide and specifications for FSC kraft paper home compostable stand-up pouches designed for specialty roasted coffee beans.',
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
      title="Compostable Kraft Coffee Doypack with Valve | Achieve Pack"
      metaDescription="Custom FSC natural kraft paper home compostable coffee doypack with bio-barrier coating, plant-based degassing valve, and press-to-close zipper."
      keywords={keywords}
      heroTitle="Compostable Kraft Coffee Doypack"
      heroSubtitle="FSC Kraft Paper × High-Barrier Bio-Film × Plant-Based Degassing Valve × TUV OK Compost Home"
      heroBadge="🌱 TUV OK Compost Home & BPI Certified"
      heroBgColor="#271c19"
    >
      <DualDomainSEOHead
        title="Compostable Kraft Coffee Doypack with Degassing Valve"
        description="FSC natural kraft paper stand up pouch for specialty coffee. 100% home compostable bio-barrier film, plant-based valve, and reclosable zipper."
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
                "headline": "Kraft Coffee Doypack Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Kraft Coffee Doypack Packaging",
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
          <Link to="/" className="hover:text-amber-700">Home</Link>
          <span>/</span>
          <Link to="/solutions/catalog" className="hover:text-amber-700">Solutions</Link>
          <span>/</span>
          <span className="font-semibold text-neutral-900">Compostable Kraft Coffee Doypack</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-amber-950 to-stone-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Leaf className="w-96 h-96 text-amber-300" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-500/30 border border-amber-400/40 text-amber-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Specialty Roaster Empathy Insight
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Give Your Specialty Coffee the Authentic Earthy Look Without Sacrificing 12-Month Aroma Freshness
            </h2>
            <p className="text-amber-100 leading-relaxed">
              As a specialty coffee roaster, you know eco-conscious customers love tactile natural kraft paper packaging. But early compostable bags often split at the side seams or let oxygen stalify delicate floral top notes within weeks. You should never have to choose between genuine sustainability and cup quality.
            </p>
            <p className="text-amber-200/90 text-sm leading-relaxed">
              Our <strong>Compostable Kraft Coffee Doypack</strong> combines tactile FSC kraft paper with a high-barrier plant-derived inner bio-film and a 100% compostable degassing valve — delivering 12+ months of peak freshness and full TUV OK Compost Home certification.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Kraft Coffee Doypack.
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
              Inspect & Customize Kraft Coffee Doypack Packaging in Interactive 3D
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
                src="/imgs/reclose/a_valve_closure_detail_6401844.webp"
                alt="2. Calibrated One-Way Degassing Valve"
                className="w-full h-48 object-cover rounded-xl border border-neutral-700 shadow-md hover:border-emerald-500 transition-all"
              />
              <h3 className="font-semibold text-white text-sm">2. Calibrated One-Way Degassing Valve</h3>
              <p className="text-xs text-neutral-400">Vents CO2 pressure at 3.0 mbar while blocking external O2 and moisture ingress.</p>
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
                A <strong>Compostable Kraft Coffee Doypack</strong> is a stand-up pouch made of FSC natural kraft paper laminated with a bio-barrier PLA/PBS inner layer (&lt;1.2 cc/m²/24hr OTR) and equipped with a plant-based one-way degassing valve. Designed for 12 oz (340g) roasted whole beans, it breaks down into organic biomass in home compost within 12 months while meeting EN 13432 and ASTM D6400 global compliance standards.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-amber-500 transition-colors">
            <div className="text-amber-700 font-bold text-xl">🌱 TUV OK Compost Home</div>
            <p className="text-xs text-neutral-600">Certified for home backyard composting. Zero synthetic microplastic residues.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-amber-500 transition-colors">
            <div className="text-amber-700 font-bold text-xl">🛡️ High Bio-Barrier</div>
            <p className="text-xs text-neutral-600">Oxygen barrier OTR &lt;1.2 cc/m²/24hr preserves volatile coffee aromatics for 12+ months.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-amber-500 transition-colors">
            <div className="text-amber-700 font-bold text-xl">💨 Bio Degassing Valve</div>
            <p className="text-xs text-neutral-600">Plant-based PBS valve vents excess CO₂ gas at 3.0 mbar while preventing oxygen backflow.</p>
          </div>
        </section>

        {/* Showcase Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Craft Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed Compostable Kraft Doypack</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring natural FSC brown kraft texture, soy-ink custom printing, bottom gusset stand-up stability, and an integrated plant-based zipper. Ideal for artisanal roasters looking for premium sustainable branding.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 5.9&quot; x 9.1&quot; + 3.1&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">150mm x 230mm + 80mm</span>
              <span className="px-3 py-1 bg-amber-50 border border-amber-200 text-xs text-amber-900 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="Compostable Kraft Coffee Doypack with degassing valve and roasted coffee beans"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Kraft Doypack Pain Points & Engineering Solutions</h2>
            <p className="text-sm text-neutral-600">Solving real-world roastery and packaging line hurdles</p>
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
            &quot;When heat-sealing paper-based compostable laminates, roasters often suffer brittle seal tears due to uneven heat dissipation across thick kraft fibers. We engineered a modified sealing layer featuring a dual-stage melt index PBS alloy. By holding heat-seal temperature at 138°C with a 1.0-second dwell, we achieved a seal strength of &gt;22 N/15mm while maintaining 100% home compost disintegration in 180 days.&quot;
          </blockquote>
          <div className="text-xs text-amber-800 dark:text-amber-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Kraft Coffee Doypack Specification Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">250g (8 oz) Medium</th>
                  <th className="p-4">340g (12 oz) Standard</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">5.1&quot; x 8.1&quot; + 2.6&quot; (130mm x 205mm + 65mm)</td>
                  <td className="p-4 font-mono">5.9&quot; x 9.1&quot; + 3.1&quot; (150mm x 230mm + 80mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Profile</td>
                  <td className="p-4">FSC Kraft / High Barrier PLA-PBS Bio-Film</td>
                  <td className="p-4">FSC Kraft / High Barrier PLA-PBS Bio-Film</td>
                  <td className="p-4">Standard Aluminum Can</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Total Thickness</td>
                  <td className="p-4">5.5 mil (140 microns)</td>
                  <td className="p-4">5.9 mil (150 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Oxygen Permeability (OTR)</td>
                  <td className="p-4">&lt;1.2 cc/m²/24hr @ 23°C 0% RH</td>
                  <td className="p-4">&lt;1.2 cc/m²/24hr @ 23°C 0% RH</td>
                  <td className="p-4">0.0 cc/m²/24hr</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Degassing Valve Type</td>
                  <td className="p-4">100% Bio-PBS Degassing Valve (3.0 mbar)</td>
                  <td className="p-4">100% Bio-PBS Degassing Valve (3.0 mbar)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Certifications</td>
                  <td className="p-4">TUV OK Compost Home, EN 13432, BPI Certified</td>
                  <td className="p-4">TUV OK Compost Home, EN 13432, BPI Certified</td>
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
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Compostable Kraft Doypack" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">12 oz Compostable Kraft Coffee Doypack</h4>
                <p className="text-xs text-neutral-500">Natural FSC paper with bio degassing valve and press-to-close zipper.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-amber-700 hover:text-amber-800">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Bio-PE Flat Bottom Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Bio-PE Sugarcane Coffee Pouch</h4>
                <p className="text-xs text-neutral-500">100% Recyclable #4 PE pouch with EVOH oxygen barrier.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-amber-700 hover:text-amber-800">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Compostable Stand Up Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Kraft Home Compostable Stand-Up Pouch</h4>
                <p className="text-xs text-neutral-500">Versatile 250g Doypack for dry food, tea, and organic snacks.</p>
                <Link to="/store" className="inline-block mt-2 text-xs font-bold text-amber-700 hover:text-amber-800">
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
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Specializes in polyolefin polymer lamination, high-barrier EVOH co-extrusion, and sustainable DTC roastery packaging scaling. Has guided over 500+ global coffee brands from prototype testing to automated VFFS filling lines.
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
        <section className="bg-gradient-to-r from-stone-950 via-neutral-900 to-amber-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-amber-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-mono rounded-full border border-amber-500/30">
              Upgrade to Certified Compostable Packaging
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Compostable Kraft Coffee Sample Kits
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test natural kraft texture, heat seal strength, and plant-based degassing valves on your roastery line.
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
              href="mailto:support@achievepack.com?subject=Compostable%20Kraft%20Coffee%20Pouch%20Sample"
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
              <h3 itemProp="name">What is a Compostable Kraft Coffee Doypack?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A Compostable Kraft Coffee Doypack is an eco-friendly stand-up coffee bag made from FSC natural paper and plant-based PLA/PBS bio-barrier inner lining (&lt;1.2 cc/m²/24hr OTR). It includes a 100% compostable one-way degassing valve and reclosable zipper, certified for home backyard composting under TUV OK Compost Home standards.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default CompostableKraftCoffeeDoypackPage
