import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import SEOPageLayout from '../../components/SEOPageLayout'
import { ShieldCheck, HelpCircle, Factory, CheckCircle2, Scale } from 'lucide-react'
import { getDomain } from '../../utils/domain'

const translations = {
  en: {
    title: "Fin Seal vs Lap Seal: Complete Guide to Flexible Packaging Seams",
    metaDesc: "Compare fin seal and lap seal in flexible packaging. Learn the differences in seal strength, material savings, and cosmetic appearance.",
    heroTitle: "Fin Seal vs Lap Seal: Flexible Packaging Back Seams",
    heroSubtitle: "An engineering guide to optimizing seal strength, material consumption, and shelf appeal.",
    introSummary: "Quick Summary: A fin seal joins the two inner sealant layers together (inside-to-inside), creating a strong, hermetic fin-like seam. A lap seal overlaps the film edges (inside-to-outside), creating a flatter seam that uses 10-15% less material but offers lower seal strength.",
    
    section1Title: "Understanding Flexible Packaging Back Seams",
    section1P1: "When a flat packaging film is rolled and formed into a pouch on a vertical form fill seal (VFFS) or horizontal form fill seal (HFFS) machine, the film edges must be sealed down the back. This joint is known as the back seam. Selecting the correct seam type is a critical engineering decision that affects the pouch's barrier properties, structural integrity, and manufacturing cost.",
    section1P2: "For high-barrier pouches containing sensitive goods like coffee, infant formula, or liquid concentrates, a robust seal is mandatory. Conversely, lightweight snack packaging often prioritizes material savings and graphic continuity.",
    
    painPointsTitle: "5 Sealing Pain Points & Engineering Solutions",
    pain1p: "1. Seam Bursting and Leaking During Transit",
    pain1s: "Lap seals depend on the adhesion between the inner sealant and outer heat-resistant layers. Under shipping pressure, this weak interface can fail. Solution: We utilize Fin Seals (inside-to-inside PE bonding) to create a high-strength hermetic weld, yielding a 99.9% leak-free transit rate.",
    pain2p: "2. Graphic Interruption on the Back Panel",
    pain2s: "Fin seals create a protruding fin that can split and distort critical barcodes, nutrition tables, or branding text. Solution: We offer tacked-down fin seals where the fin is flattened and heat-sealed to one side, keeping the back panel smooth and readable.",
    pain3p: "3. High Film Material Waste and Overhead",
    pain3s: "Fin seals require an extra 12-20mm of film width per pouch to form the pinched fin, leading to high material costs. Solution: For non-sensitive, lightweight items like potato chips, we transition the line to a Lap Seal, saving up to 15% in raw film area.",
    pain4p: "4. Channel Leaking in Liquid or Powder Packaging",
    pain4s: "Liquid or fine powder can get trapped in the junction of a lap seal, creating channels for air and moisture. Solution: We enforce multi-point temperature-calibrated fin seals that melt and fuse the inner polyethylene layers, blocking product migration.",
    pain5p: "5. Wrinkling and Burn-Through During High-Speed Sealing",
    pain5s: "Inconsistent dwell times or temperature spikes on VFFS seal jaws can cause film wrinkling or seal burn-through. Solution: We recommend co-extruded films with a wider seal window (e.g., MOpp/PE) paired with continuous-motion seal bar rollers.",

    expertTitle: "From Ryan Wong's Engineering Notebook",
    expertInsight: "\"During a high-speed Vertical Form Fill Seal (VFFS) production run for a BRC-certified coffee client, we encountered persistent micro-leaks along the back seam. The client was utilizing a co-extruded film with a Lap Seal structure to save 12% on film consumption. However, because the outer polyester layer wasn't fully compatible with the inner polyethylene sealant layer under high-speed thermal contact, microscopic channels formed. We redesigned the flow-wrap forming collar to switch to a tacked-down Fin Seal (inside-to-inside bonding). This change eliminated the leakage rate entirely (reducing it from 4.2% to 0.0%) while maintaining a flat, retail-ready back panel.\"",
    expertBio: "Ryan Wong — Co-Founder & Chief Packaging Engineer (14+ Years Experience)",
    
    tableTitle: "Technical Specification Matrix",
    param: "Parameter",
    finSpec: "Fin Seal Specification",
    lapSpec: "Lap Seal Specification",
    structure: "Seal Structure",
    structureFin: "Inside-to-Inside (Sealant to Sealant)",
    structureLap: "Inside-to-Outside (Sealant to Outer Layer)",
    strength: "Tensile Seam Strength",
    strengthFin: "High (Hermetic weld)",
    strengthLap: "Moderate to Low (Adhesive dependent)",
    savings: "Material Utilization",
    savingsFin: "Standard (Requires 12-20mm fin flap)",
    savingsLap: "Excellent (Saves 10-15% film width)",
    compat: "Film Compatibility",
    compatFin: "Works with single-side sealable films",
    compatLap: "Requires double-side sealable/treated films",
    apps: "Typical Applications",
    appsFin: "Coffee, liquid, pet food, medical pouches",
    appsLap: "Potato chips, candy bars, dry snacks"
  },
  'zh-TW': {
    title: "Fin Seal 對比 Lap Seal：軟包裝背封封口類型終極指南",
    metaDesc: "比較軟包裝中的鰭形封口（Fin Seal）與重疊封口（Lap Seal）。了解它們在封口強度、材料節省及外觀上的關鍵差異與工程應用。",
    heroTitle: "Fin Seal 對比 Lap Seal：軟包裝背封技術",
    heroSubtitle: "優化您的軟包裝生產線：封口強度、材料消耗與貨架美觀的平衡。",
    introSummary: "快速總結：鰭形封口（Fin Seal）將兩個內側熱封層（內對內）結合，形成高強度的氣密鰭狀接縫。重疊封口（Lap Seal）將薄膜邊緣重疊（內對外），接縫更平整，可節省 10-15% 的材料，但封口強度較低。",
    
    section1Title: "認識軟包裝背封（背合線）",
    section1P1: "當平整的包裝卷膜在立式成型填充包裝機（VFFS）或臥式成型包裝機（HFFS）上成型為包裝袋時，薄膜的邊緣必須在背面進行封合。這條接縫被稱為背封或背合線。選擇正確的背封類型是一項關鍵的工程決策，直接影響包裝袋的阻隔性能、結構強度和生產成本。",
    section1P2: "對於包裝咖啡、嬰兒配方奶粉或液體濃縮物等敏感貨物的高阻隔包裝袋，必須採用堅固的氣密性封口。相反，輕量級的零食包裝通常更注重材料節省和圖案的完整性。",
    
    painPointsTitle: "5 個背封痛點與工程解決方案",
    pain1p: "1. 運輸途中接縫破裂與漏氣",
    pain1s: "重疊封口依賴於內側熱封層與外側耐熱層之間的黏合力。在運輸壓力下，這個脆弱的界面容易失效。解決方案：我們採用鰭形封口（內對內 PE 黏合）來創建高強度的氣密熔接，達到 99.9% 的運輸無洩漏率。",
    pain2p: "2. 背面圖案與資訊被接縫中斷",
    pain2s: "鰭形封口會產生一個突出的鰭片，這會遮擋或切斷關鍵的條碼、營養成分表或品牌文字。解決方案：我們提供貼平處理的鰭形封口，將鰭片壓平並熱封在其中一側，保持背面平整且易於閱讀。",
    pain3p: "3. 薄膜材料浪費大，生產成本高",
    pain3s: "鰭形封口每個袋子需要額外 12-20mm 的薄膜寬度來形成夾緊的鰭片，增加了材料成本。解決方案：對於馬鈴薯片等非敏感、輕量的物品，我們將生產線轉換為重疊封口，節省高達 15% 的薄膜面積。",
    pain4p: "4. 液體或粉末包裝中的毛細通道洩漏",
    pain4s: "液體或超細粉末可能會被夾在重疊封口的接合處，形成空氣和水分進入的通道。解決方案：我們執行多點溫度校準的鰭形封口，使內層聚乙烯完全熔合，阻斷產品向外遷移。",
    pain5p: "5. 高速封口過程中的皺褶與燙穿",
    pain5s: "VFFS 熱封刀的壓緊時間不一致或溫度驟升會導致薄膜起皺或熔穿。解決方案：我們推薦使用具有更寬封口溫度窗口的共擠薄膜（如 MOpp/PE），並搭配連續運動式封口滾輪。",

    expertTitle: "來自 Ryan Wong 的工程筆記",
    expertInsight: "「在為一家獲得 BRC 認證的咖啡客戶進行高速立式成型填充包裝（VFFS）生產時，我們發現背封處持續出現微小漏氣。該客戶當時使用具有重疊封口（Lap Seal）結構的共擠薄膜，以節省 12% 的薄膜消耗。然而，由於外層聚酯在高速熱接觸下無法與內層聚乙烯完全熔合，形成了微小的毛細通道。我們重新設計了包裝機的成型器領口，切換為貼平的鰭形封口（Fin Seal，內對內熔接）。這一改動將洩漏率徹底降為零（從 4.2% 降至 0.0%），同時保持了平整且美觀的背面外觀。」",
    expertBio: "Ryan Wong — 聯合創始人兼首席包裝工程師（14年以上行業經驗）",
    
    tableTitle: "背封技術指標對比矩陣",
    param: "參數",
    finSpec: "鰭形封口 (Fin Seal)",
    lapSpec: "重疊封口 (Lap Seal)",
    structure: "封口結構",
    structureFin: "內層對內層 (熱封層對熱封層)",
    structureLap: "內層對外層 (熱封層對外層耐熱層)",
    strength: "抗拉封口強度",
    strengthFin: "極高 (氣密熔接)",
    strengthLap: "中等至偏低 (取決於層間黏合力)",
    savings: "薄膜材料利用率",
    savingsFin: "標準 (需要額外 12-20mm 鰭片寬度)",
    savingsLap: "極佳 (節省 10-15% 的薄膜寬度)",
    compat: "薄膜兼容性",
    compatFin: "適用於單面可熱封薄膜",
    compatLap: "需要雙面可熱封/特殊處理薄膜",
    apps: "典型應用領域",
    appsFin: "咖啡、液體、寵物食品、醫療包裝袋",
    appsLap: "薯片、糖果包裝、乾燥零食"
  },
  es: {
    title: "Fin Seal vs Lap Seal: Guía Completa de Sellos para Empaques Flexibles",
    metaDesc: "Compare el sello tipo aleta (fin seal) y el sello superpuesto (lap seal) en empaques flexibles. Conozca las diferencias en resistencia, costos y estética.",
    heroTitle: "Fin Seal vs Lap Seal: Sellos Posteriores de Empaque",
    heroSubtitle: "Guía de ingeniería para optimizar la resistencia del sello, el consumo de material y el atractivo visual.",
    introSummary: "Resumen rápido: Un sello fin seal une las dos capas sellantes internas (interno con interno), creando una soldadura hermética y fuerte. Un sello lap seal superpone los bordes de la película (interno con externo), creando un sello más plano que ahorra 10-15% de material pero tiene menor resistencia.",
    
    section1Title: "Comprensión de los Sellos Posteriores en Empaques Flexibles",
    section1P1: "Cuando una película plana de empaque se enrolla y se forma en una bolsa en una máquina de formado, llenado y sellado vertical (VFFS) u horizontal (HFFS), los bordes deben sellarse en la parte posterior. Esta junta se conoce como sello posterior. Seleccionar el tipo de sello adecuado es una decisión crítica de ingeniería que afecta las propiedades de barrera, la integridad estructural y el costo de fabricación de la bolsa.",
    section1P2: "Para bolsas de alta barrera que contienen productos sensibles como café, leche en polvo para bebés o líquidos, es obligatorio un sello robusto y hermético. Por el contrario, los empaques de snacks ligeros suelen priorizar el ahorro de material y la continuidad gráfica.",
    
    painPointsTitle: "5 Puntos de Dolor del Sellado y Soluciones de Ingeniería",
    pain1p: "1. Rotura del Sello y Fugas Durante el Transporte",
    pain1s: "Los sellos lap seal dependen de la adhesión entre el sellante interno y la capa externa resistente al calor. Bajo la presión del envío, esta interfaz débil puede fallar. Solución: Utilizamos sellos Fin Seal (unión PE interno con interno) para crear una soldadura hermética de alta resistencia, garantizando un 99.9% de envíos sin fugas.",
    pain2p: "2. Interrupción Gráfica en el Panel Posterior",
    pain2s: "Un sello fin seal crea una aleta sobresaliente que puede dividir y distorsionar códigos de barras críticos, tablas nutricionales o textos de marca. Solución: Ofrecemos sellos fin seal pegados hacia un lado, donde la aleta se aplana y se termosella, manteniendo el panel posterior liso y legible.",
    pain3p: "3. Alto Desperdicio de Película y Costos Adicionales",
    pain3s: "El sello fin seal requiere un ancho adicional de 12-20 mm de película por bolsa para formar la aleta pellizcada, lo que genera costos de material más altos. Solución: Para artículos ligeros no sensibles como papas fritas, cambiamos la línea a un sello Lap Seal, ahorrando hasta un 15% en el área de película cruda.",
    pain4p: "4. Fugas de Canal en Empaques de Líquidos o Polvos",
    pain4s: "El líquido o el polvo fino pueden quedar atrapados en la unión de un sello lap seal, creando canales para el aire y la humedad. Solución: Implementamos sellos fin seal calibrados con temperatura multipunto que funden y fusionan las capas internas de polietileno, bloqueando la migración del producto.",
    pain5p: "5. Arrugas y Quemaduras Durante el Sellado a Alta Velocidad",
    pain5s: "Los tiempos de sellado inconsistentes o los picos de temperatura en las mordazas de sellado VFFS pueden causar arrugas en la película o quemaduras en el sello. Solución: Recomendamos películas coextruidas con una ventana de sellado más amplia (por ejemplo, MOpp/PE) combinadas con rodillos de mordaza de sellado de movimiento continuo.",

    expertTitle: "Del Cuaderno de Ingeniería de Ryan Wong",
    expertInsight: "\"Durante una producción de alta velocidad con una máquina Formadora, Llenadora y Selladora Vertical (VFFS) para un cliente de café certificado por BRC, encontramos microfugas persistentes a lo largo del sello posterior. El cliente utilizaba una película coextruida con una estructura de sello Lap Seal para ahorrar un 12% en el consumo de película. Sin embargo, debido a que la capa de poliéster exterior no era totalmente compatible con la capa de polietileno sellante interior bajo el calor rápido, se formaron canales microscópicos. Rediseñamos el cuello formador para cambiar a un sello Fin Seal (unión interno con interno). Este cambio eliminó la tasa de fugas por completo (reduciéndola del 4.2% al 0.0%) al tiempo que mantuvo un panel posterior plano y comercialmente atractivo.\"",
    expertBio: "Ryan Wong — Co-Fundador y Jefe de Ingeniería de Empaques (14+ años de experiencia)",
    
    tableTitle: "Matriz Comparativa de Especificaciones Técnicas",
    param: "Parámetro",
    finSpec: "Especificación de Fin Seal",
    lapSpec: "Especificación de Lap Seal",
    structure: "Estructura del Sello",
    structureFin: "Interno con Interno (Sellante con Sellante)",
    structureLap: "Interno con Externo (Sellante con Capa Externa)",
    strength: "Resistencia del Sello",
    strengthFin: "Alta (Soldadura hermética)",
    strengthLap: "Moderada a Baja (Depende del adhesivo)",
    savings: "Utilización de Material",
    savingsFin: "Estándar (Requiere aleta de 12-20 mm)",
    savingsLap: "Excelente (Ahorra 10-15% en el ancho de película)",
    compat: "Compatibilidad de Película",
    compatFin: "Funciona con películas sellables de un solo lado",
    compatLap: "Requiere películas tratadas/sellables de ambos lados",
    apps: "Aplicaciones Típicas",
    appsFin: "Bolsas de café, líquidos, alimentos para mascotas, bolsas médicas",
    appsLap: "Papas fritas, barras de chocolate, snacks secos"
  },
  fr: {
    title: "Fin Seal vs Lap Seal : Guide Complet des Soudures pour Emballages Flexibles",
    metaDesc: "Comparez la soudure à ailette (fin seal) et la soudure par recouvrement (lap seal) en emballage flexible. Découvrez les différences de résistance, de coût et d'esthétique.",
    heroTitle: "Fin Seal vs Lap Seal : Soudures d'Emballages Flexibles",
    heroSubtitle: "Guide d'ingénierie pour optimiser la résistance des soudures, la consommation de matériaux et l'impact visuel.",
    introSummary: "Résumé rapide : Une soudure fin seal assemble les deux couches scellables internes (intérieur sur intérieur), créant une soudure hermétique très résistante. Une soudure lap seal chevauche les bords du film (intérieur sur extérieur), offrant un aspect plus plat qui économise 10 à 15% de film mais offre une résistance moindre.",
    
    section1Title: "Comprendre les Soudures Dorsales d'Emballages Flexibles",
    section1P1: "Lorsqu'un film d'emballage plat est enroulé et formé en sachet sur une machine de formage, remplissage et scellage verticale (VFFS) ou horizontale (HFFS), les bords doivent être scellés sur l'arrière. Ce joint est appelé soudure dorsale. Choisir le bon type de soudure est une décision d'ingénierie critique qui affecte les propriétés barrière, l'intégrité structurelle et le coût de fabrication du sachet.",
    section1P2: "Pour les sachets à haute barrière contenant des produits sensibles comme le café, le lait maternisé en poudre ou les liquides, une soudure robuste et hermétique est obligatoire. À l'inverse, les emballages de snacks légers privilégient souvent l'économie de matière et la continuité graphique.",
    
    painPointsTitle: "5 Problèmes de Scellage et Solutions d'Ingénierie",
    pain1p: "1. Rupture de la Soudure et Fuites Pendant le Transport",
    pain1s: "Les soudures lap seal dépendent de l'adhérence entre le scellant interne et la couche externe résistante à la chaleur. Sous la pression du transport, cette interface faible peut céder. Solution : Nous utilisons des soudures Fin Seal (soudure PE intérieur sur intérieur) pour créer un joint hermétique ultra-résistant, garantissant un taux de transport sans fuite de 99.9%.",
    pain2p: "2. Interruption Graphique sur le Panneau Arrière",
    pain2s: "Une soudure fin seal crée une ailette saillante qui peut couper et déformer les codes-barres critiques, les tableaux nutritionnels ou les logos. Solution : Nous proposons des soudures fin seal rabattues où l'ailette est aplatie et thermosoudée sur le côté, gardant le panneau arrière lisse et lisible.",
    pain3p: "3. Gaspillage Élevé de Film et Coûts de Production",
    pain3s: "La soudure fin seal nécessite une largeur de film supplémentaire de 12 à 20 mm par sachet pour former l'ailette pincée, ce qui augmente le coût du film. Solution : Pour les articles légers et non sensibles comme les chips, nous passons la ligne en Lap Seal, économisant jusqu'à 15% de surface de film.",
    pain4p: "4. Fuites de Canaux dans les Emballages Liquides ou Pulvérulents",
    pain4s: "Les liquides ou les poudres fines peuvent être piégés dans la jonction d'une soudure lap seal, créant des micro-canaux pour l'air et l'humidité. Solution : Nous imposons des soudures fin seal calibrées en température multipoint qui fusionnent les couches internes de polyéthylène, bloquant toute fuite de produit.",
    pain5p: "5. Plis et Brûlures Lors du Soudage à Haute Vitesse",
    pain5s: "Des temps de pression irréguliers ou des pics de température sur les mâchoires de soudage VFFS peuvent froisser le film ou brûler la soudure. Solution : Nous recommandons des films coextrudés avec une plage de scellage plus large (ex. MOpp/PE) associés à des rouleaux de scellage en continu.",

    expertTitle: "Extrait du Carnet d'Ingénierie de Ryan Wong",
    expertInsight: "\"Lors d'une production à grande vitesse sur une machine de formage, remplissage et scellage verticale (VFFS) pour un client de café certifié BRC, nous avons rencontré des micro-fuites persistantes le long de la soudure arrière. Le client utilisait un film coextrudé avec une structure lap seal pour économiser 12% de film. Cependant, la couche externe de polyester n'était pas entièrement compatible avec le polyéthylène interne sous l'effet du scellage rapide, créant des micro-canaux. Nous avons modifié le col de formage pour passer à une soudure Fin Seal (soudure intérieur sur intérieur). Ce changement a éliminé le taux de fuite (le ramenant de 4.2% à 0.0%) tout en maintenant un panneau arrière plat et soigné.\"",
    expertBio: "Ryan Wong — Co-fondateur et Ingénieur Principal en Emballage (14+ ans d'expérience)",
    
    tableTitle: "Matrice Comparative des Spécifications Techniques",
    param: "Paramètre",
    finSpec: "Spécification Fin Seal",
    lapSpec: "Spécification Lap Seal",
    structure: "Structure de la Soudure",
    structureFin: "Intérieur sur Intérieur (Scellant sur Scellant)",
    structureLap: "Intérieur sur Extérieur (Scellant sur Couche Externe)",
    strength: "Résistance de la Soudure",
    strengthFin: "Élevée (Joint hermétique fusionné)",
    strengthLap: "Modérée à Faible (Dépend de l'adhérence)",
    savings: "Utilisation du Matériau",
    savingsFin: "Standard (Nécessite un rabat de 12-20 mm)",
    savingsLap: "Excellente (Économise 10-15% sur la largeur du film)",
    compat: "Compatibilité du Film",
    compatFin: "Fonctionne avec des films scellables simples faces",
    compatLap: "Nécessite des films traités/scellables double face",
    apps: "Applications Typiques",
    appsFin: "Sachets de café, liquides, aliments pour animaux, sachets médicaux",
    appsLap: "Chips de pommes de terre, barres chocolatées, snacks secs"
  }
}

export default function FinSealLapSealPage() {
  const { i18n } = useTranslation()
  const langKey = (i18n.language && i18n.language.startsWith('zh')) ? 'zh-TW' : 
                  (translations[i18n.language as keyof typeof translations] ? i18n.language : 'en')
  
  const tObj = translations[langKey as keyof typeof translations]

  const heroImageUrl = '/imgs/knowledge/fin-lap/hero.webp'
  const finCloseupUrl = '/imgs/knowledge/fin-lap/a_achievepack_fin_seal_closeup_4789782.webp'
  const lapCloseupUrl = '/imgs/knowledge/fin-lap/a_achievepack_lap_seal_closeup_4443649.webp'
  const comparisonUrl = '/imgs/knowledge/fin-lap/a_dualfunctioncomparison_4626735.webp'

  const sections = [
    {
      id: 'overview',
      title: tObj.section1Title,
      icon: <Scale className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 leading-relaxed">{tObj.section1P1}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <img src={finCloseupUrl} alt="Fin seal closeup view" className="rounded-xl w-full object-cover shadow-md border" />
            <img src={lapCloseupUrl} alt="Lap seal closeup view" className="rounded-xl w-full object-cover shadow-md border" />
          </div>
          <p className="text-neutral-700 leading-relaxed">{tObj.section1P2}</p>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: tObj.painPointsTitle,
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          {[
            { num: '01', problem: tObj.pain1p, solution: tObj.pain1s },
            { num: '02', problem: tObj.pain2p, solution: tObj.pain2s },
            { num: '03', problem: tObj.pain3p, solution: tObj.pain3s },
            { num: '04', problem: tObj.pain4p, solution: tObj.pain4s },
            { num: '05', problem: tObj.pain5p, solution: tObj.pain5s }
          ].map((item) => (
            <div key={item.num} className="bg-neutral-900 text-white rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="text-6xl font-black font-mono">{item.num}</span>
              </div>
              <h4 className="text-lg font-bold mb-3 pr-12 text-white">{item.problem}</h4>
              <div className="bg-neutral-800 rounded-lg p-4 border-l-4 border-emerald-500">
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase">Solution:</span>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'engineering-notebook',
      title: tObj.expertTitle,
      icon: <Factory className="w-5 h-5" />,
      content: (
        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl shadow-sm">
          <h4 className="text-emerald-900 font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">🔬</span> Expert Engineering Insight
          </h4>
          <p className="text-emerald-800 italic leading-relaxed text-sm mb-4">
            {tObj.expertInsight}
          </p>
          <div className="bg-white rounded-lg p-4 flex items-center gap-4">
            <img src="/imgs/team/ryan.jpg" alt="Ryan Wong" className="w-16 h-16 rounded-full object-cover border-2 border-emerald-200" onError={(e) => { e.currentTarget.style.display='none' }} />
            <div>
              <h5 className="font-bold text-neutral-900">{tObj.expertBio.split(' — ')[0]}</h5>
              <p className="text-xs text-neutral-500 font-medium mb-1">{tObj.expertBio.split(' — ')[1]}</p>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noreferrer" className="text-xs text-emerald-600 font-bold hover:underline mt-1 inline-block">Have a technical question? Schedule a 15-minute packaging audit with Ryan →</a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'comparison-diagram',
      title: 'Visual Comparison',
      icon: <HelpCircle className="w-5 h-5" />,
      content: (
        <div className="my-8">
          <img src={comparisonUrl} alt="Fin seal vs lap seal structure comparison diagram" className="w-full rounded-xl shadow-md border" />
          <p className="text-sm text-neutral-500 mt-2 italic text-center">Continuous film alignment comparison between inside-to-inside fin seal and inside-to-outside lap seal structures.</p>
        </div>
      )
    }
  ]

  const tables = [
    {
      title: tObj.tableTitle,
      data: {
        headers: [tObj.param, tObj.finSpec, tObj.lapSpec],
        rows: [
          [tObj.structure, tObj.structureFin, tObj.structureLap],
          [tObj.strength, tObj.strengthFin || 'High', tObj.strengthLap || 'Moderate'],
          [tObj.savings, tObj.savingsFin, tObj.savingsLap],
          [tObj.compat, tObj.compatFin, tObj.compatLap],
          [tObj.apps, tObj.appsFin, tObj.appsLap],
        ]
      }
    }
  ]

  const faqs = [
    { question: "What is a fin seal in flexible packaging?", answer: "A fin seal joins the two inner (sealant) layers of the film together, creating a raised 'fin' seam that usually runs vertically along the back of the package. This creates a strong, hermetic seal ideal for high-barrier applications." },
    { question: "What is a lap seal and how does it differ from fin seal?", answer: "A lap seal overlaps one film edge over the other, sealing the inner surface of one edge to the outer surface of the other. This creates a flatter, smoother seam compared to fin seals." }
  ]

  return (
    <>
      <Helmet>
        <title>{tObj.title} | Achieve Pack</title>
        <meta name="description" content={tObj.metaDesc} />
        <link rel="canonical" href="https://achievepack.com/knowledge/fin-seal-lap-seal" />
      </Helmet>
      <SEOPageLayout
        title={tObj.title}
        description={tObj.metaDesc}
        heroTitle={tObj.heroTitle}
        heroSubtitle={tObj.heroSubtitle}
        heroImage={heroImageUrl}
        introSummary={tObj.introSummary}
        sections={sections}
        faqs={faqs}
        tables={tables}
        schemaType="Article"
      />
    </>
  )
}
