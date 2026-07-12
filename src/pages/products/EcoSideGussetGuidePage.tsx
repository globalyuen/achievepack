import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import {
  Leaf, CheckCircle, ChevronDown, Calendar, ShoppingCart,
  Award, Box, PackageOpen, Package, Recycle, MapPin, Shield
} from 'lucide-react'

const p = 'seoPages.pages.ecoSideGussetGuide'

const EcoSideGussetGuidePage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'eco side gusset pouch',
    'sustainable coffee bag packaging',
    'recyclable side gusset bag',
    'biodegradable coffee bag',
    'eco coffee packaging',
    'side gusset coffee pouch',
    'mono recyclable coffee bag',
    'sustainable tea packaging'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What makes a side gusset pouch "eco-friendly"?'),
      a: t(`${p}.faq.a1`, 'An eco-friendly side gusset pouch is manufactured using sustainable films instead of mixed plastics. This means replacing traditional unrecyclable PET/VMPET/PE laminates with either Mono-PE (100% recyclable soft plastic), PCR (post-consumer recycled materials), or certified compostable materials like PLA and kraft paper.')
    },
    {
      q: t(`${p}.faq.q2`, 'Can eco side gusset bags hold heavier weights like 1kg of coffee?'),
      a: t(`${p}.faq.a2`, 'Yes, side gusset bags are structurally excellent for heavier volumes because the folded side panels distribute the weight evenly across a flat bottom seal. We regularly produce 1kg and 2.5kg eco side gusset bags for wholesale coffee roasters.')
    },
    {
      q: t(`${p}.faq.q3`, 'Are the degassing valves on eco side gusset bags recyclable?'),
      a: t(`${p}.faq.a3`, 'When you order our Mono-PE recyclable bags, we specifically install a mono-PE one-way degassing valve. This ensures the entire packaging unit can go straight into soft plastic recycling streams without the consumer needing to cut the valve out.')
    },
    {
      q: t(`${p}.faq.q4`, 'Do you offer custom digital printing on eco side gusset pouches?'),
      a: t(`${p}.faq.a4`, 'Yes. We use HP Indigo 25K digital presses to print directly onto eco-friendly films, including compostable and recyclable options. You can achieve photorealistic designs, matte/gloss finishes, and edge-to-edge printing starting at just 1,000 bags.')
    },
    {
      q: t(`${p}.faq.q5`, 'What is the production time for custom printed eco side gusset bags?'),
      a: t(`${p}.faq.a5`, 'Our standard production lead time is 20-30 days from final artwork approval. This includes printing, curing, lamination, and pouch converting.')
    }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'The Classic Coffee Bag, Reimagined for Sustainability'),
      icon: <Box className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>The side gusset pouch is the traditional workhorse of the coffee and tea industry.</strong> {t(`${p}.sections.overview.desc`, 'Recognized by its vertical shape and folded side panels, it maximizes interior volume while maintaining a compact footprint on retail shelves.')}
          </p>
          <p>{t(`${p}.sections.overview.desc2`, 'In the past, these bags required thick layers of aluminum foil and mixed plastics to maintain freshness, making them impossible to recycle. Today, our eco side gusset pouches utilize advanced Mono-PE EVOH structures and compostable laminates to offer the exact same barrier protection in a fully sustainable format.')}</p>

          <div className="bg-primary-50 p-5 rounded-xl border border-primary-100 mt-4">
            <h4 className="font-semibold text-primary-800 mb-3">{t(`${p}.sections.overview.whyTitle`, 'Why Brands Choose the Eco Side Gusset Shape')}</h4>
            <ul className="space-y-2 text-sm">
              {[
                t(`${p}.sections.overview.why1`, '📦 High Volume Efficiency: Side gussets expand to hold more product per square inch of shelf space.'),
                t(`${p}.sections.overview.why2`, '🔄 100% Recyclable: Transitioning to Mono-PE removes non-recyclable foil layers.'),
                t(`${p}.sections.overview.why3`, '💨 Degassing Valve Ready: Integrated one-way valves for freshly roasted coffee.'),
                t(`${p}.sections.overview.why4`, '🏷️ Front/Back/Side Branding: Four distinct panels for marketing and regulatory information.'),
                t(`${p}.sections.overview.why5`, '⬇️ Low MOQ: Custom digital printing starts at just 1,000 pieces.'),
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <img
              src="/imgs/store/products/eco-side-gusset-guide-hero.png"
              alt="Premium eco side gusset coffee bag with kraft and botanical artwork"
              className="w-full object-cover"
            />
            <p className="text-xs text-neutral-500 text-center py-2 bg-neutral-50">
              {t(`${p}.sections.overview.imgCaption`, 'A premium eco side gusset coffee bag featuring botanical artwork, demonstrating edge-to-edge digital printing on sustainable material.')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t(`${p}.sections.materials.title`, 'Sustainable Material Options'),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.materials.intro`, 'When transitioning to eco side gusset pouches, brands can choose between three distinct sustainable material paths based on their market, shelf-life needs, and local waste infrastructure.')}</p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-700 text-white">
                  <th className="p-3 text-left">Material Structure</th>
                  <th className="p-3 text-left">Barrier (OTR/WVTR)</th>
                  <th className="p-3 text-left">End of Life</th>
                  <th className="p-3 text-left">Visual Finish</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mono-PE (High Barrier)', 'Excellent (EVOH Layer)', 'Kerbside Soft Plastic Recyclable', 'Matte or Gloss'],
                  ['PCR (Post-Consumer Recycled)', 'High Barrier', 'Recyclable (Contains 30%+ recycled waste)', 'Matte or Gloss'],
                  ['Compostable (Kraft/PLA/PBAT)', 'Moderate Barrier', 'Industrial Composting', 'Natural Paper / Matte'],
                ].map(([mat, barrier, eol, finish], i) => (
                  <tr key={i} className={`border-b border-neutral-200 ${i % 2 === 1 ? 'bg-neutral-50' : ''}`}>
                    <td className="p-3 font-semibold text-primary-800">{mat}</td>
                    <td className="p-3">{barrier}</td>
                    <td className="p-3 text-xs">{eol}</td>
                    <td className="p-3 text-xs text-neutral-600">{finish}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">🔬 {t(`${p}.sections.materials.notebookTitle`, "From Ryan Wong's Engineering Notebook")}</h4>
            <p className="text-sm text-amber-900 italic">
              {t(`${p}.sections.materials.notebook`, '"Side gusset bags undergo significant stress at the corner seals, especially the bottom K-seal where four layers of film converge. When engineering mono-material PE side gusset bags, we have to adjust the sealing jaw temperatures precisely, because unlike traditional laminates where the outer PET layer resists heat, mono-PE is prone to melting through if overheated. We use specialized low-temperature sealant layers on the inside of the PE structure to guarantee strong, hermetic corner seals without damaging the printed outer layer." — Ryan Wong, Co-Founder')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'closure',
      title: t(`${p}.sections.closure.title`, 'Closure & Resealability Options'),
      icon: <PackageOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.closure.intro`, 'Because side gusset bags do not have a flat top, incorporating resealability is slightly different than a standard stand-up pouch.')}</p>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {[
              { title: t(`${p}.sections.closure.tinTie`, 'Adhesive Tin Ties'), desc: t(`${p}.sections.closure.tinTieDesc`, 'The traditional method. A peel-and-stick tin tie is applied to the top of the bag, allowing the user to roll down the top and secure it. Note: Tin ties must be removed before recycling the bag.') },
              { title: t(`${p}.sections.closure.pocket`, 'Pocket Zipper (Pull Tab)'), desc: t(`${p}.sections.closure.pocketDesc`, 'A modern, premium feature where a zipper is built into the front panel. The consumer pulls a tear tab to access the zipper. Fully recyclable if made from Mono-PE.') },
              { title: t(`${p}.sections.closure.heat`, 'Heat Seal Only'), desc: t(`${p}.sections.closure.heatDesc`, 'Often used for wholesale (1kg+) bags or single-use formats where the consumer immediately transfers the contents to a rigid storage canister upon opening.') },
              { title: t(`${p}.sections.closure.valve`, 'Degassing Valve'), desc: t(`${p}.sections.closure.valveDesc`, 'Essential for freshly roasted coffee. We apply eco-compatible valves during production to maintain the integrity of the recyclable or compostable certification.') },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                <h4 className="font-semibold text-primary-700 mb-1">{title}</h4>
                <p className="text-sm text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.sections.applications.title`, 'Best Applications for Side Gusset Pouches'),
      icon: <MapPin className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <ul className="grid md:grid-cols-2 gap-4 mt-2">
            {[
              { title: 'Specialty Coffee Beans', desc: 'The traditional format for 250g and 1kg bags.' },
              { title: 'Loose Leaf Tea', desc: 'Compact footprint maximizes retail shelf space.' },
              { title: 'Protein & Supplements', desc: 'Large volume capacity for powders.' },
              { title: 'Pet Food & Treats', desc: 'Durable construction for heavy weights up to 5kg.' }
            ].map((s, i) => (
              <li key={i} className="flex flex-col p-4 bg-white border border-neutral-200 rounded-xl">
                <h4 className="font-semibold text-neutral-900">{s.title}</h4>
                <p className="text-sm text-neutral-600 mt-1">{s.desc}</p>
              </li>
            ))}
          </ul>
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
                {t(`${p}.sections.expert.bio`, 'Ryan specializes in re-engineering traditional packaging formats into sustainable mono-material structures without compromising structural integrity or barrier performance. He leads Achieve Pack\'s R&D division for recyclable coffee packaging.')}
              </p>
              <button
                onClick={openCalendly}
                className="mt-4 flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white text-sm px-4 py-2 rounded-lg transition font-medium"
              >
                <Calendar className="h-4 w-4" />
                {t(`${p}.sections.expert.cta`, 'Book a Packaging Consultation')}
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`, 'Start Your Sustainable Packaging Journey'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-50 to-green-50 p-6 rounded-2xl border border-primary-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-3">{t(`${p}.sections.cta.heading`, 'Ready to print eco side gusset pouches?')}</h4>
          <p className="text-neutral-700 mb-5">{t(`${p}.sections.cta.desc`, 'Get a free sample pack of our eco side gusset bags to test with your coffee or loose leaf tea. MOQ from 1,000 pcs. We provide custom dielines and full artwork support.')}</p>
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
              {t(`${p}.sections.cta.viewBtn`, 'View Pricing & Order')}
            </Link>
          </div>
          <div className="mt-5 pt-4 border-t border-primary-200 text-sm text-neutral-600">
            <strong>{t(`${p}.sections.cta.relatedLabel`, 'Related:')}</strong>{' '}
            <Link to="/products/side-gusset-coffee-bag-packaging" className="text-primary-600 hover:underline">Side Gusset Coffee Bags</Link> |{' '}
            <Link to="/products/recyclable-side-gusset-bags" className="text-primary-600 hover:underline">Recyclable Side Gusset</Link> |{' '}
            <Link to="/industry/coffee-tea" className="text-primary-600 hover:underline">Coffee & Tea Industry</Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <DualDomainSEOHead
        title={t(`${p}.seo.title`, 'Eco Side Gusset Pouches: Complete Guide to Sustainable Coffee Bag Packaging 2025')}
        description={t(`${p}.seo.description`, 'Comprehensive guide to eco side gusset pouches. Learn about mono-recyclable PE, compostable options, degassing valves, and low 1,000pc MOQ digital printing.')}
        keywords={keywords}
        schemaType="Article"
        ogImage="/imgs/store/products/eco-side-gusset-guide-hero.png"
      />

      <SEOPageLayout
        heroBgColor="#14532d"
        title={t(`${p}.seo.title`, 'Eco Side Gusset Pouches: The Complete Guide 2025')}
        description={t(`${p}.seo.description`, 'Comprehensive guide to eco side gusset pouches. Learn about mono-recyclable PE, compostable options, degassing valves, and low 1,000pc MOQ digital printing.')}
        keywords={keywords}
        heroTitle={t(`${p}.seo.heroTitle`, 'Eco Side Gusset Pouches')}
        heroSubtitle={t(`${p}.seo.heroSubtitle`, 'The Classic Coffee Bag, Upgraded for Sustainability. 100% Recyclable or Compostable. MOQ 1,000 pcs.')}
        introSummary={t(`${p}.seo.introSummary`, 'The side gusset pouch is the iconic shape for specialty coffee and tea. We\'ve re-engineered this classic format using advanced mono-material PE and compostable films to provide the exact same high-barrier protection as traditional foil bags, but in a fully sustainable, recyclable package.')}
        sections={sections}
        heroImage="/imgs/store/products/eco-side-gusset-guide-hero.png"
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
          <h2>Eco Side Gusset Pouch / Coffee Bag</h2>
          <p>Shape: Side Gusset. MOQ: 1,000 pieces. Starting price: US$140. Lead time: 20–30 days.</p>
          <p>Materials: Mono-PE Recyclable, PCR, Biodegradable PBAT/PLA. Features: Eco-valves, tin ties, pocket zippers, digital printing. Ideal for specialty coffee roasters.</p>
        </section>
      </div>
    </>
  )
}

export default EcoSideGussetGuidePage
