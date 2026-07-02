import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { FileText, Shield, Layers, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    sectionTitle: "5 Common TDS Problems (And Solutions)",
    prob1: "Problem 1: Inconsistent Barrier Properties (OTR/WVTR).",
    sol1: "Solution: Ensure the TDS provides values based on established testing standards (ASTM D3985 for OTR, ASTM F1249 for WVTR).",
    prob2: "Problem 2: Vague Material Compositions.",
    sol2: "Solution: Demand a detailed multi-layer breakdown with precise thickness (microns) and material grades.",
    prob3: "Problem 3: Non-Compliant Certifications.",
    sol3: "Solution: Cross-reference food-grade and compostability claims with valid, unexpired certificates.",
    prob4: "Problem 4: Poor Sealing Temperature Specs.",
    sol4: "Solution: Follow the recommended heat-seal temperature and pressure ranges provided in the TDS to prevent weak seals.",
    prob5: "Problem 5: Shelf Life Miscalculations.",
    sol5: "Solution: Correlate the TDS barrier values with the product's sensitivity to oxygen and moisture using shelf-life modeling."
  },
  es: {
    sectionTitle: "5 Problemas Comunes de TDS (Y Soluciones)",
    prob1: "Problema 1: Propiedades de barrera inconsistentes (OTR/WVTR).",
    sol1: "Solución: Asegúrese de que la TDS proporcione valores basados en estándares de prueba establecidos.",
    prob2: "Problema 2: Composiciones de materiales vagas.",
    sol2: "Solución: Exija un desglose detallado de múltiples capas con grosor preciso y grados de material.",
    prob3: "Problema 3: Certificaciones no conformes.",
    sol3: "Solución: Verifique las afirmaciones de grado alimenticio y compostabilidad con certificados válidos y vigentes.",
    prob4: "Problema 4: Especificaciones de temperatura de sellado deficientes.",
    sol4: "Solución: Siga los rangos de temperatura y presión recomendados en la TDS.",
    prob5: "Problema 5: Errores de cálculo de la vida útil.",
    sol5: "Solución: Correlacione los valores de barrera de la TDS con la sensibilidad del producto."
  },
  fr: {
    sectionTitle: "5 Problèmes Courants de TDS (Et Solutions)",
    prob1: "Problème 1 : Propriétés de barrière incohérentes (OTR/WVTR).",
    sol1: "Solution : Assurez-vous que la TDS fournit des valeurs basées sur des normes de test établies.",
    prob2: "Problème 2 : Compositions de matériaux vagues.",
    sol2: "Solution : Exigez une répartition détaillée des multiples couches avec une épaisseur précise.",
    prob3: "Problème 3 : Certifications non conformes.",
    sol3: "Solution : Vérifiez les allégations de qualité alimentaire avec des certificats valides.",
    prob4: "Problème 4 : Mauvaises spécifications de température de scellage.",
    sol4: "Solution : Suivez les plages de température et de pression recommandées dans la TDS.",
    prob5: "Problème 5 : Erreurs de calcul de la durée de conservation.",
    sol5: "Solution : Corrélez les valeurs de barrière de la TDS avec la sensibilité du produit."
  },
  'zh-TW': {
    sectionTitle: "5個常見的技術資料表 (TDS) 問題與解決方案",
    prob1: "問題1：阻隔性能（OTR/WVTR）不一致。",
    sol1: "解決方案：確保TDS提供基於既定測試標準的數值。",
    prob2: "問題2：材料成分模糊。",
    sol2: "解決方案：要求提供包含精確厚度（微米）和材料等級的詳細多層結構分析。",
    prob3: "問題3：認證不合規。",
    sol3: "解決方案：使用有效且未過期的證書交叉比對食品級和可堆肥聲明。",
    prob4: "問題4：密封溫度規格不良。",
    sol4: "解決方案：遵循TDS中建議的熱封溫度和壓力範圍，以防止密封不良。",
    prob5: "問題5：保質期計算錯誤。",
    sol5: "解決方案：將TDS阻隔值與產品對氧氣和水分的敏感度建立關聯。"
  }
};

export default function TechnicalDataSheetCategoryPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const tLocal = (key: string) => (localTranslations as any)[lang]?.[key] || (localTranslations as any).en[key]

  const sections = [
    {
      id: 'tds-directory',
      title: t('technicalDataSheetCategoryPage.s1.title'),
      icon: <FileText className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('technicalDataSheetCategoryPage.s1.p1')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-black">
            <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 flex items-center gap-2">{t('technicalDataSheetCategoryPage.s1.compTitle')}</h4>
              <ul className="space-y-2 text-sm font-semibold">
                <li>• <Link to="/spec/compostable-pouch-geo" className="underline hover:text-green-800">{t('technicalDataSheetCategoryPage.s1.compLink1')}</Link></li>
                <li>• <Link to="/materials/kraft-low-barrier" className="underline hover:text-green-800">{t('technicalDataSheetCategoryPage.s1.compLink2')}</Link></li>
                <li>• <Link to="/materials/plastic-free-kraft" className="underline hover:text-green-800">{t('technicalDataSheetCategoryPage.s1.compLink3')}</Link></li>
              </ul>
            </div>
            
            <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 flex items-center gap-2">{t('technicalDataSheetCategoryPage.s1.recyTitle')}</h4>
              <ul className="space-y-2 text-sm font-semibold">
                <li>• <Link to="/spec/mono-pe-duplex-clear" className="underline hover:text-blue-800">{t('technicalDataSheetCategoryPage.s1.recyLink1')}</Link></li>
                <li>• <Link to="/materials/recyclable-mono-pp" className="underline hover:text-blue-800">{t('technicalDataSheetCategoryPage.s1.recyLink2')}</Link></li>
                <li>• <Link to="/materials/bio-pe" className="underline hover:text-blue-800">{t('technicalDataSheetCategoryPage.s1.recyLink3')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'understanding-tds',
      title: t('technicalDataSheetCategoryPage.s2.title'),
      icon: <Layers className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('technicalDataSheetCategoryPage.s2.p1')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">{t('technicalDataSheetCategoryPage.s2.otrTitle')}</h4>
              <p className="text-sm font-medium mb-3 text-neutral-700">
                {t('technicalDataSheetCategoryPage.s2.otrDesc')}
              </p>
              <div className="font-mono text-xs bg-neutral-50 p-3 border-2 border-black">
                <strong>{t('technicalDataSheetCategoryPage.s2.otrVal')}</strong> &lt; 0.5 cc/m²/24hr
              </div>
            </div>
            
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">{t('technicalDataSheetCategoryPage.s2.wvtrTitle')}</h4>
              <p className="text-sm font-medium mb-3 text-neutral-700">
                {t('technicalDataSheetCategoryPage.s2.wvtrDesc')}
              </p>
              <div className="font-mono text-xs bg-neutral-50 p-3 border-2 border-black">
                <strong>{t('technicalDataSheetCategoryPage.s2.wvtrVal')}</strong> &lt; 0.8 g/m²/24hr
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t('technicalDataSheetCategoryPage.s3.title'),
      icon: <Shield className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('technicalDataSheetCategoryPage.s3.p1')}
          </p>
          
          <div className="overflow-x-auto border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <table className="w-full border-collapse bg-white font-['JetBrains_Mono'] text-left text-black text-xs md:text-sm">
              <thead>
                <tr className="bg-black text-[#D4FF00] font-black uppercase">
                  <th className="p-4">{t('technicalDataSheetCategoryPage.s3.table.thMark')}</th>
                  <th className="p-4">{t('technicalDataSheetCategoryPage.s3.table.thBody')}</th>
                  <th className="p-4">{t('technicalDataSheetCategoryPage.s3.table.thMeaning')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-4 font-bold">{t('technicalDataSheetCategoryPage.s3.table.r1.m')}</td>
                  <td className="p-4">{t('technicalDataSheetCategoryPage.s3.table.r1.b')}</td>
                  <td className="p-4">{t('technicalDataSheetCategoryPage.s3.table.r1.c')}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-4 font-bold">{t('technicalDataSheetCategoryPage.s3.table.r2.m')}</td>
                  <td className="p-4">{t('technicalDataSheetCategoryPage.s3.table.r2.b')}</td>
                  <td className="p-4">{t('technicalDataSheetCategoryPage.s3.table.r2.c')}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">{t('technicalDataSheetCategoryPage.s3.table.r3.m')}</td>
                  <td className="p-4">{t('technicalDataSheetCategoryPage.s3.table.r3.b')}</td>
                  <td className="p-4">{t('technicalDataSheetCategoryPage.s3.table.r3.c')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: tLocal('sectionTitle'),
      icon: <AlertTriangle className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <img src="/imgs/knowledge/technical-data-sheet-pain-points.jpg" alt="Technical Data Sheet Pain Points" className="w-full h-auto rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-cover mb-6" />
          <div className="grid gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="bg-white border-2 border-black p-4 flex gap-4 items-start shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-neutral-900 mb-1">{tLocal(`prob${num}`)}</h5>
                  <p className="text-neutral-700 text-sm">{tLocal(`sol${num}`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ]

  const faqSections = t('technicalDataSheetCategoryPage.faq', { returnObjects: true }) as { q: string, a: string }[] || []

  return (
    <BlogArticleTemplate
      title={t('technicalDataSheetCategoryPage.title')}
      metaDescription={t('technicalDataSheetCategoryPage.metaDesc')}
      canonicalUrl="https://pouch.eco/category/packaging-technical-data-sheet"
      heroTitle={
        <>
          {t('technicalDataSheetCategoryPage.hero.title')}<br />
          <span className="text-[#10b981]">{t('technicalDataSheetCategoryPage.hero.titleColored')}</span>
        </>
      }
      heroSubtitle={t('technicalDataSheetCategoryPage.hero.subtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="TECHNICAL_SPECS"
      categoryColor="#10b981"
      readTime={t('technicalDataSheetCategoryPage.hero.readTime')}
      sections={sections}
      faqSections={faqSections}
      ctaTitle={t('technicalDataSheetCategoryPage.cta.title')}
      ctaDescription={t('technicalDataSheetCategoryPage.cta.desc')}
      achievePackLink="https://achievepack.com/materials/data-sheet"
      achievePackText={t('technicalDataSheetCategoryPage.cta.achieveText')}
    />
  )
}
