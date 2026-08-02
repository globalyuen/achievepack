import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  ArrowRight, CheckCircle, Package, Leaf, Zap, Shield, Sparkles, 
  ChevronDown, ChevronUp, Layers, Check, Mail, Phone, ExternalLink, HelpCircle, FileText, Award
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'

export default function CustomUVTransferStickersPage() {
  const { i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const isPouchDomain = getDomain() === 'pouch'
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const localTranslations = {
    en: {
      metaTitle: "Custom UV Transfer Logo Stickers & Metallic Foil Labels | AchievePack",
      metaDesc: "Elevate your brand with 3D embossed custom UV transfer logo stickers and metallic foil labels. Zero background film, waterproof, low MOQ from 100pcs.",
      heroBadge: "3D Embossed Metallic Finish",
      heroTitle: "Custom UV Transfer Logo Stickers & Metallic Foil Labels",
      heroSubtitle: "Transform glass, metal, wood, and plastic packaging into luxury 3D artwork. Peel-and-stick transfer technology leaves only raised metallic graphics with zero background film.",
      ctaQuote: "Ask for Instant Quote",
      ctaSample: "Request Free Sample Pack",
      
      empathyTitle: "Why Settle for Flat Labels When Your Product Deserves 3D Metallic Luxury?",
      empathyText1: "You spent months perfecting your formula, selecting premium packaging materials, and crafting a unique brand story. Yet when customers pick up your bottle or jar, a standard paper label or clear sticker with visible carrier edges can instantly cheapen the experience.",
      empathyText2: "Traditional metallic foil stamping requires thousands of dollars in custom steel dies and high production minimums that drain startup budgets. Custom UV Transfer Logo Stickers eliminate tooling costs completely—delivering 3D tactile gold, chrome, matte black, and vibrant spot-UV graphics directly onto your container.",

      quickAnswerTitle: "⚡ What are Custom UV Transfer Logo Stickers?",
      quickAnswerText: "UV Transfer Logo Stickers (also known as 3D Crystal Labels or UV Metal Transfers) utilize UV-cured polymer inks and high-tack pressure-sensitive adhesive printed onto a clear release film. When applied to glass, metal, wood, or acrylic, only the raised 3D metallic logo transfers onto the surface, leaving zero background film or adhesive residue.",

      keyTakeawaysTitle: "Key Advantages at a Glance",
      takeaway1: "Zero Background Film: Only the 3D raised graphic transfers onto the container surface.",
      takeaway2: "Universal Substrate Bonding: Adheres seamlessly to Glass, Metal, Plastic, Wood, Leather, & Cardboard.",
      takeaway3: "No Die Tooling Fees: Digital UV printing eliminates expensive steel die stamping charges.",
      takeaway4: "Low MOQ & Fast Turnaround: Low minimum order quantities starting from 100 pcs per design.",
      takeaway5: "Extreme Durability: Waterproof, scratch-resistant, UV-stable, and alcohol-tolerant adhesive.",

      painSectionTitle: "5 Labeling Pain Points & Engineering Solutions",
      pain1Title: "Flat Paper & Vinyl Labels Lack Luxury 3D Perception",
      pain1Desc: "Flat printed labels fail to deliver high-end tactile elegance required by luxury cosmetics, spirits, and premium boutique products.",
      sol1Desc: "3D Embossed UV Transfer technology builds up to 0.4mm raised metallic foil height, producing an authentic die-cast metal emblem texture.",
      
      pain2Title: "Clear Labels Show Ugly Film Edges & Air Bubbles",
      pain2Desc: "Standard clear stickers leave visible outline film borders and trap unsightly air bubbles on smooth glass and metal bottles.",
      sol2Desc: "Peel-and-Stick Transfer Film leaves strictly the raised 3D logo design on the substrate. Zero carrier film or perimeter lines remain after peeling.",
      
      pain3Title: "Traditional Hot Foil Stamping Requires High Tooling Costs & MOQs",
      pain3Desc: "Custom metal hot-stamping dies cost $300-$800 per artwork size with strict 5,000+ unit minimum order thresholds.",
      sol3Desc: "Digital UV Metal Printing bypasses physical dies completely, enabling cost-effective runs starting at just 100 pieces per SKU.",
      
      pain4Title: "Labels Peeling Off or Scuffing During Shipping & Washdown",
      pain4Desc: "Moisture, oil, friction, and cold storage cause low-grade sticker adhesives to lift, wrinkle, or scuff off.",
      sol4Desc: "High-tack UV-cured polymer adhesive cures to 4.8 kg/in peel strength, providing IP67 waterproof, oil-resistant, and scratch-proof performance.",
      
      pain5Title: "Creasing & Lifting on Curved, Tapered, or Textured Containers",
      pain5Desc: "Rigid metal plates and paper labels wrinkle when applied to double-curved flasks, round bottles, or textured wooden box lids.",
      sol5Desc: "Flexible UV Transfer Polymer conforms perfectly around compound curves, spherical caps, and textured substrates without lifting.",

      ryanTitle: "🔬 From Ryan Wong's Engineering Notebook",
      ryanText: "\"When applying UV transfer metallic stickers to glass or frosted containers, always ensure the surface is degreased with isopropyl alcohol to remove manufacturing release silicates. Our UV-cured acrylic adhesive cures to maximum bonding strength within 24 hours, achieving superior 180° peel adhesion even on cold-fill glass bottles.\"",
      ryanAuthor: "Ryan Wong, Co-Founder & Chief Packaging Engineer (14+ Yrs Exp)",

      specTitle: "Technical Specification Matrix",
      specSub: "Compare UV Transfer Stickers against traditional packaging decoration methods.",

      faqTitle: "Frequently Asked Questions",
      faq1Q: "What surfaces can UV Transfer Metallic Stickers be applied to?",
      faq1A: "UV Transfer Stickers adhere to almost all clean, non-porous and semi-porous surfaces including glass, metal, plastic, wood, ceramics, leather, paperboard, and painted surfaces.",
      faq2Q: "What is the minimum order quantity (MOQ) for custom transfer stickers?",
      faq2A: "Our standard MOQ starts at only 100 pieces per artwork design, making it ideal for product launches, seasonal releases, and low-volume luxury packaging.",
      faq3Q: "Are UV transfer stickers waterproof and dishwasher safe?",
      faq3A: "Yes. Once cured (24 hours after application), UV transfer stickers are 100% waterproof, oil-resistant, scratch-resistant, and withstand mild hand washing and refrigeration.",
      faq4Q: "How do I apply UV transfer logo stickers to my containers?",
      faq4A: "1. Clean surface with alcohol. 2. Peel off the backing paper. 3. Firmly press the sticker onto your container using your thumb or a squeegee. 4. Slowly peel away the clear top transfer film.",
      faq5Q: "What artwork file formats are required for printing?",
      faq5A: "Please provide vector artwork in AI, EPS, PDF, or SVG format with vector outlines. Metallic foil layers (Gold, Silver, Rose Gold, Holographic) should be separated onto dedicated spot-color layers."
    },
    es: {
      metaTitle: "Pegatinas de Logotipo de Transferencia UV Personalizadas y Etiquetas Metálicas | AchievePack",
      metaDesc: "Eleve su marca con pegatinas de logotipo de transferencia UV con relieve 3D y etiquetas de lámina metálica. Sin película de fondo, impermeables, MOQ desde 100 unidades.",
      heroBadge: "Acabado Metálico en Relieve 3D",
      heroTitle: "Pegatinas de Logotipo de Transferencia UV y Etiquetas de Lámina Metálica",
      heroSubtitle: "Transforme envases de vidrio, metal, madera y plástico en obras de arte de lujo en 3D. La tecnología de transferencia despegable deja solo gráficos metálicos en relieve.",
      ctaQuote: "Solicitar Cotización Instantánea",
      ctaSample: "Solicitar Paquete de Muestras Gratis",
      
      empathyTitle: "¿Por qué conformarse con etiquetas planas cuando su producto merece lujo metálico en 3D?",
      empathyText1: "Pasó meses perfeccionando su fórmula, seleccionando materiales de empaque de primera calidad y creando una historia de marca única. Sin embargo, una etiqueta de papel estándar puede restar valor al producto.",
      empathyText2: "Las pegatinas de transferencia UV personalizadas eliminan los costos de troqueles metálicos por completo, entregando logotipos dorados, cromados y negros en 3D directamente sobre su envase.",

      quickAnswerTitle: "⚡ ¿Qué son las pegatinas de transferencia UV?",
      quickAnswerText: "Son pegatinas impresas con tintas curadas por UV sobre película transparente. Al aplicarse sobre vidrio, metal o plástico, solo el logotipo metálico en 3D se transfiere a la superficie sin dejar bordes ni residuos de película.",

      keyTakeawaysTitle: "Ventajas Principales",
      takeaway1: "Sin Película de Fondo: Solo el gráfico en relieve 3D se transfiere a la superficie.",
      takeaway2: "Adhesión Universal: Vidrio, Metal, Plástico, Madera, Cuero y Cartón.",
      takeaway3: "Sin Cargos de Troquel: La impresión digital UV elimina el costo de troqueles de acero.",
      takeaway4: "Bajo MOQ: Pedidos mínimos a partir de 100 piezas por diseño.",
      takeaway5: "Alta Durabilidad: Adhesivo resistente al agua, rayones y rayos UV.",

      painSectionTitle: "5 Problemas de Etiquetado y Soluciones de Ingeniería",
      pain1Title: "Etiquetas Planas Carecen de Tacto de Lujo 3D",
      pain1Desc: "Las etiquetas de papel plano no ofrecen la elegancia táctil requerida por productos de alta gama.",
      sol1Desc: "La tecnología de transferencia UV en 3D crea una textura metálica en relieve de hasta 0,4 mm de altura.",
      pain2Title: "Bordes Visibles y Burbujas en Etiquetas Transparentes",
      pain2Desc: "Las pegatinas transparentes dejan bordes visibles y atrapan burbujas de aire.",
      sol2Desc: "La película de transferencia despegable deja estrictamente el diseño del logotipo en relieve 3D sin bordes.",
      pain3Title: "Estampado en Caliente Tradicional Requiere Altos Costos de Troquel",
      pain3Desc: "Los troqueles metálicos de estampado cuestan cientos de dólares con mínimos de 5,000 unidades.",
      sol3Desc: "La impresión metálica UV digital elimina los troqueles, permitiendo pedidos desde 100 piezas.",
      pain4Title: "Desprendimiento o Rayado Durante el Envío",
      pain4Desc: "La humedad y la fricción hacen que los adhesivos de baja calidad se levanten o se rayen.",
      sol4Desc: "El adhesivo acrílico curado por UV ofrece resistencia al agua IP67 y protección contra rayones.",
      pain5Title: "Arrugas en Envases Curvos o Texturizados",
      pain5Desc: "Las etiquetas de papel se arrugan cuando se aplican a botellas curvas o tapas de madera.",
      sol5Desc: "El polímero de transferencia UV flexible se adapta perfectamente a curvas compuestas y superficies texturizadas.",

      ryanTitle: "🔬 Cuaderno de Ingeniería de Ryan Wong",
      ryanText: "\"Al aplicar pegatinas metálicas de transferencia UV sobre envases de vidrio, asegúrese de desengrasar la superficie con alcohol isopropílico. Nuestro adhesivo alcanza su máxima resistencia en 24 horas.\"",
      ryanAuthor: "Ryan Wong, Cofundador e Ingeniero Principal de Empaque (14+ años de exp.)",

      specTitle: "Matriz de Especificaciones Técnicas",
      specSub: "Compare pegatinas de transferencia UV con métodos tradicionales de decoración.",

      faqTitle: "Preguntas Frecuentes",
      faq1Q: "¿A qué superficies se pueden aplicar las pegatinas de transferencia UV?",
      faq1A: "Se adhieren a casi todas las superficies limpias, incluyendo vidrio, metal, plástico, madera, cerámica y cuero.",
      faq2Q: "¿Cuál es la cantidad mínima de pedido (MOQ)?",
      faq2A: "Nuestro MOQ estándar comienza en solo 100 piezas por diseño.",
      faq3Q: "¿Son resistentes al agua y al lavavajillas?",
      faq3A: "Sí. Una vez curadas (24 horas), son 100% resistentes al agua, aceites y rayones.",
      faq4Q: "¿Cómo se aplican las pegatinas?",
      faq4A: "1. Limpie la superficie. 2. Retire el papel posterior. 3. Presione firmemente. 4. Despegue la película transparente superior.",
      faq5Q: "¿Qué formatos de archivo se requieren?",
      faq5A: "Proporcione archivos vectoriales en formato AI, EPS, PDF o SVG."
    },
    fr: {
      metaTitle: "Stickers Logo Transfert UV Personnalisés & Étiquettes Métalliques | AchievePack",
      metaDesc: "Sublimez votre marque avec des stickers transfert UV relief 3D et étiquettes métallisées. Sans film de fond, imperméables, MOQ dès 100 pièces.",
      heroBadge: "Finition Métallique en Relief 3D",
      heroTitle: "Stickers Logo Transfert UV Personnalisés & Étiquettes Métalliques",
      heroSubtitle: "Transformez vos emballages en verre, métal, bois et plastique en œuvres d'art 3D de luxe. La technologie de transfert ne laisse que des graphismes métalliques en relief.",
      ctaQuote: "Demander un Devis Instantané",
      ctaSample: "Demander un Échantillon Gratuit",
      
      empathyTitle: "Pourquoi se contenter d'étiquettes plates quand votre produit mérite le luxe 3D ?",
      empathyText1: "Vous avez passé des mois à perfectionner votre formule. Cependant, une étiquette en papier standard peut déprécier l'apparence de votre produit.",
      empathyText2: "Les stickers transfert UV personnalisés éliminent totalement les frais de moules métalliques, offrant des logos dorés, chromés et noirs en relief 3D directement sur vos flacons.",

      quickAnswerTitle: "⚡ Qu'est-ce qu'un sticker transfert UV ?",
      quickAnswerText: "Ce sont des logos imprimés avec des encres polymères polymérisées par UV sur film transparent. Lors de l'application sur verre ou métal, seul le logo métallique 3D est transféré sans aucun film de fond.",

      keyTakeawaysTitle: "Avantages Clés",
      takeaway1: "Sans Film de Fond: Seul le graphique en relief 3D est transféré sur la surface.",
      takeaway2: "Adhésion Universelle: Verre, Métal, Plastique, Bois, Cuir et Carton.",
      takeaway3: "Aucun Frais d'Outillage: L'impression numérique UV élimine les frais de matrice en acier.",
      takeaway4: "Faible MOQ: Commandes minimales dès 100 pièces par visuel.",
      takeaway5: "Haute Durabilité: Adhésif résistant à l'eau, aux rayures et aux UV.",

      painSectionTitle: "5 Problèmes d'Étiquetage & Solutions Techniques",
      pain1Title: "Manque de Relief et d'Élégance Tactile",
      pain1Desc: "Les étiquettes plates ne fournissent pas le rendu haut de gamme requis par les cosmétiques de luxe.",
      sol1Desc: "La technologie transfert UV 3D crée une texture métallique en relief jusqu'à 0,4 mm de hauteur.",
      pain2Title: "Bords de Film Visibles & Bulles d'Air",
      pain2Desc: "Les autocollants transparents laissent des bordures visibles et piègent des bulles d'air.",
      sol2Desc: "Le film de transfert détachable ne laisse strictement que le logo 3D sur le support.",
      pain3Title: "Frais d'Outillage Élevés du Marquage à Chaud Traditionnel",
      pain3Desc: "Les matrices métalliques coûtent des centaines d'euros avec des minimums de 5 000 unités.",
      sol3Desc: "L'impression numérique UV élimine les matrices, permettant des séries dès 100 pièces.",
      pain4Title: "Décollement ou Rayures Pendant le Transport",
      pain4Desc: "L'humidité et les frottements font décoller ou rayer les adhésifs bas de gamme.",
      sol4Desc: "L'adhésif acrylique polymérisé UV offre une résistance IP67 à l'eau et aux rayures.",
      pain5Title: "Plis sur Surfaces Courbes ou Texturées",
      pain5Desc: "Les étiquettes en papier plissent sur les bouteilles rondes ou couvercles en bois.",
      sol5Desc: "Le polymère de transfert UV flexible s'adapte parfaitement aux surfaces courbes et texturées.",

      ryanTitle: "🔬 Carnet d'Ingénierie de Ryan Wong",
      ryanText: "\"Lors de l'application de stickers métalliques transfert UV sur le verre, veillez à dégraisser la surface à l'alcool isopropylique. Notre adhésif atteint sa force maximale en 24h.\"",
      ryanAuthor: "Ryan Wong, Co-fondateur & Ingénieur Emballage Principal (14+ ans d'exp.)",

      specTitle: "Matrice des Spécifications Techniques",
      specSub: "Comparez les stickers transfert UV aux méthodes traditionnelles de décoration.",

      faqTitle: "Foire Aux Questions",
      faq1Q: "Sur quelles surfaces les stickers transfert UV peuvent-ils être appliqués ?",
      faq1A: "Ils adhèrent à presque toutes les surfaces propres: verre, métal, plastique, bois, céramique, cuir.",
      faq2Q: "Quelle est la quantité minimale de commande (MOQ) ?",
      faq2A: "Notre MOQ démarre à seulement 100 pièces par visuel.",
      faq3Q: "Sont-ils résistants à l'eau et au lave-vaisselle ?",
      faq3A: "Oui. Une fois polymérisés (24h), ils sont 100% étanches, résistants aux huiles et aux rayures.",
      faq4Q: "Comment appliquer les stickers ?",
      faq4A: "1. Nettoyez la surface. 2. Retirez le papier dorsal. 3. Pressez fermement. 4. Retirez le film transparent supérieur.",
      faq5Q: "Quels formats de fichier sont requis ?",
      faq5A: "Veuillez fournir des fichiers vectoriels au format AI, EPS, PDF ou SVG."
    },
    'zh-TW': {
      metaTitle: "客製化 3D 水晶標 UV 轉印貼紙與金屬標誌貼 | AchievePack",
      metaDesc: "為您的品牌打造 3D 立體浮雕 UV 轉印標籤與金屬箔貼紙。無底膜殘留、防水防刮、低 MOQ 100 張起訂。",
      heroBadge: "3D 立體金屬浮雕質感",
      heroTitle: "客製化 UV 轉印金屬標誌貼紙 (水晶標)",
      heroSubtitle: "將玻璃、金屬、木材和塑膠容器升級為奢華 3D 藝術品。撕膜即用轉印技術，僅保留立體金屬圖案，零底膜殘留。",
      ctaQuote: "立即獲取專屬報價",
      ctaSample: "免費索取樣品包",
      
      empathyTitle: "當您的產品值得 3D 金屬質感時，為何要妥協於平面紙質標籤？",
      empathyText1: "您花費數月完善產品配方與容器包裝，但一張普通紙質標籤或帶有明顯透明邊框的貼紙，會瞬間降低品牌的視覺檔次。",
      empathyText2: "傳統燙金工藝需要高昂的金屬模具費與數千張起訂量。客製化 3D 水晶標 UV 轉印貼紙徹底消除模具成本，直接在容器上呈現立體燙金、燙銀與亮面 UV 質感。",

      quickAnswerTitle: "⚡ 什麼是 3D 水晶標 UV 轉印貼紙？",
      quickAnswerText: "UV 轉印貼紙（又稱 3D 水晶標）採用光固化高分子油墨與高粘度壓敏膠印製於離型膜上。轉印至玻璃、金屬、木材或壓克力時，僅立體圖案黏附於表面，不留任何透明底膜或膠痕。",

      keyTakeawaysTitle: "核心優勢一覽",
      takeaway1: "零底膜殘留：僅轉印 3D 立體金屬圖案至容器表面。",
      takeaway2: "萬能材質黏附：完美貼合玻璃、金屬、塑膠、木材、皮革及紙盒。",
      takeaway3: "免開模具費：數位 UV 印刷免除高昂鋼模與燙金版費用。",
      takeaway4: "低 MOQ 快速交貨：單款設計低至 100 張起訂。",
      takeaway5: "極致耐用：防水、防刮、耐紫外線及耐酒精擦拭。",

      painSectionTitle: "5 大標籤痛點與工程解決方案",
      pain1Title: "平面紙標缺乏 3D 奢華立體觸感",
      pain1Desc: "普通平面印刷標籤無法提供高端美妝、烈酒及精品包裝所需的奢華立體質感。",
      sol1Desc: "3D 浮雕 UV 轉印技術可堆疊高達 0.4mm 的立體厚度，呈現如同金屬鑄造徽章的質感。",
      pain2Title: "透明貼紙殘留邊框與氣泡問題",
      pain2Desc: "傳統透明貼紙在光滑玻璃或金屬瓶身貼合時容易產生明顯膠邊與氣泡。",
      sol2Desc: "撕膜轉印技術撕開上層轉印膜後，僅保留立體圖案，完全無底膜外框與氣泡痕跡。",
      pain3Title: "傳統燙金版費高昂且起訂門檻高",
      pain3Desc: "訂製金屬燙金模具費用昂貴，且要求至少 5,000 個以上的批量。",
      sol3Desc: "數位 UV 金屬印刷免開模具，支援 100 張小批量起訂，非常適合新品牌與新產品測試。",
      pain4Title: "運輸與清洗過程中貼紙脫落或刮花",
      pain4Desc: "潮濕、油脂與摩擦容易導致低品質貼紙邊角翹起或字體磨損。",
      sol4Desc: "高粘度 UV 固化丙烯酸膠水提供 IP67 級防水、防油與抗刮能力，剝離強度達 4.8 kg/in。",
      pain5Title: "弧形、圓錐或紋理容器容易起皺",
      pain5Desc: "硬質標籤在貼合雙曲面瓶身、圓形酒瓶或木蓋紋理時容易產生褶皺。",
      sol5Desc: "柔性 UV 轉印聚合物可完美順應複雜曲面與木紋表面，服貼不翹邊。",

      ryanTitle: "🔬 來自 Ryan Wong 的工程筆記",
      ryanText: "「在將 UV 轉印金屬貼紙貼於玻璃或霧面容器前，請務必使用異丙基酒精擦拭表面以去除脫模矽油。我們的 UV 固化膠水在貼合 24 小時後達到最大黏著強度，即使在冷藏瓶身上也能保持優異的 180° 剝離強度。」",
      ryanAuthor: "Ryan Wong，聯合創辦人兼首席包裝工程師（14 年以上經驗）",

      specTitle: "技術規格對比矩陣",
      specSub: "比較 UV 轉印貼紙與傳統包裝裝飾工藝。",

      faqTitle: "常見問題解答",
      faq1Q: "UV 轉印金屬貼紙適用於哪些材質表面？",
      faq1A: "適用於幾乎所有平整或微曲的乾淨非光滑/半光滑表面，包括玻璃、金屬、塑膠、木材、陶瓷、皮革及卡紙。",
      faq2Q: "客製化轉印貼紙的最小起訂量 (MOQ) 是多少？",
      faq2A: "我們的標準 MOQ 僅為 100 張/圖案，非常適合新產品試賣與高端限量版包裝。",
      faq3Q: "轉印貼紙防水防刮嗎？可以放入洗碗機嗎？",
      faq3A: "是的。貼合固化 24 小時後，貼紙 100% 防水、防油、抗刮，耐溫水手洗與冷藏。",
      faq4Q: "如何使用 UV 轉印標誌貼紙？",
      faq4A: "1. 酒精清潔表面。2. 剝離底紙。3. 貼上瓶身並用手指或刮板用力壓實。4. 緩慢撕去表面透明轉印膜。",
      faq5Q: "需要提供什麼格式的設計圖稿？",
      faq5A: "請提供 AI、EPS、PDF 或 SVG 向量圖檔。金屬燙金層（金色、銀色、玫瑰金）請分層設為專色。"
    }
  }

  const tLocal = localTranslations[currentLang as keyof typeof localTranslations] || localTranslations.en

  const SPEC_MATRIX = [
    { feature: "3D Tactile Relief Height", uvTransfer: "Up to 0.4 mm", paperLabel: "Flat (0 mm)", hotFoil: "Embossed (0.1 mm)", directPrint: "Flat (0 mm)" },
    { feature: "Background Carrier Film", uvTransfer: "Zero (Removable Film)", paperLabel: "Paper/BOPP Film Base", hotFoil: "Direct Foil Layer", directPrint: "Zero (Screen Print Ink)" },
    { feature: "Tooling / Die Plate Charge", uvTransfer: "$0 (Digital UV)", paperLabel: "$0 (Digital Die-cut)", hotFoil: "$300 - $800 / size", directPrint: "$150 - $400 / screen" },
    { feature: "Minimum Order Quantity (MOQ)", uvTransfer: "100 pcs", paperLabel: "500 pcs", hotFoil: "5,000 pcs", directPrint: "3,000 pcs" },
    { feature: "Surface Compatibility", uvTransfer: "Glass, Metal, Wood, Plastic, Leather", paperLabel: "Flat Containers Only", hotFoil: "Flat Paper / Board", directPrint: "Rigid Cylindrical Containers" },
    { feature: "Water & Chemical Resistance", uvTransfer: "IP67 Waterproof & Oil-proof", paperLabel: "Vulnerable to Moisture", hotFoil: "Good", directPrint: "High" }
  ]

  const PRODUCT_GALLERY = [
    {
      title: "Custom UV 3D Embossed Metallic Stickers",
      image: "/imgs/store/products/custom-uv-transfer-logo-stickers-thumbnail-1.jpg",
      desc: "Multi-surface application demonstrating gold and silver 3D logo transfers on glass jars, notebooks, wooden boxes, and flasks."
    },
    {
      title: "Zero-Residue Peel & Transfer Technology",
      image: "/imgs/store/products/custom-uv-transfer-logo-stickers-thumbnail-2.jpg",
      desc: "High-tack polymer adhesive transfers only the raised logo artwork onto containers with zero perimeter film lines."
    }
  ]

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <SEOPageLayout
      title={tLocal.metaTitle}
      description={tLocal.metaDesc}
      heroTitle={tLocal.heroTitle}
      heroSubtitle={tLocal.heroSubtitle}
      introSummary={tLocal.quickAnswerText}
      heroImage="/imgs/store/products/custom-uv-transfer-logo-stickers-thumbnail-1.jpg"
      keywords="custom UV transfer stickers, 3D crystal labels, metallic foil logo transfers, peel and stick transfer stickers, custom metal stickers, luxury packaging labels"
      ogImage="/imgs/store/products/custom-uv-transfer-logo-stickers-thumbnail-1.jpg"
    >
      <Helmet>
        <title>{tLocal.metaTitle}</title>
        <meta name="description" content={tLocal.metaDesc} />
        <link rel="canonical" href="https://achievepack.com/custom-uv-transfer-logo-stickers" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Custom UV Transfer Logo Stickers & Metallic Foil Labels",
            "image": [
              "https://achievepack.com/imgs/store/products/custom-uv-transfer-logo-stickers-thumbnail-1.jpg",
              "https://achievepack.com/imgs/store/products/custom-uv-transfer-logo-stickers-thumbnail-2.jpg"
            ],
            "description": tLocal.metaDesc,
            "brand": {
              "@type": "Brand",
              "name": "AchievePack"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "0.05",
              "highPrice": "0.50",
              "offerCount": "1000",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": tLocal.faq1Q,
                "acceptedAnswer": { "@type": "Answer", "text": tLocal.faq1A }
              },
              {
                "@type": "Question",
                "name": tLocal.faq2Q,
                "acceptedAnswer": { "@type": "Answer", "text": tLocal.faq2A }
              },
              {
                "@type": "Question",
                "name": tLocal.faq3Q,
                "acceptedAnswer": { "@type": "Answer", "text": tLocal.faq3A }
              },
              {
                "@type": "Question",
                "name": tLocal.faq4Q,
                "acceptedAnswer": { "@type": "Answer", "text": tLocal.faq4A }
              },
              {
                "@type": "Question",
                "name": tLocal.faq5Q,
                "acceptedAnswer": { "@type": "Answer", "text": tLocal.faq5A }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Quick Specs / Action Toolbar */}
      <div className="bg-neutral-900 border-b border-neutral-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="mailto:info@achievepack.com?subject=Inquiry%20for%20Custom%20UV%20Transfer%20Logo%20Stickers"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-emerald-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>{tLocal.ctaQuote}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => alert('UV 3D Metallic Sticker Technical Spec Sheet PDF is ready! Our engineering team will send the full vector template and spec sheet to your email upon inquiry.')}
              className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-emerald-300 font-medium px-5 py-2.5 rounded-xl border border-emerald-500/30 transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Download Tech Spec Sheet (PDF)</span>
            </button>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-300">
            <div><span className="text-neutral-500">MOQ:</span> <strong className="text-emerald-400">100 Pcs</strong></div>
            <div><span className="text-neutral-500">Tooling:</span> <strong className="text-emerald-400">$0 Free</strong></div>
            <div><span className="text-neutral-500">Rating:</span> <strong className="text-emerald-400">IP67 Waterproof</strong></div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">

        {/* Empathy Hook Section */}
        <section className="bg-neutral-900/50 border border-neutral-800 p-6 md:p-10 rounded-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {tLocal.empathyTitle}
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            {tLocal.empathyText1}
          </p>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            {tLocal.empathyText2}
          </p>
        </section>

        {/* Quick Answer Box */}
        <section className="bg-emerald-950/40 border border-emerald-500/30 p-6 md:p-8 rounded-2xl shadow-sm">
          <h3 className="text-xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
            <span>{tLocal.quickAnswerTitle}</span>
          </h3>
          <p className="text-neutral-200 text-base leading-relaxed">
            {tLocal.quickAnswerText}
          </p>
        </section>

        {/* Product Visual Gallery Showcase */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Visual Product Showcase</h2>
              <p className="text-neutral-400 text-sm sm:text-base">Real-world applications across glass, metal, wood, and acrylic.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCT_GALLERY.map((item, idx) => (
              <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
                <div className="aspect-square overflow-hidden bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Takeaways Grid */}
        <section className="bg-neutral-900 border border-neutral-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span>{tLocal.keyTakeawaysTitle}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[tLocal.takeaway1, tLocal.takeaway2, tLocal.takeaway3, tLocal.takeaway4, tLocal.takeaway5].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-neutral-950 p-4 rounded-xl border border-neutral-800/80">
                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-1 rounded">0{idx + 1}</span>
                <p className="text-neutral-200 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5 Pain Points & Solutions */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              {tLocal.painSectionTitle}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Engineered to solve traditional label detachment, edge bubbles, and expensive tooling fees.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { num: '01', problem: tLocal.pain1Title, probDesc: tLocal.pain1Desc, solDesc: tLocal.sol1Desc },
              { num: '02', problem: tLocal.pain2Title, probDesc: tLocal.pain2Desc, solDesc: tLocal.sol2Desc },
              { num: '03', problem: tLocal.pain3Title, probDesc: tLocal.pain3Desc, solDesc: tLocal.sol3Desc },
              { num: '04', problem: tLocal.pain4Title, probDesc: tLocal.pain4Desc, solDesc: tLocal.sol4Desc },
              { num: '05', problem: tLocal.pain5Title, probDesc: tLocal.pain5Desc, solDesc: tLocal.sol5Desc },
            ].map((card, idx) => (
              <div key={idx} className="bg-neutral-900 border border-neutral-800 p-6 md:p-8 rounded-2xl space-y-4 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                    Problem {card.num}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white">{card.problem}</h3>
                </div>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed pl-1">
                  {card.probDesc}
                </p>
                <div className="bg-emerald-950/60 border border-emerald-500/30 p-4 rounded-xl flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">Engineering Solution</span>
                    <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">{card.solDesc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ryan Wong's Engineering Notebook */}
        <section className="bg-gradient-to-r from-emerald-950 to-neutral-900 border border-emerald-500/40 p-6 md:p-8 rounded-2xl space-y-4">
          <div className="flex items-center gap-3 text-emerald-400">
            <Award className="w-6 h-6" />
            <h3 className="text-lg font-bold uppercase tracking-wider">{tLocal.ryanTitle}</h3>
          </div>
          <p className="text-neutral-200 text-base sm:text-lg italic leading-relaxed">
            {tLocal.ryanText}
          </p>
          <p className="text-emerald-400 text-xs sm:text-sm font-semibold pt-2">
            — {tLocal.ryanAuthor}
          </p>
        </section>

        {/* Technical Specification Matrix */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{tLocal.specTitle}</h2>
            <p className="text-neutral-400 text-sm sm:text-base">{tLocal.specSub}</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-800">
            <table className="w-full text-left text-sm text-neutral-300">
              <thead className="bg-neutral-900 text-xs uppercase tracking-wider text-neutral-400 border-b border-neutral-800">
                <tr>
                  <th className="py-4 px-6">Specification Parameter</th>
                  <th className="py-4 px-6 text-emerald-400 font-bold">UV 3D Transfer Sticker</th>
                  <th className="py-4 px-6">Paper / Vinyl Label</th>
                  <th className="py-4 px-6">Hot Foil Stamping</th>
                  <th className="py-4 px-6">Direct Screen Print</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60 bg-neutral-950">
                {SPEC_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/40 transition-colors">
                    <td className="py-4 px-6 font-medium text-white">{row.feature}</td>
                    <td className="py-4 px-6 font-bold text-emerald-400 bg-emerald-950/20">{row.uvTransfer}</td>
                    <td className="py-4 px-6 text-neutral-400">{row.paperLabel}</td>
                    <td className="py-4 px-6 text-neutral-400">{row.hotFoil}</td>
                    <td className="py-4 px-6 text-neutral-400">{row.directPrint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{tLocal.faqTitle}</h2>
            <p className="text-neutral-400 text-sm sm:text-base">Everything you need to know about UV transfer metallic logo stickers.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { q: tLocal.faq1Q, a: tLocal.faq1A },
              { q: tLocal.faq2Q, a: tLocal.faq2A },
              { q: tLocal.faq3Q, a: tLocal.faq3A },
              { q: tLocal.faq4Q, a: tLocal.faq4A },
              { q: tLocal.faq5Q, a: tLocal.faq5A },
            ].map((faq, idx) => (
              <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-white hover:text-emerald-400 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <div className="p-5 pt-0 text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-neutral-800/60 bg-neutral-950/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* B2B Consultation CTA Footer Card */}
        <section className="bg-gradient-to-r from-emerald-900 via-neutral-900 to-neutral-950 border border-emerald-500/40 p-8 md:p-12 rounded-3xl text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">Ready to Upgrade Your Packaging Labels to 3D Metallic Foil?</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-base sm:text-lg">
            Send us your logo artwork and container dimensions. Our packaging engineering team will deliver a free digital proof and custom quote within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="mailto:info@achievepack.com?subject=Quote%20Request:%20Custom%20UV%20Transfer%20Stickers"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/20"
            >
              <Mail className="w-5 h-5" />
              <span>{tLocal.ctaQuote}</span>
            </a>
          </div>
        </section>

        {/* Visually Hidden GEO Semantic Block */}
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true">
            <article>
              <h3>What are UV transfer logo stickers?</h3>
              <p>{tLocal.quickAnswerText}</p>
            </article>
            <article>
              <h3>What materials do 3D metal stickers stick to?</h3>
              <p>{tLocal.faq1A}</p>
            </article>
          </section>
        </div>

      </div>
    </SEOPageLayout>
  )
}
