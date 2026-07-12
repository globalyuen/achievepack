import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import {
  Leaf, CheckCircle, ChevronDown, Calendar, ShoppingCart,
  Award, Box, Package, Shield, Droplet
} from 'lucide-react'

const p = 'seoPages.pages.ecoBoxBottom'

const EcoBoxBottomPouchPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'eco box bottom pouch',
    'sustainable box pouch',
    'recyclable box bottom bag',
    'eco pet food packaging',
    'premium eco pouch',
    'box bottom pouch',
    'eco supplement packaging',
    'biodegradable box bag',
    'flat bottom eco pouch'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What makes a box bottom pouch different from a stand-up pouch?'),
      a: t(`${p}.faq.a1`, 'A box bottom pouch (also known as a flat bottom pouch) has a completely flat, rectangular base and folded side gussets. This gives it a rigid, box-like shape that stands perfectly upright even when empty. A standard stand-up pouch has a curved bottom gusset that relies on the product\'s weight to stand.')
    },
    {
      q: t(`${p}.faq.q2`, 'Are box bottom pouches suitable for heavy products like pet food?'),
      a: t(`${p}.faq.a2`, 'Yes, box bottom pouches are the industry standard for premium pet food and heavy powders. The flat base distributes weight evenly, preventing tipping. We regularly produce eco box bottom pouches holding 5kg to 10kg of product, utilizing high-tensile Mono-PE or PCR materials.')
    },
    {
      q: t(`${p}.faq.q3`, 'Can I get a recyclable box bottom pouch?'),
      a: t(`${p}.faq.a3`, 'Absolutely. We engineer our eco box bottom pouches using Mono-Material Polyethylene (Mono-PE). By utilizing different densities of PE (like MDO-PE for the rigid outer layer and LDPE for sealing), we create a pouch that mimics the stiffness of conventional laminates while remaining 100% kerbside recyclable.')
    },
    {
      q: t(`${p}.faq.q4`, 'What is the MOQ for custom printed eco box bottom pouches?'),
      a: t(`${p}.faq.a4`, 'Thanks to our HP Indigo digital printing technology, we offer custom printed eco box bottom pouches starting at just 1,000 pieces. This low MOQ allows premium brands to test sustainable packaging without massive inventory commitments.')
    },
    {
      q: t(`${p}.faq.q5`, 'Do box bottom pouches take longer to produce?'),
      a: t(`${p}.faq.a5`, 'Box bottom pouches require a more complex folding and gluing process during manufacturing. Our standard turnaround for eco box bottom pouches is 25-35 days from artwork approval, slightly longer than our standard stand-up pouches.')
    }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'The Premium Choice for Sustainable Brands'),
      icon: <Box className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>The box bottom pouch is the undisputed heavyweight champion of premium retail packaging.</strong> {t(`${p}.sections.overview.desc`, 'Also known as a flat bottom pouch, it combines the structural stability of a rigid cardboard box with the lightweight efficiency of flexible packaging. It stands perfectly upright, offering unparalleled shelf presence.')}
          </p>
          <p>{t(`${p}.sections.overview.desc2`, 'In the past, achieving this rigid box shape required thick layers of unrecyclable PET and Aluminum. Today, Achieve Pack offers Eco Box Bottom Pouches engineered from sustainable Mono-PE, PCR, and compostable films, allowing premium brands to elevate their aesthetics without compromising their environmental values.')}</p>

          <div className="bg-primary-50 p-5 rounded-xl border border-primary-100 mt-4">
            <h4 className="font-semibold text-primary-800 mb-3">{t(`${p}.sections.overview.whyTitle`, 'Why Premium Brands Choose Eco Box Bottom')}</h4>
            <ul className="space-y-2 text-sm">
              {[
                t(`${p}.sections.overview.why1`, '📦 Ultimate Shelf Stability: The flat rectangular base prevents tipping, even for top-heavy powders.'),
                t(`${p}.sections.overview.why2`, '🖼️ 5 Printable Panels: Front, back, left side, right side, and bottom canvas for 360-degree branding.'),
                t(`${p}.sections.overview.why3`, '♻️ Sustainable Luxury: Available in 100% recyclable Mono-PE or Post-Consumer Recycled (PCR) films.'),
                t(`${p}.sections.overview.why4`, '⚖️ High Volume Capacity: The most space-efficient flexible packaging format, ideal for heavy weights (1kg - 10kg).'),
                t(`${p}.sections.overview.why5`, '🔐 Premium Closures: Compatible with front pocket zippers (pull-tab) for a high-end unboxing experience.'),
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <img
              src="/imgs/store/products/eco-box-bottom-hero.png"
              alt="Premium eco box bottom pouch standing upright in emerald green"
              className="w-full object-cover"
            />
            <p className="text-xs text-neutral-500 text-center py-2 bg-neutral-50">
              {t(`${p}.sections.overview.imgCaption`, 'Premium eco box bottom pouch featuring a flat rectangular base, front pocket zipper, and matte digital printing.')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t(`${p}.sections.materials.title`, 'Sustainable Rigid Films'),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.materials.intro`, 'Creating a box bottom pouch requires films with high stiffness and fold memory. We utilize advanced sustainable structures to achieve this without resorting to conventional mixed plastics.')}</p>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
              <h4 className="font-semibold text-primary-700 mb-2">Recyclable Mono-PE (MDO-PE)</h4>
              <p className="text-sm text-neutral-600">We use Machine Direction Oriented PE (MDO-PE) for the outer layer. Stretching the PE film during manufacturing increases its stiffness and heat resistance, allowing it to hold the sharp folds of a box bottom bag while remaining 100% recyclable in soft plastic streams.</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
              <h4 className="font-semibold text-primary-700 mb-2">PCR (Post-Consumer Recycled)</h4>
              <p className="text-sm text-neutral-600">For brands targeting carbon footprint reduction, we incorporate 30-50% PCR resins into the core layers of the pouch. This utilizes waste plastic diverted from landfills while maintaining the premium look and feel of virgin plastic.</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">🔬 {t(`${p}.sections.materials.notebookTitle`, "From Ryan Wong's Engineering Notebook")}</h4>
            <p className="text-sm text-amber-900 italic">
              {t(`${p}.sections.materials.notebook`, '"Box bottom pouches require four vertical corner seals and a complex folded bottom glued to the body. This puts immense thermal stress on mono-materials during manufacturing. If you choose a cheap manufacturer for a Mono-PE box bottom bag, you will see warped, wrinkled corners where the PE melted unevenly. We use specialized low-initiation temperature sealants (SURLYN equivalents) on the inner layer, allowing us to form crisp, sharp corners at lower temperatures." — Ryan Wong, Co-Founder')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.sections.applications.title`, 'Ideal Industries for Eco Box Bottom Pouches'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.applications.intro`, 'The premium aesthetic and structural integrity of the box bottom pouch makes it the go-to choice for high-value retail products.')}</p>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              { icon: '🐾', label: 'Premium Pet Food', desc: 'Heavy kibble requires a flat base to prevent tipping on the shelf.', link: '/industry/pet-food' },
              { icon: '💪', label: 'Sports Supplements', desc: 'A premium alternative to rigid plastic tubs for protein powder.', link: '/industry/supplements-powders' },
              { icon: '☕', label: 'Specialty Coffee', desc: 'The modern choice for high-end limited edition roasts.', link: '/industry/coffee-tea' },
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
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">Premium Packaging Specialist</span>
              </div>
              <p className="text-neutral-300 text-sm mt-3">
                {t(`${p}.sections.expert.bio`, 'Ryan has engineered premium box bottom pouches for some of the world\'s leading pet food and sports nutrition brands. He specializes in designing structural integrity into sustainable mono-materials.')}
              </p>
              <button
                onClick={openCalendly}
                className="mt-4 flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white text-sm px-4 py-2 rounded-lg transition font-medium"
              >
                <Calendar className="h-4 w-4" />
                {t(`${p}.sections.expert.cta`, 'Book a Structural Design Consultation')}
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`, 'Upgrade to Premium Sustainable Packaging'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-50 to-green-50 p-6 rounded-2xl border border-primary-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-3">{t(`${p}.sections.cta.heading`, 'Ready to stand out on the shelf?')}</h4>
          <p className="text-neutral-700 mb-5">{t(`${p}.sections.cta.desc`, 'Get a free sample pack of our eco box bottom pouches to test the structural stability with your product. Custom digital printing starts at just 1,000 pcs. Delivered in 25-35 days.')}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.bookBtn`, 'Talk to a Structural Engineer')}
            </button>
            <Link
              to="/store/product/eco-boxbottom"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              {t(`${p}.sections.cta.viewBtn`, 'View Pricing & Order')}
            </Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <DualDomainSEOHead
        title={t(`${p}.seo.title`, 'Eco Box Bottom Pouches: Premium Sustainable Packaging 2025')}
        description={t(`${p}.seo.description`, 'Elevate your brand with eco box bottom pouches. 100% recyclable or PCR materials, flat bottom stability, and premium digital printing. MOQ 1,000 pcs.')}
        keywords={keywords}
        schemaType="Article"
        ogImage="/imgs/store/products/eco-box-bottom-hero.png"
      />

      <SEOPageLayout
        heroBgColor="#14532d"
        title={t(`${p}.seo.title`, 'Eco Box Bottom Pouches: Premium Sustainable Packaging 2025')}
        description={t(`${p}.seo.description`, 'Elevate your brand with eco box bottom pouches. 100% recyclable or PCR materials, flat bottom stability, and premium digital printing. MOQ 1,000 pcs.')}
        keywords={keywords}
        heroTitle={t(`${p}.seo.heroTitle`, 'Eco Box Bottom Pouches')}
        heroSubtitle={t(`${p}.seo.heroSubtitle`, 'The Premium Flat Bottom Box Pouch. 100% Recyclable or PCR. Ultimate Shelf Stability. MOQ 1,000 pcs.')}
        introSummary={t(`${p}.seo.introSummary`, 'The box bottom pouch (also known as a flat bottom pouch) is the most premium flexible packaging format available. By engineering this classic box shape from advanced Mono-PE and PCR films, we offer brands unparalleled shelf presence and 360-degree branding in a fully sustainable format.')}
        sections={sections}
        heroImage="/imgs/store/products/eco-box-bottom-hero.png"
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
          <h2>Eco Box Bottom Pouch / Flat Bottom Pouch</h2>
          <p>Shape: Box Bottom / Flat Bottom. MOQ: 1,000 pieces. Starting price: US$170. Lead time: 25–35 days.</p>
          <p>Materials: Mono-PE Recyclable, PCR, Biodegradable. Features: Pocket zippers, front zippers, tear notches, degassing valves, 5 printable panels. Ideal for premium pet food, sports supplements, and specialty coffee.</p>
        </section>
      </div>
    </>
  )
}

export default EcoBoxBottomPouchPage
