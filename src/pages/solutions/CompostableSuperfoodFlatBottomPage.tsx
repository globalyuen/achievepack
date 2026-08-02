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

const CompostableSuperfoodFlatBottomPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'compostable superfood flat bottom pouch',
    'home compostable powder pouch',
    'certified compostable matcha bag',
    'tuv ok compost home superfood packaging',
    'plant cellulose flat bottom box pouch',
    'compostable collagen powder packaging',
    'kraft compostable spirulina pouch',
    'biodegradable nutritional powder pouch'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'High-Value Superfood Powders Clumping Due to Moisture Leakage',
      solution: 'Hygroscopic superfood powders (like ceremonial matcha and organic maca) absorb atmospheric moisture instantly, clumping into hard lumps. We laminate FSC-certified Kraft paper with a NatureFlex™ bio-cellulose high-barrier layer, achieving WVTR <1.0 g/m²/24hr to guarantee 12-month powder flowability.',
      icon: <Wind className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Chlorophyll Degradation & Color Fading Under Ambient Light',
      solution: 'Sensitive green superfoods like spirulina and wheatgrass degrade when exposed to UV light, turning dull brown. Our opaque multi-layer compostable paper structure provides 100% light blockage, preserving natural phytonutrient potency and rich color.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Messy Filling & Scoop Frustration in Narrow Gusset Bags',
      solution: 'Consumers hate digging powder out of narrow pouches with short scoops, getting powder on their knuckles. Our 5-panel box flat bottom pouch provides a wide 3.5" (90mm) square top opening for easy scooping without mess.',
      icon: <Package className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Compostable Zipper Delamination During Repeated Daily Opening',
      solution: 'Low-quality bio-zippers break away from pouch walls after a week of daily use. We apply specialized ultrasonic heat-sealing parameters to fuse TUV-certified PLA bio-zippers directly into the NatureFlex™ lining, rated for over 300 open-close cycles.',
      icon: <RefreshCw className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Misleading "Biodegradable" Labeling & Retail Certification Audits',
      solution: 'Unverified eco packaging faces strict enforcement under FTC and EU directives. Every Achieve Pack compostable pouch carries official TUV OK Compost HOME (S0982) and Seedling EN 13432 certification numbers printed directly on the bottom gusset.',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: 'What does TUV OK Compost HOME certification mean for superfood pouches?',
      a: 'TUV OK Compost HOME certification guarantees that the pouch completely disintegrates and biodegrades into non-toxic water, CO₂, and biomass in a garden compost heap within 12 to 26 weeks at ambient temperatures (20°C–30°C), leaving zero microplastics.'
    },
    {
      q: 'Can a home compostable pouch effectively protect sensitive superfood powders?',
      a: 'Yes! By using NatureFlex™ plant-cellulose film derived from sustainably managed wood pulp, our compostable pouches match traditional aluminum foil laminates in light blockage and deliver an oxygen transmission rate (OTR) under 1.0 cc/m²/24hr.'
    },
    {
      q: 'Is the reclosable zipper on the flat bottom pouch also 100% compostable?',
      a: 'Yes. Our press-to-close zippers are extruded from 100% bio-based PBS (Polybutylene Succinate) and PLA resins that hold identical TUV OK Compost HOME certification as the pouch film body.'
    },
    {
      q: 'What capacities are available for superfood powders?',
      a: 'Popular sizes include 100g / 3.5 oz (3.9" x 5.9" + 2.4" / 100mm x 150mm + 60mm), 250g / 8.8 oz (4.9" x 7.8" + 3.1" / 125mm x 200mm + 80mm), and 500g / 17.6 oz (5.9" x 9.8" + 3.5" / 150mm x 250mm + 90mm).'
    },
    {
      q: 'What printing options are available for compostable superfood pouches?',
      a: 'We use non-toxic, water-based or soy-based inks that do not inhibit soil compostability. Options include matte natural brown Kraft, bleached white Kraft, or full-coverage custom graphics.'
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
    headline: 'Compostable Superfood Flat Bottom Pouch: Technical Specification & Compliance Guide',
    description: 'Detailed packaging guide on TUV OK Compost HOME certified flat bottom pouches for ceremonial matcha, maca, collagen, and organic superfoods.',
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
      title="Compostable Superfood Flat Bottom Pouch | TUV OK Compost Home"
      metaDescription="Certified Home & Industrial Compostable flat bottom box pouch for superfood powders. NatureFlex™ plant-cellulose high barrier, easy-scoop box opening, TUV OK Compost HOME certified."
      keywords={keywords}
      heroTitle="Compostable Superfood Flat Bottom Pouch"
      heroSubtitle="TUV OK Compost HOME Certified × NatureFlex™ Plant Cellulose Barrier × FSC Kraft Paper × Easy-Scoop Box Opening"
      heroBadge="🍃 100% Home Compostable | TUV OK Compost HOME Certified"
      heroBgColor="#15803d"
    >
      <DualDomainSEOHead
        title="Compostable Superfood Flat Bottom Pouch | TUV OK Compost Home"
        description="Home compostable flat bottom box pouch for matcha, maca, spirulina, and collagen powders. Features NatureFlex cellulose lining, wide opening, and 355ml reference scale."
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
                "headline": "Superfood Flat Bottom Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Superfood Flat Bottom Packaging",
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
          <span className="font-semibold text-neutral-900">Compostable Superfood Flat Bottom Pouch</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-green-950 to-emerald-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Leaf className="w-96 h-96 text-green-300" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-green-500/30 border border-green-400/40 text-green-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Wellness & Superfood Founder Insight
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Zero Plastics for Pure Superfood Powders
            </h2>
            <p className="text-green-100 leading-relaxed">
              Your wellness customers buy ceremonial matcha and organic collagen to nourish their bodies. Packaging those clean, pure powders in synthetic petroleum pouches creates an uncomfortable disconnect between your product ethos and your environmental footprint.
            </p>
            <p className="text-green-200/90 text-sm leading-relaxed">
              Our <strong>Compostable Superfood Flat Bottom Pouch</strong> bridges that gap seamlessly. Crafted from renewable FSC Kraft paper and NatureFlex™ wood pulp film, it breaks down into organic soil in home compost heaps while keeping powders bone-dry and fresh.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Superfood Flat Bottom.
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
              Inspect & Customize Superfood Flat Bottom Packaging in Interactive 3D
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
            <div className="p-3 bg-green-600 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-green-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-green-900 leading-relaxed">
                A <strong>Compostable Superfood Flat Bottom Pouch</strong> is a 5-panel box-style flexible container constructed from FSC Kraft paper and NatureFlex™ plant-cellulose foil. Certified TUV OK Compost HOME (EN 13432), it provides an oxygen barrier (&lt;1.0 cc/m²/24hr) and wide scoop-friendly opening for 100g–500g of superfood powders, fully decomposing into natural soil within 26 weeks.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-green-500 transition-colors">
            <div className="text-green-600 font-bold text-xl">🍂 100% Home Compostable</div>
            <p className="text-xs text-neutral-600">TUV OK Compost HOME certified. Breaks down in ambient garden soil in 12–26 weeks with zero toxins.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-green-500 transition-colors">
            <div className="text-green-600 font-bold text-xl">🛡️ NatureFlex™ Moisture & O₂ Barrier</div>
            <p className="text-xs text-neutral-600">Plant-cellulose barrier layer prevents hygroscopic superfood powder clumping for 12+ months.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-green-500 transition-colors">
            <div className="text-green-600 font-bold text-xl">📦 Wide Box Opening Geometry</div>
            <p className="text-xs text-neutral-600">Flat bottom 5-panel box structure enables effortless scoop insertion without powder mess.</p>
          </div>
        </section>

        {/* Hero & Detail Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Visual Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed Compostable 250g Flat Bottom Superfood Bag</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring natural unbleached FSC Kraft paper, TUV bio-zipper, plant-based water inks, and rock-solid shelf stability.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 4.9&quot; x 7.8&quot; + 3.1&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">125mm x 200mm + 80mm</span>
              <span className="px-3 py-1 bg-green-50 border border-green-200 text-xs text-green-800 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="Compostable Superfood Flat Bottom Pouch with ceremonial matcha powder"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Superfood Powder Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">Solving clumping, UV protection, and home compostability challenges</p>
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
            &quot;When testing home-compostable barrier films for an organic spirulina brand in California, we found standard PLA bio-plastics became brittle and cracked along side gussets in dry climates. We switched to a customized NatureFlex™ NK cellulose formulation plasticized with plant-derived polyols. Puncture resistance doubled, and light transmission dropped to 0%, preserving active phycocyanin levels for over 18 months.&quot;
          </blockquote>
          <div className="text-xs text-amber-800 dark:text-amber-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Compostable Superfood Pouch Specification Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">100g (3.5 oz) Small</th>
                  <th className="p-4">250g (8.8 oz) Standard</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">3.9&quot; x 5.9&quot; + 2.4&quot; (100mm x 150mm + 60mm)</td>
                  <td className="p-4 font-mono">4.9&quot; x 7.8&quot; + 3.1&quot; (125mm x 200mm + 80mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Profile</td>
                  <td className="p-4">Kraft Paper / NatureFlex™ NK / Bio-PBS Sealant</td>
                  <td className="p-4">Kraft Paper / NatureFlex™ NK / Bio-PBS Sealant</td>
                  <td className="p-4">Standard Aluminum Can</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Total Thickness</td>
                  <td className="p-4">5.1 mil (130 microns)</td>
                  <td className="p-4">5.5 mil (140 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Oxygen Transmission (OTR)</td>
                  <td className="p-4">&lt;1.0 cc/m²/24hr @ 23°C 0% RH</td>
                  <td className="p-4">&lt;1.0 cc/m²/24hr @ 23°C 0% RH</td>
                  <td className="p-4">0.0 cc/m²/24hr</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Zipper Closure</td>
                  <td className="p-4">TUV Certified Home Compostable Bio-Zipper</td>
                  <td className="p-4">TUV Certified Home Compostable Bio-Zipper</td>
                  <td className="p-4">Pull-Tab Top</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Certifications</td>
                  <td className="p-4">TUV OK Compost HOME, Seedling EN 13432, FSC</td>
                  <td className="p-4">TUV OK Compost HOME, Seedling EN 13432, FSC</td>
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
            <Link to="/store" className="text-xs font-bold text-green-600 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Compostable Superfood Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">250g Compostable Superfood Box Pouch</h4>
                <p className="text-xs text-neutral-500">TUV OK Compost HOME Kraft paper pouch with bio-zipper.</p>
                <Link to="/store/product/compostable-superfood-pouch" className="inline-block mt-2 text-xs font-bold text-green-600 hover:text-green-700">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Compostable Matcha Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">100g Ceremonial Matcha Pouch</h4>
                <p className="text-xs text-neutral-500">Lightproof NatureFlex™ lining keeps green tea powder vivid & fresh.</p>
                <Link to="/store/product/compostable-matcha-pouch" className="inline-block mt-2 text-xs font-bold text-green-600 hover:text-green-700">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Bio-PE Powder Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Bio-PE Recyclable Powder Bag</h4>
                <p className="text-xs text-neutral-500">Plant-based sugarcane PE pouch for high volume protein powders.</p>
                <Link to="/store/product/bio-pe-powder-bag" className="inline-block mt-2 text-xs font-bold text-green-600 hover:text-green-700">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Frequently Asked Questions</span>
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
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Expert in plant cellulose barrier films, bio-polymer formulation, and home-compostable packaging compliance for health and wellness brands.
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
              Transform Your Superfood Packaging
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Custom Printed Home Compostable Samples
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test NatureFlex barrier performance, bio-zipper durability, and compostability on your own products.
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
              href="mailto:support@achievepack.com?subject=Compostable%20Superfood%20Pouch%20Sample%20Request"
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
              <h3 itemProp="name">What is a Compostable Superfood Flat Bottom Pouch?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A Compostable Superfood Flat Bottom Pouch is a 5-panel box-style eco container made from FSC Kraft paper and NatureFlex™ plant cellulose film. Certified TUV OK Compost HOME, it protects matcha, maca, spirulina, and collagen powders from moisture and oxygen while breaking down naturally in home compost heaps within 26 weeks.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default CompostableSuperfoodFlatBottomPage
