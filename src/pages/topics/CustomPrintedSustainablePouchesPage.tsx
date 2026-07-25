import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Printer, Calendar, MessageCircle, Target, ShoppingBag, Beaker } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const localTranslations = {
  en: {
    metaTitle: "Custom Printed Sustainable Pouches & Digital Printing | Achieve Pack",
    metaDesc: "Custom printed eco-friendly pouches with HP Indigo 25K digital & G7 rotogravure printing. Food-safe, compostable inks with low MOQ & zero plate fee options.",
    heroTitle: "Custom Printed Sustainable Pouches Guide",
    heroTitle2: "Custom Printed Sustainable Pouches & Printing Technology",
    heroSubtitle: "G7 Master Certified | Digital & Rotogravure | Food Safe Inks | Zero Plate Options",
    introSummary: "Your packaging is your most visible sustainability statement. This guide outlines how we use advanced digital and rotogravure technology to deliver ultra-high-resolution branding on eco-friendly substrates—ensuring your identity is as pure as your product.",
    sec1Title: "Intersection of Art & Packaging Science",
    sec1Intro: "Custom printing is the final layer of your brand's sustainable narrative. In 2026, a 'sustainable' pouch is only effective if its visual communication is clear, accurate, and legally compliant.",
    conflictTitle: "The Branding Conflict",
    conflictItem1: "High plate costs for small brands",
    conflictItem2: "Color inconsistency across substrates",
    conflictItem3: "Lack of clear recycling instructions",
    conflictItem4: "Heavy solvent-based ink usage",
    standardTitle: "The Achieve Pack Standard",
    standardItem1: "HP Indigo 25K Digital Printing",
    standardItem2: "G7 Master Certified Color Logic",
    standardItem3: "Food-Safe & Compostable Inks",
    standardItem4: "Zero Plate Fees for Startups",
    sec1Body: "At Achieve Pack, we treat custom printing as a technical deliverable. From Delta-E (ΔE) color deviation control to NIR-sortable ink systems, we ensure your brand stands out while remaining 100% compliant with global circularity mandates.",
    sec2Title: "Advanced Printing Methodology",
    sec2Intro: "The choice of printing method depends on your brand scale and SKU complexity. We provide both technologies under one roof to ensure optimal efficiency.",
    digitalTitle: "Digital (HP Indigo 25K)",
    digitalTarget: "Best for: Startups, seasonal SKUs, and high-complexity designs.",
    digitalItem1: "No plate fees or setup waste",
    digitalItem2: "1200 DPI photographic resolution",
    digitalItem3: "100% Variable data (VDP) capable",
    digitalItem4: "3-4 week lead times",
    rotoTitle: "High-Speed Rotogravure",
    rotoTarget: "Best for: Enterprise brands, high-volume (20k+) static SKUs.",
    rotoItem1: "Lowest per-unit cost at scale",
    rotoItem2: "Superior ink density and solid colors",
    rotoItem3: "Specialized metallic and neon effects",
    rotoItem4: "Copper-plate precision",
    img1Caption: "EEAT Insight: G7 Master Certification ensures color consistency across all material substrates",
    sec3Title: "The Science of Sustainable Inks",
    sec3Intro: "Inks are a critical component of Material Health. We utilize advanced ink systems that are designed for food safety and the circular economy.",
    inkTechTitle: "Advanced Ink Tech",
    ink1Title: "HP ElectroInk (Food Safe)",
    ink1Desc: "Meets the strictest FDA/EFSA regulations for low-migration food contact.",
    ink2Title: "NIR-Sortable Black",
    ink2Desc: "Specialized inks that allow black packaging to be correctly sorted in recycling streams.",
    ink3Title: "Certified Compostable Inks",
    ink3Desc: "Inks that break down fully without soil toxicity (EN 13432 compliant).",
    colorTitle: "Color Matching & ΔE Control",
    colorDesc: "We maintain a Delta-E (ΔE) deviation of < 2.0, ensuring your brand's visual identity remains invariant across different light sources and material types. Our laboratory utilizes spectrophotometry on every batch to verify this precision.",
    ctaTitle: "Expert Printing. Sustainable Execution.",
    ctaDesc: "Ready to design your custom sustainable pouches? Our technical team will help you optimize your artwork for our advanced print lines today.",
    btnCalendly: "Book Print Strategy Session",
    btnStore: "Order Finish Samples",
    ctaFooter: "G7 CERTIFIED • FOOD SAFE • NO PLATE FEES • LOW MOQ (500)",
    faq1Q: "Do you offer soft-touch or spot-UV finishes?",
    faq1A: "Yes. Both our digital and rotogravure lines can apply premium tactile finishes like soft-touch matte, high-gloss, and spot-UV varnishes to enhance your unboxing experience.",
    faq2Q: "How do I ensure my colors are accurate?",
    faq2A: "We recommend specifying Pantone Solid Coated (PMS) codes. We use G7 Master Certified processes and spectrophotometer verification to match your brand colors with extreme precision.",
    faq3Q: "Can I print on the bottom or side gussets?",
    faq3A: "Absolutely. We offer 360-degree printing, allowing you to utilize every square inch of your pouch for branding, storytelling, or regulatory information.",
    faq4Q: "What is the lead time for custom printed pouches?",
    faq4A: "Digital orders typically ship in 3-4 weeks. High-speed rotogravure orders, which require plate manufacturing, ship in 8-10 weeks."
  },
  es: {
    metaTitle: "Bolsas Sostenibles Impresas Personalizadas | Achieve Pack",
    metaDesc: "Bolsas ecológicas impresas a medida con tecnología digital HP Indigo 25K y rotograbado G7. Tintas aptas para alimentos y compostables con bajo MOQ y sin costo de placa.",
    heroTitle: "Guía de Bolsas Sostenibles Impresas Personalizadas",
    heroTitle2: "Bolsas Sostenibles Impresas Personalizadas y Tecnología de Impresión",
    heroSubtitle: "Certificado G7 Master | Digital y Rotograbado | Tintas Aptas para Alimentos | Opción Sin Placa",
    introSummary: "Su empaque es su declaración de sostenibilidad más visible. Esta guía detalla cómo utilizamos tecnología digital y de rotograbado avanzada para entregar gráficos de ultra alta resolución sobre sustratos ecológicos.",
    sec1Title: "Intersección del Arte y la Ciencia del Empaque",
    sec1Intro: "La impresión personalizada es la capa final de la narrativa sostenible de su marca. En 2026, una bolsa 'sostenible' solo es efectiva si su comunicación visual es clara, precisa y cumple con la ley.",
    conflictTitle: "El Conflicto de Marca",
    conflictItem1: "Altos costos de placas para marcas pequeñas",
    conflictItem2: "Inconsistencia de color entre diferentes sustratos",
    conflictItem3: "Falta de instrucciones claras de reciclaje",
    conflictItem4: "Uso intensivo de tintas a base de solventes",
    standardTitle: "El Estándar Achieve Pack",
    standardItem1: "Impresión Digital HP Indigo 25K",
    standardItem2: "Lógica de Color Certificada G7 Master",
    standardItem3: "Tintas Aptas para Alimentos y Compostables",
    standardItem4: "Cero Costo de Placas para Startups",
    sec1Body: "En Achieve Pack tratamos la impresión personalizada como un entregable técnico. Desde el control de desviación de color Delta-E (ΔE) hasta sistemas de tinta clasificables por NIR, nos aseguramos de que su marca destaque mientras cumple al 100% con los mandatos globales.",
    sec2Title: "Metodología de Impresión Avanzada",
    sec2Intro: "La elección del método de impresión depende de la escala de su marca y la complejidad de sus SKU. Ofrecemos ambas tecnologías bajo un mismo techo.",
    digitalTitle: "Digital (HP Indigo 25K)",
    digitalTarget: "Ideal para: Startups, SKU de temporada y diseños de alta complejidad.",
    digitalItem1: "Sin costos de placas ni desperdicio de configuración",
    digitalItem2: "Resolución fotográfica de 1200 DPI",
    digitalItem3: "100% Capaz de datos variables (VDP)",
    digitalItem4: "Tiempos de entrega de 3 a 4 semanas",
    rotoTitle: "Rotograbado de Alta Velocidad",
    rotoTarget: "Ideal para: Marcas consolidadas, SKU estáticos de gran volumen (+20k).",
    rotoItem1: "Menor costo unitario a escala",
    rotoItem2: "Densidad de tinta superior y colores sólidos",
    rotoItem3: "Efectos metálicos y neón especializados",
    rotoItem4: "Precisión de grabado en cobre",
    img1Caption: "Visión EEAT: La Certificación G7 Master garantiza la consistencia del color en todos los sustratos",
    sec3Title: "La Ciencia de las Tintas Sostenibles",
    sec3Intro: "Las tintas son un componente crítico de la salud del material. Utilizamos sistemas de tinta avanzados diseñados para la seguridad alimentaria y la economía circular.",
    inkTechTitle: "Tecnología de Tintas Avanzada",
    ink1Title: "HP ElectroInk (Apta para Alimentos)",
    ink1Desc: "Cumple con las regulaciones más estrictas de la FDA/EFSA para contacto con alimentos de baja migración.",
    ink2Title: "Negro Clasificable por NIR",
    ink2Desc: "Tintas especializadas que permiten que los empaques negros se clasifiquen correctamente en los flujos de reciclaje.",
    ink3Title: "Tintas Compostables Certificadas",
    ink3Desc: "Tintas que se descomponen completamente sin toxicidad para el suelo (conforme a EN 13432).",
    colorTitle: "Coincidencia de Color y Control ΔE",
    colorDesc: "Mantenemos una desviación Delta-E (ΔE) < 2.0, asegurando que la identidad visual de su marca se mantenga invariable frente a diferentes fuentes de luz. Nuestro laboratorio utiliza espectrofotometría en cada lote.",
    ctaTitle: "Impresión Experta. Ejecución Sostenible.",
    ctaDesc: "¿Listo para diseñar sus bolsas sostenibles personalizadas? Nuestro equipo técnico le ayudará a optimizar sus archivos de diseño hoy mismo.",
    btnCalendly: "Reservar Sesión de Estrategia de Impresión",
    btnStore: "Solicitar Muestras de Acabado",
    ctaFooter: "CERTIFICADO G7 • APTO PARA ALIMENTOS • SIN PLACAS • BAJO MOQ (500)",
    faq1Q: "¿Ofrecen acabados de tacto suave (soft-touch) o barniz UV localizado?",
    faq1A: "Sí. Tanto nuestras líneas digitales como de rotograbado pueden aplicar acabados táctiles premium como mate suave, alto brillo y barnices UV localizados.",
    faq2Q: "¿Cómo aseguro que mis colores sean precisos?",
    faq2A: "Recomendamos especificar códigos Pantone Solid Coated (PMS). Utilizamos procesos certificados G7 Master y espectrofotómetros para igualar sus colores de marca.",
    faq3Q: "¿Puedo imprimir en los fuelles inferiores o laterales?",
    faq3A: "Absolutamente. Ofrecemos impresión de 360 grados, lo que le permite utilizar cada pulgada cuadrada de su bolsa para branding o información normativa.",
    faq4Q: "¿Cuál es el tiempo de entrega para bolsas impresas personalizadas?",
    faq4A: "Los pedidos digitales suelen enviarse en 3 a 4 semanas. Los pedidos de rotograbado de alta velocidad se envían en 8 a 10 semanas."
  },
  fr: {
    metaTitle: "Sachets Éco-Conçus Imprimés Sur Mesure | Achieve Pack",
    metaDesc: "Impression sur mesure de sachets durables via HP Indigo 25K numérique & héliogravure G7. Encres alimentaires et compostables, faible MOQ et sans frais de cliché.",
    heroTitle: "Guide des Sachets Éco-Conçus Imprimés Sur Mesure",
    heroTitle2: "Technologie d'Impression & Sachets Éco-Conçus Imprimés Sur Mesure",
    heroSubtitle: "Certifié G7 Master | Numérique & Héliogravure | Encres Alimentaires | Sans Frais de Cliché",
    introSummary: "Votre emballage est votre vecteur de communication écologique le plus visible. Ce guide détaille comment nous utilisons des technologies numériques et d'héliogravure avancées pour garantir une impression ultra haute définition sur des substrats écologiques.",
    sec1Title: "À la Croisée de l'Art et de la Science de l'Emballage",
    sec1Intro: "L'impression sur mesure est la touche finale du récit écologique de votre marque. En 2026, un sachet éco-conçu n'est efficace que si sa communication visuelle est claire, précise et conforme aux réglementations.",
    conflictTitle: "Le Conflit d'Image de Marque",
    conflictItem1: "Coûts de clichés élevés pour les petites marques",
    conflictItem2: "Inconsistance des couleurs selon les substrats",
    conflictItem3: "Manque d'instructions de recyclage claires",
    conflictItem4: "Utilisation d'encres lourdes à base de solvants",
    standardTitle: "Le Standard Achieve Pack",
    standardItem1: "Impression Numérique HP Indigo 25K",
    standardItem2: "Gestion des Couleurs Certifiée G7 Master",
    standardItem3: "Encres Alimentaires & Compostables",
    standardItem4: "Zéro Frais de Cliché pour les Startups",
    sec1Body: "Chez Achieve Pack, nous traitons l'impression sur mesure comme un livrable technique. Du contrôle de la déviation chromatique Delta-E (ΔE) aux encres triables par NIR, nous veillons à ce que votre marque se distingue tout en respectant 100% des exigences de l'économie circulaire.",
    sec2Title: "Méthodologie d'Impression Avancée",
    sec2Intro: "Le choix de la méthode d'impression dépend du volume de votre marque et de la complexité de vos références. Nous proposons les deux technologies sous un même toit.",
    digitalTitle: "Numérique (HP Indigo 25K)",
    digitalTarget: "Idéal pour : Startups, séries saisonnières et designs à haute complexité.",
    digitalItem1: "Sans frais de cliché ni gaspillage de calage",
    digitalItem2: "Résolution photographique de 1200 DPI",
    digitalItem3: "Données variables 100% prises en charge (VDP)",
    digitalItem4: "Délais de livraison de 3 à 4 semaines",
    rotoTitle: "Héliogravure Haute Vitesse",
    rotoTarget: "Idéal pour : Grandes marques, gros volumes (+20k) statiques.",
    rotoItem1: "Coût unitaire le plus bas à grande échelle",
    rotoItem2: "Densité d'encre supérieure et aplats parfaits",
    rotoItem3: "Effets métallisés et néons spécialisés",
    rotoItem4: "Précision de la gravure sur cuivre",
    img1Caption: "Insight EEAT : La certification G7 Master garantit la cohérence des couleurs sur tous les substrats",
    sec3Title: "La Science des Encres Éco-Conçues",
    sec3Intro: "Les encres sont un élément essentiel de la santé des matériaux. Nous utilisons des encres de pointe conçues pour la sécurité alimentaire et l'économie circulaire.",
    inkTechTitle: "Technologie d'Encre Avancée",
    ink1Title: "HP ElectroInk (Alimentaire)",
    ink1Desc: "Conforme aux réglementations FDA/EFSA les plus strictes pour le contact alimentaire à faible migration.",
    ink2Title: "Noir Triable NIR",
    ink2Desc: "Encres spécialisées permettant au packaging noir d'être correctement détecté et trié dans le recyclage.",
    ink3Title: "Encres Certifiées Compostables",
    ink3Desc: "Encres se dégradant entièrement sans toxicité pour le sol (conforme EN 13432).",
    colorTitle: "Correspondance des Couleurs & Contrôle ΔE",
    colorDesc: "Nous maintenons un écart Delta-E (ΔE) < 2,0, garantissant que l'identité visuelle de votre marque reste constante sous différentes sources lumineuses. Chaque lot est vérifié par spectrométrie en laboratoire.",
    ctaTitle: "Impression Expert. Exécution Durable.",
    ctaDesc: "Prêt à concevoir vos sachets imprimés sur mesure ? Notre équipe technique vous aide dès aujourd'hui à optimiser vos fichiers graphiques.",
    btnCalendly: "Réserver une Session Stratégique Impression",
    btnStore: "Commander des Échantillons de Finitions",
    ctaFooter: "CERTIFIÉ G7 • ALIMENTAIRE • SANS CLICHÉ • FAIBLE MOQ (500)",
    faq1Q: "Proposez-vous des finitions soft-touch ou vernis sélectif UV ?",
    faq1A: "Oui. Nos lignes numériques et héliogravure permettent d'appliquer des finitions tactiles haut de gamme comme le mat doux, le brillant intense et le vernis sélectif UV.",
    faq2Q: "Comment garantir la précision de mes couleurs ?",
    faq2A: "Nous recommandons d'indiquer les codes Pantone Solid Coated (PMS). Nous utilisons la certification G7 Master et le contrôle spectrophotométrique.",
    faq3Q: "Puis-je imprimer sur les soufflets inférieurs ou latéraux ?",
    faq3A: "Absolument. Nous proposons une impression à 360 degrés, vous permettant d'exploiter chaque centimètre carré de votre sachet.",
    faq4Q: "Quel est le délai de livraison pour des sachets imprimés sur mesure ?",
    faq4A: "Les commandes numériques sont expédiées en 3 à 4 semaines. L'héliogravure haute vitesse nécessite 8 à 10 semaines."
  },
  'zh-tw': {
    metaTitle: "客製化印刷永續包裝袋與數位印刷技術指南 | Achieve Pack",
    metaDesc: "結合 HP Indigo 25K 數位印刷與 G7 凹版印刷技術的客製化永續軟包裝袋。使用食品級與可堆肥墨水，提供低起訂量與免版費方案。",
    heroTitle: "客製化印刷永續包裝袋與色彩工程指南",
    heroTitle2: "客製化印刷永續包裝袋與先進印刷技術",
    heroSubtitle: "G7 Master 認證 | 數位與凹版印刷 | 食品級認證墨水 | 免版費方案",
    introSummary: "包裝是您品牌永續理念最直觀的展現。本指南將介紹我們如何運用先進的數位與凹版印刷技術，在環保基材上呈現超高畫質的品牌視覺，確保您的品牌形象與產品品質一樣純粹品質出眾。",
    sec1Title: "藝術美學與包裝科學的交會",
    sec1Intro: "客製化印刷是品牌永續敘事的最後一哩路。在 2026 年，唯有視覺溝通清晰、精確且符合法規時，一個「永續」包裝袋才能發揮最大的商業價值。",
    conflictTitle: "傳統印刷的品牌困境",
    conflictItem1: "初創品牌面臨高昂的印版版費壓力",
    conflictItem2: "跨材質印刷導致色彩不一致與色差問題",
    conflictItem3: "缺乏清晰易懂的回收標示與規範指示",
    conflictItem4: "大量使用重度溶劑型傳統印刷墨水",
    standardTitle: "Achieve Pack 工程級印刷標準",
    standardItem1: "HP Indigo 25K 頂級數位印刷技術",
    standardItem2: "G7 Master 權威認證色彩管理邏輯",
    standardItem3: "通過食品級與可堆肥雙認證安全墨水",
    standardItem4: "初創與多 SKU 品牌享零版費方案",
    sec1Body: "在 Achieve Pack，我們將客製化印刷視為可量化的技術指標。從 Delta-E (ΔE) 色差精確控制到近紅外線 (NIR) 可分選黑墨系統，我們確保您的品牌在市場中脫穎而出，同時 100% 符合全球循環經濟法規。",
    sec2Title: "先進印刷工藝與技術對比",
    sec2Intro: "選擇最適的印刷工藝取決於您的品牌規模與 SKU 複雜度。我們在同一廠區內提供數位與凹版兩種工藝，確保最高的生產效率。",
    digitalTitle: "數位印刷 (HP Indigo 25K)",
    digitalTarget: "最佳適用：初創品牌、季節性 SKU 及高複雜度圖案設計。",
    digitalItem1: "免製版費，零開機排版廢料",
    digitalItem2: "1200 DPI 照相級極致解析度",
    digitalItem3: "100% 支援可變數據印刷 (VDP)",
    digitalItem4: "交期僅需 3-4 週",
    rotoTitle: "高速凹版印刷",
    rotoTarget: "最佳適用：企業級品牌、大批量 (20,000+) 固定 SKU。",
    rotoItem1: "大規模量產下單件成本最低",
    rotoItem2: "卓越的墨層飽和度與實色表現",
    rotoItem3: "支援特種金屬光澤與螢光印刷效果",
    rotoItem4: "精密紫銅電雕版技術",
    img1Caption: "EEAT 專業洞察：G7 Master 認證確保色彩在不同包裝基材上保持高度一致性",
    sec3Title: "永續環保墨水的科學技術",
    sec3Intro: "印刷墨水是材料健康（Material Health）的核心環節。我們採用專為食品安全與循環經濟設計的先進墨水系統。",
    inkTechTitle: "先進墨水技術應用",
    ink1Title: "HP ElectroInk (食品級電子墨水)",
    ink1Desc: "符合美國 FDA 及歐洲 EFSA 最嚴格的低遷移食品接觸標準。",
    ink2Title: "NIR 可光譜分選黑墨",
    ink2Desc: "特殊光譜墨水，確保黑色包裝在自動化光學回收分選線中能被正確識別與回收。",
    ink3Title: "認證可堆肥環保墨水",
    ink3Desc: "可在堆肥環境中完全降解且無土壤毒性殘留（符合 EN 13432 標準）。",
    colorTitle: "精準對色與 Delta-E (ΔE) 色差控制",
    colorDesc: "我們將色差控制在 Delta-E (ΔE) < 2.0 以內，確保您的品牌視覺在不同光源與包裝材質上記錄一致。我們的品管實驗室對每批次產品進行分光光度計監測驗證。",
    ctaTitle: "專業印刷技術．永續包裝執行",
    ctaDesc: "準備好設計您的客製化永續包裝袋了嗎？我們的工程團隊今天即可協助您優化向量圖稿與印前設定。",
    btnCalendly: "預約印刷策略與圖稿諮詢",
    btnStore: "訂購質感飾面樣品盒",
    ctaFooter: "G7 權威認證 • 食品級安全 • 免版費選項 • 超低起訂量 (500)",
    faq1Q: "貴公司是否提供觸感柔霧 (Soft-Touch) 或局部 UV (Spot-UV) 上光飾面？",
    faq1A: "是的。我們的數位與凹版印刷線均可施加高質感觸感飾面，包括絲絨柔霧面、高光澤亮面及局部 Spot-UV 亮光，顯著提升開箱質感。",
    faq2Q: "我該如何確保產品色彩與品牌標準色一致？",
    faq2A: "我們建議提供 Pantone Solid Coated (PMS) 標準色號。我們透過 G7 Master 驗證工藝與分光光度計進行精確對色。",
    faq3Q: "可以在袋身底部或側邊風琴處進行印刷嗎？",
    faq3A: "完全可以。我們提供 360 度全景印刷，讓您能充分利用袋身的每一吋空間展示品牌故事與法規標示。",
    faq4Q: "客製化印刷包裝袋的生產交期需要多久？",
    faq4A: "數位印刷訂單通常在 3-4 週內出貨；需要開版的高速凹版印刷訂單則需要 8-10 週。"
  }
}

const CustomPrintedSustainablePouchesPage: React.FC = () => {
  const { i18n } = useTranslation()
  const rawLang = (i18n.language || 'en').toLowerCase()
  const currentLang = (rawLang === 'zh-tw' || rawLang === 'zh-hant' || rawLang === 'zh' || rawLang === 'zh_tw') ? 'zh-tw' : (rawLang === 'fr' ? 'fr' : (rawLang === 'es' ? 'es' : 'en'))
  const tLocal = localTranslations[currentLang] || localTranslations.en

  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: tLocal.sec1Title,
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {tLocal.sec1Intro}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-600">
                <h4 className="font-semibold text-purple-800">{tLocal.conflictTitle}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• {tLocal.conflictItem1}</li>
                  <li>• {tLocal.conflictItem2}</li>
                  <li>• {tLocal.conflictItem3}</li>
                  <li>• {tLocal.conflictItem4}</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-800">{tLocal.standardTitle}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• {tLocal.standardItem1}</li>
                  <li>• {tLocal.standardItem2}</li>
                  <li>• {tLocal.standardItem3}</li>
                  <li>• {tLocal.standardItem4}</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            {tLocal.sec1Body}
          </p>
        </div>
      )
    },
    {
      id: 'print-methodology',
      title: tLocal.sec2Title,
      icon: <Printer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {tLocal.sec2Intro}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-2">{tLocal.digitalTitle}</h4>
              <p className="text-sm text-neutral-600 mb-4">{tLocal.digitalTarget}</p>
              <ul className="text-xs space-y-1 text-neutral-500">
                <li>• {tLocal.digitalItem1}</li>
                <li>• {tLocal.digitalItem2}</li>
                <li>• {tLocal.digitalItem3}</li>
                <li>• {tLocal.digitalItem4}</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-2">{tLocal.rotoTitle}</h4>
              <p className="text-sm text-neutral-600 mb-4">{tLocal.rotoTarget}</p>
              <ul className="text-xs space-y-1 text-neutral-500">
                <li>• {tLocal.rotoItem1}</li>
                <li>• {tLocal.rotoItem2}</li>
                <li>• {tLocal.rotoItem3}</li>
                <li>• {tLocal.rotoItem4}</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp" 
              alt="High definition custom printed pouch" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption={tLocal.img1Caption}
            />
          </div>
        </div>
      )
    },
    {
      id: 'sustainable-inks',
      title: tLocal.sec3Title,
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {tLocal.sec3Intro}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">{tLocal.inkTechTitle}</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{tLocal.ink1Title}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{tLocal.ink1Desc}</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{tLocal.ink2Title}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{tLocal.ink2Desc}</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{tLocal.ink3Title}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{tLocal.ink3Desc}</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">{tLocal.colorTitle}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {tLocal.colorDesc}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: tLocal.ctaTitle,
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-purple-800 to-indigo-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">{tLocal.ctaTitle}</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {tLocal.ctaDesc}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-purple-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              {tLocal.btnCalendly}
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              {tLocal.btnStore}
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            {tLocal.ctaFooter}
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: tLocal.faq1Q,
      answer: tLocal.faq1A
    },
    {
      question: tLocal.faq2Q,
      answer: tLocal.faq2A
    },
    {
      question: tLocal.faq3Q,
      answer: tLocal.faq3A
    },
    {
      question: tLocal.faq4Q,
      answer: tLocal.faq4A
    }
  ]

  return (
    <>
      <Helmet>
        <title>{tLocal.metaTitle}</title>
        <meta name="description" content={tLocal.metaDesc} />
        <link rel="canonical" href="https://achievepack.com/topics/custom-printed-sustainable-pouches" />
        <meta name="keywords" content="custom printed pouches, sustainable pouch printing, digital pouch printing, G7 color matching, food safe inks, custom branded sustainable packaging" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#4c1d95"
        title={tLocal.heroTitle}
        description={tLocal.metaDesc}
        keywords={['custom printed pouches', 'sustainable branding', 'packaging design']}
        heroTitle={tLocal.heroTitle2}
        heroSubtitle={tLocal.heroSubtitle}
        introSummary={tLocal.introSummary}
        sections={sections}
        faqs={faqs}
        schemaType="Service"
        heroImage="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp"
      />
    </>
  )
}

export default CustomPrintedSustainablePouchesPage

