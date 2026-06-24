import React from 'react'
import { AlertTriangle, XCircle, CheckCircle, Lightbulb, Package, DollarSign, FileText, Truck, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOPageLayout from '../../components/SEOPageLayout'
import EcoMaterialSourcingGuide from '../../components/pouch/EcoMaterialSourcingGuide'
import heroImage from '/imgs/seo-photos/a_packaging_mistakes_overview_6183920.jpg'
import { useTranslation } from 'react-i18next'

const EcoPackagingMistakesPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.ecoPackagingMistakes'

  const sections = [
    {
      id: 'mistake-1',
      title: t(`${p}.sections.mistake1.title`, 'Mistake #1: Over-ordering on the First Run'),
      icon: <AlertTriangle className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <figure className="my-6">
            <img src="/imgs/seo-photos/a_packaging_cost_comparison_8724501.jpg" alt={t(`${p}.sections.mistake1.imgAlt`, "Warehouse shelves full of excess custom packaging stock that cannot be used")} className="w-full rounded-xl shadow-sm border border-neutral-100" />
            <figcaption className="text-center text-sm text-neutral-500 mt-2">{t(`${p}.sections.mistake1.imgCaption`, "Ordering 10,000 bags to save pennies per unit often leads to thousands of wasted units when a recipe or label change occurs.")}</figcaption>
          </figure>
          <div className="flex gap-4">
            <div className="flex-1 bg-red-50 p-4 rounded-xl border border-red-100">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="h-4 w-4 text-red-600" />
                <span className="font-semibold text-red-800 text-sm">{t(`${p}.sections.mistake1.wrongTitle`, "What brands do wrong")}</span>
              </div>
              <p className="text-sm">{t(`${p}.sections.mistake1.wrongText`, "They order 20,000 units on their very first run to get a lower unit price (e.g., $0.15 instead of $0.50). Then, a month later, they need to change the nutrition label, ingredient list, or bar code — and 19,000 bags end up in the trash.")}</p>
            </div>
            <div className="flex-1 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span className="font-semibold text-emerald-800 text-sm">{t(`${p}.sections.mistake1.rightTitle`, "What to do instead")}</span>
              </div>
              <p className="text-sm">{t(`${p}.sections.mistake1.rightText`, "Start with a small run (100–1,000 units) using digital printing. You will pay more per unit initially, but you will save thousands of dollars in wasted inventory and plate fees while you finalize your product-market fit.")}</p>
            </div>
          </div>
          <div className="bg-primary-50 border border-primary-200 p-4 rounded-xl">
            <p className="text-sm text-primary-800" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.mistake1.proTip`, "<strong>💡 Pro tip:</strong> Only invest in plate printing (large volume) after your product has been in the market for 6+ months without artwork changes.").replace('💡 Pro tip:', '<strong>💡 Pro tip:</strong>') }} />
          </div>
        </div>
      )
    },
    {
      id: 'mistake-2',
      title: t(`${p}.sections.mistake2.title`, 'Mistake #2: Choosing Material Before Understanding Your Product'),
      icon: <DollarSign className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="flex gap-4">
            <div className="flex-1 bg-red-50 p-4 rounded-xl border border-red-100">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="h-4 w-4 text-red-600" />
                <span className="font-semibold text-red-800 text-sm">{t(`${p}.sections.mistake2.wrongTitle`, "What brands do wrong")}</span>
              </div>
              <p className="text-sm">{t(`${p}.sections.mistake2.wrongText`, "Pick \"compostable\" because it sounds good, then discover their moisture-sensitive product goes stale in 3 months.")}</p>
            </div>
            <div className="flex-1 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span className="font-semibold text-emerald-800 text-sm">{t(`${p}.sections.mistake2.rightTitle`, "What to do instead")}</span>
              </div>
              <p className="text-sm">{t(`${p}.sections.mistake2.rightText`, "Start with your product's barrier requirements (moisture, oxygen, light), then find the most eco-friendly material that meets them.")}</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
            <p className="text-sm text-amber-800"><strong>💡 {t(`${p}.sections.mistake2.proTip`, "Pro tip:")}</strong> {t(`${p}.sections.mistake2.proTipText`, "Request samples of 2-3 materials and test fill them with your product for 4-8 weeks before committing.")} <Link to="/free-service" className="text-primary-600 font-medium hover:underline">{t(`${p}.sections.mistake2.link`, "Get free samples →")}</Link></p>
          </div>
        </div>
      )
    },
    {
      id: 'mistake-3',
      title: t(`${p}.sections.mistake3.title`, 'Mistake #3: Ignoring Packaging Regulations'),
      icon: <FileText className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <figure className="my-6">
            <img src="/imgs/seo-photos/a_mistakes_compostable_labels_8412414.jpg" alt={t(`${p}.sections.mistake3.imgAlt`, "Close-up of eco-friendly pouch back panel with clear certified compostable BPI logo")} className="w-full rounded-xl shadow-sm border border-neutral-100" />
            <figcaption className="text-center text-sm text-neutral-500 mt-2">{t(`${p}.sections.mistake3.imgCaption`, "Always use certified logos like BPI instead of vague \"eco-friendly\" claims.")}</figcaption>
          </figure>
          <div className="flex gap-4">
            <div className="flex-1 bg-red-50 p-4 rounded-xl border border-red-100">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="h-4 w-4 text-red-600" />
                <span className="font-semibold text-red-800 text-sm">{t(`${p}.sections.mistake3.wrongTitle`, "What brands do wrong")}</span>
              </div>
              <p className="text-sm">{t(`${p}.sections.mistake3.wrongText`, "Print \"eco-friendly\" or \"biodegradable\" on packaging without proper certifications, risking FTC Green Guides violations and customer distrust.")}</p>
            </div>
            <div className="flex-1 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span className="font-semibold text-emerald-800 text-sm">{t(`${p}.sections.mistake3.rightTitle`, "What to do instead")}</span>
              </div>
              <p className="text-sm">{t(`${p}.sections.mistake3.rightText`, "Use specific certified claims like \"Certified Compostable (BPI)\" or \"Recyclable (How2Recycle)\" with the official logos. Avoid vague terms like \"green\" or \"eco.\"")}</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
            <p className="text-sm text-amber-800"><strong>⚠️ {t(`${p}.sections.mistake3.important`, "Important:")}</strong> {t(`${p}.sections.mistake3.regulationText`, "California SB 343, EU Packaging Directive, and FTC Green Guides all restrict unsubstantiated environmental claims. Non-compliance can result in fines up to $50,000 per violation.")}</p>
          </div>
        </div>
      )
    },
    {
      id: 'mistake-4',
      title: t(`${p}.sections.mistake4.title`, 'Mistake #4: Neglecting the Unboxing Experience'),
      icon: <Package className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <figure className="my-6">
            <img src="/imgs/seo-photos/a_mistakes_premium_unboxing_8812414.jpg" alt={t(`${p}.sections.mistake4.imgAlt`, "Perfect ecommerce unboxing experience with kraft mailer box, branded pouch, and tissue paper")} className="w-full rounded-xl shadow-sm border border-neutral-100" />
            <figcaption className="text-center text-sm text-neutral-500 mt-2">{t(`${p}.sections.mistake4.imgCaption`, "A cohesive unboxing experience dramatically increases customer retention and brand loyalty.")}</figcaption>
          </figure>
          <div className="flex gap-4">
            <div className="flex-1 bg-red-50 p-4 rounded-xl border border-red-100">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="h-4 w-4 text-red-600" />
                <span className="font-semibold text-red-800 text-sm">{t(`${p}.sections.mistake4.wrongTitle`, "What brands do wrong")}</span>
              </div>
              <p className="text-sm">{t(`${p}.sections.mistake4.wrongText`, "Focus only on shelf appeal but forget that DTC customers receive products in the mail. A plain brown box with a beautiful pouch inside feels disconnected.")}</p>
            </div>
            <div className="flex-1 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span className="font-semibold text-emerald-800 text-sm">{t(`${p}.sections.mistake4.rightTitle`, "What to do instead")}</span>
              </div>
              <p className="text-sm">{t(`${p}.sections.mistake4.rightText`, "Design a cohesive experience: branded outer packaging + inner pouch + thank-you card. Even a simple sticker on a kraft mailer bag creates a premium feel.")}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'mistake-5',
      title: t(`${p}.sections.mistake5.title`, 'Mistake #5: Not Planning for Scale'),
      icon: <Truck className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="flex gap-4">
            <div className="flex-1 bg-red-50 p-4 rounded-xl border border-red-100">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="h-4 w-4 text-red-600" />
                <span className="font-semibold text-red-800 text-sm">{t(`${p}.sections.mistake5.wrongTitle`, "What brands do wrong")}</span>
              </div>
              <p className="text-sm">{t(`${p}.sections.mistake5.wrongText`, "Use a supplier that only does small runs. When they need 50,000 bags, they have to switch suppliers and redo everything — artwork, tooling, testing.")}</p>
            </div>
            <div className="flex-1 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span className="font-semibold text-emerald-800 text-sm">{t(`${p}.sections.mistake5.rightTitle`, "What to do instead")}</span>
              </div>
              <p className="text-sm">{t(`${p}.sections.mistake5.rightText`, "Choose a supplier (like Achieve Pack) that offers both small-run digital and large-run plate printing. Same factory, same quality, seamless scaling from 100 to 100,000+ pieces.")}</p>
            </div>
          </div>
          <div className="bg-primary-50 border border-primary-200 p-4 rounded-xl">
            <p className="text-sm text-primary-800" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.mistake5.advantage`, "<strong>🚀 Achieve Pack advantage:</strong> We keep your artwork files and plate specifications on record. When you're ready to scale, just tell us the quantity — we handle the rest with zero redesign needed.").replace('🚀 Achieve Pack advantage:', '<strong>🚀 Achieve Pack advantage:</strong>') }} />
          </div>
        </div>
      )
    },
    {
      id: 'achievepack-eco-materials',
      title: t(`${p}.sections.achievepackEcoMaterials.title`, 'AchievePack Sustainable Material Specifications'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: <EcoMaterialSourcingGuide />
    }
  ]

  const faqs = (t(`${p}.faqs`, { returnObjects: true }) as Array<{question: string, answer: string}>) || [
    {
      question: 'What is the biggest mistake small brands make with packaging?',
      answer: 'Over-ordering on the first run. Many startups order 10,000+ units to get a better price, but then need to change their design after launch. Starting with 500-1,000 units via digital printing (no plate fees) lets you test the market and iterate before committing to a large order.'
    },
    {
      question: 'Can I use "eco-friendly" on my packaging labels?',
      answer: 'Be careful — terms like "eco-friendly," "green," and "sustainable" are vague and can violate FTC Green Guides in the USA and EU regulations. Instead, use specific certified claims like "Certified Compostable — BPI" or "Recyclable — How2Recycle." Always include the certification logo.'
    },
    {
      question: 'How many units should I order for my first packaging run?',
      answer: 'We recommend 500-1,000 units for your first run. This gives you enough inventory to test the market for 2-3 months while keeping costs low. Digital printing allows full-color custom designs with no plate fees at this quantity. You can scale to 5,000+ on your second order for 30-50% lower per-unit costs.'
    },
    {
      question: 'What is the most common packaging design mistake?',
      answer: 'Not leaving enough space for required information. Many brands design beautiful packaging but forget to account for nutrition labels, barcodes, lot codes, and regulatory text. Always plan your artwork with mandatory elements first, then design around them.'
    }
  ]

  const relatedLinksBase = [
    { url: '/products/low-moq-packaging' },
    { url: '/blog/packaging-cost-guide' },
    { url: '/blog/compostable-vs-recyclable' },
    { url: '/free-service' },
  ]
  const relatedLinksTranslations = (t(`${p}.relatedLinks`, { returnObjects: true }) as Array<{title: string, description: string}>) || []
  const relatedLinks = relatedLinksBase.map((link, idx) => ({
    ...link,
    title: relatedLinksTranslations[idx]?.title || '',
    description: relatedLinksTranslations[idx]?.description || ''
  }))

  return (
    <SEOPageLayout heroBgColor="#14532d"
      title={t(`${p}.seo.title`, "5 Eco Packaging Mistakes Small Brands Make (And How to Avoid Them)")}
      description={t(`${p}.seo.description`, "Avoid costly packaging mistakes that waste money and hurt your brand. Learn from real examples: over-ordering, wrong materials, greenwashing risks, and more. Expert advice from a packaging manufacturer.")}
      keywords={[
        'eco packaging mistakes',
        'packaging mistakes small brands',
        'sustainable packaging tips',
        'custom packaging advice',
        'packaging for startups',
        'avoid packaging waste',
        'first packaging order tips',
        'eco-friendly packaging guide'
      ]}
      heroTitle={t(`${p}.hero.title`, "5 Eco Packaging Mistakes Small Brands Make")}
      heroSubtitle={t(`${p}.hero.subtitle`, "And How to Avoid Them — Advice from a Packaging Manufacturer")}
      heroImage={heroImage}
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="Eco Packaging"
      sections={sections}
      introSummary={t(`${p}.hero.introSummary`, "After working with hundreds of small brands and startups, we've seen the same packaging mistakes come up again and again. Some cost thousands of dollars, others damage brand trust. Here are the top 5 mistakes — and exactly how to avoid each one.")}
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.cta.title`, "Get Expert Packaging Advice — Free")}
      ctaDescription={t(`${p}.cta.description`, "Not sure where to start? Our team will review your product and recommend the best packaging solution.")}
      ctaButtonText={t(`${p}.cta.buttonText`, "Book Free Consultation")}
      ctaButtonUrl="/contact"
      canonicalUrl="https://achievepack.com/blog/eco-packaging-mistakes"
      schemaType="Article"
    />
  )
}

export default EcoPackagingMistakesPage
