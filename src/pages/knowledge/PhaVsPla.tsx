import React from 'react'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import SEOPageLayout from '../../components/SEOPageLayout'
import PouchLayout from '../../components/pouch/PouchLayout'
import { Leaf, Shield, Award, RefreshCw, AlertTriangle, Lightbulb, ArrowRight, ShoppingBag } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const translations = {
  en: {
    title: "PHA vs PLA: The Ultimate Guide to Sustainable 3D Printing & Packaging Materials",
    metaDesc: "Discover the critical differences between PHA and PLA plastics. Learn why marine-degradable, 100% bio-based PHA is replacing PLA in sustainable 3D printing and eco-packaging.",
    heroTitle: "PHA vs PLA: The Evolution of Sustainable Bioplastics",
    heroSubtitle: "Why marine-degradable PHA is outperforming PLA and PETG in 3D printing and eco-packaging.",
    faq1q: "What is the primary difference between PHA and PLA?",
    faq1a: "The biggest difference is degradability. While PLA is technically compostable, it requires strict industrial composting facilities (high heat and pressure). In contrast, our PHA is home-compostable and marine-degradable, meaning it naturally breaks down in backyard compost bins or ocean water without leaving toxic microplastics.",
    faq2q: "Does PHA require pre-drying like PLA?",
    faq2a: "No. PLA and PETG are highly hygroscopic and require careful pre-drying before extrusion or 3D printing to prevent brittleness and stringing. Our PHA filament is stable and can be printed directly without drying, saving significant operational time.",
    faq3q: "Is PHA safe for food contact packaging?",
    faq3a: "Yes. Our 100% bio-based PHA (such as our CitrusCycle™ line) is completely safe, non-toxic, and friendly to the body. It leaves no chemical residue upon degradation, making it superior to conventional PETG.",
    introTitle: "The Bioplastic Revolution: Beyond PLA",
    quickAnswer: "Quick Answer: While PLA requires industrial composting and pre-drying, PHA is 100% home and marine compostable, leaving no microplastics while offering superior operational stability without pre-drying.",
    takeawayTitle: "Key Takeaways",
    takeaway1: "PHA is marine-degradable and home-compostable, while PLA requires strict industrial composting facilities.",
    takeaway2: "PHA eliminates the 4-hour pre-drying bottleneck associated with PLA and PETG during 3D printing and packaging processes.",
    takeaway3: "PHA completely degrades into natural organic matter, eliminating the risk of microplastic residue left by traditional bioplastics.",
    introP1: "For years, PLA (Polylactic Acid) has been the default \"eco-friendly\" plastic for 3D printing and packaging. However, as sustainability standards evolve, its limitations have become obvious.",
    introP2: "PLA only degrades in industrial facilities, and without proper disposal, it acts much like traditional plastic, taking centuries to break down in landfills or oceans. Enter PHA (Polyhydroxyalkanoate)—a true bio-polymer synthesized by microorganisms that degrades natively in nature.",
    expertTitle: "Expert Engineering Insight",
    expertSub: "From Ryan Wong's Engineering Notebook",
    expertQ1: "\"In my 14 years in packaging design and materials engineering, the biggest bottleneck with PLA has always been its moisture sensitivity. During rapid prototyping or VFFS (Vertical Form Fill Seal) runs, PLA's tendency to absorb ambient humidity leads to brittleness and failure points.\"",
    expertQ2: "Switching our prototyping lines to PHA—specifically our CitrusCycle™ Orange Peel PHA—has eliminated the mandatory 4-hour pre-drying cycle. Plus, knowing it achieves true marine degradation without toxic residue gives our BRC/GFSI certified clients the highest level of environmental compliance.",
    matrixTitle: "Technical Comparison Matrix",
    matrixParam: "Parameter",
    degEnv: "Degradation Environment",
    tox: "Toxicity & Microplastics",
    opHand: "Operational Handling",
    therm: "Thermal Resistance",
    phaDeg: "Marine, Water, Home Compost",
    plaDeg: "Strict Industrial Compost Only",
    petgDeg: "Cannot naturally degrade",
    phaTox: "Safe, 100% bio-based, zero microplastics",
    plaTox: "Leaves PLA microplastic residue",
    petgTox: "Produces persistent microplastics",
    phaOp: "No drying needed, high stability",
    plaOp: "Prone to brittleness, requires drying",
    petgOp: "Prone to moisture, requires drying",
    ctaTitle: "Schedule a Technical Consultation",
    ctaDesc: "Discuss how PHA integration can meet your GRS and FSC packaging compliance goals.",
    ctaBtn: "Book with Ryan Wong",
    upgradeCta: "Upgrade to PHA Printing Today",
    upgradeDesc: "Discover our new CitrusCycle™ Orange Peel PHA filament for sustainable prototyping.",
    shopTitle: "Shop CitrusCycle™ Orange Peel PHA Filament",
    shopDesc: "Experience the future of sustainable 3D printing. No pre-drying needed, 100% marine degradable, and smells like fresh oranges during extrusion.",
    shopBtn: "View Product Specs"
  },
  'zh-TW': {
    title: "PHA 對比 PLA：永續 3D 列印與包裝材料的終極指南",
    metaDesc: "探索 PHA 與 PLA 塑料之間的關鍵差異。了解為什麼可海洋降解、100% 生物基的 PHA 正在取代 PLA，成為永續 3D 列印和環保包裝的首選。",
    heroTitle: "PHA 對比 PLA：永續生物塑料的演進",
    heroSubtitle: "為什麼可海洋降解的 PHA 在 3D 列印和環保包裝中表現優於 PLA 和 PETG。",
    faq1q: "PHA 和 PLA 之間的主要區別是什麼？",
    faq1a: "最大的區別在於降解性。雖然 PLA 在技術上是可堆肥的，但它需要嚴格的工業堆肥設施（高溫和高壓）。相比之下，我們的 PHA 具有家庭可堆肥性和海洋降解性，這意味著它會在後院堆肥箱或海水中自然分解，不會留下有毒的微塑料。",
    faq2q: "PHA 需要像 PLA 一樣預先乾燥嗎？",
    faq2a: "不需要。PLA 和 PETG 具有高度吸濕性，在擠出或 3D 列印前需要仔細預先乾燥，以防止脆化和拉絲。我們的 PHA 線材性能穩定，可直接列印而無需乾燥，從而節省了大量的操作時間。",
    faq3q: "PHA 用於食品接觸包裝安全嗎？",
    faq3a: "是的。我們的 100% 生物基 PHA（例如我們的 CitrusCycle™ 系列）完全安全、無毒，並且對人體友好。它在降解後不會留下任何化學殘留物，使其優於傳統的 PETG。",
    introTitle: "生物塑料革命：超越 PLA",
    quickAnswer: "快速解答：雖然 PLA 需要工業堆肥和預先乾燥，但 PHA 是 100% 家庭和海洋可堆肥的，不留下微塑料，同時提供卓越的操作穩定性，無需預先乾燥。",
    takeawayTitle: "關鍵要點",
    takeaway1: "PHA 具有海洋降解性和家庭可堆肥性，而 PLA 則需要嚴格的工業堆肥設施。",
    takeaway2: "PHA 消除了在 3D 列印和包裝過程中與 PLA 和 PETG 相關的強制 4 小時預先乾燥瓶頸。",
    takeaway3: "PHA 完全降解為天然有機物，消除了傳統生物塑料殘留微塑料的風險。",
    introP1: "多年來，PLA（聚乳酸）一直是 3D 列印和包裝的默認“環保”塑料。然而，隨著可持續性標準的發展，其局限性已變得明顯。",
    introP2: "PLA 僅在工業設施中降解，如果處理不當，它的作用就像傳統塑料一樣，需要在垃圾填埋場或海洋中花費幾個世紀才能分解。現在，PHA（聚羥基脂肪酸酯）——一種由微生物合成的真正的生物聚合物，可在自然界中自然降解。",
    expertTitle: "專家工程見解",
    expertSub: "來自 Ryan Wong 的工程筆記",
    expertQ1: "「在我 14 年的包裝設計和材料工程經驗中，PLA 的最大瓶頸一直是其對水分的敏感性。在快速成型或 VFFS（立式成型填充密封）運行期間，PLA 吸收環境濕度的傾向會導致脆化和故障點。」",
    expertQ2: "將我們的原型製作線轉換為 PHA——特別是我們的 CitrusCycle™ 橘皮 PHA——已經消除了強制性的 4 小時預先乾燥週期。此外，知道它能實現真正的海洋降解而沒有有毒殘留物，為我們經過 BRC/GFSI 認證的客戶提供了最高級別的環境合規性。",
    matrixTitle: "技術比較矩陣",
    matrixParam: "參數",
    degEnv: "降解環境",
    tox: "毒性與微塑料",
    opHand: "操作處理",
    therm: "耐熱性",
    phaDeg: "海洋、水、家庭堆肥",
    plaDeg: "僅限嚴格的工業堆肥",
    petgDeg: "無法自然降解",
    phaTox: "安全、100% 生物基、零微塑料",
    plaTox: "留下 PLA 微塑料殘留物",
    petgTox: "產生持久性微塑料",
    phaOp: "無需乾燥、高穩定性",
    plaOp: "容易脆化、需要乾燥",
    petgOp: "容易受潮、需要乾燥",
    ctaTitle: "安排技術諮詢",
    ctaDesc: "討論 PHA 整合如何滿足您的 GRS 和 FSC 包裝合規目標。",
    ctaBtn: "與 Ryan Wong 預約",
    upgradeCta: "立即升級到 PHA 列印",
    upgradeDesc: "探索我們全新的 CitrusCycle™ 橘皮 PHA 線材，實現永續的快速成型。",
    shopTitle: "購買 CitrusCycle™ 橘皮 PHA 線材",
    shopDesc: "體驗永續 3D 列印的未來。無需預先乾燥，100% 海洋降解，擠出時散發新鮮橘子香味。",
    shopBtn: "查看產品規格"
  },
  es: {
    title: "PHA vs PLA: La Guía Definitiva de Materiales Sostenibles para Impresión 3D y Empaques",
    metaDesc: "Descubra las diferencias críticas entre los plásticos PHA y PLA. Aprenda por qué el PHA biodegradable en el mar y 100% de base biológica está reemplazando al PLA en la impresión 3D y el embalaje ecológico.",
    heroTitle: "PHA vs PLA: La Evolución de los Bioplásticos Sostenibles",
    heroSubtitle: "Por qué el PHA degradable en el mar está superando al PLA y PETG en impresión 3D y embalaje ecológico.",
    faq1q: "¿Cuál es la principal diferencia entre PHA y PLA?",
    faq1a: "La mayor diferencia es la degradabilidad. Si bien el PLA es técnicamente compostable, requiere instalaciones estrictas de compostaje industrial (alta temperatura y presión). Por el contrario, nuestro PHA es compostable en el hogar y degradable en el mar, lo que significa que se descompone naturalmente en contenedores de compost de patio o agua del océano sin dejar microplásticos tóxicos.",
    faq2q: "¿El PHA requiere secado previo como el PLA?",
    faq2a: "No. El PLA y el PETG son altamente higroscópicos y requiere un secado previo cuidadoso antes de la extrusión o impresión 3D para evitar la fragilidad y el encordado. Nuestro filamento PHA es estable y se puede imprimir directamente sin secar, ahorrando un tiempo operativo significativo.",
    faq3q: "¿El PHA es seguro para el envasado en contacto con alimentos?",
    faq3a: "Sí. Nuestro PHA 100% de base biológica (como nuestra línea CitrusCycle™) es completamente seguro, no tóxico y amigable con el cuerpo. No deja residuos químicos tras la degradación, lo que lo hace superior al PETG convencional.",
    introTitle: "La Revolución de los Bioplásticos: Más allá del PLA",
    quickAnswer: "Respuesta Rápida: Mientras que el PLA requiere compostaje industrial y secado previo, el PHA es 100% compostable en el hogar y en el mar, sin dejar microplásticos y ofreciendo una estabilidad operativa superior sin secado previo.",
    takeawayTitle: "Puntos Clave",
    takeaway1: "El PHA es degradable en el mar y compostable en el hogar, mientras que el PLA requiere instalaciones estrictas de compostaje industrial.",
    takeaway2: "El PHA elimina el cuello de botella de 4 horas de presecado asociado con PLA y PETG durante la impresión 3D.",
    takeaway3: "El PHA se degrada completamente en materia orgánica natural, eliminando el riesgo de residuos microplásticos.",
    introP1: "Durante años, el PLA (Ácido Poliláctico) ha sido el plástico \"ecológico\" predeterminado para la impresión 3D y el embalaje. Sin embargo, a medida que evolucionan los estándares de sostenibilidad, sus limitaciones se han vuelto obvias.",
    introP2: "El PLA solo se degrada en instalaciones industriales y, sin una eliminación adecuada, actúa de manera muy parecida al plástico tradicional, tardando siglos en descomponerse en vertederos u océanos. Ingrese el PHA (Polihidroxialcanoato): un verdadero biopolímero sintetizado por microorganismos que se degrada de forma nativa en la naturaleza.",
    expertTitle: "Visión de Ingeniería Experta",
    expertSub: "Del Cuaderno de Ingeniería de Ryan Wong",
    expertQ1: "\"En mis 14 años en diseño de empaques e ingeniería de materiales, el mayor cuello de botella con el PLA siempre ha sido su sensibilidad a la humedad. Durante el prototipado rápido o las ejecuciones de VFFS (Vertical Form Fill Seal), la tendencia del PLA a absorber la humedad ambiental conduce a la fragilidad y puntos de falla.\"",
    expertQ2: "Cambiar nuestras líneas de prototipado a PHA, específicamente nuestro PHA de Cáscara de Naranja CitrusCycle™, ha eliminado el ciclo de secado previo obligatorio de 4 horas. Además, saber que logra una verdadera degradación marina sin residuos tóxicos brinda a nuestros clientes certificados BRC / GFSI el más alto nivel de cumplimiento ambiental.",
    matrixTitle: "Matriz de Comparación Técnica",
    matrixParam: "Parámetro",
    degEnv: "Entorno de Degradación",
    tox: "Toxicidad y Microplásticos",
    opHand: "Manejo Operativo",
    therm: "Resistencia Térmica",
    phaDeg: "Marino, Agua, Compost Casero",
    plaDeg: "Solo Compost Industrial Estricto",
    petgDeg: "No puede degradarse naturalmente",
    phaTox: "Seguro, 100% base biológica, cero microplásticos",
    plaTox: "Deja residuos de microplásticos PLA",
    petgTox: "Produce microplásticos persistentes",
    phaOp: "No requiere secado, alta estabilidad",
    plaOp: "Propenso a la fragilidad, requiere secado",
    petgOp: "Propenso a la humedad, requiere secado",
    ctaTitle: "Programe una Consulta Técnica",
    ctaDesc: "Discuta cómo la integración de PHA puede cumplir con sus objetivos de cumplimiento de empaque GRS y FSC.",
    ctaBtn: "Reservar con Ryan Wong",
    upgradeCta: "Actualice a Impresión PHA Hoy",
    upgradeDesc: "Descubra nuestro nuevo filamento CitrusCycle™ Orange Peel PHA para la creación rápida y sostenible de prototipos.",
    shopTitle: "Comprar Filamento PHA CitrusCycle™",
    shopDesc: "Experimente el futuro de la impresión 3D sostenible. No necesita secado previo, es 100% degradable en el mar y huele a naranjas frescas.",
    shopBtn: "Ver Especificaciones"
  },
  fr: {
    title: "PHA vs PLA : Le Guide Ultime des Matériaux Durables d'Impression 3D et d'Emballage",
    metaDesc: "Découvrez les différences critiques entre les plastiques PHA et PLA. Apprenez pourquoi le PHA, biodégradable en milieu marin et 100% biosourcé, remplace le PLA dans l'impression 3D et les emballages écologiques.",
    heroTitle: "PHA vs PLA : L'Évolution des Bioplastiques Durables",
    heroSubtitle: "Pourquoi le PHA biodégradable en milieu marin surpasse le PLA et le PETG dans l'impression 3D et l'emballage écologique.",
    faq1q: "Quelle est la principale différence entre le PHA et le PLA ?",
    faq1a: "La plus grande différence est la dégradabilité. Bien que le PLA soit techniquement compostable, il nécessite des installations de compostage industriel strictes (chaleur et pression élevées). En revanche, notre PHA est compostable à domicile et biodégradable en milieu marin, ce qui signifie qu'il se décompose naturellement dans les bacs à compost ou l'eau de l'océan sans laisser de microplastiques toxiques.",
    faq2q: "Le PHA nécessite-t-il un pré-séchage comme le PLA ?",
    faq2a: "Non. Le PLA et le PETG sont très hygroscopiques et nécessitent un pré-séchage minutieux avant l'extrusion ou l'impression 3D pour éviter la fragilidad. Notre filament PHA est stable et peut être imprimé directement sans séchage, ce qui permet de gagner un temps opérationnel considérable.",
    faq3q: "Le PHA est-il sûr pour les emballages en contact avec les aliments ?",
    faq3a: "Oui. Notre PHA 100% biosourcé (comme notre gamme CitrusCycle™) est totalement sûr, non toxique et respectueux du corps. Il ne laisse aucun résidu chimique après dégradation, ce qui le rend supérieur au PETG conventionnel.",
    introTitle: "La Révolution des Bioplastiques : Au-delà du PLA",
    quickAnswer: "Réponse Rapide : Alors que le PLA nécessite un compostage industriel et un pré-séchage, le PHA est 100% compostable à domicile et en milieu marin, ne laissant aucun microplastique tout en offrant une stabilité opérationnelle supérieure sans pré-séchage.",
    takeawayTitle: "Points à Retenir",
    takeaway1: "Le PHA est biodégradable en milieu marin et compostable à domicile, tandis que le PLA nécessite des installations de compostage industriel.",
    takeaway2: "Le PHA élimine le goulot d'étranglement de 4 heures de pré-séchage associé au PLA et au PETG lors de l'impression 3D.",
    takeaway3: "Le PHA se dégrade complètement en matière organique naturelle, éliminant le risque de résidus de microplastiques.",
    introP1: "Pendant des années, le PLA (Acide Polylactique) a été le plastique \"écologique\" par défaut pour l'impression 3D et l'emballage. Cependant, à mesure que les normes de durabilité évoluent, ses limites sont devenues évidentes.",
    introP2: "Le PLA ne se dégrade que dans les installations industrielles, et sans une élimination adéquate, il agit un peu comme le plastique traditionnel, mettant des siècles à se décomposer dans les décharges ou les océans. Entrez le PHA (Polyhydroxyalcanoate) - un véritable biopolymère synthétisé par des micro-organismes qui se dégrade naturellement dans la nature.",
    expertTitle: "Aperçu de l'Ingénierie Experte",
    expertSub: "Extrait du Carnet d'Ingénierie de Ryan Wong",
    expertQ1: "\"Au cours de mes 14 années passées dans la conception d'emballages et l'ingénierie des matériaux, le plus gros goulot d'étranglement avec le PLA a toujours été sa sensibilité à l'humidité. Lors du prototypage rapide ou des séries VFFS (Vertical Form Fill Seal), la tendance du PLA à absorber l'humidité ambiante entraîne une fragilité et des points de défaillance.\"",
    expertQ2: "Le passage de nos lignes de prototypage au PHA, en particulier notre PHA à l'écorce d'orange CitrusCycle™, a éliminé le cycle de pré-séchage obligatoire de 4 heures. De plus, savoir qu'il permet une véritable dégradation marine sans résidus toxiques donne à nos clients certifiés BRC/GFSI le plus haut niveau de conformité environnementale.",
    matrixTitle: "Matrice de Comparaison Technique",
    matrixParam: "Paramètre",
    degEnv: "Environnement de Dégradation",
    tox: "Toxicité et Microplastiques",
    opHand: "Manipulation Opérationnelle",
    therm: "Résistance Thermique",
    phaDeg: "Marin, Eau, Compost Domestique",
    plaDeg: "Compostage Industriel Strict Uniquement",
    petgDeg: "Ne peut pas se dégrader naturellement",
    phaTox: "Sûr, 100% biosourcé, zéro microplastique",
    plaTox: "Laisse des résidus de microplastiques PLA",
    petgTox: "Produit des microplastiques persistants",
    phaOp: "Aucun séchage nécessaire, haute stabilité",
    plaOp: "Sujet à la fragilité, nécessite un séchage",
    petgOp: "Sujet à l'humidité, nécessite un séchage",
    ctaTitle: "Planifiez une Consultation Technique",
    ctaDesc: "Discutez de la façon dont l'intégration du PHA peut répondre à vos objectifs de conformité d'emballage GRS et FSC.",
    ctaBtn: "Réserver avec Ryan Wong",
    upgradeCta: "Passez à l'Impression PHA Aujourd'hui",
    upgradeDesc: "Découvrez notre nouveau filament CitrusCycle™ Orange Peel PHA pour un prototypage durable.",
    shopTitle: "Acheter le Filament PHA CitrusCycle™",
    shopDesc: "Découvrez l'avenir de l'impression 3D durable. Pas besoin de pré-séchage, 100% dégradable en mer et sent l'orange fraîche.",
    shopBtn: "Voir les Spécifications"
  }
}

export default function PhaVsPla() {
  const isPouchDomain = getDomain() === 'pouch'
  const { i18n } = useTranslation()
  
  // Resolve current language safely
  const langKey = (i18n.language && i18n.language.startsWith('zh')) ? 'zh-TW' : 
                  (translations[i18n.language as keyof typeof translations] ? i18n.language : 'en')
  
  const t = translations[langKey as keyof typeof translations]

  const heroImageUrl = '/imgs/store/products/compostable-citrus-orange-filament-rollstock-orange-new.png'
  const contentImageUrl = '/imgs/store/products/compostable-citrus-orange-filament-rollstock-coffee.png'
  const secondaryImageUrl = '/imgs/store/products/compostable-citrus-orange-filament-rollstock-spool.png'

  const seoProps = {
    title: t.title,
    metaDescription: t.metaDesc,
    canonicalUrl: "https://achievepack.com/knowledge/pha-vs-pla",
    keywords: ["PHA vs PLA", "compostable plastic", "marine degradable", "3D printing filament", "sustainable packaging", "PETG vs PLA", "biodegradable plastics"],
    author: "Ryan Wong",
    heroImage: heroImageUrl
  }

  const heroProps = {
    heroTitle: t.heroTitle,
    heroSubtitle: t.heroSubtitle,
    categoryTag: "Material Science",
    readTime: "7 min read",
    heroImage: heroImageUrl,
    heroImageAlt: "PHA Filament Roll"
  }

  const faqSections = [
    { q: t.faq1q, a: t.faq1a },
    { q: t.faq2q, a: t.faq2a },
    { q: t.faq3q, a: t.faq3a }
  ]

  // Shared inner content blocks for easier domain injection
  const StoreCtaCard = () => (
    <div className="bg-primary-900 text-white rounded-2xl p-6 mt-10 mb-6 shadow-xl flex flex-col md:flex-row items-center gap-6 border-2 border-primary-800 hover:border-primary-500 transition-all group">
      <div className="flex-shrink-0 relative overflow-hidden rounded-xl bg-white w-32 h-32 md:w-40 md:h-40">
        <img src={heroImageUrl} alt="PHA Citrus Filament" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-primary-200 text-xs font-bold uppercase tracking-wider mb-3">
          <ShoppingBag className="w-3.5 h-3.5" /> Featured Product
        </div>
        <h4 className="text-2xl font-bold mb-2 text-white">{t.shopTitle}</h4>
        <p className="text-primary-100 mb-6 text-sm md:text-base">{t.shopDesc}</p>
        <Link to="/store/product/compostable-citrus-orange-filament-rollstock" className="bg-white text-primary-900 px-6 py-3 rounded-xl font-bold inline-flex items-center justify-center gap-2 hover:bg-neutral-100 transition-colors shadow-lg hover:shadow-xl w-full md:w-auto">
          {t.shopBtn} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )

  const KeyTakeawaysBox = () => (
    <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 mb-8 mt-4 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-6 h-6 text-primary-600" />
        <h3 className="text-xl font-bold text-neutral-900 m-0">{t.takeawayTitle}</h3>
      </div>
      <ul className="space-y-3 mb-0">
        <li className="flex gap-3 text-neutral-700">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
          <span>{t.takeaway1}</span>
        </li>
        <li className="flex gap-3 text-neutral-700">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
          <span>{t.takeaway2}</span>
        </li>
        <li className="flex gap-3 text-neutral-700">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
          <span>{t.takeaway3}</span>
        </li>
      </ul>
    </div>
  )

  const sectionsForPouch = [
    {
      id: "introduction",
      title: t.introTitle,
      icon: <Leaf className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <KeyTakeawaysBox />
          <p className="text-lg leading-relaxed">{t.introP1}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <img src={contentImageUrl} alt="PHA Filament Application" className="rounded-xl w-full h-48 md:h-64 object-cover border border-neutral-200 shadow-sm" />
            <img src={secondaryImageUrl} alt="PHA Spool" className="rounded-xl w-full h-48 md:h-64 object-cover border border-neutral-200 shadow-sm" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </div>
          <p className="text-lg leading-relaxed">{t.introP2}</p>
          <p className="text-lg leading-relaxed mt-4">
            If you are looking to perfectly match your brand's PMS colors on these new eco-materials, we highly recommend reading our <Link to="/knowledge/color-matching" className="text-primary-600 font-semibold underline decoration-2 underline-offset-4 hover:text-primary-800 transition-colors">Color Matching Guide</Link> for digital printing processes.
          </p>
        </div>
      )
    },
    {
      id: "expert-insight",
      title: t.expertSub,
      icon: <Award className="h-6 w-6" />,
      content: (
        <div className="bg-neutral-100 p-8 rounded-xl border border-neutral-200 mt-8 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 text-primary-200 opacity-20">
            <Award className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <h4 className="font-bold text-2xl mb-4">{t.expertSub}</h4>
            <p className="mb-4 text-lg italic border-l-4 border-primary-500 pl-4 text-neutral-700">{t.expertQ1}</p>
            <p className="text-lg text-neutral-800">{t.expertQ2}</p>
            <StoreCtaCard />
          </div>
        </div>
      )
    },
    {
      id: "material-comparison",
      title: t.matrixTitle,
      icon: <Shield className="h-6 w-6" />,
      specsTable: [
        { specification: t.degEnv, parameter: "PHA (Looptie)", value: t.phaDeg },
        { specification: t.degEnv, parameter: "PLA", value: t.plaDeg },
        { specification: t.degEnv, parameter: "PETG", value: t.petgDeg },
        { specification: t.tox, parameter: "PHA (Looptie)", value: t.phaTox },
        { specification: t.tox, parameter: "PLA", value: t.plaTox },
        { specification: t.tox, parameter: "PETG", value: t.petgTox },
        { specification: t.opHand, parameter: "PHA (Looptie)", value: t.phaOp },
        { specification: t.opHand, parameter: "PLA", value: t.plaOp },
        { specification: t.opHand, parameter: "PETG", value: t.petgOp },
      ]
    }
  ]

  const sectionsForAchieve = [
    {
      id: "introduction",
      title: t.introTitle,
      icon: <Leaf className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <div className="bg-primary-50 border-l-4 border-primary-500 p-5 mb-8 rounded-r-lg">
            <p className="text-primary-900 font-medium text-lg"><strong>{t.quickAnswer.split(':')[0]}:</strong> {t.quickAnswer.split(':')[1]}</p>
          </div>
          
          <KeyTakeawaysBox />
          
          <p className="text-neutral-700 text-lg leading-relaxed">{t.introP1}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <img src={contentImageUrl} alt="PHA Filament Application" className="rounded-2xl w-full h-64 object-cover shadow-md border border-neutral-100" />
            <img src={secondaryImageUrl} alt="PHA Spool" className="rounded-2xl w-full h-64 object-cover shadow-md border border-neutral-100" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </div>
          <p className="text-neutral-700 text-lg leading-relaxed">{t.introP2}</p>
          
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 my-6">
            <h4 className="font-bold text-lg mb-2">Cross-Reference</h4>
            <p className="text-neutral-600 mb-0">
              When transitioning to compostable materials like PHA, color calibration can shift slightly due to the substrate's organic nature. Review our <Link to="/knowledge/color-matching" className="text-primary-600 font-medium hover:underline inline-flex items-center gap-1">Color Matching Standards <ArrowRight className="w-3 h-3"/></Link> to ensure your brand's PMS alignment remains consistent on eco-friendly lines.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "expert-insight",
      title: t.expertTitle,
      icon: <Award className="h-6 w-6" />,
      content: (
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 bg-neutral-100 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img src="/imgs/ryan-wong-avatar.png" alt="Ryan Wong" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>
            <div>
              <h4 className="font-bold text-2xl text-neutral-900 mb-2">{t.expertSub}</h4>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1.5 rounded-md">14+ Years Packaging Engineering</span>
                <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 px-3 py-1.5 rounded-md">GRS & FSC Auditing Expert</span>
              </div>
              <p className="text-neutral-600 mb-5 text-lg italic border-l-4 border-neutral-200 pl-4">"{t.expertQ1}"</p>
              <p className="text-neutral-700 text-lg leading-relaxed">{t.expertQ2}</p>
            </div>
          </div>
          
          <StoreCtaCard />
        </div>
      )
    },
    {
      id: "material-comparison",
      title: t.matrixTitle,
      icon: <Shield className="h-6 w-6" />,
      content: (
        <div className="overflow-hidden rounded-2xl border border-neutral-200 mt-8 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-neutral-50 text-neutral-800 border-b border-neutral-200">
                  <th className="p-5 font-semibold w-1/4 uppercase tracking-wider text-xs">{t.matrixParam}</th>
                  <th className="p-5 font-bold text-primary-800 bg-primary-50 w-1/4 uppercase tracking-wider text-xs border-x border-primary-100">PHA (Looptie)</th>
                  <th className="p-5 font-semibold w-1/4 uppercase tracking-wider text-xs">PLA</th>
                  <th className="p-5 font-semibold w-1/4 uppercase tracking-wider text-xs border-l border-neutral-200">PETG</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="hover:bg-neutral-50 border-b border-neutral-200">
                  <td className="p-5 font-medium text-neutral-900">{t.degEnv}</td>
                  <td className="p-5 bg-primary-50/50 text-green-700 font-medium border-x border-primary-100"><div className="flex items-center gap-2"><Leaf className="w-4 h-4"/> {t.phaDeg}</div></td>
                  <td className="p-5 text-neutral-600">{t.plaDeg}</td>
                  <td className="p-5 text-red-600 border-l border-neutral-200"><div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> {t.petgDeg}</div></td>
                </tr>
                <tr className="bg-neutral-50/50 hover:bg-neutral-50 border-b border-neutral-200">
                  <td className="p-5 font-medium text-neutral-900">{t.tox}</td>
                  <td className="p-5 bg-primary-50/50 text-green-700 font-medium border-x border-primary-100">{t.phaTox}</td>
                  <td className="p-5 text-neutral-600">{t.plaTox}</td>
                  <td className="p-5 text-red-600 border-l border-neutral-200">{t.petgTox}</td>
                </tr>
                <tr className="hover:bg-neutral-50 border-b border-neutral-200">
                  <td className="p-5 font-medium text-neutral-900">{t.opHand}</td>
                  <td className="p-5 bg-primary-50/50 text-green-700 font-medium border-x border-primary-100"><div className="flex items-center gap-2"><RefreshCw className="w-4 h-4"/> {t.phaOp}</div></td>
                  <td className="p-5 text-neutral-600">{t.plaOp}</td>
                  <td className="p-5 text-red-600 border-l border-neutral-200">{t.petgOp}</td>
                </tr>
                <tr className="bg-neutral-50/50 hover:bg-neutral-50">
                  <td className="p-5 font-medium text-neutral-900">{t.therm}</td>
                  <td className="p-5 bg-primary-50/50 text-neutral-800 font-medium border-x border-primary-100">Resists up to ~60°C</td>
                  <td className="p-5 text-neutral-600">Resists up to ~60°C</td>
                  <td className="p-5 text-neutral-600 border-l border-neutral-200">Resists up to ~70°C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ]

  if (isPouchDomain) {
    return (
      <PouchLayout>
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            {faqSections.map((faq, i) => (
              <article key={i} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 itemProp="name">{faq.q}</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">{faq.a}</p>
                </div>
              </article>
            ))}
          </section>
        </div>
        <BlogArticleTemplate
          {...seoProps}
          {...heroProps}
          sections={sectionsForPouch}
          faqSections={faqSections}
          ctaTitle={t.upgradeCta}
          ctaDescription={t.upgradeDesc}
        />
      </PouchLayout>
    )
  }

  // B2B Enterprise Layout (Achieve Pack)
  return (
    <>
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          {faqSections.map((faq, i) => (
            <article key={i} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{faq.q}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{faq.a}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
      <SEOPageLayout
        title={seoProps.title}
        description={seoProps.metaDescription}
        keywords={seoProps.keywords}
        canonicalUrl={seoProps.canonicalUrl}
        heroTitle={heroProps.heroTitle}
        heroSubtitle={heroProps.heroSubtitle}
        heroImage={heroImageUrl}
        introSummary={t.quickAnswer}
        sections={sectionsForAchieve}
        faqs={faqSections.map(f => ({ question: f.q, answer: f.a }))}
        schemaType="Article"
        ctaTitle={t.ctaTitle}
        ctaDescription={t.ctaDesc}
        ctaButtonText={t.ctaBtn}
        heroStyle="banner"
      />
    </>
  )
}
