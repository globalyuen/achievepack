import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, Settings, Thermometer, ShieldCheck, AlertTriangle, Box } from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'
import RelatedProductsShowcase from '../../components/RelatedProductsShowcase'

export default function PouchHeatSealingGuidePage() {
  const { t } = useTranslation()
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxCaption, setLightboxCaption] = useState<string>('')

  // Dynamically determine domain context to serve dual-brand designs
  const isPouchDomain = getDomain() === 'pouch'

  const openLightbox = (image: string, caption: string) => {
    setLightboxImage(image)
    setLightboxCaption(caption)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    setLightboxCaption('')
  }

  // --- E-E-A-T Ryan Wong Profile Card ---
  const renderAuthorCard = () => (
    <div className="bg-neutral-50 border-2 border-black p-6 flex flex-col md:flex-row items-center gap-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-500 flex-shrink-0 bg-neutral-200">
        <img src="/imgs/team/Ryan Wong - Packaging Specialist.png" alt="Ryan Wong" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Ryan+Wong&background=0D8ABC&color=fff&size=128' }} />
      </div>
      <div>
        <h3 className="font-black text-xl mb-1 text-black">Ryan Wong</h3>
        <p className="text-sm font-bold text-primary-600 mb-2 uppercase tracking-wide">Co-Founder & Chief Packaging Engineer</p>
        <div className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded font-bold mb-3 border border-primary-200">
          {t('pouchHeatSealing.author.credentials', '14+ Years Packaging Engineering | GRS & FSC Auditing Expert')}
        </div>
        <p className="text-sm text-neutral-700 leading-relaxed font-['Space_Grotesk']">
          {t('pouchHeatSealing.author.bio', 'With a background in polytechnic materials science, Ryan has helped over 500+ global brands scale from prototype testing to industrial vertical packaging lines.')}
        </p>
      </div>
      <div className="md:ml-auto flex-shrink-0 mt-4 md:mt-0">
        <Link to="/contact" className="inline-block bg-black text-white font-bold px-4 py-2 hover:bg-neutral-800 transition-colors text-sm uppercase text-center w-full md:w-auto">
          {t('pouchHeatSealing.author.cta', 'Ask a Question')}
        </Link>
      </div>
    </div>
  )

  const seoProps = {
    title: t('pouchHeatSealing.seo.title', 'Pouch Heat Sealing Temperature Settings & Testing Guide | Achieve Pack'),
    metaDescription: t('pouchHeatSealing.seo.description', 'Learn the exact temperature, pressure, and dwell time settings for sealing flexible packaging pouches. Includes our expert Strip Test method to prevent material waste.'),
    keywords: [
      t('pouchHeatSealing.seo.keywords.1', "Pouch Heat Sealing Temperature"), 
      t('pouchHeatSealing.seo.keywords.2', "Flexible Packaging Sealer Settings"), 
      t('pouchHeatSealing.seo.keywords.3', "How to seal coffee bags at home"), 
      t('pouchHeatSealing.seo.keywords.4', "Heat sealing troubleshooting"), 
      t('pouchHeatSealing.seo.keywords.5', "Optimal sealing temp for pouches")
    ],
    canonicalUrl: `https://${isPouchDomain ? 'pouch.eco' : 'achievepack.com'}/knowledge/pouch-heat-sealing-temperature-guide`
  }

  const heroProps = {
    heroTitle: t('pouchHeatSealing.hero.title', 'Pouch Heat Sealing Temperature Settings'),
    heroSubtitle: t('pouchHeatSealing.hero.subtitle', 'Stop guessing and start sealing. The ultimate engineering guide to calibrating temperature, pressure, and dwell time for flexible pouches.'),
  }

  const quickAnswer = t('pouchHeatSealing.quickAnswer', "The minimum heat sealing temperature for most flexible pouches on a roller sealing machine is around 160°C with a dwell time of 3 seconds and 40psi of pressure. However, this varies by material thickness. Use the 'Strip Test' to incrementally find your optimal temperature.")

  const sectionsForAchieve = [
    {
      id: "engineers-log",
      title: t('pouchHeatSealing.sections.engineersLog.title', "From Ryan Wong's Engineering Notebook"),
      icon: <Settings className="h-6 w-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-primary-50 p-6 border-l-4 border-primary-500 font-['Space_Grotesk'] text-neutral-800 text-lg leading-relaxed shadow-sm">
            <p className="font-bold text-primary-900 mb-2 font-sans text-sm uppercase tracking-wider">{t('pouchHeatSealing.sections.engineersLog.badge', 'Expert Engineering Insight')}</p>
            <p>
              {t('pouchHeatSealing.sections.engineersLog.p1', '"In my 14 years in packaging design, I’ve seen countless brands struggle with leaky seals simply because of incorrect temperature settings. There is no \'one size fits all\' temperature because it depends entirely on the machine (roller vs. impulse) and the material thickness (e.g., 80 microns vs. 120 microns)."')}
            </p>
            <p className="mt-4">
              <span dangerouslySetInnerHTML={{ __html: t('pouchHeatSealing.sections.engineersLog.p2', '"For our standard industrial roller sealing machines, we typically establish a baseline of <strong>3 seconds / 40psi / 160°C</strong>. But before running a full batch, I always require my team to perform the \'Strip Test\' to avoid wasting expensive printed stock."') }}></span>
            </p>
          </div>
          {renderAuthorCard()}
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 mt-6">
            <h4 className="font-bold text-lg mb-2 text-neutral-800">Sealing & Assembly Cross-References</h4>
            <p className="text-neutral-600 text-sm leading-relaxed mb-0">
              For details on structural seal styles, read our guide comparing <Link to="/knowledge/fin-seal-lap-seal" className="text-primary-600 font-medium hover:underline inline-flex items-center gap-0.5">Fin Seal vs. Lap Seal joints <ArrowRight className="w-3 h-3"/></Link>. If you are utilizing a manual sealer, consult our instructions for <Link to="/knowledge/hand-clamp-sealer" className="text-primary-600 font-medium hover:underline inline-flex items-center gap-0.5">Hand Clamp Sealers <ArrowRight className="w-3 h-3"/></Link>.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "the-strip-test",
      title: t('pouchHeatSealing.sections.stripTest.title', "How to Perform the 'Strip Test'"),
      icon: <Thermometer className="h-6 w-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: t('pouchHeatSealing.sections.stripTest.intro', "Instead of wasting an entire bag to test a single temperature setting, the most cost-effective calibration method is the <strong>Strip Test</strong>. Since the entire pouch features heat-sealable properties, you can maximize your testing surface area.") }} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
            <div className="space-y-4">
              <div className="bg-neutral-50 p-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black text-lg uppercase mb-2 flex items-center gap-2"><span className="bg-black text-white px-2 py-0.5 text-sm">{t('pouchHeatSealing.sections.stripTest.step1Badge', 'Step 1')}</span> {t('pouchHeatSealing.sections.stripTest.step1Title', 'Start Low')}</h4>
                <p className="text-sm text-neutral-700">{t('pouchHeatSealing.sections.stripTest.step1Desc', 'Cut one bag into multiple strips across the width. Mark them with a sharpie starting at 150°C, increasing by 5°C (155°C, 160°C, 165°C).')}</p>
              </div>
              <div className="bg-neutral-50 p-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black text-lg uppercase mb-2 flex items-center gap-2"><span className="bg-black text-white px-2 py-0.5 text-sm">{t('pouchHeatSealing.sections.stripTest.step2Badge', 'Step 2')}</span> {t('pouchHeatSealing.sections.stripTest.step2Title', 'Incremental Testing')}</h4>
                <p className="text-sm text-neutral-700">{t('pouchHeatSealing.sections.stripTest.step2Desc', 'Run each strip through your machine at the designated temperature. Wait for it to cool down completely before evaluating.')}</p>
              </div>
              <div className="bg-neutral-50 p-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black text-lg uppercase mb-2 flex items-center gap-2"><span className="bg-black text-white px-2 py-0.5 text-sm">{t('pouchHeatSealing.sections.stripTest.step3Badge', 'Step 3')}</span> {t('pouchHeatSealing.sections.stripTest.step3Title', 'Peel Strength Test')}</h4>
                <p className="text-sm text-neutral-700">{t('pouchHeatSealing.sections.stripTest.step3Desc', 'Pull the sealed strip apart. The seal is optimal when the layers fuse completely. If the exterior film stretches or melts, the temp is too high.')}</p>
              </div>
            </div>
            
            <div 
              className="relative cursor-pointer group overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              onClick={() => openLightbox("/imgs/knowledge/heat-sealing-strip-test.jpg", t('pouchHeatSealing.sections.stripTest.imageAlt', "The Strip Test: Finding optimal temperature without wasting packaging."))}
            >
              <img 
                src="/imgs/knowledge/heat-sealing-strip-test.jpg" 
                alt="Heat Sealing Strip Test" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-black font-bold px-4 py-2 uppercase text-sm border-2 border-black">{t('pouchHeatSealing.viewFullSize', 'View Full Size')}</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "pain-points-solutions",
      title: t('pouchHeatSealing.sections.painPoints.title', "5 Common Heat Sealing Problems (And Solutions)"),
      icon: <AlertTriangle className="h-6 w-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 leading-relaxed text-lg mb-6">
            {t('pouchHeatSealing.sections.painPoints.intro', 'Heat sealing issues typically stem from an imbalance between temperature, pressure, and dwell time. Here are the 5 most common pain points our clients face and how to resolve them:')}
          </p>
          
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                q: t('pouchHeatSealing.sections.painPoints.point1.q', '1. The exterior of the pouch is melting or scorching.'),
                a: t('pouchHeatSealing.sections.painPoints.point1.a', 'Solution: Your temperature is too high, or your dwell time is too long. The exterior layer (PET, BOPP, Kraft) has a higher melting point than the inner PE layer, but it will melt if overheated. Decrease the dwell time slightly, or lower the temperature by 10°C. Also, ensure your PTFE (Teflon) covers on the sealing bars are not worn out.')
              },
              {
                q: t('pouchHeatSealing.sections.painPoints.point2.q', '2. The seal easily peels apart (Weak Seal).'),
                a: t('pouchHeatSealing.sections.painPoints.point2.a', 'Solution: The inner PE sealant layer hasn\'t reached its melting point. Increase the temperature by 5°C increments using the Strip Test. If the temperature is correct but it still leaks, increase the jaw pressure (psi).')
              },
              {
                q: t('pouchHeatSealing.sections.painPoints.point3.q', '3. Wasting too many bags trying to find the right setting.'),
                a: t('pouchHeatSealing.sections.painPoints.point3.a', 'Solution: Never use a full pouch for calibration. Use the "Strip Test" method. Cut one pouch vertically into 5-6 strips and test incrementing temperatures on each strip. One pouch is all you need.')
              },
              {
                q: t('pouchHeatSealing.sections.painPoints.point4.q', '4. The seal has wrinkles or creases.'),
                a: t('pouchHeatSealing.sections.painPoints.point4.a', 'Solution: Wrinkles are usually caused by uneven tension during feeding. Ensure the pouch is pulled taut before engaging the sealing jaws. On continuous band sealers, check that the cooling belts are synchronized with the heating belts.')
              },
              {
                q: t('pouchHeatSealing.sections.painPoints.point5.q', '5. Applying labels melts the pouch.'),
                a: t('pouchHeatSealing.sections.painPoints.point5.a', 'Solution: If you are heat-pressing labels, you must separate the label application parameters from the sealing parameters. Labels typically require lower temperatures. Test the label adhesion on a strip first, finding the minimum heat required to activate the adhesive without scorching the substrate.')
              }
            ].map((point, i) => (
              <div key={i} className="bg-neutral-50 p-4 border-l-4 border-primary-500 shadow-sm">
                <h4 className="font-bold text-neutral-900 text-lg mb-2">{point.q}</h4>
                <p className="text-neutral-700 text-sm leading-relaxed">{point.a}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "quality-standards",
      title: t('pouchHeatSealing.sections.quality.title', "Identifying a Perfect Seal"),
      icon: <ShieldCheck className="h-6 w-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 leading-relaxed text-lg mb-6">
            {t('pouchHeatSealing.sections.quality.intro', 'A flawless heat seal creates an airtight barrier that protects against OTR (Oxygen Transmission Rate) and MVTR (Moisture Vapor Transmission Rate) while maintaining the structural integrity of the pouch\'s exterior aesthetic.')}
          </p>
          
          <div 
            className="w-full relative cursor-pointer group overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8"
            onClick={() => openLightbox("/imgs/knowledge/heat-sealing-perfect-seal.jpg", t('pouchHeatSealing.sections.quality.imageAlt', "Macro view of a perfect pouch seal with no distortion."))}
          >
            <img 
              src="/imgs/knowledge/heat-sealing-perfect-seal.jpg" 
              alt="Perfect Heat Seal" 
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-white text-black font-bold px-4 py-2 uppercase text-sm border-2 border-black">{t('pouchHeatSealing.viewMacroShot', 'View Macro Shot')}</span>
            </div>
          </div>
          
          <div className="bg-[#D4FF00] p-8 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mt-8">
            <h4 className="font-black text-3xl uppercase mb-3 text-black">{t('pouchHeatSealing.sections.quality.ctaTitle', 'Need Production Help?')}</h4>
            <p className="text-neutral-900 text-lg mb-6 font-semibold">{t('pouchHeatSealing.sections.quality.ctaDesc', 'Struggling with inconsistent seals or changing over to new compostable materials? Let our engineers audit your line.')}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white font-bold px-8 py-4 uppercase tracking-widest text-sm transition-all border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              {t('pouchHeatSealing.sections.quality.ctaButton', 'Consult an Engineer')} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )
    },
    {
      id: "related-store-products",
      title: t('seo.relatedProducts.sectionTitle', "Related Products & Equipment"),
      icon: <Box className="h-6 w-6" />,
      content: <RelatedProductsShowcase productIds={['hand-clamp-sealer', 'smart-inkjet-coding-machine']} />
    }
  ]

  const sectionsForPouch = sectionsForAchieve

  const faqSections = [
    {
      q: t('pouchHeatSealing.faq.1.q', "What temperature should I seal my coffee bags at?"),
      a: t('pouchHeatSealing.faq.1.a', "For a standard roller sealing machine, a baseline of 160°C with 3 seconds of dwell time and 40psi of pressure is recommended. However, it is always advised to test starting at 150°C and increase in 5°C increments.")
    },
    {
      q: t('pouchHeatSealing.faq.2.q', "Why is my pouch melting when I heat seal it?"),
      a: t('pouchHeatSealing.faq.2.a', "If the exterior of your pouch is melting or distorting, your temperature is set too high or the dwell time is too long. The exterior layer (usually PET or BOPP) has a higher melting point than the inner PE layer, but extreme temperatures will damage it.")
    },
    {
      q: t('pouchHeatSealing.faq.3.q', "Can I seal labels with the same heat sealer?"),
      a: t('pouchHeatSealing.faq.3.a', "Yes, but you must find the minimum temperature where the label adheres without scorching the substrate. Use the strip test method to avoid wasting full labels during calibration.")
    }
  ]

  const renderLightbox = () => {
    if (!lightboxImage) return null;
    return (
      <div 
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/90 p-4 transition-all duration-300"
        onClick={closeLightbox}
      >
        <button 
          className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 border border-white/20 transition-all font-mono text-xl focus:outline-none animate-pulse"
          onClick={closeLightbox}
          aria-label="Close lightbox"
        >
          ✕
        </button>
        <div className="relative max-w-5xl max-h-[80vh] overflow-hidden flex items-center justify-center border-4 border-white shadow-2xl bg-slate-900 rounded-lg">
          <img 
            src={lightboxImage} 
            alt={lightboxCaption} 
            className="max-w-full max-h-[75vh] object-contain select-none pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        {lightboxCaption && (
          <p className="mt-4 text-white font-['JetBrains_Mono'] font-bold text-sm bg-black/75 px-4 py-2 rounded border border-white/10 max-w-2xl text-center shadow-lg">
            {lightboxCaption}
          </p>
        )}
      </div>
    );
  };

  if (isPouchDomain) {
    return (
      <PouchLayout>
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            {faqSections.map((faq, i) => (
              <article key={i} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 itemProp="name">{faq.q}</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">{faq.a}</p>
                </div>
              </article>
            ))}
          </section>
        </div>
        <BlogArticleTemplate
          {...seoProps}
          {...heroProps}
          sections={sectionsForPouch}
          faqSections={faqSections}
          ctaTitle={t('pouchHeatSealing.cta.pouch.title', "Upgrade Your Packaging")}
          ctaDescription={t('pouchHeatSealing.cta.pouch.desc', "Get a free quote today.")}
        />
        {renderLightbox()}
      </PouchLayout>
    )
  }

  // B2B Enterprise Layout (Achieve Pack)
  return (
    <>
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          {faqSections.map((faq, i) => (
            <article key={i} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{faq.q}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{faq.a}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
      <SEOPageLayout
        title={seoProps.title}
        description={seoProps.metaDescription}
        keywords={seoProps.keywords}
        canonicalUrl={seoProps.canonicalUrl}
        heroTitle={heroProps.heroTitle}
        heroSubtitle={heroProps.heroSubtitle}
        heroImage="/imgs/knowledge/heat-sealing-machine.jpg"
        introSummary={quickAnswer}
        sections={sectionsForAchieve}
        faqs={faqSections.map(f => ({ question: f.q, answer: f.a }))}
        schemaType="Article"
        ctaTitle={t('pouchHeatSealing.cta.achieve.title', "Need Expert Calibration?")}
        ctaDescription={t('pouchHeatSealing.cta.achieve.desc', "Stop wasting materials. Talk to an engineer.")}
        ctaButtonText={t('pouchHeatSealing.cta.achieve.button', "Contact Us")}
        heroStyle="banner"
      />
      {renderLightbox()}
    </>
  )
}
