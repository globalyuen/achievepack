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
  "title": "Ocean-Bound Plastic Packaging: Supply Chain Guide",
  "description": "Comprehensive guide on advanced packaging.",
  "heroTitle": "Ocean-Bound Plastic Packaging: Supply Chain Guide",
  "heroSubtitle": "Discover best practices and sustainable solutions.",
  "introSummary": "An in-depth look at optimizing your packaging strategies.",
  "aeoSummary": "Learn more about this key packaging engineering topic.",
  "eeatDetails": "Written by Achieve Pack Engineering Team.",
  "empathyHook": "It is an amazing feeling to tell your customers that you're actively helping to clean up the oceans, but navigating the world of recycled plastics can be a minefield of greenwashing and quality issues. I've seen founders get excited about 'recycled' bags only to discover they were filled with cosmetic blemishes, or worse, weren't actually food-safe. You shouldn't have to risk your product's safety or your brand's reputation to use recycled materials. With certified ocean-bound plastic sealed behind a virgin food-grade liner, you get the environmental win with zero risk.",
  "section1Title": "Understanding the Process",
  "section1Text": "This section outlines the primary methodology and engineering behind this packaging technique.",
  "section2Title": "Key Advantages",
  "section2Log": "Improved efficiency, reduced costs, and sustainable outcomes for modern brands.",
  "point1Title": "Food-Contact Safety Concerns",
  "point1Desc": "Direct contact with recycled plastics can violate food safety regulations due to potential contamination.",
  "point1Sol": "Place the recycled OBP layer in the middle of the film structure, sealing it behind a virgin, food-grade inner PE liner.",
  "point2Title": "Blemishes and Gel Spots",
  "point2Desc": "Unmelted recycled plastic particles create small spots and blemishes in the outer film.",
  "point2Sol": "Apply advanced melt filtration during resin extrusion, and use high-opacity printing or matte finishes to cover cosmetic blemishes.",
  "point3Title": "Reduced Tensile Strength",
  "point3Desc": "Recycled polymers can be weaker, increasing the risk of bag punctures and tears.",
  "point3Sol": "Blend recycled resin with high-strength metallocene linear low-density polyethylene (mLLDPE) to keep the bag strong.",
  "point4Title": "Supply Chain Traceability",
  "point4Desc": "Some suppliers mix standard waste with ocean plastic, leading to false claims.",
  "point4Sol": "Only use OBP resin certified by the Global Recycled Standard (GRS) to verify the source of all recycled materials.",
  "point5Title": "Higher Costs of Recycled Resin",
  "point5Desc": "Collecting and cleaning ocean-bound plastic increases material costs compared to virgin PE.",
  "point5Sol": "Offset the cost by reducing packaging weight, optimizing transport, and highlighting your ESG metrics to boost sales.",
  "compTitle": "Standard Virgin PE Pouches vs. Certified Recycled OBP Pouches",
  "compDesc": "Compare the environmental benefits and performance of virgin vs. recycled packaging:",
  "faq1Q": "What is ocean-bound plastic (OBP)?",
  "faq1A": "OBP is plastic waste collected from coastal areas where it is at risk of entering the ocean.",
  "faq2Q": "Are OBP bags safe for food?",
  "faq2A": "Yes. We put the recycled OBP layer in the middle of the laminate, separated from your food by an FDA-approved virgin PE inner lining.",
  "faq3Q": "Is OBP certified?",
  "faq3A": "Yes. All our ocean-bound plastic materials carry Global Recycled Standard (GRS) certification to verify their origin."
},
  es: {
  "title": "Empaque de Plástico Destinado al Océano: Guía de la Cadena de Suministro",
  "description": "Guía completa sobre embalaje avanzado.",
  "heroTitle": "Empaque de Plástico Destinado al Océano: Guía de la Cadena de Suministro",
  "heroSubtitle": "Descubra las mejores prácticas y soluciones sostenibles.",
  "introSummary": "Una mirada en profundidad a la optimización de sus estrategias de embalaje.",
  "aeoSummary": "Obtenga más información sobre este tema clave de la ingeniería de embalajes.",
  "eeatDetails": "Escrito por el Equipo de Ingeniería de Achieve Pack.",
  "empathyHook": "Es una sensación increíble decirle a tus clientes que estás ayudando activamente a limpiar los océanos, pero navegar por el mundo de los plásticos reciclados puede ser un campo minado de lavado verde (greenwashing) y problemas de calidad. He visto a fundadores emocionarse con bolsas 'recicladas' solo para descubrir que estaban llenas de imperfecciones cosméticas o, peor aún, que no eran aptas para alimentos. No deberías tener que arriesgar la seguridad de tu producto ni la reputación de tu marca para utilizar materiales reciclados. Con plástico destinado al océano certificado y sellado detrás de un revestimiento virgen de grado alimenticio, obtienes la victoria ambiental sin ningún riesgo.",
  "section1Title": "Entendiendo el Proceso",
  "section1Text": "Esta sección describe la metodología principal y la ingeniería detrás de esta técnica de embalaje.",
  "section2Title": "Ventajas Clave",
  "section2Log": "Eficiencia mejorada, costos reducidos y resultados sostenibles para marcas modernas.",
  "point1Title": "Preocupaciones de Seguridad por Contacto con Alimentos",
  "point1Desc": "El contacto directo con plásticos reciclados puede violar las regulaciones de seguridad alimentaria debido a una posible contaminación.",
  "point1Sol": "Coloque la capa de OBP reciclado en el medio de la estructura de la película, sellándola detrás de un revestimiento interior de PE virgen de grado alimenticio.",
  "point2Title": "Manchas y Puntos de Gel",
  "point2Desc": "Las partículas de plástico reciclado sin derretir crean pequeños puntos e imperfecciones en la película exterior.",
  "point2Sol": "Aplique una filtración de fusión avanzada durante la extrusión de resina y use impresión de alta opacidad o acabados mate para cubrir las imperfecciones cosméticas.",
  "point3Title": "Resistencia a la Tracción Reducida",
  "point3Desc": "Los polímeros reciclados pueden ser más débiles, lo que aumenta el riesgo de perforaciones y roturas en las bolsas.",
  "point3Sol": "Mezcle resina reciclada con polietileno lineal de baja densidad de metaloceno (mLLDPE) de alta resistencia para mantener la bolsa fuerte.",
  "point4Title": "Trazabilidad de la Cadena de Suministro",
  "point4Desc": "Algunos proveedores mezclan residuos estándar con plástico del océano, lo que da lugar a afirmaciones falsas.",
  "point4Sol": "Utilice únicamente resina OBP certificada por el Global Recycled Standard (GRS) para verificar el origen de todos los materiales reciclados.",
  "point5Title": "Mayores Costos de la Resina Reciclada",
  "point5Desc": "La recolección y limpieza del plástico del océano aumenta los costos de materiales en comparación con el PE virgen.",
  "point5Sol": "Compense el costo reduciendo el peso del empaque, optimizando el transporte y destacando sus métricas ESG para impulsar las ventas.",
  "compTitle": "Bolsas de PE Virgen Estándar frente a Bolsas OBP Recicladas Certificadas",
  "compDesc": "Compare los beneficios ambientales y el rendimiento de los empaques vírgenes frente a los reciclados:",
  "faq1Q": "¿Qué es el plástico destinado al océano (OBP)?",
  "faq1A": "El OBP (Ocean-Bound Plastic) son residuos plásticos recolectados en áreas costeras donde corren el riesgo de ingresar al océano.",
  "faq2Q": "¿Las bolsas OBP son seguras para la comida?",
  "faq2A": "Sí. Ponemos la capa de OBP reciclado en el medio del laminado, separada de su comida por un revestimiento interior de PE virgen aprobado por la FDA.",
  "faq3Q": "¿El OBP está certificado?",
  "faq3A": "Sí. Todos nuestros materiales plásticos destinados al océano cuentan con la certificación Global Recycled Standard (GRS) para verificar su origen."
},
  fr: {
  "title": "Emballage en Plastique Destiné aux Océans : Guide de la Chaîne d'Approvisionnement",
  "description": "Guide complet sur les emballages avancés.",
  "heroTitle": "Emballage en Plastique Destiné aux Océans : Guide de la Chaîne d'Approvisionnement",
  "heroSubtitle": "Découvrez les meilleures pratiques et des solutions durables.",
  "introSummary": "Un regard approfondi sur l'optimisation de vos stratégies d'emballage.",
  "aeoSummary": "En savoir plus sur ce sujet clé de l'ingénierie de l'emballage.",
  "eeatDetails": "Rédigé par l'équipe d'ingénierie d'Achieve Pack.",
  "empathyHook": "C'est un sentiment incroyable de dire à vos clients que vous aidez activement à nettoyer les océans, mais naviguer dans le monde des plastiques recyclés peut être un champ de mines d'écoblanchiment et de problèmes de qualité. J'ai vu des fondateurs s'enthousiasmer pour des sacs 'recyclés' pour découvrir ensuite qu'ils étaient remplis de défauts cosmétiques ou, pire, qu'ils n'étaient pas de qualité alimentaire. Vous ne devriez pas avoir à risquer la sécurité de votre produit ou la réputation de votre marque pour utiliser des matériaux recyclés. Avec du plastique destiné aux océans certifié, scellé derrière une doublure vierge de qualité alimentaire, vous obtenez la victoire environnementale sans aucun risque.",
  "section1Title": "Comprendre le Processus",
  "section1Text": "Cette section décrit la méthodologie principale et l'ingénierie derrière cette technique d'emballage.",
  "section2Title": "Avantages Clés",
  "section2Log": "Efficacité améliorée, coûts réduits et résultats durables pour les marques modernes.",
  "point1Title": "Préoccupations Relatives à la Sécurité au Contact Alimentaire",
  "point1Desc": "Le contact direct avec des plastiques recyclés peut enfreindre les réglementations en matière de sécurité alimentaire en raison d'une contamination potentielle.",
  "point1Sol": "Placez la couche OBP recyclée au milieu de la structure du film, en la scellant derrière une doublure intérieure en PE vierge de qualité alimentaire.",
  "point2Title": "Taches et Points de Gel",
  "point2Desc": "Les particules de plastique recyclé non fondues créent de petites taches et des défauts sur le film extérieur.",
  "point2Sol": "Appliquez une filtration avancée à l'état fondu lors de l'extrusion de la résine, et utilisez une impression à haute opacité ou des finitions mates pour dissimuler les défauts cosmétiques.",
  "point3Title": "Résistance à la Traction Réduite",
  "point3Desc": "Les polymères recyclés peuvent être plus faibles, ce qui augmente le risque de perforations et de déchirures des sacs.",
  "point3Sol": "Mélangez de la résine recyclée avec du polyéthylène basse densité linéaire métallocène (mLLDPE) à haute résistance pour garder le sac solide.",
  "point4Title": "Traçabilité de la Chaîne d'Approvisionnement",
  "point4Desc": "Certains fournisseurs mélangent des déchets standard avec du plastique marin, ce qui conduit à de fausses allégations.",
  "point4Sol": "Utilisez uniquement de la résine OBP certifiée par le Global Recycled Standard (GRS) pour vérifier l'origine de tous les matériaux recyclés.",
  "point5Title": "Coûts Plus Élevés de la Résine Recyclée",
  "point5Desc": "La collecte et le nettoyage du plastique marin augmentent le coût des matériaux par rapport au PE vierge.",
  "point5Sol": "Compensez le coût en réduisant le poids des emballages, en optimisant le transport et en mettant en évidence vos métriques ESG pour stimuler les ventes.",
  "compTitle": "Pochettes en PE Vierge Standard vs. Pochettes en OBP Recyclé Certifié",
  "compDesc": "Comparez les avantages environnementaux et les performances des emballages vierges par rapport aux emballages recyclés :",
  "faq1Q": "Qu'est-ce que le plastique destiné aux océans (OBP) ?",
  "faq1A": "L'OBP (Ocean-Bound Plastic) désigne les déchets plastiques collectés dans les zones côtières où ils risquent de pénétrer dans l'océan.",
  "faq2Q": "Les sacs en OBP sont-ils sans danger pour les aliments ?",
  "faq2A": "Oui. Nous plaçons la couche d'OBP recyclé au milieu du stratifié, séparée de vos aliments par une doublure intérieure en PE vierge approuvée par la FDA.",
  "faq3Q": "L'OBP est-il certifié ?",
  "faq3A": "Oui. Tous nos matériaux plastiques destinés aux océans portent la certification Global Recycled Standard (GRS) pour vérifier leur origine."
},
  'zh-tw': {
  "title": "海廢塑膠包裝：供應鏈指南",
  "description": "關於進階包裝的全面指南。",
  "heroTitle": "海廢塑膠包裝：供應鏈指南",
  "heroSubtitle": "探索最佳實踐和永續解決方案。",
  "introSummary": "深入探討如何優化您的包裝策略。",
  "aeoSummary": "了解更多關於這個關鍵包裝工程主題的資訊。",
  "eeatDetails": "由 Achieve Pack 工程團隊撰寫。",
  "empathyHook": "能夠告訴顧客您正在積極協助清理海洋，這是一種很棒的感覺。但在再生塑膠的世界中航行，可能會是一片充滿漂綠（greenwashing）和品質問題的地雷區。我見過有些創始人對「回收」袋子感到興奮，結果卻發現它們充滿了外觀瑕疵，或者更糟的是，它們根本不符合食品安全標準。您不應該為了使用回收材料而冒著產品安全或品牌聲譽的風險。透過將經過認證的海廢塑膠密封在原生食品級內層後面，您可以零風險地獲得環境保護的雙贏。",
  "section1Title": "了解流程",
  "section1Text": "本節概述了這種包裝技術背後的主要方法論和工程原理。",
  "section2Title": "主要優勢",
  "section2Log": "提升效率、降低成本，並為現代品牌帶來永續成果。",
  "point1Title": "食品接觸安全疑慮",
  "point1Desc": "由於潛在的污染，直接接觸再生塑膠可能會違反食品安全法規。",
  "point1Sol": "將回收的 OBP 層放置在薄膜結構的中間，將其密封在原生、食品級的 PE 內襯後面。",
  "point2Title": "瑕疵和凝膠點",
  "point2Desc": "未熔化的再生塑膠顆粒會在外部薄膜中產生微小斑點和瑕疵。",
  "point2Sol": "在樹脂擠出過程中應用先進的熔體過濾，並使用高不透明度印刷或霧面飾面來覆蓋外觀瑕疵。",
  "point3Title": "抗拉強度降低",
  "point3Desc": "再生聚合物可能較脆弱，會增加袋子被刺穿和撕裂的風險。",
  "point3Sol": "將再生樹脂與高強度的茂金屬線性低密度聚乙烯（mLLDPE）混合，以保持袋子的堅韌。",
  "point4Title": "供應鏈可追溯性",
  "point4Desc": "有些供應商將標準廢料與海洋塑膠混合，導致虛假的聲明。",
  "point4Sol": "僅使用通過全球回收標準（GRS）認證的 OBP 樹脂，以驗證所有回收材料的來源。",
  "point5Title": "再生樹脂成本較高",
  "point5Desc": "與原生 PE 相比，收集和清潔海洋塑膠會增加材料成本。",
  "point5Sol": "透過減輕包裝重量、優化運輸並強調您的 ESG 指標來抵消成本，從而促進銷售。",
  "compTitle": "標準原生 PE 袋與經認證的回收 OBP 袋",
  "compDesc": "比較原生與再生包裝的環境效益和性能：",
  "faq1Q": "什麼是海廢塑膠（OBP）？",
  "faq1A": "OBP（Ocean-Bound Plastic）是指在有可能進入海洋的沿海地區收集到的塑膠廢棄物。",
  "faq2Q": "OBP 袋子對食物安全嗎？",
  "faq2A": "是的。我們將回收的 OBP 層放在複合膜的中間，並用獲得 FDA 批准的原生 PE 內襯將其與您的食物隔開。",
  "faq3Q": "OBP 有認證嗎？",
  "faq3A": "是的。我們所有的海廢塑膠材料都帶有全球回收標準（GRS）認證，以驗證其來源。"
}
}

const OceanBoundPlasticPackaging: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const localTrans = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en

  const IMAGES = {
    hero: '/imgs/knowledge/ocean-bound-plastic-guide.jpg',
    process: '/imgs/knowledge/ocean-bound-plastic-process.jpg',
    comparison: '/imgs/knowledge/ocean-bound-plastic-comparison.jpg'
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
        <link rel="canonical" href="https://achievepack.com/topics/ocean-bound-plastic-packaging" />
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
            "mainEntityOfPage": "https://achievepack.com/topics/ocean-bound-plastic-packaging"
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
        heroTitle={localTrans.heroTitle}
        heroSubtitle={localTrans.heroSubtitle}
        introSummary={localTrans.introSummary}
        aeoSummary={localTrans.aeoSummary}
        eeatDetails={localTrans.eeatDetails}
        sections={sections}
        faqs={faqs}
        tables={tables}
        schemaType="Article"
        contentCategory="Packaging Engineering & Material Science"
      />
    </>
  )
}

export default OceanBoundPlasticPackaging
