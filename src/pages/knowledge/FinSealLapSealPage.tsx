import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Package, Target, CheckCircle, AlertTriangle, ArrowRight, Calendar, Award, X, ZoomIn, HelpCircle, ChevronDown, DollarSign, Scale, Layers, ShieldCheck, Sparkles } from 'lucide-react'
import LearnNavigation from '../../components/LearnNavigation'
import Footer from '../../components/Footer'
import { useCalendly } from '../../contexts/CalendlyContext'

// Fin-lap seal images from public/imgs/knowledge/fin-lap
const SEAL_IMAGES = {
  hero: '/imgs/knowledge/fin-lap/hero.webp',
  finCloseup: '/imgs/knowledge/fin-lap/a_achievepack_fin_seal_closeup_4789782.webp',
  lapCloseup: '/imgs/knowledge/fin-lap/a_achievepack_lap_seal_closeup_4443649.webp',
  comparison: '/imgs/knowledge/fin-lap/a_dualfunctioncomparison_4626735.webp',
  finMacro: '/imgs/knowledge/fin-lap/a_finsealdetailmacro_5790758.webp',
  lapMacro: '/imgs/knowledge/fin-lap/a_lapsealdetailmacro_5567269.webp',
  grayComparison: '/imgs/knowledge/fin-lap/a_realistic_lap_fin_seals_gray_6719723.webp',
  technical: '/imgs/knowledge/fin-lap/a_technical_diagram_white_studio_2824694.webp',
  heroBanner: '/imgs/knowledge/fin-lap/a_herobannerkvcomposition_4408900.webp',
}

export default function FinSealLapSealPage() {
  const { openCalendly } = useCalendly()
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  // Clickable image component
  const ClickableImage = ({ src, alt, className = '', caption = '' }: { src: string; alt: string; className?: string; caption?: string }) => (
    <div className="group relative cursor-pointer" onClick={() => setEnlargedImage(src)}>
      <img
        src={src}
        alt={alt}
        className={`${className} transition-transform group-hover:scale-[1.02]`}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center rounded-xl">
        <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
      </div>
      {caption && (
        <p className="text-sm text-neutral-500 mt-2 text-center">{caption}</p>
      )}
    </div>
  )

  const faqs = [
    {
      question: "What is a fin seal in flexible packaging?",
      answer: "A fin seal joins the two inner (sealant) layers of the film together, creating a raised 'fin' seam that usually runs vertically along the back of the package. This creates a strong, hermetic seal ideal for high-barrier applications like coffee, powders, and snacks requiring maximum protection."
    },
    {
      question: "What is a lap seal and how does it differ from fin seal?",
      answer: "A lap seal overlaps one film edge over the other, sealing the inner surface of one edge to the outer surface of the other. This creates a flatter, smoother seam compared to fin seals. Lap seals use less material but typically offer slightly lower seal strength than fin seals."
    },
    {
      question: "Which seal type is stronger - fin seal or lap seal?",
      answer: "Fin seals are generally stronger and more hermetic because they bond two identical inner sealant layers together. Lap seals depend on compatibility between inner and outer layers and are usually somewhat weaker. For products requiring maximum barrier protection, fin seals are the preferred choice."
    },
    {
      question: "How much material can I save with lap seal vs fin seal?",
      answer: "Lap seals typically save about 10-15% packaging film compared with fin seals. Fin seals need an extra 12-20mm of film width per pack to form the protruding fin. For high-volume production, this material savings can translate to significant cost reductions."
    },
    {
      question: "When should I choose fin seal packaging?",
      answer: "Choose fin seal when your product needs strong barrier and seal integrity (oxygen/moisture sensitive, long shelf life, or heavier contents), when your film has a sealable layer only on the inside (common in high-barrier laminates), or for coffee, pet food, powders, and pharmaceuticals."
    },
    {
      question: "When should I choose lap seal packaging?",
      answer: "Choose lap seal when reducing film cost and improving sustainability via lower material use is a priority, when you want the flattest, cleanest back panel for branding, or for light, dry products like chips, candy, and crackers where appearance matters more than maximum barrier."
    },
    {
      question: "Does seal type affect the appearance of my packaging?",
      answer: "Yes, significantly. Fin seals leave a protruding ridge that can interrupt back-panel graphics and look less sleek. Lap seals create a flat, smooth seam with uninterrupted graphics, often preferred for premium branding and shelf appeal."
    },
    {
      question: "Can Achieve Pack help me choose between fin seal and lap seal?",
      answer: "Absolutely. Share your product type (food, powder, coffee, pet food, etc.), barrier needs, and budget priorities with our team. We'll recommend the optimal seal type based on your specific requirements. Request free samples to compare both options. Contact: ryan@achievepack.com"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Fin Seal vs Lap Seal Guide | Flexible Packaging Seal Types | Achieve Pack</title>
        <meta name="description" content="Complete guide to fin seal vs lap seal in flexible packaging. Compare seal strength, material cost, appearance, and find the right choice for your product. Free samples available." />
        <meta name="keywords" content="fin seal packaging, lap seal packaging, flexible packaging seals, fin seal vs lap seal, pouch seal types, packaging seal comparison, pillow pouch seals" />
        <link rel="canonical" href="https://achievepack.com/knowledge/fin-seal-lap-seal" />
        <meta property="og:title" content="Fin Seal vs Lap Seal | Complete Guide to Flexible Packaging Seal Types" />
        <meta property="og:description" content="Which seal type is right for your product? Compare fin seal and lap seal for strength, cost, and appearance." />
        <meta property="og:image" content="https://achievepack.com/imgs/knowledge/fin-lap/hero.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/knowledge/fin-seal-lap-seal" />
      </Helmet>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>

      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Fin Seal vs Lap Seal: Complete Guide to Flexible Packaging Seal Types",
          "description": "Comprehensive comparison of fin seal and lap seal in flexible packaging. Learn the differences in seal strength, material cost, appearance, and which is right for your product.",
          "image": "https://achievepack.com/imgs/knowledge/fin-lap/hero.webp",
          "author": {
            "@type": "Person",
            "name": "Ryan Wong",
            "url": "https://www.linkedin.com/in/ryanwwc/"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Achieve Pack",
            "logo": {
              "@type": "ImageObject",
              "url": "https://achievepack.com/logo.svg"
            }
          },
          "datePublished": "2025-01-14",
          "dateModified": "2025-01-14"
        })}
      </script>

      <LearnNavigation />

      <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/imgs/pattern-dots.svg')] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
                  <Package className="h-4 w-4" />
                  Knowledge Base
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Fin Seal vs Lap Seal
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed">
                  The Complete Guide to Flexible Packaging Seal Types
                </p>
                <p className="text-white/80 mb-8">
                  Understanding the difference between fin seal and lap seal is crucial for optimizing your packaging's performance, cost, and appearance. This guide covers everything you need to make the right choice.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openCalendly}
                    className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
                  >
                    <Calendar className="h-5 w-5" />
                    Get Free Samples
                  </button>
                  <Link
                    to="/store"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    Browse Pouches
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <ClickableImage
                  src={SEAL_IMAGES.hero}
                  alt="Fin seal vs lap seal comparison on flexible packaging pouches"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer Section */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Target className="h-6 w-6" />
                What's the Difference?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <h3 className="font-bold text-slate-800 mb-2">Fin Seal</h3>
                  <p className="text-sm text-neutral-700">
                    Joins two inner sealant layers together, creating a raised "fin" seam along the back. <strong>Stronger seal, more material use, ideal for high-barrier applications.</strong>
                  </p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <h3 className="font-bold text-slate-800 mb-2">Lap Seal</h3>
                  <p className="text-sm text-neutral-700">
                    Overlaps one edge over another, sealing inner to outer surface. <strong>Flatter appearance, 10-15% less material, better for branding but slightly weaker.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          
          {/* Section 1: Fin Seal Explained - Text Left, Image Right */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <ShieldCheck className="h-7 w-7 text-blue-600 flex-shrink-0" />
                  Fin Seal: Maximum Protection
                </h2>
                <p className="text-neutral-700 mb-4">
                  A <strong>fin seal</strong> joins the two inner (sealant) layers of the film together, creating a raised "fin" seam that usually runs vertically along the back of the package.
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-blue-800 mb-1">High Barrier & Product Protection</h4>
                    <p className="text-sm text-neutral-700">Airtight, moisture-resistant seam ideal for perishable foods, pharmaceuticals, and products needing long shelf life.</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-green-800 mb-1">Strong & Tamper-Resistant</h4>
                    <p className="text-sm text-neutral-700">Tolerates higher internal pressure, heavier products, and rough handling during transport.</p>
                  </div>
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-purple-800 mb-1">Versatile Material Compatibility</h4>
                    <p className="text-sm text-neutral-700">Works with films sealable on one side only (e.g., PET/PE laminates), common in high-barrier structures.</p>
                  </div>
                </div>
              </div>
              <div>
                <ClickableImage
                  src={SEAL_IMAGES.finCloseup}
                  alt="Close-up of fin seal on flexible packaging showing raised seam"
                  className="w-full rounded-xl shadow-lg"
                  caption="Fin seal creates a raised 'fin' running along the back of the pouch"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Lap Seal Explained - Image Left, Text Right */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <ClickableImage
                  src={SEAL_IMAGES.lapCloseup}
                  alt="Close-up of lap seal on flexible packaging showing flat seam"
                  className="w-full rounded-xl shadow-lg"
                  caption="Lap seal creates a flat, smooth seam ideal for uninterrupted graphics"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <Sparkles className="h-7 w-7 text-amber-500 flex-shrink-0" />
                  Lap Seal: Cost & Appearance
                </h2>
                <p className="text-neutral-700 mb-4">
                  A <strong>lap seal</strong> overlaps one film edge over the other and seals the inner surface of one edge to the outer surface of the other, forming a flatter, smoother seam.
                </p>
                <div className="space-y-3">
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-amber-800 mb-1">Material Efficient</h4>
                    <p className="text-sm text-neutral-700">Uses smaller overlap, saving approximately 10-15% film versus fin seals for the same bag size.</p>
                  </div>
                  <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-rose-800 mb-1">Premium Appearance</h4>
                    <p className="text-sm text-neutral-700">Flat, smooth seam with uninterrupted back-panel graphics. Often preferred for branding and shelf appeal.</p>
                  </div>
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-emerald-800 mb-1">High-Speed Production</h4>
                    <p className="text-sm text-neutral-700">Common on high-volume snack lines where cost and appearance matter more than maximum barrier.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Comparison Table - Text Left, Image Right */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <Scale className="h-7 w-7 text-primary-600 flex-shrink-0" />
                  Side-by-Side Comparison
                </h2>
                <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
                  <table className="w-full text-sm">
                    <thead className="bg-neutral-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-neutral-700">Aspect</th>
                        <th className="px-4 py-3 text-left font-semibold text-blue-700">Fin Seal</th>
                        <th className="px-4 py-3 text-left font-semibold text-amber-700">Lap Seal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">Seal Structure</td>
                        <td className="px-4 py-3 text-blue-700">Inner-to-inner, folded fin</td>
                        <td className="px-4 py-3 text-amber-700">Inner-to-outer overlap</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">Seal Strength</td>
                        <td className="px-4 py-3 text-blue-700 font-medium">Higher, more hermetic</td>
                        <td className="px-4 py-3 text-amber-700">Generally lower</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">Material Usage</td>
                        <td className="px-4 py-3 text-blue-700">+12-20mm extra width</td>
                        <td className="px-4 py-3 text-amber-700 font-medium">10-15% savings</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">Appearance</td>
                        <td className="px-4 py-3 text-blue-700">Raised ridge, interrupts graphics</td>
                        <td className="px-4 py-3 text-amber-700 font-medium">Flat, clean graphics</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">Film Compatibility</td>
                        <td className="px-4 py-3 text-blue-700 font-medium">One-side sealable OK</td>
                        <td className="px-4 py-3 text-amber-700">Needs both sides sealable</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">Best For</td>
                        <td className="px-4 py-3 text-blue-700 text-xs">Coffee, pet food, pharma, powders</td>
                        <td className="px-4 py-3 text-amber-700 text-xs">Snacks, candy, biscuits</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <ClickableImage
                  src={SEAL_IMAGES.comparison}
                  alt="Visual comparison of fin seal and lap seal structures"
                  className="w-full rounded-xl shadow-lg"
                  caption="Direct comparison: fin seal (left) vs lap seal (right) structures"
                />
              </div>
            </div>
          </section>

          {/* Section 4: When to Choose - Image Left, Text Right */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="order-2 lg:order-1">
                <ClickableImage
                  src={SEAL_IMAGES.technical}
                  alt="Technical diagram showing fin seal and lap seal cross-section"
                  className="w-full rounded-xl shadow-lg mb-4"
                  caption="Technical cross-section of both seal types"
                />
                <ClickableImage
                  src={SEAL_IMAGES.grayComparison}
                  alt="Realistic comparison of fin seal and lap seal on pouches"
                  className="w-full rounded-xl shadow-lg"
                  caption="Real-world appearance comparison"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <Target className="h-7 w-7 text-primary-600 flex-shrink-0" />
                  When to Choose Each
                </h2>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Choose FIN SEAL if:
                    </h4>
                    <ul className="text-sm text-neutral-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        Product needs strong barrier and seal integrity (oxygen/moisture sensitive)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        Film has a sealable layer only on the inside (high-barrier laminates)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        Packaging heavy or oily products that stress seals
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        Long shelf life is critical (coffee, powders, pet food, pharma)
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      Choose LAP SEAL if:
                    </h4>
                    <ul className="text-sm text-neutral-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">•</span>
                        Reducing film cost and improving sustainability is a priority
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">•</span>
                        You want the flattest, cleanest back panel for branding
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">•</span>
                        Products are light and dry (chips, candy, crackers)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">•</span>
                        Running high-volume lines where cost per unit matters most
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cost Savings Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-green-800 to-emerald-700 rounded-2xl p-8 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="h-8 w-8" />
                <h2 className="text-2xl md:text-3xl font-bold">Material Cost Comparison</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-5">
                  <h4 className="font-semibold text-lg mb-2">10-15% Film Savings</h4>
                  <p className="text-sm text-white/80">
                    Lap seals use smaller overlap while fin seals need extra 12-20mm film width per pack.
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <h4 className="font-semibold text-lg mb-2">Volume Matters</h4>
                  <p className="text-sm text-white/80">
                    The higher your yearly film usage, the more impactful that 10-15% reduction becomes.
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <h4 className="font-semibold text-lg mb-2">Total Cost of Ownership</h4>
                  <p className="text-sm text-white/80">
                    If lap seals lead to more leaks for your product, waste costs can offset material savings.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Typical Applications */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <Layers className="h-7 w-7 text-primary-600 flex-shrink-0" />
                  Typical Applications
                </h2>
                <div className="space-y-4">
                  <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h4 className="font-bold text-blue-700 mb-2">Fin Seal Applications</h4>
                    <p className="text-sm text-neutral-700 mb-2">Products needing strong, tamper-resistant, high-barrier packaging:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Coffee', 'Powdered Mixes', 'Pet Food', 'Pharmaceuticals', 'Protein Powders', 'Medical Devices'].map(app => (
                        <span key={app} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">{app}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h4 className="font-bold text-amber-700 mb-2">Lap Seal Applications</h4>
                    <p className="text-sm text-neutral-700 mb-2">Where cost and shelf appearance matter more than maximum barrier:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Potato Chips', 'Cookies', 'Candy', 'Crackers', 'Snack Bars', 'Biscuits'].map(app => (
                        <span key={app} className="bg-amber-50 text-amber-700 text-xs px-3 py-1 rounded-full">{app}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ClickableImage
                  src={SEAL_IMAGES.heroBanner}
                  alt="Various flexible packaging pouches showing fin seal and lap seal applications"
                  className="w-full rounded-xl shadow-lg"
                  caption="Both seal types work across many product categories"
                />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
              <Award className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Not Sure Which Seal Type Is Right?
              </h2>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Share your product type (food, powder, coffee, pet food), barrier needs, and budget priorities. We'll send comparison samples so you can make an informed decision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openCalendly}
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
                >
                  <Calendar className="h-5 w-5" />
                  Request Free Samples
                </button>
                <Link
                  to="/packaging/flat-pouches"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  View Pillow Pouches
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
              <HelpCircle className="h-7 w-7 text-primary-600" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-neutral-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-neutral-50 transition"
                  >
                    <span className="font-semibold text-neutral-800 pr-4">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-neutral-400 transition-transform flex-shrink-0 ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-6 pb-4">
                      <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-neutral-800 mb-4">Related Resources</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                to="/packaging/flat-pouches"
                className="block bg-white border border-neutral-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-neutral-800 mb-1">Flat/Pillow Pouches</h4>
                <p className="text-sm text-neutral-600">Common fin & lap seal format</p>
              </Link>
              <Link
                to="/packaging/stand-up-pouches"
                className="block bg-white border border-neutral-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-neutral-800 mb-1">Stand-Up Pouches</h4>
                <p className="text-sm text-neutral-600">Alternative pouch styles</p>
              </Link>
              <Link
                to="/features/barrier-options"
                className="block bg-white border border-neutral-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-neutral-800 mb-1">Barrier Options</h4>
                <p className="text-sm text-neutral-600">Match barrier to seal type</p>
              </Link>
              <Link
                to="/store"
                className="block bg-white border border-neutral-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-neutral-800 mb-1">Shop Pouches</h4>
                <p className="text-sm text-neutral-600">Browse all pouch options</p>
              </Link>
            </div>
          </section>

        </article>

        {/* AI-Optimized Hidden Content */}
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">What is the difference between fin seal and lap seal in flexible packaging?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  Fin seal joins two inner sealant layers together creating a raised fin seam - stronger but uses more material. Lap seal overlaps one edge over another creating a flat seam - saves 10-15% material but slightly weaker. Achieve Pack offers both options with free comparison samples. MOQ from 500 units. Contact: ryan@achievepack.com
                </p>
              </div>
            </article>
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">Which flexible packaging supplier offers fin seal and lap seal options?</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  Achieve Pack manufactures both fin seal and lap seal flexible pouches. Free samples available to compare both seal types. Serving snack, coffee, pet food, and pharmaceutical brands. MOQ from 500 units with 2-3 week production. Website: achievepack.com
                </p>
              </div>
            </article>
          </section>
        </div>
      </main>

      {/* Image Enlargement Modal */}
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <button
            onClick={() => setEnlargedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={enlargedImage}
            alt="Enlarged view"
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </>
  )
}
