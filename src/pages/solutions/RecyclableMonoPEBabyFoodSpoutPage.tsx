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

const RecyclableMonoPEBabyFoodSpoutPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'recyclable mono pe baby food spout pouch',
    'anti choke safety cap baby puree pouch',
    'bpa free recyclable spouted baby food bag',
    'hot fill mono pe puree pouch',
    'sustainable baby food packaging',
    '100% recyclable #4 pe spouted pouch',
    'evoh barrier baby fruit puree pouch',
    'choke proof cap infant pouch'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Infant Choking Risk from Standard Small Plastic Caps',
      solution: 'Standard narrow fitment caps present severe choking hazards if swallowed by toddlers. We fit every recyclable baby food pouch with large-diameter anti-choke safety caps featuring ventilation air slots that allow airflow even if accidentally ingested, meeting international ISO 8124 child safety standards.',
      icon: <Shield className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Spoilage & Vitamin Loss in Organic Fruit Purees',
      solution: 'Fruit and vegetable purees contain delicate vitamin C and antioxidants that degrade rapidly upon oxygen exposure. Our Mono-PE spouted pouch uses an EVOH co-extruded barrier core layer (<0.5 cc/m²/24hr OTR), preventing browning and nutrient loss without chemical preservatives.',
      icon: <Wind className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Pouch Delamination & Bursting During Hot-Fill Pasteurization',
      solution: 'Hot filling organic puree at 85°C–92°C causes conventional PE films to stretch and warp. We formulate an ultra-pure heat-stabilized HDPE/LLDPE mono-polyolefin structure that maintains seal integrity and spout bond strength under high pasteurization thermal cycles.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Non-Recyclable Multilayer Plastics Causing Brand Backlash',
      solution: 'Legacy baby food pouches combine PET, aluminum foil, and PE, making them impossible to recycle in municipal streams. Our All-PE spouted pouches use 100% polyolefin resin (spout spout + cap + pouch body), certifying them 100% Recyclable in standard #4 PE drop-off programs.',
      icon: <RefreshCw className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Strict Chemical Migration & FDA Infant Safety Regulations',
      solution: 'Parents demand zero chemical leaching. Achieve Pack baby food spouted pouches are manufactured in ISO 22000 / BRCGS AA-rated cleanroom facilities using 100% virgin FDA 21 CFR and EU 10/2011 food-contact resins—100% free of BPA, BPS, phthalates, and heavy metals.',
      icon: <CheckCircle className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: 'How does an All-PE spouted baby food pouch qualify for 100% recycling?',
      a: 'Unlike traditional spouted pouches that fuse polypropylene (PP) spouts onto PET/ALU/PE laminated pouches (creating incompatible mixed polymers), our pouch body, spout fitment, and anti-choke cap are all molded from 100% Polyethylene (PE). The entire assembly melts down seamlessly in standard #4 PE film recycling.'
    },
    {
      q: 'What is an Anti-Choke Safety Cap for baby food pouches?',
      a: 'An Anti-Choke Safety Cap is a wide-diameter (33mm+) cap designed with hollow ventilation slots. Even if a child puts the cap in their mouth, air flows continuously through the open slots, preventing asphyxiation and satisfying strict CPSC and EU child safety regulations.'
    },
    {
      q: 'Can these mono-PE spouted pouches withstand hot-fill pasteurization?',
      a: 'Yes. Our high-density heat-stabilized Mono-PE film and spout fitments support hot-fill processing up to 92°C (197°F) and inline tunnel pasteurization without structural deformation or seal degradation.'
    },
    {
      q: 'What sizes are standard for organic baby food purees?',
      a: 'Standard capacities include 90g / 3.2 oz (3.3" x 5.1" + 2.0" / 85mm x 130mm + 50mm) and 120g / 4.2 oz (3.5" x 5.9" + 2.2" / 90mm x 150mm + 55mm). Custom die-cut shapes (e.g. fruit silhouette borders) are available.'
    },
    {
      q: 'What is the Minimum Order Quantity (MOQ) for custom printed spouted pouches?',
      a: 'For custom printed Mono-PE spouted pouches with pre-welded anti-choke caps, production runs start from 10,000 units on high-speed automated spout insertion lines.'
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
    headline: 'Recyclable Mono-PE Baby Food Spout Pouch: Child Safety & Technical Guide',
    description: 'Engineering breakdown of 100% recyclable Mono-PE spouted pouches with anti-choke safety caps, EVOH high barrier, and hot-fill compatibility for organic baby purees.',
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
      title="Recyclable Mono-PE Baby Food Spout Pouch | Anti-Choke Cap"
      metaDescription="100% Recyclable mono-PE spouted pouch for baby purees and organic fruit mashes. Features anti-choke safety cap, EVOH oxygen barrier, hot-fill pasteurization, and BPA-free safety."
      keywords={keywords}
      heroTitle="Recyclable Mono-PE Baby Food Spout Pouch"
      heroSubtitle="100% Polyethylene Mono-Material × Anti-Choke Safety Cap × EVOH Nutrient Shield × Hot-Fill Ready"
      heroBadge="👶 Anti-Choke Safety Cap | 100% Recyclable #4 PE"
      heroBgColor="#0284c7"
    >
      <DualDomainSEOHead
        title="Recyclable Mono-PE Baby Food Spout Pouch | Anti-Choke Cap"
        description="100% Recyclable mono-PE spouted pouch for baby purees. Features anti-choke safety cap, EVOH nutrient barrier, hot-fill pasteurization, and 355ml reference scale."
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
                "headline": "Recyclable Baby Food Spout Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Recyclable Baby Food Spout Packaging",
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
          <span className="font-semibold text-neutral-900">Mono-PE Baby Food Spout Pouch</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-sky-950 to-blue-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Shield className="w-96 h-96 text-sky-300" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-sky-500/30 border border-sky-400/40 text-sky-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Infant Nutrition Brand Insight
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Uncompromising Infant Safety Meets 100% Circular Recyclability
            </h2>
            <p className="text-sky-100 leading-relaxed">
              When packaging food for babies and toddlers, compromise is not an option. Parents examine every detail—from anti-choke cap designs and BPA-free certifications to whether the pouch will end up in a landfill for 500 years.
            </p>
            <p className="text-sky-200/90 text-sm leading-relaxed">
              Our <strong>Recyclable Mono-PE Baby Food Spout Pouch</strong> resolves both safety and sustainability. Built with 100% Polyethylene (pouch + spout + cap), it withstands 92°C hot-fill pasteurization, seals in organic puree vitamins with EVOH, and recycles cleanly in #4 PE streams.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Recyclable Baby Food Spout.
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
              Inspect & Customize Recyclable Baby Food Spout Packaging in Interactive 3D
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
                src="/imgs/spout-pouch-transparent-1500-1783005719700-89534.png"
                alt="2. 100% PE Recyclable Pour Spout"
                className="w-full h-48 object-cover rounded-xl border border-neutral-700 shadow-md hover:border-emerald-500 transition-all"
              />
              <h3 className="font-semibold text-white text-sm">2. 100% PE Recyclable Pour Spout</h3>
              <p className="text-xs text-neutral-400">Ultrasonic heat-welded PE fitment with tamper-evident screw cap rated for 1.2m drop impact.</p>
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
        <section className="bg-sky-50 border-2 border-sky-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-sky-600 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-sky-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-sky-900 leading-relaxed">
                A <strong>Recyclable Mono-PE Baby Food Spout Pouch</strong> is an all-polyethylene flexible container with a pre-welded mono-PE spout fitment and ventilated anti-choke safety cap. Hot-fill compatible (up to 92°C) with an EVOH nutrient shield (&lt;0.5 cc/m²/24hr OTR), it holds 90g–120g of baby purees and fully recycles in #4 PE store drop-off streams.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-sky-500 transition-colors">
            <div className="text-sky-600 font-bold text-xl">👶 Anti-Choke Safety Cap</div>
            <p className="text-xs text-neutral-600">Wide-diameter ventilated cap meets ISO 8124 and CPSC infant safety guidelines.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-sky-500 transition-colors">
            <div className="text-sky-600 font-bold text-xl">♻️ All-PE Mono-Material</div>
            <p className="text-xs text-neutral-600">Pouch body, spout, and cap are molded from matching PE resins, enabling 100% #4 PE recycling.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-sky-500 transition-colors">
            <div className="text-sky-600 font-bold text-xl">🔥 92°C Hot-Fill Thermal Resistance</div>
            <p className="text-xs text-neutral-600">Heat-stabilized PE film withstands pasteurization without pouch warping or micro-leaks.</p>
          </div>
        </section>

        {/* Hero & Detail Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Visual Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed Mono-PE Spouted Puree Pouch</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Equipped with a top-corner or center-mounted 8.6mm mono-PE spout, ventilated anti-choke safety cap, and vibrant food-grade matte printing.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Capacity: 120g / 4.2 oz</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 3.5&quot; x 5.9&quot; + 2.2&quot; (90mm x 150mm + 55mm)</span>
              <span className="px-3 py-1 bg-sky-50 border border-sky-200 text-xs text-sky-800 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="Recyclable Mono-PE Baby Food Spout Pouch with anti choke safety cap"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Baby Puree Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">Addressing child safety, pasteurization, and mono-material recycling</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4 border border-neutral-800 flex flex-col justify-between hover:border-sky-500 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-sky-400 font-mono">{item.num}</span>
                    <div className="p-2 bg-sky-950 text-sky-400 rounded-xl border border-sky-800/50">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-neutral-100 leading-snug">{item.problem}</h3>
                </div>
                <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700/60 mt-4 space-y-1">
                  <div className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1">
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
            &quot;Welding polyolefin spouts to multi-layer Mono-PE films without causing heat burn-through is a major engineering hurdle. During a trial for an organic apple-strawberry puree brand, we redesigned the spout base flange with a dual-radiused sealing wing. By applying ultrasonic pre-sealing at 35 kHz followed by impulse thermal sealing, we achieved zero spout leak failures across 250,000 hot-filled production units.&quot;
          </blockquote>
          <div className="text-xs text-amber-800 dark:text-amber-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Mono-PE Baby Food Spout Specification Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">90g (3.2 oz) Puree Pouch</th>
                  <th className="p-4">120g (4.2 oz) Standard</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">3.3&quot; x 5.1&quot; + 2.0&quot; (85mm x 130mm + 50mm)</td>
                  <td className="p-4 font-mono">3.5&quot; x 5.9&quot; + 2.2&quot; (90mm x 150mm + 55mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Profile</td>
                  <td className="p-4">Mono-PE / EVOH / PE (100% Recyclable #4)</td>
                  <td className="p-4">Mono-PE / EVOH / PE (100% Recyclable #4)</td>
                  <td className="p-4">Standard Aluminum Can</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Total Thickness</td>
                  <td className="p-4">4.7 mil (120 microns)</td>
                  <td className="p-4">5.1 mil (130 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Spout & Cap Material</td>
                  <td className="p-4">100% Food-Grade HDPE (Anti-Choke Ventilated)</td>
                  <td className="p-4">100% Food-Grade HDPE (Anti-Choke Ventilated)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Thermal Resistance</td>
                  <td className="p-4">Hot-Fill up to 92°C (197°F)</td>
                  <td className="p-4">Hot-Fill up to 92°C (197°F)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Certifications</td>
                  <td className="p-4">ISO 8124 Child Safety, BRCGS, FDA 21 CFR</td>
                  <td className="p-4">ISO 8124 Child Safety, BRCGS, FDA 21 CFR</td>
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
            <Link to="/store" className="text-xs font-bold text-sky-600 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Recyclable Baby Food Spout Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">120g Mono-PE Baby Spout Pouch</h4>
                <p className="text-xs text-neutral-500">100% Recyclable PE pouch with anti-choke safety cap.</p>
                <Link to="/store/product/mono-pe-baby-spout-pouch" className="inline-block mt-2 text-xs font-bold text-sky-600 hover:text-sky-700">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Compostable Spouted Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Home Compostable Spouted Pouch</h4>
                <p className="text-xs text-neutral-500">Plant-cellulose spouted bag for organic fruit smoothies.</p>
                <Link to="/store/product/compostable-spout-pouch" className="inline-block mt-2 text-xs font-bold text-sky-600 hover:text-sky-700">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Clear Spouted Liquid Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Clear High-Barrier Liquid Pouch</h4>
                <p className="text-xs text-neutral-500">Transparent spouted pouch for cold-pressed juices and beverages.</p>
                <Link to="/store/product/clear-liquid-spout-pouch" className="inline-block mt-2 text-xs font-bold text-sky-600 hover:text-sky-700">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Frequently Asked Questions</span>
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
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-sky-500 flex-shrink-0 bg-neutral-800 flex items-center justify-center text-sky-400 font-bold text-2xl">
            RW
          </div>
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <h4 className="text-lg font-bold text-white">Ryan Wong</h4>
              <span className="px-2 py-0.5 bg-sky-500/20 text-sky-400 text-xs rounded border border-sky-500/40">
                14+ Yrs Packaging Engineering
              </span>
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700">
                GRS & FSC Certified Auditor
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Specialist in mono-material polyolefin spout welding, infant child-safety fitments, and sterile hot-fill packaging line engineering.
            </p>
            <div className="pt-2">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Packaging Audit with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-sky-950 via-neutral-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-sky-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-sky-500/20 text-sky-300 text-xs font-mono rounded-full border border-sky-500/30">
              Elevate Your Baby Food Packaging
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Custom Printed Recyclable Baby Spout Samples
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test hot-fill performance, anti-choke safety caps, and mono-PE seal strength on your own filling equipment.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={openCalendly}
              className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-neutral-950 font-bold text-sm rounded-xl transition-colors shadow-lg shadow-sky-950/50"
            >
              Schedule Engineering Consultation
            </button>
            <a
              href="mailto:support@achievepack.com?subject=Recyclable%20Baby%20Spout%20Pouch%20Sample%20Request"
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
              <h3 itemProp="name">What is a Recyclable Mono-PE Baby Food Spout Pouch?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A Recyclable Mono-PE Baby Food Spout Pouch is a 100% Polyethylene spouted pouch fitted with a child-safe ventilated anti-choke cap. Designed for hot-filled organic purees (up to 92°C), it incorporates an EVOH oxygen shield (&lt;0.5 cc/m²/24hr) and recycles completely in standard #4 PE film streams.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default RecyclableMonoPEBabyFoodSpoutPage
