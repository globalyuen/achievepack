import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Package, Target, CheckCircle, AlertTriangle, ArrowRight, Calendar, Award, X, ZoomIn, HelpCircle, ChevronDown, DollarSign, Scale, Layers, ShieldCheck, Sparkles } from 'lucide-react'
import LearnNavigation from '../../components/LearnNavigation'
import Footer from '../../components/Footer'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation, Trans } from "react-i18next";

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
    const { t } = useTranslation();
    const p = 'seoPages.pages.finSealLapSeal';
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
        <title>{t(`${p}.finSealVsLapSealGuideFlexibleP`)}</title>
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
                  {t(`${p}.knowledgeBase`)}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {t(`${p}.finSealVsLapSeal`)}</h1>
                <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed">
                  {t(`${p}.theCompleteGuideToFlexiblePack`)}</p>
                <p className="text-white/80 mb-8">
                  {t(`${p}.understandingTheDifferenceBetw`)}</p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openCalendly}
                    className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
                  >
                    <Calendar className="h-5 w-5" />
                    {t(`${p}.getFreeSamples`)}</button>
                  <Link
                    to="/store"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    {t(`${p}.browsePouches`)}<ArrowRight className="h-5 w-5" />
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
                {t(`${p}.whatSTheDifference`)}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <h3 className="font-bold text-slate-800 mb-2">{t(`${p}.finSeal`)}</h3>
                  <p className="text-sm text-neutral-700">
                    {t(`${p}.joinsTwoInnerSealantLayersToge`)}<strong>{t(`${p}.strongerSealMoreMaterialUseIde`)}</strong>
                  </p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <h3 className="font-bold text-slate-800 mb-2">{t(`${p}.lapSeal`)}</h3>
                  <p className="text-sm text-neutral-700">
                    {t(`${p}.overlapsOneEdgeOverAnotherSeal`)}<strong>{t(`${p}.flatterAppearance1015LessMater`)}</strong>
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
                  {t(`${p}.finSealMaximumProtection`)}</h2>
                <p className="text-neutral-700 mb-4">
                  A <strong>{t(`${p}.finSeal1`)}</strong> {t(`${p}.joinsTheTwoInnerSealantLayersO`)}</p>
                <div className="space-y-3">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-blue-800 mb-1">{t(`${p}.highBarrierProductProtection`)}</h4>
                    <p className="text-sm text-neutral-700">{t(`${p}.airtightMoistureResistantSeamI`)}</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-green-800 mb-1">{t(`${p}.strongTamperResistant`)}</h4>
                    <p className="text-sm text-neutral-700">{t(`${p}.toleratesHigherInternalPressur`)}</p>
                  </div>
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-purple-800 mb-1">{t(`${p}.versatileMaterialCompatibility`)}</h4>
                    <p className="text-sm text-neutral-700">{t(`${p}.worksWithFilmsSealableOnOneSid`)}</p>
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
                  {t(`${p}.lapSealCostAppearance`)}</h2>
                <p className="text-neutral-700 mb-4">
                  A <strong>{t(`${p}.lapSeal2`)}</strong> {t(`${p}.overlapsOneFilmEdgeOverTheOthe`)}</p>
                <div className="space-y-3">
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-amber-800 mb-1">{t(`${p}.materialEfficient`)}</h4>
                    <p className="text-sm text-neutral-700">{t(`${p}.usesSmallerOverlapSavingApprox`)}</p>
                  </div>
                  <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-rose-800 mb-1">{t(`${p}.premiumAppearance`)}</h4>
                    <p className="text-sm text-neutral-700">{t(`${p}.flatSmoothSeamWithUninterrupte`)}</p>
                  </div>
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-emerald-800 mb-1">{t(`${p}.highSpeedProduction`)}</h4>
                    <p className="text-sm text-neutral-700">{t(`${p}.commonOnHighVolumeSnackLinesWh`)}</p>
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
                  {t(`${p}.sideBySideComparison`)}</h2>
                <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
                  <table className="w-full text-sm">
                    <thead className="bg-neutral-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-neutral-700">{t(`${p}.aspect`)}</th>
                        <th className="px-4 py-3 text-left font-semibold text-blue-700">{t(`${p}.finSeal`)}</th>
                        <th className="px-4 py-3 text-left font-semibold text-amber-700">{t(`${p}.lapSeal`)}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">{t(`${p}.sealStructure`)}</td>
                        <td className="px-4 py-3 text-blue-700">{t(`${p}.innerToInnerFoldedFin`)}</td>
                        <td className="px-4 py-3 text-amber-700">{t(`${p}.innerToOuterOverlap`)}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">{t(`${p}.sealStrength`)}</td>
                        <td className="px-4 py-3 text-blue-700 font-medium">{t(`${p}.higherMoreHermetic`)}</td>
                        <td className="px-4 py-3 text-amber-700">{t(`${p}.generallyLower`)}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">{t(`${p}.materialUsage`)}</td>
                        <td className="px-4 py-3 text-blue-700">{t(`${p}.1220mmExtraWidth`)}</td>
                        <td className="px-4 py-3 text-amber-700 font-medium">{t(`${p}.1015Savings`)}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">{t(`${p}.appearance`)}</td>
                        <td className="px-4 py-3 text-blue-700">{t(`${p}.raisedRidgeInterruptsGraphics`)}</td>
                        <td className="px-4 py-3 text-amber-700 font-medium">{t(`${p}.flatCleanGraphics`)}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">{t(`${p}.filmCompatibility`)}</td>
                        <td className="px-4 py-3 text-blue-700 font-medium">{t(`${p}.oneSideSealableOk`)}</td>
                        <td className="px-4 py-3 text-amber-700">{t(`${p}.needsBothSidesSealable`)}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">{t(`${p}.bestFor`)}</td>
                        <td className="px-4 py-3 text-blue-700 text-xs">{t(`${p}.coffeePetFoodPharmaPowders`)}</td>
                        <td className="px-4 py-3 text-amber-700 text-xs">{t(`${p}.snacksCandyBiscuits`)}</td>
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
                  {t(`${p}.whenToChooseEach`)}</h2>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      {t(`${p}.chooseFinSealIf`)}</h4>
                    <ul className="text-sm text-neutral-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        {t(`${p}.productNeedsStrongBarrierAndSe`)}</li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        {t(`${p}.filmHasASealableLayerOnlyOnThe`)}</li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        {t(`${p}.packagingHeavyOrOilyProductsTh`)}</li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        {t(`${p}.longShelfLifeIsCriticalCoffeeP`)}</li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      {t(`${p}.chooseLapSealIf`)}</h4>
                    <ul className="text-sm text-neutral-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">•</span>
                        {t(`${p}.reducingFilmCostAndImprovingSu`)}</li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">•</span>
                        {t(`${p}.youWantTheFlattestCleanestBack`)}</li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">•</span>
                        {t(`${p}.productsAreLightAndDryChipsCan`)}</li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">•</span>
                        {t(`${p}.runningHighVolumeLinesWhereCos`)}</li>
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
                <h2 className="text-2xl md:text-3xl font-bold">{t(`${p}.materialCostComparison`)}</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-5">
                  <h4 className="font-semibold text-lg mb-2">{t(`${p}.1015FilmSavings`)}</h4>
                  <p className="text-sm text-white/80">
                    {t(`${p}.lapSealsUseSmallerOverlapWhile`)}</p>
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <h4 className="font-semibold text-lg mb-2">{t(`${p}.volumeMatters`)}</h4>
                  <p className="text-sm text-white/80">
                    {t(`${p}.theHigherYourYearlyFilmUsageTh`)}</p>
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <h4 className="font-semibold text-lg mb-2">{t(`${p}.totalCostOfOwnership`)}</h4>
                  <p className="text-sm text-white/80">
                    {t(`${p}.ifLapSealsLeadToMoreLeaksForYo`)}</p>
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
                  {t(`${p}.typicalApplications`)}</h2>
                <div className="space-y-4">
                  <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h4 className="font-bold text-blue-700 mb-2">{t(`${p}.finSealApplications`)}</h4>
                    <p className="text-sm text-neutral-700 mb-2">{t(`${p}.productsNeedingStrongTamperRes`)}</p>
                    <div className="flex flex-wrap gap-2">
                      {['Coffee', 'Powdered Mixes', 'Pet Food', 'Pharmaceuticals', 'Protein Powders', 'Medical Devices'].map(app => (
                        <span key={app} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">{app}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h4 className="font-bold text-amber-700 mb-2">{t(`${p}.lapSealApplications`)}</h4>
                    <p className="text-sm text-neutral-700 mb-2">{t(`${p}.whereCostAndShelfAppearanceMat`)}</p>
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
                {t(`${p}.notSureWhichSealTypeIsRight`)}</h2>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                {t(`${p}.shareYourProductTypeFoodPowder`)}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openCalendly}
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
                >
                  <Calendar className="h-5 w-5" />
                  {t(`${p}.requestFreeSamples`)}</button>
                <Link
                  to="/packaging/flat-pouches"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  {t(`${p}.viewPillowPouches`)}<ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
              <HelpCircle className="h-7 w-7 text-primary-600" />
              {t(`${p}.frequentlyAskedQuestions`)}</h2>
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
            <h3 className="text-lg font-semibold text-neutral-800 mb-4">{t(`${p}.relatedResources`)}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                to="/packaging/flat-pouches"
                className="block bg-white border border-neutral-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-neutral-800 mb-1">{t(`${p}.flatPillowPouches`)}</h4>
                <p className="text-sm text-neutral-600">{t(`${p}.commonFinLapSealFormat`)}</p>
              </Link>
              <Link
                to="/packaging/stand-up-pouches"
                className="block bg-white border border-neutral-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-neutral-800 mb-1">{t(`${p}.standUpPouches`)}</h4>
                <p className="text-sm text-neutral-600">{t(`${p}.alternativePouchStyles`)}</p>
              </Link>
              <Link
                to="/features/barrier-options"
                className="block bg-white border border-neutral-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-neutral-800 mb-1">{t(`${p}.barrierOptions`)}</h4>
                <p className="text-sm text-neutral-600">{t(`${p}.matchBarrierToSealType`)}</p>
              </Link>
              <Link
                to="/store"
                className="block bg-white border border-neutral-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-neutral-800 mb-1">{t(`${p}.shopPouches`)}</h4>
                <p className="text-sm text-neutral-600">{t(`${p}.browseAllPouchOptions`)}</p>
              </Link>
            </div>
          </section>

        </article>

        {/* Cross-Reference Directory */}
        <section className="py-12 bg-neutral-50 border-t border-b border-neutral-250">
          <div className="max-w-4xl mx-auto px-4">
            <h4 className="font-bold text-lg mb-4 text-neutral-800">Sealing & Assembly Cross-References</h4>
            <p className="text-neutral-600 text-sm leading-relaxed mb-0">
              Choosing the right seam type requires correct sealing settings. To calibrate your sealer machinery, read our comprehensive <Link to="/knowledge/pouch-heat-sealing-guide" className="text-primary-600 font-medium hover:underline inline-flex items-center gap-0.5">Pouch Heat Sealing Calibration Guide <ArrowRight className="w-3 h-3"/></Link>. For manual bag sealing machinery operations, see our guide on <Link to="/knowledge/hand-clamp-sealer" className="text-primary-600 font-medium hover:underline inline-flex items-center gap-0.5">Hand Clamp Sealer Instructions <ArrowRight className="w-3 h-3"/></Link>.
            </p>
          </div>
        </section>

        {/* AI-Optimized Hidden Content */}
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.whatIsTheDifferenceBetweenFinS`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t(`${p}.finSealJoinsTwoInnerSealantLay`)}</p>
              </div>
            </article>
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.whichFlexiblePackagingSupplier`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t(`${p}.achievePackManufacturesBothFin`)}</p>
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
