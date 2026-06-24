import React from 'react'
import { Leaf, Recycle, Scale, CheckCircle, XCircle, ArrowRight, Beaker, Globe, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOPageLayout from '../../components/SEOPageLayout'
import EcoMaterialSourcingGuide from '../../components/pouch/EcoMaterialSourcingGuide'
import { useTranslation, Trans } from "react-i18next";

const CompostableVsRecyclablePage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.compostableVsRecyclable';
  const heroImage = '/imgs/seo-photos/a_compostable_vs_recyclable_packaging_4528107.jpg'

  const sections = [
    {
      id: 'comparison-table',
      title: 'Compostable vs Recyclable: Side-by-Side Comparison',
      icon: <Scale className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p><strong>{t(`${p}.bothOptionsAreBetterThanConven`)}</strong>{t(`${p}.butTheyWorkDifferentlyHereSHow`)}</p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
              <thead className="bg-primary-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-primary-800">{t(`${p}.feature`)}</th>
                  <th className="px-4 py-3 text-left font-semibold text-emerald-700">{t(`${p}.compostable`)}</th>
                  <th className="px-4 py-3 text-left font-semibold text-blue-700">{t(`${p}.recyclableMonoPe`)}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.endOfLife`)}</td>
                  <td className="px-4 py-3">{t(`${p}.breaksDownToSoilIn180Days`)}</td>
                  <td className="px-4 py-3">{t(`${p}.meltedAndRemadeIntoNewProducts`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.infrastructureNeeded`)}</td>
                  <td className="px-4 py-3">{t(`${p}.industrialCompostingFacility`)}</td>
                  <td className="px-4 py-3">{t(`${p}.standardRecyclingBinStoreDropO`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.costVsTraditional`)}</td>
                  <td className="px-4 py-3 text-amber-600">{t(`${p}.1530MoreExpensive`)}</td>
                  <td className="px-4 py-3 text-emerald-600">{t(`${p}.similarOrEqualCost`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.barrierProperties`)}</td>
                  <td className="px-4 py-3">{t(`${p}.goodMediumBarrier`)}</td>
                  <td className="px-4 py-3">{t(`${p}.excellentHighBarrierPossible`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.certifications`)}</td>
                  <td className="px-4 py-3">{t(`${p}.en13432AstmD6400Bpi`)}</td>
                  <td className="px-4 py-3">{t(`${p}.how2recycleStoreDropOff`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.marketingAppeal`)}</td>
                  <td className="px-4 py-3 text-emerald-600 font-medium">{t(`${p}.veryHighConsumersLoveIt`)}</td>
                  <td className="px-4 py-3">{t(`${p}.growingRecyclableIsWellUnderst`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">{t(`${p}.bestFor`)}</td>
                  <td className="px-4 py-3">{t(`${p}.premiumBrandsFoodServiceEcoCon`)}</td>
                  <td className="px-4 py-3">{t(`${p}.budgetConsciousBrandsHighVolum`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'when-compostable',
      title: 'When to Choose Compostable Packaging',
      icon: <Leaf className="h-5 w-5 text-emerald-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <figure className="my-6">
            <img src="/imgs/seo-photos/a_compostable_decomposition_soil_8123114.jpg" alt="Compostable packaging pouch partially breaking down into rich soil with green sprouts" className="w-full rounded-xl shadow-sm border border-neutral-100" />
            <figcaption className="text-center text-sm text-neutral-500 mt-2">{t(`${p}.certifiedCompostableMaterialsB`)}</figcaption>
          </figure>
          <p>{t(`${p}.compostablePackagingIsTheRight`)}</p>
          <div className="grid sm:grid-cols-2 gap-3 mt-3">
            {[
              'Your brand story centers on sustainability',
              'Your customers are eco-conscious and pay a premium',
              'You sell at farmers markets, health food stores, or DTC',
              'Your product has a short shelf life (< 12 months)',
              'You want a "zero waste" claim on packaging',
              'Your region has industrial composting infrastructure'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 bg-emerald-50 p-3 rounded-lg">
                <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-emerald-100 border border-emerald-200 p-4 rounded-xl mt-4">
            <p className="text-sm font-medium text-emerald-800">{t(`${p}.popularCompostableProductsCoff`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'when-recyclable',
      title: 'When to Choose Recyclable Packaging',
      icon: <Recycle className="h-5 w-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <figure className="my-6">
            <img src="/imgs/seo-photos/a_recyclable_coffee_barrier_fresh_4123114.jpg" alt="Fresh roasted coffee beans spilling from a sleek blue-tinted recyclable mono-PE pouch" className="w-full rounded-xl shadow-sm border border-neutral-100" />
            <figcaption className="text-center text-sm text-neutral-500 mt-2">{t(`${p}.monoPeRecyclablePouchesProvide`)}</figcaption>
          </figure>
          <p>{t(`${p}.recyclableMonoPePackagingIsThe`)}</p>
          <div className="grid sm:grid-cols-2 gap-3 mt-3">
            {[
              'You need maximum shelf life and barrier protection',
              'Cost parity with conventional packaging is important',
              'Your customers have access to recycling facilities',
              'You are selling to major retailers (they often prefer recyclable)',
              'You need high-barrier for moisture/oxygen-sensitive products',
              'Your region has limited composting but good recycling'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 bg-blue-50 p-3 rounded-lg">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-blue-100 border border-blue-200 p-4 rounded-xl mt-4">
            <p className="text-sm font-medium text-blue-800">{t(`${p}.popularRecyclableProductsFroze`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'decision-flowchart',
      title: 'Quick Decision Guide: Which Should You Choose?',
      icon: <ArrowRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 rounded-xl border border-neutral-200">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                <p><strong>{t(`${p}.isSustainabilityThe1SellingPoi`)}</strong><br/>
                  <span className="text-sm text-emerald-600">{t(`${p}.yesCompostable`)}</span> · <span className="text-sm text-blue-600">{t(`${p}.noRecyclable`)}</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                <p><strong>{t(`${p}.doesYourProductNeedMoreThan12M`)}</strong><br/>
                  <span className="text-sm text-blue-600">{t(`${p}.yesRecyclableBetterBarrier`)}</span> · <span className="text-sm text-emerald-600">{t(`${p}.noEitherWorks`)}</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                <p><strong>{t(`${p}.isCostTheMostImportantFactor`)}</strong><br/>
                  <span className="text-sm text-blue-600">{t(`${p}.yesRecyclableSameCostAsPlastic`)}</span> · <span className="text-sm text-emerald-600">{t(`${p}.noCompostablePremiumPositionin`)}</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                <p><strong>{t(`${p}.notSureStartWithSamplesOfBoth`)}</strong><br/>
                  <span className="text-sm">{t(`${p}.weCanSendYouBothMaterialsToTes`)}<Link to="/free-service" className="text-primary-600 font-medium hover:underline">{t(`${p}.requestFreeSamples`)}</Link></span>
                </p>
              </div>
            </div>
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
      question: 'Is compostable packaging really better for the environment?',
      answer: 'Compostable packaging is better when it reaches an industrial composting facility, where it breaks down in 90-180 days into CO₂, water, and biomass. However, if it ends up in landfill it won\'t decompose. The environmental benefit depends on local composting infrastructure. Both compostable and recyclable are significantly better than single-use conventional plastic.'
    },
    {
      question: 'Can recyclable packaging be as eco-friendly as compostable?',
      answer: 'Yes, in many ways. Recyclable mono-PE packaging can be recycled indefinitely into new products, creating a circular economy. The carbon footprint of production is often lower than compostable alternatives. The key advantage of recyclable is that the infrastructure is more widely available — most communities have recycling but fewer have industrial composting.'
    },
    {
      question: 'What is mono-material packaging?',
      answer: 'Mono-material (or mono-PE) packaging is made from a single type of plastic (polyethylene), making it easy to recycle through existing infrastructure. Traditional flexible packaging uses multiple layers of different plastics, which makes recycling nearly impossible. Achieve Pack\'s mono-PE pouches offer the same performance with the added benefit of recyclability.'
    },
    {
      question: 'Can I get compostable packaging for coffee?',
      answer: 'Absolutely! Compostable coffee packaging is one of our most popular products. We offer compostable stand-up pouches with degassing valves, zipper closures, and tin-tie options. The material provides adequate barrier for roasted coffee (6-12 month shelf life). For green or unroasted coffee requiring longer shelf life, we recommend recyclable mono-PE with higher barrier.'
    },
    {
      question: 'Which option is cheaper: compostable or recyclable?',
      answer: 'Recyclable mono-PE packaging is typically priced at parity with conventional plastic — no premium. Compostable packaging costs 15-30% more due to the specialty materials and certified supply chain. However, many brands find the compostable premium pays for itself through higher retail prices and stronger customer loyalty.'
    }
  ]

  const relatedLinks = [
    { title: 'Compostable Materials', url: '/materials/compostable', description: 'Explore our compostable range' },
    { title: 'Recyclable Mono PE', url: '/materials/recyclable-mono-pe', description: 'Explore recyclable options' },
    { title: 'Bio-PE Packaging', url: '/materials/bio-pe', description: 'Plant-based alternative' },
    { title: 'Get Free Samples', url: '/free-service', description: 'Try both materials' },
  ]

  return (
    <SEOPageLayout heroBgColor="#14532d"
      title="Compostable vs Recyclable Packaging: Which Is Right for Your Brand? (2025)"
      description="In-depth comparison of compostable vs recyclable packaging for food brands. Compare costs, shelf life, certifications, and environmental impact. Free decision guide included."
      keywords={[
        'compostable vs recyclable packaging',
        'eco packaging comparison',
        'compostable pouch vs recyclable',
        'sustainable packaging options',
        'mono PE vs compostable',
        'best eco-friendly packaging',
        'compostable coffee bags',
        'recyclable stand up pouches'
      ]}
      heroTitle="Compostable vs Recyclable Packaging"
      heroSubtitle="An Honest Comparison to Help You Choose the Right Material"
      heroImage={heroImage}
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="Eco Packaging"
      sections={sections}
      introSummary="Choosing between compostable and recyclable packaging? Both are great alternatives to conventional plastic, but they differ in cost, performance, and end-of-life impact. This guide compares them side-by-side with real data so you can make the right choice for your brand."
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle="Still Not Sure? Get Free Samples of Both"
      ctaDescription="We'll send you compostable and recyclable pouch samples so you can test them with your product."
      ctaButtonText="Request Free Samples"
      ctaButtonUrl="/free-service"
      canonicalUrl="https://achievepack.com/blog/compostable-vs-recyclable"
      schemaType="Article"
    />
  )
}

export default CompostableVsRecyclablePage
