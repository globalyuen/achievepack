import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Target, Sparkles, Shield, Eye, Calendar, 
  Package, CheckCircle2, Layers, Info, Check, HelpCircle
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
  "title": "Ai Packaging Layered Assets",
  "description": "Premium flexible packaging engineering and solutions.",
  "heroTitle": "Ai Packaging Layered Assets",
  "heroSubtitle": "Advanced Packaging Solutions",
  "introSummary": "Discover the engineering behind this packaging format.",
  "aeoSummary": "Learn more about optimal packaging methodologies.",
  "eeatDetails": "Engineered by Achieve Pack.",
  "empathyHook": "You've designed a stunning metallic bag with spot gloss highlights, but when the factory asks for layered vectors, you realize your designer only provided a flattened JPEG. Now, your launch is delayed by two weeks while you frantically try to rebuild the file. We feel that pain. Flattened files are the enemy of high-end packaging. Without separated layers for white ink, spot UV, and CMYK, the printers are flying blind, and your premium finishes will look like a cheap sticker. Proper layered assets are the key to unlocking true packaging luxury.",
  "section1Title": "Understanding the Process",
  "section1Text": "A comprehensive look at the structural and material science involved.",
  "section2Title": "Key Advantages",
  "section2Log": "Optimized for maximum efficiency and brand impact.",
  "point1Title": "Metallic Films Looking Dull",
  "point1Desc": "Printing CMYK directly onto metallic film without a white underbase creates muddy, dark colors.",
  "point1Sol": "Create a dedicated 'White Ink' spot color layer to block the metallic effect behind text and graphics.",
  "point2Title": "Misaligned Spot UV Gloss",
  "point2Desc": "Spot gloss varnishes are slightly offset from the printed logo because the layers were not separated.",
  "point2Sol": "Provide a vector-based 'Spot UV' layer set to overprint, perfectly aligned with the underlying CMYK artwork.",
  "point3Title": "Blurry Text and Barcodes",
  "point3Desc": "Text rasterized into a flattened image loses its crispness during plate engraving.",
  "point3Sol": "Keep all text, barcodes, and logos as live, un-rasterized vector layers (AI, EPS, or PDF).",
  "point4Title": "Inability to Edit Dielines",
  "point4Desc": "The structural cut line is merged with the artwork, causing the printer to accidentally print the black outline on the bag.",
  "point4Sol": "Isolate the structural dieline on a locked, non-printing top layer named 'Dieline'.",
  "point5Title": "Incorrect Pantones on Foil",
  "point5Desc": "Brand colors shift drastically when printed on foil without proper color profiling.",
  "point5Sol": "Use dedicated Pantone (PMS) spot color layers instead of CMYK builds for critical brand assets.",
  "compTitle": "Flattened Art vs. Layered Pre-Press Architecture",
  "compDesc": "How separating your digital assets unlocks premium physical finishes:",
  "faq1Q": "Why do I need a white ink layer?",
  "faq1A": "If printing on clear, metallic, or Kraft materials, printers need a white ink layer underneath your colors so they remain vibrant and opaque.",
  "faq2Q": "What is a vector file?",
  "faq2A": "A vector file (like .AI or .SVG) uses math to draw shapes, meaning it can be scaled infinitely without losing quality or becoming blurry like a JPEG.",
  "faq3Q": "Can I just send a PDF?",
  "faq3A": "Yes, but it must be an editable, layered PDF (often saved from Illustrator) that retains the vector text and separate spot color channels."
},
  es: {
  "title": "Activos en capas de embalaje Ai",
  "description": "Ingeniería y soluciones premium de embalaje flexible.",
  "heroTitle": "Activos en capas de embalaje Ai",
  "heroSubtitle": "Soluciones de embalaje avanzadas",
  "introSummary": "Descubre la ingeniería detrás de este formato de packaging.",
  "aeoSummary": "Obtenga más información sobre las metodologías de embalaje óptimas.",
  "eeatDetails": "Diseñado por Achieve Pack.",
  "empathyHook": "Ha diseñado una impresionante bolsa metálica con reflejos brillantes, pero cuando la fábrica solicita vectores en capas, se da cuenta de que su diseñador solo proporcionó un JPEG aplanado. Ahora, su lanzamiento se retrasa dos semanas mientras intenta frenéticamente reconstruir el archivo. Sentimos ese dolor. Los archivos aplanados son el enemigo de los embalajes de alta gama. Sin capas separadas para tinta blanca, UV directa y CMYK, las impresoras funcionan a ciegas y sus acabados premium parecerán una pegatina barata. Los activos en capas adecuados son la clave para desbloquear el verdadero lujo en los envases.",
  "section1Title": "Comprender el proceso",
  "section1Text": "Una mirada integral a la ciencia estructural y de materiales involucrada.",
  "section2Title": "Ventajas clave",
  "section2Log": "Optimizado para máxima eficiencia e impacto de marca.",
  "point1Title": "Películas metálicas que parecen opacas",
  "point1Desc": "La impresión CMYK directamente sobre una película metálica sin una base blanca crea colores oscuros y turbios.",
  "point1Sol": "Cree una capa de color directo dedicada de 'Tinta blanca' para bloquear el efecto metálico detrás del texto y los gráficos.",
  "point2Title": "Brillo UV puntual desalineado",
  "point2Desc": "Los barnices de brillo puntual están ligeramente desplazados del logotipo impreso porque las capas no estaban separadas.",
  "point2Sol": "Proporcione una capa 'Spot UV' basada en vectores configurada para sobreimprimir, perfectamente alineada con la obra de arte CMYK subyacente.",
  "point3Title": "Texto borroso y códigos de barras",
  "point3Desc": "El texto rasterizado en una imagen aplanada pierde su nitidez durante el grabado de planchas.",
  "point3Sol": "Mantenga todo el texto, códigos de barras y logotipos como capas vectoriales vivas y sin rasterizar (AI, EPS o PDF).",
  "point4Title": "Incapacidad para editar Dielines",
  "point4Desc": "La línea de corte estructural se fusiona con la obra de arte, lo que hace que la impresora imprima accidentalmente el contorno negro en la bolsa.",
  "point4Sol": "Aísle la línea estructural en una capa superior bloqueada que no imprime llamada \"Dieline\".",
  "point5Title": "Pantones incorrectos en papel de aluminio",
  "point5Desc": "Los colores de la marca cambian drásticamente cuando se imprimen en papel de aluminio sin un perfil de color adecuado.",
  "point5Sol": "Utilice capas de colores directos Pantone (PMS) dedicadas en lugar de creaciones CMYK para activos críticos de marca.",
  "compTitle": "Arte aplanado versus arquitectura de preimpresión en capas",
  "compDesc": "Cómo separar sus activos digitales desbloquea acabados físicos premium:",
  "faq1Q": "¿Por qué necesito una capa de tinta blanca?",
  "faq1A": "Si imprime en materiales transparentes, metálicos o Kraft, las imprentas necesitan una capa de tinta blanca debajo de los colores para que permanezcan vibrantes y opacos.",
  "faq2Q": "¿Qué es un archivo vectorial?",
  "faq2A": "Un archivo vectorial (como .AI o .SVG) utiliza matemáticas para dibujar formas, lo que significa que se puede escalar infinitamente sin perder calidad o volverse borroso como un JPEG.",
  "faq3Q": "¿Puedo enviar simplemente un PDF?",
  "faq3A": "Sí, pero debe ser un PDF editable en capas (a menudo guardado desde Illustrator) que conserve el texto vectorial y los canales de colores planos separados."
},
  fr: {
  "title": "Actifs en couches d’emballage Ai",
  "description": "Ingénierie et solutions d’emballage flexible haut de gamme.",
  "heroTitle": "Actifs en couches d’emballage Ai",
  "heroSubtitle": "Solutions d'emballage avancées",
  "introSummary": "Découvrez l'ingénierie derrière ce format d'emballage.",
  "aeoSummary": "Apprenez-en davantage sur les méthodologies d’emballage optimales.",
  "eeatDetails": "Conçu par Achieve Pack.",
  "empathyHook": "Vous avez conçu un superbe sac métallique avec des reflets brillants, mais lorsque l'usine demande des vecteurs superposés, vous réalisez que votre concepteur n'a fourni qu'un JPEG aplati. Désormais, votre lancement est retardé de deux semaines pendant que vous essayez frénétiquement de reconstruire le fichier. Nous ressentons cette douleur. Les dossiers aplatis sont l’ennemi des emballages haut de gamme. Sans couches séparées pour l'encre blanche, le spot UV et le CMJN, les imprimantes fonctionnent à l'aveugle et vos finitions haut de gamme ressembleront à un autocollant bon marché. Des actifs superposés appropriés sont la clé pour débloquer un véritable luxe d’emballage.",
  "section1Title": "Comprendre le processus",
  "section1Text": "Un regard complet sur la science des structures et des matériaux impliquée.",
  "section2Title": "Avantages clés",
  "section2Log": "Optimisé pour une efficacité et un impact de marque maximum.",
  "point1Title": "Films métalliques semblant ternes",
  "point1Desc": "L'impression CMJN directement sur un film métallique sans sous-couche blanche crée des couleurs boueuses et sombres.",
  "point1Sol": "Créez un calque de couleur d'accompagnement « Encre blanche » dédié pour bloquer l'effet métallique derrière le texte et les graphiques.",
  "point2Title": "Brillant UV ponctuel mal aligné",
  "point2Desc": "Les vernis sélectifs sont légèrement décalés par rapport au logo imprimé car les couches n'ont pas été séparées.",
  "point2Sol": "Fournissez un calque vectoriel « Spot UV » défini pour la surimpression, parfaitement aligné avec l'illustration CMJN sous-jacente.",
  "point3Title": "Texte flou et codes-barres",
  "point3Desc": "Le texte rastérisé en image aplatie perd sa netteté lors de la gravure sur plaque.",
  "point3Sol": "Conservez tous les textes, codes-barres et logos sous forme de couches vectorielles dynamiques et non pixellisées (AI, EPS ou PDF).",
  "point4Title": "Impossibilité de modifier les lignes de découpe",
  "point4Desc": "La ligne de découpe structurelle est fusionnée avec l'illustration, ce qui amène l'imprimante à imprimer accidentellement le contour noir sur le sac.",
  "point4Sol": "Isolez la ligne de découpe structurelle sur une couche supérieure verrouillée et non imprimable nommée « Dieline ».",
  "point5Title": "Pantones incorrects sur la feuille",
  "point5Desc": "Les couleurs de la marque changent radicalement lorsqu’elles sont imprimées sur du papier d’aluminium sans profil de couleur approprié.",
  "point5Sol": "Utilisez des calques de tons directs Pantone (PMS) dédiés au lieu des versions CMJN pour les actifs critiques de la marque.",
  "compTitle": "Art aplati vs architecture pré-presse en couches",
  "compDesc": "Comment la séparation de vos actifs numériques débloque des finitions physiques haut de gamme :",
  "faq1Q": "Pourquoi ai-je besoin d’une couche d’encre blanche ?",
  "faq1A": "Si vous imprimez sur des matériaux transparents, métalliques ou Kraft, les imprimeurs ont besoin d'une couche d'encre blanche sous vos couleurs afin qu'elles restent éclatantes et opaques.",
  "faq2Q": "Qu'est-ce qu'un fichier vectoriel ?",
  "faq2A": "Un fichier vectoriel (comme .AI ou .SVG) utilise les mathématiques pour dessiner des formes, ce qui signifie qu'il peut être mis à l'échelle à l'infini sans perdre en qualité ni devenir flou comme un JPEG.",
  "faq3Q": "Puis-je simplement envoyer un PDF ?",
  "faq3A": "Oui, mais il doit s'agir d'un PDF modifiable en couches (souvent enregistré à partir d'Illustrator) qui conserve le texte vectoriel et les canaux de couleurs d'accompagnement séparés."
},
  'zh-tw': {
  "title": "AI 打包分層資產",
  "description": "優質軟包裝工程和解決方案。",
  "heroTitle": "AI 打包分層資產",
  "heroSubtitle": "先進封裝解決方案",
  "introSummary": "了解這種包裝格式背後的工程原理。",
  "aeoSummary": "了解有關最佳包裝方法的更多資訊。",
  "eeatDetails": "由 Achieve Pack 設計。",
  "empathyHook": "您設計了一款帶有斑點光澤高光的令人驚嘆的金屬包，但當工廠要求提供分層向量時，您意識到您的設計師只提供了扁平的 JPEG。現在，當您瘋狂地嘗試重建文件時，您的啟動被推遲了兩週。我們感受到那種痛苦。扁平化文件是高端包裝的敵人。如果沒有單獨的白色墨水、專色 UV 和 CMYK 層，印表機就會盲目行動，您的優質飾面看起來就像一張廉價的貼紙。適當的分層資產是釋放真正包裝奢華的關鍵。",
  "section1Title": "了解流程",
  "section1Text": "全面了解所涉及的結構和材料科學。",
  "section2Title": "主要優勢",
  "section2Log": "優化以實現最大效率和品牌影響力。",
  "point1Title": "金屬薄膜看起來暗淡",
  "point1Desc": "在沒有白色底色的情況下直接將 CMYK 列印到金屬薄膜上會產生渾濁的深色顏色。",
  "point1Sol": "建立專用的「白色墨水」專色圖層以阻擋文字和圖形後方的金屬效果。",
  "point2Title": "未對準的局部 UV 光澤",
  "point2Desc": "由於各層未分離，斑點光澤清漆與印刷標誌略有偏移。",
  "point2Sol": "Provide a vector-based 'Spot UV' layer set to overprint, perfectly aligned with the underlying CMYK artwork.",
  "point3Title": "模糊的文字和條碼",
  "point3Desc": "光柵化為扁平圖像的文字在板雕刻過程中會失去清晰度。",
  "point3Sol": "將所有文字、條碼和標誌保留為即時、非光柵化向量圖層（AI、EPS 或 PDF）。",
  "point4Title": "無法編輯模切線",
  "point4Desc": "結構切割線與圖稿融合在一起，導致印表機意外地將黑色輪廓列印在袋子上。",
  "point4Sol": "將結構模切線隔離在名為「模切線」的鎖定的非列印頂層上。",
  "point5Title": "鋁箔上的 Pantone 不正確",
  "point5Desc": "如果在沒有正確顏色配置的情況下在鋁箔上印刷，品牌顏色會發生巨大變化。",
  "point5Sol": "對於關鍵的品牌資產，使用專用的 Pantone (PMS) 專色圖層而不是 CMYK 建構。",
  "compTitle": "扁平化藝術與分層印前架構",
  "compDesc": "分離您的數位資產如何解鎖優質的實體飾面：",
  "faq1Q": "為什麼需要白色墨水層？",
  "faq1A": "如果在透明、金屬或牛皮紙材料上列印，印表機需要在顏色下方有白色墨水層，以便它們保持鮮豔和不透明。",
  "faq2Q": "什麼是向量文件？",
  "faq2A": "向量檔案（如 .AI 或 .SVG）使用數學來繪製形狀，這意味著它可以無限縮放，而不會像 JPEG 那樣降低品質或變得模糊。",
  "faq3Q": "我可以只發送 PDF 嗎？",
  "faq3A": "是的，但它必須是可編輯的分層 PDF（通常從 Illustrator 儲存），保留向量文字和單獨的專色通道。"
}
}

const AiPackagingLayeredAssets: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const localTrans = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en

  const IMAGES = {
    hero: '/imgs/knowledge/ultrasonic-pouch-sealing-guide.jpg',
    process: '/imgs/knowledge/ultrasonic-vs-heat-sealing-process.jpg',
    comparison: '/imgs/knowledge/ultrasonic-vs-heat-sealing-comparison.jpg'
  }

  const sections = [
    {
      id: 'empathy-hook',
      title: 'The Reality of the Challenge',
      icon: <CheckCircle2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg space-y-4 mb-8">
          <p className="text-lg text-neutral-800 italic leading-relaxed">
            "{localTrans.empathyHook}"
          </p>
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-amber-200">
            <img src="/imgs/ryan-wong-avatar.jpg" alt="Ryan Wong" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Ryan+Wong&background=000&color=fff' }} />
            <div>
              <p className="text-sm font-bold text-neutral-900">Ryan Wong</p>
              <p className="text-xs text-neutral-600">Chief Packaging Engineer, Achieve Pack</p>
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
              alt="High resolution product lamination process closeup" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="High-resolution visual demonstration showing material and structural features of the package."
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
          <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#D4FF00]">// CHIEF PACKAGING ENGINEER JOURNAL entry</p>
          <blockquote className="italic border-l-4 border-[#D4FF00] pl-4 text-sm md:text-base text-neutral-200">
            "{localTrans.section2Log}"
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> 100% Prepress Calibration Guaranteed
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: "5 Core Challenges & Engineering Solutions",
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            {/* Point 1 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                {localTrans.point1Title}
              </h4>
              <p className="text-sm text-neutral-600 mb-3">{localTrans.point1Desc}</p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                {localTrans.point1Sol}
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                {localTrans.point2Title}
              </h4>
              <p className="text-sm text-neutral-600 mb-3">{localTrans.point2Desc}</p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                {localTrans.point2Sol}
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                {localTrans.point3Title}
              </h4>
              <p className="text-sm text-neutral-600 mb-3">{localTrans.point3Desc}</p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                {localTrans.point3Sol}
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                {localTrans.point4Title}
              </h4>
              <p className="text-sm text-neutral-600 mb-3">{localTrans.point4Desc}</p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                {localTrans.point4Sol}
              </div>
            </div>

            {/* Point 5 */}
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                {localTrans.point5Title}
              </h4>
              <p className="text-sm text-neutral-600 mb-3">{localTrans.point5Desc}</p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                {localTrans.point5Sol}
              </div>
            </div>
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
              alt="Microscopic or detailed physical properties comparison" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual packaging engineering representation comparing materials, barriers, or sealing methods."
            />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: localTrans.faq1Q,
      answer: localTrans.faq1A
    },
    {
      question: localTrans.faq2Q,
      answer: localTrans.faq2A
    },
    {
      question: localTrans.faq3Q,
      answer: localTrans.faq3A
    }
  ]

  const tables = [
    {
      title: "Packaging Performance Comparison Matrix",
      data: {
        headers: ["Parameter", "Standard Specifications", "Eco-Engineered Specifications"],
        rows: [
          ["Material Barrier Thickness", "80 Microns (Mixed laminates)", "120 Microns (Mono PE / Plant-Based)"],
          ["Oxygen Transmission Rate (OTR)", "1.5 cc/m²/24hr (Standard)", "Near Zero (<0.05 cc/m²/24hr)"],
          ["EPR Modulated Tax Level", "Maximum tier surcharges", "Lowest modulated tax brackets"]
        ]
      }
    }
  ]

  const schemaKeywords = [
    "custom packaging design",
    "sustainable barrier films",
    "epr tax compliance",
    "flexible pouches",
    "packaging engineer"
  ]

  return (
    <>
      <Helmet>
        <title>{localTrans.title} | Achieve Pack</title>
        <meta name="description" content={localTrans.description} />
        <link rel="canonical" href={`https://achievepack.com/topics/ai-packaging-layered-assets`} />
        <meta name="keywords" content={schemaKeywords.join(', ')} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": localTrans.title,
            "description": localTrans.description,
            "image": `https://achievepack.com${IMAGES.hero}`,
            "author": {
              "@type": "Person",
              "name": "Ryan Wong",
              "jobTitle": "Chief Packaging Engineer"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": {
                "@type": "ImageObject",
                "url": "https://achievepack.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://achievepack.com/topics/ai-packaging-layered-assets`
            }
          })}
        </script>
      </Helmet>

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

export default AiPackagingLayeredAssets
