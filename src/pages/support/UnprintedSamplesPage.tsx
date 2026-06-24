import React from 'react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Package, CheckCircle, ArrowRight, Truck, Info, Layers, Eye } from 'lucide-react'
import { useTranslation, Trans } from "react-i18next";

const UnprintedSamplesPage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.unprintedSamples';
  return (
    <SEOPageLayout 
      heroBgColor="#0f172a"
      title="Unprinted & Generic Packaging Samples"
      description="Verify material quality, thickness, and barrier properties with our unprinted plain samples or generic production-run examples."
      keywords={['unprinted samples', 'packaging materials', 'plain pouch samples', 'generic samples', 'material verification']}
      heroTitle="Material Mastery: Unprinted & Generic Samples"
      heroSubtitle="Get a physical feel for our certified sustainable materials and verify production quality with real-world generic samples."
      heroImage="/imgs/artifacts/unprinted_samples_hero.png"
      heroImageAlt="Achieve Pack unprinted and generic packaging samples"
      introSummary="Before committing to custom printing, it's vital to ensure the material and structure are perfect for your product. Our Unprinted & Generic Samples allow you to conduct barrier testing, sizing verification, and quality audits at a fraction of the cost of a custom prototype."
      sections={[
        {
          id: 'unprinted',
          title: 'Unprinted Plain Samples',
          icon: <Package className="h-6 w-6 text-primary-600" />,
          content: (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{t(`${p}.rawMaterialVerification`)}</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {t(`${p}.focusPurelyOnTheMaterialTheseS`)}</p>
                <div className="space-y-4">
                  {[
                    'Verify material thickness (Microns)',
                    'Conduct heat-sealing tests',
                    'Check transparency and window clarity',
                    'Verify moisture & oxygen barrier performance'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-neutral-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-neutral-100 rounded-2xl p-8 border border-neutral-200">
                <img 
                  src="/imgs/artifacts/vacuum_pouch_frozen.jpg" 
                  alt="Unprinted plain packaging" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          )
        },
        {
          id: 'generic',
          title: 'Generic Production Samples',
          icon: <Eye className="h-6 w-6 text-primary-600" />,
          content: (
            <div className="grid md:grid-cols-2 gap-12 items-center flex-row-reverse">
              <div className="bg-neutral-100 rounded-2xl p-8 border border-neutral-200 md:order-1">
                <img 
                  src="/imgs/artifacts/compostable_snack_pouch_window.jpg" 
                  alt="Generic production samples" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="md:order-2">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{t(`${p}.productionQualityProof`)}</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {t(`${p}.seeWhatWeVeDoneForOtherLeading`)}</p>
                <div className="space-y-4">
                  {[
                    'Evaluate Matte vs Gloss finishes',
                    'Inspect Degassing Valve integration',
                    'Verify Zipper strength and reclosure quality',
                    'Review multi-color printing registration'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary-500" />
                      <span className="text-neutral-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'kit',
          title: 'Order The Evaluation Kit',
          icon: <Layers className="h-6 w-6 text-primary-600" />,
          content: (
            <div className="bg-primary-50 border border-primary-200 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-3xl font-black text-primary-900 mb-4">{t(`${p}.theMaterialExcellenceKit`)}</h3>
              <p className="text-lg text-primary-800 mb-8 max-w-2xl mx-auto">
                {t(`${p}.includes10AssortedUnprintedAnd`)}</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-neutral-900">{t(`${p}.usd50`)}</div>
                  <div className="text-xs font-bold uppercase text-neutral-500">{t(`${p}.flatFee`)}</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-primary-200"></div>
                <div className="flex items-center gap-2 text-neutral-600 font-semibold">
                  <Truck className="h-5 w-5" />
                  <span>{t(`${p}.fedexDhlAirShippingIncluded`)}</span>
                </div>
              </div>
              <a 
                href="https://calendly.com/30-min-free-packaging-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition shadow-lg"
              >
                {t(`${p}.requestYourKit`)}<ArrowRight className="h-5 w-5" />
              </a>
            </div>
          )
        }
      ]}
      faqs={[
        {
          question: "Can I request specific material thicknesses in the unprinted kit?",
          answer: "Yes, you can specify your product type (e.g., 'Coffee' or 'Protein Powder') and we will include the most appropriate material thicknesses for your industry."
        },
        {
          question: "Are the generic samples for sale?",
          answer: "The generic samples are for quality verification purposes only and are not for resale. They feature branding from our existing clients to demonstrate real-world production capability."
        },
        {
          question: "How long does shipping take?",
          answer: "We ship all sample kits via Express Air (FedEx/DHL). Delivery typically takes 3-5 business days to the USA, Europe, and Australia."
        }
      ]}
      ctaTitle="Verify Quality Before You Print"
      ctaDescription="Get a physical evaluation kit today and eliminate the guesswork from your packaging project."
      ctaButtonText="Order Sample Kit"
      ctaButtonUrl="https://calendly.com/30-min-free-packaging-consultancy"
    />
  )
}

export default UnprintedSamplesPage
