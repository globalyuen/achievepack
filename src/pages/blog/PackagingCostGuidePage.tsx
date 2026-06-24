import React from 'react'
import { DollarSign, Package, Calculator, TrendingDown, BarChart3, CheckCircle, Truck, Palette, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOPageLayout from '../../components/SEOPageLayout'
import EcoMaterialSourcingGuide from '../../components/pouch/EcoMaterialSourcingGuide'
import { useTranslation, Trans } from "react-i18next";

const PackagingCostGuidePage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.packagingCostGuide';
  const heroImage = '/imgs/seo-photos/a_packaging_cost_comparison_8724501.jpg'

  const sections = [
    {
      id: 'cost-breakdown',
      title: 'Custom Packaging Cost Breakdown (2025 Prices)',
      icon: <DollarSign className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.customPackagingCostsDependOn4K`)}</strong> {t(`${p}.materialSizePrintTypeAndQuanti`)}</p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
              <thead className="bg-primary-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-primary-800">{t(`${p}.packageType`)}</th>
                  <th className="px-4 py-3 text-left font-semibold text-primary-800">{t(`${p}.100Pcs`)}</th>
                  <th className="px-4 py-3 text-left font-semibold text-primary-800">{t(`${p}.1000Pcs`)}</th>
                  <th className="px-4 py-3 text-left font-semibold text-primary-800">{t(`${p}.5000Pcs`)}</th>
                  <th className="px-4 py-3 text-left font-semibold text-primary-800">{t(`${p}.10000Pcs`)}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.standUpPouchCompostable`)}</td>
                  <td className="px-4 py-3">$0.80–1.20</td>
                  <td className="px-4 py-3">$0.35–0.55</td>
                  <td className="px-4 py-3">$0.20–0.35</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">$0.12–0.22</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.flatBottomBagRecyclable`)}</td>
                  <td className="px-4 py-3">$1.00–1.50</td>
                  <td className="px-4 py-3">$0.45–0.70</td>
                  <td className="px-4 py-3">$0.25–0.40</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">$0.15–0.28</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.3SideSealSachet`)}</td>
                  <td className="px-4 py-3">$0.50–0.80</td>
                  <td className="px-4 py-3">$0.20–0.35</td>
                  <td className="px-4 py-3">$0.12–0.20</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">$0.08–0.15</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.sideGussetBag`)}</td>
                  <td className="px-4 py-3">$0.90–1.30</td>
                  <td className="px-4 py-3">$0.40–0.60</td>
                  <td className="px-4 py-3">$0.22–0.35</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">$0.14–0.25</td>
                </tr>
                <tr className="hover:bg-neutral-50 bg-amber-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.customCorrugatedBox`)}</td>
                  <td className="px-4 py-3">$2.00–4.00</td>
                  <td className="px-4 py-3">$1.00–2.00</td>
                  <td className="px-4 py-3">$0.60–1.20</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">$0.40–0.80</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-xs text-neutral-500 mt-2">
            {t(`${p}.pricesAreApproximateAndVaryByM`)}</p>
        </div>
      )
    },
    {
      id: 'factors-affecting-cost',
      title: '4 Factors That Determine Your Packaging Cost',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <figure className="my-6">
            <img src="/imgs/seo-photos/a_packaging_cost_digital_factory_8412414.jpg" alt="Modern digital printing press producing high-quality flexible packaging pouches" className="w-full rounded-xl shadow-sm border border-neutral-100" />
            <figcaption className="text-center text-sm text-neutral-500 mt-2">{t(`${p}.digitalPrintingAllowsForLowerM`)}</figcaption>
          </figure>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Package className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">{t(`${p}.1Material`)}</h4>
              </div>
              <p className="text-sm">{t(`${p}.compostableMaterialsCost1530Mo`)}</p>
            </div>
            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="h-5 w-5 text-emerald-600" />
                <h4 className="font-semibold text-emerald-800">{t(`${p}.2QuantityMoq`)}</h4>
              </div>
              <p className="text-sm">{t(`${p}.theBiggestCostDriver100pcsCost`)}</p>
            </div>
            <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">{t(`${p}.3PrintingMethod`)}</h4>
              </div>
              <p className="text-sm">{t(`${p}.digitalPrintingHasNoPlateCosts`)}</p>
            </div>
            <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">{t(`${p}.4SizeFeatures`)}</h4>
              </div>
              <p className="text-sm">{t(`${p}.largerPouchesCostMoreAddOnsLik`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'save-money',
      title: '5 Ways to Reduce Your Packaging Costs',
      icon: <TrendingDown className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <figure className="my-6">
            <img src="/imgs/seo-photos/a_packaging_cost_quality_compare_8712411.jpg" alt="Comparison between cheap poorly printed pouch and high-quality premium custom printed pouch" className="w-full rounded-xl shadow-sm border border-neutral-100" />
            <figcaption className="text-center text-sm text-neutral-500 mt-2">{t(`${p}.investingSlightlyMoreInQuality`)}</figcaption>
          </figure>
          <div className="space-y-3">
            {[
              { title: 'Start with digital, scale to plate', desc: 'Test your design at 1,000 units with digital printing, then switch to plate printing at 5,000+ for 30-50% savings.' },
              { title: 'Choose standard sizes', desc: 'Custom sizes add 1-2 weeks lead time and can cost 10-20% more. Standard sizes ship faster and cost less.' },
              { title: 'Simplify your design', desc: 'Full-bleed printing with heavy ink coverage costs more. White-space designs use less ink and look premium.' },
              { title: 'Consolidate SKUs', desc: 'Instead of 5 different sizes, use 2-3 and adjust fill levels. This increases your quantity per SKU and lowers cost.' },
              { title: 'Plan 3-6 months ahead', desc: 'Rush orders cost 15-30% more. Standard lead time is 3-5 weeks — plan ahead to avoid express shipping charges.' }
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">{tip.title}</h4>
                  <p className="text-sm mt-1">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'compare-suppliers',
      title: 'How Achieve Pack Compares to Other Suppliers',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
              <thead className="bg-primary-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-primary-800">{t(`${p}.feature`)}</th>
                  <th className="px-4 py-3 text-left font-semibold text-primary-800">{t(`${p}.achievePack`)}</th>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-600">{t(`${p}.genericSupplier`)}</th>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-600">{t(`${p}.alibaba`)}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.minimumOrder`)}</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">{t(`${p}.100Pcs1`)}</td>
                  <td className="px-4 py-3">{t(`${p}.5000Pcs`)}</td>
                  <td className="px-4 py-3">{t(`${p}.10000Pcs2`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.ecoMaterials`)}</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">{t(`${p}.compostableRecyclableBioPe`)}</td>
                  <td className="px-4 py-3">{t(`${p}.limitedOptions`)}</td>
                  <td className="px-4 py-3">{t(`${p}.conventionalOnly`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.freeDesignHelp`)}</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">{t(`${p}.yes`)}</td>
                  <td className="px-4 py-3">{t(`${p}.extraFee`)}</td>
                  <td className="px-4 py-3">{t(`${p}.no`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.leadTime`)}</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">{t(`${p}.25Weeks`)}</td>
                  <td className="px-4 py-3">{t(`${p}.46Weeks`)}</td>
                  <td className="px-4 py-3">{t(`${p}.610Weeks`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.certifications`)}</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">{t(`${p}.en13432AstmD6400Bpi`)}</td>
                  <td className="px-4 py-3">{t(`${p}.varies`)}</td>
                  <td className="px-4 py-3">{t(`${p}.noneVerified`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'achievepack-eco-materials',
      title: 'AchievePack Sustainable Material Specifications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: <EcoMaterialSourcingGuide />
    }
  ]

  const faqs = [
    {
      question: 'How much does custom packaging cost for a small brand?',
      answer: 'For small brands ordering 100-500 pieces with digital printing, expect to pay $0.50-$1.50 per pouch depending on size and material. Compostable stand-up pouches at 1,000 pieces typically cost $0.35-$0.55 each. Prices drop significantly at 5,000+ quantities.'
    },
    {
      question: 'What is the cheapest eco-friendly packaging option?',
      answer: 'Recyclable mono-PE pouches are the most affordable eco option, priced similarly to conventional plastic. 3-side seal sachets in recyclable material start at $0.08-$0.15 per piece at volume. Compostable packaging costs about 15-30% more but offers stronger marketing appeal.'
    },
    {
      question: 'Is there a setup fee for custom printing?',
      answer: 'Digital printing has zero setup fees — you pay only per-unit costs. Plate printing (rotogravure) has one-time plate fees of $200-$600 depending on colors, but the per-unit cost is 30-50% lower at 5,000+ quantities, making it more economical for larger orders.'
    },
    {
      question: 'How much does shipping add to the cost?',
      answer: 'Shipping from our factory to the USA, UK, or EU typically costs $0.01-$0.05 per pouch via sea freight (3-4 weeks) or $0.05-$0.15 per pouch via air (5-7 days). We include shipping quotes in all our proposals so there are no surprises.'
    },
    {
      question: 'Can I order samples before placing a bulk order?',
      answer: 'Yes! We offer free generic material samples and paid custom printed samples (usually $50-$100 for 10-20 pieces with your design). This lets you test fill, check print quality, and verify shelf presence before committing to a larger order.'
    }
  ]

  const relatedLinks = [
    { title: 'Shop Low MOQ Packaging', url: '/products/low-moq-packaging', description: 'Order from 100 pieces' },
    { title: 'Request Free Samples', url: '/free-service', description: 'Try before you buy' },
    { title: 'Pouch Sizing Guide', url: '/knowledge/pouch-sizing', description: 'Find the right size' },
    { title: 'Get a Custom Quote', url: '/contact', description: 'Tailored pricing for your brand' },
  ]

  return (
    <SEOPageLayout heroBgColor="#451a03"
      title="How Much Does Custom Packaging Cost in 2025? | Price Guide"
      description="Complete custom packaging cost breakdown for 2025. Compare prices for compostable pouches, recyclable bags & custom boxes from 100 to 10,000+ pieces. Real prices, no hidden fees."
      keywords={[
        'custom packaging cost',
        'packaging price per unit',
        'eco packaging cost',
        'custom pouch pricing',
        'compostable packaging cost',
        'packaging MOQ pricing',
        'sustainable packaging cost comparison',
        'bulk pouch pricing'
      ]}
      heroTitle="How Much Does Custom Packaging Cost?"
      heroSubtitle="2025 Price Guide — Real Prices for Every Budget"
      heroImage={heroImage}
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="Eco Packaging"
      sections={sections}
      introSummary="Wondering how much custom eco-friendly packaging really costs? This guide gives you transparent, real-world prices for stand-up pouches, flat bottom bags, sachets, and boxes — from startup orders of 100 pieces to bulk runs of 10,000+. No sales pitch, just honest numbers."
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle="Get Your Custom Quote"
      ctaDescription="Tell us about your product and quantity — we'll send you an exact price within 24 hours."
      ctaButtonText="Request Free Quote"
      ctaButtonUrl="/contact"
      canonicalUrl="https://achievepack.com/blog/packaging-cost-guide"
      schemaType="Article"
      heroStyle="split" // Dark brown matching packaging cardboard
    />
  )
}

export default PackagingCostGuidePage
