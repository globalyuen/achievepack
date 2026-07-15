import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';
import { useTranslation } from 'react-i18next';
import { getDomain } from '../../utils/domain';
import { Building2, ShieldCheck, Factory, Leaf } from 'lucide-react';

const localTranslations = {
  en: {
    title: "Condiment Sachet Three Side Seal Packaging | High-Speed Film Solutions",
    description: "Optimize your high-speed VFFS and HFFS lines with our premium condiment sachet three side seal packaging. Engineered for leak prevention and high-barrier performance.",
    heroTitle: "Precision Three-Side Seal Sachets for Condiment Packaging",
    empathyHook: "Leaking sachets and inconsistent tear propagation aren't just minor inconveniences—they cause costly line stoppages, product waste, and brand damage. We understand the tight tolerances required for high-speed liquid packaging.",
    point1Title: "High-Barrier Aluminum & EVOH Laminates",
    point1Desc: "Condiments with high acidity or fat content require exceptional oxygen and moisture barriers to prevent degradation and extend shelf life.",
    point1Sol: "We utilize advanced PET/AL/PE and PET/VMPET/PE laminations tailored to resist aggressive ingredients while maintaining structural integrity during distribution.",
    point2Title: "Zero-Leak Heat Sealing Technology",
    point2Desc: "Inconsistent seal strength during high-speed vertical form-fill-seal (VFFS) operations leads to catastrophic micro-leaks and messy product returns.",
    point2Sol: "Our films feature custom-formulated sealant layers (LLDPE blends) that achieve a hermetic seal at lower temperatures with high hot-tack strength.",
    point3Title: "Precision Laser Scoring for Easy Tear",
    point3Desc: "End-users often struggle to open standard sachets, resulting in spillage, frustration, and negative user experience.",
    point3Sol: "We integrate precise, registered laser scoring along the tear notch to guarantee a clean, predictable, and effortless opening every single time.",
    point4Title: "Optimized Coefficient of Friction (COF)",
    point4Desc: "Poor slip properties cause film tracking issues, jamming, and reduced throughput on high-speed automated packaging machines.",
    point4Sol: "We strictly control the kinematic and static COF of our outer films to ensure smooth, continuous runnability at speeds exceeding 120 sachets per minute.",
    point5Title: "Vibrant Rotogravure Printing (Up to 10 Colors)",
    point5Desc: "Small sachet footprints leave minimal room for branding, making it challenging to achieve high-definition graphics and legible text.",
    point5Sol: "Our advanced 10-color rotogravure printing delivers ultra-high resolution, scuff-resistant graphics and crisp micro-text to maximize your brand's visual impact.",
    compTitle: "Why Our Condiment Sachets Outperform the Rest",
    compDesc: "Unlike generic packaging films, our three-side seal rollstock is rigorously engineered and batch-tested for burst strength, peelability, and seal integrity, ensuring maximum OEE (Overall Equipment Effectiveness) for your facility.",
    faq1Q: "What are the best material structures for high-acid condiments like ketchup or vinegar?",
    faq1A: "For high-acid or corrosive contents, we recommend a robust PET/AL/PE structure or an EVOH-based laminate to provide the ultimate barrier against oxidation and chemical breakdown.",
    faq2Q: "Can your rollstock films run on both VFFS and HFFS machinery?",
    faq2A: "Yes. Our flexible packaging rollstock is custom-engineered with specific sealant resins and optimized COF to ensure seamless compatibility with both Vertical and Horizontal Form-Fill-Seal systems.",
    faq3Q: "How do you guarantee seal integrity for liquid sachet packaging?",
    faq3A: "We implement rigorous quality assurance protocols, including burst testing, vacuum leak detection, and hot-tack analysis, to ensure every batch meets strict hermetic sealing standards."
  },
  es: {
    title: "Envasado de Sobres de Condimentos de Tres Lados | Soluciones de Film de Alta Velocidad",
    description: "Optimice sus líneas VFFS y HFFS de alta velocidad con nuestros sobres de condimentos con sello de tres lados. Diseñados para prevenir fugas y ofrecer un alto rendimiento de barrera.",
    heroTitle: "Sobres de Sello de Tres Lados de Precisión para Condimentos",
    empathyHook: "Las fugas en los sobres y los desgarros inconsistentes no son solo molestias menores: causan costosas paradas de línea, desperdicio de producto y daño a la marca. Entendemos las estrictas tolerancias requeridas para el envasado de líquidos a alta velocidad.",
    point1Title: "Laminados de Aluminio y EVOH de Alta Barrera",
    point1Desc: "Los condimentos con alta acidez o contenido de grasa requieren barreras excepcionales contra el oxígeno y la humedad para prevenir la degradación y extender la vida útil.",
    point1Sol: "Utilizamos laminaciones avanzadas de PET/AL/PE y PET/VMPET/PE adaptadas para resistir ingredientes agresivos mientras mantienen la integridad estructural.",
    point2Title: "Tecnología de Sellado Térmico Sin Fugas",
    point2Desc: "La fuerza de sellado inconsistente durante las operaciones VFFS a alta velocidad provoca microfugas catastróficas y devoluciones desastrosas de productos.",
    point2Sol: "Nuestros films cuentan con capas selladoras formuladas a medida (mezclas LLDPE) que logran un sello hermético a temperaturas más bajas con alta resistencia al pegado en caliente (hot-tack).",
    point3Title: "Corte Láser de Precisión para un Rasgado Fácil",
    point3Desc: "Los usuarios finales a menudo tienen dificultades para abrir sobres estándar, lo que resulta en derrames, frustración y una experiencia de usuario negativa.",
    point3Sol: "Integramos un marcado láser preciso y registrado a lo largo de la muesca de desgarro para garantizar una apertura limpia, predecible y sin esfuerzo en todo momento.",
    point4Title: "Coeficiente de Fricción (COF) Optimizado",
    point4Desc: "Las malas propiedades de deslizamiento causan problemas de seguimiento del film, atascos y rendimiento reducido en máquinas de envasado automatizadas de alta velocidad.",
    point4Sol: "Controlamos estrictamente el COF cinemático y estático de nuestros films exteriores para asegurar una maquinabilidad suave y continua a velocidades superiores a 120 sobres por minuto.",
    point5Title: "Impresión en Huecograbado Vibrante (Hasta 10 Colores)",
    point5Desc: "El pequeño tamaño de los sobres deja poco espacio para la marca, lo que dificulta lograr gráficos de alta definición y texto legible.",
    point5Sol: "Nuestra avanzada impresión en huecograbado de 10 colores ofrece resolución ultra alta, gráficos resistentes al roce y microtexto nítido para maximizar el impacto visual.",
    compTitle: "Por Qué Nuestros Sobres de Condimentos Superan al Resto",
    compDesc: "A diferencia de los films de envasado genéricos, nuestras bobinas de sello de tres lados están rigurosamente diseñadas y probadas por lotes para resistencia al estallido, pelabilidad e integridad del sello, asegurando la máxima OEE para sus instalaciones.",
    faq1Q: "¿Cuáles son las mejores estructuras de materiales para condimentos muy ácidos como kétchup o vinagre?",
    faq1A: "Para contenidos muy ácidos o corrosivos, recomendamos una estructura robusta de PET/AL/PE o un laminado a base de EVOH para proporcionar la barrera definitiva contra la oxidación.",
    faq2Q: "¿Pueden sus bobinas de film funcionar en maquinaria VFFS y HFFS?",
    faq2A: "Sí. Nuestras bobinas de envasado flexible están diseñadas a medida con resinas selladoras específicas y un COF optimizado para garantizar una compatibilidad perfecta con sistemas VFFS y HFFS.",
    faq3Q: "¿Cómo garantizan la integridad del sello para el envasado de sobres de líquidos?",
    faq3A: "Implementamos rigurosos protocolos de garantía de calidad, incluyendo pruebas de estallido, detección de fugas por vacío y análisis de hot-tack, para asegurar que cada lote cumpla con los estándares."
  },
  fr: {
    title: "Sachets de Condiments à Trois Soudures | Films Haute Vitesse",
    description: "Optimisez vos lignes VFFS et HFFS à haute vitesse avec nos sachets de condiments à 3 soudures. Conçus pour prévenir les fuites et offrir une haute barrière.",
    heroTitle: "Sachets à Trois Soudures de Précision pour Condiments",
    empathyHook: "Les sachets qui fuient et les déchirures imprévisibles ne sont pas de simples désagréments : ils causent des arrêts de chaîne coûteux et des pertes de produits. Nous comprenons les tolérances strictes requises pour le conditionnement de liquides.",
    point1Title: "Laminés Aluminium & EVOH Haute Barrière",
    point1Desc: "Les condiments à forte acidité ou teneur en matières grasses nécessitent des barrières exceptionnelles pour empêcher la dégradation et prolonger la durée de conservation.",
    point1Sol: "Nous utilisons des laminations avancées PET/AL/PE et PET/VMPET/PE conçues pour résister aux ingrédients agressifs tout en maintenant l'intégrité structurelle.",
    point2Title: "Technologie de Thermoscellage Zéro Fuite",
    point2Desc: "Une force de scellage incohérente lors des opérations VFFS à grande vitesse entraîne des micro-fuites catastrophiques et des retours de produits salissants.",
    point2Sol: "Nos films intègrent des couches scellantes formulées sur mesure (mélanges LLDPE) qui assurent un scellement hermétique à des températures plus basses avec un 'hot-tack' élevé.",
    point3Title: "Découpe Laser de Précision pour Ouverture Facile",
    point3Desc: "Les utilisateurs finaux luttent souvent pour ouvrir les sachets standard, ce qui entraîne des éclaboussures et une expérience utilisateur négative.",
    point3Sol: "Nous intégrons une incision laser précise et repérée le long de l'amorce de rupture pour garantir une ouverture nette, prévisible et sans effort à chaque fois.",
    point4Title: "Coefficient de Frottement (COF) Optimisé",
    point4Desc: "De mauvaises propriétés de glissement causent des problèmes de défilement, des blocages et réduisent le rendement des conditionneuses automatiques.",
    point4Sol: "Nous contrôlons strictement le COF cinématique et statique de nos films extérieurs pour assurer un passage fluide et continu à plus de 120 sachets par minute.",
    point5Title: "Impression Héliogravure Éclatante (Jusqu'à 10 Couleurs)",
    point5Desc: "La petite surface des sachets laisse peu d'espace pour la marque, rendant difficile l'obtention de graphismes haute définition et de textes lisibles.",
    point5Sol: "Notre impression héliogravure avancée jusqu'à 10 couleurs offre une très haute résolution, des graphismes résistants aux frottements et un micro-texte net.",
    compTitle: "Pourquoi Nos Sachets de Condiments Sont Supérieurs",
    compDesc: "Contrairement aux films génériques, nos bobines à trois soudures sont rigoureusement conçues et testées en lot pour la résistance à l'éclatement et l'intégrité du scellage, garantissant un TRS maximal pour votre usine.",
    faq1Q: "Quelles sont les meilleures structures pour les condiments très acides comme le ketchup ou le vinaigre ?",
    faq1A: "Pour les contenus acides ou corrosifs, nous recommandons une structure robuste PET/AL/PE ou un laminé à base d'EVOH pour fournir l'ultime barrière contre l'oxydation.",
    faq2Q: "Vos bobines de film peuvent-elles fonctionner sur les machines VFFS et HFFS ?",
    faq2A: "Oui. Nos bobines d'emballage flexible sont conçues sur mesure avec des résines scellantes spécifiques et un COF optimisé pour garantir une compatibilité parfaite avec les deux systèmes.",
    faq3Q: "Comment garantissez-vous l'intégrité des soudures pour les sachets de liquides ?",
    faq3A: "Nous mettons en œuvre des protocoles rigoureux d'assurance qualité, incluant des tests d'éclatement, la détection des fuites sous vide et l'analyse 'hot-tack'."
  },
  "zh-tw": {
    title: "三邊封調味醬包裝 | 高速包裝膜卷解決方案",
    description: "使用我們的高品質三邊封調味醬包，優化您的高速 VFFS 和 HFFS 生產線。專為防漏和高阻隔性能而設計，滿足工業包裝需求。",
    heroTitle: "專為調味品打造的精密三邊封包裝",
    empathyHook: "醬包漏液和撕開不均不僅是小困擾，它們會導致昂貴的停機時間、產品浪費並損害品牌形象。我們深知高速液體包裝所需要的嚴苛公差。",
    point1Title: "高阻隔純鋁與 EVOH 複合材質",
    point1Desc: "高酸性或高油脂的調味品需要卓越的抗氧和防潮屏障，以防止產品變質並延長保質期。",
    point1Sol: "我們採用先進的 PET/AL/PE 和 PET/VMPET/PE 複合結構，專為抵抗侵蝕性成分而量身定制，同時在運輸過程中保持結構完整性。",
    point2Title: "零漏液熱封技術",
    point2Desc: "在高速立式成型充填封口 (VFFS) 過程中，熱封強度不一致會導致災難性的微小漏液和產品退貨。",
    point2Sol: "我們的薄膜配有客製化配方的熱封層（LLDPE 混合物），能在較低溫度下實現氣密性熱封，並具備極高的熱粘(hot-tack)強度。",
    point3Title: "雷射易撕線設計",
    point3Desc: "消費者經常難以打開標準醬包，導致醬汁濺出、產生挫折感及負面的使用者體驗。",
    point3Sol: "我們在撕口處整合了精準定位的雷射刻線，確保每次都能乾淨、可預測且毫不費力地撕開包裝。",
    point4Title: "最佳化摩擦係數 (COF)",
    point4Desc: "滑動性差會導致薄膜在高速自動包裝機上跑偏、卡機，從而降低生產吞吐量。",
    point4Sol: "我們嚴格控制外層薄膜的動態與靜態摩擦係數，確保薄膜在每分鐘超過 120 包的高速運行下依然平穩順暢。",
    point5Title: "鮮豔的凹版印刷（高達 10 色）",
    point5Desc: "小尺寸的醬包留給品牌展示的空間極小，這使得實現高解析度圖案和清晰文字變得具挑戰性。",
    point5Sol: "我們先進的 10 色凹版印刷技術可提供超高解析度、耐磨的圖案以及銳利的微小文字，將您的品牌視覺效果最大化。",
    compTitle: "為什麼我們的調味醬包裝優於同行？",
    compDesc: "與市面上普通的包裝膜不同，我們的三邊封卷膜經過嚴格的工程設計與批次測試，涵蓋爆破強度、易撕性與熱封完整性，確保為您的工廠帶來最高的設備綜合效率 (OEE)。",
    faq1Q: "對於番茄醬或醋等高酸性調味品，最好的材質結構是什麼？",
    faq1A: "對於高酸性或腐蝕性內容物，我們推薦堅固的 PET/AL/PE 結構或基於 EVOH 的複合材料，以提供抵抗氧化和化學分解的終極屏障。",
    faq2Q: "您的卷膜可以同時在 VFFS 和 HFFS 機器上運行嗎？",
    faq2A: "可以。我們的軟包裝卷膜針對特定的熱封樹脂和最佳化的 COF 進行了客製化工程設計，以確保與立式和臥式成型充填封口系統的無縫相容。",
    faq3Q: "您如何保證液體醬包的熱封完整性？",
    faq3A: "我們實施嚴格的品質保證協議，包括爆破測試、真空漏氣檢測和熱粘分析，以確保每個批次都符合最嚴格的氣密熱封標準。"
  }
};

const PAGE_NAME = "CondimentSachetThreeSideSealPage";

export default function CondimentSachetThreeSideSealPage() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const tLocalRaw = localTranslations[currentLang as keyof typeof localTranslations];
  const tLocal: any = (tLocalRaw && Object.keys(tLocalRaw).length > 0) ? tLocalRaw : localTranslations.en;
  const isPouchDomain = getDomain() === 'pouch';

  return (
    <SEOPageLayout title={tLocal.title} description={tLocal.description}>
      <Helmet>
        <title>{tLocal.title}</title>
        <meta name="description" content={tLocal.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium border border-primary-500/30 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Technical Engineering Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {tLocal.heroTitle}
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
            {tLocal.empathyHook}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Pain Points Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">5 Manufacturing Pain Points & Engineering Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: tLocal.point1Title, desc: tLocal.point1Desc, sol: tLocal.point1Sol, icon: Factory },
              { title: tLocal.point2Title, desc: tLocal.point2Desc, sol: tLocal.point2Sol, icon: ShieldCheck },
              { title: tLocal.point3Title, desc: tLocal.point3Desc, sol: tLocal.point3Sol, icon: Building2 },
              { title: tLocal.point4Title, desc: tLocal.point4Desc, sol: tLocal.point4Sol, icon: Leaf },
              { title: tLocal.point5Title, desc: tLocal.point5Desc, sol: tLocal.point5Sol, icon: Factory }
            ].map((point, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-neutral-700" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{point.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{point.desc}</p>
                <div className={`p-3 rounded-lg ${isPouchDomain ? 'bg-[#D4FF00]/10 border border-[#D4FF00]/20' : 'bg-primary-50 border border-primary-100'}`}>
                  <p className={`text-sm font-medium ${isPouchDomain ? 'text-neutral-900' : 'text-primary-900'}`}>
                    <span className="block text-xs uppercase tracking-wider opacity-70 mb-1">Solution</span>
                    {point.sol}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mb-20 bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">{tLocal.compTitle}</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl">{tLocal.compDesc}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="p-4 rounded-tl-lg font-semibold">Parameter</th>
                  <th className="p-4 font-semibold border-l border-neutral-700">Standard Approach</th>
                  <th className="p-4 rounded-tr-lg font-semibold border-l border-neutral-700">Achieve Pack Engineered</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-medium text-neutral-900">Material Integrity</td>
                  <td className="p-4 text-neutral-600 border-l border-neutral-200">High failure rate under stress</td>
                  <td className="p-4 text-green-700 font-medium border-l border-neutral-200 bg-green-50/50">Zero-failure structural mapping</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-medium text-neutral-900">Compliance</td>
                  <td className="p-4 text-neutral-600 border-l border-neutral-200">Often misses localized FDA/EU requirements</td>
                  <td className="p-4 text-green-700 font-medium border-l border-neutral-200 bg-green-50/50">100% Guaranteed Certification</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900">Unit Cost Impact</td>
                  <td className="p-4 text-neutral-600 border-l border-neutral-200">High waste yields expensive per-unit cost</td>
                  <td className="p-4 text-green-700 font-medium border-l border-neutral-200 bg-green-50/50">Optimized layout reduces material waste by 14%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">Technical FAQ</h2>
          <div className="space-y-4">
            {[
              { q: tLocal.faq1Q, a: tLocal.faq1A },
              { q: tLocal.faq2Q, a: tLocal.faq2A },
              { q: tLocal.faq3Q, a: tLocal.faq3A }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-neutral-200 rounded-xl overflow-hidden">
                <summary className="p-6 font-semibold text-lg cursor-pointer marker:text-transparent flex justify-between items-center hover:bg-neutral-50 transition-colors">
                  {faq.q}
                  <span className="text-neutral-400 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <div className="px-6 pb-6 text-neutral-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Ryan's Profile */}
        <div className="bg-neutral-900 rounded-2xl p-8 md:p-10 text-white max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 rounded-full bg-neutral-800 border-4 border-primary-500/30 overflow-hidden shrink-0">
              <img src="/imgs/about/ryan-wong.webp" alt="Ryan Wong" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Ryan Wong</h3>
              <p className="text-primary-400 font-medium mb-4">Co-Founder & Chief Packaging Engineer</p>
              <div className="inline-block bg-white/10 rounded px-3 py-1 text-sm font-mono mb-4 border border-white/20">
                14+ Years Experience | GRS & FSC Auditing Expert
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Specializing in polymer structures, sustainable material transitions, and high-speed VFFS line optimizations. Helping 500+ global brands scale from prototype to industrial production with zero defect tolerances.
              </p>
              <a href="https://calendly.com/achievepack" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Schedule a Packaging Audit
              </a>
            </div>
          </div>
        </div>

      </div>
    </SEOPageLayout>
  );
}
