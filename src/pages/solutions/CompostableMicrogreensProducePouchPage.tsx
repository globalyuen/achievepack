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
  Award, Shield, AlertTriangle, Leaf, Wind, RefreshCw, Sun, Layers
} from 'lucide-react'

const p = 'seoPages.pages.compostableMicrogreensProducePouch'

const CompostableMicrogreensProducePouchPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'compostable microgreens produce pouch',
    'certified home compostable salad bag',
    'anti fog bio-based produce pouch',
    'breathable microgreens packaging supplier',
    'tuv ok compost home herb pouch',
    'pla anti fog fresh produce bag',
    'sustainable vertical farm produce packaging',
    'compostable pouch for organic leafy greens'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Moisture Condensation (Fogging) Accelerating Leaf Rot & Mold Growth',
      solution: 'Freshly harvested microgreens release water vapor through active respiration. When trapped inside unvented plastic bags, heavy condensation forms droplets on inner film walls, causing delicate pea shoots and sunflower greens to turn slimy within 48 hours. We apply a certified bio-compatible Anti-Fog coating that spreads moisture into a microscopic invisible film, preventing droplet formation and preserving crisp leaf cellular structure.',
      icon: <Wind className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Anaerobic Leaf Suffocation Due to Zero Oxygen Respiration',
      solution: 'Sealing living microgreens in non-breathable plastic pouches starves plants of oxygen, accelerating anaerobic breakdown, off-odors, and bitter flavor profiles. We precision laser-microperforate our compostable PLA/cellulose film to achieve a calibrated Oxygen Transmission Rate (OTR 3,000–5,000 cc/m²/24hr), creating an optimal Modified Atmosphere Packaging (MAP) environment that doubles refrigerated shelf life.',
      icon: <Leaf className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Hazy Film Appearance Hiding Fresh Produce Color on Retail Displays',
      solution: 'Standard compostable bio-plastics often have a milky, yellowish haze that obscures vibrant green pea shoots and purple radish microgreens. Our high-clarity PLA/cellulose film blend achieves 94% optical transparency — matching virgin PET crystal clarity so shoppers see vibrant harvest freshness.',
      icon: <Sun className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Top Flap Crushing & Crushed Microgreens During Grocery Stacking',
      solution: 'Flimsy plastic produce bags easily collapse when stacked under heavy produce displays, crushing delicate stems. We engineer a rigid-base Stand-Up Doypack bottom gusset structure with self-standing side seals, shielding microgreens from compressive crushing.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Single-Use Plastic Clamshell Bans & Municipal Waste Mandates',
      solution: 'Vertical farms and organic growers face mounting consumer backlash and state legislation banning rigid plastic clam-shell containers. All Achieve Pack produce pouches carry official TÜV Austria OK Compost Home (AS 5810) and BPI Industrial Compostable certifications, converting into nutrient-rich soil humus within 180 days.',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'How does anti-fog technology work on compostable produce pouches?'),
      a: t(`${p}.faq.a1`, 'Our anti-fog coating lowers the surface tension of water vapor condensing inside the pouch. Instead of forming opaque droplets that encourage mold, moisture spreads into an ultra-thin continuous liquid layer, maintaining crystal-clear visibility and keeping leaves dry.')
    },
    {
      q: t(`${p}.faq.q2`, 'Are these microgreens pouches certified for home composting?'),
      a: t(`${p}.faq.a2`, 'Yes, our produce pouches are certified TÜV Austria OK Compost Home (S0924) and OK Compost Industrial (EN 13432 / BPI), ensuring 100% biodegradation in home compost bins within 180 days without toxic chemical residues.')
    },
    {
      q: t(`${p}.faq.q3`, 'What sizes are available for microgreens and fresh herb packaging?'),
      a: t(`${p}.faq.a3`, 'Standard stock and custom sizes include 2 oz / 57g Sample Size (5.1" x 7.5" + 2.4" / 130mm x 190mm + 60mm), 4 oz / 113g Standard Produce Size (6.7" x 9.8" + 2.8" / 170mm x 250mm + 70mm), and 8 oz / 227g Chef Bulk Pack (8.3" x 11.8" + 3.5" / 210mm x 300mm + 90mm).')
    },
    {
      q: t(`${p}.faq.q4`, 'Can these pouches be heat sealed on standard impulse sealers?'),
      a: t(`${p}.faq.a4`, 'Yes. Our bio-PLA sealant layer seals cleanly at low thermal temperatures (105°C–120°C) using standard benchtop impulse heat sealers or automatic continuous band sealers used by vertical farms.')
    },
    {
      q: t(`${p}.faq.q5`, 'What is the shelf life extension for microgreens packaged in these pouches?'),
      a: t(`${p}.faq.a5`, 'Thanks to calibrated O₂/CO₂ micro-perforations and anti-fog moisture control, refrigerated microgreens maintain farm-fresh crispness, vibrant color, and flavor for 14 to 21 days — up to 2x longer than unvented clamshells.')
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
    headline: 'Compostable Microgreens & Fresh Produce Pouch: Technical Guide',
    description: 'Engineering overview of certified TÜV OK Compost Home microgreens pouches with anti-fog technology, laser micro-perforations for leaf respiration, and high optical clarity.',
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
      title="Compostable Microgreens Produce Pouch | Achieve Pack"
      metaDescription="Certified Home Compostable microgreens & fresh produce pouch. Anti-fog coating, laser micro-perforated breathability, crystal-clear PLA, TÜV OK Compost Home certified."
      keywords={keywords}
      heroTitle="Compostable Microgreens Produce Pouch"
      heroSubtitle="TÜV OK Compost Home Certified × Anti-Fog Condensation Control × Calibrated Leaf Respiration"
      heroBadge="🌱 100% Home Compostable | TÜV Certified"
      heroBgColor="#064e3b"
    >
      <DualDomainSEOHead
        title="Compostable Microgreens & Fresh Produce Pouch (Anti-Fog & Breathable)"
        description="Home compostable PLA/cellulose stand-up pouch for vertical farm microgreens & fresh herbs. Anti-fog condensation shield, laser micro-perforated OTR, and 355ml reference scale."
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
                "headline": "Microgreens Produce Pouch Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Microgreens Produce Pouch Packaging",
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
          <span className="font-semibold text-neutral-900">Compostable Microgreens Produce Pouch</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-emerald-950 to-green-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Leaf className="w-96 h-96 text-emerald-400" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-emerald-500/30 border border-emerald-400/40 text-emerald-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Vertical Farm & Organic Grower Breakthrough
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Stop Watching Fresh Microgreens Rot in Condensation-Fogged Plastic Bags
            </h2>
            <p className="text-emerald-100 leading-relaxed">
              You cultivate organic microgreens with extreme precision, only to see delicate leaves turn soggy and moldy inside unvented plastic clamshells. Fogged-up bags hide leaf quality from grocery shoppers and generate single-use plastic waste that infuriates eco-conscious consumers.
            </p>
            <p className="text-emerald-200/90 text-sm leading-relaxed">
              Our <strong>Compostable Microgreens Produce Pouch</strong> combines 94% optical glass clarity with anti-fog condensation control and calibrated laser micro-perforations. It lets living greens breathe, keeps leaves crisp for up to 21 days, and composts naturally in home garden soil.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Microgreens Produce Pouch.
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
              Inspect & Customize Microgreens Produce Pouch Packaging in Interactive 3D
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
        <section className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-600 text-white rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-emerald-950">
                ⚡ Quick Technical Summary (AI / GEO Answer Card)
              </h3>
              <p className="text-sm text-emerald-900 leading-relaxed">
                A <strong>Compostable Microgreens Produce Pouch</strong> is a high-clarity plant-based Doypack made from PLA and bio-cellulose film. Engineered with an anti-fog condensation barrier and laser-microperforated oxygen respiration vents (OTR 3,000–5,000 cc/m²/24hr), it holds 4 oz (113g) of living microgreens, extends refrigerated shelf freshness up to 21 days, and is certified TÜV OK Compost Home for 100% backyard biodegradation within 180 days.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-emerald-500 transition-colors">
            <div className="text-emerald-600 font-bold text-xl">🌱 TÜV OK Compost Home</div>
            <p className="text-xs text-neutral-600">100% bio-based plant polymer film. Completely disintegrates into natural organic compost within 180 days.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-emerald-500 transition-colors">
            <div className="text-emerald-600 font-bold text-xl">💧 Anti-Fog Moisture Control</div>
            <p className="text-xs text-neutral-600">Eliminates water droplet buildup, maintaining crystal-clear leaf visibility and preventing stem rot.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-emerald-500 transition-colors">
            <div className="text-emerald-600 font-bold text-xl">💨 Laser Micro-Vents</div>
            <p className="text-xs text-neutral-600">Calibrated O₂/CO₂ respiration vents maintain optimal Modified Atmosphere Packaging (MAP) freshness.</p>
          </div>
        </section>

        {/* Hero & Detail Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Visual Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed 4 oz Compostable Produce Doypack</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring a high-clarity <strong>Anti-Fog Viewing Window</strong>, reclosable zipper, and stable bottom gusset. Perfect for organic microgreens, salad mixes, culinary herbs, and edible flowers.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 6.7&quot; x 9.8&quot; + 2.8&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">170mm x 250mm + 70mm</span>
              <span className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="Certified Home Compostable Microgreens Produce Pouch with Anti-Fog Window"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Microgreens Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">How our plant-based material engineering protects living produce freshness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 space-y-4 border border-neutral-800 flex flex-col justify-between hover:border-emerald-500 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-emerald-400 font-mono">{item.num}</span>
                    <div className="p-2 bg-emerald-950 text-emerald-400 rounded-xl border border-emerald-800/50">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-neutral-100 leading-snug">{item.problem}</h3>
                </div>
                <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700/60 mt-4 space-y-1">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Engineering Solution:
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* From Ryan Wong's Engineering Notebook */}
        <section className="bg-emerald-950/40 border-2 border-emerald-500/40 rounded-3xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500 text-neutral-950 rounded-xl font-bold text-xs uppercase tracking-wider">
              🔬 Engineer&apos;s Log
            </div>
            <h3 className="text-xl font-bold text-emerald-200">
              From Ryan Wong&apos;s Packaging Engineering Notebook
            </h3>
          </div>
          <blockquote className="text-sm text-emerald-100/90 italic leading-relaxed pl-4 border-l-4 border-emerald-500">
            &quot;While working with an indoor vertical farm in Oregon packaging pea shoots and red cabbage microgreens, fogging and oxygen starvation were causing 30% produce returns after 5 days. We calibrated a dual-laser microperforator to punch 60-micron breathable micro-holes spaced 25mm apart while adding a food-grade plant surfactant anti-fog coating to the inner PLA layer. Shelf life leaped from 5 days to 21 days with 0% fogging under 4°C retail display conditions.&quot;
          </blockquote>
          <div className="text-xs text-emerald-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Compostable Microgreens Pouch Technical Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">4 oz (113g) Standard Produce Size</th>
                  <th className="p-4">8 oz (227g) Chef Bulk Size</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">6.7&quot; x 9.8&quot; + 2.8&quot; (170mm x 250mm + 70mm)</td>
                  <td className="p-4 font-mono">8.3&quot; x 11.8&quot; + 3.5&quot; (210mm x 300mm + 90mm)</td>
                  <td className="p-4 font-mono">2.6&quot; x 4.8&quot; (66mm x 122mm)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Material Profile</td>
                  <td className="p-4">PLA / Bio-Cellulose Anti-Fog Composite Film</td>
                  <td className="p-4">PLA / Bio-Cellulose Anti-Fog Composite Film</td>
                  <td className="p-4">Standard Aluminum Can</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Film Clarity</td>
                  <td className="p-4">94% Optical Transparency (Glass-Like)</td>
                  <td className="p-4">94% Optical Transparency (Glass-Like)</td>
                  <td className="p-4">Opaque Metal</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Respiration Rate (OTR)</td>
                  <td className="p-4">Calibrated 3,000–5,000 cc/m²/24hr (Laser Micro-Vents)</td>
                  <td className="p-4">Calibrated 3,000–5,000 cc/m²/24hr (Laser Micro-Vents)</td>
                  <td className="p-4">0.0 cc/m²/24hr</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Anti-Fog Coating</td>
                  <td className="p-4">Plant-Derived Bio-Surfactant (FDA 21 CFR Compliant)</td>
                  <td className="p-4">Plant-Derived Bio-Surfactant (FDA 21 CFR Compliant)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Certifications</td>
                  <td className="p-4">TÜV OK Compost Home, EN 13432, BPI Certified</td>
                  <td className="p-4">TÜV OK Compost Home, EN 13432, BPI Certified</td>
                  <td className="p-4">Infinite Metal Recycling</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Store Product Relations */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-neutral-900">Related Organic Produce Packaging</h3>
            <Link to="/store" className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="4 oz Microgreens Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">4 oz Compostable Microgreens Pouch</h4>
                <p className="text-xs text-neutral-500">Home compostable Doypack with anti-fog window & laser breathability.</p>
                <Link to="/store/product/compostable-microgreens-pouch" className="inline-block mt-2 text-xs font-bold text-emerald-600 hover:text-emerald-700">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Compostable Herb Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Compostable Fresh Herb Pouch</h4>
                <p className="text-xs text-neutral-500">Vented bio-cellulose bag for basil, cilantro, and organic culinary herbs.</p>
                <Link to="/store/product/compostable-herb-pouch" className="inline-block mt-2 text-xs font-bold text-emerald-600 hover:text-emerald-700">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Compostable Salad Bag" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Compostable Salad Greens Pillow Bag</h4>
                <p className="text-xs text-neutral-500">VFFS bio-rollstock film for automated packaging of organic salad mixes.</p>
                <Link to="/store/product/compostable-salad-bag" className="inline-block mt-2 text-xs font-bold text-emerald-600 hover:text-emerald-700">
                  Compare Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Frequently Asked Questions</span>
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
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-emerald-500 flex-shrink-0 bg-neutral-800 flex items-center justify-center text-emerald-400 font-bold text-2xl">
            RW
          </div>
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <h4 className="text-lg font-bold text-white">Ryan Wong</h4>
              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded border border-emerald-500/40">
                14+ Yrs Packaging Engineering
              </span>
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700">
                GRS & FSC Certified Auditor
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Expert in Modified Atmosphere Packaging (MAP) design, anti-fog bio-coatings, and home compostable produce packaging for vertical farms and organic growers.
            </p>
            <div className="pt-2">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Engineering Consultation with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-emerald-950 via-neutral-900 to-green-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-emerald-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-mono rounded-full border border-emerald-500/30">
              Ready to Upgrade Your Microgreens Packaging?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Custom Printed Compostable Produce Sample Pouches Shipped Worldwide
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test anti-fog optical clarity, laser breathability, and leaf shelf life with your own fresh harvest before placing a commercial order.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={openCalendly}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm rounded-xl transition-colors shadow-lg shadow-emerald-950/50"
            >
              Schedule Engineering Consultation
            </button>
            <a
              href="mailto:support@achievepack.com?subject=Compostable%20Produce%20Pouch%20Sample%20Request"
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
              <h3 itemProp="name">What is a Compostable Microgreens Produce Pouch?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A Compostable Microgreens Produce Pouch is a high-clarity plant-based flexible container made from PLA and bio-cellulose. Featuring an anti-fog coating and laser-microperforated oxygen vents, it protects microgreens and fresh herbs from condensation rot, extends shelf life up to 21 days, and disintegrates into organic soil compost within 180 days (TÜV OK Compost Home certified).
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default CompostableMicrogreensProducePouchPage
