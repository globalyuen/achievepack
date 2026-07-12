import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import {
  Leaf, CheckCircle, ChevronDown, Calendar, ShoppingCart,
  Award, Clock, Recycle, Package, ArrowRight, Shield, Star
} from 'lucide-react'

const p = 'seoPages.pages.ecoStandupCoffee'

const EcoStandUpCoffeePouchPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'eco coffee pouch',
    'sustainable coffee packaging',
    'biodegradable coffee bag',
    'stand up coffee pouch',
    'recyclable coffee pouch',
    'specialty coffee packaging',
    'low moq coffee bags'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What is the best eco material for coffee packaging?'),
      a: t(`${p}.faq.a1`, 'The best material depends on your shelf-life requirements. For specialty coffee consumed within 6-12 months, mono-recyclable PE with a high-barrier EVOH layer offers excellent oxygen protection while remaining fully kerbside recyclable. If you need a fully compostable solution, PLA/PBAT blends are available but have higher OTR (oxygen transmission rates) and shorter shelf-lives.')
    },
    {
      q: t(`${p}.faq.q2`, 'Do your eco coffee pouches include a one-way degassing valve?'),
      a: t(`${p}.faq.a2`, 'Yes, our eco stand-up coffee pouches come with optional one-way degassing valves. For mono-recyclable bags, we use a fully recyclable PE-based valve to maintain the kerbside recyclable classification of the entire package.')
    },
    {
      q: t(`${p}.faq.q3`, 'Can I get custom printing on low MOQ eco coffee bags?'),
      a: t(`${p}.faq.a3`, 'Absolutely. We use state-of-the-art HP Indigo digital presses for orders starting at just 1,000 pieces. This allows for full-color, photorealistic printing on eco materials without plate fees or setup costs, perfect for limited edition roasts or small batch coffee.')
    },
    {
      q: t(`${p}.faq.q4`, 'Are the zippers on eco coffee bags also recyclable?'),
      a: t(`${p}.faq.a4`, 'Yes. When you choose our mono-material recyclable PE or PP coffee pouches, the zipper is made from the exact same polymer family as the pouch body. This ensures the entire bag, including the closure, can be processed in standard soft plastic recycling streams.')
    },
    {
      q: t(`${p}.faq.q5`, 'How do eco stand-up coffee pouches compare in price to conventional foil bags?'),
      a: t(`${p}.faq.a5`, 'With digital printing, eco pouches reach price parity with conventional multi-layer foil bags around the 1,000 to 5,000 unit mark. While the raw material cost is slightly higher for sustainable films, digital printing eliminates tooling costs, making small-to-medium runs highly competitive.')
    }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'Sustainable Packaging for Specialty Roasters'),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Eco stand-up coffee pouches</strong> {t(`${p}.sections.overview.desc`, 'offer specialty coffee roasters the perfect balance between high-barrier protection and environmental responsibility. Designed with a classic doypack shape, these bags stand prominently on retail shelves while preserving the delicate aromas and flavors of freshly roasted beans.')}
          </p>
          <p>{t(`${p}.sections.overview.desc2`, 'By transitioning away from conventional PET/ALU/PE laminates, modern roasters can meet consumer demand for sustainability without compromising on shelf life, thanks to advanced mono-material and bio-based films.')}</p>

          <div className="bg-primary-50 p-5 rounded-xl border border-primary-100 mt-4">
            <h4 className="font-semibold text-primary-800 mb-3">{t(`${p}.sections.overview.whyTitle`, 'Why Roasters Choose Eco Stand-Up Pouches')}</h4>
            <ul className="space-y-2 text-sm">
              {[
                t(`${p}.sections.overview.why1`, '☕ Built-in recyclable degassing valves to release CO2 while blocking oxygen'),
                t(`${p}.sections.overview.why2`, '🌿 Consumer alignment—84% of specialty coffee buyers value sustainable packaging'),
                t(`${p}.sections.overview.why3`, '♻️ Mono-material PE options compatible with kerbside soft plastic recycling'),
                t(`${p}.sections.overview.why4`, '🎨 Premium matte, gloss, or kraft finishes printed digitally at 1,000pcs MOQ'),
                t(`${p}.sections.overview.why5`, '🛡️ High-barrier EVOH layers extending shelf life beyond 12 months'),
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <img
              src="/imgs/store/products/eco-coffee-pouch-hero.png"
              alt="Eco-branded stand-up coffee pouch with minimalist design"
              className="w-full object-cover"
            />
            <p className="text-xs text-neutral-500 text-center py-2 bg-neutral-50">
              {t(`${p}.sections.overview.imgCaption`, 'Minimalist eco stand-up coffee pouch featuring matte finish, integrated degassing valve, and direct digital printing.')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t(`${p}.sections.materials.title`, 'Coffee Barrier Protection vs. Sustainability'),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.materials.intro`, 'Coffee is highly sensitive to oxygen (oxidation causes staling) and UV light (accelerates degradation). Choosing an eco-friendly material means finding a film structure that provides adequate barrier properties for your specific distribution model.')}</p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-700 text-white">
                  <th className="p-3 text-left">Eco Material Option</th>
                  <th className="p-3 text-left">Oxygen Barrier (OTR)</th>
                  <th className="p-3 text-left">Ideal Use Case</th>
                  <th className="p-3 text-left">End of Life</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mono-PE (High Barrier)', '< 1 cc/m²/day', 'Retail / Wholesale (12+ mo shelf life)', 'Recyclable (Soft Plastics)'],
                  ['PCR (Post-Consumer Recycled)', '< 5 cc/m²/day', 'General retail (6-12 mo shelf life)', 'Recyclable'],
                  ['Biodegradable PLA/Kraft', '< 15 cc/m²/day', 'Local cafe direct sales (3-6 mo shelf life)', 'Industrial Compost'],
                ].map(([mat, otr, usecase, eol], i) => (
                  <tr key={i} className={`border-b border-neutral-200 ${i % 2 === 1 ? 'bg-neutral-50' : ''}`}>
                    <td className="p-3 font-semibold text-primary-800">{mat}</td>
                    <td className="p-3"><span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">{otr}</span></td>
                    <td className="p-3 text-xs">{usecase}</td>
                    <td className="p-3 text-xs text-neutral-600">{eol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">🔬 {t(`${p}.sections.materials.notebookTitle`, "From Ryan Wong's Engineering Notebook")}</h4>
            <p className="text-sm text-amber-900 italic">
              {t(`${p}.sections.materials.notebook`, '"The biggest challenge with sustainable coffee packaging is the valve. I\'ve audited production lines where brands spent premium prices on mono-material recyclable films, only to have the manufacturer weld a conventional multi-layer nylon valve onto the bag, instantly contaminating the entire pouch for recycling. Always specify a PE-based mono-material valve when ordering mono-PE coffee bags. It costs a fraction of a cent more but ensures the bag is actually recyclable in practice, not just in theory." — Ryan Wong, Co-Founder')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t(`${p}.sections.features.title`, 'Essential Features for Specialty Coffee'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.features.intro`, 'Our eco stand-up coffee pouches can be customized with all the standard features roasters and consumers expect, fully integrated into the sustainable material structure.')}</p>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {[
              { title: t(`${p}.sections.features.valve`, 'Degassing Valves'), desc: t(`${p}.sections.features.valveDesc`, 'One-way valves allow freshly roasted beans to off-gas CO2 without letting oxygen in, preventing bag explosion and staling. Available in eco-compatible materials.') },
              { title: t(`${p}.sections.features.zipper`, 'Resealable Zippers'), desc: t(`${p}.sections.features.zipperDesc`, 'Pocket zippers or standard press-to-close zippers maintain freshness after opening. Made from the same polymer family as the bag for recyclability.') },
              { title: t(`${p}.sections.features.notch`, 'Tear Notches'), desc: t(`${p}.sections.features.notchDesc`, 'Laser-scored tear notches provide a clean, straight tear across the top of the pouch for a premium opening experience.') },
              { title: t(`${p}.sections.features.finish`, 'Custom Finishes'), desc: t(`${p}.sections.features.finishDesc`, 'Choose from soft-touch matte, high gloss, or a hybrid spot-varnish effect to make your branding stand out on the retail shelf.') },
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
      id: 'sizes',
      title: t(`${p}.sections.sizes.title`, 'Coffee Pouch Sizing Guide'),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.sizes.intro`, 'Stand-up doypacks are ideal for retail coffee volumes. Below are the standard dimensions for common coffee weights. Keep in mind that dark roasts are less dense and may require slightly larger bag dimensions for the same weight.')}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {[
              { size: '100g / 4oz', dims: '110×170+70mm', desc: 'Sample / Single Origin' },
              { size: '250g / 8oz', dims: '130×210+80mm', desc: 'Standard Retail Size' },
              { size: '500g / 1lb', dims: '160×250+90mm', desc: 'Cafe Retail / Large' },
              { size: '1kg / 2.2lb', dims: '190×290+110mm', desc: 'Wholesale / Cafe Supply' },
            ].map(({ size, dims, desc }, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-neutral-200 text-center shadow-sm">
                <div className="text-lg font-bold text-primary-700">{size}</div>
                <p className="text-xs font-mono mt-1 text-neutral-600">{dims}</p>
                <p className="text-xs text-neutral-500 mt-1">{desc}</p>
              </div>
            ))}
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
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">GRS & FSC Auditing Expert</span>
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">Specialty Coffee Packaging</span>
              </div>
              <p className="text-neutral-300 text-sm mt-3">
                {t(`${p}.sections.expert.bio`, 'Ryan holds a degree in Materials Science and has spent over a decade engineering high-barrier flexible packaging for global specialty coffee roasters. He specializes in transitioning brands from conventional laminates to fully recyclable and compostable material structures.')}
              </p>
              <button
                onClick={openCalendly}
                className="mt-4 flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white text-sm px-4 py-2 rounded-lg transition font-medium"
              >
                <Calendar className="h-4 w-4" />
                {t(`${p}.sections.expert.cta`, 'Schedule a 15-min Coffee Packaging Audit')}
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`, 'Elevate Your Coffee Packaging'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-50 to-green-50 p-6 rounded-2xl border border-primary-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-3">{t(`${p}.sections.cta.heading`, 'Ready to roast and pack sustainably?')}</h4>
          <p className="text-neutral-700 mb-5">{t(`${p}.sections.cta.desc`, 'Get a free sample pack of our eco coffee pouches to test with your roasts. MOQ from 1,000 pcs. 20–30 day production. We provide custom dielines and full artwork support.')}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.bookBtn`, 'Book Free Consultation')}
            </button>
            <Link
              to="/store/product/eco-standup"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              {t(`${p}.sections.cta.viewBtn`, 'View Pricing & Order')}
            </Link>
          </div>
          <div className="mt-5 pt-4 border-t border-primary-200 text-sm text-neutral-600">
            <strong>{t(`${p}.sections.cta.relatedLabel`, 'Related:')}</strong>{' '}
            <Link to="/products/eco-stand-up-pouch-guide" className="text-primary-600 hover:underline">Eco Stand-Up Pouch Guide</Link> |{' '}
            <Link to="/products/compostable-coffee-bags" className="text-primary-600 hover:underline">Compostable Coffee Bags</Link> |{' '}
            <Link to="/industry/coffee-tea" className="text-primary-600 hover:underline">Coffee & Tea Industry</Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <DualDomainSEOHead
        title={t(`${p}.seo.title`, 'Best Eco Coffee Packaging Pouches 2025: Stand-Up Doypack for Roasters')}
        description={t(`${p}.seo.description`, 'Discover premium eco stand-up coffee pouches. Kerbside recyclable PE, PCR, and compostable options with degassing valves. Low MOQ from 1,000 pcs. 20-30 day turnaround.')}
        keywords={keywords}
        schemaType="Article"
        ogImage="/imgs/store/products/eco-coffee-pouch-hero.png"
      />

      <SEOPageLayout
        heroBgColor="#14532d"
        title={t(`${p}.seo.title`, 'Best Eco Coffee Packaging Pouches 2025: Stand-Up Doypack for Specialty Roasters')}
        description={t(`${p}.seo.description`, 'Discover premium eco stand-up coffee pouches. Kerbside recyclable PE, PCR, and compostable options with degassing valves. Low MOQ from 1,000 pcs. 20-30 day turnaround.')}
        keywords={keywords}
        heroTitle={t(`${p}.seo.heroTitle`, 'Eco Stand-Up Coffee Pouches')}
        heroSubtitle={t(`${p}.seo.heroSubtitle`, 'Sustainable Coffee Packaging with Built-In Valves. Recyclable, PCR, or Compostable. MOQ 1,000 pcs · 20–30 Day Turnaround')}
        introSummary={t(`${p}.seo.introSummary`, 'Transition your coffee roastery to sustainable packaging with our premium eco stand-up doypacks. Engineered specifically for specialty coffee, these pouches feature high-barrier protection and integrated degassing valves, available in mono-material recyclable PE, post-consumer recycled (PCR) plastic, and certified compostable materials.')}
        sections={sections}
        heroImage="/imgs/store/products/eco-coffee-pouch-hero.png"
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
          <h2>Eco Stand-Up Coffee Pouch / Doypack</h2>
          <p>Shape: Stand-Up Pouch / Doypack tailored for coffee beans. MOQ: 1,000 pieces. Starting price: US$120. Lead time: 20–30 days.</p>
          <p>Features: One-way degassing valve (eco-compatible), resealable zipper, tear notches, digital printing. Ideal for specialty coffee roasters seeking sustainable packaging solutions.</p>
        </section>
      </div>
    </>
  )
}

export default EcoStandUpCoffeePouchPage
