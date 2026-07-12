import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Cpu, Settings, Zap, ArrowRight, Box } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import RelatedProductsShowcase from '../../components/RelatedProductsShowcase'
import { getDomain } from '../../utils/domain'

const translations: Record<string, any> = {
  en: {
    title: "Packaging Line Automation: Scaling Up Date Coding for SMEs | Achieve Pack",
    metaDesc: "Transition from manual stamping to automated packaging. Learn how conveyor-integrated TIJ inkjet systems and labelers boost production throughput and cut labor costs.",
    keywords: "packaging automation, conveyor printing, automatic labeler, industrial inkjet, SME production scaling",
    heroTitle: "Packaging Line Automation & Date Coding",
    heroSubtitle: "How growing brands transition from manual stamping to inline conveyor printing and automatic labeling.",
    quickAnswer: "Quick Answer: For growing brands, manual date stamping becomes a massive bottleneck at volumes above 1,000 bags/day. Transitioning to inline coding requires integrating a conveyor belt with a static thermal inkjet (TIJ) bracket, allowing hands-free date and barcode printing at speeds up to 30 meters/minute. Combining this with an automatic labeling machine optimizes throughput and cuts labeling labor by 80%.",
    ryanTitle: "Memo from Ryan Wong, Co-Founder & Packaging Lead",
    ryanLog: "Many food and coffee startups waste thousands of dollars on manual labor for labeling and date stamping. By setting up a modular conveyor line with a smart inkjet printer and an automatic labeling system, you can easily handle 5,000+ units per shift with a single operator. The return on investment (ROI) is typically realized in less than 3 months.",
    sec1Title: "1. The Manual Bottleneck vs. Inline Coding",
    sec1Text: "Manual stamping or hand-peeling labels is slow, inconsistent, and highly error-prone. By mounting a TIJ smart coder onto a conveyor guide rail with a photoelectric sensor, printing is automated as pouches pass by, producing identical, crisp dates and barcodes without human intervention.",
    sec2Title: "2. Integrating Conveyors & Sensors",
    sec2Text: "Smart TIJ systems sync with conveyer speeds using encoders. As the sensor detects a pouch edge, it signals the printhead to spray the pre-programmed template instantly. This non-contact process ensures zero damage to filled bags.",
    sec3Title: "3. Modular Line Setup",
    sec3Text: "A complete SME packaging line integrates direct heat sealing, date coding, and automatic label application. Using modular machinery ensures you can adapt to different pouch sizes and materials without purchasing entirely new lines.",
    upgradeCta: "Automate Your Production Line",
    upgradeDesc: "Explore our automatic labeling systems, conveyor belt combos, and smart inkjet printing packages.",
    btnText: "Consult an Engineer"
  },
  zh: {
    title: "包裝線自動化：中小型品牌如何選擇日期噴碼與自動化設備 | Achieve Pack",
    metaDesc: "從手動打碼轉型自動化生產。介紹如何整合傳送帶噴碼系統與自動貼標機，降低人工成本，提升產線產能與標籤一致性。",
    keywords: "包裝自動化, 傳送帶噴碼, 自動貼標機, 工業噴碼機, 生產線升級, 自動打碼",
    heroTitle: "包裝線自動化：中小型品牌升級打碼方案",
    heroSubtitle: "探討如何從效率低下的手動敲印，升級至傳送帶自動噴印與全自動貼標生產線。",
    quickAnswer: "快速解答：當日產量超過 1,000 袋時，手動日期蓋印將成為重大的生產瓶頸。將熱噴墨 (TIJ) 噴碼機安裝於傳送帶支架上，配備光電感應器，可實現高達每分鐘 30 米的非接觸式自動噴碼。再配合全自動貼標機，能大幅節省 80% 的人工貼標工時，全面消除出貨延遲。",
    ryanTitle: "來自聯合創始人兼首席工程師 Ryan Wong 的自動化備忘錄",
    ryanLog: "許多食品與咖啡品牌在起步階段，花費了大量人力在手動貼標和蓋印日期上。其實，只需引進一台智能噴碼機搭配小型傳送帶以及全自動貼標機，即可由單人操作完成每班 5,000 件以上的產出，設備投資回報期 (ROI) 通常不到三個月。",
    sec1Title: "1. 手動瓶頸與在線自動化",
    sec1Text: "手動打碼容易出現位置偏移、字樣模糊等不良品。通過將 TIJ 噴頭固定於傳送帶旁，利用光電感應器偵測袋身，能在袋身通過的瞬間完成高精度噴印，確保字字清晰一致。",
    sec2Title: "2. 傳送帶與光電感應器整合",
    sec2Text: "智能噴碼系統與傳送帶配合，在感應到包裝邊緣時即刻觸發噴印。這種非接觸式噴印技術適用於已填充的立體袋、風琴袋或瓶罐，不會擠壓變形或影響包裝內部產品。",
    sec3Title: "3. 模組化流水線設計",
    sec3Text: "一條高效的包裝流水線包含：封口、噴碼、貼標三合一模組。選擇高度相容的模組化設備，便於未來針對不同袋型、規格進行微調，避免因包裝改版而更換整條生產線。",
    upgradeCta: "開啟您的自動化生產線",
    upgradeDesc: "選購 Achieve Pack 全自動貼標機、傳送帶組件及智能噴碼機套餐，實現高產出打包。",
    btnText: "諮詢包裝工程師"
  },
  fr: {
    title: "Automatisation de ligne d'emballage : Optimiser le codage | Achieve Pack",
    metaDesc: "Passez du codage manuel à l'automatisation. Apprenez comment les systèmes jet d'encre TIJ sur convoyeur augmentent la cadence et réduisent les coûts.",
    keywords: "automatisation emballage, convoyeur, étiqueteuse automatique, TIJ convoyeur, productivité PME",
    heroTitle: "Automatisation de la ligne d'emballage et codage",
    heroSubtitle: "Comment passer du marquage manuel au codage automatique sur convoyeur et à l'étiquetage automatique.",
    quickAnswer: "Réponse rapide: Pour les volumes supérieurs à 1 000 sachets par jour, le codage manuel ralentit la production. Intégrer un convoyeur avec un bras de support d'imprimante jet d'encre (TIJ) et un capteur photoélectrique permet d'automatiser l'impression à des vitesses élevées.",
    ryanTitle: "Note de Ryan Wong, Cofondateur & Expert Emballage",
    ryanLog: "L'automatisation est abordable. Avec une imprimante intelligente montée sur convoyeur et une étiqueteuse automatique, un seul opérateur peut traiter plus de 5 000 unités par jour.",
    sec1Title: "1. Le goulot d'étranglement du marquage manuel",
    sec1Text: "Le marquage manuel est irrégulier et source d'erreurs. Le montage d'un codeur TIJ sur rail de convoyeur assure des impressions constantes et nettes de manière 100% automatisée.",
    sec2Title: "2. Synchronisation convoyeur et capteurs",
    sec2Text: "Le capteur photoélectrique détecte le passage de l'emballage et déclenche instantanément l'impression jet d'encre sans contact, protégeant ainsi l'intégrité des produits fragiles.",
    sec3Title: "3. Configuration de ligne modulaire",
    sec3Text: "Une configuration modulaire combinant scellage, codage et étiquetage permet de s'adapter facilement à différents formats de sacs sans réinvestissement massif.",
    upgradeCta: "Automatisez votre ligne de conditionnement",
    upgradeDesc: "Découvrez nos étiqueteuses automatiques et convoyeurs équipés de systèmes de codage TIJ.",
    btnText: "Consulter un Ingénieur"
  },
  es: {
    title: "Automatización de líneas de empaque: Codificación industrial | Achieve Pack",
    metaDesc: "Automatice su línea de producción. Descubra cómo las impresoras TIJ integradas en cinta transportadora y las etiquetadoras reducen costes y aumentan la velocidad.",
    keywords: "automatización empaque, cinta transportadora, etiquetadora automática, impresora TIJ lineal, escalabilidad producción",
    heroTitle: "Automatización de la línea de empaque y codificación",
    heroSubtitle: "El camino hacia la producción industrial mediante cinta transportadora e impresión jet de tinta lineal.",
    quickAnswer: "Respuesta rápida: Superar las 1,000 unidades diarias con sellado y codificación manual es ineficiente. La solución es montar un codificador TIJ en una cinta transportadora dotada de sensor fotoeléctrico, logrando imprimir lotes y fechas a velocidades de hasta 30 m/min.",
    ryanTitle: "Nota de Ryan Wong, Cofundador y Especialista en Empaque",
    ryanLog: "Automatizar con una cinta transportadora pequeña, un cabezal de impresión TIJ y una etiquetadora reduce los costos de mano de obra en un 80% y asegura un retorno de inversión en pocos meses.",
    sec1Title: "1. El cuello de botella manual vs. Codificación lineal",
    sec1Text: "Imprimir manualmente provoca variaciones en la posición y calidad. Los codificadores automáticos en línea garantizan marcas idénticas y profesionales de forma continua.",
    sec2Title: "2. Integración de cintas y sensores fotoeléctricos",
    sec2Text: "Los sensores detectan el paso del envase y activan la inyección de tinta en fracciones de segundo, garantizando que el texto quede centrado y sin contacto físico.",
    sec3Title: "3. Diseño de línea modular",
    sec3Text: "Combine selladoras continuas, codificadoras automáticas y etiquetadoras en una sola línea. La flexibilidad de nuestros equipos le permite cambiar de SKU rápidamente.",
    upgradeCta: "Automatice su producción hoy",
    upgradeDesc: "Vea nuestros combos de cinta transportadora, etiquetadoras automáticas e impresoras inteligentes de inyección de tinta.",
    btnText: "Consultar con un Ingeniero"
  }
}

export default function PackagingLineAutomationPage() {
  const { i18n } = useTranslation()
  const isPouchDomain = getDomain() === 'pouch'
  
  const currentLang = i18n.language || 'en'
  const langKey = currentLang.startsWith('zh') ? 'zh' : currentLang.startsWith('fr') ? 'fr' : currentLang.startsWith('es') ? 'es' : 'en'
  const t = translations[langKey]

  const seoProps = {
    title: t.title,
    metaDescription: t.metaDesc,
    keywords: t.keywords,
    canonicalUrl: `https://achievepack.com/knowledge/packaging-line-automation-date-coding`
  }

  const heroProps = {
    heroTitle: t.heroTitle,
    heroSubtitle: t.heroSubtitle,
    heroImage: "/imgs/knowledge/bottle-printing-hero.jpg",
    categoryTag: "AUTOMATION",
    categoryColor: "#2563eb",
    readTime: "9 min read"
  }

  const sectionsForAchieve = [
    {
      id: "engineers-log",
      title: t.ryanTitle,
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      content: (
        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 text-left">
          <p className="text-blue-900 text-xs font-semibold mb-2 uppercase tracking-wide">
            {langKey === 'zh' ? '自動化工程見解' : 'Automation Memo'}
          </p>
          <p className="text-neutral-700 text-xs leading-relaxed italic">
            "{t.ryanLog}"
          </p>
        </div>
      )
    },
    {
      id: "manual-vs-inline",
      title: t.sec1Title,
      icon: <Settings className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-4 text-left">
          <p className="text-neutral-700 text-xs leading-relaxed">
            {t.sec1Text}
          </p>
        </div>
      )
    },
    {
      id: "conveyors-sensors",
      title: t.sec2Title,
      icon: <Zap className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-4 text-left">
          <p className="text-neutral-700 text-xs leading-relaxed">
            {t.sec2Text}
          </p>
        </div>
      )
    },
    {
      id: "modular-setup",
      title: t.sec3Title,
      icon: <Cpu className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-4 text-left">
          <p className="text-neutral-700 text-xs leading-relaxed">
            {t.sec3Text}
          </p>
        </div>
      )
    },
    {
      id: "related-products-section",
      title: langKey === 'zh' ? '推薦的生產線自動化設備' : 'Recommended Automation Equipment',
      icon: <Box className="h-6 w-6 text-neutral-800" />,
      content: (
        <RelatedProductsShowcase productIds={['smart-inkjet-coding-machine', 'automatic-labeling-machine', 'hand-clamp-sealer']} />
      )
    }
  ]

  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        {...seoProps}
        {...heroProps}
        sections={sectionsForAchieve}
        ctaTitle={t.upgradeCta}
        ctaDescription={t.upgradeDesc}
      />
    )
  }

  return (
    <SEOPageLayout
      title={seoProps.title}
      description={seoProps.metaDescription}
      keywords={seoProps.keywords}
      canonicalUrl={seoProps.canonicalUrl}
      heroTitle={heroProps.heroTitle}
      heroSubtitle={heroProps.heroSubtitle}
      heroImage="/imgs/knowledge/bottle-printing-hero.jpg"
      introSummary={t.quickAnswer}
      sections={sectionsForAchieve}
      schemaType="Article"
      ctaTitle={t.upgradeCta}
      ctaDescription={t.upgradeDesc}
      ctaButtonText={t.btnText}
      heroStyle="banner"
    />
  )
}
