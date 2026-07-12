import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import {
  Leaf, CheckCircle, ChevronDown, Calendar, ShoppingCart,
  Award, Package, Maximize, TrendingUp, Shield
} from 'lucide-react'

const p = 'seoPages.pages.ecoFlatBottom'

const EcoFlatBottomPouchPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'eco flat bottom pouch',
    'flat squared bottom bag',
    'eco packaging shelf stability',
    'sustainable flat bottom bag',
    'recyclable flat bottom pouch',
    'premium eco packaging',
    'eco gusset bag',
    'flat bottom coffee bag eco'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'Are flat bottom pouches and box bottom pouches the same thing?'),
      a: t(`${p}.faq.a1`, 'Yes, in the flexible packaging industry, the terms "flat bottom pouch," "box bottom pouch," and "block bottom pouch" are used interchangeably to describe a bag with a perfectly flat, rectangular base glued to the bottom of the body panels.')
    },
    {
      q: t(`${p}.faq.q2`, 'Why does a flat bottom pouch offer maximum shelf stability?'),
      a: t(`${p}.faq.a2`, 'Unlike a standard stand-up pouch which uses a curved bottom gusset that bulges when filled, a flat bottom pouch rests entirely flush on its rectangular base. This mimics the stability of a rigid cardboard box, making it virtually impossible to tip over on a retail shelf, even when filled with top-heavy products.')
    },
    {
      q: t(`${p}.faq.q3`, 'Are flat bottom pouches more expensive than stand-up pouches?'),
      a: t(`${p}.faq.a3`, 'Yes. Due to the complex folding and sealing process required to create the flat rectangular base, flat bottom pouches typically cost 15-25% more than standard stand-up doypacks of the same volume. However, premium brands gladly pay this premium for the superior aesthetic and unboxing experience.')
    },
    {
      q: t(`${p}.faq.q4`, 'What eco materials are available for flat bottom pouches?'),
      a: t(`${p}.faq.a4`, 'We offer flat bottom pouches in Mono-PE (100% recyclable soft plastics), PCR (Post-Consumer Recycled plastics containing 30-50% recycled content), and certified compostable materials (like Kraft paper laminated with PBAT/PLA).')
    },
    {
      q: t(`${p}.faq.q5`, 'Do eco flat bottom pouches support pocket zippers?'),
      a: t(`${p}.faq.a5`, 'Yes. The premium structure of a flat bottom bag pairs perfectly with a front pocket zipper (also known as a pull-tab or rip-zip closure). This creates a tamper-evident seal that provides a clean, wide opening for the consumer.')
    }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'The Pinnacle of Flexible Packaging Stability'),
      icon: <Maximize className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>The Eco Flat Bottom Pouch represents the ultimate fusion of rigid box stability and flexible packaging efficiency.</strong> {t(`${p}.sections.overview.desc`, 'Designed with a perfectly flat, rectangular base, this pouch stands completely flush on any surface. Whether it holds 250g of specialty coffee or 5kg of premium pet food, it will never sag, lean, or topple over on a retail shelf.')}
          </p>
          <p>{t(`${p}.sections.overview.desc2`, 'By upgrading this premium format with sustainable Mono-PE and PCR materials, brands can now deliver the ultimate luxury packaging experience while meeting strict corporate sustainability goals and incoming packaging waste regulations.')}</p>

          <div className="bg-primary-50 p-5 rounded-xl border border-primary-100 mt-4">
            <h4 className="font-semibold text-primary-800 mb-3">{t(`${p}.sections.overview.whyTitle`, 'Why Brands Pay a Premium for Flat Bottom Pouches')}</h4>
            <ul className="space-y-2 text-sm">
              {[
                t(`${p}.sections.overview.why1`, '🛑 Zero Tipping: The flat squared base ensures the bag stays upright, eliminating messy spills in the consumer\'s pantry.'),
                t(`${p}.sections.overview.why2`, '📐 Perfect Geometry: Crisp, sharp edges convey luxury and quality before the product is even opened.'),
                t(`${p}.sections.overview.why3`, '📊 Maximum Volume Efficiency: Holds up to 15% more product than a standard stand-up pouch of the same dimensions.'),
                t(`${p}.sections.overview.why4`, '🏷️ 5-Panel Billboard: The flat bottom itself can be printed on, providing a canvas for barcodes, recycling logos, or hidden brand messages.'),
                t(`${p}.sections.overview.why5`, '🌍 Eco-Friendly Transition: Replace bulky rigid plastic tubs or cardboard boxes with a lightweight, 100% recyclable flexible alternative.'),
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <img
              src="/imgs/store/products/eco-flat-bottom-hero.png"
              alt="Eco flat bottom pouch in sage green, top-down view showing wide flat base"
              className="w-full object-cover"
            />
            <p className="text-xs text-neutral-500 text-center py-2 bg-neutral-50">
              {t(`${p}.sections.overview.imgCaption`, 'The signature flat squared base of the Eco Flat Bottom Pouch provides unmatched stability and a 5th printable panel.')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: t(`${p}.sections.sustainability.title`, 'Replacing Rigid Tubs with Flexible Sustainability'),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.sustainability.intro`, 'Many brands in the sports nutrition, supplement, and bulk food sectors rely on heavy, rigid plastic tubs to convey premium quality and stability. Transitioning to an Eco Flat Bottom Pouch offers a massive sustainability upgrade.')}</p>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
              <h4 className="font-semibold text-primary-700 mb-2">90% Less Plastic Weight</h4>
              <p className="text-sm text-neutral-600">A flexible flat bottom pouch uses a fraction of the plastic required to mould a rigid tub. This massive reduction in raw material weight directly translates to a lower carbon footprint and reduced plastic taxes.</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
              <h4 className="font-semibold text-primary-700 mb-2">70% Less Transport Emissions</h4>
              <p className="text-sm text-neutral-600">Rigid tubs ship mostly empty air before they are filled. Flexible flat bottom pouches ship flat. One pallet of unfilled pouches holds the equivalent volume of an entire truckload of rigid tubs.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t(`${p}.sections.features.title`, 'Premium Features for Flat Bottom Bags'),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.features.intro`, 'When you invest in the flat bottom format, you want the rest of the pouch features to match that premium standard. We offer several high-end modifications:')}</p>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-900 mb-1">Front Pocket Zipper (Pull-Tab)</h4>
              <p className="text-sm text-neutral-600">Instead of a standard press-to-close zipper at the top of the bag, a pocket zipper is built into the front panel. The consumer pulls a tear-away strip to reveal a wide, easy-access opening.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-900 mb-1">Degassing Valves</h4>
              <p className="text-sm text-neutral-600">Essential for specialty coffee roasters. We install recyclable mono-PE valves to maintain the bag's kerbside recyclability certification.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-900 mb-1">Spot Gloss (UV) Finishes</h4>
              <p className="text-sm text-neutral-600">Combine a soft-touch matte background with high-gloss highlights on your logo or product imagery. Achieved through our digital printing process without expensive printing plates.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-900 mb-1">Laser Scoring</h4>
              <p className="text-sm text-neutral-600">Precision laser scoring ensures the tear notch opens cleanly in a perfectly straight line, avoiding the jagged, frustrating tears common in cheaper packaging.</p>
            </div>
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
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">Structural Design Expert</span>
              </div>
              <p className="text-neutral-300 text-sm mt-3">
                {t(`${p}.sections.expert.bio`, 'Ryan specializes in high-end structural packaging transitions, helping brands move from rigid plastic tubs and composite cans into ultra-efficient, fully recyclable flexible flat bottom pouches.')}
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
      title: t(`${p}.sections.cta.title`, 'Upgrade Your Shelf Presence'),
      icon: <TrendingUp className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-50 to-green-50 p-6 rounded-2xl border border-primary-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-3">{t(`${p}.sections.cta.heading`, 'Ready to test the ultimate stable pouch?')}</h4>
          <p className="text-neutral-700 mb-5">{t(`${p}.sections.cta.desc`, 'Get a free sample pack of our eco flat bottom pouches to see the rigidity and premium finish in person. Custom digital printing starts at just 1,000 pcs. Delivered in 25-35 days.')}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.bookBtn`, 'Talk to an Engineer')}
            </button>
            <Link
              to="/store/product/eco-flatbottom"
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
        title={t(`${p}.seo.title`, 'Eco Flat Squared Bottom Pouches: Maximum Shelf Stability 2025')}
        description={t(`${p}.seo.description`, 'Discover the ultimate shelf stability with eco flat bottom pouches. 100% recyclable, 5 printable panels, and premium pocket zippers. Low MOQ from 1,000 pcs.')}
        keywords={keywords}
        schemaType="Article"
        ogImage="/imgs/store/products/eco-flat-bottom-hero.png"
      />

      <SEOPageLayout
        heroBgColor="#14532d"
        title={t(`${p}.seo.title`, 'Eco Flat Squared Bottom Pouches: Maximum Shelf Stability')}
        description={t(`${p}.seo.description`, 'Discover the ultimate shelf stability with eco flat bottom pouches. 100% recyclable, 5 printable panels, and premium pocket zippers. Low MOQ from 1,000 pcs.')}
        keywords={keywords}
        heroTitle={t(`${p}.seo.heroTitle`, 'Eco Flat Bottom Pouches')}
        heroSubtitle={t(`${p}.seo.heroSubtitle`, 'The Pinnacle of Shelf Stability. 100% Recyclable or PCR. 5 Printable Panels. MOQ 1,000 pcs.')}
        introSummary={t(`${p}.seo.introSummary`, 'The flat bottom pouch (also known as a box pouch) is the most structurally sound flexible packaging format available. By featuring a completely flat, rectangular base, it offers zero tipping risk and a luxurious box-like aesthetic. Upgrade to our sustainable Mono-PE or PCR materials to deliver a premium unboxing experience without the environmental guilt.')}
        sections={sections}
        heroImage="/imgs/store/products/eco-flat-bottom-hero.png"
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
          <h2>Eco Flat Bottom Pouch / Box Pouch</h2>
          <p>Shape: Flat Bottom / Squared Bottom. MOQ: 1,000 pieces. Starting price: US$190. Lead time: 25–35 days.</p>
          <p>Materials: Mono-PE Recyclable, PCR, Biodegradable. Features: Ultimate shelf stability, pocket zippers, tear notches, degassing valves, 5 printable panels. Ideal alternative to rigid plastic tubs for supplements and bulk foods.</p>
        </section>
      </div>
    </>
  )
}

export default EcoFlatBottomPouchPage
