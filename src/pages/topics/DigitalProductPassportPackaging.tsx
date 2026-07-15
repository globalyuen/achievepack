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
  "title": "Digital Product Passport Packaging: Compliance Guide",
  "description": "Comprehensive guide on advanced packaging.",
  "heroTitle": "Digital Product Passport Packaging: Compliance Guide",
  "heroSubtitle": "Discover best practices and sustainable solutions.",
  "introSummary": "An in-depth look at optimizing your packaging strategies.",
  "aeoSummary": "Learn more about this key packaging engineering topic.",
  "eeatDetails": "Written by Achieve Pack Engineering Team.",
  "empathyHook": "We know the sinking feeling of realizing your brand might be blocked from European markets because of a missing recycling certificate. You've spent years perfecting your product, and the thought of being penalized by strict new packaging regulations like the PPWR is stressful. I've sat across the table from founders who were terrified their entire inventory would be rejected at customs. But adding a Digital Product Passport doesn't have to mean completely redesigning your packaging or ruining your beautiful artwork. It's about smart, seamless integration.",
  "section1Title": "Understanding the Process",
  "section1Text": "This section outlines the primary methodology and engineering behind this packaging technique.",
  "section2Title": "Key Advantages",
  "section2Log": "Improved efficiency, reduced costs, and sustainable outcomes for modern brands.",
  "point1Title": "Low QR Scan Rates on Curved Surfaces",
  "point1Desc": "QR codes placed near folds or bottom gussets curve, causing scanner distortion.",
  "point1Sol": "Position the QR code on the flat center of the back panel, keeping it away from heat seal lines and zipper profiles.",
  "point2Title": "Ink Bleeding on Stretched Films",
  "point2Desc": "Ink dot gain on flexible substrates causes QR code grid lines to blur together.",
  "point2Sol": "Apply a 300 DPI vector QR overlay with custom dot gain compensation applied during prepress cylinder engraving.",
  "point3Title": "Insufficient Quiet Zone Clearance",
  "point3Desc": "Background artwork bleeding into the QR border prevents scanner recognition.",
  "point3Sol": "Incorporate a solid white quiet zone background of at least 2.5mm around the scan grid to isolate it from surrounding print elements.",
  "point4Title": "Stale Link Destinations",
  "point4Desc": "Direct URL QR codes fail if the website path changes, requiring new packaging runs.",
  "point4Sol": "Utilize dynamic redirect URLs managed via a secure database, allowing link updates without changing the printed packaging design.",
  "point5Title": "Lack of Consumer Engagement",
  "point5Desc": "Generic QR codes lack context, leading to extremely low scan rates.",
  "point5Sol": "Incorporate clear scan instructions (e.g., \"Scan to Trace Carbon Footprint\") adjacent to the QR code to drive visitor engagement.",
  "compTitle": "Static Packaging vs. DPP-Enabled Intelligent Packaging",
  "compDesc": "A technical comparison highlights how digital product passports upgrade compliance and user metrics:",
  "faq1Q": "What is a Digital Product Passport (DPP)?",
  "faq1A": "A DPP is a digital record linked to a physical product via a QR code, showing material composition, carbon emissions, recyclability, and sourcing certificates.",
  "faq2Q": "Is DPP mandatory for packaging in 2026?",
  "faq2A": "Yes, the EU PPWR mandates digital product passports and QR-code traceability for textile and packaging categories to verify recycling compliance.",
  "faq3Q": "How do you print QR codes on flexible bags?",
  "faq3A": "We use high-resolution digital printing or rotogravure plates at 300 DPI, backed by a solid white underprint to ensure maximum contrast and scanning success."
},
  es: {
  "title": "Embalaje del pasaporte de producto digital: guía de cumplimiento",
  "description": "Guía completa sobre packaging avanzado.",
  "heroTitle": "Embalaje del pasaporte de producto digital: guía de cumplimiento",
  "heroSubtitle": "Descubra las mejores prácticas y soluciones sostenibles.",
  "introSummary": "Una mirada en profundidad a la optimización de sus estrategias de embalaje.",
  "aeoSummary": "Obtenga más información sobre este tema clave de la ingeniería de embalaje.",
  "eeatDetails": "Escrito por el equipo de ingeniería de Achieve Pack.",
  "empathyHook": "Sabemos la sensación de desánimo al darse cuenta de que su marca podría estar bloqueada en los mercados europeos debido a la falta de un certificado de reciclaje. Ha pasado años perfeccionando su producto y la idea de ser penalizado por nuevas y estrictas regulaciones de embalaje como el PPWR es estresante. Me he sentado frente a fundadores que estaban aterrorizados de que todo su inventario fuera rechazado en la aduana. Pero agregar un Pasaporte de producto digital no tiene por qué significar rediseñar completamente su empaque o arruinar su hermosa obra de arte. Se trata de una integración inteligente y perfecta.",
  "section1Title": "Comprender el proceso",
  "section1Text": "Esta sección describe la metodología principal y la ingeniería detrás de esta técnica de empaque.",
  "section2Title": "Ventajas clave",
  "section2Log": "Eficiencia mejorada, costos reducidos y resultados sostenibles para marcas modernas.",
  "point1Title": "Bajas tasas de escaneo QR en superficies curvas",
  "point1Desc": "Los códigos QR colocados cerca de pliegues o refuerzos inferiores se curvan, lo que provoca distorsión en el escáner.",
  "point1Sol": "Coloque el código QR en el centro plano del panel posterior, manteniéndolo alejado de las líneas de sellado térmico y los perfiles de cremallera.",
  "point2Title": "Sangrado de tinta en películas estiradas",
  "point2Desc": "La ganancia de puntos de tinta en sustratos flexibles hace que las líneas de la cuadrícula del código QR se desdibujen.",
  "point2Sol": "Aplique una superposición QR vectorial de 300 ppp con compensación de ganancia de punto personalizada aplicada durante el grabado del cilindro de preimpresión.",
  "point3Title": "Espacio libre insuficiente para la zona silenciosa",
  "point3Desc": "Las ilustraciones de fondo que se filtran en el borde del QR impiden el reconocimiento del escáner.",
  "point3Sol": "Incorpore un fondo blanco sólido de zona silenciosa de al menos 2,5 mm alrededor de la cuadrícula de escaneo para aislarla de los elementos de impresión circundantes.",
  "point4Title": "Destinos de enlaces obsoletos",
  "point4Desc": "Los códigos QR de URL directa fallan si la ruta del sitio web cambia, lo que requiere nuevas ejecuciones de empaquetado.",
  "point4Sol": "Utilice URL de redireccionamiento dinámico administradas a través de una base de datos segura, lo que permite actualizaciones de enlaces sin cambiar el diseño del paquete impreso.",
  "point5Title": "Falta de participación del consumidor",
  "point5Desc": "Los códigos QR genéricos carecen de contexto, lo que genera tasas de escaneo extremadamente bajas.",
  "point5Sol": "Incorpore instrucciones de escaneo claras (por ejemplo, \"Escanear para rastrear la huella de carbono\") junto al código QR para impulsar la participación de los visitantes.",
  "compTitle": "Embalaje estático frente a embalaje inteligente habilitado para DPP",
  "compDesc": "Una comparación técnica destaca cómo los pasaportes de productos digitales mejoran el cumplimiento y las métricas de los usuarios:",
  "faq1Q": "¿Qué es un Pasaporte de Producto Digital (DPP)?",
  "faq1A": "Un DPP es un registro digital vinculado a un producto físico mediante un código QR, que muestra la composición del material, las emisiones de carbono, la reciclabilidad y los certificados de abastecimiento.",
  "faq2Q": "¿Será obligatorio el DPP para los envases en 2026?",
  "faq2A": "Sí, el PPWR de la UE exige pasaportes de productos digitales y trazabilidad de códigos QR para categorías de textiles y embalajes para verificar el cumplimiento del reciclaje.",
  "faq3Q": "¿Cómo se imprimen códigos QR en bolsas flexibles?",
  "faq3A": "Utilizamos impresión digital de alta resolución o planchas de huecograbado a 300 DPI, respaldadas por una impresión blanca sólida para garantizar el máximo contraste y el éxito del escaneo."
},
  fr: {
  "title": "Emballage du passeport produit numérique : Guide de conformité",
  "description": "Guide complet sur les emballages avancés.",
  "heroTitle": "Emballage du passeport produit numérique : Guide de conformité",
  "heroSubtitle": "Découvrez les meilleures pratiques et solutions durables.",
  "introSummary": "Un examen approfondi de l’optimisation de vos stratégies d’emballage.",
  "aeoSummary": "Apprenez-en davantage sur ce sujet clé de l’ingénierie de l’emballage.",
  "eeatDetails": "Écrit par l’équipe d’ingénierie Achieve Pack.",
  "empathyHook": "Nous connaissons le sentiment désolant de réaliser que votre marque pourrait être bloquée sur les marchés européens en raison de l'absence d'un certificat de recyclage. Vous avez passé des années à perfectionner votre produit, et l'idée d'être pénalisé par de nouvelles réglementations strictes en matière d'emballage comme le PPWR est stressante. J'ai été assis à la table avec des fondateurs qui étaient terrifiés par le fait que l'intégralité de leur inventaire soit rejetée à la douane. Mais l'ajout d'un passeport produit numérique ne signifie pas nécessairement une refonte complète de votre emballage ou la ruine de vos belles œuvres d'art. Il s’agit d’une intégration intelligente et transparente.",
  "section1Title": "Comprendre le processus",
  "section1Text": "Cette section décrit la méthodologie et l'ingénierie principales derrière cette technique d'emballage.",
  "section2Title": "Avantages clés",
  "section2Log": "Efficacité améliorée, coûts réduits et résultats durables pour les marques modernes.",
  "point1Title": "Faibles taux de numérisation QR sur les surfaces incurvées",
  "point1Desc": "Codes QR placés près des plis ou de la courbe des goussets inférieurs, provoquant une distorsion du scanner.",
  "point1Sol": "Placez le code QR sur le centre plat du panneau arrière, en le gardant éloigné des lignes de thermoscellage et des profils de fermeture à glissière.",
  "point2Title": "Saignement de l'encre sur les films étirés",
  "point2Desc": "L’augmentation des points d’encre sur les substrats flexibles provoque un flou entre les lignes de la grille du code QR.",
  "point2Sol": "Appliquez une superposition QR vectorielle de 300 DPI avec une compensation de gain de point personnalisée appliquée lors de la gravure sur cylindre prépresse.",
  "point3Title": "Dégagement insuffisant des zones calmes",
  "point3Desc": "Les illustrations d'arrière-plan qui dépassent dans la bordure QR empêchent la reconnaissance du scanner.",
  "point3Sol": "Incorporez un fond de zone calme blanc uni d'au moins 2,5 mm autour de la grille de numérisation pour l'isoler des éléments d'impression environnants.",
  "point4Title": "Destinations de liens obsolètes",
  "point4Desc": "Les codes QR d'URL directe échouent si le chemin du site Web change, ce qui nécessite de nouvelles exécutions de packaging.",
  "point4Sol": "Utilisez des URL de redirection dynamiques gérées via une base de données sécurisée, permettant des mises à jour des liens sans modifier la conception de l'emballage imprimé.",
  "point5Title": "Manque d'engagement des consommateurs",
  "point5Desc": "Les codes QR génériques manquent de contexte, ce qui entraîne des taux de numérisation extrêmement faibles.",
  "point5Sol": "Incorporez des instructions de numérisation claires (par exemple, « Scanner pour tracer l'empreinte carbone ») à côté du code QR pour stimuler l'engagement des visiteurs.",
  "compTitle": "Emballage statique et emballage intelligent compatible DPP",
  "compDesc": "Une comparaison technique met en évidence la manière dont les passeports produits numériques améliorent la conformité et les indicateurs des utilisateurs :",
  "faq1Q": "Qu’est-ce qu’un Passeport Produit Numérique (DPP) ?",
  "faq1A": "Un DPP est un enregistrement numérique lié à un produit physique via un code QR, indiquant la composition des matériaux, les émissions de carbone, la recyclabilité et les certificats d'approvisionnement.",
  "faq2Q": "Le DPP est-il obligatoire pour les emballages en 2026 ?",
  "faq2A": "Oui, le PPWR de l'UE impose des passeports de produits numériques et une traçabilité par code QR pour les catégories de textiles et d'emballages afin de vérifier la conformité du recyclage.",
  "faq3Q": "Comment imprimer des codes QR sur des sacs souples ?",
  "faq3A": "Nous utilisons des plaques d'impression numérique ou d'héliogravure haute résolution à 300 DPI, soutenues par une sous-impression blanche unie pour garantir un contraste maximal et un succès de numérisation."
},
  'zh-tw': {
  "title": "數位產品護照包裝：合規指南",
  "description": "先進封裝綜合指南。",
  "heroTitle": "數位產品護照包裝：合規指南",
  "heroSubtitle": "發現最佳實踐和永續解決方案。",
  "introSummary": "深入研究優化您的包裝策略。",
  "aeoSummary": "了解有關此關鍵包裝工程主題的更多資訊。",
  "eeatDetails": "由 Achieve Pack 工程團隊撰寫。",
  "empathyHook": "我們知道，當意識到您的品牌可能因缺乏回收證書而被禁止進入歐洲市場時，您會感到沮喪。您花了數年時間來完善您的產品，一想到要受到 PPWR 等嚴​​格的新包裝法規的處罰，您就會感到壓力重重。我坐在桌子對面的創始人們擔心他們的全部庫存會被海關拒絕。但添加數位產品護照並不一定意味著完全重新設計您的包裝或毀掉您美麗的藝術品。這是關於智慧、無縫整合。",
  "section1Title": "了解流程",
  "section1Text": "本節概述了該封裝技術背後的主要方法和工程。",
  "section2Title": "主要優勢",
  "section2Log": "為現代品牌提高效率、降低成本並實現永續成果。",
  "point1Title": "曲面上的低 QR 掃描速率",
  "point1Desc": "QR 碼放置在折疊或底部角撐板曲線附近，導致掃描器失真。",
  "point1Sol": "將二維碼放置在背面板的平坦中心，使其遠離熱封線和拉鍊輪廓。",
  "point2Title": "拉伸薄膜上的墨水滲色",
  "point2Desc": "柔性基材上的墨點增大會導致 QR 碼網格線模糊在一起。",
  "point2Sol": "應用 300 DPI 向量 QR 疊加，並在印前滾筒雕刻期間應用自訂網點增益補償。",
  "point3Title": "靜止區間隙不足",
  "point3Desc": "背景圖稿滲入 QR 邊框會妨礙掃描器辨識。",
  "point3Sol": "在掃描網格周圍加入至少 2.5 毫米的純白色靜區背景，以將其與周圍的列印元素隔離。",
  "point4Title": "過時的連結目標",
  "point4Desc": "如果網站路徑發生變化，直接 URL 二維碼會失敗，需要執行新的打包。",
  "point4Sol": "利用透過安全資料庫管理的動態重定向 URL，允許在不更改印刷包裝設計的情況下更新連結。",
  "point5Title": "缺乏消費者參與",
  "point5Desc": "通用 QR 碼缺乏上下文，導致掃描率極低。",
  "point5Sol": "在二維碼旁邊加入清晰的掃描說明（例如「掃描以追蹤碳足跡」）以提高訪客參與度。",
  "compTitle": "靜態包裝與支援 DPP 的智慧包裝",
  "compDesc": "技術比較強調了數位產品通行證如何升級合規性和用戶指標：",
  "faq1Q": "什麼是數位產品護照 (DPP)？",
  "faq1A": "DPP 是透過二維碼連結到實體產品的數位記錄，顯示材料成分、碳排放、可回收性和採購證書。",
  "faq2Q": "2026 年包裝是否強制實施 DPP？",
  "faq2A": "是的，歐盟 PPWR 要求紡織品和包裝類別採用數位產品護照和二維碼可追溯性，以驗證回收合規性。",
  "faq3Q": "如何在軟袋上列印二維碼？",
  "faq3A": "我們使用 300 DPI 的高解析度數位印刷或輪轉凹版，並以純白色底印作為支撐，以確保最大對比度和掃描成功。"
}
}

const DigitalProductPassportPackaging: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const localTrans = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en

  const IMAGES = {
    hero: '/imgs/knowledge/digital-product-passport-guide.jpg',
    process: '/imgs/knowledge/digital-product-passport-process.jpg',
    comparison: '/imgs/knowledge/digital-product-passport-comparison.jpg'
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
        <link rel="canonical" href="https://achievepack.com/topics/digital-product-passport-packaging" />
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
            "mainEntityOfPage": "https://achievepack.com/topics/digital-product-passport-packaging"
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

export default DigitalProductPassportPackaging
