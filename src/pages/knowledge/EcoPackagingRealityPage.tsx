import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Leaf, Trash2, RefreshCw, Coffee, ShieldCheck, Scale, Compass } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import RelatedProductsShowcase from '../../components/RelatedProductsShowcase'

const localTranslations: Record<string, any> = {
  en: {
    metaTitle: "The Eco-Packaging Reality: Compostability vs. Recyclability | Achieve Pack",
    metaDesc: "An honest engineering analysis of the eco-packaging landscape. Deep research on compostability skepticism, recyclability realities, and B2B coffee freshness barriers.",
    heroTitle: "Eco-Packaging Reality: The Honest Truth",
    heroSubtitle: "An engineering breakdown of compostability skepticism, recyclability parameters, and high-barrier coffee preservation freshness. No greenwashing, just material science.",
    quickAnswerTitle: "Circularity vs. Biodegradation",
    quickAnswerText: "Sustainable packaging faces physical infrastructure realities. Compostable bags often require commercial industrial facilities that most consumers cannot access. Recyclability advocates argue that widely recycled mono-materials (like Mono-PE) offer far superior environmental footprints by looping polymers back into use, while specialty products (like fresh coffee) require high OTR EVOH barriers to protect value without landfill waste.",
    ryanNotebookTitle: "🔬 From Ryan Wong's Engineering Notebook",
    ryanNotebookText: "During a packaging audit for an organic coffee roaster, they proudly showed me their BPI-certified compostable bags. However, when we checked their local municipal waste management facility, we discovered they rejected all compostable plastics directly to the landfill. The sorting machines couldn't distinguish PLA from PET, and they feared contamination. The client was shocked to learn their 'eco-friendly' bag was actually generating landfill methane. I advised them to shift to Mono-PE recyclable bags with EVOH barriers for store-drop-off recycling. Always audit your local disposal infrastructure before selecting your material.",
    sec1Title: "1. Compostability Skepticism: The Composting Paradox",
    sec1Text: "Consumers are increasingly skeptical of the word 'compostable'—and for good reason. Most compostable packaging does not break down in a standard backyard pile. Standard compostable plastics (like PLA) require industrial composting facilities with controlled heat (58°C) and microbes to decompose. Without local infrastructure, compostable bags end up in landfills, where they undergo anaerobic decomposition and emit methane. That is why Achieve Pack prioritizes Home Compostable laminates (certified cellulose and bio-PBS) which degrade in backyard garden heaps within 24 weeks.",
    sec2Title: "2. Recyclability vs. Reality: The Circularity Loop",
    sec2Text: "To achieve true circularity, we must focus on materials that work with existing sorting equipment. Standard multilayer bags (PET/AL/PE) are unrecyclable because the layers cannot be separated. In contrast, Mono-PE (single-polymer) bags are accepted in store-drop-off recycling programs. However, consumer education remains a bottleneck: if consumers throw Mono-PE in standard curbside bins, sorting plants may still discard them.",
    sec3Title: "3. Coffee Freshness vs. Eco Tradeoffs: The OTR Barrier",
    sec3Text: "Coffee roasters face a difficult choice: oxygen is the enemy of fresh coffee. Traditional high-barrier bags use aluminum foil layers, which offer excellent protection but are completely unrecyclable. Removing the foil reduces shelf life. Our engineering solution is co-extruded Mono-PE with EVOH coatings, which matches foil barrier protection (OTR < 0.1 cc/m²/day) while remaining recyclable.",
    painPointsTitle: "5 Packaging Pain Points & Engineering Solutions",
    pp1Title: "01 / Greenwashing Accusations & Mislabeling",
    pp1Desc: "Brands using industrially compostable bags in cities without facilities face greenwashing backlash.",
    pp1Sol: "Solution: Provide dual-certification labeling and transition to certified Home Compostable materials for backyard piles.",
    pp2Title: "02 / Premature Shelf Degradation",
    pp2Desc: "Bio-plastics degrading or losing strength on warehouse shelves before filling.",
    pp2Sol: "Solution: Formulate bio-polymers with enhanced moisture-resistant barriers and set storage guidelines (under 30°C, <50% RH).",
    pp3Title: "03 / Coffee Freshness Loss (Oxidation)",
    pp3Desc: "Biodegradable films having high oxygen transmission rates (OTR), leading to stale coffee in 4 weeks.",
    pp3Sol: "Solution: Co-extrude compostable paper or films with plant-based EVOH barriers (OTR < 0.1 cc/m²/day) to match foil preservation.",
    pp4Title: "04 / Recycling Stream Rejection",
    pp4Desc: "Multilayer mixed-plastic laminates (e.g. PET/AL/PE) being sorted as municipal waste and landfilled.",
    pp4Sol: "Solution: Transition to Mono-PE or Mono-PP single-polymer laminations that can be cleanly sorted and melted back into recycle pellets.",
    pp5Title: "05 / Poor Thermal Sealing Window",
    pp5Desc: "Bio-films having narrow seal windows, causing seam failure or melting on standard sealing jaws.",
    pp5Sol: "Solution: Engineer sealing liners with wide thermal operating windows (110°C - 140°C) and specify exact dwell time settings."
  },
  zh: {
    metaTitle: "環保包裝真相：可堆肥與可回收的深度抉擇 | Achieve Pack",
    metaDesc: "一場關於環保包裝的坦誠工程分析。深度解析可堆肥懷疑論、可回收基礎設施限制，以及 B2B 咖啡保鮮的高屏障權衡。",
    heroTitle: "環保包裝真相：誠實的工程分析",
    heroSubtitle: "深入剖析可堆肥懷疑論、可回收參數，以及高阻隔咖啡保鮮的物料科學，杜絕漂綠，回歸數據。",
    quickAnswerTitle: "循環經濟 vs. 生物降解",
    quickAnswerText: "可持續包裝正面臨物理基礎設施的現實考驗。可堆肥袋通常需要大多數消費者無法接觸到的商業工業設施。可回收倡導者認為，廣泛回收的單一材質（如 Mono-PE）通過將聚合物循環回用，能提供更優異的環境足跡，而特殊產品（如新鮮咖啡）則需要高阻隔 EVOH 來保護品質，防止垃圾掩埋污染。",
    ryanNotebookTitle: "🔬 來自 Ryan Wong 的包裝工程筆記",
    ryanNotebookText: "在為一家有機咖啡烘焙商進行包裝審計時，他們自豪地向我展示了通過 BPI 認證的可堆肥包裝袋。然而，當我們實地調查當地的市政垃圾處理廠時，卻發現他們直接把所有的可堆肥塑料挑出送往垃圾掩埋場。分揀機器無法將 PLA 與 PET 區分開來，且他們擔心污染回收渠道。客戶震驚地得知，他們所謂的「環保袋」實際上在掩埋場產生甲烷。我建議他們轉向帶有 EVOH 阻隔層的 Mono-PE 可回收袋，以進入門店回收渠道。在選擇材料之前，務必先審計當地的垃圾處置基礎設施。",
    sec1Title: "1. 可堆肥懷疑論：堆肥的悖論",
    sec1Text: "消費者對「可堆肥」一詞越來越懷疑，這是有原因的。大多數可堆肥包裝在標準的家庭後院堆肥堆中無法分解。標準的可堆肥塑料（如 PLA）需要符合 EN 13432 / ASTM D6400 認證，這意味著它們需要具有受控溫度（58°C）和微生物的工業堆肥設施才能分解。如果沒有當地基礎設施，可堆肥袋最終會進入垃圾掩埋場，進行無氧分解並釋放甲烷。因此 Achieve Pack 優先使用可在 24 週內降解的家庭可堆肥層壓材料（認證纖維素和 bio-PBS）。",
    sec2Title: "2. 可回收性 vs 現實：循環迴圈",
    sec2Text: "為了實現真正的循環，我們必須專注於與現有分揀設備兼容的材料。標準的多層複合袋（PET/AL/PE）是不可回收的，因為這些層無法分離。相反，Mono-PE（單一聚合物）袋在門店回收計劃中是被接受的。然而，消費者教育仍是瓶頸：如果消費者將 Mono-PE 扔進標準的家庭路邊垃圾箱，分揀廠仍可能將其廢棄。",
    sec3Title: "3. 咖啡新鮮度 vs 環保權衡：OTR 阻隔層",
    sec3Text: "咖啡烘焙商面臨著艱難的抉擇：氧氣是新鮮咖啡的敵人。傳統的高阻隔袋使用鋁箔層，提供了極佳的保護，但完全不可回收。去除鋁箔會縮短保質期。我們的工程解決方案是塗有 EVOH 的共擠 Mono-PE，這與鋁箔的阻隔保護相匹配（OTR < 0.1 cc/m²/day），同時保持可回收性。",
    painPointsTitle: "5 大環保包裝轉型痛點與工程解決方案",
    pp1Title: "01 / 漂綠指控與標籤誤導",
    pp1Desc: "在沒有工業堆肥設施的城市中使用工業可堆肥袋的品牌面臨漂綠輿論危機。",
    pp1Sol: "解決方案：提供雙重認證標籤，並向可在後院降解的認證家庭可堆肥 (Home Compostable) 材料過渡。",
    pp2Title: "02 / 庫存包裝提前降解變質",
    pp2Desc: "生物塑料袋在填充前在倉庫貨架上因受潮受熱而降解或強度下降。",
    pp2Sol: "解決方案：使用增強型防潮屏障配方生產生物聚合物，並制定嚴格儲存指南（30°C以下，相對濕度<50%）。",
    pp3Title: "03 / 咖啡保鮮度喪失（氧化）",
    pp3Desc: "普通可降解薄膜的氧氣透過率（OTR）較高，導致咖啡在 4 週內變質變味。",
    pp3Sol: "解決方案：將可堆肥紙張或薄膜與植物基 EVOH 阻隔層（OTR < 0.1 cc/m²/天）共擠，達到與鋁箔相同的保鮮效果。",
    pp4Title: "04 / 回收系統拒收與分揀廢棄",
    pp4Desc: "多層混合塑料層壓件（如 PET/AL/PE）被分揀為市政垃圾並進行掩埋。",
    pp4Sol: "解決方案：轉向 Mono-PE 或 Mono-PP 單一聚合物層壓件，可被光學傳感器乾淨分揀並熔融再製成粒子。",
    pp5Title: "05 / 熱封窗口過窄導致漏封",
    pp5Desc: "生物降解薄膜的熔點低，熱封窗口窄，在標準熱封刀上易熔斷或封口不牢。",
    pp5Sol: "解決方案：開發具有寬熱運行窗口（110°C - 140°C）的專用熱封層，並精確設定壓合時間與溫度參數。"
  },
  es: {
    metaTitle: "La realidad del empaque ecológico: Compostabilidad vs. Recyclabilidad | Achieve Pack",
    metaDesc: "Un análisis de ingeniería honesto del panorama de empaques ecológicos. Investigación profunda sobre el escepticismo de compostabilidad, realidades de reciclabilidad y barreras de café B2B.",
    heroTitle: "Realidad del empaque ecológico: La honesta verdad",
    heroSubtitle: "Un desglose de ingeniería sobre el escepticismo de compostabilidad, parámetros de reciclabilidad y la frescura de preservación del café de alta barrera. Sin lavado verde, solo ciencia de materiales.",
    quickAnswerTitle: "Circularidad frente a Biodegradación",
    quickAnswerText: "El empaque sostenible enfrenta realidades de infraestructura física. Las bolsas compostables a menudo requieren instalaciones comerciales que la mayoría de los consumidores no tienen. Los defensores de la reciclabilidad argumentan que los monomateriales reciclados (como Mono-PE) ofrecen una huella ambiental superior al reintroducir polímeros en uso, mientras que los productos especiales (como el café fresco) requieren barreras EVOH de alta protección para evitar el desperdicio.",
    ryanNotebookTitle: "🔬 De la Libreta de Ingeniería de Ryan Wong",
    ryanNotebookText: "Durante una auditoría de empaque para un tostador de café orgánico, me mostraron con orgullo sus bolsas compostables certificadas por BPI. Sin embargo, cuando revisamos su instalación municipal de residuos local, descubrimos que rechazaban todos los plásticos compostables y los enviaban directamente al vertedero. Las máquinas de clasificación no podían distinguir el PLA del PET, y temían la contaminación. El cliente se sorprendió al saber que su bolsa 'ecológica' estaba generando metano. Les aconsejé cambiar a bolsas reciclables de Mono-PE con barreras EVOH para el reciclaje de tienda. Siempre audite la infraestructura local antes de seleccionar el material.",
    sec1Title: "1. Escepticismo sobre Compostabilidad: La Paradoja del Compostaje",
    sec1Text: "Los consumidores son cada vez más escépticos de la palabra 'compostable', y con razón. La mayoría de los empaques compostables no se descomponen en un montón de patio estándar. Los plásticos compostables estándar (como el PLA) requieren instalaciones de compostaje industrial con calor controlado (58°C) y microbios para descomponerse. Sin infraestructura local, las bolsas compostables terminan en vertederos, donde sufren descomposición anaeróbica y emiten metano. Por eso Achieve Pack prioriza los laminados compostables en el hogar (celulosa certificada y bio-PBS) que se degradan en jardines domésticos en 24 semanas.",
    sec2Title: "2. Reciclabilidad vs. Realidad: El Bucle de Circularidad",
    sec2Text: "Para lograr una circularidad real, debemos centrarnos en materiales compatibles con los equipos de clasificación existentes. Las bolsas multicapa estándar (PET/AL/PE) no son reciclables porque las capas no se pueden separar. Por el contrario, las bolsas de Mono-PE (un solo polímero) se aceptan en los programas de depósito en tienda. Sin embargo, la educación del consumidor sigue siendo un cuello de botella: si los consumidores arrojan Mono-PE en los contenedores domésticos estándar, las plantas de clasificación aún podrían desecharlos.",
    sec3Title: "3. Frescura del Café vs. Compromisos Ecológicos: La Barrera OTR",
    sec3Text: "Los tostadores de café enfrentan una decisión difícil: el oxígeno es el enemigo del café fresco. Las bolsas tradicionales de alta barrera utilizan capas de papel de aluminio, que ofrecen una protección excelente pero son completamente unrecyclables. Eliminar el aluminio reduce la vida útil. Nuestra solución de ingeniería es Mono-PE coextruido con recubrimientos de EVOH, que iguala la protección de barrera del aluminio (OTR < 0.1 cc/m²/día) mientras sigue siendo reciclable.",
    painPointsTitle: "5 Problemas de Empaque y Soluciones de Ingeniería",
    pp1Title: "01 / Acusaciones de Greenwashing",
    pp1Desc: "Las marcas que usan bolsas industriales en ciudades sin plantas adecuadas sufren crisis de reputación.",
    pp1Sol: "Solución: Usar etiquetas con doble certificación y cambiar a materiales compostables en el hogar (Home Compostable).",
    pp2Title: "02 / Degradación Prematura del Empaque",
    pp2Desc: "Los bioplásticos que pierden resistencia o se degradan en estantes del almacén antes de ser llenados.",
    pp2Sol: "Solución: Formular biopolímeros con barreras de humedad mejoradas y establecer pautas de almacenamiento seco (<30°C).",
    pp3Title: "03 / Pérdida de Frescura del Café",
    pp3Desc: "Las películas biodegradables estándar tienen altas tasas de transmisión de oxígeno, arruinando el café en 4 semanas.",
    pp3Sol: "Solución: Coextruir películas compostables con barreras EVOH de origen vegetal (OTR < 0.1 cc/m²/día) para emular el aluminio.",
    pp4Title: "04 / Rechazo en el Flujo de Reciclaje",
    pp4Desc: "Las bolsas con capas plásticas y metálicas combinadas se clasifican como basura ordinaria y van al vertedero.",
    pp4Sol: "Solución: Transicionar a laminaciones de polímero único de Mono-PE o Mono-PP que se clasifican limpiamente por sensores ópticos.",
    pp5Title: "05 / Ventana de Termosellado Inadecuada",
    pp5Desc: "Las películas biológicas tienen puntos de fusión bajos y estrechos, fallando o fundiéndose en las mordazas estándar.",
    pp5Sol: "Solución: Diseñar selladores con amplias ventanas operativas (110°C - 140°C) y fijar parámetros precisos de tiempo de termosellado."
  },
  fr: {
    metaTitle: "Réalité de l'emballage éco-responsable : Compostabilité vs Recyclabilité | Achieve Pack",
    metaDesc: "Une analyse d'ingénierie honnête sur l'emballage écologique. Étude détaillée du scepticisme sur la compostabilité, des réalités du recyclage et des barrières de café B2B.",
    heroTitle: "Réalité de l'emballage éco : La vérité honnête",
    heroSubtitle: "Une analyse d'ingénierie du scepticisme sur la compostabilité, des paramètres de recyclabilité et des barrières contre l'oxydation du café. Pas de greenwashing, de la science des matériaux.",
    quickAnswerTitle: "Circularité vs. Biodégradation",
    quickAnswerText: "L'emballage durable fait face aux réalités des infrastructures de tri. Les sachets compostables nécessitent souvent des usines industrielles inaccessibles pour la plupart des consommateurs. Les partisans du recyclage soulignent que les mono-matériaux (comme le Mono-PE) ont une meilleure empreinte écologique en réintroduisant les polymères dans l'économie, tandis que les produits spécifiques (comme le café frais) ont besoin de barrières EVOH pour éviter le gaspillage.",
    ryanNotebookTitle: "🔬 De l'Engineering Notebook de Ryan Wong",
    ryanNotebookText: "Lors d'un audit pour un torréfacteur bio, on m'a fièrement montré des sachets certifiés compostables industriellement. Pourtant, après vérification auprès du centre de tri local, nous avons appris qu'ils jetaient tous ces plastiques au centre d'enfouissement. Les trieurs optiques ne distinguaient pas le PLA du PET et craignaient les impuretés. Le client a découvert que son sachet 'propre' générait du méthane. Je leur ai conseillé de passer au sachet recyclable Mono-PE avec barrière EVOH pour les programmes de collecte. Auditez toujours la filière locale avant de choisir vos matériaux.",
    sec1Title: "1. Scepticisme sur la Compostabilité : Le Paradoxe du Compost",
    sec1Text: "Les consommateurs sont méfiants envers le terme 'compostable', et ils ont raison. La plupart des emballages ne se dégradent pas dans un composteur de jardin. Les plastiques compostables classiques (comme le PLA) requièrent des installations industrielles avec chaleur contrôlée (58°C). Sans filière locale, ces sacs finissent enfouis sous terre, générant du méthane. C'est pourquoi Achieve Pack privilégie les films certifiés Home Compostable (à base de cellulose et bio-PBS) qui se dégradent dans le jardin en 24 semaines.",
    sec2Title: "2. Recyclabilité vs. Réalité : La Boucle Circulaire",
    sec2Text: "Pour un recyclage efficace, il faut concevoir des sachets adaptés aux machines de tri. Les sacs multicouches (PET/AL/PE) sont impossibles à recycler car les couches ne se séparent pas. À l'inverse, les sachets Mono-PE (polymère unique) sont admis dans les points de collecte de films plastiques. L'éducation des clients reste un enjeu : s'ils jettent le Mono-PE dans la poubelle classique, il risque d'être rejeté.",
    sec3Title: "3. Fraîcheur du Café vs. Choix Écologique : La Barrière OTR",
    sec3Text: "Les torréfacteurs font face à un défi : l'oxygène dégrade le café. Les emballages barrière classiques utilisent de l'aluminium, excellent protecteur mais impossible à recycler. Supprimer l'aluminium réduit la durée de conservation. Notre solution technique est le Mono-PE co-extrudé avec enduction EVOH, qui égale les performances de l'aluminium (OTR < 0.1 cc/m²/jour) tout en restant recyclable.",
    painPointsTitle: "5 Problèmes d'Emballage & Solutions d'Ingénierie",
    pp1Title: "01 / Accusations de Greenwashing",
    pp1Desc: "Les marques qui utilisent des sacs compostables industriels dans des villes dépourvues de filière font face à des critiques de greenwashing.",
    pp1Sol: "Solution : Apposer des labels transparents et transitionner vers des matériaux certifiés compostables à domicile (Home Compostable).",
    pp2Title: "02 / Dégradation Prématurée en Stockage",
    pp2Desc: "Les bioplastiques qui perdent leur résistance ou se dégradent sur les étagères des entrepôts avant d'être remplis.",
    pp2Sol: "Solution : Formuler des biopolymères avec des barrières anti-humidité renforcées et définir des consignes de stockage sec (<30°C).",
    pp3Title: "03 / Perte de Fraîcheur du Café (Oxydation)",
    pp3Desc: "Les films biodégradables de base ont des taux de transmission d'oxygène élevés, rendant le café rassis en 4 semaines.",
    pp3Sol: "Solution : Co-extruder les films compostables avec des barrières EVOH végétales (OTR < 0.1 cc/m²/jour) pour égaler l'aluminium.",
    pp4Title: "04 / Rejet dans le Flux de Recyclage",
    pp4Desc: "Les films multicouches combinant plastique et métal sont triés comme déchets ménagers ordinaires et mis en décharge.",
    pp4Sol: "Solution : Utiliser des complexes monomatériaux en Mono-PE ou Mono-PP facilement triés par les capteurs optiques.",
    pp5Title: "05 / Fenêtre de Soudure Thermique Réduite",
    pp5Desc: "Les films biosourcés ont des points de fusion bas, fondant ou se déchirant sur les mâchoires de soudure classiques.",
    pp5Sol: "Solution : Développer des couches de scellage ayant des plages thermiques larges (110°C - 140°C) et régler précisément les temps de soudure."
  }
}

export default function EcoPackagingRealityPage() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const langKey = currentLang.startsWith('zh') ? 'zh' : currentLang.startsWith('fr') ? 'fr' : currentLang.startsWith('es') ? 'es' : 'en'
  const lt = localTranslations[langKey]
  const p = 'seoPages.pages.ecoPackagingReality'

  const faqs = [
    {
      question: t(`${p}.faqs.0.question`, "Why do eco-friendly communities favor Recyclable Mono-PE over novel bioplastics?"),
      answer: t(`${p}.faqs.0.answer`, "Zero-waste and eco-friendly communities favor Mono-PE (single-polymer recyclable plastic) because it operates cleanly within existing municipal recycling systems. Many novel bio-plastics (like PLA or PBS) cannot be sorted easily by current infrared optical sorters. As a result, they are flagged as contaminants and discarded directly into landfills, whereas Mono-PE can be converted back into plastic pellets, supporting a true circular loop.")
    },
    {
      question: t(`${p}.faqs.1.question`, "What is the difference between Industrial Compostable and Home Compostable packaging?"),
      answer: t(`${p}.faqs.1.answer`, "Industrial compostable packaging (certified EN 13432 or ASTM D6400) requires high-temperature commercial facilities (approx. 58°C) with managed hydration and aeration to break down. In contrast, Home Compostable packaging (certified TUV OK Compost Home) is formulated using highly sensitive cellulose or bio-PBS liners that degrade naturally inside regular backyard soil and garden compost piles (approx. 20-30°C) within 24 weeks.")
    },
    {
      question: t(`${p}.faqs.2.question`, "How does Achieve Pack resolve the coffee packaging freshness vs. eco-friendliness tension?"),
      answer: t(`${p}.faqs.2.answer`, "We resolve this tension by replacing composite foil laminates with advanced high-barrier single materials. Our Mono-PE recyclable bags are co-extruded with EVOH (ethylene-vinyl alcohol copolymer), providing an oxygen transmission rate (OTR) of less than 0.1 cc/m²/day—matching traditional foil freshness without rendering the bag unrecyclable. For compostable options, we utilize bio-EVOH barriers sourced from plant starches.")
    }
  ]

  const sections = [
    {
      id: "engineers-log",
      title: lt.ryanNotebookTitle,
      icon: <Leaf className="h-6 w-6 text-emerald-600" />,
      content: (
        <div className="bg-emerald-955 text-emerald-100 p-6 rounded-2xl border border-emerald-900 text-left">
          <p className="text-emerald-400 text-xs font-semibold mb-2 uppercase tracking-wide">
            {langKey === 'zh' ? '工程師備忘錄' : 'Engineering Memo'}
          </p>
          <p className="text-emerald-100 text-xs leading-relaxed italic">
            "{lt.ryanNotebookText}"
          </p>
        </div>
      )
    },
    {
      id: "compostability-skepticism",
      title: lt.sec1Title,
      icon: <Trash2 className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-4 text-left">
          <p className="text-neutral-700 text-xs leading-relaxed">
            {lt.sec1Text}
          </p>
          <div className="my-6">
            <ClickableImage 
              src="/imgs/knowledge/eco-packaging-reality.png" 
              alt="Compostable Kraft and Recyclable Mono-PE coffee bags by Achieve Pack"
              className="w-full max-w-lg rounded-xl shadow-md border"
            />
          </div>
        </div>
      )
    },
    {
      id: "recyclability-reality",
      title: lt.sec2Title,
      icon: <RefreshCw className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-4 text-left">
          <p className="text-neutral-700 text-xs leading-relaxed">
            {lt.sec2Text}
          </p>
          <div className="my-6">
            <ClickableImage 
              src="/imgs/knowledge/pcr-recycled-pouch.png" 
              alt="Mono-PE single polymer recyclable structures shown under optical scanning by Achieve Pack"
              className="w-full max-w-lg rounded-xl shadow-md border"
            />
          </div>
        </div>
      )
    },
    {
      id: "pain-points-solved",
      title: lt.painPointsTitle,
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
      content: (
        <div className="space-y-6 text-left">
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: lt.pp1Title, desc: lt.pp1Desc, sol: lt.pp1Sol },
              { title: lt.pp2Title, desc: lt.pp2Desc, sol: lt.pp2Sol },
              { title: lt.pp3Title, desc: lt.pp3Desc, sol: lt.pp3Sol },
              { title: lt.pp4Title, desc: lt.pp4Desc, sol: lt.pp4Sol },
              { title: lt.pp5Title, desc: lt.pp5Desc, sol: lt.pp5Sol }
            ].map((card, i) => (
              <div key={i} className="p-5 border border-neutral-200 rounded-xl bg-white shadow-sm hover:border-emerald-300 transition">
                <h4 className="text-sm font-bold text-neutral-900 mb-1">{card.title}</h4>
                <p className="text-neutral-600 text-xs mb-3">{card.desc}</p>
                <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
                  {card.sol}
                </div>
              </div>
            ))}
          </div>
          <div className="my-6">
            <ClickableImage 
              src="/imgs/knowledge/compostable-packaging-pain-points.jpg" 
              alt="5 common eco packaging reality pain points and engineering solutions infographic"
              className="w-full max-w-lg rounded-xl shadow-md border"
            />
          </div>
        </div>
      )
    },
    {
      id: "freshness-barrier",
      title: lt.sec3Title,
      icon: <Coffee className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-4 text-left">
          <p className="text-neutral-700 text-xs leading-relaxed">
            {lt.sec3Text}
          </p>
        </div>
      )
    }
  ]

  return (
    <>
      <Helmet>
        <title>{lt.metaTitle}</title>
        <meta name="description" content={lt.metaDesc} />
        <meta name="keywords" content="compostable packaging skepticism, recyclable mono-pe, compostable coffee bags, coffee freshness barrier, post-consumer recycled pcr, packaging transparency, eco-friendly coffee packaging" />
        <link rel="canonical" href="https://achievepack.com/knowledge/eco-packaging-reality" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title={lt.metaTitle}
        description={lt.metaDesc}
        heroTitle={lt.heroTitle}
        heroSubtitle={lt.heroSubtitle}
        heroImage="/imgs/knowledge/eco-packaging-reality.png"
        introSummary={lt.quickAnswerText}
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        ctaTitle="Achieve Sustainable Packaging Circularity"
        ctaDescription="Book a quick 30-minute consultation with our packaging specialists to review material compliance and order free samples."
      />

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <RelatedProductsShowcase productIds={['compostable-stand-up-pouches', 'clear-matte-zipper-stand-up-pouch']} />
      </div>
    </>
  )
}
