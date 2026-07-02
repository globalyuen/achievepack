import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Package, TrendingUp, Shield, DollarSign, AlertCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const localTranslations: Record<string, any> = {
  en: {
    title: "5 Common Low MOQ Stand-Up Pouch Problems (And Solutions)",
    p1: "High Initial Setup Costs",
    s1: "Digital printing eliminates plate fees, allowing custom packaging from just 100pcs.",
    p2: "Long Lead Times",
    s2: "Print-on-demand technology speeds up production and reduces wait times significantly.",
    p3: "Obsolete Inventory Waste",
    s3: "Ordering in small batches prevents overstocking and wasted materials.",
    p4: "Difficulty Managing Multiple SKUs",
    s4: "Variable data printing makes handling different designs effortless.",
    p5: "Inconsistent Print Quality",
    s5: "High-resolution digital tech matches rotogravure quality for professional results."
  },
  es: {
    title: "5 Problemas Comunes de las Bolsas Stand-Up de Bajo MOQ (Y Soluciones)",
    p1: "Altos Costos Iniciales de Configuración",
    s1: "La impresión digital elimina las tarifas de las planchas, permitiendo empaques personalizados desde solo 100 piezas.",
    p2: "Largos Tiempos de Entrega",
    s2: "La tecnología de impresión bajo demanda acelera la producción y reduce los tiempos de espera significativamente.",
    p3: "Desperdicio de Inventario Obsoleto",
    s3: "Ordenar en pequeños lotes previene el exceso de inventario y el desperdicio de materiales.",
    p4: "Dificultad para Manejar Múltiples SKUs",
    s4: "La impresión de datos variables facilita el manejo de diferentes diseños sin esfuerzo.",
    p5: "Calidad de Impresión Inconsistente",
    s5: "La tecnología digital de alta resolución iguala la calidad del huecograbado para obtener resultados profesionales."
  },
  fr: {
    title: "5 Problèmes Courants des Sachets Tient-Debout à Faible MOQ (Et Solutions)",
    p1: "Coûts de Configuration Initiale Élevés",
    s1: "L'impression numérique élimine les frais de plaques, permettant des emballages personnalisés à partir de 100 pièces.",
    p2: "Longs Délais de Livraison",
    s2: "La technologie d'impression à la demande accélère la production et réduit considérablement les temps d'attente.",
    p3: "Gaspillage de Stocks Obsolètes",
    s3: "Commander en petits lots évite le surstockage et le gaspillage de matériaux.",
    p4: "Difficulté à Gérer Plusieurs SKUs",
    s4: "L'impression de données variables rend la gestion de différents designs sans effort.",
    p5: "Qualité d'Impression Incohérente",
    s5: "La technologie numérique haute résolution égale la qualité de l'héliogravure pour des résultats professionnels."
  },
  "zh-TW": {
    title: "5 個常見的低 MOQ 站立袋痛點 (及解決方案)",
    p1: "高昂的初始設置成本",
    s1: "數位印刷免除了製版費，最低100個即可客製化包裝。",
    p2: "漫長的交貨時間",
    s2: "隨需列印技術加快了生產速度，顯著縮短了等待時間。",
    p3: "庫存過時的浪費",
    s3: "小批量訂購可防止庫存過剩和材料浪費。",
    p4: "管理多個 SKU 的困難",
    s4: "可變數據印刷使處理不同的設計變得輕而易舉。",
    p5: "印刷品質不一致",
    s5: "高解析度數位技術可媲美凹版印刷的品質，呈現專業效果。"
  }
};

export default function LowMOQStandUpPouchPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const tLoc = localTranslations[lang] || localTranslations.en

  const sections = [
    {
      id: 'digital-printing',
      title: t('lowMOQStandUpPouchPage.s1.title'),
      icon: <Package className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('lowMOQStandUpPouchPage.s1.p1')}
          </p>
          
          <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black text-2xl uppercase mb-4 text-black">{t('lowMOQStandUpPouchPage.s1.advTitle')}</h3>
            <ul className="space-y-3 text-lg font-medium text-black">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('lowMOQStandUpPouchPage.s1.adv1Title')}</strong> {t('lowMOQStandUpPouchPage.s1.adv1Desc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('lowMOQStandUpPouchPage.s1.adv2Title')}</strong> {t('lowMOQStandUpPouchPage.s1.adv2Desc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('lowMOQStandUpPouchPage.s1.adv3Title')}</strong> {t('lowMOQStandUpPouchPage.s1.adv3Desc')}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'pouch-anatomy',
      title: t('lowMOQStandUpPouchPage.s2.title'),
      icon: <Shield className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('lowMOQStandUpPouchPage.s2.p1')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 text-neutral-900">{t('lowMOQStandUpPouchPage.s2.featTitle')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ {t('lowMOQStandUpPouchPage.s2.f1')}</li>
                <li>✓ {t('lowMOQStandUpPouchPage.s2.f2')}</li>
                <li>✓ {t('lowMOQStandUpPouchPage.s2.f3')}</li>
                <li>✓ {t('lowMOQStandUpPouchPage.s2.f4')}</li>
              </ul>
            </div>
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 text-neutral-900">{t('lowMOQStandUpPouchPage.s2.compTitle')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ {t('lowMOQStandUpPouchPage.s2.c1')}</li>
                <li>✓ {t('lowMOQStandUpPouchPage.s2.c2')}</li>
                <li>✓ {t('lowMOQStandUpPouchPage.s2.c3')}</li>
                <li>✓ {t('lowMOQStandUpPouchPage.s2.c4')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'economics',
      title: t('lowMOQStandUpPouchPage.s3.title'),
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('lowMOQStandUpPouchPage.s3.p1')}
          </p>
          <div className="bg-neutral-50 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h4 className="font-black text-lg uppercase mb-4 font-['JetBrains_Mono']">{t('lowMOQStandUpPouchPage.s3.roadmapTitle')}</h4>
            <div className="grid md:grid-cols-3 gap-4 font-mono text-center">
              <div className="bg-white border-2 border-black p-4">
                <div className="text-3xl font-black text-purple-600 mb-1">{t('lowMOQStandUpPouchPage.s3.m1')}</div>
                <div className="text-xs font-bold uppercase text-neutral-500">{t('lowMOQStandUpPouchPage.s3.m1Label')}</div>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <div className="text-3xl font-black text-green-600 mb-1">{t('lowMOQStandUpPouchPage.s3.m2')}</div>
                <div className="text-xs font-bold uppercase text-neutral-500">{t('lowMOQStandUpPouchPage.s3.m2Label')}</div>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <div className="text-3xl font-black text-blue-600 mb-1">{t('lowMOQStandUpPouchPage.s3.m3')}</div>
                <div className="text-xs font-bold uppercase text-neutral-500">{t('lowMOQStandUpPouchPage.s3.m3Label')}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pricing',
      title: t('lowMOQStandUpPouchPage.s4.title'),
      icon: <DollarSign className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('lowMOQStandUpPouchPage.s4.p1')}
          </p>
          
          <div className="overflow-x-auto border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <table className="w-full border-collapse bg-white font-['JetBrains_Mono'] text-left text-black text-xs md:text-sm">
              <thead>
                <tr className="bg-black text-[#D4FF00] font-black uppercase">
                  <th className="p-4">{t('lowMOQStandUpPouchPage.s4.table.thCap')}</th>
                  <th className="p-4">{t('lowMOQStandUpPouchPage.s4.table.thDigital')}</th>
                  <th className="p-4">{t('lowMOQStandUpPouchPage.s4.table.thRun')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-4 font-bold">{t('lowMOQStandUpPouchPage.s4.table.r1.v')}</td>
                  <td className="p-4">{t('lowMOQStandUpPouchPage.s4.table.r1.d')}</td>
                  <td className="p-4">{t('lowMOQStandUpPouchPage.s4.table.r1.r')}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-4 font-bold">{t('lowMOQStandUpPouchPage.s4.table.r2.v')}</td>
                  <td className="p-4">{t('lowMOQStandUpPouchPage.s4.table.r2.d')}</td>
                  <td className="p-4">{t('lowMOQStandUpPouchPage.s4.table.r2.r')}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">{t('lowMOQStandUpPouchPage.s4.table.r3.v')}</td>
                  <td className="p-4">{t('lowMOQStandUpPouchPage.s4.table.r3.d')}</td>
                  <td className="p-4">{t('lowMOQStandUpPouchPage.s4.table.r3.r')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'pain-points-solutions',
      title: tLoc.title,
      icon: <AlertCircle className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <img src="/imgs/knowledge/low-moq-pouch-pain-points.jpg" alt="Low MOQ Pouch Pain Points" className="w-full rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] object-cover mb-8" />
          <div className="grid gap-6">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-start">
                <AlertCircle className="w-8 h-8 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-black text-xl mb-2 text-neutral-900">{tLoc[`p${num}`]}</h3>
                  <p className="text-neutral-700 font-medium">{tLoc[`s${num}`]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ]

  const faqSections = t('lowMOQStandUpPouchPage.faq', { returnObjects: true }) as { q: string, a: string }[] || []

  return (
    <BlogArticleTemplate
      title={t('lowMOQStandUpPouchPage.title')}
      metaDescription={t('lowMOQStandUpPouchPage.metaDesc')}
      canonicalUrl="https://pouch.eco/digital-print-conventional-zipper-stand-up-pouch-bag-with-moq-start-from-100pcs"
      heroTitle={
        <>
          {t('lowMOQStandUpPouchPage.hero.title')}<br />
          <span className="text-[#00FFFF]">{t('lowMOQStandUpPouchPage.hero.titleColored')}</span>
        </>
      }
      heroSubtitle={t('lowMOQStandUpPouchPage.hero.subtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="STARTUP_PACKAGING"
      categoryColor="#00FFFF"
      readTime={t('lowMOQStandUpPouchPage.hero.readTime')}
      sections={sections}
      faqSections={faqSections}
      ctaTitle={t('lowMOQStandUpPouchPage.cta.title')}
      ctaDescription={t('lowMOQStandUpPouchPage.cta.desc')}
      achievePackLink="https://achievepack.com/products/low-moq-packaging"
      achievePackText={t('lowMOQStandUpPouchPage.cta.achieveText')}
    />
  )
}
