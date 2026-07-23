import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Leaf, Award, Compass, Scale, ShieldCheck, Box, HelpCircle, Layers } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { ThreePouchViewer } from '../../components/ThreePouchViewer'

const MOCKUP_IMAGES = {
  flatBottom: '/imgs/pouch-shape/flat-bottom-vs-gusset/flat-bottom.png',
  sideGusset: '/imgs/pouch-shape/flat-bottom-vs-gusset/side-gusset.png',
}

const localTranslations: Record<string, any> = {
  en: {
    ryanNotebookTitle: "🔬 From Ryan Wong's Engineering Notebook",
    ryanNotebookText: "A high-end granola startup was using side-gusset bags but kept getting customer complaints that the bag would tip over on breakfast tables, scattering oats. When they tried to transition to flat-bottom box bags, their co-packer warned them that the thicker bottom joints would melt or fail under their existing sealing settings. We visited their facility and calculated that their thermal sealer was set to 150°C with only a 0.8s dwell time—perfect for side-gussets but causing cold-seals on flat bottoms. We increased the dwell time to 1.3s and dropped the temperature to 135°C to allow heat to penetrate the 5-panel joint without burning the outer PE layer. Corner seal strength tripled, and failures dropped to zero. Stability and sealing solved in one go.",
    painPointsTitle: "5 Packaging Pain Points & Engineering Solutions",
    pp1Title: "01 / Pouch Tilting & Spillages",
    pp1Desc: "Lightweight or partially emptied side-gusset pouches fold at the base and fall over, spilling dry powders.",
    pp1Sol: "Solution: Choose a 5-panel flat box-bottom base for absolute standing stability, keeping the bag upright regardless of fill level.",
    pp2Title: "02 / Corner Crease Cracking & Leakages",
    pp2Desc: "Thick quad-seals on box bottoms experience high mechanical stress, causing micro-fractures in foil barrier layers.",
    pp2Sol: "Solution: Use co-extruded high-barrier Mono-PE films with high-elongation tie resins that stretch rather than crack during folding.",
    pp3Title: "03 / Graphic Distortion on Folds",
    pp3Desc: "Side-gusset seams running through critical branding elements distort logos when the pouch expands.",
    pp3Sol: "Solution: Optimize pre-press layflat dielines to align graphics with flat panels, avoiding folded gusset lines.",
    pp4Title: "04 / Narrow Sealing Windows at Bottom Joints",
    pp4Desc: "The point where 5 separate panels meet requires high heat, which can burn through surrounding single-layer bioplastics.",
    pp4Sol: "Solution: Calibrate sealing bar temperatures with dual-zone heating elements and use high-performance tie layers with wide heat seals.",
    pp5Title: "05 / Slow Auto-Filling Line Throughput",
    pp5Desc: "Standard side-gusset bags resist opening cleanly, causing mechanical suction cups to miss or drop pouches.",
    pp5Sol: "Solution: Switch to stiff, pre-formed flat bottom box bags that naturally remain open when suctioned, boosting fill-line speeds by 20%."
  },
  zh: {
    ryanNotebookTitle: "🔬 Ryan Wong 的包裝工程筆記",
    ryanNotebookText: "一家高端麥片初創品牌原本使用側風琴袋，但經常收到客戶投訴稱袋子在餐桌上易傾倒，導致麥片灑落。當他們嘗試過渡到平底箱型袋（Flat Bottom）時，他們的代工廠警告稱，較厚的底部封合接縫在現有的熱封設置下會熔斷或封口不牢。我們實地走訪了他們的工廠，測量發現其熱封機設置為 150°C，但壓合時間僅為 0.8 秒——這非常適合側風琴袋，但會對平底袋的 5 層接頭造成弱封。我們將壓合時間增加到 1.3 秒，並將溫度降至 135°C，以便熱量能夠滲透 5 層折疊接縫，而不至於燒焦外層的 PE 薄膜。結果角部密封強度提升了三倍，破損率降至零。穩定性與熱封問題一舉解決。",
    painPointsTitle: "5 大包裝痛點與工程解決方案",
    pp1Title: "01 / 袋身傾倒與內容物灑落",
    pp1Desc: "質地較輕或部分取空後的側風琴袋在底部折疊處易折皺並傾倒，導致乾燥粉末灑出。",
    pp1Sol: "解決方案：選擇 5 面平底箱型底座，實現絕對的站立穩定性，無論袋內填充程度如何均能保持直立。",
    pp2Title: "02 / 邊角摺皺開裂與滲漏",
    pp2Desc: "平底袋底部的四邊封合處承受較大的機械應力，容易導致鋁箔阻隔層產生微小斷裂。",
    pp2Sol: "解決方案：使用共擠出高阻隔 Mono-PE 薄膜，並配合高延伸率的粘合樹脂，使折疊處在受壓時延展而不開裂。",
    pp3Title: "03 / 摺疊處圖案與商標變形",
    pp3Desc: "貫穿關鍵品牌區域的側風琴接縫會在袋身膨脹時導致 Logo 或文字扭曲變形。",
    pp3Sol: "解決方案：優化印前平面刀模（Dieline）排版，將核心圖案置於平整面板上，避開摺疊風琴線。",
    pp4Title: "04 / 底部接點封口窗口過窄",
    pp4Desc: "5 層不同板塊交會的底部接縫處需要極高熱量，容易將周圍的單層生物塑料燒穿。",
    pp4Sol: "解決方案：使用雙溫區加熱元件精密調校熱封刀溫度，並使用具有寬封合溫度的封口內層膜。",
    pp5Title: "05 / 自動裝填線產能受限",
    pp5Desc: "普通側風琴袋在開啟時吸附力不足，導致機械吸盤易漏吸或掉袋。",
    pp5Sol: "解決方案：改用剛性更強、預成型的平底箱型袋，在吸嘴吸附時袋口自然張開，使裝填線速度提升 20%。"
  },
  es: {
    ryanNotebookTitle: "🔬 De la Libreta de Ingeniería de Ryan Wong",
    ryanNotebookText: "Una startup de granola premium utilizaba bolsas de fuelle lateral pero recibía quejas de que la bolsa se volcaba en la mesa, esparciendo la avena. Cuando intentaron cambiar a bolsas de fondo plano, su co-packer les advirtió que las uniones inferiores más gruesas se derretirían o fallarían con sus configuraciones de sellado actuales. Visitamos sus instalaciones y descubrimos que su selladora térmica estaba configurada a 150°C con solo 0.8s de tiempo de contacto, perfecto para fuelles laterales pero insuficiente para fondos planos. Aumentamos el tiempo de contacto a 1.3s y bajamos la temperatura a 135°C para permitir que el calor penetrara en la unión de 5 paneles sin quemar la capa de PE exterior. La resistencia del sello de la esquina se triplicó y las fallas cayeron a cero. Estabilidad y sellado resueltos de una vez.",
    painPointsTitle: "5 Problemas de Empaque y Soluciones de Ingeniería",
    pp1Title: "01 / Volcamiento de Bolsas y Derrames",
    pp1Desc: "Las bolsas de fuelle lateral ligeras o parcialmente vacías se doblan en la base y se caen, derramando el contenido.",
    pp1Sol: "Solución: Elegir una base de fondo plano de 5 paneles para una estabilidad vertical absoluta, manteniendo la bolsa erguida.",
    pp2Title: "02 / Agrietamiento por Pliegues en Esquinas y Fugas",
    pp2Desc: "Los sellos cuádruples gruesos en fondos planos experimentan un alto estrés mecánico, causando microfracturas en las capas de barrera.",
    pp2Sol: "Solución: Utilizar películas Mono-PE de alta barrera coextruidas con resinas de unión de alta elongación que se estiren en lugar de agrietarse.",
    pp3Title: "03 / Distorsión de Gráficos en Pliegues",
    pp3Desc: "Las costuras de fuelle lateral que cruzan elementos clave de la marca distorsionan los logotipos al expandirse la bolsa.",
    pp3Sol: "Solución: Optimizar las líneas de troquel pre-prensa para alinear los gráficos con paneles planos, evitando las líneas de pliegue.",
    pp4Title: "04 / Ventana de Sellado Estrecha en Uniones Inferiores",
    pp4Desc: "El punto donde se encuentran 5 paneles requiere alta temperatura, lo que puede quemar los bioplásticos monocapa adyacentes.",
    pp4Sol: "Solución: Calibrar la temperatura de las mordazas con elementos de calefacción bizona y usar capas de sellado de amplio rango térmico.",
    pp5Title: "05 / Rendimiento Lento en Líneas de Llenado",
    pp5Desc: "Las bolsas de fuelle lateral estándar resisten una apertura limpia, haciendo que las ventosas mecánicas fallen al tomarlas.",
    pp5Sol: "Solución: Cambiar a bolsas de fondo plano rígidas preformadas que se mantienen abiertas naturalmente al succionarlas, acelerando la línea un 20%."
  },
  fr: {
    ryanNotebookTitle: "🔬 De l'Engineering Notebook de Ryan Wong",
    ryanNotebookText: "Une startup de granola premium utilisait des sachets à soufflets latéraux mais recevait des plaintes de clients indiquant que le sachet se renversait sur la table du petit-déjeuner. Lorsqu'ils ont tenté de passer à des sachets à fond plat, leur co-packer les a avertis que les jointures inférieures plus épaisses fondraient ou fuiraient avec leurs réglages existants. Nous avons visité leur usine et constaté que leur soudeuse était réglée à 150°C avec seulement 0,8 s de temps de contact—parfait pour les soufflets latéraux mais provoquant des soudures froides sur les fonds plats. Nous avons augmenté le temps de contact à 1,3 s et abaissé la température à 135°C pour permettre à la chaleur de pénétrer le joint à 5 couches sans brûler le film PE externe. La résistance du scellage a triplé et les fuites ont été réduites à zéro.",
    painPointsTitle: "5 Problèmes d'Emballage & Solutions d'Ingénierie",
    pp1Title: "01 / Sachets Renversés & Pertes de Produit",
    pp1Desc: "Les sachets à soufflets latéraux légers ou à moitié vides se plient à la base et basculent, renversant les céréales ou poudres.",
    pp1Sol: "Solution : Opter pour une base boîte à fond plat à 5 panneaux pour une tenue verticale stable et robuste, quel que soit le niveau de remplissage.",
    pp2Title: "02 / Fissuration des Plis & Micro-Fuites",
    pp2Desc: "Les soudures d'angle épaisses sur fond plat subissent d'importantes contraintes mécaniques, provoquant des micro-fissures dans l'aluminium.",
    pp2Sol: "Solution : Utiliser des films Mono-PE haute barrière co-extrudés avec des résines de liaison à haute élongation qui s'étirent sans rompre.",
    pp3Title: "03 / Déformation des Graphismes sur les Plis",
    pp3Desc: "Les soudures de soufflets traversant des zones de branding clés déforment les logos lorsque le sac se gonfle.",
    pp3Sol: "Solution : Ajuster les tracés de découpe pré-presse pour placer les logos sur des faces planes et éviter les lignes de pliage.",
    pp4Title: "04 / Plage de Scellage Étroite sur Jointures Épaisses",
    pp4Desc: "Le point de jonction à 5 panneaux nécessite une forte chaleur qui peut brûler les films monocouches adjacents.",
    pp4Sol: "Solution : Régler les mâchoires de soudure avec des résistances bi-zones et utiliser des films de scellage à large plage thermique.",
    pp5Title: "05 / Remplissage Lent sur Lignes Automatiques",
    pp5Desc: "Les sacs à soufflets latéraux peinent à s'ouvrir correctement, ce qui perturbe la prise par les ventouses de remplissage.",
    pp5Sol: "Solution : Utiliser des sachets à fond plat rigides et pré-formés qui s'ouvrent naturellement, augmentant la cadence de remplissage de 20%."
  }
}

export default function FlatBottomVsGussetPage() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const langKey = currentLang.startsWith('zh') ? 'zh' : currentLang.startsWith('fr') ? 'fr' : currentLang.startsWith('es') ? 'es' : 'en'
  const lt = localTranslations[langKey]
  const p = 'seoPages.pages.flatBottomVsGusset'

  // States for interactive sways & 3D scrolling
  const [flatTilt, setFlatTilt] = useState({ x: 0, y: 0 })
  const [gussetTilt, setGussetTilt] = useState({ x: 0, y: 0 })
  const [scrollPercent, setScrollPercent] = useState(0)

  const flatCardRef = useRef<HTMLDivElement>(null)
  const gussetCardRef = useRef<HTMLDivElement>(null)

  // Track global page scroll progress for 3D visualizer rotation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        setScrollPercent(scrollTop / docHeight)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mouse sway controllers for Flat Bottom Card
  const handleFlatMouseMove = (e: React.MouseEvent) => {
    if (!flatCardRef.current) return
    const rect = flatCardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setFlatTilt({ x: x * 30, y: y * -30 })
  }

  const handleFlatMouseLeave = () => {
    setFlatTilt({ x: 0, y: 0 })
  }

  // Mouse sway controllers for Side Gusset Card
  const handleGussetMouseMove = (e: React.MouseEvent) => {
    if (!gussetCardRef.current) return
    const rect = gussetCardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setGussetTilt({ x: x * 30, y: y * -30 })
  }

  const handleGussetMouseLeave = () => {
    setGussetTilt({ x: 0, y: 0 })
  }

  const faqs = [
    {
      question: t(`${p}.faqs.0.question`, "What is the primary difference between a flat bottom pouch and a side gusset pouch bottom?"),
      answer: t(`${p}.faqs.0.answer`, "The primary difference lies in the bottom design and stability. A flat bottom pouch (box pouch) is made of 5 separate web panels, creating a completely flat, rectangular brick-like base. It stands with absolute stability even when lightweight. A side gusset pouch bottom is formed by folding the sides inward; when filled, the bottom expands into a pillow/block base shaped by folds and a center fin-seal, relying on product weight to stand upright.")
    },
    {
      question: t(`${p}.faqs.1.question`, "Which pouch style offers more internal volume?"),
      answer: t(`${p}.faqs.1.answer`, "The flat bottom pouch provides higher volumetric efficiency. Because its bottom is a separate flat rectangular panel rather than a folded seam, it expands into a box-like structure, giving it roughly 10% to 15% more usable internal volume compared to a side gusset pouch of the same outer dimensions.")
    },
    {
      question: t(`${p}.faqs.2.question`, "Which pricing compare between these two pouch bottom structures?"),
      answer: t(`${p}.faqs.2.answer`, "Side gusset pouches are more cost-effective. They require simpler machinery conversion lines. Flat bottom pouches involve a complex 5-panel conversion process that requires advanced bag-making machines, making them roughly 15% to 25% more expensive depending on material lamination and size.")
    }
  ]

  const sections = [
    {
      id: "engineers-log",
      title: lt.ryanNotebookTitle,
      icon: <Leaf className="h-6 w-6 text-emerald-600" />,
      content: (
        <div className="bg-emerald-950 text-emerald-100 p-6 rounded-2xl border border-emerald-900 text-left">
          <p className="text-emerald-400 text-xs font-semibold mb-2 uppercase tracking-wide">
            {langKey === 'zh' ? '工程師日記' : 'Engineering Memo'}
          </p>
          <p className="text-emerald-100 text-xs leading-relaxed italic">
            "{lt.ryanNotebookText}"
          </p>
        </div>
      )
    },
    {
      id: "interactive-3d-visualizer",
      title: t(`${p}.interactive3dStructuralVisuali`, "🔬 Interactive 3D Structural Visualizer"),
      icon: <Compass className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-6 text-left">
          <p className="text-xs text-neutral-500 font-mono tracking-wide text-center">
            {t(`${p}.realTimeWebglRendersMoveCursor`, "[ REAL-TIME WEBGL RENDERS — MOVE CURSOR TO SWAY / SCROLL TO ROTATE ]")}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Flat Bottom */}
            <div 
              ref={flatCardRef}
              onMouseMove={handleFlatMouseMove}
              onMouseLeave={handleFlatMouseLeave}
              className="bg-white border border-neutral-200 hover:border-primary-500 rounded-2xl p-5 shadow-sm transition-all flex flex-col justify-between h-[520px] relative overflow-hidden"
            >
              <div className="absolute top-3 right-3 bg-neutral-900 text-white text-[9px] font-mono px-2 py-0.5 rounded-full border border-neutral-700">
                {t(`${p}.coffeePouchGlb`, "coffee-pouch.glb")}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-primary-600 tracking-wider uppercase font-mono">{t(`${p}.model01`, "[ MODEL 01 ]")}</span>
                <h4 className="text-lg font-bold text-neutral-900">{t(`${p}.flatBottomPouch`, "Flat Bottom Pouch")}</h4>
                <p className="text-xxs text-neutral-500 leading-relaxed">{t(`${p}.noteTheSeparateFullyFlatRectan`)}</p>
              </div>
              <div className="w-full h-[320px] bg-neutral-50 rounded-xl relative border overflow-hidden mt-3">
                <ThreePouchViewer modelUrl="/3d/3d-pouch/coffee-pouch.glb" tilt={flatTilt} scrollPercent={scrollPercent} isMobile={false} />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4 border-t pt-3 text-[10px] font-mono">
                <div>
                  <span className="text-neutral-400 block uppercase">{t(`${p}.baseType`)}</span>
                  <span className="font-bold block text-neutral-900">{t(`${p}.5PanelBoxBottom`)}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block uppercase">{t(`${p}.stability`)}</span>
                  <span className="font-bold block text-green-600">{t(`${p}.absoluteFlat`)}</span>
                </div>
              </div>
            </div>

            {/* Card 2: Side Gusset */}
            <div 
              ref={gussetCardRef}
              onMouseMove={handleGussetMouseMove}
              onMouseLeave={handleGussetMouseLeave}
              className="bg-white border border-neutral-200 hover:border-primary-500 rounded-2xl p-5 shadow-sm transition-all flex flex-col justify-between h-[520px] relative overflow-hidden"
            >
              <div className="absolute top-3 right-3 bg-neutral-900 text-white text-[9px] font-mono px-2 py-0.5 rounded-full border border-neutral-700">
                {t(`${p}.gussetPouchGlb`, "gusset-pouch.glb")}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-primary-600 tracking-wider uppercase font-mono">{t(`${p}.model02`, "[ MODEL 02 ]")}</span>
                <h4 className="text-lg font-bold text-neutral-900">{t(`${p}.sideGussetPouch`, "Side Gusset Pouch")}</h4>
                <p className="text-xxs text-neutral-500 leading-relaxed">{t(`${p}.noticeHowTheSideFoldsCollapseA`)}</p>
              </div>
              <div className="w-full h-[320px] bg-neutral-50 rounded-xl relative border overflow-hidden mt-3">
                <ThreePouchViewer modelUrl="/3d/3d-pouch/gusset-pouch.glb" tilt={gussetTilt} scrollPercent={scrollPercent} isMobile={false} />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4 border-t pt-3 text-[10px] font-mono">
                <div>
                  <span className="text-neutral-400 block uppercase">{t(`${p}.baseType`)}</span>
                  <span className="font-bold block text-neutral-900">{t(`${p}.foldedGussetSeam`)}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block uppercase">{t(`${p}.stability`)}</span>
                  <span className="font-bold block text-amber-600">{t(`${p}.weightDependent`)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "technical-anatomy",
      title: t(`${p}.technicalAnatomyDeepDive`, "Technical Anatomy Deep Dive"),
      icon: <Layers className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-10 text-left">
          <p className="text-xs text-neutral-600 leading-relaxed">{t(`${p}.analyzingTheMechanicalProperti`)}</p>
          
          {/* Structure A */}
          <div className="grid md:grid-cols-2 gap-8 items-center border-b pb-8">
            <div>
              <span className="text-[#ff8400] font-mono font-bold text-xs uppercase block tracking-wider mb-1">{t(`${p}.structureABoxConfiguration`)}</span>
              <h4 className="text-lg font-bold text-neutral-900 mb-3">{t(`${p}.the5PanelFlatBottomBox`)}</h4>
              <p className="text-neutral-600 text-xs leading-relaxed mb-4">{t(`${p}.unlikeStandardGussetBagsTheBot`)} <strong>{t(`${p}.separateRectangularPanel`)}</strong> {t(`${p}.ofPackagingFilmHeatSealedToThe`)}</p>
              <div className="space-y-1.5 text-xxs text-neutral-700 font-medium">
                <p>✓ <strong>{t(`${p}.totalStandingStability`)}</strong> {t(`${p}.completelyFlatFootprintStandsU`)}</p>
                <p>✓ <strong>{t(`${p}.fivePrintablePanels`)}</strong> {t(`${p}.frontBackLeftGussetRightGusset`)}</p>
                <p>✓ <strong>{t(`${p}.resealableZipIntegration`)}</strong> {t(`${p}.enablesConvenientPocketZippers`)}</p>
              </div>
            </div>
            <div>
              <ClickableImage 
                src={MOCKUP_IMAGES.flatBottom} 
                alt="High quality studio shot of flat bottom organic coffee bags" 
                className="w-full rounded-xl shadow-md border"
              />
            </div>
          </div>

          {/* Structure B */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[#ff8400] font-mono font-bold text-xs uppercase block tracking-wider mb-1">{t(`${p}.structureBClassicFoldConfigura`)}</span>
              <h4 className="text-lg font-bold text-neutral-900 mb-3">{t(`${p}.theFoldedSideGussetBottom`)}</h4>
              <p className="text-neutral-600 text-xs leading-relaxed mb-4">{t(`${p}.aSideGussetBagSBottomIsFormedB`)}</p>
              <div className="space-y-1.5 text-xxs text-neutral-700 font-medium">
                <p>✓ <strong>{t(`${p}.lowerCostConversion`)}</strong> {t(`${p}.simplerToConvertInProductionLi`)}</p>
                <p>✓ <strong>{t(`${p}.highBulkCapacity`)}</strong> {t(`${p}.theStructuralFoldsHandleStress`)}</p>
                <p>✓ <strong>{t(`${p}.backSeamStrength`)}</strong> {t(`${p}.centeredSealsAllowHighTensionF`)}</p>
              </div>
            </div>
            <div>
              <ClickableImage 
                src={MOCKUP_IMAGES.sideGusset} 
                alt="Premium side gusset packaging standing in minimalist pantry" 
                className="w-full rounded-xl shadow-md border"
              />
            </div>
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
              src="/imgs/knowledge/pouch-flat-bottom-vs-gusset-pain-points.jpg" 
              alt="Flat bottom vs side gusset packaging structural pain points solved infographic"
              className="w-full max-w-lg rounded-xl shadow-md border"
            />
          </div>
        </div>
      )
    },
    {
      id: "decision-matrix",
      title: t(`${p}.theDecisionMatrix`, "The Decision Matrix"),
      icon: <Scale className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-4 text-left">
          <p className="text-xs text-neutral-600 leading-relaxed">{t(`${p}.compareVisualPhysicalAndCommer`)}</p>
          <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
            <table className="w-full text-xs">
              <thead className="bg-neutral-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-700">{t(`${p}.parameters`)}</th>
                  <th className="px-4 py-3 text-left font-semibold text-primary-700">{t(`${p}.flatBottomPouch`)}</th>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-500">{t(`${p}.sideGussetPouch`)}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr>
                  <td className="px-4 py-3 text-neutral-600 font-medium">{t(`${p}.baseSilhouette`)}</td>
                  <td className="px-4 py-3 text-neutral-800">{t(`${p}.perfectFlatRectangleStandsRigi`)}</td>
                  <td className="px-4 py-3 text-neutral-600">{t(`${p}.pillowBlockWithCenterSeamFold`)}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-neutral-600 font-medium">{t(`${p}.standingStability`)}</td>
                  <td className="px-4 py-3 text-primary-700 font-semibold">{t(`${p}.excellentUnfilledOrFilled`)}</td>
                  <td className="px-4 py-3 text-neutral-600">{t(`${p}.weightDependentRequiresProduct`)}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-neutral-600 font-medium">{t(`${p}.volumetricEfficiency`)}</td>
                  <td className="px-4 py-3 text-primary-700 font-semibold">{t(`${p}.1015HigherBoxFormat`)}</td>
                  <td className="px-4 py-3 text-neutral-600">{t(`${p}.standardSlightVolumeLossInFold`)}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-neutral-600 font-medium">{t(`${p}.printableSurfaceAreas`)}</td>
                  <td className="px-4 py-3 text-neutral-800">{t(`${p}.5PanelsFrontBackSidesBottom`)}</td>
                  <td className="px-4 py-3 text-neutral-600">{t(`${p}.3PanelsFrontBackSides`)}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-neutral-600 font-medium">{t(`${p}.closureAdaptability`)}</td>
                  <td className="px-4 py-3 text-neutral-800">{t(`${p}.zippersPocketZippersSliders`)}</td>
                  <td className="px-4 py-3 text-neutral-600">{t(`${p}.tinTiesTopThermalSealFold`)}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-neutral-600 font-medium">{t(`${p}.bestFillWeights`)}</td>
                  <td className="px-4 py-3 text-neutral-800">{t(`${p}.100gTo15kgGourmetPacking`)}</td>
                  <td className="px-4 py-3 text-neutral-600">{t(`${p}.1kgTo10kgBulkHeavyDutyPacking`)}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-neutral-600 font-medium">{t(`${p}.relativeUnitPrice`)}</td>
                  <td className="px-4 py-3 text-red-600 font-semibold">{t(`${p}.premium1525HigherCost`)}</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">{t(`${p}.economicalSimplerConverterLine`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: "sustainable-materials",
      title: t(`${p}.sustainableMaterialsTechnicalC`, "Sustainable Materials"),
      icon: <Leaf className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-4 text-left">
          <p className="text-neutral-700 text-xs">{t(`${p}.atAchievePackWeHelpBrandsTrans`)}</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-neutral-800 text-xs">{t(`${p}.industrialCompostable`)}</h4>
                <p className="text-xxs text-neutral-600">{t(`${p}.formulatedWithFscCertifiedPrem`)} {t(`${p}.certifiedEn13432AstmD6400`)}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-neutral-800 text-xs">{t(`${p}.recyclableMonoPe`)}</h4>
                <p className="text-xxs text-neutral-600">{t(`${p}.singlePolymerStructureEvohDope`)} {t(`${p}.storeDropOffCircularReady`)}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-neutral-800 text-xs">{t(`${p}.grsRecycledPcr`)}</h4>
                <p className="text-xxs text-neutral-600">{t(`${p}.incorporatesUpTo50PostConsumer`)} {t(`${p}.globalRecycledStandardCertifie`)}</p>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-neutral-500 italic border-t pt-3 mt-4">{t(`${p}.allFlexiblePackagingConversion`)}</p>
        </div>
      )
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.flatBottomPouchVsSideGussetBot`)}</title>
        <meta name="description" content="Technical comparison of Flat Bottom Pouch vs. Side Gusset Pouch bottoms. Learn the mechanical, volume, and cost differences. Authored by Ryan Wong (14+ yrs industry exp). MOQ 500." />
        <meta name="keywords" content="flat bottom pouch, side gusset pouch, flat bottom vs side gusset, bottom gusset differences, box pouch bottom, side gusset bag base, coffee packaging, compostable coffee bag, packaging supplier" />
        <link rel="canonical" href="https://achievepack.com/knowledge/flat-bottom-vs-gusset" />
        
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
        title={t(`${p}.flatBottomPouchVsSideGussetBot`)}
        description={t(`${p}.anAnalyticalStructuralComparis`)}
        heroTitle="Flat Bottom vs. Side Gusset Pouch"
        heroSubtitle={t(`${p}.anAnalyticalStructuralComparis`)}
        heroImage={MOCKUP_IMAGES.flatBottom}
        introSummary={t(`${p}.anAnalyticalStructuralComparis`)}
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        ctaTitle="Ready to Upgrade Your Pouch Base?"
        ctaDescription="Book a free consultation with our packaging engineering team to test samples on your filling line."
        relatedProductIds={['compostable-flat-bottom-coffee-bags', 'flat-bottom-custom-pouches']}
      />
    </>
  )
}
