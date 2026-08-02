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

const CompostableLooseLeafTeaDoypackPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'compostable loose leaf tea doypack',
    'home compostable tea pouch',
    'kraft paper natureflex loose tea bag',
    'tuv ok compost home tea packaging',
    'essential oil barrier tea doypack',
    'biodegradable herbal tea pouch',
    'zero plastic tea stand up bag',
    'compostable zipper tea pouch'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const painPoints = [
    {
      num: '01',
      problem: 'Loss of Volatile Tea Aromatics & Herbal Essential Oils',
      solution: 'High-grade loose leaf teas (such as Jasmine Green, Earl Grey, and Oolong) lose delicate botanical essential oils through porous bio-plastics. We line unbleached FSC Kraft paper with NatureFlex™ plant-cellulose film, creating an impenetrable aroma barrier that locks in essential oils for 12+ months.',
      icon: <Wind className="h-5 w-5" />
    },
    {
      num: '02',
      problem: 'Tea Leaf Mold & Humidity Ingress in Wet Kitchen Environments',
      solution: 'Ambient steam from boiling water causes tea leaves to absorb moisture, leading to mold growth inside pantries. Our NatureFlex™ barrier maintains a Water Vapor Transmission Rate (WVTR) <1.2 g/m²/24hr, keeping dried leaves bone-dry after every brew.',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      num: '03',
      problem: 'Static Charge Sticking Fine Tea Dust to Inner Pouch Walls',
      solution: 'Synthetic plastic liners build up electrostatic charges, causing fine tea dust and botanical flakes to cling tightly to inner walls when pouring. Our plant-cellulose NatureFlex™ lining is naturally anti-static, ensuring smooth, effortless tea pouring.',
      icon: <Package className="h-5 w-5" />
    },
    {
      num: '04',
      problem: 'Compostable Zipper Failure & Tear Notch Misalignment',
      solution: 'Consumers become frustrated when bio-zippers rip off Kraft paper. We utilize ultrasonic welding to anchor TUV OK Compost HOME bio-zippers directly into the NatureFlex lining, complemented by laser-scored tear notches for clean opening.',
      icon: <RefreshCw className="h-5 w-5" />
    },
    {
      num: '05',
      problem: 'Consumer Skepticism Over "Eco-Friendly" Tea Bag Plastic Claims',
      solution: 'Tea drinkers are acutely aware of microplastic contamination in heat-sealable tea bags. Our Doypacks carry official TUV OK Compost HOME (S0982) and Seedling certification marks printed on the back panel for transparent consumer verification.',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      q: 'How long does a Home Compostable Loose Leaf Tea Doypack take to disintegrate?',
      a: 'Under ambient home composting conditions (20°C–30°C in a garden compost bin), our Kraft / NatureFlex™ pouches fully decompose into rich organic biomass, water, and CO₂ within 12 to 26 weeks, leaving zero chemical residues or microplastics.'
    },
    {
      q: 'Does the plant-cellulose lining preserve delicate tea aromas as well as aluminum foil?',
      a: 'Yes! NatureFlex™ is derived from FSC sustainably harvested wood pulp and provides an aroma and oxygen transmission rate (OTR <1.0 cc/m²/24hr) comparable to traditional foil laminates, shielding complex volatile tea terpenes.'
    },
    {
      q: 'Is the resealable zipper on the tea pouch also home compostable?',
      a: 'Yes. Our press-to-close zippers are extruded from 100% bio-based PBS and PLA polymers that share the exact TUV OK Compost HOME certification as the pouch body.'
    },
    {
      q: 'What sizes are standard for specialty loose leaf tea brands?',
      a: 'Popular sizes include 50g / 1.7 oz (4.3" x 6.7" + 2.4" / 110mm x 170mm + 60mm), 100g / 3.5 oz (5.1" x 7.8" + 2.8" / 130mm x 200mm + 70mm), and 250g / 8.8 oz (6.3" x 9.8" + 3.1" / 160mm x 250mm + 80mm).'
    },
    {
      q: 'What printing options are available for natural Kraft tea pouches?',
      a: 'We offer direct rotogravure and digital printing using non-toxic water-based inks on natural unbleached brown Kraft or bleached white Kraft paper, as well as custom foil stamping.'
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
    headline: 'Compostable Loose Leaf Tea Doypack: Essential Aroma Barrier & Technical Guide',
    description: 'Technical packaging guide on TUV OK Compost HOME certified Kraft paper Doypacks with NatureFlex™ plant-cellulose lining for loose leaf tea and herbal blends.',
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
      title="Compostable Loose Leaf Tea Doypack | Home Compostable Kraft Pouch"
      metaDescription="Certified Home Compostable Kraft paper stand-up Doypack for loose leaf tea and herbal infusions. NatureFlex™ plant-cellulose aroma barrier, anti-static lining, and TUV OK Compost HOME certified."
      keywords={keywords}
      heroTitle="Compostable Loose Leaf Tea Doypack"
      heroSubtitle="FSC Natural Kraft Paper × NatureFlex™ Plant Cellulose Barrier × Anti-Static Inner Lining × TUV OK Compost HOME"
      heroBadge="🍃 100% Home Compostable | TUV OK Compost HOME Certified"
      heroBgColor="#166534"
    >
      <DualDomainSEOHead
        title="Compostable Loose Leaf Tea Doypack | Home Compostable Kraft Pouch"
        description="Home compostable Kraft paper Doypack for specialty loose leaf tea, matcha, and herbal blends. Features NatureFlex cellulose lining, bio-zipper, and 355ml reference scale."
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
                "headline": "Loose Leaf Tea Doypack Packaging Technical Specifications & Lab Parameters",
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
                "name": "How to Customize & Order Loose Leaf Tea Doypack Packaging",
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
          <span className="font-semibold text-neutral-900">Compostable Loose Leaf Tea Doypack</span>
        </nav>

{/* Empathy Hook */}
        <section className="bg-gradient-to-br from-emerald-950 to-green-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Leaf className="w-96 h-96 text-emerald-300" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-emerald-500/30 border border-emerald-400/40 text-emerald-200 text-xs font-mono rounded-full uppercase tracking-wider">
              Specialty Tea Artisan Insight
            </span>
            



<h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              Preserve Delicate Botanical Aromas Without Synthetic Plastic Liners
            </h2>
            <p className="text-emerald-100 leading-relaxed">
              Specialty tea connoisseurs appreciate subtle top notes—from floral bergamot in Earl Grey to toasted umami in Gyokuro green tea. When packed in conventional plastics, essential aroma terpenes diffuse out while synthetic smells leach in.
            </p>
            <p className="text-emerald-200/90 text-sm leading-relaxed">
              Our <strong>Compostable Loose Leaf Tea Doypack</strong> locks in those delicate botanical notes. Crafted from FSC Kraft paper and NatureFlex™ wood-pulp cellulose, it provides an airtight aroma seal while returning to organic soil in home compost bins.
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
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Loose Leaf Tea Doypack.
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
              Inspect & Customize Loose Leaf Tea Doypack Packaging in Interactive 3D
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
                A <strong>Compostable Loose Leaf Tea Doypack</strong> is a stand-up flexible pouch made from FSC Kraft paper laminated with NatureFlex™ plant-cellulose foil. Certified TUV OK Compost HOME (EN 13432), it delivers an essential oil aroma seal (&lt;1.0 cc/m²/24hr OTR), anti-static interior, and reclosable bio-zipper for 50g–250g of loose tea.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-emerald-500 transition-colors">
            <div className="text-emerald-600 font-bold text-xl">🍵 Essential Aroma Shield</div>
            <p className="text-xs text-neutral-600">NatureFlex™ cellulose lining seals in volatile tea terpenes and botanical essential oils for 12+ months.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-emerald-500 transition-colors">
            <div className="text-emerald-600 font-bold text-xl">⚡ Anti-Static Pouring</div>
            <p className="text-xs text-neutral-600">Naturally anti-static plant cellulose prevents fine matcha and tea dust from clinging to inner pouch walls.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-2 hover:border-emerald-500 transition-colors">
            <div className="text-emerald-600 font-bold text-xl">🍂 TUV OK Compost HOME</div>
            <p className="text-xs text-neutral-600">Fully disintegrates in garden compost heaps in 12–26 weeks with zero microplastics or toxins.</p>
          </div>
        </section>

        {/* Hero & Detail Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Visual Packaging Showcase</span>
            <h3 className="text-2xl font-bold text-neutral-900">Custom Printed Compostable 100g Tea Doypack</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Featuring natural unbleached brown Kraft paper, laser-scored tear notches, TUV bio-zipper, and organic matte tactile feel.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">Dimensions: 5.1&quot; x 7.8&quot; + 2.8&quot;</span>
              <span className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 rounded-lg">130mm x 200mm + 70mm</span>
              <span className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 rounded-lg">355ml Can Ref Scale Match</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900">
            <ClickableImage
              src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg"
              alt="Compostable Loose Leaf Tea Doypack next to dried chamomile and green tea leaves"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* 5 Packaging Pain Points & Engineering Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Engineering Resolution Matrix</span>
            <h2 className="text-3xl font-bold text-neutral-900">5 Loose Tea Packaging Pain Points & Solutions</h2>
            <p className="text-sm text-neutral-600">Resolving essential oil loss, static cling, and home compostability</p>
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
            &quot;During aroma retention testing for a UK organic herbal tea merchant, we compared traditional PLA liners against NatureFlex™ NK wood-cellulose film. GC-MS gas chromatography revealed that PLA allowed 42% of volatile citrus limonene terpenes to escape after 60 days, whereas NatureFlex held 98.4% of essential aroma compounds over a 12-month trial.&quot;
          </blockquote>
          <div className="text-xs text-amber-800 dark:text-amber-300 font-semibold pt-2">
            — Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Years Experience | GRS & FSC Certified Auditor)
          </div>
        </section>

        {/* Technical Spec Matrix (Inches First) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Technical Specifications</span>
            <h2 className="text-2xl font-bold text-neutral-900">Compostable Loose Tea Doypack Specification Matrix</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4">50g (1.7 oz) Sample</th>
                  <th className="p-4">100g (3.5 oz) Standard</th>
                  <th className="p-4">Reference 355ml Can</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white text-xs">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Dimensions (WxHxG)</td>
                  <td className="p-4 font-mono">4.3&quot; x 6.7&quot; + 2.4&quot; (110mm x 170mm + 60mm)</td>
                  <td className="p-4 font-mono">5.1&quot; x 7.8&quot; + 2.8&quot; (130mm x 200mm + 70mm)</td>
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
                  <td className="p-4">4.7 mil (120 microns)</td>
                  <td className="p-4">5.1 mil (130 microns)</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">Aroma & Oxygen Barrier (OTR)</td>
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
            <Link to="/store" className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1">
              View Full Store Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Compostable Loose Tea Doypack" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">100g Compostable Loose Tea Doypack</h4>
                <p className="text-xs text-neutral-500">TUV OK Compost HOME Kraft pouch with NatureFlex lining.</p>
                <Link to="/store/product/compostable-tea-doypack" className="inline-block mt-2 text-xs font-bold text-emerald-600 hover:text-emerald-700">
                  Request Sample &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-evoh-lamination-structure.jpg" alt="Compostable Matcha Pouch" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">50g Home Compostable Matcha Pouch</h4>
                <p className="text-xs text-neutral-500">Opaque lightproof Kraft pouch for ceremonial green tea powder.</p>
                <Link to="/store/product/compostable-matcha-pouch" className="inline-block mt-2 text-xs font-bold text-emerald-600 hover:text-emerald-700">
                  Explore Sizes &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/imgs/solutions/bio-pe-coffee-flat-bottom-pouch-hero.jpg" alt="Bio-PE Recyclable Tea Bag" className="w-full h-44 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-neutral-900">Bio-PE Recyclable Tea Bag</h4>
                <p className="text-xs text-neutral-500">Plant-based sugarcane PE pouch for high volume bulk tea packaging.</p>
                <Link to="/store/product/bio-pe-tea-bag" className="inline-block mt-2 text-xs font-bold text-emerald-600 hover:text-emerald-700">
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
              Co-Founder and Chief Packaging Engineer at Achieve Pack. Specialist in natural plant cellulose lamination, botanical essential oil preservation, and TUV OK Compost HOME compliance.
            </p>
            <div className="pt-2">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-bold rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" /> Book a 15-Min Packaging Audit with Ryan
              </button>
            </div>
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-emerald-950 via-neutral-900 to-green-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-emerald-800/40 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-mono rounded-full border border-emerald-500/30">
              Elevate Your Tea Packaging
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get Free Custom Printed Home Compostable Tea Samples
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Test aroma barrier lock-in, anti-static pouring, and bio-zipper performance with your own specialty tea blends.
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
              href="mailto:support@achievepack.com?subject=Compostable%20Tea%20Doypack%20Sample%20Request"
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
              <h3 itemProp="name">What is a Compostable Loose Leaf Tea Doypack?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  A Compostable Loose Leaf Tea Doypack is a stand-up eco bag produced from FSC Kraft paper and NatureFlex™ plant-cellulose lining. Certified TUV OK Compost HOME (EN 13432), it provides an essential aroma seal (&lt;1.0 cc/m²/24hr OTR), anti-static interior, and reclosable bio-zipper for 50g–250g of loose tea.
                </p>
              </div>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}

export default CompostableLooseLeafTeaDoypackPage
