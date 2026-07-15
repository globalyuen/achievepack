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
  "title": "Ai Packaging Bleed Dimensions",
  "description": "Premium flexible packaging engineering and solutions.",
  "heroTitle": "Ai Packaging Bleed Dimensions",
  "heroSubtitle": "Advanced Packaging Solutions",
  "introSummary": "Discover the engineering behind this packaging format.",
  "aeoSummary": "Learn more about optimal packaging methodologies.",
  "eeatDetails": "Engineered by Achieve Pack.",
  "empathyHook": "There is nothing worse than unpacking a massive run of custom pouches only to find an ugly white unprinted edge running down the side of every single bag. It ruins the premium feel instantly. We know the anxiety of sending a design to print, hoping it aligns perfectly. I've worked with designers who were furious that their beautiful artwork was ruined by slight mechanical shifts in cutting. Setting the correct bleed dimensions isn't just a suggestion; it is the absolute foundation of professional packaging production.",
  "section1Title": "Understanding the Process",
  "section1Text": "A comprehensive look at the structural and material science involved.",
  "section2Title": "Key Advantages",
  "section2Log": "Optimized for maximum efficiency and brand impact.",
  "point1Title": "Ugly White Edges After Cutting",
  "point1Desc": "Mechanical cutting blades shift slightly during high-speed production, exposing unprinted film.",
  "point1Sol": "Extend the background artwork at least 3-5mm beyond the cut line (the bleed area) to absorb mechanical shifts.",
  "point2Title": "Critical Text Being Cut Off",
  "point2Desc": "Important compliance text placed too close to the edge is severed during the die-cutting process.",
  "point2Sol": "Establish a strict 5mm safe margin inside the cut line where no essential text or logos can be placed.",
  "point3Title": "Inconsistent Zipper Alignment",
  "point3Desc": "Artwork meant to align perfectly with the zipper fails due to web tension stretching.",
  "point3Sol": "Use AI pre-press software to calculate the film stretch factor and apply micro-adjustments to the digital artwork.",
  "point4Title": "Color Shifting on the Bleed",
  "point4Desc": "Gradient backgrounds do not extend properly into the bleed, creating visible color steps if shifted.",
  "point4Sol": "Ensure gradients are expanded symmetrically into the bleed zone, not abruptly stopped or mirrored.",
  "point5Title": "Misaligned Gusset Artwork",
  "point5Desc": "Designs spanning across the front and bottom gusset mismatch when folded.",
  "point5Sol": "Utilize 3D structural mapping software to pre-visualize and align cross-panel bleeds perfectly.",
  "compTitle": "Standard File Prep vs. Precision Pre-Press Bleeds",
  "compDesc": "See how correct bleed tolerances eliminate manufacturing defects:",
  "faq1Q": "What is a bleed in packaging design?",
  "faq1A": "Bleed is the portion of the artwork that extends beyond the final cut line, ensuring the print goes all the way to the edge without leaving white borders.",
  "faq2Q": "How large should the bleed be for a stand-up pouch?",
  "faq2A": "We require a minimum 3mm to 5mm bleed on all outer edges to accommodate standard cutting tolerances.",
  "faq3Q": "Why did my text get cut off if it was inside the line?",
  "faq3A": "If text is too close to the cut line (within the 5mm safe zone), normal machine variances during high-speed cutting can accidentally slice it."
},
  es: {
  "title": "Dimensiones de sangrado del embalaje Ai",
  "description": "Ingeniería y soluciones premium de embalaje flexible.",
  "heroTitle": "Dimensiones de sangrado del embalaje Ai",
  "heroSubtitle": "Soluciones de embalaje avanzadas",
  "introSummary": "Descubre la ingeniería detrás de este formato de packaging.",
  "aeoSummary": "Obtenga más información sobre las metodologías de embalaje óptimas.",
  "eeatDetails": "Diseñado por Achieve Pack.",
  "empathyHook": "No hay nada peor que desempacar una gran cantidad de bolsas personalizadas solo para encontrar un feo borde blanco sin imprimir que recorre el costado de cada bolsa. Arruina la sensación premium al instante. Conocemos la ansiedad de enviar un diseño a imprimir, esperando que se alinee perfectamente. He trabajado con diseñadores que estaban furiosos porque sus hermosas obras de arte fueron arruinadas por ligeros cambios mecánicos en el corte. Establecer las dimensiones de sangrado correctas no es sólo una sugerencia; es la base absoluta de la producción de envases profesionales.",
  "section1Title": "Comprender el proceso",
  "section1Text": "Una mirada integral a la ciencia estructural y de materiales involucrada.",
  "section2Title": "Ventajas clave",
  "section2Log": "Optimizado para máxima eficiencia e impacto de marca.",
  "point1Title": "Bordes blancos feos después del corte",
  "point1Desc": "Las cuchillas de corte mecánicas se mueven ligeramente durante la producción a alta velocidad, dejando al descubierto la película sin imprimir.",
  "point1Sol": "Extienda la ilustración de fondo al menos de 3 a 5 mm más allá de la línea de corte (el área de sangrado) para absorber los cambios mecánicos.",
  "point2Title": "Se corta el texto crítico",
  "point2Desc": "El texto de cumplimiento importante colocado demasiado cerca del borde se corta durante el proceso de troquelado.",
  "point2Sol": "Establezca un estricto margen seguro de 5 mm dentro de la línea de corte donde no se pueda colocar ningún texto o logotipo esencial.",
  "point3Title": "Alineación de cremallera inconsistente",
  "point3Desc": "Las ilustraciones destinadas a alinearse perfectamente con la cremallera fallan debido al estiramiento de la tensión de la red.",
  "point3Sol": "Utilice el software de preimpresión de IA para calcular el factor de estiramiento de la película y aplicar microajustes a la obra de arte digital.",
  "point4Title": "Cambio de color en el sangrado",
  "point4Desc": "Los fondos degradados no se extienden correctamente hasta el sangrado, lo que crea pasos de color visibles si se desplazan.",
  "point4Sol": "Asegúrese de que los gradientes se expandan simétricamente en la zona de sangrado, no se detengan ni se reflejen abruptamente.",
  "point5Title": "Ilustraciones de refuerzo desalineadas",
  "point5Desc": "Los diseños que se extienden a lo largo del refuerzo frontal e inferior no coinciden cuando están plegados.",
  "point5Sol": "Utilice software de mapeo estructural 3D para previsualizar y alinear perfectamente los sangrados entre paneles.",
  "compTitle": "Preparación de archivos estándar frente a sangrados de preimpresión de precisión",
  "compDesc": "Vea cómo las tolerancias de sangrado correctas eliminan los defectos de fabricación:",
  "faq1Q": "¿Qué es un sangrado en el diseño de envases?",
  "faq1A": "El sangrado es la parte de la obra de arte que se extiende más allá de la línea de corte final, asegurando que la impresión llegue hasta el borde sin dejar bordes blancos.",
  "faq2Q": "¿Qué tamaño debe tener el sangrado para una bolsa vertical?",
  "faq2A": "Requerimos un sangrado mínimo de 3 mm a 5 mm en todos los bordes exteriores para adaptarse a las tolerancias de corte estándar.",
  "faq3Q": "¿Por qué se cortó mi texto si estaba dentro de la línea?",
  "faq3A": "Si el texto está demasiado cerca de la línea de corte (dentro de la zona segura de 5 mm), las variaciones normales de la máquina durante el corte a alta velocidad pueden cortarlo accidentalmente."
},
  fr: {
  "title": "Dimensions de fond perdu de l'emballage Ai",
  "description": "Ingénierie et solutions d’emballage flexible haut de gamme.",
  "heroTitle": "Dimensions de fond perdu de l'emballage Ai",
  "heroSubtitle": "Solutions d'emballage avancées",
  "introSummary": "Découvrez l'ingénierie derrière ce format d'emballage.",
  "aeoSummary": "Apprenez-en davantage sur les méthodologies d’emballage optimales.",
  "eeatDetails": "Conçu par Achieve Pack.",
  "empathyHook": "Il n'y a rien de pire que de déballer une série massive de pochettes personnalisées pour découvrir un vilain bord blanc non imprimé sur le côté de chaque sac. Cela gâche instantanément la sensation premium. Nous connaissons l’anxiété liée à l’envoi d’un dessin à l’impression, en espérant qu’il s’aligne parfaitement. J'ai travaillé avec des designers furieux que leurs magnifiques œuvres d'art soient gâchées par de légers changements mécaniques dans la découpe. Définir les bonnes dimensions de fond perdu n'est pas seulement une suggestion ; c'est la base absolue de la production d'emballages professionnels.",
  "section1Title": "Comprendre le processus",
  "section1Text": "Un regard complet sur la science des structures et des matériaux impliquée.",
  "section2Title": "Avantages clés",
  "section2Log": "Optimisé pour une efficacité et un impact de marque maximum.",
  "point1Title": "Bords blancs laids après la coupe",
  "point1Desc": "Les lames de coupe mécaniques se déplacent légèrement pendant la production à grande vitesse, exposant ainsi le film non imprimé.",
  "point1Sol": "Étendez l'illustration d'arrière-plan d'au moins 3 à 5 mm au-delà de la ligne de coupe (la zone de fond perdu) pour absorber les décalages mécaniques.",
  "point2Title": "Texte critique coupé",
  "point2Desc": "Un texte de conformité important placé trop près du bord est coupé lors du processus de découpe.",
  "point2Sol": "Établissez une marge de sécurité stricte de 5 mm à l’intérieur de la ligne de découpe où aucun texte ou logo essentiel ne peut être placé.",
  "point3Title": "Alignement incohérent de la fermeture éclair",
  "point3Desc": "L'illustration censée s'aligner parfaitement avec la fermeture éclair échoue en raison de l'étirement de la tension de la bande.",
  "point3Sol": "Utilisez un logiciel de prépresse IA pour calculer le facteur d'étirement du film et appliquer des micro-ajustements à l'illustration numérique.",
  "point4Title": "Changement de couleur sur le fond perdu",
  "point4Desc": "Les arrière-plans dégradés ne s'étendent pas correctement dans le fond perdu, créant des dégradés de couleurs visibles s'ils sont décalés.",
  "point4Sol": "Assurez-vous que les dégradés sont étendus symétriquement dans la zone de saignement, et non brusquement arrêtés ou mis en miroir.",
  "point5Title": "Illustration du gousset mal aligné",
  "point5Desc": "Les motifs s'étendant sur le gousset avant et inférieur ne correspondent pas une fois pliés.",
  "point5Sol": "Utilisez un logiciel de cartographie structurelle 3D pour pré-visualiser et aligner parfaitement les fonds perdus entre les panneaux.",
  "compTitle": "Préparation de fichiers standard par rapport aux fonds perdus de pré-presse de précision",
  "compDesc": "Découvrez comment des tolérances de fond perdu correctes éliminent les défauts de fabrication :",
  "faq1Q": "Qu’est-ce qu’un fond perdu dans la conception d’un emballage ?",
  "faq1A": "Le fond perdu est la partie de l'illustration qui s'étend au-delà de la ligne de découpe finale, garantissant que l'impression s'étend jusqu'au bord sans laisser de bordures blanches.",
  "faq2Q": "Quelle doit être la taille du fond perdu pour une poche debout ?",
  "faq2A": "Nous exigeons un minimum de 3 à 5 mm de fond perdu sur tous les bords extérieurs pour respecter les tolérances de coupe standard.",
  "faq3Q": "Pourquoi mon texte a-t-il été coupé s'il se trouvait à l'intérieur de la ligne ?",
  "faq3A": "Si le texte est trop proche de la ligne de coupe (dans la zone de sécurité de 5 mm), les variations normales de la machine lors de la découpe à grande vitesse peuvent le couper accidentellement."
},
  'zh-tw': {
  "title": "Ai 包裝出血尺寸",
  "description": "優質軟包裝工程和解決方案。",
  "heroTitle": "Ai 包裝出血尺寸",
  "heroSubtitle": "先進封裝解決方案",
  "introSummary": "了解這種包裝格式背後的工程原理。",
  "aeoSummary": "了解有關最佳包裝方法的更多資訊。",
  "eeatDetails": "由 Achieve Pack 設計。",
  "empathyHook": "沒有什麼比打開大量定製袋子卻發現每個袋子的側面都有醜陋的白色未印刷邊緣更糟糕的了。它立即破壞了高級感。我們知道發送設計進行列印時的焦慮，希望它完美對齊。我曾與一些設計師合作過，他們對自己美麗的藝術品被切割過程中輕微的機械變化毀掉感到憤怒。設定正確的出血尺寸不僅僅是一個建議；而是一個建議。是專業包裝生產的絕對基礎。",
  "section1Title": "了解流程",
  "section1Text": "全面了解所涉及的結構和材料科學。",
  "section2Title": "主要優勢",
  "section2Log": "優化以實現最大效率和品牌影響力。",
  "point1Title": "切割後醜陋的白邊",
  "point1Desc": "機械切割刀片在高速生產過程中會輕微移動，露出未印刷的薄膜。",
  "point1Sol": "將背景圖稿延伸至切割線（出血區域）之外至少 3-5 毫米，以吸收機械位移。",
  "point2Title": "關鍵文本被切斷",
  "point2Desc": "太靠近邊緣的重要合規文本會在模切過程中被切斷。",
  "point2Sol": "在切割線內建立嚴格的 5 毫米安全邊距，不能放置任何重要的文字或標誌。",
  "point3Title": "拉鍊對齊不一致",
  "point3Desc": "由於織物張力拉伸，原本與拉鍊完美對齊的藝術品失敗了。",
  "point3Sol": "Use AI pre-press software to calculate the film stretch factor and apply micro-adjustments to the digital artwork.",
  "point4Title": "出血處的顏色變化",
  "point4Desc": "漸層背景無法正確延伸到出血處，如果移動，則會產生可見的顏色步驟。",
  "point4Sol": "確保梯度對稱地擴展到出血區域，而不是突然停止或鏡像。",
  "point5Title": "未對齊的角撐板藝術品",
  "point5Desc": "折疊時，正面和底部角撐板的設計不符。",
  "point5Sol": "利用 3D 結構繪圖軟體預先視覺化並完美對齊跨面板出血。",
  "compTitle": "標準文件準備與精密印前出血",
  "compDesc": "了解正確的出血公差如何消除製造缺陷：",
  "faq1Q": "什麼是包裝設計中的出血？",
  "faq1A": "出血是圖稿中超出最終切割線的部分，確保列印一直到邊緣而不留下白色邊框。",
  "faq2Q": "自立袋的出血量應該是多少？",
  "faq2A": "我們要求所有外緣至少 3 毫米至 5 毫米的出血量，以適應標準切割公差。",
  "faq3Q": "為什麼我的文字在行內時會被截斷？",
  "faq3A": "如果文字距離切割線太近（在 5 毫米安全區內），高速切割過程中的正常機器差異可能會意外將其切割。"
}
}

const AiPackagingBleedDimensions: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const localTrans = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en

  const IMAGES = {
    hero: '/imgs/knowledge/sensory-unboxing-pouch-guide.jpg',
    process: '/imgs/knowledge/sensory-unboxing-process.jpg',
    comparison: '/imgs/knowledge/sensory-unboxing-comparison.jpg'
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
        <link rel="canonical" href={`https://achievepack.com/topics/ai-packaging-bleed-dimensions`} />
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
              "@id": `https://achievepack.com/topics/ai-packaging-bleed-dimensions`
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

export default AiPackagingBleedDimensions
