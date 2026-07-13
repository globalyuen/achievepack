import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { ShieldCheck, FileText, CheckCircle, AlertTriangle, Box, Factory, CheckCircle2 } from 'lucide-react'
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
    btnText: "Consult an Engineer",
    ppTitle: "5 Compliance & Coding Pain Points Solved",
    expertNotebookTitle: "From Ryan Wong's Engineering Notebook",
    recommendedEquipTitle: "Recommended Equipment & Packaging",
    pp1Prob: "Ink Smudging in Cold Chain Logistics",
    pp1Sol: "Using MEK fast-dry solvent inks that cure in <0.5s, resisting condensation and friction during refrigerated transport to maintain regulatory compliance.",
    pp2Prob: "Missing Dates causing Retail Rejections",
    pp2Sol: "Integrating TIJ printers with inline vision inspection systems to ensure 100% code presence, accuracy, and readability before shipping to major retailers.",
    pp3Prob: "Low Contrast on Colored Films",
    pp3Sol: "Printing on pre-designed white patches or utilizing high-opacity white/yellow inks on dark metallic films for optimal barcode and scanner legibility.",
    pp4Prob: "Print Head Clogging & Maintenance",
    pp4Sol: "Modern TIJ cartridges feature self-cleaning and automated capping mechanisms, effectively eliminating the daily maintenance and messy cleanups required by older CIJ systems.",
    pp5Prob: "Slow Production Speeds bottlenecking output",
    pp5Sol: "High-speed Thermal Transfer Overprinting (TTO) and TIJ systems synchronize with conveyor belts or VFFS machines to print at up to 120 meters per minute without any code distortion."
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
    btnText: "諮詢包裝工程師",
    ppTitle: "5大合規痛點與解決方案",
    expertNotebookTitle: "Ryan Wong 的工程筆記",
    recommendedEquipTitle: "推薦的打碼與包裝設備",
    pp1Prob: "冷鏈物流中的油墨模糊問題",
    pp1Sol: "使用固化時間小於0.5秒的 MEK 快乾溶劑型油墨，有效抵抗冷藏運輸過程中的冷凝水與摩擦，確保持續符合監管要求。",
    pp2Prob: "漏噴印日期導致被零售通路拒收",
    pp2Sol: "將 TIJ 噴碼機與在線視覺檢測系統整合，確保在出貨給大型零售商前，噴碼率、準確性和清晰度達到 100%。",
    pp3Prob: "彩色薄膜上的噴印對比度低",
    pp3Sol: "在預先設計的白色區塊上進行噴印，或在深色金屬薄膜上使用高不透明度的白色/黃色油墨，以達到最佳的條碼與掃描儀辨識度。",
    pp4Prob: "噴頭堵塞與日常維護繁瑣",
    pp4Sol: "現代 TIJ 墨盒配備自清潔和自動封蓋結構，能有效消除傳統 CIJ 噴碼系統所需的每日維護和繁雜的清潔工作。",
    pp5Prob: "生產速度慢成為產量瓶頸",
    pp5Sol: "高速熱轉印 (TTO) 和 TIJ 系統可與傳送帶或 VFFS 包裝機同步運作，在每分鐘高達 120 米的速度下進行無變形噴印。"
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
    btnText: "Consulter un Ingénieur",
    ppTitle: "5 Problématiques de Conformité & de Codage Résolues",
    expertNotebookTitle: "Extrait du carnet de Ryan Wong",
    recommendedEquipTitle: "Équipements et emballages recommandés",
    pp1Prob: "Bavures d'encre dans la logistique de la chaîne du froid",
    pp1Sol: "Utilisation d'encres solvants MEK à séchage rapide qui durcissent en moins de 0,5 seconde, résistant à la condensation et aux frottements lors du transport réfrigéré pour maintenir la conformité réglementaire.",
    pp2Prob: "Dates manquantes entraînant des rejets par les distributeurs",
    pp2Sol: "Intégration d'imprimantes TIJ avec des systèmes d'inspection par vision industrielle en ligne pour garantir la présence, l'exactitude et la lisibilité du code à 100 % avant l'expédition aux principaux distributeurs.",
    pp3Prob: "Faible contraste sur les films colorés",
    pp3Sol: "Impression sur des zones blanches pré-conçues ou utilisation d'encres blanches/jaunes à haute opacité sur des films métalliques sombres pour une lisibilité optimale des codes-barres et des scanners.",
    pp4Prob: "Obturation des têtes d'impression et maintenance",
    pp4Sol: "Les cartouches TIJ modernes intègrent des mécanismes d'auto-nettoyage et de capsulage automatique, éliminant l'entretien quotidien et les nettoyages fastidieux requis par les anciens systèmes CIJ.",
    pp5Prob: "Vitesses de production lentes limitant le rendement",
    pp5Sol: "Les systèmes de codage haute vitesse par transfert thermique (TTO) et TIJ se synchronisent avec les convoyeurs ou les machines VFFS pour imprimer jusqu'à 120 mètres par minute sans déformation du code."
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
    btnText: "Consultar con un Ingeniero",
    ppTitle: "5 Puntos de Dolor de Cumplimiento y Codificación Resueltos",
    expertNotebookTitle: "Del cuaderno de ingeniería de Ryan Wong",
    recommendedEquipTitle: "Equipos y embalajes recomendados",
    pp1Prob: "Manchado de tinta en la logística de la cadena de frío",
    pp1Sol: "Uso de tintas solventes MEK de secado rápido que curan en menos de 0.5 segundos, resistiendo la condensación y la fricción durante el transporte refrigerado para mantener el cumplimiento regulatorio.",
    pp2Prob: "Fechas ausentes que provocan el rechazo de los distribuidores",
    pp2Sol: "Integración de impresoras TIJ con sistemas de inspección visual en línea para garantizar la presencia, precisión y legibilidad del código al 100% antes del envío a los principales minoristas.",
    pp3Prob: "Bajo contraste en películas de color",
    pp3Sol: "Impresión sobre parches blancos prediseñados o uso de tintas blancas/amarillas de alta opacidad en películas metálicas oscuras para una legibilidad óptima de los códigos de barras y escáneres.",
    pp4Prob: "Obstrucción del cabezal de impresión y mantenimiento",
    pp4Sol: "Los cartuchos TIJ modernos cuentan con mecanismos de autolimpieza y tapado automático, eliminando el mantenimiento diario y las limpiezas complicadas que requerían los antiguos sistemas CIJ.",
    pp5Prob: "Velocidades de producción lentas que limitan el rendimiento",
    pp5Sol: "Los sistemas de transferencia térmica (TTO) y TIJ de alta velocidad se sincronizan con las cintas transportadoras o máquinas VFFS para imprimir a hasta 120 metros por minuto sin distorsión del código."
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
      id: "regulatory-overview",
      title: t.sec1Title || "1. Key Regulatory Standards",
      icon: <FileText className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-6 text-left">
          <p className="text-neutral-700 leading-relaxed">
            {t.sec1Text}
          </p>
          <img src="/imgs/knowledge/pouch-coding-tij.jpg" alt="TIJ Coding on Pouch" className="w-full rounded-xl shadow-md my-4" />
          <h3 className="text-xl font-bold text-neutral-900 mt-6">{t.sec2Title}</h3>
          <p className="text-neutral-700 leading-relaxed">
            {t.sec2Text}
          </p>
          <img src="/imgs/knowledge/pouch-coding-tto.jpg" alt="TTO Printing on Film" className="w-full rounded-xl shadow-md my-4" />
          <h3 className="text-xl font-bold text-neutral-900 mt-6">{t.sec3Title}</h3>
          <p className="text-neutral-700 leading-relaxed">
            {t.sec3Text}
          </p>
          <img src="/imgs/knowledge/pouch-coding-debossing.jpg" alt="Debossing on Pouch" className="w-full rounded-xl shadow-md my-4" />
        </div>
      )
    },
    {
      id: 'pain-points',
      title: t.ppTitle,
      icon: <ShieldCheck className="w-5 h-5 text-neutral-800" />,
      content: (
        <div className="space-y-6">
          {[
            {
              num: '01',
              problem: t.pp1Prob,
              solution: t.pp1Sol,
            },
            {
              num: '02',
              problem: t.pp2Prob,
              solution: t.pp2Sol,
            },
            {
              num: '03',
              problem: t.pp3Prob,
              solution: t.pp3Sol,
            },
            {
              num: '04',
              problem: t.pp4Prob,
              solution: t.pp4Sol,
            },
            {
              num: '05',
              problem: t.pp5Prob,
              solution: t.pp5Sol,
            }
          ].map((item) => (
            <div key={item.num} className="bg-neutral-900 text-white rounded-xl p-6 relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="text-6xl font-black font-mono">{item.num}</span>
              </div>
              <h4 className="text-lg font-bold mb-3 pr-12 text-white">{item.problem}</h4>
              <div className="bg-neutral-800 rounded-lg p-4 border-l-4 border-emerald-500">
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase">Solution:</span>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "engineering-notebook",
      title: t.expertNotebookTitle,
      icon: <Factory className="h-6 w-6 text-emerald-600" />,
      content: (
        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl shadow-sm text-left">
          <h4 className="text-emerald-900 font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">🔬</span> Expert Engineering Insight
          </h4>
          <p className="text-emerald-800 italic leading-relaxed text-sm">
            "Over my career auditing packaging lines, a major risk I see is brands using low-adhesion or water-based inks on plastic or laminate films. Low-quality prints easily scratch off in transit, causing retail rejections and regulatory non-compliance. Always verify ink compatibility and run adhesion tape tests before running production batches. For flexible packaging, solvent-based TIJ or ribbon-based TTO are the only industrial standards you should rely on."<br/><br/>
            — Ryan Wong, Co-Founder & Chief Packaging Engineer
          </p>
          <div className="bg-white rounded-lg p-4 flex items-center gap-4 mt-4">
            <img src="/imgs/team/ryan-in-exhib.webp" alt="Ryan Wong" className="w-16 h-16 rounded-full object-cover border-2 border-emerald-200" onError={(e) => { e.currentTarget.style.display='none' }} />
            <div>
              <h5 className="font-bold text-neutral-900">Ryan Wong</h5>
              <p className="text-xs text-neutral-500 font-medium mb-1">14+ Years Packaging Engineering | Compliance Auditing Expert</p>
              <p className="text-xs text-neutral-600">Materials science expert helping 500+ global brands scale from prototype testing to industrial vertical packaging lines.</p>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noreferrer" className="text-xs text-emerald-600 font-bold hover:underline mt-1 inline-block">Have a technical question? Schedule a 15-minute packaging audit with Ryan →</a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "related-products-section",
      title: t.recommendedEquipTitle,
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
