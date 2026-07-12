import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import {
  Leaf, CheckCircle, ChevronDown, Calendar, ShoppingCart,
  Award, AlertTriangle, Recycle, Package, Shield, BarChart
} from 'lucide-react'

const p = 'seoPages.pages.ecoVsConventional'

const EcoVsConventionalPouchPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'eco vs conventional pouch',
    'recyclable vs plastic packaging',
    'sustainable packaging comparison',
    'eco pouch cost',
    'mono recyclable vs multi-layer',
    'packaging material comparison'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'Are eco pouches as durable as conventional foil pouches?'),
      a: t(`${p}.faq.a1`, 'Yes. Modern mono-material PE and high-grade PCR (Post-Consumer Recycled) films offer puncture resistance and tensile strength equivalent to conventional multi-layer PET/ALU/PE structures. They easily survive drop tests, international shipping, and e-commerce distribution.')
    },
    {
      q: t(`${p}.faq.q2`, 'How much more do eco pouches cost compared to standard plastic bags?'),
      a: t(`${p}.faq.a2`, 'Traditionally, eco films carried a 30-50% premium. However, with digital printing at Achieve Pack, the price gap has narrowed significantly. For MOQs of 1,000 to 5,000 pieces, eco pouches are priced at parity with or only 5-10% higher than conventional options, as the savings in tooling offset the higher raw material costs.')
    },
    {
      q: t(`${p}.faq.q3`, 'Can I get a glossy finish on a recyclable eco pouch?'),
      a: t(`${p}.faq.a3`, 'Yes. Our mono-material recyclable pouches support both high-gloss and soft-touch matte finishes. Unlike conventional pouches which use a separate non-recyclable PET layer for gloss, our eco pouches achieve this finish within the same recyclable polymer family.')
    },
    {
      q: t(`${p}.faq.q4`, 'Do eco pouches have a shorter shelf life?'),
      a: t(`${p}.faq.a4`, 'It depends on the eco material chosen. High-barrier Mono-PE with EVOH can match the 12-18 month shelf life of conventional foil. However, biodegradable PLA/PBAT blends typically offer a 6-9 month shelf life. This is why matching the material to your actual supply chain turnover is critical.')
    },
    {
      q: t(`${p}.faq.q5`, 'Will my packaging lines need adjustment to seal eco pouches?'),
      a: t(`${p}.faq.a5`, 'Mono-material films require slightly tighter temperature controls on your heat sealers compared to conventional laminates. Because the entire bag is made of PE or PP, the melting point is uniform. We provide exact temperature and dwell time specifications, and most modern VFFS or band sealers require only minor calibration.')
    }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'The Shift from Multi-Layer to Mono-Material'),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>For decades, the packaging industry relied on conventional multi-layer pouches</strong> {t(`${p}.sections.overview.desc`, 'made by laminating different plastics together (e.g., PET outside for printing, Aluminum in the middle for barrier, and PE inside for sealing). While excellent for food preservation, these mixed materials are impossible to separate and recycle, ending up directly in landfills.')}
          </p>
          <p>{t(`${p}.sections.overview.desc2`, 'Eco stand-up pouches solve this by using mono-materials (a single polymer family like 100% PE), post-consumer recycled plastics, or certified compostable films. The challenge for brands is navigating this transition without sacrificing shelf life, aesthetics, or profitability.')}</p>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <img
              src="/imgs/store/products/eco-vs-conventional-hero.png"
              alt="Side by side comparison of an eco green sustainable pouch and a conventional silver metallic pouch"
              className="w-full object-cover"
            />
            <p className="text-xs text-neutral-500 text-center py-2 bg-neutral-50">
              {t(`${p}.sections.overview.imgCaption`, 'Left: Mono-material recyclable eco pouch. Right: Conventional multi-layer PET/ALU/PE laminate.')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'comparison',
      title: t(`${p}.sections.comparison.title`, 'Head-to-Head Comparison: Eco vs Conventional'),
      icon: <BarChart className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.comparison.intro`, 'To make an informed decision, you must evaluate both materials across barrier performance, production economics, and end-of-life impact. Here is how they stack up in 2025.')}</p>

          <div className="overflow-x-auto mt-4 border border-neutral-200 rounded-xl">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100 text-neutral-800">
                  <th className="p-4 text-left border-b w-1/4">Metric</th>
                  <th className="p-4 text-left border-b border-l bg-red-50/50 w-3/8 text-red-900">Conventional (PET/ALU/PE)</th>
                  <th className="p-4 text-left border-b border-l bg-green-50/50 w-3/8 text-primary-900">Eco Pouch (Mono-PE + EVOH)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Recyclability', '❌ 0% (Goes to landfill)', '✅ 100% (Soft plastics stream)'],
                  ['Oxygen Barrier (OTR)', 'Excellent (< 0.1 cc/m²)', 'Very Good (< 1.0 cc/m²)'],
                  ['Moisture Barrier (WVTR)', 'Excellent (< 0.1 g/m²)', 'Very Good (< 1.0 g/m²)'],
                  ['Shelf Life Limit', '24+ Months', '12–18 Months'],
                  ['Carbon Footprint', 'High (Virgin oil, energy intensive)', 'Low (Reduced energy, lighter weight)'],
                  ['Cost (at 100k pcs)', 'Lowest', '15-20% Higher'],
                  ['Cost (at 1k pcs Digital)', 'High Setup Costs', 'Price Parity (No plates needed)'],
                  ['Compliance (EU/UK)', 'Subject to plastic taxes', 'Exempt or reduced tax rates'],
                ].map(([metric, conv, eco], i) => (
                  <tr key={i} className="border-b border-neutral-200">
                    <td className="p-4 font-semibold text-neutral-800 bg-neutral-50">{metric}</td>
                    <td className="p-4 border-l text-neutral-700">{conv}</td>
                    <td className="p-4 border-l text-neutral-700 bg-green-50/30">{eco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">🔬 {t(`${p}.sections.comparison.notebookTitle`, "From Ryan Wong's Engineering Notebook")}</h4>
            <p className="text-sm text-amber-900 italic">
              {t(`${p}.sections.comparison.notebook`, '"The biggest myth in packaging is that every product needs a 2-year shelf life. If your coffee or snack is consumed within 6 months of roasting or baking, paying a heavy environmental price for an aluminum foil barrier is massive overkill. By rightsizing your barrier (using EVOH instead of Alu), you unlock kerbside recyclability without any noticeable degradation in your product\'s freshness." — Ryan Wong, Co-Founder')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'risks',
      title: t(`${p}.sections.risks.title`, 'The Hidden Risks of Staying Conventional'),
      icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.risks.intro`, 'While conventional laminates may seem like the safe, traditional choice, they carry increasing risks for modern consumer brands.')}</p>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
              <h4 className="font-semibold text-red-800 mb-2">Legislative Taxes & Bans</h4>
              <p className="text-sm text-red-900">The UK Plastic Packaging Tax and the EU\'s Packaging and Packaging Waste Regulation (PPWR) are actively penalizing multi-layer unrecyclable plastics. Brands using conventional laminates face rising compliance costs and potential delisting from major retailers demanding sustainable options.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
              <h4 className="font-semibold text-orange-800 mb-2">Brand Reputation</h4>
              <p className="text-sm text-orange-900">Consumers increasingly name and shame brands using excessive, unrecyclable packaging. In highly competitive spaces like specialty coffee, pet food, and supplements, sustainability is no longer a premium add-on—it is a baseline consumer expectation.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'transition',
      title: t(`${p}.sections.transition.title`, 'How to Transition Smoothly'),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.transition.intro`, 'Switching to eco pouches doesn\'t have to disrupt your business. Follow our proven transition roadmap:')}</p>
          
          <ol className="space-y-4 mt-2">
            {[
              { step: '1', title: 'Audit Your Shelf Life', desc: 'Determine exactly how many months your product sits between packing and consumption. If it is under 12 months, mono-materials will work perfectly.' },
              { step: '2', title: 'Start Small with Digital Print', desc: 'Test the market using our low 1,000 piece MOQ. Digital printing means you can test multiple designs or flavors on eco materials without spending thousands on printing cylinders.' },
              { step: '3', title: 'Calibrate Your Sealers', desc: 'When your eco pouches arrive, lower the temperature on your heat sealers by 10-15°C compared to your conventional foil settings. Mono-materials seal beautifully at lower temperatures.' },
              { step: '4', title: 'Update Your Marketing', desc: 'Promote your switch! Add the recycling instructions clearly on the back of the pack to educate your consumers and build brand loyalty.' }
            ].map((s, i) => (
              <li key={i} className="flex gap-4 p-4 bg-white border border-neutral-200 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">{s.step}</div>
                <div>
                  <h4 className="font-semibold text-neutral-900">{s.title}</h4>
                  <p className="text-sm text-neutral-600 mt-1">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
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
                {t(`${p}.sections.expert.bio`, 'With over 14 years in the flexible packaging industry, Ryan has helped transition hundreds of brands from unrecyclable multi-layer laminates to sustainable mono-material structures. He specializes in optimizing barrier properties to match real-world supply chain needs.')}
              </p>
              <button
                onClick={openCalendly}
                className="mt-4 flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white text-sm px-4 py-2 rounded-lg transition font-medium"
              >
                <Calendar className="h-4 w-4" />
                {t(`${p}.sections.expert.cta`, 'Book a Material Transition Audit')}
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`, 'Make the Switch Today'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-50 to-green-50 p-6 rounded-2xl border border-primary-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-3">{t(`${p}.sections.cta.heading`, 'Ready to transition to eco packaging?')}</h4>
          <p className="text-neutral-700 mb-5">{t(`${p}.sections.cta.desc`, 'Test the market risk-free. Our digital printing technology allows you to order premium mono-recyclable or compostable pouches starting at just 1,000 pieces. Delivered in 20-30 days.')}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.bookBtn`, 'Talk to an Engineer')}
            </button>
            <Link
              to="/store/product/eco-standup"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              {t(`${p}.sections.cta.viewBtn`, 'View Eco Pouches')}
            </Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <DualDomainSEOHead
        title={t(`${p}.seo.title`, 'Eco vs Conventional Stand-Up Pouches: Complete Material Comparison 2025')}
        description={t(`${p}.seo.description`, 'Discover the differences between eco-friendly and conventional stand-up pouches. Compare costs, shelf life, and recyclability. Make the switch today with low MOQs.')}
        keywords={keywords}
        schemaType="Article"
        ogImage="/imgs/store/products/eco-vs-conventional-hero.png"
      />

      <SEOPageLayout
        heroBgColor="#14532d"
        title={t(`${p}.seo.title`, 'Eco vs Conventional Stand-Up Pouches: Material Comparison 2025')}
        description={t(`${p}.seo.description`, 'Compare eco-friendly and conventional stand-up pouches. Learn about costs, shelf life, and recyclability to make an informed packaging decision.')}
        keywords={keywords}
        heroTitle={t(`${p}.seo.heroTitle`, 'Eco vs Conventional Pouches')}
        heroSubtitle={t(`${p}.seo.heroSubtitle`, 'The Ultimate Material Comparison — Should You Switch to Mono-Materials in 2025?')}
        introSummary={t(`${p}.seo.introSummary`, 'The packaging industry is undergoing a massive shift. Brands are moving away from traditional unrecyclable multi-layer foils and adopting mono-material plastics and compostable films. In this guide, we break down the exact differences in barrier performance, cost, and shelf-life so you can make an informed decision for your product.')}
        sections={sections}
        heroImage="/imgs/store/products/eco-vs-conventional-hero.png"
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
          <h2>Eco Packaging vs Conventional Plastics</h2>
          <p>Comparison of packaging materials. Mono-material PE/PP vs PET/ALU/PE. Benefits: 100% recyclable, reduced carbon footprint, compliance with EU packaging taxes. Ideal for brands seeking sustainable operations.</p>
        </section>
      </div>
    </>
  )
}

export default EcoVsConventionalPouchPage
