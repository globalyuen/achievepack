import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import {
  Leaf, CheckCircle, ChevronDown, Calendar, ShoppingCart,
  Award, PackageOpen, LayoutGrid, Zap, Shield
} from 'lucide-react'

const p = 'seoPages.pages.premiumEcoPackagingComparison'

const PremiumEcoPackagingComparisonPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const isPouchDomain = getDomain() === 'pouch'

  const keywords: string[] = [
    'premium eco packaging',
    'eco flat bottom vs eco stand up',
    'eco box bottom pouch comparison',
    'sustainable packaging comparison',
    'premium recyclable bags',
    'flat bottom vs doypack',
    'premium coffee packaging',
    'high end sustainable packaging'
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: t(`${p}.faq.q1`, 'What is the most premium eco-friendly packaging shape?'),
      a: t(`${p}.faq.a1`, 'The Eco Flat Bottom (Box Bottom) pouch is widely considered the most premium format. Its perfectly square base, 5 printable panels, and ability to stand rigidly like a box command attention on high-end retail shelves, especially when paired with a front pocket zipper.')
    },
    {
      q: t(`${p}.faq.q2`, 'How much more does a flat bottom pouch cost compared to a stand-up pouch?'),
      a: t(`${p}.faq.a2`, 'A flat bottom pouch generally costs 15-25% more than a standard stand-up pouch of the same volume. This price difference reflects the slower, more complex manufacturing process required to fold and seal the square base.')
    },
    {
      q: t(`${p}.faq.q3`, 'Are all premium packaging formats available in eco-friendly materials?'),
      a: t(`${p}.faq.a3`, 'Yes. At Achieve Pack, we have successfully engineered Mono-PE (100% recyclable) and PCR versions of all our premium formats, including Flat Bottom, Side Gusset, and Stand-Up pouches. You no longer have to compromise sustainability for luxury.')
    },
    {
      q: t(`${p}.faq.q4`, 'Which format is best for heavy items like 5kg of protein powder?'),
      a: t(`${p}.faq.a4`, 'For heavy weights (3kg to 10kg), the Flat Bottom / Box Bottom format is superior. The flat rectangular base distributes the immense weight evenly, whereas a standard stand-up pouch may become unstable or bulge awkwardly at those volumes.')
    },
    {
      q: t(`${p}.faq.q5`, 'Can I get custom printing on all these formats at a low MOQ?'),
      a: t(`${p}.faq.a5`, 'Yes. Regardless of whether you choose a Stand-Up, Side Gusset, or Flat Bottom format, our HP Indigo digital printing technology allows for custom printing starting at just 1,000 pieces per SKU.')
    }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'Choosing the Right Premium Sustainable Format'),
      icon: <LayoutGrid className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Upgrading to sustainable packaging is the perfect opportunity to elevate your brand's physical presence.</strong> {t(`${p}.sections.overview.desc`, 'But with multiple premium eco-friendly formats available, how do you choose the right shape for your product?')}
          </p>
          <p>{t(`${p}.sections.overview.desc2`, 'This guide compares the three most popular premium eco-packaging formats: The Eco Stand-Up Pouch (Doypack), the Eco Side Gusset, and the ultra-premium Eco Flat Bottom (Box Pouch). We will analyze them based on shelf impact, cost, volume efficiency, and ideal use cases.')}</p>

          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <img
              src="/imgs/store/products/premium-eco-comparison-hero.png"
              alt="Side-by-side comparison of an eco stand-up pouch, side gusset, and flat bottom bag"
              className="w-full object-cover"
            />
            <p className="text-xs text-neutral-500 text-center py-2 bg-neutral-50">
              {t(`${p}.sections.overview.imgCaption`, 'Left to Right: Eco Stand-Up (Doypack), Eco Side Gusset, and Eco Flat Bottom (Box Pouch).')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'comparison',
      title: t(`${p}.sections.comparison.title`, 'The Ultimate Format Comparison'),
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="overflow-x-auto border border-neutral-200 rounded-xl">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-primary-900 text-white">
                  <th className="p-4 text-left w-1/4 rounded-tl-xl">Feature</th>
                  <th className="p-4 text-left w-1/4 border-l border-primary-700">Eco Stand-Up (Doypack)</th>
                  <th className="p-4 text-left w-1/4 border-l border-primary-700">Eco Side Gusset</th>
                  <th className="p-4 text-left w-1/4 border-l border-primary-700 rounded-tr-xl">Eco Flat Bottom</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-semibold text-neutral-900 bg-neutral-50">Visual Impact</td>
                  <td className="p-4 border-l">Standard / Familiar</td>
                  <td className="p-4 border-l">Traditional Artisanal</td>
                  <td className="p-4 border-l text-primary-700 font-bold bg-primary-50/50">Ultra-Premium / Luxury</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-semibold text-neutral-900 bg-neutral-50">Shelf Stability</td>
                  <td className="p-4 border-l">Good (relies on fill weight)</td>
                  <td className="p-4 border-l">Good (can lean if half empty)</td>
                  <td className="p-4 border-l text-primary-700 font-bold bg-primary-50/50">Perfect (Stands like a box)</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-semibold text-neutral-900 bg-neutral-50">Printable Panels</td>
                  <td className="p-4 border-l">2 (Front, Back)</td>
                  <td className="p-4 border-l">4 (Front, Back, 2x Sides)</td>
                  <td className="p-4 border-l text-primary-700 font-bold bg-primary-50/50">5 (Front, Back, Sides, Bottom)</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-semibold text-neutral-900 bg-neutral-50">Relative Cost</td>
                  <td className="p-4 border-l text-green-600 font-bold">Most Economical ($)</td>
                  <td className="p-4 border-l">Moderate ($$)</td>
                  <td className="p-4 border-l text-orange-600">Premium ($$$)</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-semibold text-neutral-900 bg-neutral-50">Best Reseal Option</td>
                  <td className="p-4 border-l">Standard Press Zipper</td>
                  <td className="p-4 border-l">Tin-Tie</td>
                  <td className="p-4 border-l text-primary-700 font-bold bg-primary-50/50">Front Pocket Zipper</td>
                </tr>
                <tr className="">
                  <td className="p-4 font-semibold text-neutral-900 bg-neutral-50">Ideal Use Case</td>
                  <td className="p-4 border-l">Snacks, entry-level products</td>
                  <td className="p-4 border-l">Specialty coffee roasters</td>
                  <td className="p-4 border-l bg-primary-50/50">High-end retail, heavy weights</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'deepdive',
      title: t(`${p}.sections.deepdive.title`, 'Deep Dive: When to Upgrade to Flat Bottom'),
      icon: <PackageOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.deepdive.intro`, 'While the Eco Stand-Up Pouch is our most popular seller due to its cost-effectiveness, upgrading to an Eco Flat Bottom pouch provides massive ROI in specific scenarios:')}</p>

          <div className="space-y-3 mt-4">
            <div className="flex gap-3 bg-white p-4 rounded-xl border border-neutral-200">
              <div className="text-2xl">💪</div>
              <div>
                <h4 className="font-semibold text-neutral-900">1. Heavy Volumes (2kg+)</h4>
                <p className="text-sm text-neutral-600">If you are packing heavy bulk items like 5kg of whey protein or dog food, a standard stand-up pouch will bulge awkwardly at the bottom and risk tipping. A flat bottom pouch distributes the weight evenly across a rigid rectangular base.</p>
              </div>
            </div>
            <div className="flex gap-3 bg-white p-4 rounded-xl border border-neutral-200">
              <div className="text-2xl">💎</div>
              <div>
                <h4 className="font-semibold text-neutral-900">2. High Retail Price Points</h4>
                <p className="text-sm text-neutral-600">If your product retails for over $30/unit (e.g., premium adaptogen powders, limited edition Geisha coffees), consumers expect the packaging to reflect the price. The crisp edges and pocket zipper of a flat bottom bag deliver that luxury unboxing experience.</p>
              </div>
            </div>
            <div className="flex gap-3 bg-white p-4 rounded-xl border border-neutral-200">
              <div className="text-2xl">🏷️</div>
              <div>
                <h4 className="font-semibold text-neutral-900">3. Complex Regulatory Text</h4>
                <p className="text-sm text-neutral-600">If you need to display extensive nutritional info, multiple languages, and recycling instructions, a stand-up pouch gets cluttered fast. A flat bottom pouch gives you 5 distinct panels to separate marketing copy from regulatory requirements.</p>
              </div>
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
                <span className="bg-primary-700/50 text-primary-200 text-xs px-2 py-1 rounded-full">Packaging Strategy Consultant</span>
              </div>
              <p className="text-neutral-300 text-sm mt-3">
                {t(`${p}.sections.expert.bio`, 'Ryan helps CPG brands optimize their packaging spend. He frequently advises clients on when to use cost-effective stand-up pouches and when the ROI justifies upgrading to premium flat bottom formats for their flagship products.')}
              </p>
              <button
                onClick={openCalendly}
                className="mt-4 flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white text-sm px-4 py-2 rounded-lg transition font-medium"
              >
                <Calendar className="h-4 w-4" />
                {t(`${p}.sections.expert.cta`, 'Book a Packaging Strategy Call')}
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`, 'Request a Sample Comparison Pack'),
      icon: <PackageOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-50 to-green-50 p-6 rounded-2xl border border-primary-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-3">{t(`${p}.sections.cta.heading`, 'See the difference in person.')}</h4>
          <p className="text-neutral-700 mb-5">{t(`${p}.sections.cta.desc`, 'Not sure which format is right for your product? We can send you physical samples of our Eco Stand-Up, Side Gusset, and Flat Bottom pouches so you can test fill them and compare the shelf presence.')}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.bookBtn`, 'Request a Free Sample Pack')}
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              {t(`${p}.sections.cta.viewBtn`, 'Browse All Eco Pouches')}
            </Link>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <DualDomainSEOHead
        title={t(`${p}.seo.title`, 'Premium Eco Packaging Comparison: Stand-Up vs Flat Bottom 2025')}
        description={t(`${p}.seo.description`, 'Compare the top sustainable packaging formats. Understand the cost and aesthetic differences between Eco Stand-Up, Side Gusset, and Flat Bottom pouches.')}
        keywords={keywords}
        schemaType="Article"
        ogImage="/imgs/store/products/premium-eco-comparison-hero.png"
      />

      <SEOPageLayout
        heroBgColor="#14532d"
        title={t(`${p}.seo.title`, 'Premium Eco Packaging Comparison: Which Format is Right for You?')}
        description={t(`${p}.seo.description`, 'Compare the top sustainable packaging formats. Understand the cost and aesthetic differences between Eco Stand-Up, Side Gusset, and Flat Bottom pouches.')}
        keywords={keywords}
        heroTitle={t(`${p}.seo.heroTitle`, 'Premium Eco Packaging Comparison')}
        heroSubtitle={t(`${p}.seo.heroSubtitle`, 'Stand-Up vs Side Gusset vs Flat Bottom. Find the perfect sustainable shape for your brand.')}
        introSummary={t(`${p}.seo.introSummary`, 'Choosing the right pouch shape is just as important as choosing the right sustainable material. In this comprehensive guide, we compare the cost, aesthetics, and ideal use cases for the three most popular premium eco-packaging formats: The Stand-Up Pouch, the Side Gusset, and the Flat Bottom bag.')}
        sections={sections}
        heroImage="/imgs/store/products/premium-eco-comparison-hero.png"
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
          <h2>Premium Eco Packaging Options</h2>
          <p>Comparison between Stand-Up Doypack, Side Gusset, and Flat Bottom / Box Bottom pouches.</p>
          <p>All formats available in 100% Recyclable Mono-PE, PCR, and Compostable materials. Custom digital printing starting at 1,000 pieces. Full customization with pocket zippers, degassing valves, and matte/gloss finishes.</p>
        </section>
      </div>
    </>
  )
}

export default PremiumEcoPackagingComparisonPage
