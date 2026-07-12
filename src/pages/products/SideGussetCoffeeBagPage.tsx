import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import {
  Leaf, CheckCircle, ChevronDown, Calendar, ShoppingCart,
  Award, PackageOpen, Box, Shield, Coffee, Droplet, Star
} from 'lucide-react'

const p = 'seoPages.pages.sideGussetCoffeeBag'

const SideGussetCoffeeBagPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'side gusset coffee bag',
    'coffee bag packaging',
    'specialty coffee packaging',
    'flat bottom vs side gusset',
    'coffee bag with valve',
    'kraft coffee bag',
    'custom coffee bag printing',
    'coffee roaster packaging'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What is the difference between a side gusset and a flat bottom coffee bag?'),
      a: t(`${p}.faq.a1`, 'A side gusset bag has a folded bottom seal (K-seal or quad seal) and expands at the sides, offering excellent volume efficiency but occasionally requiring support to stand perfectly upright when half empty. A flat bottom (or box bottom) bag has a completely flat, square base glued to the body, providing maximum shelf stability and a premium box-like appearance, but at a higher manufacturing cost.')
    },
    {
      q: t(`${p}.faq.q2`, 'Why do specialty roasters prefer side gusset bags?'),
      a: t(`${p}.faq.a2`, 'Side gusset bags offer a traditional, authentic specialty coffee aesthetic. They are cost-effective to produce, stack efficiently in shipping boxes, and provide four distinct panels for branding. When paired with a tin tie, they offer a familiar and reliable resealing experience for the consumer.')
    },
    {
      q: t(`${p}.faq.q3`, 'Can I get custom printing on side gusset coffee bags?'),
      a: t(`${p}.faq.a3`, 'Yes. We offer full edge-to-edge custom digital printing on all four panels of our side gusset coffee bags. Because we use HP Indigo digital presses, you can order custom printed bags starting at just 1,000 pieces without paying for expensive printing cylinders.')
    },
    {
      q: t(`${p}.faq.q4`, 'Do side gusset bags come with a degassing valve?'),
      a: t(`${p}.faq.a4`, 'Yes. One-way degassing valves are essential for freshly roasted coffee. We install premium one-way valves on the front or back panel of the bag to allow CO2 to escape without letting oxygen in, preventing bag explosion and staling.')
    },
    {
      q: t(`${p}.faq.q5`, 'Are side gusset coffee bags recyclable?'),
      a: t(`${p}.faq.a5`, 'Our traditional PET/VMPET/PE bags are not recyclable. However, we offer Eco Side Gusset Bags made from Mono-PE (which are 100% kerbside recyclable) or compostable materials. We highly recommend these sustainable options for modern specialty roasters.')
    }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'The Gold Standard in Specialty Coffee Packaging'),
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>The side gusset bag is the undisputed icon of the specialty coffee industry.</strong> {t(`${p}.sections.overview.desc`, 'Step into any third-wave coffee shop or artisanal roastery, and you will see shelves lined with this classic packaging format. Its tall, elegant profile and expanding side panels provide the perfect canvas for brand storytelling while offering exceptional volume efficiency.')}
          </p>
          <p>{t(`${p}.sections.overview.desc2`, 'At Achieve Pack, we have refined the side gusset coffee bag to meet the exacting standards of modern roasters. From high-barrier oxygen protection to integrated degassing valves and premium matte finishes, our bags ensure your beans reach the consumer exactly as the roastmaster intended.')}</p>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <img
              src="/imgs/store/products/side-gusset-coffee-bag-hero.png"
              alt="Beautiful specialty coffee roaster scene with eco side gusset bags"
              className="w-full object-cover"
            />
            <p className="text-xs text-neutral-500 text-center py-2 bg-neutral-50">
              {t(`${p}.sections.overview.imgCaption`, 'Premium side gusset coffee bags in a specialty roastery setting, showcasing matte finishes and integrated degassing valves.')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t(`${p}.sections.features.title`, 'Anatomy of a Premium Coffee Bag'),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.features.intro`, 'A successful coffee bag must balance aesthetics with rigorous technical performance. Here is how our side gusset bags are engineered for specialty coffee:')}</p>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
              <h4 className="font-semibold text-primary-700 mb-2 flex items-center gap-2"><Droplet className="h-4 w-4" /> Integrated Degassing Valves</h4>
              <p className="text-sm text-neutral-600">Freshly roasted beans release significant amounts of CO2 over the first two weeks. Our precision one-way valves vent this gas safely while blocking 100% of external oxygen, preserving the volatile aromatics.</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
              <h4 className="font-semibold text-primary-700 mb-2 flex items-center gap-2"><Star className="h-4 w-4" /> K-Seal Bottom Construction</h4>
              <p className="text-sm text-neutral-600">The bottom of the bag features a specialized K-seal (or quad seal). This welding pattern distributes the weight of the beans evenly, allowing the bag to stand upright on retail shelves without sagging.</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
              <h4 className="font-semibold text-primary-700 mb-2 flex items-center gap-2"><PackageOpen className="h-4 w-4" /> Resealability (Tin Tie / Zipper)</h4>
              <p className="text-sm text-neutral-600">Choose between the classic adhesive tin-tie closure for an authentic roastery feel, or upgrade to an integrated pocket zipper (pull-tab) for a cleaner, more modern resealing experience.</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
              <h4 className="font-semibold text-primary-700 mb-2 flex items-center gap-2"><Leaf className="h-4 w-4" /> High-Barrier Films</h4>
              <p className="text-sm text-neutral-600">Oxygen and light are the enemies of fresh coffee. We use high-grade EVOH layers (for our recyclable bags) or VMPET metalized layers (for conventional) to guarantee OTR levels below 1.0 cc/m²/day.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'comparison',
      title: t(`${p}.sections.comparison.title`, 'Side Gusset vs. Flat Bottom: Which to Choose?'),
      icon: <Box className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.comparison.intro`, 'Roasters often debate between the classic Side Gusset bag and the newer Flat Bottom (Box Pouch) format. While both are excellent choices, they serve slightly different brand aesthetics and budgets.')}</p>

          <div className="overflow-x-auto mt-4 border border-neutral-200 rounded-xl">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-700 text-white">
                  <th className="p-3 text-left w-1/3">Feature</th>
                  <th className="p-3 text-left w-1/3 border-l border-primary-600">Side Gusset (The Classic)</th>
                  <th className="p-3 text-left w-1/3 border-l border-primary-600">Flat Bottom (The Modern Box)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-semibold text-neutral-800">Shelf Stability</td>
                  <td className="p-3 border-l">Good (relies on product weight to stand)</td>
                  <td className="p-3 border-l">Excellent (stands empty like a box)</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-semibold text-neutral-800">Aesthetic</td>
                  <td className="p-3 border-l">Traditional artisanal roaster</td>
                  <td className="p-3 border-l">Premium, high-end retail</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-semibold text-neutral-800">Printable Panels</td>
                  <td className="p-3 border-l">4 (Front, Back, 2x Sides)</td>
                  <td className="p-3 border-l">5 (Front, Back, 2x Sides, Bottom)</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-semibold text-neutral-800">Production Cost</td>
                  <td className="p-3 border-l text-green-700 font-medium">More Economical</td>
                  <td className="p-3 border-l">15-25% Higher</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-3 font-semibold text-neutral-800">Best For</td>
                  <td className="p-3 border-l">250g retail bags, 1kg wholesale bags</td>
                  <td className="p-3 border-l">Premium limited edition roasts, retail</td>
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
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">Specialty Coffee Packaging Expert</span>
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">SCA Member</span>
              </div>
              <p className="text-neutral-300 text-sm mt-3">
                {t(`${p}.sections.expert.bio`, 'Ryan has engineered packaging solutions for over 200 independent coffee roasters globally. He understands the precise barrier requirements needed to protect specialty grade beans from oxidation, moisture, and UV light degradation.')}
              </p>
              <button
                onClick={openCalendly}
                className="mt-4 flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white text-sm px-4 py-2 rounded-lg transition font-medium"
              >
                <Calendar className="h-4 w-4" />
                {t(`${p}.sections.expert.cta`, 'Book a Coffee Packaging Consultation')}
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`, 'Elevate Your Coffee Roastery'),
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-50 to-green-50 p-6 rounded-2xl border border-primary-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-3">{t(`${p}.sections.cta.heading`, 'Ready to print your custom coffee bags?')}</h4>
          <p className="text-neutral-700 mb-5">{t(`${p}.sections.cta.desc`, 'Get a free sample pack of our side gusset bags to test with your roasts. Custom digital printing starts at just 1,000 pcs with a 20-30 day turnaround. We provide dielines and full artwork support.')}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.bookBtn`, 'Talk to a Coffee Packaging Expert')}
            </button>
            <Link
              to="/store/product/eco-sidegusset"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              {t(`${p}.sections.cta.viewBtn`, 'View Eco Side Gusset Pouches')}
            </Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <DualDomainSEOHead
        title={t(`${p}.seo.title`, 'Side Gusset Coffee Bag Packaging: Why Specialty Roasters Choose This Shape 2025')}
        description={t(`${p}.seo.description`, 'Learn why side gusset bags are the gold standard for specialty coffee. Discover the differences between side gusset and flat bottom pouches. MOQ 1,000 pcs.')}
        keywords={keywords}
        schemaType="Article"
        ogImage="/imgs/store/products/side-gusset-coffee-bag-hero.png"
      />

      <SEOPageLayout
        heroBgColor="#14532d"
        title={t(`${p}.seo.title`, 'Side Gusset Coffee Bag Packaging: Why Roasters Choose This Shape 2025')}
        description={t(`${p}.seo.description`, 'Learn why side gusset bags are the gold standard for specialty coffee. Discover the differences between side gusset and flat bottom pouches. MOQ 1,000 pcs.')}
        keywords={keywords}
        heroTitle={t(`${p}.seo.heroTitle`, 'Side Gusset Coffee Bags')}
        heroSubtitle={t(`${p}.seo.heroSubtitle`, 'The Iconic Shape of Specialty Coffee. Integrated Degassing Valves. Custom Printed from 1,000 pcs.')}
        introSummary={t(`${p}.seo.introSummary`, 'The side gusset coffee bag is the traditional workhorse of the specialty coffee industry. Known for its elegant vertical profile and excellent volume efficiency, it remains the most popular packaging choice for artisanal roasters worldwide. In this guide, we explore why this classic shape continues to dominate the coffee sector.')}
        sections={sections}
        heroImage="/imgs/store/products/side-gusset-coffee-bag-hero.png"
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
          <h2>Side Gusset Coffee Pouch</h2>
          <p>Packaging designed specifically for coffee roasters. Features: K-seal bottom, one-way degassing valve, optional tin-tie or pocket zipper closures. Available in Mono-PE recyclable or compostable materials. MOQ 1,000 bags. Full digital printing available.</p>
        </section>
      </div>
    </>
  )
}

export default SideGussetCoffeeBagPage
