import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { ShieldCheck, FileText, CheckCircle, AlertTriangle, Box } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import RelatedProductsShowcase from '../../components/RelatedProductsShowcase'
import { getDomain } from '../../utils/domain'

const translations: Record<string, any> = {
  en: {
    title: "Food Packaging Compliance: Expiration & Lot Coding Standards | Achieve Pack",
    metaDesc: "Master food packaging compliance. Learn how to print expiration dates, batch numbers, and serial barcodes on pouches to meet FDA, EU, and global standards.",
    keywords: "food packaging compliance, date coder, batch coding, expiration date printing, TIJ printer, FDA food safety",
    heroTitle: "Food Packaging Compliance & Coding Standards",
    heroSubtitle: "A definitive engineering guide to expiration date printing, lot trace coding, and regulatory requirements.",
    quickAnswer: "Quick Answer: Food regulations (FDA/EU/FEHD) mandate clear, smudge-proof expiration dates and batch codes on packaging. For flexible pouches, Thermal Inkjet (TIJ) with fast-dry solvent ink is the standard for post-fill conveyor printing, while Thermal Transfer Overprinting (TTO) excels at pre-fill inline film printing.",
    ryanTitle: "Memo from Ryan Wong, Co-Founder & Packaging Lead",
    ryanLog: "Over the years, we've helped hundreds of brands scale up their packaging lines. A major risk is using low-adhesion or water-based inks on plastic or laminate films. Low-quality prints easily scratch off in transit, causing retail rejections and regulatory non-compliance. Always verify ink compatibility and run adhesion tape tests before running production batches.",
    sec1Title: "1. Key Regulatory Standards",
    sec1Text: "Food compliance regulations require all pre-packaged foods to clearly display expiration dates ('Best Before' or 'Use By') and production lot codes. These marks must remain legible throughout the entire product lifecycle—from cold chain transport to store shelves.",
    sec2Title: "2. Anti-Smudge Ink Technologies",
    sec2Text: "When printing on non-porous surfaces like PE, PET, or metallic barrier films, traditional water-based inks will smudge. Utilizing solvent-based ink cartridges (like MEK fast-dry formulations) ensures curing happens in under 0.5 seconds, providing water and friction-resistant lettering.",
    sec3Title: "3. Positioning & Contrast",
    sec3Text: "Dates and barcodes must be printed on flat surfaces with high contrast (e.g., using a pre-printed white background patch) to ensure retail scanners and consumer recognition work reliably. Avoid printing directly over sealing welds.",
    upgradeCta: "Optimize Your Coding Compliance",
    upgradeDesc: "Browse our high-resolution smart inkjet coding systems and handheld thermal coders engineered for flexible packaging.",
    btnText: "Consult an Engineer"
  },
  zh: {
    title: "食品包裝合規指南：如何噴印保質期與批次編號以符合監管標準 | Achieve Pack",
    metaDesc: "詳解食品安全條例下的保質期與批次打碼規範。對比手持/傳送帶噴碼機與傳統打碼方式，確保您的軟包裝袋噴印清晰、耐磨且符合合規審計。",
    keywords: "食品包裝合規, 軟袋過期日期打碼機, 手持噴碼機, 傳送帶噴印系統, 食品保質期標籤, 批次編號列印, 香港食物安全中心合規",
    heroTitle: "食品包裝合規指南：保質期與批次噴印標準",
    heroSubtitle: "深入解析食品安全追溯系統中保質期與批號打碼的技術法規與實現方案。",
    quickAnswer: "快速解答：根據香港食物安全中心與國際 FDA 規範，預包裝食品必須於包裝表面清晰標示「此日期前最佳 (Best Before)」或「此日期前食用 (Use By)」以及追溯批號。針對鋁箔袋、牛皮紙袋及生物可降解袋等軟包裝，最可靠的噴印方式為：熱噴墨 (TIJ) 噴碼系統（適用於封口後，在傳送帶上進行非接觸式噴印）或熱轉印打碼 (TTO)（適用於灌裝前平整捲膜高速列印）。",
    ryanTitle: "來自聯合創始人兼首席工程師 Ryan Wong 的合規備忘錄",
    ryanLog: "在協助品牌升級生產線時，常遇到因「日期噴印模糊或易被摩擦脫落」而被零售通路退貨的情況。特別是覆膜袋或塑膠薄膜表面能偏低，水性油墨極易磨損。我們強烈建議採用高附著力快乾溶劑型 (MEK) 墨盒，確保字樣在 0.3 秒內固化，達到耐刮、耐低溫冷藏的合規標準。",
    sec1Title: "1. 關鍵法規與監管標準",
    sec1Text: "食品監管條例要求預包裝食品必須以清晰、不易磨滅的方式標明其保質期及可追蹤生產批次。這不僅是保障消費者權益，更是應對食品安全召回和供應鏈追溯的關鍵合規要求。",
    sec2Title: "2. 快乾油墨與附著力技術",
    sec2Text: "在PE、PET、鋁箔等非吸收性材料上列印，普通油墨會產生糊字和重影。TIJ 快乾溶劑墨水專為此類材質設計，可瞬間固化，抵抗物流摩擦、潮濕與冷鏈冷凝水的侵蝕。",
    sec3Title: "3. 噴印位置與白底靜空區",
    sec3Text: "噴碼位置應避開熱封封口處（避免熱縮變形導致字體失真），並建議在包裝設計時預留一塊淺色或白色打碼區域，以保證足夠的對比度，使條碼或日期字體更容易被掃描與識別。",
    upgradeCta: "優化您的包裝合規噴碼",
    upgradeDesc: "選購高解析度智能噴碼機與手持打碼設備，專為軟包裝袋與工業流水線設計。",
    btnText: "諮詢包裝工程師"
  },
  fr: {
    title: "Conformité de l'emballage alimentaire : Normes de codage | Achieve Pack",
    metaDesc: "Maîtrisez la conformité du codage alimentaire. Apprenez à imprimer les dates d'expiration et les numéros de lot sur vos sachets selon les normes FDA et européennes.",
    keywords: "conformité alimentaire, date d'expiration, numéro de lot, imprimante jet d'encre TIJ, emballage flexible",
    heroTitle: "Conformité et normes de codage alimentaire",
    heroSubtitle: "Guide technique d'impression des dates limite de consommation et des numéros de lot.",
    quickAnswer: "Réponse rapide: Les réglementations alimentaires imposent des dates d'expiration et des codes de lot lisibles et indélébiles. Pour les sachets souples, la technologie Jet d'Encre Thermique (TIJ) avec encre solvant à séchage rapide est la norme après scellage.",
    ryanTitle: "Note de Ryan Wong, Cofondateur & Expert Emballage",
    ryanLog: "Un problème fréquent est l'utilisation d'encres bon marché sur des films plastiques. Elles s'effacent facilement au cours du transport. Utilisez des cartouches solvant à séchage rapide pour assurer une adhérence optimale.",
    sec1Title: "1. Normes réglementaires clés",
    sec1Text: "Les réglementations exigent que tous les aliments préemballés affichent clairement les dates de péremption et les numéros de lot pour assurer la traçabilité complète de la chaîne d'approvisionnement.",
    sec2Title: "2. Technologie d'encre anti-bavure",
    sec2Text: "Sur les films PE ou métallisés, les encres ordinaires bavent. Les cartouches solvant TIJ sèchent en moins de 0,5 seconde, offrant un marquage résistant à l'eau et aux frottements.",
    sec3Title: "3. Positionnement et contraste",
    sec3Text: "Imprimez sur une surface plane et contrastée pour faciliter la lecture par les scanners de caisse et les consommateurs.",
    upgradeCta: "Optimisez votre marquage réglementaire",
    upgradeDesc: "Découvrez nos systèmes de codage jet d'encre haute résolution conçus pour les lignes de conditionnement flexibles.",
    btnText: "Consulter un Ingénieur"
  },
  es: {
    title: "Cumplimiento del etiquetado alimentario: Normas de codificación | Achieve Pack",
    metaDesc: "Cumpla las normas de etiquetado alimentario. Aprenda a imprimir fechas de caducidad y números de lote en bolsas flexibles según los estándares de la FDA y la UE.",
    keywords: "cumplimiento alimentario, codificación de lote, fecha de caducidad, impresora TIJ, empaquetado flexible",
    heroTitle: "Cumplimiento y estándares de codificación alimentaria",
    heroSubtitle: "Guía técnica para la impresión de fechas de caducidad y códigos de trazabilidad.",
    quickAnswer: "Respuesta rápida: Las normativas alimentarias exigen fechas de caducidad y números de lote claros y duraderos. Para bolsas flexibles, el Jet de Tinta Térmico (TIJ) con tintas solventes de secado rápido es la solución estándar tras el llenado.",
    ryanTitle: "Nota de Ryan Wong, Cofundador y Especialista en Empaque",
    ryanLog: "Es muy común cometer el error de usar tintas base agua en materiales plásticos. Se borran con la fricción. Recomendamos cartuchos solventes de secado rápido para garantizar la durabilidad en toda la cadena logística.",
    sec1Title: "1. Estándares regulatorios clave",
    sec1Text: "La legislación exige la indicación legible de la fecha de consumo preferente y del lote de producción para gestionar retiradas del mercado y garantizar la seguridad alimentaria.",
    sec2Title: "2. Tecnología de tintas resistentes",
    sec2Text: "Sobre PE, PET o aluminio, use tintas solventes TIJ. Secan en menos de 0,5 segundos, resistiendo el agua, la humedad y el desgaste del transporte.",
    sec3Title: "3. Ubicación y contraste",
    sec3Text: "Las fechas y códigos de barras deben colocarse en áreas planas y de color claro para asegurar una correcta legibilidad y escaneado.",
    upgradeCta: "Mejore su sistema de codificación",
    upgradeDesc: "Explore nuestras codificadoras de inyección de tinta inteligentes de alta resolución diseñadas para empaques flexibles.",
    btnText: "Consultar con un Ingeniero"
  }
}

export default function FoodPackagingCompliancePage() {
  const { i18n } = useTranslation()
  const isPouchDomain = getDomain() === 'pouch'
  
  const currentLang = i18n.language || 'en'
  const langKey = currentLang.startsWith('zh') ? 'zh' : currentLang.startsWith('fr') ? 'fr' : currentLang.startsWith('es') ? 'es' : 'en'
  const t = translations[langKey]

  const seoProps = {
    title: t.title,
    metaDescription: t.metaDesc,
    keywords: t.keywords,
    canonicalUrl: `https://achievepack.com/knowledge/food-packaging-compliance-date-coding`
  }

  const heroProps = {
    heroTitle: t.heroTitle,
    heroSubtitle: t.heroSubtitle,
    heroImage: "/imgs/knowledge/bottle-printing-hero.jpg",
    categoryTag: "COMPLIANCE",
    categoryColor: "#dc2626",
    readTime: "8 min read"
  }

  const sectionsForAchieve = [
    {
      id: "engineers-log",
      title: t.ryanTitle,
      icon: <ShieldCheck className="h-6 w-6 text-red-600" />,
      content: (
        <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100 text-left">
          <p className="text-red-900 text-xs font-semibold mb-2 uppercase tracking-wide">
            {langKey === 'zh' ? '工程專業見解' : 'Expert Engineering Memorandum'}
          </p>
          <p className="text-neutral-700 text-xs leading-relaxed italic">
            "{t.ryanLog}"
          </p>
        </div>
      )
    },
    {
      id: "regulatory-standards",
      title: t.sec1Title,
      icon: <FileText className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-4 text-left">
          <p className="text-neutral-700 text-xs leading-relaxed">
            {t.sec1Text}
          </p>
        </div>
      )
    },
    {
      id: "smudge-resistance",
      title: t.sec2Title,
      icon: <CheckCircle className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-4 text-left">
          <p className="text-neutral-700 text-xs leading-relaxed">
            {t.sec2Text}
          </p>
        </div>
      )
    },
    {
      id: "positioning-contrast",
      title: t.sec3Title,
      icon: <AlertTriangle className="h-6 w-6 text-neutral-800" />,
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
      title: langKey === 'zh' ? '推薦的打碼與包裝設備' : 'Recommended Equipment & Packaging',
      icon: <Box className="h-6 w-6 text-neutral-800" />,
      content: (
        <RelatedProductsShowcase productIds={['smart-inkjet-coding-machine', 'hand-clamp-sealer']} />
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
