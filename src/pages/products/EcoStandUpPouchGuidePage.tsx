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

const p = 'seoPages.pages.ecoStandupGuide'

const EcoStandUpPouchGuidePage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'eco stand-up pouch',
    'sustainable doypack',
    'biodegradable stand up pouch',
    'recyclable stand up pouch',
    'eco friendly food packaging',
    'low moq eco pouch',
    'mono recyclable pouch'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What materials are used in eco stand-up pouches?'),
      a: t(`${p}.faq.a1`, 'Eco stand-up pouches are made from PCR/bio plastic (post-consumer recycled), mono-material recyclable PE or PP films, and certified biodegradable PBAT/PLA blends. Each material is verified against international standards such as ISO 14021 for recyclability and EN 13432 for compostability.')
    },
    {
      q: t(`${p}.faq.q2`, 'What is the minimum order quantity for eco stand-up pouches?'),
      a: t(`${p}.faq.a2`, 'Our eco digital stand-up pouches start from a MOQ of 1,000 pieces from US$120, making them accessible for small brands, specialty food producers, and startups validating market fit before committing to high-volume runs.')
    },
    {
      q: t(`${p}.faq.q3`, 'Are eco stand-up pouches food safe?'),
      a: t(`${p}.faq.a3`, 'Yes. All eco stand-up pouches we supply meet FDA 21 CFR and EU Regulation 10/2011 standards for food contact materials. The inner sealant layers are made from food-grade PE or PLA films, and every production batch is subject to migration testing before shipment.')
    },
    {
      q: t(`${p}.faq.q4`, 'How long does it take to produce eco stand-up pouches?'),
      a: t(`${p}.faq.a4`, 'Standard production lead time is 20–30 days after artwork approval. This includes digital printing, lamination, pouch forming, zipper insertion, and quality control inspection. Rush production may be available upon request for qualifying orders.')
    },
    {
      q: t(`${p}.faq.q5`, 'Can I get a mono recyclable eco stand-up pouch with a zipper?'),
      a: t(`${p}.faq.a5`, 'Yes. Our mono recyclable stand-up pouches use single-material PE or PP construction throughout the entire pouch, including the zipper, ensuring they qualify for kerbside recycling in most markets. This avoids the contamination issue that makes multi-layer pouches difficult to recycle.')
    }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'What Is an Eco Stand-Up Pouch?'),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>An eco stand-up pouch (doypack)</strong> {t(`${p}.sections.overview.desc`, 'is a flexible packaging format with a flat bottom gusset that allows it to stand upright on retail shelves. Unlike conventional multi-layer foil pouches, eco versions are made from sustainably sourced or recyclable single-material films, reducing packaging waste significantly.')}
          </p>
          <p>{t(`${p}.sections.overview.desc2`, 'Eco stand-up pouches serve the same functional role as conventional pouches—providing excellent moisture, oxygen, and UV barriers—while dramatically reducing end-of-life environmental impact. They are ideal for coffee, tea, snacks, supplements, pet treats, and cosmetic powders.')}</p>

          <div className="bg-primary-50 p-5 rounded-xl border border-primary-100 mt-4">
            <h4 className="font-semibold text-primary-800 mb-3">{t(`${p}.sections.overview.whyTitle`, 'Why Brands Are Switching to Eco Pouches in 2025')}</h4>
            <ul className="space-y-2 text-sm">
              {[
                t(`${p}.sections.overview.why1`, '🌿 EU Single-Use Plastics Directive mandating recyclable alternatives'),
                t(`${p}.sections.overview.why2`, '♻️ Consumer preference shifting—72% of shoppers prefer sustainable packaging (Nielsen 2024)'),
                t(`${p}.sections.overview.why3`, '📦 Mono-material films now match barrier performance of multi-layer foil'),
                t(`${p}.sections.overview.why4`, '💰 Cost parity achieved at 1,000+ unit MOQs with digital printing'),
                t(`${p}.sections.overview.why5`, '🏆 Retail shelf access requires eco certification in many EU markets'),
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <img
              src="/imgs/store/products/eco-standup-guide-hero.png"
              alt="Eco stand-up pouches with botanical leaf patterns - sustainable doypack packaging"
              className="w-full object-cover"
            />
            <p className="text-xs text-neutral-500 text-center py-2 bg-neutral-50">
              {t(`${p}.sections.overview.imgCaption`, 'Premium eco stand-up pouches with direct digital print — botanical leaf design on matte finish')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t(`${p}.sections.materials.title`, 'Eco Stand-Up Pouch Materials Compared'),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.materials.intro`, 'Choosing the right eco material depends on your product\'s barrier requirements, target market, and end-of-life disposal infrastructure. Here is a detailed breakdown of the three primary eco material options available at Achieve Pack:')}</p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-700 text-white">
                  <th className="p-3 text-left">Material</th>
                  <th className="p-3 text-left">OTR Barrier</th>
                  <th className="p-3 text-left">Shelf Life</th>
                  <th className="p-3 text-left">End of Life</th>
                  <th className="p-3 text-left">Certification</th>
                  <th className="p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['PCR/Bio Plastic', '< 5 cc/m²/day', '6–12 months', 'Recyclable', 'GRS / ISO 14021', 'FMCG, snacks, coffee'],
                  ['Mono Recyclable PE', '< 3 cc/m²/day', '12–18 months', 'Kerbside Recyclable', 'ISO 14021 / OPRL', 'Food, supplements, pet'],
                  ['Biodegradable PBAT/PLA', '< 8 cc/m²/day', '6–9 months', 'Industrial Compost', 'EN 13432 / ASTM D6400', 'Organic, coffee, tea'],
                ].map(([mat, otr, shelf, eol, cert, best], i) => (
                  <tr key={i} className={`border-b border-neutral-200 ${i % 2 === 1 ? 'bg-neutral-50' : ''}`}>
                    <td className="p-3 font-semibold text-primary-800">{mat}</td>
                    <td className="p-3"><span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">{otr}</span></td>
                    <td className="p-3">{shelf}</td>
                    <td className="p-3">{eol}</td>
                    <td className="p-3 text-xs text-neutral-600">{cert}</td>
                    <td className="p-3 text-xs">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">🔬 {t(`${p}.sections.materials.notebookTitle`, "From Ryan Wong's Engineering Notebook")}</h4>
            <p className="text-sm text-amber-900 italic">
              {t(`${p}.sections.materials.notebook`, '"In 14 years of packaging engineering, the most common mistake I see is brands selecting biodegradable materials purely for the marketing label, without matching the barrier spec to their product. A coffee roaster using PBAT/PLA with no foil layer will see off-gassing and staling within 8 weeks—long before their retail rotation. Always match the OTR target to your product\'s oxidation sensitivity first, then choose the greenest material that meets that threshold." — Ryan Wong, Co-Founder')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'sizes',
      title: t(`${p}.sections.sizes.title`, 'Standard Sizes & Custom Dimensions'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.sizes.intro`, 'Eco stand-up pouches are available in a wide range of standard sizes, from single-serve 50g formats to bulk 1kg retail pouches. Custom dimensions are supported for orders of 5,000+ pieces.')}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {[
              { size: '50g', dims: '80×130+50mm', desc: t(`${p}.sections.sizes.s50`, 'Trial / single serve') },
              { size: '100g', dims: '100×150+60mm', desc: t(`${p}.sections.sizes.s100`, 'Tea, herbs, spices') },
              { size: '250g', dims: '120×200+80mm', desc: t(`${p}.sections.sizes.s250`, 'Coffee, snacks') },
              { size: '500g', dims: '140×230+90mm', desc: t(`${p}.sections.sizes.s500`, 'Coffee, supplements') },
              { size: '750g', dims: '160×260+100mm', desc: t(`${p}.sections.sizes.s750`, 'Pet treats, powder') },
              { size: '1kg', dims: '180×290+110mm', desc: t(`${p}.sections.sizes.s1kg`, 'Bulk retail / wholesale') },
              { size: '2kg', dims: '220×340+130mm', desc: t(`${p}.sections.sizes.s2kg`, 'Professional / B2B') },
              { size: 'Custom', dims: t(`${p}.sections.sizes.customDims`, 'Any dimension'), desc: t(`${p}.sections.sizes.custom`, '5,000+ pcs MOQ') },
            ].map(({ size, dims, desc }, i) => (
              <div key={i} className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 text-center">
                <div className="text-xl font-bold text-primary-700">{size}</div>
                <p className="text-xs font-mono mt-0.5 text-neutral-600">{dims}</p>
                <p className="text-xs text-neutral-500 mt-1">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-1">{t(`${p}.sections.sizes.customTitle`, 'Need a Non-Standard Size?')}</h4>
            <p className="text-sm text-blue-700">{t(`${p}.sections.sizes.customDesc`, 'We produce fully custom dimensions for orders of 5,000+ pieces. Share your fill weight and product density and we\'ll calculate the optimal bag dimensions to maximize shelf presence and minimize material waste.')}</p>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.sections.applications.title`, 'Top Industries Using Eco Stand-Up Pouches'),
      icon: <Star className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.applications.intro`, 'Eco stand-up pouches have been adopted across a wide range of industries. Their combination of premium shelf presence, sustainability credentials, and VFFS machine compatibility makes them the default packaging choice for growth-stage brands.')}</p>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              { icon: '☕', label: t(`${p}.sections.applications.coffee`, 'Coffee & Tea'), desc: t(`${p}.sections.applications.coffeeDesc`, 'Specialty roasters from 1,000 bags with degassing valve'), link: '/industry/coffee-tea' },
              { icon: '🥜', label: t(`${p}.sections.applications.snacks`, 'Snacks & Nuts'), desc: t(`${p}.sections.applications.snacksDesc`, 'Resealable zipper, high moisture barrier'), link: '/industry/snacks-food' },
              { icon: '💊', label: t(`${p}.sections.applications.supplements`, 'Supplements'), desc: t(`${p}.sections.applications.supplementsDesc`, 'Oxygen scavenger compatible, FDA-compliant inner film'), link: '/industry/supplements-powders' },
              { icon: '🐾', label: t(`${p}.sections.applications.pet`, 'Pet Treats'), desc: t(`${p}.sections.applications.petDesc`, 'Odour barrier, tear notch, hanging hole option'), link: '/industry/pet-food' },
              { icon: '🌿', label: t(`${p}.sections.applications.herbs`, 'Herbs & Spices'), desc: t(`${p}.sections.applications.herbsDesc`, 'UV protection, transparent window option'), link: '/products/compostable-coffee-bags' },
              { icon: '💄', label: t(`${p}.sections.applications.cosmetics`, 'Cosmetic Powders'), desc: t(`${p}.sections.applications.cosmeticsDesc`, 'Static-dissipating inner film, luxury matte finish'), link: '/knowledge/' },
            ].map(({ icon, label, desc, link }, i) => (
              <div key={i} className="border border-neutral-200 rounded-xl p-4 bg-white hover:shadow-md transition">
                <span className="text-2xl mb-2 block">{icon}</span>
                <h4 className="font-semibold text-neutral-800 text-sm">{label}</h4>
                <p className="text-xs text-neutral-600 mt-1">{desc}</p>
                <Link to={link} className="text-xs text-primary-600 hover:underline mt-2 block">Learn more →</Link>
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
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">500+ Global Brands</span>
              </div>
              <p className="text-neutral-300 text-sm mt-3">
                {t(`${p}.sections.expert.bio`, 'Ryan holds a degree in Materials Science from a polytechnic institute and has spent 14 years engineering packaging solutions for global food, supplement, and cosmetic brands. He oversees GRS and FSC raw material traceability audits on every production batch.')}
              </p>
              <button
                onClick={openCalendly}
                className="mt-4 flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white text-sm px-4 py-2 rounded-lg transition font-medium"
              >
                <Calendar className="h-4 w-4" />
                {t(`${p}.sections.expert.cta`, 'Schedule a 15-min Packaging Audit with Ryan')}
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`, 'Get Started with Eco Stand-Up Pouches'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-50 to-green-50 p-6 rounded-2xl border border-primary-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-3">{t(`${p}.sections.cta.heading`, 'Ready to switch to sustainable packaging?')}</h4>
          <p className="text-neutral-700 mb-5">{t(`${p}.sections.cta.desc`, 'Get a free sample pack of our eco stand-up pouches and see the quality for yourself. MOQ from 1,000 pcs. 20–30 day production. Expert artwork support included.')}</p>
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
              {t(`${p}.sections.cta.viewBtn`, 'View Product & Pricing')}
            </Link>
          </div>
          <div className="mt-5 pt-4 border-t border-primary-200 text-sm text-neutral-600">
            <strong>{t(`${p}.sections.cta.relatedLabel`, 'Related:')}</strong>{' '}
            <Link to="/products/compostable-coffee-bags" className="text-primary-600 hover:underline">Compostable Coffee Bags</Link> |{' '}
            <Link to="/industry/coffee-tea" className="text-primary-600 hover:underline">Coffee & Tea Industry</Link> |{' '}
            <Link to="/knowledge/" className="text-primary-600 hover:underline">Knowledge Hub</Link> |{' '}
            <Link to="/products/eco-vs-conventional-pouch-comparison" className="text-primary-600 hover:underline">Eco vs Conventional Comparison</Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <DualDomainSEOHead
        title={t(`${p}.seo.title`, 'Eco Stand-Up Pouches: The Complete Guide 2025')}
        description={t(`${p}.seo.description`, 'Complete guide to eco stand-up pouches and doypacks. Compare PCR, mono recyclable, and biodegradable materials. MOQ 1,000 pcs from US$120. 20–30 day production.')}
        keywords={keywords}
        schemaType="Article"
        ogImage="/imgs/store/products/eco-standup-guide-hero.png"
      />

      <SEOPageLayout
        heroBgColor="#14532d"
        title={t(`${p}.seo.title`, 'Eco Stand-Up Pouches: The Complete Guide 2025')}
        description={t(`${p}.seo.description`, 'Complete guide to eco stand-up pouches and doypacks. Compare PCR, mono recyclable, and biodegradable materials. MOQ 1,000 pcs from US$120. 20–30 day production.')}
        keywords={keywords}
        heroTitle={t(`${p}.seo.heroTitle`, 'Eco Stand-Up Pouches')}
        heroSubtitle={t(`${p}.seo.heroSubtitle`, 'The Complete 2025 Guide — PCR, Mono Recyclable & Biodegradable Doypacks. MOQ 1,000 pcs · 20–30 Day Turnaround · Expert Artwork Support')}
        introSummary={t(`${p}.seo.introSummary`, 'Eco stand-up pouches (doypacks) made from PCR plastic, mono-material recyclable PE/PP, or certified biodegradable PBAT/PLA films are the fastest-growing packaging format in sustainable food, coffee, and supplement markets. With MOQs from 1,000 pieces and full digital printing support, brands of all sizes can access premium eco packaging without factory-scale commitments.')}
        sections={sections}
        heroImage="/imgs/store/products/eco-standup-guide-hero.png"
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
          <h2>Eco Stand-Up Pouch / Doypack</h2>
          <p>Shape: Stand-Up Pouch / Doypack. MOQ: 1,000 pieces. Starting price: US$120. Lead time: 20–30 days. Materials: PCR Plastic, Mono Recyclable PE/PP, Biodegradable PBAT/PLA. Certifications: GRS, ISO 14021, EN 13432, ASTM D6400.</p>
          <p>Suitable for coffee, tea, snacks, supplements, pet treats, herbs, spices. Digital printing available. Custom sizes from 5,000 pieces. Zipper, tear notch, degassing valve options available.</p>
        </section>
      </div>
    </>
  )
}

export default EcoStandUpPouchGuidePage
