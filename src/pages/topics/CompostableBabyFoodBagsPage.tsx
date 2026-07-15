import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';
import { useTranslation } from 'react-i18next';
import { getDomain } from '../../utils/domain';
import { Building2, ShieldCheck, Factory, Leaf } from 'lucide-react';

const localTranslations = {
  en: {
    title: "Premium Compostable Baby Food Bags | Engineered Sustainable Packaging",
    description: "High-barrier compostable baby food bags engineered for extreme safety, zero leakage, and automated filling efficiency. FDA/EU compliant sustainable packaging.",
    heroTitle: "Engineering the Future of Safe, Compostable Baby Food Packaging",
    empathyHook: "We understand that transitioning to compostable materials in the baby food sector carries immense risk. You need zero-compromise barrier properties, rigorous sterilization tolerance, and absolute leak-proof guarantees.",
    point1Title: "Barrier Degradation & Shelf Life",
    point1Desc: "Standard compostable films often fail to maintain oxygen and moisture barriers over time, leading to rapid product spoilage and safety recalls.",
    point1Sol: "We utilize advanced multi-layer metallized compostable laminates (NK/PBS) that achieve OTR/WVTR levels comparable to traditional foil, ensuring extended shelf life without compromising compostability.",
    point2Title: "Spout Insertion & Seal Integrity",
    point2Desc: "Integrating compostable spouts with biopolymer films frequently results in weak seal seams, causing catastrophic leaks during high-pressure filling or transit.",
    point2Sol: "Our engineers precisely calibrate the thermal bonding profiles of both the spout resin and the inner sealant layer, utilizing ultrasonic sealing technology for 100% leak-proof spout integration.",
    point3Title: "Sterilization Tolerance",
    point3Desc: "Baby food requires stringent hot-fill or retort sterilization, processes that can melt, delaminate, or warp standard compostable packaging materials.",
    point3Sol: "We engineer high-temperature resistant compostable structures specifically designed to withstand retort processing up to 121°C without layer separation or structural degradation.",
    point4Title: "Machinability on High-Speed Lines",
    point4Desc: "Compostable films inherently possess different slip coefficients and rigidity compared to plastics, causing jams and reducing throughput on automated VFFS and filling lines.",
    point4Sol: "We customize the coefficient of friction (COF) of the outer layer and optimize material stiffness, ensuring seamless machinability and maximizing your production line speeds.",
    point5Title: "Regulatory Compliance & Certifications",
    point5Desc: "Navigating the complex landscape of food safety and compostability standards (ASTM D6400, EN 13432) can delay market entry and risk non-compliance.",
    point5Sol: "Every batch is rigorously tested and certified to meet both stringent food contact regulations (FDA/EU) and global industrial/home compostability standards.",
    compTitle: "Why Engineering Matters in Compostable Packaging",
    compDesc: "Transitioning to sustainable materials isn't a simple material swap. It requires a fundamental re-engineering of the packaging structure to guarantee safety and performance.",
    faq1Q: "Are your compostable baby food bags suitable for retort processing?",
    faq1A: "Yes. We engineer specific high-barrier compostable laminates capable of withstanding retort sterilization temperatures (up to 121°C) without compromising seal strength, barrier properties, or the compostability certification.",
    faq2Q: "How do the oxygen and moisture barriers compare to standard aluminum foil pouches?",
    faq2A: "By incorporating proprietary metallized compostable layers and advanced barrier coatings, we achieve Oxygen Transmission Rates (OTR) and Water Vapor Transmission Rates (WVTR) that rival traditional aluminum structures, securing a safe and prolonged shelf life.",
    faq3Q: "Can your compostable bags run on our existing filling equipment?",
    faq3A: "Absolutely. We engineer the film's stiffness, tensile strength, and coefficient of friction (COF) to match conventional plastics, allowing for smooth, high-speed processing on your existing automated filling lines with minimal parameter adjustments."
  },
  es: {
    title: "Bolsas Compostables Premium para Alimentos Infantiles | Empaques Sostenibles",
    description: "Bolsas compostables de alta barrera para alimentos de bebés, diseñadas para máxima seguridad, cero fugas y eficiencia de llenado. Cumplimiento FDA/UE.",
    heroTitle: "Ingeniería del Futuro en Empaques Compostables y Seguros para Bebés",
    empathyHook: "Entendemos que la transición a materiales compostables en el sector de alimentos infantiles conlleva grandes riesgos. Usted necesita propiedades de barrera sin concesiones, tolerancia rigurosa a la esterilización y garantías absolutas contra fugas.",
    point1Title: "Degradación de la Barrera y Vida Útil",
    point1Desc: "Los films compostables estándar suelen perder su barrera contra oxígeno y humedad, provocando un rápido deterioro del producto y retiros del mercado.",
    point1Sol: "Utilizamos laminados compostables metalizados multicapa avanzados (NK/PBS) que logran niveles de OTR/WVTR comparables al aluminio tradicional, asegurando una vida útil prolongada.",
    point2Title: "Inserción de la Boquilla e Integridad del Sello",
    point2Desc: "La integración de boquillas compostables con films de biopolímeros frecuentemente resulta en costuras débiles, causando fugas catastróficas durante el llenado a alta presión.",
    point2Sol: "Nuestros ingenieros calibran con precisión los perfiles de unión térmica de la resina de la boquilla y la capa sellante interna, utilizando tecnología de sellado ultrasónico para una integración 100% libre de fugas.",
    point3Title: "Tolerancia a la Esterilización",
    point3Desc: "Los alimentos infantiles requieren esterilización por llenado en caliente o retorta, procesos que pueden derretir, delaminar o deformar los materiales compostables estándar.",
    point3Sol: "Diseñamos estructuras compostables resistentes a altas temperaturas, diseñadas específicamente para soportar el procesamiento en retorta hasta 121°C sin separación de capas ni degradación.",
    point4Title: "Maquinabilidad en Líneas de Alta Velocidad",
    point4Desc: "Los films compostables poseen diferentes coeficientes de fricción y rigidez en comparación con los plásticos, causando atascos y reduciendo el rendimiento en líneas automatizadas.",
    point4Sol: "Personalizamos el coeficiente de fricción (COF) de la capa exterior y optimizamos la rigidez del material, garantizando una maquinabilidad perfecta y maximizando la velocidad de producción.",
    point5Title: "Cumplimiento Normativo y Certificaciones",
    point5Desc: "Navegar por el complejo panorama de la seguridad alimentaria y los estándares de compostabilidad puede retrasar la entrada al mercado y generar riesgos legales.",
    point5Sol: "Cada lote es rigurosamente probado y certificado para cumplir tanto con las estrictas regulaciones de contacto con alimentos (FDA/UE) como con los estándares globales de compostabilidad industrial/doméstica.",
    compTitle: "Por Qué la Ingeniería es Crucial en los Empaques Compostables",
    compDesc: "La transición a materiales sostenibles no es un simple cambio de material. Requiere una reingeniería fundamental de la estructura para garantizar seguridad y rendimiento.",
    faq1Q: "¿Son sus bolsas compostables adecuadas para el procesamiento en retorta?",
    faq1A: "Sí. Diseñamos laminados compostables de alta barrera capaces de soportar temperaturas de esterilización en retorta (hasta 121°C) sin comprometer la fuerza del sello, las propiedades de barrera o la certificación.",
    faq2Q: "¿Cómo se comparan las barreras contra oxígeno y humedad con las bolsas estándar de papel de aluminio?",
    faq2A: "Al incorporar capas compostables metalizadas patentadas y recubrimientos de barrera avanzados, logramos tasas de transmisión (OTR y WVTR) que rivalizan con las estructuras de aluminio tradicionales, asegurando una vida útil segura.",
    faq3Q: "¿Se pueden usar sus bolsas compostables en nuestros equipos de llenado actuales?",
    faq3A: "Absolutamente. Diseñamos la rigidez, la resistencia a la tracción y el coeficiente de fricción (COF) del film para que coincidan con los plásticos convencionales, permitiendo un procesamiento suave y a alta velocidad en sus líneas existentes con mínimos ajustes."
  },
  fr: {
    title: "Sachets Compostables Premium pour Bébés | Emballages Durables",
    description: "Sachets compostables haute barrière pour aliments pour bébés, conçus pour une sécurité extrême, zéro fuite et une efficacité de remplissage. Conformité FDA/UE.",
    heroTitle: "L'Ingénierie de l'Avenir des Emballages Compostables et Sûrs pour Bébés",
    empathyHook: "Nous comprenons que la transition vers des matériaux compostables dans le secteur de l'alimentation infantile comporte d'immenses risques. Vous avez besoin de propriétés barrières sans compromis, d'une tolérance rigoureuse à la stérilisation et de garanties d'étanchéité absolues.",
    point1Title: "Dégradation de la Barrière et Durée de Conservation",
    point1Desc: "Les films compostables standards ne parviennent souvent pas à maintenir les barrières à l'oxygène et à l'humidité, ce qui entraîne une altération rapide des produits.",
    point1Sol: "Nous utilisons des complexes compostables métallisés multicouches avancés (NK/PBS) qui atteignent des niveaux OTR/WVTR comparables à l'aluminium traditionnel, garantissant une durée de conservation prolongée.",
    point2Title: "Insertion du Bouchon et Intégrité du Scellage",
    point2Desc: "L'intégration de bouchons compostables avec des films biopolymères entraîne fréquemment des soudures faibles, provoquant des fuites catastrophiques lors du remplissage sous pression.",
    point2Sol: "Nos ingénieurs calibrent précisément les profils de liaison thermique de la résine du bouchon et de la couche scellante interne, en utilisant la technologie de scellage par ultrasons pour une intégration 100% étanche.",
    point3Title: "Tolérance à la Stérilisation",
    point3Desc: "Les aliments pour bébés nécessitent une stérilisation par remplissage à chaud ou autoclave, des processus qui peuvent faire fondre, délaminer ou déformer les matériaux compostables standards.",
    point3Sol: "Nous concevons des structures compostables résistantes aux hautes températures, spécifiquement prévues pour résister au traitement en autoclave jusqu'à 121°C sans séparation des couches ni dégradation.",
    point4Title: "Usinabilité sur Lignes à Haute Vitesse",
    point4Desc: "Les films compostables possèdent un coefficient de frottement et une rigidité différents de ceux des plastiques, provoquant des bourrages et réduisant le rendement des lignes automatisées.",
    point4Sol: "Nous personnalisons le coefficient de frottement (COF) de la couche externe et optimisons la rigidité du matériau, assurant une usinabilité parfaite et maximisant les vitesses de vos lignes de production.",
    point5Title: "Conformité Réglementaire et Certifications",
    point5Desc: "Naviguer dans le paysage complexe de la sécurité alimentaire et des normes de compostabilité peut retarder l'entrée sur le marché et entraîner des risques de non-conformité.",
    point5Sol: "Chaque lot est rigoureusement testé et certifié pour répondre aux réglementations strictes sur le contact alimentaire (FDA/UE) ainsi qu'aux normes mondiales de compostabilité industrielle et domestique.",
    compTitle: "Pourquoi l'Ingénierie est Cruciale pour les Emballages Compostables",
    compDesc: "La transition vers des matériaux durables n'est pas un simple changement de matière. Cela nécessite une réingénierie fondamentale de la structure pour garantir la sécurité et les performances.",
    faq1Q: "Vos sachets compostables sont-ils adaptés au traitement en autoclave ?",
    faq1A: "Oui. Nous concevons des complexes compostables haute barrière capables de résister aux températures de stérilisation en autoclave (jusqu'à 121°C) sans compromettre la force de scellage, les propriétés barrières ou la certification de compostabilité.",
    faq2Q: "Comment les barrières à l'oxygène et à l'humidité se comparent-elles aux sachets standard en aluminium ?",
    faq2A: "En intégrant des couches compostables métallisées exclusives et des revêtements barrières avancés, nous atteignons des taux de transmission (OTR et WVTR) qui rivalisent avec les structures traditionnelles en aluminium, assurant une longue durée de vie en toute sécurité.",
    faq3Q: "Vos sachets compostables peuvent-ils fonctionner sur nos équipements de remplissage existants ?",
    faq3A: "Absolument. Nous concevons la rigidité, la résistance à la traction et le coefficient de frottement (COF) du film pour qu'ils correspondent aux plastiques conventionnels, permettant un traitement fluide à grande vitesse sur vos lignes existantes avec des ajustements minimes des paramètres."
  },
  "zh-tw": {
    title: "頂級可堆肥嬰兒食品袋 | 專利工程設計環保包裝",
    description: "專為極致安全、零洩漏與自動化充填效率而設計的高阻隔可堆肥嬰兒食品袋。符合 FDA 與歐盟規範，提供最佳永續包裝解決方案。",
    heroTitle: "引領未來的安全可堆肥嬰兒食品包裝工程",
    empathyHook: "我們深知，在嬰兒食品領域轉向可堆肥材料伴隨著巨大的風險。您需要的是毫不妥協的阻隔性能、嚴格的殺菌耐受力，以及絕對的防漏保證。",
    point1Title: "阻隔性衰退與保存期限",
    point1Desc: "標準可堆肥薄膜通常無法長效維持氧氣和水分阻隔，導致產品快速變質與安全召回風險。",
    point1Sol: "我們採用先進的多層金屬化可堆肥複合材料 (NK/PBS)，使其氧氣與水氣穿透率 (OTR/WVTR) 達到傳統鋁箔的水準，在不影響可堆肥性的前提下延長產品保存期限。",
    point2Title: "吸嘴接合與封口完整性",
    point2Desc: "將可堆肥吸嘴與生物聚合物薄膜結合時，常會導致封口脆弱，在高壓充填或運輸過程中引發災難性洩漏。",
    point2Sol: "我們的工程師精確校準吸嘴樹脂與內層密封層的熱壓合曲線，並採用超音波封口技術，實現 100% 零洩漏的吸嘴整合。",
    point3Title: "高溫殺菌耐受度",
    point3Desc: "嬰兒食品需要嚴格的熱充填或高溫高壓殺菌 (Retort)，這些過程會導致標準可堆肥包裝材料熔化、分層或變形。",
    point3Sol: "我們專門設計了耐高溫的可堆肥結構，能夠承受高達 121°C 的高溫殺菌處理，確保不會發生層間分離或結構劣化。",
    point4Title: "高速自動化產線的加工性",
    point4Desc: "與傳統塑膠相比，可堆肥薄膜具有不同的摩擦係數 (COF) 和剛性，容易在自動化製袋充填 (VFFS) 產線上造成卡機，從而降低產能。",
    point4Sol: "我們客製化外層的摩擦係數並優化材料剛度，確保極佳的機械加工性，幫助您將生產線速度發揮到極致。",
    point5Title: "法規遵循與國際認證",
    point5Desc: "應對複雜的食品安全與可堆肥標準 (ASTM D6400, EN 13432) 可能會延遲產品上市並帶來違規風險。",
    point5Sol: "每一批次皆經過嚴格測試與認證，確保同時符合嚴苛的食品接觸法規 (FDA/EU) 以及全球工業與家庭可堆肥標準。",
    compTitle: "為什麼工程設計對可堆肥包裝至關重要？",
    compDesc: "轉向永續材料絕非單純的材質替換。這需要對包裝結構進行根本性的重新設計，才能確保產品的安全性與卓越性能。",
    faq1Q: "你們的可堆肥嬰兒食品袋適用於高溫高壓殺菌 (Retort) 嗎？",
    faq1A: "是的。我們設計了特定的高阻隔可堆肥複合薄膜，能夠承受高達 121°C 的殺菌溫度，且不會損害封口強度、阻隔性能或其可堆肥認證。",
    faq2Q: "其氧氣與水分阻隔性與標準鋁箔袋相比如何？",
    faq2A: "透過結合專利的金屬化可堆肥層與先進的阻隔塗層，我們實現了可媲美傳統鋁箔結構的氧氣傳輸率 (OTR) 和水氣傳輸率 (WVTR)，確保安全且長效的保存期限。",
    faq3Q: "你們的可堆肥袋可以在我們現有的充填設備上運行嗎？",
    faq3A: "絕對可以。我們對薄膜的剛性、抗拉強度和摩擦係數 (COF) 進行了精準的工程設計，使其與傳統塑膠特性相符，讓您只需進行最少的參數調整，即可在現有的自動化充填線上順暢地高速運行。"
  }
};

const PAGE_NAME = "CompostableBabyFoodBagsPage";

export default function CompostableBabyFoodBagsPage() {
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
