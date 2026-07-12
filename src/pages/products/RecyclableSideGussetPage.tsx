import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import {
  Leaf, CheckCircle, ChevronDown, Calendar, ShoppingCart,
  Award, Recycle, Package, Shield, Search, Zap
} from 'lucide-react'

const p = 'seoPages.pages.recyclableSideGusset'

const RecyclableSideGussetPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'recyclable side gusset bag',
    'mono material side gusset',
    'PE film pouch',
    'single material packaging',
    'recyclable coffee bag',
    'mono layer packaging',
    'polyethylene mono material',
    'recyclable food packaging'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What does Mono-Material mean in flexible packaging?'),
      a: t(`${p}.faq.a1`, 'Mono-material means the entire pouch is constructed from a single polymer family (typically Polyethylene, or PE). Unlike conventional pouches which laminate incompatible plastics together (like PET and PE), mono-material pouches can be easily melted down and recycled without complex chemical separation.')
    },
    {
      q: t(`${p}.faq.q2`, 'How do consumers recycle Mono-PE side gusset bags?'),
      a: t(`${p}.faq.a2`, 'Mono-PE bags are classified as Soft Plastics (Recycle Code 4 - LDPE). In many regions, consumers can recycle them at designated supermarket drop-off points, or increasingly, via kerbside recycling programs. We recommend adding the OPRL (On-Pack Recycling Label) or How2Recycle logo to your artwork to guide consumers.')
    },
    {
      q: t(`${p}.faq.q3`, 'Does a Mono-PE bag have the same barrier properties as aluminum foil?'),
      a: t(`${p}.faq.a3`, 'While aluminum foil is an absolute barrier (0 OTR), modern high-barrier Mono-PE structures utilize an ultra-thin EVOH layer (less than 5% of the total structure by weight, maintaining recyclability compliance). This achieves an Oxygen Transmission Rate (OTR) of less than 1.0 cc/m²/day, which provides a 12-18 month shelf life for most dry foods and coffees.')
    },
    {
      q: t(`${p}.faq.q4`, 'Do recyclable side gusset bags look different from conventional bags?'),
      a: t(`${p}.faq.a4`, 'Not visually. We offer both high-gloss and soft-touch matte finishes on our Mono-PE structures. The only noticeable difference is that Mono-PE bags feel slightly softer and less rigid to the touch compared to stiff PET laminates.')
    },
    {
      q: t(`${p}.faq.q5`, 'Will Mono-PE bags run on my existing filling machines?'),
      a: t(`${p}.faq.a5`, 'Yes, but they may require minor adjustments. Mono-materials have a narrower heat sealing window than conventional laminates. You typically need to lower your sealing jaw temperatures by 10-15°C to avoid melting through the outer layer. We provide exact temperature guidelines for your specific machine.')
    }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'The Science of Mono-Material Packaging'),
      icon: <Search className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Recyclable side gusset bags represent a massive engineering breakthrough in flexible packaging.</strong> {t(`${p}.sections.overview.desc`, 'For decades, the only way to achieve the high oxygen and moisture barriers required for coffee, pet food, and snacks was to laminate different materials together—typically a stiff PET outer layer, an aluminum or VMPET middle barrier, and a PE inner sealing layer.')}
          </p>
          <p>{t(`${p}.sections.overview.desc2`, 'The problem? This Frankenstein structure cannot be separated by recycling facilities. By transitioning to a Mono-Material Polyethylene (Mono-PE) structure, we create a pouch that provides excellent barrier protection while remaining 100% recyclable in soft plastic streams.')}</p>

          <div className="bg-primary-50 p-5 rounded-xl border border-primary-100 mt-4">
            <h4 className="font-semibold text-primary-800 mb-3">{t(`${p}.sections.overview.whyTitle`, 'The Benefits of Mono-PE Side Gusset Bags')}</h4>
            <ul className="space-y-2 text-sm">
              {[
                t(`${p}.sections.overview.why1`, '♻️ 100% Recyclable (Code 4 LDPE) in standard soft plastic streams.'),
                t(`${p}.sections.overview.why2`, '🛡️ EVOH High-Barrier technology extends shelf life up to 18 months.'),
                t(`${p}.sections.overview.why3`, '🌍 Compliance with incoming EU (PPWR) and UK plastic packaging regulations.'),
                t(`${p}.sections.overview.why4`, '🎨 Uncompromised aesthetics with photorealistic digital printing.'),
                t(`${p}.sections.overview.why5`, '✅ Available from 1,000 pcs MOQ, allowing risk-free market testing.'),
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <img
              src="/imgs/store/products/recyclable-side-gusset-hero.png"
              alt="Technical illustration showing cross-section layers of recyclable mono-material pouch"
              className="w-full object-cover"
            />
            <p className="text-xs text-neutral-500 text-center py-2 bg-neutral-50">
              {t(`${p}.sections.overview.imgCaption`, 'Cross-section view: A Mono-PE structure replacing non-recyclable multi-layer PET/ALU laminates.')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'structure',
      title: t(`${p}.sections.structure.title`, 'How Mono-Material Structures Work'),
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.structure.intro`, 'To create a recyclable bag that performs like a conventional bag, packaging engineers construct a laminate using different densities of the same polymer family (Polyethylene).')}</p>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-xl border-2 border-primary-100 shadow-sm">
              <div className="bg-primary-100 text-primary-800 text-xs font-bold px-2 py-1 inline-block rounded mb-2">Outer Layer</div>
              <h4 className="font-semibold text-neutral-900 mb-1">MDO-PE (Machine Direction Oriented PE)</h4>
              <p className="text-sm text-neutral-600">This highly stretched layer provides the stiffness and heat-resistance needed for printing and bag forming. It replaces the unrecyclable PET layer.</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border-2 border-teal-100 shadow-sm">
              <div className="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 inline-block rounded mb-2">Middle Layer</div>
              <h4 className="font-semibold text-neutral-900 mb-1">EVOH Barrier (Under 5%)</h4>
              <p className="text-sm text-neutral-600">An ultra-thin layer of Ethylene Vinyl Alcohol provides the oxygen barrier. Kept under 5% by weight, it does not disrupt the PE recycling stream.</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border-2 border-green-100 shadow-sm">
              <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 inline-block rounded mb-2">Inner Layer</div>
              <h4 className="font-semibold text-neutral-900 mb-1">LDPE Sealant (Low-Density PE)</h4>
              <p className="text-sm text-neutral-600">A lower melting point layer that melts to form strong, hermetic seals without damaging the outer printed layer during manufacturing.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'compliance',
      title: t(`${p}.sections.compliance.title`, 'Regulatory Compliance & Taxes'),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.compliance.intro`, 'Governments globally are moving aggressively to penalize unrecyclable packaging. Transitioning to Mono-PE side gusset bags future-proofs your brand against incoming legislation.')}</p>

          <div className="overflow-x-auto mt-4 border border-neutral-200 rounded-xl">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100 text-neutral-800">
                  <th className="p-4 text-left border-b w-1/3">Region / Regulation</th>
                  <th className="p-4 text-left border-b border-l bg-red-50 w-1/3">Conventional Impact</th>
                  <th className="p-4 text-left border-b border-l bg-green-50 w-1/3">Mono-PE Advantage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-semibold text-neutral-800 bg-neutral-50">UK Plastic Packaging Tax</td>
                  <td className="p-4 border-l text-neutral-700">Subject to £210.82 per tonne tax.</td>
                  <td className="p-4 border-l text-neutral-700 bg-green-50/30">Compliant (can include 30% PCR).</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-semibold text-neutral-800 bg-neutral-50">EU PPWR (Packaging Waste)</td>
                  <td className="p-4 border-l text-neutral-700">Phased bans on non-recyclable laminates by 2030.</td>
                  <td className="p-4 border-l text-neutral-700 bg-green-50/30">Fully compliant with Design for Recycling guidelines.</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-semibold text-neutral-800 bg-neutral-50">CEFLEX Guidelines</td>
                  <td className="p-4 border-l text-neutral-700">Fails compatibility testing.</td>
                  <td className="p-4 border-l text-neutral-700 bg-green-50/30">Approved structure for circular economy.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: t(`${p}.sections.faq.title`, 'Frequently Asked Questions'),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="group bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200">
              <button
                className="flex items-center justify-between w-full p-5 cursor-pointer hover:bg-neutral-100 transition text-left"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span className="font-semibold text-neutral-900 pr-4">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 text-neutral-500 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-neutral-700 text-sm">{faq.a}</div>
              )}
            </div>
          ))}

          {/* JSON-LD FAQ Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })}} />
        </div>
      )
    },
    {
      id: 'expert',
      title: t(`${p}.sections.expert.title`, 'Expert Author'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-neutral-900 to-primary-900 rounded-2xl p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-primary-500 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">RW</div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">{t(`${p}.sections.expert.name`, 'Ryan Wong')}</h3>
              <p className="text-primary-300 text-sm">{t(`${p}.sections.expert.title2`, 'Co-Founder & Chief Packaging Engineer')}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">14+ Years Packaging Engineering</span>
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">Material Science Expert</span>
              </div>
              <p className="text-neutral-300 text-sm mt-3">
                {t(`${p}.sections.expert.bio`, 'Ryan holds a degree in Materials Science and specializes in reverse-engineering conventional unrecyclable packaging into high-performance mono-material structures that pass stringent EU recycling standards.')}
              </p>
              <button
                onClick={openCalendly}
                className="mt-4 flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white text-sm px-4 py-2 rounded-lg transition font-medium"
              >
                <Calendar className="h-4 w-4" />
                {t(`${p}.sections.expert.cta`, 'Schedule a Technical Transition Audit')}
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`, 'Future-Proof Your Packaging'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-50 to-green-50 p-6 rounded-2xl border border-primary-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-3">{t(`${p}.sections.cta.heading`, 'Ready to switch to Mono-Material packaging?')}</h4>
          <p className="text-neutral-700 mb-5">{t(`${p}.sections.cta.desc`, 'Test the market risk-free. Our digital printing technology allows you to order premium Mono-PE recyclable side gusset bags starting at just 1,000 pieces. Delivered in 20-30 days.')}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.bookBtn`, 'Talk to an Engineer')}
            </button>
            <Link
              to="/store/product/eco-sidegusset"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              {t(`${p}.sections.cta.viewBtn`, 'View Eco Side Gusset Pouches')}
            </Link>
          </div>
          <div className="mt-5 pt-4 border-t border-primary-200 text-sm text-neutral-600">
            <strong>{t(`${p}.sections.cta.relatedLabel`, 'Related:')}</strong>{' '}
            <Link to="/products/eco-side-gusset-pouch-guide" className="text-primary-600 hover:underline">Eco Side Gusset Guide</Link> |{' '}
            <Link to="/products/eco-vs-conventional-pouch-comparison" className="text-primary-600 hover:underline">Eco vs Conventional</Link> |{' '}
            <Link to="/industry/coffee-tea" className="text-primary-600 hover:underline">Coffee & Tea Industry</Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <DualDomainSEOHead
        title={t(`${p}.seo.title`, 'Recyclable Side Gusset Bags: Mono-Material vs Laminates 2025')}
        description={t(`${p}.seo.description`, 'Discover how Mono-PE recyclable side gusset bags match the performance of conventional multi-layer laminates. Future-proof your packaging. MOQ 1,000 pcs.')}
        keywords={keywords}
        schemaType="Article"
        ogImage="/imgs/store/products/recyclable-side-gusset-hero.png"
      />

      <SEOPageLayout
        heroBgColor="#14532d"
        title={t(`${p}.seo.title`, 'Recyclable Side Gusset Bags: Mono-Material Explained')}
        description={t(`${p}.seo.description`, 'Learn the engineering behind Mono-PE recyclable side gusset bags and how they match the performance of conventional multi-layer laminates.')}
        keywords={keywords}
        heroTitle={t(`${p}.seo.heroTitle`, 'Recyclable Side Gusset Bags')}
        heroSubtitle={t(`${p}.seo.heroSubtitle`, 'The Science of Mono-Materials. 100% Recyclable. High-Barrier EVOH Protection. MOQ 1,000 pcs.')}
        introSummary={t(`${p}.seo.introSummary`, 'Governments and consumers alike are demanding an end to unrecyclable plastic packaging. The solution for side gusset bags is Mono-Material Polyethylene (Mono-PE). By utilizing advanced MDO-PE stretching techniques and ultra-thin EVOH barrier layers, we create a pouch that preserves your product flawlessly while remaining 100% kerbside recyclable.')}
        sections={sections}
        heroImage="/imgs/store/products/recyclable-side-gusset-hero.png"
      />

      {/* GEO Hidden Semantic Block */}
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, i) => (
            <article key={i} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{faq.q}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{faq.a}</p>
              </div>
            </article>
          ))}
        </section>
        <section data-ai-product="true">
          <h2>Recyclable Mono-PE Side Gusset Pouch</h2>
          <p>Advanced sustainable packaging. Material: 100% Recyclable Mono-PE (LDPE Code 4) with EVOH barrier. OTR &lt; 1.0 cc/m²/day. Compliant with EU PPWR.</p>
          <p>Perfect replacement for conventional PET/ALU/PE coffee bags. Available with recyclable one-way degassing valves and pocket zippers. MOQ 1,000 pcs. Custom digital printing.</p>
        </section>
      </div>
    </>
  )
}

export default RecyclableSideGussetPage
