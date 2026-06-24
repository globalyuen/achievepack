import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Sparkles, Target, CheckCircle, AlertTriangle, Lightbulb, ArrowRight, Calendar, Award, X, ZoomIn, HelpCircle, ChevronDown, Eye, DollarSign, Palette, Building2 } from 'lucide-react'
import LearnNavigation from '../../components/LearnNavigation'
import Footer from '../../components/Footer'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation, Trans } from "react-i18next";

// White ink images from public/imgs/knowledge/white-ink
const WHITE_INK_IMAGES = {
  hero: '/imgs/knowledge/white-ink/hero.webp',
  infographic: '/imgs/knowledge/white-ink/a_yellow_gold_printing_infographic_data_9646530.webp',
  minimalist: '/imgs/knowledge/white-ink/a_yellow_gold_printing_minimalist_design_7513529.webp',
  technical: '/imgs/knowledge/white-ink/a_yellow_gold_printing_technical_diagram_5145887.webp',
}

export default function WhiteInkUnderprintPage() {
    const { t } = useTranslation();
    const p = 'seoPages.pages.whiteInkUnderprint';
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
      question: "What does 'white ink underneath' mean in packaging printing?",
      answer: "White ink underneath refers to printing a white base layer before applying your gold, yellow, or metallic colors. This base layer acts as a foundation that standardizes the color output regardless of the foil substrate beneath. Without it, the metallic foil shows through and interacts with your ink colors."
    },
    {
      question: "Does adding white underneath increase production cost significantly?",
      answer: "The cost increase is minimal—typically 2-5% depending on pouch size and order volume. For bulk orders (3,000+ units), the per-unit impact becomes negligible. The bigger question is whether the visual result aligns with your brand positioning and marketing goals."
    },
    {
      question: "Which industries typically use white underneath printing?",
      answer: "Pharmaceuticals, regulated food products, and professional/B2B packaging almost universally use white underneath for consistency and legibility. Luxury cosmetics, premium pet products, and artisanal food brands often skip white to maximize metallic brilliance and premium perception."
    },
    {
      question: "How do I know which approach is right for my brand?",
      answer: "Request samples with both approaches using your actual artwork. View them under store lighting conditions where your customers will see them. Consider your target market expectations, price positioning, and whether visual impact or color consistency matters more to your brand story."
    },
    {
      question: "Can I switch between approaches for different product lines?",
      answer: "Yes, many brands use white underneath for their core product lines (consistency) but skip white for premium or limited-edition releases (maximum visual impact). This strategy can signal product tier differences to consumers through packaging alone."
    },
    {
      question: "Does white underneath affect how packaging photographs for e-commerce?",
      answer: "Significantly. Packaging without white underneath tends to photograph more dramatically—the metallic shimmer creates visual interest in product shots. White-underneath printing photographs more consistently but may appear flatter. Consider your primary sales channel when deciding."
    },
    {
      question: "What about environmental impact—is one approach more sustainable?",
      answer: "Skipping white ink uses less material overall, which appeals to environmentally conscious brands. However, both approaches use food-safe inks and the environmental difference is minimal compared to other packaging decisions like material selection."
    },
    {
      question: "How does Achieve Pack handle white ink printing requests?",
      answer: "We provide samples with both approaches at no extra charge so you can compare directly. Our team helps you understand which option aligns with your brand positioning, target market, and budget constraints. MOQ starts at 500 units for custom printed foil pouches."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.whiteInkUnderneathGoldPrinting`)}</title>
        <meta name="description" content="Should you print white underneath gold on foil pouches? Complete guide to metallic color printing decisions, cost impact, and brand perception. Free samples available." />
        <meta name="keywords" content="white ink printing, gold printing foil pouch, metallic packaging printing, white underneath gold, foil pouch design, premium packaging printing, metallic color printing" />
        <link rel="canonical" href="https://achievepack.com/knowledge/white-ink-underprint" />
        <meta property="og:title" content="White Ink Underneath Gold Printing | The Hidden Secret Behind Eye-Catching Packaging" />
        <meta property="og:description" content="Should your gold print have white underneath? The decision that separates premium packaging from the ordinary." />
        <meta property="og:image" content="https://achievepack.com/imgs/knowledge/white-ink/hero.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/knowledge/white-ink-underprint" />
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
          "headline": "The Hidden Secret Behind Eye-Catching Packaging: Should Your Gold Print Have a White Underneath?",
          "description": "Complete guide to white ink underprinting decisions for gold and metallic colors on foil pouches. Learn how this single choice affects visual impact, cost, and brand perception.",
          "image": "https://achievepack.com/imgs/knowledge/white-ink/hero.webp",
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
        <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/imgs/pattern-dots.svg')] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
                  <Sparkles className="h-4 w-4" />
                  {t(`${p}.knowledgeBase`)}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {t(`${p}.theHiddenSecretBehindEyeCatchi`)}</h1>
                <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed">
                  {t(`${p}.shouldYourGoldPrintHaveAWhiteU`)}</p>
                <p className="text-white/80 mb-8">
                  {t(`${p}.theSinglePrintingDecisionThatS`)}</p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openCalendly}
                    className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
                  >
                    <Calendar className="h-5 w-5" />
                    {t(`${p}.getFreeSamples`)}</button>
                  <Link
                    to="/store"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    {t(`${p}.browseFoilPouches`)}<ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <ClickableImage
                  src={WHITE_INK_IMAGES.hero}
                  alt="Gold metallic printing comparison with and without white ink underneath"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer Section */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                <Target className="h-6 w-6" />
                {t(`${p}.whyThisChoiceMattersMoreThanYo`)}</h2>
              <p className="text-neutral-700 leading-relaxed">
                <strong>{t(`${p}.whenWorkingWithFoilPouchesEspe`)}</strong> {t(`${p}.thePrintingDecisionYouMakeDete`)}</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          
          {/* Section 1: The Case for White Underneath - Text Left, Image Right */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <CheckCircle className="h-7 w-7 text-green-600 flex-shrink-0" />
                  {t(`${p}.theCaseForWhiteUnderneath`)}</h2>
                <p className="text-neutral-700 mb-4">
                  {t(`${p}.printingWhiteUnderneathYourGol`)}<strong>{t(`${p}.baseLayer`)}</strong>{t(`${p}.theWhiteActsAsAColorFoundation`)}</p>
                <div className="space-y-3">
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-green-800 mb-1">{t(`${p}.consistencyPredictability`)}</h4>
                    <p className="text-sm text-neutral-700">{t(`${p}.theWhiteLayerEnsuresYourGoldAl`)}</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-blue-800 mb-1">{t(`${p}.betterTextDetailLegibility`)}</h4>
                    <p className="text-sm text-neutral-700">{t(`${p}.fineDetailsIntricateIllustrati`)}</p>
                  </div>
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-purple-800 mb-1">{t(`${p}.lowerProductionCost`)}</h4>
                    <p className="text-sm text-neutral-700">{t(`${p}.whenOrderedInVolumeThePerUnitC`)}</p>
                  </div>
                </div>
              </div>
              <div>
                <ClickableImage
                  src={WHITE_INK_IMAGES.technical}
                  alt="Technical diagram showing white ink base layer beneath gold printing"
                  className="w-full rounded-xl shadow-lg"
                  caption="White base layer creates consistent color output regardless of lighting"
                />
              </div>
            </div>
          </section>

          {/* Section 2: The Case for No White - Image Left, Text Right */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <ClickableImage
                  src={WHITE_INK_IMAGES.infographic}
                  alt="Comparison infographic showing gold printing with and without white ink underneath"
                  className="w-full rounded-xl shadow-lg"
                  caption="Without white: the metallic foil amplifies the gold's natural brilliance"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <Sparkles className="h-7 w-7 text-amber-500 flex-shrink-0" />
                  {t(`${p}.theCaseForNoWhiteUnderneath`)}</h2>
                <p className="text-neutral-700 mb-4">
                  {t(`${p}.whenYouSkipTheWhiteLayerAndPri`)}<strong>{t(`${p}.theSilverFoilBecomesPartOfTheD`)}</strong> {t(`${p}.thisIsTheTechniqueLuxuryBrands`)}</p>
                <div className="space-y-3">
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-amber-800 mb-1">{t(`${p}.unmatchedMetallicBrilliance`)}</h4>
                    <p className="text-sm text-neutral-700">{t(`${p}.theFoilActsAsAMirrorBouncingLi`)}</p>
                  </div>
                  <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-rose-800 mb-1">{t(`${p}.premiumBrandPositioning`)}</h4>
                    <p className="text-sm text-neutral-700">{t(`${p}.consumersAssociateNonWhiteBase`)}</p>
                  </div>
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-emerald-800 mb-1">{t(`${p}.standoutInCompetitiveMarkets`)}</h4>
                    <p className="text-sm text-neutral-700">{t(`${p}.inCrowdedRetailCategoriesCosme`)}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Comparison Table - Text Left, Image Right */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <Eye className="h-7 w-7 text-primary-600 flex-shrink-0" />
                  {t(`${p}.quickComparisonMakingSenseOfYo`)}</h2>
                <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
                  <table className="w-full text-sm">
                    <thead className="bg-neutral-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-neutral-700">{t(`${p}.factor`)}</th>
                        <th className="px-4 py-3 text-left font-semibold text-green-700">{t(`${p}.whiteUnder`)}</th>
                        <th className="px-4 py-3 text-left font-semibold text-amber-700">{t(`${p}.noWhite`)}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">{t(`${p}.visualImpact`)}</td>
                        <td className="px-4 py-3 text-green-700">{t(`${p}.consistent`)}</td>
                        <td className="px-4 py-3 text-amber-700 font-medium">{t(`${p}.maximumShine`)}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">{t(`${p}.textLegibility`)}</td>
                        <td className="px-4 py-3 text-green-700 font-medium">{t(`${p}.excellent`)}</td>
                        <td className="px-4 py-3 text-amber-700">{t(`${p}.goodSimpleDesigns`)}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">{t(`${p}.brandPerception`)}</td>
                        <td className="px-4 py-3 text-green-700">{t(`${p}.professional`)}</td>
                        <td className="px-4 py-3 text-amber-700 font-medium">{t(`${p}.premiumLuxury`)}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">{t(`${p}.photography`)}</td>
                        <td className="px-4 py-3 text-green-700">{t(`${p}.consistent`)}</td>
                        <td className="px-4 py-3 text-amber-700 font-medium">{t(`${p}.dramatic`)}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">{t(`${p}.cost`)}</td>
                        <td className="px-4 py-3 text-green-700 font-medium">+2-5%</td>
                        <td className="px-4 py-3 text-amber-700">{t(`${p}.baseline`)}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-neutral-600">{t(`${p}.bestFor`)}</td>
                        <td className="px-4 py-3 text-green-700 text-xs">{t(`${p}.pharmaRegulatedB2b`)}</td>
                        <td className="px-4 py-3 text-amber-700 text-xs">{t(`${p}.luxuryCosmeticsPremium`)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <ClickableImage
                  src={WHITE_INK_IMAGES.minimalist}
                  alt="Minimalist gold packaging design showcasing premium metallic finish"
                  className="w-full rounded-xl shadow-lg"
                  caption="The visual difference is unmistakable once you see it in person"
                />
              </div>
            </div>
          </section>

          {/* Section 4: Industry Examples - Image Left, Text Right */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="order-2 lg:order-1 sticky top-8">
                <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-amber-400" />
                    {t(`${p}.whatLeadingBrandsActuallyDo`)}</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-amber-400">{t(`${p}.cosmeticsBeauty`)}</h4>
                      <p className="text-neutral-300">{t(`${p}.luxuryBrandsEstELauderCharlott`)}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-400">{t(`${p}.premiumPetBrands`)}</h4>
                      <p className="text-neutral-300">{t(`${p}.increasinglySkipWhiteToSignalQ`)}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-400">{t(`${p}.chocolateConfections`)}</h4>
                      <p className="text-neutral-300">{t(`${p}.ultraPremiumUsesNoWhiteBudgetB`)}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-400">{t(`${p}.pharmaceuticals`)}</h4>
                      <p className="text-neutral-300">{t(`${p}.almostExclusivelyWhiteUndernea`)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <Lightbulb className="h-7 w-7 text-amber-500 flex-shrink-0" />
                  {t(`${p}.howToChooseADecisionFramework`)}</h2>
                
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      {t(`${p}.chooseWhiteUnderneathIf`)}</h4>
                    <ul className="text-sm text-neutral-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">•</span>
                        {t(`${p}.yourProductContainsFineDetails`)}</li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">•</span>
                        {t(`${p}.youReInARegulatedIndustryWhere`)}</li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">•</span>
                        {t(`${p}.youNeedColorConsistencyAcrossM`)}</li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">•</span>
                        {t(`${p}.yourTargetMarketExpectsConserv`)}</li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">•</span>
                        {t(`${p}.budgetIsTightAndMinimalCostPer`)}</li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      {t(`${p}.chooseNoWhiteUnderneathIf`)}</h4>
                    <ul className="text-sm text-neutral-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">•</span>
                        {t(`${p}.visualImpactAndShelfStandoutAr`)}</li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">•</span>
                        {t(`${p}.yourTargetAudienceValuesPremiu`)}</li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">•</span>
                        {t(`${p}.youReCompetingInACrowdedVisual`)}</li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">•</span>
                        {t(`${p}.yourDesignIsSimpleAndWorksWell`)}</li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">•</span>
                        {t(`${p}.youWantPackagingToPhotographEx`)}</li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">•</span>
                        {t(`${p}.youReLaunchingANewProductAndWa`)}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Real Story */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-2xl p-8 md:p-10 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t(`${p}.theRealStory`)}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    {t(`${p}.aSingleTechnicalChoiceWhiteInk`)}</p>
                  <p className="text-neutral-300 leading-relaxed">
                    {t(`${p}.theBeautyOfModernPackagingIsTh`)}</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="font-semibold text-amber-400 mb-3">{t(`${p}.askYourProductionPartner`)}</h4>
                  <p className="text-sm text-neutral-300 mb-4">
                    {t(`${p}.yourFoilPouchManufacturerShoul`)}</p>
                  <p className="text-sm text-white font-medium">
                    {t(`${p}.theVisualDifferenceIsUnmistaka`)}</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <Award className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t(`${p}.seeTheDifferenceForYourself`)}</h2>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                {t(`${p}.weLlSendYouComparisonSamplesWi`)}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openCalendly}
                  className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
                >
                  <Calendar className="h-5 w-5" />
                  {t(`${p}.requestFreeSamples`)}</button>
                <Link
                  to="/store"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  {t(`${p}.browseFoilPouches`)}<ArrowRight className="h-5 w-5" />
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
                to="/features/surface-finish"
                className="block bg-white border border-neutral-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-neutral-800 mb-1">{t(`${p}.surfaceFinishes`)}</h4>
                <p className="text-sm text-neutral-600">{t(`${p}.matteGlossSoftTouchOptions`)}</p>
              </Link>
              <Link
                to="/printing/digital-printing"
                className="block bg-white border border-neutral-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-neutral-800 mb-1">{t(`${p}.digitalPrinting`)}</h4>
                <p className="text-sm text-neutral-600">{t(`${p}.lowMoqUnlimitedColors`)}</p>
              </Link>
              <Link
                to="/packaging/stand-up-pouches"
                className="block bg-white border border-neutral-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-neutral-800 mb-1">{t(`${p}.standUpPouches`)}</h4>
                <p className="text-sm text-neutral-600">{t(`${p}.popularFoilPouchFormat`)}</p>
              </Link>
              <Link
                to="/store"
                className="block bg-white border border-neutral-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-neutral-800 mb-1">{t(`${p}.shopFoilPouches`)}</h4>
                <p className="text-sm text-neutral-600">{t(`${p}.browseAllOptionsSizes`)}</p>
              </Link>
            </div>
          </section>

        </article>

        {/* AI-Optimized Hidden Content */}
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.shouldIPrintWhiteInkUnderneath`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t(`${p}.itDependsOnYourPrioritiesWhite`)}</p>
              </div>
            </article>
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.whichFoilPouchSupplierOffersWh`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t(`${p}.achievePackOffersBothWhiteUnde`)}</p>
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
