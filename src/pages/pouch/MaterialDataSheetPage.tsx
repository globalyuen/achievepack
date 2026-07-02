import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, CheckCircle, ArrowLeft, Info, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PouchLayout from '../../components/pouch/PouchLayout';
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI';

const localTranslations = {
  en: {
    problemsTitle: '5 Common Material Packaging Problems (And Solutions)',
    problems: [
      { problem: 'Moisture & Oxygen Penetration', solution: 'High-barrier inner film locks out moisture and oxygen, extending shelf life.' },
      { problem: 'Weak Heat Seals', solution: 'Optimized sealing layer ensures strong, hermetic seals for product safety.' },
      { problem: 'Tearing During Transit', solution: 'Laminated multi-layer structure provides enhanced tear and puncture resistance.' },
      { problem: 'Misleading Eco-Claims', solution: 'BPI and B-Corp certified materials guarantee authentic compostability.' },
      { problem: 'Poor Print Quality', solution: 'Specially treated outer kraft layer supports crisp, high-resolution printing.' }
    ]
  },
  es: {
    problemsTitle: '5 Problemas Comunes de Empaque (Y Soluciones)',
    problems: [
      { problem: 'Penetración de Humedad y Oxígeno', solution: 'La película interior de alta barrera bloquea la humedad y el oxígeno, extendiendo la vida útil.' },
      { problem: 'Sellos Térmicos Débiles', solution: 'La capa de sellado optimizada garantiza sellos herméticos y fuertes.' },
      { problem: 'Desgarro Durante el Transporte', solution: 'La estructura multicapa proporciona una mayor resistencia al desgarro y perforación.' },
      { problem: 'Afirmaciones Ecológicas Engañosas', solution: 'Los materiales certificados por BPI garantizan una compostabilidad auténtica.' },
      { problem: 'Mala Calidad de Impresión', solution: 'La capa exterior tratada especialmente admite una impresión nítida y de alta resolución.' }
    ]
  },
  fr: {
    problemsTitle: '5 Problèmes Courants d\'Emballage (Et Solutions)',
    problems: [
      { problem: 'Pénétration d\'Humidité et d\'Oxygène', solution: 'Le film intérieur haute barrière bloque l\'humidité et l\'oxygène, prolongeant la durée de conservation.' },
      { problem: 'Thermoscellages Faibles', solution: 'La couche de scellage optimisée garantit des joints hermétiques et solides.' },
      { problem: 'Déchirure Pendant le Transport', solution: 'La structure multicouche offre une résistance accrue à la déchirure et à la perforation.' },
      { problem: 'Fausses Allégations Écologiques', solution: 'Les matériaux certifiés BPI garantissent une compostabilité authentique.' },
      { problem: 'Mauvaise Qualité d\'Impression', solution: 'La couche extérieure spécialement traitée permet une impression nette et haute résolution.' }
    ]
  },
  'zh-TW': {
    problemsTitle: '5 個常見包裝材料問題 (及解決方案)',
    problems: [
      { problem: '水分與氧氣滲透', solution: '高阻隔內膜鎖住水分和氧氣，延長保質期。' },
      { problem: '熱封性弱', solution: '優化的密封層確保了堅固、氣密的密封，保障產品安全。' },
      { problem: '運輸過程中撕裂', solution: '層壓多層結構提供了增強的抗撕裂和抗穿刺性。' },
      { problem: '誤導性的環保聲明', solution: 'BPI 認證材料保證了真實的可堆肥性。' },
      { problem: '印刷品質差', solution: '經過特殊處理的外層牛皮紙支援清晰的高解析度印刷。' }
    ]
  }
};

export default function MaterialDataSheetPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const tl = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en;

  // sectionsForPouch and sectionsForAchieve handled internally
  const sectionsForPouch = tl.problems;
  const sectionsForAchieve = tl.problems;

  const featuresList = t('materialDataSheetPage.features.items', { returnObjects: true }) as string[] || [];
  const usageKeys = ['dryFoods', 'coffee', 'confectionery', 'nuts', 'fruits', 'bakery'] as const;

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('materialDataSheetPage.title')}</title>
        <meta name="description" content={t('materialDataSheetPage.metaDesc')} />
      </Helmet>

      <div className="py-16 px-4 bg-[#F0F0F0]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <NeoButton to="/tech-specs" variant="secondary" className="!py-2 !text-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('materialDataSheetPage.backLink')}
            </NeoButton>
          </div>

          <NeoCard className="!p-0 overflow-hidden mb-16">
            {/* Header */}
            <div className="bg-black text-[#D4FF00] p-8 border-b-4 border-black">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <div className="bg-[#D4FF00] text-black px-3 py-1 font-['JetBrains_Mono'] font-bold text-xs mb-4 inline-block transform -rotate-1">
                    {t('materialDataSheetPage.specBadge')}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black uppercase leading-none mb-2">{t('materialDataSheetPage.heading')}</h1>
                  <p className="font-['JetBrains_Mono'] text-[#D4FF00]/80">{t('materialDataSheetPage.subheading')}</p>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                  <p className="text-xs font-bold uppercase opacity-60 mb-4 tracking-widest">{t('materialDataSheetPage.lastUpdate')}</p>
                  <NeoButton 
                    href="/pdfs/material_data_sheet.pdf?v=2" 
                    className="!bg-[#D4FF00] !text-black !border-black"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t('materialDataSheetPage.downloadPdf')}
                  </NeoButton>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white">
              {/* Product Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2 flex items-center gap-2">
                  <Info className="w-6 h-6" /> {t('materialDataSheetPage.overview.title')}
                </h2>
                <div className="space-y-4 font-['JetBrains_Mono']">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 border-b-2 border-gray-100 pb-2">
                    <span className="font-black min-w-[200px]">{t('materialDataSheetPage.overview.prodName')}</span>
                    <span>{t('materialDataSheetPage.overview.prodNameVal')}</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 border-b-2 border-gray-100 pb-2">
                    <span className="font-black min-w-[200px]">{t('materialDataSheetPage.overview.structure')}</span>
                    <span>{t('materialDataSheetPage.overview.structureVal')}</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-black min-w-[200px]">{t('materialDataSheetPage.overview.calcBasis')}</span>
                    <span>{t('materialDataSheetPage.overview.calcBasisVal')}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                {/* Properties */}
                <div>
                  <h3 className="text-xl font-black uppercase mb-4 border-b-2 border-black pb-2">
                    {t('materialDataSheetPage.features.title')}
                  </h3>
                  <ul className="space-y-3 font-['JetBrains_Mono'] text-sm">
                    {featuresList.map(feature => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div>
                  <h3 className="text-xl font-black uppercase mb-4 border-b-2 border-black pb-2">
                    {t('materialDataSheetPage.usage.title')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {usageKeys.map(key => (
                      <NeoBadge key={key} color="bg-gray-100">{t(`materialDataSheetPage.usage.items.${key}`)}</NeoBadge>
                    ))}
                  </div>

                  <h3 className="text-xl font-black uppercase mt-8 mb-4 border-b-2 border-black pb-2">
                    {t('materialDataSheetPage.certs.title')}
                  </h3>
                  <div className="flex gap-4 items-center grayscale hover:grayscale-0 transition-all">
                    <img src="/imgs/bpi.svg" alt="BPI Certified" className="h-10 object-contain" />
                    <img src="/bcorp.svg" alt="B Corp" className="h-10 object-contain" />
                  </div>
                </div>
              </div>

              {/* 5 Common Problems */}
              <div className="mb-12">
                <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2 flex items-center gap-2">
                  <Info className="w-6 h-6" /> {tl.problemsTitle}
                </h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2 space-y-6">
                    {sectionsForPouch.map((prob, idx) => (
                      <div key={idx} className="bg-gray-50 border-2 border-black p-4">
                        <h4 className="font-black uppercase mb-2 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-red-600" /> {prob.problem}
                        </h4>
                        <p className="font-['JetBrains_Mono'] text-sm text-gray-700">
                          <span className="font-bold text-green-700 mr-2">Solution:</span>{prob.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="bg-[#f3f4f6] border-4 border-black p-4 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.1)] h-full flex items-center justify-center">
                      <img 
                        src="/imgs/knowledge/material-data-sheet-pain-points.jpg" 
                        alt="Material Data Sheet Pain Points" 
                        className="max-w-full h-auto object-cover border-2 border-black"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Structure */}
              <div className="mb-12">
                <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">
                  {t('materialDataSheetPage.structure.title')}
                </h2>
                <div className="bg-[#f3f4f6] border-4 border-black p-8 flex justify-center items-center shadow-[inset_4px_4px_10px_rgba(0,0,0,0.1)]">
                  <img 
                    src="https://achievepack.com/imgs/store/barrier/2-paper.webp" 
                    alt="Kraft Paper + Compostable Film Structure" 
                    className="max-w-full h-auto max-h-64 object-contain"
                  />
                </div>
              </div>

              {/* Construction Table */}
              <div className="mb-12">
                <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">
                  {t('materialDataSheetPage.techData.title')}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-4 border-black border-collapse font-['JetBrains_Mono'] text-xs">
                    <thead>
                      <tr className="bg-black text-white">
                        <th className="p-3 border border-gray-700">{t('materialDataSheetPage.techData.table.thLayer')}</th>
                        <th className="p-3 border border-gray-700">{t('materialDataSheetPage.techData.table.thMaterial')}</th>
                        <th className="p-3 border border-gray-700 text-center">{t('materialDataSheetPage.techData.table.thGsm')}</th>
                        <th className="p-3 border border-gray-700 text-center">{t('materialDataSheetPage.techData.table.thMm')}</th>
                        <th className="p-3 border border-gray-700 text-center">{t('materialDataSheetPage.techData.table.thUm')}</th>
                        <th className="p-3 border border-gray-700 text-center">{t('materialDataSheetPage.techData.table.thWeightPct')}</th>
                        <th className="p-3 border border-gray-700 text-center">{t('materialDataSheetPage.techData.table.thThickPct')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b-2 border-black">
                        <td className="p-3 border border-gray-200 font-black uppercase bg-gray-50">{t('materialDataSheetPage.techData.table.outer')}</td>
                        <td className="p-3 border border-gray-200">{t('materialDataSheetPage.techData.table.outerMat')}</td>
                        <td className="p-3 border border-gray-200 text-center">60</td>
                        <td className="p-3 border border-gray-200 text-center">0.08</td>
                        <td className="p-3 border border-gray-200 text-center">80</td>
                        <td className="p-3 border border-gray-200 text-center">46.2%</td>
                        <td className="p-3 border border-gray-200 text-center">61.5%</td>
                      </tr>
                      <tr className="border-b-2 border-black">
                        <td className="p-3 border border-gray-200 font-black uppercase bg-gray-50">{t('materialDataSheetPage.techData.table.inner')}</td>
                        <td className="p-3 border border-gray-200">{t('materialDataSheetPage.techData.table.innerMat')}</td>
                        <td className="p-3 border border-gray-200 text-center">70</td>
                        <td className="p-3 border border-gray-200 text-center">0.05</td>
                        <td className="p-3 border border-gray-200 text-center">50</td>
                        <td className="p-3 border border-gray-200 text-center">53.8%</td>
                        <td className="p-3 border border-gray-200 text-center">38.5%</td>
                      </tr>
                      <tr className="bg-[#D4FF00] font-black">
                        <td className="p-3 border border-black">{t('materialDataSheetPage.techData.table.total')}</td>
                        <td className="p-3 border border-black uppercase">{t('materialDataSheetPage.techData.table.totalMat')}</td>
                        <td className="p-3 border border-black text-center">130</td>
                        <td className="p-3 border border-black text-center">0.13</td>
                        <td className="p-3 border border-black text-center">130</td>
                        <td className="p-3 border border-black text-center">100%</td>
                        <td className="p-3 border border-black text-center">100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Notes */}
                <div className="mt-8 bg-gray-50 p-6 border-2 border-black font-['JetBrains_Mono'] text-[10px] leading-relaxed">
                  <p className="font-black text-xs uppercase mb-2">{t('materialDataSheetPage.techData.notes.title')}</p>
                  <ul className="space-y-1">
                    <li>• {t('materialDataSheetPage.techData.notes.n1')}</li>
                    <li>• {t('materialDataSheetPage.techData.notes.n2')}</li>
                    <li>• {t('materialDataSheetPage.techData.notes.n3')}</li>
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t-4 border-black pt-12 text-center">
                <p className="font-black uppercase text-sm mb-4 italic">{t('materialDataSheetPage.footer.officialDoc')}</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-widest text-gray-500">
                  <span>www.pouch.eco</span>
                  <span>ryan@achievepack.com</span>
                  <span>Tel: +852 6970 4411</span>
                </div>
              </div>
            </div>
          </NeoCard>
          
          <div className="text-center">
            <NeoButton to="/materials" variant="dark" className="text-lg">
              {t('materialDataSheetPage.browseAll')} <ArrowRight className="w-5 h-5 ml-2" />
            </NeoButton>
          </div>
        </div>
      </div>
    </PouchLayout>
  );
}
