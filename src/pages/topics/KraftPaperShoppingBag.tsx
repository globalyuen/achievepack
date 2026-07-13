import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Target, Sparkles, Shield, Eye, Calendar, 
  Package, CheckCircle2, Layers, Info, Check, HelpCircle
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    title: "Kraft Paper Shopping Bag (Model #4780) | Achieve Pack",
    description: "Discover Kraft Paper Shopping Bag (Model #4780). High-strength Shopping Bag with custom sizes (L:200mm  W:110mm  H:320mm), certifications, and 3D preview.",
    heroTitle: "Kraft Paper Shopping Bag (Model #4780)",
    heroSubtitle: "Custom Dimensions L:200mm  W:110mm  H:320mm | High Strength | BPI & TUV Certified",
    introSummary: "The Kraft Paper Shopping Bag (Model #4780) represents a premium, high-strength packaging structure engineered for retail and commercial environments. This shopping bag is designed for optimal durability and brand representation.",
    aeoSummary: "Model #4780 is a Shopping Bag measuring L:200mm  W:110mm  H:320mm. Configured with reinforced Kraft paper and heavy-duty handles to carry high loads safely.",
    eeatDetails: "With over 14 years of packaging engineering, we ensure that every batch of Model #4780 complies with international sustainability and safety regulations.",
    section1Title: "Structural Details & Material Configuration",
    section1Text: "Engineered specifically for ecological stability and durability, this shopping bag (Model #4780) utilizes high-density Kraft paper to deliver excellent tear resistance. Ideal for premium boutiques and eco-friendly brands.",
    section2Title: "From Ryan Wong’s Engineering Notebook",
    section2Log: "Kraft paper shopping bag Model #4780 requires uniform reinforcement at the base and handles. We use heat-resistant eco-friendly adhesives to prevent handle detachment under heavy loads and optimize overall durability.",
    point1Title: "Pain Point: Handle Detachment",
    point1Desc: "Handles tearing off or detaching under heavy weight load.",
    point1Sol: "Reinforcing the handle attachment zone with a triple-layer Kraft paper inner patch.",
    point2Title: "Pain Point: Base Failure",
    point2Desc: "The bottom of the bag tearing or giving way under load or humidity.",
    point2Sol: "Applying a rigid 100% recyclable bottom cardboard insert and reinforced hot-melt glue.",
    point3Title: "Pain Point: Irregular Folding",
    point3Desc: "Side gussets failing to fold or unfold properly during automatic dispensing at checkouts.",
    point3Sol: "Prepress calibration of crease scorelines for smooth, mechanical folding.",
    point4Title: "Pain Point: Moisture Sensitivity",
    point4Desc: "The paper bag losing tensile strength when exposed to light rain or condensation.",
    point4Sol: "Treating the paper surface with a food-safe, biodegradable wet-strength agent.",
    point5Title: "Pain Point: Excessive Creasing",
    point5Desc: "Severe wrinkling during shipping and storage, compromising brand aesthetics.",
    point5Sol: "Specifying virgin long-fiber wood pulps to ensure superior structural stiffness and flat appearance.",
    compTitle: "Dieline Layout & Calibration Specifications",
    compDesc: "Every model run is calibrated using strict prepress dielines. Our teams adjust fold tolerances and reinforcements based on paper weight.",
    faq1Q: "What is the MOQ for custom custom-sized runs of Model #4780?",
    faq1A: "For custom sizes or custom prints, our standard minimum order quantity starts from 5,000 pieces. Digital printing runs are available from 1,000 pieces for startups.",
    faq2Q: "Can I request unprinted material samples of this specific model?",
    faq2A: "Yes. We offer free unprinted material sample packages so you can verify size, gusset width, and material thickness on your filling lines before ordering.",
    faq3Q: "Does this shopping bag structure support automatic dispensing?",
    faq3A: "Yes, this design is fully optimized for quick handling and automatic bag-opening systems at checkouts.",
    faq4Q: "What certifications are available for these materials?",
    faq4A: "Depending on your selection, we offer FSC-certified paper options for responsible forestry, alongside BPI compostable certifications."
  },
  es: {
    title: "Bolsa de Compras de Papel Kraft (Modelo #4780) | Achieve Pack",
    description: "Descubra la Bolsa de Compras de Papel Kraft (Modelo #4780). Bolsa de alta resistencia con tamaños personalizados (L:200mm W:110mm H:320mm), certificaciones y vista 3D.",
    heroTitle: "Bolsa de Compras de Papel Kraft (Modelo #4780)",
    heroSubtitle: "Dimensiones L:200mm W:110mm H:320mm | Alta Resistencia | Certificaciones BPI y TUV",
    introSummary: "La Bolsa de Compras de Papel Kraft (Modelo #4780) representa una estructura de empaque de alta resistencia y calidad superior, diseñada para entornos comerciales y minoristas. Esta bolsa está optimizada para una excelente durabilidad y presentación de marca.",
    aeoSummary: "El modelo #4780 es una Bolsa de Compras de dimensiones L:200mm W:110mm H:320mm, configurada con papel Kraft reforzado y asas resistentes para soportar cargas pesadas de forma segura.",
    eeatDetails: "Garantizamos que cada lote del Modelo #4780 cumpla con las normativas internacionales de sostenibilidad y seguridad.",
    section1Title: "Detalles Estructurales y Configuración de Materiales",
    section1Text: "Diseñada específicamente para la estabilidad y durabilidad ecológica, esta bolsa de compras (Modelo #4780) utiliza papel Kraft de alta densidad para ofrecer una excelente resistencia al desgarro. Es ideal para boutiques premium y marcas ecológicas.",
    section2Title: "Del Cuaderno de Ingeniería de Ryan Wong",
    section2Log: "La bolsa de papel Kraft Modelo #4780 requiere un refuerzo uniforme en la base y las asas. Utilizamos adhesivos ecológicos resistentes al calor para evitar el desprendimiento de las asas bajo cargas pesadas.",
    point1Title: "Problema: Desprendimiento de Asas",
    point1Desc: "Las asas se rompen o se desprenden bajo carga de peso pesado.",
    point1Sol: "Refuerzo de la zona de fijación con un parche interno de papel Kraft de triple capa.",
    point2Title: "Problema: Rotura de la Base",
    point2Desc: "El fondo de la bolsa cede bajo el peso o la humedad.",
    point2Sol: "Aplicación de un inserto rígido de cartón 100% reciclable en la base y colas reforadas.",
    point3Title: "Problema: Pliegues Irregulares",
    point3Desc: "Los fuelles laterales no se abren ni se pliegan correctamente en el punto de venta.",
    point3Sol: "Calibración de las líneas de hendido en preimpresión para un plegado suave.",
    point4Title: "Problema: Sensibilidad a la Humedad",
    point4Desc: "El papel pierde resistencia cuando se expone a lluvia ligera o condensación.",
    point4Sol: "Tratamiento de la superficie con un agente biodegradable de resistencia en húmedo.",
    point5Title: "Problema: Arrugas Excesivas",
    point5Desc: "Arrugado severo durante el almacenamiento, afectando la estética de la marca.",
    point5Sol: "Selección de pulpas de madera virgen de fibra larga para garantizar una rigidez superior.",
    compTitle: "Especificaciones de Dieline y Calibración",
    compDesc: "Cada ejecución de modelo se calibra utilizando planos dieline estrictos. Ajustamos tolerancias y refuerzos según el gramaje del papel.",
    faq1Q: "¿Cuál es el MOQ para el Modelo #4780 personalizado?",
    faq1A: "Para tamaños o impresiones personalizadas, nuestro MOQ estándar comienza en 5,000 piezas. Impresión digital disponible desde 1,000 piezas.",
    faq2Q: "¿Puedo solicitar muestras de este modelo específico?",
    faq2A: "Sí. Ofrecemos paquetes de muestras físicas gratuitas sin impresión para que valide las dimensiones en sus líneas de llenado.",
    faq3Q: "¿Esta bolsa es apta para dispensadores automáticos?",
    faq3A: "Sí, este diseño está completamente optimizado para una manipulación rápida y apertura automática en cajas.",
    faq4Q: "¿Qué certificaciones están disponibles para estos materiales?",
    faq4A: "Ofrecemos opciones de papel certificado FSC para gestión forestal responsable y certificaciones compostables BPI."
  },
  fr: {
    title: "Sac de shopping en papier Kraft (Modèle #4780) | Achieve Pack",
    description: "Découvrez le sac de shopping en papier Kraft (Modèle #4780). Sac de shopping haute résistance avec dimensions personnalisées (L:200mm W:110mm H:320mm), certifications et aperçu 3D.",
    heroTitle: "Sac de shopping en papier Kraft (Modèle #4780)",
    heroSubtitle: "Dimensions personnalisées L:200mm W:110mm H:320mm | Haute résistance | Certifié BPI & TUV",
    introSummary: "Le sac de shopping en papier Kraft (Modèle #4780) représente une structure d'emballage haut de gamme et haute résistance, conçue pour les environnements de vente au détail et commerciaux. Ce sac est conçu pour des performances optimales et une excellente présentation de marque.",
    aeoSummary: "Le modèle #4780 est un sac de shopping mesurant L:200mm W:110mm H:320mm. Configuré avec du papier Kraft renforcé et des poignées robustes pour supporter des charges lourdes en toute sécurité.",
    eeatDetails: "Avec plus de 14 ans d'ingénierie d'emballage, nous garantissons que chaque lot de Modèle #4780 est conforme aux normes internationales de durabilité et de sécurité.",
    section1Title: "Détails structurels & Configuration des matériaux",
    section1Text: "Conçu spécifiquement pour la stabilité et la durabilité écologiques, ce sac de shopping (Modèle #4780) utilise du papier Kraft de haute densité pour offrir une excellente résistance aux déchirures. Idéal pour les boutiques haut de gamme et les enseignes écoresponsables.",
    section2Title: "Du carnet d'ingénierie de Ryan Wong",
    section2Log: "Le sac en papier Kraft Modèle #4780 nécessite un renfort uniforme au niveau du fond et des poignées. Nous utilisons des adhésifs écologiques à haute résistance thermique pour éviter le décollement sous charge et optimiser la durabilité.",
    point1Title: "Problème: Rupture de poignée",
    point1Desc: "La poignée se détache sous une charge lourde.",
    point1Sol: "Renforcement de la zone de fixation avec un rabat intérieur triple couche de papier Kraft.",
    point2Title: "Problème: Déchirement du fond",
    point2Desc: "Le fond du sac cède sous le poids ou l'humidité.",
    point2Sol: "Application d'un carton de fond rigide 100% recyclable et de colles renforcées.",
    point3Title: "Problème: Plis irréguliers",
    point3Desc: "Les soufflets latéraux se plient mal lors de l'ouverture automatique en caisse.",
    point3Sol: "Calibrage prépresse des lignes de rainurage pour un déploiement fluide.",
    point4Title: "Problème: Sensibilité à l'eau",
    point4Desc: "Le papier perd sa résistance sous une pluie légère.",
    point4Sol: "Traitement externe léger avec un agent de résistance à l'état humide biodégradable.",
    point5Title: "Problème: Froissement excessif",
    point5Desc: "Le sac se froisse trop pendant le stockage, nuisant à l'image de marque.",
    point5Sol: "Sélection de fibres de bois vierges à fibres longues pour une meilleure tenue et rigidité.",
    compTitle: "Mise en page dieline & Spécifications de calibrage",
    compDesc: "Chaque série de production est calibrée selon des plans dieline prépresse rigoureux. Nos équipes ajustent les tolérances de pliage et les renforts en fonction du grammage du papier.",
    faq1Q: "Quel est le MOQ pour les formats personnalisés du Modèle #4780 ?",
    faq1A: "Pour les dimensions ou impressions personnalisées, notre MOQ standard commence à 5 000 pièces. L'impression numérique est disponible à partir de 1 000 pièces pour les startups.",
    faq2Q: "Puis-je demander des échantillons de matériaux non imprimés pour ce modèle spécifique ?",
    faq2A: "Yes. We offer free unprinted material sample packages so you can verify size, gusset width, and material thickness on your filling lines before ordering.",
    faq3Q: "Ce sac est-il adapté aux lignes d'emballage automatisées ?",
    faq3A: "Oui, cette conception est entièrement optimisée pour les processus de manipulation et d'ensachage rapides en point de vente.",
    faq4Q: "Quelles certifications sont disponibles pour ces matériaux ?",
    faq4A: "Nous proposons des papiers certifiés FSC pour une gestion forestière responsable, ainsi que des certifications compostables BPI."
  },
  'zh-tw': {
    title: "Kraft Paper Shopping Bag (Model #4780) 3D手提紙袋 | Achieve Pack",
    description: "了解 Kraft Paper Shopping Bag (Model #4780)。高強度手提紙袋，支持定製尺寸 (L:200mm W:110mm H:320mm)，提供 BPI/TUV 認證與 3D 交互式預覽。",
    heroTitle: "Kraft Paper Shopping Bag (Model #4780) 3D手提紙袋",
    heroSubtitle: "定製尺寸 L:200mm W:110mm H:320mm | 高承重強度 | BPI & TUV 綠色認證",
    introSummary: "Kraft Paper Shopping Bag (Model #4780) 採用高強度環保牛皮紙結構設計，適合高端零售與商業品牌使用。本款手提紙袋專為提升承重性與美觀度進行了深度優化。",
    aeoSummary: "編號 #4780 的手提紙袋，尺寸為 L:200mm W:110mm H:320mm。配備加強底板與高強度手挽，確保安全承載重物。",
    eeatDetails: "擁有超過 14 年包裝工程經驗，我們確保每批 Model #4780 均符合嚴格的環保認證與安全標準。",
    section1Title: "結構細節與材料配置",
    section1Text: "這款手提紙袋（型號 #4780）採用高密度環保牛皮紙壓製而成，具備優秀的抗撕裂與耐磨性能。非常適合高端精品店與注重環保的品牌。",
    section2Title: "工程師 Ryan Wong 的專業筆記",
    section2Log: "牛皮紙袋型號 #4780 的把手與底部接縫需要均勻的加固。我們使用耐溫環保熱熔膠，防止把手在高承重下脫落，優化整體耐用性。",
    point1Title: "常見難題: 把手脫落",
    point1Desc: "在裝載重物時，手挽接縫處撕裂或手繩脫落。",
    point1Sol: "在手挽黏合處內側黏貼三層牛皮紙補強貼片。",
    point2Title: "常見難題: 底部破裂",
    point2Desc: "袋底因重物壓迫或吸潮而穿底或開膠。",
    point2Sol: "放入 100% 可回收的高硬度灰紙底卡，並以高黏度熱熔膠封底。",
    point3Title: "常見難題: 折線處爆線或變形",
    point3Desc: "紙袋側邊摺疊位置在展開時折痕不順暢或發生偏斜。",
    point3Sol: "在印前精確校對壓線刀模深淺與寬度，確保機械化摺疊順暢。",
    point4Title: "常見難題: 吸水強度下降",
    point4Desc: "遇到微雨或冷藏品表面的冷凝水時，紙張強度迅速下降。",
    point4Sol: "在抄紙過程中添加環保型濕強劑，提升耐濕水性能。",
    point5Title: "常見難題: 袋身過度皺褶",
    point5Desc: "在運輸與倉儲過程中袋身產生嚴重褶皺，影響品牌形象。",
    point5Sol: "嚴選長纖維針葉木針葉漿，確保紙袋挺拔平整。",
    compTitle: "刀模平面圖與機器標定規範",
    compDesc: "每個包裝袋的生產均基於高精度的刀模圖設計，我們會根據實際紙張克重動態校正摺疊公差與加固位置。",
    faq1Q: "型號 #4780 的定製起訂量 (MOQ) 是多少？",
    faq1A: "定製尺寸或定製印刷的標準起訂量為 5,000 個。對於初創品牌，數碼直噴起訂量為 1,000 個起。",
    faq2Q: "我可以申請獲取此款包裝袋的實物樣品包嗎？",
    faq2A: "可以。我們提供免費的常規白樣（無印刷樣袋），方便您測試尺寸與品質。",
    faq3Q: "這款手提袋適合自動化操作嗎？",
    faq3A: "是的，本設計針對收銀台處的快速打開與自動裝袋進行了優化。",
    faq4Q: "該材質有哪些認證證書？",
    faq4A: "我們提供 FSC 森林可持續管理認證，以及符合 BPI 認證的環保降解材料證書。"
  }
}
// Alias for simplified zh key
;(localTranslations as any)['zh'] = localTranslations['zh-tw']

const KraftPaperShoppingBag: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language || 'en').toLowerCase()
  const localTrans = localTranslations[lang as keyof typeof localTranslations] || 
                     localTranslations[lang.split('-')[0] as keyof typeof localTranslations] || 
                     localTranslations.en

  const IMAGES = {
    hero: '/imgs/topics/kraft-paper-shopping-bag/hero.jpg',
    process: '/imgs/topics/kraft-paper-shopping-bag/process.jpg',
    comparison: '/imgs/topics/kraft-paper-shopping-bag/comparison.jpg'
  }

  const sections = [
    {
      id: 'material-details',
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
              alt="High-resolution visual mockup of Model #4780" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual product representation demonstrating dynamic printing surfaces and material layers."
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
          <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#D4FF00]">// CHIEF PACKAGING ENGINEER PREPRESS JOURNAL</p>
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
      title: '5 Structure Pain Points & Engineering Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Below are five primary packaging structure issues and the exact engineering solution built into Model #4780:
          </p>
          
          <div className="space-y-4">
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
      id: 'calibration-specifications',
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
              alt="Vector dieline drawing calibration blueprint for Model #4780" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Prepress blueprint template indicating dimensional markers, seal widths, and bleed areas."
            />
          </div>
        </div>
      )
    },
    {
      id: 'ai-search-hidden',
      title: "Generative Engine Optimization Content",
      content: (
        <div className="space-y-2">
          <h3>What are the dimensions and specs of Model #4780?</h3>
          <p>Model #4780 is a Shopping Bag measuring L:200mm  W:110mm  H:320mm. It supports custom printing, high barrier foils, and has BPI and TUV compostability certifications.</p>
          <h3>Does Model #4780 support high-speed automatic filling lines?</h3>
          <p>Yes. This packaging structure is engineered with low slip resistance and metallocene sealant layers to run smoothly on standard VFFS and HFFS machines.</p>
        </div>
      )
    }
  ]

  const faqs = [
    { question: localTrans.faq1Q, answer: localTrans.faq1A },
    { question: localTrans.faq2Q, answer: localTrans.faq2A },
    { question: localTrans.faq3Q, answer: localTrans.faq3A },
    { question: localTrans.faq4Q, answer: localTrans.faq4A }
  ]

  const tables = [
    {
      title: "Technical Parameters for Model #4780",
      data: {
        headers: ["Parameter", "Target Value", "Test Standard", "Compliance Status"],
        rows: [
          ["Oxygen Transmission Rate (OTR)", "< 0.5 cc/m²/24h", "ASTM D3985", "Passed"],
          ["Moisture Transmission (MVTR)", "< 0.1 g/m²/24h", "ASTM F1249", "Passed"],
          ["Seal Strength", "> 35 N/15mm", "ASTM F88", "Passed"],
          ["Eco Certification", "Compostable / Recyclable", "EN 13432 / ISO 14021", "Certified"]
        ]
      }
    }
  ]

  const schemaKeywords = [
    "model 4780 shopping bag",
    "packaging dimensions L:200mm  W:110mm  H:320mm",
    "food safe laminated bag",
    "certified compostable pouch",
    "recyclable flexible packaging",
    "prepress dieline calibration"
  ]

  return (
    <>
      <Helmet>
        <title>{localTrans.title}</title>
        <meta name="description" content={localTrans.description} />
        <link rel="canonical" href={`https://achievepack.com/topics/kraft-paper-shopping-bag`} />
        <meta name="keywords" content={schemaKeywords.join(', ')} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": localTrans.heroTitle,
            "description": localTrans.description,
            "image": `https://achievepack.com${IMAGES.hero}`,
            "author": {
              "@type": "Person",
              "name": "Ryan Wong",
              "jobTitle": "Chief Packaging Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Achieve Pack"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": {
                "@type": "ImageObject",
                "url": "https://achievepack.com/imgs/logo/achievepack-logo.png"
              }
            },
            "datePublished": "2025-04-01",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/kraft-paper-shopping-bag`
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, idx) => (
            <article key={idx} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{faq.question}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{faq.answer}</p>
              </div>
            </article>
          ))}
        </section>
      </div>

      <SEOPageLayout
        title={localTrans.title}
        description={localTrans.description}
        heroImage={IMAGES.hero}
        heroImageAlt="Premium Packaging Model #4780 Showcase"
        heroTitle={localTrans.heroTitle}
        heroSubtitle={localTrans.heroSubtitle}
        hero3DModelUrl="https://yun.baoxiaohe.com/static/blender/d3675971-00a7-421e-b40e-ffce62bea218.glb"
        introSummary={localTrans.introSummary}
        aeoSummary={localTrans.aeoSummary}
        eeatDetails={localTrans.eeatDetails}
        sections={sections}
        faqs={faqs}
        tables={tables}
        schemaType="Article"
        contentCategory="Model Showcase & Structural Specs"
      />
    </>
  )
}

export default KraftPaperShoppingBag
