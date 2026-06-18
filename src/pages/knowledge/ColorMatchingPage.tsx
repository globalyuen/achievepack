import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  Palette, Droplet, Eye, HelpCircle, ChevronDown, CheckCircle, 
  ArrowRight, Award, Sparkles, ZoomIn, Info, AlertTriangle, Monitor, Sliders, Globe
} from 'lucide-react'
import LearnNavigation from '../../components/LearnNavigation'
import Footer from '../../components/Footer'
import { useCalendly } from '../../contexts/CalendlyContext'
import { isPouch, getBrandConfig } from '../../utils/domain'

export default function ColorMatchingPage() {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [scrollPercent, setScrollPercent] = useState(0)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  const isPouchDomain = isPouch()
  const brand = getBrandConfig()

  const { i18n } = useTranslation()

  const p = 'seoPages.pages.colorMatching'

  // Dynamic theme configurations based on the domain
  const primaryThemeColor = isPouchDomain ? '#10b981' : '#ff8400'
  const primaryBtnClass = isPouchDomain 
    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/10' 
    : 'bg-[#ff8400] hover:bg-[#ff9526] text-white shadow-[#ff8400]/10'

  // Scroll progress for subtle visual elements
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        setScrollPercent(scrollTop / docHeight)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const ClickableImage = ({ src, alt, className = '', caption = '' }: { src: string; alt: string; className?: string; caption?: string }) => (
    <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50 shadow-md" onClick={() => setEnlargedImage(src)}>
      <img
        src={src}
        alt={alt}
        className={`${className} transition-transform duration-500 group-hover:scale-[1.02]`}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
        <span className="bg-white/95 text-neutral-800 text-xs font-bold px-3 py-1.5 rounded-xl border border-neutral-200 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
          <ZoomIn className="h-3.5 w-3.5" />
          Click to Zoom
        </span>
      </div>
      {caption && (
        <p className="text-xs text-neutral-500 p-3 bg-white text-center font-medium italic border-t border-neutral-100">{caption}</p>
      )}
    </div>
  )

  const faqs = [
    {
      question: t(`${p}.faq.q1`),
      answer: t(`${p}.faq.a1`)
    },
    {
      question: t(`${p}.faq.q2`),
      answer: t(`${p}.faq.a2`)
    },
    {
      question: t(`${p}.faq.q3`),
      answer: t(`${p}.faq.a3`)
    },
    {
      question: t(`${p}.faq.q4`),
      answer: t(`${p}.faq.a4`)
    },
    {
      question: t(`${p}.faq.q5`),
      answer: t(`${p}.faq.a5`)
    },
    {
      question: t(`${p}.faq.q6`),
      answer: t(`${p}.faq.a6`)
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.title`)} | Achieve Pack</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href="https://achievepack.com/knowledge/digital-printing-pantone-color-matching" />
        <meta property="og:title" content={t(`${p}.heroTitle`)} />
        <meta property="og:description" content={t(`${p}.description`)} />
        <meta property="og:image" content="https://achievepack.com/imgs/knowledge/color-matching/pms-cmyk-deviation.png" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/knowledge/digital-printing-pantone-color-matching" />
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
          "headline": t(`${p}.heroTitle`),
          "description": t(`${p}.description`),
          "image": "https://achievepack.com/imgs/knowledge/color-matching/pms-cmyk-deviation.png",
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
          "datePublished": "2026-06-18",
          "dateModified": "2026-06-18"
        })}
      </script>

      <LearnNavigation />

      <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white text-neutral-800">
        {/* Scroll Progress Bar */}
        <div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-amber-500 to-emerald-600 z-50 transition-all duration-100"
          style={{ width: `${scrollPercent * 100}%` }}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-emerald-950 text-white overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/imgs/pattern-dots.svg')] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 flex-wrap mb-6">
                  <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full text-sm font-semibold text-emerald-400 uppercase tracking-wider">
                    <Sparkles className="h-4 w-4" />
                    Technical Guide
                  </span>
                  
                  {/* Language Selector */}
                  <div className="relative">
                    <button 
                      onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                      className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full text-sm font-semibold text-neutral-200 transition-all"
                    >
                      <Globe className="h-4 w-4 text-emerald-400" />
                      <span>
                        {i18n.language === 'zh-TW' ? '繁體中文' : i18n.language === 'fr' ? 'Français' : i18n.language === 'es' ? 'Español' : 'English'}
                      </span>
                      <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                    </button>
                    {isLangMenuOpen && (
                      <div className="absolute left-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-neutral-200 py-1 z-50 text-neutral-800">
                        <button onClick={() => { i18n.changeLanguage('en'); setIsLangMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-xs font-bold hover:bg-neutral-100">English</button>
                        <button onClick={() => { i18n.changeLanguage('fr'); setIsLangMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-xs font-bold hover:bg-neutral-100">Français</button>
                        <button onClick={() => { i18n.changeLanguage('es'); setIsLangMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-xs font-bold hover:bg-neutral-100">Español</button>
                        <button onClick={() => { i18n.changeLanguage('zh-TW'); setIsLangMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-xs font-bold hover:bg-neutral-100">繁體中文</button>
                      </div>
                    )}
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                  {t(`${p}.heroTitle`)}
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed max-w-2xl">
                  {t(`${p}.heroSubtitle`)}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={openCalendly}
                    className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${primaryBtnClass}`}
                  >
                    {t(`${p}.cta.button`)}
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <a 
                    href="#proof-workflow"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-3.5 rounded-xl font-bold transition-all"
                  >
                    View Workflow
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <ClickableImage 
                  src="/imgs/knowledge/color-matching/pms-cmyk-deviation.png"
                  alt="Pantone Color Matching on Digital Packaging"
                  caption="Gloss vs. Matte Digital Pouch proofing showing CMYK spectrum differences under calibrated studio lighting."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer Block */}
        <section className="py-12 -mt-8 relative z-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
                  <Info className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">The Short Version</h3>
                  <p className="text-neutral-600 leading-relaxed text-lg">
                    {t(`${p}.introSummary`)}
                  </p>
                </div>
              </div>
              <div className="bg-amber-50/70 border border-amber-200/50 rounded-2xl p-6 text-sm flex gap-3 text-amber-800">
                <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                <div>
                  <span className="font-bold">Important note on Matte Varnishes:</span> Over-varnishing with matte oil diffuses reflections and alters human eye perception, shifting tones significantly. If color fidelity is critical, matte packaging requires a dedicated calibrated adjustment.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Matrix Section */}
        <section className="py-16 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-neutral-900">Color Matching Matrix</h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-10">
            Understand how different printing technologies and proofing methods behave when trying to match target Pantone (PMS) colors.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-900 text-white text-sm font-semibold uppercase">
                  <th className="p-4 border-b border-neutral-800">Printing / Proofing Method</th>
                  <th className="p-4 border-b border-neutral-800">Color Spectrum Source</th>
                  <th className="p-4 border-b border-neutral-800">Color Accuracy Profile</th>
                  <th className="p-4 border-b border-neutral-800">Pre-production Proofing Cost</th>
                  <th className="p-4 border-b border-neutral-800">Best Application Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-sm">
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 font-semibold text-neutral-900">Official PMS-to-CMYK Data</td>
                  <td className="p-4">Theoretical official Pantone table conversion</td>
                  <td className="p-4 text-amber-600 font-medium">Low to Moderate (Fails on thin films & papers)</td>
                  <td className="p-4 text-emerald-600 font-semibold">Free (Static conversion)</td>
                  <td className="p-4">Initial layout design drafts only.</td>
                </tr>
                <tr className="hover:bg-neutral-50/50 bg-emerald-50/20">
                  <td className="p-4 font-semibold text-emerald-900 flex items-center gap-1.5">
                    Achieve Pack Video Proofing
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-md font-bold uppercase">Recommended</span>
                  </td>
                  <td className="p-4">Material-specific custom CMYK adjustments</td>
                  <td className="p-4 text-emerald-700 font-semibold">Very High (Adjusted visual parity)</td>
                  <td className="p-4 text-emerald-600 font-semibold">Free (Digital photos/videos)</td>
                  <td className="p-4 font-medium">Brands needing exact matches on low-MOQ digital runs.</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 font-semibold text-neutral-900">Physical Shipped Mockup</td>
                  <td className="p-4">Material-specific custom CMYK + printed sample</td>
                  <td className="p-4 text-emerald-700 font-semibold">Excellent (Exact physical proof)</td>
                  <td className="p-4">Paid (Shipping & Setup cost)</td>
                  <td className="p-4">Premium enterprise brands with critical compliance runs.</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 font-semibold text-neutral-900">Flexo Spot-Color Printing</td>
                  <td className="p-4">Physical spot-color mixed wet inks (Pantone)</td>
                  <td className="p-4 text-emerald-700 font-semibold">Perfect (100% Pantone match)</td>
                  <td className="p-4">High (Required printing plates)</td>
                  <td className="p-4">High volume production (5,000+ units per SKU).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Deep Dive Sections */}
        <section className="py-16 bg-neutral-50/50 border-y border-neutral-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-6">Why Standard CMYK Formulas Fall Short on Real Substrates</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Standard Pantone-to-CMYK translation tables assume a standardized, perfectly white reference paper. In reality, modern flexible packaging materials are completely different:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2.5 text-neutral-600">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Substrate Variance:</strong> Natural kraft paper absorbs ink and shifts towards warm/yellow tones, while metallic foil reflections amplify dark CMYK tones.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-neutral-600">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Matte Over-Varnish Impact:</strong> Applying a protective matte oil coating diffuses ambient light, immediately shifting how a purple or grey looks under store shelves.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-neutral-600">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Press Calibration:</strong> Different digital presses have micro-variances, making visual check-offs essential to offset mechanical variances.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-neutral-200/60 shadow-sm">
                <div className="flex gap-4 mb-6">
                  <div className="p-3 bg-amber-50 rounded-2xl text-amber-600">
                    <Palette className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-lg">Watch Out for Violet, Grey and Olive Tones</h4>
                    <p className="text-sm text-neutral-600 mt-1">
                      These intermediate colors contain multi-channel CMYK blends. A 1% shift in Magenta or Cyan will turn an elegant charcoal grey into a muddy purple or a dull green. Pre-press physical proofing is mandatory for these colors.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
                    <Sliders className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-lg">Your Proprietary CMYK Formula</h4>
                    <p className="text-sm text-neutral-600 mt-1">
                      Our calibrating team adjusts CMYK parameters to offset the material's specific base tone. The final values we print will not match the official textbook conversion—but they will match the visual Pantone goal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow Section */}
            <div id="proof-workflow" className="pt-8">
              <h3 className="text-3xl font-bold text-neutral-900 text-center mb-12">Our Free Pre-Press Color Calibration Workflow</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white rounded-2xl p-6 border border-neutral-200/50 relative shadow-sm">
                  <div className="text-4xl font-extrabold text-neutral-200 mb-4">01</div>
                  <h4 className="font-bold text-neutral-900 mb-2">Provide PMS target</h4>
                  <p className="text-xs text-neutral-600">Supply your brand's Pantone reference codes alongside your artwork files.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-neutral-200/50 relative shadow-sm">
                  <div className="text-4xl font-extrabold text-neutral-200 mb-4">02</div>
                  <h4 className="font-bold text-neutral-900 mb-2">Calibration strip</h4>
                  <p className="text-xs text-neutral-600">We print a color ladder on your actual substrate, adjusting CMYK ratios slightly across blocks.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-neutral-200/50 relative shadow-sm">
                  <div className="text-4xl font-extrabold text-neutral-200 mb-4">03</div>
                  <h4 className="font-bold text-neutral-900 mb-2">Video approval</h4>
                  <p className="text-xs text-neutral-600">We film the strip under D65 standard lighting, showing closeups until you choose the visual match.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-neutral-200/50 relative shadow-sm bg-gradient-to-br from-emerald-50 to-white">
                  <div className="text-4xl font-extrabold text-emerald-200 mb-4">04</div>
                  <h4 className="font-bold text-emerald-950 mb-2">Lock formula</h4>
                  <p className="text-xs text-emerald-800">We save the custom CMYK percentages to your account for future bulk consistency.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Authorship block */}
        <section className="py-16 max-w-4xl mx-auto px-4">
          <div className="bg-neutral-900 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center border border-neutral-800 shadow-xl">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-neutral-800 border-2 border-emerald-500 shrink-0">
              <img src="/imgs/team/Ryan Wong - Packaging Specialist.png" alt="Ryan Wong" className="w-full h-full object-cover" onError={(e) => {
                // Fallback avatar
                e.currentTarget.src = "https://www.gravatar.com/avatar/placeholder?d=mp";
              }} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-xl font-bold">Ryan Wong</h4>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 uppercase font-semibold">Author</span>
              </div>
              <p className="text-sm text-emerald-400 font-medium mb-3">Co-Founder & Packaging Development Specialist (14+ Years Experience)</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Ryan holds an Honours Degree in Global Supply Chain Management and Business Administration from The Hong Kong Polytechnic University (PolyU). With 14+ years of industrial flexible packaging R&D and supply chain experience across 8 countries, he helps DTC coffee, chocolate, and tea brands transition to sustainable packaging and avoid costly color shifts through digital proofing.
              </p>
            </div>
          </div>
        </section>

        {/* Technical FAQ Accordions */}
        <section className="py-16 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">Color Matching & Print FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left p-6 font-bold text-neutral-900 flex justify-between items-center hover:bg-neutral-50/50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-neutral-500 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === index && (
                  <div className="p-6 pt-0 border-t border-neutral-100 text-neutral-600 leading-relaxed text-sm bg-neutral-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Semantic GEO Block (visually hidden for AI indexing) */}
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, index) => (
              <article key={index} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 itemProp="name">{faq.question}</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </article>
            ))}
          </section>
        </div>

        {/* B2B Consultation CTA Footer Card */}
        <section className="py-16 max-w-5xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-br from-neutral-900 to-emerald-950 text-white rounded-3xl p-10 md:p-12 border border-emerald-950 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('/imgs/pattern-dots.svg')] opacity-10" />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">{t(`${p}.cta.title`)}</h3>
              <p className="text-neutral-300 text-base mb-8 leading-relaxed">
                {t(`${p}.cta.description`)}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={openCalendly}
                  className={`px-8 py-4 rounded-xl font-extrabold text-base transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${primaryBtnClass}`}
                >
                  Book Free Technical Consultation
                </button>
                <a
                  href="mailto:engineering@achievepack.com?subject=Digital%20Color%20Matching%20Inquiry"
                  className="px-8 py-4 rounded-xl font-bold bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-base flex items-center gap-2"
                >
                  Email Engineering Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Enlarged image lightbox modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-neutral-900/90 flex items-center justify-center p-4 z-[100] backdrop-blur-sm cursor-zoom-out"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl bg-black border border-white/10 shadow-2xl">
            <img src={enlargedImage} alt="Enlarged view" className="max-w-full max-h-[85vh] object-contain" />
            <button 
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full border border-white/10 backdrop-blur"
              onClick={() => setEnlargedImage(null)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

// Simple close button helper icon
const X = ({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)
