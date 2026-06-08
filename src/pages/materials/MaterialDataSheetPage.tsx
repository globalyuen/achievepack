import React from 'react'
import { FileText, CheckCircle, Info, Download, Layers, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const MaterialDataSheetPage: React.FC = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: 'overview',
      title: t('seoPages.pages.materialDataSheet.achievePack.sections.overview.title'),
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            {t('seoPages.pages.materialDataSheet.achievePack.sections.overview.p1')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 bg-gradient-to-r from-primary-50 to-primary-100/30 p-6 rounded-2xl border border-primary-100 shadow-sm">
            <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-primary-700 tracking-wider">
                {t('seoPages.pages.materialDataSheet.achievePack.sections.overview.cards.productName.label')}
              </span>
              <p className="font-bold text-neutral-800 mt-1">
                {t('seoPages.pages.materialDataSheet.achievePack.sections.overview.cards.productName.title')}
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                {t('seoPages.pages.materialDataSheet.achievePack.sections.overview.cards.productName.desc')}
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-primary-700 tracking-wider">
                {t('seoPages.pages.materialDataSheet.achievePack.sections.overview.cards.materialStructure.label')}
              </span>
              <p className="font-bold text-neutral-800 mt-1">
                {t('seoPages.pages.materialDataSheet.achievePack.sections.overview.cards.materialStructure.title')}
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                {t('seoPages.pages.materialDataSheet.achievePack.sections.overview.cards.materialStructure.desc')}
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-primary-700 tracking-wider">
                {t('seoPages.pages.materialDataSheet.achievePack.sections.overview.cards.calculationBasis.label')}
              </span>
              <p className="font-bold text-neutral-800 mt-1">
                {t('seoPages.pages.materialDataSheet.achievePack.sections.overview.cards.calculationBasis.title')}
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                {t('seoPages.pages.materialDataSheet.achievePack.sections.overview.cards.calculationBasis.desc')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t('seoPages.pages.materialDataSheet.achievePack.sections.features.title'),
      icon: <ShieldCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Key Features */}
            <div>
              <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary-600" />
                {t('seoPages.pages.materialDataSheet.achievePack.sections.features.highlightsTitle')}
              </h4>
              <ul className="space-y-3">
                {((t('seoPages.pages.materialDataSheet.achievePack.sections.features.list', { returnObjects: true }) || []) as string[]).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications & Certs */}
            <div>
              <h4 className="font-bold text-neutral-900 mb-4">
                {t('seoPages.pages.materialDataSheet.achievePack.sections.features.appsTitle')}
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {((t('seoPages.pages.materialDataSheet.achievePack.sections.features.tags', { returnObjects: true }) || []) as string[]).map(tag => (
                  <span key={tag} className="text-xs font-medium text-primary-800 bg-primary-50 border border-primary-100 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <h4 className="font-bold text-neutral-900 mb-3">
                {t('seoPages.pages.materialDataSheet.achievePack.sections.features.certsTitle')}
              </h4>
              <div className="flex gap-4 items-center bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                <img 
                  src="/imgs/bpi.svg" 
                  alt={t('seoPages.pages.materialDataSheet.achievePack.sections.features.bpiAlt')} 
                  className="h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                />
                <img 
                  src="/bcorp.svg" 
                  alt={t('seoPages.pages.materialDataSheet.achievePack.sections.features.bcorpAlt')} 
                  className="h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'structure',
      title: t('seoPages.pages.materialDataSheet.achievePack.sections.structure.title'),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="leading-relaxed">
            {t('seoPages.pages.materialDataSheet.achievePack.sections.structure.p1')}
          </p>
          <div className="bg-white border border-neutral-200 p-8 rounded-2xl flex justify-center items-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <img 
              src="https://achievepack.com/imgs/store/barrier/2-paper.webp" 
              alt={t('seoPages.pages.materialDataSheet.achievePack.sections.structure.imgAlt')} 
              className="max-w-full h-auto max-h-64 object-contain"
            />
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.title'),
      icon: <FileText className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="leading-relaxed">
            {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.p1')}
          </p>
          
          <div className="border border-neutral-200 rounded-2xl overflow-hidden shadow-sm bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white font-semibold">
                    <th className="p-4 border-b border-primary-900">
                      {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.tableHeaders.colLayer')}
                    </th>
                    <th className="p-4 border-b border-primary-900">
                      {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.tableHeaders.colMaterial')}
                    </th>
                    <th className="p-4 border-b border-primary-900 text-center">
                      {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.tableHeaders.colGsm')}
                    </th>
                    <th className="p-4 border-b border-primary-900 text-center">
                      {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.tableHeaders.colThicknessMm')}
                    </th>
                    <th className="p-4 border-b border-primary-900 text-center">
                      {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.tableHeaders.colThicknessUm')}
                    </th>
                    <th className="p-4 border-b border-primary-900 text-center">
                      {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.tableHeaders.colWeightPct')}
                    </th>
                    <th className="p-4 border-b border-primary-900 text-center">
                      {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.tableHeaders.colThicknessPct')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-4 font-semibold text-neutral-900 bg-neutral-50/30">
                      {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.rows.outer.layer')}
                    </td>
                    <td className="p-4 text-neutral-600">
                      {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.rows.outer.material')}
                    </td>
                    <td className="p-4 text-center font-medium">60</td>
                    <td className="p-4 text-center">0.08</td>
                    <td className="p-4 text-center">80</td>
                    <td className="p-4 text-center text-neutral-500">46.2%</td>
                    <td className="p-4 text-center text-neutral-500">61.5%</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-4 font-semibold text-neutral-900 bg-neutral-50/30">
                      {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.rows.inner.layer')}
                    </td>
                    <td className="p-4 text-neutral-600">
                      {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.rows.inner.material')}
                    </td>
                    <td className="p-4 text-center font-medium">70</td>
                    <td className="p-4 text-center">0.05</td>
                    <td className="p-4 text-center">50</td>
                    <td className="p-4 text-center text-neutral-500">53.8%</td>
                    <td className="p-4 text-center text-neutral-500">38.5%</td>
                  </tr>
                  <tr className="bg-primary-50/50 font-bold text-primary-900">
                    <td className="p-4">
                      {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.rows.total.layer')}
                    </td>
                    <td className="p-4 uppercase text-primary-800">
                      {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.rows.total.material')}
                    </td>
                    <td className="p-4 text-center">130</td>
                    <td className="p-4 text-center">0.13</td>
                    <td className="p-4 text-center">130</td>
                    <td className="p-4 text-center">100%</td>
                    <td className="p-4 text-center">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Notes */}
          <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-2xl">
            <h5 className="font-bold text-neutral-900 mb-3 text-xs uppercase tracking-wider">
              {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.notesTitle')}
            </h5>
            <ul className="space-y-2 text-xs text-neutral-500 list-disc list-inside">
              {((t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.notes', { returnObjects: true }) || []) as string[]).map((note, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: note }} />
              ))}
            </ul>
          </div>
          
          {/* Action button */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 border-t border-neutral-100">
            <div className="text-xs text-neutral-400">
              {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.docId')}
            </div>
            <a 
              href="/pdfs/material_data_sheet.pdf?v=2" 
              className="inline-flex items-center gap-2 bg-primary-700 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-primary-800 transition shadow-sm hover:shadow"
            >
              <Download className="w-4 h-4" />
              {t('seoPages.pages.materialDataSheet.achievePack.sections.specifications.downloadBtn')}
            </a>
          </div>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout
      title={t('seoPages.pages.materialDataSheet.achievePack.seo.title')}
      description={t('seoPages.pages.materialDataSheet.achievePack.seo.description')}
      keywords={t('seoPages.pages.materialDataSheet.achievePack.seo.keywords', { returnObjects: true }) as string[]}
      heroTitle={t('seoPages.pages.materialDataSheet.achievePack.seo.heroTitle')}
      heroSubtitle={t('seoPages.pages.materialDataSheet.achievePack.seo.heroSubtitle')}
      introSummary={t('seoPages.pages.materialDataSheet.achievePack.seo.introSummary')}
      sections={sections}
      ctaTitle={t('seoPages.pages.materialDataSheet.achievePack.cta.title')}
      ctaDescription={t('seoPages.pages.materialDataSheet.achievePack.cta.description')}
      ctaButtonText={t('seoPages.pages.materialDataSheet.achievePack.cta.buttonText')}
      ctaButtonUrl="https://calendly.com/30-min-free-packaging-consultancy"
    />
  )
}

export default MaterialDataSheetPage;
