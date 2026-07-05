import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Settings, Thermometer, ShieldCheck, AlertTriangle, Shield, CheckCircle, Package, Calendar, Zap, Layers, Flame } from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'

// Custom Clickable Image with Lightbox
const ClickableImage: React.FC<{
  src: string
  alt: string
  className?: string
  caption?: string
}> = ({ src, alt, className = '', caption }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <figure className="cursor-pointer group relative" onClick={() => setIsOpen(true)}>
        <img 
          src={src} 
          alt={alt} 
          className={`${className} transition-all duration-300 group-hover:scale-[1.01] rounded-xl border border-neutral-200 shadow-md`}
          loading="lazy"
        />
        {caption && (
          <figcaption className="text-xs text-neutral-500 mt-2 text-center font-sans">{caption}</figcaption>
        )}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
          <span className="bg-white/95 text-neutral-800 text-xs px-3 py-1.5 font-bold uppercase tracking-wider border border-neutral-300 shadow-sm rounded">
            Click to Zoom
          </span>
        </div>
      </figure>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 z-[10000] text-white hover:text-neutral-300 bg-black/60 rounded-full p-2.5 border border-white/20"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
            aria-label="Close image"
          >
            ✕
          </button>
          <div className="relative max-w-4xl max-h-[85vh]">
            <img 
              src={src} 
              alt={alt} 
              className="max-w-full max-h-[80vh] object-contain rounded border-2 border-white shadow-2xl bg-neutral-900"
              onClick={(e) => e.stopPropagation()}
            />
            {caption && (
              <p className="mt-3 text-white text-center bg-black/75 px-4 py-2 rounded border border-white/10 text-sm max-w-xl mx-auto shadow-lg">
                {caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default function HandClampSealerPage() {
  const { t } = useTranslation()
  const isPouchDomain = getDomain() === 'pouch'

  // --- E-E-A-T Ryan Wong Profile Card ---
  const renderAuthorCard = () => (
    <div className="bg-neutral-900 border-l-4 border-emerald-500 p-6 my-8 rounded-r-xl shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-emerald-400 flex-shrink-0 bg-neutral-800">
          <img 
            src="/imgs/team/ryan_wong_avatar.jpg" 
            alt="Ryan Wong" 
            className="w-full h-full object-cover" 
            onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Ryan+Wong&background=10B981&color=fff&size=128' }} 
          />
        </div>
        <div>
          <h3 className="font-bold text-xl mb-1 text-white">Ryan Wong</h3>
          <p className="text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-widest">Co-Founder & Chief Packaging Engineer</p>
          <div className="inline-block bg-emerald-950/50 text-emerald-300 text-xs px-2.5 py-1 rounded font-medium mb-3 border border-emerald-800/50">
            {t('handClampSealer.author.credentials', '14+ Years Packaging Engineering | GRS & FSC Auditing Expert')}
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed font-sans">
            {t('handClampSealer.author.bio', 'With over 14 years of polytechnic materials science expertise, Ryan Wong helps brands select and calibrate manual and automated heat sealing setups for multi-layer barrier pouches.')}
          </p>
        </div>
        <div className="md:ml-auto flex-shrink-0 mt-4 md:mt-0">
          <Link to="/contact" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-bold px-5 py-2.5 rounded-lg transition-colors text-sm uppercase text-center w-full md:w-auto shadow-md">
            {t('handClampSealer.author.cta', 'Consult Ryan')}
          </Link>
        </div>
      </div>
    </div>
  )

  const seoProps = {
    title: t('handClampSealer.seo.title', 'Hand-Clamp Sealer Guide: Portable FKR Sealer Calibration | Achieve Pack'),
    metaDescription: t('handClampSealer.seo.description', 'Master manual bag sealing with our FKR Hand-Clamp Sealer guide. Get optimal temperature settings, structural specifications, and E-E-A-T troubleshooting tips.'),
    keywords: [
      t('handClampSealer.seo.keywords.1', "Hand-Clamp Sealer"),
      t('handClampSealer.seo.keywords.2', "FKR Sealing Machine"),
      t('handClampSealer.seo.keywords.3', "Portable Handheld Sealer"),
      t('handClampSealer.seo.keywords.4', "Direct Heat Sealer Settings"),
      t('handClampSealer.seo.keywords.5', "FKR-200 FKR-300 FKR-400")
    ],
    canonicalUrl: `https://${isPouchDomain ? 'pouch.eco' : 'achievepack.com'}/knowledge/hand-clamp-sealer-guide`
  }

  const heroProps = {
    heroTitle: t('handClampSealer.hero.title', 'FKR Hand-Clamp Sealer Calibration Guide'),
    heroSubtitle: t('handClampSealer.hero.subtitle', 'Engineered calibration instructions for portable hand-clamp heat sealers. Learn how to achieve airtight seals on heavy-duty aluminum, kraft, and laminate bags.'),
  }

  const quickAnswer = t('handClampSealer.quickAnswer', "FKR Hand-Clamp Sealers utilize constant direct heat rather than impulse wire heating, making them ideal for heavy-duty laminated foils and thick kraft paper bags. For a standard 100-micron foil bag, the optimal sealing temperature is 160°C–180°C with a manual clamp dwell time of 2.5–3.5 seconds. Always allow jaws to heat up for 5–7 minutes before your first operation.")

  const sectionsForAchieve = [
    {
      id: "engineers-notebook",
      title: t('handClampSealer.sections.notebook.title', "From Ryan Wong's Engineering Notebook"),
      icon: <Settings className="h-6 w-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-neutral-900 p-6 border-l-4 border-emerald-500 text-neutral-200 rounded-r-xl shadow-md">
            <p className="font-bold text-emerald-400 mb-2 text-xs uppercase tracking-wider">{t('handClampSealer.sections.notebook.badge', 'Expert Insight')}</p>
            <p className="leading-relaxed font-sans text-sm">
              {t('handClampSealer.sections.notebook.p1', '"When transitioning a packaging line from tabletop impulse sealers to portable hand-clamp sealers (like the FKR series), operator consistency is key. Tabletop machines control dwell time automatically; handheld clamp sealers rely entirely on manual hand pressure and operator dwell timing."')}
            </p>
            <p className="mt-4 leading-relaxed font-sans text-sm">
              {t('handClampSealer.sections.notebook.p2', '"Because FKR sealers feature dual heated jaws (top and bottom heating bars), they transfer heat extremely fast. For multi-layer aluminum or paper laminates, I always recommend starting the temperature at 150°C and slowly dialing up. If you see smoking or visual layer distortion, back off by 10°C. Never drag the jaws while clamp pressure is engaged, or you will tear the protective PTFE coating."')}
            </p>
          </div>
          {renderAuthorCard()}
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 mt-6">
            <h4 className="font-bold text-lg mb-2 text-neutral-800 font-sans">Sealing & Assembly Cross-References</h4>
            <p className="text-neutral-600 text-sm leading-relaxed mb-0 font-sans">
              To calibrate heat sealing parameters (temperature, pressure, dwell time), check out our comprehensive <Link to="/knowledge/pouch-heat-sealing-guide" className="text-primary-600 font-semibold hover:underline inline-flex items-center gap-0.5">Pouch Heat Sealing Calibration Guide <ArrowRight className="w-3 h-3"/></Link>. To compare structural seal seam styles, see our guide on <Link to="/knowledge/fin-seal-lap-seal" className="text-primary-600 font-semibold hover:underline inline-flex items-center gap-0.5">Fin Seal vs. Lap Seal joints <ArrowRight className="w-3 h-3"/></Link>.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "technical-specifications",
      title: t('handClampSealer.sections.specs.title', "FKR Series Technical Comparison Matrix"),
      icon: <Layers className="h-6 w-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 leading-relaxed text-sm">
            {t('handClampSealer.sections.specs.intro', 'The FKR series plier-type sealers are categorized by their sealing jaw length (200mm, 300mm, or 400mm). Check the technical specifications below to select the model matching your pouch widths:')}
          </p>

          <div className="overflow-x-auto border border-neutral-200 rounded-xl shadow-sm">
            <table className="min-w-full divide-y divide-neutral-200 text-sm text-left">
              <thead className="bg-neutral-100 font-bold text-neutral-800 uppercase tracking-wider text-xs">
                <tr>
                  <th className="px-6 py-4">{t('handClampSealer.table.model', 'Model / Spec')}</th>
                  <th className="px-6 py-4">{t('handClampSealer.table.length', 'Sealing Length')}</th>
                  <th className="px-6 py-4">{t('handClampSealer.table.width', 'Seal Width')}</th>
                  <th className="px-6 py-4">{t('handClampSealer.table.power', 'Power Rating')}</th>
                  <th className="px-6 py-4">{t('handClampSealer.table.temp', 'Temperature Range')}</th>
                  <th className="px-6 py-4">{t('handClampSealer.table.suitability', 'Material Compatibility')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-600 bg-white">
                <tr>
                  <td className="px-6 py-4 font-semibold text-neutral-900">FKR-200</td>
                  <td className="px-6 py-4">200mm (8 inches)</td>
                  <td className="px-6 py-4">10mm (Ribbed)</td>
                  <td className="px-6 py-4">300W</td>
                  <td className="px-6 py-4">0–300°C</td>
                  <td className="px-6 py-4">Kraft Paper, Mylar, Thick Foil</td>
                </tr>
                <tr className="bg-neutral-50/50">
                  <td className="px-6 py-4 font-semibold text-neutral-900">FKR-300</td>
                  <td className="px-6 py-4">300mm (12 inches)</td>
                  <td className="px-6 py-4">10mm (Ribbed)</td>
                  <td className="px-6 py-4">400W</td>
                  <td className="px-6 py-4">0–300°C</td>
                  <td className="px-6 py-4">Kraft Paper, Mylar, Thick Foil</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-neutral-900">FKR-400</td>
                  <td className="px-6 py-4">400mm (16 inches)</td>
                  <td className="px-6 py-4">10mm (Ribbed)</td>
                  <td className="px-6 py-4">500W</td>
                  <td className="px-6 py-4">0–300°C</td>
                  <td className="px-6 py-4">Heavy-Duty Liners, Thick Foil</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: "pain-points",
      title: t('handClampSealer.sections.painPoints.title', "5 Sealing Challenges & Engineering Solutions"),
      icon: <AlertTriangle className="h-6 w-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 leading-relaxed text-sm">
            {t('handClampSealer.sections.painPoints.intro', 'Manual heat sealing introduces operational variables that automated lines eliminate. Master these 5 common challenges to secure perfect seals:')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="border border-neutral-200 rounded-xl p-5 bg-white shadow-sm hover:border-emerald-200 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-neutral-900 text-white font-bold px-2 py-0.5 text-xs rounded">01</span>
                <h4 className="font-bold text-neutral-900 text-sm">{t('handClampSealer.sections.painPoints.p1.title', 'Wrinkled or Creased Seal Lines')}</h4>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {t('handClampSealer.sections.painPoints.p1.desc', 'Cause: Pouch is not held taut before clamp jaws close. Solution: Always pull the pouch flaps outwards horizontally before engaging the sealer plier, or secure the pouch base on a flat surface.')}
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-5 bg-white shadow-sm hover:border-emerald-200 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-neutral-900 text-white font-bold px-2 py-0.5 text-xs rounded">02</span>
                <h4 className="font-bold text-neutral-900 text-sm">{t('handClampSealer.sections.painPoints.p2.title', 'Sealer Jaws Sticking to Pouch Exterior')}</h4>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {t('handClampSealer.sections.painPoints.p2.desc', 'Cause: Temperature exceeds the exterior layer melting point, or protective PTFE coating is degraded. Solution: Lower temperature by 10°C, clean the jaw ribbed grooves, or apply high-temp PTFE adhesive tape over the sealing bar.')}
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-5 bg-white shadow-sm hover:border-emerald-200 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-neutral-900 text-white font-bold px-2 py-0.5 text-xs rounded">03</span>
                <h4 className="font-bold text-neutral-900 text-sm">{t('handClampSealer.sections.painPoints.p3.title', 'Weak, Easily-Peeled Seals')}</h4>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {t('handClampSealer.sections.painPoints.p3.desc', 'Cause: Dwell time is too short or temperature is too low. Solution: Perform a Strip Test. Increase dwell time to 3.5 seconds or raise the temperature knob in 5°C increments.')}
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-5 bg-white shadow-sm hover:border-emerald-200 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-neutral-900 text-white font-bold px-2 py-0.5 text-xs rounded">04</span>
                <h4 className="font-bold text-neutral-900 text-sm">{t('handClampSealer.sections.painPoints.p4.title', 'Uneven Sealing or Corner Leaks')}</h4>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {t('handClampSealer.sections.painPoints.p4.desc', 'Cause: Inconsistent hand pressure across the clamp length. Solution: Make sure to grip the sealer handles firmly near the ends for maximum mechanical leverage. Check that the heating elements are fully pre-heated.')}
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-5 bg-white shadow-sm hover:border-emerald-200 transition-colors md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-neutral-900 text-white font-bold px-2 py-0.5 text-xs rounded">05</span>
                <h4 className="font-bold text-neutral-900 text-sm">{t('handClampSealer.sections.painPoints.p5.title', 'Pouch Outer Layer Scorched or Burnt')}</h4>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {t('handClampSealer.sections.painPoints.p5.desc', 'Cause: Excessive temperature or clamping for too long. Solution: Reduce clamping pressure or drop the temperature setting. If using thin films, switch to an impulse heat sealer, as direct constant heat is too aggressive for thin LDPE/BOPP pouches.')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "product-showcase",
      title: t('handClampSealer.sections.showcase.title', "Quality Construction Details"),
      icon: <ShieldCheck className="h-6 w-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 leading-relaxed text-sm">
            {t('handClampSealer.sections.showcase.intro', 'Equipped with heavy-duty insulated handles, precise temperature dials, and solid steel clamp jaws, the Achieve Pack Hand-Clamp Sealer provides reliable commercial performance.')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-4">
            <div>
              <ClickableImage 
                src="/imgs/store/products/hand-clamp-sealer-portable-direct-heat-thumbnail-1.jpg"
                alt="FKR Hand-Clamp Sealer close up"
                caption={t('handClampSealer.sections.showcase.cap1', 'Professional commercial-grade handheld plier sealer')}
              />
            </div>
            <div>
              <ClickableImage 
                src="/imgs/store/products/hand-clamp-sealer-portable-direct-heat-thumbnail-3.jpg"
                alt="FKR Temperature Controller Close up"
                caption={t('handClampSealer.sections.showcase.cap2', 'Adjustable 0-300°C analog temperature control dial')}
              />
            </div>
          </div>

          {/* Related E-Commerce Card */}
          <div className="bg-neutral-900 text-white rounded-2xl p-8 border border-neutral-800 shadow-xl flex flex-col md:flex-row items-center gap-8 mt-10">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <ClickableImage 
                src="/imgs/store/products/hand-clamp-sealer-portable-direct-heat-thumbnail-2.jpg"
                alt="FKR Series Lineup comparison"
                className="w-full rounded-xl"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wider border border-emerald-500/30">
                  Ready to Ship
                </span>
                <span className="text-neutral-400 text-xs font-semibold">Min Order: 1 Set</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white leading-tight">
                {t('handClampSealer.relatedProduct.title', 'Commercial Hand-Clamp Sealer (FKR Series)')}
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {t('handClampSealer.relatedProduct.desc', 'A heavy-duty portable sealer designed specifically for high-barrier foil and thick kraft pouches. Available in 200mm, 300mm, and 400mm sealing widths.')}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-emerald-400">$91.14</span>
                <span className="text-neutral-400 text-xs line-through">$182.28</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link 
                  to="/store/product/hand-clamp-sealer" 
                  className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-bold px-6 py-3 rounded-lg text-sm uppercase transition-colors"
                >
                  <Package className="w-4 h-4" />
                  {t('handClampSealer.relatedProduct.btnView', 'Order Online')}
                </Link>
                <Link 
                  to="/contact" 
                  className="flex items-center justify-center gap-2 border border-neutral-700 hover:bg-neutral-800 text-white font-bold px-6 py-3 rounded-lg text-sm uppercase transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  {t('handClampSealer.relatedProduct.btnConsult', 'Technical Audit')}
                </Link>
              </div>
            </div>
          </div>

        </div>
      )
    }
  ]

  const faqSections = [
    {
      q: t('handClampSealer.faq.1.q', "What is the difference between direct heat sealers and impulse sealers?"),
      a: t('handClampSealer.faq.1.a', "Impulse sealers apply heat only when the jaws are compressed and release it instantly, which is ideal for thin PE/BOPP pouches. Direct heat sealers (like the FKR series) maintain a constant temperature on both jaws, transferring more heat energy. This constant heat is required to penetrate thick high-barrier foils and multi-layer kraft paper pouches.")
    },
    {
      q: t('handClampSealer.faq.2.q', "Why does the sealer stick or burn through my bags?"),
      a: t('handClampSealer.faq.2.a', "Stickiness and burn-through occur when the temperature setting exceeds the melting point of the pouch's exterior layer. Lower the temperature by 10°C, and ensure that the protective high-temp PTFE (Teflon) tape covering the jaws is intact and not worn down to the bare metal.")
    },
    {
      q: t('handClampSealer.faq.3.q', "How long does it take for the sealer jaws to heat up?"),
      a: t('handClampSealer.faq.3.a', "Direct heat FKR sealers require a warm-up period of 5 to 7 minutes after being switched on to ensure the jaws reach a uniform thermal equilibrium across the entire sealing length. Operation before pre-heating will result in weak, inconsistent seals.")
    },
    {
      q: t('handClampSealer.faq.4.q', "Can this sealer be used with 100% recyclable mono-material PE bags?"),
      a: t('handClampSealer.faq.4.a', "While it is possible, direct heat sealers are generally not recommended for pure mono-PE bags because PE is highly heat-sensitive and easily melts/warping under constant heat. For mono-PE, a precise impulse sealer with automatic cooling control is highly recommended.")
    }
  ]

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
          sections={sectionsForAchieve}
          faqSections={faqSections}
          ctaTitle={t('handClampSealer.cta.pouch.title', "Calibrate Your Manual Sealing Line")}
          ctaDescription={t('handClampSealer.cta.pouch.desc', "Get B2B wholesale pricing on direct heat handheld sealers.")}
        />
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
        heroImage="/imgs/store/products/hand-clamp-sealer-portable-direct-heat-thumbnail-2.jpg"
        introSummary={quickAnswer}
        sections={sectionsForAchieve}
        faqs={faqSections.map(f => ({ question: f.q, answer: f.a }))}
        schemaType="Article"
        ctaTitle={t('handClampSealer.cta.achieve.title', "Need Packaging Line Advice?")}
        ctaDescription={t('handClampSealer.cta.achieve.desc', "Audit your direct heat sealing parameters with our experts today.")}
        ctaButtonText={t('handClampSealer.cta.achieve.button', "Schedule Audit")}
        heroStyle="banner"
      />
    </>
  )
}
