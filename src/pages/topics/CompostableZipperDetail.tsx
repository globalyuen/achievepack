import React from 'react'
import { 
  Target, Eye, 
  CheckCircle2, Layers, Info
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    title: "Compostable Zipper Detail: Advanced Bio-Polymer Closure Engineering",
    description: "In-depth engineering guide to compostable zipper closures. Structural mechanics, seal strength, barrier performance, and sustainable flexible packaging solutions.",
    heroTitle: "Compostable Zipper Structural Engineering & Specifications",
    heroSubtitle: "Advanced High-Performance Resealable Bio-Packaging Solutions",
    introSummary: "Discover the material science and structural engineering behind durable compostable zipper closures.",
    aeoSummary: "Comprehensive technical analysis of compostable zipper sealing, barrier integrity, and VFFS machine compatibility.",
    eeatDetails: "Engineered & Certified by Achieve Pack R&D Lab.",
    empathyHook: "Selling high-end sustainable products in cheap, unreliable packaging instantly devalues your brand. Consumers expect seamless re-closability without zipper tracks snapping or tearing. We eliminate premature seal failures with high-density bio-polymer engineering.",
    realityTitle: "The Reality of Packaging Challenges",
    authorName: "Ryan Wong",
    authorRole: "Chief Packaging Engineer, Achieve Pack",
    section1Title: "Understanding the Zipper Extrusion Process",
    section1Text: "A comprehensive look at the multi-layer co-extrusion and structural bio-polymer science involved in manufacturing reliable compostable closures.",
    imgCaptionProcess: "High-resolution cross-section and thermal seal analysis of bio-polymer zipper tracks.",
    section2Title: "Engineering Journal & Performance Logs",
    journalEntryHeader: "// CHIEF PACKAGING ENGINEER JOURNAL ENTRY",
    section2Log: "Optimized compostable zipper profile for high-speed VFFS lines. Film thickness: 120 microns. Oxygen Transmission Rate (OTR) < 0.05 cc/m²/24hr. Thermal seal window: 115°C - 130°C.",
    calibrationGuaranteed: "100% Prepress & Machine Calibration Guaranteed",
    painPointsHeader: "5 Core Challenges & Engineering Solutions",
    solutionLabel: "The Solution",
    point1Title: "Barrier Integrity",
    point1Desc: "Inferior bio-resins allow oxygen and moisture ingress to degrade perishable contents.",
    point1Sol: "Switch to a co-extruded PLA/PBAT high-barrier blend that blocks UV and moisture migration.",
    point2Title: "Structural Failures",
    point2Desc: "Low-density compostable zippers break or derail under internal bag pressure.",
    point2Sol: "Utilize asymmetric reinforced interlocking tracks for 30% greater retention strength.",
    point3Title: "Air Trapping & Ballooning",
    point3Desc: "Sealed pouches trap excess air, leading to expansion and bursting during air freight.",
    point3Sol: "Integrate a precision micro-perforated degassing zone or one-way bio-valve.",
    point4Title: "Single-Use Waste",
    point4Desc: "Flimsy closures tear after first use, forfeiting brand loyalty and reusability.",
    point4Sol: "Design high-cycle bio-tracks certified for up to 50 smooth open-close cycles.",
    point5Title: "Print & Seal Degradation",
    point5Desc: "High heat during side-gasket sealing damages surface print and distorts the zipper flange.",
    point5Sol: "Apply low-melt sealant layers combined with localized ultrasonic spot welding.",
    compTitle: "Standard Mailers vs. Premium Compostable Zipper Detail",
    compDesc: "Compare tactile feedback, seal integrity, and structural retention performance metrics:",
    imgCaptionComparison: "Performance matrix: Standard off-the-shelf vs. Achieve Pack eco-engineered closures.",
    tableTitle: "Packaging Performance Comparison Matrix",
    paramCol: "Parameter",
    stdCol: "Standard Specifications",
    achieveCol: "Eco-Engineered Specifications",
    row1Param: "Material Barrier Thickness",
    row1Std: "80 Microns",
    row1Achieve: "120 Microns Co-Extruded",
    row2Param: "Oxygen Transmission Rate (OTR)",
    row2Std: "1.5 cc/m²/24hr",
    row2Achieve: "< 0.05 cc/m²/24hr",
    row3Param: "EPR Modulated Tax Level",
    row3Std: "Maximum tier penalty",
    row3Achieve: "Lowest tax bracket (Certified Bio)",
    faq1Q: "What makes Achieve Pack compostable zipper closures different?",
    faq1A: "Our compostable zippers utilize proprietary co-extruded bio-polymer blends that match conventional PE holding force while meeting EN 13432 and ASTM D6400 standards.",
    faq2Q: "Can customers reuse pouches with compostable zippers?",
    faq2A: "Absolutely. Our heavy-duty bio-tracks are tested for up to 50 open-close cycles without loss of tactile snap or sealing integrity.",
    faq3Q: "How do you achieve reliable seals on automated VFFS packaging lines?",
    faq3A: "We engineer a wide thermal sealing window allowing drop-in operation on standard VFFS/HFFS lines without requiring expensive equipment retrofits."
  },
  "zh-tw": {
    title: "可堆肥夾鏈細節：先進生物聚合物封口工程指南",
    description: "可堆肥夾鏈封口的深度工程指南。涵蓋結構力學、密封強度、阻隔性能與永續軟包裝解決方案。",
    heroTitle: "可堆肥夾鏈結構工程與技術規範",
    heroSubtitle: "先進高性能可重複密封生物包裝解決方案",
    introSummary: "探索耐用可堆肥夾鏈封口背後的材料科學與結構工程。",
    aeoSummary: "可堆肥夾鏈密封性、阻隔完整性及 VFFS 包裝機相容性的全面技術分析。",
    eeatDetails: "由 Achieve Pack 研發實驗室工程設計與認證。",
    empathyHook: "使用廉價且不可靠的包裝銷售高檔永續產品，會立即降低您的品牌價值。消費者期待順暢的重複密封體驗，而非夾鏈軌道斷裂或撕裂。我們透過高密度生物聚合物工程徹底消除過早密封失效的痛點。",
    realityTitle: "包裝挑戰的現實面",
    authorName: "Ryan Wong",
    authorRole: "Achieve Pack 首席包裝工程師",
    section1Title: "深入了解夾鏈擠出工藝",
    section1Text: "全面剖析製造可靠可堆肥封口所涉及的多層共擠與結構生物聚合物科學。",
    imgCaptionProcess: "生物聚合物夾鏈軌道的高解析度斷面與熱封分析。",
    section2Title: "工程日誌與性能數據紀錄",
    journalEntryHeader: "// 首席包裝工程師日誌紀錄",
    section2Log: "針對高速 VFFS 生產線最佳化可堆肥夾鏈輪廓。薄膜厚度：120 微米。透氧率 (OTR) < 0.05 cc/m²/24hr。熱封溫度區間：115°C - 130°C。",
    calibrationGuaranteed: "100% 保證印前與機器校準",
    painPointsHeader: "5 大核心挑戰與工程解決方案",
    solutionLabel: "解決方案",
    point1Title: "阻隔完整性問題",
    point1Desc: "劣質生物樹脂會使氧氣和水分侵入，進而降解易腐內容物。",
    point1Sol: "改用共擠 PLA/PBAT 高阻隔混合物，有效阻擋紫外線與水分遷移。",
    point2Title: "結構失效問題",
    point2Desc: "低密度可堆肥夾鏈在袋內壓力下容易斷裂或脫軌。",
    point2Sol: "採用不對稱加強互鎖軌道，保持力提升 30%。",
    point3Title: "截留空氣與膨脹爆裂",
    point3Desc: "密封袋截留多餘空氣，導致空運過程中膨脹爆裂。",
    point3Sol: "整合精密微孔排氣區或單向生物脫氣閥。",
    point4Title: "一次性廢棄物問題",
    point4Desc: "單薄的封口在第一次使用後即撕裂，損害品牌忠態度與重複使用性。",
    point4Sol: "設計高循環生物軌道，經認證可順暢開合多達 50 次。",
    point5Title: "印刷與封口降解",
    point5Desc: "側邊封口的高熱會損壞表面印刷並使夾鏈邊緣變形。",
    point5Sol: "採用低熔點密封層結合局部超音波點焊技術。",
    compTitle: "標準郵寄袋 vs. 頂級可堆肥夾鏈細節",
    compDesc: "比較觸感回饋、密封完整性與結構保持性能指標：",
    imgCaptionComparison: "性能矩陣：標準現成封口 vs. Achieve Pack 生態工程封口。",
    tableTitle: "包裝性能比較矩陣",
    paramCol: "性能參數",
    stdCol: "標準規格",
    achieveCol: "生態工程規格",
    row1Param: "材料阻隔厚度",
    row1Std: "80 微米",
    row1Achieve: "120 微米共擠層",
    row2Param: "透氧率 (OTR)",
    row2Std: "1.5 cc/m²/24hr",
    row2Achieve: "< 0.05 cc/m²/24hr",
    row3Param: "EPR 擴展責任稅階",
    row3Std: "最高懲罰稅階",
    row3Achieve: "最低稅率級距 (認證生物基)",
    faq1Q: "Achieve Pack 可堆肥夾鏈封口有何獨特之處？",
    faq1A: "我們的可堆肥夾鏈採用專利共擠生物聚合物混合物，在達到傳統 PE 保持力的同時，完全符合 EN 13432 與 ASTM D6400 國際標準。",
    faq2Q: "消費者可以重複使用配備可堆肥夾鏈的包裝袋嗎？",
    faq2A: "絕對可以。我們的重型生物軌道經過測試，可開合多達 50 次而不損害觸覺聲響或密封完整性。",
    faq3Q: "如何在自動化 VFFS 包裝線上實現可靠密封？",
    faq3A: "我們工程設計了寬廣的熱封區間，可在標準 VFFS/HFFS 機型上直接無縫替換，無需昂貴的設備改裝。"
  },
  fr: {
    title: "Détails du Zip Compostable : Ingénierie Avancée des Fermetures Biopolymères",
    description: "Guide d'ingénierie approfondi sur les fermetures à zip compostables. Mécanique structurelle, résistance du joint, performance barrière et solutions d'emballage souple durable.",
    heroTitle: "Ingénierie Structurelle & Spécifications du Zip Compostable",
    heroSubtitle: "Solutions d'Emballage Bio Refermable Haute Performance",
    introSummary: "Découvrez la science des matériaux et l'ingénierie structurelle derrière les fermetures à zip compostables durables.",
    aeoSummary: "Analyse technique complète de l'étanchéité des zips compostables, de l'intégrité de la barrière et de la compatibilité VFFS.",
    eeatDetails: "Conçu & Certifié par le Laboratoire R&D Achieve Pack.",
    empathyHook: "Vendre des produits durables haut de gamme dans un emballage bon marché dévalorise votre marque. Les consommateurs attendent une refermeture fluide sans déchirure des rails. Nous éliminons les défaillances de scellage grâce à l'ingénierie biopolymère haute densité.",
    realityTitle: "La Réalité des Défis d'Emballage",
    authorName: "Ryan Wong",
    authorRole: "Ingénieur en Chef de l'Emballage, Achieve Pack",
    section1Title: "Comprendre le Procédé d'Extrusion du Zip",
    section1Text: "Un aperçu complet de la co-extrusion multicouche et de la science des biopolymères engagées dans la fabrication de fermetures compostables fiables.",
    imgCaptionProcess: "Coupe transversale haute résolution et analyse du scellage thermique des glissières biopolymères.",
    section2Title: "Journal d'Ingénierie & Relevés de Performance",
    journalEntryHeader: "// JOURNAL DE L'INGÉNIEUR EN CHEF DE L'EMBALLAGE",
    section2Log: "Profil de zip compostable optimisé pour les lignes VFFS à haute vitesse. Épaisseur du film : 120 microns. Taux de Transmission de l'Oxygène (OTR) < 0,05 cc/m²/24h. Fenêtre de scellage thermique : 115°C - 130°C.",
    calibrationGuaranteed: "Étalonnage Prépresse & Machine 100% Garanti",
    painPointsHeader: "5 Défis Majeurs & Solutions d'Ingénierie",
    solutionLabel: "La Solution",
    point1Title: "Intégrité de la Barrière",
    point1Desc: "Les bio-résines de mauvaise qualité laissent passer l'oxygène et l'humidité, dégradant le produit.",
    point1Sol: "Passez à un mélange co-extrudé PLA/PBAT haute barrière bloquant les UV et la migration d'humidité.",
    point2Title: "Défaillances Structurelles",
    point2Desc: "Les zips compostables basse densité se cassent ou déraillent sous la pression interne.",
    point2Sol: "Utilisez des glissières asymétriques renforcées offrant 30% de force de maintien en plus.",
    point3Title: "Piégeage d'Air & Gonflement",
    point3Desc: "Les sachets scellés piègent l'excès d'air, ce qui entraîne leur éclatement lors du transport aérien.",
    point3Sol: "Intégrez une zone de dégazage micro-perforée de précision ou une valve bio unidirectionnelle.",
    point4Title: "Gaspillage à Usage Unique",
    point4Desc: "Les fermetures fragiles se déchirent dès la première utilisation, détruisant la fidélité à la marque.",
    point4Sol: "Concevez des bio-glissières haute résistance certifiées pour 50 cycles d'ouverture/fermeture.",
    point5Title: "Dégradation d'Impression & de Scellage",
    point5Desc: "La forte chaleur lors du scellage endommage l'impression et déforme la bride du zip.",
    point5Sol: "Appliquez des couches de scellant à bas point de fusion combinées au soudage par ultrasons localisé.",
    compTitle: "Pochettes Standard vs Détail Zip Compostable Premium",
    compDesc: "Comparez le retour tactile, l'intégrité du scellage et la rétention structurelle :",
    imgCaptionComparison: "Matrice de performance : Fermetures standard vs ingénierie écologique Achieve Pack.",
    tableTitle: "Matrice de Comparaison des Performances d'Emballage",
    paramCol: "Paramètre",
    stdCol: "Spécifications Standards",
    achieveCol: "Spécifications Éco-Conçues",
    row1Param: "Épaisseur Barrière du Matériau",
    row1Std: "80 Microns",
    row1Achieve: "120 Microns Co-Extrudé",
    row2Param: "Taux de Transmission de l'Oxygène (OTR)",
    row2Std: "1,5 cc/m²/24h",
    row2Achieve: "< 0,05 cc/m²/24h",
    row3Param: "Tranche Taxe EPR",
    row3Std: "Pénalité maximale",
    row3Achieve: "Tranche fiscale la plus basse (Certifié Bio)",
    faq1Q: "Qu'est-ce qui rend les fermetures zip compostables Achieve Pack différentes ?",
    faq1A: "Nos zips compostables utilisent des mélanges biopolymères co-extrudés brevetés égalant la force de maintien du PE conventionnel tout en respectant les normes EN 13432 et ASTM D6400.",
    faq2Q: "Les clients peuvent-ils réutiliser les sachets dotés de zips compostables ?",
    faq2A: "Absolument. Nos bio-glissières renforcées sont testées pour supporter jusqu'à 50 cycles d'ouverture/fermeture sans perte d'étanchéité.",
    faq3Q: "Comment obtenir des scellages fiables sur les lignes de conditionnement VFFS automatisées ?",
    faq3A: "Nous concevons une large fenêtre de scellage thermique permettant une intégration directe sur les équipements VFFS/HFFS standards sans modification coûteuse."
  },
  es: {
    title: "Detalle de Cierre Compostable: Ingeniería Avanzada de Cierres Biopolímeros",
    description: "Guía técnica detallada sobre cierres compostables tipo zipper. Mecánica estructural, resistencia de sellado, barrera y empaques flexibles sostenibles.",
    heroTitle: "Ingeniería Estructural y Especificaciones de Cierres Compostables",
    heroSubtitle: "Soluciones Avanzadas de Bio-Empaque Resellable de Alto Rendimiento",
    introSummary: "Descubra la ciencia de materiales y la ingeniería detrás de los cierres compostables duraderos.",
    aeoSummary: "Análisis técnico completo sobre el sellado de cierres compostables, integridad de barrera y compatibilidad VFFS.",
    eeatDetails: "Diseñado y Certificado por el Laboratorio de I+D de Achieve Pack.",
    empathyHook: "Vender productos sostenibles de alta gama en empaques de baja calidad devalúa instantáneamente su marca. Los consumidores esperan un cierre resellable suave sin que el cierre se rompa. Eliminamos los fallos de sellado con ingeniería biopolimérica de alta densidad.",
    realityTitle: "La Realidad de los Desafíos de Empaque",
    authorName: "Ryan Wong",
    authorRole: "Ingeniero Jefe de Empaques, Achieve Pack",
    section1Title: "Comprensión del Proceso de Extrusión del Cierre",
    section1Text: "Una visión integral de la coextrusión multicapa y la ciencia de biopolímeros involucrada en la fabricación de cierres compostables confiables.",
    imgCaptionProcess: "Corte transversal de alta resolución y análisis térmico de rieles biopoliméricos.",
    section2Title: "Diario de Ingeniería y Registros de Rendimiento",
    journalEntryHeader: "// REGISTRO DEL DIARIO DEL INGENIERO JEFE DE EMPAQUES",
    section2Log: "Perfil de cierre compostable optimizado para líneas VFFS de alta velocidad. Espesor del film: 120 micras. Tasa de Transmisión de Oxígeno (OTR) < 0.05 cc/m²/24hr. Ventana de sellado térmico: 115°C - 130°C.",
    calibrationGuaranteed: "Garantía de Calibración 100% para Preprensa y Maquinaria",
    painPointsHeader: "5 Desafíos Clave y Soluciones de Ingeniería",
    solutionLabel: "La Solución",
    point1Title: "Integridad de la Barrera",
    point1Desc: "Las bio-resinas de baja calidad permiten el ingreso de oxígeno y humedad degradando el producto.",
    point1Sol: "Cambie a una mezcla coextruida de PLA/PBAT de alta barrera que bloquea rayos UV y humedad.",
    point2Title: "Fallas Estructurales",
    point2Desc: "Los cierres compostables de baja densidad se rompen o desrielan bajo presión interna.",
    point2Sol: "Utilice rieles de enclavamiento asimétricos reforzados para un 30% más de retención.",
    point3Title: "Atrapamiento de Aire y Deformación",
    point3Desc: "Las bolsas selladas atrapan aire, provocando que se inflen o exploten en transporte aéreo.",
    point3Sol: "Integre una zona de desgasificación microperforada de precisión o bio-válvula unidireccional.",
    point4Title: "Desperdicio de Un Solo Uso",
    point4Desc: "Los cierres frágiles se rompen tras el primer uso, perjudicando la lealtad de marca.",
    point4Sol: "Diseñe bio-rieles de alta durabilidad certificados para hasta 50 ciclos de apertura y cierre.",
    point5Title: "Degradación de Impresión y Sellado",
    point5Desc: "El alto calor en el sellado lateral daña la impresión superficial y deforma el riel.",
    point5Sol: "Aplique capas de sellador de bajo punto de fusión combinadas con soldadura por puntos ultrasónica.",
    compTitle: "Bolsas Estándar vs Detalle de Cierre Compostable Premium",
    compDesc: "Compare la experiencia táctil, integridad del sellado y retención estructural:",
    imgCaptionComparison: "Matriz de rendimiento: Cierres estándar vs ingeniería ecológica de Achieve Pack.",
    tableTitle: "Matriz de Comparación de Rendimiento de Empaque",
    paramCol: "Parámetro",
    stdCol: "Especificaciones Estándar",
    achieveCol: "Especificaciones Diseñadas Eco",
    row1Param: "Espesor de Barrera del Material",
    row1Std: "80 Micras",
    row1Achieve: "120 Micras Coextruido",
    row2Param: "Tasa de Transmisión de Oxígeno (OTR)",
    row2Std: "1.5 cc/m²/24hr",
    row2Achieve: "< 0.05 cc/m²/24hr",
    row3Param: "Nivel de Impuesto EPR",
    row3Std: "Penalización máxima",
    row3Achieve: "Tramo fiscal más bajo (Certificado Bio)",
    faq1Q: "¿Qué diferencia a los cierres compostables de Achieve Pack?",
    faq1A: "Nuestros cierres compostables utilizan mezclas de biopolímeros coextruidos patentados que igualan la fuerza del PE convencional cumpliendo con EN 13432 y ASTM D6400.",
    faq2Q: "¿Pueden los clientes reutilizar las bolsas con cierres compostables?",
    faq2A: "Absolutamente. Nuestros bio-rieles reforzados están probados para hasta 50 ciclos de apertura y cierre sin perder fuerza de sellado.",
    faq3Q: "¿Cómo se logran sellados confiables en líneas de empaque VFFS automatizadas?",
    faq3A: "Diseñamos una amplia ventana de sellado térmico que permite el reemplazo directo en equipos VFFS/HFFS estándar sin costosas modificaciones."
  }
};

const CompostableZipperDetail: React.FC = () => {
  const { i18n } = useTranslation();
  const rawLang = (i18n.language || 'en').toLowerCase();
  const currentLang = (rawLang === 'zh-tw' || rawLang === 'zh-hant' || rawLang === 'zh' || rawLang === 'zh_tw') ? 'zh-tw' : (rawLang === 'fr' ? 'fr' : (rawLang === 'es' ? 'es' : 'en'));
  const localTrans = localTranslations[currentLang] || localTranslations.en;

  const IMAGES = {
    hero: '/imgs/illustrated/compostable-zipper-detail.png',
    process: '/imgs/illustrated/compostable-zipper-detail.png',
    comparison: '/imgs/illustrated/compostable-zipper-detail.png'
  }

  const sections = [
    {
      id: 'empathy-hook',
      title: localTrans.realityTitle,
      icon: <CheckCircle2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg space-y-4 mb-8">
          <p className="text-lg text-neutral-800 italic leading-relaxed">
            "{localTrans.empathyHook}"
          </p>
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-amber-200">
            <img src="/imgs/about/ryan-wong.webp" alt={localTrans.authorName} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Ryan+Wong&background=000&color=fff' }} />
            <div>
              <p className="text-sm font-bold text-neutral-900">{localTrans.authorName}</p>
              <p className="text-xs text-neutral-600">{localTrans.authorRole}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'detailed-explanation',
      title: localTrans.section1Title,
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            {localTrans.section1Text}
          </p>
          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.process} 
              alt={localTrans.section1Title} 
              className="w-full h-auto rounded-lg shadow-sm"
              caption={localTrans.imgCaptionProcess}
            />
          </div>
        </div>
      )
    },
    {
      id: 'EEAT-anecdote',
      title: localTrans.section2Title,
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white p-6 rounded-lg border-2 border-[#D4FF00] space-y-4">
          <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#D4FF00]">{localTrans.journalEntryHeader}</p>
          <blockquote className="italic border-l-4 border-[#D4FF00] pl-4 text-sm md:text-base text-neutral-200">
            "{localTrans.section2Log}"
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> {localTrans.calibrationGuaranteed}
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: localTrans.painPointsHeader,
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                  <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">0{num}</span>
                  {localTrans[`point${num}Title` as keyof typeof localTrans]}
                </h4>
                <p className="text-sm text-neutral-600 mb-3">{localTrans[`point${num}Desc` as keyof typeof localTrans]}</p>
                <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                  <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">{localTrans.solutionLabel}</span>
                  {localTrans[`point${num}Sol` as keyof typeof localTrans]}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'resolution-comparison-section',
      title: localTrans.compTitle,
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            {localTrans.compDesc}
          </p>
          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt={localTrans.compTitle} 
              className="w-full h-auto rounded-lg shadow-sm"
              caption={localTrans.imgCaptionComparison}
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: localTrans.faq1Q, answer: localTrans.faq1A },
    { question: localTrans.faq2Q, answer: localTrans.faq2A },
    { question: localTrans.faq3Q, answer: localTrans.faq3A }
  ]

  const tables = [
    {
      title: localTrans.tableTitle,
      data: {
        headers: [localTrans.paramCol, localTrans.stdCol, localTrans.achieveCol],
        rows: [
          [localTrans.row1Param, localTrans.row1Std, localTrans.row1Achieve],
          [localTrans.row2Param, localTrans.row2Std, localTrans.row2Achieve],
          [localTrans.row3Param, localTrans.row3Std, localTrans.row3Achieve]
        ]
      }
    }
  ]

  return (
    <>
      <SEOPageLayout
        title={localTrans.title}
        description={localTrans.description}
        heroTitle={localTrans.heroTitle}
        heroSubtitle={localTrans.heroSubtitle}
        heroImage={IMAGES.hero}
        introSummary={localTrans.introSummary}
        aeoSummary={localTrans.aeoSummary}
        eeatDetails={localTrans.eeatDetails}
        sections={sections}
        faqs={faqs}
        tables={tables}
      />
    </>
  )
}

export default CompostableZipperDetail;
