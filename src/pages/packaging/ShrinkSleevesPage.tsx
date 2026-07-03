import React, { useState } from 'react'
import { Package, Leaf, Shield, CheckCircle, Zap, Award, ChevronDown, ChevronLeft, ChevronRight, X, Heart, HelpCircle, Sparkles, MessageCircle, BookOpen, Target, Calendar, Phone, Mail, Factory, BarChart3, ArrowLeftRight, ShoppingBag, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { isPouch, getBrandConfig } from '../../utils/domain'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import ClickableImage from '../../components/ClickableImage'

const ShrinkSleevesPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { openCalendly } = useCalendly()

  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)

  const b2cHeaders = [
    "Application Type", "Shrink Material", "Shrinkage Rate", "Ideal Use Case"
  ];

  const b2cRows = [
    ["Full-Body Sleeve", "PET-G / PVC", "Up to 78%", "360-degree branding on contoured juice, beverage, and dairy bottles"],
    ["Neck Band & Seal", "PET / PVC", "Up to 60%", "Tamper-evident neck seals, hot-fill sauces, and cosmetic jars"],
    ["Multipacks / Combo", "PET-G", "Up to 70%", "Bogo promotional bundles, twin-packs, and multi-tier product packs"],
    ["Pre-forms", "PET-G", "Up to 75%", "Pre-shaped cap/neck sleeves for high-volume automated line speeds"]
  ];

  const b2cFaqs = [
    { 
      question: 'Is PET shrink sleeve packaging recyclable?', 
      answer: 'Yes! PET (Polyethylene Terephthalate) is recognized as Recyclable #1 (♻️ 1), the most widely recycled plastic resin globally. For optimal sorting in municipal recycling facilities, we recommend using floatable inks or perforations so consumers can easily peel off the sleeve before recycling the bottle.' 
    },
    { 
      question: 'What is the main difference between PET and PVC shrink sleeves?', 
      answer: 'PET-G offers superior shrinkage control (up to 78%), excellent clarity, and is highly recyclable (#1). PVC is a more cost-effective option with standard shrinkage properties (50-60%), but is less environmentally friendly and harder to process in municipal recycling lines.' 
    },
    { 
      question: 'Do you offer tamper-evident features?', 
      answer: 'Absolutely. We can integrate horizontal or vertical perforations near the cap region. When the bottle cap is twisted, the seal breaks cleanly, providing clear tamper-evidence for food, beverage, and pharmaceutical safety.' 
    },
    { 
      question: 'What printing technologies are supported?', 
      answer: 'We support high-definition flexographic printing for large runs (low unit cost) and premium digital printing for short runs (starting at 1,000 units with zero cylinder plate setup fees).' 
    }
  ];

  const overviewKpis = [
    "360° Branding Real Estate – Turn your entire bottle surface into a premium billboard with photo-quality graphics.",
    "Eco-Friendly Recyclable PET – Made of PET (♻️ 1) plastic, fully compatible with modern recycling initiatives.",
    "Tamper-Evident Security – Optional cap perforations protect consumer trust and product safety.",
    "Contour Form Fitting – Hugs any complex glass, metal, or plastic container shape smoothly without wrinkles."
  ];

  const specTableRows = [
    ["Material Base", "Premium PET-G (Polyethylene Terephthalate Glycol) or Cost-effective PVC", "Engineered to deliver high optical clarity and uniform shrink performance across gas, steam, or electric heat tunnels."],
    ["Shrinkage Ratio", "Horizontal: 60% - 78% | Vertical: 1% - 3%", "Calibrated for extreme bottle curvatures, preventing graphic distortion or label smiley effects."],
    ["Thickness Gauge", "30 to 50 Micron film thickness options", "Balances optimal tensile strength for automatic high-speed applicator machines with material efficiency."],
    ["Specialty Finishes", "Matte coating, metallic foil hot-stamping, and window elements", "Allows premium tactile finishes and window cutouts to showcase product level or beverage color."]
  ];

  const shrinkPhotoGallery = [
    { 
      src: '/imgs/store/products/shrink-sleeve-labels-shrink-sleeve-thumbnail-2.jpg', 
      title: 'Premium Printed Beverage Shrink Sleeve', 
      desc: 'High-definition printed shrink sleeve applied perfectly to aluminum and plastic beverage bottles.'
    },
    { 
      src: '/imgs/store/products/shrink-sleeve-labels-shrink-sleeve-thumbnail-4.jpg', 
      title: 'Contour Bottle Labeling Solutions', 
      desc: 'Heat shrink labels hugging complex bottle shapes with zero wrinkles and sharp 360-degree graphics.' 
    },
    { 
      src: '/imgs/store/products/shrink-sleeve-labels-shrink-sleeve-thumbnail-5.jpg', 
      title: 'Product Real-Shot Display', 
      desc: 'Showcasing various retail bottles utilizing full-body shrink sleeve packaging for food, dairy, and cosmetics.' 
    },
    { 
      src: '/imgs/store/products/shrink-sleeve-labels-shrink-sleeve-thumbnail-8.jpg', 
      title: 'Tactile Matte & Stamped Finishes', 
      desc: 'Premium beverage cans featuring custom matte-coated shrink labels and glossy highlights.' 
    }
  ];

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = shrinkPhotoGallery.length - 1
    if (newIndex >= shrinkPhotoGallery.length) newIndex = 0
    setGalleryEnlarged({ src: shrinkPhotoGallery[newIndex].src, index: newIndex })
  }

  const localTranslations = {
    title: "5 Common Shrink Sleeve Problems (And Solutions)",
    problems: [
      { q: "1. Smiley/Frowning Graphics", a: "Solution: Precision pre-distortion prepress engineering to correct artwork distortion during shrinkage." },
      { q: "2. Wrinkles and smileys", a: "Solution: Adjusting steam tunnel zones and temperature profiles for uniform heat distribution." },
      { q: "3. Recyclability Issues", a: "Solution: Using wash-off inks and micro-perforations so sleeves can be easily separated from the PET bottle." },
      { q: "4. Scuffing & Scratching", a: "Solution: Reverse printing method where ink is sandwiched between film layers, completely protecting it from transit scuffs." },
      { q: "5. Seam Splitting", a: "Solution: High-strength solvent welding and continuous seam testing to withstand automatic high-speed application." }
    ]
  };

  // B2C / pouch.eco View
  if (isPouch()) {
    return (
      <PouchLayout>
        <DualDomainSEOHead 
          title="Custom Shrink Sleeves | Eco-Friendly Bottle Labels | Pouch.eco"
          description="Premium printed recyclable PET shrink sleeve labels (♻️ 1). Low MOQ 1,000 pcs, 360-degree branding real estate, tamper-evident neck seals. Free digital mockups."
          keywords={['custom shrink sleeves', 'shrink labels', 'recyclable bottle sleeves', 'PET shrink sleeves', 'pouch.eco', 'sustainable flexible packaging']}
          schemaType="Product"
        />

        {/* Hero Section */}
        <section className="bg-[#10b981] text-black py-24 px-6 border-b-4 border-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-25"></div>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
            <div className="flex-1 space-y-6 text-left">
              <div className="inline-block bg-[#D4FF00] text-black border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Recyclable #1 PET Materials
              </div>
              <h1 className="font-['Space_Grotesk'] font-black text-6xl md:text-8xl leading-none uppercase tracking-tight">
                SHRINK<br/>
                <span className="text-[#D4FF00] bg-black px-4 py-1 border-4 border-black inline-block mt-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                  SLEEVES
                </span>
              </h1>
              <p className="font-['JetBrains_Mono'] text-lg md:text-xl text-black font-semibold max-w-xl leading-relaxed">
                Unlock 360° branding real estate on any bottle or container. Engineered with recyclable PET-G (♻️ 1) for a circular economy.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
                  Book Free Consultation
                </NeoButton>
                <NeoButton href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20custom%20shrink%20sleeves" variant="secondary">
                  Chat on WhatsApp
                </NeoButton>
              </div>
            </div>
            
            <div className="w-full lg:w-5/12">
              <div className="relative border-4 border-black p-4 bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] group rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/imgs/store/products/shrink-sleeve-labels-shrink-sleeve-thumbnail-2.jpg" 
                  alt="Premium Recyclable Shrink Sleeves" 
                  className="w-full h-auto object-cover border-2 border-black"
                />
                <div className="absolute -top-6 -right-6 bg-[#FF00FF] text-white font-black px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-6 text-sm">
                  MOQ 1,000 Units
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer Snippet */}
        <section className="bg-black text-white py-12 px-6 border-b-4 border-black">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-black text-[#D4FF00] uppercase">
              AI-Optimized Packaging Answer
            </h2>
            <p className="font-['Space_Grotesk'] text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
              <strong>Custom shrink sleeves</strong> are full-body labels that contour to complex bottle shapes when exposed to heat. By utilizing <strong>Recyclable PET (Resin Code ♻️ 1)</strong>, brands achieve eye-catching 360-degree artwork real estate while supporting standard municipal bottle recycling lines without sorting disruption.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-white py-20 px-6 border-b-4 border-black">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-black uppercase">
                Shrink Sleeve Gallery
              </h2>
              <p className="text-neutral-600 max-w-xl mx-auto">
                Explore real physical prototypes and retail products using our recyclable PET-G shrink labels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shrinkPhotoGallery.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => setGalleryEnlarged({ src: item.src, index })}
                  className="border-4 border-black p-3 bg-neutral-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all cursor-pointer"
                >
                  <img src={item.src} alt={item.title} className="w-full h-48 object-cover border-2 border-black mb-3" />
                  <h3 className="font-bold text-sm mb-1 uppercase">{item.title}</h3>
                  <p className="text-xs text-neutral-500 line-clamp-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="bg-[#D4FF00] text-black py-20 px-6 border-b-4 border-black">
          <div className="max-w-6xl mx-auto space-y-12">
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-black text-center uppercase">
              Technical Specifications
            </h2>
            <div className="overflow-x-auto border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-4 border-black bg-black text-white font-['JetBrains_Mono'] text-sm">
                    <th className="p-4 border-r-2 border-black">Parameters</th>
                    <th className="p-4 border-r-2 border-black">Specification Spec</th>
                    <th className="p-4">Business Value / Technical Effect</th>
                  </tr>
                </thead>
                <tbody>
                  {specTableRows.map((row, index) => (
                    <tr key={index} className="border-b-2 border-black last:border-b-0 hover:bg-neutral-50">
                      <td className="p-4 font-bold border-r-2 border-black">{row[0]}</td>
                      <td className="p-4 font-mono text-sm border-r-2 border-black">{row[1]}</td>
                      <td className="p-4 text-sm">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white py-20 px-6 border-b-4 border-black">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-black text-center uppercase">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {b2cFaqs.map((faq, index) => (
                <div key={index} className="border-4 border-black p-6 bg-neutral-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-['Space_Grotesk'] font-black text-lg md:text-xl uppercase flex items-start gap-3">
                    <span className="bg-[#D4FF00] border-2 border-black px-2 py-0.5 text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Q</span>
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-neutral-700 leading-relaxed pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Gallery */}
        {galleryEnlarged && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={() => setGalleryEnlarged(null)}
              className="absolute top-6 right-6 text-white hover:text-[#D4FF00] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative max-w-4xl w-full flex flex-col items-center gap-4">
              <button 
                onClick={() => navigateGallery('prev')}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <img 
                src={galleryEnlarged.src} 
                alt="Enlarged gallery item" 
                className="max-h-[75vh] w-auto object-contain border-4 border-white"
              />
              <button 
                onClick={() => navigateGallery('next')}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="text-center text-white space-y-1 mt-2">
                <h4 className="font-['Space_Grotesk'] font-bold text-lg text-[#D4FF00] uppercase">
                  {shrinkPhotoGallery[galleryEnlarged.index].title}
                </h4>
                <p className="text-sm text-neutral-300 max-w-xl mx-auto">
                  {shrinkPhotoGallery[galleryEnlarged.index].desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </PouchLayout>
    )
  }

  // B2B / achievepack.com View
  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans pb-12">
      <DualDomainSEOHead 
        title="Industrial Shrink Sleeves | High-Volume Bottle Labeling | AchievePack"
        description="B2B high-volume custom printed heat shrink sleeve labels in PET-G (♻️ 1) and PVC. Complete 360-degree surface branding for bottles, cans, and jars. Direct factory pricing."
        keywords={['custom shrink sleeves', 'bottle labels', 'industrial shrink labels', 'recyclable PET shrink', 'achievepack.com']}
        schemaType="Product"
      />

      {/* Header banner */}
      <div className="bg-gradient-to-r from-neutral-800 to-black py-20 px-6 border-b border-neutral-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/imgs/pattern-dots.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary-950/40 border border-primary-500/30 text-primary-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" /> Direct Manufacturer Direct Factory Pricing
          </div>
          <h1 className="font-['Outfit'] font-extrabold text-5xl md:text-7xl leading-tight uppercase tracking-tight text-white">
            Custom Shrink Sleeves
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
            Vibrant 360-degree branding for any complex contour container. Available in recyclable PET (♻️ 1) to support corporate carbon-neutrality initiatives.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <button onClick={openCalendly} className="bg-primary-500 hover:bg-primary-600 text-neutral-950 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-primary-500/20 transition-all flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Book Technical Consultation
            </button>
            <Link to="/store?shape=Shrink Sleeve" className="border border-neutral-700 hover:bg-neutral-800 text-white font-semibold px-6 py-3 rounded-lg transition-all">
              Configure & Price Instantly
            </Link>
          </div>
        </div>
      </div>

      {/* Highlights / Overview */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-['Outfit'] text-3xl font-extrabold uppercase text-primary-400">
            Maximizing Shelf Impact and Recyclability
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            Shrink sleeves provide a 360-degree printed canvas that conforms perfectly to complex curvatures, transforming ordinary plastic, glass, or aluminum containers into visually striking products. By manufacturing using PET (Polyethylene Temporate) recyclable code #1, we ensure that your brand stands out on retail shelves while complying with environmental standards.
          </p>
          <div className="space-y-3">
            {overviewKpis.map((kpi, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-neutral-300 text-sm">{kpi}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden border border-neutral-800 shadow-2xl">
          <img src="/imgs/store/products/shrink-sleeve-labels-shrink-sleeve-thumbnail-4.jpg" alt="Packaging Showcase" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Problems & Solutions */}
      <div className="bg-neutral-950 border-y border-neutral-800 py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="font-['Outfit'] text-3xl font-extrabold uppercase text-center text-primary-400">
            {localTranslations.title}
          </h2>
          <div className="space-y-6">
            {localTranslations.problems.map((problem, idx) => (
              <div key={idx} className="border border-neutral-800 p-6 rounded-lg bg-neutral-900/50">
                <h3 className="font-bold text-lg text-white mb-2">{problem.q}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{problem.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Table Specs */}
      <div className="max-w-6xl mx-auto py-20 px-6 space-y-8">
        <h2 className="font-['Outfit'] text-3xl font-extrabold uppercase text-center text-primary-400">
          Technical Parameters
        </h2>
        <div className="overflow-x-auto border border-neutral-800 rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-950 text-neutral-400 text-xs font-mono border-b border-neutral-800">
                <th className="p-4">Parameter</th>
                <th className="p-4">Technical Spec</th>
                <th className="p-4">Business Value / Impact</th>
              </tr>
            </thead>
            <tbody>
              {specTableRows.map((row, idx) => (
                <tr key={idx} className="border-b border-neutral-800 hover:bg-neutral-800/20 last:border-b-0">
                  <td className="p-4 font-bold text-white text-sm">{row[0]}</td>
                  <td className="p-4 font-mono text-primary-400 text-xs">{row[1]}</td>
                  <td className="p-4 text-neutral-400 text-xs leading-relaxed">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* B2B Consultation CTA */}
      <div className="bg-neutral-950 border-t border-neutral-800 py-16 text-center">
        <div className="max-w-xl mx-auto space-y-6 px-6">
          <h2 className="font-['Outfit'] text-2xl font-extrabold uppercase">
            Need customized shrink sleeves?
          </h2>
          <p className="text-neutral-400 text-sm">
            Our prepress team is ready to assist with pre-distortion alignment to ensure your design looks flawless on complex container contours.
          </p>
          <button onClick={openCalendly} className="bg-primary-500 hover:bg-primary-600 text-neutral-950 font-bold px-8 py-3 rounded-lg transition-all inline-flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Book Technical Consultancy
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShrinkSleevesPage
